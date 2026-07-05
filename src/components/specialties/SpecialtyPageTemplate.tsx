import { CheckCircle } from 'lucide-react';
import type { Specialty } from '../../data/specialties';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';

type SpecialtyPageTemplateProps = {
  specialty: Specialty;
};

export default function SpecialtyPageTemplate({ specialty }: SpecialtyPageTemplateProps) {
  return (
    <>
      <Section className="pt-36" eyebrow="Speciality" title={specialty.title} intro={specialty.description}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">MacroHealthPlus for {specialty.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{specialty.description}</p>
          </div>
          {specialty.image ? (
            <img className="dark-image aspect-[4/3] w-full rounded-[1.5rem] object-contain" src={specialty.image} alt={`${specialty.title} workflow visual`} loading="lazy" />
          ) : null}
        </div>
      </Section>
      <Section title="Key workflow support">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialty.features.map((feature) => (
            <GlassCard key={feature}>
              <CheckCircle className="h-5 w-5 text-sky-300" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold leading-6 text-white">{feature}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
