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
  var i2, n2, r3, l4 = {};
  for (r3 in _3)
    r3 == "key" ? i2 = _3[r3] : r3 == "ref" ? n2 = _3[r3] : l4[r3] = _3[r3];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e3 == "function" && e3.defaultProps != null)
    for (r3 in e3.defaultProps)
      l4[r3] === void 0 && (l4[r3] = e3.defaultProps[r3]);
  return S(e3, l4, i2, n2, null);
}
function S(e3, _3, t2, i2, n2) {
  var r3 = { type: e3, props: _3, key: t2, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n2 ?? ++Q, __i: -1, __u: 0 };
  return n2 == null && a.vnode != null && a.vnode(r3), r3;
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
  var i2, n2 = e3.__v, r3 = n2.__e, l4 = e3.__P;
  if (l4)
    return (i2 = b({}, n2)).__v = n2.__v + 1, a.vnode && a.vnode(i2), G(l4, i2, n2, e3.__n, l4.ownerSVGElement !== void 0, 32 & n2.__u ? [r3] : null, _3, r3 ?? w(n2), !!(32 & n2.__u), t2), i2.__v = n2.__v, i2.__.__k[i2.__i] = i2, i2.__d = void 0, i2.__e != r3 && ee(i2), i2;
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
  var e3, _3, t2, i2 = [], n2 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t2 = x.length, _3 = ie(e3, i2, n2) || _3, t2 === 0 || x.length > t2 ? (R(i2, _3, n2), n2.length = i2.length = 0, _3 = void 0, x.sort($)) : _3 && a.__c && a.__c(_3, O));
  _3 && R(i2, _3, n2), A.__r = 0;
}
function _e(e3, _3, t2, i2, n2, r3, l4, u3, c2, s2, p4) {
  var o4, m2, f2, h3, k3, v3 = i2 && i2.__k || O, d6 = _3.length;
  for (t2.__d = c2, le(t2, _3, v3), c2 = t2.__d, o4 = 0; o4 < d6; o4++)
    (f2 = t2.__k[o4]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m2 = f2.__i === -1 ? E : v3[f2.__i] || E, f2.__i = o4, G(e3, f2, m2, n2, r3, l4, u3, c2, s2, p4), h3 = f2.__e, f2.ref && m2.ref != f2.ref && (m2.ref && V(m2.ref, null, f2), p4.push(f2.ref, f2.__c || h3, f2)), k3 == null && h3 != null && (k3 = h3), 65536 & f2.__u || m2.__k === f2.__k ? c2 = te(f2, c2, e3) : typeof f2.type == "function" && f2.__d !== void 0 ? c2 = f2.__d : h3 && (c2 = h3.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t2.__d = c2, t2.__e = k3;
}
function le(e3, _3, t2) {
  var i2, n2, r3, l4, u3, c2 = _3.length, s2 = t2.length, p4 = s2, o4 = 0;
  for (e3.__k = [], i2 = 0; i2 < c2; i2++)
    l4 = i2 + o4, (n2 = e3.__k[i2] = (n2 = _3[i2]) == null || typeof n2 == "boolean" || typeof n2 == "function" ? null : typeof n2 == "string" || typeof n2 == "number" || typeof n2 == "bigint" || n2.constructor == String ? S(null, n2, null, null, null) : F(n2) ? S(H, { children: n2 }, null, null, null) : n2.constructor === void 0 && n2.__b > 0 ? S(n2.type, n2.props, n2.key, n2.ref ? n2.ref : null, n2.__v) : n2) != null ? (n2.__ = e3, n2.__b = e3.__b + 1, u3 = ue(n2, t2, l4, p4), n2.__i = u3, r3 = null, u3 !== -1 && (p4--, (r3 = t2[u3]) && (r3.__u |= 131072)), r3 == null || r3.__v === null ? (u3 == -1 && o4--, typeof n2.type != "function" && (n2.__u |= 65536)) : u3 !== l4 && (u3 === l4 + 1 ? o4++ : u3 > l4 ? p4 > c2 - l4 ? o4 += u3 - l4 : o4-- : u3 < l4 ? u3 == l4 - 1 && (o4 = u3 - l4) : o4 = 0, u3 !== i2 + o4 && (n2.__u |= 65536))) : (r3 = t2[l4]) && r3.key == null && r3.__e && !(131072 & r3.__u) && (r3.__e == e3.__d && (e3.__d = w(r3)), B(r3, r3, false), t2[l4] = null, p4--);
  if (p4)
    for (i2 = 0; i2 < s2; i2++)
      (r3 = t2[i2]) != null && !(131072 & r3.__u) && (r3.__e == e3.__d && (e3.__d = w(r3)), B(r3, r3));
}
function te(e3, _3, t2) {
  var i2, n2;
  if (typeof e3.type == "function") {
    for (i2 = e3.__k, n2 = 0; i2 && n2 < i2.length; n2++)
      i2[n2] && (i2[n2].__ = e3, _3 = te(i2[n2], _3, t2));
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
function ue(e3, _3, t2, i2) {
  var n2 = e3.key, r3 = e3.type, l4 = t2 - 1, u3 = t2 + 1, c2 = _3[t2];
  if (c2 === null || c2 && n2 == c2.key && r3 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i2 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l4 >= 0 || u3 < _3.length; ) {
      if (l4 >= 0) {
        if ((c2 = _3[l4]) && !(131072 & c2.__u) && n2 == c2.key && r3 === c2.type)
          return l4;
        l4--;
      }
      if (u3 < _3.length) {
        if ((c2 = _3[u3]) && !(131072 & c2.__u) && n2 == c2.key && r3 === c2.type)
          return u3;
        u3++;
      }
    }
  return -1;
}
function q(e3, _3, t2) {
  _3[0] === "-" ? e3.setProperty(_3, t2 ?? "") : e3[_3] = t2 == null ? "" : typeof t2 != "number" || oe.test(_3) ? t2 : t2 + "px";
}
function M(e3, _3, t2, i2, n2) {
  var r3;
  e:
    if (_3 === "style")
      if (typeof t2 == "string")
        e3.style.cssText = t2;
      else {
        if (typeof i2 == "string" && (e3.style.cssText = i2 = ""), i2)
          for (_3 in i2)
            t2 && _3 in t2 || q(e3.style, _3, "");
        if (t2)
          for (_3 in t2)
            i2 && t2[_3] === i2[_3] || q(e3.style, _3, t2[_3]);
      }
    else if (_3[0] === "o" && _3[1] === "n")
      r3 = _3 !== (_3 = _3.replace(/(PointerCapture)$|Capture$/i, "$1")), _3 = _3.toLowerCase() in e3 ? _3.toLowerCase().slice(2) : _3.slice(2), e3.l || (e3.l = {}), e3.l[_3 + r3] = t2, t2 ? i2 ? t2.u = i2.u : (t2.u = Date.now(), e3.addEventListener(_3, r3 ? K : J, r3)) : e3.removeEventListener(_3, r3 ? K : J, r3);
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
function G(e3, _3, t2, i2, n2, r3, l4, u3, c2, s2) {
  var p4, o4, m2, f2, h3, k3, v3, d6, y4, C6, T5, P3, j3, U4, N2, g4 = _3.type;
  if (_3.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r3 = [u3 = _3.__e = t2.__e]), (p4 = a.__b) && p4(_3);
  e:
    if (typeof g4 == "function")
      try {
        if (d6 = _3.props, y4 = (p4 = g4.contextType) && i2[p4.__c], C6 = p4 ? y4 ? y4.props.value : p4.__ : i2, t2.__c ? v3 = (o4 = _3.__c = t2.__c).__ = o4.__E : ("prototype" in g4 && g4.prototype.render ? _3.__c = o4 = new g4(d6, C6) : (_3.__c = o4 = new W(d6, C6), o4.constructor = g4, o4.render = ce), y4 && y4.sub(o4), o4.props = d6, o4.state || (o4.state = {}), o4.context = C6, o4.__n = i2, m2 = o4.__d = true, o4.__h = [], o4._sb = []), o4.__s == null && (o4.__s = o4.state), g4.getDerivedStateFromProps != null && (o4.__s == o4.state && (o4.__s = b({}, o4.__s)), b(o4.__s, g4.getDerivedStateFromProps(d6, o4.__s))), f2 = o4.props, h3 = o4.state, o4.__v = _3, m2)
          g4.getDerivedStateFromProps == null && o4.componentWillMount != null && o4.componentWillMount(), o4.componentDidMount != null && o4.__h.push(o4.componentDidMount);
        else {
          if (g4.getDerivedStateFromProps == null && d6 !== f2 && o4.componentWillReceiveProps != null && o4.componentWillReceiveProps(d6, C6), !o4.__e && (o4.shouldComponentUpdate != null && o4.shouldComponentUpdate(d6, o4.__s, C6) === false || _3.__v === t2.__v)) {
            for (_3.__v !== t2.__v && (o4.props = d6, o4.state = o4.__s, o4.__d = false), _3.__e = t2.__e, _3.__k = t2.__k, _3.__k.forEach(function(L5) {
              L5 && (L5.__ = _3);
            }), T5 = 0; T5 < o4._sb.length; T5++)
              o4.__h.push(o4._sb[T5]);
            o4._sb = [], o4.__h.length && l4.push(o4);
            break e;
          }
          o4.componentWillUpdate != null && o4.componentWillUpdate(d6, o4.__s, C6), o4.componentDidUpdate != null && o4.__h.push(function() {
            o4.componentDidUpdate(f2, h3, k3);
          });
        }
        if (o4.context = C6, o4.props = d6, o4.__P = e3, o4.__e = false, P3 = a.__r, j3 = 0, "prototype" in g4 && g4.prototype.render) {
          for (o4.state = o4.__s, o4.__d = false, P3 && P3(_3), p4 = o4.render(o4.props, o4.state, o4.context), U4 = 0; U4 < o4._sb.length; U4++)
            o4.__h.push(o4._sb[U4]);
          o4._sb = [];
        } else
          do
            o4.__d = false, P3 && P3(_3), p4 = o4.render(o4.props, o4.state, o4.context), o4.state = o4.__s;
          while (o4.__d && ++j3 < 25);
        o4.state = o4.__s, o4.getChildContext != null && (i2 = b(b({}, i2), o4.getChildContext())), m2 || o4.getSnapshotBeforeUpdate == null || (k3 = o4.getSnapshotBeforeUpdate(f2, h3)), _e(e3, F(N2 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N2 : [N2], _3, t2, i2, n2, r3, l4, u3, c2, s2), o4.base = _3.__e, _3.__u &= -161, o4.__h.length && l4.push(o4), v3 && (o4.__E = o4.__ = null);
      } catch (L5) {
        _3.__v = null, c2 || r3 != null ? (_3.__e = u3, _3.__u |= c2 ? 160 : 32, r3[r3.indexOf(u3)] = null) : (_3.__e = t2.__e, _3.__k = t2.__k), a.__e(L5, _3, t2);
      }
    else
      r3 == null && _3.__v === t2.__v ? (_3.__k = t2.__k, _3.__e = t2.__e) : _3.__e = fe(t2.__e, _3, t2, i2, n2, r3, l4, c2, s2);
  (p4 = a.diffed) && p4(_3);
}
function R(e3, _3, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    V(t2[i2], t2[++i2], t2[++i2]);
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
function fe(e3, _3, t2, i2, n2, r3, l4, u3, c2) {
  var s2, p4, o4, m2, f2, h3, k3, v3 = t2.props, d6 = _3.props, y4 = _3.type;
  if (y4 === "svg" && (n2 = true), r3 != null) {
    for (s2 = 0; s2 < r3.length; s2++)
      if ((f2 = r3[s2]) && "setAttribute" in f2 == !!y4 && (y4 ? f2.localName === y4 : f2.nodeType === 3)) {
        e3 = f2, r3[s2] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y4 === null)
      return document.createTextNode(d6);
    e3 = n2 ? document.createElementNS("http://www.w3.org/2000/svg", y4) : document.createElement(y4, d6.is && d6), r3 = null, u3 = false;
  }
  if (y4 === null)
    v3 === d6 || u3 && e3.data === d6 || (e3.data = d6);
  else {
    if (r3 = r3 && D.call(e3.childNodes), v3 = t2.props || E, !u3 && r3 != null)
      for (v3 = {}, s2 = 0; s2 < e3.attributes.length; s2++)
        v3[(f2 = e3.attributes[s2]).name] = f2.value;
    for (s2 in v3)
      f2 = v3[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o4 = f2 : s2 === "key" || s2 in d6 || M(e3, s2, null, f2, n2));
    for (s2 in d6)
      f2 = d6[s2], s2 == "children" ? m2 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h3 = f2 : s2 == "checked" ? k3 = f2 : s2 === "key" || u3 && typeof f2 != "function" || v3[s2] === f2 || M(e3, s2, f2, v3[s2], n2);
    if (p4)
      u3 || o4 && (p4.__html === o4.__html || p4.__html === e3.innerHTML) || (e3.innerHTML = p4.__html), _3.__k = [];
    else if (o4 && (e3.innerHTML = ""), _e(e3, F(m2) ? m2 : [m2], _3, t2, i2, n2 && y4 !== "foreignObject", r3, l4, r3 ? r3[0] : t2.__k && w(t2, 0), u3, c2), r3 != null)
      for (s2 = r3.length; s2--; )
        r3[s2] != null && Z(r3[s2]);
    u3 || (s2 = "value", h3 !== void 0 && (h3 !== e3[s2] || y4 === "progress" && !h3 || y4 === "option" && h3 !== v3[s2]) && M(e3, s2, h3, v3[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e3[s2] && M(e3, s2, k3, v3[s2], false));
  }
  return e3;
}
function V(e3, _3, t2) {
  try {
    typeof e3 == "function" ? e3(_3) : e3.current = _3;
  } catch (i2) {
    a.__e(i2, t2);
  }
}
function B(e3, _3, t2) {
  var i2, n2;
  if (a.unmount && a.unmount(e3), (i2 = e3.ref) && (i2.current && i2.current !== e3.__e || V(i2, null, _3)), (i2 = e3.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (r3) {
        a.__e(r3, _3);
      }
    i2.base = i2.__P = null, e3.__c = void 0;
  }
  if (i2 = e3.__k)
    for (n2 = 0; n2 < i2.length; n2++)
      i2[n2] && B(i2[n2], _3, t2 || typeof e3.type != "function");
  t2 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _3, t2) {
  return this.constructor(e3, t2);
}
function he(e3, _3, t2) {
  var i2, n2, r3, l4, u3 = b({}, e3.props);
  for (r3 in e3.type && e3.type.defaultProps && (l4 = e3.type.defaultProps), _3)
    r3 == "key" ? i2 = _3[r3] : r3 == "ref" ? n2 = _3[r3] : u3[r3] = _3[r3] === void 0 && l4 !== void 0 ? l4[r3] : _3[r3];
  return arguments.length > 2 && (u3.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e3.type, u3, i2 || e3.key, n2 || e3.ref, null);
}
function ve(e3, _3) {
  var t2 = { __c: _3 = "__cC" + Y++, __: e3, Consumer: function(i2, n2) {
    return i2.children(n2);
  }, Provider: function(i2) {
    var n2, r3;
    return this.getChildContext || (n2 = [], (r3 = {})[_3] = this, this.getChildContext = function() {
      return r3;
    }, this.shouldComponentUpdate = function(l4) {
      this.props.value !== l4.value && n2.some(function(u3) {
        u3.__e = true, I(u3);
      });
    }, this.sub = function(l4) {
      n2.push(l4);
      var u3 = l4.componentWillUnmount;
      l4.componentWillUnmount = function() {
        n2.splice(n2.indexOf(l4), 1), u3 && u3.call(l4);
      };
    }), i2.children;
  } };
  return t2.Provider.__ = t2.Consumer.contextType = t2;
}
D = O.slice, a = { __e: function(e3, _3, t2, i2) {
  for (var n2, r3, l4; _3 = _3.__; )
    if ((n2 = _3.__c) && !n2.__)
      try {
        if ((r3 = n2.constructor) && r3.getDerivedStateFromError != null && (n2.setState(r3.getDerivedStateFromError(e3)), l4 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e3, i2 || {}), l4 = n2.__d), l4)
          return n2.__E = n2;
      } catch (u3) {
        e3 = u3;
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
  var u3 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= u3.__.length && u3.__.push({ __V: p }), u3.__[t2];
}
function I2(t2) {
  return v = 1, R2(U, t2);
}
function R2(t2, _3, u3) {
  var n2 = l(c++, 2);
  if (n2.t = t2, !n2.__c && (n2.__ = [u3 ? u3(_3) : U(void 0, _3), function(a2) {
    var f2 = n2.__N ? n2.__N[0] : n2.__[0], s2 = n2.t(f2, a2);
    f2 !== s2 && (n2.__N = [s2, n2.__[1]], n2.__c.setState({}));
  }], n2.__c = r, !r.u)) {
    var i2 = function(a2, f2, s2) {
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
          var P3 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P3 !== e3.__[0] && (V4 = true);
        }
      }), !(!V4 && n2.__c.props === a2) && (!h3 || h3.call(this, a2, f2, s2));
    };
    r.u = true;
    var h3 = r.shouldComponentUpdate, N2 = r.componentWillUpdate;
    r.componentWillUpdate = function(a2, f2, s2) {
      if (this.__e) {
        var m2 = h3;
        h3 = void 0, i2(a2, f2, s2), h3 = m2;
      }
      N2 && N2.call(this, a2, f2, s2);
    }, r.shouldComponentUpdate = i2;
  }
  return n2.__N || n2.__;
}
function z2(t2, _3) {
  var u3 = l(c++, 3);
  !o.__s && y(u3.__H, _3) && (u3.__ = t2, u3.i = _3, r.__H.__h.push(u3));
}
function S2(t2, _3) {
  var u3 = l(c++, 4);
  !o.__s && y(u3.__H, _3) && (u3.__ = t2, u3.i = _3, r.__h.push(u3));
}
function L(t2) {
  return v = 5, T(function() {
    return { current: t2 };
  }, []);
}
function T(t2, _3) {
  var u3 = l(c++, 7);
  return y(u3.__H, _3) ? (u3.__V = t2(), u3.i = _3, u3.__h = t2, u3.__V) : u3.__;
}
function J2(t2) {
  var _3 = r.context[t2.__c], u3 = l(c++, 9);
  return u3.c = t2, _3 ? (u3.__ == null && (u3.__ = true, _3.sub(r)), _3.props.value) : t2.__;
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
  _3 && (H2 === r ? (_3.__h = [], r.__h = [], _3.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = p, u3.__N = u3.i = void 0;
  })) : (_3.__h.forEach(d), _3.__h.forEach(E2), _3.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t2) {
  A2 && A2(t2);
  var _3 = t2.__c;
  _3 && _3.__H && (_3.__H.__h.length && (x2.push(_3) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _3.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== p && (u3.__ = u3.__V), u3.i = void 0, u3.__V = p;
  })), H2 = r = null;
}, o.__c = function(t2, _3) {
  _3.some(function(u3) {
    try {
      u3.__h.forEach(d), u3.__h = u3.__h.filter(function(n2) {
        return !n2.__ || E2(n2);
      });
    } catch (n2) {
      _3.some(function(i2) {
        i2.__h && (i2.__h = []);
      }), _3 = [], o.__e(n2, u3.__v);
    }
  }), D2 && D2(t2, _3);
}, o.unmount = function(t2) {
  F2 && F2(t2);
  var _3, u3 = t2.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      d(n2);
    } catch (i2) {
      _3 = i2;
    }
  }), u3.__H = void 0, _3 && o.__e(_3, u3.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _3, u3 = function() {
    clearTimeout(n2), q2 && cancelAnimationFrame(_3), setTimeout(t2);
  }, n2 = setTimeout(u3, 100);
  q2 && (_3 = requestAnimationFrame(u3));
}
function d(t2) {
  var _3 = r, u3 = t2.__c;
  typeof u3 == "function" && (t2.__c = void 0, u3()), r = _3;
}
function E2(t2) {
  var _3 = r;
  t2.__c = t2.__(), r = _3;
}
function y(t2, _3) {
  return !t2 || t2.length !== _3.length || _3.some(function(u3, n2) {
    return u3 !== t2[n2];
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
    for (var o4, u3 = t2; u3 = u3.__; )
      if ((o4 = u3.__c) && o4.__c)
        return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), o4.__c(e3, t2);
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
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e3) {
  var t2 = e3.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & e3.__u && (e3.type = null), x3 && x3(e3);
}, (h.prototype = new W()).__c = function(e3, t2) {
  var n2 = t2.__c, r3 = this;
  r3.t == null && (r3.t = []), r3.t.push(n2);
  var o4 = F3(r3.__v), u3 = false, a2 = function() {
    u3 || (u3 = true, n2.__R = null, o4 ? o4(l4) : l4());
  };
  n2.__R = a2;
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
      var n2 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n2, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var o4 = t2.__a && re(H, null, e3.fallback);
  return o4 && (o4.__u &= -33), [re(H, null, t2.__a ? null : e3.children), o4];
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
(p2.prototype = new W()).__a = function(e3) {
  var t2 = this, n2 = F3(t2.__v), r3 = t2.o.get(e3);
  return r3[0]++, function(o4) {
    var u3 = function() {
      t2.props.revealOrder ? (r3.push(o4), k2(t2, e3, r3)) : o4();
    };
    n2 ? n2(u3) : u3();
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
    var n2 = t2.props, r3 = t2.type, o4 = {};
    for (var u3 in n2) {
      var a2 = n2[u3];
      if (!(u3 === "value" && "defaultValue" in n2 && a2 == null || _e2 && u3 === "children" && r3 === "noscript" || u3 === "class" || u3 === "className")) {
        var l4 = u3.toLowerCase();
        u3 === "defaultValue" && "value" in n2 && n2.value == null ? u3 = "value" : u3 === "download" && a2 === true ? a2 = "" : l4 === "translate" && a2 === "no" ? a2 = false : l4 === "ondoubleclick" ? u3 = "ondblclick" : l4 !== "onchange" || r3 !== "input" && r3 !== "textarea" || ce2(n2.type) ? l4 === "onfocus" ? u3 = "onfocusin" : l4 === "onblur" ? u3 = "onfocusout" : le2.test(u3) ? u3 = l4 : r3.indexOf("-") === -1 && ie2.test(u3) ? u3 = u3.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l4 = u3 = "oninput", l4 === "oninput" && o4[u3 = l4] && (u3 = "oninputCapture"), o4[u3] = a2;
      }
    }
    r3 == "select" && o4.multiple && Array.isArray(o4.value) && (o4.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o4.value.indexOf(s2.props.value) != -1;
    })), r3 == "select" && o4.defaultValue != null && (o4.value = se(n2.children).forEach(function(s2) {
      s2.props.selected = o4.multiple ? o4.defaultValue.indexOf(s2.props.value) != -1 : o4.defaultValue == s2.props.value;
    })), n2.class && !n2.className ? (o4.class = n2.class, Object.defineProperty(o4, "className", me)) : (n2.className && !n2.class || n2.class && n2.className) && (o4.class = o4.className = n2.className), t2.props = o4;
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
function m(e3) {
  return !!e3 && e3.$$typeof === V2;
}
function Ee(e3) {
  return m(e3) ? he.apply(null, arguments) : e3;
}

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
      for (var a2 in e3)
        Object.prototype.hasOwnProperty.call(e3, a2) && (n2[a2] = e3[a2]);
    }
    return n2;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t2, c2 = []) {
  let o4 = [];
  function a2(r3, e3) {
    let n2 = ve(e3), s2 = o4.length;
    o4 = [...o4, e3];
    function f2(d6) {
      let { scope: i2, children: x6, ...$3 } = d6, h3 = i2?.[t2][s2] || n2, S6 = T(() => $3, Object.values($3));
      return re(h3.Provider, { value: S6 }, x6);
    }
    function v3(d6, i2) {
      let x6 = i2?.[t2][s2] || n2, $3 = J2(x6);
      if ($3)
        return $3;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d6}\` must be used within \`${r3}\``);
    }
    return f2.displayName = r3 + "Provider", [f2, v3];
  }
  let u3 = () => {
    let r3 = o4.map((e3) => ve(e3));
    return function(n2) {
      let s2 = n2?.[t2] || r3;
      return T(() => ({ [`__scope${t2}`]: { ...n2, [t2]: s2 } }), [n2, s2]);
    };
  };
  return u3.scopeName = t2, [a2, C3(u3, ...c2)];
}
function C3(...t2) {
  let c2 = t2[0];
  if (t2.length === 1)
    return c2;
  let o4 = () => {
    let a2 = t2.map((u3) => ({ useScope: u3(), scopeName: u3.scopeName }));
    return function(r3) {
      let e3 = a2.reduce((n2, { useScope: s2, scopeName: f2 }) => {
        let d6 = s2(r3)[`__scope${f2}`];
        return { ...n2, ...d6 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e3 }), [e3]);
    };
  };
  return o4.scopeName = c2.scopeName, o4;
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f2) {
  let e3 = L(f2);
  return z2(() => {
    e3.current = f2;
  }), T(() => (...u3) => {
    var r3;
    return (r3 = e3.current) === null || r3 === void 0 ? void 0 : r3.call(e3, ...u3);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e3, f2) {
  typeof e3 == "function" ? e3(f2) : e3 != null && (e3.current = f2);
}
function t(...e3) {
  return (f2) => e3.forEach((o4) => n(o4, f2));
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n2, t2) => {
  let { children: e3, ...r3 } = n2, o4 = te2.toArray(e3), l4 = o4.find(I3);
  if (l4) {
    let c2 = l4.props.children, a2 = o4.map((m2) => m2 === l4 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m2);
    return re($2, p3({}, r3, { ref: t2 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p3({}, r3, { ref: t2 }), e3);
});
b4.displayName = "Slot";
var $2 = ee2((n2, t2) => {
  let { children: e3, ...r3 } = n2;
  return m(e3) ? Ee(e3, { ...X3(r3, e3.props), ref: t2 ? t(t2, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y2 = ({ children: n2 }) => re(H, null, n2);
function I3(n2) {
  return m(n2) && n2.type === y2;
}
function X3(n2, t2) {
  let e3 = { ...t2 };
  for (let r3 in t2) {
    let o4 = n2[r3], l4 = t2[r3];
    /^on[A-Z]/.test(r3) ? o4 && l4 ? e3[r3] = (...a2) => {
      l4(...a2), o4(...a2);
    } : o4 && (e3[r3] = o4) : r3 === "style" ? e3[r3] = { ...o4, ...l4 } : r3 === "className" && (e3[r3] = [o4, l4].filter(Boolean).join(" "));
  }
  return { ...n2, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u2 = d3.reduce((t2, e3) => {
  let f2 = ee2((r3, o4) => {
    let { asChild: s2, ...a2 } = r3, i2 = s2 ? b4 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i2, p3({}, a2, { ref: o4 }));
  });
  return f2.displayName = `Primitive.${e3}`, { ...t2, [e3]: f2 };
}, {});

// https://esm.sh/v132/@radix-ui/react-avatar@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-avatar.mjs
var g2 = "Avatar";
var [S4, F4] = _(g2);
var [y3, v2] = S4(g2);
var L3 = ee2((a2, s2) => {
  let { __scopeAvatar: t2, ...e3 } = a2, [o4, r3] = I2("idle");
  return re(y3, { scope: t2, imageLoadingStatus: o4, onImageLoadingStatusChange: r3 }, re(u2.span, p3({}, e3, { ref: s2 })));
});
var x4 = "AvatarImage";
var _2 = ee2((a2, s2) => {
  let { __scopeAvatar: t2, src: e3, onLoadingStatusChange: o4 = () => {
  }, ...r3 } = a2, n2 = v2(x4, t2), c2 = I4(e3), d6 = l2((m2) => {
    o4(m2), n2.onImageLoadingStatusChange(m2);
  });
  return e(() => {
    c2 !== "idle" && d6(c2);
  }, [c2, d6]), c2 === "loaded" ? re(u2.img, p3({}, r3, { ref: s2, src: e3 })) : null;
});
var C4 = "AvatarFallback";
var E3 = ee2((a2, s2) => {
  let { __scopeAvatar: t2, delayMs: e3, ...o4 } = a2, r3 = v2(C4, t2), [n2, c2] = I2(e3 === void 0);
  return z2(() => {
    if (e3 !== void 0) {
      let d6 = window.setTimeout(() => c2(true), e3);
      return () => window.clearTimeout(d6);
    }
  }, [e3]), n2 && r3.imageLoadingStatus !== "loaded" ? re(u2.span, p3({}, o4, { ref: s2 })) : null;
});
function I4(a2) {
  let [s2, t2] = I2("idle");
  return e(() => {
    if (!a2) {
      t2("error");
      return;
    }
    let e3 = true, o4 = new window.Image(), r3 = (n2) => () => {
      e3 && t2(n2);
    };
    return t2("loading"), o4.onload = r3("loaded"), o4.onerror = r3("error"), o4.src = a2, () => {
      e3 = false;
    };
  }, [a2]), s2;
}
var j2 = L3;
var O3 = _2;
var T3 = E3;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o3(r3) {
  var f2, n2, t2 = "";
  if (typeof r3 == "string" || typeof r3 == "number")
    t2 += r3;
  else if (typeof r3 == "object")
    if (Array.isArray(r3))
      for (f2 = 0; f2 < r3.length; f2++)
        r3[f2] && (n2 = o3(r3[f2])) && (t2 && (t2 += " "), t2 += n2);
    else
      for (f2 in r3)
        r3[f2] && (t2 && (t2 += " "), t2 += f2);
  return t2;
}
function e2() {
  for (var r3, f2, n2 = 0, t2 = ""; n2 < arguments.length; )
    (r3 = arguments[n2++]) && (f2 = o3(r3)) && (t2 && (t2 += " "), t2 += f2);
  return t2;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r3, e3) => {
  for (var t2 in e3)
    Ar(r3, t2, { get: e3[t2], enumerable: true });
};
function U3() {
  for (var r3 = 0, e3, t2, o4 = ""; r3 < arguments.length; )
    (e3 = arguments[r3++]) && (t2 = lr(e3)) && (o4 && (o4 += " "), o4 += t2);
  return o4;
}
function lr(r3) {
  if (typeof r3 == "string")
    return r3;
  for (var e3, t2 = "", o4 = 0; o4 < r3.length; o4++)
    r3[o4] && (e3 = lr(r3[o4])) && (t2 && (t2 += " "), t2 += e3);
  return t2;
}
var Z2 = "-";
function ur(r3) {
  var e3 = Sr(r3), t2 = r3.conflictingClassGroups, o4 = r3.conflictingClassGroupModifiers, a2 = o4 === void 0 ? {} : o4;
  function s2(i2) {
    var c2 = i2.split(Z2);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e3) || kr(i2);
  }
  function n2(i2, c2) {
    var u3 = t2[i2] || [];
    return c2 && a2[i2] ? [].concat(u3, a2[i2]) : u3;
  }
  return { getClassGroupId: s2, getConflictingClassGroupIds: n2 };
}
function pr(r3, e3) {
  if (r3.length === 0)
    return e3.classGroupId;
  var t2 = r3[0], o4 = e3.nextPart.get(t2), a2 = o4 ? pr(r3.slice(1), o4) : void 0;
  if (a2)
    return a2;
  if (e3.validators.length !== 0) {
    var s2 = r3.join(Z2);
    return e3.validators.find(function(n2) {
      var i2 = n2.validator;
      return i2(s2);
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
  var e3 = r3.theme, t2 = r3.prefix, o4 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r3.classGroups), t2);
  return a2.forEach(function(s2) {
    var n2 = s2[0], i2 = s2[1];
    q3(i2, o4, n2, e3);
  }), o4;
}
function q3(r3, e3, t2, o4) {
  r3.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s2 = a2 === "" ? e3 : cr(e3, a2);
      s2.classGroupId = t2;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q3(a2(o4), e3, t2, o4);
        return;
      }
      e3.validators.push({ validator: a2, classGroupId: t2 });
      return;
    }
    Object.entries(a2).forEach(function(n2) {
      var i2 = n2[0], c2 = n2[1];
      q3(c2, cr(e3, i2), t2, o4);
    });
  });
}
function cr(r3, e3) {
  var t2 = r3;
  return e3.split(Z2).forEach(function(o4) {
    t2.nextPart.has(o4) || t2.nextPart.set(o4, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t2 = t2.nextPart.get(o4);
  }), t2;
}
function zr(r3) {
  return r3.isThemeGetter;
}
function Gr(r3, e3) {
  return e3 ? r3.map(function(t2) {
    var o4 = t2[0], a2 = t2[1], s2 = a2.map(function(n2) {
      return typeof n2 == "string" ? e3 + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(function(i2) {
        var c2 = i2[0], u3 = i2[1];
        return [e3 + c2, u3];
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
  var e3 = 0, t2 = /* @__PURE__ */ new Map(), o4 = /* @__PURE__ */ new Map();
  function a2(s2, n2) {
    t2.set(s2, n2), e3++, e3 > r3 && (e3 = 0, o4 = t2, t2 = /* @__PURE__ */ new Map());
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
  var e3 = r3.separator || ":", t2 = e3.length === 1, o4 = e3[0], a2 = e3.length;
  return function(n2) {
    for (var i2 = [], c2 = 0, u3 = 0, b5, f2 = 0; f2 < n2.length; f2++) {
      var g4 = n2[f2];
      if (c2 === 0) {
        if (g4 === o4 && (t2 || n2.slice(f2, f2 + a2) === e3)) {
          i2.push(n2.slice(u3, f2)), u3 = f2 + a2;
          continue;
        }
        if (g4 === "/") {
          b5 = f2;
          continue;
        }
      }
      g4 === "[" ? c2++ : g4 === "]" && c2--;
    }
    var y4 = i2.length === 0 ? n2 : n2.substring(u3), x6 = y4.startsWith(X4), m2 = x6 ? y4.substring(1) : y4, w3 = b5 && b5 > u3 ? b5 - u3 : void 0;
    return { modifiers: i2, hasImportantModifier: x6, baseClassName: m2, maybePostfixModifierPosition: w3 };
  };
}
function gr(r3) {
  if (r3.length <= 1)
    return r3;
  var e3 = [], t2 = [];
  return r3.forEach(function(o4) {
    var a2 = o4[0] === "[";
    a2 ? (e3.push.apply(e3, t2.sort().concat([o4])), t2 = []) : t2.push(o4);
  }), e3.push.apply(e3, t2.sort()), e3;
}
function mr(r3) {
  return { cache: fr(r3.cacheSize), splitModifiers: br(r3), ...ur(r3) };
}
var Ir = /\s+/;
function vr(r3, e3) {
  var t2 = e3.splitModifiers, o4 = e3.getClassGroupId, a2 = e3.getConflictingClassGroupIds, s2 = /* @__PURE__ */ new Set();
  return r3.trim().split(Ir).map(function(n2) {
    var i2 = t2(n2), c2 = i2.modifiers, u3 = i2.hasImportantModifier, b5 = i2.baseClassName, f2 = i2.maybePostfixModifierPosition, g4 = o4(f2 ? b5.substring(0, f2) : b5), y4 = !!f2;
    if (!g4) {
      if (!f2)
        return { isTailwindClass: false, originalClassName: n2 };
      if (g4 = o4(b5), !g4)
        return { isTailwindClass: false, originalClassName: n2 };
      y4 = false;
    }
    var x6 = gr(c2).join(":"), m2 = u3 ? x6 + X4 : x6;
    return { isTailwindClass: true, modifierId: m2, classGroupId: g4, originalClassName: n2, hasPostfixModifier: y4 };
  }).reverse().filter(function(n2) {
    if (!n2.isTailwindClass)
      return true;
    var i2 = n2.modifierId, c2 = n2.classGroupId, u3 = n2.hasPostfixModifier, b5 = i2 + c2;
    return s2.has(b5) ? false : (s2.add(b5), a2(c2, u3).forEach(function(f2) {
      return s2.add(i2 + f2);
    }), true);
  }).reverse().map(function(n2) {
    return n2.originalClassName;
  }).join(" ");
}
function P2() {
  for (var r3 = arguments.length, e3 = new Array(r3), t2 = 0; t2 < r3; t2++)
    e3[t2] = arguments[t2];
  var o4, a2, s2, n2 = i2;
  function i2(u3) {
    var b5 = e3[0], f2 = e3.slice(1), g4 = f2.reduce(function(y4, x6) {
      return x6(y4);
    }, b5());
    return o4 = mr(g4), a2 = o4.cache.get, s2 = o4.cache.set, n2 = c2, c2(u3);
  }
  function c2(u3) {
    var b5 = a2(u3);
    if (b5)
      return b5;
    var f2 = vr(u3, o4);
    return s2(u3, f2), f2;
  }
  return function() {
    return n2(U3.apply(null, arguments));
  };
}
function d4(r3) {
  var e3 = function(o4) {
    return o4[r3] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G3, isArbitraryLength: () => L4, isArbitraryNumber: () => S5, isArbitraryPosition: () => Q3, isArbitraryShadow: () => D3, isArbitrarySize: () => H3, isArbitraryUrl: () => V3, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z3, isLength: () => h2, isNumber: () => M3, isPercent: () => Y2, isTshirtSize: () => C5 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h2(r3) {
  return M3(r3) || Tr.has(r3) || Pr.test(r3) || L4(r3);
}
function L4(r3) {
  return I5(r3, "length", Er);
}
function H3(r3) {
  return I5(r3, "size", xr);
}
function Q3(r3) {
  return I5(r3, "position", xr);
}
function V3(r3) {
  return I5(r3, "url", jr);
}
function S5(r3) {
  return I5(r3, "number", M3);
}
var Wr = S5;
function M3(r3) {
  return !Number.isNaN(Number(r3));
}
function Y2(r3) {
  return r3.endsWith("%") && M3(r3.slice(0, -1));
}
function z3(r3) {
  return hr(r3) || I5(r3, "number", hr);
}
function l3(r3) {
  return yr.test(r3);
}
function G3() {
  return true;
}
function C5(r3) {
  return Rr.test(r3);
}
function D3(r3) {
  return I5(r3, "", Ur);
}
function I5(r3, e3, t2) {
  var o4 = yr.exec(r3);
  return o4 ? o4[1] ? o4[1] === e3 : t2(o4[2]) : false;
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
function T4() {
  var r3 = d4("colors"), e3 = d4("spacing"), t2 = d4("blur"), o4 = d4("brightness"), a2 = d4("borderColor"), s2 = d4("borderRadius"), n2 = d4("borderSpacing"), i2 = d4("borderWidth"), c2 = d4("contrast"), u3 = d4("grayscale"), b5 = d4("hueRotate"), f2 = d4("invert"), g4 = d4("gap"), y4 = d4("gradientColorStops"), x6 = d4("gradientColorStopPositions"), m2 = d4("inset"), w3 = d4("margin"), k3 = d4("opacity"), A4 = d4("padding"), K3 = d4("saturate"), O4 = d4("scale"), rr = d4("sepia"), er = d4("skew"), tr = d4("space"), or = d4("translate"), $3 = function() {
    return ["auto", "contain", "none"];
  }, B2 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F5 = function() {
    return ["auto", l3, e3];
  }, p4 = function() {
    return [l3, e3];
  }, nr = function() {
    return ["", h2];
  }, W3 = function() {
    return ["auto", M3, l3];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E4 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J3 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R4 = function() {
    return ["", "0", l3];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N2 = function() {
    return [M3, S5];
  }, j3 = function() {
    return [M3, l3];
  };
  return { cacheSize: 500, theme: { colors: [G3], spacing: [h2], blur: ["none", "", C5, l3], brightness: N2(), borderColor: [r3], borderRadius: ["none", "", "full", C5, l3], borderSpacing: p4(), borderWidth: nr(), contrast: N2(), grayscale: R4(), hueRotate: j3(), invert: R4(), gap: p4(), gradientColorStops: [r3], gradientColorStopPositions: [Y2, L4], inset: F5(), margin: F5(), opacity: N2(), padding: p4(), saturate: N2(), scale: N2(), sepia: R4(), skew: j3(), space: p4(), translate: p4() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C5] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B2() }], "overflow-x": [{ "overflow-x": B2() }], "overflow-y": [{ "overflow-y": B2() }], overscroll: [{ overscroll: $3() }], "overscroll-x": [{ "overscroll-x": $3() }], "overscroll-y": [{ "overscroll-y": $3() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m2] }], "inset-x": [{ "inset-x": [m2] }], "inset-y": [{ "inset-y": [m2] }], start: [{ start: [m2] }], end: [{ end: [m2] }], top: [{ top: [m2] }], right: [{ right: [m2] }], bottom: [{ bottom: [m2] }], left: [{ left: [m2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z3] }], basis: [{ basis: F5() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R4() }], shrink: [{ shrink: R4() }], order: [{ order: ["first", "last", "none", z3] }], "grid-cols": [{ "grid-cols": [G3] }], "col-start-end": [{ col: ["auto", { span: ["full", z3] }, l3] }], "col-start": [{ "col-start": W3() }], "col-end": [{ "col-end": W3() }], "grid-rows": [{ "grid-rows": [G3] }], "row-start-end": [{ row: ["auto", { span: [z3] }, l3] }], "row-start": [{ "row-start": W3() }], "row-end": [{ "row-end": W3() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g4] }], "gap-x": [{ "gap-x": [g4] }], "gap-y": [{ "gap-y": [g4] }], "justify-content": [{ justify: ["normal"].concat(J3()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J3(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J3(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A4] }], px: [{ px: [A4] }], py: [{ py: [A4] }], ps: [{ ps: [A4] }], pe: [{ pe: [A4] }], pt: [{ pt: [A4] }], pr: [{ pr: [A4] }], pb: [{ pb: [A4] }], pl: [{ pl: [A4] }], m: [{ m: [w3] }], mx: [{ mx: [w3] }], my: [{ my: [w3] }], ms: [{ ms: [w3] }], me: [{ me: [w3] }], mt: [{ mt: [w3] }], mr: [{ mr: [w3] }], mb: [{ mb: [w3] }], ml: [{ ml: [w3] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h2] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C5] }, C5, l3] }], h: [{ h: [l3, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h2] }], "max-h": [{ "max-h": [l3, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C5, L4] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S5] }], "font-family": [{ font: [G3] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M3, S5] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h2] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r3] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r3] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E4(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h2] }], "underline-offset": [{ "underline-offset": ["auto", l3, h2] }], "text-decoration-color": [{ decoration: [r3] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p4() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q3]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V3] }], "bg-color": [{ bg: [r3] }], "gradient-from-pos": [{ from: [x6] }], "gradient-via-pos": [{ via: [x6] }], "gradient-to-pos": [{ to: [x6] }], "gradient-from": [{ from: [y4] }], "gradient-via": [{ via: [y4] }], "gradient-to": [{ to: [y4] }], rounded: [{ rounded: [s2] }], "rounded-s": [{ "rounded-s": [s2] }], "rounded-e": [{ "rounded-e": [s2] }], "rounded-t": [{ "rounded-t": [s2] }], "rounded-r": [{ "rounded-r": [s2] }], "rounded-b": [{ "rounded-b": [s2] }], "rounded-l": [{ "rounded-l": [s2] }], "rounded-ss": [{ "rounded-ss": [s2] }], "rounded-se": [{ "rounded-se": [s2] }], "rounded-ee": [{ "rounded-ee": [s2] }], "rounded-es": [{ "rounded-es": [s2] }], "rounded-tl": [{ "rounded-tl": [s2] }], "rounded-tr": [{ "rounded-tr": [s2] }], "rounded-br": [{ "rounded-br": [s2] }], "rounded-bl": [{ "rounded-bl": [s2] }], "border-w": [{ border: [i2] }], "border-w-x": [{ "border-x": [i2] }], "border-w-y": [{ "border-y": [i2] }], "border-w-s": [{ "border-s": [i2] }], "border-w-e": [{ "border-e": [i2] }], "border-w-t": [{ "border-t": [i2] }], "border-w-r": [{ "border-r": [i2] }], "border-w-b": [{ "border-b": [i2] }], "border-w-l": [{ "border-l": [i2] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E4(), ["hidden"]) }], "divide-x": [{ "divide-x": [i2] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i2] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E4() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E4()) }], "outline-offset": [{ "outline-offset": [l3, h2] }], "outline-w": [{ outline: [h2] }], "outline-color": [{ outline: [r3] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r3] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h2] }], "ring-offset-color": [{ "ring-offset": [r3] }], shadow: [{ shadow: ["", "inner", "none", C5, D3] }], "shadow-color": [{ shadow: [G3] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t2] }], brightness: [{ brightness: [o4] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C5, l3] }], grayscale: [{ grayscale: [u3] }], "hue-rotate": [{ "hue-rotate": [b5] }], invert: [{ invert: [f2] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t2] }], "backdrop-brightness": [{ "backdrop-brightness": [o4] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u3] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b5] }], "backdrop-invert": [{ "backdrop-invert": [f2] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n2] }], "border-spacing-x": [{ "border-spacing-x": [n2] }], "border-spacing-y": [{ "border-spacing-y": [n2] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j3() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j3() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O4] }], "scale-x": [{ "scale-x": [O4] }], "scale-y": [{ "scale-y": [O4] }], rotate: [{ rotate: [z3, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r3] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r3] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p4() }], "scroll-mx": [{ "scroll-mx": p4() }], "scroll-my": [{ "scroll-my": p4() }], "scroll-ms": [{ "scroll-ms": p4() }], "scroll-me": [{ "scroll-me": p4() }], "scroll-mt": [{ "scroll-mt": p4() }], "scroll-mr": [{ "scroll-mr": p4() }], "scroll-mb": [{ "scroll-mb": p4() }], "scroll-ml": [{ "scroll-ml": p4() }], "scroll-p": [{ "scroll-p": p4() }], "scroll-px": [{ "scroll-px": p4() }], "scroll-py": [{ "scroll-py": p4() }], "scroll-ps": [{ "scroll-ps": p4() }], "scroll-pe": [{ "scroll-pe": p4() }], "scroll-pt": [{ "scroll-pt": p4() }], "scroll-pr": [{ "scroll-pr": p4() }], "scroll-pb": [{ "scroll-pb": p4() }], "scroll-pl": [{ "scroll-pl": p4() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r3, "none"] }], "stroke-w": [{ stroke: [h2, S5] }], stroke: [{ stroke: [r3, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P2(T4);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d5 = 0;
var x5 = Array.isArray;
function g3(t2, r3, e3, a2, o4, i2) {
  var s2, n2, f2 = {};
  for (n2 in r3)
    n2 == "ref" ? s2 = r3[n2] : f2[n2] = r3[n2];
  var u3 = { type: t2, props: f2, key: e3, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d5, __i: -1, __u: 0, __source: o4, __self: i2 };
  if (typeof t2 == "function" && (s2 = t2.defaultProps))
    for (n2 in s2)
      f2[n2] === void 0 && (f2[n2] = s2[n2]);
  return a.vnode && a.vnode(u3), u3;
}

// ../components/ui/avatar.tsx
var Avatar = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  j2,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = j2.displayName;
var AvatarImage = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(O3, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = O3.displayName;
var AvatarFallback = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  T3,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
    ...props
  }
));
AvatarFallback.displayName = T3.displayName;
export {
  Avatar,
  AvatarFallback,
  AvatarImage
};
