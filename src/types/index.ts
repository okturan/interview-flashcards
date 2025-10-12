// Core Types for Java Interview Flashcard System

export enum Topic {
  BASICS = 'basics',
  OOP = 'oop',
  COLLECTIONS = 'collections',
  CONCURRENCY = 'concurrency',
  JVM = 'jvm',
  STREAMS = 'streams',
  EXCEPTION_HANDLING = 'exception_handling',
  DESIGN_PATTERNS = 'design_patterns',
  SPRING = 'spring',
  TESTING = 'testing'
}

export type Difficulty = 'junior' | 'mid' | 'senior';

export type ConfidenceLevel = 'unknown' | 'partial' | 'known' | 'mastered';

export type SessionType = 'quick5' | 'deepDive' | 'weakSpot' | 'interview' | 'random';

export interface CodeExample {
  code: string;
  language: 'java';
  output?: string;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  explanation?: string;
  codeExample?: CodeExample;
  topic: Topic;
  difficulty: Difficulty;
  tags: string[];
  commonPitfalls?: string[];
  realWorldUse?: string;
  relatedConcepts?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewHistory {
  timestamp: Date;
  confidence: ConfidenceLevel;
  responseTime: number;
  sessionId: string;
}

export interface CardProgress {
  cardId: string;
  confidence: ConfidenceLevel;
  reviewCount: number;
  correctCount: number;
  lastReviewed: Date;
  nextReviewDate: Date;
  easeFactor: number; // for spaced repetition (1.3 - 2.5)
  interval: number; // days until next review
  lapses: number; // times moved from known to unknown
  averageResponseTime: number; // seconds
  history: ReviewHistory[];
}

export interface StreakData {
  current: number;
  longest: number;
  lastStudyDate: Date;
  streakSaveAvailable: boolean;
  lastStreakSaveUsed?: Date;
}

export interface Statistics {
  totalCardsReviewed: number;
  totalStudyTime: number; // minutes
  accuracyRate: number; // 0-100
  cardsPerDay: number[];
}

export interface UserSettings {
  dailyGoal: number;
  sessionDuration: number;
  notificationsEnabled: boolean;
  soundEffectsEnabled: boolean;
  theme: 'light' | 'dark';
}

export interface UserProgress {
  userId: string;
  cardProgress: Map<string, CardProgress>;
  topicMastery: Map<Topic, number>; // topic -> 0-100
  streak: StreakData;
  statistics: Statistics;
  achievements: string[]; // achievement IDs
  totalXP: number;
  settings: UserSettings;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface StudySession {
  id: string;
  startTime: Date;
  endTime?: Date;
  cardsReviewed: number;
  sessionType: SessionType;
  topicFocus?: Topic;
  accuracyRate: number;
  xpEarned: number;
  completed: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: {
    type: 'streak' | 'cards' | 'accuracy' | 'topic' | 'session';
    threshold: number;
    topic?: Topic;
  };
  xpReward: number;
  unlockedAt?: Date;
}

export interface XPEvent {
  action: string;
  baseXP: number;
  multipliers?: number[];
}
