import { useEffect } from 'react';
import FacilitySolutions from '../components/home/FacilitySolutions';
import FinalCTA from '../components/home/FinalCTA';
import Hero from '../components/home/Hero';
import MimsSection from '../components/home/MimsSection';
import PlatformOverview from '../components/home/PlatformOverview';
import Partners from '../components/home/Partners';
import WorkflowSection from '../components/home/WorkflowSection';
import PaymentMethodsStrip from '../components/ui/PaymentMethodsStrip';
import { setPageMeta } from '../utils/seo';

export default function Home() {
  useEffect(() => {
    setPageMeta('Home', 'MacroHealthPlus connects healthcare operations across appointments, patients, prescriptions, billing, diagnostics, pharmacy, telehealth, and reporting.');
  }, []);

  return (
    <>
      <Hero />
      <FacilitySolutions />
      <MimsSection />
      <PlatformOverview />
      <WorkflowSection />
      <Partners />
      <FinalCTA />
      <PaymentMethodsStrip />
    </>
  );
}
