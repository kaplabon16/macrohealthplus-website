import { products } from '../../data/products';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';

export default function FacilitySolutions() {
  return (
    <Section eyebrow="Solutions" title="Solutions of MacroHealthPlus" intro="Deliver an end-to-end patient experience that you feel in real-time with your practice management system.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <a href={product.route} key={product.route}>
            <GlassCard className="h-full transition hover:-translate-y-1">
              {product.image ? (
                <img className="dark-image mb-5 aspect-[4/3] w-full rounded-2xl object-contain" src={product.image} alt={`${product.title} visual`} loading="lazy" />
              ) : null}
              <p className="text-sm font-semibold text-green-300">{product.subtitle}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{product.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{product.description}</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </Section>
  );
}
