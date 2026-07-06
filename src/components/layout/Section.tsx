import AnimatedSection from '../ui/AnimatedSection';

type SectionProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
};

export default function Section({ children, eyebrow, title, intro, className = '' }: SectionProps) {
  return (
    <section className={`relative bg-black/90 px-6 py-24 ${className}`}>
      <AnimatedSection className="mx-auto max-w-6xl">
        {title ? (
          <div className="mb-12 max-w-3xl">
            {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-300">{eyebrow}</p> : null}
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">{title}</h2>
            {intro ? <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </AnimatedSection>
    </section>
  );
}
