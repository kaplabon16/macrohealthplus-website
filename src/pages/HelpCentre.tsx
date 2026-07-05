import { useEffect } from 'react';
import Section from '../components/layout/Section';
import FAQAccordion from '../components/ui/FAQAccordion';
import { setPageMeta } from '../utils/seo';

export default function HelpCentre() {
  useEffect(() => {
    setPageMeta('Help Centre', 'MacroHealthPlus help centre for product questions and support information.');
  }, []);

  return (
    <Section
      className="pt-36"
      eyebrow="Help Centre"
      title="Hi! How can we help you?"
      intro="Starting a new project and have a few questions? Some of the most frequently asked questions and answers are listed below."
    >
      <div className="max-w-3xl">
        <FAQAccordion />
      </div>
    </Section>
  );
}
