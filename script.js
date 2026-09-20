/* =============================================================================
   Yahye Abdirashid Mohamed - Portfolio
   script.js  |  Vanilla JavaScript (ES2015+), keine Abhängigkeiten
   -----------------------------------------------------------------------------
   1) Mobile Navigation
   2) Kopfzeile, Scroll-Fortschritt und "nach oben"
   3) Aktiver Navigationslink
   4) Einblenden beim Scrollen (reveal)
   5) Zertifikate: Grossansicht im <dialog> mit Zoom und Blättern
   ============================================================================= */

(() => {
  'use strict';

  // Aktiviert die Einblend-Animationen nur, wenn JavaScript läuft
  document.documentElement.classList.add('js');
  window.addEventListener('error', () => document.documentElement.classList.remove('js'));

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  /* 1) Mobile Navigation ---------------------------------------------------- */
  const header = $('.site-header');
  const toggle = $('.menu-toggle');

  const setMenu = (open) => {
    if (!header || !toggle) return;
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
    toggle.textContent = open ? '×' : '☰';
  };

  if (toggle && header) {
    toggle.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
    $$('#hauptnav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  }

  /* 2) Kopfzeile, Scroll-Fortschritt und "nach oben" ------------------------- */
  const progress = $('.scroll-progress i');
  const toTop = $('.to-top');

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    if (header) header.classList.toggle('is-scrolled', y > 10);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
    if (toTop) toTop.classList.toggle('is-visible', y > 700);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* 3) Aktiver Navigationslink ---------------------------------------------- */
  const navLinks = $$('#hauptnav a[href^="#"]');
  const navTargets = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && navTargets.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('is-current', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    navTargets.forEach((target) => spy.observe(target));
  }

  /* 4) Einblenden beim Scrollen --------------------------------------------- */
  const revealItems = $$('.reveal');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach((el) => revealObserver.observe(el));
  }

  /* 5) Zertifikate: Grossansicht im Dialog ---------------------------------- */
  const dialog = $('.certificate-modal');
  const cards = $$('.certificate-card');

  if (dialog && cards.length) {
    const image = $('#modal-image');
    const title = $('#certificate-title');
    const counter = $('#modal-counter');
    const stage = $('#modal-stage');
    const openTab = $('#modal-open-tab');
    const zoomButton = $('#modal-zoom');
    let current = 0;

    const show = (index) => {
      current = (index + cards.length) % cards.length;
      const card = cards[current];
      const source = card.dataset.certificate || '';
      const label = card.dataset.title || '';
      if (image) {
        image.src = source;
        image.alt = label;
      }
      if (title) title.textContent = label;
      if (counter) counter.textContent = (current + 1) + ' / ' + cards.length;
      if (openTab) openTab.href = source;
      dialog.classList.remove('is-zoomed');
      if (zoomButton) zoomButton.setAttribute('aria-pressed', 'false');
      if (stage) {
        stage.scrollTop = 0;
        stage.scrollLeft = 0;
      }
    };

    const openDialog = (index) => {
      show(index);
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      document.body.classList.add('modal-open');
    };

    const closeDialog = () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
      document.body.classList.remove('modal-open');
    };

    const toggleZoom = () => {
      const zoomed = dialog.classList.toggle('is-zoomed');
      if (zoomButton) zoomButton.setAttribute('aria-pressed', String(zoomed));
    };

    cards.forEach((card, index) => card.addEventListener('click', () => openDialog(index)));
    $('.modal-close', dialog)?.addEventListener('click', closeDialog);
    zoomButton?.addEventListener('click', toggleZoom);
    $('#modal-prev')?.addEventListener('click', () => show(current - 1));
    $('#modal-next')?.addEventListener('click', () => show(current + 1));
    image?.addEventListener('click', toggleZoom);
    dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
    dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    });
  }
})();
