const fs = require('fs');
const path = require('path');

const indexFile = 'd:/Cucina Fresca/index.html';
let html = fs.readFileSync(indexFile, 'utf8');

// Replace hero background image source
html = html.replace(
  'src="assets/hero_interior_cz0v_ywu.jpg"',
  'src="assets/cucina_storefront.png"'
);

// Replace alt text to match storefront
html = html.replace(
  'alt="Candlelit interior of Cucina Fresca"',
  'alt="Cucina Fresca storefront in Saraswathipuram Mysuru"'
);

// Also check preload links in head if present
html = html.replace(
  'href="assets/hero-interior-CZ0V-YwU.jpg"',
  'href="assets/cucina_storefront.png"'
);
html = html.replace(
  'href="/assets/hero-interior-CZ0V-YwU.jpg"',
  'href="assets/cucina_storefront.png"'
);

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Successfully updated Home Page hero background image to assets/cucina_storefront.png');
