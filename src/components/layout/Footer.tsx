import Link from 'next/link';
import { contactInfo } from '../../data/contact';
import { footerGroups } from '../../data/footer';
import { routes } from '../../utils/routes';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-6 text-[12px] text-slate-400 sm:px-6 sm:py-8 sm:text-[13px] lg:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-slate-300/70 pb-4 sm:pb-5 lg:pb-6">
          <Link className="inline-flex items-center gap-2" href={routes.home}>
            <img className="h-6 w-6 rounded-full object-contain" src="/assets/macrohealthplus/logo/logo-img_logo1.bb49aa63f28b32801c37.png" alt="MacroHealthPlus logo" />
            <span className="font-semibold text-white">MacroHealthPlus</span>
          </Link>
          <p className="mt-2 max-w-3xl leading-5 text-slate-300 sm:mt-3 sm:leading-6">
            Practice management software for doctors, clinics, diagnostics, pharmacies, telehealth providers, and healthcare teams.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 border-b border-white/10 py-4 sm:gap-6 sm:py-6 lg:gap-8 lg:py-8">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-semibold text-white">{group.title}</h2>
              <div className="mt-2 space-y-1.5 text-[11px] sm:mt-3 sm:space-y-2.5 sm:text-[13px]">
                {group.links.map((link) => (
                  link.href.startsWith('http') ? (
                    <a className="block leading-5 text-slate-400 transition hover:text-white hover:underline" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link className="block leading-5 text-slate-400 transition hover:text-white hover:underline" key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-white/10 py-4 leading-5 sm:py-5 sm:leading-6">
          <p>
            Contact: <a className="text-green-200 hover:underline" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <span className="px-2 text-slate-600">|</span>
            Bangladesh: {contactInfo.bangladeshPhone}
            <span className="px-2 text-slate-600">|</span>
            Head Office: {contactInfo.headOfficePhone}
          </p>
          <p className="mt-1">
            {contactInfo.headOfficeAddress}
            <span className="px-2 text-slate-600">|</span>
            {contactInfo.bangladeshOfficeAddress}
          </p>
          <p className="mt-1">{contactInfo.tin}</p>
        </div>

        <div className="flex flex-col gap-2 pt-4 text-[11px] text-slate-500 sm:gap-3 sm:pt-5 sm:text-xs md:flex-row md:items-center md:justify-between">
          <p>{contactInfo.copyright}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            <Link className="hover:text-white hover:underline" href={routes.privacy}>Privacy Policy</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" href={routes.terms}>Terms of Use</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" href={routes.refundReturnPolicy}>Sales and Refunds</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" href={routes.security}>Security</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" href={routes.cookieDisclaimer}>Cookie Disclaimer</Link>
            <span>|</span>
            <a className="hover:text-white hover:underline" href="https://kaushikplabon.vercel.app/" target="_blank" rel="noreferrer">Developer's Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
