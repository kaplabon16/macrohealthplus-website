import { Activity, BarChart3, Building2, FileHeart, ShieldCheck, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import BrandedText from '../ui/BrandedText';

const points = [
  { icon: Building2, label: 'Adaptable operations', text: 'Configure the platform around an independent practice, a multi-service clinic, a diagnostic network, a pharmacy, or a hospital operation.' },
  { icon: Stethoscope, label: 'Medicine intelligence', text: 'Bring MIMS medicine information and interaction guidance closer to the moment a clinician prepares a prescription.' },
  { icon: Activity, label: 'Continuous context', text: 'Carry patient context from booking into consultation, investigation, billing, reporting, and follow-up without rebuilding the record at every desk.' },
  { icon: FileHeart, label: 'One patient identity', text: 'Organize reminders, recalls, documents, results, and communication history around one consistent patient identity.' },
  { icon: BarChart3, label: 'Operational visibility', text: 'Translate routine service activity into operational and financial reports that leaders can review and act on.' },
  { icon: ShieldCheck, label: 'Responsible access', text: 'Define access by role and responsibility so clinical, administrative, and management users see the information required for their work.' },
];

export default function PlatformOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="platform-overview-section"
      title="One operational foundation, shaped around your organization"
      intro="MacroHealthPlus eliminates disconnected workflows by providing a unified digital platform that connects every department."
    >
      <div className="platform-operating-grid">
        <motion.div
          className="platform-orbit"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <span className="platform-orbit-ring platform-orbit-ring-one" />
          <span className="platform-orbit-ring platform-orbit-ring-two" />
          <span className="platform-orbit-core">
            <span className="platform-orbit-logo-crop">
              <img src="/assets/macrohealthplus/official-logos/MHP-Logo-Vertical.webp" alt="" />
            </span>
          </span>
          <span className="platform-orbit-copy">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path id="platform-orbit-copy-path" d="M 50,23.5 a 26.5,26.5 0 1,1 0,53 a 26.5,26.5 0 1,1 0,-53" />
                <linearGradient id="platform-orbit-copy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#01D439" />
                  <stop offset="52%" stopColor="#0EA5A4" />
                  <stop offset="100%" stopColor="#01D439" />
                </linearGradient>
              </defs>
              <text>
                <textPath href="#platform-orbit-copy-path" startOffset="50%" textAnchor="middle">ONE SHARED  CONNECTED PLATFORM</textPath>
              </text>
            </svg>
          </span>
          <span className="platform-orbit-signal platform-orbit-signal-outer" />
          <span className="platform-orbit-signal platform-orbit-signal-middle" />
          <span className="platform-orbit-signal platform-orbit-signal-inner" />
        </motion.div>

        <motion.ul
          className="platform-capability-list"
          initial="rest"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.05 } } }}
        >
          {points.map(({ icon: Icon, label, text }) => (
            <motion.li
              className="platform-capability"
              key={label}
              variants={{
                rest: { opacity: 0, x: reduceMotion ? 0 : 24 },
                visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className="platform-capability-icon"><Icon /></span>
              <div>
                <h3>{label}</h3>
                <p><BrandedText>{text}</BrandedText></p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
