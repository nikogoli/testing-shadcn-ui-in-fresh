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
  var i4, n2, r3, l6 = {};
  for (r3 in _3)
    r3 == "key" ? i4 = _3[r3] : r3 == "ref" ? n2 = _3[r3] : l6[r3] = _3[r3];
  if (arguments.length > 2 && (l6.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e3 == "function" && e3.defaultProps != null)
    for (r3 in e3.defaultProps)
      l6[r3] === void 0 && (l6[r3] = e3.defaultProps[r3]);
  return S(e3, l6, i4, n2, null);
}
function S(e3, _3, t2, i4, n2) {
  var r3 = { type: e3, props: _3, key: t2, ref: i4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n2 ?? ++Q, __i: -1, __u: 0 };
  return n2 == null && a.vnode != null && a.vnode(r3), r3;
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
  var i4, n2 = e3.__v, r3 = n2.__e, l6 = e3.__P;
  if (l6)
    return (i4 = b({}, n2)).__v = n2.__v + 1, a.vnode && a.vnode(i4), G(l6, i4, n2, e3.__n, l6.ownerSVGElement !== void 0, 32 & n2.__u ? [r3] : null, _3, r3 ?? w(n2), !!(32 & n2.__u), t2), i4.__v = n2.__v, i4.__.__k[i4.__i] = i4, i4.__d = void 0, i4.__e != r3 && ee(i4), i4;
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
  var e3, _3, t2, i4 = [], n2 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t2 = x.length, _3 = ie(e3, i4, n2) || _3, t2 === 0 || x.length > t2 ? (R(i4, _3, n2), n2.length = i4.length = 0, _3 = void 0, x.sort($)) : _3 && a.__c && a.__c(_3, O));
  _3 && R(i4, _3, n2), A.__r = 0;
}
function _e(e3, _3, t2, i4, n2, r3, l6, u6, c2, s4, p6) {
  var o5, m5, f5, h7, k5, v3 = i4 && i4.__k || O, d9 = _3.length;
  for (t2.__d = c2, le(t2, _3, v3), c2 = t2.__d, o5 = 0; o5 < d9; o5++)
    (f5 = t2.__k[o5]) != null && typeof f5 != "boolean" && typeof f5 != "function" && (m5 = f5.__i === -1 ? E : v3[f5.__i] || E, f5.__i = o5, G(e3, f5, m5, n2, r3, l6, u6, c2, s4, p6), h7 = f5.__e, f5.ref && m5.ref != f5.ref && (m5.ref && V(m5.ref, null, f5), p6.push(f5.ref, f5.__c || h7, f5)), k5 == null && h7 != null && (k5 = h7), 65536 & f5.__u || m5.__k === f5.__k ? c2 = te(f5, c2, e3) : typeof f5.type == "function" && f5.__d !== void 0 ? c2 = f5.__d : h7 && (c2 = h7.nextSibling), f5.__d = void 0, f5.__u &= -196609);
  t2.__d = c2, t2.__e = k5;
}
function le(e3, _3, t2) {
  var i4, n2, r3, l6, u6, c2 = _3.length, s4 = t2.length, p6 = s4, o5 = 0;
  for (e3.__k = [], i4 = 0; i4 < c2; i4++)
    l6 = i4 + o5, (n2 = e3.__k[i4] = (n2 = _3[i4]) == null || typeof n2 == "boolean" || typeof n2 == "function" ? null : typeof n2 == "string" || typeof n2 == "number" || typeof n2 == "bigint" || n2.constructor == String ? S(null, n2, null, null, null) : F(n2) ? S(H, { children: n2 }, null, null, null) : n2.constructor === void 0 && n2.__b > 0 ? S(n2.type, n2.props, n2.key, n2.ref ? n2.ref : null, n2.__v) : n2) != null ? (n2.__ = e3, n2.__b = e3.__b + 1, u6 = ue(n2, t2, l6, p6), n2.__i = u6, r3 = null, u6 !== -1 && (p6--, (r3 = t2[u6]) && (r3.__u |= 131072)), r3 == null || r3.__v === null ? (u6 == -1 && o5--, typeof n2.type != "function" && (n2.__u |= 65536)) : u6 !== l6 && (u6 === l6 + 1 ? o5++ : u6 > l6 ? p6 > c2 - l6 ? o5 += u6 - l6 : o5-- : u6 < l6 ? u6 == l6 - 1 && (o5 = u6 - l6) : o5 = 0, u6 !== i4 + o5 && (n2.__u |= 65536))) : (r3 = t2[l6]) && r3.key == null && r3.__e && !(131072 & r3.__u) && (r3.__e == e3.__d && (e3.__d = w(r3)), B(r3, r3, false), t2[l6] = null, p6--);
  if (p6)
    for (i4 = 0; i4 < s4; i4++)
      (r3 = t2[i4]) != null && !(131072 & r3.__u) && (r3.__e == e3.__d && (e3.__d = w(r3)), B(r3, r3));
}
function te(e3, _3, t2) {
  var i4, n2;
  if (typeof e3.type == "function") {
    for (i4 = e3.__k, n2 = 0; i4 && n2 < i4.length; n2++)
      i4[n2] && (i4[n2].__ = e3, _3 = te(i4[n2], _3, t2));
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
function ue(e3, _3, t2, i4) {
  var n2 = e3.key, r3 = e3.type, l6 = t2 - 1, u6 = t2 + 1, c2 = _3[t2];
  if (c2 === null || c2 && n2 == c2.key && r3 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i4 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l6 >= 0 || u6 < _3.length; ) {
      if (l6 >= 0) {
        if ((c2 = _3[l6]) && !(131072 & c2.__u) && n2 == c2.key && r3 === c2.type)
          return l6;
        l6--;
      }
      if (u6 < _3.length) {
        if ((c2 = _3[u6]) && !(131072 & c2.__u) && n2 == c2.key && r3 === c2.type)
          return u6;
        u6++;
      }
    }
  return -1;
}
function q(e3, _3, t2) {
  _3[0] === "-" ? e3.setProperty(_3, t2 ?? "") : e3[_3] = t2 == null ? "" : typeof t2 != "number" || oe.test(_3) ? t2 : t2 + "px";
}
function M(e3, _3, t2, i4, n2) {
  var r3;
  e:
    if (_3 === "style")
      if (typeof t2 == "string")
        e3.style.cssText = t2;
      else {
        if (typeof i4 == "string" && (e3.style.cssText = i4 = ""), i4)
          for (_3 in i4)
            t2 && _3 in t2 || q(e3.style, _3, "");
        if (t2)
          for (_3 in t2)
            i4 && t2[_3] === i4[_3] || q(e3.style, _3, t2[_3]);
      }
    else if (_3[0] === "o" && _3[1] === "n")
      r3 = _3 !== (_3 = _3.replace(/(PointerCapture)$|Capture$/i, "$1")), _3 = _3.toLowerCase() in e3 ? _3.toLowerCase().slice(2) : _3.slice(2), e3.l || (e3.l = {}), e3.l[_3 + r3] = t2, t2 ? i4 ? t2.u = i4.u : (t2.u = Date.now(), e3.addEventListener(_3, r3 ? K : J, r3)) : e3.removeEventListener(_3, r3 ? K : J, r3);
    else {
      if (n2)
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
function G(e3, _3, t2, i4, n2, r3, l6, u6, c2, s4) {
  var p6, o5, m5, f5, h7, k5, v3, d9, y8, C6, T9, P6, j5, U6, N3, g7 = _3.type;
  if (_3.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r3 = [u6 = _3.__e = t2.__e]), (p6 = a.__b) && p6(_3);
  e:
    if (typeof g7 == "function")
      try {
        if (d9 = _3.props, y8 = (p6 = g7.contextType) && i4[p6.__c], C6 = p6 ? y8 ? y8.props.value : p6.__ : i4, t2.__c ? v3 = (o5 = _3.__c = t2.__c).__ = o5.__E : ("prototype" in g7 && g7.prototype.render ? _3.__c = o5 = new g7(d9, C6) : (_3.__c = o5 = new W(d9, C6), o5.constructor = g7, o5.render = ce), y8 && y8.sub(o5), o5.props = d9, o5.state || (o5.state = {}), o5.context = C6, o5.__n = i4, m5 = o5.__d = true, o5.__h = [], o5._sb = []), o5.__s == null && (o5.__s = o5.state), g7.getDerivedStateFromProps != null && (o5.__s == o5.state && (o5.__s = b({}, o5.__s)), b(o5.__s, g7.getDerivedStateFromProps(d9, o5.__s))), f5 = o5.props, h7 = o5.state, o5.__v = _3, m5)
          g7.getDerivedStateFromProps == null && o5.componentWillMount != null && o5.componentWillMount(), o5.componentDidMount != null && o5.__h.push(o5.componentDidMount);
        else {
          if (g7.getDerivedStateFromProps == null && d9 !== f5 && o5.componentWillReceiveProps != null && o5.componentWillReceiveProps(d9, C6), !o5.__e && (o5.shouldComponentUpdate != null && o5.shouldComponentUpdate(d9, o5.__s, C6) === false || _3.__v === t2.__v)) {
            for (_3.__v !== t2.__v && (o5.props = d9, o5.state = o5.__s, o5.__d = false), _3.__e = t2.__e, _3.__k = t2.__k, _3.__k.forEach(function(L9) {
              L9 && (L9.__ = _3);
            }), T9 = 0; T9 < o5._sb.length; T9++)
              o5.__h.push(o5._sb[T9]);
            o5._sb = [], o5.__h.length && l6.push(o5);
            break e;
          }
          o5.componentWillUpdate != null && o5.componentWillUpdate(d9, o5.__s, C6), o5.componentDidUpdate != null && o5.__h.push(function() {
            o5.componentDidUpdate(f5, h7, k5);
          });
        }
        if (o5.context = C6, o5.props = d9, o5.__P = e3, o5.__e = false, P6 = a.__r, j5 = 0, "prototype" in g7 && g7.prototype.render) {
          for (o5.state = o5.__s, o5.__d = false, P6 && P6(_3), p6 = o5.render(o5.props, o5.state, o5.context), U6 = 0; U6 < o5._sb.length; U6++)
            o5.__h.push(o5._sb[U6]);
          o5._sb = [];
        } else
          do
            o5.__d = false, P6 && P6(_3), p6 = o5.render(o5.props, o5.state, o5.context), o5.state = o5.__s;
          while (o5.__d && ++j5 < 25);
        o5.state = o5.__s, o5.getChildContext != null && (i4 = b(b({}, i4), o5.getChildContext())), m5 || o5.getSnapshotBeforeUpdate == null || (k5 = o5.getSnapshotBeforeUpdate(f5, h7)), _e(e3, F(N3 = p6 != null && p6.type === H && p6.key == null ? p6.props.children : p6) ? N3 : [N3], _3, t2, i4, n2, r3, l6, u6, c2, s4), o5.base = _3.__e, _3.__u &= -161, o5.__h.length && l6.push(o5), v3 && (o5.__E = o5.__ = null);
      } catch (L9) {
        _3.__v = null, c2 || r3 != null ? (_3.__e = u6, _3.__u |= c2 ? 160 : 32, r3[r3.indexOf(u6)] = null) : (_3.__e = t2.__e, _3.__k = t2.__k), a.__e(L9, _3, t2);
      }
    else
      r3 == null && _3.__v === t2.__v ? (_3.__k = t2.__k, _3.__e = t2.__e) : _3.__e = fe(t2.__e, _3, t2, i4, n2, r3, l6, c2, s4);
  (p6 = a.diffed) && p6(_3);
}
function R(e3, _3, t2) {
  for (var i4 = 0; i4 < t2.length; i4++)
    V(t2[i4], t2[++i4], t2[++i4]);
  a.__c && a.__c(_3, e3), e3.some(function(n2) {
    try {
      e3 = n2.__h, n2.__h = [], e3.some(function(r3) {
        r3.call(n2);
      });
    } catch (r3) {
      a.__e(r3, n2.__v);
    }
  });
}
function fe(e3, _3, t2, i4, n2, r3, l6, u6, c2) {
  var s4, p6, o5, m5, f5, h7, k5, v3 = t2.props, d9 = _3.props, y8 = _3.type;
  if (y8 === "svg" && (n2 = true), r3 != null) {
    for (s4 = 0; s4 < r3.length; s4++)
      if ((f5 = r3[s4]) && "setAttribute" in f5 == !!y8 && (y8 ? f5.localName === y8 : f5.nodeType === 3)) {
        e3 = f5, r3[s4] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y8 === null)
      return document.createTextNode(d9);
    e3 = n2 ? document.createElementNS("http://www.w3.org/2000/svg", y8) : document.createElement(y8, d9.is && d9), r3 = null, u6 = false;
  }
  if (y8 === null)
    v3 === d9 || u6 && e3.data === d9 || (e3.data = d9);
  else {
    if (r3 = r3 && D.call(e3.childNodes), v3 = t2.props || E, !u6 && r3 != null)
      for (v3 = {}, s4 = 0; s4 < e3.attributes.length; s4++)
        v3[(f5 = e3.attributes[s4]).name] = f5.value;
    for (s4 in v3)
      f5 = v3[s4], s4 == "children" || (s4 == "dangerouslySetInnerHTML" ? o5 = f5 : s4 === "key" || s4 in d9 || M(e3, s4, null, f5, n2));
    for (s4 in d9)
      f5 = d9[s4], s4 == "children" ? m5 = f5 : s4 == "dangerouslySetInnerHTML" ? p6 = f5 : s4 == "value" ? h7 = f5 : s4 == "checked" ? k5 = f5 : s4 === "key" || u6 && typeof f5 != "function" || v3[s4] === f5 || M(e3, s4, f5, v3[s4], n2);
    if (p6)
      u6 || o5 && (p6.__html === o5.__html || p6.__html === e3.innerHTML) || (e3.innerHTML = p6.__html), _3.__k = [];
    else if (o5 && (e3.innerHTML = ""), _e(e3, F(m5) ? m5 : [m5], _3, t2, i4, n2 && y8 !== "foreignObject", r3, l6, r3 ? r3[0] : t2.__k && w(t2, 0), u6, c2), r3 != null)
      for (s4 = r3.length; s4--; )
        r3[s4] != null && Z(r3[s4]);
    u6 || (s4 = "value", h7 !== void 0 && (h7 !== e3[s4] || y8 === "progress" && !h7 || y8 === "option" && h7 !== v3[s4]) && M(e3, s4, h7, v3[s4], false), s4 = "checked", k5 !== void 0 && k5 !== e3[s4] && M(e3, s4, k5, v3[s4], false));
  }
  return e3;
}
function V(e3, _3, t2) {
  try {
    typeof e3 == "function" ? e3(_3) : e3.current = _3;
  } catch (i4) {
    a.__e(i4, t2);
  }
}
function B(e3, _3, t2) {
  var i4, n2;
  if (a.unmount && a.unmount(e3), (i4 = e3.ref) && (i4.current && i4.current !== e3.__e || V(i4, null, _3)), (i4 = e3.__c) != null) {
    if (i4.componentWillUnmount)
      try {
        i4.componentWillUnmount();
      } catch (r3) {
        a.__e(r3, _3);
      }
    i4.base = i4.__P = null, e3.__c = void 0;
  }
  if (i4 = e3.__k)
    for (n2 = 0; n2 < i4.length; n2++)
      i4[n2] && B(i4[n2], _3, t2 || typeof e3.type != "function");
  t2 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _3, t2) {
  return this.constructor(e3, t2);
}
function pe(e3, _3, t2) {
  var i4, n2, r3, l6;
  a.__ && a.__(e3, _3), n2 = (i4 = typeof t2 == "function") ? null : t2 && t2.__k || _3.__k, r3 = [], l6 = [], G(_3, e3 = (!i4 && t2 || _3).__k = re(H, null, [e3]), n2 || E, E, _3.ownerSVGElement !== void 0, !i4 && t2 ? [t2] : n2 ? null : _3.firstChild ? D.call(_3.childNodes) : null, r3, !i4 && t2 ? t2 : n2 ? n2.__e : _3.firstChild, i4, l6), e3.__d = void 0, R(r3, e3, l6);
}
function ae(e3, _3) {
  pe(e3, _3, ae);
}
function he(e3, _3, t2) {
  var i4, n2, r3, l6, u6 = b({}, e3.props);
  for (r3 in e3.type && e3.type.defaultProps && (l6 = e3.type.defaultProps), _3)
    r3 == "key" ? i4 = _3[r3] : r3 == "ref" ? n2 = _3[r3] : u6[r3] = _3[r3] === void 0 && l6 !== void 0 ? l6[r3] : _3[r3];
  return arguments.length > 2 && (u6.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e3.type, u6, i4 || e3.key, n2 || e3.ref, null);
}
function ve(e3, _3) {
  var t2 = { __c: _3 = "__cC" + Y++, __: e3, Consumer: function(i4, n2) {
    return i4.children(n2);
  }, Provider: function(i4) {
    var n2, r3;
    return this.getChildContext || (n2 = [], (r3 = {})[_3] = this, this.getChildContext = function() {
      return r3;
    }, this.shouldComponentUpdate = function(l6) {
      this.props.value !== l6.value && n2.some(function(u6) {
        u6.__e = true, I(u6);
      });
    }, this.sub = function(l6) {
      n2.push(l6);
      var u6 = l6.componentWillUnmount;
      l6.componentWillUnmount = function() {
        n2.splice(n2.indexOf(l6), 1), u6 && u6.call(l6);
      };
    }), i4.children;
  } };
  return t2.Provider.__ = t2.Consumer.contextType = t2;
}
D = O.slice, a = { __e: function(e3, _3, t2, i4) {
  for (var n2, r3, l6; _3 = _3.__; )
    if ((n2 = _3.__c) && !n2.__)
      try {
        if ((r3 = n2.constructor) && r3.getDerivedStateFromError != null && (n2.setState(r3.getDerivedStateFromError(e3)), l6 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e3, i4 || {}), l6 = n2.__d), l6)
          return n2.__E = n2;
      } catch (u6) {
        e3 = u6;
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
  var u6 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= u6.__.length && u6.__.push({ __V: p }), u6.__[t2];
}
function I2(t2) {
  return v = 1, R2(U, t2);
}
function R2(t2, _3, u6) {
  var n2 = l(c++, 2);
  if (n2.t = t2, !n2.__c && (n2.__ = [u6 ? u6(_3) : U(void 0, _3), function(a4) {
    var f5 = n2.__N ? n2.__N[0] : n2.__[0], s4 = n2.t(f5, a4);
    f5 !== s4 && (n2.__N = [s4, n2.__[1]], n2.__c.setState({}));
  }], n2.__c = r, !r.u)) {
    var i4 = function(a4, f5, s4) {
      if (!n2.__c.__H)
        return true;
      var m5 = n2.__c.__H.__.filter(function(e3) {
        return !!e3.__c;
      });
      if (m5.every(function(e3) {
        return !e3.__N;
      }))
        return !h7 || h7.call(this, a4, f5, s4);
      var V6 = false;
      return m5.forEach(function(e3) {
        if (e3.__N) {
          var P6 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P6 !== e3.__[0] && (V6 = true);
        }
      }), !(!V6 && n2.__c.props === a4) && (!h7 || h7.call(this, a4, f5, s4));
    };
    r.u = true;
    var h7 = r.shouldComponentUpdate, N3 = r.componentWillUpdate;
    r.componentWillUpdate = function(a4, f5, s4) {
      if (this.__e) {
        var m5 = h7;
        h7 = void 0, i4(a4, f5, s4), h7 = m5;
      }
      N3 && N3.call(this, a4, f5, s4);
    }, r.shouldComponentUpdate = i4;
  }
  return n2.__N || n2.__;
}
function z2(t2, _3) {
  var u6 = l(c++, 3);
  !o.__s && y(u6.__H, _3) && (u6.__ = t2, u6.i = _3, r.__H.__h.push(u6));
}
function S2(t2, _3) {
  var u6 = l(c++, 4);
  !o.__s && y(u6.__H, _3) && (u6.__ = t2, u6.i = _3, r.__h.push(u6));
}
function L(t2) {
  return v = 5, T(function() {
    return { current: t2 };
  }, []);
}
function M2(t2, _3, u6) {
  v = 6, S2(function() {
    return typeof t2 == "function" ? (t2(_3()), function() {
      return t2(null);
    }) : t2 ? (t2.current = _3(), function() {
      return t2.current = null;
    }) : void 0;
  }, u6 == null ? u6 : u6.concat(t2));
}
function T(t2, _3) {
  var u6 = l(c++, 7);
  return y(u6.__H, _3) ? (u6.__V = t2(), u6.i = _3, u6.__h = t2, u6.__V) : u6.__;
}
function G2(t2, _3) {
  return v = 8, T(function() {
    return t2;
  }, _3);
}
function J2(t2) {
  var _3 = r.context[t2.__c], u6 = l(c++, 9);
  return u6.c = t2, _3 ? (u6.__ == null && (u6.__ = true, _3.sub(r)), _3.props.value) : t2.__;
}
function K2(t2, _3) {
  o.useDebugValue && o.useDebugValue(_3 ? _3(t2) : t2);
}
function Q2() {
  var t2 = l(c++, 11);
  if (!t2.__) {
    for (var _3 = r.__v; _3 !== null && !_3.__m && _3.__ !== null; )
      _3 = _3.__;
    var u6 = _3.__m || (_3.__m = [0, 0]);
    t2.__ = "P" + u6[0] + "-" + u6[1]++;
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
  _3 && (H2 === r ? (_3.__h = [], r.__h = [], _3.__.forEach(function(u6) {
    u6.__N && (u6.__ = u6.__N), u6.__V = p, u6.__N = u6.i = void 0;
  })) : (_3.__h.forEach(d), _3.__h.forEach(E2), _3.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t2) {
  A2 && A2(t2);
  var _3 = t2.__c;
  _3 && _3.__H && (_3.__H.__h.length && (x2.push(_3) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _3.__H.__.forEach(function(u6) {
    u6.i && (u6.__H = u6.i), u6.__V !== p && (u6.__ = u6.__V), u6.i = void 0, u6.__V = p;
  })), H2 = r = null;
}, o.__c = function(t2, _3) {
  _3.some(function(u6) {
    try {
      u6.__h.forEach(d), u6.__h = u6.__h.filter(function(n2) {
        return !n2.__ || E2(n2);
      });
    } catch (n2) {
      _3.some(function(i4) {
        i4.__h && (i4.__h = []);
      }), _3 = [], o.__e(n2, u6.__v);
    }
  }), D2 && D2(t2, _3);
}, o.unmount = function(t2) {
  F2 && F2(t2);
  var _3, u6 = t2.__c;
  u6 && u6.__H && (u6.__H.__.forEach(function(n2) {
    try {
      d(n2);
    } catch (i4) {
      _3 = i4;
    }
  }), u6.__H = void 0, _3 && o.__e(_3, u6.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _3, u6 = function() {
    clearTimeout(n2), q2 && cancelAnimationFrame(_3), setTimeout(t2);
  }, n2 = setTimeout(u6, 100);
  q2 && (_3 = requestAnimationFrame(u6));
}
function d(t2) {
  var _3 = r, u6 = t2.__c;
  typeof u6 == "function" && (t2.__c = void 0, u6()), r = _3;
}
function E2(t2) {
  var _3 = r;
  t2.__c = t2.__(), r = _3;
}
function y(t2, _3) {
  return !t2 || t2.length !== _3.length || _3.some(function(u6, n2) {
    return u6 !== t2[n2];
  });
}
function U(t2, _3) {
  return typeof _3 == "function" ? _3(t2) : _3;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e3, t2) {
  for (var n2 in t2)
    e3[n2] = t2[n2];
  return e3;
}
function b3(e3, t2) {
  for (var n2 in e3)
    if (n2 !== "__source" && !(n2 in t2))
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
  function n2(o5) {
    var u6 = this.props.ref, a4 = u6 == o5.ref;
    return !a4 && u6 && (u6.call ? u6(null) : u6.current = null), t2 ? !t2(this.props, o5) || !a4 : b3(this.props, o5);
  }
  function r3(o5) {
    return this.shouldComponentUpdate = n2, re(e3, o5);
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
  function t2(n2) {
    var r3 = L2({}, n2);
    return delete r3.ref, e3(r3, n2.ref || null);
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
a.__e = function(e3, t2, n2, r3) {
  if (e3.then) {
    for (var o5, u6 = t2; u6 = u6.__; )
      if ((o5 = u6.__c) && o5.__c)
        return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), o5.__c(e3, t2);
  }
  ne2(e3, t2, n2, r3);
};
var x3 = a.unmount;
function T2(e3, t2, n2) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(r3) {
    typeof r3.__c == "function" && r3.__c();
  }), e3.__c.__H = null), (e3 = L2({}, e3)).__c != null && (e3.__c.__P === n2 && (e3.__c.__P = t2), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(r3) {
    return T2(r3, t2, n2);
  })), e3;
}
function A3(e3, t2, n2) {
  return e3 && n2 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(r3) {
    return A3(r3, t2, n2);
  }), e3.__c && e3.__c.__P === t2 && (e3.__e && n2.appendChild(e3.__e), e3.__c.__e = true, e3.__c.__P = n2)), e3;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e3) {
  var t2 = e3.__.__c;
  return t2 && t2.__a && t2.__a(e3);
}
function re2(e3) {
  var t2, n2, r3;
  function o5(u6) {
    if (t2 || (t2 = e3()).then(function(a4) {
      n2 = a4.default || a4;
    }, function(a4) {
      r3 = a4;
    }), r3)
      throw r3;
    if (!n2)
      throw t2;
    return re(n2, u6);
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
  var n2 = t2.__c, r3 = this;
  r3.t == null && (r3.t = []), r3.t.push(n2);
  var o5 = F3(r3.__v), u6 = false, a4 = function() {
    u6 || (u6 = true, n2.__R = null, o5 ? o5(l6) : l6());
  };
  n2.__R = a4;
  var l6 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var s4 = r3.state.__a;
        r3.__v.__k[0] = A3(s4, s4.__c.__P, s4.__c.__O);
      }
      var g7;
      for (r3.setState({ __a: r3.__b = null }); g7 = r3.t.pop(); )
        g7.forceUpdate();
    }
  };
  r3.__u++ || 32 & t2.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), e3.then(a4, a4);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e3, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n2, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var o5 = t2.__a && re(H, null, e3.fallback);
  return o5 && (o5.__u &= -33), [re(H, null, t2.__a ? null : e3.children), o5];
};
var k2 = function(e3, t2, n2) {
  if (++n2[1] === n2[0] && e3.o.delete(t2), e3.props.revealOrder && (e3.props.revealOrder[0] !== "t" || !e3.o.size))
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
  var t2 = this, n2 = e3.i;
  t2.componentWillUnmount = function() {
    pe(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(r3) {
    this.childNodes.push(r3), t2.i.appendChild(r3);
  }, insertBefore: function(r3, o5) {
    this.childNodes.push(r3), t2.i.appendChild(r3);
  }, removeChild: function(r3) {
    this.childNodes.splice(this.childNodes.indexOf(r3) >>> 1, 1), t2.i.removeChild(r3);
  } }), pe(re(oe2, { context: t2.context }, e3.__v), t2.l);
}
function ae2(e3, t2) {
  var n2 = re(ue2, { __v: e3, i: t2 });
  return n2.containerInfo = t2, n2;
}
(p2.prototype = new W()).__a = function(e3) {
  var t2 = this, n2 = F3(t2.__v), r3 = t2.o.get(e3);
  return r3[0]++, function(o5) {
    var u6 = function() {
      t2.props.revealOrder ? (r3.push(o5), k2(t2, e3, r3)) : o5();
    };
    n2 ? n2(u6) : u6();
  };
}, p2.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e3.children);
  e3.revealOrder && e3.revealOrder[0] === "b" && t2.reverse();
  for (var n2 = t2.length; n2--; )
    this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e3.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t2, n2) {
    k2(e3, n2, t2);
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
function fe2(e3, t2, n2) {
  return t2.__k == null && (t2.textContent = ""), pe(e3, t2), typeof n2 == "function" && n2(), e3 ? e3.__c : null;
}
function pe2(e3, t2, n2) {
  return ae(e3, t2), typeof n2 == "function" && n2(), e3 ? e3.__c : null;
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
    var n2 = t2.props, r3 = t2.type, o5 = {};
    for (var u6 in n2) {
      var a4 = n2[u6];
      if (!(u6 === "value" && "defaultValue" in n2 && a4 == null || _e2 && u6 === "children" && r3 === "noscript" || u6 === "class" || u6 === "className")) {
        var l6 = u6.toLowerCase();
        u6 === "defaultValue" && "value" in n2 && n2.value == null ? u6 = "value" : u6 === "download" && a4 === true ? a4 = "" : l6 === "translate" && a4 === "no" ? a4 = false : l6 === "ondoubleclick" ? u6 = "ondblclick" : l6 !== "onchange" || r3 !== "input" && r3 !== "textarea" || ce2(n2.type) ? l6 === "onfocus" ? u6 = "onfocusin" : l6 === "onblur" ? u6 = "onfocusout" : le2.test(u6) ? u6 = l6 : r3.indexOf("-") === -1 && ie2.test(u6) ? u6 = u6.replace(se2, "-$&").toLowerCase() : a4 === null && (a4 = void 0) : l6 = u6 = "oninput", l6 === "oninput" && o5[u6 = l6] && (u6 = "oninputCapture"), o5[u6] = a4;
      }
    }
    r3 == "select" && o5.multiple && Array.isArray(o5.value) && (o5.value = se(n2.children).forEach(function(s4) {
      s4.props.selected = o5.value.indexOf(s4.props.value) != -1;
    })), r3 == "select" && o5.defaultValue != null && (o5.value = se(n2.children).forEach(function(s4) {
      s4.props.selected = o5.multiple ? o5.defaultValue.indexOf(s4.props.value) != -1 : o5.defaultValue == s4.props.value;
    })), n2.class && !n2.className ? (o5.class = n2.class, Object.defineProperty(o5, "className", me)) : (n2.className && !n2.class || n2.class && n2.className) && (o5.class = o5.className = n2.className), t2.props = o5;
  }(e3), e3.$$typeof = V2, P && P(e3);
};
var w2 = a.__r;
a.__r = function(e3) {
  w2 && w2(e3), S3 = e3.__c;
};
var U2 = a.diffed;
a.diffed = function(e3) {
  U2 && U2(e3);
  var t2 = e3.props, n2 = e3.__e;
  n2 != null && e3.type === "textarea" && "value" in t2 && t2.value !== n2.value && (n2.value = t2.value == null ? "" : t2.value), S3 = null;
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
  var n2 = t2(), r3 = I2({ h: { __: n2, v: t2 } }), o5 = r3[0].h, u6 = r3[1];
  return S2(function() {
    o5.__ = n2, o5.v = t2, y2(o5) && u6({ h: o5 });
  }, [e3, n2, t2]), z2(function() {
    return y2(o5) && u6({ h: o5 }), e3(function() {
      y2(o5) && u6({ h: o5 });
    });
  }, [e3]), n2;
}
function y2(e3) {
  var t2, n2, r3 = e3.v, o5 = e3.__;
  try {
    var u6 = r3();
    return !((t2 = o5) === (n2 = u6) && (t2 !== 0 || 1 / t2 == 1 / n2) || t2 != t2 && n2 != n2);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n2, t2) => {
  for (var e3 in t2)
    s(n2, e3, { get: t2[e3], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e3 = arguments[t2];
      for (var a4 in e3)
        Object.prototype.hasOwnProperty.call(e3, a4) && (n2[a4] = e3[a4]);
    }
    return n2;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e3, f5, { checkForDefaultPrevented: t2 = true } = {}) {
  return function(c2) {
    if (e3?.(c2), t2 === false || !c2.defaultPrevented)
      return f5?.(c2);
  };
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t2, c2 = []) {
  let o5 = [];
  function a4(r3, e3) {
    let n2 = ve(e3), s4 = o5.length;
    o5 = [...o5, e3];
    function f5(d9) {
      let { scope: i4, children: x7, ...$4 } = d9, h7 = i4?.[t2][s4] || n2, S9 = T(() => $4, Object.values($4));
      return re(h7.Provider, { value: S9 }, x7);
    }
    function v3(d9, i4) {
      let x7 = i4?.[t2][s4] || n2, $4 = J2(x7);
      if ($4)
        return $4;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d9}\` must be used within \`${r3}\``);
    }
    return f5.displayName = r3 + "Provider", [f5, v3];
  }
  let u6 = () => {
    let r3 = o5.map((e3) => ve(e3));
    return function(n2) {
      let s4 = n2?.[t2] || r3;
      return T(() => ({ [`__scope${t2}`]: { ...n2, [t2]: s4 } }), [n2, s4]);
    };
  };
  return u6.scopeName = t2, [a4, C3(u6, ...c2)];
}
function C3(...t2) {
  let c2 = t2[0];
  if (t2.length === 1)
    return c2;
  let o5 = () => {
    let a4 = t2.map((u6) => ({ useScope: u6(), scopeName: u6.scopeName }));
    return function(r3) {
      let e3 = a4.reduce((n2, { useScope: s4, scopeName: f5 }) => {
        let d9 = s4(r3)[`__scope${f5}`];
        return { ...n2, ...d9 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e3 }), [e3]);
    };
  };
  return o5.scopeName = c2.scopeName, o5;
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f5) {
  let e3 = L(f5);
  return z2(() => {
    e3.current = f5;
  }), T(() => (...u6) => {
    var r3;
    return (r3 = e3.current) === null || r3 === void 0 ? void 0 : r3.call(e3, ...u6);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w3({ prop: e3, defaultProp: a4, onChange: s4 = () => {
} }) {
  let [t2, n2] = P2({ defaultProp: a4, onChange: s4 }), o5 = e3 !== void 0, f5 = o5 ? e3 : t2, l6 = l2(s4), $4 = G2((c2) => {
    if (o5) {
      let u6 = typeof c2 == "function" ? c2(e3) : c2;
      u6 !== e3 && l6(u6);
    } else
      n2(c2);
  }, [o5, e3, n2, l6]);
  return [f5, $4];
}
function P2({ defaultProp: e3, onChange: a4 }) {
  let s4 = I2(e3), [t2] = s4, n2 = L(t2), o5 = l2(a4);
  return z2(() => {
    n2.current !== t2 && (o5(t2), n2.current = t2);
  }, [t2, n2, o5]), s4;
}

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e3, f5) {
  typeof e3 == "function" ? e3(f5) : e3 != null && (e3.current = f5);
}
function t(...e3) {
  return (f5) => e3.forEach((o5) => n(o5, f5));
}
function u2(...e3) {
  return G2(t(...e3), e3);
}

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/utils.mjs
var a2 = ["top", "right", "bottom", "left"];
var f2 = ["start", "end"];
var O3 = a2.reduce((t2, n2) => t2.concat(n2, n2 + "-" + f2[0], n2 + "-" + f2[1]), []);
var m2 = Math.min;
var p4 = Math.max;
var S4 = Math.round;
var w4 = Math.floor;
var j2 = (t2) => ({ x: t2, y: t2 });
var h2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
var x4 = { start: "end", end: "start" };
function C4(t2, n2, o5) {
  return p4(t2, m2(n2, o5));
}
function L3(t2, n2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
function l3(t2) {
  return t2.split("-")[0];
}
function g2(t2) {
  return t2.split("-")[1];
}
function b4(t2) {
  return t2 === "x" ? "y" : "x";
}
function d3(t2) {
  return t2 === "y" ? "height" : "width";
}
function A4(t2) {
  return ["top", "bottom"].includes(l3(t2)) ? "y" : "x";
}
function y3(t2) {
  return b4(A4(t2));
}
function E3(t2, n2, o5) {
  o5 === void 0 && (o5 = false);
  let c2 = g2(t2), i4 = y3(t2), e3 = d3(i4), r3 = i4 === "x" ? c2 === (o5 ? "end" : "start") ? "right" : "left" : c2 === "start" ? "bottom" : "top";
  return n2.reference[e3] > n2.floating[e3] && (r3 = u3(r3)), [r3, u3(r3)];
}
function R4(t2) {
  let n2 = u3(t2);
  return [s2(t2), n2, s2(n2)];
}
function s2(t2) {
  return t2.replace(/start|end/g, (n2) => x4[n2]);
}
function P3(t2, n2, o5) {
  let c2 = ["left", "right"], i4 = ["right", "left"], e3 = ["top", "bottom"], r3 = ["bottom", "top"];
  switch (t2) {
    case "top":
    case "bottom":
      return o5 ? n2 ? i4 : c2 : n2 ? c2 : i4;
    case "left":
    case "right":
      return n2 ? e3 : r3;
    default:
      return [];
  }
}
function T3(t2, n2, o5, c2) {
  let i4 = g2(t2), e3 = P3(l3(t2), o5 === "start", c2);
  return i4 && (e3 = e3.map((r3) => r3 + "-" + i4), n2 && (e3 = e3.concat(e3.map(s2)))), e3;
}
function u3(t2) {
  return t2.replace(/left|right|bottom|top/g, (n2) => h2[n2]);
}
function M4(t2) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t2 };
}
function k3(t2) {
  return typeof t2 != "number" ? M4(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function q3(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}

// https://esm.sh/v132/@floating-ui/core@1.4.2/denonext/core.mjs
function q4(e3, t2, l6) {
  let { reference: s4, floating: i4 } = e3, n2 = A4(t2), r3 = y3(t2), v3 = d3(r3), m5 = l3(t2), g7 = n2 === "y", u6 = s4.x + s4.width / 2 - i4.width / 2, c2 = s4.y + s4.height / 2 - i4.height / 2, f5 = s4[v3] / 2 - i4[v3] / 2, o5;
  switch (m5) {
    case "top":
      o5 = { x: u6, y: s4.y - i4.height };
      break;
    case "bottom":
      o5 = { x: u6, y: s4.y + s4.height };
      break;
    case "right":
      o5 = { x: s4.x + s4.width, y: c2 };
      break;
    case "left":
      o5 = { x: s4.x - i4.width, y: c2 };
      break;
    default:
      o5 = { x: s4.x, y: s4.y };
  }
  switch (g2(t2)) {
    case "start":
      o5[r3] -= f5 * (l6 && g7 ? -1 : 1);
      break;
    case "end":
      o5[r3] += f5 * (l6 && g7 ? -1 : 1);
      break;
  }
  return o5;
}
var ae3 = async (e3, t2, l6) => {
  let { placement: s4 = "bottom", strategy: i4 = "absolute", middleware: n2 = [], platform: r3 } = l6, v3 = n2.filter(Boolean), m5 = await (r3.isRTL == null ? void 0 : r3.isRTL(t2)), g7 = await r3.getElementRects({ reference: e3, floating: t2, strategy: i4 }), { x: u6, y: c2 } = q4(g7, s4, m5), f5 = s4, o5 = {}, a4 = 0;
  for (let x7 = 0; x7 < v3.length; x7++) {
    let { name: d9, fn: y8 } = v3[x7], { x: w7, y: p6, data: A5, reset: h7 } = await y8({ x: u6, y: c2, initialPlacement: s4, placement: f5, strategy: i4, middlewareData: o5, rects: g7, platform: r3, elements: { reference: e3, floating: t2 } });
    if (u6 = w7 ?? u6, c2 = p6 ?? c2, o5 = { ...o5, [d9]: { ...o5[d9], ...A5 } }, h7 && a4 <= 50) {
      a4++, typeof h7 == "object" && (h7.placement && (f5 = h7.placement), h7.rects && (g7 = h7.rects === true ? await r3.getElementRects({ reference: e3, floating: t2, strategy: i4 }) : h7.rects), { x: u6, y: c2 } = q4(g7, f5, m5)), x7 = -1;
      continue;
    }
  }
  return { x: u6, y: c2, placement: f5, strategy: i4, middlewareData: o5 };
};
async function j3(e3, t2) {
  var l6;
  t2 === void 0 && (t2 = {});
  let { x: s4, y: i4, platform: n2, rects: r3, elements: v3, strategy: m5 } = e3, { boundary: g7 = "clippingAncestors", rootBoundary: u6 = "viewport", elementContext: c2 = "floating", altBoundary: f5 = false, padding: o5 = 0 } = L3(t2, e3), a4 = k3(o5), d9 = v3[f5 ? c2 === "floating" ? "reference" : "floating" : c2], y8 = q3(await n2.getClippingRect({ element: (l6 = await (n2.isElement == null ? void 0 : n2.isElement(d9))) == null || l6 ? d9 : d9.contextElement || await (n2.getDocumentElement == null ? void 0 : n2.getDocumentElement(v3.floating)), boundary: g7, rootBoundary: u6, strategy: m5 })), w7 = c2 === "floating" ? { ...r3.floating, x: s4, y: i4 } : r3.reference, p6 = await (n2.getOffsetParent == null ? void 0 : n2.getOffsetParent(v3.floating)), A5 = await (n2.isElement == null ? void 0 : n2.isElement(p6)) ? await (n2.getScale == null ? void 0 : n2.getScale(p6)) || { x: 1, y: 1 } : { x: 1, y: 1 }, h7 = q3(n2.convertOffsetParentRelativeRectToViewportRelativeRect ? await n2.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w7, offsetParent: p6, strategy: m5 }) : w7);
  return { top: (y8.top - h7.top + a4.top) / A5.y, bottom: (h7.bottom - y8.bottom + a4.bottom) / A5.y, left: (y8.left - h7.left + a4.left) / A5.x, right: (h7.right - y8.right + a4.right) / A5.x };
}
var fe3 = (e3) => ({ name: "arrow", options: e3, async fn(t2) {
  let { x: l6, y: s4, placement: i4, rects: n2, platform: r3, elements: v3, middlewareData: m5 } = t2, { element: g7, padding: u6 = 0 } = L3(e3, t2) || {};
  if (g7 == null)
    return {};
  let c2 = k3(u6), f5 = { x: l6, y: s4 }, o5 = y3(i4), a4 = d3(o5), x7 = await r3.getDimensions(g7), d9 = o5 === "y", y8 = d9 ? "top" : "left", w7 = d9 ? "bottom" : "right", p6 = d9 ? "clientHeight" : "clientWidth", A5 = n2.reference[a4] + n2.reference[o5] - f5[o5] - n2.floating[a4], h7 = f5[o5] - n2.reference[o5], b8 = await (r3.getOffsetParent == null ? void 0 : r3.getOffsetParent(g7)), R5 = b8 ? b8[p6] : 0;
  (!R5 || !await (r3.isElement == null ? void 0 : r3.isElement(b8))) && (R5 = v3.floating[p6] || n2.floating[a4]);
  let B3 = A5 / 2 - h7 / 2, T9 = R5 / 2 - x7[a4] / 2 - 1, P6 = m2(c2[y8], T9), O6 = m2(c2[w7], T9), E6 = P6, S9 = R5 - x7[a4] - O6, C6 = R5 / 2 - x7[a4] / 2 + B3, k5 = C4(E6, C6, S9), L9 = !m5.arrow && g2(i4) != null && C6 != k5 && n2.reference[a4] / 2 - (C6 < E6 ? P6 : O6) - x7[a4] / 2 < 0, Y4 = L9 ? C6 < E6 ? E6 - C6 : S9 - C6 : 0;
  return { [o5]: f5[o5] - Y4, data: { [o5]: k5, centerOffset: C6 - k5 + Y4 }, reset: L9 };
} });
var de3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "flip", options: e3, async fn(t2) {
    var l6;
    let { placement: s4, middlewareData: i4, rects: n2, initialPlacement: r3, platform: v3, elements: m5 } = t2, { mainAxis: g7 = true, crossAxis: u6 = true, fallbackPlacements: c2, fallbackStrategy: f5 = "bestFit", fallbackAxisSideDirection: o5 = "none", flipAlignment: a4 = true, ...x7 } = L3(e3, t2), d9 = l3(s4), y8 = l3(r3) === r3, w7 = await (v3.isRTL == null ? void 0 : v3.isRTL(m5.floating)), p6 = c2 || (y8 || !a4 ? [u3(r3)] : R4(r3));
    !c2 && o5 !== "none" && p6.push(...T3(r3, a4, o5, w7));
    let A5 = [r3, ...p6], h7 = await j3(t2, x7), b8 = [], R5 = ((l6 = i4.flip) == null ? void 0 : l6.overflows) || [];
    if (g7 && b8.push(h7[d9]), u6) {
      let O6 = E3(s4, n2, w7);
      b8.push(h7[O6[0]], h7[O6[1]]);
    }
    if (R5 = [...R5, { placement: s4, overflows: b8 }], !b8.every((O6) => O6 <= 0)) {
      var B3, T9;
      let O6 = (((B3 = i4.flip) == null ? void 0 : B3.index) || 0) + 1, E6 = A5[O6];
      if (E6)
        return { data: { index: O6, overflows: R5 }, reset: { placement: E6 } };
      let S9 = (T9 = R5.filter((C6) => C6.overflows[0] <= 0).sort((C6, k5) => C6.overflows[1] - k5.overflows[1])[0]) == null ? void 0 : T9.placement;
      if (!S9)
        switch (f5) {
          case "bestFit": {
            var P6;
            let C6 = (P6 = R5.map((k5) => [k5.placement, k5.overflows.filter((L9) => L9 > 0).reduce((L9, Y4) => L9 + Y4, 0)]).sort((k5, L9) => k5[1] - L9[1])[0]) == null ? void 0 : P6[0];
            C6 && (S9 = C6);
            break;
          }
          case "initialPlacement":
            S9 = r3;
            break;
        }
      if (s4 !== S9)
        return { reset: { placement: S9 } };
    }
    return {};
  } };
};
function G3(e3, t2) {
  return { top: e3.top - t2.height, right: e3.right - t2.width, bottom: e3.bottom - t2.height, left: e3.left - t2.width };
}
function J3(e3) {
  return a2.some((t2) => e3[t2] >= 0);
}
var ue3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "hide", options: e3, async fn(t2) {
    let { rects: l6 } = t2, { strategy: s4 = "referenceHidden", ...i4 } = L3(e3, t2);
    switch (s4) {
      case "referenceHidden": {
        let n2 = await j3(t2, { ...i4, elementContext: "reference" }), r3 = G3(n2, l6.reference);
        return { data: { referenceHiddenOffsets: r3, referenceHidden: J3(r3) } };
      }
      case "escaped": {
        let n2 = await j3(t2, { ...i4, altBoundary: true }), r3 = G3(n2, l6.floating);
        return { data: { escapedOffsets: r3, escaped: J3(r3) } };
      }
      default:
        return {};
    }
  } };
};
async function le3(e3, t2) {
  let { placement: l6, platform: s4, elements: i4 } = e3, n2 = await (s4.isRTL == null ? void 0 : s4.isRTL(i4.floating)), r3 = l3(l6), v3 = g2(l6), m5 = A4(l6) === "y", g7 = ["left", "top"].includes(r3) ? -1 : 1, u6 = n2 && m5 ? -1 : 1, c2 = L3(t2, e3), { mainAxis: f5, crossAxis: o5, alignmentAxis: a4 } = typeof c2 == "number" ? { mainAxis: c2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c2 };
  return v3 && typeof a4 == "number" && (o5 = v3 === "end" ? a4 * -1 : a4), m5 ? { x: o5 * u6, y: f5 * g7 } : { x: f5 * g7, y: o5 * u6 };
}
var xe2 = function(e3) {
  return e3 === void 0 && (e3 = 0), { name: "offset", options: e3, async fn(t2) {
    let { x: l6, y: s4 } = t2, i4 = await le3(t2, e3);
    return { x: l6 + i4.x, y: s4 + i4.y, data: i4 };
  } };
};
var he3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "shift", options: e3, async fn(t2) {
    let { x: l6, y: s4, placement: i4 } = t2, { mainAxis: n2 = true, crossAxis: r3 = false, limiter: v3 = { fn: (d9) => {
      let { x: y8, y: w7 } = d9;
      return { x: y8, y: w7 };
    } }, ...m5 } = L3(e3, t2), g7 = { x: l6, y: s4 }, u6 = await j3(t2, m5), c2 = A4(l3(i4)), f5 = b4(c2), o5 = g7[f5], a4 = g7[c2];
    if (n2) {
      let d9 = f5 === "y" ? "top" : "left", y8 = f5 === "y" ? "bottom" : "right", w7 = o5 + u6[d9], p6 = o5 - u6[y8];
      o5 = C4(w7, o5, p6);
    }
    if (r3) {
      let d9 = c2 === "y" ? "top" : "left", y8 = c2 === "y" ? "bottom" : "right", w7 = a4 + u6[d9], p6 = a4 - u6[y8];
      a4 = C4(w7, a4, p6);
    }
    let x7 = v3.fn({ ...t2, [f5]: o5, [c2]: a4 });
    return { ...x7, data: { x: x7.x - l6, y: x7.y - s4 } };
  } };
};
var pe3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { options: e3, fn(t2) {
    let { x: l6, y: s4, placement: i4, rects: n2, middlewareData: r3 } = t2, { offset: v3 = 0, mainAxis: m5 = true, crossAxis: g7 = true } = L3(e3, t2), u6 = { x: l6, y: s4 }, c2 = A4(i4), f5 = b4(c2), o5 = u6[f5], a4 = u6[c2], x7 = L3(v3, t2), d9 = typeof x7 == "number" ? { mainAxis: x7, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x7 };
    if (m5) {
      let p6 = f5 === "y" ? "height" : "width", A5 = n2.reference[f5] - n2.floating[p6] + d9.mainAxis, h7 = n2.reference[f5] + n2.reference[p6] - d9.mainAxis;
      o5 < A5 ? o5 = A5 : o5 > h7 && (o5 = h7);
    }
    if (g7) {
      var y8, w7;
      let p6 = f5 === "y" ? "width" : "height", A5 = ["top", "left"].includes(l3(i4)), h7 = n2.reference[c2] - n2.floating[p6] + (A5 && ((y8 = r3.offset) == null ? void 0 : y8[c2]) || 0) + (A5 ? 0 : d9.crossAxis), b8 = n2.reference[c2] + n2.reference[p6] + (A5 ? 0 : ((w7 = r3.offset) == null ? void 0 : w7[c2]) || 0) - (A5 ? d9.crossAxis : 0);
      a4 < h7 ? a4 = h7 : a4 > b8 && (a4 = b8);
    }
    return { [f5]: o5, [c2]: a4 };
  } };
};
var we2 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "size", options: e3, async fn(t2) {
    let { placement: l6, rects: s4, platform: i4, elements: n2 } = t2, { apply: r3 = () => {
    }, ...v3 } = L3(e3, t2), m5 = await j3(t2, v3), g7 = l3(l6), u6 = g2(l6), c2 = A4(l6) === "y", { width: f5, height: o5 } = s4.floating, a4, x7;
    g7 === "top" || g7 === "bottom" ? (a4 = g7, x7 = u6 === (await (i4.isRTL == null ? void 0 : i4.isRTL(n2.floating)) ? "start" : "end") ? "left" : "right") : (x7 = g7, a4 = u6 === "end" ? "top" : "bottom");
    let d9 = o5 - m5[a4], y8 = f5 - m5[x7], w7 = !t2.middlewareData.shift, p6 = d9, A5 = y8;
    if (c2) {
      let b8 = f5 - m5.left - m5.right;
      A5 = u6 || w7 ? m2(y8, b8) : b8;
    } else {
      let b8 = o5 - m5.top - m5.bottom;
      p6 = u6 || w7 ? m2(d9, b8) : b8;
    }
    if (w7 && !u6) {
      let b8 = p4(m5.left, 0), R5 = p4(m5.right, 0), B3 = p4(m5.top, 0), T9 = p4(m5.bottom, 0);
      c2 ? A5 = f5 - 2 * (b8 !== 0 || R5 !== 0 ? b8 + R5 : p4(m5.left, m5.right)) : p6 = o5 - 2 * (B3 !== 0 || T9 !== 0 ? B3 + T9 : p4(m5.top, m5.bottom));
    }
    await r3({ ...t2, availableWidth: A5, availableHeight: p6 });
    let h7 = await i4.getDimensions(n2.floating);
    return f5 !== h7.width || o5 !== h7.height ? { reset: { rects: true } } : {};
  } };
};

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/dom.js
function l4(n2) {
  return a3(n2) ? (n2.nodeName || "").toLowerCase() : "#document";
}
function i(n2) {
  var t2;
  return (n2 == null || (t2 = n2.ownerDocument) == null ? void 0 : t2.defaultView) || window;
}
function y4(n2) {
  var t2;
  return (t2 = (a3(n2) ? n2.ownerDocument : n2.document) || window.document) == null ? void 0 : t2.documentElement;
}
function a3(n2) {
  return n2 instanceof Node || n2 instanceof i(n2).Node;
}
function S5(n2) {
  return n2 instanceof Element || n2 instanceof i(n2).Element;
}
function d4(n2) {
  return n2 instanceof HTMLElement || n2 instanceof i(n2).HTMLElement;
}
function s3(n2) {
  return typeof ShadowRoot > "u" ? false : n2 instanceof ShadowRoot || n2 instanceof i(n2).ShadowRoot;
}
function m3(n2) {
  let { overflow: t2, overflowX: e3, overflowY: o5, display: r3 } = p5(n2);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + o5 + e3) && !["inline", "contents"].includes(r3);
}
function E4(n2) {
  return ["table", "td", "th"].includes(l4(n2));
}
function N2(n2) {
  let t2 = h3(), e3 = p5(n2);
  return e3.transform !== "none" || e3.perspective !== "none" || (e3.containerType ? e3.containerType !== "normal" : false) || !t2 && (e3.backdropFilter ? e3.backdropFilter !== "none" : false) || !t2 && (e3.filter ? e3.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o5) => (e3.willChange || "").includes(o5)) || ["paint", "layout", "strict", "content"].some((o5) => (e3.contain || "").includes(o5));
}
function v2(n2) {
  let t2 = u4(n2);
  for (; d4(t2) && !w5(t2); ) {
    if (N2(t2))
      return t2;
    t2 = u4(t2);
  }
  return null;
}
function h3() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function w5(n2) {
  return ["html", "body", "#document"].includes(l4(n2));
}
function p5(n2) {
  return i(n2).getComputedStyle(n2);
}
function T4(n2) {
  return S5(n2) ? { scrollLeft: n2.scrollLeft, scrollTop: n2.scrollTop } : { scrollLeft: n2.pageXOffset, scrollTop: n2.pageYOffset };
}
function u4(n2) {
  if (l4(n2) === "html")
    return n2;
  let t2 = n2.assignedSlot || n2.parentNode || s3(n2) && n2.host || y4(n2);
  return s3(t2) ? t2.host : t2;
}
function g3(n2) {
  let t2 = u4(n2);
  return w5(t2) ? n2.ownerDocument ? n2.ownerDocument.body : n2.body : d4(t2) && m3(t2) ? t2 : g3(t2);
}
function f3(n2, t2, e3) {
  var o5;
  t2 === void 0 && (t2 = []), e3 === void 0 && (e3 = true);
  let r3 = g3(n2), b8 = r3 === ((o5 = n2.ownerDocument) == null ? void 0 : o5.body), c2 = i(r3);
  return b8 ? t2.concat(c2, c2.visualViewport || [], m3(r3) ? r3 : [], c2.frameElement && e3 ? f3(c2.frameElement) : []) : t2.concat(r3, f3(r3));
}

// https://esm.sh/v132/@floating-ui/dom@1.5.3/denonext/dom.mjs
function j4(t2) {
  let e3 = p5(t2), i4 = parseFloat(e3.width) || 0, o5 = parseFloat(e3.height) || 0, n2 = d4(t2), c2 = n2 ? t2.offsetWidth : i4, s4 = n2 ? t2.offsetHeight : o5, r3 = S4(i4) !== c2 || S4(o5) !== s4;
  return r3 && (i4 = c2, o5 = s4), { width: i4, height: o5, $: r3 };
}
function S6(t2) {
  return S5(t2) ? t2 : t2.contextElement;
}
function L4(t2) {
  let e3 = S6(t2);
  if (!d4(e3))
    return j2(1);
  let i4 = e3.getBoundingClientRect(), { width: o5, height: n2, $: c2 } = j4(e3), s4 = (c2 ? S4(i4.width) : i4.width) / o5, r3 = (c2 ? S4(i4.height) : i4.height) / n2;
  return (!s4 || !Number.isFinite(s4)) && (s4 = 1), (!r3 || !Number.isFinite(r3)) && (r3 = 1), { x: s4, y: r3 };
}
var et = j2(0);
function G4(t2) {
  let e3 = i(t2);
  return !h3() || !e3.visualViewport ? et : { x: e3.visualViewport.offsetLeft, y: e3.visualViewport.offsetTop };
}
function it(t2, e3, i4) {
  return e3 === void 0 && (e3 = false), !i4 || e3 && i4 !== i(t2) ? false : e3;
}
function O4(t2, e3, i4, o5) {
  e3 === void 0 && (e3 = false), i4 === void 0 && (i4 = false);
  let n2 = t2.getBoundingClientRect(), c2 = S6(t2), s4 = j2(1);
  e3 && (o5 ? S5(o5) && (s4 = L4(o5)) : s4 = L4(t2));
  let r3 = it(c2, i4, o5) ? G4(c2) : j2(0), l6 = (n2.left + r3.x) / s4.x, f5 = (n2.top + r3.y) / s4.y, p6 = n2.width / s4.x, d9 = n2.height / s4.y;
  if (c2) {
    let w7 = i(c2), a4 = o5 && S5(o5) ? i(o5) : o5, g7 = w7.frameElement;
    for (; g7 && o5 && a4 !== w7; ) {
      let h7 = L4(g7), R5 = g7.getBoundingClientRect(), u6 = p5(g7), C6 = R5.left + (g7.clientLeft + parseFloat(u6.paddingLeft)) * h7.x, W4 = R5.top + (g7.clientTop + parseFloat(u6.paddingTop)) * h7.y;
      l6 *= h7.x, f5 *= h7.y, p6 *= h7.x, d9 *= h7.y, l6 += C6, f5 += W4, g7 = i(g7).frameElement;
    }
  }
  return q3({ width: p6, height: d9, x: l6, y: f5 });
}
function ot(t2) {
  let { rect: e3, offsetParent: i4, strategy: o5 } = t2, n2 = d4(i4), c2 = y4(i4);
  if (i4 === c2)
    return e3;
  let s4 = { scrollLeft: 0, scrollTop: 0 }, r3 = j2(1), l6 = j2(0);
  if ((n2 || !n2 && o5 !== "fixed") && ((l4(i4) !== "body" || m3(c2)) && (s4 = T4(i4)), d4(i4))) {
    let f5 = O4(i4);
    r3 = L4(i4), l6.x = f5.x + i4.clientLeft, l6.y = f5.y + i4.clientTop;
  }
  return { width: e3.width * r3.x, height: e3.height * r3.y, x: e3.x * r3.x - s4.scrollLeft * r3.x + l6.x, y: e3.y * r3.y - s4.scrollTop * r3.y + l6.y };
}
function nt(t2) {
  return Array.from(t2.getClientRects());
}
function J4(t2) {
  return O4(y4(t2)).left + T4(t2).scrollLeft;
}
function st(t2) {
  let e3 = y4(t2), i4 = T4(t2), o5 = t2.ownerDocument.body, n2 = p4(e3.scrollWidth, e3.clientWidth, o5.scrollWidth, o5.clientWidth), c2 = p4(e3.scrollHeight, e3.clientHeight, o5.scrollHeight, o5.clientHeight), s4 = -i4.scrollLeft + J4(t2), r3 = -i4.scrollTop;
  return p5(o5).direction === "rtl" && (s4 += p4(e3.clientWidth, o5.clientWidth) - n2), { width: n2, height: c2, x: s4, y: r3 };
}
function rt(t2, e3) {
  let i4 = i(t2), o5 = y4(t2), n2 = i4.visualViewport, c2 = o5.clientWidth, s4 = o5.clientHeight, r3 = 0, l6 = 0;
  if (n2) {
    c2 = n2.width, s4 = n2.height;
    let f5 = h3();
    (!f5 || f5 && e3 === "fixed") && (r3 = n2.offsetLeft, l6 = n2.offsetTop);
  }
  return { width: c2, height: s4, x: r3, y: l6 };
}
function ct(t2, e3) {
  let i4 = O4(t2, true, e3 === "fixed"), o5 = i4.top + t2.clientTop, n2 = i4.left + t2.clientLeft, c2 = d4(t2) ? L4(t2) : j2(1), s4 = t2.clientWidth * c2.x, r3 = t2.clientHeight * c2.y, l6 = n2 * c2.x, f5 = o5 * c2.y;
  return { width: s4, height: r3, x: l6, y: f5 };
}
function k4(t2, e3, i4) {
  let o5;
  if (e3 === "viewport")
    o5 = rt(t2, i4);
  else if (e3 === "document")
    o5 = st(y4(t2));
  else if (S5(e3))
    o5 = ct(e3, i4);
  else {
    let n2 = G4(t2);
    o5 = { ...e3, x: e3.x - n2.x, y: e3.y - n2.y };
  }
  return q3(o5);
}
function P4(t2, e3) {
  let i4 = u4(t2);
  return i4 === e3 || !S5(i4) || w5(i4) ? false : p5(i4).position === "fixed" || P4(i4, e3);
}
function lt(t2, e3) {
  let i4 = e3.get(t2);
  if (i4)
    return i4;
  let o5 = f3(t2, [], false).filter((r3) => S5(r3) && l4(r3) !== "body"), n2 = null, c2 = p5(t2).position === "fixed", s4 = c2 ? u4(t2) : t2;
  for (; S5(s4) && !w5(s4); ) {
    let r3 = p5(s4), l6 = N2(s4);
    !l6 && r3.position === "fixed" && (n2 = null), (c2 ? !l6 && !n2 : !l6 && r3.position === "static" && !!n2 && ["absolute", "fixed"].includes(n2.position) || m3(s4) && !l6 && P4(t2, s4)) ? o5 = o5.filter((p6) => p6 !== s4) : n2 = r3, s4 = u4(s4);
  }
  return e3.set(t2, o5), o5;
}
function ft(t2) {
  let { element: e3, boundary: i4, rootBoundary: o5, strategy: n2 } = t2, s4 = [...i4 === "clippingAncestors" ? lt(e3, this._c) : [].concat(i4), o5], r3 = s4[0], l6 = s4.reduce((f5, p6) => {
    let d9 = k4(e3, p6, n2);
    return f5.top = p4(d9.top, f5.top), f5.right = m2(d9.right, f5.right), f5.bottom = m2(d9.bottom, f5.bottom), f5.left = p4(d9.left, f5.left), f5;
  }, k4(e3, r3, n2));
  return { width: l6.right - l6.left, height: l6.bottom - l6.top, x: l6.left, y: l6.top };
}
function ut(t2) {
  return j4(t2);
}
function ht(t2, e3, i4) {
  let o5 = d4(e3), n2 = y4(e3), c2 = i4 === "fixed", s4 = O4(t2, true, c2, e3), r3 = { scrollLeft: 0, scrollTop: 0 }, l6 = j2(0);
  if (o5 || !o5 && !c2)
    if ((l4(e3) !== "body" || m3(n2)) && (r3 = T4(e3)), o5) {
      let f5 = O4(e3, true, c2, e3);
      l6.x = f5.x + e3.clientLeft, l6.y = f5.y + e3.clientTop;
    } else
      n2 && (l6.x = J4(n2));
  return { x: s4.left + r3.scrollLeft - l6.x, y: s4.top + r3.scrollTop - l6.y, width: s4.width, height: s4.height };
}
function q5(t2, e3) {
  return !d4(t2) || p5(t2).position === "fixed" ? null : e3 ? e3(t2) : t2.offsetParent;
}
function Q4(t2, e3) {
  let i4 = i(t2);
  if (!d4(t2))
    return i4;
  let o5 = q5(t2, e3);
  for (; o5 && E4(o5) && p5(o5).position === "static"; )
    o5 = q5(o5, e3);
  return o5 && (l4(o5) === "html" || l4(o5) === "body" && p5(o5).position === "static" && !N2(o5)) ? i4 : o5 || v2(t2) || i4;
}
var at = async function(t2) {
  let { reference: e3, floating: i4, strategy: o5 } = t2, n2 = this.getOffsetParent || Q4, c2 = this.getDimensions;
  return { reference: ht(e3, await n2(i4), o5), floating: { x: 0, y: 0, ...await c2(i4) } };
};
function dt(t2) {
  return p5(t2).direction === "rtl";
}
var gt = { convertOffsetParentRelativeRectToViewportRelativeRect: ot, getDocumentElement: y4, getClippingRect: ft, getOffsetParent: Q4, getElementRects: at, getClientRects: nt, getDimensions: ut, getScale: L4, isElement: S5, isRTL: dt };
function pt(t2, e3) {
  let i4 = null, o5, n2 = y4(t2);
  function c2() {
    clearTimeout(o5), i4 && i4.disconnect(), i4 = null;
  }
  function s4(r3, l6) {
    r3 === void 0 && (r3 = false), l6 === void 0 && (l6 = 1), c2();
    let { left: f5, top: p6, width: d9, height: w7 } = t2.getBoundingClientRect();
    if (r3 || e3(), !d9 || !w7)
      return;
    let a4 = w4(p6), g7 = w4(n2.clientWidth - (f5 + d9)), h7 = w4(n2.clientHeight - (p6 + w7)), R5 = w4(f5), C6 = { rootMargin: -a4 + "px " + -g7 + "px " + -h7 + "px " + -R5 + "px", threshold: p4(0, m2(1, l6)) || 1 }, W4 = true;
    function M7($4) {
      let D5 = $4[0].intersectionRatio;
      if (D5 !== l6) {
        if (!W4)
          return s4();
        D5 ? s4(false, D5) : o5 = setTimeout(() => {
          s4(false, 1e-7);
        }, 100);
      }
      W4 = false;
    }
    try {
      i4 = new IntersectionObserver(M7, { ...C6, root: n2.ownerDocument });
    } catch {
      i4 = new IntersectionObserver(M7, C6);
    }
    i4.observe(t2);
  }
  return s4(true), c2;
}
function yt(t2, e3, i4, o5) {
  o5 === void 0 && (o5 = {});
  let { ancestorScroll: n2 = true, ancestorResize: c2 = true, elementResize: s4 = typeof ResizeObserver == "function", layoutShift: r3 = typeof IntersectionObserver == "function", animationFrame: l6 = false } = o5, f5 = S6(t2), p6 = n2 || c2 ? [...f5 ? f3(f5) : [], ...f3(e3)] : [];
  p6.forEach((u6) => {
    n2 && u6.addEventListener("scroll", i4, { passive: true }), c2 && u6.addEventListener("resize", i4);
  });
  let d9 = f5 && r3 ? pt(f5, i4) : null, w7 = -1, a4 = null;
  s4 && (a4 = new ResizeObserver((u6) => {
    let [C6] = u6;
    C6 && C6.target === f5 && a4 && (a4.unobserve(e3), cancelAnimationFrame(w7), w7 = requestAnimationFrame(() => {
      a4 && a4.observe(e3);
    })), i4();
  }), f5 && !l6 && a4.observe(f5), a4.observe(e3));
  let g7, h7 = l6 ? O4(t2) : null;
  l6 && R5();
  function R5() {
    let u6 = O4(t2);
    h7 && (u6.x !== h7.x || u6.y !== h7.y || u6.width !== h7.width || u6.height !== h7.height) && i4(), h7 = u6, g7 = requestAnimationFrame(R5);
  }
  return i4(), () => {
    p6.forEach((u6) => {
      n2 && u6.removeEventListener("scroll", i4), c2 && u6.removeEventListener("resize", i4);
    }), d9 && d9(), a4 && a4.disconnect(), a4 = null, l6 && cancelAnimationFrame(g7);
  };
}
var vt = (t2, e3, i4) => {
  let o5 = /* @__PURE__ */ new Map(), n2 = { platform: gt, ...i4 }, c2 = { ...n2.platform, _c: o5 };
  return ae3(t2, e3, { ...n2, platform: c2 });
};

// https://esm.sh/v132/@floating-ui/react-dom@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dom.mjs
var T5 = (e3) => {
  function t2(r3) {
    return {}.hasOwnProperty.call(r3, "current");
  }
  return { name: "arrow", options: e3, fn(r3) {
    let { element: n2, padding: i4 } = typeof e3 == "function" ? e3(r3) : e3;
    return n2 && t2(n2) ? n2.current != null ? fe3({ element: n2.current, padding: i4 }).fn(r3) : {} : n2 ? fe3({ element: n2, padding: i4 }).fn(r3) : {};
  } };
};
var w6 = typeof document < "u" ? S2 : z2;
function h4(e3, t2) {
  if (e3 === t2)
    return true;
  if (typeof e3 != typeof t2)
    return false;
  if (typeof e3 == "function" && e3.toString() === t2.toString())
    return true;
  let r3, n2, i4;
  if (e3 && t2 && typeof e3 == "object") {
    if (Array.isArray(e3)) {
      if (r3 = e3.length, r3 != t2.length)
        return false;
      for (n2 = r3; n2-- !== 0; )
        if (!h4(e3[n2], t2[n2]))
          return false;
      return true;
    }
    if (i4 = Object.keys(e3), r3 = i4.length, r3 !== Object.keys(t2).length)
      return false;
    for (n2 = r3; n2-- !== 0; )
      if (!{}.hasOwnProperty.call(t2, i4[n2]))
        return false;
    for (n2 = r3; n2-- !== 0; ) {
      let d9 = i4[n2];
      if (!(d9 === "_owner" && e3.$$typeof) && !h4(e3[d9], t2[d9]))
        return false;
    }
    return true;
  }
  return e3 !== e3 && t2 !== t2;
}
function z3(e3) {
  return typeof window > "u" ? 1 : (e3.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function L5(e3, t2) {
  let r3 = z3(e3);
  return Math.round(t2 * r3) / r3;
}
function $2(e3) {
  let t2 = L(e3);
  return w6(() => {
    t2.current = e3;
  }), t2;
}
function W3(e3) {
  e3 === void 0 && (e3 = {});
  let { placement: t2 = "bottom", strategy: r3 = "absolute", middleware: n2 = [], platform: i4, elements: { reference: d9, floating: B3 } = {}, transform: D5 = true, whileElementsMounted: U6, open: O6 } = e3, [c2, k5] = I2({ x: 0, y: 0, strategy: r3, placement: t2, middlewareData: {}, isPositioned: false }), [P6, V6] = I2(n2);
  h4(P6, n2) || V6(n2);
  let [G7, E6] = I2(null), [H4, _3] = I2(null), v3 = G2((o5) => {
    o5 != l6.current && (l6.current = o5, E6(o5));
  }, [E6]), C6 = G2((o5) => {
    o5 !== m5.current && (m5.current = o5, _3(o5));
  }, [_3]), u6 = d9 || G7, s4 = B3 || H4, l6 = L(null), m5 = L(null), g7 = L(c2), x7 = $2(U6), M7 = $2(i4), p6 = G2(() => {
    if (!l6.current || !m5.current)
      return;
    let o5 = { placement: t2, strategy: r3, middleware: P6 };
    M7.current && (o5.platform = M7.current), vt(l6.current, m5.current, o5).then((y8) => {
      let R5 = { ...y8, isPositioned: true };
      S9.current && !h4(g7.current, R5) && (g7.current = R5, Re(() => {
        k5(R5);
      }));
    });
  }, [P6, t2, r3, M7]);
  w6(() => {
    O6 === false && g7.current.isPositioned && (g7.current.isPositioned = false, k5((o5) => ({ ...o5, isPositioned: false })));
  }, [O6]);
  let S9 = L(false);
  w6(() => (S9.current = true, () => {
    S9.current = false;
  }), []), w6(() => {
    if (u6 && (l6.current = u6), s4 && (m5.current = s4), u6 && s4) {
      if (x7.current)
        return x7.current(u6, s4, p6);
      p6();
    }
  }, [u6, s4, p6, x7]);
  let F5 = T(() => ({ reference: l6, floating: m5, setReference: v3, setFloating: C6 }), [v3, C6]), a4 = T(() => ({ reference: u6, floating: s4 }), [u6, s4]), j5 = T(() => {
    let o5 = { position: r3, left: 0, top: 0 };
    if (!a4.floating)
      return o5;
    let y8 = L5(a4.floating, c2.x), R5 = L5(a4.floating, c2.y);
    return D5 ? { ...o5, transform: "translate(" + y8 + "px, " + R5 + "px)", ...z3(a4.floating) >= 1.5 && { willChange: "transform" } } : { position: r3, left: y8, top: R5 };
  }, [r3, D5, a4.floating, c2.x, c2.y]);
  return T(() => ({ ...c2, update: p6, refs: F5, elements: a4, floatingStyles: j5 }), [c2, p6, F5, a4, j5]);
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b5 = ee2((n2, t2) => {
  let { children: e3, ...r3 } = n2, o5 = te2.toArray(e3), l6 = o5.find(I3);
  if (l6) {
    let c2 = l6.props.children, a4 = o5.map((m5) => m5 === l6 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m5);
    return re($3, p3({}, r3, { ref: t2 }), m(c2) ? Ee(c2, void 0, a4) : null);
  }
  return re($3, p3({}, r3, { ref: t2 }), e3);
});
b5.displayName = "Slot";
var $3 = ee2((n2, t2) => {
  let { children: e3, ...r3 } = n2;
  return m(e3) ? Ee(e3, { ...X3(r3, e3.props), ref: t2 ? t(t2, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$3.displayName = "SlotClone";
var y5 = ({ children: n2 }) => re(H, null, n2);
function I3(n2) {
  return m(n2) && n2.type === y5;
}
function X3(n2, t2) {
  let e3 = { ...t2 };
  for (let r3 in t2) {
    let o5 = n2[r3], l6 = t2[r3];
    /^on[A-Z]/.test(r3) ? o5 && l6 ? e3[r3] = (...a4) => {
      l6(...a4), o5(...a4);
    } : o5 && (e3[r3] = o5) : r3 === "style" ? e3[r3] = { ...o5, ...l6 } : r3 === "className" && (e3[r3] = [o5, l6].filter(Boolean).join(" "));
  }
  return { ...n2, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d5 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u5 = d5.reduce((t2, e3) => {
  let f5 = ee2((r3, o5) => {
    let { asChild: s4, ...a4 } = r3, i4 = s4 ? b5 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i4, p3({}, a4, { ref: o5 }));
  });
  return f5.displayName = `Primitive.${e3}`, { ...t2, [e3]: f5 };
}, {});
function E5(t2, e3) {
  t2 && Re(() => t2.dispatchEvent(e3));
}

// https://esm.sh/v132/@radix-ui/react-arrow@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-arrow.mjs
var f4 = ee2((e3, t2) => {
  let { children: o5, width: i4 = 10, height: n2 = 5, ...s4 } = e3;
  return re(u5.svg, p3({}, s4, { ref: t2, width: i4, height: n2, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), e3.asChild ? o5 : re("polygon", { points: "0,0 30,0 15,10" }));
});
var b6 = f4;

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-use-size@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-size.mjs
function z4(e3) {
  let [u6, r3] = I2(void 0);
  return e(() => {
    if (e3) {
      r3({ width: e3.offsetWidth, height: e3.offsetHeight });
      let f5 = new ResizeObserver((i4) => {
        if (!Array.isArray(i4) || !i4.length)
          return;
        let b8 = i4[0], t2, o5;
        if ("borderBoxSize" in b8) {
          let s4 = b8.borderBoxSize, d9 = Array.isArray(s4) ? s4[0] : s4;
          t2 = d9.inlineSize, o5 = d9.blockSize;
        } else
          t2 = e3.offsetWidth, o5 = e3.offsetHeight;
        r3({ width: t2, height: o5 });
      });
      return f5.observe(e3, { box: "border-box" }), () => f5.unobserve(e3);
    } else
      r3(void 0);
  }, [e3]), u6;
}

// https://esm.sh/v132/@radix-ui/react-popper@1.1.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-popper.mjs
var M5 = "Popper";
var [T6, tt] = _(M5);
var [Ve, B2] = T6(M5);
var De = (o5) => {
  let { __scopePopper: i4, children: r3 } = o5, [t2, a4] = I2(null);
  return re(Ve, { scope: i4, anchor: t2, onAnchorChange: a4 }, r3);
};
var Re2 = "PopperAnchor";
var Ee2 = ee2((o5, i4) => {
  let { __scopePopper: r3, virtualRef: t2, ...a4 } = o5, e3 = B2(Re2, r3), n2 = L(null), c2 = u2(i4, n2);
  return z2(() => {
    e3.onAnchorChange(t2?.current || n2.current);
  }), t2 ? null : re(u5.div, p3({}, a4, { ref: c2 }));
});
var L6 = "PopperContent";
var [Ne2, He] = T6(L6);
var ze = ee2((o5, i4) => {
  var r3, t2, a4, e3, n2, c2, u6, l6;
  let { __scopePopper: S9, side: s4 = "bottom", sideOffset: Y4 = 0, align: d9 = "center", alignOffset: w7 = 0, arrowPadding: k5 = 0, avoidCollisions: f5 = true, collisionBoundary: h7 = [], collisionPadding: g7 = 0, sticky: p6 = "partial", hideWhenDetached: $4 = false, updatePositionStrategy: Z4 = "optimized", onPlaced: G7, ...E6 } = o5, q8 = B2(L6, S9), [O6, J7] = I2(null), K3 = u2(i4, (P6) => J7(P6)), [V6, Q8] = I2(null), v3 = z4(V6), ee4 = (r3 = v3?.width) !== null && r3 !== void 0 ? r3 : 0, N3 = (t2 = v3?.height) !== null && t2 !== void 0 ? t2 : 0, te4 = s4 + (d9 !== "center" ? "-" + d9 : ""), oe4 = typeof g7 == "number" ? g7 : { top: 0, right: 0, bottom: 0, left: 0, ...g7 }, H4 = Array.isArray(h7) ? h7 : [h7], re3 = H4.length > 0, y8 = { padding: oe4, boundary: H4.filter(je), altBoundary: re3 }, { refs: ae4, floatingStyles: z7, placement: ne3, isPositioned: b8, middlewareData: x7 } = W3({ strategy: "fixed", placement: te4, whileElementsMounted: (...P6) => yt(...P6, { animationFrame: Z4 === "always" }), elements: { reference: q8.anchor }, middleware: [xe2({ mainAxis: Y4 + N3, alignmentAxis: w7 }), f5 && he3({ mainAxis: true, crossAxis: false, limiter: p6 === "partial" ? pe3() : void 0, ...y8 }), f5 && de3({ ...y8 }), we2({ ...y8, apply: ({ elements: P6, rects: W4, availableWidth: pe4, availableHeight: $e }) => {
    let { width: me3, height: ue5 } = W4.reference, _3 = P6.floating.style;
    _3.setProperty("--radix-popper-available-width", `${pe4}px`), _3.setProperty("--radix-popper-available-height", `${$e}px`), _3.setProperty("--radix-popper-anchor-width", `${me3}px`), _3.setProperty("--radix-popper-anchor-height", `${ue5}px`);
  } }), V6 && T5({ element: V6, padding: k5 }), Fe({ arrowWidth: ee4, arrowHeight: N3 }), $4 && ue3({ strategy: "referenceHidden", ...y8 })] }), [I6, ie3] = U3(ne3), A5 = l2(G7);
  e(() => {
    b8 && A5?.();
  }, [b8, A5]);
  let se3 = (a4 = x7.arrow) === null || a4 === void 0 ? void 0 : a4.x, de4 = (e3 = x7.arrow) === null || e3 === void 0 ? void 0 : e3.y, ce3 = ((n2 = x7.arrow) === null || n2 === void 0 ? void 0 : n2.centerOffset) !== 0, [le4, fe4] = I2();
  return e(() => {
    O6 && fe4(window.getComputedStyle(O6).zIndex);
  }, [O6]), re("div", { ref: ae4.setFloating, "data-radix-popper-content-wrapper": "", style: { ...z7, transform: b8 ? z7.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: le4, "--radix-popper-transform-origin": [(c2 = x7.transformOrigin) === null || c2 === void 0 ? void 0 : c2.x, (u6 = x7.transformOrigin) === null || u6 === void 0 ? void 0 : u6.y].join(" ") }, dir: o5.dir }, re(Ne2, { scope: S9, placedSide: I6, onArrowChange: Q8, arrowX: se3, arrowY: de4, shouldHideArrow: ce3 }, re(u5.div, p3({ "data-side": I6, "data-align": ie3 }, E6, { ref: K3, style: { ...E6.style, animation: b8 ? void 0 : "none", opacity: (l6 = x7.hide) !== null && l6 !== void 0 && l6.referenceHidden ? 0 : void 0 } }))));
});
var Ie = "PopperArrow";
var We = { top: "bottom", right: "left", bottom: "top", left: "right" };
var Xe = ee2(function(i4, r3) {
  let { __scopePopper: t2, ...a4 } = i4, e3 = He(Ie, t2), n2 = We[e3.placedSide];
  return re("span", { ref: e3.onArrowChange, style: { position: "absolute", left: e3.arrowX, top: e3.arrowY, [n2]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e3.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e3.placedSide], visibility: e3.shouldHideArrow ? "hidden" : void 0 } }, re(b6, p3({}, a4, { ref: r3, style: { ...a4.style, display: "block" } })));
});
function je(o5) {
  return o5 !== null;
}
var Fe = (o5) => ({ name: "transformOrigin", options: o5, fn(i4) {
  var r3, t2, a4, e3, n2;
  let { placement: c2, rects: u6, middlewareData: l6 } = i4, s4 = ((r3 = l6.arrow) === null || r3 === void 0 ? void 0 : r3.centerOffset) !== 0, Y4 = s4 ? 0 : o5.arrowWidth, d9 = s4 ? 0 : o5.arrowHeight, [w7, k5] = U3(c2), f5 = { start: "0%", center: "50%", end: "100%" }[k5], h7 = ((t2 = (a4 = l6.arrow) === null || a4 === void 0 ? void 0 : a4.x) !== null && t2 !== void 0 ? t2 : 0) + Y4 / 2, g7 = ((e3 = (n2 = l6.arrow) === null || n2 === void 0 ? void 0 : n2.y) !== null && e3 !== void 0 ? e3 : 0) + d9 / 2, p6 = "", $4 = "";
  return w7 === "bottom" ? (p6 = s4 ? f5 : `${h7}px`, $4 = `${-d9}px`) : w7 === "top" ? (p6 = s4 ? f5 : `${h7}px`, $4 = `${u6.floating.height + d9}px`) : w7 === "right" ? (p6 = `${-d9}px`, $4 = s4 ? f5 : `${g7}px`) : w7 === "left" && (p6 = `${u6.floating.width + d9}px`, $4 = s4 ? f5 : `${g7}px`), { data: { x: p6, y: $4 } };
} });
function U3(o5) {
  let [i4, r3 = "center"] = o5.split("-");
  return [i4, r3];
}
var ot2 = De;
var rt2 = Ee2;
var at2 = ze;
var nt2 = Xe;

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m4 = ee2((r3, a4) => {
  var e3;
  let { container: o5 = globalThis == null || (e3 = globalThis.document) === null || e3 === void 0 ? void 0 : e3.body, ...t2 } = r3;
  return o5 ? Te.createPortal(re(u5.div, p3({}, t2, { ref: a4 })), o5) : null;
});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S7(n2, t2) {
  return R2((o5, r3) => {
    let i4 = t2[o5][r3];
    return i4 ?? o5;
  }, n2);
}
var U4 = (n2) => {
  let { present: t2, children: o5 } = n2, r3 = y6(t2), i4 = typeof o5 == "function" ? o5({ present: r3.isPresent }) : te2.only(o5), a4 = u2(r3.ref, i4.ref);
  return typeof o5 == "function" || r3.isPresent ? Ee(i4, { ref: a4 }) : null;
};
U4.displayName = "Presence";
function y6(n2) {
  let [t2, o5] = I2(), r3 = L({}), i4 = L(n2), a4 = L("none"), N3 = n2 ? "mounted" : "unmounted", [f5, s4] = S7(N3, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e3 = d6(r3.current);
    a4.current = f5 === "mounted" ? e3 : "none";
  }, [f5]), e(() => {
    let e3 = r3.current, u6 = i4.current;
    if (u6 !== n2) {
      let $4 = a4.current, m5 = d6(e3);
      n2 ? s4("MOUNT") : m5 === "none" || e3?.display === "none" ? s4("UNMOUNT") : s4(u6 && $4 !== m5 ? "ANIMATION_OUT" : "UNMOUNT"), i4.current = n2;
    }
  }, [n2, s4]), e(() => {
    if (t2) {
      let e3 = (c2) => {
        let m5 = d6(r3.current).includes(c2.animationName);
        c2.target === t2 && m5 && Re(() => s4("ANIMATION_END"));
      }, u6 = (c2) => {
        c2.target === t2 && (a4.current = d6(r3.current));
      };
      return t2.addEventListener("animationstart", u6), t2.addEventListener("animationcancel", e3), t2.addEventListener("animationend", e3), () => {
        t2.removeEventListener("animationstart", u6), t2.removeEventListener("animationcancel", e3), t2.removeEventListener("animationend", e3);
      };
    } else
      s4("ANIMATION_END");
  }, [t2, s4]), { isPresent: ["mounted", "unmountSuspended"].includes(f5), ref: G2((e3) => {
    e3 && (r3.current = getComputedStyle(e3)), o5(e3);
  }, []) };
}
function d6(n2) {
  return n2?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i2(d9, e3 = globalThis?.document) {
  let a4 = l2(d9);
  z2(() => {
    let o5 = (s4) => {
      s4.key === "Escape" && a4(s4);
    };
    return e3.addEventListener("keydown", o5), () => e3.removeEventListener("keydown", o5);
  }, [a4, e3]);
}

// https://esm.sh/v132/@radix-ui/react-dismissable-layer@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dismissable-layer.mjs
var h5 = "dismissableLayer.update";
var X4 = "dismissableLayer.pointerDownOutside";
var Y2 = "dismissableLayer.focusOutside";
var g4;
var F4 = ve({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var G5 = ee2((n2, e3) => {
  var o5;
  let { disableOutsidePointerEvents: i4 = false, onEscapeKeyDown: t2, onPointerDownOutside: r3, onFocusOutside: f5, onInteractOutside: d9, onDismiss: l6, ...v3 } = n2, a4 = J2(F4), [c2, S9] = I2(null), u6 = (o5 = c2?.ownerDocument) !== null && o5 !== void 0 ? o5 : globalThis?.document, [, W4] = I2({}), A5 = u2(e3, (s4) => S9(s4)), y8 = Array.from(a4.layers), [N3] = [...a4.layersWithOutsidePointerEventsDisabled].slice(-1), _3 = y8.indexOf(N3), D5 = c2 ? y8.indexOf(c2) : -1, U6 = a4.layersWithOutsidePointerEventsDisabled.size > 0, w7 = D5 >= _3, z7 = Q5((s4) => {
    let $4 = s4.target, P6 = [...a4.branches].some((E6) => E6.contains($4));
    !w7 || P6 || (r3?.(s4), d9?.(s4), s4.defaultPrevented || l6?.());
  }, u6), O6 = V3((s4) => {
    let $4 = s4.target;
    [...a4.branches].some((E6) => E6.contains($4)) || (f5?.(s4), d9?.(s4), s4.defaultPrevented || l6?.());
  }, u6);
  return i2((s4) => {
    D5 === a4.layers.size - 1 && (t2?.(s4), !s4.defaultPrevented && l6 && (s4.preventDefault(), l6()));
  }, u6), z2(() => {
    if (c2)
      return i4 && (a4.layersWithOutsidePointerEventsDisabled.size === 0 && (g4 = u6.body.style.pointerEvents, u6.body.style.pointerEvents = "none"), a4.layersWithOutsidePointerEventsDisabled.add(c2)), a4.layers.add(c2), L7(), () => {
        i4 && a4.layersWithOutsidePointerEventsDisabled.size === 1 && (u6.body.style.pointerEvents = g4);
      };
  }, [c2, u6, i4, a4]), z2(() => () => {
    c2 && (a4.layers.delete(c2), a4.layersWithOutsidePointerEventsDisabled.delete(c2), L7());
  }, [c2, a4]), z2(() => {
    let s4 = () => W4({});
    return document.addEventListener(h5, s4), () => document.removeEventListener(h5, s4);
  }, []), re(u5.div, p3({}, v3, { ref: A5, style: { pointerEvents: U6 ? w7 ? "auto" : "none" : void 0, ...n2.style }, onFocusCapture: o3(n2.onFocusCapture, O6.onFocusCapture), onBlurCapture: o3(n2.onBlurCapture, O6.onBlurCapture), onPointerDownCapture: o3(n2.onPointerDownCapture, z7.onPointerDownCapture) }));
});
var J5 = ee2((n2, e3) => {
  let o5 = J2(F4), i4 = L(null), t2 = u2(e3, i4);
  return z2(() => {
    let r3 = i4.current;
    if (r3)
      return o5.branches.add(r3), () => {
        o5.branches.delete(r3);
      };
  }, [o5.branches]), re(u5.div, p3({}, n2, { ref: t2 }));
});
function Q5(n2, e3 = globalThis?.document) {
  let o5 = l2(n2), i4 = L(false), t2 = L(() => {
  });
  return z2(() => {
    let r3 = (d9) => {
      if (d9.target && !i4.current) {
        let v3 = function() {
          I4(X4, o5, l6, { discrete: true });
        }, l6 = { originalEvent: d9 };
        d9.pointerType === "touch" ? (e3.removeEventListener("click", t2.current), t2.current = v3, e3.addEventListener("click", t2.current, { once: true })) : v3();
      } else
        e3.removeEventListener("click", t2.current);
      i4.current = false;
    }, f5 = window.setTimeout(() => {
      e3.addEventListener("pointerdown", r3);
    }, 0);
    return () => {
      window.clearTimeout(f5), e3.removeEventListener("pointerdown", r3), e3.removeEventListener("click", t2.current);
    };
  }, [e3, o5]), { onPointerDownCapture: () => i4.current = true };
}
function V3(n2, e3 = globalThis?.document) {
  let o5 = l2(n2), i4 = L(false);
  return z2(() => {
    let t2 = (r3) => {
      r3.target && !i4.current && I4(Y2, o5, { originalEvent: r3 }, { discrete: false });
    };
    return e3.addEventListener("focusin", t2), () => e3.removeEventListener("focusin", t2);
  }, [e3, o5]), { onFocusCapture: () => i4.current = true, onBlurCapture: () => i4.current = false };
}
function L7() {
  let n2 = new CustomEvent(h5);
  document.dispatchEvent(n2);
}
function I4(n2, e3, o5, { discrete: i4 }) {
  let t2 = o5.originalEvent.target, r3 = new CustomEvent(n2, { bubbles: false, cancelable: true, detail: o5 });
  e3 && t2.addEventListener(n2, e3, { once: true }), i4 ? E5(t2, r3) : t2.dispatchEvent(r3);
}

// https://esm.sh/v132/@radix-ui/react-hover-card@1.0.7/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-hover-card.mjs
var g5;
var D3 = "HoverCard";
var [T7, ue4] = _(D3, [tt]);
var x5 = tt();
var [V4, O5] = T7(D3);
var q6 = (e3) => {
  let { __scopeHoverCard: t2, children: r3, open: c2, defaultOpen: n2, onOpenChange: a4, openDelay: $4 = 700, closeDelay: u6 = 300 } = e3, i4 = x5(t2), v3 = L(0), l6 = L(0), S9 = L(false), p6 = L(false), [R5 = false, o5] = w3({ prop: c2, defaultProp: n2, onChange: a4 }), f5 = G2(() => {
    clearTimeout(l6.current), v3.current = window.setTimeout(() => o5(true), $4);
  }, [$4, o5]), E6 = G2(() => {
    clearTimeout(v3.current), !S9.current && !p6.current && (l6.current = window.setTimeout(() => o5(false), u6));
  }, [u6, o5]), W4 = G2(() => o5(false), [o5]);
  return z2(() => () => {
    clearTimeout(v3.current), clearTimeout(l6.current);
  }, []), re(V4, { scope: t2, open: R5, onOpenChange: o5, onOpen: f5, onClose: E6, onDismiss: W4, hasSelectionRef: S9, isPointerDownOnContentRef: p6 }, re(ot2, i4, r3));
};
var z5 = "HoverCardTrigger";
var J6 = ee2((e3, t2) => {
  let { __scopeHoverCard: r3, ...c2 } = e3, n2 = O5(z5, r3), a4 = x5(r3);
  return re(rt2, p3({ asChild: true }, a4), re(u5.a, p3({ "data-state": n2.open ? "open" : "closed" }, c2, { ref: t2, onPointerEnter: o3(e3.onPointerEnter, b7(n2.onOpen)), onPointerLeave: o3(e3.onPointerLeave, b7(n2.onClose)), onFocus: o3(e3.onFocus, n2.onOpen), onBlur: o3(e3.onBlur, n2.onClose), onTouchStart: o3(e3.onTouchStart, ($4) => $4.preventDefault()) })));
});
var y7 = "HoverCardPortal";
var [Q6, X5] = T7(y7, { forceMount: void 0 });
var _2 = "HoverCardContent";
var Z2 = ee2((e3, t2) => {
  let r3 = X5(_2, e3.__scopeHoverCard), { forceMount: c2 = r3.forceMount, ...n2 } = e3, a4 = O5(_2, e3.__scopeHoverCard);
  return re(U4, { present: c2 || a4.open }, re(ee3, p3({ "data-state": a4.open ? "open" : "closed" }, n2, { onPointerEnter: o3(e3.onPointerEnter, b7(a4.onOpen)), onPointerLeave: o3(e3.onPointerLeave, b7(a4.onClose)), ref: t2 })));
});
var ee3 = ee2((e3, t2) => {
  let { __scopeHoverCard: r3, onEscapeKeyDown: c2, onPointerDownOutside: n2, onFocusOutside: a4, onInteractOutside: $4, ...u6 } = e3, i4 = O5(_2, r3), v3 = x5(r3), l6 = L(null), S9 = u2(t2, l6), [p6, R5] = I2(false);
  return z2(() => {
    if (p6) {
      let o5 = document.body;
      return g5 = o5.style.userSelect || o5.style.webkitUserSelect, o5.style.userSelect = "none", o5.style.webkitUserSelect = "none", () => {
        o5.style.userSelect = g5, o5.style.webkitUserSelect = g5;
      };
    }
  }, [p6]), z2(() => {
    if (l6.current) {
      let o5 = () => {
        R5(false), i4.isPointerDownOnContentRef.current = false, setTimeout(() => {
          var f5;
          ((f5 = document.getSelection()) === null || f5 === void 0 ? void 0 : f5.toString()) !== "" && (i4.hasSelectionRef.current = true);
        });
      };
      return document.addEventListener("pointerup", o5), () => {
        document.removeEventListener("pointerup", o5), i4.hasSelectionRef.current = false, i4.isPointerDownOnContentRef.current = false;
      };
    }
  }, [i4.isPointerDownOnContentRef, i4.hasSelectionRef]), z2(() => {
    l6.current && te3(l6.current).forEach((f5) => f5.setAttribute("tabindex", "-1"));
  }), re(G5, { asChild: true, disableOutsidePointerEvents: false, onInteractOutside: $4, onEscapeKeyDown: c2, onPointerDownOutside: n2, onFocusOutside: o3(a4, (o5) => {
    o5.preventDefault();
  }), onDismiss: i4.onDismiss }, re(at2, p3({}, v3, u6, { onPointerDown: o3(u6.onPointerDown, (o5) => {
    o5.currentTarget.contains(o5.target) && R5(true), i4.hasSelectionRef.current = false, i4.isPointerDownOnContentRef.current = true;
  }), ref: S9, style: { ...u6.style, userSelect: p6 ? "text" : void 0, WebkitUserSelect: p6 ? "text" : void 0, "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)", "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)", "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)", "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)" } })));
});
var oe3 = ee2((e3, t2) => {
  let { __scopeHoverCard: r3, ...c2 } = e3, n2 = x5(r3);
  return re(nt2, p3({}, n2, c2, { ref: t2 }));
});
function b7(e3) {
  return (t2) => t2.pointerType === "touch" ? void 0 : e3();
}
function te3(e3) {
  let t2 = [], r3 = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode: (c2) => c2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
  for (; r3.nextNode(); )
    t2.push(r3.currentNode);
  return t2;
}
var ve3 = q6;
var Ce2 = J6;
var Se2 = Z2;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o4(r3) {
  var f5, n2, t2 = "";
  if (typeof r3 == "string" || typeof r3 == "number")
    t2 += r3;
  else if (typeof r3 == "object")
    if (Array.isArray(r3))
      for (f5 = 0; f5 < r3.length; f5++)
        r3[f5] && (n2 = o4(r3[f5])) && (t2 && (t2 += " "), t2 += n2);
    else
      for (f5 in r3)
        r3[f5] && (t2 && (t2 += " "), t2 += f5);
  return t2;
}
function e2() {
  for (var r3, f5, n2 = 0, t2 = ""; n2 < arguments.length; )
    (r3 = arguments[n2++]) && (f5 = o4(r3)) && (t2 && (t2 += " "), t2 += f5);
  return t2;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r3, e3) => {
  for (var t2 in e3)
    Ar(r3, t2, { get: e3[t2], enumerable: true });
};
function U5() {
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
  var e3 = Sr(r3), t2 = r3.conflictingClassGroups, o5 = r3.conflictingClassGroupModifiers, a4 = o5 === void 0 ? {} : o5;
  function s4(i4) {
    var c2 = i4.split(Z3);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e3) || kr(i4);
  }
  function n2(i4, c2) {
    var u6 = t2[i4] || [];
    return c2 && a4[i4] ? [].concat(u6, a4[i4]) : u6;
  }
  return { getClassGroupId: s4, getConflictingClassGroupIds: n2 };
}
function pr(r3, e3) {
  if (r3.length === 0)
    return e3.classGroupId;
  var t2 = r3[0], o5 = e3.nextPart.get(t2), a4 = o5 ? pr(r3.slice(1), o5) : void 0;
  if (a4)
    return a4;
  if (e3.validators.length !== 0) {
    var s4 = r3.join(Z3);
    return e3.validators.find(function(n2) {
      var i4 = n2.validator;
      return i4(s4);
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
  var e3 = r3.theme, t2 = r3.prefix, o5 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a4 = Gr(Object.entries(r3.classGroups), t2);
  return a4.forEach(function(s4) {
    var n2 = s4[0], i4 = s4[1];
    q7(i4, o5, n2, e3);
  }), o5;
}
function q7(r3, e3, t2, o5) {
  r3.forEach(function(a4) {
    if (typeof a4 == "string") {
      var s4 = a4 === "" ? e3 : cr(e3, a4);
      s4.classGroupId = t2;
      return;
    }
    if (typeof a4 == "function") {
      if (zr(a4)) {
        q7(a4(o5), e3, t2, o5);
        return;
      }
      e3.validators.push({ validator: a4, classGroupId: t2 });
      return;
    }
    Object.entries(a4).forEach(function(n2) {
      var i4 = n2[0], c2 = n2[1];
      q7(c2, cr(e3, i4), t2, o5);
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
    var o5 = t2[0], a4 = t2[1], s4 = a4.map(function(n2) {
      return typeof n2 == "string" ? e3 + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(function(i4) {
        var c2 = i4[0], u6 = i4[1];
        return [e3 + c2, u6];
      })) : n2;
    });
    return [o5, s4];
  }) : r3;
}
function fr(r3) {
  if (r3 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e3 = 0, t2 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map();
  function a4(s4, n2) {
    t2.set(s4, n2), e3++, e3 > r3 && (e3 = 0, o5 = t2, t2 = /* @__PURE__ */ new Map());
  }
  return { get: function(n2) {
    var i4 = t2.get(n2);
    if (i4 !== void 0)
      return i4;
    if ((i4 = o5.get(n2)) !== void 0)
      return a4(n2, i4), i4;
  }, set: function(n2, i4) {
    t2.has(n2) ? t2.set(n2, i4) : a4(n2, i4);
  } };
}
var X6 = "!";
function br(r3) {
  var e3 = r3.separator || ":", t2 = e3.length === 1, o5 = e3[0], a4 = e3.length;
  return function(n2) {
    for (var i4 = [], c2 = 0, u6 = 0, b8, f5 = 0; f5 < n2.length; f5++) {
      var g7 = n2[f5];
      if (c2 === 0) {
        if (g7 === o5 && (t2 || n2.slice(f5, f5 + a4) === e3)) {
          i4.push(n2.slice(u6, f5)), u6 = f5 + a4;
          continue;
        }
        if (g7 === "/") {
          b8 = f5;
          continue;
        }
      }
      g7 === "[" ? c2++ : g7 === "]" && c2--;
    }
    var y8 = i4.length === 0 ? n2 : n2.substring(u6), x7 = y8.startsWith(X6), m5 = x7 ? y8.substring(1) : y8, w7 = b8 && b8 > u6 ? b8 - u6 : void 0;
    return { modifiers: i4, hasImportantModifier: x7, baseClassName: m5, maybePostfixModifierPosition: w7 };
  };
}
function gr(r3) {
  if (r3.length <= 1)
    return r3;
  var e3 = [], t2 = [];
  return r3.forEach(function(o5) {
    var a4 = o5[0] === "[";
    a4 ? (e3.push.apply(e3, t2.sort().concat([o5])), t2 = []) : t2.push(o5);
  }), e3.push.apply(e3, t2.sort()), e3;
}
function mr(r3) {
  return { cache: fr(r3.cacheSize), splitModifiers: br(r3), ...ur(r3) };
}
var Ir = /\s+/;
function vr(r3, e3) {
  var t2 = e3.splitModifiers, o5 = e3.getClassGroupId, a4 = e3.getConflictingClassGroupIds, s4 = /* @__PURE__ */ new Set();
  return r3.trim().split(Ir).map(function(n2) {
    var i4 = t2(n2), c2 = i4.modifiers, u6 = i4.hasImportantModifier, b8 = i4.baseClassName, f5 = i4.maybePostfixModifierPosition, g7 = o5(f5 ? b8.substring(0, f5) : b8), y8 = !!f5;
    if (!g7) {
      if (!f5)
        return { isTailwindClass: false, originalClassName: n2 };
      if (g7 = o5(b8), !g7)
        return { isTailwindClass: false, originalClassName: n2 };
      y8 = false;
    }
    var x7 = gr(c2).join(":"), m5 = u6 ? x7 + X6 : x7;
    return { isTailwindClass: true, modifierId: m5, classGroupId: g7, originalClassName: n2, hasPostfixModifier: y8 };
  }).reverse().filter(function(n2) {
    if (!n2.isTailwindClass)
      return true;
    var i4 = n2.modifierId, c2 = n2.classGroupId, u6 = n2.hasPostfixModifier, b8 = i4 + c2;
    return s4.has(b8) ? false : (s4.add(b8), a4(c2, u6).forEach(function(f5) {
      return s4.add(i4 + f5);
    }), true);
  }).reverse().map(function(n2) {
    return n2.originalClassName;
  }).join(" ");
}
function P5() {
  for (var r3 = arguments.length, e3 = new Array(r3), t2 = 0; t2 < r3; t2++)
    e3[t2] = arguments[t2];
  var o5, a4, s4, n2 = i4;
  function i4(u6) {
    var b8 = e3[0], f5 = e3.slice(1), g7 = f5.reduce(function(y8, x7) {
      return x7(y8);
    }, b8());
    return o5 = mr(g7), a4 = o5.cache.get, s4 = o5.cache.set, n2 = c2, c2(u6);
  }
  function c2(u6) {
    var b8 = a4(u6);
    if (b8)
      return b8;
    var f5 = vr(u6, o5);
    return s4(u6, f5), f5;
  }
  return function() {
    return n2(U5.apply(null, arguments));
  };
}
function d7(r3) {
  var e3 = function(o5) {
    return o5[r3] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G6, isArbitraryLength: () => L8, isArbitraryNumber: () => S8, isArbitraryPosition: () => Q7, isArbitraryShadow: () => D4, isArbitrarySize: () => H3, isArbitraryUrl: () => V5, isArbitraryValue: () => l5, isArbitraryWeight: () => Wr, isInteger: () => z6, isLength: () => h6, isNumber: () => M6, isPercent: () => Y3, isTshirtSize: () => C5 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h6(r3) {
  return M6(r3) || Tr.has(r3) || Pr.test(r3) || L8(r3);
}
function L8(r3) {
  return I5(r3, "length", Er);
}
function H3(r3) {
  return I5(r3, "size", xr);
}
function Q7(r3) {
  return I5(r3, "position", xr);
}
function V5(r3) {
  return I5(r3, "url", jr);
}
function S8(r3) {
  return I5(r3, "number", M6);
}
var Wr = S8;
function M6(r3) {
  return !Number.isNaN(Number(r3));
}
function Y3(r3) {
  return r3.endsWith("%") && M6(r3.slice(0, -1));
}
function z6(r3) {
  return hr(r3) || I5(r3, "number", hr);
}
function l5(r3) {
  return yr.test(r3);
}
function G6() {
  return true;
}
function C5(r3) {
  return Rr.test(r3);
}
function D4(r3) {
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
function T8() {
  var r3 = d7("colors"), e3 = d7("spacing"), t2 = d7("blur"), o5 = d7("brightness"), a4 = d7("borderColor"), s4 = d7("borderRadius"), n2 = d7("borderSpacing"), i4 = d7("borderWidth"), c2 = d7("contrast"), u6 = d7("grayscale"), b8 = d7("hueRotate"), f5 = d7("invert"), g7 = d7("gap"), y8 = d7("gradientColorStops"), x7 = d7("gradientColorStopPositions"), m5 = d7("inset"), w7 = d7("margin"), k5 = d7("opacity"), A5 = d7("padding"), K3 = d7("saturate"), O6 = d7("scale"), rr = d7("sepia"), er = d7("skew"), tr = d7("space"), or = d7("translate"), $4 = function() {
    return ["auto", "contain", "none"];
  }, B3 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F5 = function() {
    return ["auto", l5, e3];
  }, p6 = function() {
    return [l5, e3];
  }, nr = function() {
    return ["", h6];
  }, W4 = function() {
    return ["auto", M6, l5];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E6 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J7 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R5 = function() {
    return ["", "0", l5];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N3 = function() {
    return [M6, S8];
  }, j5 = function() {
    return [M6, l5];
  };
  return { cacheSize: 500, theme: { colors: [G6], spacing: [h6], blur: ["none", "", C5, l5], brightness: N3(), borderColor: [r3], borderRadius: ["none", "", "full", C5, l5], borderSpacing: p6(), borderWidth: nr(), contrast: N3(), grayscale: R5(), hueRotate: j5(), invert: R5(), gap: p6(), gradientColorStops: [r3], gradientColorStopPositions: [Y3, L8], inset: F5(), margin: F5(), opacity: N3(), padding: p6(), saturate: N3(), scale: N3(), sepia: R5(), skew: j5(), space: p6(), translate: p6() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l5] }], container: ["container"], columns: [{ columns: [C5] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l5]) }], overflow: [{ overflow: B3() }], "overflow-x": [{ "overflow-x": B3() }], "overflow-y": [{ "overflow-y": B3() }], overscroll: [{ overscroll: $4() }], "overscroll-x": [{ "overscroll-x": $4() }], "overscroll-y": [{ "overscroll-y": $4() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m5] }], "inset-x": [{ "inset-x": [m5] }], "inset-y": [{ "inset-y": [m5] }], start: [{ start: [m5] }], end: [{ end: [m5] }], top: [{ top: [m5] }], right: [{ right: [m5] }], bottom: [{ bottom: [m5] }], left: [{ left: [m5] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z6] }], basis: [{ basis: F5() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l5] }], grow: [{ grow: R5() }], shrink: [{ shrink: R5() }], order: [{ order: ["first", "last", "none", z6] }], "grid-cols": [{ "grid-cols": [G6] }], "col-start-end": [{ col: ["auto", { span: ["full", z6] }, l5] }], "col-start": [{ "col-start": W4() }], "col-end": [{ "col-end": W4() }], "grid-rows": [{ "grid-rows": [G6] }], "row-start-end": [{ row: ["auto", { span: [z6] }, l5] }], "row-start": [{ "row-start": W4() }], "row-end": [{ "row-end": W4() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l5] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l5] }], gap: [{ gap: [g7] }], "gap-x": [{ "gap-x": [g7] }], "gap-y": [{ "gap-y": [g7] }], "justify-content": [{ justify: ["normal"].concat(J7()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J7(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J7(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A5] }], px: [{ px: [A5] }], py: [{ py: [A5] }], ps: [{ ps: [A5] }], pe: [{ pe: [A5] }], pt: [{ pt: [A5] }], pr: [{ pr: [A5] }], pb: [{ pb: [A5] }], pl: [{ pl: [A5] }], m: [{ m: [w7] }], mx: [{ mx: [w7] }], my: [{ my: [w7] }], ms: [{ ms: [w7] }], me: [{ me: [w7] }], mt: [{ mt: [w7] }], mr: [{ mr: [w7] }], mb: [{ mb: [w7] }], ml: [{ ml: [w7] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l5, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l5, h6] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C5] }, C5, l5] }], h: [{ h: [l5, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l5, h6] }], "max-h": [{ "max-h": [l5, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C5, L8] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S8] }], "font-family": [{ font: [G6] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l5] }], "line-clamp": [{ "line-clamp": ["none", M6, S8] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l5, h6] }], "list-image": [{ "list-image": ["none", l5] }], "list-style-type": [{ list: ["none", "disc", "decimal", l5] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r3] }], "placeholder-opacity": [{ "placeholder-opacity": [k5] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r3] }], "text-opacity": [{ "text-opacity": [k5] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E6(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h6] }], "underline-offset": [{ "underline-offset": ["auto", l5, h6] }], "text-decoration-color": [{ decoration: [r3] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p6() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l5] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l5] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k5] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q7]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V5] }], "bg-color": [{ bg: [r3] }], "gradient-from-pos": [{ from: [x7] }], "gradient-via-pos": [{ via: [x7] }], "gradient-to-pos": [{ to: [x7] }], "gradient-from": [{ from: [y8] }], "gradient-via": [{ via: [y8] }], "gradient-to": [{ to: [y8] }], rounded: [{ rounded: [s4] }], "rounded-s": [{ "rounded-s": [s4] }], "rounded-e": [{ "rounded-e": [s4] }], "rounded-t": [{ "rounded-t": [s4] }], "rounded-r": [{ "rounded-r": [s4] }], "rounded-b": [{ "rounded-b": [s4] }], "rounded-l": [{ "rounded-l": [s4] }], "rounded-ss": [{ "rounded-ss": [s4] }], "rounded-se": [{ "rounded-se": [s4] }], "rounded-ee": [{ "rounded-ee": [s4] }], "rounded-es": [{ "rounded-es": [s4] }], "rounded-tl": [{ "rounded-tl": [s4] }], "rounded-tr": [{ "rounded-tr": [s4] }], "rounded-br": [{ "rounded-br": [s4] }], "rounded-bl": [{ "rounded-bl": [s4] }], "border-w": [{ border: [i4] }], "border-w-x": [{ "border-x": [i4] }], "border-w-y": [{ "border-y": [i4] }], "border-w-s": [{ "border-s": [i4] }], "border-w-e": [{ "border-e": [i4] }], "border-w-t": [{ "border-t": [i4] }], "border-w-r": [{ "border-r": [i4] }], "border-w-b": [{ "border-b": [i4] }], "border-w-l": [{ "border-l": [i4] }], "border-opacity": [{ "border-opacity": [k5] }], "border-style": [{ border: [].concat(E6(), ["hidden"]) }], "divide-x": [{ "divide-x": [i4] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i4] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k5] }], "divide-style": [{ divide: E6() }], "border-color": [{ border: [a4] }], "border-color-x": [{ "border-x": [a4] }], "border-color-y": [{ "border-y": [a4] }], "border-color-t": [{ "border-t": [a4] }], "border-color-r": [{ "border-r": [a4] }], "border-color-b": [{ "border-b": [a4] }], "border-color-l": [{ "border-l": [a4] }], "divide-color": [{ divide: [a4] }], "outline-style": [{ outline: [""].concat(E6()) }], "outline-offset": [{ "outline-offset": [l5, h6] }], "outline-w": [{ outline: [h6] }], "outline-color": [{ outline: [r3] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r3] }], "ring-opacity": [{ "ring-opacity": [k5] }], "ring-offset-w": [{ "ring-offset": [h6] }], "ring-offset-color": [{ "ring-offset": [r3] }], shadow: [{ shadow: ["", "inner", "none", C5, D4] }], "shadow-color": [{ shadow: [G6] }], opacity: [{ opacity: [k5] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t2] }], brightness: [{ brightness: [o5] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C5, l5] }], grayscale: [{ grayscale: [u6] }], "hue-rotate": [{ "hue-rotate": [b8] }], invert: [{ invert: [f5] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t2] }], "backdrop-brightness": [{ "backdrop-brightness": [o5] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u6] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b8] }], "backdrop-invert": [{ "backdrop-invert": [f5] }], "backdrop-opacity": [{ "backdrop-opacity": [k5] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n2] }], "border-spacing-x": [{ "border-spacing-x": [n2] }], "border-spacing-y": [{ "border-spacing-y": [n2] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l5] }], duration: [{ duration: j5() }], ease: [{ ease: ["linear", "in", "out", "in-out", l5] }], delay: [{ delay: j5() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l5] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O6] }], "scale-x": [{ "scale-x": [O6] }], "scale-y": [{ "scale-y": [O6] }], rotate: [{ rotate: [z6, l5] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l5] }], accent: [{ accent: ["auto", r3] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l5] }], "caret-color": [{ caret: [r3] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p6() }], "scroll-mx": [{ "scroll-mx": p6() }], "scroll-my": [{ "scroll-my": p6() }], "scroll-ms": [{ "scroll-ms": p6() }], "scroll-me": [{ "scroll-me": p6() }], "scroll-mt": [{ "scroll-mt": p6() }], "scroll-mr": [{ "scroll-mr": p6() }], "scroll-mb": [{ "scroll-mb": p6() }], "scroll-ml": [{ "scroll-ml": p6() }], "scroll-p": [{ "scroll-p": p6() }], "scroll-px": [{ "scroll-px": p6() }], "scroll-py": [{ "scroll-py": p6() }], "scroll-ps": [{ "scroll-ps": p6() }], "scroll-pe": [{ "scroll-pe": p6() }], "scroll-pt": [{ "scroll-pt": p6() }], "scroll-pr": [{ "scroll-pr": p6() }], "scroll-pb": [{ "scroll-pb": p6() }], "scroll-pl": [{ "scroll-pl": p6() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l5] }], fill: [{ fill: [r3, "none"] }], "stroke-w": [{ stroke: [h6, S8] }], stroke: [{ stroke: [r3, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P5(T8);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d8 = 0;
var x6 = Array.isArray;
function g6(t2, r3, e3, a4, o5, i4) {
  var s4, n2, f5 = {};
  for (n2 in r3)
    n2 == "ref" ? s4 = r3[n2] : f5[n2] = r3[n2];
  var u6 = { type: t2, props: f5, key: e3, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d8, __i: -1, __u: 0, __source: o5, __self: i4 };
  if (typeof t2 == "function" && (s4 = t2.defaultProps))
    for (n2 in s4)
      f5[n2] === void 0 && (f5[n2] = s4[n2]);
  return a.vnode && a.vnode(u6), u6;
}

// ../components/ui/hover-card.tsx
var HoverCard = ve3;
var HoverCardTrigger = Ce2;
var HoverCardContent = ee2(({ class: className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ g6(
  Se2,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "animate-in zoom-in-90 z-50 w-64 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none dark:border-slate-800 dark:bg-slate-800",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = Se2.displayName;
export {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
};
