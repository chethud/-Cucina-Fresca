const fs = require('fs');
const path = require('path');

const targetRoot = 'D:/Cucina Fresca';
const downloadsDir = 'E:/OneDrive/Documents/Downloads';

function fixPaths(html, depth) {
  const prefix = depth === 0 ? '' : (depth === 1 ? '../' : '../../');
  
  // Replace asset hrefs and srcs
  let clean = html;

  // Replace /assets/ with prefix + assets/ or keep /assets/
  clean = clean.replace(/href="\/assets\//g, `href="${prefix}assets/`);
  clean = clean.replace(/src="\/assets\//g, `src="${prefix}assets/`);
  clean = clean.replace(/href="assets\//g, `href="${prefix}assets/`);
  clean = clean.replace(/src="assets\//g, `src="${prefix}assets/`);
  clean = clean.replace(/href="css\//g, `href="${prefix}css/`);
  clean = clean.replace(/src="js\//g, `src="${prefix}js/`);

  // Fix Google fonts link if broken
  clean = clean.replace(/href="fonts.googleapis.com\/css2"/g, 'href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"');

  // Fix links:
  // / -> prefix + index.html (or / if serving)
  // /menu -> prefix + menu/
  // /gallery -> prefix + gallery/
  // /table/07 -> prefix + table/07/
  clean = clean.replace(/href="\/"/g, `href="${prefix || './'}"`);
  clean = clean.replace(/href="\/menu"/g, `href="${prefix}menu/"`);
  clean = clean.replace(/href="\/gallery"/g, `href="${prefix}gallery/"`);
  clean = clean.replace(/href="\/table\/07"/g, `href="${prefix}table/07/"`);
  clean = clean.replace(/href="\/about"/g, `href="${prefix}about/"`);
  clean = clean.replace(/href="\/events"/g, `href="${prefix}events/"`);
  clean = clean.replace(/href="\/contact"/g, `href="${prefix}contact/"`);
  clean = clean.replace(/href="\/legal\/privacy"/g, `href="${prefix}legal/privacy/"`);
  clean = clean.replace(/href="\/legal\/terms"/g, `href="${prefix}legal/terms/"`);
  clean = clean.replace(/href="\/legal\/refund"/g, `href="${prefix}legal/refund/"`);
  clean = clean.replace(/href="\/legal\/cookies"/g, `href="${prefix}legal/cookies/"`);

  // Ensure app.js is injected before </body>
  if (!clean.includes('app.js')) {
    clean = clean.replace('</body>', `<script src="${prefix}assets/app.js"></script>\n</body>`);
  }

  return clean;
}

console.log('Processing Main Pages...');

// 1. Home Page (Page 12)
const homeHtml = fs.readFileSync(path.join(downloadsDir, 'page_content (12)', 'index.html'), 'utf8');
fs.writeFileSync(path.join(targetRoot, 'index.html'), fixPaths(homeHtml, 0), 'utf8');
console.log('Saved index.html (Home)');

// 2. Menu Page (Page 13)
const menuHtml = fs.readFileSync(path.join(downloadsDir, 'page_content (13)', 'index.html'), 'utf8');
fs.writeFileSync(path.join(targetRoot, 'menu', 'index.html'), fixPaths(menuHtml, 1), 'utf8');
console.log('Saved menu/index.html');

// 3. Gallery Page (Page 14)
const galleryHtml = fs.readFileSync(path.join(downloadsDir, 'page_content (14)', 'index.html'), 'utf8');
fs.writeFileSync(path.join(targetRoot, 'gallery', 'index.html'), fixPaths(galleryHtml, 1), 'utf8');
console.log('Saved gallery/index.html');

// 4. Table 07 Order Page (Page 15)
const tableHtml = fs.readFileSync(path.join(downloadsDir, 'page_content (15)', 'index.html'), 'utf8');
fs.writeFileSync(path.join(targetRoot, 'table', '07', 'index.html'), fixPaths(tableHtml, 2), 'utf8');
console.log('Saved table/07/index.html');

// Helper to generate auxiliary page with standard layout matching Cucina Fresca theme
function createAuxPage(title, subtitle, content, depth) {
  const prefix = depth === 0 ? '' : (depth === 1 ? '../' : '../../');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} — Cucina Fresca Mysuru</title>
  <link rel="stylesheet" href="${prefix}assets/styles_bspbh3op.css">
  <link rel="stylesheet" href="${prefix}css/inline_styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap">
  <link rel="icon" href="${prefix}favicon.ico" type="image/x-icon">
</head>
<body class="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
  <div class="flex min-h-screen flex-col">
    <!-- Header Navigation -->
    <header class="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="${prefix || './'}" class="flex items-center gap-3">
          <span class="font-display text-2xl font-bold tracking-tight text-foreground">Cucina Fresca</span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="${prefix || './'}" class="transition-colors hover:text-primary">Home</a>
          <a href="${prefix}about/" class="transition-colors hover:text-primary">About</a>
          <a href="${prefix}menu/" class="transition-colors hover:text-primary">Menu</a>
          <a href="${prefix}gallery/" class="transition-colors hover:text-primary">Gallery</a>
          <a href="${prefix}events/" class="transition-colors hover:text-primary">Events</a>
          <a href="${prefix}contact/" class="transition-colors hover:text-primary">Contact</a>
        </nav>
        <div class="flex items-center gap-4">
          <a href="${prefix}table/07/" class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Scan & Order
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <section class="bg-[var(--espresso)] text-[var(--cream)] py-16 px-5 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="font-display text-4xl lg:text-5xl font-bold text-accent">${title}</h1>
          <p class="mt-4 text-lg text-[var(--cream)]/80">${subtitle}</p>
        </div>
      </section>
      <section class="py-16 px-5 lg:px-8 mx-auto max-w-4xl">
        <div class="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          ${content}
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-[var(--espresso)] text-[var(--cream)] py-12 border-t border-[var(--cream)]/10">
      <div class="mx-auto max-w-7xl px-5 lg:px-8 text-center text-sm text-[var(--cream)]/60">
        &copy; 2026 Cucina Fresca &middot; Saraswathipuram, Mysuru. All rights reserved.
      </div>
    </footer>
  </div>
  <script src="${prefix}assets/app.js"></script>
</body>
</html>`;
}

console.log('Generating Auxiliary Pages...');

// About Page
fs.writeFileSync(path.join(targetRoot, 'about', 'index.html'), createAuxPage(
  'About Cucina Fresca',
  'Crafting authentic Italian traditions in Saraswathipuram, Mysuru',
  `<p class="text-lg">Founded with a passion for genuine Italian culinary heritage, Cucina Fresca brings handmade egg pasta, 72-hour fermented pizza dough, and slow-simmered sauces to Mysuru.</p>
  <h3 class="font-display text-2xl text-foreground mt-8 mb-4">Our Philosophy</h3>
  <p>We source imported San Marzano tomatoes, extra virgin olive oil, and Parmigiano-Reggiano alongside fresh local produce to create uncompromised flavors.</p>`,
  1
));

// Events Page
fs.writeFileSync(path.join(targetRoot, 'events', 'index.html'), createAuxPage(
  'Events & Private Dining',
  'Special gatherings, live music evenings, and private pasta workshops',
  `<p class="text-lg">Join us for cozy evenings of Italian acoustics, wine pairings, and artisanal pasta masterclasses held every month.</p>
  <h3 class="font-display text-2xl text-foreground mt-8 mb-4">Host Your Event</h3>
  <p>From birthday celebrations to corporate dinners, reserve our courtyard dining space for memorable experiences.</p>`,
  1
));

// Contact Page
fs.writeFileSync(path.join(targetRoot, 'contact', 'index.html'), createAuxPage(
  'Contact Us',
  'We would love to hear from you',
  `<div class="grid gap-6 md:grid-cols-2 mt-4">
    <div class="p-6 rounded-lg border border-border bg-card">
      <h3 class="font-display text-xl font-semibold mb-2">Visit Us</h3>
      <p>3rd Main, Saraswathipuram, Mysuru, Karnataka 570009</p>
    </div>
    <div class="p-6 rounded-lg border border-border bg-card">
      <h3 class="font-display text-xl font-semibold mb-2">Get in Touch</h3>
      <p>Phone: +91 98860 41207</p>
      <p>Email: hello@cucinafresca.in</p>
    </div>
  </div>`,
  1
));

// Legal Pages
const legalPages = [
  { path: 'privacy', title: 'Privacy Policy' },
  { path: 'terms', title: 'Terms & Conditions' },
  { path: 'refund', title: 'Refund Policy' },
  { path: 'cookies', title: 'Cookie Policy' }
];

legalPages.forEach(p => {
  fs.writeFileSync(path.join(targetRoot, 'legal', p.path, 'index.html'), createAuxPage(
    p.title,
    `Cucina Fresca Mysuru legal policies`,
    `<p>Your privacy and safety are essential to us at Cucina Fresca. All transactions, table orders, and personal details are processed securely.</p>`,
    2
  ));
});

console.log('All HTML pages successfully created and processed!');
