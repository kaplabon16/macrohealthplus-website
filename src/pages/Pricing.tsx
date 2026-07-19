import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/layout/Section';
import PaymentMethodsStrip from '../components/ui/PaymentMethodsStrip';
import PricingCard from '../components/ui/PricingCard';
import { pricingCategories } from '../data/pricing';
import { setPageMeta } from '../utils/seo';

export default function Pricing() {
  useEffect(() => {
    setPageMeta('Pricing', 'Request-based MacroHealthPlus package options for doctors, clinics, hospitals, diagnostics, pharmacies, and telehealth teams.');
  }, []);

  return (
    <>
      <Section
        className="pt-28 md:pt-36"
        eyebrow="Pricing"
        title="Plans matched to the way you operate"
        intro="Compare the published packages for GreatPharma, GreatDoc, and GreatClinic. All listed prices are in BDT; premium plans are scoped with the MacroHealthPlus team around your organization’s requirements."
      >
        <div className="space-y-8">
          {pricingCategories.map((category) => (
            <motion.div
              key={category.tabTitle}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pricing-category-rail mb-2 flex items-center justify-between gap-4 border-y border-white/15 py-5">
                <h2 className="text-2xl font-semibold text-white">{category.tabTitle}</h2>
                <a className="group/link inline-flex items-center gap-2 text-sm font-semibold text-green-200 transition duration-200 hover:text-green-300" href={`/${category.tabLink}`}>
                  View solution
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
              <motion.div
                className="pricing-plan-grid grid lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.01 }}
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
      <PaymentMethodsStrip />
    </>
  );
}
