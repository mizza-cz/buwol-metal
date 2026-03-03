document.querySelectorAll('[data-acc-btn]').forEach((btn) => {
  const panel = btn.parentElement.querySelector('[data-acc-panel]');
  const icon = btn.querySelector('[data-acc-icon]');

  const expanded = btn.getAttribute('aria-expanded') === 'true';
  panel.classList.toggle('hidden', !expanded);
  if (icon) icon.textContent = expanded ? '−' : '+';

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('hidden', isOpen);
    if (icon) icon.textContent = isOpen ? '+' : '−';
  });
});
