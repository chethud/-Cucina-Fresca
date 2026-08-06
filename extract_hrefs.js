const fs = require('fs');

[12, 13, 14, 15].forEach(num => {
  const file = `E:/OneDrive/Documents/Downloads/page_content (${num})/index.html`;
  const html = fs.readFileSync(file, 'utf8');
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  console.log(`\n=== Page ${num} Hrefs ===`);
  console.log([...new Set(hrefs)]);
});
