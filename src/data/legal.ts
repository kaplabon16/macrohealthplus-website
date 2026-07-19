import cookieDisclaimer from './legal-content/cookie-disclaimer.txt?raw';
import privacyPolicy from './legal-content/privacy.txt?raw';
import refundReturnPolicy from './legal-content/refund-return-policy.txt?raw';
import securityPolicy from './legal-content/security.txt?raw';
import termsConditions from './legal-content/terms.txt?raw';

export type LegalPageContent = {
  title: string;
  intro: string;
  content: string;
  sourceUrl: string;
};

export const legalPages: Record<string, LegalPageContent> = {
  '/terms': {
    title: 'Terms & Conditions',
    intro: 'Terms and conditions from the live MacroHealthPlus website, edited only for grammar and readability.',
    content: termsConditions,
    sourceUrl: 'https://macrohealthplus.org/terms',
  },
  '/privacy': {
    title: 'Privacy Policy',
    intro: 'Privacy information from the live MacroHealthPlus website, edited only for grammar and readability.',
    content: privacyPolicy,
    sourceUrl: 'https://macrohealthplus.org/privacy',
  },
  '/security': {
    title: 'Security Policy',
    intro: 'Security information from the live MacroHealthPlus website, edited only for grammar and readability.',
    content: securityPolicy,
    sourceUrl: 'https://macrohealthplus.org/security',
  },
  '/refund-return-policy': {
    title: 'Refund & Return Policy',
    intro: 'Refund and return information from the live MacroHealthPlus website, edited only for grammar and readability.',
    content: refundReturnPolicy,
    sourceUrl: 'https://macrohealthplus.org/refund-return-policy',
  },
  '/cookie-disclaimer': {
    title: 'Cookie Disclaimer',
    intro: 'Disclaimer and cookie information from the live MacroHealthPlus website, edited only for grammar and readability.',
    content: cookieDisclaimer,
    sourceUrl: 'https://macrohealthplus.org/cookie-disclaimer',
  },
};
