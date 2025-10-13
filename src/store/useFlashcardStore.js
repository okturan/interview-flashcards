import { create } from 'zustand';
import { storageService } from '../services/storage';
import { selectCardsForReview } from '../services/spacedRepetition';
import { generateId } from '../utils/helpers';
import { SESSION_CONFIGS } from '../utils/constants';

export const useFlashcardStore = create((set, get) => ({
  // State
  allCards: [],
  allCardProgress: [],
  currentCard: null,
  sessionCards: [],
  currentCardIndex: 0,
  sessionType: null,
  sessionActive: false,
  sessionId: null,
  sessionStartTime: null,
  cardsReviewedInSession: 0,
  loading: false,
  error: null,

  // Initialize store - load cards and progress from storage
  initialize: async () => {
    set({ loading: true, error: null });
    try {
      const cards = await storageService.getAllCards();
      const cardProgress = await storageService.getAllCardProgress();

      set({
        allCards: cards,
        allCardProgress: cardProgress,
        loading: false
      });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error('Failed to initialize flashcard store:', error);
    }
  },

  // Load all cards
  loadCards: async () => {
    try {
      const cards = await storageService.getAllCards();
      set({ allCards: cards });
    } catch (error) {
      set({ error: error.message });
      console.error('Failed to load cards:', error);
    }
  },

  // Load all card progress
  loadCardProgress: async () => {
    try {
      const cardProgress = await storageService.getAllCardProgress();
      set({ allCardProgress: cardProgress });
    } catch (error) {
      set({ error: error.message });
      console.error('Failed to load card progress:', error);
    }
  },

  // Start a new study session
  startSession: async (sessionType, options = {}) => {
    const state = get();
    const config = SESSION_CONFIGS[sessionType];

    if (!config) {
      console.error('Invalid session type:', sessionType);
      return;
    }

    // Select cards based on session type and options
    let selectedCards = [];

    if (sessionType === 'weakSpot') {
      // Focus on low confidence cards
      const lowConfProgress = state.allCardProgress.filter(cp =>
        ['unknown', 'partial'].includes(cp.confidence)
      );
      const lowConfCardIds = new Set(lowConfProgress.map(cp => cp.cardId));
      const lowConfCards = state.allCards.filter(card => lowConfCardIds.has(card.id));
      selectedCards = selectCardsForReview(
        lowConfCards.length > 0 ? lowConfCards : state.allCards,
        state.allCardProgress,
        { ...options, count: config.cardCount }
      );
    } else if (sessionType === 'interview' && config.mixedDifficulty) {
      // Interview mode: Mix difficulties (30% junior, 40% mid, 30% senior)
      const juniorCount = Math.ceil(config.cardCount * 0.3);
      const midCount = Math.ceil(config.cardCount * 0.4);
      const seniorCount = config.cardCount - juniorCount - midCount;

      const juniorCards = selectCardsForReview(
        state.allCards,
        state.allCardProgress,
        { ...options, difficultyFilter: 'junior', count: juniorCount }
      );
      const midCards = selectCardsForReview(
        state.allCards,
        state.allCardProgress,
        { ...options, difficultyFilter: 'mid', count: midCount }
      );
      const seniorCards = selectCardsForReview(
        state.allCards,
        state.allCardProgress,
        { ...options, difficultyFilter: 'senior', count: seniorCount }
      );

      selectedCards = [...juniorCards, ...midCards, ...seniorCards];
      // Shuffle to mix difficulties
      selectedCards = selectedCards.sort(() => Math.random() - 0.5);
    } else if (config.difficulty) {
      // Difficulty-specific session (junior/mid/senior)
      selectedCards = selectCardsForReview(
        state.allCards,
        state.allCardProgress,
        { ...options, difficultyFilter: config.difficulty, count: config.cardCount }
      );
    } else if (sessionType === 'deepDive' && options.topicFilter) {
      // Single topic focus
      selectedCards = selectCardsForReview(
        state.allCards,
        state.allCardProgress,
        { ...options, count: config.cardCount }
      );
    } else {
      // Default selection
      selectedCards = selectCardsForReview(
        state.allCards,
        state.allCardProgress,
        { ...options, count: config.cardCount }
      );
    }

    const sessionId = generateId();

    set({
      sessionCards: selectedCards,
      currentCard: selectedCards[0] || null,
      currentCardIndex: 0,
      sessionType,
      sessionActive: true,
      sessionId,
      sessionStartTime: new Date(),
      cardsReviewedInSession: 0
    });

    // Save session to storage
    await storageService.saveSession({
      id: sessionId,
      startTime: new Date(),
      sessionType,
      topicFocus: options.topicFilter,
      cardsReviewed: 0,
      accuracyRate: 0,
      xpEarned: 0,
      completed: false
    });
  },

  // Move to next card
  nextCard: () => {
    const state = get();
    const nextIndex = state.currentCardIndex + 1;

    if (nextIndex < state.sessionCards.length) {
      set({
        currentCardIndex: nextIndex,
        currentCard: state.sessionCards[nextIndex]
      });
    } else {
      // Session complete
      get().endSession();
    }
  },

  // Submit confidence rating for current card
  submitConfidence: async (confidence, responseTime) => {
    const state = get();
    if (!state.currentCard || !state.sessionId) return;

    // This will be handled by progressStore
    // Just increment cards reviewed
    set({
      cardsReviewedInSession: state.cardsReviewedInSession + 1
    });
  },

  // End current session
  endSession: async () => {
    const state = get();

    if (state.sessionId) {
      // Update session in storage
      const session = await storageService.getSession(state.sessionId);
      if (session) {
        await storageService.saveSession({
          ...session,
          endTime: new Date(),
          cardsReviewed: state.cardsReviewedInSession,
          completed: true
        });
      }
    }

    set({
      sessionActive: false,
      currentCard: null,
      sessionCards: [],
      currentCardIndex: 0,
      sessionType: null,
      sessionId: null,
      sessionStartTime: null,
      cardsReviewedInSession: 0
    });
  },

  // Get cards remaining in session
  getCardsRemaining: () => {
    const state = get();
    return state.sessionCards.length - state.currentCardIndex - 1;
  },

  // Get session progress percentage
  getSessionProgress: () => {
    const state = get();
    if (state.sessionCards.length === 0) return 0;
    return Math.round(((state.currentCardIndex + 1) / state.sessionCards.length) * 100);
  },

  // Get due cards count
  getDueCardsCount: () => {
    const state = get();
    const now = new Date();
    return state.allCardProgress.filter(cp =>
      new Date(cp.nextReviewDate) <= now
    ).length;
  },

  // Get new cards count (never reviewed)
  getNewCardsCount: () => {
    const state = get();
    const reviewedCardIds = new Set(state.allCardProgress.map(cp => cp.cardId));
    return state.allCards.filter(card => !reviewedCardIds.has(card.id)).length;
  },

  // Get cards by topic
  getCardsByTopic: (topic) => {
    const state = get();
    return state.allCards.filter(card => card.topic === topic);
  },

  // Reset store
  reset: () => {
    set({
      allCards: [],
      allCardProgress: [],
      currentCard: null,
      sessionCards: [],
      currentCardIndex: 0,
      sessionType: null,
      sessionActive: false,
      sessionId: null,
      sessionStartTime: null,
      cardsReviewedInSession: 0,
      loading: false,
      error: null
    });
  }
}));
