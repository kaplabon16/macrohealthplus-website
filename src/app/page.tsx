import type { Metadata } from 'next';
import { metadataForRoute } from '../data/seo';
import Home from '../views/Home';

export const metadata: Metadata = {
  ...metadataForRoute('/'),
  title: { absolute: 'MacroHealthPlus | Healthcare Management Software' },
};

export default function HomePage() {
  return <Home />;
}
