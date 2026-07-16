import { describe, expect, it } from 'vitest';
import {
  getAvailableLanguages,
  getLocalizedCard,
  getLocalizedField,
  hasTranslation
} from './cardLocalization';

const card = {
  id: 'localization-fixture',
  question: 'English question',
  answer: 'English answer',
  explanation: 'English explanation',
  translations: {
    tr: {
      question: 'Turkish question',
      answer: 'Turkish answer'
    }
  }
};

describe('card localization', () => {
  it('uses translated fields and falls back field-by-field to English', () => {
    expect(getLocalizedField(card, 'question', 'tr')).toBe('Turkish question');
    expect(getLocalizedField(card, 'explanation', 'tr')).toBe('English explanation');
    expect(getLocalizedCard(card, 'tr')).toMatchObject({
      question: 'Turkish question',
      answer: 'Turkish answer',
      explanation: 'English explanation'
    });
  });

  it('reports only available languages', () => {
    expect(hasTranslation(card, 'tr')).toBe(true);
    expect(hasTranslation(card, 'de')).toBe(false);
    expect(getAvailableLanguages(card)).toEqual(['en', 'tr']);
  });
});
