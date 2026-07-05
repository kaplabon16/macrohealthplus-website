export function setPageMeta(title: string, description: string) {
  document.title = `${title} | MacroHealthPlus`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', description);
  }
  const upsertMeta = (property: string, content: string, attr: 'name' | 'property' = 'property') => {
    let tag = document.querySelector(`meta[${attr}="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attr, property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };
  upsertMeta('og:title', `${title} | MacroHealthPlus`);
  upsertMeta('og:description', description);
  upsertMeta('twitter:card', 'summary_large_image', 'name');
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `https://macrohealthplus.org${window.location.pathname}`);
}
