import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LegalPageTemplate from '../components/legal/LegalPageTemplate';
import { legalPages } from '../data/legal';
import { setPageMeta } from '../utils/seo';

export default function LegalDetail() {
  const location = useLocation();
  const page = legalPages[location.pathname] ?? legalPages['/terms'];

  useEffect(() => {
    setPageMeta(page.title, page.intro);
  }, [page]);

  return <LegalPageTemplate title={page.title} content={page.content} />;
}
