'use client';

import {
  BadgeDollarSign,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  FlaskConical,
  Mail,
  Microscope,
  MonitorCheck,
  PlugZap,
  Send,
  Smartphone,
  Stethoscope,
  UserRound,
} from 'lucide-react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import Image from 'next/image';
import type { CSSProperties, ElementType } from 'react';
import { useRef, useState } from 'react';

type FlowNode = {
  title: string;
  detail: string;
  icon: ElementType;
  x: number;
  y: number;
  reveal: number;
  portrait?: number;
};

type FlowStage = {
  eyebrow: string;
  title: string;
  description: string;
  focus: number[];
  camera: { x: number; y: number; scale: number };
};

const flowNodes: FlowNode[] = [
  {
    title: 'Patient',
    detail: 'Registration, DigiPatient app and patient card',
    icon: UserRound,
    x: 10,
    y: 12,
    reveal: 0,
    portrait: 4,
  },
  {
    title: 'Billing Counter',
    detail: 'Cash, due or refund processing',
    icon: CreditCard,
    x: 10,
    y: 48,
    reveal: 1,
  },
  {
    title: 'Sample Collection',
    detail: 'Lab and radiology collection points',
    icon: FlaskConical,
    x: 36,
    y: 69,
    reveal: 2,
  },
  {
    title: 'Lab & Radiology Technicians',
    detail: 'Sample transfer and technical processing',
    icon: Microscope,
    x: 50,
    y: 17,
    reveal: 3,
    portrait: 3,
  },
  {
    title: 'Software Interconnect',
    detail: 'Connected to the organization’s own software',
    icon: PlugZap,
    x: 67,
    y: 12,
    reveal: 4,
  },
  {
    title: 'Results in the System',
    detail: 'Verified results entered into the workflow',
    icon: MonitorCheck,
    x: 84,
    y: 18,
    reveal: 4,
  },
  {
    title: 'Testing Laboratory',
    detail: 'Testing and medical record preparation',
    icon: ClipboardCheck,
    x: 84,
    y: 44,
    reveal: 5,
  },
  {
    title: 'Report Delivery',
    detail: 'Completed report prepared for delivery',
    icon: FileCheck2,
    x: 84,
    y: 66,
    reveal: 5,
  },
  {
    title: 'Payment Check',
    detail: 'Due collection and payment confirmation',
    icon: BadgeDollarSign,
    x: 84,
    y: 86,
    reveal: 6,
  },
  {
    title: 'Report Distribution',
    detail: 'Email, DigiPatient app and doctor inbox',
    icon: Send,
    x: 36,
    y: 86,
    reveal: 7,
    portrait: 1,
  },
];

const flowStages: FlowStage[] = [
  {
    eyebrow: 'Patient entry',
    title: 'The laboratory journey starts with one registered patient.',
    description: 'Patient registration establishes the identity used for the order, DigiPatient access, the patient card, billing, and every result that follows.',
    focus: [0],
    camera: { x: 58, y: 30, scale: 1.08 },
  },
  {
    eyebrow: 'Billing and invoice',
    title: 'Billing confirms the service before the sample moves.',
    description: 'The billing counter handles cash, due, and refund activity. The invoice remains connected to the patient, with registration and invoice SMS updates sent at the appropriate handoff.',
    focus: [0, 1],
    camera: { x: 58, y: -8, scale: 1.07 },
  },
  {
    eyebrow: 'Collection points',
    title: 'One order reaches the correct collection point.',
    description: 'The invoiced service routes the patient to the laboratory or radiology collection point, preserving the link between the patient, order, sample, and payment record.',
    focus: [1, 2],
    camera: { x: 28, y: -34, scale: 1.06 },
  },
  {
    eyebrow: 'Technical processing',
    title: 'Samples transfer to the people responsible for processing.',
    description: 'Laboratory and radiology technicians receive the collected material with its identifying context, reducing the risk of disconnected samples or manual re-entry.',
    focus: [2, 3],
    camera: { x: 14, y: 20, scale: 1.1 },
  },
  {
    eyebrow: 'System interconnection',
    title: 'Verified work flows back through the connected software.',
    description: 'The laboratory workflow interconnects with the organization’s own software so authorized technicians can enter and verify results in the same operational system.',
    focus: [3, 4, 5],
    camera: { x: -20, y: 28, scale: 1.08 },
  },
  {
    eyebrow: 'Testing and delivery',
    title: 'Testing becomes a completed, deliverable medical report.',
    description: 'Results move through testing, medical record preparation, and report delivery. A report-ready SMS can notify the patient when the output is available.',
    focus: [5, 6, 7],
    camera: { x: -52, y: -8, scale: 1.08 },
  },
  {
    eyebrow: 'Payment verification',
    title: 'Outstanding payment is checked before final release.',
    description: 'Payment status remains visible at the final checkpoint. When due collection is completed, the patient can receive a payment confirmation SMS.',
    focus: [7, 8],
    camera: { x: -48, y: -38, scale: 1.08 },
  },
  {
    eyebrow: 'Report distribution',
    title: 'The finished report reaches every intended destination.',
    description: 'The final report can be distributed through email, the DigiPatient app, and the doctor inbox while remaining connected to the original patient and laboratory journey.',
    focus: flowNodes.map((_, index) => index),
    camera: { x: 0, y: 0, scale: 0.96 },
  },
];

const edgePaths = [
  'M100 102 C100 150 100 215 100 258',
  'M125 300 C205 300 235 414 330 414',
  'M360 384 C370 285 425 190 500 132',
  'M530 102 C570 102 610 82 640 76',
  'M700 78 C750 80 790 90 810 108',
  'M840 138 C840 180 840 215 840 234',
  'M840 294 C840 325 840 345 840 366',
  'M840 426 C840 450 840 465 840 486',
  'M810 520 C680 520 535 520 390 520',
];

const eventLabels = [
  { text: 'Registration SMS', x: 13, y: 28, reveal: 1 },
  { text: 'Invoice SMS', x: 25, y: 58, reveal: 2 },
  { text: 'Sample transfer', x: 38, y: 43, reveal: 3 },
  { text: 'Report-ready SMS', x: 86, y: 57, reveal: 6 },
  { text: 'Payment received SMS', x: 61, y: 82, reveal: 7 },
];

function FlowEdge({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / edgePaths.length;
  const end = Math.min(1, start + 0.15);
  const pathLength = useTransform(progress, [start, end], [0, 1]);
  const opacity = useTransform(progress, [start, Math.min(end, start + 0.035)], [0.15, 1]);

  return (
    <>
      <motion.path
        d={edgePaths[index]}
        fill="none"
        markerEnd="url(#lab-flow-arrow)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        style={{ opacity, pathLength }}
      />
      <motion.circle fill="currentColor" r="4" style={{ opacity }}>
        <animateMotion
          begin={`${index * 0.28}s`}
          dur={`${3.2 + index * 0.12}s`}
          path={edgePaths[index]}
          repeatCount="indefinite"
        />
      </motion.circle>
    </>
  );
}

function PortraitSprite({ index }: { index: number }) {
  return (
    <span className="lab-journey-portrait">
      <Image
        alt=""
        fill
        sizes="64px"
        src={`/assets/generated/network-users/user-${index + 1}.png`}
      />
    </span>
  );
}

function FlowNodeView({
  activeStage,
  index,
  node,
}: {
  activeStage: number;
  index: number;
  node: FlowNode;
}) {
  const Icon = node.icon;
  const visible = activeStage >= node.reveal;
  const current = flowStages[activeStage].focus.includes(index);

  return (
    <motion.div
      animate={{
        filter: current ? 'blur(0px)' : 'blur(0.4px)',
        opacity: visible ? (current ? 1 : 0.54) : 0.08,
        scale: current ? 1.06 : 1,
      }}
      className={`lab-journey-node lab-journey-node-${index + 1}`}
      initial={false}
      style={{ '--node-x': `${node.x}%`, '--node-y': `${node.y}%` } as CSSProperties}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {node.portrait !== undefined ? (
        <PortraitSprite index={node.portrait} />
      ) : (
        <span className="lab-journey-icon"><Icon className="h-5 w-5" /></span>
      )}
      <span className="lab-journey-node-copy">
        <strong>{node.title}</strong>
        <small>{node.detail}</small>
        {index === 9 ? (
          <span className="lab-journey-destinations">
            <span><Mail /><em>Report emailed to patient</em></span>
            <span><Smartphone /><em>Available in DigiPatient</em></span>
            <span><Stethoscope /><em>Delivered to doctor inbox</em></span>
          </span>
        ) : null}
      </span>
    </motion.div>
  );
}

function DesktopJourney({
  activeStage,
  progress,
}: {
  activeStage: number;
  progress: MotionValue<number>;
}) {
  const stage = flowStages[activeStage];

  return (
    <div className="lab-journey-sticky hidden lg:block">
      <motion.div
        animate={stage.camera}
        className="lab-journey-camera"
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="lab-journey-lines" preserveAspectRatio="none" viewBox="0 0 1000 600" aria-hidden="true">
          <defs>
            <marker id="lab-flow-arrow" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="2.5">
              <path d="M0 0 L5 2.5 L0 5 Z" fill="currentColor" />
            </marker>
          </defs>
          {edgePaths.map((_, index) => <FlowEdge index={index} key={edgePaths[index]} progress={progress} />)}
        </svg>

        {flowNodes.map((node, index) => (
          <FlowNodeView activeStage={activeStage} index={index} key={node.title} node={node} />
        ))}

        {eventLabels.map((event) => (
          <motion.span
            animate={{ opacity: activeStage >= event.reveal ? 1 : 0, y: activeStage >= event.reveal ? 0 : 8 }}
            className="lab-journey-event"
            key={event.text}
            style={{ '--event-x': `${event.x}%`, '--event-y': `${event.y}%` } as CSSProperties}
          >
            {event.text}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="lab-journey-copy"
        key={stage.eyebrow}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Stage {String(activeStage + 1).padStart(2, '0')}</p>
        <span>{stage.eyebrow}</span>
        <h2>{stage.title}</h2>
        <div>{stage.description}</div>
      </motion.div>

      <motion.div className="lab-journey-progress" style={{ scaleX: progress }} />
      <small className="lab-journey-count">
        {String(activeStage + 1).padStart(2, '0')} / {String(flowStages.length).padStart(2, '0')}
      </small>
    </div>
  );
}

function MobileJourney() {
  return (
    <div className="lab-journey-mobile lg:hidden">
      <header>
        <p>Connected laboratory workflow</p>
        <h2>From registration to report distribution.</h2>
      </header>
      <div className="lab-journey-mobile-line">
        {flowNodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              key={node.title}
              viewport={{ once: true, amount: 0.28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {node.portrait !== undefined ? <PortraitSprite index={node.portrait} /> : <i><Icon /></i>}
              <div><h3>{node.title}</h3><p>{node.detail}</p></div>
            </motion.article>
          );
        })}
      </div>
      <div className="lab-journey-mobile-destinations">
        <Mail />
        <span>Report emailed to patient</span>
        <Smartphone />
        <span>Report available in DigiPatient</span>
        <Stethoscope />
        <span>Report delivered to doctor inbox</span>
      </div>
    </div>
  );
}

export default function ConnectedCareGraph() {
  const storyRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const next = progress >= 0.995
      ? flowStages.length - 1
      : Math.min(flowStages.length - 1, Math.floor(progress * flowStages.length));
    setActiveStage((current) => current === next ? current : next);
  });

  return (
    <section
      className="lab-journey-track"
      ref={storyRef}
      style={{ '--journey-steps': flowStages.length } as CSSProperties}
    >
      <DesktopJourney activeStage={activeStage} progress={scrollYProgress} />
      <MobileJourney />
    </section>
  );
}
