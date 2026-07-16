import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  calculateAccuracy,
  calculateReadinessScore,
  calculateTopicMastery,
  xpProgress
} from './helpers';

afterEach(() => {
  vi.useRealTimers();
});

describe('progress calculations', () => {
  it('calculates topic mastery from reviewed and unreviewed cards', () => {
    const cards = [
      { id: '1', topic: 'jvm' },
      { id: '2', topic: 'jvm' },
      { id: '3', topic: 'oop' }
    ];
    const progress = new Map([
      ['1', { confidence: 'mastered' }],
      ['3', { confidence: 'known' }]
    ]);

    expect(calculateTopicMastery(cards, progress, 'jvm')).toBe(50);
    expect(calculateTopicMastery(cards, progress, 'missing')).toBe(0);
  });

  it('calculates cumulative review accuracy', () => {
    const progress = new Map([
      ['1', { reviewCount: 8, correctCount: 6 }],
      ['2', { reviewCount: 2, correctCount: 1 }]
    ]);

    expect(calculateAccuracy(progress)).toBe(70);
    expect(calculateAccuracy(new Map())).toBe(0);
  });

  it('reads readiness mastery from persisted objects and runtime Maps', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-16T12:00:00.000Z'));
    const base = {
      streak: { current: 4 },
      lastActiveAt: '2026-07-16T10:00:00.000Z'
    };
    const weights = { jvm: 0.6, concurrency: 0.4 };
    const mastery = { jvm: 80, concurrency: 50 };

    expect(calculateReadinessScore({ ...base, topicMastery: mastery }, weights)).toBe(70);
    expect(calculateReadinessScore({ ...base, topicMastery: new Map(Object.entries(mastery)) }, weights)).toBe(70);
  });

  it('keeps XP progress inside the current level bounds', () => {
    expect(xpProgress(0)).toMatchObject({ currentLevel: 0, progress: 0 });
    expect(xpProgress(100).progress).toBeGreaterThanOrEqual(0);
    expect(xpProgress(100).progress).toBeLessThanOrEqual(100);
  });
});
