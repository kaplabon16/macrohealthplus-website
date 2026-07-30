import { Check } from 'lucide-react';
import Button from './Button';

type PricingCardProps = {
  name: string;
  description: string;
  details?: string[];
  cta: string;
  features: string[];
  featured?: boolean;
};

export default function PricingCard({ name, description, details = [], cta, features, featured }: PricingCardProps) {
  return (
    <article className={`pricing-plan group relative h-full ${featured ? 'pricing-plan-featured' : ''}`}>
      <div className="pricing-plan-header">
        <h3>{name}</h3>
        {featured ? <span>Tailored</span> : null}
      </div>
      <p className="pricing-plan-description">{description}</p>
      {details.length ? (
        <div className="pricing-plan-details">
          {details.map((detail) => <span key={detail}>{detail}</span>)}
        </div>
      ) : null}
      <div className="pricing-plan-action">
        <Button href="/contact" variant={featured ? 'primary' : 'secondary'} icon>
          {cta}
        </Button>
      </div>
      <div className="pricing-plan-includes">
        <p>Includes</p>
      </div>
      <ul className="pricing-plan-features">
        {features.map((feature) => (
          <li key={feature}>
            <Check aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
