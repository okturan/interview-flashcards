import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { AlertCircle, Clock, Sparkles, Brain } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { getLocalizedCard } from '../utils/cardLocalization';

export default function SpacedRepetitionInsights() {
  const { t, i18n } = useTranslation(['dashboard', 'common']);
  const { allCards, allCardProgress } = useFlashcardStore();

  // Analyze cards due for review
  const insights = useMemo(() => {
    const now = new Date();
    const reviewedCardIds = new Set(allCardProgress.map(cp => cp.cardId));
    const newCards = allCards.filter(card => !reviewedCardIds.has(card.id));

    let overdue = [];
    let dueToday = [];
    let lowConfidence = [];
    let lapses = [];

    allCardProgress.forEach(progress => {
      const nextReview = new Date(progress.nextReviewDate);
      const hoursDiff = (now - nextReview) / (1000 * 60 * 60);

      // Overdue (past due date)
      if (nextReview <= now) {
        const card = allCards.find(c => c.id === progress.cardId);
        if (card) {
          overdue.push({
            ...card,
            progress,
            hoursOverdue: Math.floor(Math.abs(hoursDiff))
          });
        }
      }

      // Low confidence
      if (['unknown', 'partial'].includes(progress.confidence)) {
        const card = allCards.find(c => c.id === progress.cardId);
        if (card) {
          lowConfidence.push({ ...card, progress });
        }
      }

      // Cards with lapses (went from known/mastered back to unknown/partial)
      if (progress.lapses > 0) {
        const card = allCards.find(c => c.id === progress.cardId);
        if (card) {
          lapses.push({ ...card, progress });
        }
      }
    });

    // Sort overdue by how overdue they are
    overdue.sort((a, b) => b.hoursOverdue - a.hoursOverdue);

    return {
      new: newCards.length,
      overdue: overdue.length,
      overdueCards: overdue.slice(0, 5), // Top 5 most overdue
      lowConfidence: lowConfidence.length,
      lowConfidenceCards: lowConfidence.slice(0, 5),
      lapses: lapses.length,
      lapsesCards: lapses.slice(0, 5),
      totalDue: overdue.length + newCards.length
    };
  }, [allCards, allCardProgress]);

  const formatHoursOverdue = (hours) => {
    if (hours < 24) return t('dashboard:spacedRepetition.sections.hoursOverdue', { hours });
    const days = Math.floor(hours / 24);
    return t('dashboard:spacedRepetition.sections.daysOverdue', { days });
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Brain className="w-6 h-6 text-purple-600" />
        {t('dashboard:spacedRepetition.title')}
      </h2>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-blue-600">{insights.new}</div>
          <div className="text-sm text-gray-600">{t('dashboard:spacedRepetition.stats.newCards')}</div>
        </div>

        <div className="text-center p-4 bg-red-50 rounded-lg">
          <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-red-600">{insights.overdue}</div>
          <div className="text-sm text-gray-600">{t('dashboard:spacedRepetition.stats.overdue')}</div>
        </div>

        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <AlertCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-yellow-600">{insights.lowConfidence}</div>
          <div className="text-sm text-gray-600">{t('dashboard:spacedRepetition.stats.lowConfidence')}</div>
        </div>

        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <AlertCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-orange-600">{insights.lapses}</div>
          <div className="text-sm text-gray-600">{t('dashboard:spacedRepetition.stats.lapses')}</div>
        </div>
      </div>

      {/* Total due message */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4 mb-6">
        <p className="text-lg font-semibold">
          {insights.totalDue === 0 ? (
            t('dashboard:spacedRepetition.messages.allCaughtUp')
          ) : (
            t('dashboard:spacedRepetition.messages.cardsDue', { count: insights.totalDue })
          )}
        </p>
      </div>

      {/* Detailed sections */}
      <div className="space-y-6">
        {/* Most Overdue Cards */}
        {insights.overdueCards.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-600" />
              {t('dashboard:spacedRepetition.sections.mostOverdue')}
            </h3>
            <div className="space-y-2">
              {insights.overdueCards.map((card) => {
                const localizedCard = getLocalizedCard(card, i18n.language);
                return (
                  <div
                    key={card.id}
                    className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm line-clamp-1">
                        {localizedCard.question}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge color="red" size="sm">
                        {formatHoursOverdue(card.hoursOverdue)}
                      </Badge>
                      <Badge color="gray" size="sm">
                        {t(`common:difficulty.${card.difficulty}`)}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Low Confidence Cards */}
        {insights.lowConfidenceCards.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              {t('dashboard:spacedRepetition.sections.lowConfidence')}
            </h3>
            <div className="space-y-2">
              {insights.lowConfidenceCards.map((card) => {
                const localizedCard = getLocalizedCard(card, i18n.language);
                return (
                  <div
                    key={card.id}
                    className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm line-clamp-1">
                        {localizedCard.question}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge
                        color={card.progress.confidence === 'unknown' ? 'red' : 'yellow'}
                        size="sm"
                      >
                        {t(`session:confidence.levels.${card.progress.confidence}.label`)}
                      </Badge>
                      <Badge color="gray" size="sm">
                        {t('dashboard:spacedRepetition.sections.reviewed', { count: card.progress.reviewCount })}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Cards with Lapses */}
        {insights.lapsesCards.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              {t('dashboard:spacedRepetition.sections.lapses')}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {t('dashboard:spacedRepetition.sections.lapsesDescription')}
            </p>
            <div className="space-y-2">
              {insights.lapsesCards.map((card) => {
                const localizedCard = getLocalizedCard(card, i18n.language);
                return (
                  <div
                    key={card.id}
                    className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm line-clamp-1">
                        {localizedCard.question}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge color="orange" size="sm">
                        {card.progress.lapses} {t('dashboard:spacedRepetition.sections.lapse', { count: card.progress.lapses })}
                      </Badge>
                      <Badge color="gray" size="sm">
                        {t(`session:confidence.levels.${card.progress.confidence}.label`)}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* No cards due */}
        {insights.totalDue === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg mb-2">{t('dashboard:spacedRepetition.sections.allCaughtUpTitle')}</p>
            <p className="text-sm">{t('dashboard:spacedRepetition.messages.checkBackLater')}</p>
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-2">{t('dashboard:spacedRepetition.explanation.title')}</h4>
        <p className="text-sm text-gray-600">
          {t('dashboard:spacedRepetition.explanation.description')}
        </p>
      </div>
    </Card>
  );
}
