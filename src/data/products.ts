export type Product = {
  title: string;
  route: string;
  subtitle: string;
  description: string;
  image?: string;
  features: string[];
  notes?: string;
};

export const products: Product[] = [
  {
    title: 'DigiPatient',
    route: '/digi-patient',
    subtitle: 'Connected Patient Records',
    description: 'Give patients and care teams one secure place to manage appointments, investigations, clinical documents, vitals, medical history, reports, and health updates.',
    image: '/assets/macrohealthplus/products/products-ehr_img.2d0b940f57a7d6ceff48.png',
    features: ['Appointments', 'Investigation results', 'Doctor’s reports', 'Health documents', 'Previous medical history', 'Vitals and disease photos'],
  },
  {
    title: 'GreatDoc',
    route: '/great-doc',
    subtitle: 'Smarter Clinical Documentation',
    description: 'Help doctors complete consultations faster with structured history, clinical notes, prescriptions, referrals, bookings, and secure access from any device.',
    image: '/assets/macrohealthplus/products/products-GreatDoc__img.1ee89e7cf72d37a03281.png',
    features: ['Online booking', 'Patient records', 'Consultation from templates', 'Referral letters and prescriptions', 'Tele-consulting', 'Appointment notification by SMS'],
  },
  {
    title: 'GreatClinic',
    route: '/great-lab',
    subtitle: 'Diagnostic and Lab Operations',
    description: 'Run lab registration, billing, report entry, verification, publishing, integrations, and patient delivery through a reliable diagnostic workflow.',
    image: '/assets/macrohealthplus/products/products-GreatLab__img.1b81190d55331801f8c5.png',
    features: ['Patient registration', 'Billing management', 'QR Code System', 'QR Coded Lab Report', 'Machine integrations', 'Advanced Integrated Report- MIS'],
  },
  {
    title: 'GreatPharma',
    route: '/great-pharma',
    subtitle: 'Cloud Pharmacy POS',
    description: 'Control billing, inventory, purchases, returns, racks, vendors, and daily pharmacy sales from a cloud POS built for counter speed and management visibility.',
    image: '/assets/macrohealthplus/products/products-PosSystem__img.21ef25440460a7ba30bd.png',
    features: ['Fast invoicing', 'Stock management', 'Smooth returns', 'Purchase management', 'Rack management', 'Web and Mobile App Access'],
  },
  {
    title: 'Telehealth',
    route: '/telehealth',
    subtitle: 'Remote Care Delivery',
    description: 'Connect doctors and patients through scheduled online consultations, digital advice, e-prescriptions, investigation orders, and consultation summaries.',
    image: '/assets/macrohealthplus/products/products-TeleHealth.12beb835b8798484576b.jpg',
    features: ['Setup your timing', 'Define payment', 'Send consultation summary', 'New consultation flow', 'Text message updates', 'Remote patient conversation'],
  },
  {
    title: 'Marketplace',
    route: '/marketplace',
    subtitle: 'Healthcare Marketplace',
    description: 'Bring medicines, doctors, allied health professionals, assistance services, and after-sales support into one coordinated digital marketplace.',
    image: '/assets/macrohealthplus/products/products-MarketPlace__img.08ac73ae9ed8695fd36a.png',
    features: ['Add item', 'Payment tracking', 'Pharmacy marketplace', 'High quality', 'Best price', 'After sales services'],
  },
  {
    title: 'e-Pharmacy',
    route: '/e-commerce-medicine',
    subtitle: 'Online Medicine Commerce',
    description: 'Let pharmacies sell medicines and healthcare products online with catalogue management, order flow, customer access, and marketplace connectivity.',
    image: '/assets/macrohealthplus/products/products-pharmacy_marketplace_img.08008d424a70f61822ef.png',
    features: ['Online medicine sales', 'Product catalogue', 'Order flow', 'Customer access', 'Pharmacy marketplace'],
    notes: 'The old /e-pharmacy route renders a 404; the live internal route is /e-commerce-medicine.',
  },
  {
    title: 'LabAgent',
    route: '/lab-agent',
    subtitle: 'External Lab Coordination',
    description: 'Coordinate collection centres, external lab orders, payments, and service handoffs so pathology requests move cleanly from patient to report.',
    image: '/assets/macrohealthplus/products/products-Agent.51c0d6497a640a053979.jpg',
    features: ['External lab support', 'Order payment', 'Collection workflow', 'Lab service coordination'],
  },
];
