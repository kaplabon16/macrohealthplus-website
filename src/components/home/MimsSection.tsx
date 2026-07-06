import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Button from '../ui/Button';

export default function MimsSection() {
  return (
    <>
      <Section
        title="Prescribing Support Backed by MIMS"
        intro="MacroHealthPlus helps clinicians make better prescribing decisions with drug information and interaction alerts designed for busy practice environments."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1fr]">
          <motion.div className="soft-card overflow-hidden rounded-[1.8rem] p-2" initial={{ opacity: 0, x: -38 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <img className="w-full rounded-[1.35rem] object-cover" src="/assets/generated/health-tech-workflow.webp" alt="MIMS integrated prescribing" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-3xl font-semibold text-white">Access updated medicine information when clinical decisions are being made.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              MIMS support adds an international-standard drug information layer to the workflow, helping teams review interactions, safety considerations, and prescribing context more confidently.
            </p>
            <div className="mt-7">
              <Button href="/request-demo" icon>Request a Demo Today</Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
