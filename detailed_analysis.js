const fs = require('fs');
const path = require('path');

const folders = [12, 13, 14, 15];

folders.forEach(num => {
  const dir = `E:/OneDrive/Documents/Downloads/page_content (${num})`;
  const htmlPath = path.join(dir, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  console.log(`\n========================================`);
  console.log(`PAGE ${num} ANALYSIS`);
  console.log(`========================================`);
  console.log('HTML Length:', html.length);
  
  // Extract body content summary
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    const bodyContent = bodyMatch[1];
    console.log('Body children tags count:');
    const tags = [...bodyContent.matchAll(/<([a-z1-6]+)\s[^>]*id="([^"]+)"/gi)].map(m => `<${m[1]} id="${m[2]}">`);
    console.log('Main containers with IDs:', tags);
  }

  // Check inline styles
  const inlineCssPath = path.join(dir, 'css', 'inline_styles.css');
  if (fs.existsSync(inlineCssPath)) {
    console.log('inline_styles.css size:', fs.readFileSync(inlineCssPath, 'utf8').length);
  }
});
