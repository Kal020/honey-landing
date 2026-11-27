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

  /* le problème que Honey App résout : une question ouverte à la fois, la capture suit.
     Défilement automatique quand la tuile est visible ; il s'arrête dès qu'on choisit une question. */
  var sol = document.querySelector('.sol');
  if (sol) {
    var rows = sol.querySelectorAll('li'), shots = sol.querySelectorAll('.sol-scr img');
    var pause = sol.querySelector('.sol-pause'), cur = 0, auto = false;
    var show = function (n) {
      cur = n;
      Array.prototype.forEach.call(rows, function (li, k) {
        li.classList.toggle('on', k === n);
        li.querySelector('button').setAttribute('aria-expanded', String(k === n));
        shots[k].classList.toggle('on', k === n);
      });
    };
    var setAuto = function (v) {
      auto = v;
      sol.classList.toggle('play', v);
      pause.setAttribute('aria-label', v ? 'Mettre le défilement en pause' : 'Reprendre le défilement');
      pause.firstElementChild.className = 'ph-light ph-' + (v ? 'pause' : 'play');
    };
    Array.prototype.forEach.call(rows, function (li, k) {
      li.querySelector('button').addEventListener('click', function () { setAuto(false); show(k); });
    });
    if ('IntersectionObserver' in window && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      /* la barre de progression sert de minuterie ; elle attend que la tuile soit visible et non survolée */
      sol.addEventListener('animationend', function (e) {
        if (auto && e.animationName === 'sol-t') show((cur + 1) % rows.length);
      });
      var seenSol = false, over = false;
      var hold = function () { sol.classList.toggle('hold', over || !seenSol); };
      sol.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { over = true; hold(); } });
      sol.addEventListener('pointerleave', function () { over = false; hold(); });
      new IntersectionObserver(function (en) { seenSol = en[0].isIntersecting; hold(); }, { threshold: 0.35 }).observe(sol);
      pause.hidden = false;
      pause.addEventListener('click', function () { setAuto(!auto); });
      hold();
      setAuto(true);
    }
  }

  /* éventail de photos : la suivante passe devant toutes les 5 s ; une action de la personne arrête le défilement */
  var fid = document.querySelector('.fid-ph');
  if (fid) {
    var pics = fid.querySelectorAll('.fid-st img'), ctl = fid.querySelector('.fid-ctl');
    var toggle = ctl.querySelector('[data-fid="0"]');
    var at = 0, timer = null, running = false, visible = false, hover = false;
    var place = function (n) {
      at = (n + pics.length) % pics.length;
      Array.prototype.forEach.call(pics, function (p, k) {
        var d = (k - at + pics.length) % pics.length;
        p.className = d === 0 ? 'front' : d === 1 ? 'right' : d === pics.length - 1 ? 'left' : 'back';
      });
    };
    var tickFid = function () {
      clearInterval(timer);
      timer = running && visible && !hover ? setInterval(function () { place(at + 1); }, 5000) : null;
    };
    var run = function (v) {
      running = v;
      toggle.setAttribute('aria-label', v ? 'Mettre le défilement en pause' : 'Reprendre le défilement');
      toggle.firstElementChild.className = 'ph-light ph-' + (v ? 'pause' : 'play');
      tickFid();
    };
    ctl.hidden = false;
    ctl.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      var d = Number(b.getAttribute('data-fid'));
      if (d) { place(at + d); run(false); } else run(!running);
    });
    Array.prototype.forEach.call(pics, function (p, k) {
      p.addEventListener('click', function () { if (k !== at) { place(k); run(false); } });
    });
    fid.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hover = true; tickFid(); } });
    fid.addEventListener('pointerleave', function () { hover = false; tickFid(); });
    if ('IntersectionObserver' in window && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; tickFid(); }, { threshold: 0.35 }).observe(fid);
      run(true);
    } else toggle.hidden = true;
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
