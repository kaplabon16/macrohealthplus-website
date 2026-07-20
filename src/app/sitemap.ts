import type { MetadataRoute } from 'next';
import { allRouteSlugs } from '../data/seo';
import { siteUrl } from '../data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...allRouteSlugs
      .filter((slug) => slug !== '404' && slug !== 'e-pharmacy')
      .map((slug) => ({
        url: `${siteUrl}/${slug}`,
        lastModified: now,
        changeFrequency: slug === 'news-and-views' ? 'weekly' as const : 'monthly' as const,
        priority: slug === 'pricing' || slug === 'contact' || slug === 'who-we-are' ? 0.8 : 0.7,
      })),
  ];
}
