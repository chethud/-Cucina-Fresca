const fs = require('fs');

const file = 'd:/Cucina Fresca/index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace hero section image tag with object-position: center 0%
html = html.replace(
  /<img src="assets\/cucina_storefront\.png"[^>]*>/i,
  `<img src="assets/cucina_storefront.png" alt="Cucina Fresca storefront" width="1920" height="1088" class="absolute inset-0 size-full object-cover" style="object-position: center 0%;">`
);

// Lighten top gradient overlay so the illuminated wooden sign is bright and clear
html = html.replace(
  /class="absolute inset-0 bg-gradient-to-b from-\[var\(--espresso\)\]\/[0-9]+ [^"]*"/i,
  `class="absolute inset-0 bg-gradient-to-b from-black/25 via-[var(--espresso)]/60 to-[var(--espresso)]/95"`
);

// Increase top padding of text container slightly so text sits neatly under the sign board
html = html.replace(
  'class="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8"',
  'class="relative mx-auto w-full max-w-7xl px-5 pt-44 pb-24 lg:px-8 lg:pt-52"'
);

fs.writeFileSync(file, html, 'utf8');
console.log('Successfully adjusted hero image object-position to center 0% and adjusted padding.');
