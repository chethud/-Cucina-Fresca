const fs = require('fs');
const path = require('path');

const targetRoot = 'D:/Cucina Fresca';

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  let updated = content;

  // Replacements for navigation buttons and badges
  updated = updated.replace(/Order via QR \(Table 07\)/g, 'Order via QR');
  updated = updated.replace(/Scan & Order \(Table 07\)/g, 'Scan & Order');
  updated = updated.replace(/Scan &amp; Order \(Table 07\)/g, 'Scan &amp; Order');

  // Replacements in Table 07 index.html
  updated = updated.replace(/<title>Table 07 — Order at Cucina Fresca<\/title>/g, '<title>Order at Cucina Fresca</title>');
  updated = updated.replace(/content="You are ordering at Cucina Fresca/g, 'content="You are ordering at Cucina Fresca');
  updated = updated.replace(/<p class="mt-6 text-sm text-\[var\(--cream\)\]\/70">Benvenuti — you are ordering from<\/p><h1 class="mt-2 font-display text-5xl text-accent">Table 07<\/h1>/g, '<p class="mt-6 text-sm text-[var(--cream)]/70">Benvenuti — welcome to</p><h1 class="mt-2 font-display text-5xl text-accent">Digital Menu & Order</h1>');
  updated = updated.replace(/<h1 class="mt-2 font-display text-5xl text-accent">Table 07<\/h1>/g, '<h1 class="mt-2 font-display text-5xl text-accent">Digital Menu & Order</h1>');

  // Replacements in app.js
  updated = updated.replace(/Table Service/g, 'Table Service');
  updated = updated.replace(/Order Cart/g, 'Order Cart');
  updated = updated.replace(/Confirm & Place Order \(Table 07\)/g, 'Confirm & Place Order');
  updated = updated.replace(/Order Status/g, 'Order Status');
  updated = updated.replace(/Staff notified!/g, 'Staff notified!');
  updated = updated.replace(/Waiter bringing dishes to your table/g, 'Waiter bringing dishes to your table');
  updated = updated.replace(/document\.querySelector\('h1'\)\?\.textContent\.includes\('Table 07'\)/g, "document.querySelector('h1')?.textContent.includes('Digital Menu') || document.querySelector('h1')?.textContent.includes('Table')");

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Updated:', filePath);
  }
}

function traverse(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverse(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js'))) {
      processFile(fullPath);
    }
  }
}

traverse(targetRoot);
console.log('Finished removing all Table 07 mentions across workspace!');
