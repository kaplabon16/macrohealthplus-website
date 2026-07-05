import Section from '../layout/Section';

type LegalPageTemplateProps = {
  title: string;
  intro?: string;
  content: string;
};

export default function LegalPageTemplate({ title, intro, content }: LegalPageTemplateProps) {
  return (
    <Section className="pt-36" eyebrow="Legal" title={title} intro={intro}>
      <article className="max-w-4xl border-t border-white/10 pt-8">
        <div className="whitespace-pre-wrap text-[15px] leading-8 text-slate-300">
          {content}
        </div>
      </article>
    </Section>
  );
}
