import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = false,
  onClick,
  ...props
}) {
  const baseStyles = 'bg-white rounded-xl shadow-md p-6';
  const hoverStyles = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-200' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}
