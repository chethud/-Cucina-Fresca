const fs = require('fs');

const jsPath = 'E:/OneDrive/Documents/Downloads/page_content (12)/assets/index_cphllg2n.js';
const js = fs.readFileSync(jsPath, 'utf8');

console.log('JS File Size:', js.length);

// Search for routes or paths in JS
const routes = js.match(/"\/(menu|gallery|about|table|events|contact|cart|checkout|order|legal\/[a-z]+)?"/gi);
console.log('Routes found in JS:', [...new Set(routes)].slice(0, 30));

// Check if React / React Router / Next / etc. is present
console.log('Has React:', js.includes('createElement') || js.includes('jsx'));
console.log('Has React Router:', js.includes('react-router') || js.includes('createBrowserRouter') || js.includes('useRoutes'));
