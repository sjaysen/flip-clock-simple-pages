(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const slider = document.querySelector('[data-width-slider]');
  const savedTheme = localStorage.getItem('flip-clock-theme') || 'light';
  const savedWidth = localStorage.getItem('flip-clock-width') || '900';

  root.dataset.theme = savedTheme;
  root.style.setProperty('--content-width', `${savedWidth}px`);
  if (slider) slider.value = savedWidth;

  const updateToggle = () => {
    if (toggle) toggle.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
  };

  toggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('flip-clock-theme', root.dataset.theme);
    updateToggle();
  });

  slider?.addEventListener('input', () => {
    root.style.setProperty('--content-width', `${slider.value}px`);
    localStorage.setItem('flip-clock-width', slider.value);
  });

  updateToggle();
})();
