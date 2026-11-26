/* Accueil : en-tête compact, soulignement glissant, menu, diaporama des prestations.
   Le curseur (hero-motion.js) n'est chargé que pour une souris. Réglages : hero.css. */
(function () {
  var nav = document.querySelector('.nav-h');
  var hero = document.querySelector('.hx');
  if (!nav || !hero) return;

  var css = getComputedStyle(document.documentElement);
  function k(name) { return parseFloat(css.getPropertyValue('--k-' + name)); }
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');

  /* en-tête */
  function stick() {
    nav.classList.toggle('stuck', window.scrollY > k('stuck'));
    /* l'en-tête s'efface dès que les sections blanches prennent leur place sous le hero */
    var away = hero.getBoundingClientRect().bottom < window.innerHeight * k('hide');
    if (away && !nav.classList.contains('away')) {
      var open = nav.querySelector('.menu[open]');
      if (open) open.open = false;
    }
    nav.classList.toggle('away', away);
  }
  window.addEventListener('scroll', stick, { passive: true });
  window.addEventListener('resize', stick);
  stick();

  /* soulignement qui glisse */
  var links = nav.querySelector('.links');
  var current = links.querySelector('[aria-current]');
  var ind = document.createElement('span');
  ind.className = 'ind';
  ind.setAttribute('aria-hidden', 'true');
  links.appendChild(ind);
  function place(a) {
    if (!a || !a.offsetWidth) return;
    ind.style.transform = 'translateX(' + (a.offsetLeft + 12) + 'px) scaleX(' + (a.offsetWidth - 24) / 100 + ')';
    links.classList.add('has-ind');
  }
  function home() { place(current); }
  Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) {
    a.addEventListener('pointerenter', function () { place(a); });
    a.addEventListener('focus', function () { place(a); });
  });
  links.addEventListener('pointerleave', home);
  links.addEventListener('focusout', function (e) { if (!links.contains(e.relatedTarget)) home(); });
  window.addEventListener('resize', home);
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
    home();
    requestAnimationFrame(function () { ind.classList.add('go'); });
  });

  /* menu : se ferme avec Échap ou un clic à côté */
  var menu = nav.querySelector('.menu');
  nav.classList.add('can-hide');
  menu.addEventListener('toggle', function () { nav.classList.toggle('menu-open', menu.open); });
  document.addEventListener('click', function (e) { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });

  /* diaporama des prestations : la barre de progression (durée dans hero.css) donne le rythme */
  var slides = hero.querySelectorAll('.hx-slide');
  var ctl = hero.querySelector('.hx-ctl');
  var tabs = ctl.querySelectorAll('.hx-tab');
  var pause = ctl.querySelector('.hx-pause');
  var eye = hero.querySelector('.hx-eye');
  var at = 0, stopped = false, visible = true, held = false;
  ctl.hidden = false;

  /* les photos suivantes ne se chargent qu'après la page, ou au premier besoin */
  var loaded = false;
  function hydrate() {
    if (loaded) return;
    loaded = true;
    Array.prototype.forEach.call(hero.querySelectorAll('.hx-slide [data-srcset], .hx-slide [data-src]'), function (el) {
      if (el.dataset.srcset) el.srcset = el.dataset.srcset;
      if (el.dataset.src) el.src = el.dataset.src;
    });
  }
  if (document.readyState === 'complete') hydrate();
  else window.addEventListener('load', hydrate);

  function show(n) {
    hydrate();
    at = (n + slides.length) % slides.length;
    Array.prototype.forEach.call(slides, function (s, i) { s.classList.toggle('on', i === at); });
    Array.prototype.forEach.call(tabs, function (t, i) {
      if (i === at) t.setAttribute('aria-current', 'true');
      else t.removeAttribute('aria-current');
    });
    eye.textContent = slides[at].getAttribute('data-name');
    hero.style.setProperty('--bg', slides[at].getAttribute('data-bg'));
  }
  function sync() {
    hero.classList.toggle('is-paused', stopped || held || !visible || document.hidden);
  }
  Array.prototype.forEach.call(tabs, function (t, i) { t.addEventListener('click', function () { show(i); }); });
  ctl.addEventListener('animationend', function (e) {
    if (e.animationName === 'h-progress') show(at + 1);
  });
  pause.addEventListener('click', function () {
    stopped = !stopped;
    pause.setAttribute('aria-label', stopped ? 'Reprendre le diaporama' : 'Mettre le diaporama en pause');
    pause.firstElementChild.className = 'ph-light ' + (stopped ? 'ph-play' : 'ph-pause');
    sync();
  });
  /* au clavier, le diaporama attend tant qu'une prestation a le focus */
  ctl.addEventListener('focusin', function (e) { held = e.target !== pause && e.target.matches(':focus-visible'); sync(); });
  ctl.addEventListener('focusout', function () { held = false; sync(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; sync(); }).observe(hero);
  }
  document.addEventListener('visibilitychange', sync);
  sync();

  /* curseur : à la demande */
  if (fine.matches && !calm.matches) {
    var load = function () {
      var s = document.createElement('script');
      s.src = 'assets/hero-motion.js';
      document.body.appendChild(s);
    };
    if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 2000 });
    else setTimeout(load, 600);
  }
})();
