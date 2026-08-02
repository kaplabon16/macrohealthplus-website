'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const isVisible = Boolean(reduceMotion || isInView);

  return (
    <motion.div
      className={`animated-section ${className}`}
      data-section-visible={isVisible}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 28 }}
      ref={sectionRef}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
