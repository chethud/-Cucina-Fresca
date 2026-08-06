const fs = require('fs');

const aboutHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Us — Cucina Fresca Italian Joint Mysuru</title>
  <meta name="description" content="Learn about Cucina Fresca's passion for handmade egg pasta, 72-hour fermented stone-baked pizza, and authentic Italian culinary traditions in Saraswathipuram, Mysuru.">
  <link rel="stylesheet" href="../assets/styles_bspbh3op.css">
  <link rel="stylesheet" href="../css/inline_styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap">
  <link rel="icon" href="../assets/cucina_logo.png" type="image/png">
</head>
<body class="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
  <div class="min-h-screen bg-background flex flex-col">
    
    <!-- Fixed Navigation Header -->
    <header class="fixed inset-x-0 top-0 z-50 transition-all duration-500 py-5 text-[var(--cream)] bg-gradient-to-b from-black/80 to-transparent">
      <div class="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a class="flex min-w-0 items-center gap-3" href="../">
          <img src="../assets/cucina_logo.png" alt="Cucina Fresca Logo" width="48" height="48" style="width: 48px; height: 48px; min-width: 48px; min-height: 48px;" class="shrink-0 rounded-full object-contain bg-white/95 p-0.5 shadow-md transition-transform hover:scale-105">
          <span class="min-w-0">
            <span class="block truncate font-display text-lg leading-none tracking-wide">Cucina Fresca</span>
            <span class="eyebrow block">Italian Joint &middot; Mysuru</span>
          </span>
        </a>
        <nav class="hidden items-center gap-8 lg:flex">
          <a href="../" class="relative text-sm tracking-wide transition-colors hover:text-accent opacity-85">Home</a>
          <a href="./" class="relative text-sm tracking-wide transition-colors hover:text-accent text-accent font-semibold">About</a>
          <a href="../menu/" class="relative text-sm tracking-wide transition-colors hover:text-accent opacity-85">Menu</a>
          <a href="../gallery/" class="relative text-sm tracking-wide transition-colors hover:text-accent opacity-85">Gallery</a>
          <a href="../events/" class="relative text-sm tracking-wide transition-colors hover:text-accent opacity-85">Events</a>
          <a href="../contact/" class="relative text-sm tracking-wide transition-colors hover:text-accent opacity-85">Contact</a>
          <a href="../table/07/" class="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">Scan & Order</a>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      
      <!-- Hero Header Section -->
      <section class="relative bg-[var(--espresso)] text-[var(--cream)] pt-40 pb-24 px-5 lg:px-8 overflow-hidden">
        <div class="absolute -top-32 -left-32 size-[450px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 size-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none"></div>
        
        <div class="relative mx-auto max-w-5xl text-center">
          <div class="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase mb-4">
            <span>Our Heritage &amp; Craftsmanship</span>
          </div>
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--cream)]">
            About Cucina Fresca
          </h1>
          <p class="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[var(--cream)]/80 leading-relaxed">
            Crafting authentic Italian recipes, 72-hour fermented pizza, and fresh handmade egg pasta in Saraswathipuram, Mysuru.
          </p>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="py-20 px-5 lg:px-8 mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-7 space-y-6">
            <p class="eyebrow">The Story of Cucina Fresca</p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold leading-tight text-foreground">
              Bringing Genuine Italian Trattoria Traditions to Mysuru
            </h2>
            <p class="text-base text-muted-foreground leading-relaxed">
              Founded with an uncompromising passion for genuine Italian culinary heritage, Cucina Fresca was created to offer Mysuru an authentic taste of traditional trattoria dining. From our kitchen in Saraswathipuram, every dish celebrates age-old recipes passed down through generations.
            </p>
            <p class="text-base text-muted-foreground leading-relaxed">
              We believe that great Italian food relies on simplicity, quality ingredients, and time. We don't take shortcuts — our pizza dough ferments slowly for 72 hours, our pasta is rolled fresh every morning, and our sauces simmer for hours to achieve deep, rich flavor profiles.
            </p>
            <div class="pt-4 grid grid-cols-2 gap-6 border-t border-border">
              <div>
                <p class="font-display text-2xl font-bold text-accent">100% Scratch Made</p>
                <p class="text-xs text-muted-foreground mt-1">No pre-packaged sauces or frozen dough. Everything crafted fresh daily.</p>
              </div>
              <div>
                <p class="font-display text-2xl font-bold text-accent">Authentic Ingredients</p>
                <p class="text-xs text-muted-foreground mt-1">Imported San Marzano tomatoes, Parmigiano-Reggiano DOP &amp; extra virgin olive oil.</p>
              </div>
            </div>
          </div>
          
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-border group">
              <img src="../assets/cucina_storefront.png" alt="Cucina Fresca Storefront in Mysuru" class="size-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div class="text-white">
                  <p class="font-display text-xl font-bold text-accent">Cucina Fresca Storefront</p>
                  <p class="text-xs text-white/80">3rd Main, Saraswathipuram, Mysuru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Culinary Pillars Grid -->
      <section class="bg-secondary/50 py-20 px-5 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="eyebrow">Our Philosophy</p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold mt-2">The Four Pillars of Our Kitchen</h2>
            <p class="text-sm text-muted-foreground mt-3">Why dining at Cucina Fresca feels like a culinary journey across Italy.</p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            <div class="rounded-2xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1.5 hover:shadow-xl">
              <div class="size-12 rounded-xl bg-accent/15 text-accent grid place-items-center text-2xl mb-5">🍝</div>
              <h3 class="font-display text-xl font-semibold mb-2">Handmade Egg Pasta</h3>
              <p class="text-xs leading-relaxed text-muted-foreground">
                Crafted daily using 100% durum wheat semolina and fresh egg yolks for authentic al dente texture in Tagliatelle, Ravioli &amp; Lasagna.
              </p>
            </div>

            <div class="rounded-2xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1.5 hover:shadow-xl">
              <div class="size-12 rounded-xl bg-accent/15 text-accent grid place-items-center text-2xl mb-5">🍕</div>
              <h3 class="font-display text-xl font-semibold mb-2">72-Hour Dough</h3>
              <p class="text-xs leading-relaxed text-muted-foreground">
                Naturally leavened dough fermented slowly for 72 hours, then baked at 450°C in our stone oven for a crisp, airy crust.
              </p>
            </div>

            <div class="rounded-2xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1.5 hover:shadow-xl">
              <div class="size-12 rounded-xl bg-accent/15 text-accent grid place-items-center text-2xl mb-5">🇮🇹</div>
              <h3 class="font-display text-xl font-semibold mb-2">DOP Ingredients</h3>
              <p class="text-xs leading-relaxed text-muted-foreground">
                Imported San Marzano DOP tomatoes, Ligurian extra virgin olive oil, Parmigiano-Reggiano, and fresh basil grown locally.
              </p>
            </div>

            <div class="rounded-2xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1.5 hover:shadow-xl">
              <div class="size-12 rounded-xl bg-accent/15 text-accent grid place-items-center text-2xl mb-5">📱</div>
              <h3 class="font-display text-xl font-semibold mb-2">Smart QR Dining</h3>
              <p class="text-xs leading-relaxed text-muted-foreground">
                Sit at any table, scan the QR code to order, track live kitchen preparation, call staff, and pay without waiting in queue.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Meet Executive Chef Section -->
      <section class="py-20 px-5 lg:px-8 mx-auto max-w-7xl">
        <div class="rounded-3xl bg-[var(--espresso)] text-[var(--cream)] overflow-hidden shadow-2xl">
          <div class="grid lg:grid-cols-12 items-center">
            
            <div class="lg:col-span-5 aspect-square lg:aspect-auto h-full overflow-hidden">
              <img src="../assets/chef_d8sa3sgc.jpg" alt="Chef Marco Ferretti" class="size-full object-cover">
            </div>

            <div class="lg:col-span-7 p-8 lg:p-14 space-y-6">
              <p class="eyebrow">Culinary Leadership</p>
              <h2 class="font-display text-3xl sm:text-4xl font-bold text-accent">Meet Chef Marco Ferretti</h2>
              <p class="text-sm sm:text-base text-[var(--cream)]/80 leading-relaxed font-display italic">
                “Italian cooking is not about complex sauces or extravagant garnishes. It is about honoring three or four flawless ingredients and letting patience bring out their soul.”
              </p>
              <p class="text-sm text-[var(--cream)]/70 leading-relaxed">
                Trained in Bologna and Naples, Chef Marco brings over 15 years of authentic Italian cooking experience to Mysuru. He oversees every batch of pasta rolled, every pizza dough kneaded, and every gelato churned at Cucina Fresca.
              </p>
              <div class="pt-2 flex items-center gap-4">
                <a href="../menu/" class="rounded-full bg-accent px-6 py-3 text-xs font-bold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                  Taste Chef's Specials &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Stats Highlight Row -->
      <section class="py-16 border-y border-border bg-card px-5 lg:px-8">
        <div class="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p class="font-display text-4xl font-bold text-accent">4.8★</p>
            <p class="text-xs text-muted-foreground mt-1">1,264 Google Reviews</p>
          </div>
          <div>
            <p class="font-display text-4xl font-bold text-accent">12+</p>
            <p class="text-xs text-muted-foreground mt-1">Handmade Pasta Shapes</p>
          </div>
          <div>
            <p class="font-display text-4xl font-bold text-accent">450°C</p>
            <p class="text-xs text-muted-foreground mt-1">Stone Oven Temp</p>
          </div>
          <div>
            <p class="font-display text-4xl font-bold text-accent">72 Hours</p>
            <p class="text-xs text-muted-foreground mt-1">Slow Dough Leavening</p>
          </div>
        </div>
      </section>

      <!-- Call To Action -->
      <section class="py-20 px-5 lg:px-8 mx-auto max-w-4xl text-center">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready for an Authentic Italian Meal?</h2>
        <p class="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Visit us at Saraswathipuram, Mysuru or browse our full digital menu online right now.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a href="../menu/" class="rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-xl transition-transform hover:-translate-y-0.5">
            Explore Menu
          </a>
          <a href="../table/07/" class="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl transition-transform hover:-translate-y-0.5">
            Scan &amp; Order
          </a>
          <a href="../contact/" class="rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent">
            Find Location
          </a>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="bg-[var(--espresso)] text-[var(--cream)] py-12 border-t border-[var(--cream)]/10">
      <div class="mx-auto max-w-7xl px-5 lg:px-8 text-center text-sm text-[var(--cream)]/60">
        &copy; 2026 Cucina Fresca &middot; Saraswathipuram, Mysuru. All rights reserved.
      </div>
    </footer>
  </div>

  <script src="../assets/app.js"></script>
</body>
</html>
`;

fs.writeFileSync('d:/Cucina Fresca/about/index.html', aboutHtml, 'utf8');
console.log('Successfully created rich About page in d:/Cucina Fresca/about/index.html');
