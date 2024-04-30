// https://esm.sh/stable/preact@10.19.6/denonext/preact.mjs
var D;
var a;
var Q;
var ne;
var x;
var z;
var X;
var $;
var Y;
var E = {};
var O = [];
var oe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var F = Array.isArray;
function b(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function Z(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function re(e, _, t) {
  var i, n, r2, l2 = {};
  for (r2 in _)
    r2 == "key" ? i = _[r2] : r2 == "ref" ? n = _[r2] : l2[r2] = _[r2];
  if (arguments.length > 2 && (l2.children = arguments.length > 3 ? D.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r2 in e.defaultProps)
      l2[r2] === void 0 && (l2[r2] = e.defaultProps[r2]);
  return S(e, l2, i, n, null);
}
function S(e, _, t, i, n) {
  var r2 = { type: e, props: _, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n ?? ++Q, __i: -1, __u: 0 };
  return n == null && a.vnode != null && a.vnode(r2), r2;
}
function H(e) {
  return e.children;
}
function W(e, _) {
  this.props = e, this.context = _;
}
function w(e, _) {
  if (_ == null)
    return e.__ ? w(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? w(e) : null;
}
function ie(e, _, t) {
  var i, n = e.__v, r2 = n.__e, l2 = e.__P;
  if (l2)
    return (i = b({}, n)).__v = n.__v + 1, a.vnode && a.vnode(i), G(l2, i, n, e.__n, l2.ownerSVGElement !== void 0, 32 & n.__u ? [r2] : null, _, r2 ?? w(n), !!(32 & n.__u), t), i.__v = n.__v, i.__.__k[i.__i] = i, i.__d = void 0, i.__e != r2 && ee(i), i;
}
function ee(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ee(e);
  }
}
function I(e) {
  (!e.__d && (e.__d = true) && x.push(e) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e, _, t, i = [], n = [];
  for (x.sort($); e = x.shift(); )
    e.__d && (t = x.length, _ = ie(e, i, n) || _, t === 0 || x.length > t ? (R(i, _, n), n.length = i.length = 0, _ = void 0, x.sort($)) : _ && a.__c && a.__c(_, O));
  _ && R(i, _, n), A.__r = 0;
}
function _e(e, _, t, i, n, r2, l2, u, c2, s, p3) {
  var o2, m, f, h2, k3, v2 = i && i.__k || O, d2 = _.length;
  for (t.__d = c2, le(t, _, v2), c2 = t.__d, o2 = 0; o2 < d2; o2++)
    (f = t.__k[o2]) != null && typeof f != "boolean" && typeof f != "function" && (m = f.__i === -1 ? E : v2[f.__i] || E, f.__i = o2, G(e, f, m, n, r2, l2, u, c2, s, p3), h2 = f.__e, f.ref && m.ref != f.ref && (m.ref && V(m.ref, null, f), p3.push(f.ref, f.__c || h2, f)), k3 == null && h2 != null && (k3 = h2), 65536 & f.__u || m.__k === f.__k ? c2 = te(f, c2, e) : typeof f.type == "function" && f.__d !== void 0 ? c2 = f.__d : h2 && (c2 = h2.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = c2, t.__e = k3;
}
function le(e, _, t) {
  var i, n, r2, l2, u, c2 = _.length, s = t.length, p3 = s, o2 = 0;
  for (e.__k = [], i = 0; i < c2; i++)
    l2 = i + o2, (n = e.__k[i] = (n = _[i]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? S(null, n, null, null, null) : F(n) ? S(H, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? S(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = e, n.__b = e.__b + 1, u = ue(n, t, l2, p3), n.__i = u, r2 = null, u !== -1 && (p3--, (r2 = t[u]) && (r2.__u |= 131072)), r2 == null || r2.__v === null ? (u == -1 && o2--, typeof n.type != "function" && (n.__u |= 65536)) : u !== l2 && (u === l2 + 1 ? o2++ : u > l2 ? p3 > c2 - l2 ? o2 += u - l2 : o2-- : u < l2 ? u == l2 - 1 && (o2 = u - l2) : o2 = 0, u !== i + o2 && (n.__u |= 65536))) : (r2 = t[l2]) && r2.key == null && r2.__e && !(131072 & r2.__u) && (r2.__e == e.__d && (e.__d = w(r2)), B(r2, r2, false), t[l2] = null, p3--);
  if (p3)
    for (i = 0; i < s; i++)
      (r2 = t[i]) != null && !(131072 & r2.__u) && (r2.__e == e.__d && (e.__d = w(r2)), B(r2, r2));
}
function te(e, _, t) {
  var i, n;
  if (typeof e.type == "function") {
    for (i = e.__k, n = 0; i && n < i.length; n++)
      i[n] && (i[n].__ = e, _ = te(i[n], _, t));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function se(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (F(e) ? e.some(function(t) {
    se(t, _);
  }) : _.push(e)), _;
}
function ue(e, _, t, i) {
  var n = e.key, r2 = e.type, l2 = t - 1, u = t + 1, c2 = _[t];
  if (c2 === null || c2 && n == c2.key && r2 === c2.type && !(131072 & c2.__u))
    return t;
  if (i > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l2 >= 0 || u < _.length; ) {
      if (l2 >= 0) {
        if ((c2 = _[l2]) && !(131072 & c2.__u) && n == c2.key && r2 === c2.type)
          return l2;
        l2--;
      }
      if (u < _.length) {
        if ((c2 = _[u]) && !(131072 & c2.__u) && n == c2.key && r2 === c2.type)
          return u;
        u++;
      }
    }
  return -1;
}
function q(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || oe.test(_) ? t : t + "px";
}
function M(e, _, t, i, n) {
  var r2;
  e:
    if (_ === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i)
          for (_ in i)
            t && _ in t || q(e.style, _, "");
        if (t)
          for (_ in t)
            i && t[_] === i[_] || q(e.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      r2 = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r2] = t, t ? i ? t.u = i.u : (t.u = Date.now(), e.addEventListener(_, r2 ? K : J, r2)) : e.removeEventListener(_, r2 ? K : J, r2);
    else {
      if (n)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e)
        try {
          e[_] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === false && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function J(e) {
  if (this.l) {
    var _ = this.l[e.type + false];
    if (e.t) {
      if (e.t <= _.u)
        return;
    } else
      e.t = Date.now();
    return _(a.event ? a.event(e) : e);
  }
}
function K(e) {
  if (this.l)
    return this.l[e.type + true](a.event ? a.event(e) : e);
}
function G(e, _, t, i, n, r2, l2, u, c2, s) {
  var p3, o2, m, f, h2, k3, v2, d2, y2, C3, T3, P2, j2, U3, N2, g2 = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (c2 = !!(32 & t.__u), r2 = [u = _.__e = t.__e]), (p3 = a.__b) && p3(_);
  e:
    if (typeof g2 == "function")
      try {
        if (d2 = _.props, y2 = (p3 = g2.contextType) && i[p3.__c], C3 = p3 ? y2 ? y2.props.value : p3.__ : i, t.__c ? v2 = (o2 = _.__c = t.__c).__ = o2.__E : ("prototype" in g2 && g2.prototype.render ? _.__c = o2 = new g2(d2, C3) : (_.__c = o2 = new W(d2, C3), o2.constructor = g2, o2.render = ce), y2 && y2.sub(o2), o2.props = d2, o2.state || (o2.state = {}), o2.context = C3, o2.__n = i, m = o2.__d = true, o2.__h = [], o2._sb = []), o2.__s == null && (o2.__s = o2.state), g2.getDerivedStateFromProps != null && (o2.__s == o2.state && (o2.__s = b({}, o2.__s)), b(o2.__s, g2.getDerivedStateFromProps(d2, o2.__s))), f = o2.props, h2 = o2.state, o2.__v = _, m)
          g2.getDerivedStateFromProps == null && o2.componentWillMount != null && o2.componentWillMount(), o2.componentDidMount != null && o2.__h.push(o2.componentDidMount);
        else {
          if (g2.getDerivedStateFromProps == null && d2 !== f && o2.componentWillReceiveProps != null && o2.componentWillReceiveProps(d2, C3), !o2.__e && (o2.shouldComponentUpdate != null && o2.shouldComponentUpdate(d2, o2.__s, C3) === false || _.__v === t.__v)) {
            for (_.__v !== t.__v && (o2.props = d2, o2.state = o2.__s, o2.__d = false), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(L3) {
              L3 && (L3.__ = _);
            }), T3 = 0; T3 < o2._sb.length; T3++)
              o2.__h.push(o2._sb[T3]);
            o2._sb = [], o2.__h.length && l2.push(o2);
            break e;
          }
          o2.componentWillUpdate != null && o2.componentWillUpdate(d2, o2.__s, C3), o2.componentDidUpdate != null && o2.__h.push(function() {
            o2.componentDidUpdate(f, h2, k3);
          });
        }
        if (o2.context = C3, o2.props = d2, o2.__P = e, o2.__e = false, P2 = a.__r, j2 = 0, "prototype" in g2 && g2.prototype.render) {
          for (o2.state = o2.__s, o2.__d = false, P2 && P2(_), p3 = o2.render(o2.props, o2.state, o2.context), U3 = 0; U3 < o2._sb.length; U3++)
            o2.__h.push(o2._sb[U3]);
          o2._sb = [];
        } else
          do
            o2.__d = false, P2 && P2(_), p3 = o2.render(o2.props, o2.state, o2.context), o2.state = o2.__s;
          while (o2.__d && ++j2 < 25);
        o2.state = o2.__s, o2.getChildContext != null && (i = b(b({}, i), o2.getChildContext())), m || o2.getSnapshotBeforeUpdate == null || (k3 = o2.getSnapshotBeforeUpdate(f, h2)), _e(e, F(N2 = p3 != null && p3.type === H && p3.key == null ? p3.props.children : p3) ? N2 : [N2], _, t, i, n, r2, l2, u, c2, s), o2.base = _.__e, _.__u &= -161, o2.__h.length && l2.push(o2), v2 && (o2.__E = o2.__ = null);
      } catch (L3) {
        _.__v = null, c2 || r2 != null ? (_.__e = u, _.__u |= c2 ? 160 : 32, r2[r2.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), a.__e(L3, _, t);
      }
    else
      r2 == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = fe(t.__e, _, t, i, n, r2, l2, c2, s);
  (p3 = a.diffed) && p3(_);
}
function R(e, _, t) {
  for (var i = 0; i < t.length; i++)
    V(t[i], t[++i], t[++i]);
  a.__c && a.__c(_, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r2) {
        r2.call(n);
      });
    } catch (r2) {
      a.__e(r2, n.__v);
    }
  });
}
function fe(e, _, t, i, n, r2, l2, u, c2) {
  var s, p3, o2, m, f, h2, k3, v2 = t.props, d2 = _.props, y2 = _.type;
  if (y2 === "svg" && (n = true), r2 != null) {
    for (s = 0; s < r2.length; s++)
      if ((f = r2[s]) && "setAttribute" in f == !!y2 && (y2 ? f.localName === y2 : f.nodeType === 3)) {
        e = f, r2[s] = null;
        break;
      }
  }
  if (e == null) {
    if (y2 === null)
      return document.createTextNode(d2);
    e = n ? document.createElementNS("http://www.w3.org/2000/svg", y2) : document.createElement(y2, d2.is && d2), r2 = null, u = false;
  }
  if (y2 === null)
    v2 === d2 || u && e.data === d2 || (e.data = d2);
  else {
    if (r2 = r2 && D.call(e.childNodes), v2 = t.props || E, !u && r2 != null)
      for (v2 = {}, s = 0; s < e.attributes.length; s++)
        v2[(f = e.attributes[s]).name] = f.value;
    for (s in v2)
      f = v2[s], s == "children" || (s == "dangerouslySetInnerHTML" ? o2 = f : s === "key" || s in d2 || M(e, s, null, f, n));
    for (s in d2)
      f = d2[s], s == "children" ? m = f : s == "dangerouslySetInnerHTML" ? p3 = f : s == "value" ? h2 = f : s == "checked" ? k3 = f : s === "key" || u && typeof f != "function" || v2[s] === f || M(e, s, f, v2[s], n);
    if (p3)
      u || o2 && (p3.__html === o2.__html || p3.__html === e.innerHTML) || (e.innerHTML = p3.__html), _.__k = [];
    else if (o2 && (e.innerHTML = ""), _e(e, F(m) ? m : [m], _, t, i, n && y2 !== "foreignObject", r2, l2, r2 ? r2[0] : t.__k && w(t, 0), u, c2), r2 != null)
      for (s = r2.length; s--; )
        r2[s] != null && Z(r2[s]);
    u || (s = "value", h2 !== void 0 && (h2 !== e[s] || y2 === "progress" && !h2 || y2 === "option" && h2 !== v2[s]) && M(e, s, h2, v2[s], false), s = "checked", k3 !== void 0 && k3 !== e[s] && M(e, s, k3, v2[s], false));
  }
  return e;
}
function V(e, _, t) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (i) {
    a.__e(i, t);
  }
}
function B(e, _, t) {
  var i, n;
  if (a.unmount && a.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || V(i, null, _)), (i = e.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r2) {
        a.__e(r2, _);
      }
    i.base = i.__P = null, e.__c = void 0;
  }
  if (i = e.__k)
    for (n = 0; n < i.length; n++)
      i[n] && B(i[n], _, t || typeof e.type != "function");
  t || e.__e == null || Z(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ce(e, _, t) {
  return this.constructor(e, t);
}
D = O.slice, a = { __e: function(e, _, t, i) {
  for (var n, r2, l2; _ = _.__; )
    if ((n = _.__c) && !n.__)
      try {
        if ((r2 = n.constructor) && r2.getDerivedStateFromError != null && (n.setState(r2.getDerivedStateFromError(e)), l2 = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e, i || {}), l2 = n.__d), l2)
          return n.__E = n;
      } catch (u) {
        e = u;
      }
  throw e;
} }, Q = 0, ne = function(e) {
  return e != null && e.constructor == null;
}, W.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e == "function" && (e = e(b({}, t), this.props)), e && b(t, e), e != null && this.__v && (_ && this._sb.push(_), I(this));
}, W.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = true, e && this.__h.push(e), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, A.__r = 0, Y = 0;

// https://esm.sh/stable/preact@10.19.6/denonext/hooks.js
var c;
var r;
var H2;
var b2;
var v = 0;
var x2 = [];
var p = [];
var o = a;
var g = o.__b;
var C = o.__r;
var A2 = o.diffed;
var D2 = o.__c;
var F2 = o.unmount;
var k = o.__;
function l(t, _) {
  o.__h && o.__h(r, t, v || _), v = 0;
  var u = r.__H || (r.__H = { __: [], __h: [] });
  return t >= u.__.length && u.__.push({ __V: p }), u.__[t];
}
function I2(t) {
  return v = 1, R2(U, t);
}
function R2(t, _, u) {
  var n = l(c++, 2);
  if (n.t = t, !n.__c && (n.__ = [u ? u(_) : U(void 0, _), function(a2) {
    var f = n.__N ? n.__N[0] : n.__[0], s = n.t(f, a2);
    f !== s && (n.__N = [s, n.__[1]], n.__c.setState({}));
  }], n.__c = r, !r.u)) {
    var i = function(a2, f, s) {
      if (!n.__c.__H)
        return true;
      var m = n.__c.__H.__.filter(function(e) {
        return !!e.__c;
      });
      if (m.every(function(e) {
        return !e.__N;
      }))
        return !h2 || h2.call(this, a2, f, s);
      var V3 = false;
      return m.forEach(function(e) {
        if (e.__N) {
          var P2 = e.__[0];
          e.__ = e.__N, e.__N = void 0, P2 !== e.__[0] && (V3 = true);
        }
      }), !(!V3 && n.__c.props === a2) && (!h2 || h2.call(this, a2, f, s));
    };
    r.u = true;
    var h2 = r.shouldComponentUpdate, N2 = r.componentWillUpdate;
    r.componentWillUpdate = function(a2, f, s) {
      if (this.__e) {
        var m = h2;
        h2 = void 0, i(a2, f, s), h2 = m;
      }
      N2 && N2.call(this, a2, f, s);
    }, r.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function z2(t, _) {
  var u = l(c++, 3);
  !o.__s && y(u.__H, _) && (u.__ = t, u.i = _, r.__H.__h.push(u));
}
function W2() {
  for (var t; t = x2.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(d), t.__H.__h.forEach(E2), t.__H.__h = [];
      } catch (_) {
        t.__H.__h = [], o.__e(_, t.__v);
      }
}
o.__b = function(t) {
  r = null, g && g(t);
}, o.__ = function(t, _) {
  t && _.__k && _.__k.__m && (t.__m = _.__k.__m), k && k(t, _);
}, o.__r = function(t) {
  C && C(t), c = 0;
  var _ = (r = t.__c).__H;
  _ && (H2 === r ? (_.__h = [], r.__h = [], _.__.forEach(function(u) {
    u.__N && (u.__ = u.__N), u.__V = p, u.__N = u.i = void 0;
  })) : (_.__h.forEach(d), _.__h.forEach(E2), _.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t) {
  A2 && A2(t);
  var _ = t.__c;
  _ && _.__H && (_.__H.__h.length && (x2.push(_) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _.__H.__.forEach(function(u) {
    u.i && (u.__H = u.i), u.__V !== p && (u.__ = u.__V), u.i = void 0, u.__V = p;
  })), H2 = r = null;
}, o.__c = function(t, _) {
  _.some(function(u) {
    try {
      u.__h.forEach(d), u.__h = u.__h.filter(function(n) {
        return !n.__ || E2(n);
      });
    } catch (n) {
      _.some(function(i) {
        i.__h && (i.__h = []);
      }), _ = [], o.__e(n, u.__v);
    }
  }), D2 && D2(t, _);
}, o.unmount = function(t) {
  F2 && F2(t);
  var _, u = t.__c;
  u && u.__H && (u.__H.__.forEach(function(n) {
    try {
      d(n);
    } catch (i) {
      _ = i;
    }
  }), u.__H = void 0, _ && o.__e(_, u.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t) {
  var _, u = function() {
    clearTimeout(n), q2 && cancelAnimationFrame(_), setTimeout(t);
  }, n = setTimeout(u, 100);
  q2 && (_ = requestAnimationFrame(u));
}
function d(t) {
  var _ = r, u = t.__c;
  typeof u == "function" && (t.__c = void 0, u()), r = _;
}
function E2(t) {
  var _ = r;
  t.__c = t.__(), r = _;
}
function y(t, _) {
  return !t || t.length !== _.length || _.some(function(u, n) {
    return u !== t[n];
  });
}
function U(t, _) {
  return typeof _ == "function" ? _(t) : _;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function b3(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return true;
  for (var r2 in t)
    if (r2 !== "__source" && e[r2] !== t[r2])
      return true;
  return false;
}
function C2(e, t) {
  this.props = e, this.context = t;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e, t) {
  return b3(this.props, e) || b3(this.state, t);
};
var N = a.__b;
a.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), N && N(e);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var ne2 = a.__e;
a.__e = function(e, t, n, r2) {
  if (e.then) {
    for (var o2, u = t; u = u.__; )
      if ((o2 = u.__c) && o2.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o2.__c(e, t);
  }
  ne2(e, t, n, r2);
};
var x3 = a.unmount;
function T2(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r2) {
    typeof r2.__c == "function" && r2.__c();
  }), e.__c.__H = null), (e = L2({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r2) {
    return T2(r2, t, n);
  })), e;
}
function A3(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r2) {
    return A3(r2, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = true, e.__c.__P = n)), e;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), x3 && x3(e);
}, (h.prototype = new W()).__c = function(e, t) {
  var n = t.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(n);
  var o2 = F3(r2.__v), u = false, a2 = function() {
    u || (u = true, n.__R = null, o2 ? o2(l2) : l2());
  };
  n.__R = a2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var s = r2.state.__a;
        r2.__v.__k[0] = A3(s, s.__c.__P, s.__c.__O);
      }
      var g2;
      for (r2.setState({ __a: r2.__b = null }); g2 = r2.t.pop(); )
        g2.forceUpdate();
    }
  };
  r2.__u++ || 32 & t.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var o2 = t.__a && re(H, null, e.fallback);
  return o2 && (o2.__u &= -33), [re(H, null, t.__a ? null : e.children), o2];
};
var k2 = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
(p2.prototype = new W()).__a = function(e) {
  var t = this, n = F3(t.__v), r2 = t.o.get(e);
  return r2[0]++, function(o2) {
    var u = function() {
      t.props.revealOrder ? (r2.push(o2), k2(t, e, r2)) : o2();
    };
    n ? n(u) : u();
  };
}, p2.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = se(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    k2(e, n, t);
  });
};
var V2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
var ie2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var le2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var se2 = /[A-Z0-9]/g;
var _e2 = typeof document < "u";
var ce2 = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(W.prototype, e, { configurable: true, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: true, writable: true, value: t });
  } });
});
var O2 = a.event;
function de2() {
}
function he2() {
  return this.cancelBubble;
}
function ve2() {
  return this.defaultPrevented;
}
a.event = function(e) {
  return O2 && (e = O2(e)), e.persist = de2, e.isPropagationStopped = he2, e.isDefaultPrevented = ve2, e.nativeEvent = e;
};
var S3;
var me = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var P = a.vnode;
a.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r2 = t.type, o2 = {};
    for (var u in n) {
      var a2 = n[u];
      if (!(u === "value" && "defaultValue" in n && a2 == null || _e2 && u === "children" && r2 === "noscript" || u === "class" || u === "className")) {
        var l2 = u.toLowerCase();
        u === "defaultValue" && "value" in n && n.value == null ? u = "value" : u === "download" && a2 === true ? a2 = "" : l2 === "translate" && a2 === "no" ? a2 = false : l2 === "ondoubleclick" ? u = "ondblclick" : l2 !== "onchange" || r2 !== "input" && r2 !== "textarea" || ce2(n.type) ? l2 === "onfocus" ? u = "onfocusin" : l2 === "onblur" ? u = "onfocusout" : le2.test(u) ? u = l2 : r2.indexOf("-") === -1 && ie2.test(u) ? u = u.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l2 = u = "oninput", l2 === "oninput" && o2[u = l2] && (u = "oninputCapture"), o2[u] = a2;
      }
    }
    r2 == "select" && o2.multiple && Array.isArray(o2.value) && (o2.value = se(n.children).forEach(function(s) {
      s.props.selected = o2.value.indexOf(s.props.value) != -1;
    })), r2 == "select" && o2.defaultValue != null && (o2.value = se(n.children).forEach(function(s) {
      s.props.selected = o2.multiple ? o2.defaultValue.indexOf(s.props.value) != -1 : o2.defaultValue == s.props.value;
    })), n.class && !n.className ? (o2.class = n.class, Object.defineProperty(o2, "className", me)) : (n.className && !n.class || n.class && n.className) && (o2.class = o2.className = n.className), t.props = o2;
  }(e), e.$$typeof = V2, P && P(e);
};
var w2 = a.__r;
a.__r = function(e) {
  w2 && w2(e), S3 = e.__c;
};
var U2 = a.diffed;
a.diffed = function(e) {
  U2 && U2(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), S3 = null;
};

// ../components/ui/use-toast.ts
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open)
          dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = I2(memoryState);
  z2(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
export {
  reducer,
  toast,
  useToast
};
