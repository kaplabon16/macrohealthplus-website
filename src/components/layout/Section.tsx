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
    <section className={`relative bg-black/90 px-6 py-12 md:py-16 ${className}`}>
      <AnimatedSection className="mx-auto max-w-6xl">
        {title ? (
          <div className="section-heading mb-8 max-w-3xl">
            {eyebrow ? <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.28em] text-green-300">{eyebrow}</p> : null}
            <h2 className="section-title mt-4 text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">{title}</h2>
            {intro ? <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{intro}</p> : null}
            <motion.span
              className="section-heading-line mt-6 block h-px"
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
