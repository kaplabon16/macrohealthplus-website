import { motion, useReducedMotion } from 'framer-motion';
import { routes } from '../../utils/routes';
import Section from '../layout/Section';
import Button from '../ui/Button';

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="home-final-cta-section">
      <motion.div
        className="home-final-cta"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="home-final-cta-signal" aria-hidden="true" />
        <motion.div
          className="home-final-cta-art"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, x: -34, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="home-final-cta-plane home-final-cta-plane-violet" />
          <span className="home-final-cta-plane home-final-cta-plane-blue" />
          <span className="home-final-cta-plane home-final-cta-plane-red" />
          <span className="home-final-cta-plane home-final-cta-plane-green" />
        </motion.div>
        <p className="home-final-cta-kicker">A clearer operating model starts here</p>
        <div className="home-final-cta-copy">
          <h2>See how MacroHealthPlus fits your operation</h2>
          <p>Tell us how your organization works today. We will focus the demonstration on the products, roles, and service flows most relevant to your team.</p>
        </div>
        <div className="home-final-cta-action">
          <Button href={routes.requestDemo} icon>Request a Demo</Button>
        </div>
      </motion.div>
    </Section>
  );
}
