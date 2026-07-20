import type { Metadata } from 'next';
import { products } from './products';

export const routeSeo: Record<string, { title: string; description: string }> = {
  '/': { title: 'Healthcare Management Software', description: 'MacroHealthPlus connects appointments, clinical records, diagnostics, pharmacy operations, billing, telehealth, and patient follow-up.' },
  '/pricing': { title: 'Pricing', description: 'Compare MacroHealthPlus plans for doctors, clinics, diagnostic centres, pharmacies, hospitals, and telehealth teams.' },
  '/help-centre': { title: 'Help Centre', description: 'Answers about MacroHealthPlus products, implementation, pricing, access, and support.' },
  '/news-and-views': { title: 'News & Views', description: 'MacroHealthPlus product developments, company news, releases, and healthcare software updates.' },
  '/contact': { title: 'Contact', description: 'Contact MacroHealthPlus about healthcare software, product demonstrations, implementation requirements, pricing, and support.' },
  '/request-demo': { title: 'Request a Demo', description: 'Request a guided MacroHealthPlus demonstration tailored to your healthcare organization and operational workflows.' },
  '/client-login': { title: 'Product Login', description: 'Access MacroHealthPlus product portals for doctors, clinics, pharmacies, external laboratories, and marketplace teams.' },
  '/who-we-are': { title: 'Who We Are', description: 'Learn about the MacroHealthPlus mission, vision, leadership, advisors, corporate development, and healthcare technology strategy.' },
  '/why-choose-us': { title: 'Why Choose MacroHealthPlus', description: 'Explore MacroHealthPlus workflow continuity, role-based access, data protection, prescribing intelligence, and operational control.' },
  '/research-reports': { title: 'Medical Education', description: 'Medical education resources from MacroHealthPlus.' },
  '/webinars': { title: 'Webinars', description: 'Webinars and professional resources from MacroHealthPlus.' },
  '/terms': { title: 'Terms & Conditions', description: 'Terms and conditions governing use of MacroHealthPlus websites, products, and services.' },
  '/privacy': { title: 'Privacy Policy', description: 'How MacroHealthPlus handles personal information and protects privacy.' },
  '/security': { title: 'Security Policy', description: 'Security practices and responsibilities for MacroHealthPlus products and services.' },
  '/refund-return-policy': { title: 'Refund & Return Policy', description: 'MacroHealthPlus refund and return policy.' },
  '/cookie-disclaimer': { title: 'Cookie Disclaimer', description: 'MacroHealthPlus cookie and website disclaimer information.' },
  '/404': { title: 'Page Not Found', description: 'The requested MacroHealthPlus page could not be found.' },
};

for (const product of products) {
  routeSeo[product.route] = { title: product.title, description: product.description };
}
routeSeo['/e-pharmacy'] = routeSeo['/e-commerce-medicine'];

export const allRouteSlugs = Object.keys(routeSeo).filter((route) => route !== '/').map((route) => route.slice(1));

export function isKnownSlug(slug: string) {
  return allRouteSlugs.includes(slug);
}

export function metadataForRoute(route: string): Metadata {
  const page = routeSeo[route] ?? routeSeo['/404'];
  const canonicalRoute = route === '/e-pharmacy' ? '/e-commerce-medicine' : route;
  const canonical = canonicalRoute === '/' ? '/' : canonicalRoute;
  const shouldIndex = route !== '/404';

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    robots: { index: shouldIndex, follow: shouldIndex },
    openGraph: {
      type: 'website',
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: 'MacroHealthPlus',
      images: [{ url: '/assets/generated/health-tech-hero-products.webp', width: 1536, height: 864, alt: 'MacroHealthPlus healthcare management software' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/assets/generated/health-tech-hero-products.webp'],
    },
  };
}
