// Runs after `vite build`: creates one HTML file per route (with its own
// title/description/canonical/JSON-LD), sitemap.xml and a 404.html fallback.
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const seo = JSON.parse(fs.readFileSync('src/data/seo.json', 'utf8'));
const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const today = new Date().toISOString().slice(0, 10);

const serviceSchema = {
  '/mortgage': { name: 'ייעוץ משכנתאות', type: 'ייעוץ משכנתאות, מחזור ותמהיל' },
  '/credit': { name: 'ייעוץ באשראי חוץ בנקאי', type: 'אשראי חוץ בנקאי' },
  '/reverse-mortgage': { name: 'ייעוץ משכנתא הפוכה', type: 'משכנתא הפוכה' },
  '/family-finance': { name: 'ייעוץ לכלכלת המשפחה', type: 'ייעוץ כלכלי למשפחה' },
  '/business': { name: 'ייעוץ וליווי עסקי', type: 'ליווי עסקי לעצמאים' },
};

function page(route, meta) {
  const url = `${seo.site}${route === '/' ? '/' : route + '/'}`;
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${esc(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${esc(meta.description)}$2`);

  const extra = [];
  if (route !== '/') {
    extra.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'דף הבית', item: `${seo.site}/` },
        { '@type': 'ListItem', position: 2, name: meta.title.split('|')[0].trim(), item: url },
      ],
    });
  }
  if (serviceSchema[route]) {
    extra.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceSchema[route].name,
      serviceType: serviceSchema[route].type,
      description: meta.description,
      url,
      areaServed: { '@type': 'Country', name: 'ישראל' },
      provider: { '@type': 'FinancialService', name: seo.siteName, url: `${seo.site}/` },
    });
  }
  const ld = extra.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n    ');
  if (ld) html = html.replace('</head>', `    ${ld}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    <noscript><h1>${esc(meta.title)}</h1><p>${esc(meta.description)}</p><p>טלפון: 054-729-5318 · yoni@yoni-k.com</p></noscript>`);
  return html;
}

const urls = [];
for (const [route, meta] of Object.entries(seo.pages)) {
  const html = page(route, meta);
  if (route === '/') fs.writeFileSync(path.join(dist, 'index.html'), html);
  else {
    fs.mkdirSync(path.join(dist, route), { recursive: true });
    fs.writeFileSync(path.join(dist, route, 'index.html'), html);
  }
  urls.push(`${seo.site}${route === '/' ? '/' : route + '/'}`);
}

// 404 fallback (GitHub Pages serves it for unknown paths); keep it out of the index.
fs.writeFileSync(
  path.join(dist, '404.html'),
  base.replace('<head>', '<head>\n    <meta name="robots" content="noindex" />').replace(/<link rel="canonical"[^>]*>\s*/, '')
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log(`SEO postbuild: ${urls.length} pages, sitemap.xml, 404.html`);
