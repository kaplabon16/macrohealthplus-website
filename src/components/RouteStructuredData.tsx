import { products } from '../data/products';
import { routeSeo } from '../data/seo';
import { siteUrl } from '../data/site';

export default function RouteStructuredData({ slug }: { slug: string }) {
  const route = `/${slug}`;
  const canonicalRoute = route === '/e-pharmacy' ? '/e-commerce-medicine' : route;
  const page = routeSeo[canonicalRoute];
  const product = products.find((item) => item.route === canonicalRoute);
  if (!page) return null;

  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.title, item: `${siteUrl}${canonicalRoute}` },
      ],
    },
  ];

  if (product) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: product.title,
      description: product.description,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      url: `${siteUrl}${product.route}`,
      provider: { '@type': 'Organization', name: 'MacroHealthPlus', url: siteUrl },
    });
  }

  return schemas.map((schema, index) => (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key={`${slug}-${index}`}
      type="application/ld+json"
    />
  ));
}
