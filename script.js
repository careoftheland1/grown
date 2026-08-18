(function () {
  const index = document.getElementById('animal-index');
  const landing = document.getElementById('landing');
  const landingDismiss = document.getElementById('landing-dismiss');
  const landingNames = document.getElementById('landing-names');
  if (landingNames) landingNames.innerHTML = products.map(product => `<span>${product.name}</span>`).join('');
  if (index) {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const renderIndex = filter => {
      const visibleProducts = filter === 'All' ? products : products.filter(product => product.taxon === filter);
      index.innerHTML = visibleProducts.map(product => `<article class="animal" data-slug="${product.slug}"><button type="button" class="animal-link" data-add="${product.slug}">${product.name}</button><button type="button" class="animal-image-btn" data-add="${product.slug}" aria-label="Add ${product.name} to cart"><img class="animal-image" src="${product.image}" alt="${product.name}"></button></article>`).join('');
      filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
      index.querySelectorAll('.animal').forEach(article => {
        const product = products.find(item => item.slug === article.dataset.slug);
        article.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => { window.cart.add(product, 1); window.cart.open(); }));
      });
    };
    const scrollParent = index.closest('main');
    filterButtons.forEach(button => button.addEventListener('click', () => {
      renderIndex(button.dataset.filter);
      scrollParent?.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }));
    renderIndex('All');
  }
  if (landing) { const themeColor = document.querySelector('meta[name="theme-color"]'); const dismiss = () => { landing.classList.add('is-gone'); landingDismiss?.classList.add('is-gone'); themeColor?.setAttribute('content', '#f8f6f2'); }; landingDismiss?.addEventListener('click', dismiss, { once: true }); document.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === 'Escape') dismiss(); }); landing.focus(); }
})();
