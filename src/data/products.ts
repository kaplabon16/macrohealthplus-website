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
    subtitle: 'Electronic Health Records',
    description: 'Manage appointments, upload investigation results, doctor’s reports, health documents, own previous medical history, various vitals, upload disease photos.',
    image: '/assets/macrohealthplus/products/products-ehr_img.2d0b940f57a7d6ceff48.png',
    features: ['Appointments', 'Investigation results', 'Doctor’s reports', 'Health documents', 'Previous medical history', 'Vitals and disease photos'],
  },
  {
    title: 'GreatDoc',
    route: '/great-doc',
    subtitle: 'Great documents for great doctors.',
    description: 'History and clinical examination in clicks. User friendly design for minimal to low computer literate clinician for great use. Access securely anywhere anytime.',
    image: '/assets/macrohealthplus/products/products-GreatDoc__img.1ee89e7cf72d37a03281.png',
    features: ['Online booking', 'Patient records', 'Consultation from templates', 'Referral letters and prescriptions', 'Tele-consulting', 'Appointment notification by SMS'],
  },
  {
    title: 'GreatClinic',
    route: '/great-lab',
    subtitle: 'Laboratory',
    description: 'Lab report entry, verification authentication and publish report or automated import according to your needs. Send a report to your patient by printing, SMS, Email or via WhatsApp.',
    image: '/assets/macrohealthplus/products/products-GreatLab__img.1b81190d55331801f8c5.png',
    features: ['Patient registration', 'Billing management', 'QR Code System', 'QR Coded Lab Report', 'Machine integrations', 'Advanced Integrated Report- MIS'],
  },
  {
    title: 'GreatPharma',
    route: '/great-pharma',
    subtitle: 'Pharmacy POS',
    description: 'Empower your pharmacy with an advanced management system for inventory, billing and POS in cloud from any device like tablet, PCs or mobile phones.',
    image: '/assets/macrohealthplus/products/products-PosSystem__img.21ef25440460a7ba30bd.png',
    features: ['Fast invoicing', 'Stock management', 'Smooth returns', 'Purchase management', 'Rack management', 'Web and Mobile App Access'],
  },
  {
    title: 'Telehealth',
    route: '/telehealth',
    subtitle: 'Telemedicine For Health',
    description: 'Consult with your doctor from home at the right moment. Get appointments, clinical advice, e scripts or any investigation orders via your mobiles.',
    image: '/assets/macrohealthplus/products/products-TeleHealth.12beb835b8798484576b.jpg',
    features: ['Setup your timing', 'Define payment', 'Send consultation summary', 'New consultation flow', 'Text message updates', 'Remote patient conversation'],
  },
  {
    title: 'Marketplace',
    route: '/marketplace',
    subtitle: 'Medicine, Doctor and Allied Health Staff',
    description: 'All your needs for great care in a single place, where all your medical assistance like medicine, doctor and allied health staff are waiting for you.',
    image: '/assets/macrohealthplus/products/products-MarketPlace__img.08ac73ae9ed8695fd36a.png',
    features: ['Add item', 'Payment tracking', 'Pharmacy marketplace', 'High quality', 'Best price', 'After sales services'],
  },
  {
    title: 'e-Pharmacy',
    route: '/e-commerce-medicine',
    subtitle: 'Medicine',
    description: 'Open your door to the customers and sell your medicine and medical products even before you wake up.',
    image: '/assets/macrohealthplus/products/products-pharmacy_marketplace_img.08008d424a70f61822ef.png',
    features: ['Online medicine sales', 'Product catalogue', 'Order flow', 'Customer access', 'Pharmacy marketplace'],
    notes: 'The old /e-pharmacy route renders a 404; the live internal route is /e-commerce-medicine.',
  },
  {
    title: 'LabAgent',
    route: '/lab-agent',
    subtitle: 'Medical Lab Solutions',
    description: 'Walk to your pathology collection centre next to you in one spot.',
    image: '/assets/macrohealthplus/products/products-Agent.51c0d6497a640a053979.jpg',
    features: ['External lab support', 'Order payment', 'Collection workflow', 'Lab service coordination'],
  },
];
