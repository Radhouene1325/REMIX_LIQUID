/**
 * Mobile Navigation Component
 * Touch-friendly, accessible mobile menu
 */

const MobileNav = (() => {
  const hamburger = document.querySelector('[data-hamburger]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuLinks = document.querySelectorAll('[data-mobile-menu] a');

  const toggle = () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isOpen);
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  };

  const close = () => {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  const init = () => {
    if (!hamburger) return;

    // Hamburger click
    hamburger.addEventListener('click', toggle);

    // Menu link clicks
    menuLinks.forEach(link => {
      link.addEventListener('click', close);
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // Click outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        close();
      }
    });
  };

  return { init };
})();

MobileNav.init();
