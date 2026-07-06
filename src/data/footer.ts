import { routes } from '../utils/routes';
import { products } from './products';

export const footerGroups = [
  {
    title: 'Solutions',
    links: products.map((product) => ({ label: product.title, href: product.route })),
  },
  {
    title: 'Support',
    links: [
      { label: 'Pricing', href: routes.pricing },
      { label: 'Help Centre', href: routes.helpCentre },
      { label: 'News and Views', href: routes.news },
      { label: 'Request Demo', href: routes.requestDemo },
      { label: 'Client Login', href: routes.clientLogin },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: routes.terms },
      { label: 'Privacy Policy', href: routes.privacy },
      { label: 'Security', href: routes.security },
      { label: 'Refund & Return Policy', href: routes.refundReturnPolicy },
      { label: 'Cookie Disclaimer', href: routes.cookieDisclaimer },
    ],
  },
];
