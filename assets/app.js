/**
 * Cucina Fresca - Main Client Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Cucina Fresca Interactive Script Loaded.');

  // --- 1. TOAST NOTIFICATION SYSTEM ---
  function showToast(message, type = 'info') {
    let container = document.getElementById('cf-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cf-toast-container';
      container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `pointer-events-auto flex items-center justify-between gap-4 p-4 rounded-xl shadow-2xl border text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 ${
      type === 'success' 
        ? 'bg-[var(--espresso)] text-accent border-accent/30' 
        : 'bg-card text-card-foreground border-border'
    }`;
    
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="grid size-6 place-items-center rounded-full bg-accent/20 text-accent text-xs">✓</span>
        <span>${message}</span>
      </div>
      <button class="text-xs opacity-60 hover:opacity-100" onclick="this.parentElement.remove()">✕</button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- 2. GLOBAL CART STATE (LOCALSTORAGE) ---
  const CART_KEY = 'cucina_fresca_cart';

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadges();
  }

  function addToCart(item) {
    const cart = getCart();
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      cart.push({ ...item, quantity: item.quantity || 1 });
    }
    saveCart(cart);
    showToast(`Added "${item.name}" to order`, 'success');
  }

  function updateCartBadges() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    const badges = document.querySelectorAll('.cf-cart-badge');
    badges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });
  }

  updateCartBadges();

  // --- 3. TABLE 07 ORDER & SERVICE FLOW ---
  const isTablePage = window.location.pathname.includes('/table/');
  
  if (isTablePage || document.querySelector('h1')?.textContent.includes('Digital Menu') || document.querySelector('h1')?.textContent.includes('Table')) {
    console.log('Initializing Table 07 QR Order Interface...');
    
    // Tab switching
    const navButtons = document.querySelectorAll('nav button');
    const sections = {
      menu: document.querySelector('main > div'),
      cart: document.getElementById('cf-cart-tab'),
      service: document.getElementById('cf-service-tab'),
      track: document.getElementById('cf-track-tab')
    };

    // Handle button clicks in Table 07 sticky nav
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.textContent.trim().toLowerCase();
        navButtons.forEach(b => {
          b.className = 'shrink-0 border-b-2 px-5 py-4 text-xs uppercase tracking-widest transition-colors border-transparent text-muted-foreground';
        });
        btn.className = 'shrink-0 border-b-2 px-5 py-4 text-xs uppercase tracking-widest transition-colors border-accent text-accent';

        if (text === 'service') {
          showServiceModal();
        } else if (text === 'cart') {
          showCartModal();
        } else if (text === 'track') {
          showTrackModal();
        } else {
          showToast('Viewing Menu');
        }
      });
    });

    // Make "Add to order" buttons interactive on Table 07
    document.querySelectorAll('article').forEach(article => {
      const titleEl = article.querySelector('h3');
      const priceEl = article.querySelector('span.text-primary, span.font-display');
      const addBtn = article.querySelector('button');

      if (titleEl && addBtn) {
        addBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const name = titleEl.textContent.trim();
          const priceText = priceEl ? priceEl.textContent.replace(/[^0-9]/g, '') : '250';
          const price = parseInt(priceText, 10) || 250;
          addToCart({ name, price });
        });
      }
    });
  }

  // --- 4. SERVICE REQUEST HELPERS ---
  function showServiceModal() {
    const existing = document.getElementById('cf-service-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'cf-service-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4';
    modal.innerHTML = `
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl text-card-foreground animate-in fade-in zoom-in-95">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-display text-2xl font-bold text-accent">Table Service</h3>
          <button onclick="document.getElementById('cf-service-modal').remove()" class="text-muted-foreground hover:text-foreground text-xl">✕</button>
        </div>
        <p class="text-sm text-muted-foreground mb-6">Need assistance from our floor staff? Tap a service request below:</p>
        <div class="grid grid-cols-2 gap-3">
          <button class="cf-svc-btn p-4 rounded-xl border border-border bg-background hover:border-accent hover:bg-accent/10 transition flex flex-col items-center gap-2" data-service="Call Waiter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell size-6 text-accent"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .738-1.674C19.41 13.882 18 10.963 18 8A6 6 0 0 0 6 8c0 2.963-1.41 5.882-2.738 7.326z"></path></svg>
            <span class="text-xs font-semibold">Call Waiter</span>
          </button>
          <button class="cf-svc-btn p-4 rounded-xl border border-border bg-background hover:border-accent hover:bg-accent/10 transition flex flex-col items-center gap-2" data-service="Request Water">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet size-6 text-accent"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
            <span class="text-xs font-semibold">Request Water</span>
          </button>
          <button class="cf-svc-btn p-4 rounded-xl border border-border bg-background hover:border-accent hover:bg-accent/10 transition flex flex-col items-center gap-2" data-service="Request Bill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt size-6 text-accent"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 6v12"></path></svg>
            <span class="text-xs font-semibold">Request Bill</span>
          </button>
          <button class="cf-svc-btn p-4 rounded-xl border border-border bg-background hover:border-accent hover:bg-accent/10 transition flex flex-col items-center gap-2" data-service="Clean Table">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles size-6 text-accent"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
            <span class="text-xs font-semibold">Clean Table</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelectorAll('.cf-svc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        showToast(`Request sent: ${service}. Staff notified!`, 'success');
        modal.remove();
      });
    });
  }

  function showCartModal() {
    const existing = document.getElementById('cf-cart-modal');
    if (existing) existing.remove();

    const cart = getCart();
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

    const modal = document.createElement('div');
    modal.id = 'cf-cart-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4';
    
    let itemsHtml = cart.length === 0 
      ? '<p class="text-center text-muted-foreground py-8">Your cart is empty. Add delicious items from the menu!</p>'
      : cart.map((item, idx) => `
          <div class="flex items-center justify-between py-3 border-b border-border text-sm">
            <div>
              <p class="font-medium text-foreground">${item.name}</p>
              <p class="text-xs text-muted-foreground">₹${item.price} × ${item.quantity}</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-semibold text-accent">₹${item.price * item.quantity}</span>
              <button class="cf-remove-item text-xs text-destructive hover:underline" data-idx="${idx}">Remove</button>
            </div>
          </div>
        `).join('');

    modal.innerHTML = `
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl text-card-foreground">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-display text-2xl font-bold text-accent">Order Cart</h3>
          <button onclick="document.getElementById('cf-cart-modal').remove()" class="text-muted-foreground hover:text-foreground text-xl">✕</button>
        </div>
        <div class="max-h-60 overflow-y-auto pr-2 mb-4">
          ${itemsHtml}
        </div>
        <div class="border-t border-border pt-4 flex justify-between items-center mb-6">
          <span class="font-medium">Total Amount:</span>
          <span class="font-display text-2xl font-bold text-accent">₹${total}</span>
        </div>
        ${cart.length > 0 ? `
          <button id="cf-place-order-btn" class="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-bold hover:opacity-90 transition">
            Confirm & Place Order
          </button>
        ` : ''}
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelectorAll('.cf-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const currentCart = getCart();
        currentCart.splice(idx, 1);
        saveCart(currentCart);
        modal.remove();
        showCartModal();
      });
    });

    const placeBtn = modal.querySelector('#cf-place-order-btn');
    if (placeBtn) {
      placeBtn.addEventListener('click', () => {
        saveCart([]);
        modal.remove();
        showToast('Order successfully sent to kitchen! Kitchen is preparing your dishes.', 'success');
        showTrackModal();
      });
    }
  }

  function showTrackModal() {
    const existing = document.getElementById('cf-track-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'cf-track-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4';
    modal.innerHTML = `
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl text-card-foreground">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-display text-2xl font-bold text-accent">Order Status</h3>
          <button onclick="document.getElementById('cf-track-modal').remove()" class="text-muted-foreground hover:text-foreground text-xl">✕</button>
        </div>
        <div class="space-y-6 py-4">
          <div class="flex items-center gap-4">
            <div class="size-8 rounded-full bg-accent text-accent-foreground grid place-items-center font-bold text-sm">✓</div>
            <div>
              <p class="font-semibold text-sm">Order Sent</p>
              <p class="text-xs text-muted-foreground">Received by kitchen counter</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="size-8 rounded-full bg-accent/30 text-accent grid place-items-center font-bold text-sm animate-pulse">🔥</div>
            <div>
              <p class="font-semibold text-sm text-accent">Preparing</p>
              <p class="text-xs text-muted-foreground">Chef is cooking your fresh pasta & pizza</p>
            </div>
          </div>
          <div class="flex items-center gap-4 opacity-50">
            <div class="size-8 rounded-full bg-muted text-muted-foreground grid place-items-center font-bold text-sm">3</div>
            <div>
              <p class="font-semibold text-sm">On the Way</p>
              <p class="text-xs text-muted-foreground">Waiter bringing dishes to your table</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // --- 5. GALLERY LIGHTBOX ---
  if (window.location.pathname.includes('/gallery')) {
    document.querySelectorAll('main img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || 'Cucina Fresca Gallery';

        const lightbox = document.createElement('div');
        lightbox.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer animate-in fade-in';
        lightbox.innerHTML = `
          <div class="relative max-w-4xl max-h-[90vh]">
            <img src="${src}" alt="${alt}" class="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain">
            <p class="text-center text-white mt-3 text-sm font-display">${alt}</p>
          </div>
        `;
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
      });
    });
  }

  // --- 6. LOVABLE BADGE CLOSE HANDLER ---
  const badgeCloseBtn = document.getElementById('lovable-badge-close');
  if (badgeCloseBtn) {
    badgeCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const badge = document.getElementById('lovable-badge');
      if (badge) badge.remove();
    });
  }

  // --- 7. DYNAMIC SCROLL HEADER BACKGROUND ---
  const header = document.querySelector('header');
  if (header && header.classList.contains('fixed')) {
    function handleScroll() {
      if (window.scrollY > 40) {
        header.classList.add('bg-[var(--espresso)]/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-[var(--cream)]/15', 'py-3');
        header.classList.remove('bg-gradient-to-b', 'from-black/80', 'to-transparent', 'py-5');
      } else {
        header.classList.remove('bg-[var(--espresso)]/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-[var(--cream)]/15', 'py-3');
        header.classList.add('bg-gradient-to-b', 'from-black/80', 'to-transparent', 'py-5');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  }
});

