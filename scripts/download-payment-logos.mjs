import fs from 'node:fs/promises';
import path from 'node:path';
import * as icons from 'simple-icons';

const outDir = 'public/assets/payment-methods/web';
await fs.mkdir(outDir, { recursive: true });
const sources = [];

async function writeSimpleIcon(filename, iconKey) {
  const icon = icons[iconKey];
  if (!icon) throw new Error(`Missing simple icon ${iconKey}`);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
  await fs.writeFile(path.join(outDir, filename), svg);
  sources.push({ title: filename, source: `simple-icons:${iconKey}`, localPath: `/assets/payment-methods/web/${filename}` });
}

async function download(filename, url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) { console.warn(`skip ${filename}: ${res.status} ${url}`); return; }
  const buf = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('text/html')) { console.warn(`skip ${filename}: HTML instead of asset ${url}`); return; }
  await fs.writeFile(path.join(outDir, filename), buf);
  sources.push({ title: filename, source: url, localPath: `/assets/payment-methods/web/${filename}` });
}

await writeSimpleIcon('visa.svg', 'siVisa');
await writeSimpleIcon('mastercard.svg', 'siMastercard');
await writeSimpleIcon('american-express.svg', 'siAmericanexpress');
await download('bkash.svg', 'https://static.cdnlogo.com/logos/b/47/bkash.svg');
await download('nagad.svg', 'https://logotyp.us/file/nagad.svg');
await download('bank-asia.svg', 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Bank_Asia.svg');
await download('city-bank.svg', 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_City_Bank_(Bangladesh).svg');
await download('islami-bank.svg', 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Islami_Bank_Bangladesh.svg');
await download('dbbl.svg', 'https://commons.wikimedia.org/wiki/Special:FilePath/Dutch-bangla_bank_limited.svg');
await download('sslcommerz.png', 'https://www.sslcommerz.com/wp-content/uploads/2021/11/logo.png');

// Official/vendor-like public URLs for remaining Bangladesh payment/bank marks were not reliably discoverable.
// Keep the cards visible with image slots but without inventing fake marks.
await fs.writeFile('scripts/payment-logo-sources.json', JSON.stringify(sources, null, 2));
console.log(`Downloaded/wrote ${sources.length} payment logo files`);
