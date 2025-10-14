import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useProgressStore } from '../store/useProgressStore';
import FlashcardView from '../components/flashcard/FlashcardView';
import ConfidenceButtons from '../components/flashcard/ConfidenceButtons';
import Progress from '../components/ui/Progress';
import Button from '../components/ui/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StudySession() {
  const { t } = useTranslation(['session', 'common']);
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewStartTime, setReviewStartTime] = useState(Date.now());
  const [sessionComplete, setSessionComplete] = useState(false);

  const {
    currentCard,
    sessionActive,
    getSessionProgress,
    getCardsRemaining,
    nextCard,
    endSession,
    sessionId,
    cardsReviewedInSession,
    allCards
  } = useFlashcardStore();

  const { recordReview, completeSession } = useProgressStore();

  useEffect(() => {
    // Reset review start time when card changes
    setReviewStartTime(Date.now());
    setIsFlipped(false);
  }, [currentCard?.id]);

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyPress = (e) => {
      if (!sessionActive) return;

      // Flip card with spacebar
      if (e.key === ' ' && !isFlipped) {
        e.preventDefault();
        setIsFlipped(true);
      }

      // Confidence ratings with 1-4
      if (isFlipped && ['1', '2', '3', '4'].includes(e.key)) {
        const confidenceMap = {
          '1': 'unknown',
          '2': 'partial',
          '3': 'known',
          '4': 'mastered'
        };
        handleConfidenceSelect(confidenceMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, sessionActive, currentCard]);

  const handleConfidenceSelect = async (confidence) => {
    if (!currentCard || !sessionId) return;

    const responseTime = (Date.now() - reviewStartTime) / 1000; // seconds

    // Record the review
    await recordReview(currentCard.id, confidence, responseTime, sessionId, allCards);

    // Check if this was the last card
    if (getCardsRemaining() === 0) {
      // Session complete
      await completeSession('quick5', cardsReviewedInSession, 80); // TODO: Calculate actual accuracy
      setSessionComplete(true);
    } else {
      // Move to next card
      nextCard();
    }
  };

  const handleEndSession = () => {
    endSession();
    navigate('/');
  };

  if (!sessionActive) {
    navigate('/');
    return null;
  }

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          </motion.div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {t('session:completion.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('session:completion.cardsReviewed', { count: cardsReviewedInSession })}
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
              <p className="text-sm font-medium">{t('session:completion.xpEarned')}</p>
              <p className="text-3xl font-bold">
                +{cardsReviewedInSession * 10}
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleEndSession}
              className="w-full"
            >
              {t('common:buttons.backToDashboard')}
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full flex-shrink-0 px-4 pt-4 pb-2 md:px-6 md:pt-6 md:pb-4">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <div className="flex-1 min-w-0">
            <h1 className="text-base md:text-xl font-bold text-gray-800 truncate">{t('session:header.title')}</h1>
            <p className="text-xs md:text-sm text-gray-600">
              {t('session:header.remaining', { count: getCardsRemaining() + 1 })}
            </p>
          </div>

          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEndSession}
              className="text-red-500"
            >
              <X size={18} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline ml-1">{t('session:header.endSession')}</span>
            </Button>
          </div>
        </div>

        <Progress
          value={getSessionProgress()}
          max={100}
          color="gradient"
          height="lg"
          showLabel={false}
        />
      </div>

      {/* Flashcard */}
      <div className="flex-1 min-h-0 flex items-center justify-center px-4 py-2 md:px-6 md:py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard?.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            <FlashcardView
              card={currentCard}
              onFlip={(flipped) => setIsFlipped(flipped)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom section - Confidence Buttons or Instructions */}
      <div className="max-w-4xl mx-auto w-full flex-shrink-0 px-4 pb-4 md:px-6 md:pb-6">
        {/* Confidence Buttons - Only show when card is flipped */}
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ConfidenceButtons onSelect={handleConfidenceSelect} />
          </motion.div>
        )}

        {/* Instructions - Show when card is not flipped */}
        {!isFlipped && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 pb-2 md:pb-8"
          >
            <p className="text-xs md:text-base">{t('session:instructions.flipCard')} <kbd className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-200 rounded text-xs md:text-sm">Space</kbd></p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
