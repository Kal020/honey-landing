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

  /* photo qui s'agrandit au défilement (principe « Scroll Reveal Image », 21st.dev) */
  var band = document.querySelector('.bandfr');
  var bandCalm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (band && !bandCalm) {
    var tick = false;
    var grow = function () {
      tick = false;
      var r = band.getBoundingClientRect(), h = window.innerHeight;
      var p = (h - r.top) / (h * 0.62);
      band.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
    };
    var ask = function () { if (!tick) { tick = true; requestAnimationFrame(grow); } };
    window.addEventListener('scroll', ask, { passive: true });
    window.addEventListener('resize', ask);
    grow();
  }

  /* lueur douce qui suit le pointeur sur les tuiles (souris seulement) */
  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    Array.prototype.forEach.call(document.querySelectorAll('.bx'), function (t) {
      t.addEventListener('pointermove', function (e) {
        var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        t.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* barre d'action fixe sur téléphone : apparaît après l'ouverture, disparaît devant les appels à agir */
  if (document.querySelector('.hero, .phead')) {
    var dock = document.createElement('div');
    dock.className = 'dock';
    dock.innerHTML = '<a class="btn" href="https://honey-client.vercel.app">Commencer</a><a class="btn out" href="professionnels.html#formulaire">Ajouter mon institut</a>';
    document.body.appendChild(dock);
    var stops = Array.prototype.slice.call(document.querySelectorAll('.closing, .ft, form'));
    var dockTick = false;
    var dockUpdate = function () {
      dockTick = false;
      var h = window.innerHeight;
      var hide = stops.some(function (s) { var r = s.getBoundingClientRect(); return r.top < h && r.bottom > 0; });
      dock.classList.toggle('on', window.scrollY > 520 && !hide);
    };
    var dockAsk = function () { if (!dockTick) { dockTick = true; requestAnimationFrame(dockUpdate); } };
    window.addEventListener('scroll', dockAsk, { passive: true });
    window.addEventListener('resize', dockAsk);
    dockUpdate();
  }

  var els = Array.prototype.slice.call(document.querySelectorAll('.rv, .fr, .scr, .fmark, .bx'));
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
