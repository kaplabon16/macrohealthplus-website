import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import PageShell from '../components/layout/PageShell';
import { contactInfo } from '../data/contact';
import { siteUrl } from '../data/site';
import '../styles/globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MacroHealthPlus',
    template: '%s | MacroHealthPlus',
  },
  description: 'MacroHealthPlus connects appointments, clinical records, diagnostics, pharmacy operations, billing, telehealth, and patient follow-up in one healthcare software ecosystem.',
  applicationName: 'MacroHealthPlus',
  authors: [{ name: 'MacroHealthPlus', url: siteUrl }],
  creator: 'MacroHealthPlus',
  publisher: 'MacroHealthPlus',
  category: 'Healthcare Technology',
  keywords: ['healthcare management software', 'practice management software', 'clinic management software', 'diagnostic centre software', 'pharmacy management software', 'telehealth software', 'Bangladesh healthcare software'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'MacroHealthPlus',
    title: 'MacroHealthPlus | Healthcare Management Software',
    description: 'Connected healthcare software for clinical records, diagnostics, pharmacy operations, billing, telehealth, and patient follow-up.',
    url: '/',
    images: [{ url: '/assets/generated/health-tech-hero-products.webp', width: 1536, height: 864, alt: 'MacroHealthPlus healthcare management products across connected devices' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MacroHealthPlus | Healthcare Management Software',
    description: 'Connected healthcare software for clinical records, diagnostics, pharmacy operations, billing, telehealth, and patient follow-up.',
    images: ['/assets/generated/health-tech-hero-products.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/assets/macrohealthplus/official-logos/MHP-Logo-Vertical.webp',
    shortcut: '/assets/macrohealthplus/official-logos/MHP-Logo-Vertical.webp',
    apple: '/assets/macrohealthplus/official-logos/MHP-Logo-Vertical.webp',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MacroHealthPlus',
  url: siteUrl,
  logo: `${siteUrl}/assets/macrohealthplus/official-logos/MHP-Logo-Vertical.webp`,
  email: contactInfo.email,
  telephone: [contactInfo.bangladeshPhone, contactInfo.headOfficePhone],
  address: [
    { '@type': 'PostalAddress', streetAddress: contactInfo.bangladeshOfficeAddress, addressCountry: 'BD' },
    { '@type': 'PostalAddress', streetAddress: contactInfo.headOfficeAddress, addressCountry: 'AU' },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MacroHealthPlus',
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://dam-cdn.atl.orangelogic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://dam-cdn.atl.orangelogic.com/CDNLink/AT12FH6" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://dam-cdn.atl.orangelogic.com/CDNLink/AT12FKT" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script id="theme-init" strategy="beforeInteractive">{`try{var t=localStorage.getItem('theme');var p=t==='light'||t==='dark'?t:'system';document.documentElement.dataset.theme=p==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):p}catch(e){document.documentElement.dataset.theme='dark'}`}</Script>
      </head>
      <body>
        <Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Script id="website-jsonld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Providers>
          <PageShell>{children}</PageShell>
        </Providers>
      </body>
    </html>
  );
}
