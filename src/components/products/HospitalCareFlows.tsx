import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Ambulance,
  Bed,
  CalendarCheck,
  ClipboardCheck,
  FileCheck2,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  ListChecks,
  LogOut,
  Microscope,
  NotebookPen,
  Pill,
  ScanLine,
  Stethoscope,
  Syringe,
  UserRoundPlus,
  UsersRound,
  Video,
} from 'lucide-react';
import Section from '../layout/Section';

type OpdStep = {
  key: string;
  title: string;
  icon: LucideIcon;
  color: string;
  x: number;
  y: number;
  wide?: boolean;
};

const opdSteps: OpdStep[] = [
  { key: 'arrival', title: 'Patient Arrival & Registration', icon: UserRoundPlus, color: '#3696d7', x: 12, y: 22 },
  { key: 'consultation', title: 'Initial Consultation', icon: Stethoscope, color: '#ef8d22', x: 35, y: 22 },
  { key: 'diagnostics', title: 'Diagnostic Tests & Procedures', icon: FlaskConical, color: '#01D439', x: 58, y: 22 },
  { key: 'review', title: 'Doctor Review & Treatment Plan', icon: ClipboardCheck, color: '#36a9c8', x: 47, y: 54, wide: true },
  { key: 'pharmacy', title: 'Pharmacy & Billing', icon: Pill, color: '#ef8d22', x: 61, y: 82 },
  { key: 'followup', title: 'Follow-Up Scheduling', icon: CalendarCheck, color: '#58ad72', x: 84, y: 22 },
  { key: 'departure', title: 'Patient Departure', icon: LogOut, color: '#3696d7', x: 84, y: 82 },
];

type IpdGroup = {
  key: string;
  title: string;
  icon: LucideIcon;
  color: string;
  details: Array<{ label: string; icon: LucideIcon }>;
};

const ipdGroups: IpdGroup[] = [
  {
    key: 'admission',
    title: 'Admission & Initial Assessment',
    icon: Ambulance,
    color: '#70a83b',
    details: [
      { label: 'Registration', icon: FileText },
      { label: 'Initial Nursing Assessment', icon: HeartPulse },
      { label: 'Emergency, OPD or Referral', icon: Ambulance },
    ],
  },
  {
    key: 'clinical',
    title: 'Clinical Care & Management',
    icon: Stethoscope,
    color: '#278bc0',
    details: [
      { label: 'Physician Orders', icon: NotebookPen },
      { label: 'Medication Administration', icon: Syringe },
    ],
  },
  {
    key: 'investigations',
    title: 'Investigations & Daily Monitoring',
    icon: ScanLine,
    color: '#36a4c7',
    details: [
      { label: 'Lab & Imaging', icon: Microscope },
      { label: 'Multidisciplinary Rounds', icon: UsersRound },
      { label: 'Progress Notes', icon: FileText },
    ],
  },
  {
    key: 'interventions',
    title: 'Specialized Interventions',
    icon: Activity,
    color: '#ef7f27',
    details: [
      { label: 'Pre-Operative Checklist', icon: ListChecks },
      { label: 'Procedure or OT', icon: Activity },
      { label: 'PACU', icon: Bed },
    ],
  },
  {
    key: 'discharge',
    title: 'Discharge Planning & Follow-Up',
    icon: FileCheck2,
    color: '#9360b5',
    details: [
      { label: 'Discharge Summary', icon: FileCheck2 },
      { label: 'Patient Education', icon: GraduationCap },
      { label: 'Follow-Up or Telehealth', icon: Video },
    ],
  },
];

export default function HospitalCareFlows() {
  return (
    <Section
      className="hospital-care-section"
      eyebrow="Connected Hospital Journeys"
      title="Every handoff stays visible"
      intro="Outpatient and inpatient teams can follow the care journey from the first registration through treatment, billing, discharge, and follow-up."
    >
      <div className="care-journey-stack">
        <article className="care-journey care-journey-opd">
          <header className="care-journey-heading">
            <span>Outpatient Care Flow</span>
            <h3>OPD Patient Journey</h3>
          </header>
          <div className="opd-reference-map">
            <svg className="opd-reference-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="opd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
              </defs>
              <path d="M 20 22 H 26" markerEnd="url(#opd-arrow)" />
              <path d="M 43 22 H 49" markerEnd="url(#opd-arrow)" />
              <path d="M 66 22 H 75" markerEnd="url(#opd-arrow)" />
              <path d="M 35 31 C 35 40 42 40 44 45" markerEnd="url(#opd-arrow)" />
              <path d="M 58 31 C 58 40 52 40 50 45" markerEnd="url(#opd-arrow)" />
              <path d="M 50 65 C 50 70 56 70 58 71" markerEnd="url(#opd-arrow)" />
              <path d="M 69 82 H 75" markerEnd="url(#opd-arrow)" />
              <path d="M 55 54 C 68 54 76 45 81 32" markerEnd="url(#opd-arrow)" />
            </svg>
            {opdSteps.map(({ key, title, icon: Icon, color, x, y, wide }) => (
              <div
                className={`opd-reference-node opd-reference-node-${key} ${wide ? 'opd-reference-node-wide' : ''}`}
                key={key}
                style={{ '--journey-accent': color, '--journey-x': `${x}%`, '--journey-y': `${y}%` } as CSSProperties}
              >
                <span className="opd-reference-symbol" aria-hidden="true"><Icon strokeWidth={1.65} /></span>
                <strong>{title}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="care-journey care-journey-ipd">
          <header className="care-journey-heading">
            <span>Inpatient Care Flow</span>
            <h3>IPD Patient Journey</h3>
          </header>
          <div className="ipd-reference-map">
            <svg className="ipd-reference-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="ipd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
              </defs>
              <path d="M 30 29 V 35 H 27 V 37" markerEnd="url(#ipd-arrow)" />
              <path d="M 43 29 H 74 V 37" markerEnd="url(#ipd-arrow)" />
              <path d="M 27 61 V 67" markerEnd="url(#ipd-arrow)" />
              <path d="M 48 52 H 54" markerEnd="url(#ipd-arrow)" />
              <path d="M 74 61 V 67" markerEnd="url(#ipd-arrow)" />
              <path d="M 48 78 H 54" markerEnd="url(#ipd-arrow)" />
            </svg>
            {ipdGroups.map(({ key, title, icon: Icon, color, details }) => (
              <section
                className={`ipd-reference-group ipd-reference-group-${key}`}
                key={key}
                style={{
                  '--journey-accent': color,
                  '--ipd-detail-count': details.length,
                } as CSSProperties}
              >
                <header>
                  <span aria-hidden="true"><Icon strokeWidth={1.65} /></span>
                  <strong>{title}</strong>
                </header>
                <div className="ipd-reference-details">
                  {details.map(({ label, icon: DetailIcon }) => (
                    <div key={label}>
                      <DetailIcon aria-hidden="true" strokeWidth={1.55} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
