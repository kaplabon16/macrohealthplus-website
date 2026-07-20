import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { LegalPageContent } from './legal-types';

const legalDefinitions: Record<string, Omit<LegalPageContent, 'content'>> = {
  terms: { title: 'Terms & Conditions', intro: 'Terms and conditions from the live MacroHealthPlus website, edited only for grammar and readability.', sourceUrl: 'https://macrohealthplus.org/terms' },
  privacy: { title: 'Privacy Policy', intro: 'Privacy information from the live MacroHealthPlus website, edited only for grammar and readability.', sourceUrl: 'https://macrohealthplus.org/privacy' },
  security: { title: 'Security Policy', intro: 'Security information from the live MacroHealthPlus website, edited only for grammar and readability.', sourceUrl: 'https://macrohealthplus.org/security' },
  'refund-return-policy': { title: 'Refund & Return Policy', intro: 'Refund and return information from the live MacroHealthPlus website, edited only for grammar and readability.', sourceUrl: 'https://macrohealthplus.org/refund-return-policy' },
  'cookie-disclaimer': { title: 'Cookie Disclaimer', intro: 'Disclaimer and cookie information from the live MacroHealthPlus website, edited only for grammar and readability.', sourceUrl: 'https://macrohealthplus.org/cookie-disclaimer' },
};

export function getLegalPage(slug: string): LegalPageContent | undefined {
  const definition = legalDefinitions[slug];
  if (!definition) return undefined;
  const content = readFileSync(join(process.cwd(), 'src', 'data', 'legal-content', `${slug}.txt`), 'utf8');
  return { ...definition, content };
}
