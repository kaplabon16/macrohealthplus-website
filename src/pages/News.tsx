import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import { newsItems } from '../data/news';
import { setPageMeta } from '../utils/seo';

export default function News() {
  useEffect(() => {
    setPageMeta('News', 'MacroHealthPlus product releases, company news, and healthcare software updates.');
  }, []);

  return (
    <Section
      className="pt-28 md:pt-36"
      eyebrow="News"
      title="News & Views"
      intro="Product developments and company updates from MacroHealthPlus."
    >
      <div className="space-y-20">
        {newsItems.map((item) => (
          <motion.article
            className="scroll-mt-32"
            id={item.id}
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid border-y border-white/15 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="min-h-[280px] overflow-hidden border-b border-white/15 lg:border-b-0 lg:border-r">
                <img
                  className="h-full max-h-[620px] w-full object-cover"
                  src={item.leadImage}
                  alt={item.leadImageAlt}
                />
              </div>
              <header className="flex flex-col justify-end px-6 py-8 md:px-10 md:py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-300">{item.category}</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">{item.title}</h2>
                <p className="mt-6 text-base leading-8 text-slate-300">{item.excerpt}</p>
              </header>
            </div>

            <div className="grid gap-10 border-b border-white/15 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.42fr)] lg:gap-20 lg:py-16">
              <div className="max-w-3xl space-y-6">
                {item.paragraphs.map((paragraph) => (
                  <p className="text-base leading-8 text-slate-300 md:text-lg" key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <figure className="border-l-2 border-green-400/50 pl-5">
                <img className="w-full object-cover" src={item.productImage} alt={item.productImageAlt} loading="lazy" decoding="async" />
                <figcaption className="mt-4 text-xs uppercase leading-5 tracking-[0.16em] text-slate-400">
                  Mobile prescription tools, patient access, appointments, and daily schedules in one doctor workspace.
                </figcaption>
              </figure>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
