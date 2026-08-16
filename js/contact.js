document.addEventListener('DOMContentLoaded', function () {
  function submitContact(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      showToast('Message sent! We\'ll reply within 24 hours.', 'success');
      e.target.reset();
      btn.textContent = orig;
      btn.disabled = false;
    }, 1400);
  }

  const cf = document.getElementById('contactForm');
  if (cf) cf.addEventListener('submit', submitContact);

  const pf = document.getElementById('partnershipForm');
  if (pf) pf.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…'; btn.disabled = true;
    setTimeout(() => {
      showToast('Partnership enquiry received! We\'ll be in touch shortly.', 'success');
      this.reset(); btn.textContent = 'Send Enquiry'; btn.disabled = false;
    }, 1400);
  });
});

// expose for inline onsubmit
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = 'Sending…'; btn.disabled = true;
  setTimeout(() => {
    showToast('Message sent! We\'ll reply within 24 hours.', 'success');
    e.target.reset(); btn.textContent = orig; btn.disabled = false;
  }, 1400);
}
