import { useEffect } from 'react';
import Section from '../components/layout/Section';
import GlassCard from '../components/ui/GlassCard';
import { setPageMeta } from '../utils/seo';

const businessPlan = [
  'Build international-standard healthcare software for doctors, nurses, allied health professionals, clinics, diagnostics, pharmacies, and administrators.',
  'Connect clinical practice, public health needs, and personal healthcare access through secure digital platforms.',
  'Create practical electronic channels that help patients and healthcare professionals communicate more efficiently.',
  'Support medical education and patient awareness through accessible digital resources and healthcare information.',
];

const targetMarket = [
  'Doctors, nurses, allied health professionals, administrators, clinics, diagnostics, pharmacies, and hospitals in Bangladesh.',
  'Patients and general healthcare users who need more organized access to care and health information.',
  'Healthcare teams in international markets that need affordable, secure, and connected practice management software.',
];

export default function About() {
  useEffect(() => {
    setPageMeta('Who We Are', 'MacroHealthPlus mission, vision, team, business plan, and target market.');
  }, []);

  return (
    <>
      <Section className="pt-36" eyebrow="About Us" title="A Healthcare Software Company Built Around Clinical Reality">
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-xl font-semibold text-white">Mission</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">To make reliable, clinical-standard healthcare software accessible for practices and organizations that want better care delivery at a sustainable cost.</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-xl font-semibold text-white">Vision</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              To support safer, smarter, and more efficient healthcare through world-class digital systems that guide clinicians today and prepare organizations for the future of AI-assisted care.
            </p>
          </GlassCard>
        </div>
      </Section>
      <Section title="Leadership Team">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['Dr. Aminur Rahman', 'Managing Director & CEO'],
            ['Dr. Mohsina Nazneen Bhuiyan', 'Director'],
          ].map(([name, role]) => (
            <GlassCard key={name}>
              <h2 className="text-lg font-semibold text-white">{name}</h2>
              <p className="mt-2 text-sm text-slate-600">{role}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section title="Advisory Members">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['Nick Ebbeck', 'Advisor'],
            ['Dr Muhammad Sajedur Rahman', 'Advisor'],
          ].map(([name, role]) => (
            <GlassCard key={name}>
              <h2 className="text-lg font-semibold text-white">{name}</h2>
              <p className="mt-2 text-sm text-slate-600">{role}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section title="Our Direction">
        <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
          {businessPlan.map((item) => <li className="border-t border-slate-200 pt-3" key={item}>{item}</li>)}
        </ul>
      </Section>
      <Section title="Who We Serve">
        <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-3">
          {targetMarket.map((item) => <li className="border-t border-slate-200 pt-3" key={item}>{item}</li>)}
        </ul>
      </Section>
    </>
  );
}
