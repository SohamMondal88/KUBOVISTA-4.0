const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.querySelector('#year');

if (yearEl) yearEl.textContent = new Date().getFullYear();

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.querySelectorAll('[data-tilt]').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rx = (0.5 - y) * 8;
    const ry = (x - 0.5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);
    const fullName = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const destination = formData.get('destination')?.toString().trim();

    if (!fullName || !email || !destination) {
      alert('Please complete all required fields.');
      return;
    }

    alert(`Thanks ${fullName}! Your ${destination} inquiry is received. We'll contact you at ${email}.`);
    bookingForm.reset();
  });
}
