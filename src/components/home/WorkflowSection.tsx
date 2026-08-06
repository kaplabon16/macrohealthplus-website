import { ArrowDownRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import ConnectedCareGraph from './ConnectedCareGraph';

const items = [
  {
    title: 'A Consistent Standard of Service',
    text: 'Create a repeatable journey from registration to follow-up, with clear responsibilities, fewer missed handoffs, and a more dependable experience for every patient.',
  },
  { title: 'Decisions With Better Context', text: 'Give authorized teams timely access to appointments, clinical history, diagnostic activity, medicine sales, and service status instead of relying on scattered updates.' },
  { title: 'Less Administrative Friction', text: 'Reduce duplicate entry, shorten routine desk work, and make outstanding actions easier to identify before they delay care or payment.' },
];

export default function WorkflowSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section disableAnimation className="workflow-home-section" title="Better work at the desk. Better continuity across the organization." intro="Digital transformation matters when it improves the ordinary moments that shape care: finding the right record, completing an order, collecting payment, publishing a result, or knowing what must happen next.">
      <div className="space-y-7 sm:space-y-8 lg:space-y-10">
        <motion.div
          className="workflow-principles"
          initial="rest"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.06 } } }}
        >
          {items.map((item) => (
            <motion.article
              className="workflow-principle"
              key={item.title}
              variants={{
                rest: { opacity: 0, y: reduceMotion ? 0 : 24 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <ArrowDownRight className="workflow-principle-arrow" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
        <ConnectedCareGraph />
      </div>
    </Section>
  );
}
