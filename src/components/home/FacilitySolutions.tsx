import { motion } from 'framer-motion';
import { products } from '../../data/products';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';
import ProductMark from '../products/ProductMark';

export default function FacilitySolutions() {
  return (
    <Section eyebrow="Product Suite" title="Purpose-built software for every part of the care journey" intro="Choose the capabilities your organization needs today, then connect them as your services grow. Each MacroHealthPlus product is designed around a real clinical or operational responsibility, from consultation and diagnostics to workforce, inventory, and medicine delivery.">
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      >
        {products.map((product) => (
          <motion.a className="group block h-full" href={product.route} key={product.route} variants={{ hidden: { opacity: 0, x: -34 }, visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } } }}>
            <GlassCard className="gloss-hover h-full p-0">
              <div className="product-card-mark">
                <ProductMark title={product.title} />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-green-300">{product.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{product.description}</p>
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
