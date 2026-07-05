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
        serviceTitle: 'Get Started Now',
        buttonText: 'Get Started',
        redirectLink: 'https://app.greatclinic.org/register',
        services: ['Fast Invoicing', 'Stock Management', 'Smooth Returns', 'Purchase Management', 'Vendor Management', '4 Ways real time Communication (SMS*, Email, WhatsApp & Notification)', 'Patient Feedback Collection', 'Bar Code Scan', 'Rack Management', 'Advanced integrated report- MIS', 'Web and Mobile App Access'],
      },
      {
        planTitle: 'Standard',
        cost: 'BDT 20,000',
        pharmacyType: 'Single Pharmacy',
        userType: '1 Admin, Multiple Sales person',
        monthlyServiceCharge: 'BDT 1,500/Monthly',
        billingYear: 'Billing on Quarterly/ Yearly',
        serviceTitle: 'Grow your Practice',
        buttonText: 'Get Started',
        redirectLink: 'https://app.greatclinic.org/register',
        services: ['Fast Invoicing', 'Stock Management', 'Smooth Returns', 'Purchase Management', 'Vendor Management', '4 Ways real time Communication (SMS*, Email, WhatsApp & Notification)', 'Patient Feedback Collection', 'Bar Code Scan', 'Rack Management', 'Advanced integrated report- MIS', 'Web and Mobile App Access', 'SMS Notification*'],
      },
      {
        planTitle: 'Premium',
        everyThing: 'Let’s talk Tailored to fit your business',
        serviceTitle: 'Deliver at Scale',
        buttonText: 'Get Started',
        redirectLink: 'https://app.greatclinic.org/register',
        services: ['Everything in Specialist, please'],
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
        serviceTitle: 'Grow your Practice',
        buttonText: 'Get Started',
        redirectLink: 'https://gd-app.macrohealthplus.org/register',
        services: ['Online Booking', 'Patient Records', 'Consultation from templates', 'Referral letters & Prescriptions', '4 Ways real time Communication (SMS, Email, WhatsApp & Notification)', 'Reminders, Greetings, Offers', 'Web and Mobile App Access', 'Tele-consulting', 'Criteria based Bulk SMS sending*', 'Appointment notification by SMS*'],
      },
      {
        planTitle: 'Premium',
        everyThing: 'Let’s talk Tailored to fit your business',
        serviceTitle: 'Deliver at Scale',
        buttonText: 'Get Started',
        redirectLink: 'https://gd-app.macrohealthplus.org/register',
        services: ['Everything in Specialist, please'],
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
        serviceTitle: 'For newly open diagnostic Lab with all facilities',
        buttonText: 'Get Started',
        redirectLink: 'https://gd-app.macrohealthplus.org/register',
        services: ['Patient Registration', 'Billing Management', 'Unlimited Users', 'Limited Invoice', 'QR Code System', '5 User/Collectors', '5 Franchise', 'Advanced Integrated Report- MIS', 'Web and Mobile App Access', '4 Ways real time Communication (SMS, Email, WhatsApp & Notification)'],
      },
      {
        planTitle: 'Premium',
        everyThing: 'Let’s talk Tailored to fit your business',
        serviceTitle: 'For growing labs that need more services and flexibility',
        buttonText: 'Get Started',
        redirectLink: 'https://macrohealthplus.org/request-demo',
        services: ['Patient Registration', 'Billing Management', 'Unlimited Users', 'Unlimited Invoice', 'QR Code System', 'Unlimited User/Collectors', 'Unlimited Franchise', 'QR Coded Lab Report', 'Advanced Integrated Report- MIS', 'Web and Mobile App Access', '4 Ways real time Communication (SMS, Email, WhatsApp & Notification)', 'SMS Notification *', 'Machine Integrations', 'Data Exports'],
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
