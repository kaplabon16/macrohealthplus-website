import { motion } from 'framer-motion';
import { products } from '../../data/products';
import Section from '../layout/Section';
import GlassCard from '../ui/GlassCard';
import ProductMark from '../products/ProductMark';

export default function FacilitySolutions() {
  return (
    <Section eyebrow="Product Suite" title="Purpose-built software for every part of the care journey" intro="Choose the capabilities your organization needs today, then connect them as your services grow. Each MacroHealthPlus product is designed around a real clinical or operational responsibility, from consultation and diagnostics to workforce, inventory, and medicine delivery.">
      <motion.div
        className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {products.map((product, index) => (
          <motion.a
            className="group block h-full"
            href={product.route}
            key={product.route}
            initial={{ opacity: 1, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.58, delay: (index % 4) * 0.045, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="product-suite-card gloss-hover h-full p-0">
              <div className="product-card-mark">
                <ProductMark title={product.title} />
              </div>
              <div className="p-3 sm:p-5 lg:p-6">
                <p className="product-card-subtitle text-xs font-semibold text-green-300 sm:text-sm">{product.subtitle}</p>
                <p className="product-card-description mt-2 text-xs leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6">{product.description}</p>
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
