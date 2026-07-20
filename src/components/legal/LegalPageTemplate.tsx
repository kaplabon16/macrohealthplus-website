'use client';

import Section from '../layout/Section';

type LegalPageTemplateProps = {
  title: string;
  intro?: string;
  content: string;
};

export default function LegalPageTemplate({ title, intro, content }: LegalPageTemplateProps) {
  return (
    <Section className="pt-24 sm:pt-28 lg:pt-32" eyebrow="Legal" title={title} intro={intro}>
      <article className="max-w-4xl border-t border-white/10 pt-5 sm:pt-6 lg:pt-8">
        <div className="whitespace-pre-wrap text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7 lg:leading-8">
          {content}
        </div>
      </article>
    </Section>
  );
}
