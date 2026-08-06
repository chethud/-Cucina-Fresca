const fs = require('fs');
const path = require('path');

const rootDir = 'D:/Cucina Fresca';

function fixLogoInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any logo img tags with explicit width, height and inline style
  const regex = /<img src="([^"]*cucina_logo\.png)"[^>]*>/g;

  let updated = content.replace(regex, (match, src) => {
    return `<img src="${src}" alt="Cucina Fresca Logo" width="48" height="48" style="width: 48px; height: 48px; min-width: 48px; min-height: 48px;" class="shrink-0 rounded-full object-contain bg-white/95 p-0.5 shadow-md transition-transform hover:scale-105">`;
  });

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Fixed logo size in:', filePath);
  }
}

function traverse(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverse(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      fixLogoInFile(fullPath);
    }
  }
}

traverse(rootDir);
console.log('Finished fixing logo size across all HTML files!');
