/* ══════════════════════════════════════════════════════
   OKERE SHEA · main.js v3.0
   ══════════════════════════════════════════════════════ */

// ── SHARED HEADER ──────────────────────────────────────
const HEADER_HTML = `
<header class="header" id="siteHeader">
  <div class="container header-inner">
    <a href="index.html" class="logo">Okere<span>Shea</span></a>
    <button class="menu-toggle" id="menuToggle" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav id="mainNav">
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">Story</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="impact.html">Impact</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="shea-knowledge.html">Shea Science</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="cart.html" class="cart-btn" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          <span class="cart-badge" id="cartBadge" style="display:none">0</span>
        </a>
        <a href="partnership.html" class="btn btn-primary btn-sm">B2B</a>
      </div>
    </nav>
  </div>
</header>`;

// ── SHARED FOOTER ──────────────────────────────────────
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">Okere<span>Shea</span></a>
        <p>Premium Nilotica shea butter from Okere City, Northern Uganda. Ethically sourced, community-crafted.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="#" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Explore</h5>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="impact.html">Our Impact</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="shea-knowledge.html">Shea Science</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Support</h5>
        <ul>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="partnership.html">B2B / Wholesale</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="admin/index.html">Admin</a></li>
        </ul>
      </div>
      <div class="footer-newsletter">
        <h5>Stay Connected</h5>
        <p>Harvest stories and updates from Okere.</p>
        <form class="nl-form" id="footerNewsletter" onsubmit="handleNewsletter(event)">
          <input type="email" placeholder="Your email" required/>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Okere City Initiative &mdash; Otuke District, Northern Uganda &nbsp;|&nbsp; <a href="admin/index.html">Admin</a></p>
    </div>
  </div>
</footer>
<a href="https://wa.me/256700000000" class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
<button class="scroll-top" id="scrollTop" aria-label="Back to top">&#8593;</button>
<div id="toastContainer" style="position:fixed;top:80px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none"></div>`;

// ── INIT ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initHeader();
  initHero();
  initReveal();
  initScrollTop();
  initCounters();
  updateCartBadge();
});

function injectLayout() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = HEADER_HTML;
  if (footerEl)  footerEl.outerHTML = FOOTER_HTML;

  // re-bind newsletter after footer inject
  document.querySelectorAll('.nl-form').forEach(f => {
    f.addEventListener('submit', handleNewsletter);
  });
}

// ── HEADER / NAV ───────────────────────────────────────
function initHeader() {
  const header = document.querySelector('.header');
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
    }));
  }

  if (header) {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 60), { passive: true });
  }

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
    else a.classList.remove('active');
  });
}

// ── HERO CAROUSEL ──────────────────────────────────────
function initHero() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  const prev   = document.getElementById('heroPrev');
  const next   = document.getElementById('heroNext');
  if (!slides.length) return;

  let cur = 0, timer;

  function go(n) {
    slides[cur].classList.remove('active');
    if (dots[cur]) dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    if (dots[cur]) dots[cur].classList.add('active');
  }

  function start() { timer = setInterval(() => go(cur + 1), 5500); }
  function stop()  { clearInterval(timer); }

  if (prev) prev.addEventListener('click', () => { stop(); go(cur - 1); start(); });
  if (next) next.addEventListener('click', () => { stop(); go(cur + 1); start(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { stop(); go(i); start(); }));
  start();
}

// ── SCROLL REVEAL ──────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── COUNTER ANIMATION ──────────────────────────────────
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const max = parseInt(el.dataset.target || 0);
      let   cur = 0;
      const step = max / 60;
      const tick = () => {
        cur = Math.min(cur + step, max);
        el.textContent = max >= 1000
          ? (cur/1000).toFixed(cur < max ? 1 : 0) + 'k+'
          : Math.floor(cur) + (cur >= max ? '+' : '');
        if (cur < max) requestAnimationFrame(tick);
      };
      tick();
      obs.unobserve(el);
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));
}

// ── SCROLL TOP ─────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── NEWSLETTER ─────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input?.value) { showToast('Subscribed! Thank you.', 'success'); input.value = ''; }
}

// ── TOAST ──────────────────────────────────────────────
function showToast(msg, type = 'info', ms = 3500) {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const t = document.createElement('div');
  const colors = { success:'#166534', error:'#991b1b', info:'#1e40af', warning:'#854d0e' };
  t.style.cssText = `background:#fff;border-left:3px solid ${colors[type]||colors.info};padding:13px 18px 13px 16px;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.12);font-size:.875rem;font-weight:500;color:#1A1914;pointer-events:all;display:flex;align-items:center;gap:10px;max-width:320px;`;
  t.innerHTML = `<span style="flex:1">${msg}</span><button onclick="this.parentElement.remove()" style="color:#6E6660;font-size:.9rem;cursor:pointer;border:none;background:none;">✕</button>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

// ── CART BADGE ─────────────────────────────────────────
function updateCartBadge() {
  const cart  = JSON.parse(localStorage.getItem('okere-cart') || '[]');
  const count = cart.reduce((s, i) => s + (i.quantity || 1), 0);
  document.querySelectorAll('#cartBadge, .cart-badge').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ── LIGHTBOX ───────────────────────────────────────────
let _lbImages = [], _lbIdx = 0;

function initLightbox(images) {
  _lbImages = images;
}

function openLightbox(src, idx = 0) {
  _lbIdx = idx;
  let lb = document.getElementById('lb');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lb'; lb.className = 'lightbox';
    lb.innerHTML = `<img id="lb-img" src="" alt=""/><button class="lightbox-close" onclick="closeLightbox()">✕</button><button class="lb-prev" onclick="lbNav(-1)">&#8592;</button><button class="lb-next" onclick="lbNav(1)">&#8594;</button>`;
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.body.appendChild(lb);
  }
  document.getElementById('lb-img').src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lb');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  if (!_lbImages.length) return;
  _lbIdx = (_lbIdx + dir + _lbImages.length) % _lbImages.length;
  document.getElementById('lb-img').src = _lbImages[_lbIdx];
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
