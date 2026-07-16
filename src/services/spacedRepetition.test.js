import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  calculateNextReview,
  getDueCards,
  initializeCardProgress,
  selectCardsForReview,
  updateCardProgress
} from './spacedRepetition';

const NOW = new Date('2026-07-16T12:00:00.000Z');

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('calculateNextReview', () => {
  it('resets a failed card to a ten-minute interval and clamps ease', () => {
    const result = calculateNextReview(30, 1.3, 'unknown');

    expect(result.nextInterval).toBeCloseTo(1 / 144);
    expect(result.newEaseFactor).toBe(1.3);
    expect(result.nextReviewDate.toISOString()).toBe('2026-07-16T12:10:00.000Z');
  });

  it('advances successful reviews through one day, six days, then SM-2 growth', () => {
    expect(calculateNextReview(0, 2.5, 'known').nextInterval).toBe(1);
    expect(calculateNextReview(1, 2.5, 'known').nextInterval).toBe(6);

    const mature = calculateNextReview(6, 2.5, 'mastered');
    expect(mature.nextInterval).toBe(15);
    expect(mature.newEaseFactor).toBe(2.5);
  });

  it('treats an unsupported confidence value as a failed recall', () => {
    expect(calculateNextReview(6, 2.5, 'invalid').nextInterval).toBeCloseTo(1 / 144);
  });
});

describe('progress updates', () => {
  it('tracks accuracy, response time, lapses, and a bounded history', () => {
    const initial = {
      ...initializeCardProgress('java-1'),
      confidence: 'mastered',
      reviewCount: 50,
      correctCount: 45,
      averageResponseTime: 4,
      history: Array.from({ length: 50 }, (_, index) => ({ index }))
    };

    const updated = updateCardProgress(initial, 'partial', 14, 'session-1');

    expect(updated.reviewCount).toBe(51);
    expect(updated.correctCount).toBe(45);
    expect(updated.lapses).toBe(1);
    expect(updated.averageResponseTime).toBeCloseTo((4 * 50 + 14) / 51);
    expect(updated.history).toHaveLength(50);
    expect(updated.history.at(-1)).toMatchObject({
      confidence: 'partial',
      responseTime: 14,
      sessionId: 'session-1'
    });
  });

  it('returns only cards whose review time has arrived', () => {
    const cards = [
      { cardId: 'past', nextReviewDate: '2026-07-16T11:59:59.000Z' },
      { cardId: 'now', nextReviewDate: NOW.toISOString() },
      { cardId: 'future', nextReviewDate: '2026-07-16T12:00:01.000Z' }
    ];

    expect(getDueCards(cards).map(card => card.cardId)).toEqual(['past', 'now']);
  });
});

describe('selectCardsForReview', () => {
  it('honors topic and difficulty filters without duplicates', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    const cards = [
      { id: 'due', topic: 'jvm', difficulty: 'mid' },
      { id: 'new', topic: 'jvm', difficulty: 'mid' },
      { id: 'weak', topic: 'jvm', difficulty: 'mid' },
      { id: 'other-topic', topic: 'oop', difficulty: 'mid' },
      { id: 'other-level', topic: 'jvm', difficulty: 'senior' }
    ];
    const progress = [
      { cardId: 'due', confidence: 'known', nextReviewDate: '2026-07-15T12:00:00.000Z' },
      { cardId: 'weak', confidence: 'partial', nextReviewDate: '2026-07-17T12:00:00.000Z' }
    ];

    const selected = selectCardsForReview(cards, progress, {
      topicFilter: 'jvm',
      difficultyFilter: 'mid',
      count: 3
    });

    expect(selected.map(card => card.id).sort()).toEqual(['due', 'new', 'weak']);
    expect(new Set(selected.map(card => card.id)).size).toBe(selected.length);
  });
});
