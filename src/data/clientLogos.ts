export type ClientLogo = {
  clientName: string;
  logoPath: string;
  sourceType: 'docx' | 'image' | 'logoos' | 'readme-mapped';
  originalFile: string;
  altText: string;
  notes: string;
};

export const clientLogos: ClientLogo[] = [
  { clientName: 'Lumina IVF', logoPath: '/assets/clients/processed/001-lumina-ivf.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image1.png', altText: 'Lumina IVF logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'Prime TG Diagnostic Ltd', logoPath: '/assets/clients/processed/002-prime-tg-diagnostic-ltd.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image2.png', altText: 'Prime TG Diagnostic Ltd logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'Graduate General Hospital', logoPath: '/assets/clients/processed/003-graduate-general-hospital.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image3.jpeg', altText: 'Graduate General Hospital logo', notes: 'Extracted from DOCX; white-background JPEG placed in dark glass logo card.' },
  { clientName: 'The Lab Aid Diagnostic center (Habiganj)', logoPath: '/assets/clients/processed/004-the-lab-aid-diagnostic-center-habiganj.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image4.png', altText: 'The Lab Aid Diagnostic center Habiganj logo', notes: 'Extracted from DOCX; low-resolution source included as requested.' },
  { clientName: 'Aiyaat Medical Service', logoPath: '/assets/clients/processed/005-aiyaat-medical-service.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image5.png', altText: 'Aiyaat Medical Service logo', notes: 'Extracted from DOCX; low-resolution source included as requested.' },
  { clientName: 'Active Diagnostic & Blood Bank', logoPath: '/assets/clients/processed/006-active-diagnostic-and-blood-bank.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image6.jpeg', altText: 'Active Diagnostic and Blood Bank logo', notes: 'Extracted from DOCX; white-background JPEG placed in dark glass logo card.' },
  { clientName: 'Medicure Diagnostic Center', logoPath: '/assets/clients/processed/007-medicure-diagnostic-center.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image7.png', altText: 'Medicure Diagnostic Center logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'Prime Diagnostic Center', logoPath: '/assets/clients/processed/008-prime-diagnostic-center.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image8.jpeg', altText: 'Prime Diagnostic Center logo', notes: 'Extracted from DOCX; white-background JPEG placed in dark glass logo card.' },
  { clientName: 'Al-Aksa health care & Diagnostic', logoPath: '/assets/clients/processed/009-al-aksa-health-care-and-diagnostic.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image9.jpeg', altText: 'Al-Aksa health care and Diagnostic logo', notes: 'Extracted from DOCX; tall white-background JPEG included without cropping.' },
  { clientName: 'Apollo Plus Medical Service', logoPath: '/assets/clients/processed/010-apollo-plus-medical-service.png', sourceType: 'docx', originalFile: 'logo.docx / word/media/image10.png', altText: 'Apollo Plus Medical Service logo', notes: 'Extracted from DOCX and normalized to contain-fit PNG.' },
  { clientName: 'PBC & Diagnostic Center', logoPath: '/assets/clients/processed/012-pbc-and-diagnostic-center.png', sourceType: 'image', originalFile: 'WhatsApp Image 2026-06-03 at 11.14.12.jpeg', altText: 'PBC and Diagnostic Center logo', notes: 'Standalone uploaded image mapped by README.' },
  { clientName: 'NurMyran Community Development Centre', logoPath: '/assets/clients/processed/013-nurmyran-community-development-centre.png', sourceType: 'image', originalFile: 'WhatsApp Image 2026-06-03 at 11.14.14.jpeg', altText: 'NurMyran Community Development Centre logo', notes: 'Standalone uploaded image; README requests manual spelling verification.' },
  { clientName: 'Vital Diagnostic Centre', logoPath: '/assets/clients/processed/014-vital-diagnostic-centre.png', sourceType: 'image', originalFile: 'WhatsApp Image 2026-06-03 at 11.14.15.jpeg', altText: 'Vital Diagnostic Centre logo', notes: 'Standalone uploaded image mapped by README.' },
];

export const skippedClientLogos = [
  {
    clientName: 'Lab Aid Hospital (Bhairab)',
    reason: 'Name appears in the DOCX/package mapping, but no embedded logo image was found.',
  },
];
