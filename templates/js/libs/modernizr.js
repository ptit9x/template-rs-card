/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgrepeatspace_bgrepeatround-boxshadow-cssall-cssanimations-cssgradients-csstransforms-csstransforms3d-csstransitions-opacity-rgba-textshadow ! */
!(function(e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function s() {
    let e;
    let t;
    let n;
    let s;
    let o;
    let i;
    let a;
    for (const f in x)
      if (x.hasOwnProperty(f)) {
        if (
          ((e = []),
          (t = x[f]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (s = r(t.fn, 'function') ? t.fn() : t.fn, o = 0; o < e.length; o++)
          (i = e[o]),
          (a = i.split('.')),
          a.length === 1
            ? (Modernizr[a[0]] = s)
            : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
            (Modernizr[a[0]][a[1]] = s)),
          y.push((s ? '' : 'no-') + a.join('-'));
      }
  }
  function o(e) {
    let t = w.className;
    const n = Modernizr._config.classPrefix || '';
    if ((C && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      const r = new RegExp(`(^|\\s)${n}no-js(\\s|$)`);
      t = t.replace(r, `$1${n}js$2`);
    }
    Modernizr._config.enableClasses &&
      ((t += ` ${n}${e.join(` ${n}`)}`),
      C ? (w.className.baseVal = t) : (w.className = t));
  }
  function i() {
    return typeof t.createElement !== 'function'
      ? t.createElement(arguments[0])
      : C
        ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
        : t.createElement.apply(t, arguments);
  }
  function a(e, t) {
    return !!~`${e}`.indexOf(t);
  }
  function f(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, '');
  }
  function d() {
    let e = t.body;
    return e || ((e = i(C ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function l(e, n, r, s) {
    let o;
    let a;
    let f;
    let l;
    const u = 'modernizr';
    const p = i('div');
    const c = d();
    if (parseInt(r, 10))
      for (; r--; )
        (f = i('div')), (f.id = s ? s[r] : u + (r + 1)), p.appendChild(f);
    return (
      (o = i('style')),
      (o.type = 'text/css'),
      (o.id = `s${u}`),
      (c.fake ? c : p).appendChild(o),
      c.appendChild(p),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(t.createTextNode(e)),
      (p.id = u),
      c.fake &&
        ((c.style.background = ''),
        (c.style.overflow = 'hidden'),
        (l = w.style.overflow),
        (w.style.overflow = 'hidden'),
        w.appendChild(c)),
      (a = n(p, e)),
      c.fake
        ? (c.parentNode.removeChild(c), (w.style.overflow = l), w.offsetHeight)
        : p.parentNode.removeChild(p),
      !!a
    );
  }
  function u(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  function p(e, t, n) {
    let s;
    for (const o in e)
      if (e[o] in t)
        return n === !1
          ? e[o]
          : ((s = t[e[o]]), r(s, 'function') ? u(s, n || t) : s);
    return !1;
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function(e, t) {
        return `-${t.toLowerCase()}`;
      })
      .replace(/^ms-/, '-ms-');
  }
  function m(t, r) {
    let s = t.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; s--; ) if (e.CSS.supports(c(t[s]), r)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in e) {
      for (var o = []; s--; ) o.push(`(${c(t[s])}:${r})`);
      return (
        (o = o.join(' or ')),
        l(`@supports (${o}) { #modernizr { position: absolute; } }`, function(
          e,
        ) {
          return getComputedStyle(e, null).position == 'absolute';
        })
      );
    }
    return n;
  }
  function g(e, t, s, o) {
    function d() {
      u && (delete j.style, delete j.modElem);
    }
    if (((o = r(o, 'undefined') ? !1 : o), !r(s, 'undefined'))) {
      const l = m(e, s);
      if (!r(l, 'undefined')) return l;
    }
    for (var u, p, c, g, h, v = ['modernizr', 'tspan']; !j.style; )
      (u = !0), (j.modElem = i(v.shift())), (j.style = j.modElem.style);
    for (c = e.length, p = 0; c > p; p++)
      if (
        ((g = e[p]),
        (h = j.style[g]),
        a(g, '-') && (g = f(g)),
        j.style[g] !== n)
      ) {
        if (o || r(s, 'undefined')) return d(), t == 'pfx' ? g : !0;
        try {
          j.style[g] = s;
        } catch (y) {}
        if (j.style[g] != h) return d(), t == 'pfx' ? g : !0;
      }
    return d(), !1;
  }
  function h(e, t, n, s, o) {
    const i = e.charAt(0).toUpperCase() + e.slice(1);
    let a = `${e} ${z.join(`${i} `)}${i}`.split(' ');
    return r(t, 'string') || r(t, 'undefined')
      ? g(a, t, s, o)
      : ((a = `${e} ${E.join(`${i} `)}${i}`.split(' ')), p(a, t, n));
  }
  function v(e, t, r) {
    return h(e, n, n, t, r);
  }
  var y = [];
  var x = [];
  const b = {
    _version: '3.2.0',
    _config: {
      classPrefix: '',
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0,
    },
    _q: [],
    on(e, t) {
      const n = this;
      setTimeout(function() {
        t(n[e]);
      }, 0);
    },
    addTest(e, t, n) {
      x.push({ name: e, fn: t, options: n });
    },
    addAsyncTest(e) {
      x.push({ name: null, fn: e });
    },
  };
  var Modernizr = function() {};
  (Modernizr.prototype = b), (Modernizr = new Modernizr());
  var w = t.documentElement;
  Modernizr.addTest('cssall', 'all' in w.style);
  var C = w.nodeName.toLowerCase() === 'svg';
  const S = b._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : [];
  (b._prefixes = S),
  Modernizr.addTest('cssgradients', function() {
    for (
      var e,
        t = 'background-image:',
        n = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        r = '',
        s = 0,
        o = S.length - 1;
      o > s;
      s++
    )
      (e = s === 0 ? 'to ' : ''),
      (r += `${t + S[s]}linear-gradient(${e}left top, #9f9, white);`);
    Modernizr._config.usePrefixes && (r += `${t}-webkit-${n}`);
    const a = i('a');
    const f = a.style;
    return (f.cssText = r), `${f.backgroundImage}`.indexOf('gradient') > -1;
  }),
  Modernizr.addTest('rgba', function() {
    const e = i('a').style;
    return (
      (e.cssText = 'background-color:rgba(150,255,150,.5)'),
      `${e.backgroundColor}`.indexOf('rgba') > -1
    );
  }),
  Modernizr.addTest('opacity', function() {
    const e = i('a').style;
    return (e.cssText = S.join('opacity:.55;')), /^0.55$/.test(e.opacity);
  });
  const T = 'CSS' in e && 'supports' in e.CSS;
  const _ = 'supportsCSS' in e;
  Modernizr.addTest('supports', T || _);
  const k = (b.testStyles = l);
  const P = 'Moz O ms Webkit';
  var z = b._config.usePrefixes ? P.split(' ') : [];
  b._cssomPrefixes = z;
  var E = b._config.usePrefixes ? P.toLowerCase().split(' ') : [];
  b._domPrefixes = E;
  const N = { elem: i('modernizr') };
  Modernizr._q.push(function() {
    delete N.elem;
  });
  var j = { style: N.elem.style };
  Modernizr._q.unshift(function() {
    delete j.style;
  });
  const A = (b.testProp = function(e, t, r) {
    return g([e], n, t, r);
  });
  Modernizr.addTest('textshadow', A('textShadow', '1px 1px')),
  (b.testAllProps = h),
  (b.testAllProps = v),
  Modernizr.addTest('cssanimations', v('animationName', 'a', !0)),
  Modernizr.addTest('bgrepeatround', v('backgroundRepeat', 'round')),
  Modernizr.addTest('bgrepeatspace', v('backgroundRepeat', 'space')),
  Modernizr.addTest('boxshadow', v('boxShadow', '1px 1px', !0)),
  Modernizr.addTest('csstransforms', function() {
    return (
      navigator.userAgent.indexOf('Android 2.') === -1 &&
        v('transform', 'scale(1)', !0)
    );
  }),
  Modernizr.addTest('csstransforms3d', function() {
    let e = !!v('perspective', '1px', !0);
    const t = Modernizr._config.usePrefixes;
    if (e && (!t || 'webkitPerspective' in w.style)) {
      let n;
      const r = '#modernizr{width:0;height:0}';
      Modernizr.supports
        ? (n = '@supports (perspective: 1px)')
        : ((n = '@media (transform-3d)'),
        t && (n += ',(-webkit-transform-3d)')),
      (n +=
            '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}'),
      k(r + n, function(t) {
        e = t.offsetWidth === 7 && t.offsetHeight === 18;
      });
    }
    return e;
  }),
  Modernizr.addTest('csstransitions', v('transition', 'all', !0)),
  s(),
  o(y),
  delete b.addTest,
  delete b.addAsyncTest;
  for (let O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
  e.Modernizr = Modernizr;
})(window, document);
