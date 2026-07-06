import { useEffect } from 'react';
import Section from '../components/layout/Section';
import { setPageMeta } from '../utils/seo';

const workflowPoints = [
  'Integrated healthcare software that connects patient and doctor communication inside a secure digital environment.',
  'Electronic health records designed to reduce repeated data entry and keep clinical information accessible when it matters.',
  'MIMS drug information support to help clinicians review safety considerations during a busy prescribing workflow.',
  'Prescription alerts for drug interactions, allergies, pregnancy, lactation, duplication, and relevant clinical risk factors.',
  'Patient screening and operational workflows that connect booking, consultation, billing, reporting, and follow-up.',
  'Clinical records that can support lifelong patient history, immunisation information, and practical resources for care teams.',
  'Remote consultation tools that allow doctors to advise patients from anywhere using secure digital access.',
  'Patient education resources designed to improve understanding and support better healthcare decisions.',
  'Clinical learning resources that help professionals stay informed about current international practice.',
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
      <Section className="pt-36" title="Why Healthcare Teams Choose MacroHealthPlus">
        <ul className="max-w-4xl space-y-4 text-sm leading-7 text-slate-300">
          {workflowPoints.map((point) => (
            <li className="border-t border-white/10 pt-4" key={point}>{point}</li>
          ))}
        </ul>
      </Section>
      <Section title="Security, Control, and Data Confidence">
        <div className="max-w-4xl space-y-8">
          {securityPoints.map((point) => (
            <section key={point.title}>
              <h2 className="text-xl font-semibold text-white">{point.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{point.text}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
