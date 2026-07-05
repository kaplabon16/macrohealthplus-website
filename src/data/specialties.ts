export type Specialty = {
  title: string;
  route: string;
  description: string;
  image?: string;
  features: string[];
};

const commonFeatures = ['Fewer clicks', 'Simplified workflows', 'Customizable solutions', 'Electronic health record', 'Paperless clinical operation', 'Easy configuration'];

export const specialties: Specialty[] = [
  { title: 'General Practice', route: '/general-practice', description: 'Perfect Practice Management Software for General Practice Services. A comprehensive medical and practice management software for general practitioners.', image: '/assets/macrohealthplus/specialties/specialties-General_practice.1723ea03c753be128b1f.png', features: ['Health workflow', 'Electronic health record', 'Paperless practice', 'Easy configuration'] },
  { title: 'Cardiologist', route: '/cardiologist', description: 'Specialty workflow support for cardiology teams with fewer clicks, simplified workflows, and customizable solutions.', image: '/assets/macrohealthplus/homepage/homepage-cardiologist_img2.9be2fdde8f36c8072ff5.png', features: commonFeatures },
  { title: 'Gastroenterologist', route: '/gastroenterologist', description: 'Specialty workflow support for gastroenterology services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-gastroenterologist_img2.e31e1f41b9706a7a1daf.png', features: commonFeatures },
  { title: 'Chest Physician', route: '/chest-physician', description: 'Specialty workflow support for chest physician services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-chest_physician_img2.e5d2f207d4c6963e6b73.png', features: commonFeatures },
  { title: 'Urologist', route: '/urologist', description: 'Specialty workflow support for urology services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-Urologist__Img2.378d634f6790e229a3d4.png', features: commonFeatures },
  { title: 'ENT Specialist', route: '/ent-specialist', description: 'Specialty workflow support for ENT specialist services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-ent_specialist_img2.cbe1efaef46b46d3ac48.png', features: commonFeatures },
  { title: 'Ophthalmologist', route: '/ophthalmologist', description: 'Specialty workflow support for ophthalmology services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-ophthalmologist_img2.596649ee1f3331cb4cc5.png', features: commonFeatures },
  { title: 'Dermatologist', route: '/dermatologist', description: 'Specialty workflow support for dermatology services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-Dermatologist_img2.109f878a2775ac69ddd2.png', features: commonFeatures },
  { title: 'Psychiatrist and Psychologist', route: '/psychiatrist-and-psychologist', description: 'Specialty workflow support for psychiatrist and psychologist services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-psychiatrist_psychologist_img2.68f1cf0dc5267137bd0a.png', features: commonFeatures },
  { title: 'Rheumatologist', route: '/rheumatologist', description: 'Specialty workflow support for rheumatology services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-rheumatologist_img2.6175b6846d6fab18d141.png', features: commonFeatures },
  { title: 'Neurologist', route: '/neurologist', description: 'Specialty workflow support for neurology services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-neurologist_img2.ec79977650f051ce06f0.png', features: commonFeatures },
  { title: 'Orthopaedic Surgeon', route: '/orthopaedic-surgeon', description: 'Specialty workflow support for orthopaedic surgeon services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-orthopaedic_surgeon_img2.8ee7d0385c9a1f321fbc.png', features: commonFeatures },
  { title: 'Neuro-surgeon', route: '/neuro-surgeon', description: 'Specialty workflow support for neuro-surgeon services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-neuro_surgeon_img2.e63d57dc7a741cc8a6cf.png', features: commonFeatures },
  { title: 'Obstetrics and Gynaecologist', route: '/obstetrics-and-gynaecologist', description: 'Specialty workflow support for obstetrics and gynaecologist services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-obstetrics_gynaecologist_img2.b2017f43b60049f22c25.png', features: commonFeatures },
  { title: 'Paediatricians', route: '/paediatricians', description: 'Specialty workflow support for paediatrician services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-paediatricians_img2.8ebf9e1372ae2956b648.png', features: commonFeatures },
  { title: 'General Surgeon', route: '/general-surgeon', description: 'Specialty workflow support for general surgeon services inside MacroHealthPlus.', image: '/assets/macrohealthplus/homepage/homepage-general_surgeon_img2.0b7384760c946a77a225.png', features: commonFeatures },
];
