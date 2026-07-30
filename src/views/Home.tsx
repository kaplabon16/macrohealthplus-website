'use client';

import { useEffect, useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import FacilitySolutions from '../components/home/FacilitySolutions';
import FinalCTA from '../components/home/FinalCTA';
import Hero from '../components/home/Hero';
import ImplementationInPractice from '../components/home/ImplementationInPractice';
import MimsSection from '../components/home/MimsSection';
import LatestNews from '../components/home/LatestNews';
import PlatformOverview from '../components/home/PlatformOverview';
import Partners from '../components/home/Partners';
import WorkflowSection from '../components/home/WorkflowSection';
import { setPageMeta } from '../utils/seo';

export default function Home() {
  const [featuredProductIndex, setFeaturedProductIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [enableProductHandoff, setEnableProductHandoff] = useState(false);

  useEffect(() => {
    setPageMeta('Home', 'MacroHealthPlus connects healthcare operations across appointments, patients, prescriptions, billing, diagnostics, pharmacy, telehealth, and reporting.');
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    const update = () => setEnableProductHandoff(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <LayoutGroup id="home-product-handoff">
      <Hero
        activeProduct={featuredProductIndex}
        enableProductHandoff={enableProductHandoff}
        isHandoffActive={isHeroVisible}
        onActiveProductChange={setFeaturedProductIndex}
        onVisibilityChange={setIsHeroVisible}
      />
      <FacilitySolutions
        arrivalIndex={featuredProductIndex}
        enableProductHandoff={enableProductHandoff}
        isHeroVisible={isHeroVisible}
      />
      <MimsSection />
      <PlatformOverview />
      <WorkflowSection />
      <ImplementationInPractice />
      <LatestNews />
      <Partners />
      <FinalCTA />
    </LayoutGroup>
  );
}
