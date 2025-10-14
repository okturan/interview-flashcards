import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useProgressStore } from '../store/useProgressStore';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Progress from '../components/ui/Progress';
import Badge from '../components/ui/Badge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import TopicSelectionModal from '../components/TopicSelectionModal';
import SpacedRepetitionInsights from '../components/SpacedRepetitionInsights';
import { SESSION_CONFIGS, TOPIC_INFO } from '../utils/constants';
import { xpProgress } from '../utils/helpers';
import { Flame, Zap, Target, BookOpen, TrendingUp, Award, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { t } = useTranslation(['dashboard', 'common', 'topics']);
  const navigate = useNavigate();
  const [showTopicModal, setShowTopicModal] = useState(false);
  const { getDueCardsCount, getNewCardsCount, startSession } = useFlashcardStore();
  const {
    streak,
    totalXP,
    todayProgress,
    dailyGoal,
    topicMastery,
    statistics,
    achievements
  } = useProgressStore();

  const dueCards = getDueCardsCount();
  const newCards = getNewCardsCount();
  const levelInfo = xpProgress(totalXP);

  const handleStartSession = async (sessionType) => {
    const config = SESSION_CONFIGS[sessionType];

    // Show topic selection modal for Deep Dive
    if (config.requiresTopicSelection) {
      setShowTopicModal(true);
      return;
    }

    await startSession(sessionType);
    navigate('/study');
  };

  const handleTopicSelect = async (topic) => {
    setShowTopicModal(false);
    await startSession('deepDive', { topicFilter: topic });
    navigate('/study');
  };

  const getStreakEmoji = (count) => {
    if (count >= 30) return '🔥🔥🔥';
    if (count >= 7) return '🔥🔥';
    if (count >= 3) return '🔥';
    return '✨';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                {t('dashboard:welcome.title')}
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                {t('dashboard:welcome.subtitle')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/settings')}
                className="md:size-md"
              >
                <Settings size={20} />
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/browse')}
            className="w-full md:w-auto"
          >
            <BookOpen size={18} className="mr-2" />
            {t('dashboard:buttons.browseCards')}
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Streak */}
          <Card className="text-center">
            <div className="flex flex-col items-center gap-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  {streak.current} {getStreakEmoji(streak.current)}
                </div>
                <div className="text-sm text-gray-600">{t('dashboard:stats.streak.label')}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {t('dashboard:stats.streak.best', { count: streak.longest })}
                </div>
              </div>
            </div>
          </Card>

          {/* Level */}
          <Card className="text-center">
            <div className="flex flex-col items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  {t('dashboard:stats.level.label', { level: levelInfo.currentLevel })}
                </div>
                <div className="text-sm text-gray-600">{t('dashboard:stats.level.totalXP', { xp: totalXP })}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {t('dashboard:stats.level.nextLevel', { xp: levelInfo.xpToNextLevel, level: levelInfo.nextLevel })}
                </div>
              </div>
            </div>
          </Card>

          {/* Cards Due */}
          <Card className="text-center">
            <div className="flex flex-col items-center gap-2">
              <Target className="w-8 h-8 text-red-500" />
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  {dueCards}
                </div>
                <div className="text-sm text-gray-600">{t('dashboard:stats.cardsDue.label')}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {t('dashboard:stats.cardsDue.new', { count: newCards })}
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-purple-500" />
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  {achievements.length}
                </div>
                <div className="text-sm text-gray-600">{t('dashboard:stats.achievements.label')}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {t('dashboard:stats.achievements.reviewed', { count: statistics.totalCardsReviewed })}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Daily Goal Progress */}
        <Card className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{t('dashboard:dailyGoal.title')}</h2>
              <p className="text-sm text-gray-600">
                {t('dashboard:dailyGoal.progress', { current: todayProgress, goal: dailyGoal })}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round((todayProgress / dailyGoal) * 100)}%
              </div>
            </div>
          </div>
          <Progress
            value={todayProgress}
            max={dailyGoal}
            color="gradient"
            height="lg"
            showLabel={false}
          />
        </Card>

        {/* Session Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('dashboard:sessions.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(SESSION_CONFIGS).map(([key, config]) => {
              const icons = {
                Zap: Zap,
                BookOpen: BookOpen,
                Target: Target,
                Briefcase: BookOpen,
                Shuffle: TrendingUp,
                TrendingUp: TrendingUp,
                Award: Award
              };
              const Icon = icons[config.icon] || Zap;

              // Determine badge colors based on difficulty
              const difficultyBadgeColors = {
                junior: 'green',
                mid: 'yellow',
                senior: 'red'
              };

              return (
                <Card key={key} hover>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        config.difficulty === 'junior' ? 'bg-green-100' :
                        config.difficulty === 'mid' ? 'bg-yellow-100' :
                        config.difficulty === 'senior' ? 'bg-red-100' :
                        'bg-blue-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          config.difficulty === 'junior' ? 'text-green-600' :
                          config.difficulty === 'mid' ? 'text-yellow-600' :
                          config.difficulty === 'senior' ? 'text-red-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {t(`dashboard:sessions.${key}.name`)}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {t(`dashboard:sessions.${key}.description`)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <Badge color="blue" size="sm">
                        {t('common:labels.cards', { count: config.cardCount })}
                      </Badge>
                      <Badge color="gray" size="sm">
                        {t('common:labels.estimatedTime', { minutes: config.estimatedTime })}
                      </Badge>
                      {config.difficulty && (
                        <Badge color={difficultyBadgeColors[config.difficulty]} size="sm">
                          {t(`common:difficulty.${config.difficulty}`)}
                        </Badge>
                      )}
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => handleStartSession(key)}
                      className="w-full mt-auto"
                    >
                      {t('common:buttons.start')}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Spaced Repetition Insights */}
        <div className="mb-8">
          <SpacedRepetitionInsights />
        </div>

        {/* Topic Mastery */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t('dashboard:topicMastery.title')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(TOPIC_INFO).map(([key, info]) => {
              const mastery = topicMastery[key] || 0;
              const color = mastery >= 67 ? 'green' : mastery >= 34 ? 'yellow' : 'red';

              return (
                <Card key={key} className="text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`text-3xl`}>
                      {mastery >= 67 ? '🟢' : mastery >= 34 ? '🟡' : '🔴'}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">
                        {mastery}%
                      </div>
                      <div className="text-xs text-gray-600 font-medium mt-1">
                        {t(`topics:${key}`)}
                      </div>
                    </div>
                    <Progress
                      value={mastery}
                      max={100}
                      color={color}
                      height="sm"
                      showLabel={false}
                      className="w-full"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Topic Selection Modal */}
      <TopicSelectionModal
        isOpen={showTopicModal}
        onClose={() => setShowTopicModal(false)}
        onSelectTopic={handleTopicSelect}
      />
    </div>
  );
}
