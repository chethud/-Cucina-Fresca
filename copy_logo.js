const fs = require('fs');

const src = 'C:/Users/farna/.gemini/antigravity-ide/brain/b743bdf8-c961-45ed-b206-b88ffa79dda5/media__1786039342737.png';
const dest = 'd:/Cucina Fresca/assets/cucina_logo.png';

fs.copyFileSync(src, dest);
console.log('Successfully saved official Cucina Fresca logo to d:/Cucina Fresca/assets/cucina_logo.png!');
