import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const origin = 'https://marius93rm.github.io';
const assetUrl = file => `${file}?v=${createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex').slice(0, 10)}`;
const projects = [
  { id: 'spatiu360', name: 'Spațiu360', domain: 'spatiu360.ro', url: 'https://spatiu360.ro/', kind: 'live', category: ['Virtual tours', 'Tour virtuali', 'Tururi virtuale'], scenes: [
    ['projects/spatiu360-home.webp', ['Homepage', 'Homepage', 'Acasă']],
    ['showcase/spatiu360-products.webp', ['The collection', 'La collezione', 'Colecția']],
    ['showcase/spatiu360-maps.webp', ['Google Maps', 'Google Maps', 'Google Maps']]
  ] },
  { id: 'casa-rusu', name: 'Casa Rusu', domain: 'casarusu.netlify.app', url: 'https://casarusu.netlify.app/', kind: 'live', category: ['Restaurant', 'Ristorante', 'Restaurant'], scenes: [
    ['projects/casa-rusu-home.webp', ['Homepage', 'Homepage', 'Acasă']],
    ['showcase/casa-rusu-menu.webp', ['The menu', 'Il menu', 'Meniul']],
    ['showcase/casa-rusu-dish.webp', ['From the kitchen', 'Dalla cucina', 'Din bucătărie']]
  ] },
  { id: 'biketrain', name: 'BikeTrain', domain: 'BikeTrain România', url: 'https://github.com/marius93rm/travelBike', kind: 'repository', category: ['Product interface', 'Interfaccia prodotto', 'Interfață de produs'], scenes: [
    ['projects/travelbike.webp', ['Journey search', 'Cerca un viaggio', 'Caută o călătorie']],
    ['showcase/biketrain-stations.webp', ['Station picker', 'Scegli la stazione', 'Alege stația']],
    ['showcase/biketrain-guide.webp', ['Travel guide', 'Guida al viaggio', 'Ghid de călătorie']]
  ] },
  { id: 'visitcodlea', name: 'Visit Codlea', domain: 'visitcodlea.infy.click', url: 'https://visitcodlea.infy.click/', kind: 'live', category: ['Places & stories', 'Luoghi e storie', 'Locuri și povești'], scenes: [
    ['projects/visitcodlea-home.webp', ['Homepage', 'Homepage', 'Acasă']],
    ['showcase/visitcodlea-gallery.webp', ['Photo gallery', 'Galleria fotografica', 'Galerie foto']],
    ['showcase/visitcodlea-heritage.webp', ['Heritage', 'Patrimonio', 'Patrimoniu']]
  ] },
  { id: 'una-squadra', name: 'unaSquadraFortissimi', domain: 'unaSquadraFortissimi', url: 'https://marius93rm.github.io/unaSquadraFortissimi/', kind: 'live', category: ['Developer tools', 'Strumenti per developer', 'Instrumente pentru dezvoltatori'], scenes: [
    ['projects/una-squadra-home.webp', ['The team', 'La squadra', 'Echipa']],
    ['showcase/una-squadra-agents.webp', ['The agents', 'Gli agenti', 'Agenții']],
    ['showcase/una-squadra-skills.webp', ['The skills', 'Le skill', 'Competențele']]
  ] },
  { id: 'tiktok-cleaner', name: 'TikTok Cleaner', domain: 'TikTok Cleaner', url: 'https://marius93rm.github.io/tiktok-non-mutual-cleaner/', kind: 'live', category: ['Digital utility', 'Utility digitale', 'Utilitar digital'], scenes: [
    ['projects/tiktok-cleaner-home.webp', ['Homepage', 'Homepage', 'Acasă']],
    ['showcase/tiktok-how-it-works.webp', ['How it works', 'Come funziona', 'Cum funcționează']],
    ['showcase/tiktok-get-started.webp', ['Get started', 'Primi passi', 'Primii pași']]
  ] },
  { id: 'depurazione', name: 'Depurazioneacqua.eu', domain: 'depurazioneacqua.eu', url: 'https://depurazioneacqua.eu/', kind: 'live', category: ['Business website', 'Sito aziendale', 'Website de afaceri'], scenes: [
    ['projects/depurazione-acqua-home.webp', ['Homepage', 'Homepage', 'Acasă']],
    ['showcase/depurazione-gallery.webp', ['The gallery', 'La galleria', 'Galeria']],
    ['showcase/depurazione-microfiltration.webp', ['Microfiltration', 'Microfiltrazione', 'Microfiltrare']]
  ] }
];

const locales = {
  en: { i: 0, route: '/showcase/', home: '/', title: 'Web showcase', heading: 'The web,', emphasis: 'in motion.', intro: 'Seven projects. A closer look.', contact: 'Let’s talk', call: 'Call Marius', back: 'Back to home', skip: 'Skip to showcase', nav: 'Primary navigation', language: 'Language', collection: 'Selected work', count: '07 projects', tour: 'Play the collection', pause: 'Pause animation', play: 'Play animation', previous: 'Previous project', next: 'Next project', prevScene: 'Previous view', nextScene: 'Next view', open: 'Visit website', repo: 'View repository', select: 'Select a project', view: 'View', views: 'Project views', full: 'Enter cinema mode', exitFull: 'Exit cinema mode', cinema: 'Cinema mode', static: 'Animation is off. Select any project to explore its views.', nojs: 'Open any project below to explore its website.', cta: 'Your project could be next.', ctaLink: 'Let’s build it', descriptor: 'An animated collection of websites and interfaces by Marius Minia.', local: 'Local app preview', motion: 'Automatic tour', end: 'Design & development · Marius Minia' },
  it: { i: 1, route: '/it/showcase/', home: '/it/', title: 'Vetrina web', heading: 'Il web,', emphasis: 'in movimento.', intro: 'Sette progetti. Uno sguardo da vicino.', contact: 'Parliamone', call: 'Chiama Marius', back: 'Torna alla home', skip: 'Vai alla vetrina', nav: 'Navigazione principale', language: 'Lingua', collection: 'Progetti selezionati', count: '07 progetti', tour: 'Guarda la collezione', pause: 'Pausa animazione', play: 'Avvia animazione', previous: 'Progetto precedente', next: 'Progetto successivo', prevScene: 'Vista precedente', nextScene: 'Vista successiva', open: 'Visita il sito', repo: 'Apri repository', select: 'Scegli un progetto', view: 'Vista', views: 'Viste del progetto', full: 'Attiva modalità cinema', exitFull: 'Esci dalla modalità cinema', cinema: 'Modalità cinema', static: 'Animazione disattivata. Scegli un progetto per esplorare le sue viste.', nojs: 'Apri un progetto qui sotto per esplorare il suo sito.', cta: 'Il prossimo potrebbe essere il tuo.', ctaLink: 'Costruiamolo insieme', descriptor: 'Una collezione animata di siti e interfacce realizzati da Marius Minia.', local: 'Anteprima app locale', motion: 'Tour automatico', end: 'Design e sviluppo · Marius Minia' },
  ro: { i: 2, route: '/ro/showcase/', home: '/ro/', title: 'Vitrină web', heading: 'Webul,', emphasis: 'în mișcare.', intro: 'Șapte proiecte. O privire de aproape.', contact: 'Să vorbim', call: 'Sună-l pe Marius', back: 'Înapoi la prima pagină', skip: 'Sari la prezentare', nav: 'Navigare principală', language: 'Limbă', collection: 'Proiecte selectate', count: '07 proiecte', tour: 'Privește colecția', pause: 'Pauză animație', play: 'Pornește animația', previous: 'Proiectul anterior', next: 'Proiectul următor', prevScene: 'Perspectiva anterioară', nextScene: 'Perspectiva următoare', open: 'Vizitează site-ul', repo: 'Deschide repository-ul', select: 'Alege un proiect', view: 'Perspectivă', views: 'Perspectivele proiectului', full: 'Activează modul cinema', exitFull: 'Ieși din modul cinema', cinema: 'Mod cinema', static: 'Animația este oprită. Alege un proiect pentru a explora perspectivele.', nojs: 'Deschide un proiect de mai jos pentru a explora site-ul.', cta: 'Următorul poate fi al tău.', ctaLink: 'Să-l construim împreună', descriptor: 'O colecție animată de site-uri și interfețe realizate de Marius Minia.', local: 'Previzualizare aplicație locală', motion: 'Tur automat', end: 'Design și dezvoltare · Marius Minia' }
};

const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const icon = (name) => {
  const paths = { arrow: '<path d="M7 17 17 7M7 7h10v10"/>', left: '<path d="m14 6-6 6 6 6M8 12h12"/>', right: '<path d="m10 6 6 6-6 6M4 12h12"/>', pause: '<path d="M9 5v14M15 5v14"/>', expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>', play: '<path d="m8 5 11 7-11 7Z"/>' };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

for (const [lang, t] of Object.entries(locales)) {
  const entries = projects.map(p => ({...p, category: p.category[t.i], scenes: p.scenes.map(([src,labels])=>({src:assetUrl('/assets/images/'+src),label:labels[t.i]}))}));
  const first = entries[0];
  const html = `<!doctype html>
<html lang="${lang}" data-locale="${lang}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t.title} — Marius Minia</title>
  <meta name="description" content="${t.descriptor}"><meta name="theme-color" content="#f5f8fc">
  <link rel="canonical" href="${origin+t.route}">
  ${Object.entries(locales).map(([l,c])=>`<link rel="alternate" hreflang="${l}" href="${origin+c.route}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${origin}/showcase/">
  <meta property="og:title" content="${t.title} — Marius Minia"><meta property="og:description" content="${t.descriptor}">
  <meta property="og:type" content="website"><meta property="og:url" content="${origin+t.route}">
  <meta property="og:image" content="${origin}/assets/images/projects/spatiu360-home.webp">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="/assets/fonts/Manrope-Variable.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="${assetUrl('/assets/css/styles.css')}"><link rel="stylesheet" href="${assetUrl('/assets/css/showcase.css')}">
  <script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'CollectionPage',name:t.title,description:t.descriptor,url:origin+t.route,inLanguage:lang,author:{'@type':'Person',name:'Marius Minia'},mainEntity:{'@type':'ItemList',itemListElement:entries.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.name,url:p.url}))}})}</script>
</head>
<body class="showcase-page">
  <a class="skip-link" href="#showcase">${t.skip}</a>
  <header class="site-header"><div class="container nav-shell">
    <a class="brand" href="${t.home}"><span class="brand-mark" aria-hidden="true">MM</span><span class="brand-name">Marius Minia <span>Developer &amp; Designer</span></span></a>
    <nav class="showcase-nav" aria-label="${t.nav}">
      <a href="${t.home}" class="home-link">Home</a><a href="${t.route}" aria-current="page">Showcase</a>
      <div class="language-switcher" aria-label="${t.language}">${Object.entries(locales).map(([l,c])=>`<a class="language-link${l===lang?' is-active':''}" href="${c.route}" lang="${l}"${l===lang?' aria-current="page"':''}>${l.toUpperCase()}</a>`).join('')}</div>
      <a class="button button--small showcase-contact" href="${t.home}#contact">${t.contact} ${icon('arrow')}</a>
    </nav>
  </div></header>
  <main id="showcase" class="showcase-main">
    <div class="container showcase-intro">
      <div><p class="showcase-eyebrow">${t.collection} <span aria-hidden="true">/</span> ${t.count}</p>
      <h1>${t.heading} <span>${t.emphasis}</span></h1></div>
      <p class="showcase-note">${t.intro}<br><span>${t.tour} ${icon('right')}</span></p>
    </div>
    <section class="showcase-player" aria-label="${t.title}" aria-roledescription="carousel" data-player>
      <div class="showcase-stage">
        <span class="stage-index" aria-hidden="true">01</span>
        <div class="stage-horizon" aria-hidden="true"></div>
        <button type="button" class="satellite satellite--left" data-prev-scene aria-label="${t.prevScene}" hidden tabindex="-1"><span class="satellite-bar" aria-hidden="true">•••</span><img src="${first.scenes[2].src}" alt="" loading="lazy" width="1280" height="800"></button>
        <button type="button" class="satellite satellite--right" data-next-scene aria-label="${t.nextScene}" hidden tabindex="-1"><span class="satellite-bar" aria-hidden="true">•••</span><img src="${first.scenes[1].src}" alt="" loading="lazy" width="1280" height="800"></button>
        <div class="browser-frame">
          <div class="browser-toolbar"><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="browser-address" data-domain>${first.domain}</span><button class="icon-button cinema-button" type="button" data-cinema aria-label="${t.full}" aria-pressed="false" hidden>${icon('expand')}</button></div>
          <div class="screen" data-screen>
            <img class="screen-image is-current" src="${first.scenes[0].src}" alt="${first.name} — ${first.scenes[0].label}" width="1280" height="800" fetchpriority="high" decoding="async">
          </div>
          <div class="scene-controls" hidden><span class="scene-count" data-scene-count>01 / 03</span><div class="scene-tabs" role="group" aria-label="${t.views}" data-scenes></div><button class="icon-button play-button" type="button" data-play aria-label="${t.pause}" aria-pressed="false">${icon('pause')}</button></div>
        </div>
      </div>
      <div class="container project-caption">
        <div class="project-heading"><p class="project-category" data-category>${first.category}</p><h2 data-title>${first.name}</h2></div>
        <div class="project-actions"><a class="project-visit" href="${first.url}" target="_blank" rel="noopener noreferrer" data-visit><span>${t.open}</span>${icon('arrow')}</a><div class="project-arrows" hidden><button type="button" class="round-button" data-prev aria-label="${t.previous}">${icon('left')}</button><button type="button" class="round-button" data-next aria-label="${t.next}">${icon('right')}</button></div></div>
      </div>
      <p class="sr-only" role="status" aria-live="polite" aria-atomic="true" data-announcement></p>
      <p class="motion-note container" data-motion-note hidden>${t.static}</p>
    </section>
    <nav class="container project-index" aria-label="${t.select}">
      <div class="index-heading"><span>${t.select}</span><span class="index-count">01 <span>/ 07</span></span></div>
      <div class="project-filmstrip">${entries.map((p,i)=>`
        <a class="project-thumb${i===0?' is-selected':''}" href="${p.url}" target="_blank" rel="noopener noreferrer" data-project="${p.id}"${i===0?' aria-current="true"':''}>
          <span class="thumb-image"><img src="${p.scenes[0].src}" alt="" width="1280" height="800" loading="lazy" decoding="async"><span class="thumb-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span class="thumb-indicator" aria-hidden="true">${icon('play')}</span></span><span class="thumb-name">${p.name}</span>
        </a>`).join('')}
      </div>
    </nav>
    <noscript><p class="container">${t.nojs}</p></noscript>
    <section class="container showcase-outro"><h2>${t.cta}</h2><a href="${t.home}#contact">${t.ctaLink} ${icon('arrow')}</a></section>
  </main>
  <footer class="container showcase-footer"><a href="${t.home}">${t.back}</a><span>${t.end}</span></footer>
  <script type="application/json" id="showcase-data">${JSON.stringify({projects:entries,labels:t}).replaceAll('<','\\u003c')}</script>
  <script src="${assetUrl('/assets/js/showcase.js')}" defer></script>
</body>
</html>`;
  const target = path.join(root, t.route, 'index.html');
  fs.mkdirSync(path.dirname(target), {recursive:true});
  fs.writeFileSync(target, html);
}
console.log('Generated /showcase/, /it/showcase/ and /ro/showcase/');
