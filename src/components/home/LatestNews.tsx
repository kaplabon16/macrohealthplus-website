import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Section from '../layout/Section';
import { newsItems } from '../../data/news';
import { routes } from '../../utils/routes';

export default function LatestNews() {
  const latest = newsItems[0];
  const reduceMotion = useReducedMotion();

  if (!latest) return null;

  return (
    <Section className="latest-news-section" eyebrow="Latest News" title="From MacroHealthPlus">
      <motion.article
        className="news-editorial"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link className="news-editorial-image group" href={`${routes.news}#${latest.id}`} aria-label={`Read: ${latest.title}`}>
          <img
            className="h-full w-full object-cover"
            src={latest.homeImage}
            alt={latest.homeImageAlt}
            loading="lazy"
            decoding="async"
          />
          <span className="news-editorial-image-label">MacroHealthPlus / News &amp; Views</span>
        </Link>
        <div className="news-editorial-copy">
          <div>
            <p className="news-editorial-category">{latest.category}</p>
            <h3>{latest.title}</h3>
            <p>{latest.excerpt}</p>
          </div>
          <Link className="news-editorial-link group" href={`${routes.news}#${latest.id}`}>
            Read the full story
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </motion.article>
    </Section>
  );
}
