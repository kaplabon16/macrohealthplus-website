import { motion } from 'framer-motion';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';

const items = [
  {
    title: 'A Consistent Standard of Service',
    text: 'Create a repeatable journey from registration to follow-up, with clear responsibilities, fewer missed handoffs, and a more dependable experience for every patient.',
  },
  { title: 'Decisions With Better Context', text: 'Give authorized teams timely access to appointments, clinical history, diagnostic activity, medicine sales, and service status instead of relying on scattered updates.' },
  { title: 'Less Administrative Friction', text: 'Reduce duplicate entry, shorten routine desk work, and make outstanding actions easier to identify before they delay care or payment.' },
];

const ecosystem = ['Patient', 'Doctors', 'Allied Healthcare Staff', 'Clinic', 'Hospitals', 'Pharmacy', 'Pharmaceutical Company', 'Insurance', 'Tele Medicine', 'Medical College', 'Technology Providers', 'Investor', 'Regulators', 'Government'];

export default function WorkflowSection() {
  return (
    <Section title="Better work at the desk. Better continuity across the organization." intro="Digital transformation matters when it improves the ordinary moments that shape care: finding the right record, completing an order, collecting payment, publishing a result, or knowing what must happen next.">
      <div className="space-y-10">
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {items.map((item) => (
            <motion.section key={item.title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}>
              <GlassCard className="h-full">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              {item.text ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p> : null}
              </GlassCard>
            </motion.section>
          ))}
        </motion.div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Designed for the wider healthcare ecosystem</h2>
          <motion.div
            className="mt-5 flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
          >
            {ecosystem.map((item) => (
              <motion.span
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-green-300/60 hover:bg-white hover:text-slate-950"
                key={item}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
