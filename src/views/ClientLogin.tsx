'use client';

import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
      className="pt-24 sm:pt-28 lg:pt-32"
      title="Product Portals"
      intro="Continue to the dedicated workspace for your MacroHealthPlus product. Each portal opens the operational environment used by its corresponding clinical, diagnostic, pharmacy, laboratory, or commerce service."
    >
      <motion.div
        className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
      >
        {products.map((product) => (
          <motion.a
            className="group flex min-h-20 items-center justify-between gap-3 border-b border-white/15 px-4 py-4 transition duration-200 hover:bg-green-400/[0.06] sm:min-h-24 sm:border-r sm:px-5 lg:min-h-28 lg:py-6"
            href={product.href}
            key={product.title}
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <h2 className="text-base font-semibold text-white transition duration-200 group-hover:text-accent-primary sm:text-lg">{product.title}</h2>
            <ArrowUpRight className="h-5 w-5 text-slate-400 transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-300" aria-hidden="true" />
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
