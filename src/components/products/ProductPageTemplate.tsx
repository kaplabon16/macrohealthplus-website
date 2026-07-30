'use client';

import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Button from '../ui/Button';
import type { ProductVisual } from '../../data/products';
import CapabilityNetwork from './CapabilityNetwork';
import ExpandableProductImage from './ExpandableProductImage';
import HospitalCareFlows from './HospitalCareFlows';

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
            <motion.div initial={{ opacity: 0, x: 38 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <ExpandableProductImage
                frameClassName="product-hero-frame"
                imageClassName="product-hero-image"
                src={image}
                alt={`${title} product interface`}
                eager
                objectPosition={imagePosition}
              />
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
                <ExpandableProductImage
                  frameClassName="product-story-media"
                  imageClassName="product-story-image"
                  src={item.image}
                  alt={`${title}: ${item.title}`}
                  objectPosition={item.position}
                />
                <div className="product-story-copy">
                  <h2 className="text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:mt-3">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>
      ) : null}
      {title === 'Hospital' ? <HospitalCareFlows /> : null}
      <Section eyebrow="Core Capabilities" title={`Built into ${title}`} intro="Focused tools for the recurring tasks your team needs to complete accurately and on time.">
        <CapabilityNetwork product={title} features={features} />
      </Section>
    </>
  );
}
