import Section from '../layout/Section';

const points = [
  'Individual or clinic management, Pharmacy management.',
  'Safe and secure practice with the protective features from MIMS.',
  'Easy way to record clinical notes and workflow.',
  'Keep track of all your patient data, recall and reminder system in every system.',
  'Get your data analytical report for clinical or business needs.',
  'Highest Security protocol in every solution.',
];

export default function PlatformOverview() {
  return (
    <Section
      title="Medical Practice Management Software"
      intro="Every healthcare facility is connected to each other with intelligence software with our solutions. The solutions we create usually cover multiple needs: from managing the supplies, clinical management to selling medication both online and offline and managing your business a whole."
    >
      <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
        {points.map((point) => (
          <li className="border-t border-white/10 pt-3" key={point}>{point}</li>
        ))}
      </ul>
    </Section>
  );
}
