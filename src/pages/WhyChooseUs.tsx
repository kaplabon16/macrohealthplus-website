import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import { setPageMeta } from '../utils/seo';

const workflowPoints = [
  'Focused products for different roles, with patient and service information able to move between the people responsible for the next stage of work.',
  'Electronic records that reduce repeated entry and preserve useful clinical context beyond the appointment in which it was first captured.',
  'MIMS medicine information positioned inside the prescribing process, where clinicians can review relevant guidance without leaving the consultation workflow.',
  'Safety guidance covering interactions, allergies, pregnancy, lactation, duplication, and other relevant prescribing considerations.',
  'A traceable service journey connecting booking, consultation, investigation, billing, reporting, communication, and follow-up.',
  'Longitudinal patient information that can include medical history, immunisation details, documents, results, and other resources required for continuity of care.',
  'Remote-care tools that allow scheduled advice, prescriptions, investigation orders, and summaries to remain part of the wider patient record.',
  'Patient-facing information designed to improve understanding and help people participate more confidently in decisions about their care.',
  'Professional resources that support continued learning and awareness of current international clinical practice.',
];

const securityPoints = [
  {
    title: 'Cloud Integration',
    text: 'Cloud-ready architecture helps protect communication, improve availability, and support disciplined backup practices.',
  },
  {
    title: 'Permitted Browser Feature',
    text: 'Restrict system access to approved environments so teams can reduce unauthorized usage and improve operational control.',
  },
  {
    title: 'Manage User Permission',
    text: 'Assign role-based permissions for doctors, nurses, allied health professionals, and administrators so users access only the data they need.',
  },
  {
    title: 'Continuous Data Protection',
    text: 'Store documents and operational data with structured protection, secure server practices, and deployment options that can be aligned with owner requirements.',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    setPageMeta('Why Choose Us', 'MacroHealthPlus workflow, data safety, and security information.');
  }, []);

  return (
    <>
      <Section className="pt-36" eyebrow="Why MacroHealthPlus" title="Technology that respects how healthcare work actually happens" intro="The platform is designed to strengthen continuity between people, records, services, and decisions without forcing every role into the same interface.">
        <motion.ul
          className="max-w-4xl space-y-4 text-sm leading-7 text-slate-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
        >
          {workflowPoints.map((point) => (
            <motion.li className="border-t border-white/10 pt-4" key={point} variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}>{point}</motion.li>
          ))}
        </motion.ul>
      </Section>
      <Section title="Security and control built into daily use" intro="Data protection is not a separate screen. It depends on how access is granted, how information is stored, and how consistently teams work with the system.">
        <div className="max-w-4xl space-y-8">
          {securityPoints.map((point) => (
            <motion.section
              key={point.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-xl font-semibold text-white">{point.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{point.text}</p>
            </motion.section>
          ))}
        </div>
      </Section>
    </>
  );
}
