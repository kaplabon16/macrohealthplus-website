import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

type RouteTransitionProps = {
  children: (location: ReturnType<typeof useLocation>) => React.ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const location = useLocation();
  const reduceMotion = false;
  const useBlur = !reduceMotion && !window.matchMedia('(max-width: 767px)').matches;

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="page-transition"
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 10, filter: useBlur ? 'blur(4px)' : 'none' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -6, filter: useBlur ? 'blur(3px)' : 'none' }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {children(location)}
      </motion.div>
    </AnimatePresence>
  );
}
