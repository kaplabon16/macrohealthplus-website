import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ProductPageTemplate from '../components/products/ProductPageTemplate';
import { products } from '../data/products';
import { setPageMeta } from '../utils/seo';

export default function ProductDetail() {
  const location = useLocation();
  const lookupPath = location.pathname === '/e-pharmacy' ? '/e-commerce-medicine' : location.pathname;
  const product = products.find((item) => item.route === lookupPath);

  useEffect(() => {
    if (product) setPageMeta(product.title, product.description);
  }, [product]);

  if (!product) return <Navigate to="/404" replace />;

  return <ProductPageTemplate {...product} />;
}
