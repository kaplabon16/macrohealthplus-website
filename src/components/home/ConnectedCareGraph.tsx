'use client';

import Image from 'next/image';
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
import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import type { CSSProperties, ElementType } from 'react';
import { useEffect, useRef, useState } from 'react';

type FlowNode = {
  title: string;
  detail: string;
  icon: ElementType;
  image?: string;
  imageAlt?: string;
  x: number;
  y: number;
  reveal: number;
};

type FlowStage = {
  eyebrow: string;
  title: string;
  focus: number[];
  camera: { x: number; y: number; scale: number };
};

const flowNodes: FlowNode[] = [
  {
    title: 'Patient',
    detail: 'Registration, DigiPatient app and patient card',
    icon: UserRound,
    image: '/assets/flow/patient/patient-portrait-v2.jpg',
    imageAlt: 'MacroHealthPlus patient',
    x: 10,
    y: 12,
    reveal: 0,
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
    title: 'Pathology and Radiology Technicians',
    detail: 'Sample transfer and technical processing',
    icon: Microscope,
    x: 50,
    y: 17,
    reveal: 3,
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
    y: 74,
    reveal: 6,
  },
  {
    title: 'Payment Check',
    detail: 'Due collection and payment confirmation',
    icon: BadgeDollarSign,
    x: 84,
    y: 94,
    reveal: 7,
  },
  {
    title: 'Report Distribution',
    detail: 'Email, DigiPatient app and doctor inbox',
    icon: Send,
    image: '/assets/flow/patient/patient-report-v2.jpg',
    imageAlt: 'The same patient holding her completed medical report',
    x: 36,
    y: 94,
    reveal: 8,
  },
];

const flowStages: FlowStage[] = [
  {
    eyebrow: 'Patient entry',
    title: 'The laboratory journey starts with one registered patient.',
    focus: [0],
    camera: { x: 58, y: 30, scale: 1.08 },
  },
  {
    eyebrow: 'Billing and invoice',
    title: 'Billing confirms the service before the sample moves.',
    focus: [0, 1],
    camera: { x: 58, y: -8, scale: 1.07 },
  },
  {
    eyebrow: 'Collection points',
    title: 'One order reaches the correct collection point.',
    focus: [1, 2],
    camera: { x: 28, y: -34, scale: 1.06 },
  },
  {
    eyebrow: 'Technical processing',
    title: 'Samples move to Pathology and Radiology Technicians.',
    focus: [2, 3],
    camera: { x: 14, y: 20, scale: 1.1 },
  },
  {
    eyebrow: 'System interconnection',
    title: 'Verified work flows back through the connected software.',
    focus: [3, 4, 5],
    camera: { x: -20, y: 28, scale: 1.08 },
  },
  {
    eyebrow: 'Laboratory testing',
    title: 'The laboratory completes and verifies the requested investigation.',
    focus: [5, 6],
    camera: { x: -52, y: -8, scale: 1.08 },
  },
  {
    eyebrow: 'Report delivery',
    title: 'Verified results become a completed medical report.',
    focus: [6, 7],
    camera: { x: -48, y: -38, scale: 1.08 },
  },
  {
    eyebrow: 'Payment verification',
    title: 'Outstanding payment is checked before final release.',
    focus: [7, 8],
    camera: { x: -48, y: -38, scale: 1.08 },
  },
  {
    eyebrow: 'Report distribution',
    title: 'The finished report reaches every intended destination.',
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
  'M840 294 C840 340 840 382 840 414',
  'M840 474 C840 495 840 516 840 534',
  'M810 564 C680 564 535 564 390 564',
];

const eventLabels = [
  { text: 'Registration SMS', x: 10, y: 29, reveal: 1, color: '#ef476f', isSms: true },
  { text: 'Invoice SMS', x: 23, y: 58, reveal: 2, color: '#ef476f', isSms: true },
  { text: 'Sample transfer', x: 38, y: 43, reveal: 3, color: '#01D439', isSms: false },
  { text: 'Report-ready SMS', x: 84, y: 59, reveal: 6, color: '#ef476f', isSms: true },
  { text: 'Payment received SMS', x: 50, y: 94, reveal: 8, color: '#ef476f', isSms: true },
];

const nodeColors = [
  '#4f8ff1',
  '#f2a51a',
  '#01D439',
  '#4f8ff1',
  '#bd65e8',
  '#4f8ff1',
  '#f2a51a',
  '#01D439',
  '#ef6548',
  '#9b6de3',
];

const mobileEvents: Record<number, { text: string; isSms: boolean }> = {
  0: { text: 'Registration SMS', isSms: true },
  1: { text: 'Invoice SMS', isSms: true },
  2: { text: 'Sample transfer', isSms: false },
  7: { text: 'Report-ready SMS', isSms: true },
  8: { text: 'Payment received SMS', isSms: true },
};

function useElementScrollProgress(
  ref: React.RefObject<HTMLElement | HTMLDivElement | null>,
  mode: 'story' | 'responsive',
) {
  const progress = useMotionValue(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const start = mode === 'story' ? top : top - viewportHeight * 0.58;
      const end = mode === 'story'
        ? top + rect.height - viewportHeight
        : top + rect.height - viewportHeight * 0.98;
      const next = end <= start ? 0 : (window.scrollY - start) / (end - start);

      progress.set(Math.max(0, Math.min(1, next)));
    };

    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [mode, progress, ref]);

  return progress;
}

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
  const opacity = useTransform(progress, [start, Math.min(end, start + 0.035)], [0, 1]);

  return (
    <>
      <motion.path
        d={edgePaths[index]}
        fill="none"
        markerEnd={`url(#lab-flow-arrow-${index})`}
        stroke={nodeColors[index]}
        strokeLinecap="round"
        strokeWidth="3"
        style={{ opacity, pathLength }}
      />
      {index % 3 === 0 ? (
        <motion.circle fill={nodeColors[index]} r="5" style={{ opacity }}>
          <animateMotion begin={`${index * 0.28}s`} dur={`${3.2 + index * 0.12}s`} path={edgePaths[index]} repeatCount="indefinite" />
        </motion.circle>
      ) : index % 3 === 1 ? (
        <motion.rect fill={nodeColors[index]} height="11" rx="2.5" style={{ opacity }} width="11" x="-5.5" y="-5.5">
          <animateMotion begin={`${index * 0.28}s`} dur={`${3.2 + index * 0.12}s`} path={edgePaths[index]} repeatCount="indefinite" />
        </motion.rect>
      ) : (
        <motion.polygon fill={nodeColors[index]} points="0,-6 5.2,-3 5.2,3 0,6 -5.2,3 -5.2,-3" style={{ opacity }}>
          <animateMotion begin={`${index * 0.28}s`} dur={`${3.2 + index * 0.12}s`} path={edgePaths[index]} repeatCount="indefinite" />
        </motion.polygon>
      )}
    </>
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
        opacity: visible ? (current ? 1 : 0.54) : 0,
        scale: current ? 1.06 : 1,
      }}
      className={`lab-journey-node lab-journey-node-${index + 1}`}
      initial={false}
      style={{
        '--node-color': nodeColors[index],
        '--node-x': `${node.x}%`,
        '--node-y': `${node.y}%`,
      } as CSSProperties}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {node.image ? (
        <span className={`lab-journey-person ${index === 9 ? 'lab-journey-person-report' : ''}`}>
          <Image
            alt={node.imageAlt ?? node.title}
            fill
            sizes={index === 9 ? '96px' : '64px'}
            src={node.image}
          />
        </span>
      ) : (
        <span className="lab-journey-icon"><Icon className="h-5 w-5" /></span>
      )}
      <span className="lab-journey-node-copy">
        <strong>{node.title}</strong>
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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="lab-journey-lines" preserveAspectRatio="none" viewBox="0 0 1000 600" aria-hidden="true">
          <defs>
            {nodeColors.slice(0, edgePaths.length).map((color, index) => (
              <marker id={`lab-flow-arrow-${index}`} key={color + index} markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="2.5">
                <path d="M0 0 L5 2.5 L0 5 Z" fill={color} />
              </marker>
            ))}
          </defs>
          {edgePaths.map((_, index) => <FlowEdge index={index} key={edgePaths[index]} progress={progress} />)}
        </svg>

        {flowNodes.map((node, index) => (
          <FlowNodeView activeStage={activeStage} index={index} key={node.title} node={node} />
        ))}

        {eventLabels.map((event) => (
          <motion.span
            animate={{ opacity: activeStage >= event.reveal ? 1 : 0, y: activeStage >= event.reveal ? 0 : 8 }}
            className={`lab-journey-event ${event.isSms ? 'lab-journey-event-sms' : ''}`}
            key={event.text}
            style={{
              '--event-color': event.color,
              '--event-x': `${event.x}%`,
              '--event-y': `${event.y}%`,
            } as CSSProperties}
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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{stage.eyebrow}</span>
        <h2>{stage.title}</h2>
      </motion.div>

      <motion.div className="lab-journey-progress" style={{ scaleX: progress }} />
    </div>
  );
}

type ResponsivePoint = { x: number; y: number };

const phoneFlowPoints: ResponsivePoint[] = [
  { x: 18, y: 50 },
  { x: 76, y: 145 },
  { x: 24, y: 240 },
  { x: 72, y: 335 },
  { x: 28, y: 430 },
  { x: 78, y: 525 },
  { x: 22, y: 620 },
  { x: 74, y: 715 },
  { x: 30, y: 810 },
  { x: 70, y: 905 },
];

const tabletFlowPoints: ResponsivePoint[] = [
  { x: 14, y: 60 },
  { x: 70, y: 145 },
  { x: 28, y: 230 },
  { x: 76, y: 315 },
  { x: 22, y: 400 },
  { x: 72, y: 485 },
  { x: 30, y: 570 },
  { x: 78, y: 655 },
  { x: 36, y: 740 },
  { x: 68, y: 825 },
];

function responsiveEdgePath(start: ResponsivePoint, end: ResponsivePoint) {
  const startY = start.y + 30;
  const endY = end.y - 30;
  const curve = (endY - startY) * 0.52;
  return `M${start.x * 10} ${startY} C${start.x * 10} ${startY + curve} ${end.x * 10} ${endY - curve} ${end.x * 10} ${endY}`;
}

function ResponsiveFlowEdge({
  index,
  path,
  progress,
  strokeWidth,
}: {
  index: number;
  path: string;
  progress: MotionValue<number>;
  strokeWidth: number;
}) {
  const start = index / flowNodes.length;
  const end = (index + 1) / flowNodes.length;
  const pathLength = useTransform(progress, [start, end], [0, 1]);
  const opacity = useTransform(progress, [start, Math.min(end, start + 0.025)], [0, 1]);
  const pulseOpacity = useTransform(progress, [Math.max(start, end - 0.01), end], [0, 1]);

  return (
    <>
      <motion.path
        d={path}
        fill="none"
        stroke={nodeColors[index]}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        style={{ opacity, pathLength }}
      />
      <motion.circle fill={nodeColors[index]} r="5" style={{ opacity: pulseOpacity }}>
        <animateMotion begin={`${index * 0.22}s`} dur={`${2.8 + index * 0.1}s`} path={path} repeatCount="indefinite" />
      </motion.circle>
    </>
  );
}

function ResponsiveJourney({ mode }: { mode: 'phone' | 'tablet' }) {
  const isPhone = mode === 'phone';
  const points = isPhone ? phoneFlowPoints : tabletFlowPoints;
  const height = isPhone ? 970 : 890;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollYProgress = useElementScrollProgress(trackRef, 'responsive');

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const next = progress >= 0.995
      ? flowNodes.length - 1
      : Math.min(flowNodes.length - 1, Math.floor(progress * flowNodes.length));
    setActiveIndex((current) => current === next ? current : next);
  });

  return (
    <div className={`lab-journey-responsive lab-journey-responsive-${mode} ${isPhone ? 'md:hidden' : 'hidden md:block lg:hidden'}`}>
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Connected laboratory workflow</p>
        <h2>{isPhone ? 'The patient journey, connected step by step.' : 'One connected path from registration to report distribution.'}</h2>
      </motion.header>

      <div
        className="lab-journey-responsive-track"
        ref={trackRef}
        style={{ '--responsive-height': `${height}px` } as CSSProperties}
      >
        <svg className="lab-journey-responsive-lines" preserveAspectRatio="none" viewBox={`0 0 1000 ${height}`} aria-hidden="true">
          {points.slice(0, -1).map((point, index) => (
            <ResponsiveFlowEdge
              index={index}
              key={`${mode}-${flowNodes[index].title}`}
              path={responsiveEdgePath(point, points[index + 1])}
              progress={scrollYProgress}
              strokeWidth={isPhone ? 4 : 3.5}
            />
          ))}
        </svg>

        {flowNodes.map((node, index) => {
          const Icon = node.icon;
          const point = points[index];
          const copyOnLeft = point.x > 52;

          return (
            <motion.article
              animate={{
                filter: index === activeIndex ? 'blur(0px)' : 'blur(0.35px)',
                opacity: index <= activeIndex ? (index === activeIndex ? 1 : 0.48) : 0,
                scale: index === activeIndex ? 1.08 : 1,
              }}
              className={`lab-journey-responsive-node ${copyOnLeft ? 'lab-journey-responsive-node-left' : 'lab-journey-responsive-node-right'}`}
              initial={false}
              key={`${mode}-${node.title}`}
              style={{
                '--node-color': nodeColors[index],
                '--responsive-node-x': `${point.x}%`,
                '--responsive-node-y': `${point.y}px`,
              } as CSSProperties}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <i className={node.image ? 'lab-journey-responsive-person' : ''}>
                {node.image ? (
                  <Image alt={node.imageAlt ?? node.title} fill sizes={isPhone ? '60px' : '68px'} src={node.image} />
                ) : <Icon />}
              </i>
              <div className="lab-journey-responsive-copy">
                <h3>{node.title}</h3>
                {index === flowNodes.length - 1 ? (
                  <span className="lab-journey-responsive-destinations">
                    <span><Mail />Report emailed to patient</span>
                    <span><Smartphone />Available in DigiPatient</span>
                    <span><Stethoscope />Delivered to doctor inbox</span>
                  </span>
                ) : null}
              </div>
            </motion.article>
          );
        })}

        {points.slice(0, -1).map((point, index) => {
          const journeyEvent = mobileEvents[index];
          if (!journeyEvent) return null;
          const next = points[index + 1];

          return (
            <motion.span
              animate={{
                opacity: activeIndex > index ? 1 : 0,
                scale: activeIndex > index ? 1 : 0.82,
              }}
              className={`lab-journey-responsive-event ${journeyEvent.isSms ? 'lab-journey-responsive-event-sms' : ''}`}
              initial={false}
              key={`${mode}-${journeyEvent.text}`}
              style={{
                '--responsive-event-x': `${(point.x + next.x) / 2}%`,
                '--responsive-event-y': `${(point.y + next.y) / 2}px`,
              } as CSSProperties}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {journeyEvent.text}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

export default function ConnectedCareGraph() {
  const storyRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const scrollYProgress = useElementScrollProgress(storyRef, 'story');

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
      <ResponsiveJourney mode="tablet" />
      <ResponsiveJourney mode="phone" />
    </section>
  );
}
