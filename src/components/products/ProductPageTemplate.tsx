'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import type { ProductVisual } from '../../data/products';

type ProductPageTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  imagePosition?: string;
  features: string[];
  story?: ProductVisual[];
};

export default function ProductPageTemplate({ title, subtitle, description, image, imagePosition, features, story = [] }: ProductPageTemplateProps) {
  return (
    <>
      <Section className="pt-24 sm:pt-28 lg:pt-32" eyebrow="MacroHealthPlus Solution" title={title} intro={subtitle}>
        <div className="grid items-center gap-5 sm:gap-6 md:grid-cols-[1fr_0.9fr] lg:gap-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">{description}</p>
            <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:flex-row lg:mt-8">
              <Button href="/request-demo" icon>Request a Demo</Button>
              <Button href="/pricing" variant="secondary" icon>View Pricing</Button>
            </div>
          </motion.div>
          {image ? (
            <motion.div className="product-hero-frame" initial={{ opacity: 0, x: 38 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <img className="product-hero-image" src={image} alt={`${title} product interface`} loading="eager" decoding="async" style={{ objectPosition: imagePosition ?? 'center center' }} />
            </motion.div>
          ) : null}
        </div>
      </Section>
      {story.length ? (
        <Section eyebrow="Product Experience" title={`See ${title} at work`} intro={`Explore the interfaces behind ${title} and how information moves through its core day-to-day responsibilities.`}>
          <motion.div
            className="space-y-5 sm:space-y-7 lg:space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {story.map((item, index) => (
              <motion.article
                className={`product-story-panel ${index % 2 ? 'product-story-panel-reverse' : ''}`}
                key={`${item.title}-${item.image}`}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
              >
                <div className="product-story-media">
                  <img src={item.image} alt={`${title}: ${item.title}`} loading="lazy" decoding="async" style={{ objectPosition: item.position ?? 'center center' }} />
                </div>
                <div className="product-story-copy">
                  <h2 className="text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:mt-3">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>
      ) : null}
      <Section eyebrow="Core Capabilities" title={`Built into ${title}`} intro="Focused tools for the recurring tasks your team needs to complete accurately and on time.">
        <motion.div
          className="feature-list-grid grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
        >
          {features.map((feature) => (
            <motion.div className="group border-b border-white/15 px-1 py-3.5 sm:px-4 sm:py-4 lg:px-5 lg:py-6" key={feature} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}>
              <CheckCircle className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold leading-5 text-white transition duration-200 group-hover:text-green-300 sm:mt-3 sm:leading-6 lg:mt-4">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
