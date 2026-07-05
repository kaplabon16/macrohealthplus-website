import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageDir = path.join(root, 'public/assets/logo_extraction_package');
const rawDir = path.join(root, 'public/assets/clients/raw');
const processedDir = path.join(root, 'public/assets/clients/processed');
const docxRawDir = path.join(rawDir, 'docx');
const imageRawDir = path.join(rawDir, 'image-files');
const logoosRawDir = path.join(rawDir, 'logoos');

const logos = [
  ['001', 'Lumina IVF', 'images/001_Lumina_IVF.png', 'docx', 'logo.docx / word/media/image1.png', 'Extracted from DOCX; square PNG.'],
  ['002', 'Prime TG Diagnostic Ltd', 'images/002_Prime_TG_Diagnostic_Ltd.png', 'docx', 'logo.docx / word/media/image2.png', 'Extracted from DOCX; indexed PNG.'],
  ['003', 'Graduate General Hospital', 'images/003_Graduate_General_Hospital.jpg', 'docx', 'logo.docx / word/media/image3.jpeg', 'Extracted from DOCX; JPEG with white background.'],
  ['004', 'The Lab Aid Diagnostic center (Habiganj)', 'images/004_The_Lab_Aid_Diagnostic_center_Habiganj.png', 'docx', 'logo.docx / word/media/image4.png', 'Extracted from DOCX; low-resolution image.'],
  ['005', 'Aiyaat Medical Service', 'images/005_Aiyaat_Medical_Service.png', 'docx', 'logo.docx / word/media/image5.png', 'Extracted from DOCX; low-resolution image.'],
  ['006', 'Active Diagnostic & Blood Bank', 'images/006_Active_Diagnostic_and_Blood_Bank.jpg', 'docx', 'logo.docx / word/media/image6.jpeg', 'Extracted from DOCX; JPEG with white background.'],
  ['007', 'Medicure Diagnostic Center', 'images/007_Medicure_Diagnostic_Center.png', 'docx', 'logo.docx / word/media/image7.png', 'Extracted from DOCX; PNG.'],
  ['008', 'Prime Diagnostic Center', 'images/008_Prime_Diagnostic_Center.jpg', 'docx', 'logo.docx / word/media/image8.jpeg', 'Extracted from DOCX; JPEG with white background.'],
  ['009', 'Al-Aksa health care & Diagnostic', 'images/009_Al_Aksa_health_care_and_Diagnostic.jpg', 'docx', 'logo.docx / word/media/image9.jpeg', 'Extracted from DOCX; tall JPEG with white background.'],
  ['010', 'Apollo Plus Medical Service', 'images/010_Apollo_Plus_Medical_Service.png', 'docx', 'logo.docx / word/media/image10.png', 'Extracted from DOCX; PNG.'],
  ['012', 'PBC & Diagnostic Center', 'images/012_PBC_and_Diagnostic_Center.jpg', 'image', 'WhatsApp Image 2026-06-03 at 11.14.12.jpeg', 'Standalone uploaded image reviewed and mapped by README.'],
  ['013', 'NurMyran Community Development Centre', 'images/013_NurMyran_Community_Development_Centre.jpg', 'image', 'WhatsApp Image 2026-06-03 at 11.14.14.jpeg', 'Standalone uploaded image; README notes spelling should be manually verified.'],
  ['014', 'Vital Diagnostic Centre', 'images/014_Vital_Diagnostic_Centre.jpg', 'image', 'WhatsApp Image 2026-06-03 at 11.14.15.jpeg', 'Standalone uploaded image reviewed and mapped by README.'],
];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

await fs.mkdir(processedDir, { recursive: true });
await fs.mkdir(docxRawDir, { recursive: true });
await fs.mkdir(imageRawDir, { recursive: true });
await fs.mkdir(logoosRawDir, { recursive: true });

const results = [];
for (const [serial, clientName, relPath, sourceType, originalFile, notes] of logos) {
  const source = path.join(packageDir, relPath);
  const rawTarget = path.join(sourceType === 'docx' ? docxRawDir : imageRawDir, path.basename(relPath));
  await fs.copyFile(source, rawTarget);

  const outputName = `${serial}-${slug(clientName)}.png`;
  const output = path.join(processedDir, outputName);
  const meta = await sharp(source).metadata();

  await sharp(source)
    .resize({
      width: 320,
      height: 180,
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
      withoutEnlargement: false,
    })
    .png({ compressionLevel: 9 })
    .toFile(output);

  const lowQuality = (meta.width ?? 0) < 160 || (meta.height ?? 0) < 160;
  results.push({
    clientName,
    logoPath: `/assets/clients/processed/${outputName}`,
    sourceType,
    originalFile,
    altText: `${clientName} logo`,
    notes: `${notes}${lowQuality ? ' Low-quality source dimensions; included as requested.' : ''}`,
    rawPath: `/assets/clients/raw/${sourceType === 'docx' ? 'docx' : 'image-files'}/${path.basename(relPath)}`,
    dimensions: `${meta.width ?? 'unknown'}x${meta.height ?? 'unknown'}`,
  });
}

await fs.writeFile(
  path.join(root, 'scripts/client-logo-results.json'),
  JSON.stringify(
    {
      skipped: [
        {
          clientName: 'Lab Aid Hospital (Bhairab)',
          reason: 'Name appears in DOCX/package mapping, but no embedded logo/image was found.',
        },
      ],
      logos: results,
    },
    null,
    2,
  ),
);

console.log(`Processed ${results.length} client logos.`);
