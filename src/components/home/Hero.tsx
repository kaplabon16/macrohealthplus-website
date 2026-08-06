import { useEffect, useRef, type CSSProperties, type Dispatch, type SetStateAction } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { products } from '../../data/products';
import ProductShowcaseCardContent, { productPalette, showcaseProducts } from './ProductShowcaseCardContent';

const featuredProducts = showcaseProducts.slice(0, 4);

type HeroProps = {
  activeProduct: number;
  enableProductHandoff: boolean;
  isHandoffActive: boolean;
  onActiveProductChange: Dispatch<SetStateAction<number>>;
  onVisibilityChange: (isVisible: boolean) => void;
};

export default function Hero({
  activeProduct,
  enableProductHandoff,
  isHandoffActive,
  onActiveProductChange,
  onVisibilityChange,
}: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (!enableProductHandoff || !isHandoffActive || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      onActiveProductChange((current) => (current + 1) % featuredProducts.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [enableProductHandoff, isHandoffActive, onActiveProductChange, reduceMotion]);

  useEffect(() => {
    let frame = 0;
    let previousVisibility: boolean | null = null;

    const measureHero = () => {
      frame = 0;
      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const nextVisibility = rect.bottom > window.innerHeight * 0.72 && rect.top < window.innerHeight;
      if (nextVisibility === previousVisibility) return;
      previousVisibility = nextVisibility;
      onVisibilityChange(nextVisibility);
    };

    const scheduleMeasurement = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measureHero);
    };

    scheduleMeasurement();
    window.addEventListener('scroll', scheduleMeasurement, { passive: true });
    window.addEventListener('resize', scheduleMeasurement);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleMeasurement);
      window.removeEventListener('resize', scheduleMeasurement);
    };
  }, [onVisibilityChange]);

  return (
    <section
      className="hero-section relative min-h-[68svh] overflow-visible px-4 pb-6 pt-24 sm:min-h-[66svh] sm:px-6 sm:pb-8 sm:pt-28 md:min-h-[62svh] xl:min-h-[88svh] xl:pb-14 xl:pt-36"
      ref={heroRef}
    >
      <div className="hero-media-clip absolute inset-0" aria-hidden="true">
        <motion.div
          className="hero-media absolute inset-0"
          initial={{ opacity: 0.58, scale: 1.035 }}
          animate={{ opacity: 1, scale: [1.02, 1, 1.012] }}
          transition={{ opacity: { duration: 0.5 }, scale: { duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }}
        >
          <video className="hero-video" autoPlay loop muted playsInline preload="metadata">
            <source src="/hero_section_video/cinematic_hero_section.mp4" type="video/mp4" />
          </video>

          {/* Previous generated theme images are retained as a backup for the hero media.
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
          */}
        </motion.div>
      </div>
      <div className="hero-glass-field absolute inset-0" aria-hidden="true">
        <span className="hero-glass-sheen" />
        <span className="hero-glass-spark hero-glass-spark-a" />
        <span className="hero-glass-spark hero-glass-spark-b" />
        <span className="hero-glass-spark hero-glass-spark-c" />
      </div>
      <div className="hero-contrast-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-depth-overlay absolute inset-0" aria-hidden="true" />

      {enableProductHandoff && isHandoffActive ? (
        <div className="hero-product-overlay" aria-live="off">
          {featuredProducts.map((featuredProduct, index) => {
            const featuredIndex = products.findIndex((item) => item.route === featuredProduct.route);
            const featuredPalette = productPalette[featuredIndex % productPalette.length];
            const depth = (index - activeProduct + featuredProducts.length) % featuredProducts.length;
            const featuredStyle = {
              '--showcase-accent': featuredPalette.accent,
              '--showcase-ink': featuredPalette.ink,
              '--showcase-field': featuredPalette.field,
              '--showcase-glow': featuredPalette.glow,
              zIndex: featuredProducts.length - depth,
              pointerEvents: depth === 0 ? 'auto' : 'none',
            } as CSSProperties;

            return (
              <motion.a
                aria-hidden={depth !== 0}
                className="product-showcase-card hero-product-auto-card"
                href={featuredProduct.route}
                key={featuredProduct.route}
                layoutId={`featured-product-${featuredProduct.route}`}
                style={featuredStyle}
                tabIndex={depth === 0 ? 0 : -1}
                initial={reduceMotion ? false : { opacity: 0, x: 70, y: 30, scale: 0.9 }}
                animate={{
                  opacity: 1 - depth * 0.16,
                  x: -depth * 12,
                  y: depth * 13,
                  rotate: depth === 0 ? 0.7 : -depth * 1.15,
                  scale: 1 - depth * 0.035,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  layout: {
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              >
                <ProductShowcaseCardContent index={featuredIndex} product={featuredProduct} />
              </motion.a>
            );
          })}
        </div>
      ) : null}

      <div className="hero-content-shell relative z-[6] mx-auto flex min-h-[calc(68svh-7.5rem)] max-w-7xl items-start pb-2 sm:min-h-[calc(66svh-9rem)] sm:pb-0 md:min-h-[calc(62svh-9rem)] md:items-start xl:min-h-[calc(88svh-12.5rem)] xl:items-center">
        <motion.div
          className="hero-copy-panel w-full max-w-4xl px-4 py-4 sm:px-6 sm:py-6 xl:px-10 xl:py-10"
        >
          <motion.p
            className="hero-kicker text-xs font-semibold uppercase tracking-[0.28em]"
          >
            Healthcare Management Software
          </motion.p>
          <motion.h1
            className="hero-title mt-3 max-w-4xl text-3xl font-semibold leading-[1.02] sm:mt-4 sm:text-5xl sm:leading-[0.98] md:text-6xl xl:mt-5 xl:text-8xl xl:leading-[0.95]"
          >
            Take Healthcare Operations Move Forward
          </motion.h1>
          <p
            className="hero-intro mt-3.5 max-w-2xl text-sm leading-[1.375rem] sm:mt-5 sm:text-[15px] sm:leading-6 md:text-base md:leading-7 xl:mt-7 xl:text-xl xl:leading-8"
          >
            From the first appointment to the final report, MacroHealthPlus gives care teams a clearer way to coordinate clinical records, diagnostics, pharmacy operations, billing, and patient follow-up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
