import { motion } from 'framer-motion';
import { routes } from '../../utils/routes';
import Section from '../layout/Section';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <Section>
      <motion.div
        className="soft-card gloss-hover flex flex-col items-start justify-between gap-5 rounded-[2rem] p-8 md:flex-row md:items-center md:p-10"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h2 className="text-3xl font-semibold text-white">Ready to Modernize Your Healthcare Workflow?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Book a guided demo and see how MacroHealthPlus can support your doctors, clinics, diagnostics, pharmacies, and patients.</p>
        </div>
        <Button href={routes.requestDemo} icon>Request a Demo</Button>
      </motion.div>
    </Section>
  );
}
