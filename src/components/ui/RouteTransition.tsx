'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type RouteTransitionProps = {
  children: React.ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      window.requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <motion.div
      className="page-transition"
      key={pathname}
      initial={{ opacity: 1, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
