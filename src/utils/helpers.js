import { differenceInDays, differenceInCalendarDays, format } from 'date-fns';

/**
 * Calculate user's current level based on total XP
 * Formula: level = floor((totalXP / 100) ^ (1/1.5))
 */
export function calculateLevel(totalXP) {
  return Math.floor(Math.pow(totalXP / 100, 1 / 1.5));
}

/**
 * Calculate XP required for next level
 */
export function xpForNextLevel(currentLevel) {
  return Math.floor(100 * Math.pow(currentLevel + 1, 1.5));
}

/**
 * Calculate XP progress to next level
 */
export function xpProgress(totalXP) {
  const currentLevel = calculateLevel(totalXP);
  const currentLevelXP = Math.floor(100 * Math.pow(currentLevel, 1.5));
  const nextLevelXP = xpForNextLevel(currentLevel);
  const progress = ((totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return {
    currentLevel,
    nextLevel: currentLevel + 1,
    currentLevelXP,
    nextLevelXP,
    progress: Math.min(100, Math.max(0, progress)),
    xpToNextLevel: nextLevelXP - totalXP
  };
}

/**
 * Calculate streak from last study date
 */
export function calculateStreak(lastStudyDate) {
  if (!lastStudyDate) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastStudy = new Date(lastStudyDate);
  lastStudy.setHours(0, 0, 0, 0);

  const daysDiff = differenceInCalendarDays(today, lastStudy);

  // If studied today or yesterday, streak continues
  if (daysDiff <= 1) {
    return daysDiff;
  }

  // Otherwise streak is broken
  return -1;
}

/**
 * Calculate interview readiness score
 */
export function calculateReadinessScore(progress, topicWeights) {
  let weightedScore = 0;

  for (const [topic, weight] of Object.entries(topicWeights)) {
    const mastery = progress.topicMastery?.get?.(topic) || 0;
    weightedScore += mastery * weight;
  }

  // Bonus for consistency (streak)
  const streakBonus = Math.min((progress.streak?.current || 0) * 0.5, 10);

  // Penalty for recent inactivity
  const daysSinceActive = differenceInDays(new Date(), new Date(progress.lastActiveAt));
  const activityPenalty = Math.max(0, daysSinceActive - 3) * 2;

  return Math.max(0, Math.min(100, weightedScore + streakBonus - activityPenalty));
}

/**
 * Calculate topic mastery from card progress
 */
export function calculateTopicMastery(cards, cardProgress, topic) {
  const topicCards = cards.filter(card => card.topic === topic);
  if (topicCards.length === 0) return 0;

  let totalScore = 0;
  const confidenceScores = {
    unknown: 0,
    partial: 0.33,
    known: 0.66,
    mastered: 1.0
  };

  topicCards.forEach(card => {
    const progress = cardProgress.get(card.id);
    if (progress) {
      totalScore += confidenceScores[progress.confidence] || 0;
    }
  });

  return Math.round((totalScore / topicCards.length) * 100);
}

/**
 * Calculate accuracy rate
 */
export function calculateAccuracy(cardProgress) {
  const progressArray = Array.from(cardProgress.values());
  if (progressArray.length === 0) return 0;

  const totalReviews = progressArray.reduce((sum, cp) => sum + cp.reviewCount, 0);
  const correctReviews = progressArray.reduce((sum, cp) => sum + cp.correctCount, 0);

  if (totalReviews === 0) return 0;
  return Math.round((correctReviews / totalReviews) * 100);
}

/**
 * Format study time in human-readable format
 */
export function formatStudyTime(minutes) {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Generate a unique ID
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format date for display
 */
export function formatDate(date) {
  return format(new Date(date), 'MMM d, yyyy');
}

/**
 * Check if date is today
 */
export function isToday(date) {
  const today = new Date();
  const checkDate = new Date(date);
  return (
    today.getFullYear() === checkDate.getFullYear() &&
    today.getMonth() === checkDate.getMonth() &&
    today.getDate() === checkDate.getDate()
  );
}

/**
 * Get color class for Tailwind based on color name
 */
export function getColorClass(color, type = 'bg') {
  const colorMap = {
    red: {
      bg: 'bg-red-500',
      text: 'text-red-600',
      border: 'border-red-500',
      hover: 'hover:bg-red-600'
    },
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-500',
      hover: 'hover:bg-blue-600'
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-600',
      border: 'border-green-500',
      hover: 'hover:bg-green-600'
    },
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-600',
      border: 'border-yellow-500',
      hover: 'hover:bg-yellow-600'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      border: 'border-purple-500',
      hover: 'hover:bg-purple-600'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      border: 'border-orange-500',
      hover: 'hover:bg-orange-600'
    },
    cyan: {
      bg: 'bg-cyan-500',
      text: 'text-cyan-600',
      border: 'border-cyan-500',
      hover: 'hover:bg-cyan-600'
    },
    pink: {
      bg: 'bg-pink-500',
      text: 'text-pink-600',
      border: 'border-pink-500',
      hover: 'hover:bg-pink-600'
    },
    lime: {
      bg: 'bg-lime-500',
      text: 'text-lime-600',
      border: 'border-lime-500',
      hover: 'hover:bg-lime-600'
    },
    teal: {
      bg: 'bg-teal-500',
      text: 'text-teal-600',
      border: 'border-teal-500',
      hover: 'hover:bg-teal-600'
    }
  };

  return colorMap[color]?.[type] || colorMap.blue[type];
}

/**
 * Clamp a number between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Debounce function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
