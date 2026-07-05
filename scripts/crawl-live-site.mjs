import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://macrohealthplus.org';
const screenshotsDir = path.join(root, 'crawl-output/screenshots');
const assetsDir = path.join(root, 'public/assets/macrohealthplus');
const crawlJson = path.join(root, 'crawl-output/live-crawl.json');

const knownRoutes = [
  '/',
  '/pricing',
  '/great-doc',
  '/great-lab',
  '/great-pharma',
  '/telehealth',
  '/marketplace',
  '/e-pharmacy',
  '/lab-agent',
  '/client-login',
  '/request-demo',
  '/why-choose-us',
  '/news-and-views',
  '/help-centre',
  '/privacy',
  '/security',
  '/refund-return-policy',
  '/cookie-disclaimer',
  '/terms',
  '/general-practice',
  '/cardiologist',
  '/gastroenterologist',
  '/chest-physician',
  '/urologist',
  '/ent-specialist',
  '/ophthalmologist',
  '/dermatologist',
  '/psychiatrist-and-psychologist',
  '/rheumatologist',
  '/neurologist',
  '/orthopaedic-surgeon',
  '/neuro-surgeon',
  '/obstetrics-and-gynaecologist',
  '/paediatricians',
  '/general-surgeon',
];

function normalizeUrl(href) {
  try {
    const url = new URL(href, origin);
    if (url.origin !== origin) return null;
    url.hash = '';
    return url.href;
  } catch {
    return null;
  }
}

function assetBucket(url, pageUrl, alt = '') {
  const lower = `${url} ${pageUrl} ${alt}`.toLowerCase();
  if (lower.includes('logo')) return 'logo';
  if (lower.includes('ssl') || lower.includes('payment') || lower.includes('pay')) return 'payment';
  if (lower.includes('facebook') || lower.includes('linkedin') || lower.includes('youtube') || lower.includes('twitter')) return 'social';
  if (lower.includes('privacy') || lower.includes('terms') || lower.includes('security')) return 'legal';
  if (lower.includes('great') || lower.includes('pharma') || lower.includes('telehealth') || lower.includes('marketplace') || lower.includes('lab')) return 'products';
  if (pageUrl.includes('ologist') || pageUrl.includes('surgeon') || pageUrl.includes('practice') || pageUrl.includes('physician')) return 'specialties';
  if (pageUrl === `${origin}/`) return 'homepage';
  return 'extracted';
}

function safeName(url, prefix = '') {
  const parsed = new URL(url, origin);
  const ext = path.extname(parsed.pathname).split('?')[0] || '.png';
  const base = path.basename(parsed.pathname, ext) || 'asset';
  return `${prefix}${base}`.replace(/[^a-z0-9._-]+/gi, '-').slice(0, 96) + ext;
}

const discovered = new Map(knownRoutes.map((route) => [`${origin}${route === '/' ? '/' : route}`, 'known route list']));
const pages = [];
const assetMap = new Map();
const brokenLinks = [];
const consoleErrors = [];
const failedPages = [];

await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(assetsDir, { recursive: true });
await fs.mkdir(path.join(root, 'crawl-output'), { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

page.on('console', (msg) => {
  if (['error', 'warning'].includes(msg.type())) {
    const text = msg.text();
    consoleErrors.push({ page: page.url(), type: msg.type(), text: text.length > 800 ? `${text.slice(0, 800)}... [truncated]` : text });
  }
});
page.on('requestfailed', (request) => {
  const url = request.url();
  if (url.startsWith(origin)) {
    brokenLinks.push({ page: page.url(), url, failure: request.failure()?.errorText ?? 'request failed' });
  }
});

for (let i = 0; i < 80; i += 1) {
  const next = [...discovered.keys()].find((url) => !pages.some((entry) => entry.url === url) && !failedPages.some((entry) => entry.url === url));
  if (!next) break;

  try {
    await page.goto(next, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(800);
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const timer = setInterval(() => {
          y += 550;
          window.scrollTo(0, y);
          if (y >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 80);
      });
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);

    const data = await page.evaluate(() => {
      const text = (selector) => [...document.querySelectorAll(selector)].map((el) => el.textContent?.trim()).filter(Boolean);
      const links = [...document.querySelectorAll('a[href]')].map((a) => ({
        href: a.href,
        text: a.textContent?.trim() ?? '',
      }));
      const images = [...document.querySelectorAll('img')].map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt || '',
        width: img.naturalWidth,
        height: img.naturalHeight,
      })).filter((img) => img.src);
      const backgrounds = [...document.querySelectorAll('*')]
        .map((el) => getComputedStyle(el).backgroundImage)
        .filter((value) => value && value !== 'none')
        .flatMap((value) => [...value.matchAll(/url\\(["']?([^"')]+)["']?\\)/g)].map((match) => match[1]));
      const forms = [...document.querySelectorAll('form')].map((form) => ({
        fields: [...form.querySelectorAll('input, textarea, select, button')].map((field) => ({
          tag: field.tagName.toLowerCase(),
          type: field.getAttribute('type') || '',
          name: field.getAttribute('name') || '',
          placeholder: field.getAttribute('placeholder') || '',
          label: field.labels?.[0]?.textContent?.trim() || '',
          text: field.textContent?.trim() || '',
          required: field.hasAttribute('required'),
        })),
      }));
      const buttons = [...document.querySelectorAll('button, a')]
        .map((el) => el.textContent?.trim())
        .filter((value) => value && value.length < 80);
      return {
        title: document.title,
        h1: text('h1'),
        h2: text('h2'),
        h3: text('h3'),
        visibleText: document.body.innerText,
        links,
        buttons,
        images,
        backgrounds,
        forms,
        tables: [...document.querySelectorAll('table')].map((table) => table.innerText),
        svgs: [...document.querySelectorAll('svg')].map((svg) => svg.outerHTML.slice(0, 600)),
      };
    });

    for (const link of data.links) {
      const normalized = normalizeUrl(link.href);
      if (normalized && !discovered.has(normalized)) {
        discovered.set(normalized, next);
      }
    }

    const pathSlug = new URL(next).pathname === '/' ? 'home' : new URL(next).pathname.replace(/\//g, '-').replace(/^-/, '');
    const screenshotName = `${pathSlug || 'home'}.png`;
    await page.screenshot({ path: path.join(screenshotsDir, screenshotName), fullPage: true });

    pages.push({ url: next, discoveredFrom: discovered.get(next), screenshot: `crawl-output/screenshots/${screenshotName}`, ...data });

    const allAssets = [
      ...data.images.map((img) => ({ url: img.src, alt: img.alt, kind: 'image', dimensions: `${img.width}x${img.height}` })),
      ...data.backgrounds.map((url) => ({ url: new URL(url, next).href, alt: '', kind: 'background', dimensions: '' })),
    ];
    for (const asset of allAssets) {
      if (!asset.url || asset.url.startsWith('data:') || asset.url.startsWith('blob:')) continue;
      const absolute = new URL(asset.url, next).href;
      if (assetMap.has(absolute)) continue;
      const bucket = assetBucket(absolute, next, asset.alt);
      const dir = path.join(assetsDir, bucket);
      await fs.mkdir(dir, { recursive: true });
      const filename = safeName(absolute, `${bucket}-`);
      const localFsPath = path.join(dir, filename);
      try {
        const response = await page.request.get(absolute, { timeout: 20000 });
        if (response.ok()) {
          await fs.writeFile(localFsPath, await response.body());
          assetMap.set(absolute, {
            title: asset.alt || path.basename(filename, path.extname(filename)),
            originalUrl: absolute,
            localPath: `/assets/macrohealthplus/${bucket}/${filename}`,
            type: bucket,
            pageWhereFound: next,
            altText: asset.alt || path.basename(filename, path.extname(filename)).replace(/[-_]/g, ' '),
            notes: `${asset.kind}${asset.dimensions ? `; ${asset.dimensions}` : ''}`,
          });
        } else {
          assetMap.set(absolute, {
            title: asset.alt || absolute,
            originalUrl: absolute,
            localPath: '',
            type: bucket,
            pageWhereFound: next,
            altText: asset.alt || '',
            notes: `TODO download failed: ${response.status()}`,
          });
        }
      } catch (error) {
        assetMap.set(absolute, {
          title: asset.alt || absolute,
          originalUrl: absolute,
          localPath: '',
          type: bucket,
          pageWhereFound: next,
          altText: asset.alt || '',
          notes: `TODO download failed: ${error.message}`,
        });
      }
    }
  } catch (error) {
    failedPages.push({ url: next, discoveredFrom: discovered.get(next), error: error.stack || error.message });
  }
}

await browser.close();

await fs.writeFile(
  crawlJson,
  JSON.stringify(
    {
      discoveredUrls: [...discovered.entries()].map(([url, discoveredFrom]) => ({ url, discoveredFrom })),
      pages,
      assets: [...assetMap.values()],
      brokenLinks,
      consoleErrors,
      failedPages,
    },
    null,
    2,
  ),
);

console.log(`Crawled ${pages.length} pages, found ${assetMap.size} assets, ${failedPages.length} failed pages.`);
