(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const stored = localStorage.getItem('intecgt-theme');
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (preferredDark ? 'dark' : 'light');

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('intecgt-theme', theme);
    metaTheme.setAttribute('content', theme === 'dark' ? '#04101e' : '#ffffff');
  };
  setTheme(initial);

  toggle?.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  const header = document.querySelector('.site-header');
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 12), {passive:true});

  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: .12});
  reveals.forEach(el => io.observe(el));

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.main-nav a')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, {rootMargin:'-35% 0px -55% 0px'});
  sections.forEach(s => spy.observe(s));

  document.getElementById('year').textContent = new Date().getFullYear();
})();
// Expandable service cards
const serviceButtons = document.querySelectorAll('.service-more');
serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('[data-service]');
    const isOpen = card.classList.contains('expanded');
    document.querySelectorAll('[data-service].expanded').forEach(openCard => {
      openCard.classList.remove('expanded');
      const openButton = openCard.querySelector('.service-more');
      if (openButton) { openButton.setAttribute('aria-expanded', 'false'); openButton.textContent = document.documentElement.lang === 'en' ? 'Learn more →' : 'Ver más →'; }
    });
    if (!isOpen) {
      card.classList.add('expanded');
      button.setAttribute('aria-expanded', 'true');
      button.textContent = document.documentElement.lang === 'en' ? 'Show less ↑' : 'Ver menos ↑';
    }
  });
});

// Quote form demo behavior (ready to connect to a Hostinger/PHP endpoint)
const quoteForm = document.querySelector('[data-quote-form]');
if (quoteForm) {
  const params = new URLSearchParams(location.search);
  const type = params.get('tipo');
  const typeSelect = quoteForm.querySelector('[name="tipo"]');
  if (type && typeSelect) typeSelect.value = type;
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = quoteForm.querySelector('.form-status');
    if (status) {
      status.textContent = '¡Listo! El formulario quedó preparado. Antes de publicarlo conectaremos el envío con tu cuenta de Hostinger.';
      status.classList.add('show');
    }
  });