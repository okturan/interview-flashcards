import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { storageService } from '../services/storage';
import { updateCardProgress, initializeCardProgress } from '../services/spacedRepetition';
import {
  calculateLevel,
  calculateStreak,
  calculateTopicMastery,
  calculateAccuracy,
  isToday
} from '../utils/helpers';
import { XP_TABLE, ACHIEVEMENTS, DEFAULT_SETTINGS } from '../utils/constants';

export const useProgressStore = create(
  persist(
    (set, get) => ({
      // State
      userId: 'default',
      streak: {
        current: 0,
        longest: 0,
        lastStudyDate: null,
        streakSaveAvailable: true,
        lastStreakSaveUsed: null
      },
      topicMastery: {}, // { [topic]: percentage }
      totalXP: 0,
      dailyGoal: 20,
      todayProgress: 0,
      achievements: [], // Array of achievement IDs
      settings: DEFAULT_SETTINGS,
      statistics: {
        totalCardsReviewed: 0,
        totalStudyTime: 0,
        accuracyRate: 0,
        cardsPerDay: []
      },
      lastActiveAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),

      // Initialize from storage
      initialize: async () => {
        try {
          const progress = await storageService.getProgress('default');
          if (progress) {
            set({
              userId: progress.userId,
              streak: progress.streak,
              topicMastery: Object.fromEntries(progress.topicMastery || new Map()),
              totalXP: progress.totalXP,
              dailyGoal: progress.settings?.dailyGoal || 20,
              todayProgress: 0, // Reset daily
              achievements: progress.achievements,
              settings: progress.settings || DEFAULT_SETTINGS,
              statistics: progress.statistics,
              lastActiveAt: progress.lastActiveAt,
              createdAt: progress.createdAt
            });
          }

          // Update streak
          get().updateStreak();
        } catch (error) {
          console.error('Failed to initialize progress store:', error);
        }
      },

      // Update streak based on last study date
      updateStreak: () => {
        const state = get();
        const { lastStudyDate, current, longest } = state.streak;

        if (!lastStudyDate) {
          // First time studying
          set({
            streak: {
              ...state.streak,
              current: 1,
              longest: 1,
              lastStudyDate: new Date().toISOString()
            }
          });
          return;
        }

        const streakStatus = calculateStreak(lastStudyDate);

        if (streakStatus === 0) {
          // Studied today already
          return;
        } else if (streakStatus === 1) {
          // Studied yesterday, increment streak
          const newStreak = current + 1;
          set({
            streak: {
              ...state.streak,
              current: newStreak,
              longest: Math.max(longest, newStreak),
              lastStudyDate: new Date().toISOString()
            }
          });

          // Award streak XP
          get().addXP(XP_TABLE.streakDay, 'streak');
        } else {
          // Streak broken, reset
          set({
            streak: {
              ...state.streak,
              current: 1,
              lastStudyDate: new Date().toISOString()
            }
          });
        }
      },

      // Record a card review
      recordReview: async (cardId, confidence, responseTime, sessionId, allCards) => {
        const state = get();

        // Get or create card progress
        let cardProgress = await storageService.getCardProgress(cardId);

        if (!cardProgress) {
          cardProgress = initializeCardProgress(cardId);
        }

        // Update card progress
        const updatedProgress = updateCardProgress(
          cardProgress,
          confidence,
          responseTime,
          sessionId
        );

        // Save to storage
        await storageService.updateCardProgress(cardId, updatedProgress);

        // Update statistics
        const newTotalReviewed = state.statistics.totalCardsReviewed + 1;
        const todayProgress = isToday(state.lastActiveAt)
          ? state.todayProgress + 1
          : 1;

        set({
          statistics: {
            ...state.statistics,
            totalCardsReviewed: newTotalReviewed
          },
          todayProgress,
          lastActiveAt: new Date().toISOString()
        });

        // Award XP
        let xp = XP_TABLE.cardReview;
        if (confidence === 'mastered') {
          xp = XP_TABLE.cardMastered;
        }
        get().addXP(xp, 'review');

        // Update streak if this is first review today
        if (!isToday(state.lastActiveAt)) {
          get().updateStreak();
        }

        // Recalculate topic mastery
        if (allCards) {
          await get().updateTopicMastery(allCards);
        }

        // Check achievements
        get().checkAchievements();
      },

      // Add XP with multipliers
      addXP: (baseXP, source) => {
        const state = get();
        let finalXP = baseXP;

        // Streak multiplier (max 2.0x)
        const streakMultiplier = 1 + Math.min(state.streak.current * 0.1, 1.0);
        finalXP *= streakMultiplier;

        // Accuracy multiplier
        if (state.statistics.accuracyRate > 0) {
          const accuracyMultiplier = state.statistics.accuracyRate / 100;
          finalXP *= accuracyMultiplier;
        }

        set({ totalXP: Math.round(state.totalXP + finalXP) });
        get().saveProgress();
      },

      // Update topic mastery
      updateTopicMastery: async (allCards) => {
        const allCardProgress = await storageService.getAllCardProgress();
        const cardProgressMap = new Map(
          allCardProgress.map(cp => [cp.cardId, cp])
        );

        const topics = [
          'basics',
          'oop',
          'collections',
          'concurrency',
          'jvm',
          'streams',
          'exception_handling',
          'design_patterns',
          'spring',
          'testing'
        ];

        const topicMastery = {};
        topics.forEach(topic => {
          topicMastery[topic] = calculateTopicMastery(
            allCards,
            cardProgressMap,
            topic
          );
        });

        set({ topicMastery });
        get().saveProgress();
      },

      // Check and unlock achievements
      checkAchievements: () => {
        const state = get();

        ACHIEVEMENTS.forEach(achievement => {
          // Skip if already unlocked
          if (state.achievements.includes(achievement.id)) return;

          let shouldUnlock = false;

          switch (achievement.requirement.type) {
            case 'cards':
              shouldUnlock =
                state.statistics.totalCardsReviewed >= achievement.requirement.threshold;
              break;

            case 'streak':
              shouldUnlock = state.streak.current >= achievement.requirement.threshold;
              break;

            case 'accuracy':
              shouldUnlock =
                state.statistics.accuracyRate >= achievement.requirement.threshold &&
                state.statistics.totalCardsReviewed >= 50;
              break;

            case 'topic':
              if (achievement.requirement.topic) {
                shouldUnlock =
                  state.topicMastery[achievement.requirement.topic] >=
                  achievement.requirement.threshold;
              } else {
                // All topics mastery
                const avgMastery =
                  Object.values(state.topicMastery).reduce((a, b) => a + b, 0) /
                  Object.values(state.topicMastery).length;
                shouldUnlock = avgMastery >= achievement.requirement.threshold;
              }
              break;

            default:
              break;
          }

          if (shouldUnlock) {
            get().unlockAchievement(achievement.id);
          }
        });
      },

      // Unlock an achievement
      unlockAchievement: async (achievementId) => {
        const state = get();

        if (state.achievements.includes(achievementId)) return;

        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (!achievement) return;

        set({
          achievements: [...state.achievements, achievementId]
        });

        // Award XP
        get().addXP(achievement.xpReward, 'achievement');

        // Save achievement to storage with unlock date
        await storageService.saveAchievement({
          ...achievement,
          unlockedAt: new Date().toISOString()
        });

        get().saveProgress();

        // Show notification or celebration effect
        console.log(`🎉 Achievement unlocked: ${achievement.id}`);
      },

      // Complete a session
      completeSession: async (sessionType, cardsReviewed, accuracyRate) => {
        const state = get();

        // Award session XP
        get().addXP(XP_TABLE.sessionComplete, 'session');

        // Update statistics
        set({
          statistics: {
            ...state.statistics,
            accuracyRate: Math.round(
              (state.statistics.accuracyRate + accuracyRate) / 2
            )
          }
        });

        get().saveProgress();
        get().checkAchievements();
      },

      // Use streak save
      useStreakSave: () => {
        const state = get();

        if (!state.streak.streakSaveAvailable) return false;

        set({
          streak: {
            ...state.streak,
            streakSaveAvailable: false,
            lastStreakSaveUsed: new Date().toISOString(),
            lastStudyDate: new Date().toISOString()
          }
        });

        get().saveProgress();
        return true;
      },

      // Update settings
      updateSettings: (newSettings) => {
        const state = get();
        set({
          settings: { ...state.settings, ...newSettings }
        });
        get().saveProgress();
      },

      // Save progress to storage
      saveProgress: async () => {
        const state = get();

        const progress = {
          userId: state.userId,
          cardProgress: new Map(),
          topicMastery: new Map(Object.entries(state.topicMastery)),
          streak: state.streak,
          statistics: state.statistics,
          achievements: state.achievements,
          totalXP: state.totalXP,
          settings: state.settings,
          createdAt: state.createdAt,
          lastActiveAt: new Date().toISOString()
        };

        await storageService.saveProgress(progress);
      },

      // Get current level
      getCurrentLevel: () => {
        return calculateLevel(get().totalXP);
      },

      // Get all progress data for export
      getAllProgress: async () => {
        const state = get();
        return {
          userId: state.userId,
          topicMastery: state.topicMastery,
          streak: state.streak,
          statistics: state.statistics,
          achievements: state.achievements,
          totalXP: state.totalXP,
          settings: state.settings,
          createdAt: state.createdAt,
          lastActiveAt: state.lastActiveAt
        };
      },

      // Reset progress (for testing/demo)
      reset: () => {
        set({
          userId: 'default',
          streak: {
            current: 0,
            longest: 0,
            lastStudyDate: null,
            streakSaveAvailable: true,
            lastStreakSaveUsed: null
          },
          topicMastery: {},
          totalXP: 0,
          dailyGoal: 20,
          todayProgress: 0,
          achievements: [],
          settings: DEFAULT_SETTINGS,
          statistics: {
            totalCardsReviewed: 0,
            totalStudyTime: 0,
            accuracyRate: 0,
            cardsPerDay: []
          },
          lastActiveAt: new Date().toISOString(),
          createdAt: new Date().toISOString()
        });
      }
    }),
    {
      name: 'progress-storage',
      partialize: (state) => ({
        userId: state.userId,
        streak: state.streak,
        topicMastery: state.topicMastery,
        totalXP: state.totalXP,
        dailyGoal: state.dailyGoal,
        achievements: state.achievements,
        settings: state.settings,
        statistics: state.statistics,
        lastActiveAt: state.lastActiveAt,
        createdAt: state.createdAt
      })
    }
  )
);
