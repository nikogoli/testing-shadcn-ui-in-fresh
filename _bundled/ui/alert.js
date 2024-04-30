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
function b(e2, _) {
  for (var t in _)
    e2[t] = _[t];
  return e2;
}
function Z(e2) {
  var _ = e2.parentNode;
  _ && _.removeChild(e2);
}
function re(e2, _, t) {
  var i2, n, r2, l2 = {};
  for (r2 in _)
    r2 == "key" ? i2 = _[r2] : r2 == "ref" ? n = _[r2] : l2[r2] = _[r2];
  if (arguments.length > 2 && (l2.children = arguments.length > 3 ? D.call(arguments, 2) : t), typeof e2 == "function" && e2.defaultProps != null)
    for (r2 in e2.defaultProps)
      l2[r2] === void 0 && (l2[r2] = e2.defaultProps[r2]);
  return S(e2, l2, i2, n, null);
}
function S(e2, _, t, i2, n) {
  var r2 = { type: e2, props: _, key: t, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n ?? ++Q, __i: -1, __u: 0 };
  return n == null && a.vnode != null && a.vnode(r2), r2;
}
function H(e2) {
  return e2.children;
}
function W(e2, _) {
  this.props = e2, this.context = _;
}
function w(e2, _) {
  if (_ == null)
    return e2.__ ? w(e2.__, e2.__i + 1) : null;
  for (var t; _ < e2.__k.length; _++)
    if ((t = e2.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function ie(e2, _, t) {
  var i2, n = e2.__v, r2 = n.__e, l2 = e2.__P;
  if (l2)
    return (i2 = b({}, n)).__v = n.__v + 1, a.vnode && a.vnode(i2), G(l2, i2, n, e2.__n, l2.ownerSVGElement !== void 0, 32 & n.__u ? [r2] : null, _, r2 ?? w(n), !!(32 & n.__u), t), i2.__v = n.__v, i2.__.__k[i2.__i] = i2, i2.__d = void 0, i2.__e != r2 && ee(i2), i2;
}
function ee(e2) {
  var _, t;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, _ = 0; _ < e2.__k.length; _++)
      if ((t = e2.__k[_]) != null && t.__e != null) {
        e2.__e = e2.__c.base = t.__e;
        break;
      }
    return ee(e2);
  }
}
function I(e2) {
  (!e2.__d && (e2.__d = true) && x.push(e2) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e2, _, t, i2 = [], n = [];
  for (x.sort($); e2 = x.shift(); )
    e2.__d && (t = x.length, _ = ie(e2, i2, n) || _, t === 0 || x.length > t ? (R(i2, _, n), n.length = i2.length = 0, _ = void 0, x.sort($)) : _ && a.__c && a.__c(_, O));
  _ && R(i2, _, n), A.__r = 0;
}
function _e(e2, _, t, i2, n, r2, l2, u, c2, s, p3) {
  var o3, m2, f, h3, k3, v = i2 && i2.__k || O, d4 = _.length;
  for (t.__d = c2, le(t, _, v), c2 = t.__d, o3 = 0; o3 < d4; o3++)
    (f = t.__k[o3]) != null && typeof f != "boolean" && typeof f != "function" && (m2 = f.__i === -1 ? E : v[f.__i] || E, f.__i = o3, G(e2, f, m2, n, r2, l2, u, c2, s, p3), h3 = f.__e, f.ref && m2.ref != f.ref && (m2.ref && V(m2.ref, null, f), p3.push(f.ref, f.__c || h3, f)), k3 == null && h3 != null && (k3 = h3), 65536 & f.__u || m2.__k === f.__k ? c2 = te(f, c2, e2) : typeof f.type == "function" && f.__d !== void 0 ? c2 = f.__d : h3 && (c2 = h3.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = c2, t.__e = k3;
}
function le(e2, _, t) {
  var i2, n, r2, l2, u, c2 = _.length, s = t.length, p3 = s, o3 = 0;
  for (e2.__k = [], i2 = 0; i2 < c2; i2++)
    l2 = i2 + o3, (n = e2.__k[i2] = (n = _[i2]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? S(null, n, null, null, null) : F(n) ? S(H, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? S(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = e2, n.__b = e2.__b + 1, u = ue(n, t, l2, p3), n.__i = u, r2 = null, u !== -1 && (p3--, (r2 = t[u]) && (r2.__u |= 131072)), r2 == null || r2.__v === null ? (u == -1 && o3--, typeof n.type != "function" && (n.__u |= 65536)) : u !== l2 && (u === l2 + 1 ? o3++ : u > l2 ? p3 > c2 - l2 ? o3 += u - l2 : o3-- : u < l2 ? u == l2 - 1 && (o3 = u - l2) : o3 = 0, u !== i2 + o3 && (n.__u |= 65536))) : (r2 = t[l2]) && r2.key == null && r2.__e && !(131072 & r2.__u) && (r2.__e == e2.__d && (e2.__d = w(r2)), B(r2, r2, false), t[l2] = null, p3--);
  if (p3)
    for (i2 = 0; i2 < s; i2++)
      (r2 = t[i2]) != null && !(131072 & r2.__u) && (r2.__e == e2.__d && (e2.__d = w(r2)), B(r2, r2));
}
function te(e2, _, t) {
  var i2, n;
  if (typeof e2.type == "function") {
    for (i2 = e2.__k, n = 0; i2 && n < i2.length; n++)
      i2[n] && (i2[n].__ = e2, _ = te(i2[n], _, t));
    return _;
  }
  e2.__e != _ && (t.insertBefore(e2.__e, _ || null), _ = e2.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function se(e2, _) {
  return _ = _ || [], e2 == null || typeof e2 == "boolean" || (F(e2) ? e2.some(function(t) {
    se(t, _);
  }) : _.push(e2)), _;
}
function ue(e2, _, t, i2) {
  var n = e2.key, r2 = e2.type, l2 = t - 1, u = t + 1, c2 = _[t];
  if (c2 === null || c2 && n == c2.key && r2 === c2.type && !(131072 & c2.__u))
    return t;
  if (i2 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
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
function q(e2, _, t) {
  _[0] === "-" ? e2.setProperty(_, t ?? "") : e2[_] = t == null ? "" : typeof t != "number" || oe.test(_) ? t : t + "px";
}
function M(e2, _, t, i2, n) {
  var r2;
  e:
    if (_ === "style")
      if (typeof t == "string")
        e2.style.cssText = t;
      else {
        if (typeof i2 == "string" && (e2.style.cssText = i2 = ""), i2)
          for (_ in i2)
            t && _ in t || q(e2.style, _, "");
        if (t)
          for (_ in t)
            i2 && t[_] === i2[_] || q(e2.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      r2 = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e2 ? _.toLowerCase().slice(2) : _.slice(2), e2.l || (e2.l = {}), e2.l[_ + r2] = t, t ? i2 ? t.u = i2.u : (t.u = Date.now(), e2.addEventListener(_, r2 ? K : J, r2)) : e2.removeEventListener(_, r2 ? K : J, r2);
    else {
      if (n)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e2)
        try {
          e2[_] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === false && _[4] !== "-" ? e2.removeAttribute(_) : e2.setAttribute(_, t));
    }
}
function J(e2) {
  if (this.l) {
    var _ = this.l[e2.type + false];
    if (e2.t) {
      if (e2.t <= _.u)
        return;
    } else
      e2.t = Date.now();
    return _(a.event ? a.event(e2) : e2);
  }
}
function K(e2) {
  if (this.l)
    return this.l[e2.type + true](a.event ? a.event(e2) : e2);
}
function G(e2, _, t, i2, n, r2, l2, u, c2, s) {
  var p3, o3, m2, f, h3, k3, v, d4, y2, C4, T4, P3, j2, U3, N2, g3 = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (c2 = !!(32 & t.__u), r2 = [u = _.__e = t.__e]), (p3 = a.__b) && p3(_);
  e:
    if (typeof g3 == "function")
      try {
        if (d4 = _.props, y2 = (p3 = g3.contextType) && i2[p3.__c], C4 = p3 ? y2 ? y2.props.value : p3.__ : i2, t.__c ? v = (o3 = _.__c = t.__c).__ = o3.__E : ("prototype" in g3 && g3.prototype.render ? _.__c = o3 = new g3(d4, C4) : (_.__c = o3 = new W(d4, C4), o3.constructor = g3, o3.render = ce), y2 && y2.sub(o3), o3.props = d4, o3.state || (o3.state = {}), o3.context = C4, o3.__n = i2, m2 = o3.__d = true, o3.__h = [], o3._sb = []), o3.__s == null && (o3.__s = o3.state), g3.getDerivedStateFromProps != null && (o3.__s == o3.state && (o3.__s = b({}, o3.__s)), b(o3.__s, g3.getDerivedStateFromProps(d4, o3.__s))), f = o3.props, h3 = o3.state, o3.__v = _, m2)
          g3.getDerivedStateFromProps == null && o3.componentWillMount != null && o3.componentWillMount(), o3.componentDidMount != null && o3.__h.push(o3.componentDidMount);
        else {
          if (g3.getDerivedStateFromProps == null && d4 !== f && o3.componentWillReceiveProps != null && o3.componentWillReceiveProps(d4, C4), !o3.__e && (o3.shouldComponentUpdate != null && o3.shouldComponentUpdate(d4, o3.__s, C4) === false || _.__v === t.__v)) {
            for (_.__v !== t.__v && (o3.props = d4, o3.state = o3.__s, o3.__d = false), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(L4) {
              L4 && (L4.__ = _);
            }), T4 = 0; T4 < o3._sb.length; T4++)
              o3.__h.push(o3._sb[T4]);
            o3._sb = [], o3.__h.length && l2.push(o3);
            break e;
          }
          o3.componentWillUpdate != null && o3.componentWillUpdate(d4, o3.__s, C4), o3.componentDidUpdate != null && o3.__h.push(function() {
            o3.componentDidUpdate(f, h3, k3);
          });
        }
        if (o3.context = C4, o3.props = d4, o3.__P = e2, o3.__e = false, P3 = a.__r, j2 = 0, "prototype" in g3 && g3.prototype.render) {
          for (o3.state = o3.__s, o3.__d = false, P3 && P3(_), p3 = o3.render(o3.props, o3.state, o3.context), U3 = 0; U3 < o3._sb.length; U3++)
            o3.__h.push(o3._sb[U3]);
          o3._sb = [];
        } else
          do
            o3.__d = false, P3 && P3(_), p3 = o3.render(o3.props, o3.state, o3.context), o3.state = o3.__s;
          while (o3.__d && ++j2 < 25);
        o3.state = o3.__s, o3.getChildContext != null && (i2 = b(b({}, i2), o3.getChildContext())), m2 || o3.getSnapshotBeforeUpdate == null || (k3 = o3.getSnapshotBeforeUpdate(f, h3)), _e(e2, F(N2 = p3 != null && p3.type === H && p3.key == null ? p3.props.children : p3) ? N2 : [N2], _, t, i2, n, r2, l2, u, c2, s), o3.base = _.__e, _.__u &= -161, o3.__h.length && l2.push(o3), v && (o3.__E = o3.__ = null);
      } catch (L4) {
        _.__v = null, c2 || r2 != null ? (_.__e = u, _.__u |= c2 ? 160 : 32, r2[r2.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), a.__e(L4, _, t);
      }
    else
      r2 == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = fe(t.__e, _, t, i2, n, r2, l2, c2, s);
  (p3 = a.diffed) && p3(_);
}
function R(e2, _, t) {
  for (var i2 = 0; i2 < t.length; i2++)
    V(t[i2], t[++i2], t[++i2]);
  a.__c && a.__c(_, e2), e2.some(function(n) {
    try {
      e2 = n.__h, n.__h = [], e2.some(function(r2) {
        r2.call(n);
      });
    } catch (r2) {
      a.__e(r2, n.__v);
    }
  });
}
function fe(e2, _, t, i2, n, r2, l2, u, c2) {
  var s, p3, o3, m2, f, h3, k3, v = t.props, d4 = _.props, y2 = _.type;
  if (y2 === "svg" && (n = true), r2 != null) {
    for (s = 0; s < r2.length; s++)
      if ((f = r2[s]) && "setAttribute" in f == !!y2 && (y2 ? f.localName === y2 : f.nodeType === 3)) {
        e2 = f, r2[s] = null;
        break;
      }
  }
  if (e2 == null) {
    if (y2 === null)
      return document.createTextNode(d4);
    e2 = n ? document.createElementNS("http://www.w3.org/2000/svg", y2) : document.createElement(y2, d4.is && d4), r2 = null, u = false;
  }
  if (y2 === null)
    v === d4 || u && e2.data === d4 || (e2.data = d4);
  else {
    if (r2 = r2 && D.call(e2.childNodes), v = t.props || E, !u && r2 != null)
      for (v = {}, s = 0; s < e2.attributes.length; s++)
        v[(f = e2.attributes[s]).name] = f.value;
    for (s in v)
      f = v[s], s == "children" || (s == "dangerouslySetInnerHTML" ? o3 = f : s === "key" || s in d4 || M(e2, s, null, f, n));
    for (s in d4)
      f = d4[s], s == "children" ? m2 = f : s == "dangerouslySetInnerHTML" ? p3 = f : s == "value" ? h3 = f : s == "checked" ? k3 = f : s === "key" || u && typeof f != "function" || v[s] === f || M(e2, s, f, v[s], n);
    if (p3)
      u || o3 && (p3.__html === o3.__html || p3.__html === e2.innerHTML) || (e2.innerHTML = p3.__html), _.__k = [];
    else if (o3 && (e2.innerHTML = ""), _e(e2, F(m2) ? m2 : [m2], _, t, i2, n && y2 !== "foreignObject", r2, l2, r2 ? r2[0] : t.__k && w(t, 0), u, c2), r2 != null)
      for (s = r2.length; s--; )
        r2[s] != null && Z(r2[s]);
    u || (s = "value", h3 !== void 0 && (h3 !== e2[s] || y2 === "progress" && !h3 || y2 === "option" && h3 !== v[s]) && M(e2, s, h3, v[s], false), s = "checked", k3 !== void 0 && k3 !== e2[s] && M(e2, s, k3, v[s], false));
  }
  return e2;
}
function V(e2, _, t) {
  try {
    typeof e2 == "function" ? e2(_) : e2.current = _;
  } catch (i2) {
    a.__e(i2, t);
  }
}
function B(e2, _, t) {
  var i2, n;
  if (a.unmount && a.unmount(e2), (i2 = e2.ref) && (i2.current && i2.current !== e2.__e || V(i2, null, _)), (i2 = e2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (r2) {
        a.__e(r2, _);
      }
    i2.base = i2.__P = null, e2.__c = void 0;
  }
  if (i2 = e2.__k)
    for (n = 0; n < i2.length; n++)
      i2[n] && B(i2[n], _, t || typeof e2.type != "function");
  t || e2.__e == null || Z(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function ce(e2, _, t) {
  return this.constructor(e2, t);
}
D = O.slice, a = { __e: function(e2, _, t, i2) {
  for (var n, r2, l2; _ = _.__; )
    if ((n = _.__c) && !n.__)
      try {
        if ((r2 = n.constructor) && r2.getDerivedStateFromError != null && (n.setState(r2.getDerivedStateFromError(e2)), l2 = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e2, i2 || {}), l2 = n.__d), l2)
          return n.__E = n;
      } catch (u) {
        e2 = u;
      }
  throw e2;
} }, Q = 0, ne = function(e2) {
  return e2 != null && e2.constructor == null;
}, W.prototype.setState = function(e2, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e2 == "function" && (e2 = e2(b({}, t), this.props)), e2 && b(t, e2), e2 != null && this.__v && (_ && this._sb.push(_), I(this));
}, W.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e2, _) {
  return e2.__v.__b - _.__v.__b;
}, A.__r = 0, Y = 0;

// https://esm.sh/stable/preact@10.19.6/denonext/hooks.js
var c;
var r;
var H2;
var b2;
var x2 = [];
var p = [];
var o = a;
var g = o.__b;
var C = o.__r;
var A2 = o.diffed;
var D2 = o.__c;
var F2 = o.unmount;
var k = o.__;
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
      _.some(function(i2) {
        i2.__h && (i2.__h = []);
      }), _ = [], o.__e(n, u.__v);
    }
  }), D2 && D2(t, _);
}, o.unmount = function(t) {
  F2 && F2(t);
  var _, u = t.__c;
  u && u.__H && (u.__H.__.forEach(function(n) {
    try {
      d(n);
    } catch (i2) {
      _ = i2;
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

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e2, t) {
  for (var n in t)
    e2[n] = t[n];
  return e2;
}
function b3(e2, t) {
  for (var n in e2)
    if (n !== "__source" && !(n in t))
      return true;
  for (var r2 in t)
    if (r2 !== "__source" && e2[r2] !== t[r2])
      return true;
  return false;
}
function C2(e2, t) {
  this.props = e2, this.context = t;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e2, t) {
  return b3(this.props, e2) || b3(this.state, t);
};
var N = a.__b;
a.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), N && N(e2);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e2) {
  function t(n) {
    var r2 = L2({}, n);
    return delete r2.ref, e2(r2, n.ref || null);
  }
  return t.$$typeof = X2, t.render = t, t.prototype.isReactComponent = t.__f = true, t.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t;
}
var ne2 = a.__e;
a.__e = function(e2, t, n, r2) {
  if (e2.then) {
    for (var o3, u = t; u = u.__; )
      if ((o3 = u.__c) && o3.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o3.__c(e2, t);
  }
  ne2(e2, t, n, r2);
};
var x3 = a.unmount;
function T2(e2, t, n) {
  return e2 && (e2.__c && e2.__c.__H && (e2.__c.__H.__.forEach(function(r2) {
    typeof r2.__c == "function" && r2.__c();
  }), e2.__c.__H = null), (e2 = L2({}, e2)).__c != null && (e2.__c.__P === n && (e2.__c.__P = t), e2.__c = null), e2.__k = e2.__k && e2.__k.map(function(r2) {
    return T2(r2, t, n);
  })), e2;
}
function A3(e2, t, n) {
  return e2 && n && (e2.__v = null, e2.__k = e2.__k && e2.__k.map(function(r2) {
    return A3(r2, t, n);
  }), e2.__c && e2.__c.__P === t && (e2.__e && n.appendChild(e2.__e), e2.__c.__e = true, e2.__c.__P = n)), e2;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e2) {
  var t = e2.__.__c;
  return t && t.__a && t.__a(e2);
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e2) {
  var t = e2.__c;
  t && t.__R && t.__R(), t && 32 & e2.__u && (e2.type = null), x3 && x3(e2);
}, (h.prototype = new W()).__c = function(e2, t) {
  var n = t.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(n);
  var o3 = F3(r2.__v), u = false, a2 = function() {
    u || (u = true, n.__R = null, o3 ? o3(l2) : l2());
  };
  n.__R = a2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var s = r2.state.__a;
        r2.__v.__k[0] = A3(s, s.__c.__P, s.__c.__O);
      }
      var g3;
      for (r2.setState({ __a: r2.__b = null }); g3 = r2.t.pop(); )
        g3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e2.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e2, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var o3 = t.__a && re(H, null, e2.fallback);
  return o3 && (o3.__u &= -33), [re(H, null, t.__a ? null : e2.children), o3];
};
var k2 = function(e2, t, n) {
  if (++n[1] === n[0] && e2.o.delete(t), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
    for (n = e2.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e2.u = n = n[2];
    }
};
(p2.prototype = new W()).__a = function(e2) {
  var t = this, n = F3(t.__v), r2 = t.o.get(e2);
  return r2[0]++, function(o3) {
    var u = function() {
      t.props.revealOrder ? (r2.push(o3), k2(t, e2, r2)) : o3();
    };
    n ? n(u) : u();
  };
}, p2.prototype.render = function(e2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = se(e2.children);
  e2.revealOrder && e2.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e2.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t, n) {
    k2(e2, n, t);
  });
};
var V2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
var ie2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var le2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var se2 = /[A-Z0-9]/g;
var _e2 = typeof document < "u";
var ce2 = function(e2) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e2);
};
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
  Object.defineProperty(W.prototype, e2, { configurable: true, get: function() {
    return this["UNSAFE_" + e2];
  }, set: function(t) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t });
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
a.event = function(e2) {
  return O2 && (e2 = O2(e2)), e2.persist = de2, e2.isPropagationStopped = he2, e2.isDefaultPrevented = ve2, e2.nativeEvent = e2;
};
var S3;
var me = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var P = a.vnode;
a.vnode = function(e2) {
  typeof e2.type == "string" && function(t) {
    var n = t.props, r2 = t.type, o3 = {};
    for (var u in n) {
      var a2 = n[u];
      if (!(u === "value" && "defaultValue" in n && a2 == null || _e2 && u === "children" && r2 === "noscript" || u === "class" || u === "className")) {
        var l2 = u.toLowerCase();
        u === "defaultValue" && "value" in n && n.value == null ? u = "value" : u === "download" && a2 === true ? a2 = "" : l2 === "translate" && a2 === "no" ? a2 = false : l2 === "ondoubleclick" ? u = "ondblclick" : l2 !== "onchange" || r2 !== "input" && r2 !== "textarea" || ce2(n.type) ? l2 === "onfocus" ? u = "onfocusin" : l2 === "onblur" ? u = "onfocusout" : le2.test(u) ? u = l2 : r2.indexOf("-") === -1 && ie2.test(u) ? u = u.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l2 = u = "oninput", l2 === "oninput" && o3[u = l2] && (u = "oninputCapture"), o3[u] = a2;
      }
    }
    r2 == "select" && o3.multiple && Array.isArray(o3.value) && (o3.value = se(n.children).forEach(function(s) {
      s.props.selected = o3.value.indexOf(s.props.value) != -1;
    })), r2 == "select" && o3.defaultValue != null && (o3.value = se(n.children).forEach(function(s) {
      s.props.selected = o3.multiple ? o3.defaultValue.indexOf(s.props.value) != -1 : o3.defaultValue == s.props.value;
    })), n.class && !n.className ? (o3.class = n.class, Object.defineProperty(o3, "className", me)) : (n.className && !n.class || n.class && n.className) && (o3.class = o3.className = n.className), t.props = o3;
  }(e2), e2.$$typeof = V2, P && P(e2);
};
var w2 = a.__r;
a.__r = function(e2) {
  w2 && w2(e2), S3 = e2.__c;
};
var U = a.diffed;
a.diffed = function(e2) {
  U && U(e2);
  var t = e2.props, n = e2.__e;
  n != null && e2.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), S3 = null;
};

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o2(r2) {
  var f, n, t = "";
  if (typeof r2 == "string" || typeof r2 == "number")
    t += r2;
  else if (typeof r2 == "object")
    if (Array.isArray(r2))
      for (f = 0; f < r2.length; f++)
        r2[f] && (n = o2(r2[f])) && (t && (t += " "), t += n);
    else
      for (f in r2)
        r2[f] && (t && (t += " "), t += f);
  return t;
}
function e() {
  for (var r2, f, n = 0, t = ""; n < arguments.length; )
    (r2 = arguments[n++]) && (f = o2(r2)) && (t && (t += " "), t += f);
  return t;
}

// https://esm.sh/v132/class-variance-authority@0.7.0/denonext/class-variance-authority.mjs
var m = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n;
var y = e;
var b4 = (n, l2) => (t) => {
  var r2;
  if (l2?.variants == null)
    return y(n, t?.class, t?.className);
  let { variants: o3, defaultVariants: d4 } = l2, N2 = Object.keys(o3).map((e2) => {
    let a2 = t?.[e2], u = d4?.[e2];
    if (a2 === null)
      return null;
    let i2 = m(a2) || m(u);
    return o3[e2][i2];
  }), v = t && Object.entries(t).reduce((e2, a2) => {
    let [u, i2] = a2;
    return i2 === void 0 || (e2[u] = i2), e2;
  }, {}), V4 = l2 == null || (r2 = l2.compoundVariants) === null || r2 === void 0 ? void 0 : r2.reduce((e2, a2) => {
    let { class: u, className: i2, ...f } = a2;
    return Object.entries(f).every((C4) => {
      let [c2, s] = C4;
      return Array.isArray(s) ? s.includes({ ...d4, ...v }[c2]) : { ...d4, ...v }[c2] === s;
    }) ? [...e2, u, i2] : e2;
  }, []);
  return y(n, N2, V4, t?.class, t?.className);
};

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r2, e2) => {
  for (var t in e2)
    Ar(r2, t, { get: e2[t], enumerable: true });
};
function U2() {
  for (var r2 = 0, e2, t, o3 = ""; r2 < arguments.length; )
    (e2 = arguments[r2++]) && (t = lr(e2)) && (o3 && (o3 += " "), o3 += t);
  return o3;
}
function lr(r2) {
  if (typeof r2 == "string")
    return r2;
  for (var e2, t = "", o3 = 0; o3 < r2.length; o3++)
    r2[o3] && (e2 = lr(r2[o3])) && (t && (t += " "), t += e2);
  return t;
}
var Z2 = "-";
function ur(r2) {
  var e2 = Sr(r2), t = r2.conflictingClassGroups, o3 = r2.conflictingClassGroupModifiers, a2 = o3 === void 0 ? {} : o3;
  function s(i2) {
    var c2 = i2.split(Z2);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e2) || kr(i2);
  }
  function n(i2, c2) {
    var u = t[i2] || [];
    return c2 && a2[i2] ? [].concat(u, a2[i2]) : u;
  }
  return { getClassGroupId: s, getConflictingClassGroupIds: n };
}
function pr(r2, e2) {
  if (r2.length === 0)
    return e2.classGroupId;
  var t = r2[0], o3 = e2.nextPart.get(t), a2 = o3 ? pr(r2.slice(1), o3) : void 0;
  if (a2)
    return a2;
  if (e2.validators.length !== 0) {
    var s = r2.join(Z2);
    return e2.validators.find(function(n) {
      var i2 = n.validator;
      return i2(s);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r2) {
  if (dr.test(r2)) {
    var e2 = dr.exec(r2)[1], t = e2?.substring(0, e2.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function Sr(r2) {
  var e2 = r2.theme, t = r2.prefix, o3 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r2.classGroups), t);
  return a2.forEach(function(s) {
    var n = s[0], i2 = s[1];
    q3(i2, o3, n, e2);
  }), o3;
}
function q3(r2, e2, t, o3) {
  r2.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s = a2 === "" ? e2 : cr(e2, a2);
      s.classGroupId = t;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q3(a2(o3), e2, t, o3);
        return;
      }
      e2.validators.push({ validator: a2, classGroupId: t });
      return;
    }
    Object.entries(a2).forEach(function(n) {
      var i2 = n[0], c2 = n[1];
      q3(c2, cr(e2, i2), t, o3);
    });
  });
}
function cr(r2, e2) {
  var t = r2;
  return e2.split(Z2).forEach(function(o3) {
    t.nextPart.has(o3) || t.nextPart.set(o3, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o3);
  }), t;
}
function zr(r2) {
  return r2.isThemeGetter;
}
function Gr(r2, e2) {
  return e2 ? r2.map(function(t) {
    var o3 = t[0], a2 = t[1], s = a2.map(function(n) {
      return typeof n == "string" ? e2 + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(function(i2) {
        var c2 = i2[0], u = i2[1];
        return [e2 + c2, u];
      })) : n;
    });
    return [o3, s];
  }) : r2;
}
function fr(r2) {
  if (r2 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e2 = 0, t = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Map();
  function a2(s, n) {
    t.set(s, n), e2++, e2 > r2 && (e2 = 0, o3 = t, t = /* @__PURE__ */ new Map());
  }
  return { get: function(n) {
    var i2 = t.get(n);
    if (i2 !== void 0)
      return i2;
    if ((i2 = o3.get(n)) !== void 0)
      return a2(n, i2), i2;
  }, set: function(n, i2) {
    t.has(n) ? t.set(n, i2) : a2(n, i2);
  } };
}
var X3 = "!";
function br(r2) {
  var e2 = r2.separator || ":", t = e2.length === 1, o3 = e2[0], a2 = e2.length;
  return function(n) {
    for (var i2 = [], c2 = 0, u = 0, b5, f = 0; f < n.length; f++) {
      var g3 = n[f];
      if (c2 === 0) {
        if (g3 === o3 && (t || n.slice(f, f + a2) === e2)) {
          i2.push(n.slice(u, f)), u = f + a2;
          continue;
        }
        if (g3 === "/") {
          b5 = f;
          continue;
        }
      }
      g3 === "[" ? c2++ : g3 === "]" && c2--;
    }
    var y2 = i2.length === 0 ? n : n.substring(u), x5 = y2.startsWith(X3), m2 = x5 ? y2.substring(1) : y2, w3 = b5 && b5 > u ? b5 - u : void 0;
    return { modifiers: i2, hasImportantModifier: x5, baseClassName: m2, maybePostfixModifierPosition: w3 };
  };
}
function gr(r2) {
  if (r2.length <= 1)
    return r2;
  var e2 = [], t = [];
  return r2.forEach(function(o3) {
    var a2 = o3[0] === "[";
    a2 ? (e2.push.apply(e2, t.sort().concat([o3])), t = []) : t.push(o3);
  }), e2.push.apply(e2, t.sort()), e2;
}
function mr(r2) {
  return { cache: fr(r2.cacheSize), splitModifiers: br(r2), ...ur(r2) };
}
var Ir = /\s+/;
function vr(r2, e2) {
  var t = e2.splitModifiers, o3 = e2.getClassGroupId, a2 = e2.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return r2.trim().split(Ir).map(function(n) {
    var i2 = t(n), c2 = i2.modifiers, u = i2.hasImportantModifier, b5 = i2.baseClassName, f = i2.maybePostfixModifierPosition, g3 = o3(f ? b5.substring(0, f) : b5), y2 = !!f;
    if (!g3) {
      if (!f)
        return { isTailwindClass: false, originalClassName: n };
      if (g3 = o3(b5), !g3)
        return { isTailwindClass: false, originalClassName: n };
      y2 = false;
    }
    var x5 = gr(c2).join(":"), m2 = u ? x5 + X3 : x5;
    return { isTailwindClass: true, modifierId: m2, classGroupId: g3, originalClassName: n, hasPostfixModifier: y2 };
  }).reverse().filter(function(n) {
    if (!n.isTailwindClass)
      return true;
    var i2 = n.modifierId, c2 = n.classGroupId, u = n.hasPostfixModifier, b5 = i2 + c2;
    return s.has(b5) ? false : (s.add(b5), a2(c2, u).forEach(function(f) {
      return s.add(i2 + f);
    }), true);
  }).reverse().map(function(n) {
    return n.originalClassName;
  }).join(" ");
}
function P2() {
  for (var r2 = arguments.length, e2 = new Array(r2), t = 0; t < r2; t++)
    e2[t] = arguments[t];
  var o3, a2, s, n = i2;
  function i2(u) {
    var b5 = e2[0], f = e2.slice(1), g3 = f.reduce(function(y2, x5) {
      return x5(y2);
    }, b5());
    return o3 = mr(g3), a2 = o3.cache.get, s = o3.cache.set, n = c2, c2(u);
  }
  function c2(u) {
    var b5 = a2(u);
    if (b5)
      return b5;
    var f = vr(u, o3);
    return s(u, f), f;
  }
  return function() {
    return n(U2.apply(null, arguments));
  };
}
function d2(r2) {
  var e2 = function(o3) {
    return o3[r2] || [];
  };
  return e2.isThemeGetter = true, e2;
}
var wr = {};
Mr(wr, { isAny: () => G3, isArbitraryLength: () => L3, isArbitraryNumber: () => S4, isArbitraryPosition: () => Q3, isArbitraryShadow: () => D3, isArbitrarySize: () => H3, isArbitraryUrl: () => V3, isArbitraryValue: () => l, isArbitraryWeight: () => Wr, isInteger: () => z3, isLength: () => h2, isNumber: () => M3, isPercent: () => Y2, isTshirtSize: () => C3 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h2(r2) {
  return M3(r2) || Tr.has(r2) || Pr.test(r2) || L3(r2);
}
function L3(r2) {
  return I3(r2, "length", Er);
}
function H3(r2) {
  return I3(r2, "size", xr);
}
function Q3(r2) {
  return I3(r2, "position", xr);
}
function V3(r2) {
  return I3(r2, "url", jr);
}
function S4(r2) {
  return I3(r2, "number", M3);
}
var Wr = S4;
function M3(r2) {
  return !Number.isNaN(Number(r2));
}
function Y2(r2) {
  return r2.endsWith("%") && M3(r2.slice(0, -1));
}
function z3(r2) {
  return hr(r2) || I3(r2, "number", hr);
}
function l(r2) {
  return yr.test(r2);
}
function G3() {
  return true;
}
function C3(r2) {
  return Rr.test(r2);
}
function D3(r2) {
  return I3(r2, "", Ur);
}
function I3(r2, e2, t) {
  var o3 = yr.exec(r2);
  return o3 ? o3[1] ? o3[1] === e2 : t(o3[2]) : false;
}
function Er(r2) {
  return Nr.test(r2);
}
function xr() {
  return false;
}
function jr(r2) {
  return r2.startsWith("url(");
}
function hr(r2) {
  return Number.isInteger(Number(r2));
}
function Ur(r2) {
  return Lr.test(r2);
}
function T3() {
  var r2 = d2("colors"), e2 = d2("spacing"), t = d2("blur"), o3 = d2("brightness"), a2 = d2("borderColor"), s = d2("borderRadius"), n = d2("borderSpacing"), i2 = d2("borderWidth"), c2 = d2("contrast"), u = d2("grayscale"), b5 = d2("hueRotate"), f = d2("invert"), g3 = d2("gap"), y2 = d2("gradientColorStops"), x5 = d2("gradientColorStopPositions"), m2 = d2("inset"), w3 = d2("margin"), k3 = d2("opacity"), A4 = d2("padding"), K3 = d2("saturate"), O3 = d2("scale"), rr = d2("sepia"), er = d2("skew"), tr = d2("space"), or = d2("translate"), $2 = function() {
    return ["auto", "contain", "none"];
  }, B2 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F4 = function() {
    return ["auto", l, e2];
  }, p3 = function() {
    return [l, e2];
  }, nr = function() {
    return ["", h2];
  }, W3 = function() {
    return ["auto", M3, l];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E3 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J3 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R3 = function() {
    return ["", "0", l];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N2 = function() {
    return [M3, S4];
  }, j2 = function() {
    return [M3, l];
  };
  return { cacheSize: 500, theme: { colors: [G3], spacing: [h2], blur: ["none", "", C3, l], brightness: N2(), borderColor: [r2], borderRadius: ["none", "", "full", C3, l], borderSpacing: p3(), borderWidth: nr(), contrast: N2(), grayscale: R3(), hueRotate: j2(), invert: R3(), gap: p3(), gradientColorStops: [r2], gradientColorStopPositions: [Y2, L3], inset: F4(), margin: F4(), opacity: N2(), padding: p3(), saturate: N2(), scale: N2(), sepia: R3(), skew: j2(), space: p3(), translate: p3() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [C3] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l]) }], overflow: [{ overflow: B2() }], "overflow-x": [{ "overflow-x": B2() }], "overflow-y": [{ "overflow-y": B2() }], overscroll: [{ overscroll: $2() }], "overscroll-x": [{ "overscroll-x": $2() }], "overscroll-y": [{ "overscroll-y": $2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m2] }], "inset-x": [{ "inset-x": [m2] }], "inset-y": [{ "inset-y": [m2] }], start: [{ start: [m2] }], end: [{ end: [m2] }], top: [{ top: [m2] }], right: [{ right: [m2] }], bottom: [{ bottom: [m2] }], left: [{ left: [m2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z3] }], basis: [{ basis: F4() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: R3() }], shrink: [{ shrink: R3() }], order: [{ order: ["first", "last", "none", z3] }], "grid-cols": [{ "grid-cols": [G3] }], "col-start-end": [{ col: ["auto", { span: ["full", z3] }, l] }], "col-start": [{ "col-start": W3() }], "col-end": [{ "col-end": W3() }], "grid-rows": [{ "grid-rows": [G3] }], "row-start-end": [{ row: ["auto", { span: [z3] }, l] }], "row-start": [{ "row-start": W3() }], "row-end": [{ "row-end": W3() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [g3] }], "gap-x": [{ "gap-x": [g3] }], "gap-y": [{ "gap-y": [g3] }], "justify-content": [{ justify: ["normal"].concat(J3()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J3(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J3(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A4] }], px: [{ px: [A4] }], py: [{ py: [A4] }], ps: [{ ps: [A4] }], pe: [{ pe: [A4] }], pt: [{ pt: [A4] }], pr: [{ pr: [A4] }], pb: [{ pb: [A4] }], pl: [{ pl: [A4] }], m: [{ m: [w3] }], mx: [{ mx: [w3] }], my: [{ my: [w3] }], ms: [{ ms: [w3] }], me: [{ me: [w3] }], mt: [{ mt: [w3] }], mr: [{ mr: [w3] }], mb: [{ mb: [w3] }], ml: [{ ml: [w3] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l, e2] }], "min-w": [{ "min-w": ["min", "max", "fit", l, h2] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C3] }, C3, l] }], h: [{ h: [l, e2, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l, h2] }], "max-h": [{ "max-h": [l, e2, "min", "max", "fit"] }], "font-size": [{ text: ["base", C3, L3] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S4] }], "font-family": [{ font: [G3] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", M3, S4] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l, h2] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r2] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r2] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E3(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h2] }], "underline-offset": [{ "underline-offset": ["auto", l, h2] }], "text-decoration-color": [{ decoration: [r2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p3() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q3]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V3] }], "bg-color": [{ bg: [r2] }], "gradient-from-pos": [{ from: [x5] }], "gradient-via-pos": [{ via: [x5] }], "gradient-to-pos": [{ to: [x5] }], "gradient-from": [{ from: [y2] }], "gradient-via": [{ via: [y2] }], "gradient-to": [{ to: [y2] }], rounded: [{ rounded: [s] }], "rounded-s": [{ "rounded-s": [s] }], "rounded-e": [{ "rounded-e": [s] }], "rounded-t": [{ "rounded-t": [s] }], "rounded-r": [{ "rounded-r": [s] }], "rounded-b": [{ "rounded-b": [s] }], "rounded-l": [{ "rounded-l": [s] }], "rounded-ss": [{ "rounded-ss": [s] }], "rounded-se": [{ "rounded-se": [s] }], "rounded-ee": [{ "rounded-ee": [s] }], "rounded-es": [{ "rounded-es": [s] }], "rounded-tl": [{ "rounded-tl": [s] }], "rounded-tr": [{ "rounded-tr": [s] }], "rounded-br": [{ "rounded-br": [s] }], "rounded-bl": [{ "rounded-bl": [s] }], "border-w": [{ border: [i2] }], "border-w-x": [{ "border-x": [i2] }], "border-w-y": [{ "border-y": [i2] }], "border-w-s": [{ "border-s": [i2] }], "border-w-e": [{ "border-e": [i2] }], "border-w-t": [{ "border-t": [i2] }], "border-w-r": [{ "border-r": [i2] }], "border-w-b": [{ "border-b": [i2] }], "border-w-l": [{ "border-l": [i2] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E3(), ["hidden"]) }], "divide-x": [{ "divide-x": [i2] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i2] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E3() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E3()) }], "outline-offset": [{ "outline-offset": [l, h2] }], "outline-w": [{ outline: [h2] }], "outline-color": [{ outline: [r2] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r2] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h2] }], "ring-offset-color": [{ "ring-offset": [r2] }], shadow: [{ shadow: ["", "inner", "none", C3, D3] }], "shadow-color": [{ shadow: [G3] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o3] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C3, l] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [b5] }], invert: [{ invert: [f] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o3] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b5] }], "backdrop-invert": [{ "backdrop-invert": [f] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n] }], "border-spacing-x": [{ "border-spacing-x": [n] }], "border-spacing-y": [{ "border-spacing-y": [n] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: j2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: j2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O3] }], "scale-x": [{ "scale-x": [O3] }], "scale-y": [{ "scale-y": [O3] }], rotate: [{ rotate: [z3, l] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", r2] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [r2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p3() }], "scroll-mx": [{ "scroll-mx": p3() }], "scroll-my": [{ "scroll-my": p3() }], "scroll-ms": [{ "scroll-ms": p3() }], "scroll-me": [{ "scroll-me": p3() }], "scroll-mt": [{ "scroll-mt": p3() }], "scroll-mr": [{ "scroll-mr": p3() }], "scroll-mb": [{ "scroll-mb": p3() }], "scroll-ml": [{ "scroll-ml": p3() }], "scroll-p": [{ "scroll-p": p3() }], "scroll-px": [{ "scroll-px": p3() }], "scroll-py": [{ "scroll-py": p3() }], "scroll-ps": [{ "scroll-ps": p3() }], "scroll-pe": [{ "scroll-pe": p3() }], "scroll-pt": [{ "scroll-pt": p3() }], "scroll-pr": [{ "scroll-pr": p3() }], "scroll-pb": [{ "scroll-pb": p3() }], "scroll-pl": [{ "scroll-pl": p3() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [r2, "none"] }], "stroke-w": [{ stroke: [h2, S4] }], stroke: [{ stroke: [r2, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P2(T3);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d3 = 0;
var x4 = Array.isArray;
function g2(t, r2, e2, a2, o3, i2) {
  var s, n, f = {};
  for (n in r2)
    n == "ref" ? s = r2[n] : f[n] = r2[n];
  var u = { type: t, props: f, key: e2, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d3, __i: -1, __u: 0, __source: o3, __self: i2 };
  if (typeof t == "function" && (s = t.defaultProps))
    for (n in s)
      f[n] === void 0 && (f[n] = s[n]);
  return a.vnode && a.vnode(u), u;
}

// ../components/ui/alert.tsx
var alertVariants = b4(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = ee2(({ class: className, variant, ...props }, ref) => /* @__PURE__ */ g2("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props }));
Alert.displayName = "Alert";
var AlertTitle = ee2(
  ({ class: className, ...props }, ref) => /* @__PURE__ */ g2("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = ee2(
  ({ class: className, ...props }, ref) => /* @__PURE__ */ g2("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
export {
  Alert,
  AlertDescription,
  AlertTitle
};
