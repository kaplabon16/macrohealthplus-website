import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import GlassCard from '../components/ui/GlassCard';
import PricingCard from '../components/ui/PricingCard';
import { pricingCategories } from '../data/pricing';
import { setPageMeta } from '../utils/seo';

export default function Pricing() {
  useEffect(() => {
    setPageMeta('Pricing', 'Request-based MacroHealthPlus package options for doctors, clinics, hospitals, diagnostics, pharmacies, and telehealth teams.');
  }, []);

  return (
    <Section
      className="pt-36"
      eyebrow="Pricing"
      title="Choose the perfect plan for you"
      intro="Pricing (All cost is in BDT)."
    >
      <div className="space-y-12">
        {pricingCategories.map((category) => (
          <motion.div
            key={category.tabTitle}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white">{category.tabTitle}</h2>
              <a className="text-sm font-semibold text-green-200 hover:text-white" href={`/${category.tabLink}`}>View solution</a>
            </GlassCard>
            <motion.div
              className="grid gap-4 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {category.items.map((plan) => (
                <motion.div key={`${category.tabTitle}-${plan.planTitle}`} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}>
                  <PricingCard
                    name={plan.planTitle}
                    description={[plan.serviceTitle, plan.pharmacyType ? `Pharmacy: ${plan.pharmacyType}` : '', plan.userType ? `User: ${plan.userType}` : '', plan.monthlyServiceCharge ? `Service Charge: ${plan.monthlyServiceCharge}` : '', plan.billingYear ?? ''].filter(Boolean).join(' | ')}
                    cta={plan.buttonText}
                    features={plan.services}
                    price={plan.cost ?? plan.everyThing ?? 'Let’s talk'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
