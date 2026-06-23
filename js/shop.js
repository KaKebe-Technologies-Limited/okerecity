// ===== Product Data =====
const products = [
    {
        id: 'shea-001',
        name: 'Organic Okere Shea Butter',
        category: 'butter',
        price: 24.99,
        image: 'assets/images/shea-butter-1.jpg',
        description: '100% pure, unrefined Nilotica shea butter from the heart of Okere. Cold-pressed and hand-crafted by the women of Okere Cooperative.',
        impact: '🌳 Plants 1 shea tree • 📚 Funds 1 day of school',
        harvested_by: 'Grace & the Okere Women\'s Cooperative',
        composition: {
            oleic_acid: '50-65%',
            vitamin_e: '3788 ppm',
            unsaponifiable: '17%+'
        },
        inStock: true
    },
    {
        id: 'shea-002',
        name: 'Unrefined Shea Oil',
        category: 'oil',
        price: 29.99,
        image: 'assets/images/shea-oil-1.jpg',
        description: 'Cold-pressed shea oil for deep moisture. Perfect for hair, skin, and massage. Retains all natural nutrients.',
        impact: '👩\u200d🌾 Supports adult literacy programs',
        harvested_by: 'Achieng & the Okere Collective',
        composition: {
            oleic_acid: '55-60%',
            vitamin_e: '3200 ppm'
        },
        inStock: true
    },
    {
        id: 'shea-003',
        name: 'Shea Body Lotion',
        category: 'body',
        price: 19.99,
        image: 'assets/images/shea-lotion-1.jpg',
        description: 'Lightweight, fast-absorbing lotion with Okere shea butter and locally sourced herbs. Leaves skin silky and nourished.',
        impact: '💪 Empowers women collectors',
        harvested_by: 'Sarah & the Okere Beauty Team',
        composition: {
            oleic_acid: '40-50%',
            vitamin_e: '1800 ppm'
        },
        inStock: true
    },
    {
        id: 'shea-004',
        name: 'Bulk Nilotica Shea - 5kg',
        category: 'bulk',
        price: 99.99,
        image: 'assets/images/bulk-shea.jpg',
        description: 'Premium grade bulk shea for cosmetic formulation. Ideal for skincare brands and manufacturers. Fully traceable from Okere.',
        impact: '🤝 Direct partnership with community cooperative',
        harvested_by: 'Okere Shea Cooperative',
        composition: {
            oleic_acid: '50-65%',
            vitamin_e: '3788 ppm',
            unsaponifiable: '17%+'
        },
        inStock: true
    },
    {
        id: 'shea-005',
        name: 'Whipped Shea Butter',
        category: 'butter',
        price: 28.99,
        image: 'assets/images/shea-butter-2.jpg',
        description: 'Luxuriously whipped shea butter for easy application. Perfect for daily moisturizing, stretch marks, and dry skin.',
        impact: '🌿 Supports shea tree reforestation',
        harvested_by: 'The Okere Women\'s Collective',
        composition: {
            oleic_acid: '50-65%',
            vitamin_e: '3788 ppm'
        },
        inStock: true
    },
    {
        id: 'shea-006',
        name: 'Shea & Herbal Balm',
        category: 'body',
        price: 16.99,
        image: 'assets/images/shea-lotion-1.jpg',
        description: 'A healing balm combining Okere shea with traditional herbs. Used for soothing skin, minor cuts, and muscle aches.',
        impact: '🌱 Supports community health programs',
        harvested_by: 'Elders of Okere Parish',
        composition: {
            oleic_acid: '45-55%',
            vitamin_e: '2000 ppm'
        },
        inStock: true
    }
];

// ===== Cart State =====
let cart = JSON.parse(localStorage.getItem('okere-cart')) || [];

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        renderFeaturedProducts();
        renderTestimonials();
    }
    
    if (currentPage === 'shop.html') {
        renderShopProducts();
        initFilters();
        initSort();
    }
    
    if (currentPage === 'product-detail.html') {
        renderProductDetail();
    }
    
    if (currentPage === 'cart.html') {
        renderCart();
    }
    
    if (currentPage === 'checkout.html') {
        renderCheckout();
        initCheckout();
    }
    
    if (currentPage === 'blog.html') {
        renderBlogPosts();
    }
    
    if (currentPage === 'blog-post.html') {
        renderBlogPost();
    }
    
    if (currentPage === 'about.html') {
        renderCommunityMembers();
    }
    
    // Update cart badge on all pages
    updateCartBadge();
});

// ===== Render Featured Products (Homepage) =====
function renderFeaturedProducts() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    
    const featured = products.slice(0, 4);
    grid.innerHTML = featured.map(p => createProductCard(p)).join('');
    attachCartListeners();
}

// ===== Render Shop Products =====
function renderShopProducts(productsToRender = products) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = productsToRender.map(p => createProductCard(p)).join('');
    attachCartListeners();
}

// ===== Create Product Card HTML =====
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><rect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/><text fill=%22%23999%22 x=%2250%22 y=%22160%22 font-size=%2224%22>Okere Shea</text></svg>'">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-meta">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <span class="impact-tag">${product.impact}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
                    <a href="product-detail.html?id=${product.id}" class="btn-detail">Details</a>
                </div>
            </div>
        </div>
    `;
}

// ===== Attach Cart Listeners =====
function attachCartListeners() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const product = products.find(p => p.id === id);
            if (product) {
                addToCart(product);
                this.textContent = '✓ Added';
                this.style.background = '#2D6A4F';
                setTimeout(() => {
                    this.textContent = 'Add to Cart';
                    this.style.background = '';
                }, 1500);
            }
        });
    });
}

// ===== Cart Functions =====
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('okere-cart', JSON.stringify(cart));
    updateCartBadge();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('okere-cart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        localStorage.setItem('okere-cart', JSON.stringify(cart));
        updateCartBadge();
        renderCart();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const count = getCartCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// ===== Render Cart Page =====
function renderCart() {
    const container = document.getElementById('cartContent');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="empty-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>But there's shea butter waiting for you!</p>
                <a href="shop.html" class="btn-primary">Shop Now</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22><rect fill=%22%23f0f0f0%22 width=%2280%22 height=%2280%22/><text fill=%22%23999%22 x=%2220%22 y=%2245%22 font-size=%2214%22>Shea</text></svg>'">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <span class="item-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <div class="item-quantity">
                        <button onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                    <button class="item-remove" onclick="removeFromCart('${item.id}')">✕</button>
                </div>
            `).join('')}
        </div>
        <div class="cart-total">
            Total: $${getCartTotal().toFixed(2)}
        </div>
        <div class="cart-actions">
            <a href="shop.html" class="btn-secondary" style="color:var(--primary);border-color:var(--primary);">Continue Shopping</a>
            <a href="checkout.html" class="btn-primary">Proceed to Checkout</a>
        </div>
    `;
}

// ===== Render Checkout =====
function renderCheckout() {
    const container = document.getElementById('orderItems');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('orderTotal').textContent = '$0.00';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(0,0,0,0.05);">
            <span>${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('orderTotal').textContent = `$${getCartTotal().toFixed(2)}`;
}

// ===== Init Checkout Form =====
function initCheckout() {
    const form = document.getElementById('checkoutForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('🎉 Thank you for your order!\n\nYour purchase supports the Okere community.\nYou\'ll receive a confirmation email shortly.');
            localStorage.removeItem('okere-cart');
            cart = [];
            updateCartBadge();
            window.location.href = 'index.html';
        });
    }
}

// ===== Product Detail =====
function renderProductDetail() {
    const container = document.getElementById('productDetail');
    if (!container) return;
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const product = products.find(p => p.id === id);
    
    if (!product) {
        container.innerHTML = '<p>Product not found. <a href="shop.html">Browse our collection</a>.</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22><rect fill=%22%23f0f0f0%22 width=%22500%22 height=%22500%22/><text fill=%22%23999%22 x=%22150%22 y=%22250%22 font-size=%2230%22>Okere Shea</text></svg>'">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <span class="impact-tag">${product.impact}</span>
            <div class="price">$${product.price.toFixed(2)}</div>
            <p>${product.description}</p>
            <p><strong>Harvested by:</strong> ${product.harvested_by}</p>
            ${product.composition ? `
                <div style="margin:1.5rem 0;padding:1rem;background:var(--cream);border-radius:8px;">
                    <h4 style="font-family:'Inter',sans-serif;font-weight:600;margin-bottom:0.5rem;">Composition</h4>
                    <ul style="list-style:disc;padding-left:20px;font-size:0.9rem;">
                        ${Object.entries(product.composition).map(([key, val]) => `
                            <li><strong>${key.replace('_', ' ').toUpperCase()}:</strong> ${val}</li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            <button class="btn-primary" onclick="addToCart(products.find(p=>p.id=='${product.id}')); this.textContent='✓ Added'; this.style.background='#1B4332'; setTimeout(()=>{this.textContent='Add to Cart'; this.style.background='';},1500);" style="margin-top:1rem;">
                Add to Cart
            </button>
            <a href="shop.html" style="display:inline-block;margin-left:1rem;color:var(--primary);">← Back to Shop</a>
        </div>
    `;
    
    // Render related products
    const relatedContainer = document.getElementById('relatedGrid');
    if (relatedContainer) {
        const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
        if (related.length > 0) {
            relatedContainer.innerHTML = related.map(p => createProductCard(p)).join('');
            attachCartListeners();
        } else {
            relatedContainer.innerHTML = '<p style="text-align:center;grid-column:1/-1;">More products coming soon from Okere.</p>';
        }
    }
}

// ===== Filters =====
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons.length) return;
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            if (filter === 'all') {
                renderShopProducts(products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                renderShopProducts(filtered);
            }
        });
    });
}

// ===== Sort =====
function initSort() {
    const select = document.getElementById('sortSelect');
    if (!select) return;
    
    select.addEventListener('change', function() {
        const sorted = [...products];
        switch(this.value) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default: // featured
                break;
        }
        renderShopProducts(sorted);
    });
}

// ===== Testimonials =====
const testimonials = [
    {
        name: 'Grace Akello',
        role: 'Lead Collector, Okere Cooperative',
        quote: 'This shea is more than income—it\'s dignity for my children. When I see our butter reaching the world, I know our future is bright.',
        image: 'assets/images/grace-collector.jpg'
    },
    {
        name: 'Sarah Adong',
        role: 'Quality Champion',
        quote: 'We use methods my grandmother taught me—cold-pressed, never heated. Every batch is tested by community women who know pure shea by touch.',
        image: 'assets/images/processing-1.jpg'
    },
    {
        name: 'Ojok Opio',
        role: 'Elder, Okere Parish',
        quote: 'When you buy Okere Shea, you\'re buying a piece of our cultural heritage, passed down through generations.',
        image: 'assets/images/community-group.jpg'
    }
];

function renderTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;
    
    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <p class="quote">"${t.quote}"</p>
            <div class="author">
                <img src="${t.image}" alt="${t.name}" onerror="this.style.display='none'">
                <div>
                    <div class="name">${t.name}</div>
                    <div class="role">${t.role}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Community Members =====
const communityMembers = [
    {
        name: 'Grace Akello',
        role: 'Lead Collector',
        image: 'assets/images/grace-collector.jpg',
        bio: 'Grace has been harvesting shea for 20 years. Now her daughter can go to school because of it.'
    },
    {
        name: 'Sarah Adong',
        role: 'Quality Champion',
        image: 'assets/images/processing-1.jpg',
        bio: 'Sarah ensures every batch of shea meets the highest standards of purity.'
    },
    {
        name: 'Peter Okello',
        role: 'Processing Lead',
        image: 'assets/images/harvest-1.jpg',
        bio: 'Peter uses techniques passed down through generations to cold-press our shea.'
    },
    {
        name: 'Achieng Atim',
        role: 'Community Elder',
        image: 'assets/images/community-group.jpg',
        bio: 'Achieng shares traditional wisdom about shea\'s healing properties.'
    }
];

function renderCommunityMembers() {
    const container = document.getElementById('communityGrid');
    if (!container) return;
    
    container.innerHTML = communityMembers.map(m => `
        <div class="community-card">
            <img src="${m.image}" alt="${m.name}" onerror="this.style.display='none'">
            <h3>${m.name}</h3>
            <div class="role">${m.role}</div>
            <p style="font-size:0.85rem;margin-top:0.5rem;">${m.bio}</p>
        </div>
    `).join('');
}

// ===== Blog Posts =====
const blogPosts = [
    {
        id: 'blog-1',
        title: 'Harvest Season Begins in Okere',
        excerpt: 'As the shea trees bloom, the women of Okere come together for the annual harvest.',
        date: 'March 15, 2025',
        image: 'assets/images/blog-harvest.jpg',
        content: `
            <p>The shea harvest season in Okere is a time of celebration and community. Women gather at dawn, singing traditional songs as they collect the fallen nuts.</p>
            <h2>A Tradition of Togetherness</h2>
            <p>For generations, the women of Okere have harvested shea together. It's more than work—it's a time to share stories, pass on knowledge, and strengthen community bonds.</p>
            <p>This year, we're proud to report that the harvest is abundant, thanks to conservation efforts and sustainable practices.</p>
        `
    },
    {
        id: 'blog-2',
        title: 'Shea Trees: Our Inheritance, Our Future',
        excerpt: 'How Okere is protecting shea trees for future generations.',
        date: 'February 2, 2025',
        image: 'assets/images/harvest-1.jpg',
        content: `
            <p>Shea trees are the backbone of Okere's economy and culture. But years of uncontrolled cutting for charcoal threatened their survival.</p>
            <p>Today, the Okere Shea Cooperative is leading the charge to protect and regenerate shea trees. With every jar sold, we plant a new tree.</p>
        `
    },
    {
        id: 'blog-3',
        title: 'From Okere to the World: Our Global Journey',
        excerpt: 'How Okere shea is making its mark on the global stage.',
        date: 'January 10, 2025',
        image: 'assets/images/processing-1.jpg',
        content: `
            <p>From a small parish in Otuke District to global markets—Okere shea is reaching customers worldwide.</p>
            <p>Partnerships with brands like Amika have helped us share our story and bring fair trade opportunities to our community.</p>
        `
    }
];

function renderBlogPosts() {
    const container = document.getElementById('blogGrid');
    if (!container) return;
    
    container.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}" onerror="this.style.display='none'">
            <div class="blog-content">
                <div class="blog-meta">${post.date}</div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
            </div>
        </div>
    `).join('');
}

function renderBlogPost() {
    const container = document.getElementById('blogPostContent');
    if (!container) return;
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const post = blogPosts.find(p => p.id === id);
    
    if (!post) {
        container.innerHTML = '<p>Post not found. <a href="blog.html">View all posts</a>.</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="blog-post-content">
            <div class="post-meta">${post.date}</div>
            <h1>${post.title}</h1>
            <img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.style.display='none'">
            <div class="post-body">${post.content}</div>
            <a href="blog.html" style="display:inline-block;margin-top:2rem;color:var(--primary);">← Back to Blog</a>
        </div>
    `;
}