import { Activity, AlertTriangle, Baby, Milk, Pill } from 'lucide-react';
import Section from '../layout/Section';
import BrandedText from '../ui/BrandedText';
import Button from '../ui/Button';

const clinicalSignals = [
  { label: 'Drug Interaction', icon: Pill },
  { label: 'Disease Interaction', icon: Activity },
  { label: 'Pregnancy', icon: Baby },
  { label: 'Allergy', icon: AlertTriangle },
  { label: 'Lactogen', icon: Milk },
];

export default function MimsSection() {
  return (
    <Section className="mims-section overflow-hidden">
      <div className="mims-composition">
        <div className="mims-copy">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#01D439]">Medication Intelligence</p>
          <h2>Trusted medicine information, present when clinical decisions are made.</h2>
          <p>
            <BrandedText>MacroHealthPlus brings MIMS drug knowledge into the prescribing workflow, giving clinicians relevant medicine information at the point where a prescription is prepared.</BrandedText>
          </p>
          <p>
            Interaction guidance helps teams review drug, disease, pregnancy, allergy, and lactogen considerations without interrupting the consultation to search across disconnected references.
          </p>
          <div className="mims-signal-list" aria-label="Clinical guidance areas">
            {clinicalSignals.map(({ label, icon: Icon }) => (
              <span key={label}><Icon aria-hidden="true" />{label}</span>
            ))}
          </div>
          <div className="mims-action">
            <Button href="/request-demo" icon>Explore Clinical Workflows</Button>
          </div>
        </div>

          <div className="mims-stage">
            <div className="mims-orbit mims-orbit-one" aria-hidden="true" />
            <div className="mims-orbit mims-orbit-two" aria-hidden="true" />
            <a className="mims-logo" href="https://corporate.mims.com/" target="_blank" rel="noreferrer" aria-label="Visit the official MIMS website">
            <img src="/assets/macrohealthplus/official-logos/Mims.png" alt="MIMS integrated" loading="eager" decoding="async" />
          </a>
          <img
            className="mims-people"
            src="/assets/mims/mims-healthcare-professional.webp"
            alt="A doctor examining a child with a parent present"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </Section>
  );
}
