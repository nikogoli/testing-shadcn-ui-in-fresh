"use client";

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
function b(e3, _3) {
  for (var t3 in _3)
    e3[t3] = _3[t3];
  return e3;
}
function Z(e3) {
  var _3 = e3.parentNode;
  _3 && _3.removeChild(e3);
}
function re(e3, _3, t3) {
  var i3, n2, r4, l4 = {};
  for (r4 in _3)
    r4 == "key" ? i3 = _3[r4] : r4 == "ref" ? n2 = _3[r4] : l4[r4] = _3[r4];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t3), typeof e3 == "function" && e3.defaultProps != null)
    for (r4 in e3.defaultProps)
      l4[r4] === void 0 && (l4[r4] = e3.defaultProps[r4]);
  return S(e3, l4, i3, n2, null);
}
function S(e3, _3, t3, i3, n2) {
  var r4 = { type: e3, props: _3, key: t3, ref: i3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n2 ?? ++Q, __i: -1, __u: 0 };
  return n2 == null && a.vnode != null && a.vnode(r4), r4;
}
function de() {
  return { current: null };
}
function H(e3) {
  return e3.children;
}
function W(e3, _3) {
  this.props = e3, this.context = _3;
}
function w(e3, _3) {
  if (_3 == null)
    return e3.__ ? w(e3.__, e3.__i + 1) : null;
  for (var t3; _3 < e3.__k.length; _3++)
    if ((t3 = e3.__k[_3]) != null && t3.__e != null)
      return t3.__e;
  return typeof e3.type == "function" ? w(e3) : null;
}
function ie(e3, _3, t3) {
  var i3, n2 = e3.__v, r4 = n2.__e, l4 = e3.__P;
  if (l4)
    return (i3 = b({}, n2)).__v = n2.__v + 1, a.vnode && a.vnode(i3), G(l4, i3, n2, e3.__n, l4.ownerSVGElement !== void 0, 32 & n2.__u ? [r4] : null, _3, r4 ?? w(n2), !!(32 & n2.__u), t3), i3.__v = n2.__v, i3.__.__k[i3.__i] = i3, i3.__d = void 0, i3.__e != r4 && ee(i3), i3;
}
function ee(e3) {
  var _3, t3;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, _3 = 0; _3 < e3.__k.length; _3++)
      if ((t3 = e3.__k[_3]) != null && t3.__e != null) {
        e3.__e = e3.__c.base = t3.__e;
        break;
      }
    return ee(e3);
  }
}
function I(e3) {
  (!e3.__d && (e3.__d = true) && x.push(e3) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e3, _3, t3, i3 = [], n2 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t3 = x.length, _3 = ie(e3, i3, n2) || _3, t3 === 0 || x.length > t3 ? (R(i3, _3, n2), n2.length = i3.length = 0, _3 = void 0, x.sort($)) : _3 && a.__c && a.__c(_3, O));
  _3 && R(i3, _3, n2), A.__r = 0;
}
function _e(e3, _3, t3, i3, n2, r4, l4, u4, c3, s2, p4) {
  var o5, m2, f2, h3, k3, v2 = i3 && i3.__k || O, d6 = _3.length;
  for (t3.__d = c3, le(t3, _3, v2), c3 = t3.__d, o5 = 0; o5 < d6; o5++)
    (f2 = t3.__k[o5]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m2 = f2.__i === -1 ? E : v2[f2.__i] || E, f2.__i = o5, G(e3, f2, m2, n2, r4, l4, u4, c3, s2, p4), h3 = f2.__e, f2.ref && m2.ref != f2.ref && (m2.ref && V(m2.ref, null, f2), p4.push(f2.ref, f2.__c || h3, f2)), k3 == null && h3 != null && (k3 = h3), 65536 & f2.__u || m2.__k === f2.__k ? c3 = te(f2, c3, e3) : typeof f2.type == "function" && f2.__d !== void 0 ? c3 = f2.__d : h3 && (c3 = h3.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t3.__d = c3, t3.__e = k3;
}
function le(e3, _3, t3) {
  var i3, n2, r4, l4, u4, c3 = _3.length, s2 = t3.length, p4 = s2, o5 = 0;
  for (e3.__k = [], i3 = 0; i3 < c3; i3++)
    l4 = i3 + o5, (n2 = e3.__k[i3] = (n2 = _3[i3]) == null || typeof n2 == "boolean" || typeof n2 == "function" ? null : typeof n2 == "string" || typeof n2 == "number" || typeof n2 == "bigint" || n2.constructor == String ? S(null, n2, null, null, null) : F(n2) ? S(H, { children: n2 }, null, null, null) : n2.constructor === void 0 && n2.__b > 0 ? S(n2.type, n2.props, n2.key, n2.ref ? n2.ref : null, n2.__v) : n2) != null ? (n2.__ = e3, n2.__b = e3.__b + 1, u4 = ue(n2, t3, l4, p4), n2.__i = u4, r4 = null, u4 !== -1 && (p4--, (r4 = t3[u4]) && (r4.__u |= 131072)), r4 == null || r4.__v === null ? (u4 == -1 && o5--, typeof n2.type != "function" && (n2.__u |= 65536)) : u4 !== l4 && (u4 === l4 + 1 ? o5++ : u4 > l4 ? p4 > c3 - l4 ? o5 += u4 - l4 : o5-- : u4 < l4 ? u4 == l4 - 1 && (o5 = u4 - l4) : o5 = 0, u4 !== i3 + o5 && (n2.__u |= 65536))) : (r4 = t3[l4]) && r4.key == null && r4.__e && !(131072 & r4.__u) && (r4.__e == e3.__d && (e3.__d = w(r4)), B(r4, r4, false), t3[l4] = null, p4--);
  if (p4)
    for (i3 = 0; i3 < s2; i3++)
      (r4 = t3[i3]) != null && !(131072 & r4.__u) && (r4.__e == e3.__d && (e3.__d = w(r4)), B(r4, r4));
}
function te(e3, _3, t3) {
  var i3, n2;
  if (typeof e3.type == "function") {
    for (i3 = e3.__k, n2 = 0; i3 && n2 < i3.length; n2++)
      i3[n2] && (i3[n2].__ = e3, _3 = te(i3[n2], _3, t3));
    return _3;
  }
  e3.__e != _3 && (t3.insertBefore(e3.__e, _3 || null), _3 = e3.__e);
  do
    _3 = _3 && _3.nextSibling;
  while (_3 != null && _3.nodeType === 8);
  return _3;
}
function se(e3, _3) {
  return _3 = _3 || [], e3 == null || typeof e3 == "boolean" || (F(e3) ? e3.some(function(t3) {
    se(t3, _3);
  }) : _3.push(e3)), _3;
}
function ue(e3, _3, t3, i3) {
  var n2 = e3.key, r4 = e3.type, l4 = t3 - 1, u4 = t3 + 1, c3 = _3[t3];
  if (c3 === null || c3 && n2 == c3.key && r4 === c3.type && !(131072 & c3.__u))
    return t3;
  if (i3 > (c3 != null && !(131072 & c3.__u) ? 1 : 0))
    for (; l4 >= 0 || u4 < _3.length; ) {
      if (l4 >= 0) {
        if ((c3 = _3[l4]) && !(131072 & c3.__u) && n2 == c3.key && r4 === c3.type)
          return l4;
        l4--;
      }
      if (u4 < _3.length) {
        if ((c3 = _3[u4]) && !(131072 & c3.__u) && n2 == c3.key && r4 === c3.type)
          return u4;
        u4++;
      }
    }
  return -1;
}
function q(e3, _3, t3) {
  _3[0] === "-" ? e3.setProperty(_3, t3 ?? "") : e3[_3] = t3 == null ? "" : typeof t3 != "number" || oe.test(_3) ? t3 : t3 + "px";
}
function M(e3, _3, t3, i3, n2) {
  var r4;
  e:
    if (_3 === "style")
      if (typeof t3 == "string")
        e3.style.cssText = t3;
      else {
        if (typeof i3 == "string" && (e3.style.cssText = i3 = ""), i3)
          for (_3 in i3)
            t3 && _3 in t3 || q(e3.style, _3, "");
        if (t3)
          for (_3 in t3)
            i3 && t3[_3] === i3[_3] || q(e3.style, _3, t3[_3]);
      }
    else if (_3[0] === "o" && _3[1] === "n")
      r4 = _3 !== (_3 = _3.replace(/(PointerCapture)$|Capture$/i, "$1")), _3 = _3.toLowerCase() in e3 ? _3.toLowerCase().slice(2) : _3.slice(2), e3.l || (e3.l = {}), e3.l[_3 + r4] = t3, t3 ? i3 ? t3.u = i3.u : (t3.u = Date.now(), e3.addEventListener(_3, r4 ? K : J, r4)) : e3.removeEventListener(_3, r4 ? K : J, r4);
    else {
      if (n2)
        _3 = _3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_3 !== "width" && _3 !== "height" && _3 !== "href" && _3 !== "list" && _3 !== "form" && _3 !== "tabIndex" && _3 !== "download" && _3 !== "rowSpan" && _3 !== "colSpan" && _3 !== "role" && _3 in e3)
        try {
          e3[_3] = t3 ?? "";
          break e;
        } catch {
        }
      typeof t3 == "function" || (t3 == null || t3 === false && _3[4] !== "-" ? e3.removeAttribute(_3) : e3.setAttribute(_3, t3));
    }
}
function J(e3) {
  if (this.l) {
    var _3 = this.l[e3.type + false];
    if (e3.t) {
      if (e3.t <= _3.u)
        return;
    } else
      e3.t = Date.now();
    return _3(a.event ? a.event(e3) : e3);
  }
}
function K(e3) {
  if (this.l)
    return this.l[e3.type + true](a.event ? a.event(e3) : e3);
}
function G(e3, _3, t3, i3, n2, r4, l4, u4, c3, s2) {
  var p4, o5, m2, f2, h3, k3, v2, d6, y4, C5, T4, P4, j2, U4, N3, g3 = _3.type;
  if (_3.constructor !== void 0)
    return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), r4 = [u4 = _3.__e = t3.__e]), (p4 = a.__b) && p4(_3);
  e:
    if (typeof g3 == "function")
      try {
        if (d6 = _3.props, y4 = (p4 = g3.contextType) && i3[p4.__c], C5 = p4 ? y4 ? y4.props.value : p4.__ : i3, t3.__c ? v2 = (o5 = _3.__c = t3.__c).__ = o5.__E : ("prototype" in g3 && g3.prototype.render ? _3.__c = o5 = new g3(d6, C5) : (_3.__c = o5 = new W(d6, C5), o5.constructor = g3, o5.render = ce), y4 && y4.sub(o5), o5.props = d6, o5.state || (o5.state = {}), o5.context = C5, o5.__n = i3, m2 = o5.__d = true, o5.__h = [], o5._sb = []), o5.__s == null && (o5.__s = o5.state), g3.getDerivedStateFromProps != null && (o5.__s == o5.state && (o5.__s = b({}, o5.__s)), b(o5.__s, g3.getDerivedStateFromProps(d6, o5.__s))), f2 = o5.props, h3 = o5.state, o5.__v = _3, m2)
          g3.getDerivedStateFromProps == null && o5.componentWillMount != null && o5.componentWillMount(), o5.componentDidMount != null && o5.__h.push(o5.componentDidMount);
        else {
          if (g3.getDerivedStateFromProps == null && d6 !== f2 && o5.componentWillReceiveProps != null && o5.componentWillReceiveProps(d6, C5), !o5.__e && (o5.shouldComponentUpdate != null && o5.shouldComponentUpdate(d6, o5.__s, C5) === false || _3.__v === t3.__v)) {
            for (_3.__v !== t3.__v && (o5.props = d6, o5.state = o5.__s, o5.__d = false), _3.__e = t3.__e, _3.__k = t3.__k, _3.__k.forEach(function(L5) {
              L5 && (L5.__ = _3);
            }), T4 = 0; T4 < o5._sb.length; T4++)
              o5.__h.push(o5._sb[T4]);
            o5._sb = [], o5.__h.length && l4.push(o5);
            break e;
          }
          o5.componentWillUpdate != null && o5.componentWillUpdate(d6, o5.__s, C5), o5.componentDidUpdate != null && o5.__h.push(function() {
            o5.componentDidUpdate(f2, h3, k3);
          });
        }
        if (o5.context = C5, o5.props = d6, o5.__P = e3, o5.__e = false, P4 = a.__r, j2 = 0, "prototype" in g3 && g3.prototype.render) {
          for (o5.state = o5.__s, o5.__d = false, P4 && P4(_3), p4 = o5.render(o5.props, o5.state, o5.context), U4 = 0; U4 < o5._sb.length; U4++)
            o5.__h.push(o5._sb[U4]);
          o5._sb = [];
        } else
          do
            o5.__d = false, P4 && P4(_3), p4 = o5.render(o5.props, o5.state, o5.context), o5.state = o5.__s;
          while (o5.__d && ++j2 < 25);
        o5.state = o5.__s, o5.getChildContext != null && (i3 = b(b({}, i3), o5.getChildContext())), m2 || o5.getSnapshotBeforeUpdate == null || (k3 = o5.getSnapshotBeforeUpdate(f2, h3)), _e(e3, F(N3 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N3 : [N3], _3, t3, i3, n2, r4, l4, u4, c3, s2), o5.base = _3.__e, _3.__u &= -161, o5.__h.length && l4.push(o5), v2 && (o5.__E = o5.__ = null);
      } catch (L5) {
        _3.__v = null, c3 || r4 != null ? (_3.__e = u4, _3.__u |= c3 ? 160 : 32, r4[r4.indexOf(u4)] = null) : (_3.__e = t3.__e, _3.__k = t3.__k), a.__e(L5, _3, t3);
      }
    else
      r4 == null && _3.__v === t3.__v ? (_3.__k = t3.__k, _3.__e = t3.__e) : _3.__e = fe(t3.__e, _3, t3, i3, n2, r4, l4, c3, s2);
  (p4 = a.diffed) && p4(_3);
}
function R(e3, _3, t3) {
  for (var i3 = 0; i3 < t3.length; i3++)
    V(t3[i3], t3[++i3], t3[++i3]);
  a.__c && a.__c(_3, e3), e3.some(function(n2) {
    try {
      e3 = n2.__h, n2.__h = [], e3.some(function(r4) {
        r4.call(n2);
      });
    } catch (r4) {
      a.__e(r4, n2.__v);
    }
  });
}
function fe(e3, _3, t3, i3, n2, r4, l4, u4, c3) {
  var s2, p4, o5, m2, f2, h3, k3, v2 = t3.props, d6 = _3.props, y4 = _3.type;
  if (y4 === "svg" && (n2 = true), r4 != null) {
    for (s2 = 0; s2 < r4.length; s2++)
      if ((f2 = r4[s2]) && "setAttribute" in f2 == !!y4 && (y4 ? f2.localName === y4 : f2.nodeType === 3)) {
        e3 = f2, r4[s2] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y4 === null)
      return document.createTextNode(d6);
    e3 = n2 ? document.createElementNS("http://www.w3.org/2000/svg", y4) : document.createElement(y4, d6.is && d6), r4 = null, u4 = false;
  }
  if (y4 === null)
    v2 === d6 || u4 && e3.data === d6 || (e3.data = d6);
  else {
    if (r4 = r4 && D.call(e3.childNodes), v2 = t3.props || E, !u4 && r4 != null)
      for (v2 = {}, s2 = 0; s2 < e3.attributes.length; s2++)
        v2[(f2 = e3.attributes[s2]).name] = f2.value;
    for (s2 in v2)
      f2 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o5 = f2 : s2 === "key" || s2 in d6 || M(e3, s2, null, f2, n2));
    for (s2 in d6)
      f2 = d6[s2], s2 == "children" ? m2 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h3 = f2 : s2 == "checked" ? k3 = f2 : s2 === "key" || u4 && typeof f2 != "function" || v2[s2] === f2 || M(e3, s2, f2, v2[s2], n2);
    if (p4)
      u4 || o5 && (p4.__html === o5.__html || p4.__html === e3.innerHTML) || (e3.innerHTML = p4.__html), _3.__k = [];
    else if (o5 && (e3.innerHTML = ""), _e(e3, F(m2) ? m2 : [m2], _3, t3, i3, n2 && y4 !== "foreignObject", r4, l4, r4 ? r4[0] : t3.__k && w(t3, 0), u4, c3), r4 != null)
      for (s2 = r4.length; s2--; )
        r4[s2] != null && Z(r4[s2]);
    u4 || (s2 = "value", h3 !== void 0 && (h3 !== e3[s2] || y4 === "progress" && !h3 || y4 === "option" && h3 !== v2[s2]) && M(e3, s2, h3, v2[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e3[s2] && M(e3, s2, k3, v2[s2], false));
  }
  return e3;
}
function V(e3, _3, t3) {
  try {
    typeof e3 == "function" ? e3(_3) : e3.current = _3;
  } catch (i3) {
    a.__e(i3, t3);
  }
}
function B(e3, _3, t3) {
  var i3, n2;
  if (a.unmount && a.unmount(e3), (i3 = e3.ref) && (i3.current && i3.current !== e3.__e || V(i3, null, _3)), (i3 = e3.__c) != null) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (r4) {
        a.__e(r4, _3);
      }
    i3.base = i3.__P = null, e3.__c = void 0;
  }
  if (i3 = e3.__k)
    for (n2 = 0; n2 < i3.length; n2++)
      i3[n2] && B(i3[n2], _3, t3 || typeof e3.type != "function");
  t3 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _3, t3) {
  return this.constructor(e3, t3);
}
function pe(e3, _3, t3) {
  var i3, n2, r4, l4;
  a.__ && a.__(e3, _3), n2 = (i3 = typeof t3 == "function") ? null : t3 && t3.__k || _3.__k, r4 = [], l4 = [], G(_3, e3 = (!i3 && t3 || _3).__k = re(H, null, [e3]), n2 || E, E, _3.ownerSVGElement !== void 0, !i3 && t3 ? [t3] : n2 ? null : _3.firstChild ? D.call(_3.childNodes) : null, r4, !i3 && t3 ? t3 : n2 ? n2.__e : _3.firstChild, i3, l4), e3.__d = void 0, R(r4, e3, l4);
}
function ae(e3, _3) {
  pe(e3, _3, ae);
}
function he(e3, _3, t3) {
  var i3, n2, r4, l4, u4 = b({}, e3.props);
  for (r4 in e3.type && e3.type.defaultProps && (l4 = e3.type.defaultProps), _3)
    r4 == "key" ? i3 = _3[r4] : r4 == "ref" ? n2 = _3[r4] : u4[r4] = _3[r4] === void 0 && l4 !== void 0 ? l4[r4] : _3[r4];
  return arguments.length > 2 && (u4.children = arguments.length > 3 ? D.call(arguments, 2) : t3), S(e3.type, u4, i3 || e3.key, n2 || e3.ref, null);
}
function ve(e3, _3) {
  var t3 = { __c: _3 = "__cC" + Y++, __: e3, Consumer: function(i3, n2) {
    return i3.children(n2);
  }, Provider: function(i3) {
    var n2, r4;
    return this.getChildContext || (n2 = [], (r4 = {})[_3] = this, this.getChildContext = function() {
      return r4;
    }, this.shouldComponentUpdate = function(l4) {
      this.props.value !== l4.value && n2.some(function(u4) {
        u4.__e = true, I(u4);
      });
    }, this.sub = function(l4) {
      n2.push(l4);
      var u4 = l4.componentWillUnmount;
      l4.componentWillUnmount = function() {
        n2.splice(n2.indexOf(l4), 1), u4 && u4.call(l4);
      };
    }), i3.children;
  } };
  return t3.Provider.__ = t3.Consumer.contextType = t3;
}
D = O.slice, a = { __e: function(e3, _3, t3, i3) {
  for (var n2, r4, l4; _3 = _3.__; )
    if ((n2 = _3.__c) && !n2.__)
      try {
        if ((r4 = n2.constructor) && r4.getDerivedStateFromError != null && (n2.setState(r4.getDerivedStateFromError(e3)), l4 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e3, i3 || {}), l4 = n2.__d), l4)
          return n2.__E = n2;
      } catch (u4) {
        e3 = u4;
      }
  throw e3;
} }, Q = 0, ne = function(e3) {
  return e3 != null && e3.constructor == null;
}, W.prototype.setState = function(e3, _3) {
  var t3;
  t3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e3 == "function" && (e3 = e3(b({}, t3), this.props)), e3 && b(t3, e3), e3 != null && this.__v && (_3 && this._sb.push(_3), I(this));
}, W.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = true, e3 && this.__h.push(e3), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e3, _3) {
  return e3.__v.__b - _3.__v.__b;
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
function l(t3, _3) {
  o.__h && o.__h(r, t3, v || _3), v = 0;
  var u4 = r.__H || (r.__H = { __: [], __h: [] });
  return t3 >= u4.__.length && u4.__.push({ __V: p }), u4.__[t3];
}
function I2(t3) {
  return v = 1, R2(U, t3);
}
function R2(t3, _3, u4) {
  var n2 = l(c++, 2);
  if (n2.t = t3, !n2.__c && (n2.__ = [u4 ? u4(_3) : U(void 0, _3), function(a2) {
    var f2 = n2.__N ? n2.__N[0] : n2.__[0], s2 = n2.t(f2, a2);
    f2 !== s2 && (n2.__N = [s2, n2.__[1]], n2.__c.setState({}));
  }], n2.__c = r, !r.u)) {
    var i3 = function(a2, f2, s2) {
      if (!n2.__c.__H)
        return true;
      var m2 = n2.__c.__H.__.filter(function(e3) {
        return !!e3.__c;
      });
      if (m2.every(function(e3) {
        return !e3.__N;
      }))
        return !h3 || h3.call(this, a2, f2, s2);
      var V4 = false;
      return m2.forEach(function(e3) {
        if (e3.__N) {
          var P4 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P4 !== e3.__[0] && (V4 = true);
        }
      }), !(!V4 && n2.__c.props === a2) && (!h3 || h3.call(this, a2, f2, s2));
    };
    r.u = true;
    var h3 = r.shouldComponentUpdate, N3 = r.componentWillUpdate;
    r.componentWillUpdate = function(a2, f2, s2) {
      if (this.__e) {
        var m2 = h3;
        h3 = void 0, i3(a2, f2, s2), h3 = m2;
      }
      N3 && N3.call(this, a2, f2, s2);
    }, r.shouldComponentUpdate = i3;
  }
  return n2.__N || n2.__;
}
function z2(t3, _3) {
  var u4 = l(c++, 3);
  !o.__s && y(u4.__H, _3) && (u4.__ = t3, u4.i = _3, r.__H.__h.push(u4));
}
function S2(t3, _3) {
  var u4 = l(c++, 4);
  !o.__s && y(u4.__H, _3) && (u4.__ = t3, u4.i = _3, r.__h.push(u4));
}
function L(t3) {
  return v = 5, T(function() {
    return { current: t3 };
  }, []);
}
function M2(t3, _3, u4) {
  v = 6, S2(function() {
    return typeof t3 == "function" ? (t3(_3()), function() {
      return t3(null);
    }) : t3 ? (t3.current = _3(), function() {
      return t3.current = null;
    }) : void 0;
  }, u4 == null ? u4 : u4.concat(t3));
}
function T(t3, _3) {
  var u4 = l(c++, 7);
  return y(u4.__H, _3) ? (u4.__V = t3(), u4.i = _3, u4.__h = t3, u4.__V) : u4.__;
}
function G2(t3, _3) {
  return v = 8, T(function() {
    return t3;
  }, _3);
}
function J2(t3) {
  var _3 = r.context[t3.__c], u4 = l(c++, 9);
  return u4.c = t3, _3 ? (u4.__ == null && (u4.__ = true, _3.sub(r)), _3.props.value) : t3.__;
}
function K2(t3, _3) {
  o.useDebugValue && o.useDebugValue(_3 ? _3(t3) : t3);
}
function Q2() {
  var t3 = l(c++, 11);
  if (!t3.__) {
    for (var _3 = r.__v; _3 !== null && !_3.__m && _3.__ !== null; )
      _3 = _3.__;
    var u4 = _3.__m || (_3.__m = [0, 0]);
    t3.__ = "P" + u4[0] + "-" + u4[1]++;
  }
  return t3.__;
}
function W2() {
  for (var t3; t3 = x2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(d), t3.__H.__h.forEach(E2), t3.__H.__h = [];
      } catch (_3) {
        t3.__H.__h = [], o.__e(_3, t3.__v);
      }
}
o.__b = function(t3) {
  r = null, g && g(t3);
}, o.__ = function(t3, _3) {
  t3 && _3.__k && _3.__k.__m && (t3.__m = _3.__k.__m), k && k(t3, _3);
}, o.__r = function(t3) {
  C && C(t3), c = 0;
  var _3 = (r = t3.__c).__H;
  _3 && (H2 === r ? (_3.__h = [], r.__h = [], _3.__.forEach(function(u4) {
    u4.__N && (u4.__ = u4.__N), u4.__V = p, u4.__N = u4.i = void 0;
  })) : (_3.__h.forEach(d), _3.__h.forEach(E2), _3.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t3) {
  A2 && A2(t3);
  var _3 = t3.__c;
  _3 && _3.__H && (_3.__H.__h.length && (x2.push(_3) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _3.__H.__.forEach(function(u4) {
    u4.i && (u4.__H = u4.i), u4.__V !== p && (u4.__ = u4.__V), u4.i = void 0, u4.__V = p;
  })), H2 = r = null;
}, o.__c = function(t3, _3) {
  _3.some(function(u4) {
    try {
      u4.__h.forEach(d), u4.__h = u4.__h.filter(function(n2) {
        return !n2.__ || E2(n2);
      });
    } catch (n2) {
      _3.some(function(i3) {
        i3.__h && (i3.__h = []);
      }), _3 = [], o.__e(n2, u4.__v);
    }
  }), D2 && D2(t3, _3);
}, o.unmount = function(t3) {
  F2 && F2(t3);
  var _3, u4 = t3.__c;
  u4 && u4.__H && (u4.__H.__.forEach(function(n2) {
    try {
      d(n2);
    } catch (i3) {
      _3 = i3;
    }
  }), u4.__H = void 0, _3 && o.__e(_3, u4.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t3) {
  var _3, u4 = function() {
    clearTimeout(n2), q2 && cancelAnimationFrame(_3), setTimeout(t3);
  }, n2 = setTimeout(u4, 100);
  q2 && (_3 = requestAnimationFrame(u4));
}
function d(t3) {
  var _3 = r, u4 = t3.__c;
  typeof u4 == "function" && (t3.__c = void 0, u4()), r = _3;
}
function E2(t3) {
  var _3 = r;
  t3.__c = t3.__(), r = _3;
}
function y(t3, _3) {
  return !t3 || t3.length !== _3.length || _3.some(function(u4, n2) {
    return u4 !== t3[n2];
  });
}
function U(t3, _3) {
  return typeof _3 == "function" ? _3(t3) : _3;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e3, t3) {
  for (var n2 in t3)
    e3[n2] = t3[n2];
  return e3;
}
function b3(e3, t3) {
  for (var n2 in e3)
    if (n2 !== "__source" && !(n2 in t3))
      return true;
  for (var r4 in t3)
    if (r4 !== "__source" && e3[r4] !== t3[r4])
      return true;
  return false;
}
function C2(e3, t3) {
  this.props = e3, this.context = t3;
}
function Q3(e3, t3) {
  function n2(o5) {
    var u4 = this.props.ref, a2 = u4 == o5.ref;
    return !a2 && u4 && (u4.call ? u4(null) : u4.current = null), t3 ? !t3(this.props, o5) || !a2 : b3(this.props, o5);
  }
  function r4(o5) {
    return this.shouldComponentUpdate = n2, re(e3, o5);
  }
  return r4.displayName = "Memo(" + (e3.displayName || e3.name) + ")", r4.prototype.isReactComponent = true, r4.__f = true, r4;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e3, t3) {
  return b3(this.props, e3) || b3(this.state, t3);
};
var N = a.__b;
a.__b = function(e3) {
  e3.type && e3.type.__f && e3.ref && (e3.props.ref = e3.ref, e3.ref = null), N && N(e3);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e3) {
  function t3(n2) {
    var r4 = L2({}, n2);
    return delete r4.ref, e3(r4, n2.ref || null);
  }
  return t3.$$typeof = X2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (e3.displayName || e3.name) + ")", t3;
}
var R3 = function(e3, t3) {
  return e3 == null ? null : se(se(e3).map(t3));
};
var te2 = { map: R3, forEach: R3, count: function(e3) {
  return e3 ? se(e3).length : 0;
}, only: function(e3) {
  var t3 = se(e3);
  if (t3.length !== 1)
    throw "Children.only";
  return t3[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e3, t3, n2, r4) {
  if (e3.then) {
    for (var o5, u4 = t3; u4 = u4.__; )
      if ((o5 = u4.__c) && o5.__c)
        return t3.__e == null && (t3.__e = n2.__e, t3.__k = n2.__k), o5.__c(e3, t3);
  }
  ne2(e3, t3, n2, r4);
};
var x3 = a.unmount;
function T2(e3, t3, n2) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(r4) {
    typeof r4.__c == "function" && r4.__c();
  }), e3.__c.__H = null), (e3 = L2({}, e3)).__c != null && (e3.__c.__P === n2 && (e3.__c.__P = t3), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(r4) {
    return T2(r4, t3, n2);
  })), e3;
}
function A3(e3, t3, n2) {
  return e3 && n2 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(r4) {
    return A3(r4, t3, n2);
  }), e3.__c && e3.__c.__P === t3 && (e3.__e && n2.appendChild(e3.__e), e3.__c.__e = true, e3.__c.__P = n2)), e3;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e3) {
  var t3 = e3.__.__c;
  return t3 && t3.__a && t3.__a(e3);
}
function re2(e3) {
  var t3, n2, r4;
  function o5(u4) {
    if (t3 || (t3 = e3()).then(function(a2) {
      n2 = a2.default || a2;
    }, function(a2) {
      r4 = a2;
    }), r4)
      throw r4;
    if (!n2)
      throw t3;
    return re(n2, u4);
  }
  return o5.displayName = "Lazy", o5.__f = true, o5;
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e3) {
  var t3 = e3.__c;
  t3 && t3.__R && t3.__R(), t3 && 32 & e3.__u && (e3.type = null), x3 && x3(e3);
}, (h.prototype = new W()).__c = function(e3, t3) {
  var n2 = t3.__c, r4 = this;
  r4.t == null && (r4.t = []), r4.t.push(n2);
  var o5 = F3(r4.__v), u4 = false, a2 = function() {
    u4 || (u4 = true, n2.__R = null, o5 ? o5(l4) : l4());
  };
  n2.__R = a2;
  var l4 = function() {
    if (!--r4.__u) {
      if (r4.state.__a) {
        var s2 = r4.state.__a;
        r4.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g3;
      for (r4.setState({ __a: r4.__b = null }); g3 = r4.t.pop(); )
        g3.forceUpdate();
    }
  };
  r4.__u++ || 32 & t3.__u || r4.setState({ __a: r4.__b = r4.__v.__k[0] }), e3.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e3, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r4 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n2, r4.__O = r4.__P);
    }
    this.__b = null;
  }
  var o5 = t3.__a && re(H, null, e3.fallback);
  return o5 && (o5.__u &= -33), [re(H, null, t3.__a ? null : e3.children), o5];
};
var k2 = function(e3, t3, n2) {
  if (++n2[1] === n2[0] && e3.o.delete(t3), e3.props.revealOrder && (e3.props.revealOrder[0] !== "t" || !e3.o.size))
    for (n2 = e3.u; n2; ) {
      for (; n2.length > 3; )
        n2.pop()();
      if (n2[1] < n2[0])
        break;
      e3.u = n2 = n2[2];
    }
};
function oe2(e3) {
  return this.getChildContext = function() {
    return e3.context;
  }, e3.children;
}
function ue2(e3) {
  var t3 = this, n2 = e3.i;
  t3.componentWillUnmount = function() {
    pe(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== n2 && t3.componentWillUnmount(), t3.l || (t3.i = n2, t3.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(r4) {
    this.childNodes.push(r4), t3.i.appendChild(r4);
  }, insertBefore: function(r4, o5) {
    this.childNodes.push(r4), t3.i.appendChild(r4);
  }, removeChild: function(r4) {
    this.childNodes.splice(this.childNodes.indexOf(r4) >>> 1, 1), t3.i.removeChild(r4);
  } }), pe(re(oe2, { context: t3.context }, e3.__v), t3.l);
}
function ae2(e3, t3) {
  var n2 = re(ue2, { __v: e3, i: t3 });
  return n2.containerInfo = t3, n2;
}
(p2.prototype = new W()).__a = function(e3) {
  var t3 = this, n2 = F3(t3.__v), r4 = t3.o.get(e3);
  return r4[0]++, function(o5) {
    var u4 = function() {
      t3.props.revealOrder ? (r4.push(o5), k2(t3, e3, r4)) : o5();
    };
    n2 ? n2(u4) : u4();
  };
}, p2.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = se(e3.children);
  e3.revealOrder && e3.revealOrder[0] === "b" && t3.reverse();
  for (var n2 = t3.length; n2--; )
    this.o.set(t3[n2], this.u = [1, 0, this.u]);
  return e3.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t3, n2) {
    k2(e3, n2, t3);
  });
};
var V2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
var ie2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var le2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var se2 = /[A-Z0-9]/g;
var _e2 = typeof document < "u";
var ce2 = function(e3) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e3);
};
function fe2(e3, t3, n2) {
  return t3.__k == null && (t3.textContent = ""), pe(e3, t3), typeof n2 == "function" && n2(), e3 ? e3.__c : null;
}
function pe2(e3, t3, n2) {
  return ae(e3, t3), typeof n2 == "function" && n2(), e3 ? e3.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e3) {
  Object.defineProperty(W.prototype, e3, { configurable: true, get: function() {
    return this["UNSAFE_" + e3];
  }, set: function(t3) {
    Object.defineProperty(this, e3, { configurable: true, writable: true, value: t3 });
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
a.event = function(e3) {
  return O2 && (e3 = O2(e3)), e3.persist = de2, e3.isPropagationStopped = he2, e3.isDefaultPrevented = ve2, e3.nativeEvent = e3;
};
var S3;
var me = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var P = a.vnode;
a.vnode = function(e3) {
  typeof e3.type == "string" && function(t3) {
    var n2 = t3.props, r4 = t3.type, o5 = {};
    for (var u4 in n2) {
      var a2 = n2[u4];
      if (!(u4 === "value" && "defaultValue" in n2 && a2 == null || _e2 && u4 === "children" && r4 === "noscript" || u4 === "class" || u4 === "className")) {
        var l4 = u4.toLowerCase();
        u4 === "defaultValue" && "value" in n2 && n2.value == null ? u4 = "value" : u4 === "download" && a2 === true ? a2 = "" : l4 === "translate" && a2 === "no" ? a2 = false : l4 === "ondoubleclick" ? u4 = "ondblclick" : l4 !== "onchange" || r4 !== "input" && r4 !== "textarea" || ce2(n2.type) ? l4 === "onfocus" ? u4 = "onfocusin" : l4 === "onblur" ? u4 = "onfocusout" : le2.test(u4) ? u4 = l4 : r4.indexOf("-") === -1 && ie2.test(u4) ? u4 = u4.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l4 = u4 = "oninput", l4 === "oninput" && o5[u4 = l4] && (u4 = "oninputCapture"), o5[u4] = a2;
      }
    }
    r4 == "select" && o5.multiple && Array.isArray(o5.value) && (o5.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o5.value.indexOf(s2.props.value) != -1;
    })), r4 == "select" && o5.defaultValue != null && (o5.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o5.multiple ? o5.defaultValue.indexOf(s2.props.value) != -1 : o5.defaultValue == s2.props.value;
    })), n2.class && !n2.className ? (o5.class = n2.class, Object.defineProperty(o5, "className", me)) : (n2.className && !n2.class || n2.class && n2.className) && (o5.class = o5.className = n2.className), t3.props = o5;
  }(e3), e3.$$typeof = V2, P && P(e3);
};
var w2 = a.__r;
a.__r = function(e3) {
  w2 && w2(e3), S3 = e3.__c;
};
var U2 = a.diffed;
a.diffed = function(e3) {
  U2 && U2(e3);
  var t3 = e3.props, n2 = e3.__e;
  n2 != null && e3.type === "textarea" && "value" in t3 && t3.value !== n2.value && (n2.value = t3.value == null ? "" : t3.value), S3 = null;
};
var ye = { ReactCurrentDispatcher: { current: { readContext: function(e3) {
  return S3.__n[e3.__c].props.value;
} } } };
function be(e3) {
  return re.bind(null, e3);
}
function m(e3) {
  return !!e3 && e3.$$typeof === V2;
}
function Ce(e3) {
  return m(e3) && e3.type === H;
}
function Ee(e3) {
  return m(e3) ? he.apply(null, arguments) : e3;
}
function Se(e3) {
  return !!e3.__k && (pe(null, e3), true);
}
function ge(e3) {
  return e3 && (e3.base || e3.nodeType === 1 && e3) || null;
}
var Ne = function(e3, t3) {
  return e3(t3);
};
var Re = function(e3, t3) {
  return e3(t3);
};
var xe = H;
function M3(e3) {
  e3();
}
function ke(e3) {
  return e3;
}
function Oe() {
  return [false, M3];
}
var Pe = S2;
var we = m;
function Ue(e3, t3) {
  var n2 = t3(), r4 = I2({ h: { __: n2, v: t3 } }), o5 = r4[0].h, u4 = r4[1];
  return S2(function() {
    o5.__ = n2, o5.v = t3, y2(o5) && u4({ h: o5 });
  }, [e3, n2, t3]), z2(function() {
    return y2(o5) && u4({ h: o5 }), e3(function() {
      y2(o5) && u4({ h: o5 });
    });
  }, [e3]), n2;
}
function y2(e3) {
  var t3, n2, r4 = e3.v, o5 = e3.__;
  try {
    var u4 = r4();
    return !((t3 = o5) === (n2 = u4) && (t3 !== 0 || 1 / t3 == 1 / n2) || t3 != t3 && n2 != n2);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n2, t3) => {
  for (var e3 in t3)
    s(n2, e3, { get: t3[e3], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var e3 = arguments[t3];
      for (var a2 in e3)
        Object.prototype.hasOwnProperty.call(e3, a2) && (n2[a2] = e3[a2]);
    }
    return n2;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v133/@radix-ui/number@1.0.1/denonext/number.mjs
function c2(a2, [t3, e3]) {
  return Math.min(e3, Math.max(t3, a2));
}

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e3, f2, { checkForDefaultPrevented: t3 = true } = {}) {
  return function(c3) {
    if (e3?.(c3), t3 === false || !c3.defaultPrevented)
      return f2?.(c3);
  };
}

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e3, f2) {
  typeof e3 == "function" ? e3(f2) : e3 != null && (e3.current = f2);
}
function t(...e3) {
  return (f2) => e3.forEach((o5) => n(o5, f2));
}
function u2(...e3) {
  return G2(t(...e3), e3);
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t3, c3 = []) {
  let o5 = [];
  function a2(r4, e3) {
    let n2 = ve(e3), s2 = o5.length;
    o5 = [...o5, e3];
    function f2(d6) {
      let { scope: i3, children: x5, ...$3 } = d6, h3 = i3?.[t3][s2] || n2, S5 = T(() => $3, Object.values($3));
      return re(h3.Provider, { value: S5 }, x5);
    }
    function v2(d6, i3) {
      let x5 = i3?.[t3][s2] || n2, $3 = J2(x5);
      if ($3)
        return $3;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d6}\` must be used within \`${r4}\``);
    }
    return f2.displayName = r4 + "Provider", [f2, v2];
  }
  let u4 = () => {
    let r4 = o5.map((e3) => ve(e3));
    return function(n2) {
      let s2 = n2?.[t3] || r4;
      return T(() => ({ [`__scope${t3}`]: { ...n2, [t3]: s2 } }), [n2, s2]);
    };
  };
  return u4.scopeName = t3, [a2, C3(u4, ...c3)];
}
function C3(...t3) {
  let c3 = t3[0];
  if (t3.length === 1)
    return c3;
  let o5 = () => {
    let a2 = t3.map((u4) => ({ useScope: u4(), scopeName: u4.scopeName }));
    return function(r4) {
      let e3 = a2.reduce((n2, { useScope: s2, scopeName: f2 }) => {
        let d6 = s2(r4)[`__scope${f2}`];
        return { ...n2, ...d6 };
      }, {});
      return T(() => ({ [`__scope${c3.scopeName}`]: e3 }), [e3]);
    };
  };
  return o5.scopeName = c3.scopeName, o5;
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f2) {
  let e3 = L(f2);
  return z2(() => {
    e3.current = f2;
  }), T(() => (...u4) => {
    var r4;
    return (r4 = e3.current) === null || r4 === void 0 ? void 0 : r4.call(e3, ...u4);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w3({ prop: e3, defaultProp: a2, onChange: s2 = () => {
} }) {
  let [t3, n2] = P2({ defaultProp: a2, onChange: s2 }), o5 = e3 !== void 0, f2 = o5 ? e3 : t3, l4 = l2(s2), $3 = G2((c3) => {
    if (o5) {
      let u4 = typeof c3 == "function" ? c3(e3) : c3;
      u4 !== e3 && l4(u4);
    } else
      n2(c3);
  }, [o5, e3, n2, l4]);
  return [f2, $3];
}
function P2({ defaultProp: e3, onChange: a2 }) {
  let s2 = I2(e3), [t3] = s2, n2 = L(t3), o5 = l2(a2);
  return z2(() => {
    n2.current !== t3 && (o5(t3), n2.current = t3);
  }, [t3, n2, o5]), s2;
}

// https://esm.sh/v132/@radix-ui/react-direction@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-direction.mjs
var r3 = ve(void 0);
function i(e3) {
  let t3 = J2(r3);
  return e3 || t3 || "ltr";
}

// https://esm.sh/v132/@radix-ui/react-use-previous@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-previous.mjs
function t2(e3) {
  let r4 = L({ value: e3, previous: e3 });
  return T(() => (r4.current.value !== e3 && (r4.current.previous = r4.current.value, r4.current.value = e3), r4.current.previous), [e3]);
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-use-size@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-size.mjs
function z3(e3) {
  let [u4, r4] = I2(void 0);
  return e(() => {
    if (e3) {
      r4({ width: e3.offsetWidth, height: e3.offsetHeight });
      let f2 = new ResizeObserver((i3) => {
        if (!Array.isArray(i3) || !i3.length)
          return;
        let b5 = i3[0], t3, o5;
        if ("borderBoxSize" in b5) {
          let s2 = b5.borderBoxSize, d6 = Array.isArray(s2) ? s2[0] : s2;
          t3 = d6.inlineSize, o5 = d6.blockSize;
        } else
          t3 = e3.offsetWidth, o5 = e3.offsetHeight;
        r4({ width: t3, height: o5 });
      });
      return f2.observe(e3, { box: "border-box" }), () => f2.unobserve(e3);
    } else
      r4(void 0);
  }, [e3]), u4;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n2, t3) => {
  let { children: e3, ...r4 } = n2, o5 = te2.toArray(e3), l4 = o5.find(I3);
  if (l4) {
    let c3 = l4.props.children, a2 = o5.map((m2) => m2 === l4 ? te2.count(c3) > 1 ? te2.only(null) : m(c3) ? c3.props.children : null : m2);
    return re($2, p3({}, r4, { ref: t3 }), m(c3) ? Ee(c3, void 0, a2) : null);
  }
  return re($2, p3({}, r4, { ref: t3 }), e3);
});
b4.displayName = "Slot";
var $2 = ee2((n2, t3) => {
  let { children: e3, ...r4 } = n2;
  return m(e3) ? Ee(e3, { ...X3(r4, e3.props), ref: t3 ? t(t3, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n2 }) => re(H, null, n2);
function I3(n2) {
  return m(n2) && n2.type === y3;
}
function X3(n2, t3) {
  let e3 = { ...t3 };
  for (let r4 in t3) {
    let o5 = n2[r4], l4 = t3[r4];
    /^on[A-Z]/.test(r4) ? o5 && l4 ? e3[r4] = (...a2) => {
      l4(...a2), o5(...a2);
    } : o5 && (e3[r4] = o5) : r4 === "style" ? e3[r4] = { ...o5, ...l4 } : r4 === "className" && (e3[r4] = [o5, l4].filter(Boolean).join(" "));
  }
  return { ...n2, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t3, e3) => {
  let f2 = ee2((r4, o5) => {
    let { asChild: s2, ...a2 } = r4, i3 = s2 ? b4 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i3, p3({}, a2, { ref: o5 }));
  });
  return f2.displayName = `Primitive.${e3}`, { ...t3, [e3]: f2 };
}, {});

// https://esm.sh/v132/@radix-ui/react-collection@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collection.mjs
function _2(s2) {
  let a2 = s2 + "CollectionProvider", [I5, $3] = _(a2), [E3, f2] = I5(a2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m2 = (r4) => {
    let { scope: e3, children: l4 } = r4, o5 = Te.useRef(null), c3 = Te.useRef(/* @__PURE__ */ new Map()).current;
    return Te.createElement(E3, { scope: e3, itemMap: c3, collectionRef: o5 }, l4);
  }, d6 = s2 + "CollectionSlot", p4 = Te.forwardRef((r4, e3) => {
    let { scope: l4, children: o5 } = r4, c3 = f2(d6, l4), n2 = u2(e3, c3.collectionRef);
    return Te.createElement(b4, { ref: n2 }, o5);
  }), u4 = s2 + "CollectionItemSlot", C5 = "data-radix-collection-item", R4 = Te.forwardRef((r4, e3) => {
    let { scope: l4, children: o5, ...c3 } = r4, n2 = Te.useRef(null), M5 = u2(e3, n2), i3 = f2(u4, l4);
    return Te.useEffect(() => (i3.itemMap.set(n2, { ref: n2, ...c3 }), () => void i3.itemMap.delete(n2))), Te.createElement(b4, { [C5]: "", ref: M5 }, o5);
  });
  function h3(r4) {
    let e3 = f2(s2 + "CollectionConsumer", r4);
    return Te.useCallback(() => {
      let o5 = e3.collectionRef.current;
      if (!o5)
        return [];
      let c3 = Array.from(o5.querySelectorAll(`[${C5}]`));
      return Array.from(e3.itemMap.values()).sort((i3, v2) => c3.indexOf(i3.ref.current) - c3.indexOf(v2.ref.current));
    }, [e3.collectionRef, e3.itemMap]);
  }
  return [{ Provider: m2, Slot: p4, ItemSlot: R4 }, h3, $3];
}

// https://esm.sh/v135/@radix-ui/react-slider@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slider.mjs
var J3 = ["PageUp", "PageDown"];
var Q4 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var Z2 = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] };
var A4 = "Slider";
var [N2, Se2, ge2] = _2(A4);
var [ee3, Ge] = _(A4, [ge2]);
var [ve3, O3] = ee3(A4);
var he3 = ee2((e3, t3) => {
  let { name: o5, min: a2 = 0, max: i3 = 100, step: n2 = 1, orientation: c3 = "horizontal", disabled: s2 = false, minStepsBetweenThumbs: u4 = 0, defaultValue: m2 = [a2], value: S5, onValueChange: r4 = () => {
  }, onValueCommit: l4 = () => {
  }, inverted: y4 = false, ...v2 } = e3, [p4, g3] = I2(null), w4 = u2(t3, (f2) => g3(f2)), C5 = L(/* @__PURE__ */ new Set()), d6 = L(0), x5 = c3 === "horizontal", K3 = p4 ? !!p4.closest("form") : true, F4 = x5 ? be2 : ye2, [h3 = [], re3] = w3({ prop: S5, defaultProp: m2, onChange: (f2) => {
    var b5;
    (b5 = [...C5.current][d6.current]) === null || b5 === void 0 || b5.focus(), r4(f2);
  } }), U4 = L(h3);
  function ie3(f2) {
    let b5 = Me(h3, f2);
    I5(f2, b5);
  }
  function se3(f2) {
    I5(f2, d6.current);
  }
  function ce3() {
    let f2 = U4.current[d6.current];
    h3[d6.current] !== f2 && l4(h3);
  }
  function I5(f2, b5, { commit: B2 } = { commit: false }) {
    let Y3 = Te2(n2), z5 = Ae(Math.round((f2 - a2) / n2) * n2 + a2, Y3), T4 = c2(z5, [a2, i3]);
    re3((_3 = []) => {
      let V4 = Ce2(_3, T4, b5);
      if (Ie(V4, u4 * n2)) {
        d6.current = V4.indexOf(T4);
        let j2 = String(V4) !== String(_3);
        return j2 && B2 && l4(V4), j2 ? V4 : _3;
      } else
        return _3;
    });
  }
  return re(ve3, { scope: e3.__scopeSlider, disabled: s2, min: a2, max: i3, valueIndexToChangeRef: d6, thumbs: C5.current, values: h3, orientation: c3 }, re(N2.Provider, { scope: e3.__scopeSlider }, re(N2.Slot, { scope: e3.__scopeSlider }, re(F4, p3({ "aria-disabled": s2, "data-disabled": s2 ? "" : void 0 }, v2, { ref: w4, onPointerDown: o3(v2.onPointerDown, () => {
    s2 || (U4.current = h3);
  }), min: a2, max: i3, inverted: y4, onSlideStart: s2 ? void 0 : ie3, onSlideMove: s2 ? void 0 : se3, onSlideEnd: s2 ? void 0 : ce3, onHomeKeyDown: () => !s2 && I5(a2, 0, { commit: true }), onEndKeyDown: () => !s2 && I5(i3, h3.length - 1, { commit: true }), onStepKeyDown: ({ event: f2, direction: b5 }) => {
    if (!s2) {
      let z5 = J3.includes(f2.key) || f2.shiftKey && Q4.includes(f2.key) ? 10 : 1, T4 = d6.current, _3 = h3[T4], V4 = n2 * z5 * b5;
      I5(_3 + V4, T4, { commit: true });
    }
  } })))), K3 && h3.map((f2, b5) => re(Ve, { key: b5, name: o5 ? o5 + (h3.length > 1 ? "[]" : "") : void 0, value: f2 })));
});
var [te3, ne3] = ee3(A4, { startEdge: "left", endEdge: "right", size: "width", direction: 1 });
var be2 = ee2((e3, t3) => {
  let { min: o5, max: a2, dir: i3, inverted: n2, onSlideStart: c3, onSlideMove: s2, onSlideEnd: u4, onStepKeyDown: m2, ...S5 } = e3, [r4, l4] = I2(null), y4 = u2(t3, (d6) => l4(d6)), v2 = L(), p4 = i(i3), g3 = p4 === "ltr", w4 = g3 && !n2 || !g3 && n2;
  function C5(d6) {
    let x5 = v2.current || r4.getBoundingClientRect(), K3 = [0, x5.width], h3 = L3(K3, w4 ? [o5, a2] : [a2, o5]);
    return v2.current = x5, h3(d6 - x5.left);
  }
  return re(te3, { scope: e3.__scopeSlider, startEdge: w4 ? "left" : "right", endEdge: w4 ? "right" : "left", direction: w4 ? 1 : -1, size: "width" }, re(oe3, p3({ dir: p4, "data-orientation": "horizontal" }, S5, { ref: y4, style: { ...S5.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (d6) => {
    let x5 = C5(d6.clientX);
    c3?.(x5);
  }, onSlideMove: (d6) => {
    let x5 = C5(d6.clientX);
    s2?.(x5);
  }, onSlideEnd: () => {
    v2.current = void 0, u4?.();
  }, onStepKeyDown: (d6) => {
    let K3 = Z2[w4 ? "from-left" : "from-right"].includes(d6.key);
    m2?.({ event: d6, direction: K3 ? -1 : 1 });
  } })));
});
var ye2 = ee2((e3, t3) => {
  let { min: o5, max: a2, inverted: i3, onSlideStart: n2, onSlideMove: c3, onSlideEnd: s2, onStepKeyDown: u4, ...m2 } = e3, S5 = L(null), r4 = u2(t3, S5), l4 = L(), y4 = !i3;
  function v2(p4) {
    let g3 = l4.current || S5.current.getBoundingClientRect(), w4 = [0, g3.height], d6 = L3(w4, y4 ? [a2, o5] : [o5, a2]);
    return l4.current = g3, d6(p4 - g3.top);
  }
  return re(te3, { scope: e3.__scopeSlider, startEdge: y4 ? "bottom" : "top", endEdge: y4 ? "top" : "bottom", size: "height", direction: y4 ? 1 : -1 }, re(oe3, p3({ "data-orientation": "vertical" }, m2, { ref: r4, style: { ...m2.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (p4) => {
    let g3 = v2(p4.clientY);
    n2?.(g3);
  }, onSlideMove: (p4) => {
    let g3 = v2(p4.clientY);
    c3?.(g3);
  }, onSlideEnd: () => {
    l4.current = void 0, s2?.();
  }, onStepKeyDown: (p4) => {
    let w4 = Z2[y4 ? "from-bottom" : "from-top"].includes(p4.key);
    u4?.({ event: p4, direction: w4 ? -1 : 1 });
  } })));
});
var oe3 = ee2((e3, t3) => {
  let { __scopeSlider: o5, onSlideStart: a2, onSlideMove: i3, onSlideEnd: n2, onHomeKeyDown: c3, onEndKeyDown: s2, onStepKeyDown: u4, ...m2 } = e3, S5 = O3(A4, o5);
  return re(u3.span, p3({}, m2, { ref: t3, onKeyDown: o3(e3.onKeyDown, (r4) => {
    r4.key === "Home" ? (c3(r4), r4.preventDefault()) : r4.key === "End" ? (s2(r4), r4.preventDefault()) : J3.concat(Q4).includes(r4.key) && (u4(r4), r4.preventDefault());
  }), onPointerDown: o3(e3.onPointerDown, (r4) => {
    let l4 = r4.target;
    l4.setPointerCapture(r4.pointerId), r4.preventDefault(), S5.thumbs.has(l4) ? l4.focus() : a2(r4);
  }), onPointerMove: o3(e3.onPointerMove, (r4) => {
    r4.target.hasPointerCapture(r4.pointerId) && i3(r4);
  }), onPointerUp: o3(e3.onPointerUp, (r4) => {
    let l4 = r4.target;
    l4.hasPointerCapture(r4.pointerId) && (l4.releasePointerCapture(r4.pointerId), n2(r4));
  }) }));
});
var we2 = "SliderTrack";
var xe2 = ee2((e3, t3) => {
  let { __scopeSlider: o5, ...a2 } = e3, i3 = O3(we2, o5);
  return re(u3.span, p3({ "data-disabled": i3.disabled ? "" : void 0, "data-orientation": i3.orientation }, a2, { ref: t3 }));
});
var X4 = "SliderRange";
var De = ee2((e3, t3) => {
  let { __scopeSlider: o5, ...a2 } = e3, i3 = O3(X4, o5), n2 = ne3(X4, o5), c3 = L(null), s2 = u2(t3, c3), u4 = i3.values.length, m2 = i3.values.map((l4) => ae3(l4, i3.min, i3.max)), S5 = u4 > 1 ? Math.min(...m2) : 0, r4 = 100 - Math.max(...m2);
  return re(u3.span, p3({ "data-orientation": i3.orientation, "data-disabled": i3.disabled ? "" : void 0 }, a2, { ref: s2, style: { ...e3.style, [n2.startEdge]: S5 + "%", [n2.endEdge]: r4 + "%" } }));
});
var G3 = "SliderThumb";
var Pe2 = ee2((e3, t3) => {
  let o5 = Se2(e3.__scopeSlider), [a2, i3] = I2(null), n2 = u2(t3, (s2) => i3(s2)), c3 = T(() => a2 ? o5().findIndex((s2) => s2.ref.current === a2) : -1, [o5, a2]);
  return re(Ee2, p3({}, e3, { ref: n2, index: c3 }));
});
var Ee2 = ee2((e3, t3) => {
  let { __scopeSlider: o5, index: a2, ...i3 } = e3, n2 = O3(G3, o5), c3 = ne3(G3, o5), [s2, u4] = I2(null), m2 = u2(t3, (g3) => u4(g3)), S5 = z3(s2), r4 = n2.values[a2], l4 = r4 === void 0 ? 0 : ae3(r4, n2.min, n2.max), y4 = _e3(a2, n2.values.length), v2 = S5?.[c3.size], p4 = v2 ? Re2(v2, l4, c3.direction) : 0;
  return z2(() => {
    if (s2)
      return n2.thumbs.add(s2), () => {
        n2.thumbs.delete(s2);
      };
  }, [s2, n2.thumbs]), re("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [c3.startEdge]: `calc(${l4}% + ${p4}px)` } }, re(N2.ItemSlot, { scope: e3.__scopeSlider }, re(u3.span, p3({ role: "slider", "aria-label": e3["aria-label"] || y4, "aria-valuemin": n2.min, "aria-valuenow": r4, "aria-valuemax": n2.max, "aria-orientation": n2.orientation, "data-orientation": n2.orientation, "data-disabled": n2.disabled ? "" : void 0, tabIndex: n2.disabled ? void 0 : 0 }, i3, { ref: m2, style: r4 === void 0 ? { display: "none" } : e3.style, onFocus: o3(e3.onFocus, () => {
    n2.valueIndexToChangeRef.current = a2;
  }) }))));
});
var Ve = (e3) => {
  let { value: t3, ...o5 } = e3, a2 = L(null), i3 = t2(t3);
  return z2(() => {
    let n2 = a2.current, c3 = window.HTMLInputElement.prototype, u4 = Object.getOwnPropertyDescriptor(c3, "value").set;
    if (i3 !== t3 && u4) {
      let m2 = new Event("input", { bubbles: true });
      u4.call(n2, t3), n2.dispatchEvent(m2);
    }
  }, [i3, t3]), re("input", p3({ style: { display: "none" } }, o5, { ref: a2, defaultValue: t3 }));
};
function Ce2(e3 = [], t3, o5) {
  let a2 = [...e3];
  return a2[o5] = t3, a2.sort((i3, n2) => i3 - n2);
}
function ae3(e3, t3, o5) {
  let n2 = 100 / (o5 - t3) * (e3 - t3);
  return c2(n2, [0, 100]);
}
function _e3(e3, t3) {
  return t3 > 2 ? `Value ${e3 + 1} of ${t3}` : t3 === 2 ? ["Minimum", "Maximum"][e3] : void 0;
}
function Me(e3, t3) {
  if (e3.length === 1)
    return 0;
  let o5 = e3.map((i3) => Math.abs(i3 - t3)), a2 = Math.min(...o5);
  return o5.indexOf(a2);
}
function Re2(e3, t3, o5) {
  let a2 = e3 / 2, n2 = L3([0, 50], [0, a2]);
  return (a2 - n2(t3) * o5) * o5;
}
function Ke(e3) {
  return e3.slice(0, -1).map((t3, o5) => e3[o5 + 1] - t3);
}
function Ie(e3, t3) {
  if (t3 > 0) {
    let o5 = Ke(e3);
    return Math.min(...o5) >= t3;
  }
  return true;
}
function L3(e3, t3) {
  return (o5) => {
    if (e3[0] === e3[1] || t3[0] === t3[1])
      return t3[0];
    let a2 = (t3[1] - t3[0]) / (e3[1] - e3[0]);
    return t3[0] + a2 * (o5 - e3[0]);
  };
}
function Te2(e3) {
  return (String(e3).split(".")[1] || "").length;
}
function Ae(e3, t3) {
  let o5 = Math.pow(10, t3);
  return Math.round(e3 * o5) / o5;
}
var We = he3;
var qe = xe2;
var Je = De;
var Qe = Pe2;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o4(r4) {
  var f2, n2, t3 = "";
  if (typeof r4 == "string" || typeof r4 == "number")
    t3 += r4;
  else if (typeof r4 == "object")
    if (Array.isArray(r4))
      for (f2 = 0; f2 < r4.length; f2++)
        r4[f2] && (n2 = o4(r4[f2])) && (t3 && (t3 += " "), t3 += n2);
    else
      for (f2 in r4)
        r4[f2] && (t3 && (t3 += " "), t3 += f2);
  return t3;
}
function e2() {
  for (var r4, f2, n2 = 0, t3 = ""; n2 < arguments.length; )
    (r4 = arguments[n2++]) && (f2 = o4(r4)) && (t3 && (t3 += " "), t3 += f2);
  return t3;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r4, e3) => {
  for (var t3 in e3)
    Ar(r4, t3, { get: e3[t3], enumerable: true });
};
function U3() {
  for (var r4 = 0, e3, t3, o5 = ""; r4 < arguments.length; )
    (e3 = arguments[r4++]) && (t3 = lr(e3)) && (o5 && (o5 += " "), o5 += t3);
  return o5;
}
function lr(r4) {
  if (typeof r4 == "string")
    return r4;
  for (var e3, t3 = "", o5 = 0; o5 < r4.length; o5++)
    r4[o5] && (e3 = lr(r4[o5])) && (t3 && (t3 += " "), t3 += e3);
  return t3;
}
var Z3 = "-";
function ur(r4) {
  var e3 = Sr(r4), t3 = r4.conflictingClassGroups, o5 = r4.conflictingClassGroupModifiers, a2 = o5 === void 0 ? {} : o5;
  function s2(i3) {
    var c3 = i3.split(Z3);
    return c3[0] === "" && c3.length !== 1 && c3.shift(), pr(c3, e3) || kr(i3);
  }
  function n2(i3, c3) {
    var u4 = t3[i3] || [];
    return c3 && a2[i3] ? [].concat(u4, a2[i3]) : u4;
  }
  return { getClassGroupId: s2, getConflictingClassGroupIds: n2 };
}
function pr(r4, e3) {
  if (r4.length === 0)
    return e3.classGroupId;
  var t3 = r4[0], o5 = e3.nextPart.get(t3), a2 = o5 ? pr(r4.slice(1), o5) : void 0;
  if (a2)
    return a2;
  if (e3.validators.length !== 0) {
    var s2 = r4.join(Z3);
    return e3.validators.find(function(n2) {
      var i3 = n2.validator;
      return i3(s2);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r4) {
  if (dr.test(r4)) {
    var e3 = dr.exec(r4)[1], t3 = e3?.substring(0, e3.indexOf(":"));
    if (t3)
      return "arbitrary.." + t3;
  }
}
function Sr(r4) {
  var e3 = r4.theme, t3 = r4.prefix, o5 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r4.classGroups), t3);
  return a2.forEach(function(s2) {
    var n2 = s2[0], i3 = s2[1];
    q3(i3, o5, n2, e3);
  }), o5;
}
function q3(r4, e3, t3, o5) {
  r4.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s2 = a2 === "" ? e3 : cr(e3, a2);
      s2.classGroupId = t3;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q3(a2(o5), e3, t3, o5);
        return;
      }
      e3.validators.push({ validator: a2, classGroupId: t3 });
      return;
    }
    Object.entries(a2).forEach(function(n2) {
      var i3 = n2[0], c3 = n2[1];
      q3(c3, cr(e3, i3), t3, o5);
    });
  });
}
function cr(r4, e3) {
  var t3 = r4;
  return e3.split(Z3).forEach(function(o5) {
    t3.nextPart.has(o5) || t3.nextPart.set(o5, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t3 = t3.nextPart.get(o5);
  }), t3;
}
function zr(r4) {
  return r4.isThemeGetter;
}
function Gr(r4, e3) {
  return e3 ? r4.map(function(t3) {
    var o5 = t3[0], a2 = t3[1], s2 = a2.map(function(n2) {
      return typeof n2 == "string" ? e3 + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(function(i3) {
        var c3 = i3[0], u4 = i3[1];
        return [e3 + c3, u4];
      })) : n2;
    });
    return [o5, s2];
  }) : r4;
}
function fr(r4) {
  if (r4 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e3 = 0, t3 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map();
  function a2(s2, n2) {
    t3.set(s2, n2), e3++, e3 > r4 && (e3 = 0, o5 = t3, t3 = /* @__PURE__ */ new Map());
  }
  return { get: function(n2) {
    var i3 = t3.get(n2);
    if (i3 !== void 0)
      return i3;
    if ((i3 = o5.get(n2)) !== void 0)
      return a2(n2, i3), i3;
  }, set: function(n2, i3) {
    t3.has(n2) ? t3.set(n2, i3) : a2(n2, i3);
  } };
}
var X5 = "!";
function br(r4) {
  var e3 = r4.separator || ":", t3 = e3.length === 1, o5 = e3[0], a2 = e3.length;
  return function(n2) {
    for (var i3 = [], c3 = 0, u4 = 0, b5, f2 = 0; f2 < n2.length; f2++) {
      var g3 = n2[f2];
      if (c3 === 0) {
        if (g3 === o5 && (t3 || n2.slice(f2, f2 + a2) === e3)) {
          i3.push(n2.slice(u4, f2)), u4 = f2 + a2;
          continue;
        }
        if (g3 === "/") {
          b5 = f2;
          continue;
        }
      }
      g3 === "[" ? c3++ : g3 === "]" && c3--;
    }
    var y4 = i3.length === 0 ? n2 : n2.substring(u4), x5 = y4.startsWith(X5), m2 = x5 ? y4.substring(1) : y4, w4 = b5 && b5 > u4 ? b5 - u4 : void 0;
    return { modifiers: i3, hasImportantModifier: x5, baseClassName: m2, maybePostfixModifierPosition: w4 };
  };
}
function gr(r4) {
  if (r4.length <= 1)
    return r4;
  var e3 = [], t3 = [];
  return r4.forEach(function(o5) {
    var a2 = o5[0] === "[";
    a2 ? (e3.push.apply(e3, t3.sort().concat([o5])), t3 = []) : t3.push(o5);
  }), e3.push.apply(e3, t3.sort()), e3;
}
function mr(r4) {
  return { cache: fr(r4.cacheSize), splitModifiers: br(r4), ...ur(r4) };
}
var Ir = /\s+/;
function vr(r4, e3) {
  var t3 = e3.splitModifiers, o5 = e3.getClassGroupId, a2 = e3.getConflictingClassGroupIds, s2 = /* @__PURE__ */ new Set();
  return r4.trim().split(Ir).map(function(n2) {
    var i3 = t3(n2), c3 = i3.modifiers, u4 = i3.hasImportantModifier, b5 = i3.baseClassName, f2 = i3.maybePostfixModifierPosition, g3 = o5(f2 ? b5.substring(0, f2) : b5), y4 = !!f2;
    if (!g3) {
      if (!f2)
        return { isTailwindClass: false, originalClassName: n2 };
      if (g3 = o5(b5), !g3)
        return { isTailwindClass: false, originalClassName: n2 };
      y4 = false;
    }
    var x5 = gr(c3).join(":"), m2 = u4 ? x5 + X5 : x5;
    return { isTailwindClass: true, modifierId: m2, classGroupId: g3, originalClassName: n2, hasPostfixModifier: y4 };
  }).reverse().filter(function(n2) {
    if (!n2.isTailwindClass)
      return true;
    var i3 = n2.modifierId, c3 = n2.classGroupId, u4 = n2.hasPostfixModifier, b5 = i3 + c3;
    return s2.has(b5) ? false : (s2.add(b5), a2(c3, u4).forEach(function(f2) {
      return s2.add(i3 + f2);
    }), true);
  }).reverse().map(function(n2) {
    return n2.originalClassName;
  }).join(" ");
}
function P3() {
  for (var r4 = arguments.length, e3 = new Array(r4), t3 = 0; t3 < r4; t3++)
    e3[t3] = arguments[t3];
  var o5, a2, s2, n2 = i3;
  function i3(u4) {
    var b5 = e3[0], f2 = e3.slice(1), g3 = f2.reduce(function(y4, x5) {
      return x5(y4);
    }, b5());
    return o5 = mr(g3), a2 = o5.cache.get, s2 = o5.cache.set, n2 = c3, c3(u4);
  }
  function c3(u4) {
    var b5 = a2(u4);
    if (b5)
      return b5;
    var f2 = vr(u4, o5);
    return s2(u4, f2), f2;
  }
  return function() {
    return n2(U3.apply(null, arguments));
  };
}
function d4(r4) {
  var e3 = function(o5) {
    return o5[r4] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G4, isArbitraryLength: () => L4, isArbitraryNumber: () => S4, isArbitraryPosition: () => Q5, isArbitraryShadow: () => D3, isArbitrarySize: () => H3, isArbitraryUrl: () => V3, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z4, isLength: () => h2, isNumber: () => M4, isPercent: () => Y2, isTshirtSize: () => C4 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h2(r4) {
  return M4(r4) || Tr.has(r4) || Pr.test(r4) || L4(r4);
}
function L4(r4) {
  return I4(r4, "length", Er);
}
function H3(r4) {
  return I4(r4, "size", xr);
}
function Q5(r4) {
  return I4(r4, "position", xr);
}
function V3(r4) {
  return I4(r4, "url", jr);
}
function S4(r4) {
  return I4(r4, "number", M4);
}
var Wr = S4;
function M4(r4) {
  return !Number.isNaN(Number(r4));
}
function Y2(r4) {
  return r4.endsWith("%") && M4(r4.slice(0, -1));
}
function z4(r4) {
  return hr(r4) || I4(r4, "number", hr);
}
function l3(r4) {
  return yr.test(r4);
}
function G4() {
  return true;
}
function C4(r4) {
  return Rr.test(r4);
}
function D3(r4) {
  return I4(r4, "", Ur);
}
function I4(r4, e3, t3) {
  var o5 = yr.exec(r4);
  return o5 ? o5[1] ? o5[1] === e3 : t3(o5[2]) : false;
}
function Er(r4) {
  return Nr.test(r4);
}
function xr() {
  return false;
}
function jr(r4) {
  return r4.startsWith("url(");
}
function hr(r4) {
  return Number.isInteger(Number(r4));
}
function Ur(r4) {
  return Lr.test(r4);
}
function T3() {
  var r4 = d4("colors"), e3 = d4("spacing"), t3 = d4("blur"), o5 = d4("brightness"), a2 = d4("borderColor"), s2 = d4("borderRadius"), n2 = d4("borderSpacing"), i3 = d4("borderWidth"), c3 = d4("contrast"), u4 = d4("grayscale"), b5 = d4("hueRotate"), f2 = d4("invert"), g3 = d4("gap"), y4 = d4("gradientColorStops"), x5 = d4("gradientColorStopPositions"), m2 = d4("inset"), w4 = d4("margin"), k3 = d4("opacity"), A5 = d4("padding"), K3 = d4("saturate"), O4 = d4("scale"), rr = d4("sepia"), er = d4("skew"), tr = d4("space"), or = d4("translate"), $3 = function() {
    return ["auto", "contain", "none"];
  }, B2 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F4 = function() {
    return ["auto", l3, e3];
  }, p4 = function() {
    return [l3, e3];
  }, nr = function() {
    return ["", h2];
  }, W3 = function() {
    return ["auto", M4, l3];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E3 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J4 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R4 = function() {
    return ["", "0", l3];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N3 = function() {
    return [M4, S4];
  }, j2 = function() {
    return [M4, l3];
  };
  return { cacheSize: 500, theme: { colors: [G4], spacing: [h2], blur: ["none", "", C4, l3], brightness: N3(), borderColor: [r4], borderRadius: ["none", "", "full", C4, l3], borderSpacing: p4(), borderWidth: nr(), contrast: N3(), grayscale: R4(), hueRotate: j2(), invert: R4(), gap: p4(), gradientColorStops: [r4], gradientColorStopPositions: [Y2, L4], inset: F4(), margin: F4(), opacity: N3(), padding: p4(), saturate: N3(), scale: N3(), sepia: R4(), skew: j2(), space: p4(), translate: p4() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C4] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B2() }], "overflow-x": [{ "overflow-x": B2() }], "overflow-y": [{ "overflow-y": B2() }], overscroll: [{ overscroll: $3() }], "overscroll-x": [{ "overscroll-x": $3() }], "overscroll-y": [{ "overscroll-y": $3() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m2] }], "inset-x": [{ "inset-x": [m2] }], "inset-y": [{ "inset-y": [m2] }], start: [{ start: [m2] }], end: [{ end: [m2] }], top: [{ top: [m2] }], right: [{ right: [m2] }], bottom: [{ bottom: [m2] }], left: [{ left: [m2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z4] }], basis: [{ basis: F4() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R4() }], shrink: [{ shrink: R4() }], order: [{ order: ["first", "last", "none", z4] }], "grid-cols": [{ "grid-cols": [G4] }], "col-start-end": [{ col: ["auto", { span: ["full", z4] }, l3] }], "col-start": [{ "col-start": W3() }], "col-end": [{ "col-end": W3() }], "grid-rows": [{ "grid-rows": [G4] }], "row-start-end": [{ row: ["auto", { span: [z4] }, l3] }], "row-start": [{ "row-start": W3() }], "row-end": [{ "row-end": W3() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g3] }], "gap-x": [{ "gap-x": [g3] }], "gap-y": [{ "gap-y": [g3] }], "justify-content": [{ justify: ["normal"].concat(J4()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J4(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J4(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A5] }], px: [{ px: [A5] }], py: [{ py: [A5] }], ps: [{ ps: [A5] }], pe: [{ pe: [A5] }], pt: [{ pt: [A5] }], pr: [{ pr: [A5] }], pb: [{ pb: [A5] }], pl: [{ pl: [A5] }], m: [{ m: [w4] }], mx: [{ mx: [w4] }], my: [{ my: [w4] }], ms: [{ ms: [w4] }], me: [{ me: [w4] }], mt: [{ mt: [w4] }], mr: [{ mr: [w4] }], mb: [{ mb: [w4] }], ml: [{ ml: [w4] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h2] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C4] }, C4, l3] }], h: [{ h: [l3, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h2] }], "max-h": [{ "max-h": [l3, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C4, L4] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S4] }], "font-family": [{ font: [G4] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M4, S4] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h2] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r4] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r4] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E3(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h2] }], "underline-offset": [{ "underline-offset": ["auto", l3, h2] }], "text-decoration-color": [{ decoration: [r4] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p4() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q5]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V3] }], "bg-color": [{ bg: [r4] }], "gradient-from-pos": [{ from: [x5] }], "gradient-via-pos": [{ via: [x5] }], "gradient-to-pos": [{ to: [x5] }], "gradient-from": [{ from: [y4] }], "gradient-via": [{ via: [y4] }], "gradient-to": [{ to: [y4] }], rounded: [{ rounded: [s2] }], "rounded-s": [{ "rounded-s": [s2] }], "rounded-e": [{ "rounded-e": [s2] }], "rounded-t": [{ "rounded-t": [s2] }], "rounded-r": [{ "rounded-r": [s2] }], "rounded-b": [{ "rounded-b": [s2] }], "rounded-l": [{ "rounded-l": [s2] }], "rounded-ss": [{ "rounded-ss": [s2] }], "rounded-se": [{ "rounded-se": [s2] }], "rounded-ee": [{ "rounded-ee": [s2] }], "rounded-es": [{ "rounded-es": [s2] }], "rounded-tl": [{ "rounded-tl": [s2] }], "rounded-tr": [{ "rounded-tr": [s2] }], "rounded-br": [{ "rounded-br": [s2] }], "rounded-bl": [{ "rounded-bl": [s2] }], "border-w": [{ border: [i3] }], "border-w-x": [{ "border-x": [i3] }], "border-w-y": [{ "border-y": [i3] }], "border-w-s": [{ "border-s": [i3] }], "border-w-e": [{ "border-e": [i3] }], "border-w-t": [{ "border-t": [i3] }], "border-w-r": [{ "border-r": [i3] }], "border-w-b": [{ "border-b": [i3] }], "border-w-l": [{ "border-l": [i3] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E3(), ["hidden"]) }], "divide-x": [{ "divide-x": [i3] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i3] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E3() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E3()) }], "outline-offset": [{ "outline-offset": [l3, h2] }], "outline-w": [{ outline: [h2] }], "outline-color": [{ outline: [r4] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r4] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h2] }], "ring-offset-color": [{ "ring-offset": [r4] }], shadow: [{ shadow: ["", "inner", "none", C4, D3] }], "shadow-color": [{ shadow: [G4] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t3] }], brightness: [{ brightness: [o5] }], contrast: [{ contrast: [c3] }], "drop-shadow": [{ "drop-shadow": ["", "none", C4, l3] }], grayscale: [{ grayscale: [u4] }], "hue-rotate": [{ "hue-rotate": [b5] }], invert: [{ invert: [f2] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t3] }], "backdrop-brightness": [{ "backdrop-brightness": [o5] }], "backdrop-contrast": [{ "backdrop-contrast": [c3] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u4] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b5] }], "backdrop-invert": [{ "backdrop-invert": [f2] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n2] }], "border-spacing-x": [{ "border-spacing-x": [n2] }], "border-spacing-y": [{ "border-spacing-y": [n2] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O4] }], "scale-x": [{ "scale-x": [O4] }], "scale-y": [{ "scale-y": [O4] }], rotate: [{ rotate: [z4, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r4] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r4] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p4() }], "scroll-mx": [{ "scroll-mx": p4() }], "scroll-my": [{ "scroll-my": p4() }], "scroll-ms": [{ "scroll-ms": p4() }], "scroll-me": [{ "scroll-me": p4() }], "scroll-mt": [{ "scroll-mt": p4() }], "scroll-mr": [{ "scroll-mr": p4() }], "scroll-mb": [{ "scroll-mb": p4() }], "scroll-ml": [{ "scroll-ml": p4() }], "scroll-p": [{ "scroll-p": p4() }], "scroll-px": [{ "scroll-px": p4() }], "scroll-py": [{ "scroll-py": p4() }], "scroll-ps": [{ "scroll-ps": p4() }], "scroll-pe": [{ "scroll-pe": p4() }], "scroll-pt": [{ "scroll-pt": p4() }], "scroll-pr": [{ "scroll-pr": p4() }], "scroll-pb": [{ "scroll-pb": p4() }], "scroll-pl": [{ "scroll-pl": p4() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r4, "none"] }], "stroke-w": [{ stroke: [h2, S4] }], stroke: [{ stroke: [r4, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P3(T3);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d5 = 0;
var x4 = Array.isArray;
function g2(t3, r4, e3, a2, o5, i3) {
  var s2, n2, f2 = {};
  for (n2 in r4)
    n2 == "ref" ? s2 = r4[n2] : f2[n2] = r4[n2];
  var u4 = { type: t3, props: f2, key: e3, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d5, __i: -1, __u: 0, __source: o5, __self: i3 };
  if (typeof t3 == "function" && (s2 = t3.defaultProps))
    for (n2 in s2)
      f2[n2] === void 0 && (f2[n2] = s2[n2]);
  return a.vnode && a.vnode(u4), u4;
}

// ../components/ui/slider.tsx
var Slider = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  We,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ g2(qe, { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ g2(Je, { class: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ g2(Qe, { class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors hover:cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = We.displayName;
export {
  Slider
};
