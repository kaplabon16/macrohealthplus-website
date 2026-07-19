import { motion } from 'framer-motion';
import RevealWords from '../ui/RevealWords';

export default function Hero() {
  const shouldReduceMotion = false;

  return (
    <section className="hero-section relative min-h-[88svh] overflow-hidden px-4 pb-9 pt-28 sm:min-h-[92svh] sm:px-6 sm:pb-14 sm:pt-36">
      <motion.div
        className="absolute inset-0"
        role="img"
        aria-label="MacroHealthPlus products across desktop, laptop, tablet, and mobile devices"
        initial={{ opacity: 0, scale: 1.045 }}
        animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1.02, 1, 1.012] }}
        transition={shouldReduceMotion
          ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          : { opacity: { duration: 1.1 }, scale: { duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }}
      >
        <img
          className="hero-theme-image hero-theme-image-dark"
          src="/assets/generated/health-tech-hero-products.webp"
          alt=""
          decoding="async"
        />
        <img
          className="hero-theme-image hero-theme-image-light"
          src="/assets/generated/health-tech-hero-products-light.webp"
          alt=""
          decoding="async"
        />
      </motion.div>
      <div className="hero-contrast-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-depth-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(88svh-9.25rem)] max-w-7xl items-end sm:min-h-[calc(92svh-12.5rem)] md:items-center">
        <motion.div
          className="hero-copy-panel w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10"
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero-kicker text-xs font-semibold uppercase tracking-[0.28em]"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            Healthcare Management Software
          </motion.p>
          <motion.h1
            className="hero-title mt-4 max-w-4xl text-4xl font-semibold leading-[1] sm:mt-5 sm:text-6xl sm:leading-[0.95] md:text-8xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Take Healthcare Operations Further
          </motion.h1>
          <RevealWords
            className="hero-intro mt-5 max-w-2xl text-[15px] leading-6 sm:mt-7 sm:text-base sm:leading-8 md:text-xl"
            text="From the first appointment to the final report, MacroHealthPlus gives care teams a clearer way to coordinate clinical records, diagnostics, pharmacy operations, billing, and patient follow-up."
          />
        </motion.div>
      </div>
    </section>
  );
}
