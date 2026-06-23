document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name')?.value?.trim();
            const email = document.getElementById('email')?.value?.trim();
            const message = document.getElementById('message')?.value?.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate sending
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('✅ Thank you for reaching out!\n\nWe\'ll get back to you within 24 hours.\n\nWith gratitude,\nThe Okere Team');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Partnership form
    const partnershipForm = document.getElementById('partnershipForm');
    if (partnershipForm) {
        partnershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const company = document.getElementById('companyName')?.value?.trim();
            const name = document.getElementById('contactName')?.value?.trim();
            const email = document.getElementById('contactEmail')?.value?.trim();
            
            if (!company || !name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('🤝 Thank you for your partnership interest!\n\nWe\'ll connect with you to discuss how we can work together.\n\nWith gratitude,\nThe Okere Team');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});