import { ArrowUpRight, BriefcaseBusiness, Phone } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const portfolioUrl = 'https://kaushikplabon.vercel.app/';

export default function DeveloperInfo() {
  return (
    <section className="developer-profile relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="developer-profile-accent developer-profile-accent-green" aria-hidden="true" />
      <div className="developer-profile-accent developer-profile-accent-red" aria-hidden="true" />

      <AnimatedSection className="relative z-10 mx-auto max-w-5xl">
        <div className="border-y border-white/15 py-8 sm:py-12 lg:py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#01D439] sm:mb-8">Developer&apos;s Info</p>

            <div className="developer-portrait-frame relative mb-7 h-52 w-52 overflow-hidden sm:mb-9 sm:h-64 sm:w-64">
              <img
                className="h-full w-full object-cover"
                src="/assets/developer/kaushik-plabon.webp"
                alt="Kaushik Plabon"
              />
            </div>

            <h1 className="text-4xl font-extrabold leading-none text-white sm:text-5xl lg:text-6xl">Kaushik Plabon</h1>
            <p className="mt-4 text-lg font-semibold text-[#01D439] sm:text-xl">Engineer</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400 sm:text-base">MacroHealthPlus</p>

            <div className="mt-8 grid w-full border-y border-white/15 sm:mt-10 sm:grid-cols-2">
              <a className="developer-profile-link group flex items-center justify-between gap-4 px-4 py-5 text-left sm:border-r sm:border-white/15 sm:px-6" href="tel:+8801537341066">
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</span>
                  <span className="mt-1 block text-base font-semibold text-white">01537341066</span>
                </span>
                <Phone className="feature-icon-motion h-5 w-5 text-[#01D439]" aria-hidden="true" />
              </a>

              <a className="developer-profile-link group flex items-center justify-between gap-4 border-t border-white/15 px-4 py-5 text-left sm:border-t-0 sm:px-6" href={portfolioUrl} target="_blank" rel="noreferrer">
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Portfolio</span>
                  <span className="mt-1 block text-base font-semibold text-white">View Portfolio</span>
                </span>
                <ArrowUpRight className="feature-icon-motion h-5 w-5 text-[#01D439] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-sm text-slate-400">
              <BriefcaseBusiness className="feature-icon-motion h-4 w-4 text-[#EF0000]" aria-hidden="true" />
              <span>Engineer at MacroHealthPlus</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
