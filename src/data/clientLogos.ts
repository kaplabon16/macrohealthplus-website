export type ClientLogo = {
  clientName: string;
  logoPath: string;
  sourceType: 'docx' | 'image' | 'logoos' | 'readme-mapped';
  originalFile: string;
  altText: string;
  notes: string;
};

export const clientLogos: ClientLogo[] = [
  { clientName: 'Lumina IVF', logoPath: '/assets/clients/processed/001-lumina-ivf.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image1.png', altText: 'Lumina IVF logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'Prime TG Diagnostic Ltd', logoPath: '/assets/clients/processed/002-prime-tg-diagnostic-ltd.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image2.png', altText: 'Prime TG Diagnostic Ltd logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'Graduate General Hospital', logoPath: '/assets/clients/processed/003-graduate-general-hospital.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image3.jpeg', altText: 'Graduate General Hospital logo', notes: 'Extracted from DOCX, isolated from its white backplate, and normalized to a transparent logo canvas.' },
  { clientName: 'The Lab Aid Diagnostic center (Habiganj)', logoPath: '/assets/clients/processed/004-the-lab-aid-diagnostic-center-habiganj.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image4.png', altText: 'The Lab Aid Diagnostic center Habiganj logo', notes: 'Extracted from DOCX; low-resolution source included as requested.' },
  { clientName: 'Aiyaat Medical Service', logoPath: '/assets/clients/processed/005-aiyaat-medical-service.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image5.png', altText: 'Aiyaat Medical Service logo', notes: 'Extracted from DOCX; low-resolution source included as requested.' },
  { clientName: 'Active Diagnostic & Blood Bank', logoPath: '/assets/clients/processed/006-active-diagnostic-and-blood-bank.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image6.jpeg', altText: 'Active Diagnostic and Blood Bank logo', notes: 'Extracted from DOCX, isolated from its white backplate, and normalized to a transparent logo canvas.' },
  { clientName: 'Bangladesh Medical University ENT Department', logoPath: '/assets/clients/processed/016-bangladesh-medical-university.webp', sourceType: 'image', originalFile: 'User-provided Bangladesh Medical University logo', altText: 'Bangladesh Medical University ENT Department logo', notes: 'User-provided BMU logo normalized to the shared transparent logo canvas.' },
  { clientName: 'Bangladesh Medical University Hematology Department', logoPath: '/assets/clients/processed/016-bangladesh-medical-university.webp', sourceType: 'image', originalFile: 'User-provided Bangladesh Medical University logo', altText: 'Bangladesh Medical University Hematology Department logo', notes: 'User-provided BMU logo normalized to the shared transparent logo canvas.' },
  { clientName: 'Prime Diagnostic Center', logoPath: '/assets/clients/processed/008-prime-diagnostic-center.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image8.jpeg', altText: 'Prime Diagnostic Center logo', notes: 'Extracted from DOCX, isolated from its white backplate, and normalized to a transparent logo canvas.' },
  { clientName: 'Al-Aksa health care & Diagnostic', logoPath: '/assets/clients/processed/009-al-aksa-health-care-and-diagnostic.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image9.jpeg', altText: 'Al-Aksa health care and Diagnostic logo', notes: 'Extracted from DOCX, isolated from its white backplate, and normalized without distorting the tall logo.' },
  { clientName: 'Apollo Plus Medical Service', logoPath: '/assets/clients/processed/010-apollo-plus-medical-service.webp', sourceType: 'docx', originalFile: 'logo.docx / word/media/image10.png', altText: 'Apollo Plus Medical Service logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'PBC & Diagnostic Center', logoPath: '/assets/clients/processed/012-pbc-and-diagnostic-center.webp', sourceType: 'image', originalFile: 'WhatsApp Image 2026-06-03 at 11.14.12.jpeg', altText: 'PBC and Diagnostic Center logo', notes: 'Standalone uploaded image mapped by README.' },
  { clientName: 'NurMyran Community Development Centre', logoPath: '/assets/clients/processed/013-nurmyran-community-development-centre.webp', sourceType: 'image', originalFile: 'WhatsApp Image 2026-06-03 at 11.14.14.jpeg', altText: 'NurMyran Community Development Centre logo', notes: 'Standalone uploaded image; README requests manual spelling verification.' },
  { clientName: 'Vital Diagnostic Centre', logoPath: '/assets/clients/processed/014-vital-diagnostic-centre.webp', sourceType: 'image', originalFile: 'WhatsApp Image 2026-06-03 at 11.14.15.jpeg', altText: 'Vital Diagnostic Centre logo', notes: 'Standalone uploaded image with its white backplate removed and artwork normalized to the shared transparent canvas.' },
];

export const skippedClientLogos = [
  {
    clientName: 'Lab Aid Hospital (Bhairab)',
    reason: 'Name appears in the DOCX/package mapping, but no embedded logo image was found.',
  },
];
