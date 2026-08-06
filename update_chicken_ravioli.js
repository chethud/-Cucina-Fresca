const fs = require('fs');
const path = require('path');

// 1. Copy uploaded image to assets/dish_ravioli_chicken.png
const src = 'C:/Users/farna/.gemini/antigravity-ide/brain/b743bdf8-c961-45ed-b206-b88ffa79dda5/uploaded_media_1786041322910.png';
const dest = 'D:/Cucina Fresca/assets/dish_ravioli_chicken.png';

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied real photo to assets/dish_ravioli_chicken.png');
} else {
  console.error('Source image not found:', src);
}

// 2. Function to update HTML files with Chicken Ravioli item
function updateRavioliInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  const relativeDepth = path.relative('D:/Cucina Fresca', path.dirname(filePath)).split(path.sep).filter(Boolean).length;
  const assetPrefix = relativeDepth === 0 ? 'assets/' : (relativeDepth === 1 ? '../assets/' : '../../assets/');

  const chickenRavioliImg = `${assetPrefix}dish_ravioli_chicken.png`;

  let updated = content;

  // Replace Ravioli ai Funghi or Ravioli Ricotta e Spinaci or add Chicken Ravioli
  if (updated.includes('Ravioli Ricotta e Spinaci')) {
    updated = updated.replace(/alt="Ravioli Ricotta e Spinaci"[^>]*src="[^"]*"/g, `alt="Chicken Ravioli in Tomato Cream" src="${chickenRavioliImg}"`);
    updated = updated.replace(/<h3 class="min-w-0 font-display text-xl leading-snug">Ravioli Ricotta e Spinaci<\/h3>/g, '<h3 class="min-w-0 font-display text-xl leading-snug">Chicken Ravioli in Tomato Cream</h3>');
    updated = updated.replace(/Hand-folded parcels of ricotta and spinach in a sage butter emulsion\./g, 'Handcrafted chicken ravioli in rich tomato-cream sauce with toasted garlic crostini.');
  }

  if (updated.includes('Ravioli ai Funghi')) {
    updated = updated.replace(/alt="Ravioli ai Funghi"[^>]*src="[^"]*"/g, `alt="Chicken Ravioli" src="${chickenRavioliImg}"`);
    updated = updated.replace(/<h3 class="min-w-0 font-display text-xl leading-snug">Ravioli ai Funghi<\/h3>/g, '<h3 class="min-w-0 font-display text-xl leading-snug">Chicken Ravioli</h3>');
  }

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Updated Chicken Ravioli in:', filePath);
  }
}

const targetFiles = [
  'D:/Cucina Fresca/index.html',
  'D:/Cucina Fresca/menu/index.html',
  'D:/Cucina Fresca/table/07/index.html'
];

targetFiles.forEach(updateRavioliInFile);
console.log('Finished updating Chicken Ravioli real photo across all pages!');
