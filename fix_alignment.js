const fs = require('fs');
const path = require('path');

const rootDir = 'D:/Cucina Fresca';

// 1. Fix About page
let aboutContent = fs.readFileSync('D:/Cucina Fresca/about/index.html', 'utf8');

// Replace header class in about page
aboutContent = aboutContent.replace(
  'header class="fixed inset-x-0 top-0 z-50 transition-all duration-500 py-5 text-[var(--cream)] bg-gradient-to-b from-black/80 to-transparent"',
  'header class="fixed inset-x-0 top-0 z-50 py-4 text-[var(--cream)] bg-[var(--espresso)] border-b border-[var(--cream)]/15 shadow-xl backdrop-blur-md"'
);

// Replace hero section top padding in about page
aboutContent = aboutContent.replace(
  'section class="relative bg-[var(--espresso)] text-[var(--cream)] pt-40 pb-24 px-5 lg:px-8 overflow-hidden"',
  'section class="relative bg-[var(--espresso)] text-[var(--cream)] pt-36 pb-20 px-5 lg:px-8 overflow-hidden border-b border-[var(--cream)]/10"'
);

fs.writeFileSync('D:/Cucina Fresca/about/index.html', aboutContent, 'utf8');
console.log('Fixed About page header and alignment!');

// 2. Fix other auxiliary pages (menu, gallery, events, contact)
function fixAuxiliaryPage(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  let updated = content;

  // Make sure fixed headers have dark background on inner pages
  updated = updated.replace(
    'class="fixed inset-x-0 top-0 z-50 transition-all duration-500 py-5 text-[var(--cream)] bg-gradient-to-b from-black/80 to-transparent"',
    'class="fixed inset-x-0 top-0 z-50 py-4 text-[var(--cream)] bg-[var(--espresso)] border-b border-[var(--cream)]/15 shadow-xl backdrop-blur-md"'
  );

  // If header has sticky top-0 bg-background/95
  updated = updated.replace(
    'class="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur"',
    'class="fixed inset-x-0 top-0 z-50 py-4 text-[var(--cream)] bg-[var(--espresso)] border-b border-[var(--cream)]/15 shadow-xl backdrop-blur-md"'
  );

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Fixed header alignment in:', filePath);
  }
}

const pagesToFix = [
  'D:/Cucina Fresca/menu/index.html',
  'D:/Cucina Fresca/gallery/index.html',
  'D:/Cucina Fresca/events/index.html',
  'D:/Cucina Fresca/contact/index.html',
  'D:/Cucina Fresca/legal/privacy/index.html',
  'D:/Cucina Fresca/legal/terms/index.html',
  'D:/Cucina Fresca/legal/refund/index.html',
  'D:/Cucina Fresca/legal/cookies/index.html'
];

pagesToFix.forEach(fixAuxiliaryPage);
console.log('Finished fixing layout alignment across all pages!');
