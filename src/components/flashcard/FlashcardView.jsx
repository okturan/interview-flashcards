import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import Badge from '../ui/Badge';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import { getLocalizedCard } from '../../utils/cardLocalization';

export default function FlashcardView({ card, onFlip }) {
  const { t, i18n } = useTranslation(['session', 'common', 'topics']);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Reset flip state when card changes
    setIsFlipped(false);
  }, [card?.id]);

  useEffect(() => {
    // Highlight code when component mounts or updates
    Prism.highlightAll();
  }, [isFlipped, card]);

  if (!card) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500">{t('session:flashcard.noCard')}</p>
      </div>
    );
  }

  // Localize card content based on current language
  const localizedCard = getLocalizedCard(card, i18n.language);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (onFlip) onFlip(!isFlipped);
  };

  const difficultyColors = {
    junior: 'green',
    mid: 'yellow',
    senior: 'red'
  };

  if (!isFlipped) {
    // FRONT SIDE - Question
    return (
      <motion.div
        key="front"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleFlip}
        className="w-full max-w-3xl mx-auto cursor-pointer"
      >
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 min-h-[250px] md:min-h-[400px] flex flex-col justify-between border border-gray-200 hover:shadow-3xl transition-shadow">
          {/* Badges */}
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <Badge color={difficultyColors[card.difficulty]}>
              {t(`common:difficulty.${card.difficulty}`)}
            </Badge>
            <Badge color="blue">{t(`topics:${card.topic}`)}</Badge>
          </div>

          {/* Question */}
          <div className="flex-1 flex items-center justify-center py-4 md:py-8">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center leading-relaxed">
              {localizedCard.question}
            </h2>
          </div>

          {/* Hint */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm pt-4 md:pt-6">
            <RotateCcw size={16} className="md:w-[18px] md:h-[18px]" />
            <span>{t('session:flashcard.clickToReveal')}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  // BACK SIDE - Answer
  return (
    <motion.div
      key="back"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleFlip}
      className="w-full max-w-3xl mx-auto cursor-pointer"
    >
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl shadow-2xl border border-blue-200 overflow-hidden w-full max-h-[65vh] md:max-h-[60vh]">
        {/* Header with badges - fixed */}
        <div className="p-4 md:p-6 pb-3 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 md:gap-3">
            <Badge color={difficultyColors[card.difficulty]}>
              {t(`common:difficulty.${card.difficulty}`)}
            </Badge>
            <Badge color="blue">{t(`topics:${card.topic}`)}</Badge>
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="px-4 md:px-6 py-3 md:py-4 overflow-y-auto" style={{ maxHeight: 'calc(65vh - 140px)' }}>
          <div className="space-y-4 md:space-y-6">
            {/* Answer */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-blue-100">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">
                {t('session:flashcard.answer')}
              </h3>
              <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                {localizedCard.answer}
              </p>
            </div>

            {/* Explanation */}
            {localizedCard.explanation && (
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-purple-100">
                <h3 className="text-lg md:text-xl font-bold text-purple-900 mb-2 md:mb-3">
                  {t('session:flashcard.explanation')}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {localizedCard.explanation}
                </p>
              </div>
            )}

            {/* Code Example */}
            {card.codeExample && (
              <div className="bg-gray-900 rounded-lg md:rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gray-800 px-4 md:px-6 py-2 md:py-3 border-b border-gray-700">
                  <h3 className="text-sm md:text-base font-semibold text-gray-200">
                    {t('session:flashcard.codeExample')}
                  </h3>
                </div>
                <div className="p-4 md:p-6 overflow-x-auto">
                  <pre className="text-xs md:text-sm">
                    <code className="language-java">{card.codeExample.code}</code>
                  </pre>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Footer hint - fixed */}
        <div className="px-4 bg-white/50 backdrop-blur-sm border-t border-blue-200">
          <div className="flex items-center justify-center gap-2 text-gray-600 text-xs md:text-sm py-4 md:py-6 px-4 md:px-6">
            <RotateCcw size={14} className="md:w-4 md:h-4" />
            <span>{t('session:flashcard.clickToSeeQuestion')}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
