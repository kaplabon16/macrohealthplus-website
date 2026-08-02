import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  FlaskConical,
  HeartPulse,
  Handshake,
  House,
  Hospital,
  Microscope,
  Pill,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  UsersRound,
  Video,
} from 'lucide-react';

type ProductMarkProps = {
  title: string;
};

type MarkConfig = {
  icon: LucideIcon;
  accent: string;
  wash: string;
};

const marks: Record<string, MarkConfig> = {
  DigiPatient: { icon: HeartPulse, accent: '#01D439', wash: 'rgba(1, 212, 57, 0.22)' },
  GreatDoc: { icon: Stethoscope, accent: '#67c9ff', wash: 'rgba(103, 201, 255, 0.22)' },
  GreatClinic: { icon: FlaskConical, accent: '#01D439', wash: 'rgba(1, 212, 57, 0.22)' },
  GreatPharma: { icon: Pill, accent: '#ffb45e', wash: 'rgba(255, 180, 94, 0.22)' },
  Hospital: { icon: Hospital, accent: '#ff7f8f', wash: 'rgba(255, 127, 143, 0.22)' },
  'HR Management': { icon: UsersRound, accent: '#c5a3ff', wash: 'rgba(197, 163, 255, 0.22)' },
  Inventory: { icon: Boxes, accent: '#ffd55f', wash: 'rgba(255, 213, 95, 0.22)' },
  Telehealth: { icon: Video, accent: '#5ee1d1', wash: 'rgba(94, 225, 209, 0.22)' },
  Marketplace: { icon: ShoppingBag, accent: '#ff93c8', wash: 'rgba(255, 147, 200, 0.22)' },
  'e-Pharmacy': { icon: ShoppingCart, accent: '#01D439', wash: 'rgba(1, 212, 57, 0.22)' },
  LabAgent: { icon: Microscope, accent: '#76b9ff', wash: 'rgba(118, 185, 255, 0.22)' },
  'Medical Home Service Management': { icon: House, accent: '#66d6bd', wash: 'rgba(102, 214, 189, 0.22)' },
  'Hospital CRM Management': { icon: Handshake, accent: '#ff9e72', wash: 'rgba(255, 158, 114, 0.22)' },
  Aura: { icon: Sparkles, accent: '#d9a4ff', wash: 'rgba(217, 164, 255, 0.22)' },
};

const fallbackMark: MarkConfig = { icon: HeartPulse, accent: '#01D439', wash: 'rgba(1, 212, 57, 0.22)' };

export default function ProductMark({ title }: ProductMarkProps) {
  const { icon: Icon, accent, wash } = marks[title] ?? fallbackMark;
  const style = { '--product-mark-accent': accent, '--product-mark-wash': wash } as CSSProperties;

  return (
    <div className={`product-mark ${title.includes(' ') ? 'product-mark-spaced' : ''}`} style={style} aria-label={`${title} product logo`}>
      <span className="product-mark-symbol" aria-hidden="true">
        <Icon strokeWidth={1.7} />
      </span>
      <span className="product-mark-copy">
        <strong>{title}</strong>
        <small>MacroHealthPlus</small>
      </span>
    </div>
  );
}
