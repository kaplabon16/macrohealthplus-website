import { Route, Routes } from 'react-router-dom';
import PageShell from './components/layout/PageShell';
import Contact from './pages/Contact';
import CookieDisclaimer from './pages/CookieDisclaimer';
import HelpCentre from './pages/HelpCentre';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Pricing from './pages/Pricing';
import ProductDetail from './pages/ProductDetail';
import RequestDemo from './pages/RequestDemo';
import Terms from './pages/Terms';
import LegalDetail from './pages/LegalDetail';
import ClientLogin from './pages/ClientLogin';
import ResourceTitlePage from './pages/ResourceTitlePage';
import WhyChooseUs from './pages/WhyChooseUs';
import { products } from './data/products';
import { routes } from './utils/routes';

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.pricing} element={<Pricing />} />
        <Route path={routes.helpCentre} element={<HelpCentre />} />
        <Route path={routes.news} element={<News />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.requestDemo} element={<RequestDemo />} />
        <Route path={routes.clientLogin} element={<ClientLogin />} />
        {products.map((product) => <Route key={product.route} path={product.route} element={<ProductDetail />} />)}
        <Route path={routes.privacy} element={<LegalDetail />} />
        <Route path={routes.security} element={<LegalDetail />} />
        <Route path={routes.refundReturnPolicy} element={<LegalDetail />} />
        <Route path={routes.terms} element={<LegalDetail />} />
        <Route path={routes.cookieDisclaimer} element={<LegalDetail />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/research-reports" element={<ResourceTitlePage title="Medical Education" />} />
        <Route path="/webinars" element={<ResourceTitlePage title="Webinars" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageShell>
  );
}
