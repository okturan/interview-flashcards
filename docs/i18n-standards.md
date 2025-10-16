# i18n Standards & Best Practices

## Overview

This document outlines the internationalization (i18n) standards for the JavaMaster flashcard application. All user-facing strings must be properly translated to support multiple languages (currently English and Turkish).

---

## File Structure

```
public/locales/
├── en/                          # English translations
│   ├── common.json             # Shared UI elements
│   ├── dashboard.json          # Dashboard-specific content
│   ├── session.json            # Study session UI
│   ├── achievements.json       # Achievement names/descriptions
│   ├── topics.json             # Topic names
│   ├── browser.json            # Card browsing UI
│   └── settings.json           # Settings page
└── tr/                          # Turkish translations
    ├── common.json
    ├── dashboard.json
    ├── session.json
    ├── achievements.json
    ├── topics.json
    ├── browser.json
    └── settings.json
```

---

## Naming Conventions

### Translation Keys

Follow these naming conventions for consistency:

1. **Common UI Elements**: Use `camelCase`
   ```json
   {
     "buttons": {
       "backToDashboard": "Back to Dashboard"
     }
   }
   ```

2. **Session Types**: Use `camelCase` (matches constants.js)
   ```json
   {
     "sessions": {
       "quick5": { "name": "...", "description": "..." },
       "juniorLevel": { "name": "...", "description": "..." }
     }
   }
   ```

3. **Topics**: Use `snake_case` (matches constants.js TOPIC_INFO)
   ```json
   {
     "design_patterns": "Design Patterns",
     "exception_handling": "Exception Handling"
   }
   ```

4. **Achievements**: Use `kebab-case` (matches achievement IDs)
   ```json
   {
     "list": {
       "first-steps": { "name": "...", "description": "..." },
       "coffee-break-warrior": { "name": "...", "description": "..." }
     }
   }
   ```

5. **Confidence Levels**: Use `lowercase` (matches CONFIDENCE_CONFIG)
   ```json
   {
     "confidence": {
       "levels": {
         "unknown": { "label": "..." },
         "partial": { "label": "..." }
       }
     }
   }
   ```

---

## Translation File Guidelines

### 1. common.json

**Purpose**: Shared UI elements used across multiple pages

**Contains**:
- App name and tagline
- Navigation labels
- Button labels
- Common labels (loading, error messages)
- Difficulty levels (Junior, Mid, Senior)
- Time formats
- Accessibility labels

**Example**:
```json
{
  "app": {
    "name": "JavaMaster",
    "tagline": "Ace Your Java Interviews"
  },
  "buttons": {
    "start": "Start",
    "back": "Back"
  },
  "difficulty": {
    "junior": "Junior",
    "mid": "Mid",
    "senior": "Senior"
  },
  "accessibility": {
    "changeLanguage": "Change language"
  }
}
```

### 2. dashboard.json

**Purpose**: Dashboard-specific content

**Contains**:
- Welcome messages
- Statistics labels
- Daily goal messages
- Session type names and descriptions
- Topic mastery section
- Spaced repetition insights

**Example**:
```json
{
  "welcome": {
    "title": "Welcome back! 👋",
    "subtitle": "Ready to level up your Java knowledge?"
  },
  "sessions": {
    "quick5": {
      "name": "Quick 5",
      "description": "5 cards in ~2 minutes"
    }
  }
}
```

### 3. session.json

**Purpose**: Study session UI and interactions

**Contains**:
- Session header (title, card count)
- Instructions for using the session
- Confidence level labels and next review times
- Flashcard UI labels (answer, explanation, code example)
- Session completion messages

**Example**:
```json
{
  "confidence": {
    "levels": {
      "unknown": {
        "label": "No Idea",
        "nextReview": "10 minutes"
      }
    }
  }
}
```

### 4. achievements.json

**Purpose**: Achievement names and descriptions

**Contains**:
- Achievement list with names and descriptions
- Achievement categories
- Unlock messages

**Example**:
```json
{
  "list": {
    "first-steps": {
      "name": "First Steps",
      "description": "Review 25 cards"
    }
  }
}
```

### 5. topics.json

**Purpose**: Topic names for flashcard categorization

**Contains**: Flat key-value pairs of topic names

**Example**:
```json
{
  "basics": "Java Basics",
  "oop": "OOP Concepts",
  "design_patterns": "Design Patterns"
}
```

**Important**: Keys MUST match those in `src/utils/constants.js` TOPIC_INFO

### 6. settings.json

**Purpose**: Settings page UI

**Contains**:
- Page header
- Data management section (export, import, delete)
- Statistics labels
- Button labels and messages

### 7. browser.json

**Purpose**: Card browser/explorer UI

**Contains**:
- Card browsing interface labels
- Filter and search UI
- Card detail modal labels

---

## Adding New Translations

### Step 1: Identify the Namespace

Determine which translation file should contain your new strings:

- **Shared across multiple pages?** → `common.json`
- **Dashboard-specific?** → `dashboard.json`
- **Study session UI?** → `session.json`
- **Achievement-related?** → `achievements.json`
- **Topic name?** → `topics.json`
- **Settings page?** → `settings.json`
- **Card browser?** → `browser.json`

### Step 2: Add to English File First

Add your translation to `/public/locales/en/{namespace}.json`:

```json
{
  "existing": {
    "keys": "values"
  },
  "yourNewSection": {
    "label": "Your New Label",
    "description": "Your description"
  }
}
```

### Step 3: Add to Turkish File

Add the Turkish translation to `/public/locales/tr/{namespace}.json`:

```json
{
  "existing": {
    "keys": "değerler"
  },
  "yourNewSection": {
    "label": "Yeni Etiketiniz",
    "description": "Açıklamanız"
  }
}
```

### Step 4: Use in Component

Import and use the translation in your component:

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation(['namespace', 'common']);

  return (
    <div>
      <h1>{t('namespace:yourNewSection.label')}</h1>
      <p>{t('namespace:yourNewSection.description')}</p>
    </div>
  );
}
```

### Step 5: Register Namespace (if new)

If you created a new namespace file, register it in `src/i18n/config.js`:

```javascript
ns: ['common', 'dashboard', 'session', 'achievements', 'topics', 'settings', 'yourNewNamespace'],
```

---

## Using Translations in Code

### Basic Usage

```jsx
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation(['namespace']);

  return <div>{t('namespace:key.subkey')}</div>;
}
```

### Multiple Namespaces

```jsx
const { t } = useTranslation(['dashboard', 'common']);

// Use from dashboard namespace
<h1>{t('dashboard:welcome.title')}</h1>

// Use from common namespace
<button>{t('common:buttons.start')}</button>
```

### Interpolation (Variables)

```jsx
// Translation file:
{
  "welcome": "Welcome, {{name}}!"
}

// Usage:
<h1>{t('welcome', { name: 'John' })}</h1>
// Output: "Welcome, John!"
```

### Pluralization

```jsx
// Translation file:
{
  "cards": "{{count}} card",
  "cards_other": "{{count}} cards"
}

// Usage:
<p>{t('cards', { count: 1 })}</p>  // "1 card"
<p>{t('cards', { count: 5 })}</p>  // "5 cards"
```

### Dynamic Keys

```jsx
// Good - for known values:
const difficulty = 'junior';
<span>{t(`common:difficulty.${difficulty}`)}</span>

// For topics from constants:
const topic = card.topic; // e.g., "design_patterns"
<span>{t(`topics:${topic}`)}</span>
```

### Accessing Current Language

```jsx
const { i18n } = useTranslation();
const currentLanguage = i18n.language; // 'en' or 'tr'
```

---

## Card Content Localization

For flashcard content (questions, answers, explanations), use the `getLocalizedCard()` utility:

```jsx
import { getLocalizedCard } from '../utils/cardLocalization';
import { useTranslation } from 'react-i18next';

function FlashcardDisplay({ card }) {
  const { i18n } = useTranslation();
  const localizedCard = getLocalizedCard(card, i18n.language);

  return (
    <div>
      <h2>{localizedCard.question}</h2>
      <p>{localizedCard.answer}</p>
      <p>{localizedCard.explanation}</p>
    </div>
  );
}
```

**Why?** Card content is stored with translations in the database/data structure, not in JSON files.

---

## Validation Checklist

Before committing new translations:

- [ ] Added to **both** English and Turkish files
- [ ] Followed correct naming convention for the type
- [ ] Used appropriate namespace
- [ ] Tested in UI (both languages)
- [ ] No typos in translation keys
- [ ] Pluralization forms added if needed
- [ ] Matches any corresponding keys in constants.js

---

## Common Patterns

### Button Labels

```json
// common.json
{
  "buttons": {
    "start": "Start",
    "cancel": "Cancel",
    "save": "Save"
  }
}

// Usage:
<button>{t('common:buttons.start')}</button>
```

### Status Messages

```json
{
  "messages": {
    "success": "Success! {{action}} completed.",
    "error": "Error: {{message}}"
  }
}

// Usage:
{t('messages.success', { action: 'Export' })}
```

### Labels with Counts

```json
{
  "stats": {
    "cardsReviewed": "{{count}} card reviewed",
    "cardsReviewed_other": "{{count}} cards reviewed"
  }
}

// Usage:
{t('stats.cardsReviewed', { count: statistics.total })}
```

---

## Translation Sources Mapping

This table shows where translation keys are defined and how they map to constants.js:

| Constant (constants.js) | Translation File | Key Format | Example |
|------------------------|------------------|------------|---------|
| `SESSION_CONFIGS` | dashboard.json | `sessions.{key}` | `sessions.quick5.name` |
| `TOPIC_INFO` | topics.json | `{key}` | `design_patterns` |
| `ACHIEVEMENTS` | achievements.json | `list.{id}` | `list.first-steps.name` |
| `CONFIDENCE_CONFIG` | session.json | `confidence.levels.{level}` | `confidence.levels.unknown.label` |
| Difficulty levels | common.json | `difficulty.{level}` | `difficulty.junior` |

---

## Turkish Translation Guidelines

### General Rules

1. **Be natural**: Don't translate word-for-word, translate the meaning
2. **Tech terms**: Some terms like "Spring Framework", "API" stay in English
3. **Consistency**: Use the same translation for the same concept throughout

### Common Translations

| English | Turkish | Notes |
|---------|---------|-------|
| Review | Gözden geçir | For studying cards |
| Card(s) | Kart(lar) | Flashcard |
| Session | Oturum | Study session |
| Achievement | Başarım | Not "kazanım" |
| Streak | Seri | Consecutive days |
| Mastery | Hakimiyet | Topic mastery |
| Settings | Ayarlar | |
| Junior | Başlangıç | More natural than "Junior" |
| Mid | Orta | |
| Senior | İleri | More natural than "Senior" |
| Unknown | Hiç Bilmiyorum | Confidence level |
| Partial | Kısmen | Confidence level |
| Got It | Anladım | Confidence level |
| Mastered | Ustalaştım | Confidence level |

---

## Troubleshooting

### Translation not showing?

1. **Check the key**: Verify it exists in the JSON file
2. **Check the namespace**: Are you loading the correct namespace?
3. **Check for typos**: Translation keys are case-sensitive
4. **Check pluralization**: Make sure you're using the right plural form
5. **Clear cache**: Sometimes i18next caches translations

### Key mismatch errors?

Compare your translation keys with constants.js:
- Topics must match `TOPIC_INFO` keys exactly (use `snake_case`)
- Sessions must match `SESSION_CONFIGS` keys (use `camelCase`)
- Achievements must match achievement IDs (use `kebab-case`)

### Missing translations in Turkish?

Search the English file for the key, then add the corresponding Turkish translation.

---

## Related Files

- **i18n Config**: `src/i18n/config.js`
- **Constants**: `src/utils/constants.js`
- **Card Localization Utility**: `src/utils/cardLocalization.js`
- **Translation Files**: `public/locales/{lang}/{namespace}.json`

---

## Maintenance

### Regular Tasks

1. **Monthly**: Review for orphaned keys (in translation files but not used in code)
2. **Per feature**: Add translations for new features
3. **Before release**: Verify all user-facing text is translated

### When updating constants.js

If you add/modify entries in constants.js, update translations:

1. **SESSION_CONFIGS**: Add to `dashboard.json` under `sessions`
2. **TOPIC_INFO**: Add to `topics.json`
3. **ACHIEVEMENTS**: Add to `achievements.json` under `list`
4. **CONFIDENCE_CONFIG**: Add to `session.json` under `confidence.levels`

---

## Best Practices Summary

✅ **DO**:
- Add translations for ALL user-facing text
- Use the appropriate namespace
- Follow naming conventions
- Test in both languages
- Keep keys organized hierarchically
- Use interpolation for dynamic values
- Use pluralization for counts

❌ **DON'T**:
- Hardcode English strings in components
- Mix naming conventions
- Create duplicate keys
- Skip Turkish translations
- Translate technical terms unnecessarily
- Use translation files for non-UI content (like card data)

---

**Last Updated**: 2025-01-16
**Maintainer**: Development Team
