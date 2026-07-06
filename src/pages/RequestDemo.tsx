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
    if (event.currentTarget.checkValidity()) setSubmitted(true);
  }

  return (
    <Section className="pt-36" eyebrow="Request a Demo" title="See MacroHealthPlus in Action" intro={`Call us at ${contactInfo.bangladeshPhone} or send a request so our team can walk you through the right solution for your workflow.`}>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <GlassCard>
          {submitted ? (
            <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5 text-sm text-emerald-100">
              Thanks for your interest in MacroHealthPlus. Our team will review your request and follow up with the right product guidance.
            </div>
          ) : null}
          <form className="mt-2 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-slate-300">Solution
              <select required className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm">
                <option value="">Select a solution</option>
                {requestDemoSolutions.map((solution) => <option key={solution}>{solution}</option>)}
              </select>
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">First Name<input required className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
              <label className="grid gap-2 text-sm text-slate-300">Last Name<input required className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            </div>
            <label className="grid gap-2 text-sm text-slate-300">Email<input required type="email" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            <label className="grid gap-2 text-sm text-slate-300">Contact Number<input required type="tel" className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            <label className="grid gap-2 text-sm text-slate-300">Message<textarea required rows={5} className="rounded-2xl border border-white/15 bg-black px-4 py-3 text-white shadow-sm" /></label>
            <label className="flex gap-3 text-sm text-slate-300"><input required type="checkbox" className="mt-1" /> I agree to be contacted about MacroHealthPlus and acknowledge the Privacy Policy and Terms.</label>
            <button className="min-h-12 rounded-full bg-green-600 px-5 text-sm font-semibold text-[#fff] transition hover:bg-green-700" type="submit">Request Demo</button>
          </form>
        </GlassCard>
        <GlassCard>
          <h2 className="text-xl font-semibold text-white">Speak With Our Team</h2>
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
