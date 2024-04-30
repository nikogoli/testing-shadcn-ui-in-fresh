"use client";

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n2, t2) => {
  for (var e in t2)
    s(n2, e, { get: t2[e], enumerable: true });
};
var o = {};
u(o, { default: () => r });
function r() {
  return r = Object.assign ? Object.assign.bind() : function(n2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e = arguments[t2];
      for (var a2 in e)
        Object.prototype.hasOwnProperty.call(e, a2) && (n2[a2] = e[a2]);
    }
    return n2;
  }, r.apply(this, arguments);
}
var { default: f, ...d } = o;
var p = f !== void 0 ? f : d;

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
  for (var t2 in _)
    e[t2] = _[t2];
  return e;
}
function Z(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function re(e, _, t2) {
  var i, n2, r3, l3 = {};
  for (r3 in _)
    r3 == "key" ? i = _[r3] : r3 == "ref" ? n2 = _[r3] : l3[r3] = _[r3];
  if (arguments.length > 2 && (l3.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e == "function" && e.defaultProps != null)
    for (r3 in e.defaultProps)
      l3[r3] === void 0 && (l3[r3] = e.defaultProps[r3]);
  return S(e, l3, i, n2, null);
}
function S(e, _, t2, i, n2) {
  var r3 = { type: e, props: _, key: t2, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n2 ?? ++Q, __i: -1, __u: 0 };
  return n2 == null && a.vnode != null && a.vnode(r3), r3;
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
  for (var t2; _ < e.__k.length; _++)
    if ((t2 = e.__k[_]) != null && t2.__e != null)
      return t2.__e;
  return typeof e.type == "function" ? w(e) : null;
}
function ie(e, _, t2) {
  var i, n2 = e.__v, r3 = n2.__e, l3 = e.__P;
  if (l3)
    return (i = b({}, n2)).__v = n2.__v + 1, a.vnode && a.vnode(i), G(l3, i, n2, e.__n, l3.ownerSVGElement !== void 0, 32 & n2.__u ? [r3] : null, _, r3 ?? w(n2), !!(32 & n2.__u), t2), i.__v = n2.__v, i.__.__k[i.__i] = i, i.__d = void 0, i.__e != r3 && ee(i), i;
}
function ee(e) {
  var _, t2;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t2 = e.__k[_]) != null && t2.__e != null) {
        e.__e = e.__c.base = t2.__e;
        break;
      }
    return ee(e);
  }
}
function I(e) {
  (!e.__d && (e.__d = true) && x.push(e) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e, _, t2, i = [], n2 = [];
  for (x.sort($); e = x.shift(); )
    e.__d && (t2 = x.length, _ = ie(e, i, n2) || _, t2 === 0 || x.length > t2 ? (R(i, _, n2), n2.length = i.length = 0, _ = void 0, x.sort($)) : _ && a.__c && a.__c(_, O));
  _ && R(i, _, n2), A.__r = 0;
}
function _e(e, _, t2, i, n2, r3, l3, u3, c2, s2, p4) {
  var o3, m2, f2, h2, k3, v2 = i && i.__k || O, d4 = _.length;
  for (t2.__d = c2, le(t2, _, v2), c2 = t2.__d, o3 = 0; o3 < d4; o3++)
    (f2 = t2.__k[o3]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m2 = f2.__i === -1 ? E : v2[f2.__i] || E, f2.__i = o3, G(e, f2, m2, n2, r3, l3, u3, c2, s2, p4), h2 = f2.__e, f2.ref && m2.ref != f2.ref && (m2.ref && V(m2.ref, null, f2), p4.push(f2.ref, f2.__c || h2, f2)), k3 == null && h2 != null && (k3 = h2), 65536 & f2.__u || m2.__k === f2.__k ? c2 = te(f2, c2, e) : typeof f2.type == "function" && f2.__d !== void 0 ? c2 = f2.__d : h2 && (c2 = h2.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t2.__d = c2, t2.__e = k3;
}
function le(e, _, t2) {
  var i, n2, r3, l3, u3, c2 = _.length, s2 = t2.length, p4 = s2, o3 = 0;
  for (e.__k = [], i = 0; i < c2; i++)
    l3 = i + o3, (n2 = e.__k[i] = (n2 = _[i]) == null || typeof n2 == "boolean" || typeof n2 == "function" ? null : typeof n2 == "string" || typeof n2 == "number" || typeof n2 == "bigint" || n2.constructor == String ? S(null, n2, null, null, null) : F(n2) ? S(H, { children: n2 }, null, null, null) : n2.constructor === void 0 && n2.__b > 0 ? S(n2.type, n2.props, n2.key, n2.ref ? n2.ref : null, n2.__v) : n2) != null ? (n2.__ = e, n2.__b = e.__b + 1, u3 = ue(n2, t2, l3, p4), n2.__i = u3, r3 = null, u3 !== -1 && (p4--, (r3 = t2[u3]) && (r3.__u |= 131072)), r3 == null || r3.__v === null ? (u3 == -1 && o3--, typeof n2.type != "function" && (n2.__u |= 65536)) : u3 !== l3 && (u3 === l3 + 1 ? o3++ : u3 > l3 ? p4 > c2 - l3 ? o3 += u3 - l3 : o3-- : u3 < l3 ? u3 == l3 - 1 && (o3 = u3 - l3) : o3 = 0, u3 !== i + o3 && (n2.__u |= 65536))) : (r3 = t2[l3]) && r3.key == null && r3.__e && !(131072 & r3.__u) && (r3.__e == e.__d && (e.__d = w(r3)), B(r3, r3, false), t2[l3] = null, p4--);
  if (p4)
    for (i = 0; i < s2; i++)
      (r3 = t2[i]) != null && !(131072 & r3.__u) && (r3.__e == e.__d && (e.__d = w(r3)), B(r3, r3));
}
function te(e, _, t2) {
  var i, n2;
  if (typeof e.type == "function") {
    for (i = e.__k, n2 = 0; i && n2 < i.length; n2++)
      i[n2] && (i[n2].__ = e, _ = te(i[n2], _, t2));
    return _;
  }
  e.__e != _ && (t2.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function se(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (F(e) ? e.some(function(t2) {
    se(t2, _);
  }) : _.push(e)), _;
}
function ue(e, _, t2, i) {
  var n2 = e.key, r3 = e.type, l3 = t2 - 1, u3 = t2 + 1, c2 = _[t2];
  if (c2 === null || c2 && n2 == c2.key && r3 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l3 >= 0 || u3 < _.length; ) {
      if (l3 >= 0) {
        if ((c2 = _[l3]) && !(131072 & c2.__u) && n2 == c2.key && r3 === c2.type)
          return l3;
        l3--;
      }
      if (u3 < _.length) {
        if ((c2 = _[u3]) && !(131072 & c2.__u) && n2 == c2.key && r3 === c2.type)
          return u3;
        u3++;
      }
    }
  return -1;
}
function q(e, _, t2) {
  _[0] === "-" ? e.setProperty(_, t2 ?? "") : e[_] = t2 == null ? "" : typeof t2 != "number" || oe.test(_) ? t2 : t2 + "px";
}
function M(e, _, t2, i, n2) {
  var r3;
  e:
    if (_ === "style")
      if (typeof t2 == "string")
        e.style.cssText = t2;
      else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i)
          for (_ in i)
            t2 && _ in t2 || q(e.style, _, "");
        if (t2)
          for (_ in t2)
            i && t2[_] === i[_] || q(e.style, _, t2[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      r3 = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r3] = t2, t2 ? i ? t2.u = i.u : (t2.u = Date.now(), e.addEventListener(_, r3 ? K : J, r3)) : e.removeEventListener(_, r3 ? K : J, r3);
    else {
      if (n2)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e)
        try {
          e[_] = t2 ?? "";
          break e;
        } catch {
        }
      typeof t2 == "function" || (t2 == null || t2 === false && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t2));
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
function G(e, _, t2, i, n2, r3, l3, u3, c2, s2) {
  var p4, o3, m2, f2, h2, k3, v2, d4, y3, C3, T3, P2, j2, U2, N2, g2 = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r3 = [u3 = _.__e = t2.__e]), (p4 = a.__b) && p4(_);
  e:
    if (typeof g2 == "function")
      try {
        if (d4 = _.props, y3 = (p4 = g2.contextType) && i[p4.__c], C3 = p4 ? y3 ? y3.props.value : p4.__ : i, t2.__c ? v2 = (o3 = _.__c = t2.__c).__ = o3.__E : ("prototype" in g2 && g2.prototype.render ? _.__c = o3 = new g2(d4, C3) : (_.__c = o3 = new W(d4, C3), o3.constructor = g2, o3.render = ce), y3 && y3.sub(o3), o3.props = d4, o3.state || (o3.state = {}), o3.context = C3, o3.__n = i, m2 = o3.__d = true, o3.__h = [], o3._sb = []), o3.__s == null && (o3.__s = o3.state), g2.getDerivedStateFromProps != null && (o3.__s == o3.state && (o3.__s = b({}, o3.__s)), b(o3.__s, g2.getDerivedStateFromProps(d4, o3.__s))), f2 = o3.props, h2 = o3.state, o3.__v = _, m2)
          g2.getDerivedStateFromProps == null && o3.componentWillMount != null && o3.componentWillMount(), o3.componentDidMount != null && o3.__h.push(o3.componentDidMount);
        else {
          if (g2.getDerivedStateFromProps == null && d4 !== f2 && o3.componentWillReceiveProps != null && o3.componentWillReceiveProps(d4, C3), !o3.__e && (o3.shouldComponentUpdate != null && o3.shouldComponentUpdate(d4, o3.__s, C3) === false || _.__v === t2.__v)) {
            for (_.__v !== t2.__v && (o3.props = d4, o3.state = o3.__s, o3.__d = false), _.__e = t2.__e, _.__k = t2.__k, _.__k.forEach(function(L3) {
              L3 && (L3.__ = _);
            }), T3 = 0; T3 < o3._sb.length; T3++)
              o3.__h.push(o3._sb[T3]);
            o3._sb = [], o3.__h.length && l3.push(o3);
            break e;
          }
          o3.componentWillUpdate != null && o3.componentWillUpdate(d4, o3.__s, C3), o3.componentDidUpdate != null && o3.__h.push(function() {
            o3.componentDidUpdate(f2, h2, k3);
          });
        }
        if (o3.context = C3, o3.props = d4, o3.__P = e, o3.__e = false, P2 = a.__r, j2 = 0, "prototype" in g2 && g2.prototype.render) {
          for (o3.state = o3.__s, o3.__d = false, P2 && P2(_), p4 = o3.render(o3.props, o3.state, o3.context), U2 = 0; U2 < o3._sb.length; U2++)
            o3.__h.push(o3._sb[U2]);
          o3._sb = [];
        } else
          do
            o3.__d = false, P2 && P2(_), p4 = o3.render(o3.props, o3.state, o3.context), o3.state = o3.__s;
          while (o3.__d && ++j2 < 25);
        o3.state = o3.__s, o3.getChildContext != null && (i = b(b({}, i), o3.getChildContext())), m2 || o3.getSnapshotBeforeUpdate == null || (k3 = o3.getSnapshotBeforeUpdate(f2, h2)), _e(e, F(N2 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N2 : [N2], _, t2, i, n2, r3, l3, u3, c2, s2), o3.base = _.__e, _.__u &= -161, o3.__h.length && l3.push(o3), v2 && (o3.__E = o3.__ = null);
      } catch (L3) {
        _.__v = null, c2 || r3 != null ? (_.__e = u3, _.__u |= c2 ? 160 : 32, r3[r3.indexOf(u3)] = null) : (_.__e = t2.__e, _.__k = t2.__k), a.__e(L3, _, t2);
      }
    else
      r3 == null && _.__v === t2.__v ? (_.__k = t2.__k, _.__e = t2.__e) : _.__e = fe(t2.__e, _, t2, i, n2, r3, l3, c2, s2);
  (p4 = a.diffed) && p4(_);
}
function R(e, _, t2) {
  for (var i = 0; i < t2.length; i++)
    V(t2[i], t2[++i], t2[++i]);
  a.__c && a.__c(_, e), e.some(function(n2) {
    try {
      e = n2.__h, n2.__h = [], e.some(function(r3) {
        r3.call(n2);
      });
    } catch (r3) {
      a.__e(r3, n2.__v);
    }
  });
}
function fe(e, _, t2, i, n2, r3, l3, u3, c2) {
  var s2, p4, o3, m2, f2, h2, k3, v2 = t2.props, d4 = _.props, y3 = _.type;
  if (y3 === "svg" && (n2 = true), r3 != null) {
    for (s2 = 0; s2 < r3.length; s2++)
      if ((f2 = r3[s2]) && "setAttribute" in f2 == !!y3 && (y3 ? f2.localName === y3 : f2.nodeType === 3)) {
        e = f2, r3[s2] = null;
        break;
      }
  }
  if (e == null) {
    if (y3 === null)
      return document.createTextNode(d4);
    e = n2 ? document.createElementNS("http://www.w3.org/2000/svg", y3) : document.createElement(y3, d4.is && d4), r3 = null, u3 = false;
  }
  if (y3 === null)
    v2 === d4 || u3 && e.data === d4 || (e.data = d4);
  else {
    if (r3 = r3 && D.call(e.childNodes), v2 = t2.props || E, !u3 && r3 != null)
      for (v2 = {}, s2 = 0; s2 < e.attributes.length; s2++)
        v2[(f2 = e.attributes[s2]).name] = f2.value;
    for (s2 in v2)
      f2 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o3 = f2 : s2 === "key" || s2 in d4 || M(e, s2, null, f2, n2));
    for (s2 in d4)
      f2 = d4[s2], s2 == "children" ? m2 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h2 = f2 : s2 == "checked" ? k3 = f2 : s2 === "key" || u3 && typeof f2 != "function" || v2[s2] === f2 || M(e, s2, f2, v2[s2], n2);
    if (p4)
      u3 || o3 && (p4.__html === o3.__html || p4.__html === e.innerHTML) || (e.innerHTML = p4.__html), _.__k = [];
    else if (o3 && (e.innerHTML = ""), _e(e, F(m2) ? m2 : [m2], _, t2, i, n2 && y3 !== "foreignObject", r3, l3, r3 ? r3[0] : t2.__k && w(t2, 0), u3, c2), r3 != null)
      for (s2 = r3.length; s2--; )
        r3[s2] != null && Z(r3[s2]);
    u3 || (s2 = "value", h2 !== void 0 && (h2 !== e[s2] || y3 === "progress" && !h2 || y3 === "option" && h2 !== v2[s2]) && M(e, s2, h2, v2[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e[s2] && M(e, s2, k3, v2[s2], false));
  }
  return e;
}
function V(e, _, t2) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (i) {
    a.__e(i, t2);
  }
}
function B(e, _, t2) {
  var i, n2;
  if (a.unmount && a.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || V(i, null, _)), (i = e.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r3) {
        a.__e(r3, _);
      }
    i.base = i.__P = null, e.__c = void 0;
  }
  if (i = e.__k)
    for (n2 = 0; n2 < i.length; n2++)
      i[n2] && B(i[n2], _, t2 || typeof e.type != "function");
  t2 || e.__e == null || Z(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ce(e, _, t2) {
  return this.constructor(e, t2);
}
function he(e, _, t2) {
  var i, n2, r3, l3, u3 = b({}, e.props);
  for (r3 in e.type && e.type.defaultProps && (l3 = e.type.defaultProps), _)
    r3 == "key" ? i = _[r3] : r3 == "ref" ? n2 = _[r3] : u3[r3] = _[r3] === void 0 && l3 !== void 0 ? l3[r3] : _[r3];
  return arguments.length > 2 && (u3.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e.type, u3, i || e.key, n2 || e.ref, null);
}
D = O.slice, a = { __e: function(e, _, t2, i) {
  for (var n2, r3, l3; _ = _.__; )
    if ((n2 = _.__c) && !n2.__)
      try {
        if ((r3 = n2.constructor) && r3.getDerivedStateFromError != null && (n2.setState(r3.getDerivedStateFromError(e)), l3 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e, i || {}), l3 = n2.__d), l3)
          return n2.__E = n2;
      } catch (u3) {
        e = u3;
      }
  throw e;
} }, Q = 0, ne = function(e) {
  return e != null && e.constructor == null;
}, W.prototype.setState = function(e, _) {
  var t2;
  t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e == "function" && (e = e(b({}, t2), this.props)), e && b(t2, e), e != null && this.__v && (_ && this._sb.push(_), I(this));
}, W.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = true, e && this.__h.push(e), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, A.__r = 0, Y = 0;

// https://esm.sh/stable/preact@10.19.6/denonext/hooks.js
var c;
var r2;
var H2;
var b2;
var v = 0;
var x2 = [];
var p2 = [];
var o2 = a;
var g = o2.__b;
var C = o2.__r;
var A2 = o2.diffed;
var D2 = o2.__c;
var F2 = o2.unmount;
var k = o2.__;
function l(t2, _) {
  o2.__h && o2.__h(r2, t2, v || _), v = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t2 >= u3.__.length && u3.__.push({ __V: p2 }), u3.__[t2];
}
function z2(t2, _) {
  var u3 = l(c++, 3);
  !o2.__s && y(u3.__H, _) && (u3.__ = t2, u3.i = _, r2.__H.__h.push(u3));
}
function W2() {
  for (var t2; t2 = x2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(d2), t2.__H.__h.forEach(E2), t2.__H.__h = [];
      } catch (_) {
        t2.__H.__h = [], o2.__e(_, t2.__v);
      }
}
o2.__b = function(t2) {
  r2 = null, g && g(t2);
}, o2.__ = function(t2, _) {
  t2 && _.__k && _.__k.__m && (t2.__m = _.__k.__m), k && k(t2, _);
}, o2.__r = function(t2) {
  C && C(t2), c = 0;
  var _ = (r2 = t2.__c).__H;
  _ && (H2 === r2 ? (_.__h = [], r2.__h = [], _.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = p2, u3.__N = u3.i = void 0;
  })) : (_.__h.forEach(d2), _.__h.forEach(E2), _.__h = [], c = 0)), H2 = r2;
}, o2.diffed = function(t2) {
  A2 && A2(t2);
  var _ = t2.__c;
  _ && _.__H && (_.__H.__h.length && (x2.push(_) !== 1 && b2 === o2.requestAnimationFrame || ((b2 = o2.requestAnimationFrame) || j)(W2)), _.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== p2 && (u3.__ = u3.__V), u3.i = void 0, u3.__V = p2;
  })), H2 = r2 = null;
}, o2.__c = function(t2, _) {
  _.some(function(u3) {
    try {
      u3.__h.forEach(d2), u3.__h = u3.__h.filter(function(n2) {
        return !n2.__ || E2(n2);
      });
    } catch (n2) {
      _.some(function(i) {
        i.__h && (i.__h = []);
      }), _ = [], o2.__e(n2, u3.__v);
    }
  }), D2 && D2(t2, _);
}, o2.unmount = function(t2) {
  F2 && F2(t2);
  var _, u3 = t2.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      d2(n2);
    } catch (i) {
      _ = i;
    }
  }), u3.__H = void 0, _ && o2.__e(_, u3.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _, u3 = function() {
    clearTimeout(n2), q2 && cancelAnimationFrame(_), setTimeout(t2);
  }, n2 = setTimeout(u3, 100);
  q2 && (_ = requestAnimationFrame(u3));
}
function d2(t2) {
  var _ = r2, u3 = t2.__c;
  typeof u3 == "function" && (t2.__c = void 0, u3()), r2 = _;
}
function E2(t2) {
  var _ = r2;
  t2.__c = t2.__(), r2 = _;
}
function y(t2, _) {
  return !t2 || t2.length !== _.length || _.some(function(u3, n2) {
    return u3 !== t2[n2];
  });
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e, t2) {
  for (var n2 in t2)
    e[n2] = t2[n2];
  return e;
}
function b3(e, t2) {
  for (var n2 in e)
    if (n2 !== "__source" && !(n2 in t2))
      return true;
  for (var r3 in t2)
    if (r3 !== "__source" && e[r3] !== t2[r3])
      return true;
  return false;
}
function C2(e, t2) {
  this.props = e, this.context = t2;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e, t2) {
  return b3(this.props, e) || b3(this.state, t2);
};
var N = a.__b;
a.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), N && N(e);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e) {
  function t2(n2) {
    var r3 = L2({}, n2);
    return delete r3.ref, e(r3, n2.ref || null);
  }
  return t2.$$typeof = X2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t2;
}
var R3 = function(e, t2) {
  return e == null ? null : se(se(e).map(t2));
};
var te2 = { map: R3, forEach: R3, count: function(e) {
  return e ? se(e).length : 0;
}, only: function(e) {
  var t2 = se(e);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e, t2, n2, r3) {
  if (e.then) {
    for (var o3, u3 = t2; u3 = u3.__; )
      if ((o3 = u3.__c) && o3.__c)
        return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), o3.__c(e, t2);
  }
  ne2(e, t2, n2, r3);
};
var x3 = a.unmount;
function T2(e, t2, n2) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r3) {
    typeof r3.__c == "function" && r3.__c();
  }), e.__c.__H = null), (e = L2({}, e)).__c != null && (e.__c.__P === n2 && (e.__c.__P = t2), e.__c = null), e.__k = e.__k && e.__k.map(function(r3) {
    return T2(r3, t2, n2);
  })), e;
}
function A3(e, t2, n2) {
  return e && n2 && (e.__v = null, e.__k = e.__k && e.__k.map(function(r3) {
    return A3(r3, t2, n2);
  }), e.__c && e.__c.__P === t2 && (e.__e && n2.appendChild(e.__e), e.__c.__e = true, e.__c.__P = n2)), e;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e) {
  var t2 = e.__.__c;
  return t2 && t2.__a && t2.__a(e);
}
function p3() {
  this.u = null, this.o = null;
}
a.unmount = function(e) {
  var t2 = e.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & e.__u && (e.type = null), x3 && x3(e);
}, (h.prototype = new W()).__c = function(e, t2) {
  var n2 = t2.__c, r3 = this;
  r3.t == null && (r3.t = []), r3.t.push(n2);
  var o3 = F3(r3.__v), u3 = false, a2 = function() {
    u3 || (u3 = true, n2.__R = null, o3 ? o3(l3) : l3());
  };
  n2.__R = a2;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var s2 = r3.state.__a;
        r3.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g2;
      for (r3.setState({ __a: r3.__b = null }); g2 = r3.t.pop(); )
        g2.forceUpdate();
    }
  };
  r3.__u++ || 32 & t2.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), e.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n2, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var o3 = t2.__a && re(H, null, e.fallback);
  return o3 && (o3.__u &= -33), [re(H, null, t2.__a ? null : e.children), o3];
};
var k2 = function(e, t2, n2) {
  if (++n2[1] === n2[0] && e.o.delete(t2), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n2 = e.u; n2; ) {
      for (; n2.length > 3; )
        n2.pop()();
      if (n2[1] < n2[0])
        break;
      e.u = n2 = n2[2];
    }
};
(p3.prototype = new W()).__a = function(e) {
  var t2 = this, n2 = F3(t2.__v), r3 = t2.o.get(e);
  return r3[0]++, function(o3) {
    var u3 = function() {
      t2.props.revealOrder ? (r3.push(o3), k2(t2, e, r3)) : o3();
    };
    n2 ? n2(u3) : u3();
  };
}, p3.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t2.reverse();
  for (var n2 = t2.length; n2--; )
    this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e.children;
}, p3.prototype.componentDidUpdate = p3.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t2, n2) {
    k2(e, n2, t2);
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
  }, set: function(t2) {
    Object.defineProperty(this, e, { configurable: true, writable: true, value: t2 });
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
  typeof e.type == "string" && function(t2) {
    var n2 = t2.props, r3 = t2.type, o3 = {};
    for (var u3 in n2) {
      var a2 = n2[u3];
      if (!(u3 === "value" && "defaultValue" in n2 && a2 == null || _e2 && u3 === "children" && r3 === "noscript" || u3 === "class" || u3 === "className")) {
        var l3 = u3.toLowerCase();
        u3 === "defaultValue" && "value" in n2 && n2.value == null ? u3 = "value" : u3 === "download" && a2 === true ? a2 = "" : l3 === "translate" && a2 === "no" ? a2 = false : l3 === "ondoubleclick" ? u3 = "ondblclick" : l3 !== "onchange" || r3 !== "input" && r3 !== "textarea" || ce2(n2.type) ? l3 === "onfocus" ? u3 = "onfocusin" : l3 === "onblur" ? u3 = "onfocusout" : le2.test(u3) ? u3 = l3 : r3.indexOf("-") === -1 && ie2.test(u3) ? u3 = u3.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l3 = u3 = "oninput", l3 === "oninput" && o3[u3 = l3] && (u3 = "oninputCapture"), o3[u3] = a2;
      }
    }
    r3 == "select" && o3.multiple && Array.isArray(o3.value) && (o3.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o3.value.indexOf(s2.props.value) != -1;
    })), r3 == "select" && o3.defaultValue != null && (o3.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o3.multiple ? o3.defaultValue.indexOf(s2.props.value) != -1 : o3.defaultValue == s2.props.value;
    })), n2.class && !n2.className ? (o3.class = n2.class, Object.defineProperty(o3, "className", me)) : (n2.className && !n2.class || n2.class && n2.className) && (o3.class = o3.className = n2.className), t2.props = o3;
  }(e), e.$$typeof = V2, P && P(e);
};
var w2 = a.__r;
a.__r = function(e) {
  w2 && w2(e), S3 = e.__c;
};
var U = a.diffed;
a.diffed = function(e) {
  U && U(e);
  var t2 = e.props, n2 = e.__e;
  n2 != null && e.type === "textarea" && "value" in t2 && t2.value !== n2.value && (n2.value = t2.value == null ? "" : t2.value), S3 = null;
};
function m(e) {
  return !!e && e.$$typeof === V2;
}
function Ee(e) {
  return m(e) ? he.apply(null, arguments) : e;
}

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e, f2) {
  typeof e == "function" ? e(f2) : e != null && (e.current = f2);
}
function t(...e) {
  return (f2) => e.forEach((o3) => n(o3, f2));
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n2, t2) => {
  let { children: e, ...r3 } = n2, o3 = te2.toArray(e), l3 = o3.find(I3);
  if (l3) {
    let c2 = l3.props.children, a2 = o3.map((m2) => m2 === l3 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m2);
    return re($2, p({}, r3, { ref: t2 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p({}, r3, { ref: t2 }), e);
});
b4.displayName = "Slot";
var $2 = ee2((n2, t2) => {
  let { children: e, ...r3 } = n2;
  return m(e) ? Ee(e, { ...X3(r3, e.props), ref: t2 ? t(t2, e.ref) : e.ref }) : te2.count(e) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y2 = ({ children: n2 }) => re(H, null, n2);
function I3(n2) {
  return m(n2) && n2.type === y2;
}
function X3(n2, t2) {
  let e = { ...t2 };
  for (let r3 in t2) {
    let o3 = n2[r3], l3 = t2[r3];
    /^on[A-Z]/.test(r3) ? o3 && l3 ? e[r3] = (...a2) => {
      l3(...a2), o3(...a2);
    } : o3 && (e[r3] = o3) : r3 === "style" ? e[r3] = { ...o3, ...l3 } : r3 === "className" && (e[r3] = [o3, l3].filter(Boolean).join(" "));
  }
  return { ...n2, ...e };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u2 = d3.reduce((t2, e) => {
  let f2 = ee2((r3, o3) => {
    let { asChild: s2, ...a2 } = r3, i = s2 ? b4 : e;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i, p({}, a2, { ref: o3 }));
  });
  return f2.displayName = `Primitive.${e}`, { ...t2, [e]: f2 };
}, {});

// https://esm.sh/v133/@radix-ui/react-aspect-ratio@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-aspect-ratio.mjs
var $3 = ee2((e, a2) => {
  let { ratio: o3 = 1, style: r3, ...i } = e;
  return re("div", { style: { position: "relative", width: "100%", paddingBottom: `${100 / o3}%` }, "data-radix-aspect-ratio-wrapper": "" }, re(u2.div, p({}, i, { ref: a2, style: { ...r3, position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } })));
});
var l2 = $3;

// ../components/ui/aspect-ratio.tsx
var AspectRatio = l2;
export {
  AspectRatio
};
