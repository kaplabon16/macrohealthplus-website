import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Section from '../layout/Section';
import { newsItems } from '../../data/news';
import { routes } from '../../utils/routes';

export default function LatestNews() {
  const latest = newsItems[0];

  if (!latest) return null;

  return (
    <Section eyebrow="Latest News" title="From MacroHealthPlus">
      <article className="grid border-y border-white/15 md:grid-cols-[1.15fr_0.85fr]">
        <Link className="group block min-h-[170px] overflow-hidden border-b border-white/15 sm:min-h-[220px] md:border-b-0 md:border-r lg:min-h-[280px]" href={`${routes.news}#${latest.id}`} aria-label={`Read: ${latest.title}`}>
          <img
            className="h-full max-h-[520px] w-full object-cover transition duration-300 group-hover:scale-[1.025]"
            src={latest.homeImage}
            alt={latest.homeImageAlt}
            loading="lazy"
            decoding="async"
          />
        </Link>
        <div className="flex flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-300">{latest.category}</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl lg:mt-5 lg:text-4xl">{latest.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-[15px] sm:leading-7 lg:mt-6 lg:text-base lg:leading-8">{latest.excerpt}</p>
          </div>
          <Link className="group mt-5 inline-flex w-fit items-center gap-3 border-b border-green-400/60 pb-2 text-sm font-semibold text-white transition hover:text-green-300 lg:mt-10" href={`${routes.news}#${latest.id}`}>
            Read the full story
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Section>
  );
}
