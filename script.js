
// Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after click
        const navList = document.getElementById('nav-list');
        const menuToggle = document.getElementById('menu-toggle');
        navList.classList.remove('open');
        menuToggle.textContent = '☰';
      });
    });

// Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      menuToggle.textContent = navList.classList.contains('open') ? '✕' : '☰';
    });

// Active section highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

// Live search
    const search = document.getElementById('search');
    const sectionsAll = document.querySelectorAll('section');
    search.addEventListener('input', () => {
      const term = search.value.toLowerCase();
      sectionsAll.forEach(sec => {
        sec.style.display = sec.textContent.toLowerCase().includes(term) ? 'block' : 'none';
      });
    });

// Theme toggle (default dark)
    const toggle = document.getElementById('mode-toggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      toggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    });
