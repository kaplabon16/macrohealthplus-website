import { motion } from 'framer-motion';
import Section from '../layout/Section';

const points = [
  'Manage individual practices, clinics, diagnostic workflows, and pharmacy operations from connected digital modules.',
  'Support safer prescribing decisions with MIMS-enabled drug information and interaction guidance.',
  'Capture clinical notes, orders, prescriptions, billing, and follow-up actions with less administrative effort.',
  'Keep patient data, reminders, recalls, reports, and communication history organized in one secure system.',
  'Turn daily operational data into management reports for clinical, financial, and business decisions.',
  'Protect healthcare data with secure access controls, cloud-ready architecture, and disciplined permission management.',
];

export default function PlatformOverview() {
  return (
    <Section
      title="A Connected Operating System for Healthcare"
      intro="MacroHealthPlus brings core healthcare operations into one intelligent software environment, from appointments and clinical records to diagnostics, pharmacy, telehealth, reporting, and business management."
    >
      <motion.ul
        className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
      >
        {points.map((point) => (
          <motion.li
            className="border-t border-white/10 pt-3 transition duration-300 hover:border-green-300/60 hover:text-white"
            key={point}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
