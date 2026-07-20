import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

type SectionProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
};

export default function Section({ children, eyebrow, title, intro, className = '' }: SectionProps) {
  const reduceMotion = false;

  return (
    <section className={`site-section relative bg-black/90 px-4 py-7 sm:px-6 sm:py-9 md:py-11 lg:py-14 ${className}`}>
      <AnimatedSection className="mx-auto max-w-6xl">
        {title ? (
          <div className="section-heading mb-5 max-w-3xl sm:mb-6 lg:mb-8">
            {eyebrow ? <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.24em] text-green-300 sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p> : null}
            <h2 className="section-title mt-2.5 text-2xl font-semibold leading-tight tracking-normal text-white sm:mt-3 sm:text-3xl md:text-4xl lg:mt-4 lg:text-5xl">{title}</h2>
            {intro ? <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-[15px] md:text-base md:leading-7 lg:mt-5 lg:text-lg">{intro}</p> : null}
            <motion.span
              className="section-heading-line mt-4 block h-px sm:mt-5 lg:mt-6"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        ) : null}
        {children}
      </AnimatedSection>
    </section>
  );
}
