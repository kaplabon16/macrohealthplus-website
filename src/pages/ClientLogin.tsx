import { useEffect } from 'react';
import Section from '../components/layout/Section';
import { setPageMeta } from '../utils/seo';

const products = [
  { title: 'GreatDoc', href: 'https://greatclinic.org/' },
  { title: 'GreatClinic', href: 'https://greatclinic.org/' },
  { title: 'GreatPharma', href: 'https://pos.greatclinic.org/' },
  { title: 'External Lab', href: 'https://externallab.greatclinic.org/' },
  { title: 'MHP Saas', href: 'https://app.greatclinic.org/' },
  { title: 'e-Pharmacy', href: 'https://epharma.macrohealthplus.org/' },
  { title: 'Marketplace', href: 'https://marketplace.greatclinic.org/' },
];

export default function ClientLogin() {
  useEffect(() => {
    setPageMeta('Product Login', 'Access MacroHealthPlus product portals for doctors, clinics, pharmacies, external labs, and marketplace teams.');
  }, []);

  return (
    <Section
      className="pt-36"
      title="Product Portals"
      intro="Access the secure product portals connected to MacroHealthPlus workflows for doctors, clinics, pharmacies, labs, SaaS users, e-pharmacy, and marketplace operations."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <a
            className="soft-card group rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-primary/60 hover:shadow-glow"
            href={product.href}
            key={product.title}
          >
            <h2 className="text-lg font-semibold text-white transition duration-300 group-hover:text-accent-primary">{product.title}</h2>
          </a>
        ))}
      </div>
    </Section>
  );
}
