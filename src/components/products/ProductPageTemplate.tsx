import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

type ProductPageTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features: string[];
};

export default function ProductPageTemplate({ title, subtitle, description, image, features }: ProductPageTemplateProps) {
  const visual = image ? '/assets/generated/health-tech-workflow.webp' : '';

  return (
    <>
      <Section className="pt-36" eyebrow="MacroHealthPlus Solution" title={title} intro={subtitle}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-lg leading-8 text-slate-200">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-demo" icon>Request a Demo</Button>
              <Button href="/pricing" variant="secondary" icon>View Pricing</Button>
            </div>
          </motion.div>
          {visual ? (
            <motion.div className="soft-card overflow-hidden rounded-[1.8rem] p-2" initial={{ opacity: 0, x: 38 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <img className="aspect-[4/3] w-full rounded-[1.35rem] object-cover" src={visual} alt={`${title} product visual`} loading="lazy" />
            </motion.div>
          ) : null}
        </div>
      </Section>
      <Section eyebrow="Capabilities" title={`What ${title} Helps You Manage`}>
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
        >
          {features.map((feature) => (
            <motion.div key={feature} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}>
            <GlassCard>
              <CheckCircle className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold leading-6 text-white">{feature}</p>
            </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
