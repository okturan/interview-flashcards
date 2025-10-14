import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useProgressStore } from '../store/useProgressStore';
import { Search, Filter, ChevronLeft, BookOpen, Code, X } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { TOPIC_INFO, DIFFICULTY_COLORS } from '../utils/constants';
import { motion, AnimatePresence } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import { useEffect } from 'react';
import { getLocalizedCard, formatLocalizedDate } from '../utils/cardLocalization';

export default function FlashcardBrowser() {
  const { t, i18n } = useTranslation(['browser', 'common', 'topics']);
  const navigate = useNavigate();
  const { allCards, allCardProgress } = useFlashcardStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedConfidence, setSelectedConfidence] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  // Get card progress for a specific card
  const getCardProgress = (cardId) => {
    return allCardProgress.find(cp => cp.cardId === cardId);
  };

  // Filter and search cards
  const filteredCards = useMemo(() => {
    let filtered = allCards;

    // Topic filter
    if (selectedTopic !== 'all') {
      filtered = filtered.filter(card => card.topic === selectedTopic);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    // Confidence filter
    if (selectedConfidence !== 'all') {
      filtered = filtered.filter(card => {
        const progress = getCardProgress(card.id);
        if (!progress && selectedConfidence === 'new') return true;
        return progress && progress.confidence === selectedConfidence;
      });
    }

    // Search filter (using localized content)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(card => {
        const localizedCard = getLocalizedCard(card, i18n.language);
        return (
          localizedCard.question.toLowerCase().includes(query) ||
          localizedCard.answer.toLowerCase().includes(query) ||
          (localizedCard.explanation && localizedCard.explanation.toLowerCase().includes(query))
        );
      });
    }

    return filtered;
  }, [allCards, selectedTopic, selectedDifficulty, selectedConfidence, searchQuery, allCardProgress]);

  // Highlight code blocks
  useEffect(() => {
    Prism.highlightAll();
  }, [expandedCard]);

  const difficultyColors = {
    junior: 'green',
    mid: 'yellow',
    senior: 'red'
  };

  const confidenceColors = {
    unknown: 'red',
    partial: 'yellow',
    known: 'green',
    mastered: 'purple'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">{t('common:buttons.back')}</span>
            </Button>
            <LanguageSwitcher />
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center gap-2 md:gap-3">
              <BookOpen className="w-6 h-6 md:w-10 md:h-10" />
              {t('browser:title')}
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              {t('browser:subtitle', { count: allCards.length })}
            </p>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('browser:search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Topic filter */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter size={16} className="inline mr-1" />
                  {t('browser:filters.topic')}
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">{t('browser:filters.allTopics')}</option>
                  {Object.keys(TOPIC_INFO).map(topic => (
                    <option key={topic} value={topic}>
                      {t(`topics:${topic}`)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty filter */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('browser:filters.difficulty')}
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">{t('browser:filters.allLevels')}</option>
                  <option value="junior">{t('common:difficulty.junior')}</option>
                  <option value="mid">{t('common:difficulty.mid')}</option>
                  <option value="senior">{t('common:difficulty.senior')}</option>
                </select>
              </div>

              {/* Confidence filter */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('browser:filters.progress')}
                </label>
                <select
                  value={selectedConfidence}
                  onChange={(e) => setSelectedConfidence(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">{t('browser:filters.allCards')}</option>
                  <option value="new">{t('browser:filters.newCards')}</option>
                  <option value="unknown">{t('browser:filters.noIdea')}</option>
                  <option value="partial">{t('browser:filters.partial')}</option>
                  <option value="known">{t('browser:filters.gotIt')}</option>
                  <option value="mastered">{t('browser:filters.mastered')}</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Results count */}
        <div className="mb-4 text-gray-600">
          {t('browser:results.showing', { filtered: filteredCards.length, total: allCards.length })}
        </div>

        {/* Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCards.length === 0 ? (
            <Card className="text-center py-12 col-span-full">
              <p className="text-gray-500 text-lg">{t('browser:results.noCards')}</p>
              <p className="text-gray-400 text-sm mt-2">{t('browser:results.tryAdjusting')}</p>
            </Card>
          ) : (
            filteredCards.map((card) => {
              const progress = getCardProgress(card.id);
              const localizedCard = getLocalizedCard(card, i18n.language);

              return (
                <Card
                  key={card.id}
                  hover
                  className="cursor-pointer"
                  onClick={() => setExpandedCard(card.id)}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">
                        {localizedCard.question}
                      </h3>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge color={difficultyColors[card.difficulty]} size="sm">
                      {t(`common:difficulty.${card.difficulty}`)}
                    </Badge>
                    <Badge color="blue" size="sm">
                      {t(`topics:${card.topic}`)}
                    </Badge>
                    {progress && (
                      <Badge color={confidenceColors[progress.confidence]} size="sm">
                        {t(`session:confidence.levels.${progress.confidence}.label`)}
                      </Badge>
                    )}
                    {!progress && (
                      <Badge color="gray" size="sm">
                        {t('browser:card.new')}
                      </Badge>
                    )}
                  </div>

                  {/* Click to view indicator */}
                  <div className="text-xs text-gray-400 text-center mt-2">
                    {t('browser:card.clickToView')}
                  </div>
                </Card>
              );
            })
          )}
        </div>

        {/* Overlay Modal */}
        <AnimatePresence>
          {expandedCard && (() => {
            const card = filteredCards.find(c => c.id === expandedCard);
            if (!card) return null;

            const progress = getCardProgress(card.id);
            const localizedCard = getLocalizedCard(card, i18n.language);

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop with glassmorphism */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/30 backdrop-blur-md"
                  onClick={() => setExpandedCard(null)}
                />

                {/* Modal Card */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: 'spring', duration: 0.3 }}
                  className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="sticky top-4 right-4 float-right z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>

                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {localizedCard.question}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <Badge color={difficultyColors[card.difficulty]} size="sm">
                          {t(`common:difficulty.${card.difficulty}`)}
                        </Badge>
                        <Badge color="blue" size="sm">
                          {t(`topics:${card.topic}`)}
                        </Badge>
                        {progress && (
                          <Badge color={confidenceColors[progress.confidence]} size="sm">
                            {t(`session:confidence.levels.${progress.confidence}.label`)}
                          </Badge>
                        )}
                        {!progress && (
                          <Badge color="gray" size="sm">
                            {t('browser:card.new')}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Answer */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">{t('browser:card.answer')}</h4>
                        <p className="text-gray-600">{localizedCard.answer}</p>
                      </div>

                      {/* Explanation */}
                      {localizedCard.explanation && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">{t('browser:card.explanation')}</h4>
                          <p className="text-gray-600">{localizedCard.explanation}</p>
                        </div>
                      )}

                      {/* Code example */}
                      {card.codeExample && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <Code size={16} />
                            {t('browser:card.codeExample')}
                          </h4>
                          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <code className="language-java text-sm">
                              {typeof card.codeExample === 'string'
                                ? card.codeExample
                                : card.codeExample.code || JSON.stringify(card.codeExample, null, 2)}
                            </code>
                          </pre>
                        </div>
                      )}

                      {/* Progress info */}
                      {progress && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-700 mb-3">{t('browser:card.yourProgress')}</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">{t('browser:card.reviewed')}</div>
                              <div className="text-xl font-bold text-gray-800">{progress.reviewCount}x</div>
                            </div>
                            <div>
                              <div className="text-gray-500">{t('browser:card.accuracy')}</div>
                              <div className="text-xl font-bold text-gray-800">
                                {Math.round((progress.correctCount / progress.reviewCount) * 100)}%
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500">{t('browser:card.confidence')}</div>
                              <Badge color={confidenceColors[progress.confidence]} size="sm" className="mt-1">
                                {t(`session:confidence.levels.${progress.confidence}.label`)}
                              </Badge>
                            </div>
                            <div>
                              <div className="text-gray-500">{t('browser:card.nextReview')}</div>
                              <div className="text-sm font-medium text-gray-800 mt-1">
                                {formatLocalizedDate(progress.nextReviewDate, i18n.language)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}
