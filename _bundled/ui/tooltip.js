"use client";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/preact@10.19.6/compat
var compat_exports = {};
__export(compat_exports, {
  Children: () => te2,
  Component: () => W,
  Fragment: () => H,
  PureComponent: () => C2,
  StrictMode: () => xe,
  Suspense: () => h,
  SuspenseList: () => p2,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ye,
  cloneElement: () => Ee,
  createContext: () => ve,
  createElement: () => re,
  createFactory: () => be,
  createPortal: () => ae2,
  createRef: () => de,
  default: () => Te,
  findDOMNode: () => ge,
  flushSync: () => Re,
  forwardRef: () => ee2,
  hydrate: () => pe2,
  isElement: () => we,
  isFragment: () => Ce,
  isValidElement: () => m,
  lazy: () => re2,
  memo: () => Q3,
  render: () => fe2,
  startTransition: () => M3,
  unmountComponentAtNode: () => Se,
  unstable_batchedUpdates: () => Ne,
  useCallback: () => G2,
  useContext: () => J2,
  useDebugValue: () => K2,
  useDeferredValue: () => ke,
  useEffect: () => z2,
  useErrorBoundary: () => O2,
  useId: () => Q2,
  useImperativeHandle: () => M2,
  useInsertionEffect: () => Pe,
  useLayoutEffect: () => S2,
  useMemo: () => T,
  useReducer: () => R2,
  useRef: () => L,
  useState: () => I2,
  useSyncExternalStore: () => Ue,
  useTransition: () => Oe,
  version: () => Le
});

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
function b(e3, _2) {
  for (var t2 in _2)
    e3[t2] = _2[t2];
  return e3;
}
function Z(e3) {
  var _2 = e3.parentNode;
  _2 && _2.removeChild(e3);
}
function re(e3, _2, t2) {
  var i4, n4, r4, l6 = {};
  for (r4 in _2)
    r4 == "key" ? i4 = _2[r4] : r4 == "ref" ? n4 = _2[r4] : l6[r4] = _2[r4];
  if (arguments.length > 2 && (l6.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e3 == "function" && e3.defaultProps != null)
    for (r4 in e3.defaultProps)
      l6[r4] === void 0 && (l6[r4] = e3.defaultProps[r4]);
  return S(e3, l6, i4, n4, null);
}
function S(e3, _2, t2, i4, n4) {
  var r4 = { type: e3, props: _2, key: t2, ref: i4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n4 ?? ++Q, __i: -1, __u: 0 };
  return n4 == null && a.vnode != null && a.vnode(r4), r4;
}
function de() {
  return { current: null };
}
function H(e3) {
  return e3.children;
}
function W(e3, _2) {
  this.props = e3, this.context = _2;
}
function w(e3, _2) {
  if (_2 == null)
    return e3.__ ? w(e3.__, e3.__i + 1) : null;
  for (var t2; _2 < e3.__k.length; _2++)
    if ((t2 = e3.__k[_2]) != null && t2.__e != null)
      return t2.__e;
  return typeof e3.type == "function" ? w(e3) : null;
}
function ie(e3, _2, t2) {
  var i4, n4 = e3.__v, r4 = n4.__e, l6 = e3.__P;
  if (l6)
    return (i4 = b({}, n4)).__v = n4.__v + 1, a.vnode && a.vnode(i4), G(l6, i4, n4, e3.__n, l6.ownerSVGElement !== void 0, 32 & n4.__u ? [r4] : null, _2, r4 ?? w(n4), !!(32 & n4.__u), t2), i4.__v = n4.__v, i4.__.__k[i4.__i] = i4, i4.__d = void 0, i4.__e != r4 && ee(i4), i4;
}
function ee(e3) {
  var _2, t2;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, _2 = 0; _2 < e3.__k.length; _2++)
      if ((t2 = e3.__k[_2]) != null && t2.__e != null) {
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
  var e3, _2, t2, i4 = [], n4 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t2 = x.length, _2 = ie(e3, i4, n4) || _2, t2 === 0 || x.length > t2 ? (R(i4, _2, n4), n4.length = i4.length = 0, _2 = void 0, x.sort($)) : _2 && a.__c && a.__c(_2, O));
  _2 && R(i4, _2, n4), A.__r = 0;
}
function _e(e3, _2, t2, i4, n4, r4, l6, u7, c2, s4, p6) {
  var o5, m5, f5, h7, k6, v3 = i4 && i4.__k || O, d9 = _2.length;
  for (t2.__d = c2, le(t2, _2, v3), c2 = t2.__d, o5 = 0; o5 < d9; o5++)
    (f5 = t2.__k[o5]) != null && typeof f5 != "boolean" && typeof f5 != "function" && (m5 = f5.__i === -1 ? E : v3[f5.__i] || E, f5.__i = o5, G(e3, f5, m5, n4, r4, l6, u7, c2, s4, p6), h7 = f5.__e, f5.ref && m5.ref != f5.ref && (m5.ref && V(m5.ref, null, f5), p6.push(f5.ref, f5.__c || h7, f5)), k6 == null && h7 != null && (k6 = h7), 65536 & f5.__u || m5.__k === f5.__k ? c2 = te(f5, c2, e3) : typeof f5.type == "function" && f5.__d !== void 0 ? c2 = f5.__d : h7 && (c2 = h7.nextSibling), f5.__d = void 0, f5.__u &= -196609);
  t2.__d = c2, t2.__e = k6;
}
function le(e3, _2, t2) {
  var i4, n4, r4, l6, u7, c2 = _2.length, s4 = t2.length, p6 = s4, o5 = 0;
  for (e3.__k = [], i4 = 0; i4 < c2; i4++)
    l6 = i4 + o5, (n4 = e3.__k[i4] = (n4 = _2[i4]) == null || typeof n4 == "boolean" || typeof n4 == "function" ? null : typeof n4 == "string" || typeof n4 == "number" || typeof n4 == "bigint" || n4.constructor == String ? S(null, n4, null, null, null) : F(n4) ? S(H, { children: n4 }, null, null, null) : n4.constructor === void 0 && n4.__b > 0 ? S(n4.type, n4.props, n4.key, n4.ref ? n4.ref : null, n4.__v) : n4) != null ? (n4.__ = e3, n4.__b = e3.__b + 1, u7 = ue(n4, t2, l6, p6), n4.__i = u7, r4 = null, u7 !== -1 && (p6--, (r4 = t2[u7]) && (r4.__u |= 131072)), r4 == null || r4.__v === null ? (u7 == -1 && o5--, typeof n4.type != "function" && (n4.__u |= 65536)) : u7 !== l6 && (u7 === l6 + 1 ? o5++ : u7 > l6 ? p6 > c2 - l6 ? o5 += u7 - l6 : o5-- : u7 < l6 ? u7 == l6 - 1 && (o5 = u7 - l6) : o5 = 0, u7 !== i4 + o5 && (n4.__u |= 65536))) : (r4 = t2[l6]) && r4.key == null && r4.__e && !(131072 & r4.__u) && (r4.__e == e3.__d && (e3.__d = w(r4)), B(r4, r4, false), t2[l6] = null, p6--);
  if (p6)
    for (i4 = 0; i4 < s4; i4++)
      (r4 = t2[i4]) != null && !(131072 & r4.__u) && (r4.__e == e3.__d && (e3.__d = w(r4)), B(r4, r4));
}
function te(e3, _2, t2) {
  var i4, n4;
  if (typeof e3.type == "function") {
    for (i4 = e3.__k, n4 = 0; i4 && n4 < i4.length; n4++)
      i4[n4] && (i4[n4].__ = e3, _2 = te(i4[n4], _2, t2));
    return _2;
  }
  e3.__e != _2 && (t2.insertBefore(e3.__e, _2 || null), _2 = e3.__e);
  do
    _2 = _2 && _2.nextSibling;
  while (_2 != null && _2.nodeType === 8);
  return _2;
}
function se(e3, _2) {
  return _2 = _2 || [], e3 == null || typeof e3 == "boolean" || (F(e3) ? e3.some(function(t2) {
    se(t2, _2);
  }) : _2.push(e3)), _2;
}
function ue(e3, _2, t2, i4) {
  var n4 = e3.key, r4 = e3.type, l6 = t2 - 1, u7 = t2 + 1, c2 = _2[t2];
  if (c2 === null || c2 && n4 == c2.key && r4 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i4 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l6 >= 0 || u7 < _2.length; ) {
      if (l6 >= 0) {
        if ((c2 = _2[l6]) && !(131072 & c2.__u) && n4 == c2.key && r4 === c2.type)
          return l6;
        l6--;
      }
      if (u7 < _2.length) {
        if ((c2 = _2[u7]) && !(131072 & c2.__u) && n4 == c2.key && r4 === c2.type)
          return u7;
        u7++;
      }
    }
  return -1;
}
function q(e3, _2, t2) {
  _2[0] === "-" ? e3.setProperty(_2, t2 ?? "") : e3[_2] = t2 == null ? "" : typeof t2 != "number" || oe.test(_2) ? t2 : t2 + "px";
}
function M(e3, _2, t2, i4, n4) {
  var r4;
  e:
    if (_2 === "style")
      if (typeof t2 == "string")
        e3.style.cssText = t2;
      else {
        if (typeof i4 == "string" && (e3.style.cssText = i4 = ""), i4)
          for (_2 in i4)
            t2 && _2 in t2 || q(e3.style, _2, "");
        if (t2)
          for (_2 in t2)
            i4 && t2[_2] === i4[_2] || q(e3.style, _2, t2[_2]);
      }
    else if (_2[0] === "o" && _2[1] === "n")
      r4 = _2 !== (_2 = _2.replace(/(PointerCapture)$|Capture$/i, "$1")), _2 = _2.toLowerCase() in e3 ? _2.toLowerCase().slice(2) : _2.slice(2), e3.l || (e3.l = {}), e3.l[_2 + r4] = t2, t2 ? i4 ? t2.u = i4.u : (t2.u = Date.now(), e3.addEventListener(_2, r4 ? K : J, r4)) : e3.removeEventListener(_2, r4 ? K : J, r4);
    else {
      if (n4)
        _2 = _2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_2 !== "width" && _2 !== "height" && _2 !== "href" && _2 !== "list" && _2 !== "form" && _2 !== "tabIndex" && _2 !== "download" && _2 !== "rowSpan" && _2 !== "colSpan" && _2 !== "role" && _2 in e3)
        try {
          e3[_2] = t2 ?? "";
          break e;
        } catch {
        }
      typeof t2 == "function" || (t2 == null || t2 === false && _2[4] !== "-" ? e3.removeAttribute(_2) : e3.setAttribute(_2, t2));
    }
}
function J(e3) {
  if (this.l) {
    var _2 = this.l[e3.type + false];
    if (e3.t) {
      if (e3.t <= _2.u)
        return;
    } else
      e3.t = Date.now();
    return _2(a.event ? a.event(e3) : e3);
  }
}
function K(e3) {
  if (this.l)
    return this.l[e3.type + true](a.event ? a.event(e3) : e3);
}
function G(e3, _2, t2, i4, n4, r4, l6, u7, c2, s4) {
  var p6, o5, m5, f5, h7, k6, v3, d9, y7, C6, T8, P6, j5, U7, N3, g6 = _2.type;
  if (_2.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r4 = [u7 = _2.__e = t2.__e]), (p6 = a.__b) && p6(_2);
  e:
    if (typeof g6 == "function")
      try {
        if (d9 = _2.props, y7 = (p6 = g6.contextType) && i4[p6.__c], C6 = p6 ? y7 ? y7.props.value : p6.__ : i4, t2.__c ? v3 = (o5 = _2.__c = t2.__c).__ = o5.__E : ("prototype" in g6 && g6.prototype.render ? _2.__c = o5 = new g6(d9, C6) : (_2.__c = o5 = new W(d9, C6), o5.constructor = g6, o5.render = ce), y7 && y7.sub(o5), o5.props = d9, o5.state || (o5.state = {}), o5.context = C6, o5.__n = i4, m5 = o5.__d = true, o5.__h = [], o5._sb = []), o5.__s == null && (o5.__s = o5.state), g6.getDerivedStateFromProps != null && (o5.__s == o5.state && (o5.__s = b({}, o5.__s)), b(o5.__s, g6.getDerivedStateFromProps(d9, o5.__s))), f5 = o5.props, h7 = o5.state, o5.__v = _2, m5)
          g6.getDerivedStateFromProps == null && o5.componentWillMount != null && o5.componentWillMount(), o5.componentDidMount != null && o5.__h.push(o5.componentDidMount);
        else {
          if (g6.getDerivedStateFromProps == null && d9 !== f5 && o5.componentWillReceiveProps != null && o5.componentWillReceiveProps(d9, C6), !o5.__e && (o5.shouldComponentUpdate != null && o5.shouldComponentUpdate(d9, o5.__s, C6) === false || _2.__v === t2.__v)) {
            for (_2.__v !== t2.__v && (o5.props = d9, o5.state = o5.__s, o5.__d = false), _2.__e = t2.__e, _2.__k = t2.__k, _2.__k.forEach(function(L10) {
              L10 && (L10.__ = _2);
            }), T8 = 0; T8 < o5._sb.length; T8++)
              o5.__h.push(o5._sb[T8]);
            o5._sb = [], o5.__h.length && l6.push(o5);
            break e;
          }
          o5.componentWillUpdate != null && o5.componentWillUpdate(d9, o5.__s, C6), o5.componentDidUpdate != null && o5.__h.push(function() {
            o5.componentDidUpdate(f5, h7, k6);
          });
        }
        if (o5.context = C6, o5.props = d9, o5.__P = e3, o5.__e = false, P6 = a.__r, j5 = 0, "prototype" in g6 && g6.prototype.render) {
          for (o5.state = o5.__s, o5.__d = false, P6 && P6(_2), p6 = o5.render(o5.props, o5.state, o5.context), U7 = 0; U7 < o5._sb.length; U7++)
            o5.__h.push(o5._sb[U7]);
          o5._sb = [];
        } else
          do
            o5.__d = false, P6 && P6(_2), p6 = o5.render(o5.props, o5.state, o5.context), o5.state = o5.__s;
          while (o5.__d && ++j5 < 25);
        o5.state = o5.__s, o5.getChildContext != null && (i4 = b(b({}, i4), o5.getChildContext())), m5 || o5.getSnapshotBeforeUpdate == null || (k6 = o5.getSnapshotBeforeUpdate(f5, h7)), _e(e3, F(N3 = p6 != null && p6.type === H && p6.key == null ? p6.props.children : p6) ? N3 : [N3], _2, t2, i4, n4, r4, l6, u7, c2, s4), o5.base = _2.__e, _2.__u &= -161, o5.__h.length && l6.push(o5), v3 && (o5.__E = o5.__ = null);
      } catch (L10) {
        _2.__v = null, c2 || r4 != null ? (_2.__e = u7, _2.__u |= c2 ? 160 : 32, r4[r4.indexOf(u7)] = null) : (_2.__e = t2.__e, _2.__k = t2.__k), a.__e(L10, _2, t2);
      }
    else
      r4 == null && _2.__v === t2.__v ? (_2.__k = t2.__k, _2.__e = t2.__e) : _2.__e = fe(t2.__e, _2, t2, i4, n4, r4, l6, c2, s4);
  (p6 = a.diffed) && p6(_2);
}
function R(e3, _2, t2) {
  for (var i4 = 0; i4 < t2.length; i4++)
    V(t2[i4], t2[++i4], t2[++i4]);
  a.__c && a.__c(_2, e3), e3.some(function(n4) {
    try {
      e3 = n4.__h, n4.__h = [], e3.some(function(r4) {
        r4.call(n4);
      });
    } catch (r4) {
      a.__e(r4, n4.__v);
    }
  });
}
function fe(e3, _2, t2, i4, n4, r4, l6, u7, c2) {
  var s4, p6, o5, m5, f5, h7, k6, v3 = t2.props, d9 = _2.props, y7 = _2.type;
  if (y7 === "svg" && (n4 = true), r4 != null) {
    for (s4 = 0; s4 < r4.length; s4++)
      if ((f5 = r4[s4]) && "setAttribute" in f5 == !!y7 && (y7 ? f5.localName === y7 : f5.nodeType === 3)) {
        e3 = f5, r4[s4] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y7 === null)
      return document.createTextNode(d9);
    e3 = n4 ? document.createElementNS("http://www.w3.org/2000/svg", y7) : document.createElement(y7, d9.is && d9), r4 = null, u7 = false;
  }
  if (y7 === null)
    v3 === d9 || u7 && e3.data === d9 || (e3.data = d9);
  else {
    if (r4 = r4 && D.call(e3.childNodes), v3 = t2.props || E, !u7 && r4 != null)
      for (v3 = {}, s4 = 0; s4 < e3.attributes.length; s4++)
        v3[(f5 = e3.attributes[s4]).name] = f5.value;
    for (s4 in v3)
      f5 = v3[s4], s4 == "children" || (s4 == "dangerouslySetInnerHTML" ? o5 = f5 : s4 === "key" || s4 in d9 || M(e3, s4, null, f5, n4));
    for (s4 in d9)
      f5 = d9[s4], s4 == "children" ? m5 = f5 : s4 == "dangerouslySetInnerHTML" ? p6 = f5 : s4 == "value" ? h7 = f5 : s4 == "checked" ? k6 = f5 : s4 === "key" || u7 && typeof f5 != "function" || v3[s4] === f5 || M(e3, s4, f5, v3[s4], n4);
    if (p6)
      u7 || o5 && (p6.__html === o5.__html || p6.__html === e3.innerHTML) || (e3.innerHTML = p6.__html), _2.__k = [];
    else if (o5 && (e3.innerHTML = ""), _e(e3, F(m5) ? m5 : [m5], _2, t2, i4, n4 && y7 !== "foreignObject", r4, l6, r4 ? r4[0] : t2.__k && w(t2, 0), u7, c2), r4 != null)
      for (s4 = r4.length; s4--; )
        r4[s4] != null && Z(r4[s4]);
    u7 || (s4 = "value", h7 !== void 0 && (h7 !== e3[s4] || y7 === "progress" && !h7 || y7 === "option" && h7 !== v3[s4]) && M(e3, s4, h7, v3[s4], false), s4 = "checked", k6 !== void 0 && k6 !== e3[s4] && M(e3, s4, k6, v3[s4], false));
  }
  return e3;
}
function V(e3, _2, t2) {
  try {
    typeof e3 == "function" ? e3(_2) : e3.current = _2;
  } catch (i4) {
    a.__e(i4, t2);
  }
}
function B(e3, _2, t2) {
  var i4, n4;
  if (a.unmount && a.unmount(e3), (i4 = e3.ref) && (i4.current && i4.current !== e3.__e || V(i4, null, _2)), (i4 = e3.__c) != null) {
    if (i4.componentWillUnmount)
      try {
        i4.componentWillUnmount();
      } catch (r4) {
        a.__e(r4, _2);
      }
    i4.base = i4.__P = null, e3.__c = void 0;
  }
  if (i4 = e3.__k)
    for (n4 = 0; n4 < i4.length; n4++)
      i4[n4] && B(i4[n4], _2, t2 || typeof e3.type != "function");
  t2 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _2, t2) {
  return this.constructor(e3, t2);
}
function pe(e3, _2, t2) {
  var i4, n4, r4, l6;
  a.__ && a.__(e3, _2), n4 = (i4 = typeof t2 == "function") ? null : t2 && t2.__k || _2.__k, r4 = [], l6 = [], G(_2, e3 = (!i4 && t2 || _2).__k = re(H, null, [e3]), n4 || E, E, _2.ownerSVGElement !== void 0, !i4 && t2 ? [t2] : n4 ? null : _2.firstChild ? D.call(_2.childNodes) : null, r4, !i4 && t2 ? t2 : n4 ? n4.__e : _2.firstChild, i4, l6), e3.__d = void 0, R(r4, e3, l6);
}
function ae(e3, _2) {
  pe(e3, _2, ae);
}
function he(e3, _2, t2) {
  var i4, n4, r4, l6, u7 = b({}, e3.props);
  for (r4 in e3.type && e3.type.defaultProps && (l6 = e3.type.defaultProps), _2)
    r4 == "key" ? i4 = _2[r4] : r4 == "ref" ? n4 = _2[r4] : u7[r4] = _2[r4] === void 0 && l6 !== void 0 ? l6[r4] : _2[r4];
  return arguments.length > 2 && (u7.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e3.type, u7, i4 || e3.key, n4 || e3.ref, null);
}
function ve(e3, _2) {
  var t2 = { __c: _2 = "__cC" + Y++, __: e3, Consumer: function(i4, n4) {
    return i4.children(n4);
  }, Provider: function(i4) {
    var n4, r4;
    return this.getChildContext || (n4 = [], (r4 = {})[_2] = this, this.getChildContext = function() {
      return r4;
    }, this.shouldComponentUpdate = function(l6) {
      this.props.value !== l6.value && n4.some(function(u7) {
        u7.__e = true, I(u7);
      });
    }, this.sub = function(l6) {
      n4.push(l6);
      var u7 = l6.componentWillUnmount;
      l6.componentWillUnmount = function() {
        n4.splice(n4.indexOf(l6), 1), u7 && u7.call(l6);
      };
    }), i4.children;
  } };
  return t2.Provider.__ = t2.Consumer.contextType = t2;
}
D = O.slice, a = { __e: function(e3, _2, t2, i4) {
  for (var n4, r4, l6; _2 = _2.__; )
    if ((n4 = _2.__c) && !n4.__)
      try {
        if ((r4 = n4.constructor) && r4.getDerivedStateFromError != null && (n4.setState(r4.getDerivedStateFromError(e3)), l6 = n4.__d), n4.componentDidCatch != null && (n4.componentDidCatch(e3, i4 || {}), l6 = n4.__d), l6)
          return n4.__E = n4;
      } catch (u7) {
        e3 = u7;
      }
  throw e3;
} }, Q = 0, ne = function(e3) {
  return e3 != null && e3.constructor == null;
}, W.prototype.setState = function(e3, _2) {
  var t2;
  t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e3 == "function" && (e3 = e3(b({}, t2), this.props)), e3 && b(t2, e3), e3 != null && this.__v && (_2 && this._sb.push(_2), I(this));
}, W.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = true, e3 && this.__h.push(e3), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e3, _2) {
  return e3.__v.__b - _2.__v.__b;
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
function l(t2, _2) {
  o.__h && o.__h(r, t2, v || _2), v = 0;
  var u7 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= u7.__.length && u7.__.push({ __V: p }), u7.__[t2];
}
function I2(t2) {
  return v = 1, R2(U, t2);
}
function R2(t2, _2, u7) {
  var n4 = l(c++, 2);
  if (n4.t = t2, !n4.__c && (n4.__ = [u7 ? u7(_2) : U(void 0, _2), function(a4) {
    var f5 = n4.__N ? n4.__N[0] : n4.__[0], s4 = n4.t(f5, a4);
    f5 !== s4 && (n4.__N = [s4, n4.__[1]], n4.__c.setState({}));
  }], n4.__c = r, !r.u)) {
    var i4 = function(a4, f5, s4) {
      if (!n4.__c.__H)
        return true;
      var m5 = n4.__c.__H.__.filter(function(e3) {
        return !!e3.__c;
      });
      if (m5.every(function(e3) {
        return !e3.__N;
      }))
        return !h7 || h7.call(this, a4, f5, s4);
      var V5 = false;
      return m5.forEach(function(e3) {
        if (e3.__N) {
          var P6 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P6 !== e3.__[0] && (V5 = true);
        }
      }), !(!V5 && n4.__c.props === a4) && (!h7 || h7.call(this, a4, f5, s4));
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
  return n4.__N || n4.__;
}
function z2(t2, _2) {
  var u7 = l(c++, 3);
  !o.__s && y(u7.__H, _2) && (u7.__ = t2, u7.i = _2, r.__H.__h.push(u7));
}
function S2(t2, _2) {
  var u7 = l(c++, 4);
  !o.__s && y(u7.__H, _2) && (u7.__ = t2, u7.i = _2, r.__h.push(u7));
}
function L(t2) {
  return v = 5, T(function() {
    return { current: t2 };
  }, []);
}
function M2(t2, _2, u7) {
  v = 6, S2(function() {
    return typeof t2 == "function" ? (t2(_2()), function() {
      return t2(null);
    }) : t2 ? (t2.current = _2(), function() {
      return t2.current = null;
    }) : void 0;
  }, u7 == null ? u7 : u7.concat(t2));
}
function T(t2, _2) {
  var u7 = l(c++, 7);
  return y(u7.__H, _2) ? (u7.__V = t2(), u7.i = _2, u7.__h = t2, u7.__V) : u7.__;
}
function G2(t2, _2) {
  return v = 8, T(function() {
    return t2;
  }, _2);
}
function J2(t2) {
  var _2 = r.context[t2.__c], u7 = l(c++, 9);
  return u7.c = t2, _2 ? (u7.__ == null && (u7.__ = true, _2.sub(r)), _2.props.value) : t2.__;
}
function K2(t2, _2) {
  o.useDebugValue && o.useDebugValue(_2 ? _2(t2) : t2);
}
function O2(t2) {
  var _2 = l(c++, 10), u7 = I2();
  return _2.__ = t2, r.componentDidCatch || (r.componentDidCatch = function(n4, i4) {
    _2.__ && _2.__(n4, i4), u7[1](n4);
  }), [u7[0], function() {
    u7[1](void 0);
  }];
}
function Q2() {
  var t2 = l(c++, 11);
  if (!t2.__) {
    for (var _2 = r.__v; _2 !== null && !_2.__m && _2.__ !== null; )
      _2 = _2.__;
    var u7 = _2.__m || (_2.__m = [0, 0]);
    t2.__ = "P" + u7[0] + "-" + u7[1]++;
  }
  return t2.__;
}
function W2() {
  for (var t2; t2 = x2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(d), t2.__H.__h.forEach(E2), t2.__H.__h = [];
      } catch (_2) {
        t2.__H.__h = [], o.__e(_2, t2.__v);
      }
}
o.__b = function(t2) {
  r = null, g && g(t2);
}, o.__ = function(t2, _2) {
  t2 && _2.__k && _2.__k.__m && (t2.__m = _2.__k.__m), k && k(t2, _2);
}, o.__r = function(t2) {
  C && C(t2), c = 0;
  var _2 = (r = t2.__c).__H;
  _2 && (H2 === r ? (_2.__h = [], r.__h = [], _2.__.forEach(function(u7) {
    u7.__N && (u7.__ = u7.__N), u7.__V = p, u7.__N = u7.i = void 0;
  })) : (_2.__h.forEach(d), _2.__h.forEach(E2), _2.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t2) {
  A2 && A2(t2);
  var _2 = t2.__c;
  _2 && _2.__H && (_2.__H.__h.length && (x2.push(_2) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _2.__H.__.forEach(function(u7) {
    u7.i && (u7.__H = u7.i), u7.__V !== p && (u7.__ = u7.__V), u7.i = void 0, u7.__V = p;
  })), H2 = r = null;
}, o.__c = function(t2, _2) {
  _2.some(function(u7) {
    try {
      u7.__h.forEach(d), u7.__h = u7.__h.filter(function(n4) {
        return !n4.__ || E2(n4);
      });
    } catch (n4) {
      _2.some(function(i4) {
        i4.__h && (i4.__h = []);
      }), _2 = [], o.__e(n4, u7.__v);
    }
  }), D2 && D2(t2, _2);
}, o.unmount = function(t2) {
  F2 && F2(t2);
  var _2, u7 = t2.__c;
  u7 && u7.__H && (u7.__H.__.forEach(function(n4) {
    try {
      d(n4);
    } catch (i4) {
      _2 = i4;
    }
  }), u7.__H = void 0, _2 && o.__e(_2, u7.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _2, u7 = function() {
    clearTimeout(n4), q2 && cancelAnimationFrame(_2), setTimeout(t2);
  }, n4 = setTimeout(u7, 100);
  q2 && (_2 = requestAnimationFrame(u7));
}
function d(t2) {
  var _2 = r, u7 = t2.__c;
  typeof u7 == "function" && (t2.__c = void 0, u7()), r = _2;
}
function E2(t2) {
  var _2 = r;
  t2.__c = t2.__(), r = _2;
}
function y(t2, _2) {
  return !t2 || t2.length !== _2.length || _2.some(function(u7, n4) {
    return u7 !== t2[n4];
  });
}
function U(t2, _2) {
  return typeof _2 == "function" ? _2(t2) : _2;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e3, t2) {
  for (var n4 in t2)
    e3[n4] = t2[n4];
  return e3;
}
function b3(e3, t2) {
  for (var n4 in e3)
    if (n4 !== "__source" && !(n4 in t2))
      return true;
  for (var r4 in t2)
    if (r4 !== "__source" && e3[r4] !== t2[r4])
      return true;
  return false;
}
function C2(e3, t2) {
  this.props = e3, this.context = t2;
}
function Q3(e3, t2) {
  function n4(o5) {
    var u7 = this.props.ref, a4 = u7 == o5.ref;
    return !a4 && u7 && (u7.call ? u7(null) : u7.current = null), t2 ? !t2(this.props, o5) || !a4 : b3(this.props, o5);
  }
  function r4(o5) {
    return this.shouldComponentUpdate = n4, re(e3, o5);
  }
  return r4.displayName = "Memo(" + (e3.displayName || e3.name) + ")", r4.prototype.isReactComponent = true, r4.__f = true, r4;
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
  function t2(n4) {
    var r4 = L2({}, n4);
    return delete r4.ref, e3(r4, n4.ref || null);
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
a.__e = function(e3, t2, n4, r4) {
  if (e3.then) {
    for (var o5, u7 = t2; u7 = u7.__; )
      if ((o5 = u7.__c) && o5.__c)
        return t2.__e == null && (t2.__e = n4.__e, t2.__k = n4.__k), o5.__c(e3, t2);
  }
  ne2(e3, t2, n4, r4);
};
var x3 = a.unmount;
function T2(e3, t2, n4) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(r4) {
    typeof r4.__c == "function" && r4.__c();
  }), e3.__c.__H = null), (e3 = L2({}, e3)).__c != null && (e3.__c.__P === n4 && (e3.__c.__P = t2), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(r4) {
    return T2(r4, t2, n4);
  })), e3;
}
function A3(e3, t2, n4) {
  return e3 && n4 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(r4) {
    return A3(r4, t2, n4);
  }), e3.__c && e3.__c.__P === t2 && (e3.__e && n4.appendChild(e3.__e), e3.__c.__e = true, e3.__c.__P = n4)), e3;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e3) {
  var t2 = e3.__.__c;
  return t2 && t2.__a && t2.__a(e3);
}
function re2(e3) {
  var t2, n4, r4;
  function o5(u7) {
    if (t2 || (t2 = e3()).then(function(a4) {
      n4 = a4.default || a4;
    }, function(a4) {
      r4 = a4;
    }), r4)
      throw r4;
    if (!n4)
      throw t2;
    return re(n4, u7);
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
  var n4 = t2.__c, r4 = this;
  r4.t == null && (r4.t = []), r4.t.push(n4);
  var o5 = F3(r4.__v), u7 = false, a4 = function() {
    u7 || (u7 = true, n4.__R = null, o5 ? o5(l6) : l6());
  };
  n4.__R = a4;
  var l6 = function() {
    if (!--r4.__u) {
      if (r4.state.__a) {
        var s4 = r4.state.__a;
        r4.__v.__k[0] = A3(s4, s4.__c.__P, s4.__c.__O);
      }
      var g6;
      for (r4.setState({ __a: r4.__b = null }); g6 = r4.t.pop(); )
        g6.forceUpdate();
    }
  };
  r4.__u++ || 32 & t2.__u || r4.setState({ __a: r4.__b = r4.__v.__k[0] }), e3.then(a4, a4);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e3, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n4 = document.createElement("div"), r4 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n4, r4.__O = r4.__P);
    }
    this.__b = null;
  }
  var o5 = t2.__a && re(H, null, e3.fallback);
  return o5 && (o5.__u &= -33), [re(H, null, t2.__a ? null : e3.children), o5];
};
var k2 = function(e3, t2, n4) {
  if (++n4[1] === n4[0] && e3.o.delete(t2), e3.props.revealOrder && (e3.props.revealOrder[0] !== "t" || !e3.o.size))
    for (n4 = e3.u; n4; ) {
      for (; n4.length > 3; )
        n4.pop()();
      if (n4[1] < n4[0])
        break;
      e3.u = n4 = n4[2];
    }
};
function oe2(e3) {
  return this.getChildContext = function() {
    return e3.context;
  }, e3.children;
}
function ue2(e3) {
  var t2 = this, n4 = e3.i;
  t2.componentWillUnmount = function() {
    pe(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n4 && t2.componentWillUnmount(), t2.l || (t2.i = n4, t2.l = { nodeType: 1, parentNode: n4, childNodes: [], appendChild: function(r4) {
    this.childNodes.push(r4), t2.i.appendChild(r4);
  }, insertBefore: function(r4, o5) {
    this.childNodes.push(r4), t2.i.appendChild(r4);
  }, removeChild: function(r4) {
    this.childNodes.splice(this.childNodes.indexOf(r4) >>> 1, 1), t2.i.removeChild(r4);
  } }), pe(re(oe2, { context: t2.context }, e3.__v), t2.l);
}
function ae2(e3, t2) {
  var n4 = re(ue2, { __v: e3, i: t2 });
  return n4.containerInfo = t2, n4;
}
(p2.prototype = new W()).__a = function(e3) {
  var t2 = this, n4 = F3(t2.__v), r4 = t2.o.get(e3);
  return r4[0]++, function(o5) {
    var u7 = function() {
      t2.props.revealOrder ? (r4.push(o5), k2(t2, e3, r4)) : o5();
    };
    n4 ? n4(u7) : u7();
  };
}, p2.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e3.children);
  e3.revealOrder && e3.revealOrder[0] === "b" && t2.reverse();
  for (var n4 = t2.length; n4--; )
    this.o.set(t2[n4], this.u = [1, 0, this.u]);
  return e3.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t2, n4) {
    k2(e3, n4, t2);
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
function fe2(e3, t2, n4) {
  return t2.__k == null && (t2.textContent = ""), pe(e3, t2), typeof n4 == "function" && n4(), e3 ? e3.__c : null;
}
function pe2(e3, t2, n4) {
  return ae(e3, t2), typeof n4 == "function" && n4(), e3 ? e3.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e3) {
  Object.defineProperty(W.prototype, e3, { configurable: true, get: function() {
    return this["UNSAFE_" + e3];
  }, set: function(t2) {
    Object.defineProperty(this, e3, { configurable: true, writable: true, value: t2 });
  } });
});
var O3 = a.event;
function de2() {
}
function he2() {
  return this.cancelBubble;
}
function ve2() {
  return this.defaultPrevented;
}
a.event = function(e3) {
  return O3 && (e3 = O3(e3)), e3.persist = de2, e3.isPropagationStopped = he2, e3.isDefaultPrevented = ve2, e3.nativeEvent = e3;
};
var S3;
var me = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var P = a.vnode;
a.vnode = function(e3) {
  typeof e3.type == "string" && function(t2) {
    var n4 = t2.props, r4 = t2.type, o5 = {};
    for (var u7 in n4) {
      var a4 = n4[u7];
      if (!(u7 === "value" && "defaultValue" in n4 && a4 == null || _e2 && u7 === "children" && r4 === "noscript" || u7 === "class" || u7 === "className")) {
        var l6 = u7.toLowerCase();
        u7 === "defaultValue" && "value" in n4 && n4.value == null ? u7 = "value" : u7 === "download" && a4 === true ? a4 = "" : l6 === "translate" && a4 === "no" ? a4 = false : l6 === "ondoubleclick" ? u7 = "ondblclick" : l6 !== "onchange" || r4 !== "input" && r4 !== "textarea" || ce2(n4.type) ? l6 === "onfocus" ? u7 = "onfocusin" : l6 === "onblur" ? u7 = "onfocusout" : le2.test(u7) ? u7 = l6 : r4.indexOf("-") === -1 && ie2.test(u7) ? u7 = u7.replace(se2, "-$&").toLowerCase() : a4 === null && (a4 = void 0) : l6 = u7 = "oninput", l6 === "oninput" && o5[u7 = l6] && (u7 = "oninputCapture"), o5[u7] = a4;
      }
    }
    r4 == "select" && o5.multiple && Array.isArray(o5.value) && (o5.value = se(n4.children).forEach(function(s4) {
      s4.props.selected = o5.value.indexOf(s4.props.value) != -1;
    })), r4 == "select" && o5.defaultValue != null && (o5.value = se(n4.children).forEach(function(s4) {
      s4.props.selected = o5.multiple ? o5.defaultValue.indexOf(s4.props.value) != -1 : o5.defaultValue == s4.props.value;
    })), n4.class && !n4.className ? (o5.class = n4.class, Object.defineProperty(o5, "className", me)) : (n4.className && !n4.class || n4.class && n4.className) && (o5.class = o5.className = n4.className), t2.props = o5;
  }(e3), e3.$$typeof = V2, P && P(e3);
};
var w2 = a.__r;
a.__r = function(e3) {
  w2 && w2(e3), S3 = e3.__c;
};
var U2 = a.diffed;
a.diffed = function(e3) {
  U2 && U2(e3);
  var t2 = e3.props, n4 = e3.__e;
  n4 != null && e3.type === "textarea" && "value" in t2 && t2.value !== n4.value && (n4.value = t2.value == null ? "" : t2.value), S3 = null;
};
var ye = { ReactCurrentDispatcher: { current: { readContext: function(e3) {
  return S3.__n[e3.__c].props.value;
} } } };
var Le = "17.0.2";
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
  var n4 = t2(), r4 = I2({ h: { __: n4, v: t2 } }), o5 = r4[0].h, u7 = r4[1];
  return S2(function() {
    o5.__ = n4, o5.v = t2, y2(o5) && u7({ h: o5 });
  }, [e3, n4, t2]), z2(function() {
    return y2(o5) && u7({ h: o5 }), e3(function() {
      y2(o5) && u7({ h: o5 });
    });
  }, [e3]), n4;
}
function y2(e3) {
  var t2, n4, r4 = e3.v, o5 = e3.__;
  try {
    var u7 = r4();
    return !((t2 = o5) === (n4 = u7) && (t2 !== 0 || 1 / t2 == 1 / n4) || t2 != t2 && n4 != n4);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n4, t2) => {
  for (var e3 in t2)
    s(n4, e3, { get: t2[e3], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n4) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e3 = arguments[t2];
      for (var a4 in e3)
        Object.prototype.hasOwnProperty.call(e3, a4) && (n4[a4] = e3[a4]);
    }
    return n4;
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

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t2, c2 = []) {
  let o5 = [];
  function a4(r4, e3) {
    let n4 = ve(e3), s4 = o5.length;
    o5 = [...o5, e3];
    function f5(d9) {
      let { scope: i4, children: x6, ...$5 } = d9, h7 = i4?.[t2][s4] || n4, S9 = T(() => $5, Object.values($5));
      return re(h7.Provider, { value: S9 }, x6);
    }
    function v3(d9, i4) {
      let x6 = i4?.[t2][s4] || n4, $5 = J2(x6);
      if ($5)
        return $5;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d9}\` must be used within \`${r4}\``);
    }
    return f5.displayName = r4 + "Provider", [f5, v3];
  }
  let u7 = () => {
    let r4 = o5.map((e3) => ve(e3));
    return function(n4) {
      let s4 = n4?.[t2] || r4;
      return T(() => ({ [`__scope${t2}`]: { ...n4, [t2]: s4 } }), [n4, s4]);
    };
  };
  return u7.scopeName = t2, [a4, C3(u7, ...c2)];
}
function C3(...t2) {
  let c2 = t2[0];
  if (t2.length === 1)
    return c2;
  let o5 = () => {
    let a4 = t2.map((u7) => ({ useScope: u7(), scopeName: u7.scopeName }));
    return function(r4) {
      let e3 = a4.reduce((n4, { useScope: s4, scopeName: f5 }) => {
        let d9 = s4(r4)[`__scope${f5}`];
        return { ...n4, ...d9 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e3 }), [e3]);
    };
  };
  return o5.scopeName = c2.scopeName, o5;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n4, t2) => {
  let { children: e3, ...r4 } = n4, o5 = te2.toArray(e3), l6 = o5.find(I3);
  if (l6) {
    let c2 = l6.props.children, a4 = o5.map((m5) => m5 === l6 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m5);
    return re($2, p3({}, r4, { ref: t2 }), m(c2) ? Ee(c2, void 0, a4) : null);
  }
  return re($2, p3({}, r4, { ref: t2 }), e3);
});
b4.displayName = "Slot";
var $2 = ee2((n4, t2) => {
  let { children: e3, ...r4 } = n4;
  return m(e3) ? Ee(e3, { ...X3(r4, e3.props), ref: t2 ? t(t2, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n4 }) => re(H, null, n4);
function I3(n4) {
  return m(n4) && n4.type === y3;
}
function X3(n4, t2) {
  let e3 = { ...t2 };
  for (let r4 in t2) {
    let o5 = n4[r4], l6 = t2[r4];
    /^on[A-Z]/.test(r4) ? o5 && l6 ? e3[r4] = (...a4) => {
      l6(...a4), o5(...a4);
    } : o5 && (e3[r4] = o5) : r4 === "style" ? e3[r4] = { ...o5, ...l6 } : r4 === "className" && (e3[r4] = [o5, l6].filter(Boolean).join(" "));
  }
  return { ...n4, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t2, e3) => {
  let f5 = ee2((r4, o5) => {
    let { asChild: s4, ...a4 } = r4, i4 = s4 ? b4 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i4, p3({}, a4, { ref: o5 }));
  });
  return f5.displayName = `Primitive.${e3}`, { ...t2, [e3]: f5 };
}, {});
function E3(t2, e3) {
  t2 && Re(() => t2.dispatchEvent(e3));
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f5) {
  let e3 = L(f5);
  return z2(() => {
    e3.current = f5;
  }), T(() => (...u7) => {
    var r4;
    return (r4 = e3.current) === null || r4 === void 0 ? void 0 : r4.call(e3, ...u7);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i(d9, e3 = globalThis?.document) {
  let a4 = l2(d9);
  z2(() => {
    let o5 = (s4) => {
      s4.key === "Escape" && a4(s4);
    };
    return e3.addEventListener("keydown", o5), () => e3.removeEventListener("keydown", o5);
  }, [a4, e3]);
}

// https://esm.sh/v132/@radix-ui/react-dismissable-layer@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dismissable-layer.mjs
var h2 = "dismissableLayer.update";
var X4 = "dismissableLayer.pointerDownOutside";
var Y2 = "dismissableLayer.focusOutside";
var g2;
var F4 = ve({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var G3 = ee2((n4, e3) => {
  var o5;
  let { disableOutsidePointerEvents: i4 = false, onEscapeKeyDown: t2, onPointerDownOutside: r4, onFocusOutside: f5, onInteractOutside: d9, onDismiss: l6, ...v3 } = n4, a4 = J2(F4), [c2, S9] = I2(null), u7 = (o5 = c2?.ownerDocument) !== null && o5 !== void 0 ? o5 : globalThis?.document, [, W4] = I2({}), A6 = u2(e3, (s4) => S9(s4)), y7 = Array.from(a4.layers), [N3] = [...a4.layersWithOutsidePointerEventsDisabled].slice(-1), _2 = y7.indexOf(N3), D4 = c2 ? y7.indexOf(c2) : -1, U7 = a4.layersWithOutsidePointerEventsDisabled.size > 0, w7 = D4 >= _2, z6 = Q4((s4) => {
    let $5 = s4.target, P6 = [...a4.branches].some((E6) => E6.contains($5));
    !w7 || P6 || (r4?.(s4), d9?.(s4), s4.defaultPrevented || l6?.());
  }, u7), O7 = V3((s4) => {
    let $5 = s4.target;
    [...a4.branches].some((E6) => E6.contains($5)) || (f5?.(s4), d9?.(s4), s4.defaultPrevented || l6?.());
  }, u7);
  return i((s4) => {
    D4 === a4.layers.size - 1 && (t2?.(s4), !s4.defaultPrevented && l6 && (s4.preventDefault(), l6()));
  }, u7), z2(() => {
    if (c2)
      return i4 && (a4.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u7.body.style.pointerEvents, u7.body.style.pointerEvents = "none"), a4.layersWithOutsidePointerEventsDisabled.add(c2)), a4.layers.add(c2), L3(), () => {
        i4 && a4.layersWithOutsidePointerEventsDisabled.size === 1 && (u7.body.style.pointerEvents = g2);
      };
  }, [c2, u7, i4, a4]), z2(() => () => {
    c2 && (a4.layers.delete(c2), a4.layersWithOutsidePointerEventsDisabled.delete(c2), L3());
  }, [c2, a4]), z2(() => {
    let s4 = () => W4({});
    return document.addEventListener(h2, s4), () => document.removeEventListener(h2, s4);
  }, []), re(u3.div, p3({}, v3, { ref: A6, style: { pointerEvents: U7 ? w7 ? "auto" : "none" : void 0, ...n4.style }, onFocusCapture: o3(n4.onFocusCapture, O7.onFocusCapture), onBlurCapture: o3(n4.onBlurCapture, O7.onBlurCapture), onPointerDownCapture: o3(n4.onPointerDownCapture, z6.onPointerDownCapture) }));
});
var J3 = ee2((n4, e3) => {
  let o5 = J2(F4), i4 = L(null), t2 = u2(e3, i4);
  return z2(() => {
    let r4 = i4.current;
    if (r4)
      return o5.branches.add(r4), () => {
        o5.branches.delete(r4);
      };
  }, [o5.branches]), re(u3.div, p3({}, n4, { ref: t2 }));
});
function Q4(n4, e3 = globalThis?.document) {
  let o5 = l2(n4), i4 = L(false), t2 = L(() => {
  });
  return z2(() => {
    let r4 = (d9) => {
      if (d9.target && !i4.current) {
        let v3 = function() {
          I4(X4, o5, l6, { discrete: true });
        }, l6 = { originalEvent: d9 };
        d9.pointerType === "touch" ? (e3.removeEventListener("click", t2.current), t2.current = v3, e3.addEventListener("click", t2.current, { once: true })) : v3();
      } else
        e3.removeEventListener("click", t2.current);
      i4.current = false;
    }, f5 = window.setTimeout(() => {
      e3.addEventListener("pointerdown", r4);
    }, 0);
    return () => {
      window.clearTimeout(f5), e3.removeEventListener("pointerdown", r4), e3.removeEventListener("click", t2.current);
    };
  }, [e3, o5]), { onPointerDownCapture: () => i4.current = true };
}
function V3(n4, e3 = globalThis?.document) {
  let o5 = l2(n4), i4 = L(false);
  return z2(() => {
    let t2 = (r4) => {
      r4.target && !i4.current && I4(Y2, o5, { originalEvent: r4 }, { discrete: false });
    };
    return e3.addEventListener("focusin", t2), () => e3.removeEventListener("focusin", t2);
  }, [e3, o5]), { onFocusCapture: () => i4.current = true, onBlurCapture: () => i4.current = false };
}
function L3() {
  let n4 = new CustomEvent(h2);
  document.dispatchEvent(n4);
}
function I4(n4, e3, o5, { discrete: i4 }) {
  let t2 = o5.originalEvent.target, r4 = new CustomEvent(n4, { bubbles: false, cancelable: true, detail: o5 });
  e3 && t2.addEventListener(n4, e3, { once: true }), i4 ? E3(t2, r4) : t2.dispatchEvent(r4);
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u4 = compat_exports["useId".toString()] || (() => {
});
var r3 = 0;
function n2(t2) {
  let [e3, o5] = I2(u4());
  return e(() => {
    t2 || o5(($5) => $5 ?? String(r3++));
  }, [t2]), t2 || (e3 ? `radix-${e3}` : "");
}

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/utils.mjs
var a2 = ["top", "right", "bottom", "left"];
var f2 = ["start", "end"];
var O4 = a2.reduce((t2, n4) => t2.concat(n4, n4 + "-" + f2[0], n4 + "-" + f2[1]), []);
var m2 = Math.min;
var p4 = Math.max;
var S4 = Math.round;
var w3 = Math.floor;
var j2 = (t2) => ({ x: t2, y: t2 });
var h3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
var x4 = { start: "end", end: "start" };
function C4(t2, n4, o5) {
  return p4(t2, m2(n4, o5));
}
function L4(t2, n4) {
  return typeof t2 == "function" ? t2(n4) : t2;
}
function l3(t2) {
  return t2.split("-")[0];
}
function g3(t2) {
  return t2.split("-")[1];
}
function b5(t2) {
  return t2 === "x" ? "y" : "x";
}
function d4(t2) {
  return t2 === "y" ? "height" : "width";
}
function A4(t2) {
  return ["top", "bottom"].includes(l3(t2)) ? "y" : "x";
}
function y4(t2) {
  return b5(A4(t2));
}
function E4(t2, n4, o5) {
  o5 === void 0 && (o5 = false);
  let c2 = g3(t2), i4 = y4(t2), e3 = d4(i4), r4 = i4 === "x" ? c2 === (o5 ? "end" : "start") ? "right" : "left" : c2 === "start" ? "bottom" : "top";
  return n4.reference[e3] > n4.floating[e3] && (r4 = u5(r4)), [r4, u5(r4)];
}
function R4(t2) {
  let n4 = u5(t2);
  return [s2(t2), n4, s2(n4)];
}
function s2(t2) {
  return t2.replace(/start|end/g, (n4) => x4[n4]);
}
function P2(t2, n4, o5) {
  let c2 = ["left", "right"], i4 = ["right", "left"], e3 = ["top", "bottom"], r4 = ["bottom", "top"];
  switch (t2) {
    case "top":
    case "bottom":
      return o5 ? n4 ? i4 : c2 : n4 ? c2 : i4;
    case "left":
    case "right":
      return n4 ? e3 : r4;
    default:
      return [];
  }
}
function T3(t2, n4, o5, c2) {
  let i4 = g3(t2), e3 = P2(l3(t2), o5 === "start", c2);
  return i4 && (e3 = e3.map((r4) => r4 + "-" + i4), n4 && (e3 = e3.concat(e3.map(s2)))), e3;
}
function u5(t2) {
  return t2.replace(/left|right|bottom|top/g, (n4) => h3[n4]);
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
  let { reference: s4, floating: i4 } = e3, n4 = A4(t2), r4 = y4(t2), v3 = d4(r4), m5 = l3(t2), g6 = n4 === "y", u7 = s4.x + s4.width / 2 - i4.width / 2, c2 = s4.y + s4.height / 2 - i4.height / 2, f5 = s4[v3] / 2 - i4[v3] / 2, o5;
  switch (m5) {
    case "top":
      o5 = { x: u7, y: s4.y - i4.height };
      break;
    case "bottom":
      o5 = { x: u7, y: s4.y + s4.height };
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
  switch (g3(t2)) {
    case "start":
      o5[r4] -= f5 * (l6 && g6 ? -1 : 1);
      break;
    case "end":
      o5[r4] += f5 * (l6 && g6 ? -1 : 1);
      break;
  }
  return o5;
}
var ae3 = async (e3, t2, l6) => {
  let { placement: s4 = "bottom", strategy: i4 = "absolute", middleware: n4 = [], platform: r4 } = l6, v3 = n4.filter(Boolean), m5 = await (r4.isRTL == null ? void 0 : r4.isRTL(t2)), g6 = await r4.getElementRects({ reference: e3, floating: t2, strategy: i4 }), { x: u7, y: c2 } = q4(g6, s4, m5), f5 = s4, o5 = {}, a4 = 0;
  for (let x6 = 0; x6 < v3.length; x6++) {
    let { name: d9, fn: y7 } = v3[x6], { x: w7, y: p6, data: A6, reset: h7 } = await y7({ x: u7, y: c2, initialPlacement: s4, placement: f5, strategy: i4, middlewareData: o5, rects: g6, platform: r4, elements: { reference: e3, floating: t2 } });
    if (u7 = w7 ?? u7, c2 = p6 ?? c2, o5 = { ...o5, [d9]: { ...o5[d9], ...A6 } }, h7 && a4 <= 50) {
      a4++, typeof h7 == "object" && (h7.placement && (f5 = h7.placement), h7.rects && (g6 = h7.rects === true ? await r4.getElementRects({ reference: e3, floating: t2, strategy: i4 }) : h7.rects), { x: u7, y: c2 } = q4(g6, f5, m5)), x6 = -1;
      continue;
    }
  }
  return { x: u7, y: c2, placement: f5, strategy: i4, middlewareData: o5 };
};
async function j3(e3, t2) {
  var l6;
  t2 === void 0 && (t2 = {});
  let { x: s4, y: i4, platform: n4, rects: r4, elements: v3, strategy: m5 } = e3, { boundary: g6 = "clippingAncestors", rootBoundary: u7 = "viewport", elementContext: c2 = "floating", altBoundary: f5 = false, padding: o5 = 0 } = L4(t2, e3), a4 = k3(o5), d9 = v3[f5 ? c2 === "floating" ? "reference" : "floating" : c2], y7 = q3(await n4.getClippingRect({ element: (l6 = await (n4.isElement == null ? void 0 : n4.isElement(d9))) == null || l6 ? d9 : d9.contextElement || await (n4.getDocumentElement == null ? void 0 : n4.getDocumentElement(v3.floating)), boundary: g6, rootBoundary: u7, strategy: m5 })), w7 = c2 === "floating" ? { ...r4.floating, x: s4, y: i4 } : r4.reference, p6 = await (n4.getOffsetParent == null ? void 0 : n4.getOffsetParent(v3.floating)), A6 = await (n4.isElement == null ? void 0 : n4.isElement(p6)) ? await (n4.getScale == null ? void 0 : n4.getScale(p6)) || { x: 1, y: 1 } : { x: 1, y: 1 }, h7 = q3(n4.convertOffsetParentRelativeRectToViewportRelativeRect ? await n4.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w7, offsetParent: p6, strategy: m5 }) : w7);
  return { top: (y7.top - h7.top + a4.top) / A6.y, bottom: (h7.bottom - y7.bottom + a4.bottom) / A6.y, left: (y7.left - h7.left + a4.left) / A6.x, right: (h7.right - y7.right + a4.right) / A6.x };
}
var fe3 = (e3) => ({ name: "arrow", options: e3, async fn(t2) {
  let { x: l6, y: s4, placement: i4, rects: n4, platform: r4, elements: v3, middlewareData: m5 } = t2, { element: g6, padding: u7 = 0 } = L4(e3, t2) || {};
  if (g6 == null)
    return {};
  let c2 = k3(u7), f5 = { x: l6, y: s4 }, o5 = y4(i4), a4 = d4(o5), x6 = await r4.getDimensions(g6), d9 = o5 === "y", y7 = d9 ? "top" : "left", w7 = d9 ? "bottom" : "right", p6 = d9 ? "clientHeight" : "clientWidth", A6 = n4.reference[a4] + n4.reference[o5] - f5[o5] - n4.floating[a4], h7 = f5[o5] - n4.reference[o5], b7 = await (r4.getOffsetParent == null ? void 0 : r4.getOffsetParent(g6)), R6 = b7 ? b7[p6] : 0;
  (!R6 || !await (r4.isElement == null ? void 0 : r4.isElement(b7))) && (R6 = v3.floating[p6] || n4.floating[a4]);
  let B4 = A6 / 2 - h7 / 2, T8 = R6 / 2 - x6[a4] / 2 - 1, P6 = m2(c2[y7], T8), O7 = m2(c2[w7], T8), E6 = P6, S9 = R6 - x6[a4] - O7, C6 = R6 / 2 - x6[a4] / 2 + B4, k6 = C4(E6, C6, S9), L10 = !m5.arrow && g3(i4) != null && C6 != k6 && n4.reference[a4] / 2 - (C6 < E6 ? P6 : O7) - x6[a4] / 2 < 0, Y4 = L10 ? C6 < E6 ? E6 - C6 : S9 - C6 : 0;
  return { [o5]: f5[o5] - Y4, data: { [o5]: k6, centerOffset: C6 - k6 + Y4 }, reset: L10 };
} });
var de3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "flip", options: e3, async fn(t2) {
    var l6;
    let { placement: s4, middlewareData: i4, rects: n4, initialPlacement: r4, platform: v3, elements: m5 } = t2, { mainAxis: g6 = true, crossAxis: u7 = true, fallbackPlacements: c2, fallbackStrategy: f5 = "bestFit", fallbackAxisSideDirection: o5 = "none", flipAlignment: a4 = true, ...x6 } = L4(e3, t2), d9 = l3(s4), y7 = l3(r4) === r4, w7 = await (v3.isRTL == null ? void 0 : v3.isRTL(m5.floating)), p6 = c2 || (y7 || !a4 ? [u5(r4)] : R4(r4));
    !c2 && o5 !== "none" && p6.push(...T3(r4, a4, o5, w7));
    let A6 = [r4, ...p6], h7 = await j3(t2, x6), b7 = [], R6 = ((l6 = i4.flip) == null ? void 0 : l6.overflows) || [];
    if (g6 && b7.push(h7[d9]), u7) {
      let O7 = E4(s4, n4, w7);
      b7.push(h7[O7[0]], h7[O7[1]]);
    }
    if (R6 = [...R6, { placement: s4, overflows: b7 }], !b7.every((O7) => O7 <= 0)) {
      var B4, T8;
      let O7 = (((B4 = i4.flip) == null ? void 0 : B4.index) || 0) + 1, E6 = A6[O7];
      if (E6)
        return { data: { index: O7, overflows: R6 }, reset: { placement: E6 } };
      let S9 = (T8 = R6.filter((C6) => C6.overflows[0] <= 0).sort((C6, k6) => C6.overflows[1] - k6.overflows[1])[0]) == null ? void 0 : T8.placement;
      if (!S9)
        switch (f5) {
          case "bestFit": {
            var P6;
            let C6 = (P6 = R6.map((k6) => [k6.placement, k6.overflows.filter((L10) => L10 > 0).reduce((L10, Y4) => L10 + Y4, 0)]).sort((k6, L10) => k6[1] - L10[1])[0]) == null ? void 0 : P6[0];
            C6 && (S9 = C6);
            break;
          }
          case "initialPlacement":
            S9 = r4;
            break;
        }
      if (s4 !== S9)
        return { reset: { placement: S9 } };
    }
    return {};
  } };
};
function G4(e3, t2) {
  return { top: e3.top - t2.height, right: e3.right - t2.width, bottom: e3.bottom - t2.height, left: e3.left - t2.width };
}
function J4(e3) {
  return a2.some((t2) => e3[t2] >= 0);
}
var ue3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "hide", options: e3, async fn(t2) {
    let { rects: l6 } = t2, { strategy: s4 = "referenceHidden", ...i4 } = L4(e3, t2);
    switch (s4) {
      case "referenceHidden": {
        let n4 = await j3(t2, { ...i4, elementContext: "reference" }), r4 = G4(n4, l6.reference);
        return { data: { referenceHiddenOffsets: r4, referenceHidden: J4(r4) } };
      }
      case "escaped": {
        let n4 = await j3(t2, { ...i4, altBoundary: true }), r4 = G4(n4, l6.floating);
        return { data: { escapedOffsets: r4, escaped: J4(r4) } };
      }
      default:
        return {};
    }
  } };
};
async function le3(e3, t2) {
  let { placement: l6, platform: s4, elements: i4 } = e3, n4 = await (s4.isRTL == null ? void 0 : s4.isRTL(i4.floating)), r4 = l3(l6), v3 = g3(l6), m5 = A4(l6) === "y", g6 = ["left", "top"].includes(r4) ? -1 : 1, u7 = n4 && m5 ? -1 : 1, c2 = L4(t2, e3), { mainAxis: f5, crossAxis: o5, alignmentAxis: a4 } = typeof c2 == "number" ? { mainAxis: c2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c2 };
  return v3 && typeof a4 == "number" && (o5 = v3 === "end" ? a4 * -1 : a4), m5 ? { x: o5 * u7, y: f5 * g6 } : { x: f5 * g6, y: o5 * u7 };
}
var xe2 = function(e3) {
  return e3 === void 0 && (e3 = 0), { name: "offset", options: e3, async fn(t2) {
    let { x: l6, y: s4 } = t2, i4 = await le3(t2, e3);
    return { x: l6 + i4.x, y: s4 + i4.y, data: i4 };
  } };
};
var he3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "shift", options: e3, async fn(t2) {
    let { x: l6, y: s4, placement: i4 } = t2, { mainAxis: n4 = true, crossAxis: r4 = false, limiter: v3 = { fn: (d9) => {
      let { x: y7, y: w7 } = d9;
      return { x: y7, y: w7 };
    } }, ...m5 } = L4(e3, t2), g6 = { x: l6, y: s4 }, u7 = await j3(t2, m5), c2 = A4(l3(i4)), f5 = b5(c2), o5 = g6[f5], a4 = g6[c2];
    if (n4) {
      let d9 = f5 === "y" ? "top" : "left", y7 = f5 === "y" ? "bottom" : "right", w7 = o5 + u7[d9], p6 = o5 - u7[y7];
      o5 = C4(w7, o5, p6);
    }
    if (r4) {
      let d9 = c2 === "y" ? "top" : "left", y7 = c2 === "y" ? "bottom" : "right", w7 = a4 + u7[d9], p6 = a4 - u7[y7];
      a4 = C4(w7, a4, p6);
    }
    let x6 = v3.fn({ ...t2, [f5]: o5, [c2]: a4 });
    return { ...x6, data: { x: x6.x - l6, y: x6.y - s4 } };
  } };
};
var pe3 = function(e3) {
  return e3 === void 0 && (e3 = {}), { options: e3, fn(t2) {
    let { x: l6, y: s4, placement: i4, rects: n4, middlewareData: r4 } = t2, { offset: v3 = 0, mainAxis: m5 = true, crossAxis: g6 = true } = L4(e3, t2), u7 = { x: l6, y: s4 }, c2 = A4(i4), f5 = b5(c2), o5 = u7[f5], a4 = u7[c2], x6 = L4(v3, t2), d9 = typeof x6 == "number" ? { mainAxis: x6, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x6 };
    if (m5) {
      let p6 = f5 === "y" ? "height" : "width", A6 = n4.reference[f5] - n4.floating[p6] + d9.mainAxis, h7 = n4.reference[f5] + n4.reference[p6] - d9.mainAxis;
      o5 < A6 ? o5 = A6 : o5 > h7 && (o5 = h7);
    }
    if (g6) {
      var y7, w7;
      let p6 = f5 === "y" ? "width" : "height", A6 = ["top", "left"].includes(l3(i4)), h7 = n4.reference[c2] - n4.floating[p6] + (A6 && ((y7 = r4.offset) == null ? void 0 : y7[c2]) || 0) + (A6 ? 0 : d9.crossAxis), b7 = n4.reference[c2] + n4.reference[p6] + (A6 ? 0 : ((w7 = r4.offset) == null ? void 0 : w7[c2]) || 0) - (A6 ? d9.crossAxis : 0);
      a4 < h7 ? a4 = h7 : a4 > b7 && (a4 = b7);
    }
    return { [f5]: o5, [c2]: a4 };
  } };
};
var we2 = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: "size", options: e3, async fn(t2) {
    let { placement: l6, rects: s4, platform: i4, elements: n4 } = t2, { apply: r4 = () => {
    }, ...v3 } = L4(e3, t2), m5 = await j3(t2, v3), g6 = l3(l6), u7 = g3(l6), c2 = A4(l6) === "y", { width: f5, height: o5 } = s4.floating, a4, x6;
    g6 === "top" || g6 === "bottom" ? (a4 = g6, x6 = u7 === (await (i4.isRTL == null ? void 0 : i4.isRTL(n4.floating)) ? "start" : "end") ? "left" : "right") : (x6 = g6, a4 = u7 === "end" ? "top" : "bottom");
    let d9 = o5 - m5[a4], y7 = f5 - m5[x6], w7 = !t2.middlewareData.shift, p6 = d9, A6 = y7;
    if (c2) {
      let b7 = f5 - m5.left - m5.right;
      A6 = u7 || w7 ? m2(y7, b7) : b7;
    } else {
      let b7 = o5 - m5.top - m5.bottom;
      p6 = u7 || w7 ? m2(d9, b7) : b7;
    }
    if (w7 && !u7) {
      let b7 = p4(m5.left, 0), R6 = p4(m5.right, 0), B4 = p4(m5.top, 0), T8 = p4(m5.bottom, 0);
      c2 ? A6 = f5 - 2 * (b7 !== 0 || R6 !== 0 ? b7 + R6 : p4(m5.left, m5.right)) : p6 = o5 - 2 * (B4 !== 0 || T8 !== 0 ? B4 + T8 : p4(m5.top, m5.bottom));
    }
    await r4({ ...t2, availableWidth: A6, availableHeight: p6 });
    let h7 = await i4.getDimensions(n4.floating);
    return f5 !== h7.width || o5 !== h7.height ? { reset: { rects: true } } : {};
  } };
};

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/dom.js
function l4(n4) {
  return a3(n4) ? (n4.nodeName || "").toLowerCase() : "#document";
}
function i2(n4) {
  var t2;
  return (n4 == null || (t2 = n4.ownerDocument) == null ? void 0 : t2.defaultView) || window;
}
function y5(n4) {
  var t2;
  return (t2 = (a3(n4) ? n4.ownerDocument : n4.document) || window.document) == null ? void 0 : t2.documentElement;
}
function a3(n4) {
  return n4 instanceof Node || n4 instanceof i2(n4).Node;
}
function S5(n4) {
  return n4 instanceof Element || n4 instanceof i2(n4).Element;
}
function d5(n4) {
  return n4 instanceof HTMLElement || n4 instanceof i2(n4).HTMLElement;
}
function s3(n4) {
  return typeof ShadowRoot > "u" ? false : n4 instanceof ShadowRoot || n4 instanceof i2(n4).ShadowRoot;
}
function m3(n4) {
  let { overflow: t2, overflowX: e3, overflowY: o5, display: r4 } = p5(n4);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + o5 + e3) && !["inline", "contents"].includes(r4);
}
function E5(n4) {
  return ["table", "td", "th"].includes(l4(n4));
}
function N2(n4) {
  let t2 = h4(), e3 = p5(n4);
  return e3.transform !== "none" || e3.perspective !== "none" || (e3.containerType ? e3.containerType !== "normal" : false) || !t2 && (e3.backdropFilter ? e3.backdropFilter !== "none" : false) || !t2 && (e3.filter ? e3.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o5) => (e3.willChange || "").includes(o5)) || ["paint", "layout", "strict", "content"].some((o5) => (e3.contain || "").includes(o5));
}
function v2(n4) {
  let t2 = u6(n4);
  for (; d5(t2) && !w4(t2); ) {
    if (N2(t2))
      return t2;
    t2 = u6(t2);
  }
  return null;
}
function h4() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function w4(n4) {
  return ["html", "body", "#document"].includes(l4(n4));
}
function p5(n4) {
  return i2(n4).getComputedStyle(n4);
}
function T4(n4) {
  return S5(n4) ? { scrollLeft: n4.scrollLeft, scrollTop: n4.scrollTop } : { scrollLeft: n4.pageXOffset, scrollTop: n4.pageYOffset };
}
function u6(n4) {
  if (l4(n4) === "html")
    return n4;
  let t2 = n4.assignedSlot || n4.parentNode || s3(n4) && n4.host || y5(n4);
  return s3(t2) ? t2.host : t2;
}
function g4(n4) {
  let t2 = u6(n4);
  return w4(t2) ? n4.ownerDocument ? n4.ownerDocument.body : n4.body : d5(t2) && m3(t2) ? t2 : g4(t2);
}
function f3(n4, t2, e3) {
  var o5;
  t2 === void 0 && (t2 = []), e3 === void 0 && (e3 = true);
  let r4 = g4(n4), b7 = r4 === ((o5 = n4.ownerDocument) == null ? void 0 : o5.body), c2 = i2(r4);
  return b7 ? t2.concat(c2, c2.visualViewport || [], m3(r4) ? r4 : [], c2.frameElement && e3 ? f3(c2.frameElement) : []) : t2.concat(r4, f3(r4));
}

// https://esm.sh/v132/@floating-ui/dom@1.5.3/denonext/dom.mjs
function j4(t2) {
  let e3 = p5(t2), i4 = parseFloat(e3.width) || 0, o5 = parseFloat(e3.height) || 0, n4 = d5(t2), c2 = n4 ? t2.offsetWidth : i4, s4 = n4 ? t2.offsetHeight : o5, r4 = S4(i4) !== c2 || S4(o5) !== s4;
  return r4 && (i4 = c2, o5 = s4), { width: i4, height: o5, $: r4 };
}
function S6(t2) {
  return S5(t2) ? t2 : t2.contextElement;
}
function L5(t2) {
  let e3 = S6(t2);
  if (!d5(e3))
    return j2(1);
  let i4 = e3.getBoundingClientRect(), { width: o5, height: n4, $: c2 } = j4(e3), s4 = (c2 ? S4(i4.width) : i4.width) / o5, r4 = (c2 ? S4(i4.height) : i4.height) / n4;
  return (!s4 || !Number.isFinite(s4)) && (s4 = 1), (!r4 || !Number.isFinite(r4)) && (r4 = 1), { x: s4, y: r4 };
}
var et = j2(0);
function G5(t2) {
  let e3 = i2(t2);
  return !h4() || !e3.visualViewport ? et : { x: e3.visualViewport.offsetLeft, y: e3.visualViewport.offsetTop };
}
function it(t2, e3, i4) {
  return e3 === void 0 && (e3 = false), !i4 || e3 && i4 !== i2(t2) ? false : e3;
}
function O5(t2, e3, i4, o5) {
  e3 === void 0 && (e3 = false), i4 === void 0 && (i4 = false);
  let n4 = t2.getBoundingClientRect(), c2 = S6(t2), s4 = j2(1);
  e3 && (o5 ? S5(o5) && (s4 = L5(o5)) : s4 = L5(t2));
  let r4 = it(c2, i4, o5) ? G5(c2) : j2(0), l6 = (n4.left + r4.x) / s4.x, f5 = (n4.top + r4.y) / s4.y, p6 = n4.width / s4.x, d9 = n4.height / s4.y;
  if (c2) {
    let w7 = i2(c2), a4 = o5 && S5(o5) ? i2(o5) : o5, g6 = w7.frameElement;
    for (; g6 && o5 && a4 !== w7; ) {
      let h7 = L5(g6), R6 = g6.getBoundingClientRect(), u7 = p5(g6), C6 = R6.left + (g6.clientLeft + parseFloat(u7.paddingLeft)) * h7.x, W4 = R6.top + (g6.clientTop + parseFloat(u7.paddingTop)) * h7.y;
      l6 *= h7.x, f5 *= h7.y, p6 *= h7.x, d9 *= h7.y, l6 += C6, f5 += W4, g6 = i2(g6).frameElement;
    }
  }
  return q3({ width: p6, height: d9, x: l6, y: f5 });
}
function ot(t2) {
  let { rect: e3, offsetParent: i4, strategy: o5 } = t2, n4 = d5(i4), c2 = y5(i4);
  if (i4 === c2)
    return e3;
  let s4 = { scrollLeft: 0, scrollTop: 0 }, r4 = j2(1), l6 = j2(0);
  if ((n4 || !n4 && o5 !== "fixed") && ((l4(i4) !== "body" || m3(c2)) && (s4 = T4(i4)), d5(i4))) {
    let f5 = O5(i4);
    r4 = L5(i4), l6.x = f5.x + i4.clientLeft, l6.y = f5.y + i4.clientTop;
  }
  return { width: e3.width * r4.x, height: e3.height * r4.y, x: e3.x * r4.x - s4.scrollLeft * r4.x + l6.x, y: e3.y * r4.y - s4.scrollTop * r4.y + l6.y };
}
function nt(t2) {
  return Array.from(t2.getClientRects());
}
function J5(t2) {
  return O5(y5(t2)).left + T4(t2).scrollLeft;
}
function st(t2) {
  let e3 = y5(t2), i4 = T4(t2), o5 = t2.ownerDocument.body, n4 = p4(e3.scrollWidth, e3.clientWidth, o5.scrollWidth, o5.clientWidth), c2 = p4(e3.scrollHeight, e3.clientHeight, o5.scrollHeight, o5.clientHeight), s4 = -i4.scrollLeft + J5(t2), r4 = -i4.scrollTop;
  return p5(o5).direction === "rtl" && (s4 += p4(e3.clientWidth, o5.clientWidth) - n4), { width: n4, height: c2, x: s4, y: r4 };
}
function rt(t2, e3) {
  let i4 = i2(t2), o5 = y5(t2), n4 = i4.visualViewport, c2 = o5.clientWidth, s4 = o5.clientHeight, r4 = 0, l6 = 0;
  if (n4) {
    c2 = n4.width, s4 = n4.height;
    let f5 = h4();
    (!f5 || f5 && e3 === "fixed") && (r4 = n4.offsetLeft, l6 = n4.offsetTop);
  }
  return { width: c2, height: s4, x: r4, y: l6 };
}
function ct(t2, e3) {
  let i4 = O5(t2, true, e3 === "fixed"), o5 = i4.top + t2.clientTop, n4 = i4.left + t2.clientLeft, c2 = d5(t2) ? L5(t2) : j2(1), s4 = t2.clientWidth * c2.x, r4 = t2.clientHeight * c2.y, l6 = n4 * c2.x, f5 = o5 * c2.y;
  return { width: s4, height: r4, x: l6, y: f5 };
}
function k4(t2, e3, i4) {
  let o5;
  if (e3 === "viewport")
    o5 = rt(t2, i4);
  else if (e3 === "document")
    o5 = st(y5(t2));
  else if (S5(e3))
    o5 = ct(e3, i4);
  else {
    let n4 = G5(t2);
    o5 = { ...e3, x: e3.x - n4.x, y: e3.y - n4.y };
  }
  return q3(o5);
}
function P3(t2, e3) {
  let i4 = u6(t2);
  return i4 === e3 || !S5(i4) || w4(i4) ? false : p5(i4).position === "fixed" || P3(i4, e3);
}
function lt(t2, e3) {
  let i4 = e3.get(t2);
  if (i4)
    return i4;
  let o5 = f3(t2, [], false).filter((r4) => S5(r4) && l4(r4) !== "body"), n4 = null, c2 = p5(t2).position === "fixed", s4 = c2 ? u6(t2) : t2;
  for (; S5(s4) && !w4(s4); ) {
    let r4 = p5(s4), l6 = N2(s4);
    !l6 && r4.position === "fixed" && (n4 = null), (c2 ? !l6 && !n4 : !l6 && r4.position === "static" && !!n4 && ["absolute", "fixed"].includes(n4.position) || m3(s4) && !l6 && P3(t2, s4)) ? o5 = o5.filter((p6) => p6 !== s4) : n4 = r4, s4 = u6(s4);
  }
  return e3.set(t2, o5), o5;
}
function ft(t2) {
  let { element: e3, boundary: i4, rootBoundary: o5, strategy: n4 } = t2, s4 = [...i4 === "clippingAncestors" ? lt(e3, this._c) : [].concat(i4), o5], r4 = s4[0], l6 = s4.reduce((f5, p6) => {
    let d9 = k4(e3, p6, n4);
    return f5.top = p4(d9.top, f5.top), f5.right = m2(d9.right, f5.right), f5.bottom = m2(d9.bottom, f5.bottom), f5.left = p4(d9.left, f5.left), f5;
  }, k4(e3, r4, n4));
  return { width: l6.right - l6.left, height: l6.bottom - l6.top, x: l6.left, y: l6.top };
}
function ut(t2) {
  return j4(t2);
}
function ht(t2, e3, i4) {
  let o5 = d5(e3), n4 = y5(e3), c2 = i4 === "fixed", s4 = O5(t2, true, c2, e3), r4 = { scrollLeft: 0, scrollTop: 0 }, l6 = j2(0);
  if (o5 || !o5 && !c2)
    if ((l4(e3) !== "body" || m3(n4)) && (r4 = T4(e3)), o5) {
      let f5 = O5(e3, true, c2, e3);
      l6.x = f5.x + e3.clientLeft, l6.y = f5.y + e3.clientTop;
    } else
      n4 && (l6.x = J5(n4));
  return { x: s4.left + r4.scrollLeft - l6.x, y: s4.top + r4.scrollTop - l6.y, width: s4.width, height: s4.height };
}
function q5(t2, e3) {
  return !d5(t2) || p5(t2).position === "fixed" ? null : e3 ? e3(t2) : t2.offsetParent;
}
function Q5(t2, e3) {
  let i4 = i2(t2);
  if (!d5(t2))
    return i4;
  let o5 = q5(t2, e3);
  for (; o5 && E5(o5) && p5(o5).position === "static"; )
    o5 = q5(o5, e3);
  return o5 && (l4(o5) === "html" || l4(o5) === "body" && p5(o5).position === "static" && !N2(o5)) ? i4 : o5 || v2(t2) || i4;
}
var at = async function(t2) {
  let { reference: e3, floating: i4, strategy: o5 } = t2, n4 = this.getOffsetParent || Q5, c2 = this.getDimensions;
  return { reference: ht(e3, await n4(i4), o5), floating: { x: 0, y: 0, ...await c2(i4) } };
};
function dt(t2) {
  return p5(t2).direction === "rtl";
}
var gt = { convertOffsetParentRelativeRectToViewportRelativeRect: ot, getDocumentElement: y5, getClippingRect: ft, getOffsetParent: Q5, getElementRects: at, getClientRects: nt, getDimensions: ut, getScale: L5, isElement: S5, isRTL: dt };
function pt(t2, e3) {
  let i4 = null, o5, n4 = y5(t2);
  function c2() {
    clearTimeout(o5), i4 && i4.disconnect(), i4 = null;
  }
  function s4(r4, l6) {
    r4 === void 0 && (r4 = false), l6 === void 0 && (l6 = 1), c2();
    let { left: f5, top: p6, width: d9, height: w7 } = t2.getBoundingClientRect();
    if (r4 || e3(), !d9 || !w7)
      return;
    let a4 = w3(p6), g6 = w3(n4.clientWidth - (f5 + d9)), h7 = w3(n4.clientHeight - (p6 + w7)), R6 = w3(f5), C6 = { rootMargin: -a4 + "px " + -g6 + "px " + -h7 + "px " + -R6 + "px", threshold: p4(0, m2(1, l6)) || 1 }, W4 = true;
    function M8($5) {
      let D4 = $5[0].intersectionRatio;
      if (D4 !== l6) {
        if (!W4)
          return s4();
        D4 ? s4(false, D4) : o5 = setTimeout(() => {
          s4(false, 1e-7);
        }, 100);
      }
      W4 = false;
    }
    try {
      i4 = new IntersectionObserver(M8, { ...C6, root: n4.ownerDocument });
    } catch {
      i4 = new IntersectionObserver(M8, C6);
    }
    i4.observe(t2);
  }
  return s4(true), c2;
}
function yt(t2, e3, i4, o5) {
  o5 === void 0 && (o5 = {});
  let { ancestorScroll: n4 = true, ancestorResize: c2 = true, elementResize: s4 = typeof ResizeObserver == "function", layoutShift: r4 = typeof IntersectionObserver == "function", animationFrame: l6 = false } = o5, f5 = S6(t2), p6 = n4 || c2 ? [...f5 ? f3(f5) : [], ...f3(e3)] : [];
  p6.forEach((u7) => {
    n4 && u7.addEventListener("scroll", i4, { passive: true }), c2 && u7.addEventListener("resize", i4);
  });
  let d9 = f5 && r4 ? pt(f5, i4) : null, w7 = -1, a4 = null;
  s4 && (a4 = new ResizeObserver((u7) => {
    let [C6] = u7;
    C6 && C6.target === f5 && a4 && (a4.unobserve(e3), cancelAnimationFrame(w7), w7 = requestAnimationFrame(() => {
      a4 && a4.observe(e3);
    })), i4();
  }), f5 && !l6 && a4.observe(f5), a4.observe(e3));
  let g6, h7 = l6 ? O5(t2) : null;
  l6 && R6();
  function R6() {
    let u7 = O5(t2);
    h7 && (u7.x !== h7.x || u7.y !== h7.y || u7.width !== h7.width || u7.height !== h7.height) && i4(), h7 = u7, g6 = requestAnimationFrame(R6);
  }
  return i4(), () => {
    p6.forEach((u7) => {
      n4 && u7.removeEventListener("scroll", i4), c2 && u7.removeEventListener("resize", i4);
    }), d9 && d9(), a4 && a4.disconnect(), a4 = null, l6 && cancelAnimationFrame(g6);
  };
}
var vt = (t2, e3, i4) => {
  let o5 = /* @__PURE__ */ new Map(), n4 = { platform: gt, ...i4 }, c2 = { ...n4.platform, _c: o5 };
  return ae3(t2, e3, { ...n4, platform: c2 });
};

// https://esm.sh/v132/@floating-ui/react-dom@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dom.mjs
var T5 = (e3) => {
  function t2(r4) {
    return {}.hasOwnProperty.call(r4, "current");
  }
  return { name: "arrow", options: e3, fn(r4) {
    let { element: n4, padding: i4 } = typeof e3 == "function" ? e3(r4) : e3;
    return n4 && t2(n4) ? n4.current != null ? fe3({ element: n4.current, padding: i4 }).fn(r4) : {} : n4 ? fe3({ element: n4, padding: i4 }).fn(r4) : {};
  } };
};
var w5 = typeof document < "u" ? S2 : z2;
function h5(e3, t2) {
  if (e3 === t2)
    return true;
  if (typeof e3 != typeof t2)
    return false;
  if (typeof e3 == "function" && e3.toString() === t2.toString())
    return true;
  let r4, n4, i4;
  if (e3 && t2 && typeof e3 == "object") {
    if (Array.isArray(e3)) {
      if (r4 = e3.length, r4 != t2.length)
        return false;
      for (n4 = r4; n4-- !== 0; )
        if (!h5(e3[n4], t2[n4]))
          return false;
      return true;
    }
    if (i4 = Object.keys(e3), r4 = i4.length, r4 !== Object.keys(t2).length)
      return false;
    for (n4 = r4; n4-- !== 0; )
      if (!{}.hasOwnProperty.call(t2, i4[n4]))
        return false;
    for (n4 = r4; n4-- !== 0; ) {
      let d9 = i4[n4];
      if (!(d9 === "_owner" && e3.$$typeof) && !h5(e3[d9], t2[d9]))
        return false;
    }
    return true;
  }
  return e3 !== e3 && t2 !== t2;
}
function z3(e3) {
  return typeof window > "u" ? 1 : (e3.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function L6(e3, t2) {
  let r4 = z3(e3);
  return Math.round(t2 * r4) / r4;
}
function $3(e3) {
  let t2 = L(e3);
  return w5(() => {
    t2.current = e3;
  }), t2;
}
function W3(e3) {
  e3 === void 0 && (e3 = {});
  let { placement: t2 = "bottom", strategy: r4 = "absolute", middleware: n4 = [], platform: i4, elements: { reference: d9, floating: B4 } = {}, transform: D4 = true, whileElementsMounted: U7, open: O7 } = e3, [c2, k6] = I2({ x: 0, y: 0, strategy: r4, placement: t2, middlewareData: {}, isPositioned: false }), [P6, V5] = I2(n4);
  h5(P6, n4) || V5(n4);
  let [G7, E6] = I2(null), [H5, _2] = I2(null), v3 = G2((o5) => {
    o5 != l6.current && (l6.current = o5, E6(o5));
  }, [E6]), C6 = G2((o5) => {
    o5 !== m5.current && (m5.current = o5, _2(o5));
  }, [_2]), u7 = d9 || G7, s4 = B4 || H5, l6 = L(null), m5 = L(null), g6 = L(c2), x6 = $3(U7), M8 = $3(i4), p6 = G2(() => {
    if (!l6.current || !m5.current)
      return;
    let o5 = { placement: t2, strategy: r4, middleware: P6 };
    M8.current && (o5.platform = M8.current), vt(l6.current, m5.current, o5).then((y7) => {
      let R6 = { ...y7, isPositioned: true };
      S9.current && !h5(g6.current, R6) && (g6.current = R6, Re(() => {
        k6(R6);
      }));
    });
  }, [P6, t2, r4, M8]);
  w5(() => {
    O7 === false && g6.current.isPositioned && (g6.current.isPositioned = false, k6((o5) => ({ ...o5, isPositioned: false })));
  }, [O7]);
  let S9 = L(false);
  w5(() => (S9.current = true, () => {
    S9.current = false;
  }), []), w5(() => {
    if (u7 && (l6.current = u7), s4 && (m5.current = s4), u7 && s4) {
      if (x6.current)
        return x6.current(u7, s4, p6);
      p6();
    }
  }, [u7, s4, p6, x6]);
  let F5 = T(() => ({ reference: l6, floating: m5, setReference: v3, setFloating: C6 }), [v3, C6]), a4 = T(() => ({ reference: u7, floating: s4 }), [u7, s4]), j5 = T(() => {
    let o5 = { position: r4, left: 0, top: 0 };
    if (!a4.floating)
      return o5;
    let y7 = L6(a4.floating, c2.x), R6 = L6(a4.floating, c2.y);
    return D4 ? { ...o5, transform: "translate(" + y7 + "px, " + R6 + "px)", ...z3(a4.floating) >= 1.5 && { willChange: "transform" } } : { position: r4, left: y7, top: R6 };
  }, [r4, D4, a4.floating, c2.x, c2.y]);
  return T(() => ({ ...c2, update: p6, refs: F5, elements: a4, floatingStyles: j5 }), [c2, p6, F5, a4, j5]);
}

// https://esm.sh/v132/@radix-ui/react-arrow@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-arrow.mjs
var f4 = ee2((e3, t2) => {
  let { children: o5, width: i4 = 10, height: n4 = 5, ...s4 } = e3;
  return re(u3.svg, p3({}, s4, { ref: t2, width: i4, height: n4, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), e3.asChild ? o5 : re("polygon", { points: "0,0 30,0 15,10" }));
});
var b6 = f4;

// https://esm.sh/v132/@radix-ui/react-use-size@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-size.mjs
function z4(e3) {
  let [u7, r4] = I2(void 0);
  return e(() => {
    if (e3) {
      r4({ width: e3.offsetWidth, height: e3.offsetHeight });
      let f5 = new ResizeObserver((i4) => {
        if (!Array.isArray(i4) || !i4.length)
          return;
        let b7 = i4[0], t2, o5;
        if ("borderBoxSize" in b7) {
          let s4 = b7.borderBoxSize, d9 = Array.isArray(s4) ? s4[0] : s4;
          t2 = d9.inlineSize, o5 = d9.blockSize;
        } else
          t2 = e3.offsetWidth, o5 = e3.offsetHeight;
        r4({ width: t2, height: o5 });
      });
      return f5.observe(e3, { box: "border-box" }), () => f5.unobserve(e3);
    } else
      r4(void 0);
  }, [e3]), u7;
}

// https://esm.sh/v132/@radix-ui/react-popper@1.1.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-popper.mjs
var M5 = "Popper";
var [T6, tt] = _(M5);
var [Ve, B2] = T6(M5);
var De = (o5) => {
  let { __scopePopper: i4, children: r4 } = o5, [t2, a4] = I2(null);
  return re(Ve, { scope: i4, anchor: t2, onAnchorChange: a4 }, r4);
};
var Re2 = "PopperAnchor";
var Ee2 = ee2((o5, i4) => {
  let { __scopePopper: r4, virtualRef: t2, ...a4 } = o5, e3 = B2(Re2, r4), n4 = L(null), c2 = u2(i4, n4);
  return z2(() => {
    e3.onAnchorChange(t2?.current || n4.current);
  }), t2 ? null : re(u3.div, p3({}, a4, { ref: c2 }));
});
var L7 = "PopperContent";
var [Ne2, He] = T6(L7);
var ze = ee2((o5, i4) => {
  var r4, t2, a4, e3, n4, c2, u7, l6;
  let { __scopePopper: S9, side: s4 = "bottom", sideOffset: Y4 = 0, align: d9 = "center", alignOffset: w7 = 0, arrowPadding: k6 = 0, avoidCollisions: f5 = true, collisionBoundary: h7 = [], collisionPadding: g6 = 0, sticky: p6 = "partial", hideWhenDetached: $5 = false, updatePositionStrategy: Z3 = "optimized", onPlaced: G7, ...E6 } = o5, q7 = B2(L7, S9), [O7, J6] = I2(null), K4 = u2(i4, (P6) => J6(P6)), [V5, Q7] = I2(null), v3 = z4(V5), ee3 = (r4 = v3?.width) !== null && r4 !== void 0 ? r4 : 0, N3 = (t2 = v3?.height) !== null && t2 !== void 0 ? t2 : 0, te3 = s4 + (d9 !== "center" ? "-" + d9 : ""), oe3 = typeof g6 == "number" ? g6 : { top: 0, right: 0, bottom: 0, left: 0, ...g6 }, H5 = Array.isArray(h7) ? h7 : [h7], re4 = H5.length > 0, y7 = { padding: oe3, boundary: H5.filter(je), altBoundary: re4 }, { refs: ae5, floatingStyles: z6, placement: ne3, isPositioned: b7, middlewareData: x6 } = W3({ strategy: "fixed", placement: te3, whileElementsMounted: (...P6) => yt(...P6, { animationFrame: Z3 === "always" }), elements: { reference: q7.anchor }, middleware: [xe2({ mainAxis: Y4 + N3, alignmentAxis: w7 }), f5 && he3({ mainAxis: true, crossAxis: false, limiter: p6 === "partial" ? pe3() : void 0, ...y7 }), f5 && de3({ ...y7 }), we2({ ...y7, apply: ({ elements: P6, rects: W4, availableWidth: pe5, availableHeight: $e2 }) => {
    let { width: me4, height: ue5 } = W4.reference, _2 = P6.floating.style;
    _2.setProperty("--radix-popper-available-width", `${pe5}px`), _2.setProperty("--radix-popper-available-height", `${$e2}px`), _2.setProperty("--radix-popper-anchor-width", `${me4}px`), _2.setProperty("--radix-popper-anchor-height", `${ue5}px`);
  } }), V5 && T5({ element: V5, padding: k6 }), Fe({ arrowWidth: ee3, arrowHeight: N3 }), $5 && ue3({ strategy: "referenceHidden", ...y7 })] }), [I6, ie4] = U3(ne3), A6 = l2(G7);
  e(() => {
    b7 && A6?.();
  }, [b7, A6]);
  let se4 = (a4 = x6.arrow) === null || a4 === void 0 ? void 0 : a4.x, de4 = (e3 = x6.arrow) === null || e3 === void 0 ? void 0 : e3.y, ce4 = ((n4 = x6.arrow) === null || n4 === void 0 ? void 0 : n4.centerOffset) !== 0, [le5, fe5] = I2();
  return e(() => {
    O7 && fe5(window.getComputedStyle(O7).zIndex);
  }, [O7]), re("div", { ref: ae5.setFloating, "data-radix-popper-content-wrapper": "", style: { ...z6, transform: b7 ? z6.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: le5, "--radix-popper-transform-origin": [(c2 = x6.transformOrigin) === null || c2 === void 0 ? void 0 : c2.x, (u7 = x6.transformOrigin) === null || u7 === void 0 ? void 0 : u7.y].join(" ") }, dir: o5.dir }, re(Ne2, { scope: S9, placedSide: I6, onArrowChange: Q7, arrowX: se4, arrowY: de4, shouldHideArrow: ce4 }, re(u3.div, p3({ "data-side": I6, "data-align": ie4 }, E6, { ref: K4, style: { ...E6.style, animation: b7 ? void 0 : "none", opacity: (l6 = x6.hide) !== null && l6 !== void 0 && l6.referenceHidden ? 0 : void 0 } }))));
});
var Ie = "PopperArrow";
var We = { top: "bottom", right: "left", bottom: "top", left: "right" };
var Xe = ee2(function(i4, r4) {
  let { __scopePopper: t2, ...a4 } = i4, e3 = He(Ie, t2), n4 = We[e3.placedSide];
  return re("span", { ref: e3.onArrowChange, style: { position: "absolute", left: e3.arrowX, top: e3.arrowY, [n4]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e3.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e3.placedSide], visibility: e3.shouldHideArrow ? "hidden" : void 0 } }, re(b6, p3({}, a4, { ref: r4, style: { ...a4.style, display: "block" } })));
});
function je(o5) {
  return o5 !== null;
}
var Fe = (o5) => ({ name: "transformOrigin", options: o5, fn(i4) {
  var r4, t2, a4, e3, n4;
  let { placement: c2, rects: u7, middlewareData: l6 } = i4, s4 = ((r4 = l6.arrow) === null || r4 === void 0 ? void 0 : r4.centerOffset) !== 0, Y4 = s4 ? 0 : o5.arrowWidth, d9 = s4 ? 0 : o5.arrowHeight, [w7, k6] = U3(c2), f5 = { start: "0%", center: "50%", end: "100%" }[k6], h7 = ((t2 = (a4 = l6.arrow) === null || a4 === void 0 ? void 0 : a4.x) !== null && t2 !== void 0 ? t2 : 0) + Y4 / 2, g6 = ((e3 = (n4 = l6.arrow) === null || n4 === void 0 ? void 0 : n4.y) !== null && e3 !== void 0 ? e3 : 0) + d9 / 2, p6 = "", $5 = "";
  return w7 === "bottom" ? (p6 = s4 ? f5 : `${h7}px`, $5 = `${-d9}px`) : w7 === "top" ? (p6 = s4 ? f5 : `${h7}px`, $5 = `${u7.floating.height + d9}px`) : w7 === "right" ? (p6 = `${-d9}px`, $5 = s4 ? f5 : `${g6}px`) : w7 === "left" && (p6 = `${u7.floating.width + d9}px`, $5 = s4 ? f5 : `${g6}px`), { data: { x: p6, y: $5 } };
} });
function U3(o5) {
  let [i4, r4 = "center"] = o5.split("-");
  return [i4, r4];
}
var ot2 = De;
var rt2 = Ee2;
var at2 = ze;
var nt2 = Xe;

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m4 = ee2((r4, a4) => {
  var e3;
  let { container: o5 = globalThis == null || (e3 = globalThis.document) === null || e3 === void 0 ? void 0 : e3.body, ...t2 } = r4;
  return o5 ? Te.createPortal(re(u3.div, p3({}, t2, { ref: a4 })), o5) : null;
});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S7(n4, t2) {
  return R2((o5, r4) => {
    let i4 = t2[o5][r4];
    return i4 ?? o5;
  }, n4);
}
var U4 = (n4) => {
  let { present: t2, children: o5 } = n4, r4 = y6(t2), i4 = typeof o5 == "function" ? o5({ present: r4.isPresent }) : te2.only(o5), a4 = u2(r4.ref, i4.ref);
  return typeof o5 == "function" || r4.isPresent ? Ee(i4, { ref: a4 }) : null;
};
U4.displayName = "Presence";
function y6(n4) {
  let [t2, o5] = I2(), r4 = L({}), i4 = L(n4), a4 = L("none"), N3 = n4 ? "mounted" : "unmounted", [f5, s4] = S7(N3, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e3 = d6(r4.current);
    a4.current = f5 === "mounted" ? e3 : "none";
  }, [f5]), e(() => {
    let e3 = r4.current, u7 = i4.current;
    if (u7 !== n4) {
      let $5 = a4.current, m5 = d6(e3);
      n4 ? s4("MOUNT") : m5 === "none" || e3?.display === "none" ? s4("UNMOUNT") : s4(u7 && $5 !== m5 ? "ANIMATION_OUT" : "UNMOUNT"), i4.current = n4;
    }
  }, [n4, s4]), e(() => {
    if (t2) {
      let e3 = (c2) => {
        let m5 = d6(r4.current).includes(c2.animationName);
        c2.target === t2 && m5 && Re(() => s4("ANIMATION_END"));
      }, u7 = (c2) => {
        c2.target === t2 && (a4.current = d6(r4.current));
      };
      return t2.addEventListener("animationstart", u7), t2.addEventListener("animationcancel", e3), t2.addEventListener("animationend", e3), () => {
        t2.removeEventListener("animationstart", u7), t2.removeEventListener("animationcancel", e3), t2.removeEventListener("animationend", e3);
      };
    } else
      s4("ANIMATION_END");
  }, [t2, s4]), { isPresent: ["mounted", "unmountSuspended"].includes(f5), ref: G2((e3) => {
    e3 && (r4.current = getComputedStyle(e3)), o5(e3);
  }, []) };
}
function d6(n4) {
  return n4?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w6({ prop: e3, defaultProp: a4, onChange: s4 = () => {
} }) {
  let [t2, n4] = P4({ defaultProp: a4, onChange: s4 }), o5 = e3 !== void 0, f5 = o5 ? e3 : t2, l6 = l2(s4), $5 = G2((c2) => {
    if (o5) {
      let u7 = typeof c2 == "function" ? c2(e3) : c2;
      u7 !== e3 && l6(u7);
    } else
      n4(c2);
  }, [o5, e3, n4, l6]);
  return [f5, $5];
}
function P4({ defaultProp: e3, onChange: a4 }) {
  let s4 = I2(e3), [t2] = s4, n4 = L(t2), o5 = l2(a4);
  return z2(() => {
    n4.current !== t2 && (o5(t2), n4.current = t2);
  }, [t2, n4, o5]), s4;
}

// https://esm.sh/v132/@radix-ui/react-visually-hidden@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-visually-hidden.mjs
var n3 = ee2((e3, r4) => re(u3.span, p3({}, e3, { ref: r4, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e3.style } })));
var $4 = n3;

// https://esm.sh/v135/@radix-ui/react-tooltip@1.0.7/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-tooltip.mjs
var [A5, je2] = _("Tooltip", [tt]);
var K3 = tt();
var re3 = "TooltipProvider";
var ae4 = 700;
var L8 = "tooltip.open";
var [se3, M6] = A5(re3);
var ce3 = (t2) => {
  let { __scopeTooltip: o5, delayDuration: e3 = ae4, skipDelayDuration: n4 = 300, disableHoverableContent: r4 = false, children: s4 } = t2, [c2, p6] = I2(true), a4 = L(false), u7 = L(0);
  return z2(() => {
    let i4 = u7.current;
    return () => window.clearTimeout(i4);
  }, []), re(se3, { scope: o5, isOpenDelayed: c2, delayDuration: e3, onOpen: G2(() => {
    window.clearTimeout(u7.current), p6(false);
  }, []), onClose: G2(() => {
    window.clearTimeout(u7.current), u7.current = window.setTimeout(() => p6(true), n4);
  }, [n4]), isPointerInTransitRef: a4, onPointerInTransitChange: G2((i4) => {
    a4.current = i4;
  }, []), disableHoverableContent: r4 }, s4);
};
var H3 = "Tooltip";
var [ie3, R5] = A5(H3);
var le4 = (t2) => {
  let { __scopeTooltip: o5, children: e3, open: n4, defaultOpen: r4 = false, onOpenChange: s4, disableHoverableContent: c2, delayDuration: p6 } = t2, a4 = M6(H3, t2.__scopeTooltip), u7 = K3(o5), [i4, $5] = I2(null), v3 = n2(), d9 = L(0), f5 = c2 ?? a4.disableHoverableContent, h7 = p6 ?? a4.delayDuration, m5 = L(false), [g6 = false, x6] = w6({ prop: n4, defaultProp: r4, onChange: (N3) => {
    N3 ? (a4.onOpen(), document.dispatchEvent(new CustomEvent(L8))) : a4.onClose(), s4?.(N3);
  } }), P6 = T(() => g6 ? m5.current ? "delayed-open" : "instant-open" : "closed", [g6]), E6 = G2(() => {
    window.clearTimeout(d9.current), m5.current = false, x6(true);
  }, [x6]), _2 = G2(() => {
    window.clearTimeout(d9.current), x6(false);
  }, [x6]), S9 = G2(() => {
    window.clearTimeout(d9.current), d9.current = window.setTimeout(() => {
      m5.current = true, x6(true);
    }, h7);
  }, [h7, x6]);
  return z2(() => () => window.clearTimeout(d9.current), []), re(ot2, u7, re(ie3, { scope: o5, contentId: v3, open: g6, stateAttribute: P6, trigger: i4, onTriggerChange: $5, onTriggerEnter: G2(() => {
    a4.isOpenDelayed ? S9() : E6();
  }, [a4.isOpenDelayed, S9, E6]), onTriggerLeave: G2(() => {
    f5 ? _2() : window.clearTimeout(d9.current);
  }, [_2, f5]), onOpen: E6, onClose: _2, disableHoverableContent: f5 }, e3));
};
var k5 = "TooltipTrigger";
var pe4 = ee2((t2, o5) => {
  let { __scopeTooltip: e3, ...n4 } = t2, r4 = R5(k5, e3), s4 = M6(k5, e3), c2 = K3(e3), p6 = L(null), a4 = u2(o5, p6, r4.onTriggerChange), u7 = L(false), i4 = L(false), $5 = G2(() => u7.current = false, []);
  return z2(() => () => document.removeEventListener("pointerup", $5), [$5]), re(rt2, p3({ asChild: true }, c2), re(u3.button, p3({ "aria-describedby": r4.open ? r4.contentId : void 0, "data-state": r4.stateAttribute }, n4, { ref: a4, onPointerMove: o3(t2.onPointerMove, (v3) => {
    v3.pointerType !== "touch" && !i4.current && !s4.isPointerInTransitRef.current && (r4.onTriggerEnter(), i4.current = true);
  }), onPointerLeave: o3(t2.onPointerLeave, () => {
    r4.onTriggerLeave(), i4.current = false;
  }), onPointerDown: o3(t2.onPointerDown, () => {
    u7.current = true, document.addEventListener("pointerup", $5, { once: true });
  }), onFocus: o3(t2.onFocus, () => {
    u7.current || r4.onOpen();
  }), onBlur: o3(t2.onBlur, r4.onClose), onClick: o3(t2.onClick, r4.onClose) })));
});
var B3 = "TooltipPortal";
var [ue4, $e] = A5(B3, { forceMount: void 0 });
var O6 = "TooltipContent";
var fe4 = ee2((t2, o5) => {
  let e3 = $e(O6, t2.__scopeTooltip), { forceMount: n4 = e3.forceMount, side: r4 = "top", ...s4 } = t2, c2 = R5(O6, t2.__scopeTooltip);
  return re(U4, { present: n4 || c2.open }, c2.disableHoverableContent ? re(U5, p3({ side: r4 }, s4, { ref: o5 })) : re(ve3, p3({ side: r4 }, s4, { ref: o5 })));
});
var ve3 = ee2((t2, o5) => {
  let e3 = R5(O6, t2.__scopeTooltip), n4 = M6(O6, t2.__scopeTooltip), r4 = L(null), s4 = u2(o5, r4), [c2, p6] = I2(null), { trigger: a4, onClose: u7 } = e3, i4 = r4.current, { onPointerInTransitChange: $5 } = n4, v3 = G2(() => {
    p6(null), $5(false);
  }, [$5]), d9 = G2((f5, h7) => {
    let m5 = f5.currentTarget, g6 = { x: f5.clientX, y: f5.clientY }, x6 = ge3(g6, m5.getBoundingClientRect()), P6 = be2(g6, x6), E6 = we3(h7.getBoundingClientRect()), _2 = Ce2([...P6, ...E6]);
    p6(_2), $5(true);
  }, [$5]);
  return z2(() => () => v3(), [v3]), z2(() => {
    if (a4 && i4) {
      let f5 = (m5) => d9(m5, i4), h7 = (m5) => d9(m5, a4);
      return a4.addEventListener("pointerleave", f5), i4.addEventListener("pointerleave", h7), () => {
        a4.removeEventListener("pointerleave", f5), i4.removeEventListener("pointerleave", h7);
      };
    }
  }, [a4, i4, d9, v3]), z2(() => {
    if (c2) {
      let f5 = (h7) => {
        let m5 = h7.target, g6 = { x: h7.clientX, y: h7.clientY }, x6 = a4?.contains(m5) || i4?.contains(m5), P6 = !ye2(g6, c2);
        x6 ? v3() : P6 && (v3(), u7());
      };
      return document.addEventListener("pointermove", f5), () => document.removeEventListener("pointermove", f5);
    }
  }, [a4, i4, c2, u7, v3]), re(U5, p3({}, t2, { ref: s4 }));
});
var [me3, he4] = A5(H3, { isInside: false });
var U5 = ee2((t2, o5) => {
  let { __scopeTooltip: e3, children: n4, "aria-label": r4, onEscapeKeyDown: s4, onPointerDownOutside: c2, ...p6 } = t2, a4 = R5(O6, e3), u7 = K3(e3), { onClose: i4 } = a4;
  return z2(() => (document.addEventListener(L8, i4), () => document.removeEventListener(L8, i4)), [i4]), z2(() => {
    if (a4.trigger) {
      let $5 = (v3) => {
        let d9 = v3.target;
        d9 != null && d9.contains(a4.trigger) && i4();
      };
      return window.addEventListener("scroll", $5, { capture: true }), () => window.removeEventListener("scroll", $5, { capture: true });
    }
  }, [a4.trigger, i4]), re(G3, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: s4, onPointerDownOutside: c2, onFocusOutside: ($5) => $5.preventDefault(), onDismiss: i4 }, re(at2, p3({ "data-state": a4.stateAttribute }, u7, p6, { ref: o5, style: { ...p6.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" } }), re(y3, null, n4), re(me3, { scope: e3, isInside: true }, re($4, { id: a4.contentId, role: "tooltip" }, r4 || n4))));
});
var Te2 = "TooltipArrow";
var xe3 = ee2((t2, o5) => {
  let { __scopeTooltip: e3, ...n4 } = t2, r4 = K3(e3);
  return he4(Te2, e3).isInside ? null : re(nt2, p3({}, r4, n4, { ref: o5 }));
});
function ge3(t2, o5) {
  let e3 = Math.abs(o5.top - t2.y), n4 = Math.abs(o5.bottom - t2.y), r4 = Math.abs(o5.right - t2.x), s4 = Math.abs(o5.left - t2.x);
  switch (Math.min(e3, n4, r4, s4)) {
    case s4:
      return "left";
    case r4:
      return "right";
    case e3:
      return "top";
    case n4:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function be2(t2, o5, e3 = 5) {
  let n4 = [];
  switch (o5) {
    case "top":
      n4.push({ x: t2.x - e3, y: t2.y + e3 }, { x: t2.x + e3, y: t2.y + e3 });
      break;
    case "bottom":
      n4.push({ x: t2.x - e3, y: t2.y - e3 }, { x: t2.x + e3, y: t2.y - e3 });
      break;
    case "left":
      n4.push({ x: t2.x + e3, y: t2.y - e3 }, { x: t2.x + e3, y: t2.y + e3 });
      break;
    case "right":
      n4.push({ x: t2.x - e3, y: t2.y - e3 }, { x: t2.x - e3, y: t2.y + e3 });
      break;
  }
  return n4;
}
function we3(t2) {
  let { top: o5, right: e3, bottom: n4, left: r4 } = t2;
  return [{ x: r4, y: o5 }, { x: e3, y: o5 }, { x: e3, y: n4 }, { x: r4, y: n4 }];
}
function ye2(t2, o5) {
  let { x: e3, y: n4 } = t2, r4 = false;
  for (let s4 = 0, c2 = o5.length - 1; s4 < o5.length; c2 = s4++) {
    let p6 = o5[s4].x, a4 = o5[s4].y, u7 = o5[c2].x, i4 = o5[c2].y;
    a4 > n4 != i4 > n4 && e3 < (u7 - p6) * (n4 - a4) / (i4 - a4) + p6 && (r4 = !r4);
  }
  return r4;
}
function Ce2(t2) {
  let o5 = t2.slice();
  return o5.sort((e3, n4) => e3.x < n4.x ? -1 : e3.x > n4.x ? 1 : e3.y < n4.y ? -1 : e3.y > n4.y ? 1 : 0), Pe2(o5);
}
function Pe2(t2) {
  if (t2.length <= 1)
    return t2.slice();
  let o5 = [];
  for (let n4 = 0; n4 < t2.length; n4++) {
    let r4 = t2[n4];
    for (; o5.length >= 2; ) {
      let s4 = o5[o5.length - 1], c2 = o5[o5.length - 2];
      if ((s4.x - c2.x) * (r4.y - c2.y) >= (s4.y - c2.y) * (r4.x - c2.x))
        o5.pop();
      else
        break;
    }
    o5.push(r4);
  }
  o5.pop();
  let e3 = [];
  for (let n4 = t2.length - 1; n4 >= 0; n4--) {
    let r4 = t2[n4];
    for (; e3.length >= 2; ) {
      let s4 = e3[e3.length - 1], c2 = e3[e3.length - 2];
      if ((s4.x - c2.x) * (r4.y - c2.y) >= (s4.y - c2.y) * (r4.x - c2.x))
        e3.pop();
      else
        break;
    }
    e3.push(r4);
  }
  return e3.pop(), o5.length === 1 && e3.length === 1 && o5[0].x === e3[0].x && o5[0].y === e3[0].y ? o5 : o5.concat(e3);
}
var Ge = ce3;
var Fe2 = le4;
var Be = pe4;
var Ve2 = fe4;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o4(r4) {
  var f5, n4, t2 = "";
  if (typeof r4 == "string" || typeof r4 == "number")
    t2 += r4;
  else if (typeof r4 == "object")
    if (Array.isArray(r4))
      for (f5 = 0; f5 < r4.length; f5++)
        r4[f5] && (n4 = o4(r4[f5])) && (t2 && (t2 += " "), t2 += n4);
    else
      for (f5 in r4)
        r4[f5] && (t2 && (t2 += " "), t2 += f5);
  return t2;
}
function e2() {
  for (var r4, f5, n4 = 0, t2 = ""; n4 < arguments.length; )
    (r4 = arguments[n4++]) && (f5 = o4(r4)) && (t2 && (t2 += " "), t2 += f5);
  return t2;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r4, e3) => {
  for (var t2 in e3)
    Ar(r4, t2, { get: e3[t2], enumerable: true });
};
function U6() {
  for (var r4 = 0, e3, t2, o5 = ""; r4 < arguments.length; )
    (e3 = arguments[r4++]) && (t2 = lr(e3)) && (o5 && (o5 += " "), o5 += t2);
  return o5;
}
function lr(r4) {
  if (typeof r4 == "string")
    return r4;
  for (var e3, t2 = "", o5 = 0; o5 < r4.length; o5++)
    r4[o5] && (e3 = lr(r4[o5])) && (t2 && (t2 += " "), t2 += e3);
  return t2;
}
var Z2 = "-";
function ur(r4) {
  var e3 = Sr(r4), t2 = r4.conflictingClassGroups, o5 = r4.conflictingClassGroupModifiers, a4 = o5 === void 0 ? {} : o5;
  function s4(i4) {
    var c2 = i4.split(Z2);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e3) || kr(i4);
  }
  function n4(i4, c2) {
    var u7 = t2[i4] || [];
    return c2 && a4[i4] ? [].concat(u7, a4[i4]) : u7;
  }
  return { getClassGroupId: s4, getConflictingClassGroupIds: n4 };
}
function pr(r4, e3) {
  if (r4.length === 0)
    return e3.classGroupId;
  var t2 = r4[0], o5 = e3.nextPart.get(t2), a4 = o5 ? pr(r4.slice(1), o5) : void 0;
  if (a4)
    return a4;
  if (e3.validators.length !== 0) {
    var s4 = r4.join(Z2);
    return e3.validators.find(function(n4) {
      var i4 = n4.validator;
      return i4(s4);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r4) {
  if (dr.test(r4)) {
    var e3 = dr.exec(r4)[1], t2 = e3?.substring(0, e3.indexOf(":"));
    if (t2)
      return "arbitrary.." + t2;
  }
}
function Sr(r4) {
  var e3 = r4.theme, t2 = r4.prefix, o5 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a4 = Gr(Object.entries(r4.classGroups), t2);
  return a4.forEach(function(s4) {
    var n4 = s4[0], i4 = s4[1];
    q6(i4, o5, n4, e3);
  }), o5;
}
function q6(r4, e3, t2, o5) {
  r4.forEach(function(a4) {
    if (typeof a4 == "string") {
      var s4 = a4 === "" ? e3 : cr(e3, a4);
      s4.classGroupId = t2;
      return;
    }
    if (typeof a4 == "function") {
      if (zr(a4)) {
        q6(a4(o5), e3, t2, o5);
        return;
      }
      e3.validators.push({ validator: a4, classGroupId: t2 });
      return;
    }
    Object.entries(a4).forEach(function(n4) {
      var i4 = n4[0], c2 = n4[1];
      q6(c2, cr(e3, i4), t2, o5);
    });
  });
}
function cr(r4, e3) {
  var t2 = r4;
  return e3.split(Z2).forEach(function(o5) {
    t2.nextPart.has(o5) || t2.nextPart.set(o5, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t2 = t2.nextPart.get(o5);
  }), t2;
}
function zr(r4) {
  return r4.isThemeGetter;
}
function Gr(r4, e3) {
  return e3 ? r4.map(function(t2) {
    var o5 = t2[0], a4 = t2[1], s4 = a4.map(function(n4) {
      return typeof n4 == "string" ? e3 + n4 : typeof n4 == "object" ? Object.fromEntries(Object.entries(n4).map(function(i4) {
        var c2 = i4[0], u7 = i4[1];
        return [e3 + c2, u7];
      })) : n4;
    });
    return [o5, s4];
  }) : r4;
}
function fr(r4) {
  if (r4 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e3 = 0, t2 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map();
  function a4(s4, n4) {
    t2.set(s4, n4), e3++, e3 > r4 && (e3 = 0, o5 = t2, t2 = /* @__PURE__ */ new Map());
  }
  return { get: function(n4) {
    var i4 = t2.get(n4);
    if (i4 !== void 0)
      return i4;
    if ((i4 = o5.get(n4)) !== void 0)
      return a4(n4, i4), i4;
  }, set: function(n4, i4) {
    t2.has(n4) ? t2.set(n4, i4) : a4(n4, i4);
  } };
}
var X5 = "!";
function br(r4) {
  var e3 = r4.separator || ":", t2 = e3.length === 1, o5 = e3[0], a4 = e3.length;
  return function(n4) {
    for (var i4 = [], c2 = 0, u7 = 0, b7, f5 = 0; f5 < n4.length; f5++) {
      var g6 = n4[f5];
      if (c2 === 0) {
        if (g6 === o5 && (t2 || n4.slice(f5, f5 + a4) === e3)) {
          i4.push(n4.slice(u7, f5)), u7 = f5 + a4;
          continue;
        }
        if (g6 === "/") {
          b7 = f5;
          continue;
        }
      }
      g6 === "[" ? c2++ : g6 === "]" && c2--;
    }
    var y7 = i4.length === 0 ? n4 : n4.substring(u7), x6 = y7.startsWith(X5), m5 = x6 ? y7.substring(1) : y7, w7 = b7 && b7 > u7 ? b7 - u7 : void 0;
    return { modifiers: i4, hasImportantModifier: x6, baseClassName: m5, maybePostfixModifierPosition: w7 };
  };
}
function gr(r4) {
  if (r4.length <= 1)
    return r4;
  var e3 = [], t2 = [];
  return r4.forEach(function(o5) {
    var a4 = o5[0] === "[";
    a4 ? (e3.push.apply(e3, t2.sort().concat([o5])), t2 = []) : t2.push(o5);
  }), e3.push.apply(e3, t2.sort()), e3;
}
function mr(r4) {
  return { cache: fr(r4.cacheSize), splitModifiers: br(r4), ...ur(r4) };
}
var Ir = /\s+/;
function vr(r4, e3) {
  var t2 = e3.splitModifiers, o5 = e3.getClassGroupId, a4 = e3.getConflictingClassGroupIds, s4 = /* @__PURE__ */ new Set();
  return r4.trim().split(Ir).map(function(n4) {
    var i4 = t2(n4), c2 = i4.modifiers, u7 = i4.hasImportantModifier, b7 = i4.baseClassName, f5 = i4.maybePostfixModifierPosition, g6 = o5(f5 ? b7.substring(0, f5) : b7), y7 = !!f5;
    if (!g6) {
      if (!f5)
        return { isTailwindClass: false, originalClassName: n4 };
      if (g6 = o5(b7), !g6)
        return { isTailwindClass: false, originalClassName: n4 };
      y7 = false;
    }
    var x6 = gr(c2).join(":"), m5 = u7 ? x6 + X5 : x6;
    return { isTailwindClass: true, modifierId: m5, classGroupId: g6, originalClassName: n4, hasPostfixModifier: y7 };
  }).reverse().filter(function(n4) {
    if (!n4.isTailwindClass)
      return true;
    var i4 = n4.modifierId, c2 = n4.classGroupId, u7 = n4.hasPostfixModifier, b7 = i4 + c2;
    return s4.has(b7) ? false : (s4.add(b7), a4(c2, u7).forEach(function(f5) {
      return s4.add(i4 + f5);
    }), true);
  }).reverse().map(function(n4) {
    return n4.originalClassName;
  }).join(" ");
}
function P5() {
  for (var r4 = arguments.length, e3 = new Array(r4), t2 = 0; t2 < r4; t2++)
    e3[t2] = arguments[t2];
  var o5, a4, s4, n4 = i4;
  function i4(u7) {
    var b7 = e3[0], f5 = e3.slice(1), g6 = f5.reduce(function(y7, x6) {
      return x6(y7);
    }, b7());
    return o5 = mr(g6), a4 = o5.cache.get, s4 = o5.cache.set, n4 = c2, c2(u7);
  }
  function c2(u7) {
    var b7 = a4(u7);
    if (b7)
      return b7;
    var f5 = vr(u7, o5);
    return s4(u7, f5), f5;
  }
  return function() {
    return n4(U6.apply(null, arguments));
  };
}
function d7(r4) {
  var e3 = function(o5) {
    return o5[r4] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G6, isArbitraryLength: () => L9, isArbitraryNumber: () => S8, isArbitraryPosition: () => Q6, isArbitraryShadow: () => D3, isArbitrarySize: () => H4, isArbitraryUrl: () => V4, isArbitraryValue: () => l5, isArbitraryWeight: () => Wr, isInteger: () => z5, isLength: () => h6, isNumber: () => M7, isPercent: () => Y3, isTshirtSize: () => C5 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h6(r4) {
  return M7(r4) || Tr.has(r4) || Pr.test(r4) || L9(r4);
}
function L9(r4) {
  return I5(r4, "length", Er);
}
function H4(r4) {
  return I5(r4, "size", xr);
}
function Q6(r4) {
  return I5(r4, "position", xr);
}
function V4(r4) {
  return I5(r4, "url", jr);
}
function S8(r4) {
  return I5(r4, "number", M7);
}
var Wr = S8;
function M7(r4) {
  return !Number.isNaN(Number(r4));
}
function Y3(r4) {
  return r4.endsWith("%") && M7(r4.slice(0, -1));
}
function z5(r4) {
  return hr(r4) || I5(r4, "number", hr);
}
function l5(r4) {
  return yr.test(r4);
}
function G6() {
  return true;
}
function C5(r4) {
  return Rr.test(r4);
}
function D3(r4) {
  return I5(r4, "", Ur);
}
function I5(r4, e3, t2) {
  var o5 = yr.exec(r4);
  return o5 ? o5[1] ? o5[1] === e3 : t2(o5[2]) : false;
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
function T7() {
  var r4 = d7("colors"), e3 = d7("spacing"), t2 = d7("blur"), o5 = d7("brightness"), a4 = d7("borderColor"), s4 = d7("borderRadius"), n4 = d7("borderSpacing"), i4 = d7("borderWidth"), c2 = d7("contrast"), u7 = d7("grayscale"), b7 = d7("hueRotate"), f5 = d7("invert"), g6 = d7("gap"), y7 = d7("gradientColorStops"), x6 = d7("gradientColorStopPositions"), m5 = d7("inset"), w7 = d7("margin"), k6 = d7("opacity"), A6 = d7("padding"), K4 = d7("saturate"), O7 = d7("scale"), rr = d7("sepia"), er = d7("skew"), tr = d7("space"), or = d7("translate"), $5 = function() {
    return ["auto", "contain", "none"];
  }, B4 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F5 = function() {
    return ["auto", l5, e3];
  }, p6 = function() {
    return [l5, e3];
  }, nr = function() {
    return ["", h6];
  }, W4 = function() {
    return ["auto", M7, l5];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E6 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J6 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R6 = function() {
    return ["", "0", l5];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N3 = function() {
    return [M7, S8];
  }, j5 = function() {
    return [M7, l5];
  };
  return { cacheSize: 500, theme: { colors: [G6], spacing: [h6], blur: ["none", "", C5, l5], brightness: N3(), borderColor: [r4], borderRadius: ["none", "", "full", C5, l5], borderSpacing: p6(), borderWidth: nr(), contrast: N3(), grayscale: R6(), hueRotate: j5(), invert: R6(), gap: p6(), gradientColorStops: [r4], gradientColorStopPositions: [Y3, L9], inset: F5(), margin: F5(), opacity: N3(), padding: p6(), saturate: N3(), scale: N3(), sepia: R6(), skew: j5(), space: p6(), translate: p6() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l5] }], container: ["container"], columns: [{ columns: [C5] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l5]) }], overflow: [{ overflow: B4() }], "overflow-x": [{ "overflow-x": B4() }], "overflow-y": [{ "overflow-y": B4() }], overscroll: [{ overscroll: $5() }], "overscroll-x": [{ "overscroll-x": $5() }], "overscroll-y": [{ "overscroll-y": $5() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m5] }], "inset-x": [{ "inset-x": [m5] }], "inset-y": [{ "inset-y": [m5] }], start: [{ start: [m5] }], end: [{ end: [m5] }], top: [{ top: [m5] }], right: [{ right: [m5] }], bottom: [{ bottom: [m5] }], left: [{ left: [m5] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z5] }], basis: [{ basis: F5() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l5] }], grow: [{ grow: R6() }], shrink: [{ shrink: R6() }], order: [{ order: ["first", "last", "none", z5] }], "grid-cols": [{ "grid-cols": [G6] }], "col-start-end": [{ col: ["auto", { span: ["full", z5] }, l5] }], "col-start": [{ "col-start": W4() }], "col-end": [{ "col-end": W4() }], "grid-rows": [{ "grid-rows": [G6] }], "row-start-end": [{ row: ["auto", { span: [z5] }, l5] }], "row-start": [{ "row-start": W4() }], "row-end": [{ "row-end": W4() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l5] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l5] }], gap: [{ gap: [g6] }], "gap-x": [{ "gap-x": [g6] }], "gap-y": [{ "gap-y": [g6] }], "justify-content": [{ justify: ["normal"].concat(J6()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J6(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J6(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A6] }], px: [{ px: [A6] }], py: [{ py: [A6] }], ps: [{ ps: [A6] }], pe: [{ pe: [A6] }], pt: [{ pt: [A6] }], pr: [{ pr: [A6] }], pb: [{ pb: [A6] }], pl: [{ pl: [A6] }], m: [{ m: [w7] }], mx: [{ mx: [w7] }], my: [{ my: [w7] }], ms: [{ ms: [w7] }], me: [{ me: [w7] }], mt: [{ mt: [w7] }], mr: [{ mr: [w7] }], mb: [{ mb: [w7] }], ml: [{ ml: [w7] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l5, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l5, h6] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C5] }, C5, l5] }], h: [{ h: [l5, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l5, h6] }], "max-h": [{ "max-h": [l5, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C5, L9] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S8] }], "font-family": [{ font: [G6] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l5] }], "line-clamp": [{ "line-clamp": ["none", M7, S8] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l5, h6] }], "list-image": [{ "list-image": ["none", l5] }], "list-style-type": [{ list: ["none", "disc", "decimal", l5] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r4] }], "placeholder-opacity": [{ "placeholder-opacity": [k6] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r4] }], "text-opacity": [{ "text-opacity": [k6] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E6(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h6] }], "underline-offset": [{ "underline-offset": ["auto", l5, h6] }], "text-decoration-color": [{ decoration: [r4] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p6() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l5] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l5] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k6] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q6]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H4] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V4] }], "bg-color": [{ bg: [r4] }], "gradient-from-pos": [{ from: [x6] }], "gradient-via-pos": [{ via: [x6] }], "gradient-to-pos": [{ to: [x6] }], "gradient-from": [{ from: [y7] }], "gradient-via": [{ via: [y7] }], "gradient-to": [{ to: [y7] }], rounded: [{ rounded: [s4] }], "rounded-s": [{ "rounded-s": [s4] }], "rounded-e": [{ "rounded-e": [s4] }], "rounded-t": [{ "rounded-t": [s4] }], "rounded-r": [{ "rounded-r": [s4] }], "rounded-b": [{ "rounded-b": [s4] }], "rounded-l": [{ "rounded-l": [s4] }], "rounded-ss": [{ "rounded-ss": [s4] }], "rounded-se": [{ "rounded-se": [s4] }], "rounded-ee": [{ "rounded-ee": [s4] }], "rounded-es": [{ "rounded-es": [s4] }], "rounded-tl": [{ "rounded-tl": [s4] }], "rounded-tr": [{ "rounded-tr": [s4] }], "rounded-br": [{ "rounded-br": [s4] }], "rounded-bl": [{ "rounded-bl": [s4] }], "border-w": [{ border: [i4] }], "border-w-x": [{ "border-x": [i4] }], "border-w-y": [{ "border-y": [i4] }], "border-w-s": [{ "border-s": [i4] }], "border-w-e": [{ "border-e": [i4] }], "border-w-t": [{ "border-t": [i4] }], "border-w-r": [{ "border-r": [i4] }], "border-w-b": [{ "border-b": [i4] }], "border-w-l": [{ "border-l": [i4] }], "border-opacity": [{ "border-opacity": [k6] }], "border-style": [{ border: [].concat(E6(), ["hidden"]) }], "divide-x": [{ "divide-x": [i4] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i4] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k6] }], "divide-style": [{ divide: E6() }], "border-color": [{ border: [a4] }], "border-color-x": [{ "border-x": [a4] }], "border-color-y": [{ "border-y": [a4] }], "border-color-t": [{ "border-t": [a4] }], "border-color-r": [{ "border-r": [a4] }], "border-color-b": [{ "border-b": [a4] }], "border-color-l": [{ "border-l": [a4] }], "divide-color": [{ divide: [a4] }], "outline-style": [{ outline: [""].concat(E6()) }], "outline-offset": [{ "outline-offset": [l5, h6] }], "outline-w": [{ outline: [h6] }], "outline-color": [{ outline: [r4] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r4] }], "ring-opacity": [{ "ring-opacity": [k6] }], "ring-offset-w": [{ "ring-offset": [h6] }], "ring-offset-color": [{ "ring-offset": [r4] }], shadow: [{ shadow: ["", "inner", "none", C5, D3] }], "shadow-color": [{ shadow: [G6] }], opacity: [{ opacity: [k6] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t2] }], brightness: [{ brightness: [o5] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C5, l5] }], grayscale: [{ grayscale: [u7] }], "hue-rotate": [{ "hue-rotate": [b7] }], invert: [{ invert: [f5] }], saturate: [{ saturate: [K4] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t2] }], "backdrop-brightness": [{ "backdrop-brightness": [o5] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u7] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b7] }], "backdrop-invert": [{ "backdrop-invert": [f5] }], "backdrop-opacity": [{ "backdrop-opacity": [k6] }], "backdrop-saturate": [{ "backdrop-saturate": [K4] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n4] }], "border-spacing-x": [{ "border-spacing-x": [n4] }], "border-spacing-y": [{ "border-spacing-y": [n4] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l5] }], duration: [{ duration: j5() }], ease: [{ ease: ["linear", "in", "out", "in-out", l5] }], delay: [{ delay: j5() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l5] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O7] }], "scale-x": [{ "scale-x": [O7] }], "scale-y": [{ "scale-y": [O7] }], rotate: [{ rotate: [z5, l5] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l5] }], accent: [{ accent: ["auto", r4] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l5] }], "caret-color": [{ caret: [r4] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p6() }], "scroll-mx": [{ "scroll-mx": p6() }], "scroll-my": [{ "scroll-my": p6() }], "scroll-ms": [{ "scroll-ms": p6() }], "scroll-me": [{ "scroll-me": p6() }], "scroll-mt": [{ "scroll-mt": p6() }], "scroll-mr": [{ "scroll-mr": p6() }], "scroll-mb": [{ "scroll-mb": p6() }], "scroll-ml": [{ "scroll-ml": p6() }], "scroll-p": [{ "scroll-p": p6() }], "scroll-px": [{ "scroll-px": p6() }], "scroll-py": [{ "scroll-py": p6() }], "scroll-ps": [{ "scroll-ps": p6() }], "scroll-pe": [{ "scroll-pe": p6() }], "scroll-pt": [{ "scroll-pt": p6() }], "scroll-pr": [{ "scroll-pr": p6() }], "scroll-pb": [{ "scroll-pb": p6() }], "scroll-pl": [{ "scroll-pl": p6() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l5] }], fill: [{ fill: [r4, "none"] }], "stroke-w": [{ stroke: [h6, S8] }], stroke: [{ stroke: [r4, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P5(T7);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d8 = 0;
var x5 = Array.isArray;
function g5(t2, r4, e3, a4, o5, i4) {
  var s4, n4, f5 = {};
  for (n4 in r4)
    n4 == "ref" ? s4 = r4[n4] : f5[n4] = r4[n4];
  var u7 = { type: t2, props: f5, key: e3, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d8, __i: -1, __u: 0, __source: o5, __self: i4 };
  if (typeof t2 == "function" && (s4 = t2.defaultProps))
    for (n4 in s4)
      f5[n4] === void 0 && (f5[n4] = s4[n4]);
  return a.vnode && a.vnode(u7), u7;
}

// ../components/ui/tooltip.tsx
var TooltipProvider = Ge;
var Tooltip = Fe2;
var TooltipTrigger = Be;
var TooltipContent = ee2(({ class: className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ g5(
  Ve2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = Ve2.displayName;
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
};
