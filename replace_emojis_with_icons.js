const fs = require('fs');

// 1. Update about/index.html
let aboutHtml = fs.readFileSync('D:/Cucina Fresca/about/index.html', 'utf8');

const pastaIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils size-5" aria-hidden="true"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path><path d="M15 2v16"></path><path d="M21 2v16"></path><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path></svg>`;
const pizzaIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame size-5" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>`;
const dopIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award size-5" aria-hidden="true"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`;
const qrIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-qr-code size-5" aria-hidden="true"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>`;

aboutHtml = aboutHtml.replace('<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center text-xl mb-4">🍝</div>', `<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center mb-4">${pastaIcon}</div>`);
aboutHtml = aboutHtml.replace('<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center text-xl mb-4">🍕</div>', `<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center mb-4">${pizzaIcon}</div>`);
aboutHtml = aboutHtml.replace('<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center text-xl mb-4">🇮🇹</div>', `<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center mb-4">${dopIcon}</div>`);
aboutHtml = aboutHtml.replace('<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center text-xl mb-4">📱</div>', `<div class="size-11 rounded-lg bg-accent/15 text-accent grid place-items-center mb-4">${qrIcon}</div>`);

fs.writeFileSync('D:/Cucina Fresca/about/index.html', aboutHtml, 'utf8');
console.log('Replaced emoji symbols with vector Lucide SVG icons in about/index.html!');

// 2. Update assets/app.js for service modal buttons
let appJs = fs.readFileSync('D:/Cucina Fresca/assets/app.js', 'utf8');

const bellIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell size-6 text-accent"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .738-1.674C19.41 13.882 18 10.963 18 8A6 6 0 0 0 6 8c0 2.963-1.41 5.882-2.738 7.326z"></path></svg>`;
const waterIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet size-6 text-accent"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>`;
const billIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt size-6 text-accent"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 6v12"></path></svg>`;
const sparkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-6 text-accent"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>`;

appJs = appJs.replace('<span class="text-2xl">🔔</span>', bellIcon);
appJs = appJs.replace('<span class="text-2xl">💧</span>', waterIcon);
appJs = appJs.replace('<span class="text-2xl">🧾</span>', billIcon);
appJs = appJs.replace('<span class="text-2xl">🧹</span>', sparkIcon);

fs.writeFileSync('D:/Cucina Fresca/assets/app.js', appJs, 'utf8');
console.log('Replaced service modal emojis with Lucide SVG icons in assets/app.js!');
