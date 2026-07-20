import { motion } from 'framer-motion';
import Section from '../layout/Section';

const points = [
  'Configure the platform around an independent practice, a multi-service clinic, a diagnostic network, a pharmacy, or a hospital operation.',
  'Bring MIMS medicine information and interaction guidance closer to the moment a clinician prepares a prescription.',
  'Carry patient context from booking into consultation, investigation, billing, reporting, and follow-up without rebuilding the record at every desk.',
  'Organize reminders, recalls, documents, results, and communication history around one consistent patient identity.',
  'Translate routine service activity into operational and financial reports that leaders can review and act on.',
  'Define access by role and responsibility so clinical, administrative, and management users see the information required for their work.',
];

export default function PlatformOverview() {
  return (
    <Section
      title="One operational foundation, shaped around your organization"
      intro="MacroHealthPlus replaces fragmented handoffs with a shared digital foundation. Teams can work within focused modules while patient, service, and business information remains available across the wider organization."
    >
      <motion.ul
        className="grid gap-2 text-xs leading-5 text-slate-300 sm:grid-cols-2 sm:gap-3 sm:text-sm sm:leading-6 lg:leading-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
      >
        {points.map((point) => (
          <motion.li
            className="border-t border-white/10 pt-3 transition duration-200 hover:border-green-300/60 hover:text-white"
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
