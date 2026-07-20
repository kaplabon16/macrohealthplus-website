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

const ecosystemRows = [
  ecosystem.slice(0, 6),
  ecosystem.slice(6, 10),
  ecosystem.slice(10),
];

const ecosystemTextSizes = ['ecosystem-name-small', 'ecosystem-name-large', 'ecosystem-name-medium'];

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
        <div className="ecosystem-section">
          <div className="mb-4 grid items-end gap-2 md:grid-cols-[1fr_auto] md:gap-6 lg:mb-6 lg:gap-8">
            <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">Designed for the wider healthcare ecosystem</h2>
            <p className="max-w-xs text-xs font-semibold uppercase tracking-[0.22em] text-green-300 md:text-right">Fourteen perspectives. One connected system.</p>
          </div>
          <motion.div
            className="ecosystem-viewport"
            aria-label={`MacroHealthPlus is designed for ${ecosystem.join(', ')}`}
            initial={{ opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ecosystem-backdrop-word" aria-hidden="true">CONNECTED CARE</span>
            {ecosystemRows.map((row, rowIndex) => (
              <div className={`ecosystem-lane ecosystem-lane-${rowIndex + 1}`} key={row.join('-')} aria-hidden="true">
                <div className="ecosystem-track">
                  {[0, 1].map((copyIndex) => (
                    <div className="ecosystem-set" key={copyIndex}>
                      {row.map((item, itemIndex) => (
                        <span className={`ecosystem-name ${ecosystemTextSizes[(itemIndex + rowIndex) % ecosystemTextSizes.length]}`} key={`${copyIndex}-${item}`}>
                          <small>{String(ecosystem.indexOf(item) + 1).padStart(2, '0')}</small>
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
