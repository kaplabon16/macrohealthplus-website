'use client';

import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '../components/layout/Section';
import GlassCard from '../components/ui/GlassCard';
import { contactInfo } from '../data/contact';
import { setPageMeta } from '../utils/seo';

export default function Contact() {
  useEffect(() => {
    setPageMeta('Contact', 'Contact MacroHealthPlus to discuss healthcare software, product demos, implementation, and support.');
  }, []);

  return (
    <Section
        className="pt-24 sm:pt-28 lg:pt-32"
        eyebrow="Contact"
        title="Start a practical conversation about your operation"
        intro="Contact MacroHealthPlus to discuss product fit, implementation requirements, pricing, or support. Share the services you run and the challenges you want to solve so our team can respond with relevant guidance."
      >
        <div className="mb-6 flex flex-col gap-3 border-y border-white/15 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5 lg:mb-10 lg:py-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-300">Direct enquiries</p>
            <a className="mt-2 inline-block text-lg font-medium text-white transition hover:text-green-300" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </div>
          <Mail className="h-7 w-7 text-green-300" aria-hidden="true" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              title: 'Bangladesh Office',
              phone: contactInfo.bangladeshPhone,
              address: contactInfo.bangladeshOfficeAddress,
            },
            {
              title: 'Head Office',
              phone: contactInfo.headOfficePhone,
              address: contactInfo.headOfficeAddress,
            },
          ].map((office) => (
            <GlassCard className="p-5 sm:p-6 lg:p-8" key={office.title}>
              <h2 className="text-xl font-semibold text-white">{office.title}</h2>
              <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-[auto_1fr] sm:items-start lg:mt-7 lg:gap-6">
                <Phone className="h-6 w-6 text-green-300" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Phone</p>
                  <a className="mt-2 block text-base text-white transition hover:text-green-300" href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}>
                    {office.phone}
                  </a>
                </div>
                <MapPin className="h-6 w-6 text-green-300" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Address</p>
                  <p className="mt-2 max-w-md text-sm leading-7 text-slate-300">{office.address}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-6 border-l-2 border-red-500 bg-gradient-to-r from-red-500/15 via-red-500/5 to-transparent px-4 py-4 sm:px-5 lg:mt-10 lg:px-6 lg:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">Tax identification</p>
          <p className="mt-2 text-lg font-medium text-white">{contactInfo.tin}</p>
        </div>
    </Section>
  );
}
