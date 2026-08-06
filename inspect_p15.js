const fs = require('fs');

const html = fs.readFileSync('E:/OneDrive/Documents/Downloads/page_content (15)/index.html', 'utf8');
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || '';

console.log('Body snippet (first 2000 chars):');
console.log(body.slice(0, 2000));
