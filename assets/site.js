/* Honey : révélations au défilement et barre de navigation.
   Le contenu reste visible sans JavaScript ; tout est désactivé si l'utilisateur réduit les animations. */
(function () {
  var root = document.documentElement;
  var nav = document.querySelector('.nav');

  function onScroll() {
    if (nav) nav.classList.toggle('sc', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var els = Array.prototype.slice.call(document.querySelectorAll('.rv, .fr, .shot, .fmark'));
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (calm || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    root.classList.add('ready');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  els.forEach(function (el) { io.observe(el); });
  root.classList.add('ready');
})();
