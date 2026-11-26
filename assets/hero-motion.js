/* Accueil, souris seulement : curseur à ressort et boutons magnétiques.
   Une seule boucle requestAnimationFrame, qui s'arrête dès que tout est au repos. Réglages : hero.css.
   Principe du curseur inspiré de « Custom Cursor » (soralabs, 21st.dev), réécrit sans React. */
(function () {
  var nav = document.querySelector('.nav-h');
  var hero = document.querySelector('.hx');
  var css = getComputedStyle(document.documentElement);
  function k(name) { return parseFloat(css.getPropertyValue('--k-' + name)); }
  var STIFF = k('stiffness'), DAMP = k('damping'), MASS = k('mass');
  var MAGNET = k('magnet');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');

  function layer(cls, html) {
    var d = document.createElement('div');
    d.className = 'cur ' + cls;
    d.setAttribute('aria-hidden', 'true');
    d.innerHTML = html;
    document.body.appendChild(d);
    return d;
  }
  var dot = layer('cur-dot', '<i></i>');
  var ring = layer('cur-ring', '<i></i><b>Découvrir</b>');

  /* ressort amorti */
  function spring() { return { x: 0, v: 0, to: 0 }; }
  function step(s, dt) {
    s.v += (STIFF * (s.to - s.x) - DAMP * s.v) / MASS * dt;
    s.x += s.v * dt;
    if (Math.abs(s.to - s.x) < .001 && Math.abs(s.v) < .01) { s.x = s.to; s.v = 0; return false; }
    return true;
  }
  var rx = spring(), ry = spring();
  var raf = 0, last = 0;
  function tick(now) {
    /* la première image reçoit la durée d'une frame : now peut précéder le réveil */
    var dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60, busy = 0;
    last = now;
    /* pas de 4 ms au plus : l'intégration reste stable */
    for (var left = dt; left > 0; left -= .004) {
      var h = Math.min(left, .004);
      busy = step(rx, h) | step(ry, h);
    }
    ring.style.transform = 'translate3d(' + rx.x + 'px,' + ry.x + 'px,0)';
    raf = busy ? requestAnimationFrame(tick) : 0;
  }
  function wake() {
    if (!raf) { last = 0; raf = requestAnimationFrame(tick); }
  }

  var shown = false;
  function hide() {
    shown = false;
    dot.classList.remove('on');
    ring.classList.remove('on');
    document.documentElement.classList.remove('cur-on');
  }

  function move(e) {
    if (e.pointerType !== 'mouse' || calm.matches) return;
    var t = e.target;
    /* le curseur ne vit que sur l'en-tête et le hero */
    if (!nav.contains(t) && !hero.contains(t)) { if (shown) hide(); return; }
    var x = e.clientX, y = e.clientY;
    dot.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
    rx.to = x; ry.to = y;
    if (!shown) {
      shown = true;
      rx.x = x; ry.x = y;
      document.documentElement.classList.add('cur-on');
      dot.classList.add('on');
      ring.classList.add('on');
    }
    var isPhoto = !!t.closest('.hx-link');
    var isLink = !isPhoto && !!t.closest('a,button,summary');
    dot.classList.toggle('is-photo', isPhoto);
    ring.classList.toggle('is-photo', isPhoto);
    ring.classList.toggle('is-link', isLink);
    wake();
  }
  window.addEventListener('pointermove', move, { passive: true });
  document.documentElement.addEventListener('pointerleave', hide);
  window.addEventListener('blur', hide);
  /* au clavier ou au défilement, on rend la main au curseur natif */
  window.addEventListener('scroll', function () { if (shown) hide(); }, { passive: true });

  /* boutons magnétiques et point d'entrée du remplissage */
  Array.prototype.forEach.call(document.querySelectorAll('.nav-h .acts .btn, .hx .cta .btn'), function (b) {
    function origin(e) {
      var r = b.getBoundingClientRect();
      b.style.setProperty('--px', (e.clientX - r.left) + 'px');
      b.style.setProperty('--py', (e.clientY - r.top) + 'px');
    }
    b.addEventListener('pointerenter', origin);
    b.addEventListener('pointermove', function (e) {
      if (calm.matches) return;
      var r = b.getBoundingClientRect();
      var dx = (e.clientX - r.left) / r.width - .5;
      var dy = (e.clientY - r.top) / r.height - .5;
      b.style.translate = (dx * 2 * MAGNET) + 'px ' + (dy * 2 * MAGNET) + 'px';
    });
    b.addEventListener('pointerleave', function (e) { origin(e); b.style.translate = ''; });
  });
})();
