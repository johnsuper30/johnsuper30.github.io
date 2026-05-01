/* ===========================
   MARK JS AS READY
   Content visible by default; animations only apply once JS confirms running
=========================== */
document.documentElement.classList.add('js-ready');
document.body.classList.add('js-ready');

/* ===========================
   NAV — scroll state
=========================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ===========================
   MOBILE NAV TOGGLE
=========================== */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===========================
   HERO FADE-IN
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('visible');
    });
  }, 50);
});

/* ===========================
   SCROLL REVEAL
=========================== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===========================
   ACTIVE NAV LINK (scroll spy)
=========================== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--teal)' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => spyObserver.observe(s));
