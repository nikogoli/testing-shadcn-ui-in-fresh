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
function b(e5, _3) {
  for (var t3 in _3)
    e5[t3] = _3[t3];
  return e5;
}
function Z(e5) {
  var _3 = e5.parentNode;
  _3 && _3.removeChild(e5);
}
function re(e5, _3, t3) {
  var i5, n3, r7, l6 = {};
  for (r7 in _3)
    r7 == "key" ? i5 = _3[r7] : r7 == "ref" ? n3 = _3[r7] : l6[r7] = _3[r7];
  if (arguments.length > 2 && (l6.children = arguments.length > 3 ? D.call(arguments, 2) : t3), typeof e5 == "function" && e5.defaultProps != null)
    for (r7 in e5.defaultProps)
      l6[r7] === void 0 && (l6[r7] = e5.defaultProps[r7]);
  return S(e5, l6, i5, n3, null);
}
function S(e5, _3, t3, i5, n3) {
  var r7 = { type: e5, props: _3, key: t3, ref: i5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r7), r7;
}
function de() {
  return { current: null };
}
function H(e5) {
  return e5.children;
}
function W(e5, _3) {
  this.props = e5, this.context = _3;
}
function w(e5, _3) {
  if (_3 == null)
    return e5.__ ? w(e5.__, e5.__i + 1) : null;
  for (var t3; _3 < e5.__k.length; _3++)
    if ((t3 = e5.__k[_3]) != null && t3.__e != null)
      return t3.__e;
  return typeof e5.type == "function" ? w(e5) : null;
}
function ie(e5, _3, t3) {
  var i5, n3 = e5.__v, r7 = n3.__e, l6 = e5.__P;
  if (l6)
    return (i5 = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i5), G(l6, i5, n3, e5.__n, l6.ownerSVGElement !== void 0, 32 & n3.__u ? [r7] : null, _3, r7 ?? w(n3), !!(32 & n3.__u), t3), i5.__v = n3.__v, i5.__.__k[i5.__i] = i5, i5.__d = void 0, i5.__e != r7 && ee(i5), i5;
}
function ee(e5) {
  var _3, t3;
  if ((e5 = e5.__) != null && e5.__c != null) {
    for (e5.__e = e5.__c.base = null, _3 = 0; _3 < e5.__k.length; _3++)
      if ((t3 = e5.__k[_3]) != null && t3.__e != null) {
        e5.__e = e5.__c.base = t3.__e;
        break;
      }
    return ee(e5);
  }
}
function I(e5) {
  (!e5.__d && (e5.__d = true) && x.push(e5) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e5, _3, t3, i5 = [], n3 = [];
  for (x.sort($); e5 = x.shift(); )
    e5.__d && (t3 = x.length, _3 = ie(e5, i5, n3) || _3, t3 === 0 || x.length > t3 ? (R(i5, _3, n3), n3.length = i5.length = 0, _3 = void 0, x.sort($)) : _3 && a.__c && a.__c(_3, O));
  _3 && R(i5, _3, n3), A.__r = 0;
}
function _e(e5, _3, t3, i5, n3, r7, l6, u7, c6, s6, p8) {
  var o7, m9, f8, h9, k6, v5 = i5 && i5.__k || O, d12 = _3.length;
  for (t3.__d = c6, le(t3, _3, v5), c6 = t3.__d, o7 = 0; o7 < d12; o7++)
    (f8 = t3.__k[o7]) != null && typeof f8 != "boolean" && typeof f8 != "function" && (m9 = f8.__i === -1 ? E : v5[f8.__i] || E, f8.__i = o7, G(e5, f8, m9, n3, r7, l6, u7, c6, s6, p8), h9 = f8.__e, f8.ref && m9.ref != f8.ref && (m9.ref && V(m9.ref, null, f8), p8.push(f8.ref, f8.__c || h9, f8)), k6 == null && h9 != null && (k6 = h9), 65536 & f8.__u || m9.__k === f8.__k ? c6 = te(f8, c6, e5) : typeof f8.type == "function" && f8.__d !== void 0 ? c6 = f8.__d : h9 && (c6 = h9.nextSibling), f8.__d = void 0, f8.__u &= -196609);
  t3.__d = c6, t3.__e = k6;
}
function le(e5, _3, t3) {
  var i5, n3, r7, l6, u7, c6 = _3.length, s6 = t3.length, p8 = s6, o7 = 0;
  for (e5.__k = [], i5 = 0; i5 < c6; i5++)
    l6 = i5 + o7, (n3 = e5.__k[i5] = (n3 = _3[i5]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e5, n3.__b = e5.__b + 1, u7 = ue(n3, t3, l6, p8), n3.__i = u7, r7 = null, u7 !== -1 && (p8--, (r7 = t3[u7]) && (r7.__u |= 131072)), r7 == null || r7.__v === null ? (u7 == -1 && o7--, typeof n3.type != "function" && (n3.__u |= 65536)) : u7 !== l6 && (u7 === l6 + 1 ? o7++ : u7 > l6 ? p8 > c6 - l6 ? o7 += u7 - l6 : o7-- : u7 < l6 ? u7 == l6 - 1 && (o7 = u7 - l6) : o7 = 0, u7 !== i5 + o7 && (n3.__u |= 65536))) : (r7 = t3[l6]) && r7.key == null && r7.__e && !(131072 & r7.__u) && (r7.__e == e5.__d && (e5.__d = w(r7)), B(r7, r7, false), t3[l6] = null, p8--);
  if (p8)
    for (i5 = 0; i5 < s6; i5++)
      (r7 = t3[i5]) != null && !(131072 & r7.__u) && (r7.__e == e5.__d && (e5.__d = w(r7)), B(r7, r7));
}
function te(e5, _3, t3) {
  var i5, n3;
  if (typeof e5.type == "function") {
    for (i5 = e5.__k, n3 = 0; i5 && n3 < i5.length; n3++)
      i5[n3] && (i5[n3].__ = e5, _3 = te(i5[n3], _3, t3));
    return _3;
  }
  e5.__e != _3 && (t3.insertBefore(e5.__e, _3 || null), _3 = e5.__e);
  do
    _3 = _3 && _3.nextSibling;
  while (_3 != null && _3.nodeType === 8);
  return _3;
}
function se(e5, _3) {
  return _3 = _3 || [], e5 == null || typeof e5 == "boolean" || (F(e5) ? e5.some(function(t3) {
    se(t3, _3);
  }) : _3.push(e5)), _3;
}
function ue(e5, _3, t3, i5) {
  var n3 = e5.key, r7 = e5.type, l6 = t3 - 1, u7 = t3 + 1, c6 = _3[t3];
  if (c6 === null || c6 && n3 == c6.key && r7 === c6.type && !(131072 & c6.__u))
    return t3;
  if (i5 > (c6 != null && !(131072 & c6.__u) ? 1 : 0))
    for (; l6 >= 0 || u7 < _3.length; ) {
      if (l6 >= 0) {
        if ((c6 = _3[l6]) && !(131072 & c6.__u) && n3 == c6.key && r7 === c6.type)
          return l6;
        l6--;
      }
      if (u7 < _3.length) {
        if ((c6 = _3[u7]) && !(131072 & c6.__u) && n3 == c6.key && r7 === c6.type)
          return u7;
        u7++;
      }
    }
  return -1;
}
function q(e5, _3, t3) {
  _3[0] === "-" ? e5.setProperty(_3, t3 ?? "") : e5[_3] = t3 == null ? "" : typeof t3 != "number" || oe.test(_3) ? t3 : t3 + "px";
}
function M(e5, _3, t3, i5, n3) {
  var r7;
  e:
    if (_3 === "style")
      if (typeof t3 == "string")
        e5.style.cssText = t3;
      else {
        if (typeof i5 == "string" && (e5.style.cssText = i5 = ""), i5)
          for (_3 in i5)
            t3 && _3 in t3 || q(e5.style, _3, "");
        if (t3)
          for (_3 in t3)
            i5 && t3[_3] === i5[_3] || q(e5.style, _3, t3[_3]);
      }
    else if (_3[0] === "o" && _3[1] === "n")
      r7 = _3 !== (_3 = _3.replace(/(PointerCapture)$|Capture$/i, "$1")), _3 = _3.toLowerCase() in e5 ? _3.toLowerCase().slice(2) : _3.slice(2), e5.l || (e5.l = {}), e5.l[_3 + r7] = t3, t3 ? i5 ? t3.u = i5.u : (t3.u = Date.now(), e5.addEventListener(_3, r7 ? K : J, r7)) : e5.removeEventListener(_3, r7 ? K : J, r7);
    else {
      if (n3)
        _3 = _3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_3 !== "width" && _3 !== "height" && _3 !== "href" && _3 !== "list" && _3 !== "form" && _3 !== "tabIndex" && _3 !== "download" && _3 !== "rowSpan" && _3 !== "colSpan" && _3 !== "role" && _3 in e5)
        try {
          e5[_3] = t3 ?? "";
          break e;
        } catch {
        }
      typeof t3 == "function" || (t3 == null || t3 === false && _3[4] !== "-" ? e5.removeAttribute(_3) : e5.setAttribute(_3, t3));
    }
}
function J(e5) {
  if (this.l) {
    var _3 = this.l[e5.type + false];
    if (e5.t) {
      if (e5.t <= _3.u)
        return;
    } else
      e5.t = Date.now();
    return _3(a.event ? a.event(e5) : e5);
  }
}
function K(e5) {
  if (this.l)
    return this.l[e5.type + true](a.event ? a.event(e5) : e5);
}
function G(e5, _3, t3, i5, n3, r7, l6, u7, c6, s6) {
  var p8, o7, m9, f8, h9, k6, v5, d12, y8, C8, T8, P8, j7, U6, N6, g8 = _3.type;
  if (_3.constructor !== void 0)
    return null;
  128 & t3.__u && (c6 = !!(32 & t3.__u), r7 = [u7 = _3.__e = t3.__e]), (p8 = a.__b) && p8(_3);
  e:
    if (typeof g8 == "function")
      try {
        if (d12 = _3.props, y8 = (p8 = g8.contextType) && i5[p8.__c], C8 = p8 ? y8 ? y8.props.value : p8.__ : i5, t3.__c ? v5 = (o7 = _3.__c = t3.__c).__ = o7.__E : ("prototype" in g8 && g8.prototype.render ? _3.__c = o7 = new g8(d12, C8) : (_3.__c = o7 = new W(d12, C8), o7.constructor = g8, o7.render = ce), y8 && y8.sub(o7), o7.props = d12, o7.state || (o7.state = {}), o7.context = C8, o7.__n = i5, m9 = o7.__d = true, o7.__h = [], o7._sb = []), o7.__s == null && (o7.__s = o7.state), g8.getDerivedStateFromProps != null && (o7.__s == o7.state && (o7.__s = b({}, o7.__s)), b(o7.__s, g8.getDerivedStateFromProps(d12, o7.__s))), f8 = o7.props, h9 = o7.state, o7.__v = _3, m9)
          g8.getDerivedStateFromProps == null && o7.componentWillMount != null && o7.componentWillMount(), o7.componentDidMount != null && o7.__h.push(o7.componentDidMount);
        else {
          if (g8.getDerivedStateFromProps == null && d12 !== f8 && o7.componentWillReceiveProps != null && o7.componentWillReceiveProps(d12, C8), !o7.__e && (o7.shouldComponentUpdate != null && o7.shouldComponentUpdate(d12, o7.__s, C8) === false || _3.__v === t3.__v)) {
            for (_3.__v !== t3.__v && (o7.props = d12, o7.state = o7.__s, o7.__d = false), _3.__e = t3.__e, _3.__k = t3.__k, _3.__k.forEach(function(L9) {
              L9 && (L9.__ = _3);
            }), T8 = 0; T8 < o7._sb.length; T8++)
              o7.__h.push(o7._sb[T8]);
            o7._sb = [], o7.__h.length && l6.push(o7);
            break e;
          }
          o7.componentWillUpdate != null && o7.componentWillUpdate(d12, o7.__s, C8), o7.componentDidUpdate != null && o7.__h.push(function() {
            o7.componentDidUpdate(f8, h9, k6);
          });
        }
        if (o7.context = C8, o7.props = d12, o7.__P = e5, o7.__e = false, P8 = a.__r, j7 = 0, "prototype" in g8 && g8.prototype.render) {
          for (o7.state = o7.__s, o7.__d = false, P8 && P8(_3), p8 = o7.render(o7.props, o7.state, o7.context), U6 = 0; U6 < o7._sb.length; U6++)
            o7.__h.push(o7._sb[U6]);
          o7._sb = [];
        } else
          do
            o7.__d = false, P8 && P8(_3), p8 = o7.render(o7.props, o7.state, o7.context), o7.state = o7.__s;
          while (o7.__d && ++j7 < 25);
        o7.state = o7.__s, o7.getChildContext != null && (i5 = b(b({}, i5), o7.getChildContext())), m9 || o7.getSnapshotBeforeUpdate == null || (k6 = o7.getSnapshotBeforeUpdate(f8, h9)), _e(e5, F(N6 = p8 != null && p8.type === H && p8.key == null ? p8.props.children : p8) ? N6 : [N6], _3, t3, i5, n3, r7, l6, u7, c6, s6), o7.base = _3.__e, _3.__u &= -161, o7.__h.length && l6.push(o7), v5 && (o7.__E = o7.__ = null);
      } catch (L9) {
        _3.__v = null, c6 || r7 != null ? (_3.__e = u7, _3.__u |= c6 ? 160 : 32, r7[r7.indexOf(u7)] = null) : (_3.__e = t3.__e, _3.__k = t3.__k), a.__e(L9, _3, t3);
      }
    else
      r7 == null && _3.__v === t3.__v ? (_3.__k = t3.__k, _3.__e = t3.__e) : _3.__e = fe(t3.__e, _3, t3, i5, n3, r7, l6, c6, s6);
  (p8 = a.diffed) && p8(_3);
}
function R(e5, _3, t3) {
  for (var i5 = 0; i5 < t3.length; i5++)
    V(t3[i5], t3[++i5], t3[++i5]);
  a.__c && a.__c(_3, e5), e5.some(function(n3) {
    try {
      e5 = n3.__h, n3.__h = [], e5.some(function(r7) {
        r7.call(n3);
      });
    } catch (r7) {
      a.__e(r7, n3.__v);
    }
  });
}
function fe(e5, _3, t3, i5, n3, r7, l6, u7, c6) {
  var s6, p8, o7, m9, f8, h9, k6, v5 = t3.props, d12 = _3.props, y8 = _3.type;
  if (y8 === "svg" && (n3 = true), r7 != null) {
    for (s6 = 0; s6 < r7.length; s6++)
      if ((f8 = r7[s6]) && "setAttribute" in f8 == !!y8 && (y8 ? f8.localName === y8 : f8.nodeType === 3)) {
        e5 = f8, r7[s6] = null;
        break;
      }
  }
  if (e5 == null) {
    if (y8 === null)
      return document.createTextNode(d12);
    e5 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y8) : document.createElement(y8, d12.is && d12), r7 = null, u7 = false;
  }
  if (y8 === null)
    v5 === d12 || u7 && e5.data === d12 || (e5.data = d12);
  else {
    if (r7 = r7 && D.call(e5.childNodes), v5 = t3.props || E, !u7 && r7 != null)
      for (v5 = {}, s6 = 0; s6 < e5.attributes.length; s6++)
        v5[(f8 = e5.attributes[s6]).name] = f8.value;
    for (s6 in v5)
      f8 = v5[s6], s6 == "children" || (s6 == "dangerouslySetInnerHTML" ? o7 = f8 : s6 === "key" || s6 in d12 || M(e5, s6, null, f8, n3));
    for (s6 in d12)
      f8 = d12[s6], s6 == "children" ? m9 = f8 : s6 == "dangerouslySetInnerHTML" ? p8 = f8 : s6 == "value" ? h9 = f8 : s6 == "checked" ? k6 = f8 : s6 === "key" || u7 && typeof f8 != "function" || v5[s6] === f8 || M(e5, s6, f8, v5[s6], n3);
    if (p8)
      u7 || o7 && (p8.__html === o7.__html || p8.__html === e5.innerHTML) || (e5.innerHTML = p8.__html), _3.__k = [];
    else if (o7 && (e5.innerHTML = ""), _e(e5, F(m9) ? m9 : [m9], _3, t3, i5, n3 && y8 !== "foreignObject", r7, l6, r7 ? r7[0] : t3.__k && w(t3, 0), u7, c6), r7 != null)
      for (s6 = r7.length; s6--; )
        r7[s6] != null && Z(r7[s6]);
    u7 || (s6 = "value", h9 !== void 0 && (h9 !== e5[s6] || y8 === "progress" && !h9 || y8 === "option" && h9 !== v5[s6]) && M(e5, s6, h9, v5[s6], false), s6 = "checked", k6 !== void 0 && k6 !== e5[s6] && M(e5, s6, k6, v5[s6], false));
  }
  return e5;
}
function V(e5, _3, t3) {
  try {
    typeof e5 == "function" ? e5(_3) : e5.current = _3;
  } catch (i5) {
    a.__e(i5, t3);
  }
}
function B(e5, _3, t3) {
  var i5, n3;
  if (a.unmount && a.unmount(e5), (i5 = e5.ref) && (i5.current && i5.current !== e5.__e || V(i5, null, _3)), (i5 = e5.__c) != null) {
    if (i5.componentWillUnmount)
      try {
        i5.componentWillUnmount();
      } catch (r7) {
        a.__e(r7, _3);
      }
    i5.base = i5.__P = null, e5.__c = void 0;
  }
  if (i5 = e5.__k)
    for (n3 = 0; n3 < i5.length; n3++)
      i5[n3] && B(i5[n3], _3, t3 || typeof e5.type != "function");
  t3 || e5.__e == null || Z(e5.__e), e5.__ = e5.__e = e5.__d = void 0;
}
function ce(e5, _3, t3) {
  return this.constructor(e5, t3);
}
function pe(e5, _3, t3) {
  var i5, n3, r7, l6;
  a.__ && a.__(e5, _3), n3 = (i5 = typeof t3 == "function") ? null : t3 && t3.__k || _3.__k, r7 = [], l6 = [], G(_3, e5 = (!i5 && t3 || _3).__k = re(H, null, [e5]), n3 || E, E, _3.ownerSVGElement !== void 0, !i5 && t3 ? [t3] : n3 ? null : _3.firstChild ? D.call(_3.childNodes) : null, r7, !i5 && t3 ? t3 : n3 ? n3.__e : _3.firstChild, i5, l6), e5.__d = void 0, R(r7, e5, l6);
}
function ae(e5, _3) {
  pe(e5, _3, ae);
}
function he(e5, _3, t3) {
  var i5, n3, r7, l6, u7 = b({}, e5.props);
  for (r7 in e5.type && e5.type.defaultProps && (l6 = e5.type.defaultProps), _3)
    r7 == "key" ? i5 = _3[r7] : r7 == "ref" ? n3 = _3[r7] : u7[r7] = _3[r7] === void 0 && l6 !== void 0 ? l6[r7] : _3[r7];
  return arguments.length > 2 && (u7.children = arguments.length > 3 ? D.call(arguments, 2) : t3), S(e5.type, u7, i5 || e5.key, n3 || e5.ref, null);
}
function ve(e5, _3) {
  var t3 = { __c: _3 = "__cC" + Y++, __: e5, Consumer: function(i5, n3) {
    return i5.children(n3);
  }, Provider: function(i5) {
    var n3, r7;
    return this.getChildContext || (n3 = [], (r7 = {})[_3] = this, this.getChildContext = function() {
      return r7;
    }, this.shouldComponentUpdate = function(l6) {
      this.props.value !== l6.value && n3.some(function(u7) {
        u7.__e = true, I(u7);
      });
    }, this.sub = function(l6) {
      n3.push(l6);
      var u7 = l6.componentWillUnmount;
      l6.componentWillUnmount = function() {
        n3.splice(n3.indexOf(l6), 1), u7 && u7.call(l6);
      };
    }), i5.children;
  } };
  return t3.Provider.__ = t3.Consumer.contextType = t3;
}
D = O.slice, a = { __e: function(e5, _3, t3, i5) {
  for (var n3, r7, l6; _3 = _3.__; )
    if ((n3 = _3.__c) && !n3.__)
      try {
        if ((r7 = n3.constructor) && r7.getDerivedStateFromError != null && (n3.setState(r7.getDerivedStateFromError(e5)), l6 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e5, i5 || {}), l6 = n3.__d), l6)
          return n3.__E = n3;
      } catch (u7) {
        e5 = u7;
      }
  throw e5;
} }, Q = 0, ne = function(e5) {
  return e5 != null && e5.constructor == null;
}, W.prototype.setState = function(e5, _3) {
  var t3;
  t3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e5 == "function" && (e5 = e5(b({}, t3), this.props)), e5 && b(t3, e5), e5 != null && this.__v && (_3 && this._sb.push(_3), I(this));
}, W.prototype.forceUpdate = function(e5) {
  this.__v && (this.__e = true, e5 && this.__h.push(e5), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e5, _3) {
  return e5.__v.__b - _3.__v.__b;
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
  var u7 = r.__H || (r.__H = { __: [], __h: [] });
  return t3 >= u7.__.length && u7.__.push({ __V: p }), u7.__[t3];
}
function I2(t3) {
  return v = 1, R2(U, t3);
}
function R2(t3, _3, u7) {
  var n3 = l(c++, 2);
  if (n3.t = t3, !n3.__c && (n3.__ = [u7 ? u7(_3) : U(void 0, _3), function(a5) {
    var f8 = n3.__N ? n3.__N[0] : n3.__[0], s6 = n3.t(f8, a5);
    f8 !== s6 && (n3.__N = [s6, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r, !r.u)) {
    var i5 = function(a5, f8, s6) {
      if (!n3.__c.__H)
        return true;
      var m9 = n3.__c.__H.__.filter(function(e5) {
        return !!e5.__c;
      });
      if (m9.every(function(e5) {
        return !e5.__N;
      }))
        return !h9 || h9.call(this, a5, f8, s6);
      var V7 = false;
      return m9.forEach(function(e5) {
        if (e5.__N) {
          var P8 = e5.__[0];
          e5.__ = e5.__N, e5.__N = void 0, P8 !== e5.__[0] && (V7 = true);
        }
      }), !(!V7 && n3.__c.props === a5) && (!h9 || h9.call(this, a5, f8, s6));
    };
    r.u = true;
    var h9 = r.shouldComponentUpdate, N6 = r.componentWillUpdate;
    r.componentWillUpdate = function(a5, f8, s6) {
      if (this.__e) {
        var m9 = h9;
        h9 = void 0, i5(a5, f8, s6), h9 = m9;
      }
      N6 && N6.call(this, a5, f8, s6);
    }, r.shouldComponentUpdate = i5;
  }
  return n3.__N || n3.__;
}
function z2(t3, _3) {
  var u7 = l(c++, 3);
  !o.__s && y(u7.__H, _3) && (u7.__ = t3, u7.i = _3, r.__H.__h.push(u7));
}
function S2(t3, _3) {
  var u7 = l(c++, 4);
  !o.__s && y(u7.__H, _3) && (u7.__ = t3, u7.i = _3, r.__h.push(u7));
}
function L(t3) {
  return v = 5, T(function() {
    return { current: t3 };
  }, []);
}
function M2(t3, _3, u7) {
  v = 6, S2(function() {
    return typeof t3 == "function" ? (t3(_3()), function() {
      return t3(null);
    }) : t3 ? (t3.current = _3(), function() {
      return t3.current = null;
    }) : void 0;
  }, u7 == null ? u7 : u7.concat(t3));
}
function T(t3, _3) {
  var u7 = l(c++, 7);
  return y(u7.__H, _3) ? (u7.__V = t3(), u7.i = _3, u7.__h = t3, u7.__V) : u7.__;
}
function G2(t3, _3) {
  return v = 8, T(function() {
    return t3;
  }, _3);
}
function J2(t3) {
  var _3 = r.context[t3.__c], u7 = l(c++, 9);
  return u7.c = t3, _3 ? (u7.__ == null && (u7.__ = true, _3.sub(r)), _3.props.value) : t3.__;
}
function K2(t3, _3) {
  o.useDebugValue && o.useDebugValue(_3 ? _3(t3) : t3);
}
function O2(t3) {
  var _3 = l(c++, 10), u7 = I2();
  return _3.__ = t3, r.componentDidCatch || (r.componentDidCatch = function(n3, i5) {
    _3.__ && _3.__(n3, i5), u7[1](n3);
  }), [u7[0], function() {
    u7[1](void 0);
  }];
}
function Q2() {
  var t3 = l(c++, 11);
  if (!t3.__) {
    for (var _3 = r.__v; _3 !== null && !_3.__m && _3.__ !== null; )
      _3 = _3.__;
    var u7 = _3.__m || (_3.__m = [0, 0]);
    t3.__ = "P" + u7[0] + "-" + u7[1]++;
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
  _3 && (H2 === r ? (_3.__h = [], r.__h = [], _3.__.forEach(function(u7) {
    u7.__N && (u7.__ = u7.__N), u7.__V = p, u7.__N = u7.i = void 0;
  })) : (_3.__h.forEach(d), _3.__h.forEach(E2), _3.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t3) {
  A2 && A2(t3);
  var _3 = t3.__c;
  _3 && _3.__H && (_3.__H.__h.length && (x2.push(_3) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _3.__H.__.forEach(function(u7) {
    u7.i && (u7.__H = u7.i), u7.__V !== p && (u7.__ = u7.__V), u7.i = void 0, u7.__V = p;
  })), H2 = r = null;
}, o.__c = function(t3, _3) {
  _3.some(function(u7) {
    try {
      u7.__h.forEach(d), u7.__h = u7.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _3.some(function(i5) {
        i5.__h && (i5.__h = []);
      }), _3 = [], o.__e(n3, u7.__v);
    }
  }), D2 && D2(t3, _3);
}, o.unmount = function(t3) {
  F2 && F2(t3);
  var _3, u7 = t3.__c;
  u7 && u7.__H && (u7.__H.__.forEach(function(n3) {
    try {
      d(n3);
    } catch (i5) {
      _3 = i5;
    }
  }), u7.__H = void 0, _3 && o.__e(_3, u7.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t3) {
  var _3, u7 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_3), setTimeout(t3);
  }, n3 = setTimeout(u7, 100);
  q2 && (_3 = requestAnimationFrame(u7));
}
function d(t3) {
  var _3 = r, u7 = t3.__c;
  typeof u7 == "function" && (t3.__c = void 0, u7()), r = _3;
}
function E2(t3) {
  var _3 = r;
  t3.__c = t3.__(), r = _3;
}
function y(t3, _3) {
  return !t3 || t3.length !== _3.length || _3.some(function(u7, n3) {
    return u7 !== t3[n3];
  });
}
function U(t3, _3) {
  return typeof _3 == "function" ? _3(t3) : _3;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e5, t3) {
  for (var n3 in t3)
    e5[n3] = t3[n3];
  return e5;
}
function b3(e5, t3) {
  for (var n3 in e5)
    if (n3 !== "__source" && !(n3 in t3))
      return true;
  for (var r7 in t3)
    if (r7 !== "__source" && e5[r7] !== t3[r7])
      return true;
  return false;
}
function C2(e5, t3) {
  this.props = e5, this.context = t3;
}
function Q3(e5, t3) {
  function n3(o7) {
    var u7 = this.props.ref, a5 = u7 == o7.ref;
    return !a5 && u7 && (u7.call ? u7(null) : u7.current = null), t3 ? !t3(this.props, o7) || !a5 : b3(this.props, o7);
  }
  function r7(o7) {
    return this.shouldComponentUpdate = n3, re(e5, o7);
  }
  return r7.displayName = "Memo(" + (e5.displayName || e5.name) + ")", r7.prototype.isReactComponent = true, r7.__f = true, r7;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e5, t3) {
  return b3(this.props, e5) || b3(this.state, t3);
};
var N = a.__b;
a.__b = function(e5) {
  e5.type && e5.type.__f && e5.ref && (e5.props.ref = e5.ref, e5.ref = null), N && N(e5);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e5) {
  function t3(n3) {
    var r7 = L2({}, n3);
    return delete r7.ref, e5(r7, n3.ref || null);
  }
  return t3.$$typeof = X2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (e5.displayName || e5.name) + ")", t3;
}
var R3 = function(e5, t3) {
  return e5 == null ? null : se(se(e5).map(t3));
};
var te2 = { map: R3, forEach: R3, count: function(e5) {
  return e5 ? se(e5).length : 0;
}, only: function(e5) {
  var t3 = se(e5);
  if (t3.length !== 1)
    throw "Children.only";
  return t3[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e5, t3, n3, r7) {
  if (e5.then) {
    for (var o7, u7 = t3; u7 = u7.__; )
      if ((o7 = u7.__c) && o7.__c)
        return t3.__e == null && (t3.__e = n3.__e, t3.__k = n3.__k), o7.__c(e5, t3);
  }
  ne2(e5, t3, n3, r7);
};
var x3 = a.unmount;
function T2(e5, t3, n3) {
  return e5 && (e5.__c && e5.__c.__H && (e5.__c.__H.__.forEach(function(r7) {
    typeof r7.__c == "function" && r7.__c();
  }), e5.__c.__H = null), (e5 = L2({}, e5)).__c != null && (e5.__c.__P === n3 && (e5.__c.__P = t3), e5.__c = null), e5.__k = e5.__k && e5.__k.map(function(r7) {
    return T2(r7, t3, n3);
  })), e5;
}
function A3(e5, t3, n3) {
  return e5 && n3 && (e5.__v = null, e5.__k = e5.__k && e5.__k.map(function(r7) {
    return A3(r7, t3, n3);
  }), e5.__c && e5.__c.__P === t3 && (e5.__e && n3.appendChild(e5.__e), e5.__c.__e = true, e5.__c.__P = n3)), e5;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e5) {
  var t3 = e5.__.__c;
  return t3 && t3.__a && t3.__a(e5);
}
function re2(e5) {
  var t3, n3, r7;
  function o7(u7) {
    if (t3 || (t3 = e5()).then(function(a5) {
      n3 = a5.default || a5;
    }, function(a5) {
      r7 = a5;
    }), r7)
      throw r7;
    if (!n3)
      throw t3;
    return re(n3, u7);
  }
  return o7.displayName = "Lazy", o7.__f = true, o7;
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e5) {
  var t3 = e5.__c;
  t3 && t3.__R && t3.__R(), t3 && 32 & e5.__u && (e5.type = null), x3 && x3(e5);
}, (h.prototype = new W()).__c = function(e5, t3) {
  var n3 = t3.__c, r7 = this;
  r7.t == null && (r7.t = []), r7.t.push(n3);
  var o7 = F3(r7.__v), u7 = false, a5 = function() {
    u7 || (u7 = true, n3.__R = null, o7 ? o7(l6) : l6());
  };
  n3.__R = a5;
  var l6 = function() {
    if (!--r7.__u) {
      if (r7.state.__a) {
        var s6 = r7.state.__a;
        r7.__v.__k[0] = A3(s6, s6.__c.__P, s6.__c.__O);
      }
      var g8;
      for (r7.setState({ __a: r7.__b = null }); g8 = r7.t.pop(); )
        g8.forceUpdate();
    }
  };
  r7.__u++ || 32 & t3.__u || r7.setState({ __a: r7.__b = r7.__v.__k[0] }), e5.then(a5, a5);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e5, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r7 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n3, r7.__O = r7.__P);
    }
    this.__b = null;
  }
  var o7 = t3.__a && re(H, null, e5.fallback);
  return o7 && (o7.__u &= -33), [re(H, null, t3.__a ? null : e5.children), o7];
};
var k2 = function(e5, t3, n3) {
  if (++n3[1] === n3[0] && e5.o.delete(t3), e5.props.revealOrder && (e5.props.revealOrder[0] !== "t" || !e5.o.size))
    for (n3 = e5.u; n3; ) {
      for (; n3.length > 3; )
        n3.pop()();
      if (n3[1] < n3[0])
        break;
      e5.u = n3 = n3[2];
    }
};
function oe2(e5) {
  return this.getChildContext = function() {
    return e5.context;
  }, e5.children;
}
function ue2(e5) {
  var t3 = this, n3 = e5.i;
  t3.componentWillUnmount = function() {
    pe(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== n3 && t3.componentWillUnmount(), t3.l || (t3.i = n3, t3.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(r7) {
    this.childNodes.push(r7), t3.i.appendChild(r7);
  }, insertBefore: function(r7, o7) {
    this.childNodes.push(r7), t3.i.appendChild(r7);
  }, removeChild: function(r7) {
    this.childNodes.splice(this.childNodes.indexOf(r7) >>> 1, 1), t3.i.removeChild(r7);
  } }), pe(re(oe2, { context: t3.context }, e5.__v), t3.l);
}
function ae2(e5, t3) {
  var n3 = re(ue2, { __v: e5, i: t3 });
  return n3.containerInfo = t3, n3;
}
(p2.prototype = new W()).__a = function(e5) {
  var t3 = this, n3 = F3(t3.__v), r7 = t3.o.get(e5);
  return r7[0]++, function(o7) {
    var u7 = function() {
      t3.props.revealOrder ? (r7.push(o7), k2(t3, e5, r7)) : o7();
    };
    n3 ? n3(u7) : u7();
  };
}, p2.prototype.render = function(e5) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = se(e5.children);
  e5.revealOrder && e5.revealOrder[0] === "b" && t3.reverse();
  for (var n3 = t3.length; n3--; )
    this.o.set(t3[n3], this.u = [1, 0, this.u]);
  return e5.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e5 = this;
  this.o.forEach(function(t3, n3) {
    k2(e5, n3, t3);
  });
};
var V2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
var ie2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var le2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var se2 = /[A-Z0-9]/g;
var _e2 = typeof document < "u";
var ce2 = function(e5) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e5);
};
function fe2(e5, t3, n3) {
  return t3.__k == null && (t3.textContent = ""), pe(e5, t3), typeof n3 == "function" && n3(), e5 ? e5.__c : null;
}
function pe2(e5, t3, n3) {
  return ae(e5, t3), typeof n3 == "function" && n3(), e5 ? e5.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e5) {
  Object.defineProperty(W.prototype, e5, { configurable: true, get: function() {
    return this["UNSAFE_" + e5];
  }, set: function(t3) {
    Object.defineProperty(this, e5, { configurable: true, writable: true, value: t3 });
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
a.event = function(e5) {
  return O3 && (e5 = O3(e5)), e5.persist = de2, e5.isPropagationStopped = he2, e5.isDefaultPrevented = ve2, e5.nativeEvent = e5;
};
var S3;
var me = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var P = a.vnode;
a.vnode = function(e5) {
  typeof e5.type == "string" && function(t3) {
    var n3 = t3.props, r7 = t3.type, o7 = {};
    for (var u7 in n3) {
      var a5 = n3[u7];
      if (!(u7 === "value" && "defaultValue" in n3 && a5 == null || _e2 && u7 === "children" && r7 === "noscript" || u7 === "class" || u7 === "className")) {
        var l6 = u7.toLowerCase();
        u7 === "defaultValue" && "value" in n3 && n3.value == null ? u7 = "value" : u7 === "download" && a5 === true ? a5 = "" : l6 === "translate" && a5 === "no" ? a5 = false : l6 === "ondoubleclick" ? u7 = "ondblclick" : l6 !== "onchange" || r7 !== "input" && r7 !== "textarea" || ce2(n3.type) ? l6 === "onfocus" ? u7 = "onfocusin" : l6 === "onblur" ? u7 = "onfocusout" : le2.test(u7) ? u7 = l6 : r7.indexOf("-") === -1 && ie2.test(u7) ? u7 = u7.replace(se2, "-$&").toLowerCase() : a5 === null && (a5 = void 0) : l6 = u7 = "oninput", l6 === "oninput" && o7[u7 = l6] && (u7 = "oninputCapture"), o7[u7] = a5;
      }
    }
    r7 == "select" && o7.multiple && Array.isArray(o7.value) && (o7.value = se(n3.children).forEach(function(s6) {
      s6.props.selected = o7.value.indexOf(s6.props.value) != -1;
    })), r7 == "select" && o7.defaultValue != null && (o7.value = se(n3.children).forEach(function(s6) {
      s6.props.selected = o7.multiple ? o7.defaultValue.indexOf(s6.props.value) != -1 : o7.defaultValue == s6.props.value;
    })), n3.class && !n3.className ? (o7.class = n3.class, Object.defineProperty(o7, "className", me)) : (n3.className && !n3.class || n3.class && n3.className) && (o7.class = o7.className = n3.className), t3.props = o7;
  }(e5), e5.$$typeof = V2, P && P(e5);
};
var w2 = a.__r;
a.__r = function(e5) {
  w2 && w2(e5), S3 = e5.__c;
};
var U2 = a.diffed;
a.diffed = function(e5) {
  U2 && U2(e5);
  var t3 = e5.props, n3 = e5.__e;
  n3 != null && e5.type === "textarea" && "value" in t3 && t3.value !== n3.value && (n3.value = t3.value == null ? "" : t3.value), S3 = null;
};
var ye = { ReactCurrentDispatcher: { current: { readContext: function(e5) {
  return S3.__n[e5.__c].props.value;
} } } };
var Le = "17.0.2";
function be(e5) {
  return re.bind(null, e5);
}
function m(e5) {
  return !!e5 && e5.$$typeof === V2;
}
function Ce(e5) {
  return m(e5) && e5.type === H;
}
function Ee(e5) {
  return m(e5) ? he.apply(null, arguments) : e5;
}
function Se(e5) {
  return !!e5.__k && (pe(null, e5), true);
}
function ge(e5) {
  return e5 && (e5.base || e5.nodeType === 1 && e5) || null;
}
var Ne = function(e5, t3) {
  return e5(t3);
};
var Re = function(e5, t3) {
  return e5(t3);
};
var xe = H;
function M3(e5) {
  e5();
}
function ke(e5) {
  return e5;
}
function Oe() {
  return [false, M3];
}
var Pe = S2;
var we = m;
function Ue(e5, t3) {
  var n3 = t3(), r7 = I2({ h: { __: n3, v: t3 } }), o7 = r7[0].h, u7 = r7[1];
  return S2(function() {
    o7.__ = n3, o7.v = t3, y2(o7) && u7({ h: o7 });
  }, [e5, n3, t3]), z2(function() {
    return y2(o7) && u7({ h: o7 }), e5(function() {
      y2(o7) && u7({ h: o7 });
    });
  }, [e5]), n3;
}
function y2(e5) {
  var t3, n3, r7 = e5.v, o7 = e5.__;
  try {
    var u7 = r7();
    return !((t3 = o7) === (n3 = u7) && (t3 !== 0 || 1 / t3 == 1 / n3) || t3 != t3 && n3 != n3);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n3, t3) => {
  for (var e5 in t3)
    s(n3, e5, { get: t3[e5], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var e5 = arguments[t3];
      for (var a5 in e5)
        Object.prototype.hasOwnProperty.call(e5, a5) && (n3[a5] = e5[a5]);
    }
    return n3;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e5, f8, { checkForDefaultPrevented: t3 = true } = {}) {
  return function(c6) {
    if (e5?.(c6), t3 === false || !c6.defaultPrevented)
      return f8?.(c6);
  };
}

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e5, f8) {
  typeof e5 == "function" ? e5(f8) : e5 != null && (e5.current = f8);
}
function t(...e5) {
  return (f8) => e5.forEach((o7) => n(o7, f8));
}
function u2(...e5) {
  return G2(t(...e5), e5);
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t3, c6 = []) {
  let o7 = [];
  function a5(r7, e5) {
    let n3 = ve(e5), s6 = o7.length;
    o7 = [...o7, e5];
    function f8(d12) {
      let { scope: i5, children: x10, ...$5 } = d12, h9 = i5?.[t3][s6] || n3, S12 = T(() => $5, Object.values($5));
      return re(h9.Provider, { value: S12 }, x10);
    }
    function v5(d12, i5) {
      let x10 = i5?.[t3][s6] || n3, $5 = J2(x10);
      if ($5)
        return $5;
      if (e5 !== void 0)
        return e5;
      throw new Error(`\`${d12}\` must be used within \`${r7}\``);
    }
    return f8.displayName = r7 + "Provider", [f8, v5];
  }
  let u7 = () => {
    let r7 = o7.map((e5) => ve(e5));
    return function(n3) {
      let s6 = n3?.[t3] || r7;
      return T(() => ({ [`__scope${t3}`]: { ...n3, [t3]: s6 } }), [n3, s6]);
    };
  };
  return u7.scopeName = t3, [a5, C3(u7, ...c6)];
}
function C3(...t3) {
  let c6 = t3[0];
  if (t3.length === 1)
    return c6;
  let o7 = () => {
    let a5 = t3.map((u7) => ({ useScope: u7(), scopeName: u7.scopeName }));
    return function(r7) {
      let e5 = a5.reduce((n3, { useScope: s6, scopeName: f8 }) => {
        let d12 = s6(r7)[`__scope${f8}`];
        return { ...n3, ...d12 };
      }, {});
      return T(() => ({ [`__scope${c6.scopeName}`]: e5 }), [e5]);
    };
  };
  return o7.scopeName = c6.scopeName, o7;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n3, t3) => {
  let { children: e5, ...r7 } = n3, o7 = te2.toArray(e5), l6 = o7.find(I3);
  if (l6) {
    let c6 = l6.props.children, a5 = o7.map((m9) => m9 === l6 ? te2.count(c6) > 1 ? te2.only(null) : m(c6) ? c6.props.children : null : m9);
    return re($2, p3({}, r7, { ref: t3 }), m(c6) ? Ee(c6, void 0, a5) : null);
  }
  return re($2, p3({}, r7, { ref: t3 }), e5);
});
b4.displayName = "Slot";
var $2 = ee2((n3, t3) => {
  let { children: e5, ...r7 } = n3;
  return m(e5) ? Ee(e5, { ...X3(r7, e5.props), ref: t3 ? t(t3, e5.ref) : e5.ref }) : te2.count(e5) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n3 }) => re(H, null, n3);
function I3(n3) {
  return m(n3) && n3.type === y3;
}
function X3(n3, t3) {
  let e5 = { ...t3 };
  for (let r7 in t3) {
    let o7 = n3[r7], l6 = t3[r7];
    /^on[A-Z]/.test(r7) ? o7 && l6 ? e5[r7] = (...a5) => {
      l6(...a5), o7(...a5);
    } : o7 && (e5[r7] = o7) : r7 === "style" ? e5[r7] = { ...o7, ...l6 } : r7 === "className" && (e5[r7] = [o7, l6].filter(Boolean).join(" "));
  }
  return { ...n3, ...e5 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t3, e5) => {
  let f8 = ee2((r7, o7) => {
    let { asChild: s6, ...a5 } = r7, i5 = s6 ? b4 : e5;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i5, p3({}, a5, { ref: o7 }));
  });
  return f8.displayName = `Primitive.${e5}`, { ...t3, [e5]: f8 };
}, {});
function E3(t3, e5) {
  t3 && Re(() => t3.dispatchEvent(e5));
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f8) {
  let e5 = L(f8);
  return z2(() => {
    e5.current = f8;
  }), T(() => (...u7) => {
    var r7;
    return (r7 = e5.current) === null || r7 === void 0 ? void 0 : r7.call(e5, ...u7);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i(d12, e5 = globalThis?.document) {
  let a5 = l2(d12);
  z2(() => {
    let o7 = (s6) => {
      s6.key === "Escape" && a5(s6);
    };
    return e5.addEventListener("keydown", o7), () => e5.removeEventListener("keydown", o7);
  }, [a5, e5]);
}

// https://esm.sh/v132/@radix-ui/react-dismissable-layer@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dismissable-layer.mjs
var h2 = "dismissableLayer.update";
var X4 = "dismissableLayer.pointerDownOutside";
var Y2 = "dismissableLayer.focusOutside";
var g2;
var F4 = ve({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var G3 = ee2((n3, e5) => {
  var o7;
  let { disableOutsidePointerEvents: i5 = false, onEscapeKeyDown: t3, onPointerDownOutside: r7, onFocusOutside: f8, onInteractOutside: d12, onDismiss: l6, ...v5 } = n3, a5 = J2(F4), [c6, S12] = I2(null), u7 = (o7 = c6?.ownerDocument) !== null && o7 !== void 0 ? o7 : globalThis?.document, [, W7] = I2({}), A6 = u2(e5, (s6) => S12(s6)), y8 = Array.from(a5.layers), [N6] = [...a5.layersWithOutsidePointerEventsDisabled].slice(-1), _3 = y8.indexOf(N6), D7 = c6 ? y8.indexOf(c6) : -1, U6 = a5.layersWithOutsidePointerEventsDisabled.size > 0, w10 = D7 >= _3, z8 = Q4((s6) => {
    let $5 = s6.target, P8 = [...a5.branches].some((E9) => E9.contains($5));
    !w10 || P8 || (r7?.(s6), d12?.(s6), s6.defaultPrevented || l6?.());
  }, u7), O8 = V3((s6) => {
    let $5 = s6.target;
    [...a5.branches].some((E9) => E9.contains($5)) || (f8?.(s6), d12?.(s6), s6.defaultPrevented || l6?.());
  }, u7);
  return i((s6) => {
    D7 === a5.layers.size - 1 && (t3?.(s6), !s6.defaultPrevented && l6 && (s6.preventDefault(), l6()));
  }, u7), z2(() => {
    if (c6)
      return i5 && (a5.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u7.body.style.pointerEvents, u7.body.style.pointerEvents = "none"), a5.layersWithOutsidePointerEventsDisabled.add(c6)), a5.layers.add(c6), L3(), () => {
        i5 && a5.layersWithOutsidePointerEventsDisabled.size === 1 && (u7.body.style.pointerEvents = g2);
      };
  }, [c6, u7, i5, a5]), z2(() => () => {
    c6 && (a5.layers.delete(c6), a5.layersWithOutsidePointerEventsDisabled.delete(c6), L3());
  }, [c6, a5]), z2(() => {
    let s6 = () => W7({});
    return document.addEventListener(h2, s6), () => document.removeEventListener(h2, s6);
  }, []), re(u3.div, p3({}, v5, { ref: A6, style: { pointerEvents: U6 ? w10 ? "auto" : "none" : void 0, ...n3.style }, onFocusCapture: o3(n3.onFocusCapture, O8.onFocusCapture), onBlurCapture: o3(n3.onBlurCapture, O8.onBlurCapture), onPointerDownCapture: o3(n3.onPointerDownCapture, z8.onPointerDownCapture) }));
});
var J3 = ee2((n3, e5) => {
  let o7 = J2(F4), i5 = L(null), t3 = u2(e5, i5);
  return z2(() => {
    let r7 = i5.current;
    if (r7)
      return o7.branches.add(r7), () => {
        o7.branches.delete(r7);
      };
  }, [o7.branches]), re(u3.div, p3({}, n3, { ref: t3 }));
});
function Q4(n3, e5 = globalThis?.document) {
  let o7 = l2(n3), i5 = L(false), t3 = L(() => {
  });
  return z2(() => {
    let r7 = (d12) => {
      if (d12.target && !i5.current) {
        let v5 = function() {
          I4(X4, o7, l6, { discrete: true });
        }, l6 = { originalEvent: d12 };
        d12.pointerType === "touch" ? (e5.removeEventListener("click", t3.current), t3.current = v5, e5.addEventListener("click", t3.current, { once: true })) : v5();
      } else
        e5.removeEventListener("click", t3.current);
      i5.current = false;
    }, f8 = window.setTimeout(() => {
      e5.addEventListener("pointerdown", r7);
    }, 0);
    return () => {
      window.clearTimeout(f8), e5.removeEventListener("pointerdown", r7), e5.removeEventListener("click", t3.current);
    };
  }, [e5, o7]), { onPointerDownCapture: () => i5.current = true };
}
function V3(n3, e5 = globalThis?.document) {
  let o7 = l2(n3), i5 = L(false);
  return z2(() => {
    let t3 = (r7) => {
      r7.target && !i5.current && I4(Y2, o7, { originalEvent: r7 }, { discrete: false });
    };
    return e5.addEventListener("focusin", t3), () => e5.removeEventListener("focusin", t3);
  }, [e5, o7]), { onFocusCapture: () => i5.current = true, onBlurCapture: () => i5.current = false };
}
function L3() {
  let n3 = new CustomEvent(h2);
  document.dispatchEvent(n3);
}
function I4(n3, e5, o7, { discrete: i5 }) {
  let t3 = o7.originalEvent.target, r7 = new CustomEvent(n3, { bubbles: false, cancelable: true, detail: o7 });
  e5 && t3.addEventListener(n3, e5, { once: true }), i5 ? E3(t3, r7) : t3.dispatchEvent(r7);
}

// https://esm.sh/v132/@radix-ui/react-focus-guards@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-guards.mjs
var d4 = 0;
function c2() {
  z2(() => {
    var e5, t3;
    let a5 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e5 = a5[0]) !== null && e5 !== void 0 ? e5 : r3()), document.body.insertAdjacentElement("beforeend", (t3 = a5[1]) !== null && t3 !== void 0 ? t3 : r3()), d4++, () => {
      d4 === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o7) => o7.remove()), d4--;
    };
  }, []);
}
function r3() {
  let e5 = document.createElement("span");
  return e5.setAttribute("data-radix-focus-guard", ""), e5.tabIndex = 0, e5.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e5;
}

// https://esm.sh/v132/@radix-ui/react-focus-scope@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-scope.mjs
var E4 = "focusScope.autoFocusOnMount";
var b5 = "focusScope.autoFocusOnUnmount";
var S4 = { bubbles: false, cancelable: true };
var Q5 = ee2((e5, n3) => {
  let { loop: t3 = false, trapped: a5 = false, onMountAutoFocus: m9, onUnmountAutoFocus: L9, ...R5 } = e5, [o7, g8] = I2(null), $5 = l2(m9), v5 = l2(L9), p8 = L(null), H5 = u2(n3, (s6) => g8(s6)), i5 = L({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  z2(() => {
    if (a5) {
      let s6 = function(u7) {
        if (i5.paused || !o7)
          return;
        let r7 = u7.target;
        o7.contains(r7) ? p8.current = r7 : d5(p8.current, { select: true });
      }, f8 = function(u7) {
        if (i5.paused || !o7)
          return;
        let r7 = u7.relatedTarget;
        r7 !== null && (o7.contains(r7) || d5(p8.current, { select: true }));
      }, c6 = function(u7) {
        if (document.activeElement === document.body)
          for (let F6 of u7)
            F6.removedNodes.length > 0 && d5(o7);
      };
      document.addEventListener("focusin", s6), document.addEventListener("focusout", f8);
      let l6 = new MutationObserver(c6);
      return o7 && l6.observe(o7, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", s6), document.removeEventListener("focusout", f8), l6.disconnect();
      };
    }
  }, [a5, o7, i5.paused]), z2(() => {
    if (o7) {
      C4.add(i5);
      let s6 = document.activeElement;
      if (!o7.contains(s6)) {
        let c6 = new CustomEvent(E4, S4);
        o7.addEventListener(E4, $5), o7.dispatchEvent(c6), c6.defaultPrevented || (x4(q3(I5(o7)), { select: true }), document.activeElement === s6 && d5(o7));
      }
      return () => {
        o7.removeEventListener(E4, $5), setTimeout(() => {
          let c6 = new CustomEvent(b5, S4);
          o7.addEventListener(b5, v5), o7.dispatchEvent(c6), c6.defaultPrevented || d5(s6 ?? document.body, { select: true }), o7.removeEventListener(b5, v5), C4.remove(i5);
        }, 0);
      };
    }
  }, [o7, $5, v5, i5]);
  let P8 = G2((s6) => {
    if (!t3 && !a5 || i5.paused)
      return;
    let f8 = s6.key === "Tab" && !s6.altKey && !s6.ctrlKey && !s6.metaKey, c6 = document.activeElement;
    if (f8 && c6) {
      let l6 = s6.currentTarget, [u7, r7] = D3(l6);
      u7 && r7 ? !s6.shiftKey && c6 === r7 ? (s6.preventDefault(), t3 && d5(u7, { select: true })) : s6.shiftKey && c6 === u7 && (s6.preventDefault(), t3 && d5(r7, { select: true })) : c6 === l6 && s6.preventDefault();
    }
  }, [t3, a5, i5.paused]);
  return re(u3.div, p3({ tabIndex: -1 }, R5, { ref: H5, onKeyDown: P8 }));
});
function x4(e5, { select: n3 = false } = {}) {
  let t3 = document.activeElement;
  for (let a5 of e5)
    if (d5(a5, { select: n3 }), document.activeElement !== t3)
      return;
}
function D3(e5) {
  let n3 = I5(e5), t3 = N2(n3, e5), a5 = N2(n3.reverse(), e5);
  return [t3, a5];
}
function I5(e5) {
  let n3 = [], t3 = document.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, { acceptNode: (a5) => {
    let m9 = a5.tagName === "INPUT" && a5.type === "hidden";
    return a5.disabled || a5.hidden || m9 ? NodeFilter.FILTER_SKIP : a5.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; t3.nextNode(); )
    n3.push(t3.currentNode);
  return n3;
}
function N2(e5, n3) {
  for (let t3 of e5)
    if (!V4(t3, { upTo: n3 }))
      return t3;
}
function V4(e5, { upTo: n3 }) {
  if (getComputedStyle(e5).visibility === "hidden")
    return true;
  for (; e5; ) {
    if (n3 !== void 0 && e5 === n3)
      return false;
    if (getComputedStyle(e5).display === "none")
      return true;
    e5 = e5.parentElement;
  }
  return false;
}
function W3(e5) {
  return e5 instanceof HTMLInputElement && "select" in e5;
}
function d5(e5, { select: n3 = false } = {}) {
  if (e5 && e5.focus) {
    let t3 = document.activeElement;
    e5.focus({ preventScroll: true }), e5 !== t3 && W3(e5) && n3 && e5.select();
  }
}
var C4 = j2();
function j2() {
  let e5 = [];
  return { add(n3) {
    let t3 = e5[0];
    n3 !== t3 && t3?.pause(), e5 = O4(e5, n3), e5.unshift(n3);
  }, remove(n3) {
    var t3;
    e5 = O4(e5, n3), (t3 = e5[0]) === null || t3 === void 0 || t3.resume();
  } };
}
function O4(e5, n3) {
  let t3 = [...e5], a5 = t3.indexOf(n3);
  return a5 !== -1 && t3.splice(a5, 1), t3;
}
function q3(e5) {
  return e5.filter((n3) => n3.tagName !== "A");
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u4 = compat_exports["useId".toString()] || (() => {
});
var r4 = 0;
function n2(t3) {
  let [e5, o7] = I2(u4());
  return e(() => {
    t3 || o7(($5) => $5 ?? String(r4++));
  }, [t3]), t3 || (e5 ? `radix-${e5}` : "");
}

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/utils.mjs
var a2 = ["top", "right", "bottom", "left"];
var f2 = ["start", "end"];
var O5 = a2.reduce((t3, n3) => t3.concat(n3, n3 + "-" + f2[0], n3 + "-" + f2[1]), []);
var m2 = Math.min;
var p4 = Math.max;
var S5 = Math.round;
var w3 = Math.floor;
var j3 = (t3) => ({ x: t3, y: t3 });
var h3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
var x5 = { start: "end", end: "start" };
function C5(t3, n3, o7) {
  return p4(t3, m2(n3, o7));
}
function L4(t3, n3) {
  return typeof t3 == "function" ? t3(n3) : t3;
}
function l3(t3) {
  return t3.split("-")[0];
}
function g3(t3) {
  return t3.split("-")[1];
}
function b6(t3) {
  return t3 === "x" ? "y" : "x";
}
function d6(t3) {
  return t3 === "y" ? "height" : "width";
}
function A4(t3) {
  return ["top", "bottom"].includes(l3(t3)) ? "y" : "x";
}
function y4(t3) {
  return b6(A4(t3));
}
function E5(t3, n3, o7) {
  o7 === void 0 && (o7 = false);
  let c6 = g3(t3), i5 = y4(t3), e5 = d6(i5), r7 = i5 === "x" ? c6 === (o7 ? "end" : "start") ? "right" : "left" : c6 === "start" ? "bottom" : "top";
  return n3.reference[e5] > n3.floating[e5] && (r7 = u5(r7)), [r7, u5(r7)];
}
function R4(t3) {
  let n3 = u5(t3);
  return [s2(t3), n3, s2(n3)];
}
function s2(t3) {
  return t3.replace(/start|end/g, (n3) => x5[n3]);
}
function P2(t3, n3, o7) {
  let c6 = ["left", "right"], i5 = ["right", "left"], e5 = ["top", "bottom"], r7 = ["bottom", "top"];
  switch (t3) {
    case "top":
    case "bottom":
      return o7 ? n3 ? i5 : c6 : n3 ? c6 : i5;
    case "left":
    case "right":
      return n3 ? e5 : r7;
    default:
      return [];
  }
}
function T3(t3, n3, o7, c6) {
  let i5 = g3(t3), e5 = P2(l3(t3), o7 === "start", c6);
  return i5 && (e5 = e5.map((r7) => r7 + "-" + i5), n3 && (e5 = e5.concat(e5.map(s2)))), e5;
}
function u5(t3) {
  return t3.replace(/left|right|bottom|top/g, (n3) => h3[n3]);
}
function M4(t3) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
}
function k3(t3) {
  return typeof t3 != "number" ? M4(t3) : { top: t3, right: t3, bottom: t3, left: t3 };
}
function q4(t3) {
  return { ...t3, top: t3.y, left: t3.x, right: t3.x + t3.width, bottom: t3.y + t3.height };
}

// https://esm.sh/v132/@floating-ui/core@1.4.2/denonext/core.mjs
function q5(e5, t3, l6) {
  let { reference: s6, floating: i5 } = e5, n3 = A4(t3), r7 = y4(t3), v5 = d6(r7), m9 = l3(t3), g8 = n3 === "y", u7 = s6.x + s6.width / 2 - i5.width / 2, c6 = s6.y + s6.height / 2 - i5.height / 2, f8 = s6[v5] / 2 - i5[v5] / 2, o7;
  switch (m9) {
    case "top":
      o7 = { x: u7, y: s6.y - i5.height };
      break;
    case "bottom":
      o7 = { x: u7, y: s6.y + s6.height };
      break;
    case "right":
      o7 = { x: s6.x + s6.width, y: c6 };
      break;
    case "left":
      o7 = { x: s6.x - i5.width, y: c6 };
      break;
    default:
      o7 = { x: s6.x, y: s6.y };
  }
  switch (g3(t3)) {
    case "start":
      o7[r7] -= f8 * (l6 && g8 ? -1 : 1);
      break;
    case "end":
      o7[r7] += f8 * (l6 && g8 ? -1 : 1);
      break;
  }
  return o7;
}
var ae3 = async (e5, t3, l6) => {
  let { placement: s6 = "bottom", strategy: i5 = "absolute", middleware: n3 = [], platform: r7 } = l6, v5 = n3.filter(Boolean), m9 = await (r7.isRTL == null ? void 0 : r7.isRTL(t3)), g8 = await r7.getElementRects({ reference: e5, floating: t3, strategy: i5 }), { x: u7, y: c6 } = q5(g8, s6, m9), f8 = s6, o7 = {}, a5 = 0;
  for (let x10 = 0; x10 < v5.length; x10++) {
    let { name: d12, fn: y8 } = v5[x10], { x: w10, y: p8, data: A6, reset: h9 } = await y8({ x: u7, y: c6, initialPlacement: s6, placement: f8, strategy: i5, middlewareData: o7, rects: g8, platform: r7, elements: { reference: e5, floating: t3 } });
    if (u7 = w10 ?? u7, c6 = p8 ?? c6, o7 = { ...o7, [d12]: { ...o7[d12], ...A6 } }, h9 && a5 <= 50) {
      a5++, typeof h9 == "object" && (h9.placement && (f8 = h9.placement), h9.rects && (g8 = h9.rects === true ? await r7.getElementRects({ reference: e5, floating: t3, strategy: i5 }) : h9.rects), { x: u7, y: c6 } = q5(g8, f8, m9)), x10 = -1;
      continue;
    }
  }
  return { x: u7, y: c6, placement: f8, strategy: i5, middlewareData: o7 };
};
async function j4(e5, t3) {
  var l6;
  t3 === void 0 && (t3 = {});
  let { x: s6, y: i5, platform: n3, rects: r7, elements: v5, strategy: m9 } = e5, { boundary: g8 = "clippingAncestors", rootBoundary: u7 = "viewport", elementContext: c6 = "floating", altBoundary: f8 = false, padding: o7 = 0 } = L4(t3, e5), a5 = k3(o7), d12 = v5[f8 ? c6 === "floating" ? "reference" : "floating" : c6], y8 = q4(await n3.getClippingRect({ element: (l6 = await (n3.isElement == null ? void 0 : n3.isElement(d12))) == null || l6 ? d12 : d12.contextElement || await (n3.getDocumentElement == null ? void 0 : n3.getDocumentElement(v5.floating)), boundary: g8, rootBoundary: u7, strategy: m9 })), w10 = c6 === "floating" ? { ...r7.floating, x: s6, y: i5 } : r7.reference, p8 = await (n3.getOffsetParent == null ? void 0 : n3.getOffsetParent(v5.floating)), A6 = await (n3.isElement == null ? void 0 : n3.isElement(p8)) ? await (n3.getScale == null ? void 0 : n3.getScale(p8)) || { x: 1, y: 1 } : { x: 1, y: 1 }, h9 = q4(n3.convertOffsetParentRelativeRectToViewportRelativeRect ? await n3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w10, offsetParent: p8, strategy: m9 }) : w10);
  return { top: (y8.top - h9.top + a5.top) / A6.y, bottom: (h9.bottom - y8.bottom + a5.bottom) / A6.y, left: (y8.left - h9.left + a5.left) / A6.x, right: (h9.right - y8.right + a5.right) / A6.x };
}
var fe3 = (e5) => ({ name: "arrow", options: e5, async fn(t3) {
  let { x: l6, y: s6, placement: i5, rects: n3, platform: r7, elements: v5, middlewareData: m9 } = t3, { element: g8, padding: u7 = 0 } = L4(e5, t3) || {};
  if (g8 == null)
    return {};
  let c6 = k3(u7), f8 = { x: l6, y: s6 }, o7 = y4(i5), a5 = d6(o7), x10 = await r7.getDimensions(g8), d12 = o7 === "y", y8 = d12 ? "top" : "left", w10 = d12 ? "bottom" : "right", p8 = d12 ? "clientHeight" : "clientWidth", A6 = n3.reference[a5] + n3.reference[o7] - f8[o7] - n3.floating[a5], h9 = f8[o7] - n3.reference[o7], b10 = await (r7.getOffsetParent == null ? void 0 : r7.getOffsetParent(g8)), R5 = b10 ? b10[p8] : 0;
  (!R5 || !await (r7.isElement == null ? void 0 : r7.isElement(b10))) && (R5 = v5.floating[p8] || n3.floating[a5]);
  let B5 = A6 / 2 - h9 / 2, T8 = R5 / 2 - x10[a5] / 2 - 1, P8 = m2(c6[y8], T8), O8 = m2(c6[w10], T8), E9 = P8, S12 = R5 - x10[a5] - O8, C8 = R5 / 2 - x10[a5] / 2 + B5, k6 = C5(E9, C8, S12), L9 = !m9.arrow && g3(i5) != null && C8 != k6 && n3.reference[a5] / 2 - (C8 < E9 ? P8 : O8) - x10[a5] / 2 < 0, Y5 = L9 ? C8 < E9 ? E9 - C8 : S12 - C8 : 0;
  return { [o7]: f8[o7] - Y5, data: { [o7]: k6, centerOffset: C8 - k6 + Y5 }, reset: L9 };
} });
var de3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "flip", options: e5, async fn(t3) {
    var l6;
    let { placement: s6, middlewareData: i5, rects: n3, initialPlacement: r7, platform: v5, elements: m9 } = t3, { mainAxis: g8 = true, crossAxis: u7 = true, fallbackPlacements: c6, fallbackStrategy: f8 = "bestFit", fallbackAxisSideDirection: o7 = "none", flipAlignment: a5 = true, ...x10 } = L4(e5, t3), d12 = l3(s6), y8 = l3(r7) === r7, w10 = await (v5.isRTL == null ? void 0 : v5.isRTL(m9.floating)), p8 = c6 || (y8 || !a5 ? [u5(r7)] : R4(r7));
    !c6 && o7 !== "none" && p8.push(...T3(r7, a5, o7, w10));
    let A6 = [r7, ...p8], h9 = await j4(t3, x10), b10 = [], R5 = ((l6 = i5.flip) == null ? void 0 : l6.overflows) || [];
    if (g8 && b10.push(h9[d12]), u7) {
      let O8 = E5(s6, n3, w10);
      b10.push(h9[O8[0]], h9[O8[1]]);
    }
    if (R5 = [...R5, { placement: s6, overflows: b10 }], !b10.every((O8) => O8 <= 0)) {
      var B5, T8;
      let O8 = (((B5 = i5.flip) == null ? void 0 : B5.index) || 0) + 1, E9 = A6[O8];
      if (E9)
        return { data: { index: O8, overflows: R5 }, reset: { placement: E9 } };
      let S12 = (T8 = R5.filter((C8) => C8.overflows[0] <= 0).sort((C8, k6) => C8.overflows[1] - k6.overflows[1])[0]) == null ? void 0 : T8.placement;
      if (!S12)
        switch (f8) {
          case "bestFit": {
            var P8;
            let C8 = (P8 = R5.map((k6) => [k6.placement, k6.overflows.filter((L9) => L9 > 0).reduce((L9, Y5) => L9 + Y5, 0)]).sort((k6, L9) => k6[1] - L9[1])[0]) == null ? void 0 : P8[0];
            C8 && (S12 = C8);
            break;
          }
          case "initialPlacement":
            S12 = r7;
            break;
        }
      if (s6 !== S12)
        return { reset: { placement: S12 } };
    }
    return {};
  } };
};
function G4(e5, t3) {
  return { top: e5.top - t3.height, right: e5.right - t3.width, bottom: e5.bottom - t3.height, left: e5.left - t3.width };
}
function J4(e5) {
  return a2.some((t3) => e5[t3] >= 0);
}
var ue3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "hide", options: e5, async fn(t3) {
    let { rects: l6 } = t3, { strategy: s6 = "referenceHidden", ...i5 } = L4(e5, t3);
    switch (s6) {
      case "referenceHidden": {
        let n3 = await j4(t3, { ...i5, elementContext: "reference" }), r7 = G4(n3, l6.reference);
        return { data: { referenceHiddenOffsets: r7, referenceHidden: J4(r7) } };
      }
      case "escaped": {
        let n3 = await j4(t3, { ...i5, altBoundary: true }), r7 = G4(n3, l6.floating);
        return { data: { escapedOffsets: r7, escaped: J4(r7) } };
      }
      default:
        return {};
    }
  } };
};
async function le3(e5, t3) {
  let { placement: l6, platform: s6, elements: i5 } = e5, n3 = await (s6.isRTL == null ? void 0 : s6.isRTL(i5.floating)), r7 = l3(l6), v5 = g3(l6), m9 = A4(l6) === "y", g8 = ["left", "top"].includes(r7) ? -1 : 1, u7 = n3 && m9 ? -1 : 1, c6 = L4(t3, e5), { mainAxis: f8, crossAxis: o7, alignmentAxis: a5 } = typeof c6 == "number" ? { mainAxis: c6, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c6 };
  return v5 && typeof a5 == "number" && (o7 = v5 === "end" ? a5 * -1 : a5), m9 ? { x: o7 * u7, y: f8 * g8 } : { x: f8 * g8, y: o7 * u7 };
}
var xe2 = function(e5) {
  return e5 === void 0 && (e5 = 0), { name: "offset", options: e5, async fn(t3) {
    let { x: l6, y: s6 } = t3, i5 = await le3(t3, e5);
    return { x: l6 + i5.x, y: s6 + i5.y, data: i5 };
  } };
};
var he3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "shift", options: e5, async fn(t3) {
    let { x: l6, y: s6, placement: i5 } = t3, { mainAxis: n3 = true, crossAxis: r7 = false, limiter: v5 = { fn: (d12) => {
      let { x: y8, y: w10 } = d12;
      return { x: y8, y: w10 };
    } }, ...m9 } = L4(e5, t3), g8 = { x: l6, y: s6 }, u7 = await j4(t3, m9), c6 = A4(l3(i5)), f8 = b6(c6), o7 = g8[f8], a5 = g8[c6];
    if (n3) {
      let d12 = f8 === "y" ? "top" : "left", y8 = f8 === "y" ? "bottom" : "right", w10 = o7 + u7[d12], p8 = o7 - u7[y8];
      o7 = C5(w10, o7, p8);
    }
    if (r7) {
      let d12 = c6 === "y" ? "top" : "left", y8 = c6 === "y" ? "bottom" : "right", w10 = a5 + u7[d12], p8 = a5 - u7[y8];
      a5 = C5(w10, a5, p8);
    }
    let x10 = v5.fn({ ...t3, [f8]: o7, [c6]: a5 });
    return { ...x10, data: { x: x10.x - l6, y: x10.y - s6 } };
  } };
};
var pe3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { options: e5, fn(t3) {
    let { x: l6, y: s6, placement: i5, rects: n3, middlewareData: r7 } = t3, { offset: v5 = 0, mainAxis: m9 = true, crossAxis: g8 = true } = L4(e5, t3), u7 = { x: l6, y: s6 }, c6 = A4(i5), f8 = b6(c6), o7 = u7[f8], a5 = u7[c6], x10 = L4(v5, t3), d12 = typeof x10 == "number" ? { mainAxis: x10, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x10 };
    if (m9) {
      let p8 = f8 === "y" ? "height" : "width", A6 = n3.reference[f8] - n3.floating[p8] + d12.mainAxis, h9 = n3.reference[f8] + n3.reference[p8] - d12.mainAxis;
      o7 < A6 ? o7 = A6 : o7 > h9 && (o7 = h9);
    }
    if (g8) {
      var y8, w10;
      let p8 = f8 === "y" ? "width" : "height", A6 = ["top", "left"].includes(l3(i5)), h9 = n3.reference[c6] - n3.floating[p8] + (A6 && ((y8 = r7.offset) == null ? void 0 : y8[c6]) || 0) + (A6 ? 0 : d12.crossAxis), b10 = n3.reference[c6] + n3.reference[p8] + (A6 ? 0 : ((w10 = r7.offset) == null ? void 0 : w10[c6]) || 0) - (A6 ? d12.crossAxis : 0);
      a5 < h9 ? a5 = h9 : a5 > b10 && (a5 = b10);
    }
    return { [f8]: o7, [c6]: a5 };
  } };
};
var we2 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "size", options: e5, async fn(t3) {
    let { placement: l6, rects: s6, platform: i5, elements: n3 } = t3, { apply: r7 = () => {
    }, ...v5 } = L4(e5, t3), m9 = await j4(t3, v5), g8 = l3(l6), u7 = g3(l6), c6 = A4(l6) === "y", { width: f8, height: o7 } = s6.floating, a5, x10;
    g8 === "top" || g8 === "bottom" ? (a5 = g8, x10 = u7 === (await (i5.isRTL == null ? void 0 : i5.isRTL(n3.floating)) ? "start" : "end") ? "left" : "right") : (x10 = g8, a5 = u7 === "end" ? "top" : "bottom");
    let d12 = o7 - m9[a5], y8 = f8 - m9[x10], w10 = !t3.middlewareData.shift, p8 = d12, A6 = y8;
    if (c6) {
      let b10 = f8 - m9.left - m9.right;
      A6 = u7 || w10 ? m2(y8, b10) : b10;
    } else {
      let b10 = o7 - m9.top - m9.bottom;
      p8 = u7 || w10 ? m2(d12, b10) : b10;
    }
    if (w10 && !u7) {
      let b10 = p4(m9.left, 0), R5 = p4(m9.right, 0), B5 = p4(m9.top, 0), T8 = p4(m9.bottom, 0);
      c6 ? A6 = f8 - 2 * (b10 !== 0 || R5 !== 0 ? b10 + R5 : p4(m9.left, m9.right)) : p8 = o7 - 2 * (B5 !== 0 || T8 !== 0 ? B5 + T8 : p4(m9.top, m9.bottom));
    }
    await r7({ ...t3, availableWidth: A6, availableHeight: p8 });
    let h9 = await i5.getDimensions(n3.floating);
    return f8 !== h9.width || o7 !== h9.height ? { reset: { rects: true } } : {};
  } };
};

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/dom.js
function l4(n3) {
  return a3(n3) ? (n3.nodeName || "").toLowerCase() : "#document";
}
function i2(n3) {
  var t3;
  return (n3 == null || (t3 = n3.ownerDocument) == null ? void 0 : t3.defaultView) || window;
}
function y5(n3) {
  var t3;
  return (t3 = (a3(n3) ? n3.ownerDocument : n3.document) || window.document) == null ? void 0 : t3.documentElement;
}
function a3(n3) {
  return n3 instanceof Node || n3 instanceof i2(n3).Node;
}
function S6(n3) {
  return n3 instanceof Element || n3 instanceof i2(n3).Element;
}
function d7(n3) {
  return n3 instanceof HTMLElement || n3 instanceof i2(n3).HTMLElement;
}
function s3(n3) {
  return typeof ShadowRoot > "u" ? false : n3 instanceof ShadowRoot || n3 instanceof i2(n3).ShadowRoot;
}
function m3(n3) {
  let { overflow: t3, overflowX: e5, overflowY: o7, display: r7 } = p5(n3);
  return /auto|scroll|overlay|hidden|clip/.test(t3 + o7 + e5) && !["inline", "contents"].includes(r7);
}
function E6(n3) {
  return ["table", "td", "th"].includes(l4(n3));
}
function N3(n3) {
  let t3 = h4(), e5 = p5(n3);
  return e5.transform !== "none" || e5.perspective !== "none" || (e5.containerType ? e5.containerType !== "normal" : false) || !t3 && (e5.backdropFilter ? e5.backdropFilter !== "none" : false) || !t3 && (e5.filter ? e5.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o7) => (e5.willChange || "").includes(o7)) || ["paint", "layout", "strict", "content"].some((o7) => (e5.contain || "").includes(o7));
}
function v2(n3) {
  let t3 = u6(n3);
  for (; d7(t3) && !w4(t3); ) {
    if (N3(t3))
      return t3;
    t3 = u6(t3);
  }
  return null;
}
function h4() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function w4(n3) {
  return ["html", "body", "#document"].includes(l4(n3));
}
function p5(n3) {
  return i2(n3).getComputedStyle(n3);
}
function T4(n3) {
  return S6(n3) ? { scrollLeft: n3.scrollLeft, scrollTop: n3.scrollTop } : { scrollLeft: n3.pageXOffset, scrollTop: n3.pageYOffset };
}
function u6(n3) {
  if (l4(n3) === "html")
    return n3;
  let t3 = n3.assignedSlot || n3.parentNode || s3(n3) && n3.host || y5(n3);
  return s3(t3) ? t3.host : t3;
}
function g4(n3) {
  let t3 = u6(n3);
  return w4(t3) ? n3.ownerDocument ? n3.ownerDocument.body : n3.body : d7(t3) && m3(t3) ? t3 : g4(t3);
}
function f3(n3, t3, e5) {
  var o7;
  t3 === void 0 && (t3 = []), e5 === void 0 && (e5 = true);
  let r7 = g4(n3), b10 = r7 === ((o7 = n3.ownerDocument) == null ? void 0 : o7.body), c6 = i2(r7);
  return b10 ? t3.concat(c6, c6.visualViewport || [], m3(r7) ? r7 : [], c6.frameElement && e5 ? f3(c6.frameElement) : []) : t3.concat(r7, f3(r7));
}

// https://esm.sh/v132/@floating-ui/dom@1.5.3/denonext/dom.mjs
function j5(t3) {
  let e5 = p5(t3), i5 = parseFloat(e5.width) || 0, o7 = parseFloat(e5.height) || 0, n3 = d7(t3), c6 = n3 ? t3.offsetWidth : i5, s6 = n3 ? t3.offsetHeight : o7, r7 = S5(i5) !== c6 || S5(o7) !== s6;
  return r7 && (i5 = c6, o7 = s6), { width: i5, height: o7, $: r7 };
}
function S7(t3) {
  return S6(t3) ? t3 : t3.contextElement;
}
function L5(t3) {
  let e5 = S7(t3);
  if (!d7(e5))
    return j3(1);
  let i5 = e5.getBoundingClientRect(), { width: o7, height: n3, $: c6 } = j5(e5), s6 = (c6 ? S5(i5.width) : i5.width) / o7, r7 = (c6 ? S5(i5.height) : i5.height) / n3;
  return (!s6 || !Number.isFinite(s6)) && (s6 = 1), (!r7 || !Number.isFinite(r7)) && (r7 = 1), { x: s6, y: r7 };
}
var et = j3(0);
function G5(t3) {
  let e5 = i2(t3);
  return !h4() || !e5.visualViewport ? et : { x: e5.visualViewport.offsetLeft, y: e5.visualViewport.offsetTop };
}
function it(t3, e5, i5) {
  return e5 === void 0 && (e5 = false), !i5 || e5 && i5 !== i2(t3) ? false : e5;
}
function O6(t3, e5, i5, o7) {
  e5 === void 0 && (e5 = false), i5 === void 0 && (i5 = false);
  let n3 = t3.getBoundingClientRect(), c6 = S7(t3), s6 = j3(1);
  e5 && (o7 ? S6(o7) && (s6 = L5(o7)) : s6 = L5(t3));
  let r7 = it(c6, i5, o7) ? G5(c6) : j3(0), l6 = (n3.left + r7.x) / s6.x, f8 = (n3.top + r7.y) / s6.y, p8 = n3.width / s6.x, d12 = n3.height / s6.y;
  if (c6) {
    let w10 = i2(c6), a5 = o7 && S6(o7) ? i2(o7) : o7, g8 = w10.frameElement;
    for (; g8 && o7 && a5 !== w10; ) {
      let h9 = L5(g8), R5 = g8.getBoundingClientRect(), u7 = p5(g8), C8 = R5.left + (g8.clientLeft + parseFloat(u7.paddingLeft)) * h9.x, W7 = R5.top + (g8.clientTop + parseFloat(u7.paddingTop)) * h9.y;
      l6 *= h9.x, f8 *= h9.y, p8 *= h9.x, d12 *= h9.y, l6 += C8, f8 += W7, g8 = i2(g8).frameElement;
    }
  }
  return q4({ width: p8, height: d12, x: l6, y: f8 });
}
function ot(t3) {
  let { rect: e5, offsetParent: i5, strategy: o7 } = t3, n3 = d7(i5), c6 = y5(i5);
  if (i5 === c6)
    return e5;
  let s6 = { scrollLeft: 0, scrollTop: 0 }, r7 = j3(1), l6 = j3(0);
  if ((n3 || !n3 && o7 !== "fixed") && ((l4(i5) !== "body" || m3(c6)) && (s6 = T4(i5)), d7(i5))) {
    let f8 = O6(i5);
    r7 = L5(i5), l6.x = f8.x + i5.clientLeft, l6.y = f8.y + i5.clientTop;
  }
  return { width: e5.width * r7.x, height: e5.height * r7.y, x: e5.x * r7.x - s6.scrollLeft * r7.x + l6.x, y: e5.y * r7.y - s6.scrollTop * r7.y + l6.y };
}
function nt(t3) {
  return Array.from(t3.getClientRects());
}
function J5(t3) {
  return O6(y5(t3)).left + T4(t3).scrollLeft;
}
function st(t3) {
  let e5 = y5(t3), i5 = T4(t3), o7 = t3.ownerDocument.body, n3 = p4(e5.scrollWidth, e5.clientWidth, o7.scrollWidth, o7.clientWidth), c6 = p4(e5.scrollHeight, e5.clientHeight, o7.scrollHeight, o7.clientHeight), s6 = -i5.scrollLeft + J5(t3), r7 = -i5.scrollTop;
  return p5(o7).direction === "rtl" && (s6 += p4(e5.clientWidth, o7.clientWidth) - n3), { width: n3, height: c6, x: s6, y: r7 };
}
function rt(t3, e5) {
  let i5 = i2(t3), o7 = y5(t3), n3 = i5.visualViewport, c6 = o7.clientWidth, s6 = o7.clientHeight, r7 = 0, l6 = 0;
  if (n3) {
    c6 = n3.width, s6 = n3.height;
    let f8 = h4();
    (!f8 || f8 && e5 === "fixed") && (r7 = n3.offsetLeft, l6 = n3.offsetTop);
  }
  return { width: c6, height: s6, x: r7, y: l6 };
}
function ct(t3, e5) {
  let i5 = O6(t3, true, e5 === "fixed"), o7 = i5.top + t3.clientTop, n3 = i5.left + t3.clientLeft, c6 = d7(t3) ? L5(t3) : j3(1), s6 = t3.clientWidth * c6.x, r7 = t3.clientHeight * c6.y, l6 = n3 * c6.x, f8 = o7 * c6.y;
  return { width: s6, height: r7, x: l6, y: f8 };
}
function k4(t3, e5, i5) {
  let o7;
  if (e5 === "viewport")
    o7 = rt(t3, i5);
  else if (e5 === "document")
    o7 = st(y5(t3));
  else if (S6(e5))
    o7 = ct(e5, i5);
  else {
    let n3 = G5(t3);
    o7 = { ...e5, x: e5.x - n3.x, y: e5.y - n3.y };
  }
  return q4(o7);
}
function P3(t3, e5) {
  let i5 = u6(t3);
  return i5 === e5 || !S6(i5) || w4(i5) ? false : p5(i5).position === "fixed" || P3(i5, e5);
}
function lt(t3, e5) {
  let i5 = e5.get(t3);
  if (i5)
    return i5;
  let o7 = f3(t3, [], false).filter((r7) => S6(r7) && l4(r7) !== "body"), n3 = null, c6 = p5(t3).position === "fixed", s6 = c6 ? u6(t3) : t3;
  for (; S6(s6) && !w4(s6); ) {
    let r7 = p5(s6), l6 = N3(s6);
    !l6 && r7.position === "fixed" && (n3 = null), (c6 ? !l6 && !n3 : !l6 && r7.position === "static" && !!n3 && ["absolute", "fixed"].includes(n3.position) || m3(s6) && !l6 && P3(t3, s6)) ? o7 = o7.filter((p8) => p8 !== s6) : n3 = r7, s6 = u6(s6);
  }
  return e5.set(t3, o7), o7;
}
function ft(t3) {
  let { element: e5, boundary: i5, rootBoundary: o7, strategy: n3 } = t3, s6 = [...i5 === "clippingAncestors" ? lt(e5, this._c) : [].concat(i5), o7], r7 = s6[0], l6 = s6.reduce((f8, p8) => {
    let d12 = k4(e5, p8, n3);
    return f8.top = p4(d12.top, f8.top), f8.right = m2(d12.right, f8.right), f8.bottom = m2(d12.bottom, f8.bottom), f8.left = p4(d12.left, f8.left), f8;
  }, k4(e5, r7, n3));
  return { width: l6.right - l6.left, height: l6.bottom - l6.top, x: l6.left, y: l6.top };
}
function ut(t3) {
  return j5(t3);
}
function ht(t3, e5, i5) {
  let o7 = d7(e5), n3 = y5(e5), c6 = i5 === "fixed", s6 = O6(t3, true, c6, e5), r7 = { scrollLeft: 0, scrollTop: 0 }, l6 = j3(0);
  if (o7 || !o7 && !c6)
    if ((l4(e5) !== "body" || m3(n3)) && (r7 = T4(e5)), o7) {
      let f8 = O6(e5, true, c6, e5);
      l6.x = f8.x + e5.clientLeft, l6.y = f8.y + e5.clientTop;
    } else
      n3 && (l6.x = J5(n3));
  return { x: s6.left + r7.scrollLeft - l6.x, y: s6.top + r7.scrollTop - l6.y, width: s6.width, height: s6.height };
}
function q6(t3, e5) {
  return !d7(t3) || p5(t3).position === "fixed" ? null : e5 ? e5(t3) : t3.offsetParent;
}
function Q6(t3, e5) {
  let i5 = i2(t3);
  if (!d7(t3))
    return i5;
  let o7 = q6(t3, e5);
  for (; o7 && E6(o7) && p5(o7).position === "static"; )
    o7 = q6(o7, e5);
  return o7 && (l4(o7) === "html" || l4(o7) === "body" && p5(o7).position === "static" && !N3(o7)) ? i5 : o7 || v2(t3) || i5;
}
var at = async function(t3) {
  let { reference: e5, floating: i5, strategy: o7 } = t3, n3 = this.getOffsetParent || Q6, c6 = this.getDimensions;
  return { reference: ht(e5, await n3(i5), o7), floating: { x: 0, y: 0, ...await c6(i5) } };
};
function dt(t3) {
  return p5(t3).direction === "rtl";
}
var gt = { convertOffsetParentRelativeRectToViewportRelativeRect: ot, getDocumentElement: y5, getClippingRect: ft, getOffsetParent: Q6, getElementRects: at, getClientRects: nt, getDimensions: ut, getScale: L5, isElement: S6, isRTL: dt };
function pt(t3, e5) {
  let i5 = null, o7, n3 = y5(t3);
  function c6() {
    clearTimeout(o7), i5 && i5.disconnect(), i5 = null;
  }
  function s6(r7, l6) {
    r7 === void 0 && (r7 = false), l6 === void 0 && (l6 = 1), c6();
    let { left: f8, top: p8, width: d12, height: w10 } = t3.getBoundingClientRect();
    if (r7 || e5(), !d12 || !w10)
      return;
    let a5 = w3(p8), g8 = w3(n3.clientWidth - (f8 + d12)), h9 = w3(n3.clientHeight - (p8 + w10)), R5 = w3(f8), C8 = { rootMargin: -a5 + "px " + -g8 + "px " + -h9 + "px " + -R5 + "px", threshold: p4(0, m2(1, l6)) || 1 }, W7 = true;
    function M9($5) {
      let D7 = $5[0].intersectionRatio;
      if (D7 !== l6) {
        if (!W7)
          return s6();
        D7 ? s6(false, D7) : o7 = setTimeout(() => {
          s6(false, 1e-7);
        }, 100);
      }
      W7 = false;
    }
    try {
      i5 = new IntersectionObserver(M9, { ...C8, root: n3.ownerDocument });
    } catch {
      i5 = new IntersectionObserver(M9, C8);
    }
    i5.observe(t3);
  }
  return s6(true), c6;
}
function yt(t3, e5, i5, o7) {
  o7 === void 0 && (o7 = {});
  let { ancestorScroll: n3 = true, ancestorResize: c6 = true, elementResize: s6 = typeof ResizeObserver == "function", layoutShift: r7 = typeof IntersectionObserver == "function", animationFrame: l6 = false } = o7, f8 = S7(t3), p8 = n3 || c6 ? [...f8 ? f3(f8) : [], ...f3(e5)] : [];
  p8.forEach((u7) => {
    n3 && u7.addEventListener("scroll", i5, { passive: true }), c6 && u7.addEventListener("resize", i5);
  });
  let d12 = f8 && r7 ? pt(f8, i5) : null, w10 = -1, a5 = null;
  s6 && (a5 = new ResizeObserver((u7) => {
    let [C8] = u7;
    C8 && C8.target === f8 && a5 && (a5.unobserve(e5), cancelAnimationFrame(w10), w10 = requestAnimationFrame(() => {
      a5 && a5.observe(e5);
    })), i5();
  }), f8 && !l6 && a5.observe(f8), a5.observe(e5));
  let g8, h9 = l6 ? O6(t3) : null;
  l6 && R5();
  function R5() {
    let u7 = O6(t3);
    h9 && (u7.x !== h9.x || u7.y !== h9.y || u7.width !== h9.width || u7.height !== h9.height) && i5(), h9 = u7, g8 = requestAnimationFrame(R5);
  }
  return i5(), () => {
    p8.forEach((u7) => {
      n3 && u7.removeEventListener("scroll", i5), c6 && u7.removeEventListener("resize", i5);
    }), d12 && d12(), a5 && a5.disconnect(), a5 = null, l6 && cancelAnimationFrame(g8);
  };
}
var vt = (t3, e5, i5) => {
  let o7 = /* @__PURE__ */ new Map(), n3 = { platform: gt, ...i5 }, c6 = { ...n3.platform, _c: o7 };
  return ae3(t3, e5, { ...n3, platform: c6 });
};

// https://esm.sh/v132/@floating-ui/react-dom@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dom.mjs
var T5 = (e5) => {
  function t3(r7) {
    return {}.hasOwnProperty.call(r7, "current");
  }
  return { name: "arrow", options: e5, fn(r7) {
    let { element: n3, padding: i5 } = typeof e5 == "function" ? e5(r7) : e5;
    return n3 && t3(n3) ? n3.current != null ? fe3({ element: n3.current, padding: i5 }).fn(r7) : {} : n3 ? fe3({ element: n3, padding: i5 }).fn(r7) : {};
  } };
};
var w5 = typeof document < "u" ? S2 : z2;
function h5(e5, t3) {
  if (e5 === t3)
    return true;
  if (typeof e5 != typeof t3)
    return false;
  if (typeof e5 == "function" && e5.toString() === t3.toString())
    return true;
  let r7, n3, i5;
  if (e5 && t3 && typeof e5 == "object") {
    if (Array.isArray(e5)) {
      if (r7 = e5.length, r7 != t3.length)
        return false;
      for (n3 = r7; n3-- !== 0; )
        if (!h5(e5[n3], t3[n3]))
          return false;
      return true;
    }
    if (i5 = Object.keys(e5), r7 = i5.length, r7 !== Object.keys(t3).length)
      return false;
    for (n3 = r7; n3-- !== 0; )
      if (!{}.hasOwnProperty.call(t3, i5[n3]))
        return false;
    for (n3 = r7; n3-- !== 0; ) {
      let d12 = i5[n3];
      if (!(d12 === "_owner" && e5.$$typeof) && !h5(e5[d12], t3[d12]))
        return false;
    }
    return true;
  }
  return e5 !== e5 && t3 !== t3;
}
function z3(e5) {
  return typeof window > "u" ? 1 : (e5.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function L6(e5, t3) {
  let r7 = z3(e5);
  return Math.round(t3 * r7) / r7;
}
function $3(e5) {
  let t3 = L(e5);
  return w5(() => {
    t3.current = e5;
  }), t3;
}
function W4(e5) {
  e5 === void 0 && (e5 = {});
  let { placement: t3 = "bottom", strategy: r7 = "absolute", middleware: n3 = [], platform: i5, elements: { reference: d12, floating: B5 } = {}, transform: D7 = true, whileElementsMounted: U6, open: O8 } = e5, [c6, k6] = I2({ x: 0, y: 0, strategy: r7, placement: t3, middlewareData: {}, isPositioned: false }), [P8, V7] = I2(n3);
  h5(P8, n3) || V7(n3);
  let [G7, E9] = I2(null), [H5, _3] = I2(null), v5 = G2((o7) => {
    o7 != l6.current && (l6.current = o7, E9(o7));
  }, [E9]), C8 = G2((o7) => {
    o7 !== m9.current && (m9.current = o7, _3(o7));
  }, [_3]), u7 = d12 || G7, s6 = B5 || H5, l6 = L(null), m9 = L(null), g8 = L(c6), x10 = $3(U6), M9 = $3(i5), p8 = G2(() => {
    if (!l6.current || !m9.current)
      return;
    let o7 = { placement: t3, strategy: r7, middleware: P8 };
    M9.current && (o7.platform = M9.current), vt(l6.current, m9.current, o7).then((y8) => {
      let R5 = { ...y8, isPositioned: true };
      S12.current && !h5(g8.current, R5) && (g8.current = R5, Re(() => {
        k6(R5);
      }));
    });
  }, [P8, t3, r7, M9]);
  w5(() => {
    O8 === false && g8.current.isPositioned && (g8.current.isPositioned = false, k6((o7) => ({ ...o7, isPositioned: false })));
  }, [O8]);
  let S12 = L(false);
  w5(() => (S12.current = true, () => {
    S12.current = false;
  }), []), w5(() => {
    if (u7 && (l6.current = u7), s6 && (m9.current = s6), u7 && s6) {
      if (x10.current)
        return x10.current(u7, s6, p8);
      p8();
    }
  }, [u7, s6, p8, x10]);
  let F6 = T(() => ({ reference: l6, floating: m9, setReference: v5, setFloating: C8 }), [v5, C8]), a5 = T(() => ({ reference: u7, floating: s6 }), [u7, s6]), j7 = T(() => {
    let o7 = { position: r7, left: 0, top: 0 };
    if (!a5.floating)
      return o7;
    let y8 = L6(a5.floating, c6.x), R5 = L6(a5.floating, c6.y);
    return D7 ? { ...o7, transform: "translate(" + y8 + "px, " + R5 + "px)", ...z3(a5.floating) >= 1.5 && { willChange: "transform" } } : { position: r7, left: y8, top: R5 };
  }, [r7, D7, a5.floating, c6.x, c6.y]);
  return T(() => ({ ...c6, update: p8, refs: F6, elements: a5, floatingStyles: j7 }), [c6, p8, F6, a5, j7]);
}

// https://esm.sh/v132/@radix-ui/react-arrow@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-arrow.mjs
var f4 = ee2((e5, t3) => {
  let { children: o7, width: i5 = 10, height: n3 = 5, ...s6 } = e5;
  return re(u3.svg, p3({}, s6, { ref: t3, width: i5, height: n3, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), e5.asChild ? o7 : re("polygon", { points: "0,0 30,0 15,10" }));
});
var b7 = f4;

// https://esm.sh/v132/@radix-ui/react-use-size@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-size.mjs
function z4(e5) {
  let [u7, r7] = I2(void 0);
  return e(() => {
    if (e5) {
      r7({ width: e5.offsetWidth, height: e5.offsetHeight });
      let f8 = new ResizeObserver((i5) => {
        if (!Array.isArray(i5) || !i5.length)
          return;
        let b10 = i5[0], t3, o7;
        if ("borderBoxSize" in b10) {
          let s6 = b10.borderBoxSize, d12 = Array.isArray(s6) ? s6[0] : s6;
          t3 = d12.inlineSize, o7 = d12.blockSize;
        } else
          t3 = e5.offsetWidth, o7 = e5.offsetHeight;
        r7({ width: t3, height: o7 });
      });
      return f8.observe(e5, { box: "border-box" }), () => f8.unobserve(e5);
    } else
      r7(void 0);
  }, [e5]), u7;
}

// https://esm.sh/v132/@radix-ui/react-popper@1.1.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-popper.mjs
var M5 = "Popper";
var [T6, tt] = _(M5);
var [Ve, B2] = T6(M5);
var De = (o7) => {
  let { __scopePopper: i5, children: r7 } = o7, [t3, a5] = I2(null);
  return re(Ve, { scope: i5, anchor: t3, onAnchorChange: a5 }, r7);
};
var Re2 = "PopperAnchor";
var Ee2 = ee2((o7, i5) => {
  let { __scopePopper: r7, virtualRef: t3, ...a5 } = o7, e5 = B2(Re2, r7), n3 = L(null), c6 = u2(i5, n3);
  return z2(() => {
    e5.onAnchorChange(t3?.current || n3.current);
  }), t3 ? null : re(u3.div, p3({}, a5, { ref: c6 }));
});
var L7 = "PopperContent";
var [Ne2, He] = T6(L7);
var ze = ee2((o7, i5) => {
  var r7, t3, a5, e5, n3, c6, u7, l6;
  let { __scopePopper: S12, side: s6 = "bottom", sideOffset: Y5 = 0, align: d12 = "center", alignOffset: w10 = 0, arrowPadding: k6 = 0, avoidCollisions: f8 = true, collisionBoundary: h9 = [], collisionPadding: g8 = 0, sticky: p8 = "partial", hideWhenDetached: $5 = false, updatePositionStrategy: Z4 = "optimized", onPlaced: G7, ...E9 } = o7, q9 = B2(L7, S12), [O8, J7] = I2(null), K3 = u2(i5, (P8) => J7(P8)), [V7, Q10] = I2(null), v5 = z4(V7), ee4 = (r7 = v5?.width) !== null && r7 !== void 0 ? r7 : 0, N6 = (t3 = v5?.height) !== null && t3 !== void 0 ? t3 : 0, te4 = s6 + (d12 !== "center" ? "-" + d12 : ""), oe3 = typeof g8 == "number" ? g8 : { top: 0, right: 0, bottom: 0, left: 0, ...g8 }, H5 = Array.isArray(h9) ? h9 : [h9], re4 = H5.length > 0, y8 = { padding: oe3, boundary: H5.filter(je), altBoundary: re4 }, { refs: ae5, floatingStyles: z8, placement: ne4, isPositioned: b10, middlewareData: x10 } = W4({ strategy: "fixed", placement: te4, whileElementsMounted: (...P8) => yt(...P8, { animationFrame: Z4 === "always" }), elements: { reference: q9.anchor }, middleware: [xe2({ mainAxis: Y5 + N6, alignmentAxis: w10 }), f8 && he3({ mainAxis: true, crossAxis: false, limiter: p8 === "partial" ? pe3() : void 0, ...y8 }), f8 && de3({ ...y8 }), we2({ ...y8, apply: ({ elements: P8, rects: W7, availableWidth: pe4, availableHeight: $e }) => {
    let { width: me3, height: ue5 } = W7.reference, _3 = P8.floating.style;
    _3.setProperty("--radix-popper-available-width", `${pe4}px`), _3.setProperty("--radix-popper-available-height", `${$e}px`), _3.setProperty("--radix-popper-anchor-width", `${me3}px`), _3.setProperty("--radix-popper-anchor-height", `${ue5}px`);
  } }), V7 && T5({ element: V7, padding: k6 }), Fe({ arrowWidth: ee4, arrowHeight: N6 }), $5 && ue3({ strategy: "referenceHidden", ...y8 })] }), [I8, ie4] = U3(ne4), A6 = l2(G7);
  e(() => {
    b10 && A6?.();
  }, [b10, A6]);
  let se3 = (a5 = x10.arrow) === null || a5 === void 0 ? void 0 : a5.x, de4 = (e5 = x10.arrow) === null || e5 === void 0 ? void 0 : e5.y, ce3 = ((n3 = x10.arrow) === null || n3 === void 0 ? void 0 : n3.centerOffset) !== 0, [le4, fe5] = I2();
  return e(() => {
    O8 && fe5(window.getComputedStyle(O8).zIndex);
  }, [O8]), re("div", { ref: ae5.setFloating, "data-radix-popper-content-wrapper": "", style: { ...z8, transform: b10 ? z8.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: le4, "--radix-popper-transform-origin": [(c6 = x10.transformOrigin) === null || c6 === void 0 ? void 0 : c6.x, (u7 = x10.transformOrigin) === null || u7 === void 0 ? void 0 : u7.y].join(" ") }, dir: o7.dir }, re(Ne2, { scope: S12, placedSide: I8, onArrowChange: Q10, arrowX: se3, arrowY: de4, shouldHideArrow: ce3 }, re(u3.div, p3({ "data-side": I8, "data-align": ie4 }, E9, { ref: K3, style: { ...E9.style, animation: b10 ? void 0 : "none", opacity: (l6 = x10.hide) !== null && l6 !== void 0 && l6.referenceHidden ? 0 : void 0 } }))));
});
var Ie = "PopperArrow";
var We = { top: "bottom", right: "left", bottom: "top", left: "right" };
var Xe = ee2(function(i5, r7) {
  let { __scopePopper: t3, ...a5 } = i5, e5 = He(Ie, t3), n3 = We[e5.placedSide];
  return re("span", { ref: e5.onArrowChange, style: { position: "absolute", left: e5.arrowX, top: e5.arrowY, [n3]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e5.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e5.placedSide], visibility: e5.shouldHideArrow ? "hidden" : void 0 } }, re(b7, p3({}, a5, { ref: r7, style: { ...a5.style, display: "block" } })));
});
function je(o7) {
  return o7 !== null;
}
var Fe = (o7) => ({ name: "transformOrigin", options: o7, fn(i5) {
  var r7, t3, a5, e5, n3;
  let { placement: c6, rects: u7, middlewareData: l6 } = i5, s6 = ((r7 = l6.arrow) === null || r7 === void 0 ? void 0 : r7.centerOffset) !== 0, Y5 = s6 ? 0 : o7.arrowWidth, d12 = s6 ? 0 : o7.arrowHeight, [w10, k6] = U3(c6), f8 = { start: "0%", center: "50%", end: "100%" }[k6], h9 = ((t3 = (a5 = l6.arrow) === null || a5 === void 0 ? void 0 : a5.x) !== null && t3 !== void 0 ? t3 : 0) + Y5 / 2, g8 = ((e5 = (n3 = l6.arrow) === null || n3 === void 0 ? void 0 : n3.y) !== null && e5 !== void 0 ? e5 : 0) + d12 / 2, p8 = "", $5 = "";
  return w10 === "bottom" ? (p8 = s6 ? f8 : `${h9}px`, $5 = `${-d12}px`) : w10 === "top" ? (p8 = s6 ? f8 : `${h9}px`, $5 = `${u7.floating.height + d12}px`) : w10 === "right" ? (p8 = `${-d12}px`, $5 = s6 ? f8 : `${g8}px`) : w10 === "left" && (p8 = `${u7.floating.width + d12}px`, $5 = s6 ? f8 : `${g8}px`), { data: { x: p8, y: $5 } };
} });
function U3(o7) {
  let [i5, r7 = "center"] = o7.split("-");
  return [i5, r7];
}
var ot2 = De;
var rt2 = Ee2;
var at2 = ze;
var nt2 = Xe;

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m4 = ee2((r7, a5) => {
  var e5;
  let { container: o7 = globalThis == null || (e5 = globalThis.document) === null || e5 === void 0 ? void 0 : e5.body, ...t3 } = r7;
  return o7 ? Te.createPortal(re(u3.div, p3({}, t3, { ref: a5 })), o7) : null;
});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S8(n3, t3) {
  return R2((o7, r7) => {
    let i5 = t3[o7][r7];
    return i5 ?? o7;
  }, n3);
}
var U4 = (n3) => {
  let { present: t3, children: o7 } = n3, r7 = y6(t3), i5 = typeof o7 == "function" ? o7({ present: r7.isPresent }) : te2.only(o7), a5 = u2(r7.ref, i5.ref);
  return typeof o7 == "function" || r7.isPresent ? Ee(i5, { ref: a5 }) : null;
};
U4.displayName = "Presence";
function y6(n3) {
  let [t3, o7] = I2(), r7 = L({}), i5 = L(n3), a5 = L("none"), N6 = n3 ? "mounted" : "unmounted", [f8, s6] = S8(N6, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e5 = d8(r7.current);
    a5.current = f8 === "mounted" ? e5 : "none";
  }, [f8]), e(() => {
    let e5 = r7.current, u7 = i5.current;
    if (u7 !== n3) {
      let $5 = a5.current, m9 = d8(e5);
      n3 ? s6("MOUNT") : m9 === "none" || e5?.display === "none" ? s6("UNMOUNT") : s6(u7 && $5 !== m9 ? "ANIMATION_OUT" : "UNMOUNT"), i5.current = n3;
    }
  }, [n3, s6]), e(() => {
    if (t3) {
      let e5 = (c6) => {
        let m9 = d8(r7.current).includes(c6.animationName);
        c6.target === t3 && m9 && Re(() => s6("ANIMATION_END"));
      }, u7 = (c6) => {
        c6.target === t3 && (a5.current = d8(r7.current));
      };
      return t3.addEventListener("animationstart", u7), t3.addEventListener("animationcancel", e5), t3.addEventListener("animationend", e5), () => {
        t3.removeEventListener("animationstart", u7), t3.removeEventListener("animationcancel", e5), t3.removeEventListener("animationend", e5);
      };
    } else
      s6("ANIMATION_END");
  }, [t3, s6]), { isPresent: ["mounted", "unmountSuspended"].includes(f8), ref: G2((e5) => {
    e5 && (r7.current = getComputedStyle(e5)), o7(e5);
  }, []) };
}
function d8(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w6({ prop: e5, defaultProp: a5, onChange: s6 = () => {
} }) {
  let [t3, n3] = P4({ defaultProp: a5, onChange: s6 }), o7 = e5 !== void 0, f8 = o7 ? e5 : t3, l6 = l2(s6), $5 = G2((c6) => {
    if (o7) {
      let u7 = typeof c6 == "function" ? c6(e5) : c6;
      u7 !== e5 && l6(u7);
    } else
      n3(c6);
  }, [o7, e5, n3, l6]);
  return [f8, $5];
}
function P4({ defaultProp: e5, onChange: a5 }) {
  let s6 = I2(e5), [t3] = s6, n3 = L(t3), o7 = l2(a5);
  return z2(() => {
    n3.current !== t3 && (o7(t3), n3.current = t3);
  }, [t3, n3, o7]), s6;
}

// https://esm.sh/v133/aria-hidden@1.2.3/denonext/aria-hidden.mjs
var W5 = function(r7) {
  if (typeof document > "u")
    return null;
  var i5 = Array.isArray(r7) ? r7[0] : r7;
  return i5.ownerDocument.body;
};
var f5 = /* @__PURE__ */ new WeakMap();
var c3 = /* @__PURE__ */ new WeakMap();
var p6 = {};
var h6 = 0;
var b8 = function(r7) {
  return r7 && (r7.host || b8(r7.parentNode));
};
var x6 = function(r7, i5) {
  return i5.map(function(t3) {
    if (r7.contains(t3))
      return t3;
    var n3 = b8(t3);
    return n3 && r7.contains(n3) ? n3 : (console.error("aria-hidden", t3, "in not contained inside", r7, ". Doing nothing"), null);
  }).filter(function(t3) {
    return !!t3;
  });
};
var E7 = function(r7, i5, t3, n3) {
  var a5 = x6(i5, Array.isArray(r7) ? r7 : [r7]);
  p6[t3] || (p6[t3] = /* @__PURE__ */ new WeakMap());
  var o7 = p6[t3], l6 = [], v5 = /* @__PURE__ */ new Set(), O8 = new Set(a5), y8 = function(e5) {
    !e5 || v5.has(e5) || (v5.add(e5), y8(e5.parentNode));
  };
  a5.forEach(y8);
  var d12 = function(e5) {
    !e5 || O8.has(e5) || Array.prototype.forEach.call(e5.children, function(u7) {
      if (v5.has(u7))
        d12(u7);
      else {
        var s6 = u7.getAttribute(n3), A6 = s6 !== null && s6 !== "false", w10 = (f5.get(u7) || 0) + 1, M9 = (o7.get(u7) || 0) + 1;
        f5.set(u7, w10), o7.set(u7, M9), l6.push(u7), w10 === 1 && A6 && c3.set(u7, true), M9 === 1 && u7.setAttribute(t3, "true"), A6 || u7.setAttribute(n3, "true");
      }
    });
  };
  return d12(i5), v5.clear(), h6++, function() {
    l6.forEach(function(e5) {
      var u7 = f5.get(e5) - 1, s6 = o7.get(e5) - 1;
      f5.set(e5, u7), o7.set(e5, s6), u7 || (c3.has(e5) || e5.removeAttribute(n3), c3.delete(e5)), s6 || e5.removeAttribute(t3);
    }), h6--, h6 || (f5 = /* @__PURE__ */ new WeakMap(), f5 = /* @__PURE__ */ new WeakMap(), c3 = /* @__PURE__ */ new WeakMap(), p6 = {});
  };
};
var P5 = function(r7, i5, t3) {
  t3 === void 0 && (t3 = "data-aria-hidden");
  var n3 = Array.from(Array.isArray(r7) ? r7 : [r7]), a5 = i5 || W5(r7);
  return a5 ? (n3.push.apply(n3, Array.from(a5.querySelectorAll("[aria-live]"))), E7(n3, a5, t3, "aria-hidden")) : function() {
    return null;
  };
};

// https://esm.sh/v133/tslib@2.6.2/denonext/tslib.mjs
var m5 = function() {
  return m5 = Object.assign || function(t3) {
    for (var n3, r7 = 1, i5 = arguments.length; r7 < i5; r7++) {
      n3 = arguments[r7];
      for (var o7 in n3)
        Object.prototype.hasOwnProperty.call(n3, o7) && (t3[o7] = n3[o7]);
    }
    return t3;
  }, m5.apply(this, arguments);
};
function S9(e5, t3) {
  var n3 = {};
  for (var r7 in e5)
    Object.prototype.hasOwnProperty.call(e5, r7) && t3.indexOf(r7) < 0 && (n3[r7] = e5[r7]);
  if (e5 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i5 = 0, r7 = Object.getOwnPropertySymbols(e5); i5 < r7.length; i5++)
      t3.indexOf(r7[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r7[i5]) && (n3[r7[i5]] = e5[r7[i5]]);
  return n3;
}
function M6(e5, t3, n3) {
  if (n3 || arguments.length === 2)
    for (var r7 = 0, i5 = t3.length, o7; r7 < i5; r7++)
      (o7 || !(r7 in t3)) && (o7 || (o7 = Array.prototype.slice.call(t3, 0, r7)), o7[r7] = t3[r7]);
  return e5.concat(o7 || Array.prototype.slice.call(t3));
}

// https://esm.sh/v133/react-remove-scroll-bar@2.3.4/denonext/constants.js
var r5 = "right-scroll-bar-position";
var a4 = "width-before-scroll-bar";

// https://esm.sh/v132/use-callback-ref@1.3.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-callback-ref.mjs
function o4(r7, e5) {
  return typeof r7 == "function" ? r7(e5) : r7 && (r7.current = e5), r7;
}
function f6(r7, e5) {
  var t3 = I2(function() {
    return { value: r7, callback: e5, facade: { get current() {
      return t3.value;
    }, set current(n3) {
      var u7 = t3.value;
      u7 !== n3 && (t3.value = n3, t3.callback(n3, u7));
    } } };
  })[0];
  return t3.callback = e5, t3.facade;
}
function m6(r7, e5) {
  return f6(e5 || null, function(t3) {
    return r7.forEach(function(n3) {
      return o4(n3, t3);
    });
  });
}

// https://esm.sh/v132/use-sidecar@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-sidecar.mjs
function C6(e5) {
  return e5;
}
function E8(e5, r7) {
  r7 === void 0 && (r7 = C6);
  var t3 = [], c6 = false, i5 = { read: function() {
    if (c6)
      throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return t3.length ? t3[t3.length - 1] : e5;
  }, useMedium: function(o7) {
    var n3 = r7(o7, c6);
    return t3.push(n3), function() {
      t3 = t3.filter(function(a5) {
        return a5 !== n3;
      });
    };
  }, assignSyncMedium: function(o7) {
    for (c6 = true; t3.length; ) {
      var n3 = t3;
      t3 = [], n3.forEach(o7);
    }
    t3 = { push: function(a5) {
      return o7(a5);
    }, filter: function() {
      return t3;
    } };
  }, assignMedium: function(o7) {
    c6 = true;
    var n3 = [];
    if (t3.length) {
      var a5 = t3;
      t3 = [], a5.forEach(o7), n3 = t3;
    }
    var d12 = function() {
      var u7 = n3;
      n3 = [], u7.forEach(o7);
    }, s6 = function() {
      return Promise.resolve().then(d12);
    };
    s6(), t3 = { push: function(u7) {
      n3.push(u7), s6();
    }, filter: function(u7) {
      return n3 = n3.filter(u7), t3;
    } };
  } };
  return i5;
}
function P6(e5) {
  e5 === void 0 && (e5 = {});
  var r7 = E8(null);
  return r7.options = m5({ async: true, ssr: false }, e5), r7;
}
var w7 = function(e5) {
  var r7 = e5.sideCar, t3 = S9(e5, ["sideCar"]);
  if (!r7)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c6 = r7.read();
  if (!c6)
    throw new Error("Sidecar medium not found");
  return re(c6, m5({}, t3));
};
w7.isSideCarExport = true;
function A5(e5, r7) {
  return e5.useMedium(r7), w7;
}

// https://esm.sh/v133/get-nonce@1.0.1/denonext/get-nonce.mjs
var e3;
var t2 = function() {
  if (e3)
    return e3;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};

// https://esm.sh/v132/react-style-singleton@2.2.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-style-singleton.mjs
function c4() {
  if (!document)
    return null;
  var t3 = document.createElement("style");
  t3.type = "text/css";
  var e5 = t2();
  return e5 && t3.setAttribute("nonce", e5), t3;
}
function s4(t3, e5) {
  t3.styleSheet ? t3.styleSheet.cssText = e5 : t3.appendChild(document.createTextNode(e5));
}
function f7(t3) {
  var e5 = document.head || document.getElementsByTagName("head")[0];
  e5.appendChild(t3);
}
var o5 = function() {
  var t3 = 0, e5 = null;
  return { add: function(n3) {
    t3 == 0 && (e5 = c4()) && (s4(e5, n3), f7(e5)), t3++;
  }, remove: function() {
    t3--, !t3 && e5 && (e5.parentNode && e5.parentNode.removeChild(e5), e5 = null);
  } };
};
var r6 = function() {
  var t3 = o5();
  return function(e5, n3) {
    z2(function() {
      return t3.add(e5), function() {
        t3.remove();
      };
    }, [e5 && n3]);
  };
};
var m7 = function() {
  var t3 = r6(), e5 = function(n3) {
    var i5 = n3.styles, u7 = n3.dynamic;
    return t3(i5, u7), null;
  };
  return e5;
};

// https://esm.sh/v132/react-remove-scroll-bar@2.3.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll-bar.mjs
var i3 = "right-scroll-bar-position";
var c5 = "width-before-scroll-bar";
var g5 = "with-scroll-bars-hidden";
var p7 = "--removed-body-scroll-bar-size";
var v3 = { left: 0, top: 0, right: 0, gap: 0 };
var m8 = function(n3) {
  return parseInt(n3 || "", 10) || 0;
};
var h7 = function(n3) {
  var a5 = window.getComputedStyle(document.body), r7 = a5[n3 === "padding" ? "paddingLeft" : "marginLeft"], t3 = a5[n3 === "padding" ? "paddingTop" : "marginTop"], o7 = a5[n3 === "padding" ? "paddingRight" : "marginRight"];
  return [m8(r7), m8(t3), m8(o7)];
};
var s5 = function(n3) {
  if (n3 === void 0 && (n3 = "margin"), typeof window > "u")
    return v3;
  var a5 = h7(n3), r7 = document.documentElement.clientWidth, t3 = window.innerWidth;
  return { left: a5[0], top: a5[1], right: a5[2], gap: Math.max(0, t3 - r7 + a5[2] - a5[0]) };
};
var x7 = m7();
var b9 = function(n3, a5, r7, t3) {
  var o7 = n3.left, d12 = n3.top, f8 = n3.right, e5 = n3.gap;
  return r7 === void 0 && (r7 = "margin"), `
  .`.concat(g5, ` {
   overflow: hidden `).concat(t3, `;
   padding-right: `).concat(e5, "px ").concat(t3, `;
  }
  body {
    overflow: hidden `).concat(t3, `;
    overscroll-behavior: contain;
    `).concat([a5 && "position: relative ".concat(t3, ";"), r7 === "margin" && `
    padding-left: `.concat(o7, `px;
    padding-top: `).concat(d12, `px;
    padding-right: `).concat(f8, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e5, "px ").concat(t3, `;
    `), r7 === "padding" && "padding-right: ".concat(e5, "px ").concat(t3, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(i3, ` {
    right: `).concat(e5, "px ").concat(t3, `;
  }
  
  .`).concat(c5, ` {
    margin-right: `).concat(e5, "px ").concat(t3, `;
  }
  
  .`).concat(i3, " .").concat(i3, ` {
    right: 0 `).concat(t3, `;
  }
  
  .`).concat(c5, " .").concat(c5, ` {
    margin-right: 0 `).concat(t3, `;
  }
  
  body {
    `).concat(p7, ": ").concat(e5, `px;
  }
`);
};
var w8 = function(n3) {
  var a5 = n3.noRelative, r7 = n3.noImportant, t3 = n3.gapMode, o7 = t3 === void 0 ? "margin" : t3, d12 = T(function() {
    return s5(o7);
  }, [o7]);
  return re(x7, { styles: b9(d12, !a5, o7, r7 ? "" : "!important") });
};

// https://esm.sh/v132/react-remove-scroll@2.5.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll.mjs
var N4 = P6();
var D4 = function() {
};
var M7 = ee2(function(e5, t3) {
  var c6 = L(null), o7 = I2({ onScrollCapture: D4, onWheelCapture: D4, onTouchMoveCapture: D4 }), u7 = o7[0], s6 = o7[1], d12 = e5.forwardProps, l6 = e5.children, R5 = e5.className, g8 = e5.removeScrollBar, w10 = e5.enabled, C8 = e5.shards, b10 = e5.sideCar, y8 = e5.noIsolation, E9 = e5.inert, r7 = e5.allowPinchZoom, n3 = e5.as, v5 = n3 === void 0 ? "div" : n3, h9 = e5.gapMode, m9 = S9(e5, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S12 = b10, f8 = m6([c6, t3]), p8 = m5(m5({}, m9), u7);
  return re(H, null, w10 && re(S12, { sideCar: N4, removeScrollBar: g8, shards: C8, noIsolation: y8, inert: E9, setCallbacks: s6, allowPinchZoom: !!r7, lockRef: c6, gapMode: h9 }), d12 ? Ee(te2.only(l6), m5(m5({}, p8), { ref: f8 })) : re(v5, m5({}, p8, { className: R5, ref: f8 }), l6));
});
M7.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
M7.classNames = { fullWidth: a4, zeroRight: r5 };
var W6 = false;
if (typeof window < "u")
  try {
    x8 = Object.defineProperty({}, "passive", { get: function() {
      return W6 = true, true;
    } }), window.addEventListener("test", x8, x8), window.removeEventListener("test", x8, x8);
  } catch {
    W6 = false;
  }
var x8;
var k5 = W6 ? { passive: false } : false;
var O7 = function(e5) {
  return e5.tagName === "TEXTAREA";
};
var H3 = function(e5, t3) {
  var c6 = window.getComputedStyle(e5);
  return c6[t3] !== "hidden" && !(c6.overflowY === c6.overflowX && !O7(e5) && c6[t3] === "visible");
};
var ee3 = function(e5) {
  return H3(e5, "overflowY");
};
var re3 = function(e5) {
  return H3(e5, "overflowX");
};
var I6 = function(e5, t3) {
  var c6 = t3.ownerDocument, o7 = t3;
  do {
    typeof ShadowRoot < "u" && o7 instanceof ShadowRoot && (o7 = o7.host);
    var u7 = V5(e5, o7);
    if (u7) {
      var s6 = Z2(e5, o7), d12 = s6[1], l6 = s6[2];
      if (d12 > l6)
        return true;
    }
    o7 = o7.parentNode;
  } while (o7 && o7 !== c6.body);
  return false;
};
var te3 = function(e5) {
  var t3 = e5.scrollTop, c6 = e5.scrollHeight, o7 = e5.clientHeight;
  return [t3, c6, o7];
};
var ae4 = function(e5) {
  var t3 = e5.scrollLeft, c6 = e5.scrollWidth, o7 = e5.clientWidth;
  return [t3, c6, o7];
};
var V5 = function(e5, t3) {
  return e5 === "v" ? ee3(t3) : re3(t3);
};
var Z2 = function(e5, t3) {
  return e5 === "v" ? te3(t3) : ae4(t3);
};
var ne3 = function(e5, t3) {
  return e5 === "h" && t3 === "rtl" ? -1 : 1;
};
var F5 = function(e5, t3, c6, o7, u7) {
  var s6 = ne3(e5, window.getComputedStyle(t3).direction), d12 = s6 * o7, l6 = c6.target, R5 = t3.contains(l6), g8 = false, w10 = d12 > 0, C8 = 0, b10 = 0;
  do {
    var y8 = Z2(e5, l6), E9 = y8[0], r7 = y8[1], n3 = y8[2], v5 = r7 - n3 - s6 * E9;
    (E9 || v5) && V5(e5, l6) && (C8 += v5, b10 += E9), l6 = l6.parentNode;
  } while (!R5 && l6 !== document.body || R5 && (t3.contains(l6) || t3 === l6));
  return (w10 && (u7 && C8 === 0 || !u7 && d12 > C8) || !w10 && (u7 && b10 === 0 || !u7 && -d12 > b10)) && (g8 = true), g8;
};
var X5 = function(e5) {
  return "changedTouches" in e5 ? [e5.changedTouches[0].clientX, e5.changedTouches[0].clientY] : [0, 0];
};
var z5 = function(e5) {
  return [e5.deltaX, e5.deltaY];
};
var _2 = function(e5) {
  return e5 && "current" in e5 ? e5.current : e5;
};
var ie3 = function(e5, t3) {
  return e5[0] === t3[0] && e5[1] === t3[1];
};
var ue4 = function(e5) {
  return `
  .block-interactivity-`.concat(e5, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e5, ` {pointer-events: all;}
`);
};
var fe4 = 0;
var B3 = [];
function j6(e5) {
  var t3 = L([]), c6 = L([0, 0]), o7 = L(), u7 = I2(fe4++)[0], s6 = I2(m7)[0], d12 = L(e5);
  z2(function() {
    d12.current = e5;
  }, [e5]), z2(function() {
    if (e5.inert) {
      document.body.classList.add("block-interactivity-".concat(u7));
      var r7 = M6([e5.lockRef.current], (e5.shards || []).map(_2), true).filter(Boolean);
      return r7.forEach(function(n3) {
        return n3.classList.add("allow-interactivity-".concat(u7));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u7)), r7.forEach(function(n3) {
          return n3.classList.remove("allow-interactivity-".concat(u7));
        });
      };
    }
  }, [e5.inert, e5.lockRef.current, e5.shards]);
  var l6 = G2(function(r7, n3) {
    if ("touches" in r7 && r7.touches.length === 2)
      return !d12.current.allowPinchZoom;
    var v5 = X5(r7), h9 = c6.current, m9 = "deltaX" in r7 ? r7.deltaX : h9[0] - v5[0], S12 = "deltaY" in r7 ? r7.deltaY : h9[1] - v5[1], f8, p8 = r7.target, P8 = Math.abs(m9) > Math.abs(S12) ? "h" : "v";
    if ("touches" in r7 && P8 === "h" && p8.type === "range")
      return false;
    var T8 = I6(P8, p8);
    if (!T8)
      return true;
    if (T8 ? f8 = P8 : (f8 = P8 === "v" ? "h" : "v", T8 = I6(P8, p8)), !T8)
      return false;
    if (!o7.current && "changedTouches" in r7 && (m9 || S12) && (o7.current = f8), !f8)
      return true;
    var A6 = o7.current || f8;
    return F5(A6, n3, r7, A6 === "h" ? m9 : S12, true);
  }, []), R5 = G2(function(r7) {
    var n3 = r7;
    if (!(!B3.length || B3[B3.length - 1] !== s6)) {
      var v5 = "deltaY" in n3 ? z5(n3) : X5(n3), h9 = t3.current.filter(function(f8) {
        return f8.name === n3.type && f8.target === n3.target && ie3(f8.delta, v5);
      })[0];
      if (h9 && h9.should) {
        n3.cancelable && n3.preventDefault();
        return;
      }
      if (!h9) {
        var m9 = (d12.current.shards || []).map(_2).filter(Boolean).filter(function(f8) {
          return f8.contains(n3.target);
        }), S12 = m9.length > 0 ? l6(n3, m9[0]) : !d12.current.noIsolation;
        S12 && n3.cancelable && n3.preventDefault();
      }
    }
  }, []), g8 = G2(function(r7, n3, v5, h9) {
    var m9 = { name: r7, delta: n3, target: v5, should: h9 };
    t3.current.push(m9), setTimeout(function() {
      t3.current = t3.current.filter(function(S12) {
        return S12 !== m9;
      });
    }, 1);
  }, []), w10 = G2(function(r7) {
    c6.current = X5(r7), o7.current = void 0;
  }, []), C8 = G2(function(r7) {
    g8(r7.type, z5(r7), r7.target, l6(r7, e5.lockRef.current));
  }, []), b10 = G2(function(r7) {
    g8(r7.type, X5(r7), r7.target, l6(r7, e5.lockRef.current));
  }, []);
  z2(function() {
    return B3.push(s6), e5.setCallbacks({ onScrollCapture: C8, onWheelCapture: C8, onTouchMoveCapture: b10 }), document.addEventListener("wheel", R5, k5), document.addEventListener("touchmove", R5, k5), document.addEventListener("touchstart", w10, k5), function() {
      B3 = B3.filter(function(r7) {
        return r7 !== s6;
      }), document.removeEventListener("wheel", R5, k5), document.removeEventListener("touchmove", R5, k5), document.removeEventListener("touchstart", w10, k5);
    };
  }, []);
  var y8 = e5.removeScrollBar, E9 = e5.inert;
  return re(H, null, E9 ? re(s6, { styles: ue4(u7) }) : null, y8 ? re(w8, { gapMode: e5.gapMode }) : null);
}
var Q7 = A5(N4, j6);
var q7 = ee2(function(e5, t3) {
  return re(M7, m5({}, e5, { ref: t3, sideCar: Q7 }));
});
q7.classNames = M7.classNames;
var ve3 = q7;

// https://esm.sh/v133/@radix-ui/react-popover@1.0.7/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-popover.mjs
var S10 = "Popover";
var [w9, Eo] = _(S10, [tt]);
var g6 = tt();
var [z6, d9] = w9(S10);
var B4 = (o7) => {
  let { __scopePopover: s6, children: c6, open: a5, defaultOpen: e5, onOpenChange: t3, modal: r7 = false } = o7, n3 = g6(s6), l6 = L(null), [f8, P8] = I2(false), [h9 = false, $5] = w6({ prop: a5, defaultProp: e5, onChange: t3 });
  return re(ot2, n3, re(z6, { scope: s6, contentId: n2(), triggerRef: l6, open: h9, onOpenChange: $5, onOpenToggle: G2(() => $5((C8) => !C8), [$5]), hasCustomAnchor: f8, onCustomAnchorAdd: G2(() => P8(true), []), onCustomAnchorRemove: G2(() => P8(false), []), modal: r7 }, c6));
};
var J6 = "PopoverAnchor";
var Q8 = ee2((o7, s6) => {
  let { __scopePopover: c6, ...a5 } = o7, e5 = d9(J6, c6), t3 = g6(c6), { onCustomAnchorAdd: r7, onCustomAnchorRemove: n3 } = e5;
  return z2(() => (r7(), () => n3()), [r7, n3]), re(rt2, p3({}, t3, a5, { ref: s6 }));
});
var X6 = "PopoverTrigger";
var Y3 = ee2((o7, s6) => {
  let { __scopePopover: c6, ...a5 } = o7, e5 = d9(X6, c6), t3 = g6(c6), r7 = u2(s6, e5.triggerRef), n3 = re(u3.button, p3({ type: "button", "aria-haspopup": "dialog", "aria-expanded": e5.open, "aria-controls": e5.contentId, "data-state": N5(e5.open) }, a5, { ref: r7, onClick: o3(o7.onClick, e5.onOpenToggle) }));
  return e5.hasCustomAnchor ? n3 : re(rt2, p3({ asChild: true }, t3), n3);
});
var y7 = "PopoverPortal";
var [oo, eo] = w9(y7, { forceMount: void 0 });
var to = (o7) => {
  let { __scopePopover: s6, forceMount: c6, children: a5, container: e5 } = o7, t3 = d9(y7, s6);
  return re(oo, { scope: s6, forceMount: c6 }, re(U4, { present: c6 || t3.open }, re(m4, { asChild: true, container: e5 }, a5)));
};
var v4 = "PopoverContent";
var co = ee2((o7, s6) => {
  let c6 = eo(v4, o7.__scopePopover), { forceMount: a5 = c6.forceMount, ...e5 } = o7, t3 = d9(v4, o7.__scopePopover);
  return re(U4, { present: a5 || t3.open }, t3.modal ? re(ro, p3({}, e5, { ref: s6 })) : re(no, p3({}, e5, { ref: s6 })));
});
var ro = ee2((o7, s6) => {
  let c6 = d9(v4, o7.__scopePopover), a5 = L(null), e5 = u2(s6, a5), t3 = L(false);
  return z2(() => {
    let r7 = a5.current;
    if (r7)
      return P5(r7);
  }, []), re(ve3, { as: b4, allowPinchZoom: true }, re(D5, p3({}, o7, { ref: e5, trapFocus: c6.open, disableOutsidePointerEvents: true, onCloseAutoFocus: o3(o7.onCloseAutoFocus, (r7) => {
    var n3;
    r7.preventDefault(), t3.current || (n3 = c6.triggerRef.current) === null || n3 === void 0 || n3.focus();
  }), onPointerDownOutside: o3(o7.onPointerDownOutside, (r7) => {
    let n3 = r7.detail.originalEvent, l6 = n3.button === 0 && n3.ctrlKey === true, f8 = n3.button === 2 || l6;
    t3.current = f8;
  }, { checkForDefaultPrevented: false }), onFocusOutside: o3(o7.onFocusOutside, (r7) => r7.preventDefault(), { checkForDefaultPrevented: false }) })));
});
var no = ee2((o7, s6) => {
  let c6 = d9(v4, o7.__scopePopover), a5 = L(false), e5 = L(false);
  return re(D5, p3({}, o7, { ref: s6, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t3) => {
    var r7;
    if ((r7 = o7.onCloseAutoFocus) === null || r7 === void 0 || r7.call(o7, t3), !t3.defaultPrevented) {
      var n3;
      a5.current || (n3 = c6.triggerRef.current) === null || n3 === void 0 || n3.focus(), t3.preventDefault();
    }
    a5.current = false, e5.current = false;
  }, onInteractOutside: (t3) => {
    var r7, n3;
    (r7 = o7.onInteractOutside) === null || r7 === void 0 || r7.call(o7, t3), t3.defaultPrevented || (a5.current = true, t3.detail.originalEvent.type === "pointerdown" && (e5.current = true));
    let l6 = t3.target;
    ((n3 = c6.triggerRef.current) === null || n3 === void 0 ? void 0 : n3.contains(l6)) && t3.preventDefault(), t3.detail.originalEvent.type === "focusin" && e5.current && t3.preventDefault();
  } }));
});
var D5 = ee2((o7, s6) => {
  let { __scopePopover: c6, trapFocus: a5, onOpenAutoFocus: e5, onCloseAutoFocus: t3, disableOutsidePointerEvents: r7, onEscapeKeyDown: n3, onPointerDownOutside: l6, onFocusOutside: f8, onInteractOutside: P8, ...h9 } = o7, $5 = d9(v4, c6), C8 = g6(c6);
  return c2(), re(Q5, { asChild: true, loop: true, trapped: a5, onMountAutoFocus: e5, onUnmountAutoFocus: t3 }, re(G3, { asChild: true, disableOutsidePointerEvents: r7, onInteractOutside: P8, onEscapeKeyDown: n3, onPointerDownOutside: l6, onFocusOutside: f8, onDismiss: () => $5.onOpenChange(false) }, re(at2, p3({ "data-state": N5($5.open), role: "dialog", id: $5.contentId }, C8, h9, { ref: s6, style: { ...h9.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }))));
});
var so = "PopoverClose";
var ao = ee2((o7, s6) => {
  let { __scopePopover: c6, ...a5 } = o7, e5 = d9(so, c6);
  return re(u3.button, p3({ type: "button" }, a5, { ref: s6, onClick: o3(o7.onClick, () => e5.onOpenChange(false)) }));
});
var po = ee2((o7, s6) => {
  let { __scopePopover: c6, ...a5 } = o7, e5 = g6(c6);
  return re(nt2, p3({}, e5, a5, { ref: s6 }));
});
function N5(o7) {
  return o7 ? "open" : "closed";
}
var Fo = B4;
var wo = Y3;
var yo = to;
var Do = co;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o6(r7) {
  var f8, n3, t3 = "";
  if (typeof r7 == "string" || typeof r7 == "number")
    t3 += r7;
  else if (typeof r7 == "object")
    if (Array.isArray(r7))
      for (f8 = 0; f8 < r7.length; f8++)
        r7[f8] && (n3 = o6(r7[f8])) && (t3 && (t3 += " "), t3 += n3);
    else
      for (f8 in r7)
        r7[f8] && (t3 && (t3 += " "), t3 += f8);
  return t3;
}
function e4() {
  for (var r7, f8, n3 = 0, t3 = ""; n3 < arguments.length; )
    (r7 = arguments[n3++]) && (f8 = o6(r7)) && (t3 && (t3 += " "), t3 += f8);
  return t3;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r7, e5) => {
  for (var t3 in e5)
    Ar(r7, t3, { get: e5[t3], enumerable: true });
};
function U5() {
  for (var r7 = 0, e5, t3, o7 = ""; r7 < arguments.length; )
    (e5 = arguments[r7++]) && (t3 = lr(e5)) && (o7 && (o7 += " "), o7 += t3);
  return o7;
}
function lr(r7) {
  if (typeof r7 == "string")
    return r7;
  for (var e5, t3 = "", o7 = 0; o7 < r7.length; o7++)
    r7[o7] && (e5 = lr(r7[o7])) && (t3 && (t3 += " "), t3 += e5);
  return t3;
}
var Z3 = "-";
function ur(r7) {
  var e5 = Sr(r7), t3 = r7.conflictingClassGroups, o7 = r7.conflictingClassGroupModifiers, a5 = o7 === void 0 ? {} : o7;
  function s6(i5) {
    var c6 = i5.split(Z3);
    return c6[0] === "" && c6.length !== 1 && c6.shift(), pr(c6, e5) || kr(i5);
  }
  function n3(i5, c6) {
    var u7 = t3[i5] || [];
    return c6 && a5[i5] ? [].concat(u7, a5[i5]) : u7;
  }
  return { getClassGroupId: s6, getConflictingClassGroupIds: n3 };
}
function pr(r7, e5) {
  if (r7.length === 0)
    return e5.classGroupId;
  var t3 = r7[0], o7 = e5.nextPart.get(t3), a5 = o7 ? pr(r7.slice(1), o7) : void 0;
  if (a5)
    return a5;
  if (e5.validators.length !== 0) {
    var s6 = r7.join(Z3);
    return e5.validators.find(function(n3) {
      var i5 = n3.validator;
      return i5(s6);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r7) {
  if (dr.test(r7)) {
    var e5 = dr.exec(r7)[1], t3 = e5?.substring(0, e5.indexOf(":"));
    if (t3)
      return "arbitrary.." + t3;
  }
}
function Sr(r7) {
  var e5 = r7.theme, t3 = r7.prefix, o7 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a5 = Gr(Object.entries(r7.classGroups), t3);
  return a5.forEach(function(s6) {
    var n3 = s6[0], i5 = s6[1];
    q8(i5, o7, n3, e5);
  }), o7;
}
function q8(r7, e5, t3, o7) {
  r7.forEach(function(a5) {
    if (typeof a5 == "string") {
      var s6 = a5 === "" ? e5 : cr(e5, a5);
      s6.classGroupId = t3;
      return;
    }
    if (typeof a5 == "function") {
      if (zr(a5)) {
        q8(a5(o7), e5, t3, o7);
        return;
      }
      e5.validators.push({ validator: a5, classGroupId: t3 });
      return;
    }
    Object.entries(a5).forEach(function(n3) {
      var i5 = n3[0], c6 = n3[1];
      q8(c6, cr(e5, i5), t3, o7);
    });
  });
}
function cr(r7, e5) {
  var t3 = r7;
  return e5.split(Z3).forEach(function(o7) {
    t3.nextPart.has(o7) || t3.nextPart.set(o7, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t3 = t3.nextPart.get(o7);
  }), t3;
}
function zr(r7) {
  return r7.isThemeGetter;
}
function Gr(r7, e5) {
  return e5 ? r7.map(function(t3) {
    var o7 = t3[0], a5 = t3[1], s6 = a5.map(function(n3) {
      return typeof n3 == "string" ? e5 + n3 : typeof n3 == "object" ? Object.fromEntries(Object.entries(n3).map(function(i5) {
        var c6 = i5[0], u7 = i5[1];
        return [e5 + c6, u7];
      })) : n3;
    });
    return [o7, s6];
  }) : r7;
}
function fr(r7) {
  if (r7 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e5 = 0, t3 = /* @__PURE__ */ new Map(), o7 = /* @__PURE__ */ new Map();
  function a5(s6, n3) {
    t3.set(s6, n3), e5++, e5 > r7 && (e5 = 0, o7 = t3, t3 = /* @__PURE__ */ new Map());
  }
  return { get: function(n3) {
    var i5 = t3.get(n3);
    if (i5 !== void 0)
      return i5;
    if ((i5 = o7.get(n3)) !== void 0)
      return a5(n3, i5), i5;
  }, set: function(n3, i5) {
    t3.has(n3) ? t3.set(n3, i5) : a5(n3, i5);
  } };
}
var X7 = "!";
function br(r7) {
  var e5 = r7.separator || ":", t3 = e5.length === 1, o7 = e5[0], a5 = e5.length;
  return function(n3) {
    for (var i5 = [], c6 = 0, u7 = 0, b10, f8 = 0; f8 < n3.length; f8++) {
      var g8 = n3[f8];
      if (c6 === 0) {
        if (g8 === o7 && (t3 || n3.slice(f8, f8 + a5) === e5)) {
          i5.push(n3.slice(u7, f8)), u7 = f8 + a5;
          continue;
        }
        if (g8 === "/") {
          b10 = f8;
          continue;
        }
      }
      g8 === "[" ? c6++ : g8 === "]" && c6--;
    }
    var y8 = i5.length === 0 ? n3 : n3.substring(u7), x10 = y8.startsWith(X7), m9 = x10 ? y8.substring(1) : y8, w10 = b10 && b10 > u7 ? b10 - u7 : void 0;
    return { modifiers: i5, hasImportantModifier: x10, baseClassName: m9, maybePostfixModifierPosition: w10 };
  };
}
function gr(r7) {
  if (r7.length <= 1)
    return r7;
  var e5 = [], t3 = [];
  return r7.forEach(function(o7) {
    var a5 = o7[0] === "[";
    a5 ? (e5.push.apply(e5, t3.sort().concat([o7])), t3 = []) : t3.push(o7);
  }), e5.push.apply(e5, t3.sort()), e5;
}
function mr(r7) {
  return { cache: fr(r7.cacheSize), splitModifiers: br(r7), ...ur(r7) };
}
var Ir = /\s+/;
function vr(r7, e5) {
  var t3 = e5.splitModifiers, o7 = e5.getClassGroupId, a5 = e5.getConflictingClassGroupIds, s6 = /* @__PURE__ */ new Set();
  return r7.trim().split(Ir).map(function(n3) {
    var i5 = t3(n3), c6 = i5.modifiers, u7 = i5.hasImportantModifier, b10 = i5.baseClassName, f8 = i5.maybePostfixModifierPosition, g8 = o7(f8 ? b10.substring(0, f8) : b10), y8 = !!f8;
    if (!g8) {
      if (!f8)
        return { isTailwindClass: false, originalClassName: n3 };
      if (g8 = o7(b10), !g8)
        return { isTailwindClass: false, originalClassName: n3 };
      y8 = false;
    }
    var x10 = gr(c6).join(":"), m9 = u7 ? x10 + X7 : x10;
    return { isTailwindClass: true, modifierId: m9, classGroupId: g8, originalClassName: n3, hasPostfixModifier: y8 };
  }).reverse().filter(function(n3) {
    if (!n3.isTailwindClass)
      return true;
    var i5 = n3.modifierId, c6 = n3.classGroupId, u7 = n3.hasPostfixModifier, b10 = i5 + c6;
    return s6.has(b10) ? false : (s6.add(b10), a5(c6, u7).forEach(function(f8) {
      return s6.add(i5 + f8);
    }), true);
  }).reverse().map(function(n3) {
    return n3.originalClassName;
  }).join(" ");
}
function P7() {
  for (var r7 = arguments.length, e5 = new Array(r7), t3 = 0; t3 < r7; t3++)
    e5[t3] = arguments[t3];
  var o7, a5, s6, n3 = i5;
  function i5(u7) {
    var b10 = e5[0], f8 = e5.slice(1), g8 = f8.reduce(function(y8, x10) {
      return x10(y8);
    }, b10());
    return o7 = mr(g8), a5 = o7.cache.get, s6 = o7.cache.set, n3 = c6, c6(u7);
  }
  function c6(u7) {
    var b10 = a5(u7);
    if (b10)
      return b10;
    var f8 = vr(u7, o7);
    return s6(u7, f8), f8;
  }
  return function() {
    return n3(U5.apply(null, arguments));
  };
}
function d10(r7) {
  var e5 = function(o7) {
    return o7[r7] || [];
  };
  return e5.isThemeGetter = true, e5;
}
var wr = {};
Mr(wr, { isAny: () => G6, isArbitraryLength: () => L8, isArbitraryNumber: () => S11, isArbitraryPosition: () => Q9, isArbitraryShadow: () => D6, isArbitrarySize: () => H4, isArbitraryUrl: () => V6, isArbitraryValue: () => l5, isArbitraryWeight: () => Wr, isInteger: () => z7, isLength: () => h8, isNumber: () => M8, isPercent: () => Y4, isTshirtSize: () => C7 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h8(r7) {
  return M8(r7) || Tr.has(r7) || Pr.test(r7) || L8(r7);
}
function L8(r7) {
  return I7(r7, "length", Er);
}
function H4(r7) {
  return I7(r7, "size", xr);
}
function Q9(r7) {
  return I7(r7, "position", xr);
}
function V6(r7) {
  return I7(r7, "url", jr);
}
function S11(r7) {
  return I7(r7, "number", M8);
}
var Wr = S11;
function M8(r7) {
  return !Number.isNaN(Number(r7));
}
function Y4(r7) {
  return r7.endsWith("%") && M8(r7.slice(0, -1));
}
function z7(r7) {
  return hr(r7) || I7(r7, "number", hr);
}
function l5(r7) {
  return yr.test(r7);
}
function G6() {
  return true;
}
function C7(r7) {
  return Rr.test(r7);
}
function D6(r7) {
  return I7(r7, "", Ur);
}
function I7(r7, e5, t3) {
  var o7 = yr.exec(r7);
  return o7 ? o7[1] ? o7[1] === e5 : t3(o7[2]) : false;
}
function Er(r7) {
  return Nr.test(r7);
}
function xr() {
  return false;
}
function jr(r7) {
  return r7.startsWith("url(");
}
function hr(r7) {
  return Number.isInteger(Number(r7));
}
function Ur(r7) {
  return Lr.test(r7);
}
function T7() {
  var r7 = d10("colors"), e5 = d10("spacing"), t3 = d10("blur"), o7 = d10("brightness"), a5 = d10("borderColor"), s6 = d10("borderRadius"), n3 = d10("borderSpacing"), i5 = d10("borderWidth"), c6 = d10("contrast"), u7 = d10("grayscale"), b10 = d10("hueRotate"), f8 = d10("invert"), g8 = d10("gap"), y8 = d10("gradientColorStops"), x10 = d10("gradientColorStopPositions"), m9 = d10("inset"), w10 = d10("margin"), k6 = d10("opacity"), A6 = d10("padding"), K3 = d10("saturate"), O8 = d10("scale"), rr = d10("sepia"), er = d10("skew"), tr = d10("space"), or = d10("translate"), $5 = function() {
    return ["auto", "contain", "none"];
  }, B5 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F6 = function() {
    return ["auto", l5, e5];
  }, p8 = function() {
    return [l5, e5];
  }, nr = function() {
    return ["", h8];
  }, W7 = function() {
    return ["auto", M8, l5];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E9 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J7 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R5 = function() {
    return ["", "0", l5];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N6 = function() {
    return [M8, S11];
  }, j7 = function() {
    return [M8, l5];
  };
  return { cacheSize: 500, theme: { colors: [G6], spacing: [h8], blur: ["none", "", C7, l5], brightness: N6(), borderColor: [r7], borderRadius: ["none", "", "full", C7, l5], borderSpacing: p8(), borderWidth: nr(), contrast: N6(), grayscale: R5(), hueRotate: j7(), invert: R5(), gap: p8(), gradientColorStops: [r7], gradientColorStopPositions: [Y4, L8], inset: F6(), margin: F6(), opacity: N6(), padding: p8(), saturate: N6(), scale: N6(), sepia: R5(), skew: j7(), space: p8(), translate: p8() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l5] }], container: ["container"], columns: [{ columns: [C7] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l5]) }], overflow: [{ overflow: B5() }], "overflow-x": [{ "overflow-x": B5() }], "overflow-y": [{ "overflow-y": B5() }], overscroll: [{ overscroll: $5() }], "overscroll-x": [{ "overscroll-x": $5() }], "overscroll-y": [{ "overscroll-y": $5() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m9] }], "inset-x": [{ "inset-x": [m9] }], "inset-y": [{ "inset-y": [m9] }], start: [{ start: [m9] }], end: [{ end: [m9] }], top: [{ top: [m9] }], right: [{ right: [m9] }], bottom: [{ bottom: [m9] }], left: [{ left: [m9] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z7] }], basis: [{ basis: F6() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l5] }], grow: [{ grow: R5() }], shrink: [{ shrink: R5() }], order: [{ order: ["first", "last", "none", z7] }], "grid-cols": [{ "grid-cols": [G6] }], "col-start-end": [{ col: ["auto", { span: ["full", z7] }, l5] }], "col-start": [{ "col-start": W7() }], "col-end": [{ "col-end": W7() }], "grid-rows": [{ "grid-rows": [G6] }], "row-start-end": [{ row: ["auto", { span: [z7] }, l5] }], "row-start": [{ "row-start": W7() }], "row-end": [{ "row-end": W7() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l5] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l5] }], gap: [{ gap: [g8] }], "gap-x": [{ "gap-x": [g8] }], "gap-y": [{ "gap-y": [g8] }], "justify-content": [{ justify: ["normal"].concat(J7()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J7(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J7(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A6] }], px: [{ px: [A6] }], py: [{ py: [A6] }], ps: [{ ps: [A6] }], pe: [{ pe: [A6] }], pt: [{ pt: [A6] }], pr: [{ pr: [A6] }], pb: [{ pb: [A6] }], pl: [{ pl: [A6] }], m: [{ m: [w10] }], mx: [{ mx: [w10] }], my: [{ my: [w10] }], ms: [{ ms: [w10] }], me: [{ me: [w10] }], mt: [{ mt: [w10] }], mr: [{ mr: [w10] }], mb: [{ mb: [w10] }], ml: [{ ml: [w10] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l5, e5] }], "min-w": [{ "min-w": ["min", "max", "fit", l5, h8] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C7] }, C7, l5] }], h: [{ h: [l5, e5, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l5, h8] }], "max-h": [{ "max-h": [l5, e5, "min", "max", "fit"] }], "font-size": [{ text: ["base", C7, L8] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S11] }], "font-family": [{ font: [G6] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l5] }], "line-clamp": [{ "line-clamp": ["none", M8, S11] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l5, h8] }], "list-image": [{ "list-image": ["none", l5] }], "list-style-type": [{ list: ["none", "disc", "decimal", l5] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r7] }], "placeholder-opacity": [{ "placeholder-opacity": [k6] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r7] }], "text-opacity": [{ "text-opacity": [k6] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E9(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h8] }], "underline-offset": [{ "underline-offset": ["auto", l5, h8] }], "text-decoration-color": [{ decoration: [r7] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p8() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l5] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l5] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k6] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q9]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H4] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V6] }], "bg-color": [{ bg: [r7] }], "gradient-from-pos": [{ from: [x10] }], "gradient-via-pos": [{ via: [x10] }], "gradient-to-pos": [{ to: [x10] }], "gradient-from": [{ from: [y8] }], "gradient-via": [{ via: [y8] }], "gradient-to": [{ to: [y8] }], rounded: [{ rounded: [s6] }], "rounded-s": [{ "rounded-s": [s6] }], "rounded-e": [{ "rounded-e": [s6] }], "rounded-t": [{ "rounded-t": [s6] }], "rounded-r": [{ "rounded-r": [s6] }], "rounded-b": [{ "rounded-b": [s6] }], "rounded-l": [{ "rounded-l": [s6] }], "rounded-ss": [{ "rounded-ss": [s6] }], "rounded-se": [{ "rounded-se": [s6] }], "rounded-ee": [{ "rounded-ee": [s6] }], "rounded-es": [{ "rounded-es": [s6] }], "rounded-tl": [{ "rounded-tl": [s6] }], "rounded-tr": [{ "rounded-tr": [s6] }], "rounded-br": [{ "rounded-br": [s6] }], "rounded-bl": [{ "rounded-bl": [s6] }], "border-w": [{ border: [i5] }], "border-w-x": [{ "border-x": [i5] }], "border-w-y": [{ "border-y": [i5] }], "border-w-s": [{ "border-s": [i5] }], "border-w-e": [{ "border-e": [i5] }], "border-w-t": [{ "border-t": [i5] }], "border-w-r": [{ "border-r": [i5] }], "border-w-b": [{ "border-b": [i5] }], "border-w-l": [{ "border-l": [i5] }], "border-opacity": [{ "border-opacity": [k6] }], "border-style": [{ border: [].concat(E9(), ["hidden"]) }], "divide-x": [{ "divide-x": [i5] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i5] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k6] }], "divide-style": [{ divide: E9() }], "border-color": [{ border: [a5] }], "border-color-x": [{ "border-x": [a5] }], "border-color-y": [{ "border-y": [a5] }], "border-color-t": [{ "border-t": [a5] }], "border-color-r": [{ "border-r": [a5] }], "border-color-b": [{ "border-b": [a5] }], "border-color-l": [{ "border-l": [a5] }], "divide-color": [{ divide: [a5] }], "outline-style": [{ outline: [""].concat(E9()) }], "outline-offset": [{ "outline-offset": [l5, h8] }], "outline-w": [{ outline: [h8] }], "outline-color": [{ outline: [r7] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r7] }], "ring-opacity": [{ "ring-opacity": [k6] }], "ring-offset-w": [{ "ring-offset": [h8] }], "ring-offset-color": [{ "ring-offset": [r7] }], shadow: [{ shadow: ["", "inner", "none", C7, D6] }], "shadow-color": [{ shadow: [G6] }], opacity: [{ opacity: [k6] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t3] }], brightness: [{ brightness: [o7] }], contrast: [{ contrast: [c6] }], "drop-shadow": [{ "drop-shadow": ["", "none", C7, l5] }], grayscale: [{ grayscale: [u7] }], "hue-rotate": [{ "hue-rotate": [b10] }], invert: [{ invert: [f8] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t3] }], "backdrop-brightness": [{ "backdrop-brightness": [o7] }], "backdrop-contrast": [{ "backdrop-contrast": [c6] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u7] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b10] }], "backdrop-invert": [{ "backdrop-invert": [f8] }], "backdrop-opacity": [{ "backdrop-opacity": [k6] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n3] }], "border-spacing-x": [{ "border-spacing-x": [n3] }], "border-spacing-y": [{ "border-spacing-y": [n3] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l5] }], duration: [{ duration: j7() }], ease: [{ ease: ["linear", "in", "out", "in-out", l5] }], delay: [{ delay: j7() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l5] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O8] }], "scale-x": [{ "scale-x": [O8] }], "scale-y": [{ "scale-y": [O8] }], rotate: [{ rotate: [z7, l5] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l5] }], accent: [{ accent: ["auto", r7] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l5] }], "caret-color": [{ caret: [r7] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p8() }], "scroll-mx": [{ "scroll-mx": p8() }], "scroll-my": [{ "scroll-my": p8() }], "scroll-ms": [{ "scroll-ms": p8() }], "scroll-me": [{ "scroll-me": p8() }], "scroll-mt": [{ "scroll-mt": p8() }], "scroll-mr": [{ "scroll-mr": p8() }], "scroll-mb": [{ "scroll-mb": p8() }], "scroll-ml": [{ "scroll-ml": p8() }], "scroll-p": [{ "scroll-p": p8() }], "scroll-px": [{ "scroll-px": p8() }], "scroll-py": [{ "scroll-py": p8() }], "scroll-ps": [{ "scroll-ps": p8() }], "scroll-pe": [{ "scroll-pe": p8() }], "scroll-pt": [{ "scroll-pt": p8() }], "scroll-pr": [{ "scroll-pr": p8() }], "scroll-pb": [{ "scroll-pb": p8() }], "scroll-pl": [{ "scroll-pl": p8() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l5] }], fill: [{ fill: [r7, "none"] }], "stroke-w": [{ stroke: [h8, S11] }], stroke: [{ stroke: [r7, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P7(T7);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e4(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d11 = 0;
var x9 = Array.isArray;
function g7(t3, r7, e5, a5, o7, i5) {
  var s6, n3, f8 = {};
  for (n3 in r7)
    n3 == "ref" ? s6 = r7[n3] : f8[n3] = r7[n3];
  var u7 = { type: t3, props: f8, key: e5, ref: s6, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d11, __i: -1, __u: 0, __source: o7, __self: i5 };
  if (typeof t3 == "function" && (s6 = t3.defaultProps))
    for (n3 in s6)
      f8[n3] === void 0 && (f8[n3] = s6[n3]);
  return a.vnode && a.vnode(u7), u7;
}

// ../components/ui/popover.tsx
var Popover = Fo;
var PopoverTrigger = wo;
var PopoverContent = ee2(({ class: className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ g7(yo, { children: /* @__PURE__ */ g7(
  Do,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Do.displayName;
export {
  Popover,
  PopoverContent,
  PopoverTrigger
};
