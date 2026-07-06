import { motion } from 'framer-motion';
import { products } from '../../data/products';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';

export default function FacilitySolutions() {
  return (
    <Section eyebrow="Solutions" title="Products Built for Modern Healthcare Teams" intro="Digitize the essential work of doctors, clinics, laboratories, pharmacies, telehealth teams, and healthcare marketplaces with one connected product suite.">
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      >
        {products.map((product) => (
          <motion.a href={product.route} key={product.route} variants={{ hidden: { opacity: 0, x: -34 }, visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } } }}>
            <GlassCard className="gloss-hover h-full">
              <div className="solution-card-visual mb-5 aspect-[4/3] w-full rounded-2xl" aria-hidden="true" />
              <p className="text-sm font-semibold text-green-300">{product.subtitle}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{product.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{product.description}</p>
            </GlassCard>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
