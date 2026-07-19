import Section from '../layout/Section';
import ClientLogoMarquee from '../ui/ClientLogoMarquee';

export default function Partners() {
  return (
    <Section
      eyebrow="Our Partners"
      title="Trusted by teams delivering care every day"
      intro="MacroHealthPlus works alongside healthcare organizations that depend on reliable systems at the consultation desk, diagnostic counter, pharmacy, and patient-service point. Their operational experience continues to inform how our products evolve."
    >
      <ClientLogoMarquee />
    </Section>
  );
}
