import { useEffect, useRef, type CSSProperties, type Dispatch, type SetStateAction } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { products } from '../../data/products';
import RevealWords from '../ui/RevealWords';
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
  const isObservedHeroVisible = useInView(heroRef, { amount: 0.86, initial: true });
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (!enableProductHandoff || !isHandoffActive || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      onActiveProductChange((current) => (current + 1) % featuredProducts.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [enableProductHandoff, isHandoffActive, onActiveProductChange, reduceMotion]);

  useEffect(() => {
    onVisibilityChange(isObservedHeroVisible);
  }, [isObservedHeroVisible, onVisibilityChange]);

  return (
    <section
      className="hero-section relative min-h-[68svh] overflow-visible px-4 pb-6 pt-24 sm:min-h-[66svh] sm:px-6 sm:pb-8 sm:pt-28 md:min-h-[62svh] xl:min-h-[88svh] xl:pb-14 xl:pt-36"
      ref={heroRef}
    >
      <motion.div
        className="absolute inset-0"
        role="img"
        aria-label="MacroHealthPlus products across desktop, laptop, tablet, and mobile devices"
        initial={{ opacity: 0.58, scale: 1.035 }}
        animate={{ opacity: 1, scale: [1.02, 1, 1.012] }}
        transition={{ opacity: { duration: 1.1 }, scale: { duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }}
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
                  duration: reduceMotion ? 0 : 0.72,
                  ease: [0.22, 1, 0.36, 1],
                  layout: {
                    duration: reduceMotion ? 0 : 0.95,
                    delay: reduceMotion ? 0 : index * 0.045,
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
          initial={{ opacity: 0.68, y: 30, filter: 'blur(7px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero-kicker text-xs font-semibold uppercase tracking-[0.28em]"
            initial={{ opacity: 0.64, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            Healthcare Management Software
          </motion.p>
          <motion.h1
            className="hero-title mt-3 max-w-4xl text-3xl font-semibold leading-[1.02] sm:mt-4 sm:text-5xl sm:leading-[0.98] md:text-6xl xl:mt-5 xl:text-8xl xl:leading-[0.95]"
            initial={{ opacity: 0.68, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Take Healthcare Operations Further
          </motion.h1>
          <RevealWords
            className="hero-intro mt-3.5 max-w-2xl text-sm leading-[1.375rem] sm:mt-5 sm:text-[15px] sm:leading-6 md:text-base md:leading-7 xl:mt-7 xl:text-xl xl:leading-8"
            text="From the first appointment to the final report, MacroHealthPlus gives care teams a clearer way to coordinate clinical records, diagnostics, pharmacy operations, billing, and patient follow-up."
          />
        </motion.div>
      </div>
    </section>
  );
}
