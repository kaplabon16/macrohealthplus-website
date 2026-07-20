import { motion } from 'framer-motion';
import RevealWords from '../ui/RevealWords';

export default function Hero() {
  const shouldReduceMotion = false;

  return (
    <section className="hero-section relative min-h-[68svh] overflow-hidden px-4 pb-6 pt-24 sm:min-h-[66svh] sm:px-6 sm:pb-8 sm:pt-28 md:min-h-[62svh] lg:min-h-[88svh] lg:pb-14 lg:pt-36">
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

      <div className="relative mx-auto flex min-h-[calc(68svh-7.5rem)] max-w-7xl items-end pb-2 sm:min-h-[calc(66svh-9rem)] sm:pb-0 md:min-h-[calc(62svh-9rem)] md:items-center lg:min-h-[calc(88svh-12.5rem)]">
        <motion.div
          className="hero-copy-panel w-full max-w-4xl px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-10"
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
            className="hero-title mt-3 max-w-4xl text-3xl font-semibold leading-[1.02] sm:mt-4 sm:text-5xl sm:leading-[0.98] md:text-6xl lg:mt-5 lg:text-8xl lg:leading-[0.95]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Take Healthcare Operations Further
          </motion.h1>
          <RevealWords
            className="hero-intro mt-3.5 max-w-2xl text-sm leading-[1.375rem] sm:mt-5 sm:text-[15px] sm:leading-6 md:text-base md:leading-7 lg:mt-7 lg:text-xl lg:leading-8"
            text="From the first appointment to the final report, MacroHealthPlus gives care teams a clearer way to coordinate clinical records, diagnostics, pharmacy operations, billing, and patient follow-up."
          />
        </motion.div>
      </div>
    </section>
  );
}
