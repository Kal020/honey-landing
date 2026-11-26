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

  /* titres de fin écrits au clavier : [data-type] se tape lettre par lettre après le reste du titre.
     La place du texte est réservée dès le départ ; sans JavaScript ou en mouvement réduit, il reste entier. */
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !still) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-type]'), function (el) {
      var title = el.closest('h2');
      var after = title.textContent.trim() === el.textContent.trim() ? 600 : 1100;
      var chars = [];
      title.setAttribute('aria-label', title.textContent.replace(/\s+/g, ' ').trim());
      var words = el.textContent.split(' ');
      el.textContent = '';
      el.setAttribute('aria-hidden', 'true');
      words.forEach(function (word, w) {
        var box = el.appendChild(document.createElement('span'));
        box.className = 'tw';
        (word + (w < words.length - 1 ? ' ' : '')).split('').forEach(function (letter) {
          var c = document.createElement('span');
          c.className = 'tc';
          c.textContent = letter;
          chars.push(c);
          (letter === ' ' ? el : box).appendChild(c);
        });
      });
      var i = 0;
      function type() {
        if (i === 0) chars[0].classList.remove('start');
        else chars[i - 1].classList.remove('caret');
        chars[i].classList.add('on', 'caret');
        i += 1;
        /* léger rythme irrégulier, comme une vraie frappe */
        if (i < chars.length) setTimeout(type, 70 + Math.random() * 80);
      }
      var seen = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        seen.disconnect();
        chars[0].classList.add('start');
        setTimeout(type, after);
      }, { threshold: 0.6 });
      seen.observe(title);
    });
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
