import { CheckCircle } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

type ProductPageTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features: string[];
};

export default function ProductPageTemplate({ title, subtitle, description, image, features }: ProductPageTemplateProps) {
  return (
    <>
      <Section className="pt-36" eyebrow="Solution" title={title} intro={subtitle}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-lg leading-8 text-slate-200">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-demo" icon>Request a Demo</Button>
              <Button href="/pricing" variant="secondary" icon>View Pricing</Button>
            </div>
          </div>
          {image ? (
            <img className="dark-image aspect-[4/3] w-full rounded-[1.5rem] object-contain" src={image} alt={`${title} product visual`} loading="lazy" />
          ) : null}
        </div>
      </Section>
      <Section eyebrow="Features" title={`${title} capabilities`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature}>
              <CheckCircle className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold leading-6 text-white">{feature}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
