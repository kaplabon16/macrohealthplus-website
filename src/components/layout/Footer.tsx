import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/contact';
import { footerGroups } from '../../data/footer';
import { routes } from '../../utils/routes';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-[13px] text-slate-400">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-slate-300/70 pb-6">
          <Link className="inline-flex items-center gap-2" to={routes.home}>
            <img className="h-6 w-6 rounded-full object-contain" src="/assets/macrohealthplus/logo/logo-img_logo1.bb49aa63f28b32801c37.png" alt="MacroHealthPlus logo" />
            <span className="font-semibold text-white">MacroHealthPlus</span>
          </Link>
          <p className="mt-3 max-w-3xl leading-6 text-slate-300">
            Practice management software for doctors, clinics, diagnostics, pharmacies, telehealth providers, and healthcare teams.
          </p>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-8 sm:grid-cols-2 md:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-semibold text-white">{group.title}</h2>
              <div className="mt-3 space-y-2.5">
                {group.links.map((link) => (
                  <Link className="block leading-5 text-slate-400 transition hover:text-white hover:underline" key={link.href} to={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-white/10 py-5 leading-6">
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

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{contactInfo.copyright}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            <Link className="hover:text-white hover:underline" to={routes.privacy}>Privacy Policy</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" to={routes.terms}>Terms of Use</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" to={routes.refundReturnPolicy}>Sales and Refunds</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" to={routes.security}>Security</Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" to={routes.cookieDisclaimer}>Cookie Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
