import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '../components/layout/Section';
import GlassCard from '../components/ui/GlassCard';
import PaymentMethodsStrip from '../components/ui/PaymentMethodsStrip';
import { contactInfo } from '../data/contact';
import { setPageMeta } from '../utils/seo';

export default function Contact() {
  useEffect(() => {
    setPageMeta('Contact', 'Contact MacroHealthPlus to discuss healthcare software, product demos, implementation, and support.');
  }, []);

  return (
    <>
      <Section
        className="pt-36"
        eyebrow="Contact"
        title="Let’s Talk About Your Healthcare Workflow"
        intro="Reach the MacroHealthPlus team for product questions, demo requests, implementation discussions, and office information."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { icon: Mail, title: 'Email', text: contactInfo.email },
            { icon: Phone, title: 'Bangladesh Phone', text: contactInfo.bangladeshPhone },
            { icon: Phone, title: 'Head Office Phone', text: contactInfo.headOfficePhone },
            { icon: MapPin, title: 'Head Office', text: contactInfo.headOfficeAddress },
            { icon: MapPin, title: 'Bangladesh Office', text: contactInfo.bangladeshOfficeAddress },
            { icon: Mail, title: 'TIN', text: contactInfo.tin },
          ].map((item) => (
            <GlassCard key={item.title}>
              <item.icon className="h-6 w-6 text-sky-200" aria-hidden="true" />
              <h2 className="mt-5 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
      <PaymentMethodsStrip />
    </>
  );
}
