import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ids = ['spatiu360', 'casa-rusu', 'biketrain', 'visitcodlea', 'una-squadra', 'tiktok-cleaner', 'depurazione'];
for (const [locale, route] of [['en','showcase'], ['it','it/showcase'], ['ro','ro/showcase']]) {
  const html = fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
  const data = JSON.parse(html.match(/<script type="application\/json" id="showcase-data">([\s\S]*?)<\/script>/)[1]);
  assert.deepEqual(data.projects.map(p=>p.id), ids);
  assert.equal((html.match(/<h1[ >]/g)||[]).length, 1);
  assert(html.includes(`<html lang="${locale}"`));
  assert(html.includes(`rel="canonical" href="https://marius93rm.github.io/${route}/"`));
  for (const project of data.projects) {
    assert.equal(project.scenes.length, 3);
    assert.equal(new Set(project.scenes.map(s=>s.src)).size, 3);
    assert(project.url.startsWith('https://'));
    assert(html.includes(`href="${project.url}"`), 'No-JS destination must exist');
    for (const scene of project.scenes) {
      assert(scene.label.length > 0);
      assert(fs.statSync(path.join(root, new URL(scene.src, 'https://example.test').pathname)).size > 1000, `Missing screenshot ${scene.src}`);
    }
  }
  for (const [,asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"#]+)(?:#[^"]*)?"/g)) {
    assert(fs.existsSync(path.join(root, new URL(asset, 'https://example.test').pathname)), `Missing asset ${asset}`);
  }
  for (const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
  const sitemap = fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
  assert(sitemap.includes(`https://marius93rm.github.io/${route}/`));
  console.log(`${locale}: 7 projects, 21 views, local assets, fallback links, metadata and sitemap OK`);
}
