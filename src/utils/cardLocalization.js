/**
 * Card Localization Utilities
 * Handles multilingual flashcard content following i18n best practices
 */

/**
 * Get localized field from flashcard
 * @param {Object} card - Flashcard object
 * @param {string} field - Field name (question, answer, explanation)
 * @param {string} language - Language code (en, tr)
 * @returns {string} Localized content with fallback to English
 */
export function getLocalizedField(card, field, language = 'en') {
  // Check if card has translations object
  if (card.translations && card.translations[language] && card.translations[language][field]) {
    return card.translations[language][field];
  }

  // Fallback to legacy direct fields (backwards compatibility)
  if (card[field]) {
    return card[field];
  }

  // Fallback to English if translation not available
  if (language !== 'en' && card.translations && card.translations.en && card.translations.en[field]) {
    return card.translations.en[field];
  }

  // Final fallback
  return card[field] || '';
}

/**
 * Get fully localized card object
 * @param {Object} card - Original flashcard object
 * @param {string} language - Language code
 * @returns {Object} Card with localized content
 */
export function getLocalizedCard(card, language = 'en') {
  return {
    ...card,
    question: getLocalizedField(card, 'question', language),
    answer: getLocalizedField(card, 'answer', language),
    explanation: getLocalizedField(card, 'explanation', language),
    // Code examples typically stay in English, but we can add translated comments
    codeExample: card.codeExample
  };
}

/**
 * Check if a card has translation for a specific language
 * @param {Object} card - Flashcard object
 * @param {string} language - Language code
 * @returns {boolean} True if translation exists
 */
export function hasTranslation(card, language) {
  return !!(card.translations && card.translations[language]);
}

/**
 * Get available languages for a card
 * @param {Object} card - Flashcard object
 * @returns {Array<string>} Array of language codes
 */
export function getAvailableLanguages(card) {
  const languages = ['en']; // English is always available

  if (card.translations) {
    Object.keys(card.translations).forEach(lang => {
      if (lang !== 'en' && !languages.includes(lang)) {
        languages.push(lang);
      }
    });
  }

  return languages;
}

/**
 * Format localized date string
 * @param {Date|string} date - Date to format
 * @param {string} language - Language code
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatLocalizedDate(date, language = 'en', options = {}) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  };

  // Map language codes to locales
  const localeMap = {
    en: 'en-US',
    tr: 'tr-TR'
  };

  const locale = localeMap[language] || language;

  return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
}

/**
 * Format localized number
 * @param {number} number - Number to format
 * @param {string} language - Language code
 * @param {Object} options - Intl.NumberFormat options
 * @returns {string} Formatted number string
 */
export function formatLocalizedNumber(number, language = 'en', options = {}) {
  const localeMap = {
    en: 'en-US',
    tr: 'tr-TR'
  };

  const locale = localeMap[language] || language;

  return new Intl.NumberFormat(locale, options).format(number);
}
