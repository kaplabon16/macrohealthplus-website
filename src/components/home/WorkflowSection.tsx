import { motion } from 'framer-motion';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';

const items = [
  {
    title: 'Business Consistency',
    text: 'Run healthcare services with the discipline of a modern business. MacroHealthPlus helps teams manage patient acquisition, service delivery, billing visibility, and long-term retention through connected workflows.',
  },
  { title: 'Central Management', text: 'Bring appointments, records, lab reports, pharmacy activity, telehealth, and communication into one management view.' },
  { title: 'Efficient Operations', text: 'Reduce repeated manual work, improve handoffs between teams, and give management better visibility into daily performance.' },
];

const ecosystem = ['Patient', 'Doctors', 'Allied Healthcare Staff', 'Clinic', 'Hospitals', 'Pharmacy', 'Pharmaceutical Company', 'Insurance', 'Tele Medicine', 'Medical College', 'Technology Providers', 'Investor', 'Regulators', 'Government'];

export default function WorkflowSection() {
  return (
    <Section title="Improve Efficiency, Accuracy, and Operational Control">
      <div className="space-y-10">
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
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
          <h2 className="text-2xl font-semibold text-white">Health Eco-System</h2>
          <motion.div
            className="mt-5 flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
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
