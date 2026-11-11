(() => {
  const controls = document.querySelector('.blog-filters');
  if (!controls) return;
  const buttons = Array.from(controls.querySelectorAll('[data-blog-filter]'));
  const entries = Array.from(document.querySelectorAll('.blog-entry'));
  const empty = document.getElementById('blog-empty');
  const status = document.getElementById('blog-filter-status');
  const categories = new Set(buttons.map(button => button.dataset.blogFilter));

  function showCategory(category, announce = false) {
    let visible = 0;
    entries.forEach(entry => {
      entry.hidden = category !== 'all' && entry.dataset.category !== category;
      if (!entry.hidden) visible += 1;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.blogFilter === category)));
    empty.hidden = visible !== 0;
    const label = buttons.find(button => button.dataset.blogFilter === category).textContent;
    empty.textContent = category === 'personal' ? 'No personal essays yet.' : 'No posts in this category yet.';
    if (announce) status.textContent = `${label}: ${visible} ${visible === 1 ? 'entry' : 'entries'}.`;
  }

  function categoryFromHash() {
    const category = location.hash.slice(1);
    return categories.has(category) ? category : 'all';
  }

  controls.hidden = false;
  showCategory(categoryFromHash());
  buttons.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.blogFilter;
    if (category === categoryFromHash()) showCategory(category, true);
    else location.hash = category;
  }));
  window.addEventListener('hashchange', () => showCategory(categoryFromHash(), true));
})();
