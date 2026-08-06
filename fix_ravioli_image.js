const fs = require('fs');
const path = require('path');

// 1. Copy real Chicken Ravioli image (media__1786040399549.png)
const src = 'C:/Users/farna/.gemini/antigravity-ide/brain/b743bdf8-c961-45ed-b206-b88ffa79dda5/media__1786040399549.png';
const dest = 'D:/Cucina Fresca/assets/dish_ravioli_chicken.png';

fs.copyFileSync(src, dest);
console.log('Successfully copied Chicken Ravioli image! File size:', fs.statSync(dest).size);

// 2. Fix table/07/index.html Non-Veg badge & image path
let tableHtml = fs.readFileSync('D:/Cucina Fresca/table/07/index.html', 'utf8');

// Replace broken image tag and veg badge for Chicken Ravioli
tableHtml = tableHtml.replace(
  /<img alt="Chicken Ravioli in Tomato Cream"[^>]*>[\s\S]*?<span class="inline-flex items-center gap-1\.5 text-primary">[\s\S]*?Veg<\/span>/g,
  `<img alt="Chicken Ravioli in Tomato Cream" loading="lazy" width="1024" height="768" class="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" src="../../assets/dish_ravioli_chicken.png"><div class="absolute left-3 top-3 flex items-center gap-2"><span class="grid size-6 place-items-center rounded-sm border bg-card border-destructive" title="Non-vegetarian"><span class="size-2.5 rounded-full bg-destructive"></span></span></div></div><div class="flex flex-1 flex-col gap-3 p-5"><div class="flex flex-wrap gap-2"><span class="rounded-full border border-accent/50 bg-accent/15 px-2.5 py-1 text-[10px] uppercase tracking-widest text-accent-foreground">Today's Special</span></div><div class="flex items-start justify-between gap-3"><h3 class="min-w-0 font-display text-xl leading-snug">Chicken Ravioli in Tomato Cream</h3><span class="shrink-0 font-display text-lg text-primary">₹640</span></div><p class="text-sm leading-relaxed text-muted-foreground">Handcrafted chicken ravioli in rich tomato-cream sauce with toasted garlic crostini.</p><div class="mt-auto flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground"><span class="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock size-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> 17 min</span><span>640 kcal</span><span class="inline-flex items-center gap-0.5 text-destructive"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame size-3.5" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg></span>`
);

fs.writeFileSync('D:/Cucina Fresca/table/07/index.html', tableHtml, 'utf8');
console.log('Successfully updated D:/Cucina Fresca/table/07/index.html!');

// 3. Fix menu/index.html Non-Veg badge & image path
let menuHtml = fs.readFileSync('D:/Cucina Fresca/menu/index.html', 'utf8');

menuHtml = menuHtml.replace(
  /<img alt="Chicken Ravioli in Tomato Cream"[^>]*>[\s\S]*?<span class="inline-flex items-center gap-1\.5 text-primary">[\s\S]*?Veg<\/span>/g,
  `<img alt="Chicken Ravioli in Tomato Cream" loading="lazy" width="1024" height="768" class="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" src="../assets/dish_ravioli_chicken.png"><div class="absolute left-3 top-3 flex items-center gap-2"><span class="grid size-6 place-items-center rounded-sm border bg-card border-destructive" title="Non-vegetarian"><span class="size-2.5 rounded-full bg-destructive"></span></span></div></div><div class="flex flex-1 flex-col gap-3 p-5"><div class="flex flex-wrap gap-2"><span class="rounded-full border border-accent/50 bg-accent/15 px-2.5 py-1 text-[10px] uppercase tracking-widest text-accent-foreground">Chef Recommended</span></div><div class="flex items-start justify-between gap-3"><h3 class="min-w-0 font-display text-xl leading-snug">Chicken Ravioli in Tomato Cream</h3><span class="shrink-0 font-display text-lg text-primary">₹640</span></div><p class="text-sm leading-relaxed text-muted-foreground">Handcrafted chicken ravioli in rich tomato-cream sauce with toasted garlic crostini.</p><div class="mt-auto flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground"><span class="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock size-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> 19 min</span><span>680 kcal</span><span class="inline-flex items-center gap-0.5 text-destructive"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame size-3.5" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg></span>`
);

fs.writeFileSync('D:/Cucina Fresca/menu/index.html', menuHtml, 'utf8');
console.log('Successfully updated D:/Cucina Fresca/menu/index.html!');
