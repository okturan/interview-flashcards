// XP and Leveling Constants
export const XP_TABLE = {
  cardReview: 10,
  cardMastered: 50,
  sessionComplete: 25,
  streakDay: 20,
  topicMastery: 100,
  achievementUnlock: 200
};

// Session Type Configurations
// Note: name and description come from i18n (dashboard:sessions.{key}.name/description)
export const SESSION_CONFIGS = {
  quick5: {
    cardCount: 5,
    estimatedTime: 2,
    icon: 'Zap'
  },
  juniorLevel: {
    cardCount: 15,
    estimatedTime: 10,
    icon: 'BookOpen',
    difficulty: 'junior',
    badge: 'green'
  },
  midLevel: {
    cardCount: 15,
    estimatedTime: 12,
    icon: 'TrendingUp',
    difficulty: 'mid',
    badge: 'yellow'
  },
  seniorLevel: {
    cardCount: 15,
    estimatedTime: 15,
    icon: 'Award',
    difficulty: 'senior',
    badge: 'red'
  },
  deepDive: {
    cardCount: 18,
    estimatedTime: 15,
    icon: 'BookOpen',
    requiresTopicSelection: true
  },
  weakSpot: {
    cardCount: 10,
    estimatedTime: 10,
    icon: 'Target'
  },
  interview: {
    cardCount: 20,
    estimatedTime: 25,
    icon: 'Briefcase',
    mixedDifficulty: true
  },
  random: {
    cardCount: 15,
    estimatedTime: 12,
    icon: 'Shuffle'
  }
};

// Topic Configurations
// Note: names come from i18n (topics:{key})
export const TOPIC_INFO = {
  basics: {
    color: 'blue',
    icon: 'Coffee'
  },
  oop: {
    color: 'purple',
    icon: 'Box'
  },
  collections: {
    color: 'green',
    icon: 'Database'
  },
  concurrency: {
    color: 'red',
    icon: 'Cpu'
  },
  jvm: {
    color: 'yellow',
    icon: 'HardDrive'
  },
  streams: {
    color: 'cyan',
    icon: 'GitBranch'
  },
  exception_handling: {
    color: 'orange',
    icon: 'AlertTriangle'
  },
  design_patterns: {
    color: 'pink',
    icon: 'Layers'
  },
  spring: {
    color: 'lime',
    icon: 'Leaf'
  },
  testing: {
    color: 'teal',
    icon: 'CheckCircle'
  },
  java8: {
    color: 'indigo',
    icon: 'Zap'
  },
  generics: {
    color: 'violet',
    icon: 'Code'
  },
  string: {
    color: 'amber',
    icon: 'Type'
  },
  arrays: {
    color: 'emerald',
    icon: 'List'
  },
  wrapper: {
    color: 'rose',
    icon: 'Package'
  },
  io: {
    color: 'sky',
    icon: 'FileText'
  },
  constructor: {
    color: 'fuchsia',
    icon: 'Wrench'
  },
  access: {
    color: 'slate',
    icon: 'Lock'
  }
};

// Interview Readiness Score Weights
export const TOPIC_WEIGHTS = {
  oop: 0.15,
  collections: 0.20,
  concurrency: 0.15,
  streams: 0.10,
  jvm: 0.10,
  design_patterns: 0.10,
  exception_handling: 0.08,
  spring: 0.07,
  testing: 0.05,
  basics: 0.00  // Not weighted for senior roles
};

// Achievements Data
// Note: name and description come from i18n (achievements:list.{id}.name/description)
export const ACHIEVEMENTS = [
  {
    id: 'first-steps',
    icon: '🎯',
    requirement: { type: 'cards', threshold: 25 },
    xpReward: 100
  },
  {
    id: 'hundred-club',
    icon: '💯',
    requirement: { type: 'cards', threshold: 100 },
    xpReward: 250
  },
  {
    id: 'thousand-club',
    icon: '🏆',
    requirement: { type: 'cards', threshold: 1000 },
    xpReward: 1000
  },
  {
    id: 'dedicated',
    icon: '🔥',
    requirement: { type: 'streak', threshold: 3 },
    xpReward: 150
  },
  {
    id: 'committed',
    icon: '🔥🔥',
    requirement: { type: 'streak', threshold: 7 },
    xpReward: 300
  },
  {
    id: 'unstoppable',
    icon: '🔥🔥🔥',
    requirement: { type: 'streak', threshold: 14 },
    xpReward: 500
  },
  {
    id: 'legend',
    icon: '👑',
    requirement: { type: 'streak', threshold: 30 },
    xpReward: 1000
  },
  {
    id: 'sharp-mind',
    icon: '🧠',
    requirement: { type: 'accuracy', threshold: 80 },
    xpReward: 300
  },
  {
    id: 'perfectionist',
    icon: '💎',
    requirement: { type: 'accuracy', threshold: 95 },
    xpReward: 500
  },
  {
    id: 'collections-expert',
    icon: '📚',
    requirement: { type: 'topic', threshold: 90, topic: 'collections' },
    xpReward: 400
  },
  {
    id: 'concurrency-ninja',
    icon: '⚡',
    requirement: { type: 'topic', threshold: 90, topic: 'concurrency' },
    xpReward: 400
  },
  {
    id: 'java-master',
    icon: '🎓',
    requirement: { type: 'topic', threshold: 85 },
    xpReward: 1000
  },
  {
    id: 'coffee-break-warrior',
    icon: '☕',
    requirement: { type: 'session', threshold: 10, sessionType: 'quick5' },
    xpReward: 200
  },
  {
    id: 'deep-thinker',
    icon: '🤔',
    requirement: { type: 'session', threshold: 5, sessionType: 'deepDive' },
    xpReward: 250
  },
  {
    id: 'interview-ready',
    icon: '🎯',
    requirement: { type: 'session', threshold: 1, sessionType: 'interview', minAccuracy: 80 },
    xpReward: 500
  }
];

// Confidence Level Mappings
// Note: label and nextReview come from i18n (session:confidence.levels.{level}.label/nextReview)
export const CONFIDENCE_CONFIG = {
  unknown: {
    emoji: '😰',
    value: 1,
    color: 'red'
  },
  partial: {
    emoji: '🤔',
    value: 2,
    color: 'yellow'
  },
  known: {
    emoji: '✅',
    value: 3,
    color: 'green'
  },
  mastered: {
    emoji: '🔥',
    value: 4,
    color: 'purple'
  }
};

// Difficulty Colors
export const DIFFICULTY_COLORS = {
  junior: 'green',
  mid: 'yellow',
  senior: 'red'
};

// Default User Settings
export const DEFAULT_SETTINGS = {
  dailyGoal: 20,
  sessionDuration: 15,
  notificationsEnabled: true,
  soundEffectsEnabled: true,
  theme: 'light'
};

// Keyboard Shortcuts
export const KEYBOARD_SHORTCUTS = {
  FLIP_CARD: ' ', // Spacebar
  CONFIDENCE_1: '1',
  CONFIDENCE_2: '2',
  CONFIDENCE_3: '3',
  CONFIDENCE_4: '4',
  NEXT_CARD: 'ArrowRight',
  PREV_CARD: 'ArrowLeft'
};
