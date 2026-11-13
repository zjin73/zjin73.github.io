(() => {
  const controls = document.querySelector('.blog-filters');
  if (!controls) return;
  const categoryButtons = Array.from(controls.querySelectorAll('[data-blog-filter]'));
  const languageButtons = Array.from(controls.querySelectorAll('[data-blog-language]'));
  const entries = Array.from(document.querySelectorAll('.blog-entry'));
  const empty = document.getElementById('blog-empty');
  const status = document.getElementById('blog-filter-status');
  const categories = new Set(categoryButtons.map(button => button.dataset.blogFilter));
  const languages = new Set(languageButtons.map(button => button.dataset.blogLanguage));

  function filtersFromHash() {
    const hash = location.hash.slice(1);
    // Preserve existing links such as /blogs/#technology.
    if (categories.has(hash)) return { category: hash, lang: 'all' };
    const params = new URLSearchParams(hash);
    return {
      category: categories.has(params.get('category')) ? params.get('category') : 'all',
      lang: languages.has(params.get('lang')) ? params.get('lang') : 'all'
    };
  }

  function applyFilters() {
    const { category, lang } = filtersFromHash();
    let visible = 0;
    entries.forEach(entry => {
      entry.hidden = !((category === 'all' || entry.dataset.category === category) &&
        (lang === 'all' || entry.dataset.language === lang));
      if (!entry.hidden) visible += 1;
    });
    categoryButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.blogFilter === category)));
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.blogLanguage === lang)));
    empty.hidden = visible !== 0;
    const categoryLabel = categoryButtons.find(button => button.dataset.blogFilter === category).textContent;
    const languageLabel = languageButtons.find(button => button.dataset.blogLanguage === lang).textContent;
    status.textContent = `${visible} ${visible === 1 ? 'entry' : 'entries'} / ${visible} 篇 · ${categoryLabel} · ${languageLabel}`;
  }

  function setFilter(field, value) {
    const filters = filtersFromHash();
    filters[field] = value;
    const nextHash = new URLSearchParams(filters).toString();
    if (location.hash.slice(1) === nextHash) applyFilters();
    else location.hash = nextHash;
  }

  controls.hidden = false;
  status.hidden = false;
  applyFilters();
  categoryButtons.forEach(button => button.addEventListener('click', () => setFilter('category', button.dataset.blogFilter)));
  languageButtons.forEach(button => button.addEventListener('click', () => setFilter('lang', button.dataset.blogLanguage)));
  window.addEventListener('hashchange', applyFilters);
})();
