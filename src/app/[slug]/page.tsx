import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPageTemplate from '../../components/legal/LegalPageTemplate';
import ProductPageTemplate from '../../components/products/ProductPageTemplate';
import RouteStructuredData from '../../components/RouteStructuredData';
import { getLegalPage } from '../../data/legal-server';
import { products } from '../../data/products';
import { allRouteSlugs, isKnownSlug, metadataForRoute } from '../../data/seo';
import About from '../../views/About';
import ClientLogin from '../../views/ClientLogin';
import Contact from '../../views/Contact';
import HelpCentre from '../../views/HelpCentre';
import News from '../../views/News';
import NotFound from '../../views/NotFound';
import Pricing from '../../views/Pricing';
import RequestDemo from '../../views/RequestDemo';
import ResourceTitlePage from '../../views/ResourceTitlePage';
import WhyChooseUs from '../../views/WhyChooseUs';

export function generateStaticParams() {
  return allRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return metadataForRoute(`/${slug}`);
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isKnownSlug(slug)) notFound();

  const legalPage = getLegalPage(slug);
  const productSlug = slug === 'e-pharmacy' ? 'e-commerce-medicine' : slug;
  const product = products.find((item) => item.route === `/${productSlug}`);

  let content: React.ReactNode;
  if (legalPage) {
    content = <LegalPageTemplate title={legalPage.title} intro={legalPage.intro} content={legalPage.content} />;
  } else if (product) {
    content = <ProductPageTemplate {...product} />;
  } else {
    switch (slug) {
      case 'pricing': content = <Pricing />; break;
      case 'help-centre': content = <HelpCentre />; break;
      case 'news-and-views': content = <News />; break;
      case 'contact': content = <Contact />; break;
      case 'request-demo': content = <RequestDemo />; break;
      case 'client-login': content = <ClientLogin />; break;
      case 'who-we-are': content = <About />; break;
      case 'why-choose-us': content = <WhyChooseUs />; break;
      case 'research-reports': content = <ResourceTitlePage title="Medical Education" />; break;
      case 'webinars': content = <ResourceTitlePage title="Webinars" />; break;
      case '404': content = <NotFound />; break;
      default: notFound();
    }
  }

  return (
    <>
      <RouteStructuredData slug={slug} />
      {content}
    </>
  );
}
