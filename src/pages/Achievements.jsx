import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Zap } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import {
  getAchievementProgress,
  categorizeAchievements,
  getTotalAchievementXP
} from '../helpers/achievementHelpers';
import AchievementCard from '../components/AchievementCard';
import Button from '../components/ui/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Achievements() {
  const { t } = useTranslation(['achievements', 'common']);
  const navigate = useNavigate();
  const progressState = useProgressStore();
  const [achievementProgress, setAchievementProgress] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = categorizeAchievements();
  const unlockedCount = progressState.achievements.length;
  const totalCount = Object.values(categories).flat().length;
  const achievementXP = getTotalAchievementXP(progressState.achievements);

  useEffect(() => {
    async function loadProgress() {
      setLoading(true);
      const progress = await getAchievementProgress(progressState);
      setAchievementProgress(progress);
      setLoading(false);
    }

    loadProgress();
  }, [progressState.achievements, progressState.statistics, progressState.streak]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common:labels.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
              >
                <ArrowLeft size={20} />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Trophy className="mr-2 text-yellow-500" size={28} />
                  {t('title')}
                </h1>
                <p className="text-sm text-gray-500">
                  {unlockedCount} / {totalCount} {t('unlocked')}
                </p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-6 text-white shadow-lg"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-1">
                {unlockedCount}
              </div>
              <div className="text-yellow-100 text-sm font-medium">
                {t('unlocked')} Achievements
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-1 flex items-center justify-center">
                <Zap size={40} className="mr-2" />
                {achievementXP}
              </div>
              <div className="text-yellow-100 text-sm font-medium">
                Total XP Earned
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievement Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {Object.entries(categories).map(([categoryName, achievements], idx) => {
          if (achievements.length === 0) return null;

          const categoryUnlocked = achievements.filter(
            a => progressState.achievements.includes(a.id)
          ).length;

          return (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="mb-8"
            >
              {/* Category Header */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {t(`categories.${categoryName}`)}
                </h2>
                <p className="text-sm text-gray-500">
                  {categoryUnlocked} / {achievements.length} {t('unlocked').toLowerCase()}
                </p>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map(achievement => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                    progress={achievementProgress[achievement.id] || {
                      isUnlocked: false,
                      current: 0,
                      threshold: achievement.requirement.threshold,
                      percentage: 0
                    }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
