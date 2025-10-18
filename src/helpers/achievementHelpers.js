import { ACHIEVEMENTS } from '../utils/constants';
import { storageService } from '../services/storage';

/**
 * Get progress data for all achievements
 * @param {Object} progressState - State from useProgressStore
 * @returns {Promise<Object>} Map of achievement ID to progress data
 */
export async function getAchievementProgress(progressState) {
  const progressMap = {};

  // Get session counts for session-type achievements
  const allSessions = await storageService.getAllSessions();
  const sessionCounts = {};

  allSessions.forEach(session => {
    if (session.sessionType) {
      sessionCounts[session.sessionType] = (sessionCounts[session.sessionType] || 0) + 1;
    }
  });

  for (const achievement of ACHIEVEMENTS) {
    const { id, requirement } = achievement;
    const isUnlocked = progressState.achievements.includes(id);

    let current = 0;
    let threshold = requirement.threshold;
    let percentage = 0;

    switch (requirement.type) {
      case 'cards':
        // Volume: total cards reviewed
        current = progressState.statistics.totalCardsReviewed;
        percentage = Math.min((current / threshold) * 100, 100);
        break;

      case 'streak':
        // Streak: current streak days
        current = progressState.streak.current;
        percentage = Math.min((current / threshold) * 100, 100);
        break;

      case 'accuracy':
        // Accuracy: overall accuracy rate
        current = Math.round(progressState.statistics.accuracyRate);
        percentage = Math.min((current / threshold) * 100, 100);
        break;

      case 'topic':
        if (requirement.topic) {
          // Specific topic mastery
          current = Math.round(progressState.topicMastery[requirement.topic] || 0);
          percentage = Math.min((current / threshold) * 100, 100);
        } else {
          // All topics average mastery
          const masteryValues = Object.values(progressState.topicMastery);
          if (masteryValues.length > 0) {
            current = Math.round(
              masteryValues.reduce((sum, val) => sum + val, 0) / masteryValues.length
            );
          }
          percentage = Math.min((current / threshold) * 100, 100);
        }
        break;

      case 'session':
        // Session count by type
        const sessionType = requirement.sessionType;
        current = sessionCounts[sessionType] || 0;
        percentage = Math.min((current / threshold) * 100, 100);

        // Check minAccuracy requirement if specified
        if (requirement.minAccuracy && !isUnlocked) {
          const relevantSessions = allSessions.filter(
            s => s.sessionType === sessionType && s.completed && s.accuracyRate
          );

          if (relevantSessions.length > 0) {
            const meetsAccuracy = relevantSessions.some(
              s => s.accuracyRate >= requirement.minAccuracy
            );
            if (!meetsAccuracy) {
              percentage = Math.min(percentage * 0.5, 50); // Cap at 50% if accuracy not met
            }
          }
        }
        break;

      default:
        console.warn(`Unknown achievement type: ${requirement.type}`);
    }

    progressMap[id] = {
      isUnlocked,
      current,
      threshold,
      percentage: Math.round(percentage)
    };
  }

  return progressMap;
}

/**
 * Categorize achievements by type
 * @returns {Object} Map of category name to achievement array
 */
export function categorizeAchievements() {
  const categories = {
    volume: [],
    streak: [],
    accuracy: [],
    mastery: [],
    session: []
  };

  ACHIEVEMENTS.forEach(achievement => {
    const { requirement } = achievement;

    switch (requirement.type) {
      case 'cards':
        categories.volume.push(achievement);
        break;
      case 'streak':
        categories.streak.push(achievement);
        break;
      case 'accuracy':
        categories.accuracy.push(achievement);
        break;
      case 'topic':
        categories.mastery.push(achievement);
        break;
      case 'session':
        categories.session.push(achievement);
        break;
    }
  });

  return categories;
}

/**
 * Get total XP earned from unlocked achievements
 * @param {Array<string>} unlockedIds - Array of unlocked achievement IDs
 * @returns {number} Total XP earned
 */
export function getTotalAchievementXP(unlockedIds) {
  return ACHIEVEMENTS
    .filter(a => unlockedIds.includes(a.id))
    .reduce((sum, a) => sum + a.xpReward, 0);
}

/**
 * Get category translation key
 * @param {string} categoryName - Category name (volume, streak, etc.)
 * @returns {string} Translation key
 */
export function getCategoryTranslationKey(categoryName) {
  const keyMap = {
    volume: 'volume',
    streak: 'streak',
    accuracy: 'accuracy',
    mastery: 'mastery',
    session: 'session'
  };

  return keyMap[categoryName] || categoryName;
}
