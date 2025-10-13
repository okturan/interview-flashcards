/**
 * Spaced Repetition Algorithm (Modified SuperMemo SM-2)
 * Determines when a flashcard should be reviewed next based on user confidence
 */

/**
 * Calculate the next review date and ease factor for a card
 * @param {number} currentInterval - Current interval in days
 * @param {number} easeFactor - Current ease factor (1.3 - 2.5)
 * @param {string} confidence - User's confidence level ('unknown', 'partial', 'known', 'mastered')
 * @returns {{ nextInterval: number, newEaseFactor: number, nextReviewDate: Date }}
 */
export function calculateNextReview(currentInterval, easeFactor, confidence) {
  // Map confidence levels to quality scores (0-5 scale)
  const qualityMap = {
    'unknown': 0,    // Complete failure
    'partial': 3,    // Recalled with effort
    'known': 4,      // Easy recall
    'mastered': 5    // Perfect, effortless
  };

  const quality = qualityMap[confidence] || 0;

  // Update ease factor based on performance
  // Formula: EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
  let newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Clamp ease factor between 1.3 and 2.5
  newEaseFactor = Math.max(1.3, Math.min(2.5, newEaseFactor));

  // Calculate next interval
  let nextInterval;

  if (quality < 3) {
    // Failed recall - reset to beginning
    nextInterval = 1 / 144; // 10 minutes (1/144 of a day)
  } else {
    if (currentInterval === 0 || currentInterval === 1 / 144) {
      // First successful recall
      nextInterval = 1; // 1 day
    } else if (currentInterval === 1) {
      // Second successful recall
      nextInterval = 6; // 6 days
    } else {
      // Subsequent reviews - multiply by ease factor
      nextInterval = Math.round(currentInterval * newEaseFactor);
    }
  }

  // Calculate the actual next review date
  const nextReviewDate = new Date();
  nextReviewDate.setTime(nextReviewDate.getTime() + (nextInterval * 24 * 60 * 60 * 1000));

  return {
    nextInterval,
    newEaseFactor,
    nextReviewDate
  };
}

/**
 * Initialize card progress for a new card
 * @param {string} cardId - The card ID
 * @returns {Object} Initial card progress
 */
export function initializeCardProgress(cardId) {
  return {
    cardId,
    confidence: 'unknown',
    reviewCount: 0,
    correctCount: 0,
    lastReviewed: new Date(),
    nextReviewDate: new Date(), // Due immediately
    easeFactor: 2.5, // Starting ease factor
    interval: 0, // No interval yet
    lapses: 0,
    averageResponseTime: 0,
    history: []
  };
}

/**
 * Update card progress after a review
 * @param {Object} cardProgress - Current card progress
 * @param {string} confidence - User's confidence level
 * @param {number} responseTime - Time taken to answer (seconds)
 * @param {string} sessionId - Current session ID
 * @returns {Object} Updated card progress
 */
export function updateCardProgress(cardProgress, confidence, responseTime, sessionId) {
  const { nextInterval, newEaseFactor, nextReviewDate } = calculateNextReview(
    cardProgress.interval,
    cardProgress.easeFactor,
    confidence
  );

  // Check if this is a lapse (went from known/mastered back to unknown/partial)
  const wasConfident = ['known', 'mastered'].includes(cardProgress.confidence);
  const isNotConfident = ['unknown', 'partial'].includes(confidence);
  const lapses = wasConfident && isNotConfident
    ? cardProgress.lapses + 1
    : cardProgress.lapses;

  // Update average response time
  const totalTime = cardProgress.averageResponseTime * cardProgress.reviewCount;
  const newAverageResponseTime = (totalTime + responseTime) / (cardProgress.reviewCount + 1);

  // Add to history
  const historyEntry = {
    timestamp: new Date(),
    confidence,
    responseTime,
    sessionId
  };

  // Count as correct if confidence is 'known' or 'mastered'
  const isCorrect = ['known', 'mastered'].includes(confidence);

  return {
    ...cardProgress,
    confidence,
    reviewCount: cardProgress.reviewCount + 1,
    correctCount: cardProgress.correctCount + (isCorrect ? 1 : 0),
    lastReviewed: new Date(),
    nextReviewDate,
    easeFactor: newEaseFactor,
    interval: nextInterval,
    lapses,
    averageResponseTime: newAverageResponseTime,
    history: [...cardProgress.history, historyEntry].slice(-50) // Keep last 50 reviews
  };
}

/**
 * Get cards due for review
 * @param {Array} allCardProgress - Array of all card progress objects
 * @returns {Array} Cards that are due for review
 */
export function getDueCards(allCardProgress) {
  const now = new Date();
  return allCardProgress.filter(cp =>
    new Date(cp.nextReviewDate) <= now
  );
}

/**
 * Get new cards (never reviewed)
 * @param {Array} allCards - All flashcards
 * @param {Array} allCardProgress - All card progress
 * @returns {Array} Cards that have never been reviewed
 */
export function getNewCards(allCards, allCardProgress) {
  const reviewedCardIds = new Set(allCardProgress.map(cp => cp.cardId));
  return allCards.filter(card => !reviewedCardIds.has(card.id));
}

/**
 * Select next card to review based on priority
 * Priority order:
 * 1. Overdue cards (past nextReviewDate)
 * 2. New cards (never reviewed)
 * 3. Cards with low confidence
 * 4. Random selection for variety
 *
 * @param {Array} allCards - All flashcards
 * @param {Array} allCardProgress - All card progress
 * @param {Object} options - Selection options (topicFilter, difficultyFilter, count)
 * @returns {Array} Selected cards
 */
export function selectCardsForReview(allCards, allCardProgress, options = {}) {
  const { topicFilter, difficultyFilter, count = 10 } = options;

  // Filter cards by topic and difficulty if specified
  let filteredCards = allCards;
  if (topicFilter) {
    filteredCards = filteredCards.filter(card => card.topic === topicFilter);
  }
  if (difficultyFilter) {
    filteredCards = filteredCards.filter(card => card.difficulty === difficultyFilter);
  }

  // Get due cards
  const dueCardProgress = getDueCards(allCardProgress);
  const dueCards = filteredCards.filter(card =>
    dueCardProgress.some(cp => cp.cardId === card.id)
  );

  // Get new cards
  const newCards = getNewCards(filteredCards, allCardProgress);

  // Get low confidence cards
  const lowConfidenceProgress = allCardProgress.filter(cp =>
    ['unknown', 'partial'].includes(cp.confidence)
  );
  const lowConfidenceCards = filteredCards.filter(card =>
    lowConfidenceProgress.some(cp => cp.cardId === card.id)
  );

  // Build selection pool with priorities
  const selected = [];

  // Priority 1: Due cards (up to 50% of count)
  const dueCount = Math.min(dueCards.length, Math.ceil(count * 0.5));
  selected.push(...shuffle(dueCards).slice(0, dueCount));

  // Priority 2: New cards (up to 30% of count)
  if (selected.length < count) {
    const newCount = Math.min(newCards.length, Math.ceil(count * 0.3));
    selected.push(...shuffle(newCards).slice(0, newCount));
  }

  // Priority 3: Low confidence cards (up to 20% of count)
  if (selected.length < count) {
    const lowConfCount = Math.min(
      lowConfidenceCards.filter(card => !selected.includes(card)).length,
      Math.ceil(count * 0.2)
    );
    const remainingLowConf = lowConfidenceCards.filter(card => !selected.includes(card));
    selected.push(...shuffle(remainingLowConf).slice(0, lowConfCount));
  }

  // Fill remaining slots with random cards
  if (selected.length < count) {
    const remaining = filteredCards.filter(card => !selected.includes(card));
    const needed = count - selected.length;
    selected.push(...shuffle(remaining).slice(0, needed));
  }

  return shuffle(selected).slice(0, count);
}

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
