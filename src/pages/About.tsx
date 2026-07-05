import { useEffect } from 'react';
import Section from '../components/layout/Section';
import GlassCard from '../components/ui/GlassCard';
import { setPageMeta } from '../utils/seo';

const businessPlan = [
  'We produce International Standard Medical Software for Clinical use by the Doctors, Nurses, and Allied Health professionals.',
  'We integrate the public health care system to personal care and develop software for general people.',
  'Connecting people and health care professionals through electronic platforms.',
  'Educate Medical professionals and the general public through electronic media.',
];

const targetMarket = [
  'Doctor, Nurses, Allied health professionals, Health administrator, Clinics, Private and Public Hospital in Bangladesh.',
  'General People of Bangladesh in large as users.',
  'Later stage similar groups in other parts of the world.',
];

export default function About() {
  useEffect(() => {
    setPageMeta('Who We Are', 'MacroHealthPlus mission, vision, team, business plan, and target market.');
  }, []);

  return (
    <>
      <Section className="pt-36" eyebrow="About Us" title="Who We Are">
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-xl font-semibold text-white">Mission</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">We are the “clinical standard” partner of your low-cost medical care in Bangladesh.</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-xl font-semibold text-white">Vision</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Error free highest quality of medical care through world class computer programs, guide the clinician now and in future with Artificial Intelligence (AI) and deliver it with an affordable low cost.
            </p>
          </GlassCard>
        </div>
      </Section>
      <Section title="Our Team Member">
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
      <Section title="Our Advisory Member">
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
      <Section title="Our Business Plan">
        <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
          {businessPlan.map((item) => <li className="border-t border-slate-200 pt-3" key={item}>{item}</li>)}
        </ul>
      </Section>
      <Section title="Our Target Market">
        <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-3">
          {targetMarket.map((item) => <li className="border-t border-slate-200 pt-3" key={item}>{item}</li>)}
        </ul>
      </Section>
    </>
  );
}
