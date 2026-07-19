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
      title="Answers before you take the next step"
      intro="Review common questions about product fit, implementation, pricing, access, and support. For requirements specific to your organization, contact the MacroHealthPlus team for a focused discussion."
    >
      <div className="max-w-3xl">
        <FAQAccordion />
      </div>
    </Section>
  );
}
