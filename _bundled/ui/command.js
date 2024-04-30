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
function b(e5, _5) {
  for (var t4 in _5)
    e5[t4] = _5[t4];
  return e5;
}
function Z(e5) {
  var _5 = e5.parentNode;
  _5 && _5.removeChild(e5);
}
function re(e5, _5, t4) {
  var i4, n3, r7, l4 = {};
  for (r7 in _5)
    r7 == "key" ? i4 = _5[r7] : r7 == "ref" ? n3 = _5[r7] : l4[r7] = _5[r7];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t4), typeof e5 == "function" && e5.defaultProps != null)
    for (r7 in e5.defaultProps)
      l4[r7] === void 0 && (l4[r7] = e5.defaultProps[r7]);
  return S(e5, l4, i4, n3, null);
}
function S(e5, _5, t4, i4, n3) {
  var r7 = { type: e5, props: _5, key: t4, ref: i4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r7), r7;
}
function de() {
  return { current: null };
}
function H(e5) {
  return e5.children;
}
function W(e5, _5) {
  this.props = e5, this.context = _5;
}
function w(e5, _5) {
  if (_5 == null)
    return e5.__ ? w(e5.__, e5.__i + 1) : null;
  for (var t4; _5 < e5.__k.length; _5++)
    if ((t4 = e5.__k[_5]) != null && t4.__e != null)
      return t4.__e;
  return typeof e5.type == "function" ? w(e5) : null;
}
function ie(e5, _5, t4) {
  var i4, n3 = e5.__v, r7 = n3.__e, l4 = e5.__P;
  if (l4)
    return (i4 = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i4), G(l4, i4, n3, e5.__n, l4.ownerSVGElement !== void 0, 32 & n3.__u ? [r7] : null, _5, r7 ?? w(n3), !!(32 & n3.__u), t4), i4.__v = n3.__v, i4.__.__k[i4.__i] = i4, i4.__d = void 0, i4.__e != r7 && ee(i4), i4;
}
function ee(e5) {
  var _5, t4;
  if ((e5 = e5.__) != null && e5.__c != null) {
    for (e5.__e = e5.__c.base = null, _5 = 0; _5 < e5.__k.length; _5++)
      if ((t4 = e5.__k[_5]) != null && t4.__e != null) {
        e5.__e = e5.__c.base = t4.__e;
        break;
      }
    return ee(e5);
  }
}
function I(e5) {
  (!e5.__d && (e5.__d = true) && x.push(e5) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e5, _5, t4, i4 = [], n3 = [];
  for (x.sort($); e5 = x.shift(); )
    e5.__d && (t4 = x.length, _5 = ie(e5, i4, n3) || _5, t4 === 0 || x.length > t4 ? (R(i4, _5, n3), n3.length = i4.length = 0, _5 = void 0, x.sort($)) : _5 && a.__c && a.__c(_5, O));
  _5 && R(i4, _5, n3), A.__r = 0;
}
function _e(e5, _5, t4, i4, n3, r7, l4, u5, c6, s5, p6) {
  var o8, m7, f6, h7, k6, v3 = i4 && i4.__k || O, d10 = _5.length;
  for (t4.__d = c6, le(t4, _5, v3), c6 = t4.__d, o8 = 0; o8 < d10; o8++)
    (f6 = t4.__k[o8]) != null && typeof f6 != "boolean" && typeof f6 != "function" && (m7 = f6.__i === -1 ? E : v3[f6.__i] || E, f6.__i = o8, G(e5, f6, m7, n3, r7, l4, u5, c6, s5, p6), h7 = f6.__e, f6.ref && m7.ref != f6.ref && (m7.ref && V(m7.ref, null, f6), p6.push(f6.ref, f6.__c || h7, f6)), k6 == null && h7 != null && (k6 = h7), 65536 & f6.__u || m7.__k === f6.__k ? c6 = te(f6, c6, e5) : typeof f6.type == "function" && f6.__d !== void 0 ? c6 = f6.__d : h7 && (c6 = h7.nextSibling), f6.__d = void 0, f6.__u &= -196609);
  t4.__d = c6, t4.__e = k6;
}
function le(e5, _5, t4) {
  var i4, n3, r7, l4, u5, c6 = _5.length, s5 = t4.length, p6 = s5, o8 = 0;
  for (e5.__k = [], i4 = 0; i4 < c6; i4++)
    l4 = i4 + o8, (n3 = e5.__k[i4] = (n3 = _5[i4]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e5, n3.__b = e5.__b + 1, u5 = ue(n3, t4, l4, p6), n3.__i = u5, r7 = null, u5 !== -1 && (p6--, (r7 = t4[u5]) && (r7.__u |= 131072)), r7 == null || r7.__v === null ? (u5 == -1 && o8--, typeof n3.type != "function" && (n3.__u |= 65536)) : u5 !== l4 && (u5 === l4 + 1 ? o8++ : u5 > l4 ? p6 > c6 - l4 ? o8 += u5 - l4 : o8-- : u5 < l4 ? u5 == l4 - 1 && (o8 = u5 - l4) : o8 = 0, u5 !== i4 + o8 && (n3.__u |= 65536))) : (r7 = t4[l4]) && r7.key == null && r7.__e && !(131072 & r7.__u) && (r7.__e == e5.__d && (e5.__d = w(r7)), B(r7, r7, false), t4[l4] = null, p6--);
  if (p6)
    for (i4 = 0; i4 < s5; i4++)
      (r7 = t4[i4]) != null && !(131072 & r7.__u) && (r7.__e == e5.__d && (e5.__d = w(r7)), B(r7, r7));
}
function te(e5, _5, t4) {
  var i4, n3;
  if (typeof e5.type == "function") {
    for (i4 = e5.__k, n3 = 0; i4 && n3 < i4.length; n3++)
      i4[n3] && (i4[n3].__ = e5, _5 = te(i4[n3], _5, t4));
    return _5;
  }
  e5.__e != _5 && (t4.insertBefore(e5.__e, _5 || null), _5 = e5.__e);
  do
    _5 = _5 && _5.nextSibling;
  while (_5 != null && _5.nodeType === 8);
  return _5;
}
function se(e5, _5) {
  return _5 = _5 || [], e5 == null || typeof e5 == "boolean" || (F(e5) ? e5.some(function(t4) {
    se(t4, _5);
  }) : _5.push(e5)), _5;
}
function ue(e5, _5, t4, i4) {
  var n3 = e5.key, r7 = e5.type, l4 = t4 - 1, u5 = t4 + 1, c6 = _5[t4];
  if (c6 === null || c6 && n3 == c6.key && r7 === c6.type && !(131072 & c6.__u))
    return t4;
  if (i4 > (c6 != null && !(131072 & c6.__u) ? 1 : 0))
    for (; l4 >= 0 || u5 < _5.length; ) {
      if (l4 >= 0) {
        if ((c6 = _5[l4]) && !(131072 & c6.__u) && n3 == c6.key && r7 === c6.type)
          return l4;
        l4--;
      }
      if (u5 < _5.length) {
        if ((c6 = _5[u5]) && !(131072 & c6.__u) && n3 == c6.key && r7 === c6.type)
          return u5;
        u5++;
      }
    }
  return -1;
}
function q(e5, _5, t4) {
  _5[0] === "-" ? e5.setProperty(_5, t4 ?? "") : e5[_5] = t4 == null ? "" : typeof t4 != "number" || oe.test(_5) ? t4 : t4 + "px";
}
function M(e5, _5, t4, i4, n3) {
  var r7;
  e:
    if (_5 === "style")
      if (typeof t4 == "string")
        e5.style.cssText = t4;
      else {
        if (typeof i4 == "string" && (e5.style.cssText = i4 = ""), i4)
          for (_5 in i4)
            t4 && _5 in t4 || q(e5.style, _5, "");
        if (t4)
          for (_5 in t4)
            i4 && t4[_5] === i4[_5] || q(e5.style, _5, t4[_5]);
      }
    else if (_5[0] === "o" && _5[1] === "n")
      r7 = _5 !== (_5 = _5.replace(/(PointerCapture)$|Capture$/i, "$1")), _5 = _5.toLowerCase() in e5 ? _5.toLowerCase().slice(2) : _5.slice(2), e5.l || (e5.l = {}), e5.l[_5 + r7] = t4, t4 ? i4 ? t4.u = i4.u : (t4.u = Date.now(), e5.addEventListener(_5, r7 ? K : J, r7)) : e5.removeEventListener(_5, r7 ? K : J, r7);
    else {
      if (n3)
        _5 = _5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_5 !== "width" && _5 !== "height" && _5 !== "href" && _5 !== "list" && _5 !== "form" && _5 !== "tabIndex" && _5 !== "download" && _5 !== "rowSpan" && _5 !== "colSpan" && _5 !== "role" && _5 in e5)
        try {
          e5[_5] = t4 ?? "";
          break e;
        } catch {
        }
      typeof t4 == "function" || (t4 == null || t4 === false && _5[4] !== "-" ? e5.removeAttribute(_5) : e5.setAttribute(_5, t4));
    }
}
function J(e5) {
  if (this.l) {
    var _5 = this.l[e5.type + false];
    if (e5.t) {
      if (e5.t <= _5.u)
        return;
    } else
      e5.t = Date.now();
    return _5(a.event ? a.event(e5) : e5);
  }
}
function K(e5) {
  if (this.l)
    return this.l[e5.type + true](a.event ? a.event(e5) : e5);
}
function G(e5, _5, t4, i4, n3, r7, l4, u5, c6, s5) {
  var p6, o8, m7, f6, h7, k6, v3, d10, y6, C7, T5, P8, j4, U6, N6, g5 = _5.type;
  if (_5.constructor !== void 0)
    return null;
  128 & t4.__u && (c6 = !!(32 & t4.__u), r7 = [u5 = _5.__e = t4.__e]), (p6 = a.__b) && p6(_5);
  e:
    if (typeof g5 == "function")
      try {
        if (d10 = _5.props, y6 = (p6 = g5.contextType) && i4[p6.__c], C7 = p6 ? y6 ? y6.props.value : p6.__ : i4, t4.__c ? v3 = (o8 = _5.__c = t4.__c).__ = o8.__E : ("prototype" in g5 && g5.prototype.render ? _5.__c = o8 = new g5(d10, C7) : (_5.__c = o8 = new W(d10, C7), o8.constructor = g5, o8.render = ce), y6 && y6.sub(o8), o8.props = d10, o8.state || (o8.state = {}), o8.context = C7, o8.__n = i4, m7 = o8.__d = true, o8.__h = [], o8._sb = []), o8.__s == null && (o8.__s = o8.state), g5.getDerivedStateFromProps != null && (o8.__s == o8.state && (o8.__s = b({}, o8.__s)), b(o8.__s, g5.getDerivedStateFromProps(d10, o8.__s))), f6 = o8.props, h7 = o8.state, o8.__v = _5, m7)
          g5.getDerivedStateFromProps == null && o8.componentWillMount != null && o8.componentWillMount(), o8.componentDidMount != null && o8.__h.push(o8.componentDidMount);
        else {
          if (g5.getDerivedStateFromProps == null && d10 !== f6 && o8.componentWillReceiveProps != null && o8.componentWillReceiveProps(d10, C7), !o8.__e && (o8.shouldComponentUpdate != null && o8.shouldComponentUpdate(d10, o8.__s, C7) === false || _5.__v === t4.__v)) {
            for (_5.__v !== t4.__v && (o8.props = d10, o8.state = o8.__s, o8.__d = false), _5.__e = t4.__e, _5.__k = t4.__k, _5.__k.forEach(function(L7) {
              L7 && (L7.__ = _5);
            }), T5 = 0; T5 < o8._sb.length; T5++)
              o8.__h.push(o8._sb[T5]);
            o8._sb = [], o8.__h.length && l4.push(o8);
            break e;
          }
          o8.componentWillUpdate != null && o8.componentWillUpdate(d10, o8.__s, C7), o8.componentDidUpdate != null && o8.__h.push(function() {
            o8.componentDidUpdate(f6, h7, k6);
          });
        }
        if (o8.context = C7, o8.props = d10, o8.__P = e5, o8.__e = false, P8 = a.__r, j4 = 0, "prototype" in g5 && g5.prototype.render) {
          for (o8.state = o8.__s, o8.__d = false, P8 && P8(_5), p6 = o8.render(o8.props, o8.state, o8.context), U6 = 0; U6 < o8._sb.length; U6++)
            o8.__h.push(o8._sb[U6]);
          o8._sb = [];
        } else
          do
            o8.__d = false, P8 && P8(_5), p6 = o8.render(o8.props, o8.state, o8.context), o8.state = o8.__s;
          while (o8.__d && ++j4 < 25);
        o8.state = o8.__s, o8.getChildContext != null && (i4 = b(b({}, i4), o8.getChildContext())), m7 || o8.getSnapshotBeforeUpdate == null || (k6 = o8.getSnapshotBeforeUpdate(f6, h7)), _e(e5, F(N6 = p6 != null && p6.type === H && p6.key == null ? p6.props.children : p6) ? N6 : [N6], _5, t4, i4, n3, r7, l4, u5, c6, s5), o8.base = _5.__e, _5.__u &= -161, o8.__h.length && l4.push(o8), v3 && (o8.__E = o8.__ = null);
      } catch (L7) {
        _5.__v = null, c6 || r7 != null ? (_5.__e = u5, _5.__u |= c6 ? 160 : 32, r7[r7.indexOf(u5)] = null) : (_5.__e = t4.__e, _5.__k = t4.__k), a.__e(L7, _5, t4);
      }
    else
      r7 == null && _5.__v === t4.__v ? (_5.__k = t4.__k, _5.__e = t4.__e) : _5.__e = fe(t4.__e, _5, t4, i4, n3, r7, l4, c6, s5);
  (p6 = a.diffed) && p6(_5);
}
function R(e5, _5, t4) {
  for (var i4 = 0; i4 < t4.length; i4++)
    V(t4[i4], t4[++i4], t4[++i4]);
  a.__c && a.__c(_5, e5), e5.some(function(n3) {
    try {
      e5 = n3.__h, n3.__h = [], e5.some(function(r7) {
        r7.call(n3);
      });
    } catch (r7) {
      a.__e(r7, n3.__v);
    }
  });
}
function fe(e5, _5, t4, i4, n3, r7, l4, u5, c6) {
  var s5, p6, o8, m7, f6, h7, k6, v3 = t4.props, d10 = _5.props, y6 = _5.type;
  if (y6 === "svg" && (n3 = true), r7 != null) {
    for (s5 = 0; s5 < r7.length; s5++)
      if ((f6 = r7[s5]) && "setAttribute" in f6 == !!y6 && (y6 ? f6.localName === y6 : f6.nodeType === 3)) {
        e5 = f6, r7[s5] = null;
        break;
      }
  }
  if (e5 == null) {
    if (y6 === null)
      return document.createTextNode(d10);
    e5 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y6) : document.createElement(y6, d10.is && d10), r7 = null, u5 = false;
  }
  if (y6 === null)
    v3 === d10 || u5 && e5.data === d10 || (e5.data = d10);
  else {
    if (r7 = r7 && D.call(e5.childNodes), v3 = t4.props || E, !u5 && r7 != null)
      for (v3 = {}, s5 = 0; s5 < e5.attributes.length; s5++)
        v3[(f6 = e5.attributes[s5]).name] = f6.value;
    for (s5 in v3)
      f6 = v3[s5], s5 == "children" || (s5 == "dangerouslySetInnerHTML" ? o8 = f6 : s5 === "key" || s5 in d10 || M(e5, s5, null, f6, n3));
    for (s5 in d10)
      f6 = d10[s5], s5 == "children" ? m7 = f6 : s5 == "dangerouslySetInnerHTML" ? p6 = f6 : s5 == "value" ? h7 = f6 : s5 == "checked" ? k6 = f6 : s5 === "key" || u5 && typeof f6 != "function" || v3[s5] === f6 || M(e5, s5, f6, v3[s5], n3);
    if (p6)
      u5 || o8 && (p6.__html === o8.__html || p6.__html === e5.innerHTML) || (e5.innerHTML = p6.__html), _5.__k = [];
    else if (o8 && (e5.innerHTML = ""), _e(e5, F(m7) ? m7 : [m7], _5, t4, i4, n3 && y6 !== "foreignObject", r7, l4, r7 ? r7[0] : t4.__k && w(t4, 0), u5, c6), r7 != null)
      for (s5 = r7.length; s5--; )
        r7[s5] != null && Z(r7[s5]);
    u5 || (s5 = "value", h7 !== void 0 && (h7 !== e5[s5] || y6 === "progress" && !h7 || y6 === "option" && h7 !== v3[s5]) && M(e5, s5, h7, v3[s5], false), s5 = "checked", k6 !== void 0 && k6 !== e5[s5] && M(e5, s5, k6, v3[s5], false));
  }
  return e5;
}
function V(e5, _5, t4) {
  try {
    typeof e5 == "function" ? e5(_5) : e5.current = _5;
  } catch (i4) {
    a.__e(i4, t4);
  }
}
function B(e5, _5, t4) {
  var i4, n3;
  if (a.unmount && a.unmount(e5), (i4 = e5.ref) && (i4.current && i4.current !== e5.__e || V(i4, null, _5)), (i4 = e5.__c) != null) {
    if (i4.componentWillUnmount)
      try {
        i4.componentWillUnmount();
      } catch (r7) {
        a.__e(r7, _5);
      }
    i4.base = i4.__P = null, e5.__c = void 0;
  }
  if (i4 = e5.__k)
    for (n3 = 0; n3 < i4.length; n3++)
      i4[n3] && B(i4[n3], _5, t4 || typeof e5.type != "function");
  t4 || e5.__e == null || Z(e5.__e), e5.__ = e5.__e = e5.__d = void 0;
}
function ce(e5, _5, t4) {
  return this.constructor(e5, t4);
}
function pe(e5, _5, t4) {
  var i4, n3, r7, l4;
  a.__ && a.__(e5, _5), n3 = (i4 = typeof t4 == "function") ? null : t4 && t4.__k || _5.__k, r7 = [], l4 = [], G(_5, e5 = (!i4 && t4 || _5).__k = re(H, null, [e5]), n3 || E, E, _5.ownerSVGElement !== void 0, !i4 && t4 ? [t4] : n3 ? null : _5.firstChild ? D.call(_5.childNodes) : null, r7, !i4 && t4 ? t4 : n3 ? n3.__e : _5.firstChild, i4, l4), e5.__d = void 0, R(r7, e5, l4);
}
function ae(e5, _5) {
  pe(e5, _5, ae);
}
function he(e5, _5, t4) {
  var i4, n3, r7, l4, u5 = b({}, e5.props);
  for (r7 in e5.type && e5.type.defaultProps && (l4 = e5.type.defaultProps), _5)
    r7 == "key" ? i4 = _5[r7] : r7 == "ref" ? n3 = _5[r7] : u5[r7] = _5[r7] === void 0 && l4 !== void 0 ? l4[r7] : _5[r7];
  return arguments.length > 2 && (u5.children = arguments.length > 3 ? D.call(arguments, 2) : t4), S(e5.type, u5, i4 || e5.key, n3 || e5.ref, null);
}
function ve(e5, _5) {
  var t4 = { __c: _5 = "__cC" + Y++, __: e5, Consumer: function(i4, n3) {
    return i4.children(n3);
  }, Provider: function(i4) {
    var n3, r7;
    return this.getChildContext || (n3 = [], (r7 = {})[_5] = this, this.getChildContext = function() {
      return r7;
    }, this.shouldComponentUpdate = function(l4) {
      this.props.value !== l4.value && n3.some(function(u5) {
        u5.__e = true, I(u5);
      });
    }, this.sub = function(l4) {
      n3.push(l4);
      var u5 = l4.componentWillUnmount;
      l4.componentWillUnmount = function() {
        n3.splice(n3.indexOf(l4), 1), u5 && u5.call(l4);
      };
    }), i4.children;
  } };
  return t4.Provider.__ = t4.Consumer.contextType = t4;
}
D = O.slice, a = { __e: function(e5, _5, t4, i4) {
  for (var n3, r7, l4; _5 = _5.__; )
    if ((n3 = _5.__c) && !n3.__)
      try {
        if ((r7 = n3.constructor) && r7.getDerivedStateFromError != null && (n3.setState(r7.getDerivedStateFromError(e5)), l4 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e5, i4 || {}), l4 = n3.__d), l4)
          return n3.__E = n3;
      } catch (u5) {
        e5 = u5;
      }
  throw e5;
} }, Q = 0, ne = function(e5) {
  return e5 != null && e5.constructor == null;
}, W.prototype.setState = function(e5, _5) {
  var t4;
  t4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e5 == "function" && (e5 = e5(b({}, t4), this.props)), e5 && b(t4, e5), e5 != null && this.__v && (_5 && this._sb.push(_5), I(this));
}, W.prototype.forceUpdate = function(e5) {
  this.__v && (this.__e = true, e5 && this.__h.push(e5), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e5, _5) {
  return e5.__v.__b - _5.__v.__b;
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
function l(t4, _5) {
  o.__h && o.__h(r, t4, v || _5), v = 0;
  var u5 = r.__H || (r.__H = { __: [], __h: [] });
  return t4 >= u5.__.length && u5.__.push({ __V: p }), u5.__[t4];
}
function I2(t4) {
  return v = 1, R2(U, t4);
}
function R2(t4, _5, u5) {
  var n3 = l(c++, 2);
  if (n3.t = t4, !n3.__c && (n3.__ = [u5 ? u5(_5) : U(void 0, _5), function(a3) {
    var f6 = n3.__N ? n3.__N[0] : n3.__[0], s5 = n3.t(f6, a3);
    f6 !== s5 && (n3.__N = [s5, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r, !r.u)) {
    var i4 = function(a3, f6, s5) {
      if (!n3.__c.__H)
        return true;
      var m7 = n3.__c.__H.__.filter(function(e5) {
        return !!e5.__c;
      });
      if (m7.every(function(e5) {
        return !e5.__N;
      }))
        return !h7 || h7.call(this, a3, f6, s5);
      var V9 = false;
      return m7.forEach(function(e5) {
        if (e5.__N) {
          var P8 = e5.__[0];
          e5.__ = e5.__N, e5.__N = void 0, P8 !== e5.__[0] && (V9 = true);
        }
      }), !(!V9 && n3.__c.props === a3) && (!h7 || h7.call(this, a3, f6, s5));
    };
    r.u = true;
    var h7 = r.shouldComponentUpdate, N6 = r.componentWillUpdate;
    r.componentWillUpdate = function(a3, f6, s5) {
      if (this.__e) {
        var m7 = h7;
        h7 = void 0, i4(a3, f6, s5), h7 = m7;
      }
      N6 && N6.call(this, a3, f6, s5);
    }, r.shouldComponentUpdate = i4;
  }
  return n3.__N || n3.__;
}
function z2(t4, _5) {
  var u5 = l(c++, 3);
  !o.__s && y(u5.__H, _5) && (u5.__ = t4, u5.i = _5, r.__H.__h.push(u5));
}
function S2(t4, _5) {
  var u5 = l(c++, 4);
  !o.__s && y(u5.__H, _5) && (u5.__ = t4, u5.i = _5, r.__h.push(u5));
}
function L(t4) {
  return v = 5, T(function() {
    return { current: t4 };
  }, []);
}
function M2(t4, _5, u5) {
  v = 6, S2(function() {
    return typeof t4 == "function" ? (t4(_5()), function() {
      return t4(null);
    }) : t4 ? (t4.current = _5(), function() {
      return t4.current = null;
    }) : void 0;
  }, u5 == null ? u5 : u5.concat(t4));
}
function T(t4, _5) {
  var u5 = l(c++, 7);
  return y(u5.__H, _5) ? (u5.__V = t4(), u5.i = _5, u5.__h = t4, u5.__V) : u5.__;
}
function G2(t4, _5) {
  return v = 8, T(function() {
    return t4;
  }, _5);
}
function J2(t4) {
  var _5 = r.context[t4.__c], u5 = l(c++, 9);
  return u5.c = t4, _5 ? (u5.__ == null && (u5.__ = true, _5.sub(r)), _5.props.value) : t4.__;
}
function K2(t4, _5) {
  o.useDebugValue && o.useDebugValue(_5 ? _5(t4) : t4);
}
function O2(t4) {
  var _5 = l(c++, 10), u5 = I2();
  return _5.__ = t4, r.componentDidCatch || (r.componentDidCatch = function(n3, i4) {
    _5.__ && _5.__(n3, i4), u5[1](n3);
  }), [u5[0], function() {
    u5[1](void 0);
  }];
}
function Q2() {
  var t4 = l(c++, 11);
  if (!t4.__) {
    for (var _5 = r.__v; _5 !== null && !_5.__m && _5.__ !== null; )
      _5 = _5.__;
    var u5 = _5.__m || (_5.__m = [0, 0]);
    t4.__ = "P" + u5[0] + "-" + u5[1]++;
  }
  return t4.__;
}
function W2() {
  for (var t4; t4 = x2.shift(); )
    if (t4.__P && t4.__H)
      try {
        t4.__H.__h.forEach(d), t4.__H.__h.forEach(E2), t4.__H.__h = [];
      } catch (_5) {
        t4.__H.__h = [], o.__e(_5, t4.__v);
      }
}
o.__b = function(t4) {
  r = null, g && g(t4);
}, o.__ = function(t4, _5) {
  t4 && _5.__k && _5.__k.__m && (t4.__m = _5.__k.__m), k && k(t4, _5);
}, o.__r = function(t4) {
  C && C(t4), c = 0;
  var _5 = (r = t4.__c).__H;
  _5 && (H2 === r ? (_5.__h = [], r.__h = [], _5.__.forEach(function(u5) {
    u5.__N && (u5.__ = u5.__N), u5.__V = p, u5.__N = u5.i = void 0;
  })) : (_5.__h.forEach(d), _5.__h.forEach(E2), _5.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t4) {
  A2 && A2(t4);
  var _5 = t4.__c;
  _5 && _5.__H && (_5.__H.__h.length && (x2.push(_5) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _5.__H.__.forEach(function(u5) {
    u5.i && (u5.__H = u5.i), u5.__V !== p && (u5.__ = u5.__V), u5.i = void 0, u5.__V = p;
  })), H2 = r = null;
}, o.__c = function(t4, _5) {
  _5.some(function(u5) {
    try {
      u5.__h.forEach(d), u5.__h = u5.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _5.some(function(i4) {
        i4.__h && (i4.__h = []);
      }), _5 = [], o.__e(n3, u5.__v);
    }
  }), D2 && D2(t4, _5);
}, o.unmount = function(t4) {
  F2 && F2(t4);
  var _5, u5 = t4.__c;
  u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
    try {
      d(n3);
    } catch (i4) {
      _5 = i4;
    }
  }), u5.__H = void 0, _5 && o.__e(_5, u5.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t4) {
  var _5, u5 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_5), setTimeout(t4);
  }, n3 = setTimeout(u5, 100);
  q2 && (_5 = requestAnimationFrame(u5));
}
function d(t4) {
  var _5 = r, u5 = t4.__c;
  typeof u5 == "function" && (t4.__c = void 0, u5()), r = _5;
}
function E2(t4) {
  var _5 = r;
  t4.__c = t4.__(), r = _5;
}
function y(t4, _5) {
  return !t4 || t4.length !== _5.length || _5.some(function(u5, n3) {
    return u5 !== t4[n3];
  });
}
function U(t4, _5) {
  return typeof _5 == "function" ? _5(t4) : _5;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e5, t4) {
  for (var n3 in t4)
    e5[n3] = t4[n3];
  return e5;
}
function b3(e5, t4) {
  for (var n3 in e5)
    if (n3 !== "__source" && !(n3 in t4))
      return true;
  for (var r7 in t4)
    if (r7 !== "__source" && e5[r7] !== t4[r7])
      return true;
  return false;
}
function C2(e5, t4) {
  this.props = e5, this.context = t4;
}
function Q3(e5, t4) {
  function n3(o8) {
    var u5 = this.props.ref, a3 = u5 == o8.ref;
    return !a3 && u5 && (u5.call ? u5(null) : u5.current = null), t4 ? !t4(this.props, o8) || !a3 : b3(this.props, o8);
  }
  function r7(o8) {
    return this.shouldComponentUpdate = n3, re(e5, o8);
  }
  return r7.displayName = "Memo(" + (e5.displayName || e5.name) + ")", r7.prototype.isReactComponent = true, r7.__f = true, r7;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e5, t4) {
  return b3(this.props, e5) || b3(this.state, t4);
};
var N = a.__b;
a.__b = function(e5) {
  e5.type && e5.type.__f && e5.ref && (e5.props.ref = e5.ref, e5.ref = null), N && N(e5);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e5) {
  function t4(n3) {
    var r7 = L2({}, n3);
    return delete r7.ref, e5(r7, n3.ref || null);
  }
  return t4.$$typeof = X2, t4.render = t4, t4.prototype.isReactComponent = t4.__f = true, t4.displayName = "ForwardRef(" + (e5.displayName || e5.name) + ")", t4;
}
var R3 = function(e5, t4) {
  return e5 == null ? null : se(se(e5).map(t4));
};
var te2 = { map: R3, forEach: R3, count: function(e5) {
  return e5 ? se(e5).length : 0;
}, only: function(e5) {
  var t4 = se(e5);
  if (t4.length !== 1)
    throw "Children.only";
  return t4[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e5, t4, n3, r7) {
  if (e5.then) {
    for (var o8, u5 = t4; u5 = u5.__; )
      if ((o8 = u5.__c) && o8.__c)
        return t4.__e == null && (t4.__e = n3.__e, t4.__k = n3.__k), o8.__c(e5, t4);
  }
  ne2(e5, t4, n3, r7);
};
var x3 = a.unmount;
function T2(e5, t4, n3) {
  return e5 && (e5.__c && e5.__c.__H && (e5.__c.__H.__.forEach(function(r7) {
    typeof r7.__c == "function" && r7.__c();
  }), e5.__c.__H = null), (e5 = L2({}, e5)).__c != null && (e5.__c.__P === n3 && (e5.__c.__P = t4), e5.__c = null), e5.__k = e5.__k && e5.__k.map(function(r7) {
    return T2(r7, t4, n3);
  })), e5;
}
function A3(e5, t4, n3) {
  return e5 && n3 && (e5.__v = null, e5.__k = e5.__k && e5.__k.map(function(r7) {
    return A3(r7, t4, n3);
  }), e5.__c && e5.__c.__P === t4 && (e5.__e && n3.appendChild(e5.__e), e5.__c.__e = true, e5.__c.__P = n3)), e5;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e5) {
  var t4 = e5.__.__c;
  return t4 && t4.__a && t4.__a(e5);
}
function re2(e5) {
  var t4, n3, r7;
  function o8(u5) {
    if (t4 || (t4 = e5()).then(function(a3) {
      n3 = a3.default || a3;
    }, function(a3) {
      r7 = a3;
    }), r7)
      throw r7;
    if (!n3)
      throw t4;
    return re(n3, u5);
  }
  return o8.displayName = "Lazy", o8.__f = true, o8;
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e5) {
  var t4 = e5.__c;
  t4 && t4.__R && t4.__R(), t4 && 32 & e5.__u && (e5.type = null), x3 && x3(e5);
}, (h.prototype = new W()).__c = function(e5, t4) {
  var n3 = t4.__c, r7 = this;
  r7.t == null && (r7.t = []), r7.t.push(n3);
  var o8 = F3(r7.__v), u5 = false, a3 = function() {
    u5 || (u5 = true, n3.__R = null, o8 ? o8(l4) : l4());
  };
  n3.__R = a3;
  var l4 = function() {
    if (!--r7.__u) {
      if (r7.state.__a) {
        var s5 = r7.state.__a;
        r7.__v.__k[0] = A3(s5, s5.__c.__P, s5.__c.__O);
      }
      var g5;
      for (r7.setState({ __a: r7.__b = null }); g5 = r7.t.pop(); )
        g5.forceUpdate();
    }
  };
  r7.__u++ || 32 & t4.__u || r7.setState({ __a: r7.__b = r7.__v.__k[0] }), e5.then(a3, a3);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e5, t4) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r7 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n3, r7.__O = r7.__P);
    }
    this.__b = null;
  }
  var o8 = t4.__a && re(H, null, e5.fallback);
  return o8 && (o8.__u &= -33), [re(H, null, t4.__a ? null : e5.children), o8];
};
var k2 = function(e5, t4, n3) {
  if (++n3[1] === n3[0] && e5.o.delete(t4), e5.props.revealOrder && (e5.props.revealOrder[0] !== "t" || !e5.o.size))
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
  var t4 = this, n3 = e5.i;
  t4.componentWillUnmount = function() {
    pe(null, t4.l), t4.l = null, t4.i = null;
  }, t4.i && t4.i !== n3 && t4.componentWillUnmount(), t4.l || (t4.i = n3, t4.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(r7) {
    this.childNodes.push(r7), t4.i.appendChild(r7);
  }, insertBefore: function(r7, o8) {
    this.childNodes.push(r7), t4.i.appendChild(r7);
  }, removeChild: function(r7) {
    this.childNodes.splice(this.childNodes.indexOf(r7) >>> 1, 1), t4.i.removeChild(r7);
  } }), pe(re(oe2, { context: t4.context }, e5.__v), t4.l);
}
function ae2(e5, t4) {
  var n3 = re(ue2, { __v: e5, i: t4 });
  return n3.containerInfo = t4, n3;
}
(p2.prototype = new W()).__a = function(e5) {
  var t4 = this, n3 = F3(t4.__v), r7 = t4.o.get(e5);
  return r7[0]++, function(o8) {
    var u5 = function() {
      t4.props.revealOrder ? (r7.push(o8), k2(t4, e5, r7)) : o8();
    };
    n3 ? n3(u5) : u5();
  };
}, p2.prototype.render = function(e5) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t4 = se(e5.children);
  e5.revealOrder && e5.revealOrder[0] === "b" && t4.reverse();
  for (var n3 = t4.length; n3--; )
    this.o.set(t4[n3], this.u = [1, 0, this.u]);
  return e5.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e5 = this;
  this.o.forEach(function(t4, n3) {
    k2(e5, n3, t4);
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
function fe2(e5, t4, n3) {
  return t4.__k == null && (t4.textContent = ""), pe(e5, t4), typeof n3 == "function" && n3(), e5 ? e5.__c : null;
}
function pe2(e5, t4, n3) {
  return ae(e5, t4), typeof n3 == "function" && n3(), e5 ? e5.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e5) {
  Object.defineProperty(W.prototype, e5, { configurable: true, get: function() {
    return this["UNSAFE_" + e5];
  }, set: function(t4) {
    Object.defineProperty(this, e5, { configurable: true, writable: true, value: t4 });
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
  typeof e5.type == "string" && function(t4) {
    var n3 = t4.props, r7 = t4.type, o8 = {};
    for (var u5 in n3) {
      var a3 = n3[u5];
      if (!(u5 === "value" && "defaultValue" in n3 && a3 == null || _e2 && u5 === "children" && r7 === "noscript" || u5 === "class" || u5 === "className")) {
        var l4 = u5.toLowerCase();
        u5 === "defaultValue" && "value" in n3 && n3.value == null ? u5 = "value" : u5 === "download" && a3 === true ? a3 = "" : l4 === "translate" && a3 === "no" ? a3 = false : l4 === "ondoubleclick" ? u5 = "ondblclick" : l4 !== "onchange" || r7 !== "input" && r7 !== "textarea" || ce2(n3.type) ? l4 === "onfocus" ? u5 = "onfocusin" : l4 === "onblur" ? u5 = "onfocusout" : le2.test(u5) ? u5 = l4 : r7.indexOf("-") === -1 && ie2.test(u5) ? u5 = u5.replace(se2, "-$&").toLowerCase() : a3 === null && (a3 = void 0) : l4 = u5 = "oninput", l4 === "oninput" && o8[u5 = l4] && (u5 = "oninputCapture"), o8[u5] = a3;
      }
    }
    r7 == "select" && o8.multiple && Array.isArray(o8.value) && (o8.value = se(n3.children).forEach(function(s5) {
      s5.props.selected = o8.value.indexOf(s5.props.value) != -1;
    })), r7 == "select" && o8.defaultValue != null && (o8.value = se(n3.children).forEach(function(s5) {
      s5.props.selected = o8.multiple ? o8.defaultValue.indexOf(s5.props.value) != -1 : o8.defaultValue == s5.props.value;
    })), n3.class && !n3.className ? (o8.class = n3.class, Object.defineProperty(o8, "className", me)) : (n3.className && !n3.class || n3.class && n3.className) && (o8.class = o8.className = n3.className), t4.props = o8;
  }(e5), e5.$$typeof = V2, P && P(e5);
};
var w2 = a.__r;
a.__r = function(e5) {
  w2 && w2(e5), S3 = e5.__c;
};
var U2 = a.diffed;
a.diffed = function(e5) {
  U2 && U2(e5);
  var t4 = e5.props, n3 = e5.__e;
  n3 != null && e5.type === "textarea" && "value" in t4 && t4.value !== n3.value && (n3.value = t4.value == null ? "" : t4.value), S3 = null;
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
var Ne = function(e5, t4) {
  return e5(t4);
};
var Re = function(e5, t4) {
  return e5(t4);
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
function Ue(e5, t4) {
  var n3 = t4(), r7 = I2({ h: { __: n3, v: t4 } }), o8 = r7[0].h, u5 = r7[1];
  return S2(function() {
    o8.__ = n3, o8.v = t4, y2(o8) && u5({ h: o8 });
  }, [e5, n3, t4]), z2(function() {
    return y2(o8) && u5({ h: o8 }), e5(function() {
      y2(o8) && u5({ h: o8 });
    });
  }, [e5]), n3;
}
function y2(e5) {
  var t4, n3, r7 = e5.v, o8 = e5.__;
  try {
    var u5 = r7();
    return !((t4 = o8) === (n3 = u5) && (t4 !== 0 || 1 / t4 == 1 / n3) || t4 != t4 && n3 != n3);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d2 = 0;
var x4 = Array.isArray;
function g2(t4, r7, e5, a3, o8, i4) {
  var s5, n3, f6 = {};
  for (n3 in r7)
    n3 == "ref" ? s5 = r7[n3] : f6[n3] = r7[n3];
  var u5 = { type: t4, props: f6, key: e5, ref: s5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d2, __i: -1, __u: 0, __source: o8, __self: i4 };
  if (typeof t4 == "function" && (s5 = t4.defaultProps))
    for (n3 in s5)
      f6[n3] === void 0 && (f6[n3] = s5[n3]);
  return a.vnode && a.vnode(u5), u5;
}

// https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/search.tsx
function IconSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return /* @__PURE__ */ g2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      class: "icon icon-tabler icon-tabler-search",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "stroke-width": stroke,
      stroke: color,
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...props,
      children: [
        /* @__PURE__ */ g2("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ g2("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
        /* @__PURE__ */ g2("path", { d: "M21 21l-6 -6" })
      ]
    }
  );
}
var search_default = IconSearch;

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n3, t4) => {
  for (var e5 in t4)
    s(n3, e5, { get: t4[e5], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t4 = 1; t4 < arguments.length; t4++) {
      var e5 = arguments[t4];
      for (var a3 in e5)
        Object.prototype.hasOwnProperty.call(e5, a3) && (n3[a3] = e5[a3]);
    }
    return n3;
  }, r2.apply(this, arguments);
}
var { default: f, ...d3 } = o2;
var p3 = f !== void 0 ? f : d3;

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e5, f6, { checkForDefaultPrevented: t4 = true } = {}) {
  return function(c6) {
    if (e5?.(c6), t4 === false || !c6.defaultPrevented)
      return f6?.(c6);
  };
}

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e5, f6) {
  typeof e5 == "function" ? e5(f6) : e5 != null && (e5.current = f6);
}
function t(...e5) {
  return (f6) => e5.forEach((o8) => n(o8, f6));
}
function u2(...e5) {
  return G2(t(...e5), e5);
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function w3(t4, c6) {
  let o8 = ve(c6);
  function a3(r7) {
    let { children: e5, ...n3 } = r7, s5 = T(() => n3, Object.values(n3));
    return re(o8.Provider, { value: s5 }, e5);
  }
  function u5(r7) {
    let e5 = J2(o8);
    if (e5)
      return e5;
    if (c6 !== void 0)
      return c6;
    throw new Error(`\`${r7}\` must be used within \`${t4}\``);
  }
  return a3.displayName = t4 + "Provider", [a3, u5];
}
function _(t4, c6 = []) {
  let o8 = [];
  function a3(r7, e5) {
    let n3 = ve(e5), s5 = o8.length;
    o8 = [...o8, e5];
    function f6(d10) {
      let { scope: i4, children: x10, ...$4 } = d10, h7 = i4?.[t4][s5] || n3, S8 = T(() => $4, Object.values($4));
      return re(h7.Provider, { value: S8 }, x10);
    }
    function v3(d10, i4) {
      let x10 = i4?.[t4][s5] || n3, $4 = J2(x10);
      if ($4)
        return $4;
      if (e5 !== void 0)
        return e5;
      throw new Error(`\`${d10}\` must be used within \`${r7}\``);
    }
    return f6.displayName = r7 + "Provider", [f6, v3];
  }
  let u5 = () => {
    let r7 = o8.map((e5) => ve(e5));
    return function(n3) {
      let s5 = n3?.[t4] || r7;
      return T(() => ({ [`__scope${t4}`]: { ...n3, [t4]: s5 } }), [n3, s5]);
    };
  };
  return u5.scopeName = t4, [a3, C3(u5, ...c6)];
}
function C3(...t4) {
  let c6 = t4[0];
  if (t4.length === 1)
    return c6;
  let o8 = () => {
    let a3 = t4.map((u5) => ({ useScope: u5(), scopeName: u5.scopeName }));
    return function(r7) {
      let e5 = a3.reduce((n3, { useScope: s5, scopeName: f6 }) => {
        let d10 = s5(r7)[`__scope${f6}`];
        return { ...n3, ...d10 };
      }, {});
      return T(() => ({ [`__scope${c6.scopeName}`]: e5 }), [e5]);
    };
  };
  return o8.scopeName = c6.scopeName, o8;
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u3 = compat_exports["useId".toString()] || (() => {
});
var r3 = 0;
function n2(t4) {
  let [e5, o8] = I2(u3());
  return e(() => {
    t4 || o8(($4) => $4 ?? String(r3++));
  }, [t4]), t4 || (e5 ? `radix-${e5}` : "");
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f6) {
  let e5 = L(f6);
  return z2(() => {
    e5.current = f6;
  }), T(() => (...u5) => {
    var r7;
    return (r7 = e5.current) === null || r7 === void 0 ? void 0 : r7.call(e5, ...u5);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w4({ prop: e5, defaultProp: a3, onChange: s5 = () => {
} }) {
  let [t4, n3] = P2({ defaultProp: a3, onChange: s5 }), o8 = e5 !== void 0, f6 = o8 ? e5 : t4, l4 = l2(s5), $4 = G2((c6) => {
    if (o8) {
      let u5 = typeof c6 == "function" ? c6(e5) : c6;
      u5 !== e5 && l4(u5);
    } else
      n3(c6);
  }, [o8, e5, n3, l4]);
  return [f6, $4];
}
function P2({ defaultProp: e5, onChange: a3 }) {
  let s5 = I2(e5), [t4] = s5, n3 = L(t4), o8 = l2(a3);
  return z2(() => {
    n3.current !== t4 && (o8(t4), n3.current = t4);
  }, [t4, n3, o8]), s5;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n3, t4) => {
  let { children: e5, ...r7 } = n3, o8 = te2.toArray(e5), l4 = o8.find(I3);
  if (l4) {
    let c6 = l4.props.children, a3 = o8.map((m7) => m7 === l4 ? te2.count(c6) > 1 ? te2.only(null) : m(c6) ? c6.props.children : null : m7);
    return re($2, p3({}, r7, { ref: t4 }), m(c6) ? Ee(c6, void 0, a3) : null);
  }
  return re($2, p3({}, r7, { ref: t4 }), e5);
});
b4.displayName = "Slot";
var $2 = ee2((n3, t4) => {
  let { children: e5, ...r7 } = n3;
  return m(e5) ? Ee(e5, { ...X3(r7, e5.props), ref: t4 ? t(t4, e5.ref) : e5.ref }) : te2.count(e5) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n3 }) => re(H, null, n3);
function I3(n3) {
  return m(n3) && n3.type === y3;
}
function X3(n3, t4) {
  let e5 = { ...t4 };
  for (let r7 in t4) {
    let o8 = n3[r7], l4 = t4[r7];
    /^on[A-Z]/.test(r7) ? o8 && l4 ? e5[r7] = (...a3) => {
      l4(...a3), o8(...a3);
    } : o8 && (e5[r7] = o8) : r7 === "style" ? e5[r7] = { ...o8, ...l4 } : r7 === "className" && (e5[r7] = [o8, l4].filter(Boolean).join(" "));
  }
  return { ...n3, ...e5 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d4 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u4 = d4.reduce((t4, e5) => {
  let f6 = ee2((r7, o8) => {
    let { asChild: s5, ...a3 } = r7, i4 = s5 ? b4 : e5;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i4, p3({}, a3, { ref: o8 }));
  });
  return f6.displayName = `Primitive.${e5}`, { ...t4, [e5]: f6 };
}, {});
function E3(t4, e5) {
  t4 && Re(() => t4.dispatchEvent(e5));
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i(d10, e5 = globalThis?.document) {
  let a3 = l2(d10);
  z2(() => {
    let o8 = (s5) => {
      s5.key === "Escape" && a3(s5);
    };
    return e5.addEventListener("keydown", o8), () => e5.removeEventListener("keydown", o8);
  }, [a3, e5]);
}

// https://esm.sh/v132/@radix-ui/react-dismissable-layer@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dismissable-layer.mjs
var h2 = "dismissableLayer.update";
var X4 = "dismissableLayer.pointerDownOutside";
var Y2 = "dismissableLayer.focusOutside";
var g3;
var F4 = ve({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var G3 = ee2((n3, e5) => {
  var o8;
  let { disableOutsidePointerEvents: i4 = false, onEscapeKeyDown: t4, onPointerDownOutside: r7, onFocusOutside: f6, onInteractOutside: d10, onDismiss: l4, ...v3 } = n3, a3 = J2(F4), [c6, S8] = I2(null), u5 = (o8 = c6?.ownerDocument) !== null && o8 !== void 0 ? o8 : globalThis?.document, [, W7] = I2({}), A5 = u2(e5, (s5) => S8(s5)), y6 = Array.from(a3.layers), [N6] = [...a3.layersWithOutsidePointerEventsDisabled].slice(-1), _5 = y6.indexOf(N6), D7 = c6 ? y6.indexOf(c6) : -1, U6 = a3.layersWithOutsidePointerEventsDisabled.size > 0, w8 = D7 >= _5, z6 = Q4((s5) => {
    let $4 = s5.target, P8 = [...a3.branches].some((E8) => E8.contains($4));
    !w8 || P8 || (r7?.(s5), d10?.(s5), s5.defaultPrevented || l4?.());
  }, u5), O7 = V3((s5) => {
    let $4 = s5.target;
    [...a3.branches].some((E8) => E8.contains($4)) || (f6?.(s5), d10?.(s5), s5.defaultPrevented || l4?.());
  }, u5);
  return i((s5) => {
    D7 === a3.layers.size - 1 && (t4?.(s5), !s5.defaultPrevented && l4 && (s5.preventDefault(), l4()));
  }, u5), z2(() => {
    if (c6)
      return i4 && (a3.layersWithOutsidePointerEventsDisabled.size === 0 && (g3 = u5.body.style.pointerEvents, u5.body.style.pointerEvents = "none"), a3.layersWithOutsidePointerEventsDisabled.add(c6)), a3.layers.add(c6), L3(), () => {
        i4 && a3.layersWithOutsidePointerEventsDisabled.size === 1 && (u5.body.style.pointerEvents = g3);
      };
  }, [c6, u5, i4, a3]), z2(() => () => {
    c6 && (a3.layers.delete(c6), a3.layersWithOutsidePointerEventsDisabled.delete(c6), L3());
  }, [c6, a3]), z2(() => {
    let s5 = () => W7({});
    return document.addEventListener(h2, s5), () => document.removeEventListener(h2, s5);
  }, []), re(u4.div, p3({}, v3, { ref: A5, style: { pointerEvents: U6 ? w8 ? "auto" : "none" : void 0, ...n3.style }, onFocusCapture: o3(n3.onFocusCapture, O7.onFocusCapture), onBlurCapture: o3(n3.onBlurCapture, O7.onBlurCapture), onPointerDownCapture: o3(n3.onPointerDownCapture, z6.onPointerDownCapture) }));
});
var J3 = ee2((n3, e5) => {
  let o8 = J2(F4), i4 = L(null), t4 = u2(e5, i4);
  return z2(() => {
    let r7 = i4.current;
    if (r7)
      return o8.branches.add(r7), () => {
        o8.branches.delete(r7);
      };
  }, [o8.branches]), re(u4.div, p3({}, n3, { ref: t4 }));
});
function Q4(n3, e5 = globalThis?.document) {
  let o8 = l2(n3), i4 = L(false), t4 = L(() => {
  });
  return z2(() => {
    let r7 = (d10) => {
      if (d10.target && !i4.current) {
        let v3 = function() {
          I4(X4, o8, l4, { discrete: true });
        }, l4 = { originalEvent: d10 };
        d10.pointerType === "touch" ? (e5.removeEventListener("click", t4.current), t4.current = v3, e5.addEventListener("click", t4.current, { once: true })) : v3();
      } else
        e5.removeEventListener("click", t4.current);
      i4.current = false;
    }, f6 = window.setTimeout(() => {
      e5.addEventListener("pointerdown", r7);
    }, 0);
    return () => {
      window.clearTimeout(f6), e5.removeEventListener("pointerdown", r7), e5.removeEventListener("click", t4.current);
    };
  }, [e5, o8]), { onPointerDownCapture: () => i4.current = true };
}
function V3(n3, e5 = globalThis?.document) {
  let o8 = l2(n3), i4 = L(false);
  return z2(() => {
    let t4 = (r7) => {
      r7.target && !i4.current && I4(Y2, o8, { originalEvent: r7 }, { discrete: false });
    };
    return e5.addEventListener("focusin", t4), () => e5.removeEventListener("focusin", t4);
  }, [e5, o8]), { onFocusCapture: () => i4.current = true, onBlurCapture: () => i4.current = false };
}
function L3() {
  let n3 = new CustomEvent(h2);
  document.dispatchEvent(n3);
}
function I4(n3, e5, o8, { discrete: i4 }) {
  let t4 = o8.originalEvent.target, r7 = new CustomEvent(n3, { bubbles: false, cancelable: true, detail: o8 });
  e5 && t4.addEventListener(n3, e5, { once: true }), i4 ? E3(t4, r7) : t4.dispatchEvent(r7);
}

// https://esm.sh/v132/@radix-ui/react-focus-scope@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-scope.mjs
var E4 = "focusScope.autoFocusOnMount";
var b5 = "focusScope.autoFocusOnUnmount";
var S4 = { bubbles: false, cancelable: true };
var Q5 = ee2((e5, n3) => {
  let { loop: t4 = false, trapped: a3 = false, onMountAutoFocus: m7, onUnmountAutoFocus: L7, ...R6 } = e5, [o8, g5] = I2(null), $4 = l2(m7), v3 = l2(L7), p6 = L(null), H6 = u2(n3, (s5) => g5(s5)), i4 = L({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  z2(() => {
    if (a3) {
      let s5 = function(u5) {
        if (i4.paused || !o8)
          return;
        let r7 = u5.target;
        o8.contains(r7) ? p6.current = r7 : d5(p6.current, { select: true });
      }, f6 = function(u5) {
        if (i4.paused || !o8)
          return;
        let r7 = u5.relatedTarget;
        r7 !== null && (o8.contains(r7) || d5(p6.current, { select: true }));
      }, c6 = function(u5) {
        if (document.activeElement === document.body)
          for (let F8 of u5)
            F8.removedNodes.length > 0 && d5(o8);
      };
      document.addEventListener("focusin", s5), document.addEventListener("focusout", f6);
      let l4 = new MutationObserver(c6);
      return o8 && l4.observe(o8, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", s5), document.removeEventListener("focusout", f6), l4.disconnect();
      };
    }
  }, [a3, o8, i4.paused]), z2(() => {
    if (o8) {
      C4.add(i4);
      let s5 = document.activeElement;
      if (!o8.contains(s5)) {
        let c6 = new CustomEvent(E4, S4);
        o8.addEventListener(E4, $4), o8.dispatchEvent(c6), c6.defaultPrevented || (x5(q3(I5(o8)), { select: true }), document.activeElement === s5 && d5(o8));
      }
      return () => {
        o8.removeEventListener(E4, $4), setTimeout(() => {
          let c6 = new CustomEvent(b5, S4);
          o8.addEventListener(b5, v3), o8.dispatchEvent(c6), c6.defaultPrevented || d5(s5 ?? document.body, { select: true }), o8.removeEventListener(b5, v3), C4.remove(i4);
        }, 0);
      };
    }
  }, [o8, $4, v3, i4]);
  let P8 = G2((s5) => {
    if (!t4 && !a3 || i4.paused)
      return;
    let f6 = s5.key === "Tab" && !s5.altKey && !s5.ctrlKey && !s5.metaKey, c6 = document.activeElement;
    if (f6 && c6) {
      let l4 = s5.currentTarget, [u5, r7] = D3(l4);
      u5 && r7 ? !s5.shiftKey && c6 === r7 ? (s5.preventDefault(), t4 && d5(u5, { select: true })) : s5.shiftKey && c6 === u5 && (s5.preventDefault(), t4 && d5(r7, { select: true })) : c6 === l4 && s5.preventDefault();
    }
  }, [t4, a3, i4.paused]);
  return re(u4.div, p3({ tabIndex: -1 }, R6, { ref: H6, onKeyDown: P8 }));
});
function x5(e5, { select: n3 = false } = {}) {
  let t4 = document.activeElement;
  for (let a3 of e5)
    if (d5(a3, { select: n3 }), document.activeElement !== t4)
      return;
}
function D3(e5) {
  let n3 = I5(e5), t4 = N2(n3, e5), a3 = N2(n3.reverse(), e5);
  return [t4, a3];
}
function I5(e5) {
  let n3 = [], t4 = document.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, { acceptNode: (a3) => {
    let m7 = a3.tagName === "INPUT" && a3.type === "hidden";
    return a3.disabled || a3.hidden || m7 ? NodeFilter.FILTER_SKIP : a3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; t4.nextNode(); )
    n3.push(t4.currentNode);
  return n3;
}
function N2(e5, n3) {
  for (let t4 of e5)
    if (!V4(t4, { upTo: n3 }))
      return t4;
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
    let t4 = document.activeElement;
    e5.focus({ preventScroll: true }), e5 !== t4 && W3(e5) && n3 && e5.select();
  }
}
var C4 = j2();
function j2() {
  let e5 = [];
  return { add(n3) {
    let t4 = e5[0];
    n3 !== t4 && t4?.pause(), e5 = O4(e5, n3), e5.unshift(n3);
  }, remove(n3) {
    var t4;
    e5 = O4(e5, n3), (t4 = e5[0]) === null || t4 === void 0 || t4.resume();
  } };
}
function O4(e5, n3) {
  let t4 = [...e5], a3 = t4.indexOf(n3);
  return a3 !== -1 && t4.splice(a3, 1), t4;
}
function q3(e5) {
  return e5.filter((n3) => n3.tagName !== "A");
}

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m2 = ee2((r7, a3) => {
  var e5;
  let { container: o8 = globalThis == null || (e5 = globalThis.document) === null || e5 === void 0 ? void 0 : e5.body, ...t4 } = r7;
  return o8 ? Te.createPortal(re(u4.div, p3({}, t4, { ref: a3 })), o8) : null;
});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S5(n3, t4) {
  return R2((o8, r7) => {
    let i4 = t4[o8][r7];
    return i4 ?? o8;
  }, n3);
}
var U3 = (n3) => {
  let { present: t4, children: o8 } = n3, r7 = y4(t4), i4 = typeof o8 == "function" ? o8({ present: r7.isPresent }) : te2.only(o8), a3 = u2(r7.ref, i4.ref);
  return typeof o8 == "function" || r7.isPresent ? Ee(i4, { ref: a3 }) : null;
};
U3.displayName = "Presence";
function y4(n3) {
  let [t4, o8] = I2(), r7 = L({}), i4 = L(n3), a3 = L("none"), N6 = n3 ? "mounted" : "unmounted", [f6, s5] = S5(N6, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e5 = d6(r7.current);
    a3.current = f6 === "mounted" ? e5 : "none";
  }, [f6]), e(() => {
    let e5 = r7.current, u5 = i4.current;
    if (u5 !== n3) {
      let $4 = a3.current, m7 = d6(e5);
      n3 ? s5("MOUNT") : m7 === "none" || e5?.display === "none" ? s5("UNMOUNT") : s5(u5 && $4 !== m7 ? "ANIMATION_OUT" : "UNMOUNT"), i4.current = n3;
    }
  }, [n3, s5]), e(() => {
    if (t4) {
      let e5 = (c6) => {
        let m7 = d6(r7.current).includes(c6.animationName);
        c6.target === t4 && m7 && Re(() => s5("ANIMATION_END"));
      }, u5 = (c6) => {
        c6.target === t4 && (a3.current = d6(r7.current));
      };
      return t4.addEventListener("animationstart", u5), t4.addEventListener("animationcancel", e5), t4.addEventListener("animationend", e5), () => {
        t4.removeEventListener("animationstart", u5), t4.removeEventListener("animationcancel", e5), t4.removeEventListener("animationend", e5);
      };
    } else
      s5("ANIMATION_END");
  }, [t4, s5]), { isPresent: ["mounted", "unmountSuspended"].includes(f6), ref: G2((e5) => {
    e5 && (r7.current = getComputedStyle(e5)), o8(e5);
  }, []) };
}
function d6(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-focus-guards@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-guards.mjs
var d7 = 0;
function c2() {
  z2(() => {
    var e5, t4;
    let a3 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e5 = a3[0]) !== null && e5 !== void 0 ? e5 : r4()), document.body.insertAdjacentElement("beforeend", (t4 = a3[1]) !== null && t4 !== void 0 ? t4 : r4()), d7++, () => {
      d7 === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o8) => o8.remove()), d7--;
    };
  }, []);
}
function r4() {
  let e5 = document.createElement("span");
  return e5.setAttribute("data-radix-focus-guard", ""), e5.tabIndex = 0, e5.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e5;
}

// https://esm.sh/v133/tslib@2.6.2/denonext/tslib.mjs
var m3 = function() {
  return m3 = Object.assign || function(t4) {
    for (var n3, r7 = 1, i4 = arguments.length; r7 < i4; r7++) {
      n3 = arguments[r7];
      for (var o8 in n3)
        Object.prototype.hasOwnProperty.call(n3, o8) && (t4[o8] = n3[o8]);
    }
    return t4;
  }, m3.apply(this, arguments);
};
function S6(e5, t4) {
  var n3 = {};
  for (var r7 in e5)
    Object.prototype.hasOwnProperty.call(e5, r7) && t4.indexOf(r7) < 0 && (n3[r7] = e5[r7]);
  if (e5 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i4 = 0, r7 = Object.getOwnPropertySymbols(e5); i4 < r7.length; i4++)
      t4.indexOf(r7[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r7[i4]) && (n3[r7[i4]] = e5[r7[i4]]);
  return n3;
}
function M4(e5, t4, n3) {
  if (n3 || arguments.length === 2)
    for (var r7 = 0, i4 = t4.length, o8; r7 < i4; r7++)
      (o8 || !(r7 in t4)) && (o8 || (o8 = Array.prototype.slice.call(t4, 0, r7)), o8[r7] = t4[r7]);
  return e5.concat(o8 || Array.prototype.slice.call(t4));
}

// https://esm.sh/v133/react-remove-scroll-bar@2.3.4/denonext/constants.js
var r5 = "right-scroll-bar-position";
var a2 = "width-before-scroll-bar";

// https://esm.sh/v132/use-callback-ref@1.3.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-callback-ref.mjs
function o4(r7, e5) {
  return typeof r7 == "function" ? r7(e5) : r7 && (r7.current = e5), r7;
}
function f2(r7, e5) {
  var t4 = I2(function() {
    return { value: r7, callback: e5, facade: { get current() {
      return t4.value;
    }, set current(n3) {
      var u5 = t4.value;
      u5 !== n3 && (t4.value = n3, t4.callback(n3, u5));
    } } };
  })[0];
  return t4.callback = e5, t4.facade;
}
function m4(r7, e5) {
  return f2(e5 || null, function(t4) {
    return r7.forEach(function(n3) {
      return o4(n3, t4);
    });
  });
}

// https://esm.sh/v132/use-sidecar@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-sidecar.mjs
function C5(e5) {
  return e5;
}
function E5(e5, r7) {
  r7 === void 0 && (r7 = C5);
  var t4 = [], c6 = false, i4 = { read: function() {
    if (c6)
      throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return t4.length ? t4[t4.length - 1] : e5;
  }, useMedium: function(o8) {
    var n3 = r7(o8, c6);
    return t4.push(n3), function() {
      t4 = t4.filter(function(a3) {
        return a3 !== n3;
      });
    };
  }, assignSyncMedium: function(o8) {
    for (c6 = true; t4.length; ) {
      var n3 = t4;
      t4 = [], n3.forEach(o8);
    }
    t4 = { push: function(a3) {
      return o8(a3);
    }, filter: function() {
      return t4;
    } };
  }, assignMedium: function(o8) {
    c6 = true;
    var n3 = [];
    if (t4.length) {
      var a3 = t4;
      t4 = [], a3.forEach(o8), n3 = t4;
    }
    var d10 = function() {
      var u5 = n3;
      n3 = [], u5.forEach(o8);
    }, s5 = function() {
      return Promise.resolve().then(d10);
    };
    s5(), t4 = { push: function(u5) {
      n3.push(u5), s5();
    }, filter: function(u5) {
      return n3 = n3.filter(u5), t4;
    } };
  } };
  return i4;
}
function P3(e5) {
  e5 === void 0 && (e5 = {});
  var r7 = E5(null);
  return r7.options = m3({ async: true, ssr: false }, e5), r7;
}
var w5 = function(e5) {
  var r7 = e5.sideCar, t4 = S6(e5, ["sideCar"]);
  if (!r7)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c6 = r7.read();
  if (!c6)
    throw new Error("Sidecar medium not found");
  return re(c6, m3({}, t4));
};
w5.isSideCarExport = true;
function A4(e5, r7) {
  return e5.useMedium(r7), w5;
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
function c3() {
  if (!document)
    return null;
  var t4 = document.createElement("style");
  t4.type = "text/css";
  var e5 = t2();
  return e5 && t4.setAttribute("nonce", e5), t4;
}
function s2(t4, e5) {
  t4.styleSheet ? t4.styleSheet.cssText = e5 : t4.appendChild(document.createTextNode(e5));
}
function f3(t4) {
  var e5 = document.head || document.getElementsByTagName("head")[0];
  e5.appendChild(t4);
}
var o5 = function() {
  var t4 = 0, e5 = null;
  return { add: function(n3) {
    t4 == 0 && (e5 = c3()) && (s2(e5, n3), f3(e5)), t4++;
  }, remove: function() {
    t4--, !t4 && e5 && (e5.parentNode && e5.parentNode.removeChild(e5), e5 = null);
  } };
};
var r6 = function() {
  var t4 = o5();
  return function(e5, n3) {
    z2(function() {
      return t4.add(e5), function() {
        t4.remove();
      };
    }, [e5 && n3]);
  };
};
var m5 = function() {
  var t4 = r6(), e5 = function(n3) {
    var i4 = n3.styles, u5 = n3.dynamic;
    return t4(i4, u5), null;
  };
  return e5;
};

// https://esm.sh/v132/react-remove-scroll-bar@2.3.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll-bar.mjs
var i2 = "right-scroll-bar-position";
var c4 = "width-before-scroll-bar";
var g4 = "with-scroll-bars-hidden";
var p4 = "--removed-body-scroll-bar-size";
var v2 = { left: 0, top: 0, right: 0, gap: 0 };
var m6 = function(n3) {
  return parseInt(n3 || "", 10) || 0;
};
var h3 = function(n3) {
  var a3 = window.getComputedStyle(document.body), r7 = a3[n3 === "padding" ? "paddingLeft" : "marginLeft"], t4 = a3[n3 === "padding" ? "paddingTop" : "marginTop"], o8 = a3[n3 === "padding" ? "paddingRight" : "marginRight"];
  return [m6(r7), m6(t4), m6(o8)];
};
var s3 = function(n3) {
  if (n3 === void 0 && (n3 = "margin"), typeof window > "u")
    return v2;
  var a3 = h3(n3), r7 = document.documentElement.clientWidth, t4 = window.innerWidth;
  return { left: a3[0], top: a3[1], right: a3[2], gap: Math.max(0, t4 - r7 + a3[2] - a3[0]) };
};
var x6 = m5();
var b6 = function(n3, a3, r7, t4) {
  var o8 = n3.left, d10 = n3.top, f6 = n3.right, e5 = n3.gap;
  return r7 === void 0 && (r7 = "margin"), `
  .`.concat(g4, ` {
   overflow: hidden `).concat(t4, `;
   padding-right: `).concat(e5, "px ").concat(t4, `;
  }
  body {
    overflow: hidden `).concat(t4, `;
    overscroll-behavior: contain;
    `).concat([a3 && "position: relative ".concat(t4, ";"), r7 === "margin" && `
    padding-left: `.concat(o8, `px;
    padding-top: `).concat(d10, `px;
    padding-right: `).concat(f6, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e5, "px ").concat(t4, `;
    `), r7 === "padding" && "padding-right: ".concat(e5, "px ").concat(t4, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(i2, ` {
    right: `).concat(e5, "px ").concat(t4, `;
  }
  
  .`).concat(c4, ` {
    margin-right: `).concat(e5, "px ").concat(t4, `;
  }
  
  .`).concat(i2, " .").concat(i2, ` {
    right: 0 `).concat(t4, `;
  }
  
  .`).concat(c4, " .").concat(c4, ` {
    margin-right: 0 `).concat(t4, `;
  }
  
  body {
    `).concat(p4, ": ").concat(e5, `px;
  }
`);
};
var w6 = function(n3) {
  var a3 = n3.noRelative, r7 = n3.noImportant, t4 = n3.gapMode, o8 = t4 === void 0 ? "margin" : t4, d10 = T(function() {
    return s3(o8);
  }, [o8]);
  return re(x6, { styles: b6(d10, !a3, o8, r7 ? "" : "!important") });
};

// https://esm.sh/v132/react-remove-scroll@2.5.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll.mjs
var N3 = P3();
var D4 = function() {
};
var M5 = ee2(function(e5, t4) {
  var c6 = L(null), o8 = I2({ onScrollCapture: D4, onWheelCapture: D4, onTouchMoveCapture: D4 }), u5 = o8[0], s5 = o8[1], d10 = e5.forwardProps, l4 = e5.children, R6 = e5.className, g5 = e5.removeScrollBar, w8 = e5.enabled, C7 = e5.shards, b8 = e5.sideCar, y6 = e5.noIsolation, E8 = e5.inert, r7 = e5.allowPinchZoom, n3 = e5.as, v3 = n3 === void 0 ? "div" : n3, h7 = e5.gapMode, m7 = S6(e5, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S8 = b8, f6 = m4([c6, t4]), p6 = m3(m3({}, m7), u5);
  return re(H, null, w8 && re(S8, { sideCar: N3, removeScrollBar: g5, shards: C7, noIsolation: y6, inert: E8, setCallbacks: s5, allowPinchZoom: !!r7, lockRef: c6, gapMode: h7 }), d10 ? Ee(te2.only(l4), m3(m3({}, p6), { ref: f6 })) : re(v3, m3({}, p6, { className: R6, ref: f6 }), l4));
});
M5.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
M5.classNames = { fullWidth: a2, zeroRight: r5 };
var W4 = false;
if (typeof window < "u")
  try {
    x7 = Object.defineProperty({}, "passive", { get: function() {
      return W4 = true, true;
    } }), window.addEventListener("test", x7, x7), window.removeEventListener("test", x7, x7);
  } catch {
    W4 = false;
  }
var x7;
var k3 = W4 ? { passive: false } : false;
var O5 = function(e5) {
  return e5.tagName === "TEXTAREA";
};
var H3 = function(e5, t4) {
  var c6 = window.getComputedStyle(e5);
  return c6[t4] !== "hidden" && !(c6.overflowY === c6.overflowX && !O5(e5) && c6[t4] === "visible");
};
var ee3 = function(e5) {
  return H3(e5, "overflowY");
};
var re3 = function(e5) {
  return H3(e5, "overflowX");
};
var I6 = function(e5, t4) {
  var c6 = t4.ownerDocument, o8 = t4;
  do {
    typeof ShadowRoot < "u" && o8 instanceof ShadowRoot && (o8 = o8.host);
    var u5 = V5(e5, o8);
    if (u5) {
      var s5 = Z2(e5, o8), d10 = s5[1], l4 = s5[2];
      if (d10 > l4)
        return true;
    }
    o8 = o8.parentNode;
  } while (o8 && o8 !== c6.body);
  return false;
};
var te3 = function(e5) {
  var t4 = e5.scrollTop, c6 = e5.scrollHeight, o8 = e5.clientHeight;
  return [t4, c6, o8];
};
var ae3 = function(e5) {
  var t4 = e5.scrollLeft, c6 = e5.scrollWidth, o8 = e5.clientWidth;
  return [t4, c6, o8];
};
var V5 = function(e5, t4) {
  return e5 === "v" ? ee3(t4) : re3(t4);
};
var Z2 = function(e5, t4) {
  return e5 === "v" ? te3(t4) : ae3(t4);
};
var ne3 = function(e5, t4) {
  return e5 === "h" && t4 === "rtl" ? -1 : 1;
};
var F5 = function(e5, t4, c6, o8, u5) {
  var s5 = ne3(e5, window.getComputedStyle(t4).direction), d10 = s5 * o8, l4 = c6.target, R6 = t4.contains(l4), g5 = false, w8 = d10 > 0, C7 = 0, b8 = 0;
  do {
    var y6 = Z2(e5, l4), E8 = y6[0], r7 = y6[1], n3 = y6[2], v3 = r7 - n3 - s5 * E8;
    (E8 || v3) && V5(e5, l4) && (C7 += v3, b8 += E8), l4 = l4.parentNode;
  } while (!R6 && l4 !== document.body || R6 && (t4.contains(l4) || t4 === l4));
  return (w8 && (u5 && C7 === 0 || !u5 && d10 > C7) || !w8 && (u5 && b8 === 0 || !u5 && -d10 > b8)) && (g5 = true), g5;
};
var X5 = function(e5) {
  return "changedTouches" in e5 ? [e5.changedTouches[0].clientX, e5.changedTouches[0].clientY] : [0, 0];
};
var z3 = function(e5) {
  return [e5.deltaX, e5.deltaY];
};
var _2 = function(e5) {
  return e5 && "current" in e5 ? e5.current : e5;
};
var ie3 = function(e5, t4) {
  return e5[0] === t4[0] && e5[1] === t4[1];
};
var ue3 = function(e5) {
  return `
  .block-interactivity-`.concat(e5, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e5, ` {pointer-events: all;}
`);
};
var fe3 = 0;
var B2 = [];
function j3(e5) {
  var t4 = L([]), c6 = L([0, 0]), o8 = L(), u5 = I2(fe3++)[0], s5 = I2(m5)[0], d10 = L(e5);
  z2(function() {
    d10.current = e5;
  }, [e5]), z2(function() {
    if (e5.inert) {
      document.body.classList.add("block-interactivity-".concat(u5));
      var r7 = M4([e5.lockRef.current], (e5.shards || []).map(_2), true).filter(Boolean);
      return r7.forEach(function(n3) {
        return n3.classList.add("allow-interactivity-".concat(u5));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u5)), r7.forEach(function(n3) {
          return n3.classList.remove("allow-interactivity-".concat(u5));
        });
      };
    }
  }, [e5.inert, e5.lockRef.current, e5.shards]);
  var l4 = G2(function(r7, n3) {
    if ("touches" in r7 && r7.touches.length === 2)
      return !d10.current.allowPinchZoom;
    var v3 = X5(r7), h7 = c6.current, m7 = "deltaX" in r7 ? r7.deltaX : h7[0] - v3[0], S8 = "deltaY" in r7 ? r7.deltaY : h7[1] - v3[1], f6, p6 = r7.target, P8 = Math.abs(m7) > Math.abs(S8) ? "h" : "v";
    if ("touches" in r7 && P8 === "h" && p6.type === "range")
      return false;
    var T5 = I6(P8, p6);
    if (!T5)
      return true;
    if (T5 ? f6 = P8 : (f6 = P8 === "v" ? "h" : "v", T5 = I6(P8, p6)), !T5)
      return false;
    if (!o8.current && "changedTouches" in r7 && (m7 || S8) && (o8.current = f6), !f6)
      return true;
    var A5 = o8.current || f6;
    return F5(A5, n3, r7, A5 === "h" ? m7 : S8, true);
  }, []), R6 = G2(function(r7) {
    var n3 = r7;
    if (!(!B2.length || B2[B2.length - 1] !== s5)) {
      var v3 = "deltaY" in n3 ? z3(n3) : X5(n3), h7 = t4.current.filter(function(f6) {
        return f6.name === n3.type && f6.target === n3.target && ie3(f6.delta, v3);
      })[0];
      if (h7 && h7.should) {
        n3.cancelable && n3.preventDefault();
        return;
      }
      if (!h7) {
        var m7 = (d10.current.shards || []).map(_2).filter(Boolean).filter(function(f6) {
          return f6.contains(n3.target);
        }), S8 = m7.length > 0 ? l4(n3, m7[0]) : !d10.current.noIsolation;
        S8 && n3.cancelable && n3.preventDefault();
      }
    }
  }, []), g5 = G2(function(r7, n3, v3, h7) {
    var m7 = { name: r7, delta: n3, target: v3, should: h7 };
    t4.current.push(m7), setTimeout(function() {
      t4.current = t4.current.filter(function(S8) {
        return S8 !== m7;
      });
    }, 1);
  }, []), w8 = G2(function(r7) {
    c6.current = X5(r7), o8.current = void 0;
  }, []), C7 = G2(function(r7) {
    g5(r7.type, z3(r7), r7.target, l4(r7, e5.lockRef.current));
  }, []), b8 = G2(function(r7) {
    g5(r7.type, X5(r7), r7.target, l4(r7, e5.lockRef.current));
  }, []);
  z2(function() {
    return B2.push(s5), e5.setCallbacks({ onScrollCapture: C7, onWheelCapture: C7, onTouchMoveCapture: b8 }), document.addEventListener("wheel", R6, k3), document.addEventListener("touchmove", R6, k3), document.addEventListener("touchstart", w8, k3), function() {
      B2 = B2.filter(function(r7) {
        return r7 !== s5;
      }), document.removeEventListener("wheel", R6, k3), document.removeEventListener("touchmove", R6, k3), document.removeEventListener("touchstart", w8, k3);
    };
  }, []);
  var y6 = e5.removeScrollBar, E8 = e5.inert;
  return re(H, null, E8 ? re(s5, { styles: ue3(u5) }) : null, y6 ? re(w6, { gapMode: e5.gapMode }) : null);
}
var Q6 = A4(N3, j3);
var q4 = ee2(function(e5, t4) {
  return re(M5, m3({}, e5, { ref: t4, sideCar: Q6 }));
});
q4.classNames = M5.classNames;
var ve3 = q4;

// https://esm.sh/v133/aria-hidden@1.2.3/denonext/aria-hidden.mjs
var W5 = function(r7) {
  if (typeof document > "u")
    return null;
  var i4 = Array.isArray(r7) ? r7[0] : r7;
  return i4.ownerDocument.body;
};
var f4 = /* @__PURE__ */ new WeakMap();
var c5 = /* @__PURE__ */ new WeakMap();
var p5 = {};
var h4 = 0;
var b7 = function(r7) {
  return r7 && (r7.host || b7(r7.parentNode));
};
var x8 = function(r7, i4) {
  return i4.map(function(t4) {
    if (r7.contains(t4))
      return t4;
    var n3 = b7(t4);
    return n3 && r7.contains(n3) ? n3 : (console.error("aria-hidden", t4, "in not contained inside", r7, ". Doing nothing"), null);
  }).filter(function(t4) {
    return !!t4;
  });
};
var E6 = function(r7, i4, t4, n3) {
  var a3 = x8(i4, Array.isArray(r7) ? r7 : [r7]);
  p5[t4] || (p5[t4] = /* @__PURE__ */ new WeakMap());
  var o8 = p5[t4], l4 = [], v3 = /* @__PURE__ */ new Set(), O7 = new Set(a3), y6 = function(e5) {
    !e5 || v3.has(e5) || (v3.add(e5), y6(e5.parentNode));
  };
  a3.forEach(y6);
  var d10 = function(e5) {
    !e5 || O7.has(e5) || Array.prototype.forEach.call(e5.children, function(u5) {
      if (v3.has(u5))
        d10(u5);
      else {
        var s5 = u5.getAttribute(n3), A5 = s5 !== null && s5 !== "false", w8 = (f4.get(u5) || 0) + 1, M9 = (o8.get(u5) || 0) + 1;
        f4.set(u5, w8), o8.set(u5, M9), l4.push(u5), w8 === 1 && A5 && c5.set(u5, true), M9 === 1 && u5.setAttribute(t4, "true"), A5 || u5.setAttribute(n3, "true");
      }
    });
  };
  return d10(i4), v3.clear(), h4++, function() {
    l4.forEach(function(e5) {
      var u5 = f4.get(e5) - 1, s5 = o8.get(e5) - 1;
      f4.set(e5, u5), o8.set(e5, s5), u5 || (c5.has(e5) || e5.removeAttribute(n3), c5.delete(e5)), s5 || e5.removeAttribute(t4);
    }), h4--, h4 || (f4 = /* @__PURE__ */ new WeakMap(), f4 = /* @__PURE__ */ new WeakMap(), c5 = /* @__PURE__ */ new WeakMap(), p5 = {});
  };
};
var P4 = function(r7, i4, t4) {
  t4 === void 0 && (t4 = "data-aria-hidden");
  var n3 = Array.from(Array.isArray(r7) ? r7 : [r7]), a3 = i4 || W5(r7);
  return a3 ? (n3.push.apply(n3, Array.from(a3.querySelectorAll("[aria-live]"))), E6(n3, a3, t4, "aria-hidden")) : function() {
    return null;
  };
};

// https://esm.sh/v132/@radix-ui/react-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dialog.mjs
var E7 = "Dialog";
var [h5, Ee2] = _(E7);
var [V6, d8] = h5(E7);
var q5 = (e5) => {
  let { __scopeDialog: r7, children: n3, open: c6, defaultOpen: t4, onOpenChange: o8, modal: s5 = true } = e5, i4 = L(null), u5 = L(null), [b8 = false, D7] = w4({ prop: c6, defaultProp: t4, onChange: o8 });
  return re(V6, { scope: r7, triggerRef: i4, contentRef: u5, contentId: n2(), titleId: n2(), descriptionId: n2(), open: b8, onOpenChange: D7, onOpenToggle: G2(() => D7((I8) => !I8), [D7]), modal: s5 }, n3);
};
var K3 = "DialogTrigger";
var Y3 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c6 } = e5, t4 = d8(K3, n3), o8 = u2(r7, t4.triggerRef);
  return re(u4.button, p3({ type: "button", "aria-haspopup": "dialog", "aria-expanded": t4.open, "aria-controls": t4.contentId, "data-state": O6(t4.open) }, c6, { ref: o8, onClick: o3(e5.onClick, t4.onOpenToggle) }));
});
var R4 = "DialogPortal";
var [Z3, P5] = h5(R4, { forceMount: void 0 });
var z4 = (e5) => {
  let { __scopeDialog: r7, forceMount: n3, children: c6, container: t4 } = e5, o8 = d8(R4, r7);
  return re(Z3, { scope: r7, forceMount: n3 }, te2.map(c6, (s5) => re(U3, { present: n3 || o8.open }, re(m2, { asChild: true, container: t4 }, s5))));
};
var _3 = "DialogOverlay";
var J4 = ee2((e5, r7) => {
  let n3 = P5(_3, e5.__scopeDialog), { forceMount: c6 = n3.forceMount, ...t4 } = e5, o8 = d8(_3, e5.__scopeDialog);
  return o8.modal ? re(U3, { present: c6 || o8.open }, re(Q7, p3({}, t4, { ref: r7 }))) : null;
});
var Q7 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c6 } = e5, t4 = d8(_3, n3);
  return re(ve3, { as: b4, allowPinchZoom: true, shards: [t4.contentRef] }, re(u4.div, p3({ "data-state": O6(t4.open) }, c6, { ref: r7, style: { pointerEvents: "auto", ...c6.style } })));
});
var f5 = "DialogContent";
var X6 = ee2((e5, r7) => {
  let n3 = P5(f5, e5.__scopeDialog), { forceMount: c6 = n3.forceMount, ...t4 } = e5, o8 = d8(f5, e5.__scopeDialog);
  return re(U3, { present: c6 || o8.open }, o8.modal ? re(ee4, p3({}, t4, { ref: r7 })) : re(oe3, p3({}, t4, { ref: r7 })));
});
var ee4 = ee2((e5, r7) => {
  let n3 = d8(f5, e5.__scopeDialog), c6 = L(null), t4 = u2(r7, n3.contentRef, c6);
  return z2(() => {
    let o8 = c6.current;
    if (o8)
      return P4(o8);
  }, []), re(y5, p3({}, e5, { ref: t4, trapFocus: n3.open, disableOutsidePointerEvents: true, onCloseAutoFocus: o3(e5.onCloseAutoFocus, (o8) => {
    var s5;
    o8.preventDefault(), (s5 = n3.triggerRef.current) === null || s5 === void 0 || s5.focus();
  }), onPointerDownOutside: o3(e5.onPointerDownOutside, (o8) => {
    let s5 = o8.detail.originalEvent, i4 = s5.button === 0 && s5.ctrlKey === true;
    (s5.button === 2 || i4) && o8.preventDefault();
  }), onFocusOutside: o3(e5.onFocusOutside, (o8) => o8.preventDefault()) }));
});
var oe3 = ee2((e5, r7) => {
  let n3 = d8(f5, e5.__scopeDialog), c6 = L(false), t4 = L(false);
  return re(y5, p3({}, e5, { ref: r7, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o8) => {
    var s5;
    if ((s5 = e5.onCloseAutoFocus) === null || s5 === void 0 || s5.call(e5, o8), !o8.defaultPrevented) {
      var i4;
      c6.current || (i4 = n3.triggerRef.current) === null || i4 === void 0 || i4.focus(), o8.preventDefault();
    }
    c6.current = false, t4.current = false;
  }, onInteractOutside: (o8) => {
    var s5, i4;
    (s5 = e5.onInteractOutside) === null || s5 === void 0 || s5.call(e5, o8), o8.defaultPrevented || (c6.current = true, o8.detail.originalEvent.type === "pointerdown" && (t4.current = true));
    let u5 = o8.target;
    ((i4 = n3.triggerRef.current) === null || i4 === void 0 ? void 0 : i4.contains(u5)) && o8.preventDefault(), o8.detail.originalEvent.type === "focusin" && t4.current && o8.preventDefault();
  } }));
});
var y5 = ee2((e5, r7) => {
  let { __scopeDialog: n3, trapFocus: c6, onOpenAutoFocus: t4, onCloseAutoFocus: o8, ...s5 } = e5, i4 = d8(f5, n3), u5 = L(null), b8 = u2(r7, u5);
  return c2(), re(H, null, re(Q5, { asChild: true, loop: true, trapped: c6, onMountAutoFocus: t4, onUnmountAutoFocus: o8 }, re(G3, p3({ role: "dialog", id: i4.contentId, "aria-describedby": i4.descriptionId, "aria-labelledby": i4.titleId, "data-state": O6(i4.open) }, s5, { ref: b8, onDismiss: () => i4.onOpenChange(false) }))), false);
});
var N4 = "DialogTitle";
var te4 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c6 } = e5, t4 = d8(N4, n3);
  return re(u4.h2, p3({ id: t4.titleId }, c6, { ref: r7 }));
});
var ne4 = "DialogDescription";
var ce3 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c6 } = e5, t4 = d8(ne4, n3);
  return re(u4.p, p3({ id: t4.descriptionId }, c6, { ref: r7 }));
});
var re4 = "DialogClose";
var se3 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c6 } = e5, t4 = d8(re4, n3);
  return re(u4.button, p3({ type: "button" }, c6, { ref: r7, onClick: o3(e5.onClick, () => t4.onOpenChange(false)) }));
});
function O6(e5) {
  return e5 ? "open" : "closed";
}
var ae4 = "DialogTitleWarning";
var [he3, Re2] = w3(ae4, { contentName: f5, titleName: N4, docsSlug: "dialog" });
var Pe2 = q5;
var Ne2 = z4;
var Ie = J4;
var Ae = X6;
var He = te4;
var Me = ce3;
var Te2 = se3;

// https://esm.sh/v135/command-score@0.1.2/denonext/command-score.mjs
var H4 = Object.create;
var N5 = Object.defineProperty;
var J5 = Object.getOwnPropertyDescriptor;
var Y4 = Object.getOwnPropertyNames;
var D5 = Object.getPrototypeOf;
var X7 = Object.prototype.hasOwnProperty;
var k4 = (_5, f6) => () => (f6 || _5((f6 = { exports: {} }).exports, f6), f6.exports);
var s4 = (_5, f6) => {
  for (var c6 in f6)
    N5(_5, c6, { get: f6[c6], enumerable: true });
};
var M6 = (_5, f6, c6, A5) => {
  if (f6 && typeof f6 == "object" || typeof f6 == "function")
    for (let h7 of Y4(f6))
      !X7.call(_5, h7) && h7 !== c6 && N5(_5, h7, { get: () => f6[h7], enumerable: !(A5 = J5(f6, h7)) || A5.enumerable });
  return _5;
};
var T3 = (_5, f6, c6) => (M6(_5, f6, "default"), c6 && M6(c6, f6, "default"));
var t3 = (_5, f6, c6) => (c6 = _5 != null ? H4(D5(_5)) : {}, M6(f6 || !_5 || !_5.__esModule ? N5(c6, "default", { value: _5, enumerable: true }) : c6, _5));
var L4 = k4(($4, l4) => {
  var G5 = 1, B3 = 0.9, K4 = 0.3, m7 = 0.1, W7 = 0, p6 = 0.999, j4 = 0.9999, q7 = 0.99, U6 = /[\\\/\-_+.# \t"@\[\(\{&]/, y6 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
  function a3(_5, f6, c6, A5, h7, O7) {
    if (O7 === f6.length)
      return h7 === _5.length ? G5 : q7;
    for (var e5 = A5.charAt(O7), C7 = c6.indexOf(e5, h7), u5 = 0, E8, R6, S8; C7 >= 0; )
      E8 = a3(_5, f6, c6, A5, C7 + 1, O7 + 1), E8 > u5 && (C7 === h7 ? E8 *= G5 : U6.test(_5.charAt(C7 - 1)) ? (E8 *= B3, S8 = _5.slice(h7, C7 - 1).match(y6), S8 && h7 > 0 && (E8 *= Math.pow(p6, S8.length))) : U6.test(_5.slice(h7, C7 - 1)) ? (E8 *= W7, h7 > 0 && (E8 *= Math.pow(p6, C7 - h7))) : (E8 *= K4, h7 > 0 && (E8 *= Math.pow(p6, C7 - h7))), _5.charAt(C7) !== f6.charAt(O7) && (E8 *= j4)), E8 < m7 && c6.charAt(C7 - 1) === A5.charAt(O7 + 1) && c6.charAt(C7 - 1) !== A5.charAt(O7) && (R6 = a3(_5, f6, c6, A5, C7 + 1, O7 + 2), R6 * m7 > E8 && (E8 = R6 * m7)), E8 > u5 && (u5 = E8), C7 = c6.indexOf(e5, C7 + 1);
    return u5;
  }
  function z6(_5, f6) {
    return a3(_5, f6, _5.toLowerCase(), f6.toLowerCase(), 0, 0);
  }
  l4.exports = z6;
});
var P6 = {};
s4(P6, { default: () => V7 });
var F6 = t3(L4());
T3(P6, t3(L4()));
var { default: o6, ...Q8 } = F6;
var V7 = o6 !== void 0 ? o6 : Q8;

// https://esm.sh/v133/cmdk@0.2.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/cmdk.mjs
var de3 = '[cmdk-list-sizer=""]';
var L5 = '[cmdk-group=""]';
var U4 = '[cmdk-group-items=""]';
var se4 = '[cmdk-group-heading=""]';
var ee5 = '[cmdk-item=""]';
var _4 = `${ee5}:not([aria-disabled="true"])`;
var W6 = "cmdk-item-select";
var w7 = "data-value";
var fe4 = (l4, u5) => V7(l4, u5);
var te5 = ve(void 0);
var F7 = () => J2(te5);
var re5 = ve(void 0);
var J6 = () => J2(re5);
var le3 = ve(void 0);
var ne5 = ee2((l4, u5) => {
  let r7 = L(null), a3 = k5(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), c6 = k5(() => /* @__PURE__ */ new Set()), o8 = k5(() => /* @__PURE__ */ new Map()), f6 = k5(() => /* @__PURE__ */ new Map()), m7 = k5(() => /* @__PURE__ */ new Set()), s5 = ae5(l4), { label: g5, children: C7, value: b8, onValueChange: I8, filter: K4, shouldFilter: ie4, ...q7 } = l4, $4 = Q2(), p6 = Q2(), O7 = Q2(), S8 = Se2();
  x9(() => {
    if (b8 !== void 0) {
      let e5 = b8.trim().toLowerCase();
      a3.current.value = e5, S8(6, Q10), E8.emit();
    }
  }, [b8]);
  let E8 = T(() => ({ subscribe: (e5) => (m7.current.add(e5), () => m7.current.delete(e5)), snapshot: () => a3.current, setState: (e5, i4, d10) => {
    var n3, v3, h7;
    if (!Object.is(a3.current[e5], i4)) {
      if (a3.current[e5] = i4, e5 === "search")
        G5(), j4(), S8(1, z6);
      else if (e5 === "value")
        if (((n3 = s5.current) == null ? void 0 : n3.value) !== void 0) {
          (h7 = (v3 = s5.current).onValueChange) == null || h7.call(v3, i4);
          return;
        } else
          d10 || S8(5, Q10);
      E8.emit();
    }
  }, emit: () => {
    m7.current.forEach((e5) => e5());
  } }), []), V9 = T(() => ({ value: (e5, i4) => {
    i4 !== f6.current.get(e5) && (f6.current.set(e5, i4), a3.current.filtered.items.set(e5, N6(i4)), S8(2, () => {
      j4(), E8.emit();
    }));
  }, item: (e5, i4) => (c6.current.add(e5), i4 && (o8.current.has(i4) ? o8.current.get(i4).add(e5) : o8.current.set(i4, /* @__PURE__ */ new Set([e5]))), S8(3, () => {
    G5(), j4(), a3.current.value || z6(), E8.emit();
  }), () => {
    f6.current.delete(e5), c6.current.delete(e5), a3.current.filtered.items.delete(e5), S8(4, () => {
      G5(), z6(), E8.emit();
    });
  }), group: (e5) => (o8.current.has(e5) || o8.current.set(e5, /* @__PURE__ */ new Set()), () => {
    f6.current.delete(e5), o8.current.delete(e5);
  }), filter: () => s5.current.shouldFilter, label: g5 || l4["aria-label"], listId: $4, inputId: O7, labelId: p6 }), []);
  function N6(e5) {
    var i4;
    let d10 = ((i4 = s5.current) == null ? void 0 : i4.filter) ?? fe4;
    return e5 ? d10(e5, a3.current.search) : 0;
  }
  function j4() {
    if (!r7.current || !a3.current.search || s5.current.shouldFilter === false)
      return;
    let e5 = a3.current.filtered.items, i4 = [];
    a3.current.filtered.groups.forEach((n3) => {
      let v3 = o8.current.get(n3), h7 = 0;
      v3.forEach((D7) => {
        let oe4 = e5.get(D7);
        h7 = Math.max(oe4, h7);
      }), i4.push([n3, h7]);
    });
    let d10 = r7.current.querySelector(de3);
    A5().sort((n3, v3) => {
      let h7 = n3.getAttribute(w7), D7 = v3.getAttribute(w7);
      return (e5.get(D7) ?? 0) - (e5.get(h7) ?? 0);
    }).forEach((n3) => {
      let v3 = n3.closest(U4);
      v3 ? v3.appendChild(n3.parentElement === v3 ? n3 : n3.closest(`${U4} > *`)) : d10.appendChild(n3.parentElement === d10 ? n3 : n3.closest(`${U4} > *`));
    }), i4.sort((n3, v3) => v3[1] - n3[1]).forEach((n3) => {
      let v3 = r7.current.querySelector(`${L5}[${w7}="${n3[0]}"]`);
      v3?.parentElement.appendChild(v3);
    });
  }
  function z6() {
    let e5 = A5().find((d10) => !d10.ariaDisabled), i4 = e5?.getAttribute(w7);
    E8.setState("value", i4 || void 0);
  }
  function G5() {
    if (!a3.current.search || s5.current.shouldFilter === false) {
      a3.current.filtered.count = c6.current.size;
      return;
    }
    a3.current.filtered.groups = /* @__PURE__ */ new Set();
    let e5 = 0;
    for (let i4 of c6.current) {
      let d10 = f6.current.get(i4), n3 = N6(d10);
      a3.current.filtered.items.set(i4, n3), n3 > 0 && e5++;
    }
    for (let [i4, d10] of o8.current)
      for (let n3 of d10)
        if (a3.current.filtered.items.get(n3) > 0) {
          a3.current.filtered.groups.add(i4);
          break;
        }
    a3.current.filtered.count = e5;
  }
  function Q10() {
    var e5, i4, d10;
    let n3 = P8();
    n3 && (((e5 = n3.parentElement) == null ? void 0 : e5.firstChild) === n3 && ((d10 = (i4 = n3.closest(L5)) == null ? void 0 : i4.querySelector(se4)) == null || d10.scrollIntoView({ block: "nearest" })), n3.scrollIntoView({ block: "nearest" }));
  }
  function P8() {
    return r7.current.querySelector(`${ee5}[aria-selected="true"]`);
  }
  function A5() {
    return Array.from(r7.current.querySelectorAll(_4));
  }
  function B3(e5) {
    let i4 = A5()[e5];
    i4 && E8.setState("value", i4.getAttribute(w7));
  }
  function H6(e5) {
    var i4;
    let d10 = P8(), n3 = A5(), v3 = n3.findIndex((D7) => D7 === d10), h7 = n3[v3 + e5];
    (i4 = s5.current) != null && i4.loop && (h7 = v3 + e5 < 0 ? n3[n3.length - 1] : v3 + e5 === n3.length ? n3[0] : n3[v3 + e5]), h7 && E8.setState("value", h7.getAttribute(w7));
  }
  function T5(e5) {
    let i4 = P8(), d10 = i4?.closest(L5), n3;
    for (; d10 && !n3; )
      d10 = e5 > 0 ? we2(d10, L5) : ye2(d10, L5), n3 = d10?.querySelector(_4);
    n3 ? E8.setState("value", n3.getAttribute(w7)) : H6(e5);
  }
  let X9 = () => B3(A5().length - 1), Y6 = (e5) => {
    e5.preventDefault(), e5.metaKey ? X9() : e5.altKey ? T5(1) : H6(1);
  }, Z5 = (e5) => {
    e5.preventDefault(), e5.metaKey ? B3(0) : e5.altKey ? T5(-1) : H6(-1);
  };
  return re("div", { ref: M7([r7, u5]), ...q7, "cmdk-root": "", onKeyDown: (e5) => {
    var i4;
    if ((i4 = q7.onKeyDown) == null || i4.call(q7, e5), !e5.defaultPrevented)
      switch (e5.key) {
        case "n":
        case "j": {
          e5.ctrlKey && Y6(e5);
          break;
        }
        case "ArrowDown": {
          Y6(e5);
          break;
        }
        case "p":
        case "k": {
          e5.ctrlKey && Z5(e5);
          break;
        }
        case "ArrowUp": {
          Z5(e5);
          break;
        }
        case "Home": {
          e5.preventDefault(), B3(0);
          break;
        }
        case "End": {
          e5.preventDefault(), X9();
          break;
        }
        case "Enter": {
          e5.preventDefault();
          let d10 = P8();
          if (d10) {
            let n3 = new Event(W6);
            d10.dispatchEvent(n3);
          }
        }
      }
  } }, re("label", { "cmdk-label": "", htmlFor: V9.inputId, id: V9.labelId, style: ke2 }, g5), re(re5.Provider, { value: E8 }, re(te5.Provider, { value: V9 }, C7)));
});
var me2 = ee2((l4, u5) => {
  let r7 = Q2(), a3 = L(null), c6 = J2(le3), o8 = F7(), f6 = ae5(l4);
  x9(() => o8.item(r7, c6), []);
  let m7 = ue4(r7, a3, [l4.value, l4.children, a3]), s5 = J6(), g5 = R5((p6) => p6.value && p6.value === m7.current), C7 = R5((p6) => o8.filter() === false ? true : p6.search ? p6.filtered.items.get(r7) > 0 : true);
  z2(() => {
    let p6 = a3.current;
    if (!(!p6 || l4.disabled))
      return p6.addEventListener(W6, b8), () => p6.removeEventListener(W6, b8);
  }, [C7, l4.onSelect, l4.disabled]);
  function b8() {
    var p6, O7;
    (O7 = (p6 = f6.current).onSelect) == null || O7.call(p6, m7.current);
  }
  function I8() {
    s5.setState("value", m7.current, true);
  }
  if (!C7)
    return null;
  let { disabled: K4, value: ie4, onSelect: q7, ...$4 } = l4;
  return re("div", { ref: M7([a3, u5]), ...$4, "cmdk-item": "", role: "option", "aria-disabled": K4 || void 0, "aria-selected": g5 || void 0, "data-selected": g5 || void 0, onPointerMove: K4 ? void 0 : I8, onClick: K4 ? void 0 : b8 }, l4.children);
});
var ve4 = ee2((l4, u5) => {
  let { heading: r7, children: a3, ...c6 } = l4, o8 = Q2(), f6 = L(null), m7 = L(null), s5 = Q2(), g5 = F7(), C7 = R5((I8) => g5.filter() === false ? true : I8.search ? I8.filtered.groups.has(o8) : true);
  x9(() => g5.group(o8), []), ue4(o8, f6, [l4.value, l4.heading, m7]);
  let b8 = re(le3.Provider, { value: o8 }, a3);
  return re("div", { ref: M7([f6, u5]), ...c6, "cmdk-group": "", role: "presentation", hidden: C7 ? void 0 : true }, r7 && re("div", { ref: m7, "cmdk-group-heading": "", "aria-hidden": true, id: s5 }, r7), re("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r7 ? s5 : void 0 }, b8));
});
var pe3 = ee2((l4, u5) => {
  let { alwaysRender: r7, ...a3 } = l4, c6 = L(null), o8 = R5((f6) => !f6.search);
  return !r7 && !o8 ? null : re("div", { ref: M7([c6, u5]), ...a3, "cmdk-separator": "", role: "separator" });
});
var he4 = ee2((l4, u5) => {
  let { onValueChange: r7, ...a3 } = l4, c6 = l4.value != null, o8 = J6(), f6 = R5((s5) => s5.search), m7 = F7();
  return z2(() => {
    l4.value != null && o8.setState("search", l4.value);
  }, [l4.value]), re("input", { ref: u5, ...a3, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": m7.listId, "aria-labelledby": m7.labelId, id: m7.inputId, type: "text", value: c6 ? l4.value : f6, onChange: (s5) => {
    c6 || o8.setState("search", s5.target.value), r7?.(s5.target.value);
  } });
});
var ge2 = ee2((l4, u5) => {
  let { children: r7, ...a3 } = l4, c6 = L(null), o8 = L(null), f6 = F7();
  return z2(() => {
    if (o8.current && c6.current) {
      let m7 = o8.current, s5 = c6.current, g5, C7 = new ResizeObserver(() => {
        g5 = requestAnimationFrame(() => {
          let b8 = m7.getBoundingClientRect().height;
          s5.style.setProperty("--cmdk-list-height", b8.toFixed(1) + "px");
        });
      });
      return C7.observe(m7), () => {
        cancelAnimationFrame(g5), C7.unobserve(m7);
      };
    }
  }, []), re("div", { ref: M7([c6, u5]), ...a3, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: f6.listId, "aria-labelledby": f6.inputId }, re("div", { ref: o8, "cmdk-list-sizer": "" }, r7));
});
var be2 = ee2((l4, u5) => {
  let { open: r7, onOpenChange: a3, container: c6, ...o8 } = l4;
  return re(Pe2, { open: r7, onOpenChange: a3 }, re(Ne2, { container: c6 }, re(Ie, { "cmdk-overlay": "" }), re(Ae, { "aria-label": l4.label, "cmdk-dialog": "" }, re(ne5, { ref: u5, ...o8 }))));
});
var Ee3 = ee2((l4, u5) => {
  let r7 = L(true), a3 = R5((c6) => c6.filtered.count === 0);
  return z2(() => {
    r7.current = false;
  }, []), r7.current || !a3 ? null : re("div", { ref: u5, ...l4, "cmdk-empty": "", role: "presentation" });
});
var Ce2 = ee2((l4, u5) => {
  let { progress: r7, children: a3, ...c6 } = l4;
  return re("div", { ref: u5, ...c6, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r7, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, re("div", { "aria-hidden": true }, a3));
});
var xe2 = Object.assign(ne5, { List: ge2, Item: me2, Input: he4, Group: ve4, Separator: pe3, Dialog: be2, Empty: Ee3, Loading: Ce2 });
function we2(l4, u5) {
  let r7 = l4.nextElementSibling;
  for (; r7; ) {
    if (r7.matches(u5))
      return r7;
    r7 = r7.nextElementSibling;
  }
}
function ye2(l4, u5) {
  let r7 = l4.previousElementSibling;
  for (; r7; ) {
    if (r7.matches(u5))
      return r7;
    r7 = r7.previousElementSibling;
  }
}
function ae5(l4) {
  let u5 = L(l4);
  return x9(() => {
    u5.current = l4;
  }), u5;
}
var x9 = typeof window > "u" ? z2 : S2;
function k5(l4) {
  let u5 = L();
  return u5.current === void 0 && (u5.current = l4()), u5;
}
function M7(l4) {
  return (u5) => {
    l4.forEach((r7) => {
      typeof r7 == "function" ? r7(u5) : r7 != null && (r7.current = u5);
    });
  };
}
function R5(l4) {
  let u5 = J6(), r7 = () => l4(u5.snapshot());
  return Ue(u5.subscribe, r7, r7);
}
function ue4(l4, u5, r7) {
  let a3 = L(), c6 = F7();
  return x9(() => {
    var o8;
    let f6 = (() => {
      var m7;
      for (let s5 of r7) {
        if (typeof s5 == "string")
          return s5.trim().toLowerCase();
        if (typeof s5 == "object" && "current" in s5 && s5.current)
          return (m7 = s5.current.textContent) == null ? void 0 : m7.trim().toLowerCase();
      }
    })();
    c6.value(l4, f6), (o8 = u5.current) == null || o8.setAttribute(w7, f6), a3.current = f6;
  }), a3;
}
var Se2 = () => {
  let [l4, u5] = I2(), r7 = k5(() => /* @__PURE__ */ new Map());
  return x9(() => {
    r7.current.forEach((a3) => a3()), r7.current = /* @__PURE__ */ new Map();
  }, [l4]), (a3, c6) => {
    r7.current.set(a3, c6), u5({});
  };
};
var ke2 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o7(r7) {
  var f6, n3, t4 = "";
  if (typeof r7 == "string" || typeof r7 == "number")
    t4 += r7;
  else if (typeof r7 == "object")
    if (Array.isArray(r7))
      for (f6 = 0; f6 < r7.length; f6++)
        r7[f6] && (n3 = o7(r7[f6])) && (t4 && (t4 += " "), t4 += n3);
    else
      for (f6 in r7)
        r7[f6] && (t4 && (t4 += " "), t4 += f6);
  return t4;
}
function e4() {
  for (var r7, f6, n3 = 0, t4 = ""; n3 < arguments.length; )
    (r7 = arguments[n3++]) && (f6 = o7(r7)) && (t4 && (t4 += " "), t4 += f6);
  return t4;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r7, e5) => {
  for (var t4 in e5)
    Ar(r7, t4, { get: e5[t4], enumerable: true });
};
function U5() {
  for (var r7 = 0, e5, t4, o8 = ""; r7 < arguments.length; )
    (e5 = arguments[r7++]) && (t4 = lr(e5)) && (o8 && (o8 += " "), o8 += t4);
  return o8;
}
function lr(r7) {
  if (typeof r7 == "string")
    return r7;
  for (var e5, t4 = "", o8 = 0; o8 < r7.length; o8++)
    r7[o8] && (e5 = lr(r7[o8])) && (t4 && (t4 += " "), t4 += e5);
  return t4;
}
var Z4 = "-";
function ur(r7) {
  var e5 = Sr(r7), t4 = r7.conflictingClassGroups, o8 = r7.conflictingClassGroupModifiers, a3 = o8 === void 0 ? {} : o8;
  function s5(i4) {
    var c6 = i4.split(Z4);
    return c6[0] === "" && c6.length !== 1 && c6.shift(), pr(c6, e5) || kr(i4);
  }
  function n3(i4, c6) {
    var u5 = t4[i4] || [];
    return c6 && a3[i4] ? [].concat(u5, a3[i4]) : u5;
  }
  return { getClassGroupId: s5, getConflictingClassGroupIds: n3 };
}
function pr(r7, e5) {
  if (r7.length === 0)
    return e5.classGroupId;
  var t4 = r7[0], o8 = e5.nextPart.get(t4), a3 = o8 ? pr(r7.slice(1), o8) : void 0;
  if (a3)
    return a3;
  if (e5.validators.length !== 0) {
    var s5 = r7.join(Z4);
    return e5.validators.find(function(n3) {
      var i4 = n3.validator;
      return i4(s5);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r7) {
  if (dr.test(r7)) {
    var e5 = dr.exec(r7)[1], t4 = e5?.substring(0, e5.indexOf(":"));
    if (t4)
      return "arbitrary.." + t4;
  }
}
function Sr(r7) {
  var e5 = r7.theme, t4 = r7.prefix, o8 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a3 = Gr(Object.entries(r7.classGroups), t4);
  return a3.forEach(function(s5) {
    var n3 = s5[0], i4 = s5[1];
    q6(i4, o8, n3, e5);
  }), o8;
}
function q6(r7, e5, t4, o8) {
  r7.forEach(function(a3) {
    if (typeof a3 == "string") {
      var s5 = a3 === "" ? e5 : cr(e5, a3);
      s5.classGroupId = t4;
      return;
    }
    if (typeof a3 == "function") {
      if (zr(a3)) {
        q6(a3(o8), e5, t4, o8);
        return;
      }
      e5.validators.push({ validator: a3, classGroupId: t4 });
      return;
    }
    Object.entries(a3).forEach(function(n3) {
      var i4 = n3[0], c6 = n3[1];
      q6(c6, cr(e5, i4), t4, o8);
    });
  });
}
function cr(r7, e5) {
  var t4 = r7;
  return e5.split(Z4).forEach(function(o8) {
    t4.nextPart.has(o8) || t4.nextPart.set(o8, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t4 = t4.nextPart.get(o8);
  }), t4;
}
function zr(r7) {
  return r7.isThemeGetter;
}
function Gr(r7, e5) {
  return e5 ? r7.map(function(t4) {
    var o8 = t4[0], a3 = t4[1], s5 = a3.map(function(n3) {
      return typeof n3 == "string" ? e5 + n3 : typeof n3 == "object" ? Object.fromEntries(Object.entries(n3).map(function(i4) {
        var c6 = i4[0], u5 = i4[1];
        return [e5 + c6, u5];
      })) : n3;
    });
    return [o8, s5];
  }) : r7;
}
function fr(r7) {
  if (r7 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e5 = 0, t4 = /* @__PURE__ */ new Map(), o8 = /* @__PURE__ */ new Map();
  function a3(s5, n3) {
    t4.set(s5, n3), e5++, e5 > r7 && (e5 = 0, o8 = t4, t4 = /* @__PURE__ */ new Map());
  }
  return { get: function(n3) {
    var i4 = t4.get(n3);
    if (i4 !== void 0)
      return i4;
    if ((i4 = o8.get(n3)) !== void 0)
      return a3(n3, i4), i4;
  }, set: function(n3, i4) {
    t4.has(n3) ? t4.set(n3, i4) : a3(n3, i4);
  } };
}
var X8 = "!";
function br(r7) {
  var e5 = r7.separator || ":", t4 = e5.length === 1, o8 = e5[0], a3 = e5.length;
  return function(n3) {
    for (var i4 = [], c6 = 0, u5 = 0, b8, f6 = 0; f6 < n3.length; f6++) {
      var g5 = n3[f6];
      if (c6 === 0) {
        if (g5 === o8 && (t4 || n3.slice(f6, f6 + a3) === e5)) {
          i4.push(n3.slice(u5, f6)), u5 = f6 + a3;
          continue;
        }
        if (g5 === "/") {
          b8 = f6;
          continue;
        }
      }
      g5 === "[" ? c6++ : g5 === "]" && c6--;
    }
    var y6 = i4.length === 0 ? n3 : n3.substring(u5), x10 = y6.startsWith(X8), m7 = x10 ? y6.substring(1) : y6, w8 = b8 && b8 > u5 ? b8 - u5 : void 0;
    return { modifiers: i4, hasImportantModifier: x10, baseClassName: m7, maybePostfixModifierPosition: w8 };
  };
}
function gr(r7) {
  if (r7.length <= 1)
    return r7;
  var e5 = [], t4 = [];
  return r7.forEach(function(o8) {
    var a3 = o8[0] === "[";
    a3 ? (e5.push.apply(e5, t4.sort().concat([o8])), t4 = []) : t4.push(o8);
  }), e5.push.apply(e5, t4.sort()), e5;
}
function mr(r7) {
  return { cache: fr(r7.cacheSize), splitModifiers: br(r7), ...ur(r7) };
}
var Ir = /\s+/;
function vr(r7, e5) {
  var t4 = e5.splitModifiers, o8 = e5.getClassGroupId, a3 = e5.getConflictingClassGroupIds, s5 = /* @__PURE__ */ new Set();
  return r7.trim().split(Ir).map(function(n3) {
    var i4 = t4(n3), c6 = i4.modifiers, u5 = i4.hasImportantModifier, b8 = i4.baseClassName, f6 = i4.maybePostfixModifierPosition, g5 = o8(f6 ? b8.substring(0, f6) : b8), y6 = !!f6;
    if (!g5) {
      if (!f6)
        return { isTailwindClass: false, originalClassName: n3 };
      if (g5 = o8(b8), !g5)
        return { isTailwindClass: false, originalClassName: n3 };
      y6 = false;
    }
    var x10 = gr(c6).join(":"), m7 = u5 ? x10 + X8 : x10;
    return { isTailwindClass: true, modifierId: m7, classGroupId: g5, originalClassName: n3, hasPostfixModifier: y6 };
  }).reverse().filter(function(n3) {
    if (!n3.isTailwindClass)
      return true;
    var i4 = n3.modifierId, c6 = n3.classGroupId, u5 = n3.hasPostfixModifier, b8 = i4 + c6;
    return s5.has(b8) ? false : (s5.add(b8), a3(c6, u5).forEach(function(f6) {
      return s5.add(i4 + f6);
    }), true);
  }).reverse().map(function(n3) {
    return n3.originalClassName;
  }).join(" ");
}
function P7() {
  for (var r7 = arguments.length, e5 = new Array(r7), t4 = 0; t4 < r7; t4++)
    e5[t4] = arguments[t4];
  var o8, a3, s5, n3 = i4;
  function i4(u5) {
    var b8 = e5[0], f6 = e5.slice(1), g5 = f6.reduce(function(y6, x10) {
      return x10(y6);
    }, b8());
    return o8 = mr(g5), a3 = o8.cache.get, s5 = o8.cache.set, n3 = c6, c6(u5);
  }
  function c6(u5) {
    var b8 = a3(u5);
    if (b8)
      return b8;
    var f6 = vr(u5, o8);
    return s5(u5, f6), f6;
  }
  return function() {
    return n3(U5.apply(null, arguments));
  };
}
function d9(r7) {
  var e5 = function(o8) {
    return o8[r7] || [];
  };
  return e5.isThemeGetter = true, e5;
}
var wr = {};
Mr(wr, { isAny: () => G4, isArbitraryLength: () => L6, isArbitraryNumber: () => S7, isArbitraryPosition: () => Q9, isArbitraryShadow: () => D6, isArbitrarySize: () => H5, isArbitraryUrl: () => V8, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z5, isLength: () => h6, isNumber: () => M8, isPercent: () => Y5, isTshirtSize: () => C6 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h6(r7) {
  return M8(r7) || Tr.has(r7) || Pr.test(r7) || L6(r7);
}
function L6(r7) {
  return I7(r7, "length", Er);
}
function H5(r7) {
  return I7(r7, "size", xr);
}
function Q9(r7) {
  return I7(r7, "position", xr);
}
function V8(r7) {
  return I7(r7, "url", jr);
}
function S7(r7) {
  return I7(r7, "number", M8);
}
var Wr = S7;
function M8(r7) {
  return !Number.isNaN(Number(r7));
}
function Y5(r7) {
  return r7.endsWith("%") && M8(r7.slice(0, -1));
}
function z5(r7) {
  return hr(r7) || I7(r7, "number", hr);
}
function l3(r7) {
  return yr.test(r7);
}
function G4() {
  return true;
}
function C6(r7) {
  return Rr.test(r7);
}
function D6(r7) {
  return I7(r7, "", Ur);
}
function I7(r7, e5, t4) {
  var o8 = yr.exec(r7);
  return o8 ? o8[1] ? o8[1] === e5 : t4(o8[2]) : false;
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
function T4() {
  var r7 = d9("colors"), e5 = d9("spacing"), t4 = d9("blur"), o8 = d9("brightness"), a3 = d9("borderColor"), s5 = d9("borderRadius"), n3 = d9("borderSpacing"), i4 = d9("borderWidth"), c6 = d9("contrast"), u5 = d9("grayscale"), b8 = d9("hueRotate"), f6 = d9("invert"), g5 = d9("gap"), y6 = d9("gradientColorStops"), x10 = d9("gradientColorStopPositions"), m7 = d9("inset"), w8 = d9("margin"), k6 = d9("opacity"), A5 = d9("padding"), K4 = d9("saturate"), O7 = d9("scale"), rr = d9("sepia"), er = d9("skew"), tr = d9("space"), or = d9("translate"), $4 = function() {
    return ["auto", "contain", "none"];
  }, B3 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F8 = function() {
    return ["auto", l3, e5];
  }, p6 = function() {
    return [l3, e5];
  }, nr = function() {
    return ["", h6];
  }, W7 = function() {
    return ["auto", M8, l3];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E8 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J7 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R6 = function() {
    return ["", "0", l3];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N6 = function() {
    return [M8, S7];
  }, j4 = function() {
    return [M8, l3];
  };
  return { cacheSize: 500, theme: { colors: [G4], spacing: [h6], blur: ["none", "", C6, l3], brightness: N6(), borderColor: [r7], borderRadius: ["none", "", "full", C6, l3], borderSpacing: p6(), borderWidth: nr(), contrast: N6(), grayscale: R6(), hueRotate: j4(), invert: R6(), gap: p6(), gradientColorStops: [r7], gradientColorStopPositions: [Y5, L6], inset: F8(), margin: F8(), opacity: N6(), padding: p6(), saturate: N6(), scale: N6(), sepia: R6(), skew: j4(), space: p6(), translate: p6() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C6] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B3() }], "overflow-x": [{ "overflow-x": B3() }], "overflow-y": [{ "overflow-y": B3() }], overscroll: [{ overscroll: $4() }], "overscroll-x": [{ "overscroll-x": $4() }], "overscroll-y": [{ "overscroll-y": $4() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m7] }], "inset-x": [{ "inset-x": [m7] }], "inset-y": [{ "inset-y": [m7] }], start: [{ start: [m7] }], end: [{ end: [m7] }], top: [{ top: [m7] }], right: [{ right: [m7] }], bottom: [{ bottom: [m7] }], left: [{ left: [m7] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z5] }], basis: [{ basis: F8() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R6() }], shrink: [{ shrink: R6() }], order: [{ order: ["first", "last", "none", z5] }], "grid-cols": [{ "grid-cols": [G4] }], "col-start-end": [{ col: ["auto", { span: ["full", z5] }, l3] }], "col-start": [{ "col-start": W7() }], "col-end": [{ "col-end": W7() }], "grid-rows": [{ "grid-rows": [G4] }], "row-start-end": [{ row: ["auto", { span: [z5] }, l3] }], "row-start": [{ "row-start": W7() }], "row-end": [{ "row-end": W7() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g5] }], "gap-x": [{ "gap-x": [g5] }], "gap-y": [{ "gap-y": [g5] }], "justify-content": [{ justify: ["normal"].concat(J7()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J7(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J7(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A5] }], px: [{ px: [A5] }], py: [{ py: [A5] }], ps: [{ ps: [A5] }], pe: [{ pe: [A5] }], pt: [{ pt: [A5] }], pr: [{ pr: [A5] }], pb: [{ pb: [A5] }], pl: [{ pl: [A5] }], m: [{ m: [w8] }], mx: [{ mx: [w8] }], my: [{ my: [w8] }], ms: [{ ms: [w8] }], me: [{ me: [w8] }], mt: [{ mt: [w8] }], mr: [{ mr: [w8] }], mb: [{ mb: [w8] }], ml: [{ ml: [w8] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e5] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h6] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C6] }, C6, l3] }], h: [{ h: [l3, e5, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h6] }], "max-h": [{ "max-h": [l3, e5, "min", "max", "fit"] }], "font-size": [{ text: ["base", C6, L6] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S7] }], "font-family": [{ font: [G4] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M8, S7] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h6] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r7] }], "placeholder-opacity": [{ "placeholder-opacity": [k6] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r7] }], "text-opacity": [{ "text-opacity": [k6] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E8(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h6] }], "underline-offset": [{ "underline-offset": ["auto", l3, h6] }], "text-decoration-color": [{ decoration: [r7] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p6() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k6] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q9]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H5] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V8] }], "bg-color": [{ bg: [r7] }], "gradient-from-pos": [{ from: [x10] }], "gradient-via-pos": [{ via: [x10] }], "gradient-to-pos": [{ to: [x10] }], "gradient-from": [{ from: [y6] }], "gradient-via": [{ via: [y6] }], "gradient-to": [{ to: [y6] }], rounded: [{ rounded: [s5] }], "rounded-s": [{ "rounded-s": [s5] }], "rounded-e": [{ "rounded-e": [s5] }], "rounded-t": [{ "rounded-t": [s5] }], "rounded-r": [{ "rounded-r": [s5] }], "rounded-b": [{ "rounded-b": [s5] }], "rounded-l": [{ "rounded-l": [s5] }], "rounded-ss": [{ "rounded-ss": [s5] }], "rounded-se": [{ "rounded-se": [s5] }], "rounded-ee": [{ "rounded-ee": [s5] }], "rounded-es": [{ "rounded-es": [s5] }], "rounded-tl": [{ "rounded-tl": [s5] }], "rounded-tr": [{ "rounded-tr": [s5] }], "rounded-br": [{ "rounded-br": [s5] }], "rounded-bl": [{ "rounded-bl": [s5] }], "border-w": [{ border: [i4] }], "border-w-x": [{ "border-x": [i4] }], "border-w-y": [{ "border-y": [i4] }], "border-w-s": [{ "border-s": [i4] }], "border-w-e": [{ "border-e": [i4] }], "border-w-t": [{ "border-t": [i4] }], "border-w-r": [{ "border-r": [i4] }], "border-w-b": [{ "border-b": [i4] }], "border-w-l": [{ "border-l": [i4] }], "border-opacity": [{ "border-opacity": [k6] }], "border-style": [{ border: [].concat(E8(), ["hidden"]) }], "divide-x": [{ "divide-x": [i4] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i4] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k6] }], "divide-style": [{ divide: E8() }], "border-color": [{ border: [a3] }], "border-color-x": [{ "border-x": [a3] }], "border-color-y": [{ "border-y": [a3] }], "border-color-t": [{ "border-t": [a3] }], "border-color-r": [{ "border-r": [a3] }], "border-color-b": [{ "border-b": [a3] }], "border-color-l": [{ "border-l": [a3] }], "divide-color": [{ divide: [a3] }], "outline-style": [{ outline: [""].concat(E8()) }], "outline-offset": [{ "outline-offset": [l3, h6] }], "outline-w": [{ outline: [h6] }], "outline-color": [{ outline: [r7] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r7] }], "ring-opacity": [{ "ring-opacity": [k6] }], "ring-offset-w": [{ "ring-offset": [h6] }], "ring-offset-color": [{ "ring-offset": [r7] }], shadow: [{ shadow: ["", "inner", "none", C6, D6] }], "shadow-color": [{ shadow: [G4] }], opacity: [{ opacity: [k6] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t4] }], brightness: [{ brightness: [o8] }], contrast: [{ contrast: [c6] }], "drop-shadow": [{ "drop-shadow": ["", "none", C6, l3] }], grayscale: [{ grayscale: [u5] }], "hue-rotate": [{ "hue-rotate": [b8] }], invert: [{ invert: [f6] }], saturate: [{ saturate: [K4] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t4] }], "backdrop-brightness": [{ "backdrop-brightness": [o8] }], "backdrop-contrast": [{ "backdrop-contrast": [c6] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u5] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b8] }], "backdrop-invert": [{ "backdrop-invert": [f6] }], "backdrop-opacity": [{ "backdrop-opacity": [k6] }], "backdrop-saturate": [{ "backdrop-saturate": [K4] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n3] }], "border-spacing-x": [{ "border-spacing-x": [n3] }], "border-spacing-y": [{ "border-spacing-y": [n3] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j4() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j4() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O7] }], "scale-x": [{ "scale-x": [O7] }], "scale-y": [{ "scale-y": [O7] }], rotate: [{ rotate: [z5, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r7] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r7] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p6() }], "scroll-mx": [{ "scroll-mx": p6() }], "scroll-my": [{ "scroll-my": p6() }], "scroll-ms": [{ "scroll-ms": p6() }], "scroll-me": [{ "scroll-me": p6() }], "scroll-mt": [{ "scroll-mt": p6() }], "scroll-mr": [{ "scroll-mr": p6() }], "scroll-mb": [{ "scroll-mb": p6() }], "scroll-ml": [{ "scroll-ml": p6() }], "scroll-p": [{ "scroll-p": p6() }], "scroll-px": [{ "scroll-px": p6() }], "scroll-py": [{ "scroll-py": p6() }], "scroll-ps": [{ "scroll-ps": p6() }], "scroll-pe": [{ "scroll-pe": p6() }], "scroll-pt": [{ "scroll-pt": p6() }], "scroll-pr": [{ "scroll-pr": p6() }], "scroll-pb": [{ "scroll-pb": p6() }], "scroll-pl": [{ "scroll-pl": p6() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r7, "none"] }], "stroke-w": [{ stroke: [h6, S7] }], stroke: [{ stroke: [r7, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P7(T4);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e4(inputs));
}

// ../components/ui/dialog.tsx
var Dialog = Pe2;
var DialogPortal = ({ class: className, children, ...props }) => /* @__PURE__ */ g2(Ne2, { className: cn(className), ...props, children: /* @__PURE__ */ g2("div", { className: "fixed inset-0 z-50 flex items-start justify-center sm:items-center", children }) });
DialogPortal.displayName = Ne2.displayName;
var DialogOverlay = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  Ie,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Ie.displayName;
var DialogContent = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g2(DialogPortal, { children: [
  /* @__PURE__ */ g2(DialogOverlay, {}),
  /* @__PURE__ */ g2(
    Ae,
    {
      ref,
      className: cn(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ g2(Te2, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ g2("span", { class: "i-lucide:x flex h-4 w-4" }),
          /* @__PURE__ */ g2("span", { class: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Ae.displayName;
var DialogHeader = ({ class: className, ...props }) => /* @__PURE__ */ g2("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ class: className, ...props }) => /* @__PURE__ */ g2("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  He,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = He.displayName;
var DialogDescription = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(Me, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = Me.displayName;

// ../components/ui/command.tsx
var Command = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g2(
  xe2,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    children: !children ? children : /* @__PURE__ */ g2(H, { children: [
      children,
      /* @__PURE__ */ g2("style", { children: `
          .aria-selected\\:bg-accent[aria-selected=true] { background-color: hsl(var(--accent)) } 
          .aria-selected\\:text-accent-foreground[aria-selected=true] { color: hsl(var(--accent-foreground)) }
        ` })
    ] }),
    ...props
  }
));
Command.displayName = xe2.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ g2(Dialog, { ...props, children: /* @__PURE__ */ g2(DialogContent, { class: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ g2(Command, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2("div", { class: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ g2(search_default, { class: "flex mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ g2(
    xe2.Input,
    {
      ref,
      className: cn(
        "placeholder:text-foreground-muted flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = xe2.Input.displayName;
var CommandList = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  xe2.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = xe2.List.displayName;
var CommandEmpty = ee2((props, ref) => /* @__PURE__ */ g2(xe2.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = xe2.Empty.displayName;
var CommandGroup = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  xe2.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[hsl(var(--muted-foreground))]",
      // somehow "text-muted-foreground" not work. (nikogoli)
      className
    ),
    ...props
  }
));
CommandGroup.displayName = xe2.Group.displayName;
var CommandSeparator = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(xe2.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = xe2.Separator.displayName;
var CommandItem = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  xe2.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = xe2.Item.displayName;
var CommandShortcut = ({ class: className, ...props }) => {
  return /* @__PURE__ */ g2("span", { class: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props });
};
CommandShortcut.displayName = "CommandShortcut";
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
};
