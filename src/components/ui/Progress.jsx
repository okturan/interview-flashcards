import { motion } from 'framer-motion';

export default function Progress({
  value = 0,
  max = 100,
  showLabel = true,
  className = '',
  color = 'blue',
  height = 'md'
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-500'
  };

  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`bg-gray-200 rounded-full overflow-hidden ${heights[height]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`${colors[color]} h-full rounded-full`}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between mt-1 text-xs text-gray-600">
          <span>{value}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
