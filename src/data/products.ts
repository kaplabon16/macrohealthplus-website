export type ProductVisual = {
  title: string;
  image: string;
  description: string;
  position?: string;
};

export type Product = {
  title: string;
  route: string;
  subtitle: string;
  description: string;
  image?: string;
  imagePosition?: string;
  features: string[];
  story?: ProductVisual[];
  notes?: string;
};

const productImage = (file: string) => `/assets/product_images/web/${file}.webp`;

export const products: Product[] = [
  {
    title: 'DigiPatient',
    route: '/digi-patient',
    subtitle: 'A Continuous Patient Record',
    description: 'Organize appointments, investigations, clinical documents, vital signs, medical history, and reports around one patient profile so important health information remains available beyond a single visit.',
    image: productImage('digi_patient'),
    features: ['Appointments', 'Investigation results', 'Doctor’s reports', 'Health documents', 'Previous medical history', 'Vitals and disease photos'],
    story: [
      { title: 'Find the right record quickly', image: productImage('digi_patient'), description: 'Search and review patient profiles from an organized list, with the essential identifiers needed to continue care confidently.' },
      { title: 'Keep activity in context', image: productImage('digi_patients'), description: 'Bring clinical and administrative history together so authorized teams can understand what has happened and what still requires attention.' },
    ],
  },
  {
    title: 'GreatDoc',
    route: '/great-doc',
    subtitle: 'The Digital Practice for Doctors',
    description: 'Move from appointment to consultation with structured history, clinical notes, prescriptions, referral letters, and follow-up information designed around the way an individual practice delivers care.',
    image: productImage('appointment'),
    imagePosition: 'center top',
    features: ['Online booking', 'Patient records', 'Consultation from templates', 'Referral letters and prescriptions', 'Tele-consulting', 'Appointment notification by SMS'],
    story: [
      { title: 'A schedule the whole practice can follow', image: productImage('appointment'), description: 'Create and update bookings while keeping the day’s consultation status visible to both clinical and front-desk users.', position: 'center top' },
      { title: 'Clinical context at consultation time', image: productImage('digi_patients'), description: 'Open the relevant patient history directly from the practice workflow instead of reconstructing context from separate files and messages.' },
    ],
  },
  {
    title: 'GreatClinic',
    route: '/great-lab',
    subtitle: 'End-to-End Diagnostic Operations',
    description: 'Coordinate registration, test selection, billing, report preparation, verification, publishing, and delivery within a diagnostic workflow built to keep every order traceable from counter to result.',
    image: productImage('great_lab_product_img'),
    features: ['Patient registration', 'Billing management', 'QR Code System', 'QR Coded Lab Report', 'Machine integrations', 'Advanced Integrated Report- MIS'],
    story: [
      { title: 'Reports that move through a defined process', image: productImage('great_lab_product_img'), description: 'Prepare, review, verify, and publish diagnostic information with QR-ready records and a clearer view of report status.' },
      { title: 'Billing connected to the order', image: productImage('lab_billing'), description: 'Handle test selection, charges, discounts, payment, and delivery information without separating the financial record from the laboratory request.' },
    ],
  },
  {
    title: 'GreatPharma',
    route: '/great-pharma',
    subtitle: 'Pharmacy POS and Stock Control',
    description: 'Serve customers quickly at the counter while maintaining control over medicine billing, purchases, returns, vendors, rack locations, stock movement, and the transaction history behind daily pharmacy performance.',
    image: productImage('great_pharma'),
    features: ['Fast invoicing', 'Stock management', 'Smooth returns', 'Purchase management', 'Rack management', 'Web and Mobile App Access'],
    story: [
      { title: 'A faster, more informed counter', image: productImage('great_pharma'), description: 'Bring medicine search, customer details, item availability, payment, and invoice actions into one focused sales interface.' },
      { title: 'Know what is available and where', image: productImage('inventory_product'), description: 'Monitor stock position and item movement so purchasing and service decisions are based on current inventory information.' },
      { title: 'Understand every transaction', image: productImage('transaction_data_pharmacy'), description: 'Review sales and payment activity with the detail needed for reconciliation, oversight, and day-to-day business decisions.' },
    ],
  },
  {
    title: 'Hospital',
    route: '/hospital',
    subtitle: 'Coordinated Hospital Service Delivery',
    description: 'Give hospital teams a structured view of patient services, admissions, departmental activity, billing, and operational handoffs so each stage of care can progress with clearer ownership.',
    image: productImage('hospital_product'),
    features: ['Patient service coordination', 'Admission support', 'Billing workflow', 'Department visibility', 'Operational handoff tracking', 'QR-enabled records'],
    story: [
      { title: 'A command view for patient services', image: productImage('hospital_product'), description: 'Bring service activity, billing status, and department coordination into a shared operational view for hospital teams.' },
      { title: 'Connect scheduled and ongoing care', image: productImage('appointment'), description: 'Carry appointment information into the wider hospital journey so departments can prepare for the patient and coordinate the next action.' },
    ],
  },
  {
    title: 'HR Management',
    route: '/hr-management',
    subtitle: 'Workforce Administration for Healthcare',
    description: 'Manage employee profiles, attendance, leave balances, departmental visibility, and salary processing in one workforce system built for the staffing realities of healthcare organizations.',
    image: productImage('hr_product'),
    features: ['Employee profiles', 'Attendance summary', 'Leave balance', 'Salary processing', 'Quick workforce view', 'Role and department visibility'],
    story: [
      { title: 'Workforce status at a glance', image: productImage('hr_dashboard'), description: 'Review current HR activity and employee movement from a dashboard designed to surface the information administrators need first.' },
      { title: 'Immediate employee context', image: productImage('hr_dashboard_quickview'), description: 'Check department, availability, and attendance status without opening a long sequence of individual records.' },
      { title: 'Transparent leave balances', image: productImage('hr_dashboard_leave_balance'), description: 'Maintain a clear view of entitlement and leave status, reducing dependence on separate spreadsheets and manual calculations.' },
      { title: 'Attendance ready for review', image: productImage('hr_monthy_attendence_summary'), description: 'Turn daily attendance into a monthly summary that supports management review and the preparation of payroll.' },
      { title: 'A more controlled salary process', image: productImage('salary_process'), description: 'Use workforce and attendance information to support a consistent, reviewable salary-processing workflow.' },
    ],
  },
  {
    title: 'Inventory',
    route: '/inventory',
    subtitle: 'Operational Inventory Control',
    description: 'Maintain a reliable view of healthcare supplies, medicine stock, item movement, and store availability so purchasing and service teams can respond before shortages affect operations.',
    image: productImage('inventory_product'),
    features: ['Stock overview', 'Item movement', 'Store visibility', 'Low-stock tracking', 'Purchase support', 'Operational reporting'],
    story: [
      { title: 'A current view of stock', image: productImage('inventory_product'), description: 'Review item availability and movement from a central inventory screen designed for routine operational decisions.' },
      { title: 'Connect movement to pharmacy activity', image: productImage('transaction_data_pharmacy'), description: 'Relate inventory changes to transaction data, making it easier to understand why stock has moved and where follow-up may be required.' },
    ],
  },
  {
    title: 'Telehealth',
    route: '/telehealth',
    subtitle: 'Structured Care Beyond the Clinic',
    description: 'Extend consultations beyond the physical practice with scheduled remote appointments, clinical advice, electronic prescriptions, investigation orders, and summaries that remain connected to the patient record.',
    image: productImage('appointment'),
    imagePosition: 'center top',
    features: ['Setup your timing', 'Define payment', 'Send consultation summary', 'New consultation flow', 'Text message updates', 'Remote patient conversation'],
    story: [
      { title: 'Remote care begins with a clear schedule', image: productImage('appointment'), description: 'Define availability and organize online appointments so clinicians and patients enter the consultation with a shared understanding of timing.', position: 'center top' },
      { title: 'The consultation remains part of the record', image: productImage('digi_patient'), description: 'Keep advice, orders, prescriptions, and follow-up connected to the patient’s broader history rather than leaving remote care in isolation.' },
    ],
  },
  {
    title: 'Marketplace',
    route: '/marketplace',
    subtitle: 'A Digital Healthcare Marketplace',
    description: 'Create a coordinated online destination for medicine, professional services, healthcare assistance, and customer support while keeping catalogue and availability information tied to operational systems.',
    image: productImage('great_pharma'),
    features: ['Add item', 'Payment tracking', 'Pharmacy marketplace', 'High quality', 'Best price', 'After sales services'],
    story: [
      { title: 'Commerce connected to service operations', image: productImage('great_pharma'), description: 'Support catalogue, order, and customer-service activity with the pharmacy workflows responsible for fulfilment.' },
      { title: 'Availability customers can depend on', image: productImage('inventory_product'), description: 'Ground marketplace activity in current inventory information so online demand and operational supply remain aligned.' },
    ],
  },
  {
    title: 'e-Pharmacy',
    route: '/e-commerce-medicine',
    subtitle: 'Online Commerce for Pharmacies',
    description: 'Give pharmacy customers a digital route to medicines and healthcare products while supporting catalogue administration, order handling, customer access, and the operational work behind fulfilment.',
    image: productImage('transaction_data_pharmacy'),
    features: ['Online medicine sales', 'Product catalogue', 'Order flow', 'Customer access', 'Pharmacy marketplace'],
    story: [
      { title: 'Online orders, operationally connected', image: productImage('great_pharma'), description: 'Carry digital demand into the pharmacy environment responsible for product selection, sale, and fulfilment.' },
      { title: 'A traceable commercial record', image: productImage('transaction_data_pharmacy'), description: 'Review payment and sales activity with enough detail to follow an order through the commercial process.' },
    ],
    notes: 'The old /e-pharmacy route renders a 404; the live internal route is /e-commerce-medicine.',
  },
  {
    title: 'LabAgent',
    route: '/lab-agent',
    subtitle: 'External Laboratory Coordination',
    description: 'Coordinate collection centres, referred tests, payments, and service handoffs so an externally processed diagnostic request remains traceable from order capture through report delivery.',
    image: productImage('lab_agent'),
    features: ['External lab support', 'Order payment', 'Collection workflow', 'Lab service coordination'],
    story: [
      { title: 'A visible external-lab handoff', image: productImage('lab_agent'), description: 'Record referred diagnostic activity and follow its progress so collection teams can respond accurately to patient and partner enquiries.' },
      { title: 'Payment aligned with the request', image: productImage('lab_billing'), description: 'Keep test charges, payment status, and collection information associated with the diagnostic order throughout the external workflow.' },
    ],
  },
];
