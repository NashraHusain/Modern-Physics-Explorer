document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu
    const navList = document.getElementById('nav-list');
    const menuToggle = document.getElementById('menu-toggle');
    navList.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuToggle.textContent = navList.classList.contains('open') ? '✕' : '☰';
  });
}

const observerOptions = {
  root: null,
  threshold: 0.6, // Trigger when 60% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Live search
const search = document.getElementById('search');
const sectionsAll = document.querySelectorAll('section');

search.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  sectionsAll.forEach(sec => {
    const isVisible = sec.innerText.toLowerCase().includes(term);
    sec.classList.toggle('hidden', !isVisible);
  });
});

// Theme toggle 
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '🌙' : '☀️';
  
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Load saved theme on startup
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggleBtn.textContent = '🌙';
  }
});
