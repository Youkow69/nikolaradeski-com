// ===== INTRO ANIMATION =====
const greetings = ['Bonjour', 'Hello', 'Selam', 'Hola', 'Ciao', 'Hallo', 'Zdravo'];
const introEl = document.getElementById('intro');
const introWord = document.getElementById('intro-word');
let greetIndex = 0;

function cycleGreetings() {
  if (greetIndex < greetings.length) {
    introWord.style.animation = 'none';
    introWord.offsetHeight; // reflow
    introWord.textContent = greetings[greetIndex];
    introWord.style.animation = 'fadeWord 0.5s ease';
    greetIndex++;
    setTimeout(cycleGreetings, 600);
  } else {
    introEl.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

document.body.style.overflow = 'hidden';
setTimeout(cycleGreetings, 400);

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ===== SCROLL ANIMATIONS =====
const fadeEls = document.querySelectorAll('.section, .service-card, .testimonial-card, .portfolio-item, .career-item');
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeEls.forEach(el => observer.observe(el));

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.bottom-nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
