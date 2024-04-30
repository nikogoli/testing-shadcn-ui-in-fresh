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
  for (var t2 in _3)
    e3[t2] = _3[t2];
  return e3;
}
function Z(e3) {
  var _3 = e3.parentNode;
  _3 && _3.removeChild(e3);
}
function re(e3, _3, t2) {
  var i3, n3, r3, l4 = {};
  for (r3 in _3)
    r3 == "key" ? i3 = _3[r3] : r3 == "ref" ? n3 = _3[r3] : l4[r3] = _3[r3];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e3 == "function" && e3.defaultProps != null)
    for (r3 in e3.defaultProps)
      l4[r3] === void 0 && (l4[r3] = e3.defaultProps[r3]);
  return S(e3, l4, i3, n3, null);
}
function S(e3, _3, t2, i3, n3) {
  var r3 = { type: e3, props: _3, key: t2, ref: i3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r3), r3;
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
  for (var t2; _3 < e3.__k.length; _3++)
    if ((t2 = e3.__k[_3]) != null && t2.__e != null)
      return t2.__e;
  return typeof e3.type == "function" ? w(e3) : null;
}
function ie(e3, _3, t2) {
  var i3, n3 = e3.__v, r3 = n3.__e, l4 = e3.__P;
  if (l4)
    return (i3 = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i3), G(l4, i3, n3, e3.__n, l4.ownerSVGElement !== void 0, 32 & n3.__u ? [r3] : null, _3, r3 ?? w(n3), !!(32 & n3.__u), t2), i3.__v = n3.__v, i3.__.__k[i3.__i] = i3, i3.__d = void 0, i3.__e != r3 && ee(i3), i3;
}
function ee(e3) {
  var _3, t2;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, _3 = 0; _3 < e3.__k.length; _3++)
      if ((t2 = e3.__k[_3]) != null && t2.__e != null) {
        e3.__e = e3.__c.base = t2.__e;
        break;
      }
    return ee(e3);
  }
}
function I(e3) {
  (!e3.__d && (e3.__d = true) && x.push(e3) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e3, _3, t2, i3 = [], n3 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t2 = x.length, _3 = ie(e3, i3, n3) || _3, t2 === 0 || x.length > t2 ? (R(i3, _3, n3), n3.length = i3.length = 0, _3 = void 0, x.sort($)) : _3 && a.__c && a.__c(_3, O));
  _3 && R(i3, _3, n3), A.__r = 0;
}
function _e(e3, _3, t2, i3, n3, r3, l4, u4, c2, s2, p4) {
  var o5, m4, f2, h4, k3, v2 = i3 && i3.__k || O, d7 = _3.length;
  for (t2.__d = c2, le(t2, _3, v2), c2 = t2.__d, o5 = 0; o5 < d7; o5++)
    (f2 = t2.__k[o5]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m4 = f2.__i === -1 ? E : v2[f2.__i] || E, f2.__i = o5, G(e3, f2, m4, n3, r3, l4, u4, c2, s2, p4), h4 = f2.__e, f2.ref && m4.ref != f2.ref && (m4.ref && V(m4.ref, null, f2), p4.push(f2.ref, f2.__c || h4, f2)), k3 == null && h4 != null && (k3 = h4), 65536 & f2.__u || m4.__k === f2.__k ? c2 = te(f2, c2, e3) : typeof f2.type == "function" && f2.__d !== void 0 ? c2 = f2.__d : h4 && (c2 = h4.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t2.__d = c2, t2.__e = k3;
}
function le(e3, _3, t2) {
  var i3, n3, r3, l4, u4, c2 = _3.length, s2 = t2.length, p4 = s2, o5 = 0;
  for (e3.__k = [], i3 = 0; i3 < c2; i3++)
    l4 = i3 + o5, (n3 = e3.__k[i3] = (n3 = _3[i3]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e3, n3.__b = e3.__b + 1, u4 = ue(n3, t2, l4, p4), n3.__i = u4, r3 = null, u4 !== -1 && (p4--, (r3 = t2[u4]) && (r3.__u |= 131072)), r3 == null || r3.__v === null ? (u4 == -1 && o5--, typeof n3.type != "function" && (n3.__u |= 65536)) : u4 !== l4 && (u4 === l4 + 1 ? o5++ : u4 > l4 ? p4 > c2 - l4 ? o5 += u4 - l4 : o5-- : u4 < l4 ? u4 == l4 - 1 && (o5 = u4 - l4) : o5 = 0, u4 !== i3 + o5 && (n3.__u |= 65536))) : (r3 = t2[l4]) && r3.key == null && r3.__e && !(131072 & r3.__u) && (r3.__e == e3.__d && (e3.__d = w(r3)), B(r3, r3, false), t2[l4] = null, p4--);
  if (p4)
    for (i3 = 0; i3 < s2; i3++)
      (r3 = t2[i3]) != null && !(131072 & r3.__u) && (r3.__e == e3.__d && (e3.__d = w(r3)), B(r3, r3));
}
function te(e3, _3, t2) {
  var i3, n3;
  if (typeof e3.type == "function") {
    for (i3 = e3.__k, n3 = 0; i3 && n3 < i3.length; n3++)
      i3[n3] && (i3[n3].__ = e3, _3 = te(i3[n3], _3, t2));
    return _3;
  }
  e3.__e != _3 && (t2.insertBefore(e3.__e, _3 || null), _3 = e3.__e);
  do
    _3 = _3 && _3.nextSibling;
  while (_3 != null && _3.nodeType === 8);
  return _3;
}
function se(e3, _3) {
  return _3 = _3 || [], e3 == null || typeof e3 == "boolean" || (F(e3) ? e3.some(function(t2) {
    se(t2, _3);
  }) : _3.push(e3)), _3;
}
function ue(e3, _3, t2, i3) {
  var n3 = e3.key, r3 = e3.type, l4 = t2 - 1, u4 = t2 + 1, c2 = _3[t2];
  if (c2 === null || c2 && n3 == c2.key && r3 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i3 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l4 >= 0 || u4 < _3.length; ) {
      if (l4 >= 0) {
        if ((c2 = _3[l4]) && !(131072 & c2.__u) && n3 == c2.key && r3 === c2.type)
          return l4;
        l4--;
      }
      if (u4 < _3.length) {
        if ((c2 = _3[u4]) && !(131072 & c2.__u) && n3 == c2.key && r3 === c2.type)
          return u4;
        u4++;
      }
    }
  return -1;
}
function q(e3, _3, t2) {
  _3[0] === "-" ? e3.setProperty(_3, t2 ?? "") : e3[_3] = t2 == null ? "" : typeof t2 != "number" || oe.test(_3) ? t2 : t2 + "px";
}
function M(e3, _3, t2, i3, n3) {
  var r3;
  e:
    if (_3 === "style")
      if (typeof t2 == "string")
        e3.style.cssText = t2;
      else {
        if (typeof i3 == "string" && (e3.style.cssText = i3 = ""), i3)
          for (_3 in i3)
            t2 && _3 in t2 || q(e3.style, _3, "");
        if (t2)
          for (_3 in t2)
            i3 && t2[_3] === i3[_3] || q(e3.style, _3, t2[_3]);
      }
    else if (_3[0] === "o" && _3[1] === "n")
      r3 = _3 !== (_3 = _3.replace(/(PointerCapture)$|Capture$/i, "$1")), _3 = _3.toLowerCase() in e3 ? _3.toLowerCase().slice(2) : _3.slice(2), e3.l || (e3.l = {}), e3.l[_3 + r3] = t2, t2 ? i3 ? t2.u = i3.u : (t2.u = Date.now(), e3.addEventListener(_3, r3 ? K : J, r3)) : e3.removeEventListener(_3, r3 ? K : J, r3);
    else {
      if (n3)
        _3 = _3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_3 !== "width" && _3 !== "height" && _3 !== "href" && _3 !== "list" && _3 !== "form" && _3 !== "tabIndex" && _3 !== "download" && _3 !== "rowSpan" && _3 !== "colSpan" && _3 !== "role" && _3 in e3)
        try {
          e3[_3] = t2 ?? "";
          break e;
        } catch {
        }
      typeof t2 == "function" || (t2 == null || t2 === false && _3[4] !== "-" ? e3.removeAttribute(_3) : e3.setAttribute(_3, t2));
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
function G(e3, _3, t2, i3, n3, r3, l4, u4, c2, s2) {
  var p4, o5, m4, f2, h4, k3, v2, d7, y6, C5, T4, P4, j3, U5, N2, g4 = _3.type;
  if (_3.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r3 = [u4 = _3.__e = t2.__e]), (p4 = a.__b) && p4(_3);
  e:
    if (typeof g4 == "function")
      try {
        if (d7 = _3.props, y6 = (p4 = g4.contextType) && i3[p4.__c], C5 = p4 ? y6 ? y6.props.value : p4.__ : i3, t2.__c ? v2 = (o5 = _3.__c = t2.__c).__ = o5.__E : ("prototype" in g4 && g4.prototype.render ? _3.__c = o5 = new g4(d7, C5) : (_3.__c = o5 = new W(d7, C5), o5.constructor = g4, o5.render = ce), y6 && y6.sub(o5), o5.props = d7, o5.state || (o5.state = {}), o5.context = C5, o5.__n = i3, m4 = o5.__d = true, o5.__h = [], o5._sb = []), o5.__s == null && (o5.__s = o5.state), g4.getDerivedStateFromProps != null && (o5.__s == o5.state && (o5.__s = b({}, o5.__s)), b(o5.__s, g4.getDerivedStateFromProps(d7, o5.__s))), f2 = o5.props, h4 = o5.state, o5.__v = _3, m4)
          g4.getDerivedStateFromProps == null && o5.componentWillMount != null && o5.componentWillMount(), o5.componentDidMount != null && o5.__h.push(o5.componentDidMount);
        else {
          if (g4.getDerivedStateFromProps == null && d7 !== f2 && o5.componentWillReceiveProps != null && o5.componentWillReceiveProps(d7, C5), !o5.__e && (o5.shouldComponentUpdate != null && o5.shouldComponentUpdate(d7, o5.__s, C5) === false || _3.__v === t2.__v)) {
            for (_3.__v !== t2.__v && (o5.props = d7, o5.state = o5.__s, o5.__d = false), _3.__e = t2.__e, _3.__k = t2.__k, _3.__k.forEach(function(L5) {
              L5 && (L5.__ = _3);
            }), T4 = 0; T4 < o5._sb.length; T4++)
              o5.__h.push(o5._sb[T4]);
            o5._sb = [], o5.__h.length && l4.push(o5);
            break e;
          }
          o5.componentWillUpdate != null && o5.componentWillUpdate(d7, o5.__s, C5), o5.componentDidUpdate != null && o5.__h.push(function() {
            o5.componentDidUpdate(f2, h4, k3);
          });
        }
        if (o5.context = C5, o5.props = d7, o5.__P = e3, o5.__e = false, P4 = a.__r, j3 = 0, "prototype" in g4 && g4.prototype.render) {
          for (o5.state = o5.__s, o5.__d = false, P4 && P4(_3), p4 = o5.render(o5.props, o5.state, o5.context), U5 = 0; U5 < o5._sb.length; U5++)
            o5.__h.push(o5._sb[U5]);
          o5._sb = [];
        } else
          do
            o5.__d = false, P4 && P4(_3), p4 = o5.render(o5.props, o5.state, o5.context), o5.state = o5.__s;
          while (o5.__d && ++j3 < 25);
        o5.state = o5.__s, o5.getChildContext != null && (i3 = b(b({}, i3), o5.getChildContext())), m4 || o5.getSnapshotBeforeUpdate == null || (k3 = o5.getSnapshotBeforeUpdate(f2, h4)), _e(e3, F(N2 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N2 : [N2], _3, t2, i3, n3, r3, l4, u4, c2, s2), o5.base = _3.__e, _3.__u &= -161, o5.__h.length && l4.push(o5), v2 && (o5.__E = o5.__ = null);
      } catch (L5) {
        _3.__v = null, c2 || r3 != null ? (_3.__e = u4, _3.__u |= c2 ? 160 : 32, r3[r3.indexOf(u4)] = null) : (_3.__e = t2.__e, _3.__k = t2.__k), a.__e(L5, _3, t2);
      }
    else
      r3 == null && _3.__v === t2.__v ? (_3.__k = t2.__k, _3.__e = t2.__e) : _3.__e = fe(t2.__e, _3, t2, i3, n3, r3, l4, c2, s2);
  (p4 = a.diffed) && p4(_3);
}
function R(e3, _3, t2) {
  for (var i3 = 0; i3 < t2.length; i3++)
    V(t2[i3], t2[++i3], t2[++i3]);
  a.__c && a.__c(_3, e3), e3.some(function(n3) {
    try {
      e3 = n3.__h, n3.__h = [], e3.some(function(r3) {
        r3.call(n3);
      });
    } catch (r3) {
      a.__e(r3, n3.__v);
    }
  });
}
function fe(e3, _3, t2, i3, n3, r3, l4, u4, c2) {
  var s2, p4, o5, m4, f2, h4, k3, v2 = t2.props, d7 = _3.props, y6 = _3.type;
  if (y6 === "svg" && (n3 = true), r3 != null) {
    for (s2 = 0; s2 < r3.length; s2++)
      if ((f2 = r3[s2]) && "setAttribute" in f2 == !!y6 && (y6 ? f2.localName === y6 : f2.nodeType === 3)) {
        e3 = f2, r3[s2] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y6 === null)
      return document.createTextNode(d7);
    e3 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y6) : document.createElement(y6, d7.is && d7), r3 = null, u4 = false;
  }
  if (y6 === null)
    v2 === d7 || u4 && e3.data === d7 || (e3.data = d7);
  else {
    if (r3 = r3 && D.call(e3.childNodes), v2 = t2.props || E, !u4 && r3 != null)
      for (v2 = {}, s2 = 0; s2 < e3.attributes.length; s2++)
        v2[(f2 = e3.attributes[s2]).name] = f2.value;
    for (s2 in v2)
      f2 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o5 = f2 : s2 === "key" || s2 in d7 || M(e3, s2, null, f2, n3));
    for (s2 in d7)
      f2 = d7[s2], s2 == "children" ? m4 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h4 = f2 : s2 == "checked" ? k3 = f2 : s2 === "key" || u4 && typeof f2 != "function" || v2[s2] === f2 || M(e3, s2, f2, v2[s2], n3);
    if (p4)
      u4 || o5 && (p4.__html === o5.__html || p4.__html === e3.innerHTML) || (e3.innerHTML = p4.__html), _3.__k = [];
    else if (o5 && (e3.innerHTML = ""), _e(e3, F(m4) ? m4 : [m4], _3, t2, i3, n3 && y6 !== "foreignObject", r3, l4, r3 ? r3[0] : t2.__k && w(t2, 0), u4, c2), r3 != null)
      for (s2 = r3.length; s2--; )
        r3[s2] != null && Z(r3[s2]);
    u4 || (s2 = "value", h4 !== void 0 && (h4 !== e3[s2] || y6 === "progress" && !h4 || y6 === "option" && h4 !== v2[s2]) && M(e3, s2, h4, v2[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e3[s2] && M(e3, s2, k3, v2[s2], false));
  }
  return e3;
}
function V(e3, _3, t2) {
  try {
    typeof e3 == "function" ? e3(_3) : e3.current = _3;
  } catch (i3) {
    a.__e(i3, t2);
  }
}
function B(e3, _3, t2) {
  var i3, n3;
  if (a.unmount && a.unmount(e3), (i3 = e3.ref) && (i3.current && i3.current !== e3.__e || V(i3, null, _3)), (i3 = e3.__c) != null) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (r3) {
        a.__e(r3, _3);
      }
    i3.base = i3.__P = null, e3.__c = void 0;
  }
  if (i3 = e3.__k)
    for (n3 = 0; n3 < i3.length; n3++)
      i3[n3] && B(i3[n3], _3, t2 || typeof e3.type != "function");
  t2 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _3, t2) {
  return this.constructor(e3, t2);
}
function pe(e3, _3, t2) {
  var i3, n3, r3, l4;
  a.__ && a.__(e3, _3), n3 = (i3 = typeof t2 == "function") ? null : t2 && t2.__k || _3.__k, r3 = [], l4 = [], G(_3, e3 = (!i3 && t2 || _3).__k = re(H, null, [e3]), n3 || E, E, _3.ownerSVGElement !== void 0, !i3 && t2 ? [t2] : n3 ? null : _3.firstChild ? D.call(_3.childNodes) : null, r3, !i3 && t2 ? t2 : n3 ? n3.__e : _3.firstChild, i3, l4), e3.__d = void 0, R(r3, e3, l4);
}
function ae(e3, _3) {
  pe(e3, _3, ae);
}
function he(e3, _3, t2) {
  var i3, n3, r3, l4, u4 = b({}, e3.props);
  for (r3 in e3.type && e3.type.defaultProps && (l4 = e3.type.defaultProps), _3)
    r3 == "key" ? i3 = _3[r3] : r3 == "ref" ? n3 = _3[r3] : u4[r3] = _3[r3] === void 0 && l4 !== void 0 ? l4[r3] : _3[r3];
  return arguments.length > 2 && (u4.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e3.type, u4, i3 || e3.key, n3 || e3.ref, null);
}
function ve(e3, _3) {
  var t2 = { __c: _3 = "__cC" + Y++, __: e3, Consumer: function(i3, n3) {
    return i3.children(n3);
  }, Provider: function(i3) {
    var n3, r3;
    return this.getChildContext || (n3 = [], (r3 = {})[_3] = this, this.getChildContext = function() {
      return r3;
    }, this.shouldComponentUpdate = function(l4) {
      this.props.value !== l4.value && n3.some(function(u4) {
        u4.__e = true, I(u4);
      });
    }, this.sub = function(l4) {
      n3.push(l4);
      var u4 = l4.componentWillUnmount;
      l4.componentWillUnmount = function() {
        n3.splice(n3.indexOf(l4), 1), u4 && u4.call(l4);
      };
    }), i3.children;
  } };
  return t2.Provider.__ = t2.Consumer.contextType = t2;
}
D = O.slice, a = { __e: function(e3, _3, t2, i3) {
  for (var n3, r3, l4; _3 = _3.__; )
    if ((n3 = _3.__c) && !n3.__)
      try {
        if ((r3 = n3.constructor) && r3.getDerivedStateFromError != null && (n3.setState(r3.getDerivedStateFromError(e3)), l4 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e3, i3 || {}), l4 = n3.__d), l4)
          return n3.__E = n3;
      } catch (u4) {
        e3 = u4;
      }
  throw e3;
} }, Q = 0, ne = function(e3) {
  return e3 != null && e3.constructor == null;
}, W.prototype.setState = function(e3, _3) {
  var t2;
  t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e3 == "function" && (e3 = e3(b({}, t2), this.props)), e3 && b(t2, e3), e3 != null && this.__v && (_3 && this._sb.push(_3), I(this));
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
function l(t2, _3) {
  o.__h && o.__h(r, t2, v || _3), v = 0;
  var u4 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= u4.__.length && u4.__.push({ __V: p }), u4.__[t2];
}
function I2(t2) {
  return v = 1, R2(U, t2);
}
function R2(t2, _3, u4) {
  var n3 = l(c++, 2);
  if (n3.t = t2, !n3.__c && (n3.__ = [u4 ? u4(_3) : U(void 0, _3), function(a2) {
    var f2 = n3.__N ? n3.__N[0] : n3.__[0], s2 = n3.t(f2, a2);
    f2 !== s2 && (n3.__N = [s2, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r, !r.u)) {
    var i3 = function(a2, f2, s2) {
      if (!n3.__c.__H)
        return true;
      var m4 = n3.__c.__H.__.filter(function(e3) {
        return !!e3.__c;
      });
      if (m4.every(function(e3) {
        return !e3.__N;
      }))
        return !h4 || h4.call(this, a2, f2, s2);
      var V5 = false;
      return m4.forEach(function(e3) {
        if (e3.__N) {
          var P4 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P4 !== e3.__[0] && (V5 = true);
        }
      }), !(!V5 && n3.__c.props === a2) && (!h4 || h4.call(this, a2, f2, s2));
    };
    r.u = true;
    var h4 = r.shouldComponentUpdate, N2 = r.componentWillUpdate;
    r.componentWillUpdate = function(a2, f2, s2) {
      if (this.__e) {
        var m4 = h4;
        h4 = void 0, i3(a2, f2, s2), h4 = m4;
      }
      N2 && N2.call(this, a2, f2, s2);
    }, r.shouldComponentUpdate = i3;
  }
  return n3.__N || n3.__;
}
function z2(t2, _3) {
  var u4 = l(c++, 3);
  !o.__s && y(u4.__H, _3) && (u4.__ = t2, u4.i = _3, r.__H.__h.push(u4));
}
function S2(t2, _3) {
  var u4 = l(c++, 4);
  !o.__s && y(u4.__H, _3) && (u4.__ = t2, u4.i = _3, r.__h.push(u4));
}
function L(t2) {
  return v = 5, T(function() {
    return { current: t2 };
  }, []);
}
function M2(t2, _3, u4) {
  v = 6, S2(function() {
    return typeof t2 == "function" ? (t2(_3()), function() {
      return t2(null);
    }) : t2 ? (t2.current = _3(), function() {
      return t2.current = null;
    }) : void 0;
  }, u4 == null ? u4 : u4.concat(t2));
}
function T(t2, _3) {
  var u4 = l(c++, 7);
  return y(u4.__H, _3) ? (u4.__V = t2(), u4.i = _3, u4.__h = t2, u4.__V) : u4.__;
}
function G2(t2, _3) {
  return v = 8, T(function() {
    return t2;
  }, _3);
}
function J2(t2) {
  var _3 = r.context[t2.__c], u4 = l(c++, 9);
  return u4.c = t2, _3 ? (u4.__ == null && (u4.__ = true, _3.sub(r)), _3.props.value) : t2.__;
}
function K2(t2, _3) {
  o.useDebugValue && o.useDebugValue(_3 ? _3(t2) : t2);
}
function Q2() {
  var t2 = l(c++, 11);
  if (!t2.__) {
    for (var _3 = r.__v; _3 !== null && !_3.__m && _3.__ !== null; )
      _3 = _3.__;
    var u4 = _3.__m || (_3.__m = [0, 0]);
    t2.__ = "P" + u4[0] + "-" + u4[1]++;
  }
  return t2.__;
}
function W2() {
  for (var t2; t2 = x2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(d), t2.__H.__h.forEach(E2), t2.__H.__h = [];
      } catch (_3) {
        t2.__H.__h = [], o.__e(_3, t2.__v);
      }
}
o.__b = function(t2) {
  r = null, g && g(t2);
}, o.__ = function(t2, _3) {
  t2 && _3.__k && _3.__k.__m && (t2.__m = _3.__k.__m), k && k(t2, _3);
}, o.__r = function(t2) {
  C && C(t2), c = 0;
  var _3 = (r = t2.__c).__H;
  _3 && (H2 === r ? (_3.__h = [], r.__h = [], _3.__.forEach(function(u4) {
    u4.__N && (u4.__ = u4.__N), u4.__V = p, u4.__N = u4.i = void 0;
  })) : (_3.__h.forEach(d), _3.__h.forEach(E2), _3.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t2) {
  A2 && A2(t2);
  var _3 = t2.__c;
  _3 && _3.__H && (_3.__H.__h.length && (x2.push(_3) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _3.__H.__.forEach(function(u4) {
    u4.i && (u4.__H = u4.i), u4.__V !== p && (u4.__ = u4.__V), u4.i = void 0, u4.__V = p;
  })), H2 = r = null;
}, o.__c = function(t2, _3) {
  _3.some(function(u4) {
    try {
      u4.__h.forEach(d), u4.__h = u4.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _3.some(function(i3) {
        i3.__h && (i3.__h = []);
      }), _3 = [], o.__e(n3, u4.__v);
    }
  }), D2 && D2(t2, _3);
}, o.unmount = function(t2) {
  F2 && F2(t2);
  var _3, u4 = t2.__c;
  u4 && u4.__H && (u4.__H.__.forEach(function(n3) {
    try {
      d(n3);
    } catch (i3) {
      _3 = i3;
    }
  }), u4.__H = void 0, _3 && o.__e(_3, u4.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _3, u4 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_3), setTimeout(t2);
  }, n3 = setTimeout(u4, 100);
  q2 && (_3 = requestAnimationFrame(u4));
}
function d(t2) {
  var _3 = r, u4 = t2.__c;
  typeof u4 == "function" && (t2.__c = void 0, u4()), r = _3;
}
function E2(t2) {
  var _3 = r;
  t2.__c = t2.__(), r = _3;
}
function y(t2, _3) {
  return !t2 || t2.length !== _3.length || _3.some(function(u4, n3) {
    return u4 !== t2[n3];
  });
}
function U(t2, _3) {
  return typeof _3 == "function" ? _3(t2) : _3;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e3, t2) {
  for (var n3 in t2)
    e3[n3] = t2[n3];
  return e3;
}
function b3(e3, t2) {
  for (var n3 in e3)
    if (n3 !== "__source" && !(n3 in t2))
      return true;
  for (var r3 in t2)
    if (r3 !== "__source" && e3[r3] !== t2[r3])
      return true;
  return false;
}
function C2(e3, t2) {
  this.props = e3, this.context = t2;
}
function Q3(e3, t2) {
  function n3(o5) {
    var u4 = this.props.ref, a2 = u4 == o5.ref;
    return !a2 && u4 && (u4.call ? u4(null) : u4.current = null), t2 ? !t2(this.props, o5) || !a2 : b3(this.props, o5);
  }
  function r3(o5) {
    return this.shouldComponentUpdate = n3, re(e3, o5);
  }
  return r3.displayName = "Memo(" + (e3.displayName || e3.name) + ")", r3.prototype.isReactComponent = true, r3.__f = true, r3;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e3, t2) {
  return b3(this.props, e3) || b3(this.state, t2);
};
var N = a.__b;
a.__b = function(e3) {
  e3.type && e3.type.__f && e3.ref && (e3.props.ref = e3.ref, e3.ref = null), N && N(e3);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e3) {
  function t2(n3) {
    var r3 = L2({}, n3);
    return delete r3.ref, e3(r3, n3.ref || null);
  }
  return t2.$$typeof = X2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e3.displayName || e3.name) + ")", t2;
}
var R3 = function(e3, t2) {
  return e3 == null ? null : se(se(e3).map(t2));
};
var te2 = { map: R3, forEach: R3, count: function(e3) {
  return e3 ? se(e3).length : 0;
}, only: function(e3) {
  var t2 = se(e3);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e3, t2, n3, r3) {
  if (e3.then) {
    for (var o5, u4 = t2; u4 = u4.__; )
      if ((o5 = u4.__c) && o5.__c)
        return t2.__e == null && (t2.__e = n3.__e, t2.__k = n3.__k), o5.__c(e3, t2);
  }
  ne2(e3, t2, n3, r3);
};
var x3 = a.unmount;
function T2(e3, t2, n3) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(r3) {
    typeof r3.__c == "function" && r3.__c();
  }), e3.__c.__H = null), (e3 = L2({}, e3)).__c != null && (e3.__c.__P === n3 && (e3.__c.__P = t2), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(r3) {
    return T2(r3, t2, n3);
  })), e3;
}
function A3(e3, t2, n3) {
  return e3 && n3 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(r3) {
    return A3(r3, t2, n3);
  }), e3.__c && e3.__c.__P === t2 && (e3.__e && n3.appendChild(e3.__e), e3.__c.__e = true, e3.__c.__P = n3)), e3;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e3) {
  var t2 = e3.__.__c;
  return t2 && t2.__a && t2.__a(e3);
}
function re2(e3) {
  var t2, n3, r3;
  function o5(u4) {
    if (t2 || (t2 = e3()).then(function(a2) {
      n3 = a2.default || a2;
    }, function(a2) {
      r3 = a2;
    }), r3)
      throw r3;
    if (!n3)
      throw t2;
    return re(n3, u4);
  }
  return o5.displayName = "Lazy", o5.__f = true, o5;
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e3) {
  var t2 = e3.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & e3.__u && (e3.type = null), x3 && x3(e3);
}, (h.prototype = new W()).__c = function(e3, t2) {
  var n3 = t2.__c, r3 = this;
  r3.t == null && (r3.t = []), r3.t.push(n3);
  var o5 = F3(r3.__v), u4 = false, a2 = function() {
    u4 || (u4 = true, n3.__R = null, o5 ? o5(l4) : l4());
  };
  n3.__R = a2;
  var l4 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var s2 = r3.state.__a;
        r3.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g4;
      for (r3.setState({ __a: r3.__b = null }); g4 = r3.t.pop(); )
        g4.forceUpdate();
    }
  };
  r3.__u++ || 32 & t2.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), e3.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e3, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n3, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var o5 = t2.__a && re(H, null, e3.fallback);
  return o5 && (o5.__u &= -33), [re(H, null, t2.__a ? null : e3.children), o5];
};
var k2 = function(e3, t2, n3) {
  if (++n3[1] === n3[0] && e3.o.delete(t2), e3.props.revealOrder && (e3.props.revealOrder[0] !== "t" || !e3.o.size))
    for (n3 = e3.u; n3; ) {
      for (; n3.length > 3; )
        n3.pop()();
      if (n3[1] < n3[0])
        break;
      e3.u = n3 = n3[2];
    }
};
function oe2(e3) {
  return this.getChildContext = function() {
    return e3.context;
  }, e3.children;
}
function ue2(e3) {
  var t2 = this, n3 = e3.i;
  t2.componentWillUnmount = function() {
    pe(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n3 && t2.componentWillUnmount(), t2.l || (t2.i = n3, t2.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(r3) {
    this.childNodes.push(r3), t2.i.appendChild(r3);
  }, insertBefore: function(r3, o5) {
    this.childNodes.push(r3), t2.i.appendChild(r3);
  }, removeChild: function(r3) {
    this.childNodes.splice(this.childNodes.indexOf(r3) >>> 1, 1), t2.i.removeChild(r3);
  } }), pe(re(oe2, { context: t2.context }, e3.__v), t2.l);
}
function ae2(e3, t2) {
  var n3 = re(ue2, { __v: e3, i: t2 });
  return n3.containerInfo = t2, n3;
}
(p2.prototype = new W()).__a = function(e3) {
  var t2 = this, n3 = F3(t2.__v), r3 = t2.o.get(e3);
  return r3[0]++, function(o5) {
    var u4 = function() {
      t2.props.revealOrder ? (r3.push(o5), k2(t2, e3, r3)) : o5();
    };
    n3 ? n3(u4) : u4();
  };
}, p2.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e3.children);
  e3.revealOrder && e3.revealOrder[0] === "b" && t2.reverse();
  for (var n3 = t2.length; n3--; )
    this.o.set(t2[n3], this.u = [1, 0, this.u]);
  return e3.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t2, n3) {
    k2(e3, n3, t2);
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
function fe2(e3, t2, n3) {
  return t2.__k == null && (t2.textContent = ""), pe(e3, t2), typeof n3 == "function" && n3(), e3 ? e3.__c : null;
}
function pe2(e3, t2, n3) {
  return ae(e3, t2), typeof n3 == "function" && n3(), e3 ? e3.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e3) {
  Object.defineProperty(W.prototype, e3, { configurable: true, get: function() {
    return this["UNSAFE_" + e3];
  }, set: function(t2) {
    Object.defineProperty(this, e3, { configurable: true, writable: true, value: t2 });
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
  typeof e3.type == "string" && function(t2) {
    var n3 = t2.props, r3 = t2.type, o5 = {};
    for (var u4 in n3) {
      var a2 = n3[u4];
      if (!(u4 === "value" && "defaultValue" in n3 && a2 == null || _e2 && u4 === "children" && r3 === "noscript" || u4 === "class" || u4 === "className")) {
        var l4 = u4.toLowerCase();
        u4 === "defaultValue" && "value" in n3 && n3.value == null ? u4 = "value" : u4 === "download" && a2 === true ? a2 = "" : l4 === "translate" && a2 === "no" ? a2 = false : l4 === "ondoubleclick" ? u4 = "ondblclick" : l4 !== "onchange" || r3 !== "input" && r3 !== "textarea" || ce2(n3.type) ? l4 === "onfocus" ? u4 = "onfocusin" : l4 === "onblur" ? u4 = "onfocusout" : le2.test(u4) ? u4 = l4 : r3.indexOf("-") === -1 && ie2.test(u4) ? u4 = u4.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l4 = u4 = "oninput", l4 === "oninput" && o5[u4 = l4] && (u4 = "oninputCapture"), o5[u4] = a2;
      }
    }
    r3 == "select" && o5.multiple && Array.isArray(o5.value) && (o5.value = se(n3.children).forEach(function(s2) {
      s2.props.selected = o5.value.indexOf(s2.props.value) != -1;
    })), r3 == "select" && o5.defaultValue != null && (o5.value = se(n3.children).forEach(function(s2) {
      s2.props.selected = o5.multiple ? o5.defaultValue.indexOf(s2.props.value) != -1 : o5.defaultValue == s2.props.value;
    })), n3.class && !n3.className ? (o5.class = n3.class, Object.defineProperty(o5, "className", me)) : (n3.className && !n3.class || n3.class && n3.className) && (o5.class = o5.className = n3.className), t2.props = o5;
  }(e3), e3.$$typeof = V2, P && P(e3);
};
var w2 = a.__r;
a.__r = function(e3) {
  w2 && w2(e3), S3 = e3.__c;
};
var U2 = a.diffed;
a.diffed = function(e3) {
  U2 && U2(e3);
  var t2 = e3.props, n3 = e3.__e;
  n3 != null && e3.type === "textarea" && "value" in t2 && t2.value !== n3.value && (n3.value = t2.value == null ? "" : t2.value), S3 = null;
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
var Ne = function(e3, t2) {
  return e3(t2);
};
var Re = function(e3, t2) {
  return e3(t2);
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
function Ue(e3, t2) {
  var n3 = t2(), r3 = I2({ h: { __: n3, v: t2 } }), o5 = r3[0].h, u4 = r3[1];
  return S2(function() {
    o5.__ = n3, o5.v = t2, y2(o5) && u4({ h: o5 });
  }, [e3, n3, t2]), z2(function() {
    return y2(o5) && u4({ h: o5 }), e3(function() {
      y2(o5) && u4({ h: o5 });
    });
  }, [e3]), n3;
}
function y2(e3) {
  var t2, n3, r3 = e3.v, o5 = e3.__;
  try {
    var u4 = r3();
    return !((t2 = o5) === (n3 = u4) && (t2 !== 0 || 1 / t2 == 1 / n3) || t2 != t2 && n3 != n3);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n3, t2) => {
  for (var e3 in t2)
    s(n3, e3, { get: t2[e3], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e3 = arguments[t2];
      for (var a2 in e3)
        Object.prototype.hasOwnProperty.call(e3, a2) && (n3[a2] = e3[a2]);
    }
    return n3;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e3, f2, { checkForDefaultPrevented: t2 = true } = {}) {
  return function(c2) {
    if (e3?.(c2), t2 === false || !c2.defaultPrevented)
      return f2?.(c2);
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
function _(t2, c2 = []) {
  let o5 = [];
  function a2(r3, e3) {
    let n3 = ve(e3), s2 = o5.length;
    o5 = [...o5, e3];
    function f2(d7) {
      let { scope: i3, children: x5, ...$3 } = d7, h4 = i3?.[t2][s2] || n3, S6 = T(() => $3, Object.values($3));
      return re(h4.Provider, { value: S6 }, x5);
    }
    function v2(d7, i3) {
      let x5 = i3?.[t2][s2] || n3, $3 = J2(x5);
      if ($3)
        return $3;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d7}\` must be used within \`${r3}\``);
    }
    return f2.displayName = r3 + "Provider", [f2, v2];
  }
  let u4 = () => {
    let r3 = o5.map((e3) => ve(e3));
    return function(n3) {
      let s2 = n3?.[t2] || r3;
      return T(() => ({ [`__scope${t2}`]: { ...n3, [t2]: s2 } }), [n3, s2]);
    };
  };
  return u4.scopeName = t2, [a2, C3(u4, ...c2)];
}
function C3(...t2) {
  let c2 = t2[0];
  if (t2.length === 1)
    return c2;
  let o5 = () => {
    let a2 = t2.map((u4) => ({ useScope: u4(), scopeName: u4.scopeName }));
    return function(r3) {
      let e3 = a2.reduce((n3, { useScope: s2, scopeName: f2 }) => {
        let d7 = s2(r3)[`__scope${f2}`];
        return { ...n3, ...d7 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e3 }), [e3]);
    };
  };
  return o5.scopeName = c2.scopeName, o5;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n3, t2) => {
  let { children: e3, ...r3 } = n3, o5 = te2.toArray(e3), l4 = o5.find(I3);
  if (l4) {
    let c2 = l4.props.children, a2 = o5.map((m4) => m4 === l4 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m4);
    return re($2, p3({}, r3, { ref: t2 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p3({}, r3, { ref: t2 }), e3);
});
b4.displayName = "Slot";
var $2 = ee2((n3, t2) => {
  let { children: e3, ...r3 } = n3;
  return m(e3) ? Ee(e3, { ...X3(r3, e3.props), ref: t2 ? t(t2, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n3 }) => re(H, null, n3);
function I3(n3) {
  return m(n3) && n3.type === y3;
}
function X3(n3, t2) {
  let e3 = { ...t2 };
  for (let r3 in t2) {
    let o5 = n3[r3], l4 = t2[r3];
    /^on[A-Z]/.test(r3) ? o5 && l4 ? e3[r3] = (...a2) => {
      l4(...a2), o5(...a2);
    } : o5 && (e3[r3] = o5) : r3 === "style" ? e3[r3] = { ...o5, ...l4 } : r3 === "className" && (e3[r3] = [o5, l4].filter(Boolean).join(" "));
  }
  return { ...n3, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-collection@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collection.mjs
function _2(s2) {
  let a2 = s2 + "CollectionProvider", [I6, $3] = _(a2), [E4, f2] = I6(a2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m4 = (r3) => {
    let { scope: e3, children: l4 } = r3, o5 = Te.useRef(null), c2 = Te.useRef(/* @__PURE__ */ new Map()).current;
    return Te.createElement(E4, { scope: e3, itemMap: c2, collectionRef: o5 }, l4);
  }, d7 = s2 + "CollectionSlot", p4 = Te.forwardRef((r3, e3) => {
    let { scope: l4, children: o5 } = r3, c2 = f2(d7, l4), n3 = u2(e3, c2.collectionRef);
    return Te.createElement(b4, { ref: n3 }, o5);
  }), u4 = s2 + "CollectionItemSlot", C5 = "data-radix-collection-item", R4 = Te.forwardRef((r3, e3) => {
    let { scope: l4, children: o5, ...c2 } = r3, n3 = Te.useRef(null), M5 = u2(e3, n3), i3 = f2(u4, l4);
    return Te.useEffect(() => (i3.itemMap.set(n3, { ref: n3, ...c2 }), () => void i3.itemMap.delete(n3))), Te.createElement(b4, { [C5]: "", ref: M5 }, o5);
  });
  function h4(r3) {
    let e3 = f2(s2 + "CollectionConsumer", r3);
    return Te.useCallback(() => {
      let o5 = e3.collectionRef.current;
      if (!o5)
        return [];
      let c2 = Array.from(o5.querySelectorAll(`[${C5}]`));
      return Array.from(e3.itemMap.values()).sort((i3, v2) => c2.indexOf(i3.ref.current) - c2.indexOf(v2.ref.current));
    }, [e3.collectionRef, e3.itemMap]);
  }
  return [{ Provider: m4, Slot: p4, ItemSlot: R4 }, h4, $3];
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t2, e3) => {
  let f2 = ee2((r3, o5) => {
    let { asChild: s2, ...a2 } = r3, i3 = s2 ? b4 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i3, p3({}, a2, { ref: o5 }));
  });
  return f2.displayName = `Primitive.${e3}`, { ...t2, [e3]: f2 };
}, {});
function E3(t2, e3) {
  t2 && Re(() => t2.dispatchEvent(e3));
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f2) {
  let e3 = L(f2);
  return z2(() => {
    e3.current = f2;
  }), T(() => (...u4) => {
    var r3;
    return (r3 = e3.current) === null || r3 === void 0 ? void 0 : r3.call(e3, ...u4);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i(d7, e3 = globalThis?.document) {
  let a2 = l2(d7);
  z2(() => {
    let o5 = (s2) => {
      s2.key === "Escape" && a2(s2);
    };
    return e3.addEventListener("keydown", o5), () => e3.removeEventListener("keydown", o5);
  }, [a2, e3]);
}

// https://esm.sh/v132/@radix-ui/react-dismissable-layer@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dismissable-layer.mjs
var h2 = "dismissableLayer.update";
var X4 = "dismissableLayer.pointerDownOutside";
var Y2 = "dismissableLayer.focusOutside";
var g2;
var F4 = ve({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var G3 = ee2((n3, e3) => {
  var o5;
  let { disableOutsidePointerEvents: i3 = false, onEscapeKeyDown: t2, onPointerDownOutside: r3, onFocusOutside: f2, onInteractOutside: d7, onDismiss: l4, ...v2 } = n3, a2 = J2(F4), [c2, S6] = I2(null), u4 = (o5 = c2?.ownerDocument) !== null && o5 !== void 0 ? o5 : globalThis?.document, [, W3] = I2({}), A4 = u2(e3, (s2) => S6(s2)), y6 = Array.from(a2.layers), [N2] = [...a2.layersWithOutsidePointerEventsDisabled].slice(-1), _3 = y6.indexOf(N2), D4 = c2 ? y6.indexOf(c2) : -1, U5 = a2.layersWithOutsidePointerEventsDisabled.size > 0, w4 = D4 >= _3, z4 = Q4((s2) => {
    let $3 = s2.target, P4 = [...a2.branches].some((E4) => E4.contains($3));
    !w4 || P4 || (r3?.(s2), d7?.(s2), s2.defaultPrevented || l4?.());
  }, u4), O3 = V3((s2) => {
    let $3 = s2.target;
    [...a2.branches].some((E4) => E4.contains($3)) || (f2?.(s2), d7?.(s2), s2.defaultPrevented || l4?.());
  }, u4);
  return i((s2) => {
    D4 === a2.layers.size - 1 && (t2?.(s2), !s2.defaultPrevented && l4 && (s2.preventDefault(), l4()));
  }, u4), z2(() => {
    if (c2)
      return i3 && (a2.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u4.body.style.pointerEvents, u4.body.style.pointerEvents = "none"), a2.layersWithOutsidePointerEventsDisabled.add(c2)), a2.layers.add(c2), L3(), () => {
        i3 && a2.layersWithOutsidePointerEventsDisabled.size === 1 && (u4.body.style.pointerEvents = g2);
      };
  }, [c2, u4, i3, a2]), z2(() => () => {
    c2 && (a2.layers.delete(c2), a2.layersWithOutsidePointerEventsDisabled.delete(c2), L3());
  }, [c2, a2]), z2(() => {
    let s2 = () => W3({});
    return document.addEventListener(h2, s2), () => document.removeEventListener(h2, s2);
  }, []), re(u3.div, p3({}, v2, { ref: A4, style: { pointerEvents: U5 ? w4 ? "auto" : "none" : void 0, ...n3.style }, onFocusCapture: o3(n3.onFocusCapture, O3.onFocusCapture), onBlurCapture: o3(n3.onBlurCapture, O3.onBlurCapture), onPointerDownCapture: o3(n3.onPointerDownCapture, z4.onPointerDownCapture) }));
});
var J3 = ee2((n3, e3) => {
  let o5 = J2(F4), i3 = L(null), t2 = u2(e3, i3);
  return z2(() => {
    let r3 = i3.current;
    if (r3)
      return o5.branches.add(r3), () => {
        o5.branches.delete(r3);
      };
  }, [o5.branches]), re(u3.div, p3({}, n3, { ref: t2 }));
});
function Q4(n3, e3 = globalThis?.document) {
  let o5 = l2(n3), i3 = L(false), t2 = L(() => {
  });
  return z2(() => {
    let r3 = (d7) => {
      if (d7.target && !i3.current) {
        let v2 = function() {
          I4(X4, o5, l4, { discrete: true });
        }, l4 = { originalEvent: d7 };
        d7.pointerType === "touch" ? (e3.removeEventListener("click", t2.current), t2.current = v2, e3.addEventListener("click", t2.current, { once: true })) : v2();
      } else
        e3.removeEventListener("click", t2.current);
      i3.current = false;
    }, f2 = window.setTimeout(() => {
      e3.addEventListener("pointerdown", r3);
    }, 0);
    return () => {
      window.clearTimeout(f2), e3.removeEventListener("pointerdown", r3), e3.removeEventListener("click", t2.current);
    };
  }, [e3, o5]), { onPointerDownCapture: () => i3.current = true };
}
function V3(n3, e3 = globalThis?.document) {
  let o5 = l2(n3), i3 = L(false);
  return z2(() => {
    let t2 = (r3) => {
      r3.target && !i3.current && I4(Y2, o5, { originalEvent: r3 }, { discrete: false });
    };
    return e3.addEventListener("focusin", t2), () => e3.removeEventListener("focusin", t2);
  }, [e3, o5]), { onFocusCapture: () => i3.current = true, onBlurCapture: () => i3.current = false };
}
function L3() {
  let n3 = new CustomEvent(h2);
  document.dispatchEvent(n3);
}
function I4(n3, e3, o5, { discrete: i3 }) {
  let t2 = o5.originalEvent.target, r3 = new CustomEvent(n3, { bubbles: false, cancelable: true, detail: o5 });
  e3 && t2.addEventListener(n3, e3, { once: true }), i3 ? E3(t2, r3) : t2.dispatchEvent(r3);
}
var re3 = G3;
var ae3 = J3;

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m2 = ee2((r3, a2) => {
  var e3;
  let { container: o5 = globalThis == null || (e3 = globalThis.document) === null || e3 === void 0 ? void 0 : e3.body, ...t2 } = r3;
  return o5 ? Te.createPortal(re(u3.div, p3({}, t2, { ref: a2 })), o5) : null;
});

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S4(n3, t2) {
  return R2((o5, r3) => {
    let i3 = t2[o5][r3];
    return i3 ?? o5;
  }, n3);
}
var U3 = (n3) => {
  let { present: t2, children: o5 } = n3, r3 = y4(t2), i3 = typeof o5 == "function" ? o5({ present: r3.isPresent }) : te2.only(o5), a2 = u2(r3.ref, i3.ref);
  return typeof o5 == "function" || r3.isPresent ? Ee(i3, { ref: a2 }) : null;
};
U3.displayName = "Presence";
function y4(n3) {
  let [t2, o5] = I2(), r3 = L({}), i3 = L(n3), a2 = L("none"), N2 = n3 ? "mounted" : "unmounted", [f2, s2] = S4(N2, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e3 = d4(r3.current);
    a2.current = f2 === "mounted" ? e3 : "none";
  }, [f2]), e(() => {
    let e3 = r3.current, u4 = i3.current;
    if (u4 !== n3) {
      let $3 = a2.current, m4 = d4(e3);
      n3 ? s2("MOUNT") : m4 === "none" || e3?.display === "none" ? s2("UNMOUNT") : s2(u4 && $3 !== m4 ? "ANIMATION_OUT" : "UNMOUNT"), i3.current = n3;
    }
  }, [n3, s2]), e(() => {
    if (t2) {
      let e3 = (c2) => {
        let m4 = d4(r3.current).includes(c2.animationName);
        c2.target === t2 && m4 && Re(() => s2("ANIMATION_END"));
      }, u4 = (c2) => {
        c2.target === t2 && (a2.current = d4(r3.current));
      };
      return t2.addEventListener("animationstart", u4), t2.addEventListener("animationcancel", e3), t2.addEventListener("animationend", e3), () => {
        t2.removeEventListener("animationstart", u4), t2.removeEventListener("animationcancel", e3), t2.removeEventListener("animationend", e3);
      };
    } else
      s2("ANIMATION_END");
  }, [t2, s2]), { isPresent: ["mounted", "unmountSuspended"].includes(f2), ref: G2((e3) => {
    e3 && (r3.current = getComputedStyle(e3)), o5(e3);
  }, []) };
}
function d4(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w3({ prop: e3, defaultProp: a2, onChange: s2 = () => {
} }) {
  let [t2, n3] = P2({ defaultProp: a2, onChange: s2 }), o5 = e3 !== void 0, f2 = o5 ? e3 : t2, l4 = l2(s2), $3 = G2((c2) => {
    if (o5) {
      let u4 = typeof c2 == "function" ? c2(e3) : c2;
      u4 !== e3 && l4(u4);
    } else
      n3(c2);
  }, [o5, e3, n3, l4]);
  return [f2, $3];
}
function P2({ defaultProp: e3, onChange: a2 }) {
  let s2 = I2(e3), [t2] = s2, n3 = L(t2), o5 = l2(a2);
  return z2(() => {
    n3.current !== t2 && (o5(t2), n3.current = t2);
  }, [t2, n3, o5]), s2;
}

// https://esm.sh/v132/@radix-ui/react-visually-hidden@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-visually-hidden.mjs
var n2 = ee2((e3, r3) => re(u3.span, p3({}, e3, { ref: r3, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e3.style } })));

// https://esm.sh/v135/@radix-ui/react-toast@1.1.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-toast.mjs
var ie3 = "ToastProvider";
var [ee3, _e3, Se2] = _2("Toast");
var [ce3, ut] = _("Toast", [Se2]);
var [Re2, B2] = ce3(ie3);
var de3 = (e3) => {
  let { __scopeToast: o5, label: n3 = "Notification", duration: t2 = 5e3, swipeDirection: i3 = "right", swipeThreshold: u4 = 50, children: p4 } = e3, [$3, b6] = I2(null), [s2, E4] = I2(0), w4 = L(false), L5 = L(false);
  return re(ee3.Provider, { scope: o5 }, re(Re2, { scope: o5, label: n3, duration: t2, swipeDirection: i3, swipeThreshold: u4, toastCount: s2, viewport: $3, onViewportChange: b6, onToastAdd: G2(() => E4((S6) => S6 + 1), []), onToastRemove: G2(() => E4((S6) => S6 - 1), []), isFocusedToastEscapeKeyDownRef: w4, isClosePausedRef: L5 }, p4));
};
de3.propTypes = { label(e3) {
  if (e3.label && typeof e3.label == "string" && !e3.label.trim()) {
    let o5 = `Invalid prop \`label\` supplied to \`${ie3}\`. Expected non-empty \`string\`.`;
    return new Error(o5);
  }
  return null;
} };
var De = "ToastViewport";
var Ae = ["F8"];
var Q5 = "toast.viewportPause";
var Z2 = "toast.viewportResume";
var Fe = ee2((e3, o5) => {
  let { __scopeToast: n3, hotkey: t2 = Ae, label: i3 = "Notifications ({hotkey})", ...u4 } = e3, p4 = B2(De, n3), $3 = _e3(n3), b6 = L(null), s2 = L(null), E4 = L(null), w4 = L(null), L5 = u2(o5, w4, p4.onViewportChange), S6 = t2.join("+").replace(/Key/g, "").replace(/Digit/g, ""), R4 = p4.toastCount > 0;
  z2(() => {
    let a2 = (y6) => {
      var l4;
      t2.every((m4) => y6[m4] || y6.code === m4) && ((l4 = w4.current) === null || l4 === void 0 || l4.focus());
    };
    return document.addEventListener("keydown", a2), () => document.removeEventListener("keydown", a2);
  }, [t2]), z2(() => {
    let a2 = b6.current, y6 = w4.current;
    if (R4 && a2 && y6) {
      let l4 = () => {
        if (!p4.isClosePausedRef.current) {
          let v2 = new CustomEvent(Q5);
          y6.dispatchEvent(v2), p4.isClosePausedRef.current = true;
        }
      }, f2 = () => {
        if (p4.isClosePausedRef.current) {
          let v2 = new CustomEvent(Z2);
          y6.dispatchEvent(v2), p4.isClosePausedRef.current = false;
        }
      }, m4 = (v2) => {
        !a2.contains(v2.relatedTarget) && f2();
      }, T4 = () => {
        a2.contains(document.activeElement) || f2();
      };
      return a2.addEventListener("focusin", l4), a2.addEventListener("focusout", m4), a2.addEventListener("pointermove", l4), a2.addEventListener("pointerleave", T4), window.addEventListener("blur", l4), window.addEventListener("focus", f2), () => {
        a2.removeEventListener("focusin", l4), a2.removeEventListener("focusout", m4), a2.removeEventListener("pointermove", l4), a2.removeEventListener("pointerleave", T4), window.removeEventListener("blur", l4), window.removeEventListener("focus", f2);
      };
    }
  }, [R4, p4.isClosePausedRef]);
  let d7 = G2(({ tabbingDirection: a2 }) => {
    let l4 = $3().map((f2) => {
      let m4 = f2.ref.current, T4 = [m4, ...ze(m4)];
      return a2 === "forwards" ? T4 : T4.reverse();
    });
    return (a2 === "forwards" ? l4.reverse() : l4).flat();
  }, [$3]);
  return z2(() => {
    let a2 = w4.current;
    if (a2) {
      let y6 = (l4) => {
        let f2 = l4.altKey || l4.ctrlKey || l4.metaKey;
        if (l4.key === "Tab" && !f2) {
          let M5 = document.activeElement, F5 = l4.shiftKey;
          if (l4.target === a2 && F5) {
            var T4;
            (T4 = s2.current) === null || T4 === void 0 || T4.focus();
            return;
          }
          let D4 = d7({ tabbingDirection: F5 ? "backwards" : "forwards" }), V5 = D4.findIndex((r3) => r3 === M5);
          if (J4(D4.slice(V5 + 1)))
            l4.preventDefault();
          else {
            var v2, h4;
            F5 ? (v2 = s2.current) === null || v2 === void 0 || v2.focus() : (h4 = E4.current) === null || h4 === void 0 || h4.focus();
          }
        }
      };
      return a2.addEventListener("keydown", y6), () => a2.removeEventListener("keydown", y6);
    }
  }, [$3, d7]), re(ae3, { ref: b6, role: "region", "aria-label": i3.replace("{hotkey}", S6), tabIndex: -1, style: { pointerEvents: R4 ? void 0 : "none" } }, R4 && re(oe3, { ref: s2, onFocusFromOutsideViewport: () => {
    let a2 = d7({ tabbingDirection: "forwards" });
    J4(a2);
  } }), re(ee3.Slot, { scope: n3 }, re(u3.ol, p3({ tabIndex: -1 }, u4, { ref: L5 }))), R4 && re(oe3, { ref: E4, onFocusFromOutsideViewport: () => {
    let a2 = d7({ tabbingDirection: "backwards" });
    J4(a2);
  } }));
});
var Oe2 = "ToastFocusProxy";
var oe3 = ee2((e3, o5) => {
  let { __scopeToast: n3, onFocusFromOutsideViewport: t2, ...i3 } = e3, u4 = B2(Oe2, n3);
  return re(n2, p3({ "aria-hidden": true, tabIndex: 0 }, i3, { ref: o5, style: { position: "fixed" }, onFocus: (p4) => {
    var $3;
    let b6 = p4.relatedTarget;
    !(($3 = u4.viewport) !== null && $3 !== void 0 && $3.contains(b6)) && t2();
  } }));
});
var q3 = "Toast";
var Ne2 = "toast.swipeStart";
var Le = "toast.swipeMove";
var Me = "toast.swipeCancel";
var Ye = "toast.swipeEnd";
var ke2 = ee2((e3, o5) => {
  let { forceMount: n3, open: t2, defaultOpen: i3, onOpenChange: u4, ...p4 } = e3, [$3 = true, b6] = w3({ prop: t2, defaultProp: i3, onChange: u4 });
  return re(U3, { present: n3 || $3 }, re(le3, p3({ open: $3 }, p4, { ref: o5, onClose: () => b6(false), onPause: l2(e3.onPause), onResume: l2(e3.onResume), onSwipeStart: o3(e3.onSwipeStart, (s2) => {
    s2.currentTarget.setAttribute("data-swipe", "start");
  }), onSwipeMove: o3(e3.onSwipeMove, (s2) => {
    let { x: E4, y: w4 } = s2.detail.delta;
    s2.currentTarget.setAttribute("data-swipe", "move"), s2.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${E4}px`), s2.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${w4}px`);
  }), onSwipeCancel: o3(e3.onSwipeCancel, (s2) => {
    s2.currentTarget.setAttribute("data-swipe", "cancel"), s2.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), s2.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), s2.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), s2.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
  }), onSwipeEnd: o3(e3.onSwipeEnd, (s2) => {
    let { x: E4, y: w4 } = s2.detail.delta;
    s2.currentTarget.setAttribute("data-swipe", "end"), s2.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), s2.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), s2.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${E4}px`), s2.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${w4}px`), b6(false);
  }) })));
});
var [Ke, Ve] = ce3(q3, { onClose() {
} });
var le3 = ee2((e3, o5) => {
  let { __scopeToast: n3, type: t2 = "foreground", duration: i3, open: u4, onClose: p4, onEscapeKeyDown: $3, onPause: b6, onResume: s2, onSwipeStart: E4, onSwipeMove: w4, onSwipeCancel: L5, onSwipeEnd: S6, ...R4 } = e3, d7 = B2(q3, n3), [a2, y6] = I2(null), l4 = u2(o5, (r3) => y6(r3)), f2 = L(null), m4 = L(null), T4 = i3 || d7.duration, v2 = L(0), h4 = L(T4), M5 = L(0), { onToastAdd: F5, onToastRemove: z4 } = d7, O3 = l2(() => {
    var r3;
    a2?.contains(document.activeElement) && ((r3 = d7.viewport) === null || r3 === void 0 || r3.focus()), p4();
  }), D4 = G2((r3) => {
    !r3 || r3 === 1 / 0 || (window.clearTimeout(M5.current), v2.current = (/* @__PURE__ */ new Date()).getTime(), M5.current = window.setTimeout(O3, r3));
  }, [O3]);
  z2(() => {
    let r3 = d7.viewport;
    if (r3) {
      let C5 = () => {
        D4(h4.current), s2?.();
      }, _3 = () => {
        let Y4 = (/* @__PURE__ */ new Date()).getTime() - v2.current;
        h4.current = h4.current - Y4, window.clearTimeout(M5.current), b6?.();
      };
      return r3.addEventListener(Q5, _3), r3.addEventListener(Z2, C5), () => {
        r3.removeEventListener(Q5, _3), r3.removeEventListener(Z2, C5);
      };
    }
  }, [d7.viewport, T4, b6, s2, D4]), z2(() => {
    u4 && !d7.isClosePausedRef.current && D4(T4);
  }, [u4, T4, d7.isClosePausedRef, D4]), z2(() => (F5(), () => z4()), [F5, z4]);
  let V5 = T(() => a2 ? be2(a2) : null, [a2]);
  return d7.viewport ? re(H, null, V5 && re(He, { __scopeToast: n3, role: "status", "aria-live": t2 === "foreground" ? "assertive" : "polite", "aria-atomic": true }, V5), re(Ke, { scope: n3, onClose: O3 }, ae2(re(ee3.ItemSlot, { scope: n3 }, re(re3, { asChild: true, onEscapeKeyDown: o3($3, () => {
    d7.isFocusedToastEscapeKeyDownRef.current || O3(), d7.isFocusedToastEscapeKeyDownRef.current = false;
  }) }, re(u3.li, p3({ role: "status", "aria-live": "off", "aria-atomic": true, tabIndex: 0, "data-state": u4 ? "open" : "closed", "data-swipe-direction": d7.swipeDirection }, R4, { ref: l4, style: { userSelect: "none", touchAction: "none", ...e3.style }, onKeyDown: o3(e3.onKeyDown, (r3) => {
    r3.key === "Escape" && ($3?.(r3.nativeEvent), r3.nativeEvent.defaultPrevented || (d7.isFocusedToastEscapeKeyDownRef.current = true, O3()));
  }), onPointerDown: o3(e3.onPointerDown, (r3) => {
    r3.button === 0 && (f2.current = { x: r3.clientX, y: r3.clientY });
  }), onPointerMove: o3(e3.onPointerMove, (r3) => {
    if (!f2.current)
      return;
    let C5 = r3.clientX - f2.current.x, _3 = r3.clientY - f2.current.y, Y4 = !!m4.current, k3 = ["left", "right"].includes(d7.swipeDirection), H4 = ["left", "up"].includes(d7.swipeDirection) ? Math.min : Math.max, fe3 = k3 ? H4(0, C5) : 0, me2 = k3 ? 0 : H4(0, _3), G5 = r3.pointerType === "touch" ? 10 : 2, W3 = { x: fe3, y: me2 }, te3 = { originalEvent: r3, delta: W3 };
    Y4 ? (m4.current = W3, j2(Le, w4, te3, { discrete: false })) : ne3(W3, d7.swipeDirection, G5) ? (m4.current = W3, j2(Ne2, E4, te3, { discrete: false }), r3.target.setPointerCapture(r3.pointerId)) : (Math.abs(C5) > G5 || Math.abs(_3) > G5) && (f2.current = null);
  }), onPointerUp: o3(e3.onPointerUp, (r3) => {
    let C5 = m4.current, _3 = r3.target;
    if (_3.hasPointerCapture(r3.pointerId) && _3.releasePointerCapture(r3.pointerId), m4.current = null, f2.current = null, C5) {
      let Y4 = r3.currentTarget, k3 = { originalEvent: r3, delta: C5 };
      ne3(C5, d7.swipeDirection, d7.swipeThreshold) ? j2(Ye, S6, k3, { discrete: true }) : j2(Me, L5, k3, { discrete: true }), Y4.addEventListener("click", (H4) => H4.preventDefault(), { once: true });
    }
  }) })))), d7.viewport))) : null;
});
le3.propTypes = { type(e3) {
  if (e3.type && !["foreground", "background"].includes(e3.type)) {
    let o5 = `Invalid prop \`type\` supplied to \`${q3}\`. Expected \`foreground | background\`.`;
    return new Error(o5);
  }
  return null;
} };
var He = (e3) => {
  let { __scopeToast: o5, children: n3, ...t2 } = e3, i3 = B2(q3, o5), [u4, p4] = I2(false), [$3, b6] = I2(false);
  return Be(() => p4(true)), z2(() => {
    let s2 = window.setTimeout(() => b6(true), 1e3);
    return () => window.clearTimeout(s2);
  }, []), $3 ? null : re(m2, { asChild: true }, re(n2, t2, u4 && re(H, null, i3.label, " ", n3)));
};
var We = ee2((e3, o5) => {
  let { __scopeToast: n3, ...t2 } = e3;
  return re(u3.div, p3({}, t2, { ref: o5 }));
});
var je = ee2((e3, o5) => {
  let { __scopeToast: n3, ...t2 } = e3;
  return re(u3.div, p3({}, t2, { ref: o5 }));
});
var Ue2 = "ToastAction";
var ue3 = ee2((e3, o5) => {
  let { altText: n3, ...t2 } = e3;
  return n3 ? re($e, { altText: n3, asChild: true }, re(pe3, p3({}, t2, { ref: o5 }))) : null;
});
ue3.propTypes = { altText(e3) {
  return e3.altText ? null : new Error(`Missing prop \`altText\` expected on \`${Ue2}\``);
} };
var Xe = "ToastClose";
var pe3 = ee2((e3, o5) => {
  let { __scopeToast: n3, ...t2 } = e3, i3 = Ve(Xe, n3);
  return re($e, { asChild: true }, re(u3.button, p3({ type: "button" }, t2, { ref: o5, onClick: o3(e3.onClick, i3.onClose) })));
});
var $e = ee2((e3, o5) => {
  let { __scopeToast: n3, altText: t2, ...i3 } = e3;
  return re(u3.div, p3({ "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": t2 || void 0 }, i3, { ref: o5 }));
});
function be2(e3) {
  let o5 = [];
  return Array.from(e3.childNodes).forEach((t2) => {
    if (t2.nodeType === t2.TEXT_NODE && t2.textContent && o5.push(t2.textContent), qe(t2)) {
      let i3 = t2.ariaHidden || t2.hidden || t2.style.display === "none", u4 = t2.dataset.radixToastAnnounceExclude === "";
      if (!i3)
        if (u4) {
          let p4 = t2.dataset.radixToastAnnounceAlt;
          p4 && o5.push(p4);
        } else
          o5.push(...be2(t2));
    }
  }), o5;
}
function j2(e3, o5, n3, { discrete: t2 }) {
  let i3 = n3.originalEvent.currentTarget, u4 = new CustomEvent(e3, { bubbles: true, cancelable: true, detail: n3 });
  o5 && i3.addEventListener(e3, o5, { once: true }), t2 ? E3(i3, u4) : i3.dispatchEvent(u4);
}
var ne3 = (e3, o5, n3 = 0) => {
  let t2 = Math.abs(e3.x), i3 = Math.abs(e3.y), u4 = t2 > i3;
  return o5 === "left" || o5 === "right" ? u4 && t2 > n3 : !u4 && i3 > n3;
};
function Be(e3 = () => {
}) {
  let o5 = l2(e3);
  e(() => {
    let n3 = 0, t2 = 0;
    return n3 = window.requestAnimationFrame(() => t2 = window.requestAnimationFrame(o5)), () => {
      window.cancelAnimationFrame(n3), window.cancelAnimationFrame(t2);
    };
  }, [o5]);
}
function qe(e3) {
  return e3.nodeType === e3.ELEMENT_NODE;
}
function ze(e3) {
  let o5 = [], n3 = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode: (t2) => {
    let i3 = t2.tagName === "INPUT" && t2.type === "hidden";
    return t2.disabled || t2.hidden || i3 ? NodeFilter.FILTER_SKIP : t2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n3.nextNode(); )
    o5.push(n3.currentNode);
  return o5;
}
function J4(e3) {
  let o5 = document.activeElement;
  return e3.some((n3) => n3 === o5 ? true : (n3.focus(), document.activeElement !== o5));
}
var pt = de3;
var $t = Fe;
var bt = ke2;
var ft = We;
var mt = je;
var Tt = ue3;
var vt = pe3;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o4(r3) {
  var f2, n3, t2 = "";
  if (typeof r3 == "string" || typeof r3 == "number")
    t2 += r3;
  else if (typeof r3 == "object")
    if (Array.isArray(r3))
      for (f2 = 0; f2 < r3.length; f2++)
        r3[f2] && (n3 = o4(r3[f2])) && (t2 && (t2 += " "), t2 += n3);
    else
      for (f2 in r3)
        r3[f2] && (t2 && (t2 += " "), t2 += f2);
  return t2;
}
function e2() {
  for (var r3, f2, n3 = 0, t2 = ""; n3 < arguments.length; )
    (r3 = arguments[n3++]) && (f2 = o4(r3)) && (t2 && (t2 += " "), t2 += f2);
  return t2;
}

// https://esm.sh/v132/class-variance-authority@0.7.0/denonext/class-variance-authority.mjs
var m3 = (n3) => typeof n3 == "boolean" ? "".concat(n3) : n3 === 0 ? "0" : n3;
var y5 = e2;
var b5 = (n3, l4) => (t2) => {
  var r3;
  if (l4?.variants == null)
    return y5(n3, t2?.class, t2?.className);
  let { variants: o5, defaultVariants: d7 } = l4, N2 = Object.keys(o5).map((e3) => {
    let a2 = t2?.[e3], u4 = d7?.[e3];
    if (a2 === null)
      return null;
    let i3 = m3(a2) || m3(u4);
    return o5[e3][i3];
  }), v2 = t2 && Object.entries(t2).reduce((e3, a2) => {
    let [u4, i3] = a2;
    return i3 === void 0 || (e3[u4] = i3), e3;
  }, {}), V5 = l4 == null || (r3 = l4.compoundVariants) === null || r3 === void 0 ? void 0 : r3.reduce((e3, a2) => {
    let { class: u4, className: i3, ...f2 } = a2;
    return Object.entries(f2).every((C5) => {
      let [c2, s2] = C5;
      return Array.isArray(s2) ? s2.includes({ ...d7, ...v2 }[c2]) : { ...d7, ...v2 }[c2] === s2;
    }) ? [...e3, u4, i3] : e3;
  }, []);
  return y5(n3, N2, V5, t2?.class, t2?.className);
};

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r3, e3) => {
  for (var t2 in e3)
    Ar(r3, t2, { get: e3[t2], enumerable: true });
};
function U4() {
  for (var r3 = 0, e3, t2, o5 = ""; r3 < arguments.length; )
    (e3 = arguments[r3++]) && (t2 = lr(e3)) && (o5 && (o5 += " "), o5 += t2);
  return o5;
}
function lr(r3) {
  if (typeof r3 == "string")
    return r3;
  for (var e3, t2 = "", o5 = 0; o5 < r3.length; o5++)
    r3[o5] && (e3 = lr(r3[o5])) && (t2 && (t2 += " "), t2 += e3);
  return t2;
}
var Z3 = "-";
function ur(r3) {
  var e3 = Sr(r3), t2 = r3.conflictingClassGroups, o5 = r3.conflictingClassGroupModifiers, a2 = o5 === void 0 ? {} : o5;
  function s2(i3) {
    var c2 = i3.split(Z3);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e3) || kr(i3);
  }
  function n3(i3, c2) {
    var u4 = t2[i3] || [];
    return c2 && a2[i3] ? [].concat(u4, a2[i3]) : u4;
  }
  return { getClassGroupId: s2, getConflictingClassGroupIds: n3 };
}
function pr(r3, e3) {
  if (r3.length === 0)
    return e3.classGroupId;
  var t2 = r3[0], o5 = e3.nextPart.get(t2), a2 = o5 ? pr(r3.slice(1), o5) : void 0;
  if (a2)
    return a2;
  if (e3.validators.length !== 0) {
    var s2 = r3.join(Z3);
    return e3.validators.find(function(n3) {
      var i3 = n3.validator;
      return i3(s2);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r3) {
  if (dr.test(r3)) {
    var e3 = dr.exec(r3)[1], t2 = e3?.substring(0, e3.indexOf(":"));
    if (t2)
      return "arbitrary.." + t2;
  }
}
function Sr(r3) {
  var e3 = r3.theme, t2 = r3.prefix, o5 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r3.classGroups), t2);
  return a2.forEach(function(s2) {
    var n3 = s2[0], i3 = s2[1];
    q4(i3, o5, n3, e3);
  }), o5;
}
function q4(r3, e3, t2, o5) {
  r3.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s2 = a2 === "" ? e3 : cr(e3, a2);
      s2.classGroupId = t2;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q4(a2(o5), e3, t2, o5);
        return;
      }
      e3.validators.push({ validator: a2, classGroupId: t2 });
      return;
    }
    Object.entries(a2).forEach(function(n3) {
      var i3 = n3[0], c2 = n3[1];
      q4(c2, cr(e3, i3), t2, o5);
    });
  });
}
function cr(r3, e3) {
  var t2 = r3;
  return e3.split(Z3).forEach(function(o5) {
    t2.nextPart.has(o5) || t2.nextPart.set(o5, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t2 = t2.nextPart.get(o5);
  }), t2;
}
function zr(r3) {
  return r3.isThemeGetter;
}
function Gr(r3, e3) {
  return e3 ? r3.map(function(t2) {
    var o5 = t2[0], a2 = t2[1], s2 = a2.map(function(n3) {
      return typeof n3 == "string" ? e3 + n3 : typeof n3 == "object" ? Object.fromEntries(Object.entries(n3).map(function(i3) {
        var c2 = i3[0], u4 = i3[1];
        return [e3 + c2, u4];
      })) : n3;
    });
    return [o5, s2];
  }) : r3;
}
function fr(r3) {
  if (r3 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e3 = 0, t2 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map();
  function a2(s2, n3) {
    t2.set(s2, n3), e3++, e3 > r3 && (e3 = 0, o5 = t2, t2 = /* @__PURE__ */ new Map());
  }
  return { get: function(n3) {
    var i3 = t2.get(n3);
    if (i3 !== void 0)
      return i3;
    if ((i3 = o5.get(n3)) !== void 0)
      return a2(n3, i3), i3;
  }, set: function(n3, i3) {
    t2.has(n3) ? t2.set(n3, i3) : a2(n3, i3);
  } };
}
var X5 = "!";
function br(r3) {
  var e3 = r3.separator || ":", t2 = e3.length === 1, o5 = e3[0], a2 = e3.length;
  return function(n3) {
    for (var i3 = [], c2 = 0, u4 = 0, b6, f2 = 0; f2 < n3.length; f2++) {
      var g4 = n3[f2];
      if (c2 === 0) {
        if (g4 === o5 && (t2 || n3.slice(f2, f2 + a2) === e3)) {
          i3.push(n3.slice(u4, f2)), u4 = f2 + a2;
          continue;
        }
        if (g4 === "/") {
          b6 = f2;
          continue;
        }
      }
      g4 === "[" ? c2++ : g4 === "]" && c2--;
    }
    var y6 = i3.length === 0 ? n3 : n3.substring(u4), x5 = y6.startsWith(X5), m4 = x5 ? y6.substring(1) : y6, w4 = b6 && b6 > u4 ? b6 - u4 : void 0;
    return { modifiers: i3, hasImportantModifier: x5, baseClassName: m4, maybePostfixModifierPosition: w4 };
  };
}
function gr(r3) {
  if (r3.length <= 1)
    return r3;
  var e3 = [], t2 = [];
  return r3.forEach(function(o5) {
    var a2 = o5[0] === "[";
    a2 ? (e3.push.apply(e3, t2.sort().concat([o5])), t2 = []) : t2.push(o5);
  }), e3.push.apply(e3, t2.sort()), e3;
}
function mr(r3) {
  return { cache: fr(r3.cacheSize), splitModifiers: br(r3), ...ur(r3) };
}
var Ir = /\s+/;
function vr(r3, e3) {
  var t2 = e3.splitModifiers, o5 = e3.getClassGroupId, a2 = e3.getConflictingClassGroupIds, s2 = /* @__PURE__ */ new Set();
  return r3.trim().split(Ir).map(function(n3) {
    var i3 = t2(n3), c2 = i3.modifiers, u4 = i3.hasImportantModifier, b6 = i3.baseClassName, f2 = i3.maybePostfixModifierPosition, g4 = o5(f2 ? b6.substring(0, f2) : b6), y6 = !!f2;
    if (!g4) {
      if (!f2)
        return { isTailwindClass: false, originalClassName: n3 };
      if (g4 = o5(b6), !g4)
        return { isTailwindClass: false, originalClassName: n3 };
      y6 = false;
    }
    var x5 = gr(c2).join(":"), m4 = u4 ? x5 + X5 : x5;
    return { isTailwindClass: true, modifierId: m4, classGroupId: g4, originalClassName: n3, hasPostfixModifier: y6 };
  }).reverse().filter(function(n3) {
    if (!n3.isTailwindClass)
      return true;
    var i3 = n3.modifierId, c2 = n3.classGroupId, u4 = n3.hasPostfixModifier, b6 = i3 + c2;
    return s2.has(b6) ? false : (s2.add(b6), a2(c2, u4).forEach(function(f2) {
      return s2.add(i3 + f2);
    }), true);
  }).reverse().map(function(n3) {
    return n3.originalClassName;
  }).join(" ");
}
function P3() {
  for (var r3 = arguments.length, e3 = new Array(r3), t2 = 0; t2 < r3; t2++)
    e3[t2] = arguments[t2];
  var o5, a2, s2, n3 = i3;
  function i3(u4) {
    var b6 = e3[0], f2 = e3.slice(1), g4 = f2.reduce(function(y6, x5) {
      return x5(y6);
    }, b6());
    return o5 = mr(g4), a2 = o5.cache.get, s2 = o5.cache.set, n3 = c2, c2(u4);
  }
  function c2(u4) {
    var b6 = a2(u4);
    if (b6)
      return b6;
    var f2 = vr(u4, o5);
    return s2(u4, f2), f2;
  }
  return function() {
    return n3(U4.apply(null, arguments));
  };
}
function d5(r3) {
  var e3 = function(o5) {
    return o5[r3] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G4, isArbitraryLength: () => L4, isArbitraryNumber: () => S5, isArbitraryPosition: () => Q6, isArbitraryShadow: () => D3, isArbitrarySize: () => H3, isArbitraryUrl: () => V4, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z3, isLength: () => h3, isNumber: () => M4, isPercent: () => Y3, isTshirtSize: () => C4 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h3(r3) {
  return M4(r3) || Tr.has(r3) || Pr.test(r3) || L4(r3);
}
function L4(r3) {
  return I5(r3, "length", Er);
}
function H3(r3) {
  return I5(r3, "size", xr);
}
function Q6(r3) {
  return I5(r3, "position", xr);
}
function V4(r3) {
  return I5(r3, "url", jr);
}
function S5(r3) {
  return I5(r3, "number", M4);
}
var Wr = S5;
function M4(r3) {
  return !Number.isNaN(Number(r3));
}
function Y3(r3) {
  return r3.endsWith("%") && M4(r3.slice(0, -1));
}
function z3(r3) {
  return hr(r3) || I5(r3, "number", hr);
}
function l3(r3) {
  return yr.test(r3);
}
function G4() {
  return true;
}
function C4(r3) {
  return Rr.test(r3);
}
function D3(r3) {
  return I5(r3, "", Ur);
}
function I5(r3, e3, t2) {
  var o5 = yr.exec(r3);
  return o5 ? o5[1] ? o5[1] === e3 : t2(o5[2]) : false;
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
  var r3 = d5("colors"), e3 = d5("spacing"), t2 = d5("blur"), o5 = d5("brightness"), a2 = d5("borderColor"), s2 = d5("borderRadius"), n3 = d5("borderSpacing"), i3 = d5("borderWidth"), c2 = d5("contrast"), u4 = d5("grayscale"), b6 = d5("hueRotate"), f2 = d5("invert"), g4 = d5("gap"), y6 = d5("gradientColorStops"), x5 = d5("gradientColorStopPositions"), m4 = d5("inset"), w4 = d5("margin"), k3 = d5("opacity"), A4 = d5("padding"), K3 = d5("saturate"), O3 = d5("scale"), rr = d5("sepia"), er = d5("skew"), tr = d5("space"), or = d5("translate"), $3 = function() {
    return ["auto", "contain", "none"];
  }, B3 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F5 = function() {
    return ["auto", l3, e3];
  }, p4 = function() {
    return [l3, e3];
  }, nr = function() {
    return ["", h3];
  }, W3 = function() {
    return ["auto", M4, l3];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E4 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J5 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R4 = function() {
    return ["", "0", l3];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N2 = function() {
    return [M4, S5];
  }, j3 = function() {
    return [M4, l3];
  };
  return { cacheSize: 500, theme: { colors: [G4], spacing: [h3], blur: ["none", "", C4, l3], brightness: N2(), borderColor: [r3], borderRadius: ["none", "", "full", C4, l3], borderSpacing: p4(), borderWidth: nr(), contrast: N2(), grayscale: R4(), hueRotate: j3(), invert: R4(), gap: p4(), gradientColorStops: [r3], gradientColorStopPositions: [Y3, L4], inset: F5(), margin: F5(), opacity: N2(), padding: p4(), saturate: N2(), scale: N2(), sepia: R4(), skew: j3(), space: p4(), translate: p4() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C4] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B3() }], "overflow-x": [{ "overflow-x": B3() }], "overflow-y": [{ "overflow-y": B3() }], overscroll: [{ overscroll: $3() }], "overscroll-x": [{ "overscroll-x": $3() }], "overscroll-y": [{ "overscroll-y": $3() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m4] }], "inset-x": [{ "inset-x": [m4] }], "inset-y": [{ "inset-y": [m4] }], start: [{ start: [m4] }], end: [{ end: [m4] }], top: [{ top: [m4] }], right: [{ right: [m4] }], bottom: [{ bottom: [m4] }], left: [{ left: [m4] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z3] }], basis: [{ basis: F5() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R4() }], shrink: [{ shrink: R4() }], order: [{ order: ["first", "last", "none", z3] }], "grid-cols": [{ "grid-cols": [G4] }], "col-start-end": [{ col: ["auto", { span: ["full", z3] }, l3] }], "col-start": [{ "col-start": W3() }], "col-end": [{ "col-end": W3() }], "grid-rows": [{ "grid-rows": [G4] }], "row-start-end": [{ row: ["auto", { span: [z3] }, l3] }], "row-start": [{ "row-start": W3() }], "row-end": [{ "row-end": W3() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g4] }], "gap-x": [{ "gap-x": [g4] }], "gap-y": [{ "gap-y": [g4] }], "justify-content": [{ justify: ["normal"].concat(J5()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J5(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J5(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A4] }], px: [{ px: [A4] }], py: [{ py: [A4] }], ps: [{ ps: [A4] }], pe: [{ pe: [A4] }], pt: [{ pt: [A4] }], pr: [{ pr: [A4] }], pb: [{ pb: [A4] }], pl: [{ pl: [A4] }], m: [{ m: [w4] }], mx: [{ mx: [w4] }], my: [{ my: [w4] }], ms: [{ ms: [w4] }], me: [{ me: [w4] }], mt: [{ mt: [w4] }], mr: [{ mr: [w4] }], mb: [{ mb: [w4] }], ml: [{ ml: [w4] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h3] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C4] }, C4, l3] }], h: [{ h: [l3, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h3] }], "max-h": [{ "max-h": [l3, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C4, L4] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S5] }], "font-family": [{ font: [G4] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M4, S5] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h3] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r3] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r3] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E4(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h3] }], "underline-offset": [{ "underline-offset": ["auto", l3, h3] }], "text-decoration-color": [{ decoration: [r3] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p4() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q6]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V4] }], "bg-color": [{ bg: [r3] }], "gradient-from-pos": [{ from: [x5] }], "gradient-via-pos": [{ via: [x5] }], "gradient-to-pos": [{ to: [x5] }], "gradient-from": [{ from: [y6] }], "gradient-via": [{ via: [y6] }], "gradient-to": [{ to: [y6] }], rounded: [{ rounded: [s2] }], "rounded-s": [{ "rounded-s": [s2] }], "rounded-e": [{ "rounded-e": [s2] }], "rounded-t": [{ "rounded-t": [s2] }], "rounded-r": [{ "rounded-r": [s2] }], "rounded-b": [{ "rounded-b": [s2] }], "rounded-l": [{ "rounded-l": [s2] }], "rounded-ss": [{ "rounded-ss": [s2] }], "rounded-se": [{ "rounded-se": [s2] }], "rounded-ee": [{ "rounded-ee": [s2] }], "rounded-es": [{ "rounded-es": [s2] }], "rounded-tl": [{ "rounded-tl": [s2] }], "rounded-tr": [{ "rounded-tr": [s2] }], "rounded-br": [{ "rounded-br": [s2] }], "rounded-bl": [{ "rounded-bl": [s2] }], "border-w": [{ border: [i3] }], "border-w-x": [{ "border-x": [i3] }], "border-w-y": [{ "border-y": [i3] }], "border-w-s": [{ "border-s": [i3] }], "border-w-e": [{ "border-e": [i3] }], "border-w-t": [{ "border-t": [i3] }], "border-w-r": [{ "border-r": [i3] }], "border-w-b": [{ "border-b": [i3] }], "border-w-l": [{ "border-l": [i3] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E4(), ["hidden"]) }], "divide-x": [{ "divide-x": [i3] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i3] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E4() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E4()) }], "outline-offset": [{ "outline-offset": [l3, h3] }], "outline-w": [{ outline: [h3] }], "outline-color": [{ outline: [r3] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r3] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h3] }], "ring-offset-color": [{ "ring-offset": [r3] }], shadow: [{ shadow: ["", "inner", "none", C4, D3] }], "shadow-color": [{ shadow: [G4] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t2] }], brightness: [{ brightness: [o5] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C4, l3] }], grayscale: [{ grayscale: [u4] }], "hue-rotate": [{ "hue-rotate": [b6] }], invert: [{ invert: [f2] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t2] }], "backdrop-brightness": [{ "backdrop-brightness": [o5] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u4] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b6] }], "backdrop-invert": [{ "backdrop-invert": [f2] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n3] }], "border-spacing-x": [{ "border-spacing-x": [n3] }], "border-spacing-y": [{ "border-spacing-y": [n3] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j3() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j3() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O3] }], "scale-x": [{ "scale-x": [O3] }], "scale-y": [{ "scale-y": [O3] }], rotate: [{ rotate: [z3, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r3] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r3] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p4() }], "scroll-mx": [{ "scroll-mx": p4() }], "scroll-my": [{ "scroll-my": p4() }], "scroll-ms": [{ "scroll-ms": p4() }], "scroll-me": [{ "scroll-me": p4() }], "scroll-mt": [{ "scroll-mt": p4() }], "scroll-mr": [{ "scroll-mr": p4() }], "scroll-mb": [{ "scroll-mb": p4() }], "scroll-ml": [{ "scroll-ml": p4() }], "scroll-p": [{ "scroll-p": p4() }], "scroll-px": [{ "scroll-px": p4() }], "scroll-py": [{ "scroll-py": p4() }], "scroll-ps": [{ "scroll-ps": p4() }], "scroll-pe": [{ "scroll-pe": p4() }], "scroll-pt": [{ "scroll-pt": p4() }], "scroll-pr": [{ "scroll-pr": p4() }], "scroll-pb": [{ "scroll-pb": p4() }], "scroll-pl": [{ "scroll-pl": p4() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r3, "none"] }], "stroke-w": [{ stroke: [h3, S5] }], stroke: [{ stroke: [r3, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P3(T3);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d6 = 0;
var x4 = Array.isArray;
function g3(t2, r3, e3, a2, o5, i3) {
  var s2, n3, f2 = {};
  for (n3 in r3)
    n3 == "ref" ? s2 = r3[n3] : f2[n3] = r3[n3];
  var u4 = { type: t2, props: f2, key: e3, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d6, __i: -1, __u: 0, __source: o5, __self: i3 };
  if (typeof t2 == "function" && (s2 = t2.defaultProps))
    for (n3 in s2)
      f2[n3] === void 0 && (f2[n3] = s2[n3]);
  return a.vnode && a.vnode(u4), u4;
}

// ../components/ui/toast.tsx
var ToastProvider = pt;
var ToastViewport = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  $t,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = $t.displayName;
var toastVariants = b5(
  "data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",
  {
    variants: {
      variant: {
        default: "bg-background border",
        destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = ee2(({ class: className, variant, ...props }, ref) => {
  return /* @__PURE__ */ g3(
    bt,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = bt.displayName;
var ToastAction = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  Tt,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = Tt.displayName;
var ToastClose = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  vt,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ g3("span", { class: "i-lucide:x flex h-4 w-4" })
  }
));
ToastClose.displayName = vt.displayName;
var ToastTitle = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  ft,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ft.displayName;
var ToastDescription = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  mt,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = mt.displayName;
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
};
