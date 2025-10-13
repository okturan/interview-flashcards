import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFlashcardStore } from './store/useFlashcardStore';
import { useProgressStore } from './store/useProgressStore';
import { initializeFlashcards } from './data/initializeData';
import Dashboard from './pages/Dashboard';
import StudySession from './pages/StudySession';
import FlashcardBrowser from './pages/FlashcardBrowser';
import Settings from './pages/Settings';

function App() {
  const { t } = useTranslation(['common']);
  const [loading, setLoading] = useState(true);
  const { initialize: initFlashcards, loadCards } = useFlashcardStore();
  const { initialize: initProgress } = useProgressStore();

  useEffect(() => {
    async function init() {
      try {
        console.log('🚀 Initializing JavaMaster app...');

        // Initialize flashcards data
        await initializeFlashcards();

        // Initialize stores
        await initFlashcards();
        await initProgress();

        // Load cards into store
        await loadCards();

        console.log('✅ App initialized successfully');
        setLoading(false);
      } catch (error) {
        console.error('❌ Failed to initialize app:', error);
        setLoading(false);
      }
    }

    init();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{t('common:app.name')}</h1>
          <p className="text-blue-100">{t('common:labels.loadingApp')}</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<StudySession />} />
        <Route path="/browse" element={<FlashcardBrowser />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App
