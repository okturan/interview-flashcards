import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CONFIDENCE_CONFIG } from '../../utils/constants';

export default function ConfidenceButtons({ onSelect, disabled = false }) {
  const { t } = useTranslation(['session', 'common']);
  const confidenceLevels = ['unknown', 'partial', 'known', 'mastered'];

  return (
    <div className="w-full max-w-2xl mx-auto mt-4 md:mt-8">
      <p className="text-center text-gray-600 mb-3 md:mb-4 font-medium text-sm md:text-base">
        {t('session:confidence.question')}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {confidenceLevels.map((level) => {
          const config = CONFIDENCE_CONFIG[level];

          return (
            <motion.button
              key={level}
              whileHover={{ scale: disabled ? 1 : 1.05 }}
              whileTap={{ scale: disabled ? 1 : 0.95 }}
              onClick={() => !disabled && onSelect(level)}
              disabled={disabled}
              className={`
                relative p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all duration-200
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}
                ${
                  config.color === 'red'
                    ? 'border-red-300 bg-red-50 hover:bg-red-100'
                    : config.color === 'yellow'
                    ? 'border-yellow-300 bg-yellow-50 hover:bg-yellow-100'
                    : config.color === 'green'
                    ? 'border-green-300 bg-green-50 hover:bg-green-100'
                    : 'border-purple-300 bg-purple-50 hover:bg-purple-100'
                }
              `}
            >
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl">{config.emoji}</span>
                <span className="font-semibold text-gray-800 text-xs md:text-base">{t(`session:confidence.levels.${level}.label`)}</span>
                <span className="text-[10px] md:text-xs text-gray-500 text-center leading-tight">{t(`session:confidence.levels.${level}.nextReview`)}</span>
              </div>

              {/* Keyboard shortcut hint */}
              <div className="absolute top-1 right-1 md:top-2 md:right-2 bg-white/80 rounded px-1 md:px-1.5 py-0.5 text-[10px] md:text-xs font-mono text-gray-600">
                {config.value}
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-center text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
        {t('session:confidence.tip')}
      </p>
    </div>
  );
}
