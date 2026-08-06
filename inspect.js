const fs = require('fs');
const path = require('path');

const downloadsDir = 'E:/OneDrive/Documents/Downloads';
const dirs = fs.readdirSync(downloadsDir).filter(d => d.startsWith('page_content'));

dirs.sort().forEach(d => {
  const file = path.join(downloadsDir, d, 'index.html');
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf8');
  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || 'No title';
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const activeNav = [...html.matchAll(/<a[^>]*class="[^"]*active[^"]*"[^>]*href="([^"]+)"/gi)].map(m => m[1]);
  console.log(`${d}: Title='${title}' | H1='${h1.join(' | ')}' | Nav='${activeNav.join(', ')}'`);
});
