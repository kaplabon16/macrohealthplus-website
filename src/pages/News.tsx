import { useEffect } from 'react';
import Section from '../components/layout/Section';
import NewsCard from '../components/ui/NewsCard';
import { newsItems } from '../data/news';
import { setPageMeta } from '../utils/seo';

export default function News() {
  useEffect(() => {
    setPageMeta('News', 'MacroHealthPlus news and healthcare software insights.');
  }, []);

  return (
    <Section
      className="pt-36"
      eyebrow="News"
      title="News & Views"
    >
      {newsItems.length ? (
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      ) : <div className="h-8" />}
    </Section>
  );
}
