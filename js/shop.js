/* ══════════════════════════════════════════════════════
   OKERE SHEA · shop.js v3.0
   ══════════════════════════════════════════════════════ */

const products = [
  { id:'p1', name:'Organic Okere Shea Butter', category:'butter', price:24.99, image:'assets/images/38.png', images:['assets/images/38.png','assets/images/39.png','assets/images/40.png'], description:'100% pure, unrefined Nilotica shea butter. Cold-pressed and hand-crafted by the Okere Women\'s Cooperative.', ingredients:'100% Vitellaria nilotica shea butter', benefits:'Deep moisturising · Anti-inflammatory · Vitamin E rich · All skin types', usage:'Apply a small amount and massage gently. Daily use recommended.', impact:'Plants 1 shea tree · Funds 1 day of school', harvested_by:"Grace & the Okere Women's Cooperative", badge:'Best Seller', inStock:true },
  { id:'p2', name:'Unrefined Shea Oil', category:'oil', price:29.99, image:'assets/images/41.png', images:['assets/images/41.png','assets/images/42.png'], description:'Cold-pressed shea oil — lightweight, fast-absorbing. Ideal for hair, skin and massage.', ingredients:'100% Cold-pressed Vitellaria nilotica shea oil', benefits:'Fast absorption · Hair conditioning · Lightweight · Oleic-acid rich', usage:'Apply 2–3 drops to face or hair. Massage into scalp for deep conditioning.', impact:'Supports adult literacy programs', harvested_by:"Achieng & the Okere Collective", badge:'New', inStock:true },
  { id:'p3', name:'Whipped Shea Butter', category:'butter', price:28.99, image:'assets/images/43.png', images:['assets/images/43.png','assets/images/44.png'], description:'Luxuriously whipped for effortless application — melts on contact.', ingredients:'Vitellaria nilotica shea butter, Vitamin E', benefits:'Easy application · Stretch marks · Daily moisturiser · Dry skin', usage:'Scoop a small amount and massage into skin. Best after shower.', impact:'Supports shea tree reforestation', harvested_by:"The Okere Women's Collective", inStock:true },
  { id:'p4', name:'Shea Body Lotion', category:'body', price:19.99, image:'assets/images/45.png', images:['assets/images/45.png','assets/images/46.png'], description:'Lightweight, fast-absorbing daily lotion with Okere shea and locally sourced herbs.', ingredients:'Aqua, Vitellaria nilotica shea butter, glycerin, herbal extracts', benefits:'Lightweight · All-day moisture · Non-greasy', usage:'Apply to body after bathing. Suitable for daily use.', impact:'Empowers women collectors', harvested_by:'Sarah & the Okere Beauty Team', inStock:true },
  { id:'p5', name:'Shea & Herbal Balm', category:'body', price:16.99, image:'assets/images/47.png', images:['assets/images/47.png','assets/images/48.png'], description:'A healing balm of Okere shea and traditional herbs — used by the community for generations.', ingredients:'Vitellaria nilotica shea butter, herbal extracts, beeswax', benefits:'Healing · Soothing · Multi-purpose · Traditional', usage:'Apply to affected area. Use on lips, cuticles and dry patches.', impact:'Supports community health', harvested_by:'Elders of Okere Parish', inStock:true },
  { id:'p6', name:'Bulk Nilotica Shea — 5 kg', category:'bulk', price:99.99, image:'assets/images/49.png', images:['assets/images/49.png','assets/images/50.png'], description:'Premium grade bulk shea for cosmetic formulation. Fully traceable from Okere.', ingredients:'100% Vitellaria nilotica shea butter', benefits:'Cosmetic grade · Fully traceable · UNBS certified', usage:'Professional and industrial cosmetic use.', impact:'Direct community cooperative partnership', harvested_by:'Okere Shea Cooperative', badge:'Wholesale', inStock:true }
];

const blogPosts = [
  { id:'b1', title:'Harvest Season in Okere', excerpt:'Women gather at dawn with traditional songs — the shea season is a celebration of heritage.', date:'15 March 2026', category:'Harvest', readTime:'4 min', image:'assets/images/51.png', author:'Okere Team', content:'<p>The shea harvest in Okere is more than work — it\'s a community gathering rich with tradition.</p><h2>Togetherness</h2><p>Generations of women pass down knowledge through the harvest ritual, strengthening community bonds.</p>' },
  { id:'b2', title:'Protecting Our Shea Trees', excerpt:'How the cooperative is leading reforestation and conservation for future generations.', date:'2 February 2026', category:'Conservation', readTime:'5 min', image:'assets/images/52.png', author:'Donnas Ojok-Okello', content:'<p>Shea trees are the backbone of Okere\'s economy. The cooperative plants a new tree for every jar sold.</p>' },
  { id:'b3', title:'From Okere to the World', excerpt:'Our shea butter is now reaching skincare brands and consumers across four continents.', date:'10 January 2026', category:'Community', readTime:'3 min', image:'assets/images/53.png', author:'Grace Akello', content:'<p>From a small parish in Otuke to global markets — ethical partnerships are changing lives in Okere.</p>' }
];

const communityMembers = [
  { name:'Grace Akello',  role:'Lead Collector',  image:'assets/images/30.png', bio:'Harvesting shea for 20 years. Her daughter now attends school because of it.' },
  { name:'Sarah Adong',   role:'Quality Champion', image:'assets/images/32.png', bio:'Ensures every batch meets the highest standards of purity.' },
  { name:'Peter Okello',  role:'Processing Lead',  image:'assets/images/34.png', bio:'Cold-presses shea using techniques passed down for generations.' },
  { name:'Achieng Atim',  role:'Community Elder',  image:'assets/images/35.png', bio:'Shares traditional wisdom about shea\'s healing properties.' }
];

let cart     = JSON.parse(localStorage.getItem('okere-cart')     || '[]');
let wishlist = JSON.parse(localStorage.getItem('okere-wishlist') || '[]');

// ── DOM READY ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') { renderFeatured(); renderBlogPreview(); }
  if (page === 'shop.html')        { renderShop(); initFilters(); initSort(); }
  if (page === 'product-detail.html') renderDetail();
  if (page === 'cart.html')        renderCart();
  if (page === 'checkout.html')    { renderCheckout(); initCheckout(); }
  if (page === 'blog.html')        renderBlog();
  if (page === 'blog-post.html')   renderPost();
  if (page === 'about.html')       renderCommunity();
  if (page === 'gallery.html')     renderGallery();
  updateCartBadge();
});

// ── PRODUCT CARD ───────────────────────────────────────
function productCard(p) {
  return `
  <div class="product-card" data-id="${p.id}" data-cat="${p.category}">
    ${p.badge ? `<span class="product-card-badge">${p.badge}</span>` : ''}
    <div class="product-img-wrap">
      <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy"
        onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22260%22><rect fill=%22%23EAF3EE%22 width=%22300%22 height=%22260%22/><text fill=%22%232A5C45%22 x=%2270%22 y=%22138%22 font-size=%2218%22>Okere Shea</text></svg>'"/>
    </div>
    <div class="product-body">
      <div class="product-name">${p.name}</div>
      <div class="product-price">$${p.price.toFixed(2)}</div>
      <div class="product-tag">${p.impact}</div>
      <div class="product-actions">
        <button class="btn-cart" data-id="${p.id}">Add to Cart</button>
        <a href="product-detail.html?id=${p.id}" class="btn-view">Details</a>
      </div>
    </div>
  </div>`;
}

function attachCart() {
  document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const p = products.find(x => x.id === this.dataset.id);
      if (!p) return;
      addToCart(p);
      this.textContent = 'Added!';
      this.style.background = '#224a38';
      setTimeout(() => { this.textContent = 'Add to Cart'; this.style.background = ''; }, 1800);
    });
  });
}

// ── RENDER ─────────────────────────────────────────────
function renderFeatured() {
  const g = document.getElementById('featured-grid');
  if (g) { g.innerHTML = products.slice(0,4).map(productCard).join(''); attachCart(); }
}

function renderShop(list = products) {
  const g = document.getElementById('productGrid');
  if (!g) return;
  g.innerHTML = list.length ? list.map(productCard).join('') : '<p style="grid-column:1/-1;text-align:center;color:var(--ink-soft);padding:40px 0">No products found.</p>';
  attachCart();
}

function renderBlogPreview() {
  const g = document.getElementById('blog-preview');
  if (g) g.innerHTML = blogPosts.map(blogCard).join('');
}

function renderBlog() {
  const g = document.getElementById('blogGrid');
  if (g) g.innerHTML = blogPosts.map(blogCard).join('');
}

function blogCard(p) {
  return `
  <div class="blog-card">
    <div class="blog-img-wrap"><img class="blog-img" src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.style.display='none'"/></div>
    <div class="blog-body">
      <div class="blog-meta"><span class="blog-cat">${p.category}</span><span class="blog-date">${p.date}</span></div>
      <div class="blog-title">${p.title}</div>
      <p class="blog-excerpt">${p.excerpt}</p>
      <a href="blog-post.html?id=${p.id}" class="read-more">Read more &#8594;</a>
    </div>
  </div>`;
}

function renderPost() {
  const c = document.getElementById('blogPostContent');
  if (!c) return;
  const id = new URLSearchParams(location.search).get('id');
  const p  = blogPosts.find(x => x.id === id);
  if (!p) { c.innerHTML = '<p>Post not found. <a href="blog.html">Back to blog</a></p>'; return; }
  document.title = `${p.title} — Okere Shea`;
  c.innerHTML = `
    <div class="post-body-wrap">
      <div class="post-meta"><span>${p.date}</span><span>By ${p.author}</span><span>${p.readTime} read</span></div>
      <h1>${p.title}</h1>
      <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'"/>
      <div>${p.content}</div>
      <div style="margin-top:40px;padding-top:24px;border-top:1px solid var(--sand);display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <strong style="font-size:.85rem">Share:</strong>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}" target="_blank" class="btn btn-outline btn-sm">Facebook</a>
        <a href="https://wa.me/?text=${encodeURIComponent(p.title+' — '+location.href)}" target="_blank" class="btn btn-outline btn-sm">WhatsApp</a>
        <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(p.title)}" target="_blank" class="btn btn-outline btn-sm">X</a>
      </div>
      <a href="blog.html" style="display:inline-block;margin-top:28px;font-size:.875rem;font-weight:600;color:var(--green)">&larr; All Stories</a>
    </div>`;
}

function renderCommunity() {
  const g = document.getElementById('communityGrid');
  if (!g) return;
  g.innerHTML = communityMembers.map(m => `
    <div class="impact-card" style="text-align:center">
      <img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.style.display='none'"
        style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin:0 auto 16px;border:2px solid var(--sand)"/>
      <h3 style="font-size:1rem;margin-bottom:4px">${m.name}</h3>
      <p style="font-size:.78rem;font-weight:600;color:var(--gold);margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em">${m.role}</p>
      <p style="font-size:.85rem">${m.bio}</p>
    </div>`).join('');
}

// ── SHOP FILTERS / SORT ────────────────────────────────
function initFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const f = this.dataset.filter;
      renderShop(f === 'all' ? products : products.filter(p => p.category === f));
    });
  });
}

function initSort() {
  const s = document.getElementById('sortSelect');
  if (!s) return;
  s.addEventListener('change', function() {
    const sorted = [...products];
    if (this.value === 'low')  sorted.sort((a,b) => a.price - b.price);
    if (this.value === 'high') sorted.sort((a,b) => b.price - a.price);
    if (this.value === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
    const f = document.querySelector('[data-filter].active')?.dataset.filter || 'all';
    renderShop(f === 'all' ? sorted : sorted.filter(p => p.category === f));
  });
}

// ── CART ───────────────────────────────────────────────
function addToCart(product, qty = 1) {
  const ex = cart.find(i => i.id === product.id);
  if (ex) ex.quantity += qty; else cart.push({...product, quantity: qty});
  localStorage.setItem('okere-cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`${product.name} added to cart`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('okere-cart', JSON.stringify(cart));
  updateCartBadge(); renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(id); return; }
  localStorage.setItem('okere-cart', JSON.stringify(cart));
  updateCartBadge(); renderCart();
}

function cartTotal() { return cart.reduce((s,i) => s + i.price * i.quantity, 0); }
function cartCount() { return cart.reduce((s,i) => s + i.quantity, 0); }

function renderCart() {
  const c = document.getElementById('cartContent');
  if (!c) return;
  if (!cart.length) {
    c.innerHTML = `<div style="text-align:center;padding:80px 20px"><p style="font-size:2.5rem;margin-bottom:16px">&#128722;</p><h3 style="margin-bottom:10px">Your cart is empty</h3><p style="color:var(--ink-soft);margin-bottom:24px">Discover our premium shea collection</p><a href="shop.html" class="btn btn-primary">Shop Now</a></div>`;
    return;
  }
  c.innerHTML = `
    <div class="cart-layout">
      <div class="cart-box">
        ${cart.map(i => `
          <div class="cart-item">
            <img src="${i.image}" alt="${i.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22><rect fill=%22%23EAF3EE%22 width=%2280%22 height=%2280%22/></svg>'"/>
            <div><div class="cart-item-name">${i.name}</div><div class="cart-item-price">$${i.price.toFixed(2)}</div></div>
            <div class="qty-row">
              <button class="qty-btn" onclick="changeQty('${i.id}',-1)">−</button>
              <span style="font-weight:600;min-width:20px;text-align:center">${i.quantity}</span>
              <button class="qty-btn" onclick="changeQty('${i.id}',1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${i.id}')" aria-label="Remove">✕</button>
          </div>`).join('')}
      </div>
      <div class="order-panel">
        <h3>Order Summary</h3>
        <div class="order-row"><span>Subtotal</span><span>$${cartTotal().toFixed(2)}</span></div>
        <div class="order-row"><span>Shipping</span><span>Calculated at checkout</span></div>
        <div class="order-total-row"><span>Total</span><span style="color:var(--gold)">$${cartTotal().toFixed(2)}</span></div>
        <div class="order-note">Your order supports the Okere community</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:20px">
          <a href="checkout.html" class="btn btn-primary" style="text-align:center">Checkout</a>
          <a href="shop.html" class="btn btn-outline" style="text-align:center">Continue Shopping</a>
        </div>
      </div>
    </div>`;
}

function renderCheckout() {
  const el = document.getElementById('orderItems');
  if (!el) return;
  if (!cart.length) { el.innerHTML='<p>Cart is empty.</p>'; if(document.getElementById('orderTotal')) document.getElementById('orderTotal').textContent='$0.00'; return; }
  el.innerHTML = cart.map(i => `<div class="order-row"><span>${i.name} × ${i.quantity}</span><span>$${(i.price*i.quantity).toFixed(2)}</span></div>`).join('');
  if(document.getElementById('orderTotal')) document.getElementById('orderTotal').textContent = `$${cartTotal().toFixed(2)}`;
}

function initCheckout() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!cart.length) { showToast('Cart is empty', 'warning'); return; }
    showToast('Order placed! Thank you for supporting Okere.', 'success', 5000);
    localStorage.removeItem('okere-cart'); cart = []; updateCartBadge();
    setTimeout(() => location.href = 'index.html', 2500);
  });
}

// ── PRODUCT DETAIL ─────────────────────────────────────
function renderDetail() {
  const c = document.getElementById('productDetail');
  if (!c) return;
  const id = new URLSearchParams(location.search).get('id');
  const p  = products.find(x => x.id === id);
  if (!p) { c.innerHTML='<p>Product not found. <a href="shop.html">Browse shop</a></p>'; return; }
  document.title = `${p.name} — Okere Shea`;
  c.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;padding:20px 0 60px">
      <div>
        <div style="border-radius:20px;overflow:hidden;background:var(--cream)">
          <img id="mainImg" src="${p.image}" alt="${p.name}" style="width:100%;height:460px;object-fit:cover;display:block"/>
        </div>
        ${p.images.length>1 ? `<div style="display:flex;gap:8px;margin-top:10px">${p.images.map((img,i)=>`<img src="${img}" style="width:72px;height:72px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid ${i===0?'var(--green)':'var(--sand)'}" onclick="document.getElementById('mainImg').src='${img}';this.parentElement.querySelectorAll('img').forEach(x=>x.style.borderColor='var(--sand)');this.style.borderColor='var(--green)'" loading="lazy"/>`).join('')}</div>` : ''}
      </div>
      <div style="padding-top:8px">
        <h1 style="margin-bottom:12px">${p.name}</h1>
        <div style="font-size:1.9rem;font-weight:700;color:var(--gold);margin-bottom:14px;font-family:'Playfair Display',serif">$${p.price.toFixed(2)}</div>
        <div style="display:inline-block;background:var(--green-light);color:var(--green);font-size:.75rem;font-weight:600;padding:4px 12px;border-radius:6px;margin-bottom:20px">${p.impact}</div>
        <p style="margin-bottom:20px;line-height:1.8">${p.description}</p>
        <p style="font-size:.875rem;margin-bottom:20px"><strong>By:</strong> ${p.harvested_by}</p>
        <div style="margin-bottom:24px;padding:16px;background:var(--cream);border-radius:10px;border:1px solid var(--sand)">
          <p style="font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;color:var(--ink-mid)">How to Use</p>
          <p style="font-size:.9rem;margin:0;line-height:1.7">${p.usage}</p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="addToCart(products.find(x=>x.id==='${p.id}'));this.textContent='Added!';setTimeout(()=>this.textContent='Add to Cart',1800)">Add to Cart</button>
          <a href="https://wa.me/256700000000?text=I'd like to order: ${encodeURIComponent(p.name)}" target="_blank" class="btn" style="background:#25D366;color:#fff;border-color:#25D366">WhatsApp Order</a>
          <button onclick="navigator.share&&navigator.share({title:'${p.name}',url:location.href})" class="btn btn-outline">Share</button>
        </div>
      </div>
    </div>`;

  const rel = document.getElementById('relatedGrid');
  if (rel) {
    const r = products.filter(x => x.id !== p.id && x.category === p.category).slice(0,3);
    rel.innerHTML = r.length ? r.map(productCard).join('') : '<p style="text-align:center;grid-column:1/-1;color:var(--ink-soft)">More products coming soon.</p>';
    attachCart();
  }
}

// ── GALLERY ────────────────────────────────────────────
const allGalleryImages = [
  {src:'assets/images/1.png',cat:'community',alt:'Okere'},
  {src:'assets/images/2.png',cat:'community',alt:'Community'},
  {src:'assets/images/3.png',cat:'community',alt:'Women'},
  {src:'assets/images/4.png',cat:'products',alt:'Shea product'},
  {src:'assets/images/5.png',cat:'products',alt:'Premium packaging'},
  {src:'assets/images/6.png',cat:'process',alt:'Shea tree'},
  {src:'assets/images/7.png',cat:'process',alt:'Collection'},
  {src:'assets/images/8.png',cat:'process',alt:'Drying'},
  {src:'assets/images/9.png',cat:'process',alt:'Roasting'},
  {src:'assets/images/10.png',cat:'process',alt:'Grinding'},
  {src:'assets/images/11.png',cat:'process',alt:'Extraction'},
  {src:'assets/images/12.png',cat:'process',alt:'Purification'},
  {src:'assets/images/13.png',cat:'process',alt:'Packaging'},
  {src:'assets/images/14.png',cat:'community',alt:'Community member'},
  {src:'assets/images/18.png',cat:'community',alt:'Grace Akello'},
  {src:'assets/images/23.png',cat:'community',alt:'Sarah Adong'},
  {src:'assets/images/26.png',cat:'community',alt:'Okere life'},
  {src:'assets/images/27.png',cat:'process',alt:'Processing'},
  {src:'assets/images/30.png',cat:'community',alt:'Collectors'},
  {src:'assets/images/32.png',cat:'process',alt:'Harvest'},
  {src:'assets/images/34.png',cat:'community',alt:'Community'},
  {src:'assets/images/35.png',cat:'products',alt:'Shea jars'},
  {src:'assets/images/36.png',cat:'products',alt:'Packaging'},
  {src:'assets/images/37.png',cat:'community',alt:'Impact'},
  {src:'assets/images/38.png',cat:'products',alt:'Shea butter'},
  {src:'assets/images/39.png',cat:'products',alt:'Product'},
  {src:'assets/images/40.png',cat:'products',alt:'Detail'},
  {src:'assets/images/41.png',cat:'products',alt:'Shea oil'},
  {src:'assets/images/42.png',cat:'process',alt:'Oil'},
  {src:'assets/images/43.png',cat:'products',alt:'Whipped shea'},
  {src:'assets/images/44.png',cat:'products',alt:'Body butter'},
  {src:'assets/images/45.png',cat:'products',alt:'Lotion'},
  {src:'assets/images/46.png',cat:'process',alt:'Production'},
  {src:'assets/images/47.png',cat:'products',alt:'Balm'},
  {src:'assets/images/48.png',cat:'products',alt:'Balm detail'},
  {src:'assets/images/49.png',cat:'products',alt:'Bulk shea'},
  {src:'assets/images/50.png',cat:'process',alt:'Bulk'},
  {src:'assets/images/51.png',cat:'community',alt:'Harvest season'},
  {src:'assets/images/52.png',cat:'community',alt:'Trees'},
  {src:'assets/images/53.png',cat:'community',alt:'Journey'}
];

function renderGallery(filter = 'all') {
  const g = document.getElementById('galleryGrid');
  if (!g) return;
  const imgs = filter === 'all' ? allGalleryImages : allGalleryImages.filter(i => i.cat === filter);
  const srcs = imgs.map(i => i.src);
  initLightbox(srcs);

  g.innerHTML = imgs.map((img, idx) => `
    <div class="gallery-item" onclick="openLightbox('${img.src}',${idx})">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.parentElement.style.display='none'"/>
    </div>`).join('');

  document.querySelectorAll('[data-gcat]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-gcat]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderGallery(this.dataset.gcat);
    });
  });
}
