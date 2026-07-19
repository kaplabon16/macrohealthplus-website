export type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  homeImage: string;
  homeImageAlt: string;
  leadImage: string;
  leadImageAlt: string;
  productImage: string;
  productImageAlt: string;
  paragraphs: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: 'mobile-prescription-app-release',
    category: 'Product Release',
    title: 'MacroHealthPlus releases its mobile prescription app for doctors',
    excerpt: 'The new doctor-focused mobile experience brings prescription creation, patient access, appointment activity, availability, and daily schedules into one connected workspace.',
    homeImage: '/assets/mobile_app_released/mobile_app_released.png',
    homeImageAlt: 'Dr. Aminur Rahman presenting the MacroHealthPlus mobile prescription app',
    leadImage: '/assets/mobile_app_released/greatdoc_launch_team.png',
    leadImageAlt: 'MacroHealthPlus team members presenting the GreatDoc mobile app release',
    productImage: '/assets/mobile_app_released/mobile_app_image.jpeg',
    productImageAlt: 'MacroHealthPlus mobile prescription app showing appointments, prescriptions, schedules, and patient activity',
    paragraphs: [
      'MacroHealthPlus has released a mobile prescription app designed to help doctors manage essential clinical and practice activity from a focused mobile interface. Dr. Aminur Rahman, Managing Director and CEO, presented the release as part of the company’s continuing work to make everyday healthcare workflows more accessible to clinicians.',
      'The app places prescription creation alongside the information a doctor regularly needs before and after a consultation. Doctors can review online and chamber appointments, open patient records, manage availability and follow-up schedules, and view transaction activity without moving between disconnected tools.',
      'A clear daily schedule and appointed-patient overview help clinicians understand current workload at a glance. By keeping these functions close to the prescription workflow, the mobile experience supports faster navigation while preserving the clinical context needed during a busy working day.',
    ],
  },
];
