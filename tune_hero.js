const fs = require('fs');

const file = 'd:/Cucina Fresca/index.html';
let html = fs.readFileSync(file, 'utf8');

// Update image tag to position object at center 8% so the top wooden board & lights are perfectly framed
html = html.replace(
  /<img src="assets\/cucina_storefront\.png"[^>]*>/i,
  `<img src="assets/cucina_storefront.png" alt="Cucina Fresca storefront" width="1920" height="1088" class="absolute inset-0 size-full object-cover" style="object-position: center 6%;">`
);

// Lighten top gradient overlay so the wooden Cucina Fresca board and hanging lamps are bright & clear
html = html.replace(
  /<div class="absolute inset-0 bg-gradient-to-b [^"]*"><\/div>/i,
  `<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-[var(--espresso)]/65 to-[var(--espresso)]/95"></div>`
);

// Increase top padding of text container so the hero headline sits below the cafe board
html = html.replace(
  /class="relative mx-auto w-full max-w-7xl px-5 [^"]*"/i,
  'class="relative mx-auto w-full max-w-7xl px-5 pt-52 pb-20 lg:px-8 lg:pt-60"'
);

fs.writeFileSync(file, html, 'utf8');
console.log('Hero image object-position updated to center 6% and text padding adjusted!');
