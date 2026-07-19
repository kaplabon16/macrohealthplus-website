import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const shouldReduceMotion = false;

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
