export type PricingPlan = {
  planTitle: string;
  cost?: string;
  pharmacyType?: string;
  userType?: string;
  monthlyServiceCharge?: string;
  billingYear?: string;
  serviceTitle: string;
  buttonText: string;
  redirectLink: string;
  services: string[];
  everyThing?: string;
};

export type PricingCategory = {
  tabTitle: string;
  tabLink: string;
  items: PricingPlan[];
};

export const pricingCategories: PricingCategory[] = [
  {
    tabTitle: 'GreatPharma',
    tabLink: 'great-pharma',
    items: [
      {
        planTitle: 'General',
        cost: 'BDT 10,000',
        pharmacyType: 'Single Pharmacy',
        userType: '1 Admin, 2 Sales person',
        monthlyServiceCharge: 'BDT 1,000/Monthly',
        billingYear: 'Billing on Quarterly/ Yearly',
        serviceTitle: 'Start pharmacy operations with a reliable cloud POS foundation',
        buttonText: 'Get Started',
        redirectLink: 'https://app.greatclinic.org/register',
        services: ['Fast counter invoicing', 'Real-time stock control', 'Return and adjustment workflow', 'Purchase and vendor management', 'Multi-channel communication', 'Patient feedback collection', 'Barcode scan support', 'Rack-level organization', 'Management reports and MIS', 'Web and mobile access'],
      },
      {
        planTitle: 'Standard',
        cost: 'BDT 20,000',
        pharmacyType: 'Single Pharmacy',
        userType: '1 Admin, Multiple Sales person',
        monthlyServiceCharge: 'BDT 1,500/Monthly',
        billingYear: 'Billing on Quarterly/ Yearly',
        serviceTitle: 'Expand pharmacy management with more users and customer communication',
        buttonText: 'Get Started',
        redirectLink: 'https://app.greatclinic.org/register',
        services: ['Fast counter invoicing', 'Real-time stock control', 'Return and adjustment workflow', 'Purchase and vendor management', 'Multi-channel communication', 'Patient feedback collection', 'Barcode scan support', 'Rack-level organization', 'Management reports and MIS', 'Web and mobile access', 'SMS notification support'],
      },
      {
        planTitle: 'Premium',
        everyThing: 'Let’s talk Tailored to fit your business',
        serviceTitle: 'Build a tailored pharmacy operation for larger business needs',
        buttonText: 'Get Started',
        redirectLink: 'https://app.greatclinic.org/register',
        services: ['Tailored implementation scope', 'Advanced operational configuration', 'Workflow planning with MacroHealthPlus'],
      },
    ],
  },
  {
    tabTitle: 'GreatDoc',
    tabLink: 'great-doc',
    items: [
      {
        planTitle: 'Standard',
        cost: 'BDT 1,000/Monthly',
        userType: 'Single User, Unlimited Appointments',
        billingYear: 'Billing on Yearly',
        serviceTitle: 'Digitize appointments, records, prescriptions, and patient communication',
        buttonText: 'Get Started',
        redirectLink: 'https://gd-app.macrohealthplus.org/register',
        services: ['Online appointment booking', 'Structured patient records', 'Template-based consultation notes', 'Referral letters and prescriptions', 'Multi-channel communication', 'Reminders, greetings, and offers', 'Web and mobile access', 'Tele-consulting workflow', 'Criteria-based bulk SMS support', 'Appointment SMS notification'],
      },
      {
        planTitle: 'Premium',
        everyThing: 'Let’s talk Tailored to fit your business',
        serviceTitle: 'Design a premium doctor workflow around your practice model',
        buttonText: 'Get Started',
        redirectLink: 'https://gd-app.macrohealthplus.org/register',
        services: ['Tailored implementation scope', 'Advanced clinical workflow configuration', 'Practice growth consultation'],
      },
    ],
  },
  {
    tabTitle: 'GreatClinic',
    tabLink: 'great-lab',
    items: [
      {
        planTitle: 'Standard',
        cost: 'BDT 5,000/Monthly',
        billingYear: 'Billing on Yearly',
        serviceTitle: 'A strong diagnostic lab foundation for registration, billing, and reporting',
        buttonText: 'Get Started',
        redirectLink: 'https://gd-app.macrohealthplus.org/register',
        services: ['Patient registration', 'Billing management', 'Unlimited users', 'Limited invoice volume', 'QR code system', '5 users or collectors', '5 franchise locations', 'Integrated MIS reports', 'Web and mobile access', 'Multi-channel communication'],
      },
      {
        planTitle: 'Premium',
        everyThing: 'Let’s talk Tailored to fit your business',
        serviceTitle: 'For growing diagnostics that need higher capacity, integrations, and flexibility',
        buttonText: 'Get Started',
        redirectLink: 'https://macrohealthplus.org/request-demo',
        services: ['Patient registration', 'Billing management', 'Unlimited users', 'Unlimited invoice volume', 'QR code system', 'Unlimited users or collectors', 'Unlimited franchise locations', 'QR-coded lab reports', 'Integrated MIS reports', 'Web and mobile access', 'Multi-channel communication', 'SMS notification support', 'Machine integrations', 'Data exports'],
      },
    ],
  },
];

export const pricingPlans = pricingCategories[0].items.map((plan) => ({
  name: plan.planTitle,
  description: plan.serviceTitle,
  cta: plan.buttonText,
  features: plan.services,
  price: plan.cost ?? plan.everyThing ?? 'Let’s talk',
}));
