import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const RTL_LANGUAGES = ['ar', 'he', 'fa'];

export function isRTL(language) {
  return RTL_LANGUAGES.includes(language);
}

i18n
  // Load translations using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Fallback language if translation is missing
    fallbackLng: 'en',

    // Supported languages
    supportedLngs: ['en', 'tr'],

    // Namespace configuration
    ns: ['common', 'dashboard', 'session', 'achievements', 'topics', 'settings'],
    defaultNS: 'common',

    // Backend configuration
    backend: {
      // Path to load translation files
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Language detection options
    detection: {
      // Order of language detection methods
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache user language selection
      caches: ['localStorage'],
      // localStorage key
      lookupLocalStorage: 'i18nextLng',
    },

    // Interpolation options
    interpolation: {
      // React already escapes values
      escapeValue: false,
    },

    // React options
    react: {
      // Use Suspense for async loading
      useSuspense: true,
    },

    // Debug mode (set to false in production)
    debug: import.meta.env.DEV,
  });

// Update HTML dir and lang attributes on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = isRTL(lng) ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;

  console.log(`🌐 Language changed to: ${lng}`);
});

export default i18n;
