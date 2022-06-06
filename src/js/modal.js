(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuAnchors = document.querySelectorAll('.menu-link');

  const onMenuCloseOrOpen = () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-active');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  }

  menuBtnRef.addEventListener('click', onMenuCloseOrOpen);

  mobileMenuAnchors.forEach(e => {
    e.addEventListener('click', onMenuCloseOrOpen)
  })
})();
