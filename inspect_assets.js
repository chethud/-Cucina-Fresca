const fs = require('fs');
const path = require('path');

[12, 13, 14, 15].forEach(num => {
  const dir = `E:/OneDrive/Documents/Downloads/page_content (${num})`;
  const files = fs.readdirSync(dir);
  const assets = fs.existsSync(path.join(dir, 'assets')) ? fs.readdirSync(path.join(dir, 'assets')) : [];
  console.log(`\n=== Folder ${num} ===`);
  console.log('Root files:', files);
  console.log('Assets:', assets);
});
