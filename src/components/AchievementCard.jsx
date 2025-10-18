import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import Badge from './ui/Badge';
import Progress from './ui/Progress';

export default function AchievementCard({ achievement, progress }) {
  const { t } = useTranslation(['achievements']);
  const { id, icon, xpReward } = achievement;
  const { isUnlocked, current, threshold, percentage } = progress;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        relative p-6 rounded-xl border-2 transition-all
        ${isUnlocked
          ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-300 shadow-lg'
          : 'bg-white border-gray-200 hover:border-gray-300'
        }
      `}
    >
      {/* Locked overlay */}
      {!isUnlocked && (
        <div className="absolute top-3 right-3">
          <div className="p-2 bg-gray-100 rounded-full">
            <Lock size={16} className="text-gray-400" />
          </div>
        </div>
      )}

      {/* Achievement Icon */}
      <div className="mb-4">
        <div
          className={`
            inline-flex items-center justify-center w-16 h-16 rounded-full
            ${isUnlocked
              ? 'bg-yellow-100 ring-4 ring-yellow-200'
              : 'bg-gray-100 opacity-50'
            }
          `}
        >
          {/* Stack multiple emojis horizontally with overlap */}
          {(() => {
            // Use Array.from to properly split emojis (handles multi-byte chars)
            const emojis = Array.from(icon);
            return emojis.length > 1 ? (
              <div className="flex items-center -space-x-2">
                {emojis.map((emoji, idx) => (
                  <span key={idx} className="text-2xl leading-none">
                    {emoji}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-3xl leading-none">
                {icon}
              </span>
            );
          })()}
        </div>
      </div>

      {/* Achievement Info */}
      <div className="mb-3">
        <h3 className={`text-lg font-bold mb-1 ${!isUnlocked && 'text-gray-700'}`}>
          {t(`list.${id}.name`)}
        </h3>
        <p className={`text-sm ${isUnlocked ? 'text-gray-600' : 'text-gray-500'}`}>
          {t(`list.${id}.description`)}
        </p>
      </div>

      {/* XP Reward Badge */}
      <div className="mb-3">
        <Badge variant={isUnlocked ? 'success' : 'secondary'}>
          +{xpReward} XP
        </Badge>
      </div>

      {/* Progress Bar (only for locked achievements) */}
      {!isUnlocked && (
        <div className="space-y-2">
          <Progress value={percentage} />
          <p className="text-xs text-gray-500 text-right">
            {t('progress', { current, total: threshold })}
          </p>
        </div>
      )}

      {/* Unlocked Badge */}
      {isUnlocked && (
        <div className="mt-4 pt-4 border-t border-yellow-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-yellow-700">
              ✓ {t('unlocked')}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
