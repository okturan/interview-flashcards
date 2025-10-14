import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { TOPIC_INFO } from '../utils/constants';
import Card from './ui/Card';
import Button from './ui/Button';

export default function TopicSelectionModal({ isOpen, onClose, onSelectTopic }) {
  const { t } = useTranslation(['topics', 'common']);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {t('common:labels.selectTopic')}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(TOPIC_INFO).map(([key, info]) => {
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
                  purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
                  green: 'bg-green-100 text-green-600 hover:bg-green-200',
                  red: 'bg-red-100 text-red-600 hover:bg-red-200',
                  yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
                  cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200',
                  orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
                  pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
                  lime: 'bg-lime-100 text-lime-600 hover:bg-lime-200',
                  teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200'
                };

                return (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelectTopic(key)}
                    className={`
                      p-6 rounded-xl transition-all duration-200
                      ${colorClasses[info.color] || colorClasses.blue}
                      font-semibold text-center shadow-sm hover:shadow-md
                    `}
                  >
                    <div className="text-sm">
                      {t(`topics:${key}`)}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
