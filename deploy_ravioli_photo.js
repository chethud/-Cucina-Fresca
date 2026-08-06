const fs = require('fs');

const src = 'C:/Users/farna/.gemini/antigravity-ide/brain/b743bdf8-c961-45ed-b206-b88ffa79dda5/chicken_ravioli_photo_1786042359596.png';
const dest = 'D:/Cucina Fresca/assets/dish_ravioli_chicken.png';

fs.copyFileSync(src, dest);
console.log('Successfully deployed high-res Chicken Ravioli photo to D:/Cucina Fresca/assets/dish_ravioli_chicken.png!');
console.log('Image file size:', fs.statSync(dest).size, 'bytes');
