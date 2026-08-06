import { ArrowUpRight } from 'lucide-react';
import { products, type Product } from '../../data/products';
import ProductMark from '../products/ProductMark';

export const productPalette = [
  { accent: '#01D439', ink: '#07110b', field: '#123c2a', glow: '#01D439' },
  { accent: '#78cfff', ink: '#06121c', field: '#123454', glow: '#38bdf8' },
  { accent: '#01D439', ink: '#101706', field: '#304a13', glow: '#01D439' },
  { accent: '#ffb75e', ink: '#1c0d04', field: '#64310d', glow: '#fb923c' },
  { accent: '#ff8798', ink: '#1b070b', field: '#5a1724', glow: '#fb7185' },
  { accent: '#c6a6ff', ink: '#10091c', field: '#3c2465', glow: '#a78bfa' },
  { accent: '#ffd45f', ink: '#1a1202', field: '#5a4108', glow: '#facc15' },
  { accent: '#63e2d2', ink: '#031715', field: '#0c504a', glow: '#2dd4bf' },
  { accent: '#ff96c9', ink: '#1c0712', field: '#5c193c', glow: '#f472b6' },
  { accent: '#01D439', ink: '#081605', field: '#235214', glow: '#01D439' },
  { accent: '#7cbcff', ink: '#061220', field: '#173f68', glow: '#60a5fa' },
];

export const productCategories: Record<string, string> = {
  DigiPatient: 'Patient experience',
  GreatDoc: 'Clinical practice',
  GreatClinic: 'Diagnostics',
  GreatPharma: 'Pharmacy operations',
  Hospital: 'Hospital operations',
  'HR Management': 'Workforce',
  Inventory: 'Inventory',
  Telehealth: 'Virtual care',
  Marketplace: 'Digital marketplace',
  'e-Pharmacy': 'Online pharmacy',
  LabAgent: 'Laboratory network',
  'Caregiver Management': 'Home care operations',
  'Healthcare CRM': 'Patient relationship management',
};

export const featuredProductTitles = ['GreatClinic', 'GreatDoc', 'Hospital', 'GreatPharma'];

export const showcaseProducts = [
  ...featuredProductTitles
    .map((title) => products.find((product) => product.title === title))
    .filter((product): product is Product => Boolean(product)),
  ...products.filter((product) => !featuredProductTitles.includes(product.title)),
];

type ProductShowcaseCardContentProps = {
  index: number;
  product: Product;
};

export default function ProductShowcaseCardContent({ index, product }: ProductShowcaseCardContentProps) {
  return (
    <>
      <div className="product-showcase-visual" aria-hidden="true">
        <span className="product-showcase-grid" />
        <span className="product-showcase-orbit product-showcase-orbit-one" />
        <span className="product-showcase-orbit product-showcase-orbit-two" />
        <span className="product-showcase-node product-showcase-node-one" />
        <span className="product-showcase-node product-showcase-node-two" />
        <span className="product-showcase-node product-showcase-node-three" />
        <div className="product-showcase-mark">
          <ProductMark title={product.title} />
        </div>
        <span className="product-showcase-signal" />
      </div>

      <div className="product-showcase-copy">
        <span className="product-showcase-type">{productCategories[product.title]}</span>
        <h3>{product.subtitle || product.title}</h3>
        {product.description ? <p>{product.description}</p> : null}
        <span className="product-showcase-link">
          Explore {product.title}
          <ArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </>
  );
}
