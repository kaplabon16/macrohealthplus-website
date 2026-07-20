import { Check } from 'lucide-react';
import Button from './Button';

type PricingCardProps = {
  name: string;
  description: string;
  cta: string;
  features: string[];
  price?: string;
  featured?: boolean;
};

export default function PricingCard({ name, description, cta, features, price = 'Contact for pricing', featured }: PricingCardProps) {
  return (
    <article className={`pricing-plan group relative h-full ${featured ? 'pricing-plan-featured' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white sm:text-xl">{name}</h3>
        {featured ? <span className="rounded-full bg-sky-300/15 px-3 py-1 text-xs font-semibold text-sky-200">Popular</span> : null}
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-300 sm:mt-4 sm:text-sm sm:leading-6">{description}</p>
      <p className="mt-5 text-xl font-semibold text-white sm:mt-6 sm:text-2xl lg:mt-7">{price}</p>
      <ul className="mt-4 space-y-2 text-xs text-slate-300 sm:mt-5 sm:space-y-2.5 sm:text-sm lg:mt-6 lg:space-y-3">
        {features.map((feature) => (
          <li className="flex gap-3" key={feature}>
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 lg:mt-7">
        <Button href="/contact" variant={featured ? 'primary' : 'secondary'} icon>
          {cta}
        </Button>
      </div>
    </article>
  );
}
