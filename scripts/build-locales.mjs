/** Build static language versions. Run: node scripts/build-locales.mjs */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = 'https://efekansalman.github.io/';
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const marker = '// ─── THEME PALETTES & SWITCHER';
const cut = script.indexOf(marker);
if (cut < 0) throw new Error('Translations marker missing');
const translations = vm.runInNewContext(script.slice(0, cut) + '\ntranslations', {});
const seo = {
  en: ['Efekan Salman | Computational Neuroscience & Bio-Inspired AI', 'Efekan Salman builds computational neuroscience and bio-inspired AI projects. Explore AxonLM, NeuroConscious, and spiking neural network research.', 'en_US', 'Computational neuroscience illustration with a glowing brain network'],
  tr: ['Efekan Salman | Hesaplamalı Nörobilim ve Biyo-İlhamlı Yapay Zekâ', 'Efekan Salman’ın hesaplamalı nörobilim ve biyo-ilhamlı yapay zekâ projeleri: AxonLM, NeuroConscious ve spiking sinir ağı araştırmaları.', 'tr_TR', 'Parlayan beyin ağıyla hesaplamalı nörobilim çizimi'],
  fr: ['Efekan Salman | Neurosciences computationnelles et IA bio-inspirée', 'Découvrez les projets d’Efekan Salman en neurosciences computationnelles et IA bio-inspirée : AxonLM, NeuroConscious et réseaux neuronaux à impulsions.', 'fr_FR', 'Illustration de neurosciences computationnelles avec un réseau cérébral lumineux'],
  nl: ['Efekan Salman | Computationele neurowetenschap en bio-geïnspireerde AI', 'Ontdek Efekan Salmans projecten in computationele neurowetenschap en bio-geïnspireerde AI: AxonLM, NeuroConscious en spiking-neurale netwerken.', 'nl_NL', 'Illustratie van computationele neurowetenschap met een lichtgevend hersennetwerk']
};
const escapeAttr = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
function replaceOne(html, regex, value, label) {
  if (!regex.test(html)) throw new Error('Missing ' + label);
  regex.lastIndex = 0;
  return html.replace(regex, value);
}
function render(lang) {
  const t = translations[lang], [title, description, locale, imageAlt] = seo[lang];
  const url = base + (lang === 'en' ? '' : lang + '/');
  const prefix = lang === 'en' ? './' : '../';
  let html = replaceOne(source, /<html lang="en" data-site-root="\.\/">/, '<html lang="' + lang + '" data-site-root="' + prefix + '">', 'html lang');
  let count = 0;
  html = html.replace(/<([a-z][\w:-]*)([^>]*\bdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, key) => {
    if (t[key] === undefined) throw new Error('Missing translation ' + lang + ':' + key);
    count++;
    return '<' + tag + attrs + '>' + t[key] + '</' + tag + '>';
  });
  if (count !== (source.match(/\bdata-i18n="/g) || []).length) throw new Error(lang + ': unmatched translation nodes');
  html = html.replace(/<[^>]*\bdata-i18n-aria-label="([^"]+)"[^>]*>/g, (tag, key) => {
    if (t[key] === undefined) throw new Error('Missing aria label ' + lang + ':' + key);
    return tag.replace(/aria-label="[^"]*"/, 'aria-label="' + escapeAttr(t[key]) + '"');
  });
  function setMeta(kind, key, value) {
    const rx = new RegExp('(<meta ' + kind + '="' + key + '" content=")[^"]*(">)');
    html = replaceOne(html, rx, (_, before, after) => before + escapeAttr(value) + after, kind + ':' + key);
  }
  html = replaceOne(html, /<title>[\s\S]*?<\/title>/, '<title>' + escapeAttr(title) + '</title>', 'title');
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:locale', locale);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image:alt', imageAlt);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  html = replaceOne(html, /<link rel="canonical" href="[^"]+">/, '<link rel="canonical" href="' + url + '">', 'canonical');
  html = replaceOne(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (match, body) => {
    const graph = JSON.parse(body);
    const page = graph['@graph'].find(item => item['@type'] === 'ProfilePage');
    page['@id'] = url + '#webpage'; page.url = url; page.name = title;
    page.description = description; page.inLanguage = lang;
    return '<script type="application/ld+json">\n' + JSON.stringify(graph, null, 2) + '\n  </script>';
  }, 'JSON-LD');
  html = replaceOne(html, /<select id="langSelect"[\s\S]*?<\/select>/, select => {
    let result = select.replace(/(<option value="en") selected/, '$1');
    result = result.replace(new RegExp('(<option value="' + lang + '")(?=>)'), '$1 selected');
    return result;
  }, 'language select');
  html = html.replace(/ aria-current="page"/, '');
  html = replaceOne(html, new RegExp('(<a href="[^"]*" hreflang="' + lang + '" lang="' + lang + '")'), '$1 aria-current="page"', 'language link');
  if (lang !== 'en') {
    html = html.replace('href="styles.css"', 'href="../styles.css"');
    html = html.replace('href="calm.css"', 'href="../calm.css"');
    html = html.replaceAll('href="assets/', 'href="../assets/');
    for (const file of ['brain-3d.js', 'synapse-canvas.js', 'script.js', 'stdp-lab.js'])
      html = html.replace('src="' + file + '"', 'src="../' + file + '"');
    html = html.replace('href="./" hreflang="en"', 'href="../" hreflang="en"');
    for (const code of ['tr', 'fr', 'nl'])
      html = html.replace('href="' + code + '/" hreflang="' + code + '"', 'href="../' + code + '/" hreflang="' + code + '"');
  }
  return html;
}
for (const lang of Object.keys(seo)) {
  const output = lang === 'en' ? path.join(root, 'index.html') : path.join(root, lang, 'index.html');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, render(lang), 'utf8');
  console.log(path.relative(root, output));
}
const urls = Object.keys(seo).map(lang => base + (lang === 'en' ? '' : lang + '/'));
fs.writeFileSync(path.join(root, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(url => '  <url><loc>' + url + '</loc></url>').join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(root, 'robots.txt'),
  'User-agent: *\nAllow: /\n\nSitemap: ' + base + 'sitemap.xml\n');
