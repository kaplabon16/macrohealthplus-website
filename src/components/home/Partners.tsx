import Section from '../layout/Section';
import ClientLogoMarquee from '../ui/ClientLogoMarquee';

export default function Partners() {
  return (
    <Section
      eyebrow="Our Partners"
      title="Our Partners"
      intro="Healthcare organizations use MacroHealthPlus to bring clinical operations, diagnostics, pharmacy workflows, and patient services into a more connected digital environment."
    >
      <ClientLogoMarquee />
    </Section>
  );
}
