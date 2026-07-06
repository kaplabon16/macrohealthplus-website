import { routes } from '../utils/routes';
import { products } from './products';

export const navigation = [
  { label: 'Solutions', href: routes.home, children: products.map((product) => ({ label: product.title, href: product.route })) },
  { label: 'Resources', href: routes.news, children: [
    { label: 'News and Views', href: routes.news },
    { label: 'Help Centre', href: routes.helpCentre },
    { label: 'Medical Education', href: '/research-reports' },
    { label: 'Webinars', href: '/webinars' },
  ] },
  { label: 'Pricing', href: routes.pricing },
  { label: 'About Us', href: '/who-we-are', children: [
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Why Choose Us', href: '/why-choose-us' },
  ] },
  { label: 'Contact', href: routes.contact },
];
