# Client Logo Extraction and Implementation Report

## README Interpretation Summary
The package mapping uses the serial number as the master key between names and image filenames. Serials 001-010 are DOCX embedded media; serials 012-014 are standalone uploaded image files; serial 011 is a name-only entry with no logo image found.

## Files Found Inside logo_extraction_package
- public/assets/logo_extraction_package/logo_name_connection.txt
- public/assets/logo_extraction_package/names.txt
- public/assets/logo_extraction_package/images/*.png|jpg (13 mapped images)
- The referenced DOCX was not present in the package folder; prior project artifact dist/assets/services-logos/logo.docx was preserved at public/assets/clients/raw/docx/logo.docx and inspected.

## DOCX Logos Extracted
DOCX unzip inspection found word/media/image1.png through image10.png. Implemented serials 001-010.

## Standalone Image Files Reviewed
Implemented serials 012, 013, and 014 from the standalone uploaded images.

## logoos Files Reviewed
No folder literally named logoos was present in the available package. A raw destination folder public/assets/clients/raw/logoos was created for future files and documented as empty.

## Final Client Logos Implemented
- Lumina IVF
  - Processed: /assets/clients/processed/001-lumina-ivf.png
  - Raw: /assets/clients/raw/docx/001_Lumina_IVF.png
  - Source: docx; logo.docx / word/media/image1.png
  - Dimensions: 306x306
  - Notes: Extracted from DOCX; square PNG.
- Prime TG Diagnostic Ltd
  - Processed: /assets/clients/processed/002-prime-tg-diagnostic-ltd.png
  - Raw: /assets/clients/raw/docx/002_Prime_TG_Diagnostic_Ltd.png
  - Source: docx; logo.docx / word/media/image2.png
  - Dimensions: 1024x1024
  - Notes: Extracted from DOCX; indexed PNG.
- Graduate General Hospital
  - Processed: /assets/clients/processed/003-graduate-general-hospital.png
  - Raw: /assets/clients/raw/docx/003_Graduate_General_Hospital.jpg
  - Source: docx; logo.docx / word/media/image3.jpeg
  - Dimensions: 528x528
  - Notes: Extracted from DOCX; JPEG with white background.
- The Lab Aid Diagnostic center (Habiganj)
  - Processed: /assets/clients/processed/004-the-lab-aid-diagnostic-center-habiganj.png
  - Raw: /assets/clients/raw/docx/004_The_Lab_Aid_Diagnostic_center_Habiganj.png
  - Source: docx; logo.docx / word/media/image4.png
  - Dimensions: 104x108
  - Notes: Extracted from DOCX; low-resolution image. Low-quality source dimensions; included as requested.
- Aiyaat Medical Service
  - Processed: /assets/clients/processed/005-aiyaat-medical-service.png
  - Raw: /assets/clients/raw/docx/005_Aiyaat_Medical_Service.png
  - Source: docx; logo.docx / word/media/image5.png
  - Dimensions: 133x127
  - Notes: Extracted from DOCX; low-resolution image. Low-quality source dimensions; included as requested.
- Active Diagnostic & Blood Bank
  - Processed: /assets/clients/processed/006-active-diagnostic-and-blood-bank.png
  - Raw: /assets/clients/raw/docx/006_Active_Diagnostic_and_Blood_Bank.jpg
  - Source: docx; logo.docx / word/media/image6.jpeg
  - Dimensions: 705x640
  - Notes: Extracted from DOCX; JPEG with white background.
- Medicure Diagnostic Center
  - Processed: /assets/clients/processed/007-medicure-diagnostic-center.png
  - Raw: /assets/clients/raw/docx/007_Medicure_Diagnostic_Center.png
  - Source: docx; logo.docx / word/media/image7.png
  - Dimensions: 500x500
  - Notes: Extracted from DOCX; PNG.
- Prime Diagnostic Center
  - Processed: /assets/clients/processed/008-prime-diagnostic-center.png
  - Raw: /assets/clients/raw/docx/008_Prime_Diagnostic_Center.jpg
  - Source: docx; logo.docx / word/media/image8.jpeg
  - Dimensions: 646x569
  - Notes: Extracted from DOCX; JPEG with white background.
- Al-Aksa health care & Diagnostic
  - Processed: /assets/clients/processed/009-al-aksa-health-care-and-diagnostic.png
  - Raw: /assets/clients/raw/docx/009_Al_Aksa_health_care_and_Diagnostic.jpg
  - Source: docx; logo.docx / word/media/image9.jpeg
  - Dimensions: 533x799
  - Notes: Extracted from DOCX; tall JPEG with white background.
- Apollo Plus Medical Service
  - Processed: /assets/clients/processed/010-apollo-plus-medical-service.png
  - Raw: /assets/clients/raw/docx/010_Apollo_Plus_Medical_Service.png
  - Source: docx; logo.docx / word/media/image10.png
  - Dimensions: 482x518
  - Notes: Extracted from DOCX; PNG.
- PBC & Diagnostic Center
  - Processed: /assets/clients/processed/012-pbc-and-diagnostic-center.png
  - Raw: /assets/clients/raw/image-files/012_PBC_and_Diagnostic_Center.jpg
  - Source: image; WhatsApp Image 2026-06-03 at 11.14.12.jpeg
  - Dimensions: 864x611
  - Notes: Standalone uploaded image reviewed and mapped by README.
- NurMyran Community Development Centre
  - Processed: /assets/clients/processed/013-nurmyran-community-development-centre.png
  - Raw: /assets/clients/raw/image-files/013_NurMyran_Community_Development_Centre.jpg
  - Source: image; WhatsApp Image 2026-06-03 at 11.14.14.jpeg
  - Dimensions: 1310x1200
  - Notes: Standalone uploaded image; README notes spelling should be manually verified.
- Vital Diagnostic Centre
  - Processed: /assets/clients/processed/014-vital-diagnostic-centre.png
  - Raw: /assets/clients/raw/image-files/014_Vital_Diagnostic_Centre.jpg
  - Source: image; WhatsApp Image 2026-06-03 at 11.14.15.jpeg
  - Dimensions: 269x141
  - Notes: Standalone uploaded image reviewed and mapped by README. Low-quality source dimensions; included as requested.

## Skipped Logos
- Lab Aid Hospital (Bhairab): Name appears in DOCX/package mapping, but no embedded logo/image was found.

## Low-Quality Logos
Low-resolution sources retained: The Lab Aid Diagnostic center (Habiganj), Aiyaat Medical Service. README spelling caveat retained for NurMyran Community Development Centre.

## Component and Homepage
Created src/components/ui/ClientLogoMarquee.tsx and src/components/home/OurClients.tsx. Added Our Clients after Platform Overview on the homepage. The section renders all 13 valid logos in dark glass cards with contain-fit images, marquee scrolling, hover pause, touch scroll, fade edges, lazy loading, and reduced-motion support.

## QA and Build
Unique client logos rendered locally: 13/13. Production build succeeded with npm run build.
