import { specialties } from '../../data/specialties';
import Section from '../layout/Section';

export default function SpecialtiesPreview() {
  return (
    <Section title="Enrich the Clinical Experience with MacroHealthPlus Software">
      <div className="flex flex-wrap gap-3">
        {specialties.map((specialty) => (
          <a className="rounded-full border border-white/12 px-4 py-2 text-sm text-slate-200 transition hover:border-green-300 hover:text-green-200" href={specialty.route} key={specialty.route}>
            {specialty.title}
          </a>
        ))}
      </div>
    </Section>
  );
}
