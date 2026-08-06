const fs = require('fs');
const path = require('path');

const rootDir = 'D:/Cucina Fresca';

function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const relativeDepth = path.relative(rootDir, path.dirname(filePath)).split(path.sep).filter(Boolean).length;
  const assetPrefix = relativeDepth === 0 ? 'assets/' : (relativeDepth === 1 ? '../assets/' : '../../assets/');

  const logoMarkup = `<img src="${assetPrefix}cucina_logo.png" alt="Cucina Fresca Logo" class="size-12 shrink-0 rounded-full object-contain bg-white/95 p-0.5 shadow-md transition-transform hover:scale-105">`;

  let updated = content;

  // Replace text CF badge
  updated = updated.replace(/<span class="grid size-10 shrink-0 place-items-center rounded-full border border-accent\/60 font-display text-lg text-accent">CF<\/span>/g, logoMarkup);
  updated = updated.replace(/<span class="grid size-10 shrink-0 place-items-center rounded-full border border-accent\/60 font-display text-lg text-accent">CF<\/span>/g, logoMarkup);
  
  // Also check favicon link in head tag
  const faviconPrefix = relativeDepth === 0 ? 'assets/cucina_logo.png' : (relativeDepth === 1 ? '../assets/cucina_logo.png' : '../../assets/cucina_logo.png');
  updated = updated.replace(/<link rel="icon" href="\/favicon\.ico" type="image\/x-icon">/g, `<link rel="icon" href="${faviconPrefix}" type="image/png">`);

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Integrated logo in:', filePath);
  }
}

function traverse(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverse(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      processHtmlFile(fullPath);
    }
  }
}

traverse(rootDir);
console.log('Successfully integrated logo across all HTML pages!');
