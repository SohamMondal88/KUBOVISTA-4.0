const byId = (id) => document.getElementById(id);

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const yearEl = byId('year');
const backTop = byId('back-to-top');

if (yearEl) yearEl.textContent = String(new Date().getFullYear());

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

window.addEventListener('scroll', () => {
  if (!backTop) return;
  backTop.classList.toggle('show', window.scrollY > 420);
});

if (backTop) {
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.querySelectorAll('[data-tilt]').forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    const rx = (0.5 - y) * 9;
    const ry = (x - 0.5) * 9;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// DESTINATION FILTER + SEARCH
const destinationContainer = byId('destination-grid');
if (destinationContainer) {
  const cards = [...destinationContainer.querySelectorAll('[data-region]')];
  const search = byId('destination-search');
  const buttons = [...document.querySelectorAll('.filter-btn')];

  let activeRegion = 'all';

  const update = () => {
    const query = search?.value.trim().toLowerCase() || '';
    cards.forEach((card) => {
      const region = card.getAttribute('data-region');
      const text = card.textContent?.toLowerCase() || '';
      const regionPass = activeRegion === 'all' || activeRegion === region;
      const searchPass = text.includes(query);
      card.style.display = regionPass && searchPass ? '' : 'none';
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeRegion = btn.dataset.region || 'all';
      update();
    });
  });

  search?.addEventListener('input', update);
}

// PACKAGE ESTIMATOR
const estimatorForm = byId('estimator-form');
if (estimatorForm) {
  estimatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const tier = Number((byId('tier')?.value || '0'));
    const travelers = Number((byId('travelers')?.value || '1'));
    const nights = Number((byId('nights')?.value || '1'));
    const insurance = byId('insurance')?.checked ? 120 : 0;

    if (!tier || travelers < 1 || nights < 1) return;

    const estimate = tier * travelers * nights + insurance;
    const result = byId('estimate-result');
    if (result) {
      result.textContent = `Estimated package total: $${estimate.toLocaleString()}`;
    }
  });
}

// ACCORDION
[...document.querySelectorAll('.accordion-btn')].forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    if (item) item.classList.toggle('open');
  });
});

// CONTACT FORM
const bookingForm = byId('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = byId('form-status');

    const fields = {
      name: byId('name')?.value.trim() || '',
      email: byId('email')?.value.trim() || '',
      destination: byId('destination')?.value.trim() || '',
      people: byId('people')?.value.trim() || '',
      date: byId('date')?.value.trim() || ''
    };

    const validEmail = /^\S+@\S+\.\S+$/.test(fields.email);
    const valid = fields.name && fields.destination && fields.people && fields.date && validEmail;

    if (!status) return;

    if (!valid) {
      status.className = 'status error';
      status.textContent = 'Please fill all required fields with a valid email address.';
      return;
    }

    status.className = 'status success';
    status.textContent = `Thanks ${fields.name}! Your ${fields.destination} request was saved. We will contact you shortly.`;
    bookingForm.reset();
  });
}
