import { motion } from 'framer-motion';
import { routes } from '../../utils/routes';
import Section from '../layout/Section';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <Section>
      <motion.div
        className="relative flex flex-col items-start justify-between gap-4 border-y border-white/15 py-5 sm:py-6 md:flex-row md:items-center lg:py-10"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="absolute left-0 top-0 h-0.5 w-24 bg-gradient-to-r from-green-400 to-cyan-300" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">See how MacroHealthPlus fits your operation</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Tell us how your organization works today. We will focus the demonstration on the products, roles, and service flows most relevant to your team.</p>
        </div>
        <Button href={routes.requestDemo} icon>Request a Demo</Button>
      </motion.div>
    </Section>
  );
}
