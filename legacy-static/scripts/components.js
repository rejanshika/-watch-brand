/**
 * IST 1947 — Interactive Components & State Management
 * Haute Horlogerie Digital Exhibition Engine
 */

import { PRODUCTS, COLLECTIONS } from './products.js';

// ==========================================================================
// 1. Interactive Shopping Bag / Cart State
// ==========================================================================
export class CartManager {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('ist_cart') || '[]');
    this.initListeners();
    this.render();
  }

  save() {
    localStorage.setItem('ist_cart', JSON.stringify(this.items));
    this.render();
  }

  addItem(productId) {
    const product = PRODUCTS.find(p => p.id === productId || p.handle === productId);
    if (!product) return;

    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        handle: product.handle,
        title: product.title,
        collection: product.collection,
        price: product.price,
        image: product.images[0],
        quantity: 1
      });
    }
    this.save();
    this.openDrawer();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  }

  updateQuantity(productId, delta) {
    const item = this.items.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(productId);
    } else {
      this.save();
    }
  }

  openDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (drawer && backdrop) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.classList.add('drawer-open');
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.classList.remove('drawer-open');
    }
  }

  initListeners() {
    const backdrop = document.getElementById('cartBackdrop');
    const closeBtn = document.getElementById('closeCartBtn');
    const cartBtn = document.getElementById('headerCartBtn');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');

    if (backdrop) backdrop.addEventListener('click', () => this.closeDrawer());
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());
    if (cartBtn) cartBtn.addEventListener('click', () => this.openDrawer());

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.items.length === 0) return;
        checkoutBtn.textContent = 'Redirecting to Secure Payment...';
        checkoutBtn.disabled = true;
        setTimeout(() => {
          alert('Simulated Checkout: In production, this forwards directly to IST 1947 secure Shopify checkout with insured door-to-door transit across India.');
          checkoutBtn.textContent = 'Proceed to Insured Checkout';
          checkoutBtn.disabled = false;
        }, 1200);
      });
    }
  }

  render() {
    const totalCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update badge in header
    const badge = document.getElementById('headerCartCount');
    if (badge) {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    }

    // Update Drawer Content
    const container = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotalAmount');

    if (subtotalEl) {
      subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    }

    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.4;">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-primary);">Your Bag is Empty</p>
          <p style="font-size: var(--text-sm); max-width: 240px; margin: 0 auto;">Explore the Arka, Vanya, or Vijay collection to begin your curation.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.items.map(item => `
      <div class="cart-item-row" data-id="${item.id}">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item-info">
          <p class="telemetry-tag">${item.collection} Collection</p>
          <h5>${item.title}</h5>
          <p class="price" style="font-weight: 600; color: var(--text-primary); margin-top: 2px;">₹${item.price.toLocaleString('en-IN')}</p>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="window.IST.cart.updateQuantity(${item.id}, -1)">−</button>
            <span style="font-family: var(--font-mono); font-size: 0.85rem;">${item.quantity}</span>
            <button class="qty-btn" onclick="window.IST.cart.updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        <div>
          <button onclick="window.IST.cart.removeItem(${item.id})" style="color: var(--text-muted); font-size: 0.8rem; text-decoration: underline;">Remove</button>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 2. Watch Inspector & Loupe Zoom Modal
// ==========================================================================
export class WatchInspector {
  constructor() {
    this.currentProduct = null;
    this.activeImgIndex = 0;
    this.init();
  }

  init() {
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  open(productId) {
    const product = PRODUCTS.find(p => p.id === productId || p.handle === productId || p.title.toLowerCase() === String(productId).toLowerCase());
    if (!product) return;

    this.currentProduct = product;
    this.activeImgIndex = 0;

    const backdrop = document.getElementById('modalBackdrop');
    const titleEl = document.getElementById('modalTitle');
    const collectionEl = document.getElementById('modalCollection');
    const priceEl = document.getElementById('modalPrice');
    const descEl = document.getElementById('modalDesc');
    const mainImg = document.getElementById('modalMainImg');
    const thumbsContainer = document.getElementById('modalThumbs');
    const specsContainer = document.getElementById('modalSpecsList');
    const addBtn = document.getElementById('modalAddToCartBtn');

    if (titleEl) titleEl.textContent = product.title;
    if (collectionEl) collectionEl.textContent = `${product.collection} Series · ${product.limitedEdition ? 'Limited Edition of 100' : 'Individually Numbered'}`;
    if (priceEl) priceEl.textContent = product.priceFormatted;
    if (descEl) descEl.textContent = product.description;
    if (mainImg) {
      mainImg.src = product.images[0];
      mainImg.alt = product.title;
    }

    // Render Thumbnails
    if (thumbsContainer) {
      thumbsContainer.innerHTML = product.images.map((src, i) => `
        <button class="thumb-btn ${i === 0 ? 'active' : ''}" onclick="window.IST.inspector.setImage(${i})">
          <img src="${src}" alt="Angle ${i+1}">
        </button>
      `).join('');
    }

    // Render Specs Table
    if (specsContainer && product.specs) {
      specsContainer.innerHTML = `
        <div class="modal-spec-row"><span class="label">Case Diameter</span><span class="val">${product.specs.caseSize}</span></div>
        <div class="modal-spec-row"><span class="label">Case Thickness</span><span class="val">${product.specs.thickness}</span></div>
        <div class="modal-spec-row"><span class="label">Lug to Lug</span><span class="val">${product.specs.lugToLug}</span></div>
        <div class="modal-spec-row"><span class="label">Movement</span><span class="val">${product.specs.movement}</span></div>
        <div class="modal-spec-row"><span class="label">Crystal</span><span class="val">${product.specs.crystal}</span></div>
        <div class="modal-spec-row"><span class="label">Water Resistance</span><span class="val">${product.specs.waterResistance}</span></div>
        <div class="modal-spec-row"><span class="label">Dial & Indices</span><span class="val">${product.specs.dial}</span></div>
        <div class="modal-spec-row"><span class="label">Strap</span><span class="val">${product.specs.strap}</span></div>
        <div class="modal-spec-row"><span class="label">Caseback</span><span class="val">${product.specs.caseback}</span></div>
      `;
    }

    // Add to Cart Button Binding
    if (addBtn) {
      addBtn.onclick = () => {
        window.IST.cart.addItem(product.id);
        this.close();
      };
    }

    // Setup Loupe Zoom Effect on Main Image
    this.setupLoupe();

    if (backdrop) {
      backdrop.classList.add('active');
      document.body.classList.add('drawer-open');
    }
  }

  setImage(index) {
    if (!this.currentProduct || !this.currentProduct.images[index]) return;
    this.activeImgIndex = index;
    const mainImg = document.getElementById('modalMainImg');
    if (mainImg) {
      mainImg.src = this.currentProduct.images[index];
    }
    const thumbs = document.querySelectorAll('.thumb-btn');
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  setupLoupe() {
    const wrap = document.getElementById('modalImgWrap');
    const img = document.getElementById('modalMainImg');
    if (!wrap || !img) return;

    wrap.onmousemove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(2.2)';
    };

    wrap.onmouseleave = () => {
      img.style.transformOrigin = 'center center';
      img.style.transform = 'scale(1)';
    };
  }

  close() {
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('active');
      document.body.classList.remove('drawer-open');
    }
  }
}

// ==========================================================================
// 3. Technical Anatomy & Hotspots Explorer ("The Details Matter")
// ==========================================================================
export const ANATOMY_STEPS = {
  dial: {
    num: '01',
    name: 'The Dial Architecture',
    subtitle: 'Sunray Textures & Bregnagari Numerals',
    desc: 'Each dial is precision-milled with light-catching radial sunray brushing. Bespoke Bregnagari numerals combine classical Breguet proportions with Devanagari script, creating an unmistakably authentic Indian horological signature.',
    metrics: [
      { label: 'Numerals', value: 'Bregnagari Devanagari' },
      { label: 'Small Seconds', value: 'Konark Wheel / Bat & Ball' },
      { label: 'Luminescence', value: 'Japanese Super-LumiNova' },
      { label: 'Dial Finish', value: 'Sunray / Forged Carbon' }
    ],
    image: 'assets/images/after-hours_1.jpg'
  },
  crystal: {
    num: '02',
    name: 'Sapphire & Optical Clarity',
    subtitle: 'Anti-Reflective Domed Architecture',
    desc: 'Engineered from synthetic sapphire with a Mohs hardness rating of 9 (second only to diamond). Treated with multi-layer internal anti-reflective coating to eliminate glare even under harsh tropical sunlight.',
    metrics: [
      { label: 'Hardness', value: '9 Mohs Scale' },
      { label: 'Coating', value: 'Multi-layer AR Inside' },
      { label: 'Profile', value: 'Slightly Domed' },
      { label: 'Gasket', value: 'Hermetic I-Ring Seal' }
    ],
    image: 'assets/images/cloud-nine_2.jpg'
  },
  movement: {
    num: '03',
    name: 'The Mechanical Engine',
    subtitle: 'Miyota Automatic & Quartz Calibres',
    desc: 'Powered by meticulously tuned Miyota calibres. The Vijay series boasts the Miyota 82S7 Automatic movement with 21,600 vibrations per hour, 21 jewels, and a 48-hour power reserve with open-heart balance architecture.',
    metrics: [
      { label: 'Calibre', value: 'Miyota 82S7 / 1L45' },
      { label: 'Frequency', value: '21,600 VPH (3Hz)' },
      { label: 'Power Reserve', value: '48 Hours' },
      { label: 'Jewels', value: '21 Synthetic Rubies' }
    ],
    image: 'assets/images/1983_2.jpg'
  },
  case: {
    num: '04',
    name: '316L Surgical Steel Case',
    subtitle: 'Architectural Contours & Relief Engraving',
    desc: 'Machined from a solid block of 316L surgical grade stainless steel, featuring alternating mirror-polished chamfers and satin-brushed flanks. The caseback bears deep laser-relief carvings of the Konark Sun Temple or sanctuary state maps.',
    metrics: [
      { label: 'Material', value: '316L Stainless Steel' },
      { label: 'Diameter', value: '38mm / 40mm / 43mm' },
      { label: 'Water Rating', value: '5 ATM / 10 ATM' },
      { label: 'Serial Mark', value: 'Laser Engraved' }
    ],
    image: 'assets/images/golden-hour_3.jpg'
  },
  strap: {
    num: '05',
    name: 'Handcrafted Straps',
    subtitle: 'Italian Alligator Calf & Ballistic Nylon',
    desc: 'Arka models feature genuine Italian calf leather with deep alligator embossing and tone-on-tone edge finishing. Vanya field timepieces feature tactical hook-and-loop ballistic nylon built for rugged outdoor exploration.',
    metrics: [
      { label: 'Width', value: '20mm / 22mm' },
      { label: 'Mechanism', value: 'Quick-Release Spring Bars' },
      { label: 'Leather', value: 'Full-Grain Italian Calf' },
      { label: 'Buckle', value: 'Signed Steel Deployant' }
    ],
    image: 'assets/images/ranthambore-bagh_3.jpg'
  }
};

export function setAnatomyStep(stepKey) {
  const data = ANATOMY_STEPS[stepKey];
  if (!data) return;

  // Update Buttons active class
  document.querySelectorAll('.anatomy-step-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.step === stepKey);
  });

  // Update Spec Card
  const headingEl = document.getElementById('anatomyHeading');
  const bodyEl = document.getElementById('anatomyBody');
  const metricsEl = document.getElementById('anatomyMetrics');
  const viewImg = document.getElementById('anatomyVisual');

  if (headingEl) headingEl.textContent = `${data.num} — ${data.name}`;
  if (bodyEl) bodyEl.textContent = data.desc;
  if (viewImg) {
    viewImg.src = data.image;
    viewImg.alt = data.name;
  }

  if (metricsEl) {
    metricsEl.innerHTML = data.metrics.map(m => `
      <div class="metric-item">
        <span class="metric-label">${m.label}</span>
        <span class="metric-value">${m.value}</span>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 4. Vijay Cricket Victory Timeline (1947 — 2026)
// ==========================================================================
export const TIMELINE_DATA = {
  1947: {
    year: '1947',
    venue: '01.09.1947 · Birth of IST',
    title: 'Indian Standard Time Established',
    tag: 'FOUNDATION OF NATIONAL TIME',
    desc: 'On September 1, 1947, independent India established its own unified time coordinate — UTC+5:30. IST 1947 was born as a celebration of this moment when India began running on its own time.',
    watchHandle: 'after-hours',
    watchTitle: 'Arka: After Hours',
    specs: '38mm · Konark Wheel · Bregnagari Numerals',
    image: 'assets/images/after-hours_1.jpg'
  },
  1983: {
    year: '1983',
    venue: 'Lord’s Cricket Ground, London',
    title: 'The Miracle of 1983',
    tag: 'THE UNDERDOG TRIUMPH',
    desc: 'Defending just 183 against the mighty two-time world champion West Indies. Kapil Dev running backwards for Viv Richards. The night belief ignited a billion dreams and transformed cricket into India’s national heartbeat.',
    watchHandle: '1983',
    watchTitle: 'Vijay: 1983 Limited Edition',
    specs: '43mm Automatic · Bat-and-Ball Small Seconds · White Victory Strap',
    image: 'assets/images/1983_1.jpg'
  },
  2007: {
    year: '2007',
    venue: 'Johannesburg, South Africa',
    title: 'The Young Revolution',
    tag: 'INNUMERABLE HEARTBEATS',
    desc: 'Joginder Sharma to Misbah-ul-Haq. Sreesanth takes the catch at short fine leg. A fearless young Indian team shocks the world in the inaugural T20 World Cup, launching a golden modern sporting era.',
    watchHandle: '2007',
    watchTitle: 'Vijay: 2007 Limited Edition',
    specs: '43mm Automatic · 48h Power Reserve · Highveld Sky Blue Strap',
    image: 'assets/images/2007_1.jpg'
  },
  2011: {
    year: '2011',
    venue: 'Wankhede Stadium, Mumbai',
    title: 'A Nation’s 28-Year Longing',
    tag: 'THE IMMORTAL SIX',
    desc: '“Dhoni finishes off in style. A magnificent strike into the crowd. India lift the World Cup after 28 years!” The Wankhede floodlights illuminated millions of tears of joy as Sachin was carried around the ground.',
    watchHandle: '2011',
    watchTitle: 'Vijay: 2011 Limited Edition',
    specs: '43mm Automatic · Deep Navy Victory Finish · Numbered 1 of 100',
    image: 'assets/images/2011_1.jpg'
  },
  2024: {
    year: '2024',
    venue: 'Kensington Oval, Barbados',
    title: 'Tears of Triumph at Bridgetown',
    tag: 'THE UNBROKEN PROMISE',
    desc: 'Suryakumar Yadav’s boundary-line catch. Hardik Pandya holding his nerve in the final over. Rohit Sharma and Virat Kohli embracing with the Indian tricolour after a decade-long wait for ICC glory.',
    watchHandle: '2024',
    watchTitle: 'Vijay: 2024 Limited Edition',
    specs: '43mm Automatic · Saffron/Orange Accent · PVD Gunmetal Case',
    image: 'assets/images/2024_1.jpg'
  },
  2026: {
    year: '2026',
    venue: 'Defending Dynasty',
    title: 'The Legacy Confirmed',
    tag: 'DYNASTY DEFINED',
    desc: 'Defending the crown with ruthless poise and masterclass tactical execution. 2026 captures a victory that felt less like an arrival and more like an indisputable confirmation of dynasty.',
    watchHandle: '2026',
    watchTitle: 'Vijay: 2026 Limited Edition',
    specs: '43mm Automatic · Carbon Chapter Ring · Deep Navy Sailcloth',
    image: 'assets/images/2026_1.jpg'
  }
};

export function setTimelineYear(yearKey) {
  const data = TIMELINE_DATA[yearKey];
  if (!data) return;

  // Update Active Button
  document.querySelectorAll('.timeline-year-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.year === String(yearKey));
  });

  const eraTag = document.getElementById('timelineEraTag');
  const titleEl = document.getElementById('timelineTitle');
  const descEl = document.getElementById('timelineDesc');
  const watchTitle = document.getElementById('timelineWatchTitle');
  const watchSpecs = document.getElementById('timelineWatchSpecs');
  const imgEl = document.getElementById('timelineImg');
  const inspectBtn = document.getElementById('timelineInspectBtn');

  if (eraTag) eraTag.textContent = `${data.venue} · ${data.tag}`;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;
  if (watchTitle) watchTitle.textContent = data.watchTitle;
  if (watchSpecs) watchSpecs.textContent = data.specs;
  if (imgEl) {
    imgEl.src = data.image;
    imgEl.alt = data.title;
  }
  if (inspectBtn) {
    inspectBtn.onclick = () => window.IST.inspector.open(data.watchHandle);
  }
}

// ==========================================================================
// 5. Instant Live Search Engine
// ==========================================================================
export class SearchEngine {
  constructor() {
    this.modal = document.getElementById('searchModal');
    this.input = document.getElementById('searchInput');
    this.resultsContainer = document.getElementById('searchResultsGrid');
    this.closeBtn = document.getElementById('searchCloseBtn');
    this.searchBtn = document.getElementById('headerSearchBtn');
    this.init();
  }

  init() {
    if (this.searchBtn) this.searchBtn.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.input) {
      this.input.addEventListener('input', (e) => this.filter(e.target.value));
    }
  }

  open() {
    if (this.modal) {
      this.modal.classList.add('active');
      document.body.classList.add('drawer-open');
      if (this.input) {
        this.input.focus();
        this.filter('');
      }
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.classList.remove('drawer-open');
    }
  }

  filter(query) {
    const q = query.trim().toLowerCase();
    const matches = PRODUCTS.filter(p => {
      if (!q) return true;
      return p.title.toLowerCase().includes(q) ||
             p.collection.toLowerCase().includes(q) ||
             p.editorialBlurb.toLowerCase().includes(q) ||
             (p.tags && p.tags.some(t => t.toLowerCase().includes(q)));
    });

    if (!this.resultsContainer) return;

    if (matches.length === 0) {
      this.resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 0; color: var(--text-secondary);">
          <p style="font-family: var(--font-serif); font-size: 1.5rem;">No timepieces matched "${query}"</p>
          <p style="font-size: var(--text-sm); margin-top: 0.5rem;">Search by model (e.g. After Hours, 1983, Bagh) or collection (Arka, Vanya, Vijay).</p>
        </div>
      `;
      return;
    }

    this.resultsContainer.innerHTML = matches.map(p => `
      <div class="gallery-watch-card" style="flex: auto; cursor: pointer;" onclick="window.IST.inspector.open('${p.id}'); window.IST.search.close();">
        <div class="card-image-box">
          <img src="${p.images[0]}" alt="${p.title}">
          <span class="card-collection-badge">${p.collection}</span>
        </div>
        <div class="card-details">
          <h4 class="card-title">${p.title}</h4>
          <p class="card-blurb">${p.editorialBlurb}</p>
          <div class="card-price-row">
            <span class="card-price">${p.priceFormatted}</span>
            <button class="card-action-btn quick-inspect">Inspect</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 6. Web Audio Horological Escapement Synthesizer (Zero Latency)
// ==========================================================================
export class EscapementAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
  }

  toggle() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = !this.isPlaying;
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.classList.toggle('active', this.isPlaying);
      btn.title = this.isPlaying ? 'Mute Mechanical Escapement' : 'Enable Mechanical Sound';
    }

    if (this.isPlaying) {
      this.interval = setInterval(() => this.tick(), 1000);
      this.tick();
    } else {
      clearInterval(this.interval);
    }
  }

  tick() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // High frequency micro tick
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(3200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.018);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.025);
  }
}
