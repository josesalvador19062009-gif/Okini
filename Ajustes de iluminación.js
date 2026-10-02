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