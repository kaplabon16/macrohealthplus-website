'use client';

import type { CSSProperties } from 'react';
import { CalendarCheck2, ClipboardPlus, Clock3, FilePenLine, Video } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';

const stages = [
  { title: 'Setup Your Timing', icon: Clock3, accent: '#01D439' },
  { title: 'Define Payment', icon: CalendarCheck2, accent: '#47c9bc' },
  { title: 'Manage Video Appointment', icon: Video, accent: '#4d8cf5' },
  { title: 'Take Notes in GreatDoc', icon: FilePenLine, accent: '#ef6b67' },
  { title: 'Order Investigations in GreatDoc', icon: ClipboardPlus, accent: '#f0a11a' },
];

export default function TelehealthWorkflow() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      className="telehealth-workflow-section"
      eyebrow="Connected Virtual Care"
      title="From availability to clinical follow-up"
      intro="A structured telehealth workflow keeps scheduling, payment, consultation, clinical notes, and investigation orders connected."
    >
      <motion.ol
        className="telehealth-workflow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }}
      >
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.li
              className="telehealth-workflow-stage"
              key={stage.title}
              style={{ '--telehealth-stage-accent': stage.accent } as CSSProperties}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.94 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className="telehealth-workflow-icon"><Icon aria-hidden="true" /></span>
              <strong>{stage.title}</strong>
              {index < stages.length - 1 ? <span className="telehealth-workflow-connector" aria-hidden="true"><i /></span> : null}
            </motion.li>
          );
        })}
      </motion.ol>
    </Section>
  );
}
