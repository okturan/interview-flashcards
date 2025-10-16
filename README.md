# JavaMaster - Interview Flashcards System

A progressive web application designed to help developers prepare for Java technical interviews through an adaptive, engagement-driven flashcard system.

## Features

### Core Features ✨
- **Adaptive Spaced Repetition**: Uses the SM-2 algorithm to optimize learning and review scheduling
- **165+ Comprehensive Flashcards**: Detailed answers with code examples covering all major Java topics
- **Bilingual Support**: All flashcards available in English and Turkish
- **Flashcard System**: Beautiful card UI with flip animation and syntax-highlighted code examples
- **Multiple Session Types**:
  - Quick 5: 5 cards in ~2 minutes
  - Deep Dive: 15-20 cards, single topic focus
  - Weak Spot: 10 cards from weak areas
  - Interview Mode: Mixed difficulty, timed (coming soon)
  - Random Blitz: Test overall knowledge

### Progress Tracking 📊
- **Streak System**: Daily streak tracking with visual flame indicators
- **XP and Leveling**: Earn XP for reviews, completions, and achievements
- **Topic Mastery**: Track your proficiency across 10 Java topics
- **Statistics**: Total cards reviewed, accuracy rate, study time

### Gamification 🎮
- Achievement system with 15+ unlockable badges
- XP multipliers for streaks and accuracy
- Level progression system
- Daily goals and progress tracking

### Topics Covered 📚
- Java Basics
- Object-Oriented Programming (OOP)
- Collections Framework
- Concurrency & Multithreading
- JVM Internals
- Streams API
- Exception Handling
- Design Patterns
- Spring Framework
- Testing

## Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand with persistence
- **Storage**: IndexedDB via Dexie.js
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: Prism.js
- **Routing**: React Router
- **Utilities**: date-fns

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd interview-flashcards
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── flashcard/
│   │   ├── FlashcardView.jsx       # Main flashcard component with flip animation
│   │   └── ConfidenceButtons.jsx   # 4-level confidence rating buttons
│   └── ui/
│       ├── Button.jsx               # Reusable button component
│       ├── Card.jsx                 # Card container component
│       ├── Badge.jsx                # Badge/tag component
│       └── Progress.jsx             # Progress bar component
├── pages/
│   ├── Dashboard.jsx                # Main dashboard with stats and session selector
│   └── StudySession.jsx             # Active study session page
├── store/
│   ├── useFlashcardStore.js         # Flashcard state management
│   └── useProgressStore.js          # User progress and achievements
├── services/
│   ├── storage.js                   # IndexedDB operations via Dexie
│   └── spacedRepetition.js          # SM-2 algorithm implementation
├── data/
│   ├── flashcardsData.js            # Flashcard content data
│   └── initializeData.js            # Initialize flashcards in IndexedDB
├── utils/
│   ├── constants.js                 # App constants and configurations
│   └── helpers.js                   # Helper functions
└── types/
    └── index.ts                     # TypeScript type definitions
```

## How to Use

### Starting a Study Session

1. **Choose a Session Type**: From the dashboard, select one of the available session types
2. **Review Cards**: Cards will be shown one at a time
3. **Flip the Card**: Click the card or press Space to reveal the answer
4. **Rate Your Confidence**: Select one of 4 confidence levels:
   - 😰 No Idea (review in 10 minutes)
   - 🤔 Partial (review in 1 day)
   - ✅ Got It (review in 3 days)
   - 🔥 Mastered (review in 7+ days)

### Keyboard Shortcuts

- `Space`: Flip card
- `1-4`: Select confidence level (when answer is visible)
- Click anywhere on card to flip

### Building Your Streak

- Study at least one session per day to maintain your streak
- Streaks unlock achievements and XP multipliers
- Use streak save feature (once per week) to prevent streak breaks

## Customization

### Adding More Flashcards

Add flashcards to the `flashcardsData` array in `src/data/flashcardsData.js`:

```javascript
{
  id: 'custom-001',
  question: 'Your question here',
  answer: 'Your answer here',
  explanation: 'Additional context',
  translations: {
    tr: {
      question: 'Turkish question',
      answer: 'Turkish answer',
      explanation: 'Turkish explanation'
    }
  },
  codeExample: {
    code: 'your code here',
    language: 'java'
  },
  topic: 'oop',
  difficulty: 'mid',
  tags: ['tag1', 'tag2'],
  realWorldUse: 'Real-world application description'
}
```

### Adjusting Session Types

Modify session configurations in `src/utils/constants.js`:

```javascript
export const SESSION_CONFIGS = {
  quick5: {
    name: 'Quick 5',
    cardCount: 5,
    estimatedTime: 2,
    // ...
  }
}
```

## Features Roadmap

### Phase 1 (MVP - Current) ✅
- [x] Basic flashcard system
- [x] Spaced repetition algorithm
- [x] Progress tracking
- [x] Session types
- [x] Achievement system
- [x] Dashboard

### Phase 2 (Coming Soon)
- [ ] Interview simulation mode with timer
- [ ] Code syntax highlighting improvements
- [ ] Offline support (PWA)
- [ ] Export/import data
- [ ] Advanced analytics with charts
- [ ] More achievements

### Phase 3 (Future)
- [ ] Backend integration (user accounts)
- [ ] Custom card creation
- [ ] Community features
- [ ] Mobile app
- [ ] AI-generated explanations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Spaced repetition algorithm based on SuperMemo SM-2
- Questions sourced from common Java interview resources
- Built with modern web technologies

---

**Happy studying! 🎓**
