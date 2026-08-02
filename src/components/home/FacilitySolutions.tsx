import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { products } from '../../data/products';
import Section from '../layout/Section';
import ProductShowcaseCardContent, { productPalette, showcaseProducts } from './ProductShowcaseCardContent';

type CarouselMetrics = {
  cardWidth: number;
  gap: number;
  maxOffset: number;
  maxIndex: number;
};

const emptyMetrics: CarouselMetrics = { cardWidth: 0, gap: 16, maxOffset: 0, maxIndex: 0 };

type FacilitySolutionsProps = {
  arrivalIndex: number;
  enableProductHandoff: boolean;
  isHeroVisible: boolean;
};

function ProductSuiteHeading({ floating }: { floating: boolean }) {
  return (
    <motion.div
      className={`product-showcase-after-heading${floating ? ' product-showcase-heading-floating' : ''}`}
      layoutId="product-suite-heading"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-eyebrow">Product Suite</p>
      <div>
        <h2>
          Purpose-built software for every part of the <span>care journey</span>
        </h2>
        <p>
          Explore a <strong>connected suite</strong> designed around the real responsibilities of healthcare teams, from the first
          appointment and clinical decision to diagnostics, pharmacy, workforce, inventory, and <em>follow-up</em>.
        </p>
      </div>
      <motion.span
        className="section-heading-line"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export default function FacilitySolutions({
  arrivalIndex,
  enableProductHandoff,
  isHeroVisible,
}: FacilitySolutionsProps) {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const hasReceivedHeroProduct = useRef(false);
  const isShowcaseVisible = useInView(showcaseRef, { amount: 0.14 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [metrics, setMetrics] = useState<CarouselMetrics>(emptyMetrics);
  const [isPaused, setIsPaused] = useState(false);

  const measure = useCallback(() => {
    const width = viewportRef.current?.clientWidth ?? 0;
    if (!width) return;

    const visibleCards = width >= 1200 ? 3.12 : width >= 640 ? 2.12 : 1.08;
    const gap = width >= 1200 ? 24 : width >= 640 ? 18 : 12;
    const cardWidth = (width - gap * (Math.ceil(visibleCards) - 1)) / visibleCards;
    const totalWidth = showcaseProducts.length * cardWidth + (showcaseProducts.length - 1) * gap;
    const maxOffset = Math.max(0, totalWidth - width);
    const maxIndex = Math.ceil(maxOffset / (cardWidth + gap));

    setMetrics({ cardWidth, gap, maxOffset, maxIndex });
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    if (reduceMotion || isPaused || isHeroVisible || !isShowcaseVisible || metrics.maxIndex === 0) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= metrics.maxIndex ? 0 : current + 1));
    }, 4600);
    return () => window.clearInterval(timer);
  }, [isHeroVisible, isPaused, isShowcaseVisible, metrics.maxIndex, reduceMotion]);

  useEffect(() => {
    if (!isShowcaseVisible || metrics.maxIndex === 0) return;

    if (isHeroVisible) {
      setActiveIndex(Math.min(arrivalIndex, metrics.maxIndex));
      return;
    }

    if (hasReceivedHeroProduct.current) return;
    setActiveIndex(Math.min(arrivalIndex, metrics.maxIndex));
    hasReceivedHeroProduct.current = true;
  }, [arrivalIndex, isHeroVisible, isShowcaseVisible, metrics.maxIndex]);

  const setPrevious = () => setActiveIndex((current) => Math.max(0, current - 1));
  const setNext = () => setActiveIndex((current) => Math.min(metrics.maxIndex, current + 1));
  const offset = Math.min(activeIndex * (metrics.cardWidth + metrics.gap), metrics.maxOffset);
  const isHandoffActive = enableProductHandoff && isHeroVisible;

  return (
    <Section
      className="home-product-section product-showcase-section"
    >
      <div className="product-showcase-stage">
        {isHandoffActive ? <ProductSuiteHeading floating /> : null}

        <motion.div
          className="product-showcase"
          ref={showcaseRef}
          animate={{ opacity: 1, y: 0 }}
          initial={false}
          style={{ pointerEvents: isHandoffActive ? 'none' : 'auto' }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="product-showcase-viewport" ref={viewportRef}>
            <motion.div
              className="product-showcase-track"
              animate={{ x: -offset }}
              drag={reduceMotion ? false : 'x'}
              dragConstraints={{ left: -metrics.maxOffset, right: 0 }}
              dragElastic={0.06}
              onDragEnd={(_, info) => {
                if (info.offset.x < -55) setNext();
                if (info.offset.x > 55) setPrevious();
              }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ gap: metrics.gap }}
            >
              {showcaseProducts.map((product) => {
                const productIndex = products.findIndex((item) => item.route === product.route);
                const palette = productPalette[productIndex % productPalette.length];
                const style = {
                  '--showcase-accent': palette.accent,
                  '--showcase-ink': palette.ink,
                  '--showcase-field': palette.field,
                  '--showcase-glow': palette.glow,
                  width: metrics.cardWidth || undefined,
                } as CSSProperties;

                if (isHandoffActive) {
                  return (
                    <div
                      aria-hidden="true"
                      className="product-showcase-card product-showcase-placeholder"
                      key={product.route}
                      style={style}
                    />
                  );
                }

                return (
                  <motion.a
                    className="product-showcase-card group"
                    href={product.route}
                    key={product.route}
                    layoutId={enableProductHandoff && productIndex < 4 ? `featured-product-${product.route}` : undefined}
                    style={style}
                    initial={productIndex < 4 ? false : {
                      opacity: 0.35,
                      x: reduceMotion ? 0 : Math.min(productIndex, 3) * 18,
                      y: reduceMotion ? 0 : -Math.max(28, 92 - productIndex * 12),
                      rotate: reduceMotion ? 0 : Math.min(productIndex, 3) * 1.2 - 2.4,
                      scale: reduceMotion ? 1 : 0.9,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : Math.min(productIndex, 3) * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                      layout: {
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : productIndex * 0.025,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  >
                    <ProductShowcaseCardContent index={productIndex} product={product} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {!isHandoffActive ? (
            <div className="product-showcase-controls">
              <span className="product-showcase-progress" aria-hidden="true">
                <motion.i
                  animate={{ scaleX: metrics.maxIndex ? (activeIndex + 1) / (metrics.maxIndex + 1) : 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <button type="button" onClick={setPrevious} disabled={activeIndex === 0} aria-label="Show previous products" title="Previous products">
                <ArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={setNext} disabled={activeIndex >= metrics.maxIndex} aria-label="Show next products" title="Next products">
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </motion.div>
      </div>

      {!isHandoffActive ? <ProductSuiteHeading floating={false} /> : null}
    </Section>
  );
}
