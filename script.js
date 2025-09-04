// Theme toggle with localStorage
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (stored === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.setAttribute('data-theme', 'dark');
    if (btn) btn.textContent = '☀️';
  }
  btn && btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? '🌙' : '☀️';
  });
  // subtle float on hero card
  const heroCard = document.querySelector('.hero-card .card');
  if (heroCard) heroCard.classList.add('float');
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  // button ripple
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const r = document.createElement('span');
      r.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      r.style.left = `${e.clientX - rect.left}px`;
      r.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(r);
      setTimeout(() => r.remove(), 650);
    });
  });
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-expanded', String(!expanded));
  });
  // close on link click (mobile)
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');
  }));
})();

// Smooth scroll for anchor links
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  });
})();

// Current year in footer
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
})();

// Reveal on scroll
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => observer.observe(el));
})();

// Add stagger delays to containers
(function () {
  document.querySelectorAll('.stagger').forEach((wrap) => {
    Array.from(wrap.children).forEach((el, idx) => {
      if (el.classList && el.classList.contains('reveal')) {
        el.style.setProperty('--i', String(idx));
      }
    });
  });
})();

// Parallax for hero blobs
(function () {
  const container = document.querySelector('.hero-visuals');
  if (!container) return;
  const blobs = container.querySelectorAll('.blob');
  const onMove = (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    blobs.forEach((b, i) => {
      const strength = (i + 1) * 6;
      b.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  };
  container.addEventListener('mousemove', onMove);
})();

// 3D tilt for project cards
(function () {
  const cards = document.querySelectorAll('.grid .card');
  if (cards.length === 0) return;
  cards.forEach((card) => {
    let raf = 0;
    const handle = (e) => {
      const rect = card.getBoundingClientRect();
      const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
    };
    card.addEventListener('mousemove', handle);
    card.addEventListener('mouseleave', reset);
    card.addEventListener('blur', reset);
  });
})();

// Counters animation
(function () {
  const counterEls = document.querySelectorAll('.counter');
  if (counterEls.length === 0) return;

  const animate = (el) => {
    let target = Number(el.getAttribute('data-count') || '0');
    // If this is the technologies counter, derive from skills chips length
    if (el.id === 'techCount') {
      const skills = document.querySelectorAll('#skills .chips li');
      target = skills.length;
    }
    const durationMs = 1200;
    const start = performance.now();
    const startVal = 0;
    const step = (now) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const value = Math.floor(startVal + (target - startVal) * progress);
      el.textContent = String(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target.querySelector('.counter'));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.counter-item').forEach((item) => obs.observe(item));
})();

// Print CV
(function () {
  const btn = document.getElementById('printBtn');
  if (btn) btn.addEventListener('click', () => window.print());
})();

// Stagger indexes for skill chips
(function () {
  const chips = document.querySelectorAll('.chips li.reveal');
  if (chips.length === 0) return;
  chips.forEach((el, idx) => el.style.setProperty('--i', String(idx)));
  // also add lift class on pointerenter to force strong lift even on touchpads
  // remove strong lift logic per user request
})();

// Removed one-time wave animation per user request


