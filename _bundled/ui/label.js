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
  for (var t2 in _)
    e2[t2] = _[t2];
  return e2;
}
function Z(e2) {
  var _ = e2.parentNode;
  _ && _.removeChild(e2);
}
function re(e2, _, t2) {
  var i2, n2, r3, l3 = {};
  for (r3 in _)
    r3 == "key" ? i2 = _[r3] : r3 == "ref" ? n2 = _[r3] : l3[r3] = _[r3];
  if (arguments.length > 2 && (l3.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e2 == "function" && e2.defaultProps != null)
    for (r3 in e2.defaultProps)
      l3[r3] === void 0 && (l3[r3] = e2.defaultProps[r3]);
  return S(e2, l3, i2, n2, null);
}
function S(e2, _, t2, i2, n2) {
  var r3 = { type: e2, props: _, key: t2, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n2 ?? ++Q, __i: -1, __u: 0 };
  return n2 == null && a.vnode != null && a.vnode(r3), r3;
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
  for (var t2; _ < e2.__k.length; _++)
    if ((t2 = e2.__k[_]) != null && t2.__e != null)
      return t2.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function ie(e2, _, t2) {
  var i2, n2 = e2.__v, r3 = n2.__e, l3 = e2.__P;
  if (l3)
    return (i2 = b({}, n2)).__v = n2.__v + 1, a.vnode && a.vnode(i2), G(l3, i2, n2, e2.__n, l3.ownerSVGElement !== void 0, 32 & n2.__u ? [r3] : null, _, r3 ?? w(n2), !!(32 & n2.__u), t2), i2.__v = n2.__v, i2.__.__k[i2.__i] = i2, i2.__d = void 0, i2.__e != r3 && ee(i2), i2;
}
function ee(e2) {
  var _, t2;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, _ = 0; _ < e2.__k.length; _++)
      if ((t2 = e2.__k[_]) != null && t2.__e != null) {
        e2.__e = e2.__c.base = t2.__e;
        break;
      }
    return ee(e2);
  }
}
function I(e2) {
  (!e2.__d && (e2.__d = true) && x.push(e2) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e2, _, t2, i2 = [], n2 = [];
  for (x.sort($); e2 = x.shift(); )
    e2.__d && (t2 = x.length, _ = ie(e2, i2, n2) || _, t2 === 0 || x.length > t2 ? (R(i2, _, n2), n2.length = i2.length = 0, _ = void 0, x.sort($)) : _ && a.__c && a.__c(_, O));
  _ && R(i2, _, n2), A.__r = 0;
}
function _e(e2, _, t2, i2, n2, r3, l3, u3, c2, s2, p4) {
  var o4, m4, f3, h3, k3, v2 = i2 && i2.__k || O, d6 = _.length;
  for (t2.__d = c2, le(t2, _, v2), c2 = t2.__d, o4 = 0; o4 < d6; o4++)
    (f3 = t2.__k[o4]) != null && typeof f3 != "boolean" && typeof f3 != "function" && (m4 = f3.__i === -1 ? E : v2[f3.__i] || E, f3.__i = o4, G(e2, f3, m4, n2, r3, l3, u3, c2, s2, p4), h3 = f3.__e, f3.ref && m4.ref != f3.ref && (m4.ref && V(m4.ref, null, f3), p4.push(f3.ref, f3.__c || h3, f3)), k3 == null && h3 != null && (k3 = h3), 65536 & f3.__u || m4.__k === f3.__k ? c2 = te(f3, c2, e2) : typeof f3.type == "function" && f3.__d !== void 0 ? c2 = f3.__d : h3 && (c2 = h3.nextSibling), f3.__d = void 0, f3.__u &= -196609);
  t2.__d = c2, t2.__e = k3;
}
function le(e2, _, t2) {
  var i2, n2, r3, l3, u3, c2 = _.length, s2 = t2.length, p4 = s2, o4 = 0;
  for (e2.__k = [], i2 = 0; i2 < c2; i2++)
    l3 = i2 + o4, (n2 = e2.__k[i2] = (n2 = _[i2]) == null || typeof n2 == "boolean" || typeof n2 == "function" ? null : typeof n2 == "string" || typeof n2 == "number" || typeof n2 == "bigint" || n2.constructor == String ? S(null, n2, null, null, null) : F(n2) ? S(H, { children: n2 }, null, null, null) : n2.constructor === void 0 && n2.__b > 0 ? S(n2.type, n2.props, n2.key, n2.ref ? n2.ref : null, n2.__v) : n2) != null ? (n2.__ = e2, n2.__b = e2.__b + 1, u3 = ue(n2, t2, l3, p4), n2.__i = u3, r3 = null, u3 !== -1 && (p4--, (r3 = t2[u3]) && (r3.__u |= 131072)), r3 == null || r3.__v === null ? (u3 == -1 && o4--, typeof n2.type != "function" && (n2.__u |= 65536)) : u3 !== l3 && (u3 === l3 + 1 ? o4++ : u3 > l3 ? p4 > c2 - l3 ? o4 += u3 - l3 : o4-- : u3 < l3 ? u3 == l3 - 1 && (o4 = u3 - l3) : o4 = 0, u3 !== i2 + o4 && (n2.__u |= 65536))) : (r3 = t2[l3]) && r3.key == null && r3.__e && !(131072 & r3.__u) && (r3.__e == e2.__d && (e2.__d = w(r3)), B(r3, r3, false), t2[l3] = null, p4--);
  if (p4)
    for (i2 = 0; i2 < s2; i2++)
      (r3 = t2[i2]) != null && !(131072 & r3.__u) && (r3.__e == e2.__d && (e2.__d = w(r3)), B(r3, r3));
}
function te(e2, _, t2) {
  var i2, n2;
  if (typeof e2.type == "function") {
    for (i2 = e2.__k, n2 = 0; i2 && n2 < i2.length; n2++)
      i2[n2] && (i2[n2].__ = e2, _ = te(i2[n2], _, t2));
    return _;
  }
  e2.__e != _ && (t2.insertBefore(e2.__e, _ || null), _ = e2.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function se(e2, _) {
  return _ = _ || [], e2 == null || typeof e2 == "boolean" || (F(e2) ? e2.some(function(t2) {
    se(t2, _);
  }) : _.push(e2)), _;
}
function ue(e2, _, t2, i2) {
  var n2 = e2.key, r3 = e2.type, l3 = t2 - 1, u3 = t2 + 1, c2 = _[t2];
  if (c2 === null || c2 && n2 == c2.key && r3 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i2 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
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
function q(e2, _, t2) {
  _[0] === "-" ? e2.setProperty(_, t2 ?? "") : e2[_] = t2 == null ? "" : typeof t2 != "number" || oe.test(_) ? t2 : t2 + "px";
}
function M(e2, _, t2, i2, n2) {
  var r3;
  e:
    if (_ === "style")
      if (typeof t2 == "string")
        e2.style.cssText = t2;
      else {
        if (typeof i2 == "string" && (e2.style.cssText = i2 = ""), i2)
          for (_ in i2)
            t2 && _ in t2 || q(e2.style, _, "");
        if (t2)
          for (_ in t2)
            i2 && t2[_] === i2[_] || q(e2.style, _, t2[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      r3 = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e2 ? _.toLowerCase().slice(2) : _.slice(2), e2.l || (e2.l = {}), e2.l[_ + r3] = t2, t2 ? i2 ? t2.u = i2.u : (t2.u = Date.now(), e2.addEventListener(_, r3 ? K : J, r3)) : e2.removeEventListener(_, r3 ? K : J, r3);
    else {
      if (n2)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e2)
        try {
          e2[_] = t2 ?? "";
          break e;
        } catch {
        }
      typeof t2 == "function" || (t2 == null || t2 === false && _[4] !== "-" ? e2.removeAttribute(_) : e2.setAttribute(_, t2));
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
function G(e2, _, t2, i2, n2, r3, l3, u3, c2, s2) {
  var p4, o4, m4, f3, h3, k3, v2, d6, y4, C4, T4, P3, j2, U3, N2, g3 = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r3 = [u3 = _.__e = t2.__e]), (p4 = a.__b) && p4(_);
  e:
    if (typeof g3 == "function")
      try {
        if (d6 = _.props, y4 = (p4 = g3.contextType) && i2[p4.__c], C4 = p4 ? y4 ? y4.props.value : p4.__ : i2, t2.__c ? v2 = (o4 = _.__c = t2.__c).__ = o4.__E : ("prototype" in g3 && g3.prototype.render ? _.__c = o4 = new g3(d6, C4) : (_.__c = o4 = new W(d6, C4), o4.constructor = g3, o4.render = ce), y4 && y4.sub(o4), o4.props = d6, o4.state || (o4.state = {}), o4.context = C4, o4.__n = i2, m4 = o4.__d = true, o4.__h = [], o4._sb = []), o4.__s == null && (o4.__s = o4.state), g3.getDerivedStateFromProps != null && (o4.__s == o4.state && (o4.__s = b({}, o4.__s)), b(o4.__s, g3.getDerivedStateFromProps(d6, o4.__s))), f3 = o4.props, h3 = o4.state, o4.__v = _, m4)
          g3.getDerivedStateFromProps == null && o4.componentWillMount != null && o4.componentWillMount(), o4.componentDidMount != null && o4.__h.push(o4.componentDidMount);
        else {
          if (g3.getDerivedStateFromProps == null && d6 !== f3 && o4.componentWillReceiveProps != null && o4.componentWillReceiveProps(d6, C4), !o4.__e && (o4.shouldComponentUpdate != null && o4.shouldComponentUpdate(d6, o4.__s, C4) === false || _.__v === t2.__v)) {
            for (_.__v !== t2.__v && (o4.props = d6, o4.state = o4.__s, o4.__d = false), _.__e = t2.__e, _.__k = t2.__k, _.__k.forEach(function(L4) {
              L4 && (L4.__ = _);
            }), T4 = 0; T4 < o4._sb.length; T4++)
              o4.__h.push(o4._sb[T4]);
            o4._sb = [], o4.__h.length && l3.push(o4);
            break e;
          }
          o4.componentWillUpdate != null && o4.componentWillUpdate(d6, o4.__s, C4), o4.componentDidUpdate != null && o4.__h.push(function() {
            o4.componentDidUpdate(f3, h3, k3);
          });
        }
        if (o4.context = C4, o4.props = d6, o4.__P = e2, o4.__e = false, P3 = a.__r, j2 = 0, "prototype" in g3 && g3.prototype.render) {
          for (o4.state = o4.__s, o4.__d = false, P3 && P3(_), p4 = o4.render(o4.props, o4.state, o4.context), U3 = 0; U3 < o4._sb.length; U3++)
            o4.__h.push(o4._sb[U3]);
          o4._sb = [];
        } else
          do
            o4.__d = false, P3 && P3(_), p4 = o4.render(o4.props, o4.state, o4.context), o4.state = o4.__s;
          while (o4.__d && ++j2 < 25);
        o4.state = o4.__s, o4.getChildContext != null && (i2 = b(b({}, i2), o4.getChildContext())), m4 || o4.getSnapshotBeforeUpdate == null || (k3 = o4.getSnapshotBeforeUpdate(f3, h3)), _e(e2, F(N2 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N2 : [N2], _, t2, i2, n2, r3, l3, u3, c2, s2), o4.base = _.__e, _.__u &= -161, o4.__h.length && l3.push(o4), v2 && (o4.__E = o4.__ = null);
      } catch (L4) {
        _.__v = null, c2 || r3 != null ? (_.__e = u3, _.__u |= c2 ? 160 : 32, r3[r3.indexOf(u3)] = null) : (_.__e = t2.__e, _.__k = t2.__k), a.__e(L4, _, t2);
      }
    else
      r3 == null && _.__v === t2.__v ? (_.__k = t2.__k, _.__e = t2.__e) : _.__e = fe(t2.__e, _, t2, i2, n2, r3, l3, c2, s2);
  (p4 = a.diffed) && p4(_);
}
function R(e2, _, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    V(t2[i2], t2[++i2], t2[++i2]);
  a.__c && a.__c(_, e2), e2.some(function(n2) {
    try {
      e2 = n2.__h, n2.__h = [], e2.some(function(r3) {
        r3.call(n2);
      });
    } catch (r3) {
      a.__e(r3, n2.__v);
    }
  });
}
function fe(e2, _, t2, i2, n2, r3, l3, u3, c2) {
  var s2, p4, o4, m4, f3, h3, k3, v2 = t2.props, d6 = _.props, y4 = _.type;
  if (y4 === "svg" && (n2 = true), r3 != null) {
    for (s2 = 0; s2 < r3.length; s2++)
      if ((f3 = r3[s2]) && "setAttribute" in f3 == !!y4 && (y4 ? f3.localName === y4 : f3.nodeType === 3)) {
        e2 = f3, r3[s2] = null;
        break;
      }
  }
  if (e2 == null) {
    if (y4 === null)
      return document.createTextNode(d6);
    e2 = n2 ? document.createElementNS("http://www.w3.org/2000/svg", y4) : document.createElement(y4, d6.is && d6), r3 = null, u3 = false;
  }
  if (y4 === null)
    v2 === d6 || u3 && e2.data === d6 || (e2.data = d6);
  else {
    if (r3 = r3 && D.call(e2.childNodes), v2 = t2.props || E, !u3 && r3 != null)
      for (v2 = {}, s2 = 0; s2 < e2.attributes.length; s2++)
        v2[(f3 = e2.attributes[s2]).name] = f3.value;
    for (s2 in v2)
      f3 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o4 = f3 : s2 === "key" || s2 in d6 || M(e2, s2, null, f3, n2));
    for (s2 in d6)
      f3 = d6[s2], s2 == "children" ? m4 = f3 : s2 == "dangerouslySetInnerHTML" ? p4 = f3 : s2 == "value" ? h3 = f3 : s2 == "checked" ? k3 = f3 : s2 === "key" || u3 && typeof f3 != "function" || v2[s2] === f3 || M(e2, s2, f3, v2[s2], n2);
    if (p4)
      u3 || o4 && (p4.__html === o4.__html || p4.__html === e2.innerHTML) || (e2.innerHTML = p4.__html), _.__k = [];
    else if (o4 && (e2.innerHTML = ""), _e(e2, F(m4) ? m4 : [m4], _, t2, i2, n2 && y4 !== "foreignObject", r3, l3, r3 ? r3[0] : t2.__k && w(t2, 0), u3, c2), r3 != null)
      for (s2 = r3.length; s2--; )
        r3[s2] != null && Z(r3[s2]);
    u3 || (s2 = "value", h3 !== void 0 && (h3 !== e2[s2] || y4 === "progress" && !h3 || y4 === "option" && h3 !== v2[s2]) && M(e2, s2, h3, v2[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e2[s2] && M(e2, s2, k3, v2[s2], false));
  }
  return e2;
}
function V(e2, _, t2) {
  try {
    typeof e2 == "function" ? e2(_) : e2.current = _;
  } catch (i2) {
    a.__e(i2, t2);
  }
}
function B(e2, _, t2) {
  var i2, n2;
  if (a.unmount && a.unmount(e2), (i2 = e2.ref) && (i2.current && i2.current !== e2.__e || V(i2, null, _)), (i2 = e2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (r3) {
        a.__e(r3, _);
      }
    i2.base = i2.__P = null, e2.__c = void 0;
  }
  if (i2 = e2.__k)
    for (n2 = 0; n2 < i2.length; n2++)
      i2[n2] && B(i2[n2], _, t2 || typeof e2.type != "function");
  t2 || e2.__e == null || Z(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function ce(e2, _, t2) {
  return this.constructor(e2, t2);
}
function he(e2, _, t2) {
  var i2, n2, r3, l3, u3 = b({}, e2.props);
  for (r3 in e2.type && e2.type.defaultProps && (l3 = e2.type.defaultProps), _)
    r3 == "key" ? i2 = _[r3] : r3 == "ref" ? n2 = _[r3] : u3[r3] = _[r3] === void 0 && l3 !== void 0 ? l3[r3] : _[r3];
  return arguments.length > 2 && (u3.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e2.type, u3, i2 || e2.key, n2 || e2.ref, null);
}
D = O.slice, a = { __e: function(e2, _, t2, i2) {
  for (var n2, r3, l3; _ = _.__; )
    if ((n2 = _.__c) && !n2.__)
      try {
        if ((r3 = n2.constructor) && r3.getDerivedStateFromError != null && (n2.setState(r3.getDerivedStateFromError(e2)), l3 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e2, i2 || {}), l3 = n2.__d), l3)
          return n2.__E = n2;
      } catch (u3) {
        e2 = u3;
      }
  throw e2;
} }, Q = 0, ne = function(e2) {
  return e2 != null && e2.constructor == null;
}, W.prototype.setState = function(e2, _) {
  var t2;
  t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e2 == "function" && (e2 = e2(b({}, t2), this.props)), e2 && b(t2, e2), e2 != null && this.__v && (_ && this._sb.push(_), I(this));
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
function l(t2, _) {
  o.__h && o.__h(r, t2, v || _), v = 0;
  var u3 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= u3.__.length && u3.__.push({ __V: p }), u3.__[t2];
}
function z2(t2, _) {
  var u3 = l(c++, 3);
  !o.__s && y(u3.__H, _) && (u3.__ = t2, u3.i = _, r.__H.__h.push(u3));
}
function W2() {
  for (var t2; t2 = x2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(d), t2.__H.__h.forEach(E2), t2.__H.__h = [];
      } catch (_) {
        t2.__H.__h = [], o.__e(_, t2.__v);
      }
}
o.__b = function(t2) {
  r = null, g && g(t2);
}, o.__ = function(t2, _) {
  t2 && _.__k && _.__k.__m && (t2.__m = _.__k.__m), k && k(t2, _);
}, o.__r = function(t2) {
  C && C(t2), c = 0;
  var _ = (r = t2.__c).__H;
  _ && (H2 === r ? (_.__h = [], r.__h = [], _.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = p, u3.__N = u3.i = void 0;
  })) : (_.__h.forEach(d), _.__h.forEach(E2), _.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t2) {
  A2 && A2(t2);
  var _ = t2.__c;
  _ && _.__H && (_.__H.__h.length && (x2.push(_) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== p && (u3.__ = u3.__V), u3.i = void 0, u3.__V = p;
  })), H2 = r = null;
}, o.__c = function(t2, _) {
  _.some(function(u3) {
    try {
      u3.__h.forEach(d), u3.__h = u3.__h.filter(function(n2) {
        return !n2.__ || E2(n2);
      });
    } catch (n2) {
      _.some(function(i2) {
        i2.__h && (i2.__h = []);
      }), _ = [], o.__e(n2, u3.__v);
    }
  }), D2 && D2(t2, _);
}, o.unmount = function(t2) {
  F2 && F2(t2);
  var _, u3 = t2.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      d(n2);
    } catch (i2) {
      _ = i2;
    }
  }), u3.__H = void 0, _ && o.__e(_, u3.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _, u3 = function() {
    clearTimeout(n2), q2 && cancelAnimationFrame(_), setTimeout(t2);
  }, n2 = setTimeout(u3, 100);
  q2 && (_ = requestAnimationFrame(u3));
}
function d(t2) {
  var _ = r, u3 = t2.__c;
  typeof u3 == "function" && (t2.__c = void 0, u3()), r = _;
}
function E2(t2) {
  var _ = r;
  t2.__c = t2.__(), r = _;
}
function y(t2, _) {
  return !t2 || t2.length !== _.length || _.some(function(u3, n2) {
    return u3 !== t2[n2];
  });
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function b3(e2, t2) {
  for (var n2 in e2)
    if (n2 !== "__source" && !(n2 in t2))
      return true;
  for (var r3 in t2)
    if (r3 !== "__source" && e2[r3] !== t2[r3])
      return true;
  return false;
}
function C2(e2, t2) {
  this.props = e2, this.context = t2;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e2, t2) {
  return b3(this.props, e2) || b3(this.state, t2);
};
var N = a.__b;
a.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), N && N(e2);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e2) {
  function t2(n2) {
    var r3 = L2({}, n2);
    return delete r3.ref, e2(r3, n2.ref || null);
  }
  return t2.$$typeof = X2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
}
var R3 = function(e2, t2) {
  return e2 == null ? null : se(se(e2).map(t2));
};
var te2 = { map: R3, forEach: R3, count: function(e2) {
  return e2 ? se(e2).length : 0;
}, only: function(e2) {
  var t2 = se(e2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e2, t2, n2, r3) {
  if (e2.then) {
    for (var o4, u3 = t2; u3 = u3.__; )
      if ((o4 = u3.__c) && o4.__c)
        return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), o4.__c(e2, t2);
  }
  ne2(e2, t2, n2, r3);
};
var x3 = a.unmount;
function T2(e2, t2, n2) {
  return e2 && (e2.__c && e2.__c.__H && (e2.__c.__H.__.forEach(function(r3) {
    typeof r3.__c == "function" && r3.__c();
  }), e2.__c.__H = null), (e2 = L2({}, e2)).__c != null && (e2.__c.__P === n2 && (e2.__c.__P = t2), e2.__c = null), e2.__k = e2.__k && e2.__k.map(function(r3) {
    return T2(r3, t2, n2);
  })), e2;
}
function A3(e2, t2, n2) {
  return e2 && n2 && (e2.__v = null, e2.__k = e2.__k && e2.__k.map(function(r3) {
    return A3(r3, t2, n2);
  }), e2.__c && e2.__c.__P === t2 && (e2.__e && n2.appendChild(e2.__e), e2.__c.__e = true, e2.__c.__P = n2)), e2;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e2) {
  var t2 = e2.__.__c;
  return t2 && t2.__a && t2.__a(e2);
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e2) {
  var t2 = e2.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & e2.__u && (e2.type = null), x3 && x3(e2);
}, (h.prototype = new W()).__c = function(e2, t2) {
  var n2 = t2.__c, r3 = this;
  r3.t == null && (r3.t = []), r3.t.push(n2);
  var o4 = F3(r3.__v), u3 = false, a2 = function() {
    u3 || (u3 = true, n2.__R = null, o4 ? o4(l3) : l3());
  };
  n2.__R = a2;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var s2 = r3.state.__a;
        r3.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g3;
      for (r3.setState({ __a: r3.__b = null }); g3 = r3.t.pop(); )
        g3.forceUpdate();
    }
  };
  r3.__u++ || 32 & t2.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), e2.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n2, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var o4 = t2.__a && re(H, null, e2.fallback);
  return o4 && (o4.__u &= -33), [re(H, null, t2.__a ? null : e2.children), o4];
};
var k2 = function(e2, t2, n2) {
  if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
    for (n2 = e2.u; n2; ) {
      for (; n2.length > 3; )
        n2.pop()();
      if (n2[1] < n2[0])
        break;
      e2.u = n2 = n2[2];
    }
};
(p2.prototype = new W()).__a = function(e2) {
  var t2 = this, n2 = F3(t2.__v), r3 = t2.o.get(e2);
  return r3[0]++, function(o4) {
    var u3 = function() {
      t2.props.revealOrder ? (r3.push(o4), k2(t2, e2, r3)) : o4();
    };
    n2 ? n2(u3) : u3();
  };
}, p2.prototype.render = function(e2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e2.children);
  e2.revealOrder && e2.revealOrder[0] === "b" && t2.reverse();
  for (var n2 = t2.length; n2--; )
    this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e2.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t2, n2) {
    k2(e2, n2, t2);
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
  }, set: function(t2) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
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
  typeof e2.type == "string" && function(t2) {
    var n2 = t2.props, r3 = t2.type, o4 = {};
    for (var u3 in n2) {
      var a2 = n2[u3];
      if (!(u3 === "value" && "defaultValue" in n2 && a2 == null || _e2 && u3 === "children" && r3 === "noscript" || u3 === "class" || u3 === "className")) {
        var l3 = u3.toLowerCase();
        u3 === "defaultValue" && "value" in n2 && n2.value == null ? u3 = "value" : u3 === "download" && a2 === true ? a2 = "" : l3 === "translate" && a2 === "no" ? a2 = false : l3 === "ondoubleclick" ? u3 = "ondblclick" : l3 !== "onchange" || r3 !== "input" && r3 !== "textarea" || ce2(n2.type) ? l3 === "onfocus" ? u3 = "onfocusin" : l3 === "onblur" ? u3 = "onfocusout" : le2.test(u3) ? u3 = l3 : r3.indexOf("-") === -1 && ie2.test(u3) ? u3 = u3.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l3 = u3 = "oninput", l3 === "oninput" && o4[u3 = l3] && (u3 = "oninputCapture"), o4[u3] = a2;
      }
    }
    r3 == "select" && o4.multiple && Array.isArray(o4.value) && (o4.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o4.value.indexOf(s2.props.value) != -1;
    })), r3 == "select" && o4.defaultValue != null && (o4.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o4.multiple ? o4.defaultValue.indexOf(s2.props.value) != -1 : o4.defaultValue == s2.props.value;
    })), n2.class && !n2.className ? (o4.class = n2.class, Object.defineProperty(o4, "className", me)) : (n2.className && !n2.class || n2.class && n2.className) && (o4.class = o4.className = n2.className), t2.props = o4;
  }(e2), e2.$$typeof = V2, P && P(e2);
};
var w2 = a.__r;
a.__r = function(e2) {
  w2 && w2(e2), S3 = e2.__c;
};
var U = a.diffed;
a.diffed = function(e2) {
  U && U(e2);
  var t2 = e2.props, n2 = e2.__e;
  n2 != null && e2.type === "textarea" && "value" in t2 && t2.value !== n2.value && (n2.value = t2.value == null ? "" : t2.value), S3 = null;
};
function m(e2) {
  return !!e2 && e2.$$typeof === V2;
}
function Ee(e2) {
  return m(e2) ? he.apply(null, arguments) : e2;
}

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n2, t2) => {
  for (var e2 in t2)
    s(n2, e2, { get: t2[e2], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e2 = arguments[t2];
      for (var a2 in e2)
        Object.prototype.hasOwnProperty.call(e2, a2) && (n2[a2] = e2[a2]);
    }
    return n2;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e2, f3) {
  typeof e2 == "function" ? e2(f3) : e2 != null && (e2.current = f3);
}
function t(...e2) {
  return (f3) => e2.forEach((o4) => n(o4, f3));
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n2, t2) => {
  let { children: e2, ...r3 } = n2, o4 = te2.toArray(e2), l3 = o4.find(I3);
  if (l3) {
    let c2 = l3.props.children, a2 = o4.map((m4) => m4 === l3 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m4);
    return re($2, p3({}, r3, { ref: t2 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p3({}, r3, { ref: t2 }), e2);
});
b4.displayName = "Slot";
var $2 = ee2((n2, t2) => {
  let { children: e2, ...r3 } = n2;
  return m(e2) ? Ee(e2, { ...X3(r3, e2.props), ref: t2 ? t(t2, e2.ref) : e2.ref }) : te2.count(e2) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y2 = ({ children: n2 }) => re(H, null, n2);
function I3(n2) {
  return m(n2) && n2.type === y2;
}
function X3(n2, t2) {
  let e2 = { ...t2 };
  for (let r3 in t2) {
    let o4 = n2[r3], l3 = t2[r3];
    /^on[A-Z]/.test(r3) ? o4 && l3 ? e2[r3] = (...a2) => {
      l3(...a2), o4(...a2);
    } : o4 && (e2[r3] = o4) : r3 === "style" ? e2[r3] = { ...o4, ...l3 } : r3 === "className" && (e2[r3] = [o4, l3].filter(Boolean).join(" "));
  }
  return { ...n2, ...e2 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u2 = d3.reduce((t2, e2) => {
  let f3 = ee2((r3, o4) => {
    let { asChild: s2, ...a2 } = r3, i2 = s2 ? b4 : e2;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i2, p3({}, a2, { ref: o4 }));
  });
  return f3.displayName = `Primitive.${e2}`, { ...t2, [e2]: f3 };
}, {});

// https://esm.sh/v132/@radix-ui/react-label@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-label.mjs
var f2 = ee2((a2, r3) => re(u2.label, p3({}, a2, { ref: r3, onMouseDown: (e2) => {
  var o4;
  (o4 = a2.onMouseDown) === null || o4 === void 0 || o4.call(a2, e2), !e2.defaultPrevented && e2.detail > 1 && e2.preventDefault();
} })));
var m2 = f2;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o3(r3) {
  var f3, n2, t2 = "";
  if (typeof r3 == "string" || typeof r3 == "number")
    t2 += r3;
  else if (typeof r3 == "object")
    if (Array.isArray(r3))
      for (f3 = 0; f3 < r3.length; f3++)
        r3[f3] && (n2 = o3(r3[f3])) && (t2 && (t2 += " "), t2 += n2);
    else
      for (f3 in r3)
        r3[f3] && (t2 && (t2 += " "), t2 += f3);
  return t2;
}
function e() {
  for (var r3, f3, n2 = 0, t2 = ""; n2 < arguments.length; )
    (r3 = arguments[n2++]) && (f3 = o3(r3)) && (t2 && (t2 += " "), t2 += f3);
  return t2;
}

// https://esm.sh/v132/class-variance-authority@0.7.0/denonext/class-variance-authority.mjs
var m3 = (n2) => typeof n2 == "boolean" ? "".concat(n2) : n2 === 0 ? "0" : n2;
var y3 = e;
var b5 = (n2, l3) => (t2) => {
  var r3;
  if (l3?.variants == null)
    return y3(n2, t2?.class, t2?.className);
  let { variants: o4, defaultVariants: d6 } = l3, N2 = Object.keys(o4).map((e2) => {
    let a2 = t2?.[e2], u3 = d6?.[e2];
    if (a2 === null)
      return null;
    let i2 = m3(a2) || m3(u3);
    return o4[e2][i2];
  }), v2 = t2 && Object.entries(t2).reduce((e2, a2) => {
    let [u3, i2] = a2;
    return i2 === void 0 || (e2[u3] = i2), e2;
  }, {}), V4 = l3 == null || (r3 = l3.compoundVariants) === null || r3 === void 0 ? void 0 : r3.reduce((e2, a2) => {
    let { class: u3, className: i2, ...f3 } = a2;
    return Object.entries(f3).every((C4) => {
      let [c2, s2] = C4;
      return Array.isArray(s2) ? s2.includes({ ...d6, ...v2 }[c2]) : { ...d6, ...v2 }[c2] === s2;
    }) ? [...e2, u3, i2] : e2;
  }, []);
  return y3(n2, N2, V4, t2?.class, t2?.className);
};

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r3, e2) => {
  for (var t2 in e2)
    Ar(r3, t2, { get: e2[t2], enumerable: true });
};
function U2() {
  for (var r3 = 0, e2, t2, o4 = ""; r3 < arguments.length; )
    (e2 = arguments[r3++]) && (t2 = lr(e2)) && (o4 && (o4 += " "), o4 += t2);
  return o4;
}
function lr(r3) {
  if (typeof r3 == "string")
    return r3;
  for (var e2, t2 = "", o4 = 0; o4 < r3.length; o4++)
    r3[o4] && (e2 = lr(r3[o4])) && (t2 && (t2 += " "), t2 += e2);
  return t2;
}
var Z2 = "-";
function ur(r3) {
  var e2 = Sr(r3), t2 = r3.conflictingClassGroups, o4 = r3.conflictingClassGroupModifiers, a2 = o4 === void 0 ? {} : o4;
  function s2(i2) {
    var c2 = i2.split(Z2);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e2) || kr(i2);
  }
  function n2(i2, c2) {
    var u3 = t2[i2] || [];
    return c2 && a2[i2] ? [].concat(u3, a2[i2]) : u3;
  }
  return { getClassGroupId: s2, getConflictingClassGroupIds: n2 };
}
function pr(r3, e2) {
  if (r3.length === 0)
    return e2.classGroupId;
  var t2 = r3[0], o4 = e2.nextPart.get(t2), a2 = o4 ? pr(r3.slice(1), o4) : void 0;
  if (a2)
    return a2;
  if (e2.validators.length !== 0) {
    var s2 = r3.join(Z2);
    return e2.validators.find(function(n2) {
      var i2 = n2.validator;
      return i2(s2);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r3) {
  if (dr.test(r3)) {
    var e2 = dr.exec(r3)[1], t2 = e2?.substring(0, e2.indexOf(":"));
    if (t2)
      return "arbitrary.." + t2;
  }
}
function Sr(r3) {
  var e2 = r3.theme, t2 = r3.prefix, o4 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r3.classGroups), t2);
  return a2.forEach(function(s2) {
    var n2 = s2[0], i2 = s2[1];
    q3(i2, o4, n2, e2);
  }), o4;
}
function q3(r3, e2, t2, o4) {
  r3.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s2 = a2 === "" ? e2 : cr(e2, a2);
      s2.classGroupId = t2;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q3(a2(o4), e2, t2, o4);
        return;
      }
      e2.validators.push({ validator: a2, classGroupId: t2 });
      return;
    }
    Object.entries(a2).forEach(function(n2) {
      var i2 = n2[0], c2 = n2[1];
      q3(c2, cr(e2, i2), t2, o4);
    });
  });
}
function cr(r3, e2) {
  var t2 = r3;
  return e2.split(Z2).forEach(function(o4) {
    t2.nextPart.has(o4) || t2.nextPart.set(o4, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t2 = t2.nextPart.get(o4);
  }), t2;
}
function zr(r3) {
  return r3.isThemeGetter;
}
function Gr(r3, e2) {
  return e2 ? r3.map(function(t2) {
    var o4 = t2[0], a2 = t2[1], s2 = a2.map(function(n2) {
      return typeof n2 == "string" ? e2 + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(function(i2) {
        var c2 = i2[0], u3 = i2[1];
        return [e2 + c2, u3];
      })) : n2;
    });
    return [o4, s2];
  }) : r3;
}
function fr(r3) {
  if (r3 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e2 = 0, t2 = /* @__PURE__ */ new Map(), o4 = /* @__PURE__ */ new Map();
  function a2(s2, n2) {
    t2.set(s2, n2), e2++, e2 > r3 && (e2 = 0, o4 = t2, t2 = /* @__PURE__ */ new Map());
  }
  return { get: function(n2) {
    var i2 = t2.get(n2);
    if (i2 !== void 0)
      return i2;
    if ((i2 = o4.get(n2)) !== void 0)
      return a2(n2, i2), i2;
  }, set: function(n2, i2) {
    t2.has(n2) ? t2.set(n2, i2) : a2(n2, i2);
  } };
}
var X4 = "!";
function br(r3) {
  var e2 = r3.separator || ":", t2 = e2.length === 1, o4 = e2[0], a2 = e2.length;
  return function(n2) {
    for (var i2 = [], c2 = 0, u3 = 0, b6, f3 = 0; f3 < n2.length; f3++) {
      var g3 = n2[f3];
      if (c2 === 0) {
        if (g3 === o4 && (t2 || n2.slice(f3, f3 + a2) === e2)) {
          i2.push(n2.slice(u3, f3)), u3 = f3 + a2;
          continue;
        }
        if (g3 === "/") {
          b6 = f3;
          continue;
        }
      }
      g3 === "[" ? c2++ : g3 === "]" && c2--;
    }
    var y4 = i2.length === 0 ? n2 : n2.substring(u3), x5 = y4.startsWith(X4), m4 = x5 ? y4.substring(1) : y4, w3 = b6 && b6 > u3 ? b6 - u3 : void 0;
    return { modifiers: i2, hasImportantModifier: x5, baseClassName: m4, maybePostfixModifierPosition: w3 };
  };
}
function gr(r3) {
  if (r3.length <= 1)
    return r3;
  var e2 = [], t2 = [];
  return r3.forEach(function(o4) {
    var a2 = o4[0] === "[";
    a2 ? (e2.push.apply(e2, t2.sort().concat([o4])), t2 = []) : t2.push(o4);
  }), e2.push.apply(e2, t2.sort()), e2;
}
function mr(r3) {
  return { cache: fr(r3.cacheSize), splitModifiers: br(r3), ...ur(r3) };
}
var Ir = /\s+/;
function vr(r3, e2) {
  var t2 = e2.splitModifiers, o4 = e2.getClassGroupId, a2 = e2.getConflictingClassGroupIds, s2 = /* @__PURE__ */ new Set();
  return r3.trim().split(Ir).map(function(n2) {
    var i2 = t2(n2), c2 = i2.modifiers, u3 = i2.hasImportantModifier, b6 = i2.baseClassName, f3 = i2.maybePostfixModifierPosition, g3 = o4(f3 ? b6.substring(0, f3) : b6), y4 = !!f3;
    if (!g3) {
      if (!f3)
        return { isTailwindClass: false, originalClassName: n2 };
      if (g3 = o4(b6), !g3)
        return { isTailwindClass: false, originalClassName: n2 };
      y4 = false;
    }
    var x5 = gr(c2).join(":"), m4 = u3 ? x5 + X4 : x5;
    return { isTailwindClass: true, modifierId: m4, classGroupId: g3, originalClassName: n2, hasPostfixModifier: y4 };
  }).reverse().filter(function(n2) {
    if (!n2.isTailwindClass)
      return true;
    var i2 = n2.modifierId, c2 = n2.classGroupId, u3 = n2.hasPostfixModifier, b6 = i2 + c2;
    return s2.has(b6) ? false : (s2.add(b6), a2(c2, u3).forEach(function(f3) {
      return s2.add(i2 + f3);
    }), true);
  }).reverse().map(function(n2) {
    return n2.originalClassName;
  }).join(" ");
}
function P2() {
  for (var r3 = arguments.length, e2 = new Array(r3), t2 = 0; t2 < r3; t2++)
    e2[t2] = arguments[t2];
  var o4, a2, s2, n2 = i2;
  function i2(u3) {
    var b6 = e2[0], f3 = e2.slice(1), g3 = f3.reduce(function(y4, x5) {
      return x5(y4);
    }, b6());
    return o4 = mr(g3), a2 = o4.cache.get, s2 = o4.cache.set, n2 = c2, c2(u3);
  }
  function c2(u3) {
    var b6 = a2(u3);
    if (b6)
      return b6;
    var f3 = vr(u3, o4);
    return s2(u3, f3), f3;
  }
  return function() {
    return n2(U2.apply(null, arguments));
  };
}
function d4(r3) {
  var e2 = function(o4) {
    return o4[r3] || [];
  };
  return e2.isThemeGetter = true, e2;
}
var wr = {};
Mr(wr, { isAny: () => G3, isArbitraryLength: () => L3, isArbitraryNumber: () => S4, isArbitraryPosition: () => Q3, isArbitraryShadow: () => D3, isArbitrarySize: () => H3, isArbitraryUrl: () => V3, isArbitraryValue: () => l2, isArbitraryWeight: () => Wr, isInteger: () => z3, isLength: () => h2, isNumber: () => M3, isPercent: () => Y2, isTshirtSize: () => C3 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h2(r3) {
  return M3(r3) || Tr.has(r3) || Pr.test(r3) || L3(r3);
}
function L3(r3) {
  return I4(r3, "length", Er);
}
function H3(r3) {
  return I4(r3, "size", xr);
}
function Q3(r3) {
  return I4(r3, "position", xr);
}
function V3(r3) {
  return I4(r3, "url", jr);
}
function S4(r3) {
  return I4(r3, "number", M3);
}
var Wr = S4;
function M3(r3) {
  return !Number.isNaN(Number(r3));
}
function Y2(r3) {
  return r3.endsWith("%") && M3(r3.slice(0, -1));
}
function z3(r3) {
  return hr(r3) || I4(r3, "number", hr);
}
function l2(r3) {
  return yr.test(r3);
}
function G3() {
  return true;
}
function C3(r3) {
  return Rr.test(r3);
}
function D3(r3) {
  return I4(r3, "", Ur);
}
function I4(r3, e2, t2) {
  var o4 = yr.exec(r3);
  return o4 ? o4[1] ? o4[1] === e2 : t2(o4[2]) : false;
}
function Er(r3) {
  return Nr.test(r3);
}
function xr() {
  return false;
}
function jr(r3) {
  return r3.startsWith("url(");
}
function hr(r3) {
  return Number.isInteger(Number(r3));
}
function Ur(r3) {
  return Lr.test(r3);
}
function T3() {
  var r3 = d4("colors"), e2 = d4("spacing"), t2 = d4("blur"), o4 = d4("brightness"), a2 = d4("borderColor"), s2 = d4("borderRadius"), n2 = d4("borderSpacing"), i2 = d4("borderWidth"), c2 = d4("contrast"), u3 = d4("grayscale"), b6 = d4("hueRotate"), f3 = d4("invert"), g3 = d4("gap"), y4 = d4("gradientColorStops"), x5 = d4("gradientColorStopPositions"), m4 = d4("inset"), w3 = d4("margin"), k3 = d4("opacity"), A4 = d4("padding"), K3 = d4("saturate"), O3 = d4("scale"), rr = d4("sepia"), er = d4("skew"), tr = d4("space"), or = d4("translate"), $3 = function() {
    return ["auto", "contain", "none"];
  }, B2 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F4 = function() {
    return ["auto", l2, e2];
  }, p4 = function() {
    return [l2, e2];
  }, nr = function() {
    return ["", h2];
  }, W3 = function() {
    return ["auto", M3, l2];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E3 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J3 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R4 = function() {
    return ["", "0", l2];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N2 = function() {
    return [M3, S4];
  }, j2 = function() {
    return [M3, l2];
  };
  return { cacheSize: 500, theme: { colors: [G3], spacing: [h2], blur: ["none", "", C3, l2], brightness: N2(), borderColor: [r3], borderRadius: ["none", "", "full", C3, l2], borderSpacing: p4(), borderWidth: nr(), contrast: N2(), grayscale: R4(), hueRotate: j2(), invert: R4(), gap: p4(), gradientColorStops: [r3], gradientColorStopPositions: [Y2, L3], inset: F4(), margin: F4(), opacity: N2(), padding: p4(), saturate: N2(), scale: N2(), sepia: R4(), skew: j2(), space: p4(), translate: p4() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l2] }], container: ["container"], columns: [{ columns: [C3] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l2]) }], overflow: [{ overflow: B2() }], "overflow-x": [{ "overflow-x": B2() }], "overflow-y": [{ "overflow-y": B2() }], overscroll: [{ overscroll: $3() }], "overscroll-x": [{ "overscroll-x": $3() }], "overscroll-y": [{ "overscroll-y": $3() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m4] }], "inset-x": [{ "inset-x": [m4] }], "inset-y": [{ "inset-y": [m4] }], start: [{ start: [m4] }], end: [{ end: [m4] }], top: [{ top: [m4] }], right: [{ right: [m4] }], bottom: [{ bottom: [m4] }], left: [{ left: [m4] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z3] }], basis: [{ basis: F4() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l2] }], grow: [{ grow: R4() }], shrink: [{ shrink: R4() }], order: [{ order: ["first", "last", "none", z3] }], "grid-cols": [{ "grid-cols": [G3] }], "col-start-end": [{ col: ["auto", { span: ["full", z3] }, l2] }], "col-start": [{ "col-start": W3() }], "col-end": [{ "col-end": W3() }], "grid-rows": [{ "grid-rows": [G3] }], "row-start-end": [{ row: ["auto", { span: [z3] }, l2] }], "row-start": [{ "row-start": W3() }], "row-end": [{ "row-end": W3() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l2] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l2] }], gap: [{ gap: [g3] }], "gap-x": [{ "gap-x": [g3] }], "gap-y": [{ "gap-y": [g3] }], "justify-content": [{ justify: ["normal"].concat(J3()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J3(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J3(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A4] }], px: [{ px: [A4] }], py: [{ py: [A4] }], ps: [{ ps: [A4] }], pe: [{ pe: [A4] }], pt: [{ pt: [A4] }], pr: [{ pr: [A4] }], pb: [{ pb: [A4] }], pl: [{ pl: [A4] }], m: [{ m: [w3] }], mx: [{ mx: [w3] }], my: [{ my: [w3] }], ms: [{ ms: [w3] }], me: [{ me: [w3] }], mt: [{ mt: [w3] }], mr: [{ mr: [w3] }], mb: [{ mb: [w3] }], ml: [{ ml: [w3] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l2, e2] }], "min-w": [{ "min-w": ["min", "max", "fit", l2, h2] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C3] }, C3, l2] }], h: [{ h: [l2, e2, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l2, h2] }], "max-h": [{ "max-h": [l2, e2, "min", "max", "fit"] }], "font-size": [{ text: ["base", C3, L3] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S4] }], "font-family": [{ font: [G3] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l2] }], "line-clamp": [{ "line-clamp": ["none", M3, S4] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l2, h2] }], "list-image": [{ "list-image": ["none", l2] }], "list-style-type": [{ list: ["none", "disc", "decimal", l2] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r3] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r3] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E3(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h2] }], "underline-offset": [{ "underline-offset": ["auto", l2, h2] }], "text-decoration-color": [{ decoration: [r3] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p4() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l2] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l2] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q3]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V3] }], "bg-color": [{ bg: [r3] }], "gradient-from-pos": [{ from: [x5] }], "gradient-via-pos": [{ via: [x5] }], "gradient-to-pos": [{ to: [x5] }], "gradient-from": [{ from: [y4] }], "gradient-via": [{ via: [y4] }], "gradient-to": [{ to: [y4] }], rounded: [{ rounded: [s2] }], "rounded-s": [{ "rounded-s": [s2] }], "rounded-e": [{ "rounded-e": [s2] }], "rounded-t": [{ "rounded-t": [s2] }], "rounded-r": [{ "rounded-r": [s2] }], "rounded-b": [{ "rounded-b": [s2] }], "rounded-l": [{ "rounded-l": [s2] }], "rounded-ss": [{ "rounded-ss": [s2] }], "rounded-se": [{ "rounded-se": [s2] }], "rounded-ee": [{ "rounded-ee": [s2] }], "rounded-es": [{ "rounded-es": [s2] }], "rounded-tl": [{ "rounded-tl": [s2] }], "rounded-tr": [{ "rounded-tr": [s2] }], "rounded-br": [{ "rounded-br": [s2] }], "rounded-bl": [{ "rounded-bl": [s2] }], "border-w": [{ border: [i2] }], "border-w-x": [{ "border-x": [i2] }], "border-w-y": [{ "border-y": [i2] }], "border-w-s": [{ "border-s": [i2] }], "border-w-e": [{ "border-e": [i2] }], "border-w-t": [{ "border-t": [i2] }], "border-w-r": [{ "border-r": [i2] }], "border-w-b": [{ "border-b": [i2] }], "border-w-l": [{ "border-l": [i2] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E3(), ["hidden"]) }], "divide-x": [{ "divide-x": [i2] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i2] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E3() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E3()) }], "outline-offset": [{ "outline-offset": [l2, h2] }], "outline-w": [{ outline: [h2] }], "outline-color": [{ outline: [r3] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r3] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h2] }], "ring-offset-color": [{ "ring-offset": [r3] }], shadow: [{ shadow: ["", "inner", "none", C3, D3] }], "shadow-color": [{ shadow: [G3] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t2] }], brightness: [{ brightness: [o4] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C3, l2] }], grayscale: [{ grayscale: [u3] }], "hue-rotate": [{ "hue-rotate": [b6] }], invert: [{ invert: [f3] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t2] }], "backdrop-brightness": [{ "backdrop-brightness": [o4] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u3] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b6] }], "backdrop-invert": [{ "backdrop-invert": [f3] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n2] }], "border-spacing-x": [{ "border-spacing-x": [n2] }], "border-spacing-y": [{ "border-spacing-y": [n2] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l2] }], duration: [{ duration: j2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l2] }], delay: [{ delay: j2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l2] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O3] }], "scale-x": [{ "scale-x": [O3] }], "scale-y": [{ "scale-y": [O3] }], rotate: [{ rotate: [z3, l2] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l2] }], accent: [{ accent: ["auto", r3] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l2] }], "caret-color": [{ caret: [r3] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p4() }], "scroll-mx": [{ "scroll-mx": p4() }], "scroll-my": [{ "scroll-my": p4() }], "scroll-ms": [{ "scroll-ms": p4() }], "scroll-me": [{ "scroll-me": p4() }], "scroll-mt": [{ "scroll-mt": p4() }], "scroll-mr": [{ "scroll-mr": p4() }], "scroll-mb": [{ "scroll-mb": p4() }], "scroll-ml": [{ "scroll-ml": p4() }], "scroll-p": [{ "scroll-p": p4() }], "scroll-px": [{ "scroll-px": p4() }], "scroll-py": [{ "scroll-py": p4() }], "scroll-ps": [{ "scroll-ps": p4() }], "scroll-pe": [{ "scroll-pe": p4() }], "scroll-pt": [{ "scroll-pt": p4() }], "scroll-pr": [{ "scroll-pr": p4() }], "scroll-pb": [{ "scroll-pb": p4() }], "scroll-pl": [{ "scroll-pl": p4() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l2] }], fill: [{ fill: [r3, "none"] }], "stroke-w": [{ stroke: [h2, S4] }], stroke: [{ stroke: [r3, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P2(T3);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d5 = 0;
var x4 = Array.isArray;
function g2(t2, r3, e2, a2, o4, i2) {
  var s2, n2, f3 = {};
  for (n2 in r3)
    n2 == "ref" ? s2 = r3[n2] : f3[n2] = r3[n2];
  var u3 = { type: t2, props: f3, key: e2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d5, __i: -1, __u: 0, __source: o4, __self: i2 };
  if (typeof t2 == "function" && (s2 = t2.defaultProps))
    for (n2 in s2)
      f3[n2] === void 0 && (f3[n2] = s2[n2]);
  return a.vnode && a.vnode(u3), u3;
}

// ../components/ui/label.tsx
var labelVariants = b5("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(m2, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = m2.displayName;
export {
  Label
};
