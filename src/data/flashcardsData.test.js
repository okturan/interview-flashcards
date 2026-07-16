import { describe, expect, it } from 'vitest';
import { flashcardsData } from './flashcardsData';
import { SESSION_CONFIGS, TOPIC_INFO } from '../utils/constants';

const VALID_DIFFICULTIES = new Set(['junior', 'mid', 'senior']);

describe('flashcard corpus', () => {
  it('contains 165 uniquely identified, schedulable cards', () => {
    expect(flashcardsData).toHaveLength(165);
    expect(new Set(flashcardsData.map(card => card.id)).size).toBe(flashcardsData.length);

    for (const card of flashcardsData) {
      expect(card.id).toBeTruthy();
      expect(card.question).toBeTruthy();
      expect(card.answer).toBeTruthy();
      expect(TOPIC_INFO).toHaveProperty(card.topic);
      expect(VALID_DIFFICULTIES.has(card.difficulty)).toBe(true);
    }
  });

  it('provides Turkish question and answer content for every card', () => {
    for (const card of flashcardsData) {
      expect(card.translations?.tr?.question).toBeTruthy();
      expect(card.translations?.tr?.answer).toBeTruthy();
    }
  });

  it('keeps all eight advertised study modes configured', () => {
    expect(Object.keys(SESSION_CONFIGS)).toEqual([
      'quick5',
      'juniorLevel',
      'midLevel',
      'seniorLevel',
      'deepDive',
      'weakSpot',
      'interview',
      'random'
    ]);
  });
});
