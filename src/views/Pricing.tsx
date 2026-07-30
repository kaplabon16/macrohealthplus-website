'use client';

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
        className="pricing-page-section pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Pricing"
        title="Plans matched to the way you operate"
        intro="Compare the available package structures for GreatPharma, GreatDoc, and GreatClinic. Premium plans are shaped with the MacroHealthPlus team around your organization’s requirements."
      >
        <div className="pricing-catalog">
          {pricingCategories.map((category) => (
            <motion.div
              className="pricing-category"
              key={category.tabTitle}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pricing-category-rail">
                <div>
                  <p>Product plans</p>
                  <h2>{category.tabTitle}</h2>
                </div>
                <a className="group/link pricing-category-link" href={`/${category.tabLink}`}>
                  View solution
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
              <motion.div
                className="pricing-plan-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.01 }}
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {category.items.map((plan) => (
                  <motion.div key={`${category.tabTitle}-${plan.planTitle}`} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}>
                    <PricingCard
                      name={plan.planTitle}
                      description={plan.serviceTitle}
                      details={[
                        plan.pharmacyType ?? '',
                        plan.userType ?? '',
                        plan.billingYear ?? '',
                      ].filter(Boolean)}
                      cta={plan.buttonText}
                      features={plan.services}
                      featured={plan.planTitle === 'Premium'}
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
