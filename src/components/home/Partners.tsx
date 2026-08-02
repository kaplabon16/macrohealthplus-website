import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import ClientLogoMarquee from '../ui/ClientLogoMarquee';

export default function Partners() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      className="partners-section"
      eyebrow="Our Partners"
      title="Trusted by teams delivering care every day"
      intro="MacroHealthPlus works alongside healthcare organizations that depend on reliable systems at the consultation desk, diagnostic counter, pharmacy, and patient-service point. Their operational experience continues to inform how our products evolve."
    >
      <motion.div
        className="partners-runway"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="partners-runway-meta" aria-hidden="true">
          <span>Healthcare network</span>
        </div>
        <ClientLogoMarquee />
      </motion.div>
    </Section>
  );
}
