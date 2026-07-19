import { useEffect } from 'react';
import Section from '../components/layout/Section';
import { setPageMeta } from '../utils/seo';

type ResourceTitlePageProps = {
  title: string;
};

export default function ResourceTitlePage({ title }: ResourceTitlePageProps) {
  useEffect(() => {
    setPageMeta(title, `${title} from MacroHealthPlus.`);
  }, [title]);

  return (
    <Section className="pt-28 md:pt-36" title={title}>
      <div className="h-8" />
    </Section>
  );
}
