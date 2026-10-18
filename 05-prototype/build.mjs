import { readFile, writeFile, readdir } from 'node:fs/promises';
const load = name => readFile(new URL(name, import.meta.url), 'utf8');
let html = await load('index.html');
const css = await load('styles.css');
const model = (await load('model.mjs')).replaceAll('export function ', 'function ');
let app = (await load('app.js')).replace(/^import .*?;\s*/, '');
const assets = {};
for (const file of await readdir(new URL('assets/', import.meta.url))) {
  if (!file.endsWith('.jpg')) continue;
  assets[file] = `data:image/jpeg;base64,${(await readFile(new URL('assets/' + file, import.meta.url))).toString('base64')}`;
}
// Keep all screenshots local to one deliverable so it works offline after sharing.
app = app.replaceAll('assets/${file}', '${assetUrl(file)}');
for (const [file, uri] of Object.entries(assets)) app = app.replaceAll('assets/' + file, uri);
const assetPrelude = `const embeddedAssets = ${JSON.stringify(assets)};\nconst assetUrl = file => embeddedAssets[file];\n`;
html = html.replace('<link rel="stylesheet" href="styles.css">', () => `<style>\n${css}\n</style>`);
html = html.replace('<script type="module" src="app.js"></script>', () => `<script>\n(() => {\n${assetPrelude}\n${model}\n${app}\n})();\n</script>`);
await writeFile(new URL('prototype.html', import.meta.url), html);
console.log('Created prototype.html · mở trực tiếp, không cần máy chủ');
