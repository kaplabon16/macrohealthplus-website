import { useEffect } from 'react';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { routes } from '../utils/routes';
import { setPageMeta } from '../utils/seo';

export default function NotFound() {
  useEffect(() => {
    setPageMeta('Not Found', 'The requested MacroHealthPlus page could not be found.');
  }, []);

  return (
    <Section className="pt-28 md:pt-36">
      <GlassCard className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found.</h1>
        <p className="mt-4 text-sm leading-6 text-slate-300">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8">
          <Button href={routes.home} icon>Back to Home</Button>
        </div>
      </GlassCard>
    </Section>
  );
}
