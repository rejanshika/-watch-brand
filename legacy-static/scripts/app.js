/**
 * IST 1947 — Main Application Entry Point & Experience Orchestration
 * Time, Reimagined.
 */

import { PRODUCTS, COLLECTIONS } from './products.js';
import {
  CartManager,
  WatchInspector,
  SearchEngine,
  EscapementAudio,
  setAnatomyStep,
  setTimelineYear
} from './components.js';

// Global Namespace
window.IST = {
  cart: null,
  inspector: null,
  search: null,
  audio: null,
  activeFilter: 'all',
  setHeroWatch: setHeroWatch
};

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initLiveWatchHands();
  initHero3DShowcase();
  initCanvasSundial();
  initCustomCursor();
  initHeaderScroll();
  initMobileMenu();

  // Instantiate Component Controllers
  window.IST.cart = new CartManager();
  window.IST.inspector = new WatchInspector();
  window.IST.search = new SearchEngine();
  window.IST.audio = new EscapementAudio();

  // Render Dynamic Sections
  renderWatchWall('all');
  initWatchWallFilters();
  initAnatomyExplorer();
  initTimeline();
  initNewsletter();
  initSmoothScroll();
});

// ==========================================================================
// 1. Live Indian Standard Time (IST - UTC+5:30) Synchronizer
// ==========================================================================
function initLiveClock() {
  const clockEl = document.getElementById('istLiveClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format in Indian Standard Time
    const istTimeStr = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockEl.textContent = `${istTimeStr} IST · NEW DELHI`;
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 2. Interactive Canvas Radial Sundial & Escapement Geometry
// ==========================================================================
function initCanvasSundial() {
  const canvas = document.getElementById('sundialCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let angle = 0;

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600;
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.42;

    ctx.clearRect(0, 0, w, h);

    // Outer circle
    ctx.strokeStyle = 'rgba(17, 17, 17, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Secondary inner concentric circle
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2);
    ctx.stroke();

    // 24 Sundial Hour / Ray Markers (Konark Wheel Geometry)
    const spokes = 24;
    for (let i = 0; i < spokes; i++) {
      const currentAngle = (i * (Math.PI * 2 / spokes)) + angle;
      const x1 = cx + Math.cos(currentAngle) * (r * 0.72);
      const y1 = cy + Math.sin(currentAngle) * (r * 0.72);
      const x2 = cx + Math.cos(currentAngle) * r;
      const y2 = cy + Math.sin(currentAngle) * r;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = i % 4 === 0 ? 'rgba(169, 75, 44, 0.45)' : 'rgba(17, 17, 17, 0.15)';
      ctx.lineWidth = i % 4 === 0 ? 2 : 1;
      ctx.stroke();
    }

    // Rotating Escapement Pulse
    angle += 0.0015;
    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}

// ==========================================================================
// 3. Custom Desktop Cursor & Magnetic Microinteractions
// ==========================================================================
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  if (!dot || !outline) return;

  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    outline.animate({
      left: `${x}px`,
      top: `${y}px`
    }, { duration: 300, fill: 'forwards' });
  });

  // Attach hover styles to interactive elements
  const interactiveSelector = 'a, button, .gallery-watch-card, .collection-pavilion-card, .pillar-card, .timeline-year-btn';
  document.querySelectorAll(interactiveSelector).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Dark sections cursor color switch
  const darkSections = document.querySelectorAll('.hero-section, .anatomy-section, .timeline-section, .site-footer');
  darkSections.forEach(sec => {
    sec.addEventListener('mouseenter', () => document.body.classList.add('dark-mode-cursor'));
    sec.addEventListener('mouseleave', () => document.body.classList.remove('dark-mode-cursor'));
  });
}

// ==========================================================================
// 4. Header Scroll State
// ==========================================================================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================================================
// 5. Mobile Navigation Drawer
// ==========================================================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('closeMobileNavBtn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileDrawer) return;

  function toggle() {
    mobileDrawer.classList.toggle('active');
    document.body.classList.toggle('drawer-open');
  }

  menuBtn.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', toggle);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      document.body.classList.remove('drawer-open');
    });
  });
}

// ==========================================================================
// 6. Section 4: Render Watch Wall & Filter Controls
// ==========================================================================
function renderWatchWall(filter = 'all') {
  const track = document.getElementById('watchWallTrack');
  if (!track) return;

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'all') return true;
    return p.collection.toLowerCase() === filter.toLowerCase();
  });

  track.innerHTML = filtered.map(p => `
    <div class="gallery-watch-card" data-id="${p.id}">
      <div class="card-image-box" onclick="window.IST.inspector.open('${p.id}')">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
        <span class="card-collection-badge">${p.collection}</span>
        ${p.limitedEdition ? '<span class="card-limited-pill">1 of 100</span>' : ''}
      </div>
      <div class="card-details">
        <h4 class="card-title">${p.title}</h4>
        <p class="card-blurb">${p.editorialBlurb}</p>
        <div class="card-price-row">
          <span class="card-price">${p.priceFormatted}</span>
          <div class="card-btn-group">
            <button class="card-action-btn quick-inspect" onclick="window.IST.inspector.open('${p.id}')">Inspect</button>
            <button class="card-action-btn" onclick="window.IST.cart.addItem('${p.id}')" title="Add to Bag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initWatchWallFilters() {
  const tabs = document.querySelectorAll('.watchwall-filters .filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      window.IST.activeFilter = filter;
      renderWatchWall(filter);
    });
  });

  // Watch wall scroll arrows
  const prevBtn = document.getElementById('scrollWallLeft');
  const nextBtn = document.getElementById('scrollWallRight');
  const track = document.getElementById('watchWallTrack');

  if (prevBtn && track) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }
  if (nextBtn && track) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 7. Section 5: Technical Anatomy Explorer
// ==========================================================================
function initAnatomyExplorer() {
  const stepButtons = document.querySelectorAll('.anatomy-step-btn');
  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.dataset.step;
      setAnatomyStep(step);
    });
  });

  // Initial step
  setAnatomyStep('dial');
}

// ==========================================================================
// 8. Section 8: Vijay Historical Timeline
// ==========================================================================
function initTimeline() {
  const yearButtons = document.querySelectorAll('.timeline-year-btn');
  yearButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const year = btn.dataset.year;
      setTimelineYear(year);
    });
  });

  // Initial Year
  setTimelineYear('1983');
}

// ==========================================================================
// 9. Newsletter Subscription
// ==========================================================================
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const submitBtn = form.querySelector('button');
    if (!input || !input.value) return;

    submitBtn.textContent = 'Curated.';
    submitBtn.disabled = true;
    input.value = '';
    alert('Thank you for joining the IST 1947 Collector’s Journal. You will receive exclusive horological releases and private edition notifications.');
  });
}

// ==========================================================================
// 10. Smooth Scroll Anchors
// ==========================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==========================================================================
// 11. 3D Hero Watch Showcase Interactions & Parallax
// ==========================================================================
const HERO_WATCH_IMAGES = {
  'after-hours': 'assets/images/after-hours_cutout.png',
  'ranthambore-bagh': 'assets/images/ranthambore-bagh_cutout.png',
  '2026': 'assets/images/2026_cutout.png',
  'golden-hour': 'assets/images/golden-hour_cutout.png',
  '1983': 'assets/images/1983_cutout.png'
};

export function setHeroWatch(handle) {
  const tabs = document.querySelectorAll('.hero-switch-tab');
  tabs.forEach(tab => {
    if (tab.dataset.piece === handle) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const plate = document.getElementById('heroWatchPlate');
  if (plate) {
    plate.style.opacity = '0';
    plate.style.transform = 'scale(0.96)';
    setTimeout(() => {
      plate.src = HERO_WATCH_IMAGES[handle] || `assets/images/${handle}_1.jpg`;
      plate.style.opacity = '1';
      plate.style.transform = 'scale(1)';
    }, 200);
  }
}

function initHero3DShowcase() {
  const stage = document.getElementById('hero3dStage');
  const card = document.getElementById('heroWatchCard');
  const glare = document.getElementById('heroWatchGlare');
  if (!stage || !card) return;

  let bounds = stage.getBoundingClientRect();
  window.addEventListener('resize', () => {
    bounds = stage.getBoundingClientRect();
  });

  stage.addEventListener('mousemove', (e) => {
    bounds = stage.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const xPct = (mouseX / bounds.width) - 0.5; // -0.5 to 0.5
    const yPct = (mouseY / bounds.height) - 0.5;

    const tiltX = -yPct * 20; // degrees
    const tiltY = xPct * 20;  // degrees

    card.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(15px)`;

    if (glare) {
      const glareX = -50 + (xPct * 35);
      const glareY = -50 + (yPct * 35);
      glare.style.transform = `translate(${glareX.toFixed(1)}%, ${glareY.toFixed(1)}%) translateZ(40px)`;
    }
  });

  stage.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    if (glare) {
      glare.style.transform = `translate(-50%, -50%) translateZ(40px)`;
    }
  });
}

function initLiveWatchHands() {
  const hourHand = document.getElementById('liveHourHand');
  const minHand = document.getElementById('liveMinuteHand');
  if (!hourHand || !minHand) return;

  function updateHands() {
    const now = new Date();
    // Indian Standard Time
    const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const istDate = new Date(istString);

    const hours = istDate.getHours() % 12;
    const minutes = istDate.getMinutes();
    const seconds = istDate.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minDeg = (minutes * 6) + (seconds * 0.1);

    hourHand.style.transform = `rotate(${hourDeg.toFixed(1)}deg)`;
    minHand.style.transform = `rotate(${minDeg.toFixed(1)}deg)`;
  }

  updateHands();
  setInterval(updateHands, 1000);
}

