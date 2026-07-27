import { motion } from 'framer-motion';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';
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
  return (
    <Section title="Better work at the desk. Better continuity across the organization." intro="Digital transformation matters when it improves the ordinary moments that shape care: finding the right record, completing an order, collecting payment, publishing a result, or knowing what must happen next.">
      <div className="space-y-7 sm:space-y-8 lg:space-y-10">
        <motion.div
          className="grid gap-3 sm:grid-cols-3 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {items.map((item) => (
            <motion.section key={item.title} variants={{ hidden: { opacity: 1, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}>
              <GlassCard className="h-full p-4 sm:p-5 lg:p-6">
              <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">{item.title}</h2>
              {item.text ? <p className="mt-2.5 text-xs leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6 lg:mt-4 lg:leading-7">{item.text}</p> : null}
              </GlassCard>
            </motion.section>
          ))}
        </motion.div>
        <ConnectedCareGraph />
      </div>
    </Section>
  );
}
