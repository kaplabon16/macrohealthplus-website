import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Button from '../ui/Button';

export default function MimsSection() {
  return (
    <Section className="overflow-hidden">
      <div className="grid items-center gap-5 sm:gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-8 lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.01 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-300">Medication Intelligence</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:mt-4 lg:text-5xl">Clinical decisions supported by trusted MIMS medicine information.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-[15px] sm:leading-7 md:text-base lg:mt-6 lg:text-lg lg:leading-8">
            MacroHealthPlus brings MIMS drug knowledge into the prescribing workflow, giving clinicians relevant medicine information at the point where a prescription is prepared.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7 lg:leading-8">
            Interaction guidance can help teams review drug-to-drug, allergy, pregnancy, and other prescribing considerations without interrupting the consultation to search across disconnected references.
          </p>
          <div className="mt-5 lg:mt-8">
            <Button href="/request-demo" icon>Explore Clinical Workflows</Button>
          </div>
        </motion.div>
        <motion.div className="relative min-h-[230px] sm:min-h-[310px] md:min-h-[360px] lg:min-h-[540px]" initial={{ opacity: 0, x: 38 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.01 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <a className="absolute right-0 top-0 z-10 block w-44 md:w-56" href="https://corporate.mims.com/" target="_blank" rel="noreferrer" aria-label="Visit the official MIMS website">
            <img className="h-auto w-full" src="/assets/mims/mims-logo.webp" alt="MIMS" loading="lazy" decoding="async" />
          </a>
          <img
            className="absolute bottom-0 right-[-8%] h-[88%] w-auto max-w-none object-contain md:right-0 md:h-[92%]"
            src="/assets/mims/mims-healthcare-professional.webp"
            alt="A doctor examining a child with a parent present"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </Section>
  );
}
