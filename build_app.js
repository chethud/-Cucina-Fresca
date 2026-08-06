const fs = require('fs');
const path = require('path');

const targetRoot = 'D:/Cucina Fresca';
const sourceFolders = [12, 13, 14, 15];
const downloadsDir = 'E:/OneDrive/Documents/Downloads';

// Helper to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('1. Creating directory structure...');
const dirsToCreate = [
  'assets',
  'css',
  'js',
  'fonts.googleapis.com',
  'menu',
  'gallery',
  'table/07',
  'about',
  'events',
  'contact',
  'legal/privacy',
  'legal/terms',
  'legal/refund',
  'legal/cookies'
];

dirsToCreate.forEach(d => {
  fs.mkdirSync(path.join(targetRoot, d), { recursive: true });
});

console.log('2. Merging assets and dependencies...');
sourceFolders.forEach(num => {
  const dir = path.join(downloadsDir, `page_content (${num})`);
  copyDir(path.join(dir, 'assets'), path.join(targetRoot, 'assets'));
  copyDir(path.join(dir, 'css'), path.join(targetRoot, 'css'));
  copyDir(path.join(dir, 'js'), path.join(targetRoot, 'js'));
  copyDir(path.join(dir, 'fonts.googleapis.com'), path.join(targetRoot, 'fonts.googleapis.com'));
  if (fs.existsSync(path.join(dir, '_flock.js'))) {
    fs.copyFileSync(path.join(dir, '_flock.js'), path.join(targetRoot, '_flock.js'));
  }
});

console.log('Asset merge complete.');
