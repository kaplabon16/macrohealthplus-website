import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import { newsItems } from '../../data/news';
import { routes } from '../../utils/routes';

export default function LatestNews() {
  const latest = newsItems[0];

  if (!latest) return null;

  return (
    <Section eyebrow="Latest News" title="From MacroHealthPlus">
      <article className="grid border-y border-white/15 lg:grid-cols-[1.15fr_0.85fr]">
        <Link className="group block min-h-[220px] overflow-hidden border-b border-white/15 sm:min-h-[280px] lg:border-b-0 lg:border-r" to={`${routes.news}#${latest.id}`} aria-label={`Read: ${latest.title}`}>
          <img
            className="h-full max-h-[520px] w-full object-cover transition duration-300 group-hover:scale-[1.025]"
            src={latest.homeImage}
            alt={latest.homeImageAlt}
            loading="lazy"
            decoding="async"
          />
        </Link>
        <div className="flex flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-300">{latest.category}</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-4xl">{latest.title}</h3>
            <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">{latest.excerpt}</p>
          </div>
          <Link className="group mt-6 inline-flex w-fit items-center gap-3 border-b border-green-400/60 pb-2 text-sm font-semibold text-white transition hover:text-green-300 sm:mt-10" to={`${routes.news}#${latest.id}`}>
            Read the full story
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Section>
  );
}
