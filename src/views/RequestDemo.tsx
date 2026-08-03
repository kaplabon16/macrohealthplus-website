'use client';

import { FormEvent, useEffect, useState } from 'react';
import Section from '../components/layout/Section';
import GlassCard from '../components/ui/GlassCard';
import { contactInfo, requestDemoSolutions } from '../data/contact';
import { setPageMeta } from '../utils/seo';

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPageMeta('Request Demo', 'Request a guided MacroHealthPlus demo for healthcare management software solutions.');
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;

    const data = new FormData(form);
    const solution = String(data.get('solution') ?? '');
    const firstName = String(data.get('firstName') ?? '');
    const lastName = String(data.get('lastName') ?? '');
    const email = String(data.get('email') ?? '');
    const contactNumber = String(data.get('contactNumber') ?? '');
    const message = String(data.get('message') ?? '');
    const subject = `MacroHealthPlus demo request: ${solution}`;
    const body = [
      'MacroHealthPlus Demo Request',
      '',
      `Selected solution: ${solution}`,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Contact number: ${contactNumber}`,
      '',
      'Message:',
      message,
      '',
      'Consent: Accepted',
    ].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:info@macrohealthplus.org?cc=${encodeURIComponent('mizanur@macrohealthplus.org,kaushikplabon45@gmail.com')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Section className="pt-24 sm:pt-28 lg:pt-32" eyebrow="Guided Product Demo" title="See the workflows that matter to your team" intro={`Tell us which services you operate and what you want to improve. A MacroHealthPlus specialist will tailor the conversation around your requirements. You can also call ${contactInfo.bangladeshPhone}.`}>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <GlassCard>
          {submitted ? (
            <div className="rounded-3xl border border-[#01D439]/25 bg-[#01D439]/10 p-5 text-sm text-[#01D439]">
              Your email application has been opened with the request prepared. Review the details and press Send to deliver it to MacroHealthPlus.
            </div>
          ) : null}
          <form className="mt-2 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-slate-300">Solution
              <select required name="solution" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm">
                <option value="">Select a solution</option>
                {requestDemoSolutions.map((solution) => <option key={solution}>{solution}</option>)}
              </select>
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">First Name<input required name="firstName" autoComplete="given-name" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
              <label className="grid gap-2 text-sm text-slate-300">Last Name<input required name="lastName" autoComplete="family-name" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            </div>
            <label className="grid gap-2 text-sm text-slate-300">Email<input required name="email" autoComplete="email" type="email" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            <label className="grid gap-2 text-sm text-slate-300">Contact Number<input required name="contactNumber" autoComplete="tel" type="tel" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            <label className="grid gap-2 text-sm text-slate-300">Message<textarea required name="message" rows={4} className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            <input className="absolute -left-[9999px] h-px w-px opacity-0" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label className="flex gap-3 text-sm text-slate-300"><input required name="consent" value="accepted" type="checkbox" className="mt-1" /> I agree to be contacted about MacroHealthPlus and acknowledge the Privacy Policy and Terms.</label>
            <button className="brand-primary-button min-h-12 rounded-full bg-[#01D439] px-5 text-sm font-semibold text-white transition" type="submit">Request Demo</button>
          </form>
        </GlassCard>
        <GlassCard>
          <h2 className="text-xl font-semibold text-white">Prefer to speak directly?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Use the details below for product questions, implementation discussions, or office enquiries.</p>
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <p>{contactInfo.email}</p>
            <p>{contactInfo.bangladeshPhone}</p>
            <p>{contactInfo.headOfficePhone}</p>
            <p>{contactInfo.headOfficeAddress}</p>
            <p>{contactInfo.bangladeshOfficeAddress}</p>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
