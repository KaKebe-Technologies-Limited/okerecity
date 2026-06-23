// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    loadHeader();
    
    // Load Footer
    loadFooter();

    // Initialize other features
    initScrollEffects();
    initSmoothScroll();
});

// ===== Load Header =====
function loadHeader() {
    const headerContainer = document.getElementById('header');
    if (!headerContainer) return;
    
    fetch('header.html')
        .then(res => {
            if (!res.ok) throw new Error('Header not found');
            return res.text();
        })
        .then(html => {
            headerContainer.innerHTML = html;
            initHeader();
        })
        .catch(() => {
            // Fallback: inline header if file not found
            headerContainer.innerHTML = `
                <header class="header">
                    <div class="container header-inner">
                        <a href="index.html" class="logo">
                            <span class="logo-icon">🌿</span>
                            <span class="logo-text">Okere<span>Shea</span></span>
                        </a>
                        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                            <span></span><span></span><span></span>
                        </button>
                        <nav class="nav" id="mainNav">
                            <ul class="nav-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">Our Story</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="impact.html">Impact</a></li>
                                <li><a href="shea-knowledge.html">Shea Knowledge</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            <div class="nav-actions">
                                <a href="cart.html" class="cart-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="9" cy="21" r="1"/>
                                        <circle cx="20" cy="21" r="1"/>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                                    </svg>
                                    <span class="cart-badge" id="cartBadge">0</span>
                                </a>
                                <a href="partnership.html" class="btn-small">B2B</a>
                            </div>
                        </nav>
                    </div>
                </header>
            `;
            initHeader();
        });
}

// ===== Load Footer =====
function loadFooter() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;
    
    fetch('footer.html')
        .then(res => {
            if (!res.ok) throw new Error('Footer not found');
            return res.text();
        })
        .then(html => {
            footerContainer.innerHTML = html;
            initFooter();
        })
        .catch(() => {
            // Fallback: inline footer if file not found
            footerContainer.innerHTML = `
                <footer class="footer">
                    <div class="container">
                        <div class="footer-grid">
                            <div class="footer-brand">
                                <a href="index.html" class="logo">
                                    <span class="logo-icon">🌿</span>
                                    <span class="logo-text">Okere<span>Shea</span></span>
                                </a>
                                <p>Premium Nilotica shea butter from Okere City, Uganda.</p>
                            </div>
                            <div class="footer-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div class="footer-newsletter">
                                <h4>Join Our Community</h4>
                                <form class="newsletter-form" id="newsletterForm">
                                    <input type="email" placeholder="Your email" required />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p>&copy; 2025 Okere City Initiative. Made with ❤️ from Otuke District.</p>
                        </div>
                    </div>
                </footer>
            `;
            initFooter();
        });
}

// ===== Initialize Header =====
function initHeader() {
    // Mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const toggle = document.getElementById('menuToggle');
                const nav = document.getElementById('mainNav');
                if (toggle) toggle.classList.remove('active');
                if (nav) nav.classList.remove('open');
            }
        });
    });

    // Sticky header on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Update active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===== Initialize Footer =====
function initFooter() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value) {
                alert('Thank you for subscribing! 🎉\nYou\'ll hear from Okere soon.');
                input.value = '';
            }
        });
    }
}

// ===== Scroll Effects =====
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.impact-card, .product-card, .testimonial-card, .community-card, .project-card, .timeline-item, .use-item, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}