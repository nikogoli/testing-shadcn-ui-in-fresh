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
function b(e5, _4) {
  for (var t4 in _4)
    e5[t4] = _4[t4];
  return e5;
}
function Z(e5) {
  var _4 = e5.parentNode;
  _4 && _4.removeChild(e5);
}
function re(e5, _4, t4) {
  var i6, n4, r8, l6 = {};
  for (r8 in _4)
    r8 == "key" ? i6 = _4[r8] : r8 == "ref" ? n4 = _4[r8] : l6[r8] = _4[r8];
  if (arguments.length > 2 && (l6.children = arguments.length > 3 ? D.call(arguments, 2) : t4), typeof e5 == "function" && e5.defaultProps != null)
    for (r8 in e5.defaultProps)
      l6[r8] === void 0 && (l6[r8] = e5.defaultProps[r8]);
  return S(e5, l6, i6, n4, null);
}
function S(e5, _4, t4, i6, n4) {
  var r8 = { type: e5, props: _4, key: t4, ref: i6, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n4 ?? ++Q, __i: -1, __u: 0 };
  return n4 == null && a.vnode != null && a.vnode(r8), r8;
}
function de() {
  return { current: null };
}
function H(e5) {
  return e5.children;
}
function W(e5, _4) {
  this.props = e5, this.context = _4;
}
function w(e5, _4) {
  if (_4 == null)
    return e5.__ ? w(e5.__, e5.__i + 1) : null;
  for (var t4; _4 < e5.__k.length; _4++)
    if ((t4 = e5.__k[_4]) != null && t4.__e != null)
      return t4.__e;
  return typeof e5.type == "function" ? w(e5) : null;
}
function ie(e5, _4, t4) {
  var i6, n4 = e5.__v, r8 = n4.__e, l6 = e5.__P;
  if (l6)
    return (i6 = b({}, n4)).__v = n4.__v + 1, a.vnode && a.vnode(i6), G(l6, i6, n4, e5.__n, l6.ownerSVGElement !== void 0, 32 & n4.__u ? [r8] : null, _4, r8 ?? w(n4), !!(32 & n4.__u), t4), i6.__v = n4.__v, i6.__.__k[i6.__i] = i6, i6.__d = void 0, i6.__e != r8 && ee(i6), i6;
}
function ee(e5) {
  var _4, t4;
  if ((e5 = e5.__) != null && e5.__c != null) {
    for (e5.__e = e5.__c.base = null, _4 = 0; _4 < e5.__k.length; _4++)
      if ((t4 = e5.__k[_4]) != null && t4.__e != null) {
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
  var e5, _4, t4, i6 = [], n4 = [];
  for (x.sort($); e5 = x.shift(); )
    e5.__d && (t4 = x.length, _4 = ie(e5, i6, n4) || _4, t4 === 0 || x.length > t4 ? (R(i6, _4, n4), n4.length = i6.length = 0, _4 = void 0, x.sort($)) : _4 && a.__c && a.__c(_4, O));
  _4 && R(i6, _4, n4), A.__r = 0;
}
function _e(e5, _4, t4, i6, n4, r8, l6, u7, c7, s6, p8) {
  var o7, m9, f8, h9, k6, v4 = i6 && i6.__k || O, d10 = _4.length;
  for (t4.__d = c7, le(t4, _4, v4), c7 = t4.__d, o7 = 0; o7 < d10; o7++)
    (f8 = t4.__k[o7]) != null && typeof f8 != "boolean" && typeof f8 != "function" && (m9 = f8.__i === -1 ? E : v4[f8.__i] || E, f8.__i = o7, G(e5, f8, m9, n4, r8, l6, u7, c7, s6, p8), h9 = f8.__e, f8.ref && m9.ref != f8.ref && (m9.ref && V(m9.ref, null, f8), p8.push(f8.ref, f8.__c || h9, f8)), k6 == null && h9 != null && (k6 = h9), 65536 & f8.__u || m9.__k === f8.__k ? c7 = te(f8, c7, e5) : typeof f8.type == "function" && f8.__d !== void 0 ? c7 = f8.__d : h9 && (c7 = h9.nextSibling), f8.__d = void 0, f8.__u &= -196609);
  t4.__d = c7, t4.__e = k6;
}
function le(e5, _4, t4) {
  var i6, n4, r8, l6, u7, c7 = _4.length, s6 = t4.length, p8 = s6, o7 = 0;
  for (e5.__k = [], i6 = 0; i6 < c7; i6++)
    l6 = i6 + o7, (n4 = e5.__k[i6] = (n4 = _4[i6]) == null || typeof n4 == "boolean" || typeof n4 == "function" ? null : typeof n4 == "string" || typeof n4 == "number" || typeof n4 == "bigint" || n4.constructor == String ? S(null, n4, null, null, null) : F(n4) ? S(H, { children: n4 }, null, null, null) : n4.constructor === void 0 && n4.__b > 0 ? S(n4.type, n4.props, n4.key, n4.ref ? n4.ref : null, n4.__v) : n4) != null ? (n4.__ = e5, n4.__b = e5.__b + 1, u7 = ue(n4, t4, l6, p8), n4.__i = u7, r8 = null, u7 !== -1 && (p8--, (r8 = t4[u7]) && (r8.__u |= 131072)), r8 == null || r8.__v === null ? (u7 == -1 && o7--, typeof n4.type != "function" && (n4.__u |= 65536)) : u7 !== l6 && (u7 === l6 + 1 ? o7++ : u7 > l6 ? p8 > c7 - l6 ? o7 += u7 - l6 : o7-- : u7 < l6 ? u7 == l6 - 1 && (o7 = u7 - l6) : o7 = 0, u7 !== i6 + o7 && (n4.__u |= 65536))) : (r8 = t4[l6]) && r8.key == null && r8.__e && !(131072 & r8.__u) && (r8.__e == e5.__d && (e5.__d = w(r8)), B(r8, r8, false), t4[l6] = null, p8--);
  if (p8)
    for (i6 = 0; i6 < s6; i6++)
      (r8 = t4[i6]) != null && !(131072 & r8.__u) && (r8.__e == e5.__d && (e5.__d = w(r8)), B(r8, r8));
}
function te(e5, _4, t4) {
  var i6, n4;
  if (typeof e5.type == "function") {
    for (i6 = e5.__k, n4 = 0; i6 && n4 < i6.length; n4++)
      i6[n4] && (i6[n4].__ = e5, _4 = te(i6[n4], _4, t4));
    return _4;
  }
  e5.__e != _4 && (t4.insertBefore(e5.__e, _4 || null), _4 = e5.__e);
  do
    _4 = _4 && _4.nextSibling;
  while (_4 != null && _4.nodeType === 8);
  return _4;
}
function se(e5, _4) {
  return _4 = _4 || [], e5 == null || typeof e5 == "boolean" || (F(e5) ? e5.some(function(t4) {
    se(t4, _4);
  }) : _4.push(e5)), _4;
}
function ue(e5, _4, t4, i6) {
  var n4 = e5.key, r8 = e5.type, l6 = t4 - 1, u7 = t4 + 1, c7 = _4[t4];
  if (c7 === null || c7 && n4 == c7.key && r8 === c7.type && !(131072 & c7.__u))
    return t4;
  if (i6 > (c7 != null && !(131072 & c7.__u) ? 1 : 0))
    for (; l6 >= 0 || u7 < _4.length; ) {
      if (l6 >= 0) {
        if ((c7 = _4[l6]) && !(131072 & c7.__u) && n4 == c7.key && r8 === c7.type)
          return l6;
        l6--;
      }
      if (u7 < _4.length) {
        if ((c7 = _4[u7]) && !(131072 & c7.__u) && n4 == c7.key && r8 === c7.type)
          return u7;
        u7++;
      }
    }
  return -1;
}
function q(e5, _4, t4) {
  _4[0] === "-" ? e5.setProperty(_4, t4 ?? "") : e5[_4] = t4 == null ? "" : typeof t4 != "number" || oe.test(_4) ? t4 : t4 + "px";
}
function M(e5, _4, t4, i6, n4) {
  var r8;
  e:
    if (_4 === "style")
      if (typeof t4 == "string")
        e5.style.cssText = t4;
      else {
        if (typeof i6 == "string" && (e5.style.cssText = i6 = ""), i6)
          for (_4 in i6)
            t4 && _4 in t4 || q(e5.style, _4, "");
        if (t4)
          for (_4 in t4)
            i6 && t4[_4] === i6[_4] || q(e5.style, _4, t4[_4]);
      }
    else if (_4[0] === "o" && _4[1] === "n")
      r8 = _4 !== (_4 = _4.replace(/(PointerCapture)$|Capture$/i, "$1")), _4 = _4.toLowerCase() in e5 ? _4.toLowerCase().slice(2) : _4.slice(2), e5.l || (e5.l = {}), e5.l[_4 + r8] = t4, t4 ? i6 ? t4.u = i6.u : (t4.u = Date.now(), e5.addEventListener(_4, r8 ? K : J, r8)) : e5.removeEventListener(_4, r8 ? K : J, r8);
    else {
      if (n4)
        _4 = _4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_4 !== "width" && _4 !== "height" && _4 !== "href" && _4 !== "list" && _4 !== "form" && _4 !== "tabIndex" && _4 !== "download" && _4 !== "rowSpan" && _4 !== "colSpan" && _4 !== "role" && _4 in e5)
        try {
          e5[_4] = t4 ?? "";
          break e;
        } catch {
        }
      typeof t4 == "function" || (t4 == null || t4 === false && _4[4] !== "-" ? e5.removeAttribute(_4) : e5.setAttribute(_4, t4));
    }
}
function J(e5) {
  if (this.l) {
    var _4 = this.l[e5.type + false];
    if (e5.t) {
      if (e5.t <= _4.u)
        return;
    } else
      e5.t = Date.now();
    return _4(a.event ? a.event(e5) : e5);
  }
}
function K(e5) {
  if (this.l)
    return this.l[e5.type + true](a.event ? a.event(e5) : e5);
}
function G(e5, _4, t4, i6, n4, r8, l6, u7, c7, s6) {
  var p8, o7, m9, f8, h9, k6, v4, d10, y6, C8, T8, P8, j8, U5, N5, g7 = _4.type;
  if (_4.constructor !== void 0)
    return null;
  128 & t4.__u && (c7 = !!(32 & t4.__u), r8 = [u7 = _4.__e = t4.__e]), (p8 = a.__b) && p8(_4);
  e:
    if (typeof g7 == "function")
      try {
        if (d10 = _4.props, y6 = (p8 = g7.contextType) && i6[p8.__c], C8 = p8 ? y6 ? y6.props.value : p8.__ : i6, t4.__c ? v4 = (o7 = _4.__c = t4.__c).__ = o7.__E : ("prototype" in g7 && g7.prototype.render ? _4.__c = o7 = new g7(d10, C8) : (_4.__c = o7 = new W(d10, C8), o7.constructor = g7, o7.render = ce), y6 && y6.sub(o7), o7.props = d10, o7.state || (o7.state = {}), o7.context = C8, o7.__n = i6, m9 = o7.__d = true, o7.__h = [], o7._sb = []), o7.__s == null && (o7.__s = o7.state), g7.getDerivedStateFromProps != null && (o7.__s == o7.state && (o7.__s = b({}, o7.__s)), b(o7.__s, g7.getDerivedStateFromProps(d10, o7.__s))), f8 = o7.props, h9 = o7.state, o7.__v = _4, m9)
          g7.getDerivedStateFromProps == null && o7.componentWillMount != null && o7.componentWillMount(), o7.componentDidMount != null && o7.__h.push(o7.componentDidMount);
        else {
          if (g7.getDerivedStateFromProps == null && d10 !== f8 && o7.componentWillReceiveProps != null && o7.componentWillReceiveProps(d10, C8), !o7.__e && (o7.shouldComponentUpdate != null && o7.shouldComponentUpdate(d10, o7.__s, C8) === false || _4.__v === t4.__v)) {
            for (_4.__v !== t4.__v && (o7.props = d10, o7.state = o7.__s, o7.__d = false), _4.__e = t4.__e, _4.__k = t4.__k, _4.__k.forEach(function(L9) {
              L9 && (L9.__ = _4);
            }), T8 = 0; T8 < o7._sb.length; T8++)
              o7.__h.push(o7._sb[T8]);
            o7._sb = [], o7.__h.length && l6.push(o7);
            break e;
          }
          o7.componentWillUpdate != null && o7.componentWillUpdate(d10, o7.__s, C8), o7.componentDidUpdate != null && o7.__h.push(function() {
            o7.componentDidUpdate(f8, h9, k6);
          });
        }
        if (o7.context = C8, o7.props = d10, o7.__P = e5, o7.__e = false, P8 = a.__r, j8 = 0, "prototype" in g7 && g7.prototype.render) {
          for (o7.state = o7.__s, o7.__d = false, P8 && P8(_4), p8 = o7.render(o7.props, o7.state, o7.context), U5 = 0; U5 < o7._sb.length; U5++)
            o7.__h.push(o7._sb[U5]);
          o7._sb = [];
        } else
          do
            o7.__d = false, P8 && P8(_4), p8 = o7.render(o7.props, o7.state, o7.context), o7.state = o7.__s;
          while (o7.__d && ++j8 < 25);
        o7.state = o7.__s, o7.getChildContext != null && (i6 = b(b({}, i6), o7.getChildContext())), m9 || o7.getSnapshotBeforeUpdate == null || (k6 = o7.getSnapshotBeforeUpdate(f8, h9)), _e(e5, F(N5 = p8 != null && p8.type === H && p8.key == null ? p8.props.children : p8) ? N5 : [N5], _4, t4, i6, n4, r8, l6, u7, c7, s6), o7.base = _4.__e, _4.__u &= -161, o7.__h.length && l6.push(o7), v4 && (o7.__E = o7.__ = null);
      } catch (L9) {
        _4.__v = null, c7 || r8 != null ? (_4.__e = u7, _4.__u |= c7 ? 160 : 32, r8[r8.indexOf(u7)] = null) : (_4.__e = t4.__e, _4.__k = t4.__k), a.__e(L9, _4, t4);
      }
    else
      r8 == null && _4.__v === t4.__v ? (_4.__k = t4.__k, _4.__e = t4.__e) : _4.__e = fe(t4.__e, _4, t4, i6, n4, r8, l6, c7, s6);
  (p8 = a.diffed) && p8(_4);
}
function R(e5, _4, t4) {
  for (var i6 = 0; i6 < t4.length; i6++)
    V(t4[i6], t4[++i6], t4[++i6]);
  a.__c && a.__c(_4, e5), e5.some(function(n4) {
    try {
      e5 = n4.__h, n4.__h = [], e5.some(function(r8) {
        r8.call(n4);
      });
    } catch (r8) {
      a.__e(r8, n4.__v);
    }
  });
}
function fe(e5, _4, t4, i6, n4, r8, l6, u7, c7) {
  var s6, p8, o7, m9, f8, h9, k6, v4 = t4.props, d10 = _4.props, y6 = _4.type;
  if (y6 === "svg" && (n4 = true), r8 != null) {
    for (s6 = 0; s6 < r8.length; s6++)
      if ((f8 = r8[s6]) && "setAttribute" in f8 == !!y6 && (y6 ? f8.localName === y6 : f8.nodeType === 3)) {
        e5 = f8, r8[s6] = null;
        break;
      }
  }
  if (e5 == null) {
    if (y6 === null)
      return document.createTextNode(d10);
    e5 = n4 ? document.createElementNS("http://www.w3.org/2000/svg", y6) : document.createElement(y6, d10.is && d10), r8 = null, u7 = false;
  }
  if (y6 === null)
    v4 === d10 || u7 && e5.data === d10 || (e5.data = d10);
  else {
    if (r8 = r8 && D.call(e5.childNodes), v4 = t4.props || E, !u7 && r8 != null)
      for (v4 = {}, s6 = 0; s6 < e5.attributes.length; s6++)
        v4[(f8 = e5.attributes[s6]).name] = f8.value;
    for (s6 in v4)
      f8 = v4[s6], s6 == "children" || (s6 == "dangerouslySetInnerHTML" ? o7 = f8 : s6 === "key" || s6 in d10 || M(e5, s6, null, f8, n4));
    for (s6 in d10)
      f8 = d10[s6], s6 == "children" ? m9 = f8 : s6 == "dangerouslySetInnerHTML" ? p8 = f8 : s6 == "value" ? h9 = f8 : s6 == "checked" ? k6 = f8 : s6 === "key" || u7 && typeof f8 != "function" || v4[s6] === f8 || M(e5, s6, f8, v4[s6], n4);
    if (p8)
      u7 || o7 && (p8.__html === o7.__html || p8.__html === e5.innerHTML) || (e5.innerHTML = p8.__html), _4.__k = [];
    else if (o7 && (e5.innerHTML = ""), _e(e5, F(m9) ? m9 : [m9], _4, t4, i6, n4 && y6 !== "foreignObject", r8, l6, r8 ? r8[0] : t4.__k && w(t4, 0), u7, c7), r8 != null)
      for (s6 = r8.length; s6--; )
        r8[s6] != null && Z(r8[s6]);
    u7 || (s6 = "value", h9 !== void 0 && (h9 !== e5[s6] || y6 === "progress" && !h9 || y6 === "option" && h9 !== v4[s6]) && M(e5, s6, h9, v4[s6], false), s6 = "checked", k6 !== void 0 && k6 !== e5[s6] && M(e5, s6, k6, v4[s6], false));
  }
  return e5;
}
function V(e5, _4, t4) {
  try {
    typeof e5 == "function" ? e5(_4) : e5.current = _4;
  } catch (i6) {
    a.__e(i6, t4);
  }
}
function B(e5, _4, t4) {
  var i6, n4;
  if (a.unmount && a.unmount(e5), (i6 = e5.ref) && (i6.current && i6.current !== e5.__e || V(i6, null, _4)), (i6 = e5.__c) != null) {
    if (i6.componentWillUnmount)
      try {
        i6.componentWillUnmount();
      } catch (r8) {
        a.__e(r8, _4);
      }
    i6.base = i6.__P = null, e5.__c = void 0;
  }
  if (i6 = e5.__k)
    for (n4 = 0; n4 < i6.length; n4++)
      i6[n4] && B(i6[n4], _4, t4 || typeof e5.type != "function");
  t4 || e5.__e == null || Z(e5.__e), e5.__ = e5.__e = e5.__d = void 0;
}
function ce(e5, _4, t4) {
  return this.constructor(e5, t4);
}
function pe(e5, _4, t4) {
  var i6, n4, r8, l6;
  a.__ && a.__(e5, _4), n4 = (i6 = typeof t4 == "function") ? null : t4 && t4.__k || _4.__k, r8 = [], l6 = [], G(_4, e5 = (!i6 && t4 || _4).__k = re(H, null, [e5]), n4 || E, E, _4.ownerSVGElement !== void 0, !i6 && t4 ? [t4] : n4 ? null : _4.firstChild ? D.call(_4.childNodes) : null, r8, !i6 && t4 ? t4 : n4 ? n4.__e : _4.firstChild, i6, l6), e5.__d = void 0, R(r8, e5, l6);
}
function ae(e5, _4) {
  pe(e5, _4, ae);
}
function he(e5, _4, t4) {
  var i6, n4, r8, l6, u7 = b({}, e5.props);
  for (r8 in e5.type && e5.type.defaultProps && (l6 = e5.type.defaultProps), _4)
    r8 == "key" ? i6 = _4[r8] : r8 == "ref" ? n4 = _4[r8] : u7[r8] = _4[r8] === void 0 && l6 !== void 0 ? l6[r8] : _4[r8];
  return arguments.length > 2 && (u7.children = arguments.length > 3 ? D.call(arguments, 2) : t4), S(e5.type, u7, i6 || e5.key, n4 || e5.ref, null);
}
function ve(e5, _4) {
  var t4 = { __c: _4 = "__cC" + Y++, __: e5, Consumer: function(i6, n4) {
    return i6.children(n4);
  }, Provider: function(i6) {
    var n4, r8;
    return this.getChildContext || (n4 = [], (r8 = {})[_4] = this, this.getChildContext = function() {
      return r8;
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
    }), i6.children;
  } };
  return t4.Provider.__ = t4.Consumer.contextType = t4;
}
D = O.slice, a = { __e: function(e5, _4, t4, i6) {
  for (var n4, r8, l6; _4 = _4.__; )
    if ((n4 = _4.__c) && !n4.__)
      try {
        if ((r8 = n4.constructor) && r8.getDerivedStateFromError != null && (n4.setState(r8.getDerivedStateFromError(e5)), l6 = n4.__d), n4.componentDidCatch != null && (n4.componentDidCatch(e5, i6 || {}), l6 = n4.__d), l6)
          return n4.__E = n4;
      } catch (u7) {
        e5 = u7;
      }
  throw e5;
} }, Q = 0, ne = function(e5) {
  return e5 != null && e5.constructor == null;
}, W.prototype.setState = function(e5, _4) {
  var t4;
  t4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e5 == "function" && (e5 = e5(b({}, t4), this.props)), e5 && b(t4, e5), e5 != null && this.__v && (_4 && this._sb.push(_4), I(this));
}, W.prototype.forceUpdate = function(e5) {
  this.__v && (this.__e = true, e5 && this.__h.push(e5), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e5, _4) {
  return e5.__v.__b - _4.__v.__b;
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
function l(t4, _4) {
  o.__h && o.__h(r, t4, v || _4), v = 0;
  var u7 = r.__H || (r.__H = { __: [], __h: [] });
  return t4 >= u7.__.length && u7.__.push({ __V: p }), u7.__[t4];
}
function I2(t4) {
  return v = 1, R2(U, t4);
}
function R2(t4, _4, u7) {
  var n4 = l(c++, 2);
  if (n4.t = t4, !n4.__c && (n4.__ = [u7 ? u7(_4) : U(void 0, _4), function(a5) {
    var f8 = n4.__N ? n4.__N[0] : n4.__[0], s6 = n4.t(f8, a5);
    f8 !== s6 && (n4.__N = [s6, n4.__[1]], n4.__c.setState({}));
  }], n4.__c = r, !r.u)) {
    var i6 = function(a5, f8, s6) {
      if (!n4.__c.__H)
        return true;
      var m9 = n4.__c.__H.__.filter(function(e5) {
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
      }), !(!V7 && n4.__c.props === a5) && (!h9 || h9.call(this, a5, f8, s6));
    };
    r.u = true;
    var h9 = r.shouldComponentUpdate, N5 = r.componentWillUpdate;
    r.componentWillUpdate = function(a5, f8, s6) {
      if (this.__e) {
        var m9 = h9;
        h9 = void 0, i6(a5, f8, s6), h9 = m9;
      }
      N5 && N5.call(this, a5, f8, s6);
    }, r.shouldComponentUpdate = i6;
  }
  return n4.__N || n4.__;
}
function z2(t4, _4) {
  var u7 = l(c++, 3);
  !o.__s && y(u7.__H, _4) && (u7.__ = t4, u7.i = _4, r.__H.__h.push(u7));
}
function S2(t4, _4) {
  var u7 = l(c++, 4);
  !o.__s && y(u7.__H, _4) && (u7.__ = t4, u7.i = _4, r.__h.push(u7));
}
function L(t4) {
  return v = 5, T(function() {
    return { current: t4 };
  }, []);
}
function M2(t4, _4, u7) {
  v = 6, S2(function() {
    return typeof t4 == "function" ? (t4(_4()), function() {
      return t4(null);
    }) : t4 ? (t4.current = _4(), function() {
      return t4.current = null;
    }) : void 0;
  }, u7 == null ? u7 : u7.concat(t4));
}
function T(t4, _4) {
  var u7 = l(c++, 7);
  return y(u7.__H, _4) ? (u7.__V = t4(), u7.i = _4, u7.__h = t4, u7.__V) : u7.__;
}
function G2(t4, _4) {
  return v = 8, T(function() {
    return t4;
  }, _4);
}
function J2(t4) {
  var _4 = r.context[t4.__c], u7 = l(c++, 9);
  return u7.c = t4, _4 ? (u7.__ == null && (u7.__ = true, _4.sub(r)), _4.props.value) : t4.__;
}
function K2(t4, _4) {
  o.useDebugValue && o.useDebugValue(_4 ? _4(t4) : t4);
}
function O2(t4) {
  var _4 = l(c++, 10), u7 = I2();
  return _4.__ = t4, r.componentDidCatch || (r.componentDidCatch = function(n4, i6) {
    _4.__ && _4.__(n4, i6), u7[1](n4);
  }), [u7[0], function() {
    u7[1](void 0);
  }];
}
function Q2() {
  var t4 = l(c++, 11);
  if (!t4.__) {
    for (var _4 = r.__v; _4 !== null && !_4.__m && _4.__ !== null; )
      _4 = _4.__;
    var u7 = _4.__m || (_4.__m = [0, 0]);
    t4.__ = "P" + u7[0] + "-" + u7[1]++;
  }
  return t4.__;
}
function W2() {
  for (var t4; t4 = x2.shift(); )
    if (t4.__P && t4.__H)
      try {
        t4.__H.__h.forEach(d), t4.__H.__h.forEach(E2), t4.__H.__h = [];
      } catch (_4) {
        t4.__H.__h = [], o.__e(_4, t4.__v);
      }
}
o.__b = function(t4) {
  r = null, g && g(t4);
}, o.__ = function(t4, _4) {
  t4 && _4.__k && _4.__k.__m && (t4.__m = _4.__k.__m), k && k(t4, _4);
}, o.__r = function(t4) {
  C && C(t4), c = 0;
  var _4 = (r = t4.__c).__H;
  _4 && (H2 === r ? (_4.__h = [], r.__h = [], _4.__.forEach(function(u7) {
    u7.__N && (u7.__ = u7.__N), u7.__V = p, u7.__N = u7.i = void 0;
  })) : (_4.__h.forEach(d), _4.__h.forEach(E2), _4.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t4) {
  A2 && A2(t4);
  var _4 = t4.__c;
  _4 && _4.__H && (_4.__H.__h.length && (x2.push(_4) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _4.__H.__.forEach(function(u7) {
    u7.i && (u7.__H = u7.i), u7.__V !== p && (u7.__ = u7.__V), u7.i = void 0, u7.__V = p;
  })), H2 = r = null;
}, o.__c = function(t4, _4) {
  _4.some(function(u7) {
    try {
      u7.__h.forEach(d), u7.__h = u7.__h.filter(function(n4) {
        return !n4.__ || E2(n4);
      });
    } catch (n4) {
      _4.some(function(i6) {
        i6.__h && (i6.__h = []);
      }), _4 = [], o.__e(n4, u7.__v);
    }
  }), D2 && D2(t4, _4);
}, o.unmount = function(t4) {
  F2 && F2(t4);
  var _4, u7 = t4.__c;
  u7 && u7.__H && (u7.__H.__.forEach(function(n4) {
    try {
      d(n4);
    } catch (i6) {
      _4 = i6;
    }
  }), u7.__H = void 0, _4 && o.__e(_4, u7.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t4) {
  var _4, u7 = function() {
    clearTimeout(n4), q2 && cancelAnimationFrame(_4), setTimeout(t4);
  }, n4 = setTimeout(u7, 100);
  q2 && (_4 = requestAnimationFrame(u7));
}
function d(t4) {
  var _4 = r, u7 = t4.__c;
  typeof u7 == "function" && (t4.__c = void 0, u7()), r = _4;
}
function E2(t4) {
  var _4 = r;
  t4.__c = t4.__(), r = _4;
}
function y(t4, _4) {
  return !t4 || t4.length !== _4.length || _4.some(function(u7, n4) {
    return u7 !== t4[n4];
  });
}
function U(t4, _4) {
  return typeof _4 == "function" ? _4(t4) : _4;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e5, t4) {
  for (var n4 in t4)
    e5[n4] = t4[n4];
  return e5;
}
function b3(e5, t4) {
  for (var n4 in e5)
    if (n4 !== "__source" && !(n4 in t4))
      return true;
  for (var r8 in t4)
    if (r8 !== "__source" && e5[r8] !== t4[r8])
      return true;
  return false;
}
function C2(e5, t4) {
  this.props = e5, this.context = t4;
}
function Q3(e5, t4) {
  function n4(o7) {
    var u7 = this.props.ref, a5 = u7 == o7.ref;
    return !a5 && u7 && (u7.call ? u7(null) : u7.current = null), t4 ? !t4(this.props, o7) || !a5 : b3(this.props, o7);
  }
  function r8(o7) {
    return this.shouldComponentUpdate = n4, re(e5, o7);
  }
  return r8.displayName = "Memo(" + (e5.displayName || e5.name) + ")", r8.prototype.isReactComponent = true, r8.__f = true, r8;
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
  function t4(n4) {
    var r8 = L2({}, n4);
    return delete r8.ref, e5(r8, n4.ref || null);
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
a.__e = function(e5, t4, n4, r8) {
  if (e5.then) {
    for (var o7, u7 = t4; u7 = u7.__; )
      if ((o7 = u7.__c) && o7.__c)
        return t4.__e == null && (t4.__e = n4.__e, t4.__k = n4.__k), o7.__c(e5, t4);
  }
  ne2(e5, t4, n4, r8);
};
var x3 = a.unmount;
function T2(e5, t4, n4) {
  return e5 && (e5.__c && e5.__c.__H && (e5.__c.__H.__.forEach(function(r8) {
    typeof r8.__c == "function" && r8.__c();
  }), e5.__c.__H = null), (e5 = L2({}, e5)).__c != null && (e5.__c.__P === n4 && (e5.__c.__P = t4), e5.__c = null), e5.__k = e5.__k && e5.__k.map(function(r8) {
    return T2(r8, t4, n4);
  })), e5;
}
function A3(e5, t4, n4) {
  return e5 && n4 && (e5.__v = null, e5.__k = e5.__k && e5.__k.map(function(r8) {
    return A3(r8, t4, n4);
  }), e5.__c && e5.__c.__P === t4 && (e5.__e && n4.appendChild(e5.__e), e5.__c.__e = true, e5.__c.__P = n4)), e5;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e5) {
  var t4 = e5.__.__c;
  return t4 && t4.__a && t4.__a(e5);
}
function re2(e5) {
  var t4, n4, r8;
  function o7(u7) {
    if (t4 || (t4 = e5()).then(function(a5) {
      n4 = a5.default || a5;
    }, function(a5) {
      r8 = a5;
    }), r8)
      throw r8;
    if (!n4)
      throw t4;
    return re(n4, u7);
  }
  return o7.displayName = "Lazy", o7.__f = true, o7;
}
function p2() {
  this.u = null, this.o = null;
}
a.unmount = function(e5) {
  var t4 = e5.__c;
  t4 && t4.__R && t4.__R(), t4 && 32 & e5.__u && (e5.type = null), x3 && x3(e5);
}, (h.prototype = new W()).__c = function(e5, t4) {
  var n4 = t4.__c, r8 = this;
  r8.t == null && (r8.t = []), r8.t.push(n4);
  var o7 = F3(r8.__v), u7 = false, a5 = function() {
    u7 || (u7 = true, n4.__R = null, o7 ? o7(l6) : l6());
  };
  n4.__R = a5;
  var l6 = function() {
    if (!--r8.__u) {
      if (r8.state.__a) {
        var s6 = r8.state.__a;
        r8.__v.__k[0] = A3(s6, s6.__c.__P, s6.__c.__O);
      }
      var g7;
      for (r8.setState({ __a: r8.__b = null }); g7 = r8.t.pop(); )
        g7.forceUpdate();
    }
  };
  r8.__u++ || 32 & t4.__u || r8.setState({ __a: r8.__b = r8.__v.__k[0] }), e5.then(a5, a5);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e5, t4) {
  if (this.__b) {
    if (this.__v.__k) {
      var n4 = document.createElement("div"), r8 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n4, r8.__O = r8.__P);
    }
    this.__b = null;
  }
  var o7 = t4.__a && re(H, null, e5.fallback);
  return o7 && (o7.__u &= -33), [re(H, null, t4.__a ? null : e5.children), o7];
};
var k2 = function(e5, t4, n4) {
  if (++n4[1] === n4[0] && e5.o.delete(t4), e5.props.revealOrder && (e5.props.revealOrder[0] !== "t" || !e5.o.size))
    for (n4 = e5.u; n4; ) {
      for (; n4.length > 3; )
        n4.pop()();
      if (n4[1] < n4[0])
        break;
      e5.u = n4 = n4[2];
    }
};
function oe2(e5) {
  return this.getChildContext = function() {
    return e5.context;
  }, e5.children;
}
function ue2(e5) {
  var t4 = this, n4 = e5.i;
  t4.componentWillUnmount = function() {
    pe(null, t4.l), t4.l = null, t4.i = null;
  }, t4.i && t4.i !== n4 && t4.componentWillUnmount(), t4.l || (t4.i = n4, t4.l = { nodeType: 1, parentNode: n4, childNodes: [], appendChild: function(r8) {
    this.childNodes.push(r8), t4.i.appendChild(r8);
  }, insertBefore: function(r8, o7) {
    this.childNodes.push(r8), t4.i.appendChild(r8);
  }, removeChild: function(r8) {
    this.childNodes.splice(this.childNodes.indexOf(r8) >>> 1, 1), t4.i.removeChild(r8);
  } }), pe(re(oe2, { context: t4.context }, e5.__v), t4.l);
}
function ae2(e5, t4) {
  var n4 = re(ue2, { __v: e5, i: t4 });
  return n4.containerInfo = t4, n4;
}
(p2.prototype = new W()).__a = function(e5) {
  var t4 = this, n4 = F3(t4.__v), r8 = t4.o.get(e5);
  return r8[0]++, function(o7) {
    var u7 = function() {
      t4.props.revealOrder ? (r8.push(o7), k2(t4, e5, r8)) : o7();
    };
    n4 ? n4(u7) : u7();
  };
}, p2.prototype.render = function(e5) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t4 = se(e5.children);
  e5.revealOrder && e5.revealOrder[0] === "b" && t4.reverse();
  for (var n4 = t4.length; n4--; )
    this.o.set(t4[n4], this.u = [1, 0, this.u]);
  return e5.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e5 = this;
  this.o.forEach(function(t4, n4) {
    k2(e5, n4, t4);
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
function fe2(e5, t4, n4) {
  return t4.__k == null && (t4.textContent = ""), pe(e5, t4), typeof n4 == "function" && n4(), e5 ? e5.__c : null;
}
function pe2(e5, t4, n4) {
  return ae(e5, t4), typeof n4 == "function" && n4(), e5 ? e5.__c : null;
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
    var n4 = t4.props, r8 = t4.type, o7 = {};
    for (var u7 in n4) {
      var a5 = n4[u7];
      if (!(u7 === "value" && "defaultValue" in n4 && a5 == null || _e2 && u7 === "children" && r8 === "noscript" || u7 === "class" || u7 === "className")) {
        var l6 = u7.toLowerCase();
        u7 === "defaultValue" && "value" in n4 && n4.value == null ? u7 = "value" : u7 === "download" && a5 === true ? a5 = "" : l6 === "translate" && a5 === "no" ? a5 = false : l6 === "ondoubleclick" ? u7 = "ondblclick" : l6 !== "onchange" || r8 !== "input" && r8 !== "textarea" || ce2(n4.type) ? l6 === "onfocus" ? u7 = "onfocusin" : l6 === "onblur" ? u7 = "onfocusout" : le2.test(u7) ? u7 = l6 : r8.indexOf("-") === -1 && ie2.test(u7) ? u7 = u7.replace(se2, "-$&").toLowerCase() : a5 === null && (a5 = void 0) : l6 = u7 = "oninput", l6 === "oninput" && o7[u7 = l6] && (u7 = "oninputCapture"), o7[u7] = a5;
      }
    }
    r8 == "select" && o7.multiple && Array.isArray(o7.value) && (o7.value = se(n4.children).forEach(function(s6) {
      s6.props.selected = o7.value.indexOf(s6.props.value) != -1;
    })), r8 == "select" && o7.defaultValue != null && (o7.value = se(n4.children).forEach(function(s6) {
      s6.props.selected = o7.multiple ? o7.defaultValue.indexOf(s6.props.value) != -1 : o7.defaultValue == s6.props.value;
    })), n4.class && !n4.className ? (o7.class = n4.class, Object.defineProperty(o7, "className", me)) : (n4.className && !n4.class || n4.class && n4.className) && (o7.class = o7.className = n4.className), t4.props = o7;
  }(e5), e5.$$typeof = V2, P && P(e5);
};
var w2 = a.__r;
a.__r = function(e5) {
  w2 && w2(e5), S3 = e5.__c;
};
var U2 = a.diffed;
a.diffed = function(e5) {
  U2 && U2(e5);
  var t4 = e5.props, n4 = e5.__e;
  n4 != null && e5.type === "textarea" && "value" in t4 && t4.value !== n4.value && (n4.value = t4.value == null ? "" : t4.value), S3 = null;
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
  var n4 = t4(), r8 = I2({ h: { __: n4, v: t4 } }), o7 = r8[0].h, u7 = r8[1];
  return S2(function() {
    o7.__ = n4, o7.v = t4, y2(o7) && u7({ h: o7 });
  }, [e5, n4, t4]), z2(function() {
    return y2(o7) && u7({ h: o7 }), e5(function() {
      y2(o7) && u7({ h: o7 });
    });
  }, [e5]), n4;
}
function y2(e5) {
  var t4, n4, r8 = e5.v, o7 = e5.__;
  try {
    var u7 = r8();
    return !((t4 = o7) === (n4 = u7) && (t4 !== 0 || 1 / t4 == 1 / n4) || t4 != t4 && n4 != n4);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n4, t4) => {
  for (var e5 in t4)
    s(n4, e5, { get: t4[e5], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n4) {
    for (var t4 = 1; t4 < arguments.length; t4++) {
      var e5 = arguments[t4];
      for (var a5 in e5)
        Object.prototype.hasOwnProperty.call(e5, a5) && (n4[a5] = e5[a5]);
    }
    return n4;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v133/@radix-ui/number@1.0.1/denonext/number.mjs
function c2(a5, [t4, e5]) {
  return Math.min(e5, Math.max(t4, a5));
}

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e5, f8, { checkForDefaultPrevented: t4 = true } = {}) {
  return function(c7) {
    if (e5?.(c7), t4 === false || !c7.defaultPrevented)
      return f8?.(c7);
  };
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t4, c7 = []) {
  let o7 = [];
  function a5(r8, e5) {
    let n4 = ve(e5), s6 = o7.length;
    o7 = [...o7, e5];
    function f8(d10) {
      let { scope: i6, children: x10, ...$5 } = d10, h9 = i6?.[t4][s6] || n4, S10 = T(() => $5, Object.values($5));
      return re(h9.Provider, { value: S10 }, x10);
    }
    function v4(d10, i6) {
      let x10 = i6?.[t4][s6] || n4, $5 = J2(x10);
      if ($5)
        return $5;
      if (e5 !== void 0)
        return e5;
      throw new Error(`\`${d10}\` must be used within \`${r8}\``);
    }
    return f8.displayName = r8 + "Provider", [f8, v4];
  }
  let u7 = () => {
    let r8 = o7.map((e5) => ve(e5));
    return function(n4) {
      let s6 = n4?.[t4] || r8;
      return T(() => ({ [`__scope${t4}`]: { ...n4, [t4]: s6 } }), [n4, s6]);
    };
  };
  return u7.scopeName = t4, [a5, C3(u7, ...c7)];
}
function C3(...t4) {
  let c7 = t4[0];
  if (t4.length === 1)
    return c7;
  let o7 = () => {
    let a5 = t4.map((u7) => ({ useScope: u7(), scopeName: u7.scopeName }));
    return function(r8) {
      let e5 = a5.reduce((n4, { useScope: s6, scopeName: f8 }) => {
        let d10 = s6(r8)[`__scope${f8}`];
        return { ...n4, ...d10 };
      }, {});
      return T(() => ({ [`__scope${c7.scopeName}`]: e5 }), [e5]);
    };
  };
  return o7.scopeName = c7.scopeName, o7;
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

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n4, t4) => {
  let { children: e5, ...r8 } = n4, o7 = te2.toArray(e5), l6 = o7.find(I3);
  if (l6) {
    let c7 = l6.props.children, a5 = o7.map((m9) => m9 === l6 ? te2.count(c7) > 1 ? te2.only(null) : m(c7) ? c7.props.children : null : m9);
    return re($2, p3({}, r8, { ref: t4 }), m(c7) ? Ee(c7, void 0, a5) : null);
  }
  return re($2, p3({}, r8, { ref: t4 }), e5);
});
b4.displayName = "Slot";
var $2 = ee2((n4, t4) => {
  let { children: e5, ...r8 } = n4;
  return m(e5) ? Ee(e5, { ...X3(r8, e5.props), ref: t4 ? t(t4, e5.ref) : e5.ref }) : te2.count(e5) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n4 }) => re(H, null, n4);
function I3(n4) {
  return m(n4) && n4.type === y3;
}
function X3(n4, t4) {
  let e5 = { ...t4 };
  for (let r8 in t4) {
    let o7 = n4[r8], l6 = t4[r8];
    /^on[A-Z]/.test(r8) ? o7 && l6 ? e5[r8] = (...a5) => {
      l6(...a5), o7(...a5);
    } : o7 && (e5[r8] = o7) : r8 === "style" ? e5[r8] = { ...o7, ...l6 } : r8 === "className" && (e5[r8] = [o7, l6].filter(Boolean).join(" "));
  }
  return { ...n4, ...e5 };
}

// https://esm.sh/v132/@radix-ui/react-collection@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collection.mjs
function _2(s6) {
  let a5 = s6 + "CollectionProvider", [I8, $5] = _(a5), [E9, f8] = I8(a5, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m9 = (r8) => {
    let { scope: e5, children: l6 } = r8, o7 = Te.useRef(null), c7 = Te.useRef(/* @__PURE__ */ new Map()).current;
    return Te.createElement(E9, { scope: e5, itemMap: c7, collectionRef: o7 }, l6);
  }, d10 = s6 + "CollectionSlot", p8 = Te.forwardRef((r8, e5) => {
    let { scope: l6, children: o7 } = r8, c7 = f8(d10, l6), n4 = u2(e5, c7.collectionRef);
    return Te.createElement(b4, { ref: n4 }, o7);
  }), u7 = s6 + "CollectionItemSlot", C8 = "data-radix-collection-item", R5 = Te.forwardRef((r8, e5) => {
    let { scope: l6, children: o7, ...c7 } = r8, n4 = Te.useRef(null), M9 = u2(e5, n4), i6 = f8(u7, l6);
    return Te.useEffect(() => (i6.itemMap.set(n4, { ref: n4, ...c7 }), () => void i6.itemMap.delete(n4))), Te.createElement(b4, { [C8]: "", ref: M9 }, o7);
  });
  function h9(r8) {
    let e5 = f8(s6 + "CollectionConsumer", r8);
    return Te.useCallback(() => {
      let o7 = e5.collectionRef.current;
      if (!o7)
        return [];
      let c7 = Array.from(o7.querySelectorAll(`[${C8}]`));
      return Array.from(e5.itemMap.values()).sort((i6, v4) => c7.indexOf(i6.ref.current) - c7.indexOf(v4.ref.current));
    }, [e5.collectionRef, e5.itemMap]);
  }
  return [{ Provider: m9, Slot: p8, ItemSlot: R5 }, h9, $5];
}

// https://esm.sh/v132/@radix-ui/react-direction@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-direction.mjs
var r3 = ve(void 0);
function i(e5) {
  let t4 = J2(r3);
  return e5 || t4 || "ltr";
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t4, e5) => {
  let f8 = ee2((r8, o7) => {
    let { asChild: s6, ...a5 } = r8, i6 = s6 ? b4 : e5;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i6, p3({}, a5, { ref: o7 }));
  });
  return f8.displayName = `Primitive.${e5}`, { ...t4, [e5]: f8 };
}, {});
function E3(t4, e5) {
  t4 && Re(() => t4.dispatchEvent(e5));
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f8) {
  let e5 = L(f8);
  return z2(() => {
    e5.current = f8;
  }), T(() => (...u7) => {
    var r8;
    return (r8 = e5.current) === null || r8 === void 0 ? void 0 : r8.call(e5, ...u7);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i2(d10, e5 = globalThis?.document) {
  let a5 = l2(d10);
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
var G3 = ee2((n4, e5) => {
  var o7;
  let { disableOutsidePointerEvents: i6 = false, onEscapeKeyDown: t4, onPointerDownOutside: r8, onFocusOutside: f8, onInteractOutside: d10, onDismiss: l6, ...v4 } = n4, a5 = J2(F4), [c7, S10] = I2(null), u7 = (o7 = c7?.ownerDocument) !== null && o7 !== void 0 ? o7 : globalThis?.document, [, W7] = I2({}), A6 = u2(e5, (s6) => S10(s6)), y6 = Array.from(a5.layers), [N5] = [...a5.layersWithOutsidePointerEventsDisabled].slice(-1), _4 = y6.indexOf(N5), D6 = c7 ? y6.indexOf(c7) : -1, U5 = a5.layersWithOutsidePointerEventsDisabled.size > 0, w9 = D6 >= _4, z7 = Q4((s6) => {
    let $5 = s6.target, P8 = [...a5.branches].some((E9) => E9.contains($5));
    !w9 || P8 || (r8?.(s6), d10?.(s6), s6.defaultPrevented || l6?.());
  }, u7), O8 = V3((s6) => {
    let $5 = s6.target;
    [...a5.branches].some((E9) => E9.contains($5)) || (f8?.(s6), d10?.(s6), s6.defaultPrevented || l6?.());
  }, u7);
  return i2((s6) => {
    D6 === a5.layers.size - 1 && (t4?.(s6), !s6.defaultPrevented && l6 && (s6.preventDefault(), l6()));
  }, u7), z2(() => {
    if (c7)
      return i6 && (a5.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u7.body.style.pointerEvents, u7.body.style.pointerEvents = "none"), a5.layersWithOutsidePointerEventsDisabled.add(c7)), a5.layers.add(c7), L3(), () => {
        i6 && a5.layersWithOutsidePointerEventsDisabled.size === 1 && (u7.body.style.pointerEvents = g2);
      };
  }, [c7, u7, i6, a5]), z2(() => () => {
    c7 && (a5.layers.delete(c7), a5.layersWithOutsidePointerEventsDisabled.delete(c7), L3());
  }, [c7, a5]), z2(() => {
    let s6 = () => W7({});
    return document.addEventListener(h2, s6), () => document.removeEventListener(h2, s6);
  }, []), re(u3.div, p3({}, v4, { ref: A6, style: { pointerEvents: U5 ? w9 ? "auto" : "none" : void 0, ...n4.style }, onFocusCapture: o3(n4.onFocusCapture, O8.onFocusCapture), onBlurCapture: o3(n4.onBlurCapture, O8.onBlurCapture), onPointerDownCapture: o3(n4.onPointerDownCapture, z7.onPointerDownCapture) }));
});
var J3 = ee2((n4, e5) => {
  let o7 = J2(F4), i6 = L(null), t4 = u2(e5, i6);
  return z2(() => {
    let r8 = i6.current;
    if (r8)
      return o7.branches.add(r8), () => {
        o7.branches.delete(r8);
      };
  }, [o7.branches]), re(u3.div, p3({}, n4, { ref: t4 }));
});
function Q4(n4, e5 = globalThis?.document) {
  let o7 = l2(n4), i6 = L(false), t4 = L(() => {
  });
  return z2(() => {
    let r8 = (d10) => {
      if (d10.target && !i6.current) {
        let v4 = function() {
          I4(X4, o7, l6, { discrete: true });
        }, l6 = { originalEvent: d10 };
        d10.pointerType === "touch" ? (e5.removeEventListener("click", t4.current), t4.current = v4, e5.addEventListener("click", t4.current, { once: true })) : v4();
      } else
        e5.removeEventListener("click", t4.current);
      i6.current = false;
    }, f8 = window.setTimeout(() => {
      e5.addEventListener("pointerdown", r8);
    }, 0);
    return () => {
      window.clearTimeout(f8), e5.removeEventListener("pointerdown", r8), e5.removeEventListener("click", t4.current);
    };
  }, [e5, o7]), { onPointerDownCapture: () => i6.current = true };
}
function V3(n4, e5 = globalThis?.document) {
  let o7 = l2(n4), i6 = L(false);
  return z2(() => {
    let t4 = (r8) => {
      r8.target && !i6.current && I4(Y2, o7, { originalEvent: r8 }, { discrete: false });
    };
    return e5.addEventListener("focusin", t4), () => e5.removeEventListener("focusin", t4);
  }, [e5, o7]), { onFocusCapture: () => i6.current = true, onBlurCapture: () => i6.current = false };
}
function L3() {
  let n4 = new CustomEvent(h2);
  document.dispatchEvent(n4);
}
function I4(n4, e5, o7, { discrete: i6 }) {
  let t4 = o7.originalEvent.target, r8 = new CustomEvent(n4, { bubbles: false, cancelable: true, detail: o7 });
  e5 && t4.addEventListener(n4, e5, { once: true }), i6 ? E3(t4, r8) : t4.dispatchEvent(r8);
}

// https://esm.sh/v132/@radix-ui/react-focus-guards@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-guards.mjs
var d4 = 0;
function c3() {
  z2(() => {
    var e5, t4;
    let a5 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e5 = a5[0]) !== null && e5 !== void 0 ? e5 : r4()), document.body.insertAdjacentElement("beforeend", (t4 = a5[1]) !== null && t4 !== void 0 ? t4 : r4()), d4++, () => {
      d4 === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o7) => o7.remove()), d4--;
    };
  }, []);
}
function r4() {
  let e5 = document.createElement("span");
  return e5.setAttribute("data-radix-focus-guard", ""), e5.tabIndex = 0, e5.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e5;
}

// https://esm.sh/v132/@radix-ui/react-focus-scope@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-scope.mjs
var E4 = "focusScope.autoFocusOnMount";
var b5 = "focusScope.autoFocusOnUnmount";
var S4 = { bubbles: false, cancelable: true };
var Q5 = ee2((e5, n4) => {
  let { loop: t4 = false, trapped: a5 = false, onMountAutoFocus: m9, onUnmountAutoFocus: L9, ...R5 } = e5, [o7, g7] = I2(null), $5 = l2(m9), v4 = l2(L9), p8 = L(null), H5 = u2(n4, (s6) => g7(s6)), i6 = L({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  z2(() => {
    if (a5) {
      let s6 = function(u7) {
        if (i6.paused || !o7)
          return;
        let r8 = u7.target;
        o7.contains(r8) ? p8.current = r8 : d5(p8.current, { select: true });
      }, f8 = function(u7) {
        if (i6.paused || !o7)
          return;
        let r8 = u7.relatedTarget;
        r8 !== null && (o7.contains(r8) || d5(p8.current, { select: true }));
      }, c7 = function(u7) {
        if (document.activeElement === document.body)
          for (let F6 of u7)
            F6.removedNodes.length > 0 && d5(o7);
      };
      document.addEventListener("focusin", s6), document.addEventListener("focusout", f8);
      let l6 = new MutationObserver(c7);
      return o7 && l6.observe(o7, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", s6), document.removeEventListener("focusout", f8), l6.disconnect();
      };
    }
  }, [a5, o7, i6.paused]), z2(() => {
    if (o7) {
      C4.add(i6);
      let s6 = document.activeElement;
      if (!o7.contains(s6)) {
        let c7 = new CustomEvent(E4, S4);
        o7.addEventListener(E4, $5), o7.dispatchEvent(c7), c7.defaultPrevented || (x4(q3(I5(o7)), { select: true }), document.activeElement === s6 && d5(o7));
      }
      return () => {
        o7.removeEventListener(E4, $5), setTimeout(() => {
          let c7 = new CustomEvent(b5, S4);
          o7.addEventListener(b5, v4), o7.dispatchEvent(c7), c7.defaultPrevented || d5(s6 ?? document.body, { select: true }), o7.removeEventListener(b5, v4), C4.remove(i6);
        }, 0);
      };
    }
  }, [o7, $5, v4, i6]);
  let P8 = G2((s6) => {
    if (!t4 && !a5 || i6.paused)
      return;
    let f8 = s6.key === "Tab" && !s6.altKey && !s6.ctrlKey && !s6.metaKey, c7 = document.activeElement;
    if (f8 && c7) {
      let l6 = s6.currentTarget, [u7, r8] = D3(l6);
      u7 && r8 ? !s6.shiftKey && c7 === r8 ? (s6.preventDefault(), t4 && d5(u7, { select: true })) : s6.shiftKey && c7 === u7 && (s6.preventDefault(), t4 && d5(r8, { select: true })) : c7 === l6 && s6.preventDefault();
    }
  }, [t4, a5, i6.paused]);
  return re(u3.div, p3({ tabIndex: -1 }, R5, { ref: H5, onKeyDown: P8 }));
});
function x4(e5, { select: n4 = false } = {}) {
  let t4 = document.activeElement;
  for (let a5 of e5)
    if (d5(a5, { select: n4 }), document.activeElement !== t4)
      return;
}
function D3(e5) {
  let n4 = I5(e5), t4 = N2(n4, e5), a5 = N2(n4.reverse(), e5);
  return [t4, a5];
}
function I5(e5) {
  let n4 = [], t4 = document.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, { acceptNode: (a5) => {
    let m9 = a5.tagName === "INPUT" && a5.type === "hidden";
    return a5.disabled || a5.hidden || m9 ? NodeFilter.FILTER_SKIP : a5.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; t4.nextNode(); )
    n4.push(t4.currentNode);
  return n4;
}
function N2(e5, n4) {
  for (let t4 of e5)
    if (!V4(t4, { upTo: n4 }))
      return t4;
}
function V4(e5, { upTo: n4 }) {
  if (getComputedStyle(e5).visibility === "hidden")
    return true;
  for (; e5; ) {
    if (n4 !== void 0 && e5 === n4)
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
function d5(e5, { select: n4 = false } = {}) {
  if (e5 && e5.focus) {
    let t4 = document.activeElement;
    e5.focus({ preventScroll: true }), e5 !== t4 && W3(e5) && n4 && e5.select();
  }
}
var C4 = j2();
function j2() {
  let e5 = [];
  return { add(n4) {
    let t4 = e5[0];
    n4 !== t4 && t4?.pause(), e5 = O4(e5, n4), e5.unshift(n4);
  }, remove(n4) {
    var t4;
    e5 = O4(e5, n4), (t4 = e5[0]) === null || t4 === void 0 || t4.resume();
  } };
}
function O4(e5, n4) {
  let t4 = [...e5], a5 = t4.indexOf(n4);
  return a5 !== -1 && t4.splice(a5, 1), t4;
}
function q3(e5) {
  return e5.filter((n4) => n4.tagName !== "A");
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u4 = compat_exports["useId".toString()] || (() => {
});
var r5 = 0;
function n2(t4) {
  let [e5, o7] = I2(u4());
  return e(() => {
    t4 || o7(($5) => $5 ?? String(r5++));
  }, [t4]), t4 || (e5 ? `radix-${e5}` : "");
}

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/utils.mjs
var a2 = ["top", "right", "bottom", "left"];
var f2 = ["start", "end"];
var O5 = a2.reduce((t4, n4) => t4.concat(n4, n4 + "-" + f2[0], n4 + "-" + f2[1]), []);
var m2 = Math.min;
var p4 = Math.max;
var S5 = Math.round;
var w3 = Math.floor;
var j3 = (t4) => ({ x: t4, y: t4 });
var h3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
var x5 = { start: "end", end: "start" };
function C5(t4, n4, o7) {
  return p4(t4, m2(n4, o7));
}
function L4(t4, n4) {
  return typeof t4 == "function" ? t4(n4) : t4;
}
function l3(t4) {
  return t4.split("-")[0];
}
function g3(t4) {
  return t4.split("-")[1];
}
function b6(t4) {
  return t4 === "x" ? "y" : "x";
}
function d6(t4) {
  return t4 === "y" ? "height" : "width";
}
function A4(t4) {
  return ["top", "bottom"].includes(l3(t4)) ? "y" : "x";
}
function y4(t4) {
  return b6(A4(t4));
}
function E5(t4, n4, o7) {
  o7 === void 0 && (o7 = false);
  let c7 = g3(t4), i6 = y4(t4), e5 = d6(i6), r8 = i6 === "x" ? c7 === (o7 ? "end" : "start") ? "right" : "left" : c7 === "start" ? "bottom" : "top";
  return n4.reference[e5] > n4.floating[e5] && (r8 = u5(r8)), [r8, u5(r8)];
}
function R4(t4) {
  let n4 = u5(t4);
  return [s2(t4), n4, s2(n4)];
}
function s2(t4) {
  return t4.replace(/start|end/g, (n4) => x5[n4]);
}
function P2(t4, n4, o7) {
  let c7 = ["left", "right"], i6 = ["right", "left"], e5 = ["top", "bottom"], r8 = ["bottom", "top"];
  switch (t4) {
    case "top":
    case "bottom":
      return o7 ? n4 ? i6 : c7 : n4 ? c7 : i6;
    case "left":
    case "right":
      return n4 ? e5 : r8;
    default:
      return [];
  }
}
function T3(t4, n4, o7, c7) {
  let i6 = g3(t4), e5 = P2(l3(t4), o7 === "start", c7);
  return i6 && (e5 = e5.map((r8) => r8 + "-" + i6), n4 && (e5 = e5.concat(e5.map(s2)))), e5;
}
function u5(t4) {
  return t4.replace(/left|right|bottom|top/g, (n4) => h3[n4]);
}
function M4(t4) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t4 };
}
function k3(t4) {
  return typeof t4 != "number" ? M4(t4) : { top: t4, right: t4, bottom: t4, left: t4 };
}
function q4(t4) {
  return { ...t4, top: t4.y, left: t4.x, right: t4.x + t4.width, bottom: t4.y + t4.height };
}

// https://esm.sh/v132/@floating-ui/core@1.4.2/denonext/core.mjs
function q5(e5, t4, l6) {
  let { reference: s6, floating: i6 } = e5, n4 = A4(t4), r8 = y4(t4), v4 = d6(r8), m9 = l3(t4), g7 = n4 === "y", u7 = s6.x + s6.width / 2 - i6.width / 2, c7 = s6.y + s6.height / 2 - i6.height / 2, f8 = s6[v4] / 2 - i6[v4] / 2, o7;
  switch (m9) {
    case "top":
      o7 = { x: u7, y: s6.y - i6.height };
      break;
    case "bottom":
      o7 = { x: u7, y: s6.y + s6.height };
      break;
    case "right":
      o7 = { x: s6.x + s6.width, y: c7 };
      break;
    case "left":
      o7 = { x: s6.x - i6.width, y: c7 };
      break;
    default:
      o7 = { x: s6.x, y: s6.y };
  }
  switch (g3(t4)) {
    case "start":
      o7[r8] -= f8 * (l6 && g7 ? -1 : 1);
      break;
    case "end":
      o7[r8] += f8 * (l6 && g7 ? -1 : 1);
      break;
  }
  return o7;
}
var ae3 = async (e5, t4, l6) => {
  let { placement: s6 = "bottom", strategy: i6 = "absolute", middleware: n4 = [], platform: r8 } = l6, v4 = n4.filter(Boolean), m9 = await (r8.isRTL == null ? void 0 : r8.isRTL(t4)), g7 = await r8.getElementRects({ reference: e5, floating: t4, strategy: i6 }), { x: u7, y: c7 } = q5(g7, s6, m9), f8 = s6, o7 = {}, a5 = 0;
  for (let x10 = 0; x10 < v4.length; x10++) {
    let { name: d10, fn: y6 } = v4[x10], { x: w9, y: p8, data: A6, reset: h9 } = await y6({ x: u7, y: c7, initialPlacement: s6, placement: f8, strategy: i6, middlewareData: o7, rects: g7, platform: r8, elements: { reference: e5, floating: t4 } });
    if (u7 = w9 ?? u7, c7 = p8 ?? c7, o7 = { ...o7, [d10]: { ...o7[d10], ...A6 } }, h9 && a5 <= 50) {
      a5++, typeof h9 == "object" && (h9.placement && (f8 = h9.placement), h9.rects && (g7 = h9.rects === true ? await r8.getElementRects({ reference: e5, floating: t4, strategy: i6 }) : h9.rects), { x: u7, y: c7 } = q5(g7, f8, m9)), x10 = -1;
      continue;
    }
  }
  return { x: u7, y: c7, placement: f8, strategy: i6, middlewareData: o7 };
};
async function j4(e5, t4) {
  var l6;
  t4 === void 0 && (t4 = {});
  let { x: s6, y: i6, platform: n4, rects: r8, elements: v4, strategy: m9 } = e5, { boundary: g7 = "clippingAncestors", rootBoundary: u7 = "viewport", elementContext: c7 = "floating", altBoundary: f8 = false, padding: o7 = 0 } = L4(t4, e5), a5 = k3(o7), d10 = v4[f8 ? c7 === "floating" ? "reference" : "floating" : c7], y6 = q4(await n4.getClippingRect({ element: (l6 = await (n4.isElement == null ? void 0 : n4.isElement(d10))) == null || l6 ? d10 : d10.contextElement || await (n4.getDocumentElement == null ? void 0 : n4.getDocumentElement(v4.floating)), boundary: g7, rootBoundary: u7, strategy: m9 })), w9 = c7 === "floating" ? { ...r8.floating, x: s6, y: i6 } : r8.reference, p8 = await (n4.getOffsetParent == null ? void 0 : n4.getOffsetParent(v4.floating)), A6 = await (n4.isElement == null ? void 0 : n4.isElement(p8)) ? await (n4.getScale == null ? void 0 : n4.getScale(p8)) || { x: 1, y: 1 } : { x: 1, y: 1 }, h9 = q4(n4.convertOffsetParentRelativeRectToViewportRelativeRect ? await n4.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w9, offsetParent: p8, strategy: m9 }) : w9);
  return { top: (y6.top - h9.top + a5.top) / A6.y, bottom: (h9.bottom - y6.bottom + a5.bottom) / A6.y, left: (y6.left - h9.left + a5.left) / A6.x, right: (h9.right - y6.right + a5.right) / A6.x };
}
var fe3 = (e5) => ({ name: "arrow", options: e5, async fn(t4) {
  let { x: l6, y: s6, placement: i6, rects: n4, platform: r8, elements: v4, middlewareData: m9 } = t4, { element: g7, padding: u7 = 0 } = L4(e5, t4) || {};
  if (g7 == null)
    return {};
  let c7 = k3(u7), f8 = { x: l6, y: s6 }, o7 = y4(i6), a5 = d6(o7), x10 = await r8.getDimensions(g7), d10 = o7 === "y", y6 = d10 ? "top" : "left", w9 = d10 ? "bottom" : "right", p8 = d10 ? "clientHeight" : "clientWidth", A6 = n4.reference[a5] + n4.reference[o7] - f8[o7] - n4.floating[a5], h9 = f8[o7] - n4.reference[o7], b10 = await (r8.getOffsetParent == null ? void 0 : r8.getOffsetParent(g7)), R5 = b10 ? b10[p8] : 0;
  (!R5 || !await (r8.isElement == null ? void 0 : r8.isElement(b10))) && (R5 = v4.floating[p8] || n4.floating[a5]);
  let B4 = A6 / 2 - h9 / 2, T8 = R5 / 2 - x10[a5] / 2 - 1, P8 = m2(c7[y6], T8), O8 = m2(c7[w9], T8), E9 = P8, S10 = R5 - x10[a5] - O8, C8 = R5 / 2 - x10[a5] / 2 + B4, k6 = C5(E9, C8, S10), L9 = !m9.arrow && g3(i6) != null && C8 != k6 && n4.reference[a5] / 2 - (C8 < E9 ? P8 : O8) - x10[a5] / 2 < 0, Y5 = L9 ? C8 < E9 ? E9 - C8 : S10 - C8 : 0;
  return { [o7]: f8[o7] - Y5, data: { [o7]: k6, centerOffset: C8 - k6 + Y5 }, reset: L9 };
} });
var de3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "flip", options: e5, async fn(t4) {
    var l6;
    let { placement: s6, middlewareData: i6, rects: n4, initialPlacement: r8, platform: v4, elements: m9 } = t4, { mainAxis: g7 = true, crossAxis: u7 = true, fallbackPlacements: c7, fallbackStrategy: f8 = "bestFit", fallbackAxisSideDirection: o7 = "none", flipAlignment: a5 = true, ...x10 } = L4(e5, t4), d10 = l3(s6), y6 = l3(r8) === r8, w9 = await (v4.isRTL == null ? void 0 : v4.isRTL(m9.floating)), p8 = c7 || (y6 || !a5 ? [u5(r8)] : R4(r8));
    !c7 && o7 !== "none" && p8.push(...T3(r8, a5, o7, w9));
    let A6 = [r8, ...p8], h9 = await j4(t4, x10), b10 = [], R5 = ((l6 = i6.flip) == null ? void 0 : l6.overflows) || [];
    if (g7 && b10.push(h9[d10]), u7) {
      let O8 = E5(s6, n4, w9);
      b10.push(h9[O8[0]], h9[O8[1]]);
    }
    if (R5 = [...R5, { placement: s6, overflows: b10 }], !b10.every((O8) => O8 <= 0)) {
      var B4, T8;
      let O8 = (((B4 = i6.flip) == null ? void 0 : B4.index) || 0) + 1, E9 = A6[O8];
      if (E9)
        return { data: { index: O8, overflows: R5 }, reset: { placement: E9 } };
      let S10 = (T8 = R5.filter((C8) => C8.overflows[0] <= 0).sort((C8, k6) => C8.overflows[1] - k6.overflows[1])[0]) == null ? void 0 : T8.placement;
      if (!S10)
        switch (f8) {
          case "bestFit": {
            var P8;
            let C8 = (P8 = R5.map((k6) => [k6.placement, k6.overflows.filter((L9) => L9 > 0).reduce((L9, Y5) => L9 + Y5, 0)]).sort((k6, L9) => k6[1] - L9[1])[0]) == null ? void 0 : P8[0];
            C8 && (S10 = C8);
            break;
          }
          case "initialPlacement":
            S10 = r8;
            break;
        }
      if (s6 !== S10)
        return { reset: { placement: S10 } };
    }
    return {};
  } };
};
function G4(e5, t4) {
  return { top: e5.top - t4.height, right: e5.right - t4.width, bottom: e5.bottom - t4.height, left: e5.left - t4.width };
}
function J4(e5) {
  return a2.some((t4) => e5[t4] >= 0);
}
var ue3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "hide", options: e5, async fn(t4) {
    let { rects: l6 } = t4, { strategy: s6 = "referenceHidden", ...i6 } = L4(e5, t4);
    switch (s6) {
      case "referenceHidden": {
        let n4 = await j4(t4, { ...i6, elementContext: "reference" }), r8 = G4(n4, l6.reference);
        return { data: { referenceHiddenOffsets: r8, referenceHidden: J4(r8) } };
      }
      case "escaped": {
        let n4 = await j4(t4, { ...i6, altBoundary: true }), r8 = G4(n4, l6.floating);
        return { data: { escapedOffsets: r8, escaped: J4(r8) } };
      }
      default:
        return {};
    }
  } };
};
async function le3(e5, t4) {
  let { placement: l6, platform: s6, elements: i6 } = e5, n4 = await (s6.isRTL == null ? void 0 : s6.isRTL(i6.floating)), r8 = l3(l6), v4 = g3(l6), m9 = A4(l6) === "y", g7 = ["left", "top"].includes(r8) ? -1 : 1, u7 = n4 && m9 ? -1 : 1, c7 = L4(t4, e5), { mainAxis: f8, crossAxis: o7, alignmentAxis: a5 } = typeof c7 == "number" ? { mainAxis: c7, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c7 };
  return v4 && typeof a5 == "number" && (o7 = v4 === "end" ? a5 * -1 : a5), m9 ? { x: o7 * u7, y: f8 * g7 } : { x: f8 * g7, y: o7 * u7 };
}
var xe2 = function(e5) {
  return e5 === void 0 && (e5 = 0), { name: "offset", options: e5, async fn(t4) {
    let { x: l6, y: s6 } = t4, i6 = await le3(t4, e5);
    return { x: l6 + i6.x, y: s6 + i6.y, data: i6 };
  } };
};
var he3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "shift", options: e5, async fn(t4) {
    let { x: l6, y: s6, placement: i6 } = t4, { mainAxis: n4 = true, crossAxis: r8 = false, limiter: v4 = { fn: (d10) => {
      let { x: y6, y: w9 } = d10;
      return { x: y6, y: w9 };
    } }, ...m9 } = L4(e5, t4), g7 = { x: l6, y: s6 }, u7 = await j4(t4, m9), c7 = A4(l3(i6)), f8 = b6(c7), o7 = g7[f8], a5 = g7[c7];
    if (n4) {
      let d10 = f8 === "y" ? "top" : "left", y6 = f8 === "y" ? "bottom" : "right", w9 = o7 + u7[d10], p8 = o7 - u7[y6];
      o7 = C5(w9, o7, p8);
    }
    if (r8) {
      let d10 = c7 === "y" ? "top" : "left", y6 = c7 === "y" ? "bottom" : "right", w9 = a5 + u7[d10], p8 = a5 - u7[y6];
      a5 = C5(w9, a5, p8);
    }
    let x10 = v4.fn({ ...t4, [f8]: o7, [c7]: a5 });
    return { ...x10, data: { x: x10.x - l6, y: x10.y - s6 } };
  } };
};
var pe3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { options: e5, fn(t4) {
    let { x: l6, y: s6, placement: i6, rects: n4, middlewareData: r8 } = t4, { offset: v4 = 0, mainAxis: m9 = true, crossAxis: g7 = true } = L4(e5, t4), u7 = { x: l6, y: s6 }, c7 = A4(i6), f8 = b6(c7), o7 = u7[f8], a5 = u7[c7], x10 = L4(v4, t4), d10 = typeof x10 == "number" ? { mainAxis: x10, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x10 };
    if (m9) {
      let p8 = f8 === "y" ? "height" : "width", A6 = n4.reference[f8] - n4.floating[p8] + d10.mainAxis, h9 = n4.reference[f8] + n4.reference[p8] - d10.mainAxis;
      o7 < A6 ? o7 = A6 : o7 > h9 && (o7 = h9);
    }
    if (g7) {
      var y6, w9;
      let p8 = f8 === "y" ? "width" : "height", A6 = ["top", "left"].includes(l3(i6)), h9 = n4.reference[c7] - n4.floating[p8] + (A6 && ((y6 = r8.offset) == null ? void 0 : y6[c7]) || 0) + (A6 ? 0 : d10.crossAxis), b10 = n4.reference[c7] + n4.reference[p8] + (A6 ? 0 : ((w9 = r8.offset) == null ? void 0 : w9[c7]) || 0) - (A6 ? d10.crossAxis : 0);
      a5 < h9 ? a5 = h9 : a5 > b10 && (a5 = b10);
    }
    return { [f8]: o7, [c7]: a5 };
  } };
};
var we2 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "size", options: e5, async fn(t4) {
    let { placement: l6, rects: s6, platform: i6, elements: n4 } = t4, { apply: r8 = () => {
    }, ...v4 } = L4(e5, t4), m9 = await j4(t4, v4), g7 = l3(l6), u7 = g3(l6), c7 = A4(l6) === "y", { width: f8, height: o7 } = s6.floating, a5, x10;
    g7 === "top" || g7 === "bottom" ? (a5 = g7, x10 = u7 === (await (i6.isRTL == null ? void 0 : i6.isRTL(n4.floating)) ? "start" : "end") ? "left" : "right") : (x10 = g7, a5 = u7 === "end" ? "top" : "bottom");
    let d10 = o7 - m9[a5], y6 = f8 - m9[x10], w9 = !t4.middlewareData.shift, p8 = d10, A6 = y6;
    if (c7) {
      let b10 = f8 - m9.left - m9.right;
      A6 = u7 || w9 ? m2(y6, b10) : b10;
    } else {
      let b10 = o7 - m9.top - m9.bottom;
      p8 = u7 || w9 ? m2(d10, b10) : b10;
    }
    if (w9 && !u7) {
      let b10 = p4(m9.left, 0), R5 = p4(m9.right, 0), B4 = p4(m9.top, 0), T8 = p4(m9.bottom, 0);
      c7 ? A6 = f8 - 2 * (b10 !== 0 || R5 !== 0 ? b10 + R5 : p4(m9.left, m9.right)) : p8 = o7 - 2 * (B4 !== 0 || T8 !== 0 ? B4 + T8 : p4(m9.top, m9.bottom));
    }
    await r8({ ...t4, availableWidth: A6, availableHeight: p8 });
    let h9 = await i6.getDimensions(n4.floating);
    return f8 !== h9.width || o7 !== h9.height ? { reset: { rects: true } } : {};
  } };
};

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/dom.js
function l4(n4) {
  return a3(n4) ? (n4.nodeName || "").toLowerCase() : "#document";
}
function i3(n4) {
  var t4;
  return (n4 == null || (t4 = n4.ownerDocument) == null ? void 0 : t4.defaultView) || window;
}
function y5(n4) {
  var t4;
  return (t4 = (a3(n4) ? n4.ownerDocument : n4.document) || window.document) == null ? void 0 : t4.documentElement;
}
function a3(n4) {
  return n4 instanceof Node || n4 instanceof i3(n4).Node;
}
function S6(n4) {
  return n4 instanceof Element || n4 instanceof i3(n4).Element;
}
function d7(n4) {
  return n4 instanceof HTMLElement || n4 instanceof i3(n4).HTMLElement;
}
function s3(n4) {
  return typeof ShadowRoot > "u" ? false : n4 instanceof ShadowRoot || n4 instanceof i3(n4).ShadowRoot;
}
function m3(n4) {
  let { overflow: t4, overflowX: e5, overflowY: o7, display: r8 } = p5(n4);
  return /auto|scroll|overlay|hidden|clip/.test(t4 + o7 + e5) && !["inline", "contents"].includes(r8);
}
function E6(n4) {
  return ["table", "td", "th"].includes(l4(n4));
}
function N3(n4) {
  let t4 = h4(), e5 = p5(n4);
  return e5.transform !== "none" || e5.perspective !== "none" || (e5.containerType ? e5.containerType !== "normal" : false) || !t4 && (e5.backdropFilter ? e5.backdropFilter !== "none" : false) || !t4 && (e5.filter ? e5.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o7) => (e5.willChange || "").includes(o7)) || ["paint", "layout", "strict", "content"].some((o7) => (e5.contain || "").includes(o7));
}
function v2(n4) {
  let t4 = u6(n4);
  for (; d7(t4) && !w4(t4); ) {
    if (N3(t4))
      return t4;
    t4 = u6(t4);
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
  return i3(n4).getComputedStyle(n4);
}
function T4(n4) {
  return S6(n4) ? { scrollLeft: n4.scrollLeft, scrollTop: n4.scrollTop } : { scrollLeft: n4.pageXOffset, scrollTop: n4.pageYOffset };
}
function u6(n4) {
  if (l4(n4) === "html")
    return n4;
  let t4 = n4.assignedSlot || n4.parentNode || s3(n4) && n4.host || y5(n4);
  return s3(t4) ? t4.host : t4;
}
function g4(n4) {
  let t4 = u6(n4);
  return w4(t4) ? n4.ownerDocument ? n4.ownerDocument.body : n4.body : d7(t4) && m3(t4) ? t4 : g4(t4);
}
function f3(n4, t4, e5) {
  var o7;
  t4 === void 0 && (t4 = []), e5 === void 0 && (e5 = true);
  let r8 = g4(n4), b10 = r8 === ((o7 = n4.ownerDocument) == null ? void 0 : o7.body), c7 = i3(r8);
  return b10 ? t4.concat(c7, c7.visualViewport || [], m3(r8) ? r8 : [], c7.frameElement && e5 ? f3(c7.frameElement) : []) : t4.concat(r8, f3(r8));
}

// https://esm.sh/v132/@floating-ui/dom@1.5.3/denonext/dom.mjs
function j5(t4) {
  let e5 = p5(t4), i6 = parseFloat(e5.width) || 0, o7 = parseFloat(e5.height) || 0, n4 = d7(t4), c7 = n4 ? t4.offsetWidth : i6, s6 = n4 ? t4.offsetHeight : o7, r8 = S5(i6) !== c7 || S5(o7) !== s6;
  return r8 && (i6 = c7, o7 = s6), { width: i6, height: o7, $: r8 };
}
function S7(t4) {
  return S6(t4) ? t4 : t4.contextElement;
}
function L5(t4) {
  let e5 = S7(t4);
  if (!d7(e5))
    return j3(1);
  let i6 = e5.getBoundingClientRect(), { width: o7, height: n4, $: c7 } = j5(e5), s6 = (c7 ? S5(i6.width) : i6.width) / o7, r8 = (c7 ? S5(i6.height) : i6.height) / n4;
  return (!s6 || !Number.isFinite(s6)) && (s6 = 1), (!r8 || !Number.isFinite(r8)) && (r8 = 1), { x: s6, y: r8 };
}
var et = j3(0);
function G5(t4) {
  let e5 = i3(t4);
  return !h4() || !e5.visualViewport ? et : { x: e5.visualViewport.offsetLeft, y: e5.visualViewport.offsetTop };
}
function it(t4, e5, i6) {
  return e5 === void 0 && (e5 = false), !i6 || e5 && i6 !== i3(t4) ? false : e5;
}
function O6(t4, e5, i6, o7) {
  e5 === void 0 && (e5 = false), i6 === void 0 && (i6 = false);
  let n4 = t4.getBoundingClientRect(), c7 = S7(t4), s6 = j3(1);
  e5 && (o7 ? S6(o7) && (s6 = L5(o7)) : s6 = L5(t4));
  let r8 = it(c7, i6, o7) ? G5(c7) : j3(0), l6 = (n4.left + r8.x) / s6.x, f8 = (n4.top + r8.y) / s6.y, p8 = n4.width / s6.x, d10 = n4.height / s6.y;
  if (c7) {
    let w9 = i3(c7), a5 = o7 && S6(o7) ? i3(o7) : o7, g7 = w9.frameElement;
    for (; g7 && o7 && a5 !== w9; ) {
      let h9 = L5(g7), R5 = g7.getBoundingClientRect(), u7 = p5(g7), C8 = R5.left + (g7.clientLeft + parseFloat(u7.paddingLeft)) * h9.x, W7 = R5.top + (g7.clientTop + parseFloat(u7.paddingTop)) * h9.y;
      l6 *= h9.x, f8 *= h9.y, p8 *= h9.x, d10 *= h9.y, l6 += C8, f8 += W7, g7 = i3(g7).frameElement;
    }
  }
  return q4({ width: p8, height: d10, x: l6, y: f8 });
}
function ot(t4) {
  let { rect: e5, offsetParent: i6, strategy: o7 } = t4, n4 = d7(i6), c7 = y5(i6);
  if (i6 === c7)
    return e5;
  let s6 = { scrollLeft: 0, scrollTop: 0 }, r8 = j3(1), l6 = j3(0);
  if ((n4 || !n4 && o7 !== "fixed") && ((l4(i6) !== "body" || m3(c7)) && (s6 = T4(i6)), d7(i6))) {
    let f8 = O6(i6);
    r8 = L5(i6), l6.x = f8.x + i6.clientLeft, l6.y = f8.y + i6.clientTop;
  }
  return { width: e5.width * r8.x, height: e5.height * r8.y, x: e5.x * r8.x - s6.scrollLeft * r8.x + l6.x, y: e5.y * r8.y - s6.scrollTop * r8.y + l6.y };
}
function nt(t4) {
  return Array.from(t4.getClientRects());
}
function J5(t4) {
  return O6(y5(t4)).left + T4(t4).scrollLeft;
}
function st(t4) {
  let e5 = y5(t4), i6 = T4(t4), o7 = t4.ownerDocument.body, n4 = p4(e5.scrollWidth, e5.clientWidth, o7.scrollWidth, o7.clientWidth), c7 = p4(e5.scrollHeight, e5.clientHeight, o7.scrollHeight, o7.clientHeight), s6 = -i6.scrollLeft + J5(t4), r8 = -i6.scrollTop;
  return p5(o7).direction === "rtl" && (s6 += p4(e5.clientWidth, o7.clientWidth) - n4), { width: n4, height: c7, x: s6, y: r8 };
}
function rt(t4, e5) {
  let i6 = i3(t4), o7 = y5(t4), n4 = i6.visualViewport, c7 = o7.clientWidth, s6 = o7.clientHeight, r8 = 0, l6 = 0;
  if (n4) {
    c7 = n4.width, s6 = n4.height;
    let f8 = h4();
    (!f8 || f8 && e5 === "fixed") && (r8 = n4.offsetLeft, l6 = n4.offsetTop);
  }
  return { width: c7, height: s6, x: r8, y: l6 };
}
function ct(t4, e5) {
  let i6 = O6(t4, true, e5 === "fixed"), o7 = i6.top + t4.clientTop, n4 = i6.left + t4.clientLeft, c7 = d7(t4) ? L5(t4) : j3(1), s6 = t4.clientWidth * c7.x, r8 = t4.clientHeight * c7.y, l6 = n4 * c7.x, f8 = o7 * c7.y;
  return { width: s6, height: r8, x: l6, y: f8 };
}
function k4(t4, e5, i6) {
  let o7;
  if (e5 === "viewport")
    o7 = rt(t4, i6);
  else if (e5 === "document")
    o7 = st(y5(t4));
  else if (S6(e5))
    o7 = ct(e5, i6);
  else {
    let n4 = G5(t4);
    o7 = { ...e5, x: e5.x - n4.x, y: e5.y - n4.y };
  }
  return q4(o7);
}
function P3(t4, e5) {
  let i6 = u6(t4);
  return i6 === e5 || !S6(i6) || w4(i6) ? false : p5(i6).position === "fixed" || P3(i6, e5);
}
function lt(t4, e5) {
  let i6 = e5.get(t4);
  if (i6)
    return i6;
  let o7 = f3(t4, [], false).filter((r8) => S6(r8) && l4(r8) !== "body"), n4 = null, c7 = p5(t4).position === "fixed", s6 = c7 ? u6(t4) : t4;
  for (; S6(s6) && !w4(s6); ) {
    let r8 = p5(s6), l6 = N3(s6);
    !l6 && r8.position === "fixed" && (n4 = null), (c7 ? !l6 && !n4 : !l6 && r8.position === "static" && !!n4 && ["absolute", "fixed"].includes(n4.position) || m3(s6) && !l6 && P3(t4, s6)) ? o7 = o7.filter((p8) => p8 !== s6) : n4 = r8, s6 = u6(s6);
  }
  return e5.set(t4, o7), o7;
}
function ft(t4) {
  let { element: e5, boundary: i6, rootBoundary: o7, strategy: n4 } = t4, s6 = [...i6 === "clippingAncestors" ? lt(e5, this._c) : [].concat(i6), o7], r8 = s6[0], l6 = s6.reduce((f8, p8) => {
    let d10 = k4(e5, p8, n4);
    return f8.top = p4(d10.top, f8.top), f8.right = m2(d10.right, f8.right), f8.bottom = m2(d10.bottom, f8.bottom), f8.left = p4(d10.left, f8.left), f8;
  }, k4(e5, r8, n4));
  return { width: l6.right - l6.left, height: l6.bottom - l6.top, x: l6.left, y: l6.top };
}
function ut(t4) {
  return j5(t4);
}
function ht(t4, e5, i6) {
  let o7 = d7(e5), n4 = y5(e5), c7 = i6 === "fixed", s6 = O6(t4, true, c7, e5), r8 = { scrollLeft: 0, scrollTop: 0 }, l6 = j3(0);
  if (o7 || !o7 && !c7)
    if ((l4(e5) !== "body" || m3(n4)) && (r8 = T4(e5)), o7) {
      let f8 = O6(e5, true, c7, e5);
      l6.x = f8.x + e5.clientLeft, l6.y = f8.y + e5.clientTop;
    } else
      n4 && (l6.x = J5(n4));
  return { x: s6.left + r8.scrollLeft - l6.x, y: s6.top + r8.scrollTop - l6.y, width: s6.width, height: s6.height };
}
function q6(t4, e5) {
  return !d7(t4) || p5(t4).position === "fixed" ? null : e5 ? e5(t4) : t4.offsetParent;
}
function Q6(t4, e5) {
  let i6 = i3(t4);
  if (!d7(t4))
    return i6;
  let o7 = q6(t4, e5);
  for (; o7 && E6(o7) && p5(o7).position === "static"; )
    o7 = q6(o7, e5);
  return o7 && (l4(o7) === "html" || l4(o7) === "body" && p5(o7).position === "static" && !N3(o7)) ? i6 : o7 || v2(t4) || i6;
}
var at = async function(t4) {
  let { reference: e5, floating: i6, strategy: o7 } = t4, n4 = this.getOffsetParent || Q6, c7 = this.getDimensions;
  return { reference: ht(e5, await n4(i6), o7), floating: { x: 0, y: 0, ...await c7(i6) } };
};
function dt(t4) {
  return p5(t4).direction === "rtl";
}
var gt = { convertOffsetParentRelativeRectToViewportRelativeRect: ot, getDocumentElement: y5, getClippingRect: ft, getOffsetParent: Q6, getElementRects: at, getClientRects: nt, getDimensions: ut, getScale: L5, isElement: S6, isRTL: dt };
function pt(t4, e5) {
  let i6 = null, o7, n4 = y5(t4);
  function c7() {
    clearTimeout(o7), i6 && i6.disconnect(), i6 = null;
  }
  function s6(r8, l6) {
    r8 === void 0 && (r8 = false), l6 === void 0 && (l6 = 1), c7();
    let { left: f8, top: p8, width: d10, height: w9 } = t4.getBoundingClientRect();
    if (r8 || e5(), !d10 || !w9)
      return;
    let a5 = w3(p8), g7 = w3(n4.clientWidth - (f8 + d10)), h9 = w3(n4.clientHeight - (p8 + w9)), R5 = w3(f8), C8 = { rootMargin: -a5 + "px " + -g7 + "px " + -h9 + "px " + -R5 + "px", threshold: p4(0, m2(1, l6)) || 1 }, W7 = true;
    function M9($5) {
      let D6 = $5[0].intersectionRatio;
      if (D6 !== l6) {
        if (!W7)
          return s6();
        D6 ? s6(false, D6) : o7 = setTimeout(() => {
          s6(false, 1e-7);
        }, 100);
      }
      W7 = false;
    }
    try {
      i6 = new IntersectionObserver(M9, { ...C8, root: n4.ownerDocument });
    } catch {
      i6 = new IntersectionObserver(M9, C8);
    }
    i6.observe(t4);
  }
  return s6(true), c7;
}
function yt(t4, e5, i6, o7) {
  o7 === void 0 && (o7 = {});
  let { ancestorScroll: n4 = true, ancestorResize: c7 = true, elementResize: s6 = typeof ResizeObserver == "function", layoutShift: r8 = typeof IntersectionObserver == "function", animationFrame: l6 = false } = o7, f8 = S7(t4), p8 = n4 || c7 ? [...f8 ? f3(f8) : [], ...f3(e5)] : [];
  p8.forEach((u7) => {
    n4 && u7.addEventListener("scroll", i6, { passive: true }), c7 && u7.addEventListener("resize", i6);
  });
  let d10 = f8 && r8 ? pt(f8, i6) : null, w9 = -1, a5 = null;
  s6 && (a5 = new ResizeObserver((u7) => {
    let [C8] = u7;
    C8 && C8.target === f8 && a5 && (a5.unobserve(e5), cancelAnimationFrame(w9), w9 = requestAnimationFrame(() => {
      a5 && a5.observe(e5);
    })), i6();
  }), f8 && !l6 && a5.observe(f8), a5.observe(e5));
  let g7, h9 = l6 ? O6(t4) : null;
  l6 && R5();
  function R5() {
    let u7 = O6(t4);
    h9 && (u7.x !== h9.x || u7.y !== h9.y || u7.width !== h9.width || u7.height !== h9.height) && i6(), h9 = u7, g7 = requestAnimationFrame(R5);
  }
  return i6(), () => {
    p8.forEach((u7) => {
      n4 && u7.removeEventListener("scroll", i6), c7 && u7.removeEventListener("resize", i6);
    }), d10 && d10(), a5 && a5.disconnect(), a5 = null, l6 && cancelAnimationFrame(g7);
  };
}
var vt = (t4, e5, i6) => {
  let o7 = /* @__PURE__ */ new Map(), n4 = { platform: gt, ...i6 }, c7 = { ...n4.platform, _c: o7 };
  return ae3(t4, e5, { ...n4, platform: c7 });
};

// https://esm.sh/v132/@floating-ui/react-dom@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dom.mjs
var T5 = (e5) => {
  function t4(r8) {
    return {}.hasOwnProperty.call(r8, "current");
  }
  return { name: "arrow", options: e5, fn(r8) {
    let { element: n4, padding: i6 } = typeof e5 == "function" ? e5(r8) : e5;
    return n4 && t4(n4) ? n4.current != null ? fe3({ element: n4.current, padding: i6 }).fn(r8) : {} : n4 ? fe3({ element: n4, padding: i6 }).fn(r8) : {};
  } };
};
var w5 = typeof document < "u" ? S2 : z2;
function h5(e5, t4) {
  if (e5 === t4)
    return true;
  if (typeof e5 != typeof t4)
    return false;
  if (typeof e5 == "function" && e5.toString() === t4.toString())
    return true;
  let r8, n4, i6;
  if (e5 && t4 && typeof e5 == "object") {
    if (Array.isArray(e5)) {
      if (r8 = e5.length, r8 != t4.length)
        return false;
      for (n4 = r8; n4-- !== 0; )
        if (!h5(e5[n4], t4[n4]))
          return false;
      return true;
    }
    if (i6 = Object.keys(e5), r8 = i6.length, r8 !== Object.keys(t4).length)
      return false;
    for (n4 = r8; n4-- !== 0; )
      if (!{}.hasOwnProperty.call(t4, i6[n4]))
        return false;
    for (n4 = r8; n4-- !== 0; ) {
      let d10 = i6[n4];
      if (!(d10 === "_owner" && e5.$$typeof) && !h5(e5[d10], t4[d10]))
        return false;
    }
    return true;
  }
  return e5 !== e5 && t4 !== t4;
}
function z3(e5) {
  return typeof window > "u" ? 1 : (e5.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function L6(e5, t4) {
  let r8 = z3(e5);
  return Math.round(t4 * r8) / r8;
}
function $3(e5) {
  let t4 = L(e5);
  return w5(() => {
    t4.current = e5;
  }), t4;
}
function W4(e5) {
  e5 === void 0 && (e5 = {});
  let { placement: t4 = "bottom", strategy: r8 = "absolute", middleware: n4 = [], platform: i6, elements: { reference: d10, floating: B4 } = {}, transform: D6 = true, whileElementsMounted: U5, open: O8 } = e5, [c7, k6] = I2({ x: 0, y: 0, strategy: r8, placement: t4, middlewareData: {}, isPositioned: false }), [P8, V7] = I2(n4);
  h5(P8, n4) || V7(n4);
  let [G7, E9] = I2(null), [H5, _4] = I2(null), v4 = G2((o7) => {
    o7 != l6.current && (l6.current = o7, E9(o7));
  }, [E9]), C8 = G2((o7) => {
    o7 !== m9.current && (m9.current = o7, _4(o7));
  }, [_4]), u7 = d10 || G7, s6 = B4 || H5, l6 = L(null), m9 = L(null), g7 = L(c7), x10 = $3(U5), M9 = $3(i6), p8 = G2(() => {
    if (!l6.current || !m9.current)
      return;
    let o7 = { placement: t4, strategy: r8, middleware: P8 };
    M9.current && (o7.platform = M9.current), vt(l6.current, m9.current, o7).then((y6) => {
      let R5 = { ...y6, isPositioned: true };
      S10.current && !h5(g7.current, R5) && (g7.current = R5, Re(() => {
        k6(R5);
      }));
    });
  }, [P8, t4, r8, M9]);
  w5(() => {
    O8 === false && g7.current.isPositioned && (g7.current.isPositioned = false, k6((o7) => ({ ...o7, isPositioned: false })));
  }, [O8]);
  let S10 = L(false);
  w5(() => (S10.current = true, () => {
    S10.current = false;
  }), []), w5(() => {
    if (u7 && (l6.current = u7), s6 && (m9.current = s6), u7 && s6) {
      if (x10.current)
        return x10.current(u7, s6, p8);
      p8();
    }
  }, [u7, s6, p8, x10]);
  let F6 = T(() => ({ reference: l6, floating: m9, setReference: v4, setFloating: C8 }), [v4, C8]), a5 = T(() => ({ reference: u7, floating: s6 }), [u7, s6]), j8 = T(() => {
    let o7 = { position: r8, left: 0, top: 0 };
    if (!a5.floating)
      return o7;
    let y6 = L6(a5.floating, c7.x), R5 = L6(a5.floating, c7.y);
    return D6 ? { ...o7, transform: "translate(" + y6 + "px, " + R5 + "px)", ...z3(a5.floating) >= 1.5 && { willChange: "transform" } } : { position: r8, left: y6, top: R5 };
  }, [r8, D6, a5.floating, c7.x, c7.y]);
  return T(() => ({ ...c7, update: p8, refs: F6, elements: a5, floatingStyles: j8 }), [c7, p8, F6, a5, j8]);
}

// https://esm.sh/v132/@radix-ui/react-arrow@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-arrow.mjs
var f4 = ee2((e5, t4) => {
  let { children: o7, width: i6 = 10, height: n4 = 5, ...s6 } = e5;
  return re(u3.svg, p3({}, s6, { ref: t4, width: i6, height: n4, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), e5.asChild ? o7 : re("polygon", { points: "0,0 30,0 15,10" }));
});
var b7 = f4;

// https://esm.sh/v132/@radix-ui/react-use-size@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-size.mjs
function z4(e5) {
  let [u7, r8] = I2(void 0);
  return e(() => {
    if (e5) {
      r8({ width: e5.offsetWidth, height: e5.offsetHeight });
      let f8 = new ResizeObserver((i6) => {
        if (!Array.isArray(i6) || !i6.length)
          return;
        let b10 = i6[0], t4, o7;
        if ("borderBoxSize" in b10) {
          let s6 = b10.borderBoxSize, d10 = Array.isArray(s6) ? s6[0] : s6;
          t4 = d10.inlineSize, o7 = d10.blockSize;
        } else
          t4 = e5.offsetWidth, o7 = e5.offsetHeight;
        r8({ width: t4, height: o7 });
      });
      return f8.observe(e5, { box: "border-box" }), () => f8.unobserve(e5);
    } else
      r8(void 0);
  }, [e5]), u7;
}

// https://esm.sh/v132/@radix-ui/react-popper@1.1.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-popper.mjs
var M5 = "Popper";
var [T6, tt] = _(M5);
var [Ve, B2] = T6(M5);
var De = (o7) => {
  let { __scopePopper: i6, children: r8 } = o7, [t4, a5] = I2(null);
  return re(Ve, { scope: i6, anchor: t4, onAnchorChange: a5 }, r8);
};
var Re2 = "PopperAnchor";
var Ee2 = ee2((o7, i6) => {
  let { __scopePopper: r8, virtualRef: t4, ...a5 } = o7, e5 = B2(Re2, r8), n4 = L(null), c7 = u2(i6, n4);
  return z2(() => {
    e5.onAnchorChange(t4?.current || n4.current);
  }), t4 ? null : re(u3.div, p3({}, a5, { ref: c7 }));
});
var L7 = "PopperContent";
var [Ne2, He] = T6(L7);
var ze = ee2((o7, i6) => {
  var r8, t4, a5, e5, n4, c7, u7, l6;
  let { __scopePopper: S10, side: s6 = "bottom", sideOffset: Y5 = 0, align: d10 = "center", alignOffset: w9 = 0, arrowPadding: k6 = 0, avoidCollisions: f8 = true, collisionBoundary: h9 = [], collisionPadding: g7 = 0, sticky: p8 = "partial", hideWhenDetached: $5 = false, updatePositionStrategy: Z4 = "optimized", onPlaced: G7, ...E9 } = o7, q9 = B2(L7, S10), [O8, J6] = I2(null), K3 = u2(i6, (P8) => J6(P8)), [V7, Q9] = I2(null), v4 = z4(V7), ee4 = (r8 = v4?.width) !== null && r8 !== void 0 ? r8 : 0, N5 = (t4 = v4?.height) !== null && t4 !== void 0 ? t4 : 0, te4 = s6 + (d10 !== "center" ? "-" + d10 : ""), oe3 = typeof g7 == "number" ? g7 : { top: 0, right: 0, bottom: 0, left: 0, ...g7 }, H5 = Array.isArray(h9) ? h9 : [h9], re4 = H5.length > 0, y6 = { padding: oe3, boundary: H5.filter(je), altBoundary: re4 }, { refs: ae5, floatingStyles: z7, placement: ne5, isPositioned: b10, middlewareData: x10 } = W4({ strategy: "fixed", placement: te4, whileElementsMounted: (...P8) => yt(...P8, { animationFrame: Z4 === "always" }), elements: { reference: q9.anchor }, middleware: [xe2({ mainAxis: Y5 + N5, alignmentAxis: w9 }), f8 && he3({ mainAxis: true, crossAxis: false, limiter: p8 === "partial" ? pe3() : void 0, ...y6 }), f8 && de3({ ...y6 }), we2({ ...y6, apply: ({ elements: P8, rects: W7, availableWidth: pe5, availableHeight: $e }) => {
    let { width: me4, height: ue6 } = W7.reference, _4 = P8.floating.style;
    _4.setProperty("--radix-popper-available-width", `${pe5}px`), _4.setProperty("--radix-popper-available-height", `${$e}px`), _4.setProperty("--radix-popper-anchor-width", `${me4}px`), _4.setProperty("--radix-popper-anchor-height", `${ue6}px`);
  } }), V7 && T5({ element: V7, padding: k6 }), Fe({ arrowWidth: ee4, arrowHeight: N5 }), $5 && ue3({ strategy: "referenceHidden", ...y6 })] }), [I8, ie4] = U3(ne5), A6 = l2(G7);
  e(() => {
    b10 && A6?.();
  }, [b10, A6]);
  let se3 = (a5 = x10.arrow) === null || a5 === void 0 ? void 0 : a5.x, de5 = (e5 = x10.arrow) === null || e5 === void 0 ? void 0 : e5.y, ce4 = ((n4 = x10.arrow) === null || n4 === void 0 ? void 0 : n4.centerOffset) !== 0, [le4, fe6] = I2();
  return e(() => {
    O8 && fe6(window.getComputedStyle(O8).zIndex);
  }, [O8]), re("div", { ref: ae5.setFloating, "data-radix-popper-content-wrapper": "", style: { ...z7, transform: b10 ? z7.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: le4, "--radix-popper-transform-origin": [(c7 = x10.transformOrigin) === null || c7 === void 0 ? void 0 : c7.x, (u7 = x10.transformOrigin) === null || u7 === void 0 ? void 0 : u7.y].join(" ") }, dir: o7.dir }, re(Ne2, { scope: S10, placedSide: I8, onArrowChange: Q9, arrowX: se3, arrowY: de5, shouldHideArrow: ce4 }, re(u3.div, p3({ "data-side": I8, "data-align": ie4 }, E9, { ref: K3, style: { ...E9.style, animation: b10 ? void 0 : "none", opacity: (l6 = x10.hide) !== null && l6 !== void 0 && l6.referenceHidden ? 0 : void 0 } }))));
});
var Ie = "PopperArrow";
var We = { top: "bottom", right: "left", bottom: "top", left: "right" };
var Xe = ee2(function(i6, r8) {
  let { __scopePopper: t4, ...a5 } = i6, e5 = He(Ie, t4), n4 = We[e5.placedSide];
  return re("span", { ref: e5.onArrowChange, style: { position: "absolute", left: e5.arrowX, top: e5.arrowY, [n4]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e5.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e5.placedSide], visibility: e5.shouldHideArrow ? "hidden" : void 0 } }, re(b7, p3({}, a5, { ref: r8, style: { ...a5.style, display: "block" } })));
});
function je(o7) {
  return o7 !== null;
}
var Fe = (o7) => ({ name: "transformOrigin", options: o7, fn(i6) {
  var r8, t4, a5, e5, n4;
  let { placement: c7, rects: u7, middlewareData: l6 } = i6, s6 = ((r8 = l6.arrow) === null || r8 === void 0 ? void 0 : r8.centerOffset) !== 0, Y5 = s6 ? 0 : o7.arrowWidth, d10 = s6 ? 0 : o7.arrowHeight, [w9, k6] = U3(c7), f8 = { start: "0%", center: "50%", end: "100%" }[k6], h9 = ((t4 = (a5 = l6.arrow) === null || a5 === void 0 ? void 0 : a5.x) !== null && t4 !== void 0 ? t4 : 0) + Y5 / 2, g7 = ((e5 = (n4 = l6.arrow) === null || n4 === void 0 ? void 0 : n4.y) !== null && e5 !== void 0 ? e5 : 0) + d10 / 2, p8 = "", $5 = "";
  return w9 === "bottom" ? (p8 = s6 ? f8 : `${h9}px`, $5 = `${-d10}px`) : w9 === "top" ? (p8 = s6 ? f8 : `${h9}px`, $5 = `${u7.floating.height + d10}px`) : w9 === "right" ? (p8 = `${-d10}px`, $5 = s6 ? f8 : `${g7}px`) : w9 === "left" && (p8 = `${u7.floating.width + d10}px`, $5 = s6 ? f8 : `${g7}px`), { data: { x: p8, y: $5 } };
} });
function U3(o7) {
  let [i6, r8 = "center"] = o7.split("-");
  return [i6, r8];
}
var ot2 = De;
var rt2 = Ee2;
var at2 = ze;
var nt2 = Xe;

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m4 = ee2((r8, a5) => {
  var e5;
  let { container: o7 = globalThis == null || (e5 = globalThis.document) === null || e5 === void 0 ? void 0 : e5.body, ...t4 } = r8;
  return o7 ? Te.createPortal(re(u3.div, p3({}, t4, { ref: a5 })), o7) : null;
});

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w6({ prop: e5, defaultProp: a5, onChange: s6 = () => {
} }) {
  let [t4, n4] = P4({ defaultProp: a5, onChange: s6 }), o7 = e5 !== void 0, f8 = o7 ? e5 : t4, l6 = l2(s6), $5 = G2((c7) => {
    if (o7) {
      let u7 = typeof c7 == "function" ? c7(e5) : c7;
      u7 !== e5 && l6(u7);
    } else
      n4(c7);
  }, [o7, e5, n4, l6]);
  return [f8, $5];
}
function P4({ defaultProp: e5, onChange: a5 }) {
  let s6 = I2(e5), [t4] = s6, n4 = L(t4), o7 = l2(a5);
  return z2(() => {
    n4.current !== t4 && (o7(t4), n4.current = t4);
  }, [t4, n4, o7]), s6;
}

// https://esm.sh/v132/@radix-ui/react-use-previous@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-previous.mjs
function t2(e5) {
  let r8 = L({ value: e5, previous: e5 });
  return T(() => (r8.current.value !== e5 && (r8.current.previous = r8.current.value, r8.current.value = e5), r8.current.previous), [e5]);
}

// https://esm.sh/v132/@radix-ui/react-visually-hidden@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-visually-hidden.mjs
var n3 = ee2((e5, r8) => re(u3.span, p3({}, e5, { ref: r8, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e5.style } })));

// https://esm.sh/v133/aria-hidden@1.2.3/denonext/aria-hidden.mjs
var W5 = function(r8) {
  if (typeof document > "u")
    return null;
  var i6 = Array.isArray(r8) ? r8[0] : r8;
  return i6.ownerDocument.body;
};
var f5 = /* @__PURE__ */ new WeakMap();
var c4 = /* @__PURE__ */ new WeakMap();
var p6 = {};
var h6 = 0;
var b8 = function(r8) {
  return r8 && (r8.host || b8(r8.parentNode));
};
var x6 = function(r8, i6) {
  return i6.map(function(t4) {
    if (r8.contains(t4))
      return t4;
    var n4 = b8(t4);
    return n4 && r8.contains(n4) ? n4 : (console.error("aria-hidden", t4, "in not contained inside", r8, ". Doing nothing"), null);
  }).filter(function(t4) {
    return !!t4;
  });
};
var E7 = function(r8, i6, t4, n4) {
  var a5 = x6(i6, Array.isArray(r8) ? r8 : [r8]);
  p6[t4] || (p6[t4] = /* @__PURE__ */ new WeakMap());
  var o7 = p6[t4], l6 = [], v4 = /* @__PURE__ */ new Set(), O8 = new Set(a5), y6 = function(e5) {
    !e5 || v4.has(e5) || (v4.add(e5), y6(e5.parentNode));
  };
  a5.forEach(y6);
  var d10 = function(e5) {
    !e5 || O8.has(e5) || Array.prototype.forEach.call(e5.children, function(u7) {
      if (v4.has(u7))
        d10(u7);
      else {
        var s6 = u7.getAttribute(n4), A6 = s6 !== null && s6 !== "false", w9 = (f5.get(u7) || 0) + 1, M9 = (o7.get(u7) || 0) + 1;
        f5.set(u7, w9), o7.set(u7, M9), l6.push(u7), w9 === 1 && A6 && c4.set(u7, true), M9 === 1 && u7.setAttribute(t4, "true"), A6 || u7.setAttribute(n4, "true");
      }
    });
  };
  return d10(i6), v4.clear(), h6++, function() {
    l6.forEach(function(e5) {
      var u7 = f5.get(e5) - 1, s6 = o7.get(e5) - 1;
      f5.set(e5, u7), o7.set(e5, s6), u7 || (c4.has(e5) || e5.removeAttribute(n4), c4.delete(e5)), s6 || e5.removeAttribute(t4);
    }), h6--, h6 || (f5 = /* @__PURE__ */ new WeakMap(), f5 = /* @__PURE__ */ new WeakMap(), c4 = /* @__PURE__ */ new WeakMap(), p6 = {});
  };
};
var P5 = function(r8, i6, t4) {
  t4 === void 0 && (t4 = "data-aria-hidden");
  var n4 = Array.from(Array.isArray(r8) ? r8 : [r8]), a5 = i6 || W5(r8);
  return a5 ? (n4.push.apply(n4, Array.from(a5.querySelectorAll("[aria-live]"))), E7(n4, a5, t4, "aria-hidden")) : function() {
    return null;
  };
};

// https://esm.sh/v133/tslib@2.6.2/denonext/tslib.mjs
var m5 = function() {
  return m5 = Object.assign || function(t4) {
    for (var n4, r8 = 1, i6 = arguments.length; r8 < i6; r8++) {
      n4 = arguments[r8];
      for (var o7 in n4)
        Object.prototype.hasOwnProperty.call(n4, o7) && (t4[o7] = n4[o7]);
    }
    return t4;
  }, m5.apply(this, arguments);
};
function S8(e5, t4) {
  var n4 = {};
  for (var r8 in e5)
    Object.prototype.hasOwnProperty.call(e5, r8) && t4.indexOf(r8) < 0 && (n4[r8] = e5[r8]);
  if (e5 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i6 = 0, r8 = Object.getOwnPropertySymbols(e5); i6 < r8.length; i6++)
      t4.indexOf(r8[i6]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r8[i6]) && (n4[r8[i6]] = e5[r8[i6]]);
  return n4;
}
function M6(e5, t4, n4) {
  if (n4 || arguments.length === 2)
    for (var r8 = 0, i6 = t4.length, o7; r8 < i6; r8++)
      (o7 || !(r8 in t4)) && (o7 || (o7 = Array.prototype.slice.call(t4, 0, r8)), o7[r8] = t4[r8]);
  return e5.concat(o7 || Array.prototype.slice.call(t4));
}

// https://esm.sh/v133/react-remove-scroll-bar@2.3.4/denonext/constants.js
var r6 = "right-scroll-bar-position";
var a4 = "width-before-scroll-bar";

// https://esm.sh/v132/use-callback-ref@1.3.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-callback-ref.mjs
function o4(r8, e5) {
  return typeof r8 == "function" ? r8(e5) : r8 && (r8.current = e5), r8;
}
function f6(r8, e5) {
  var t4 = I2(function() {
    return { value: r8, callback: e5, facade: { get current() {
      return t4.value;
    }, set current(n4) {
      var u7 = t4.value;
      u7 !== n4 && (t4.value = n4, t4.callback(n4, u7));
    } } };
  })[0];
  return t4.callback = e5, t4.facade;
}
function m6(r8, e5) {
  return f6(e5 || null, function(t4) {
    return r8.forEach(function(n4) {
      return o4(n4, t4);
    });
  });
}

// https://esm.sh/v132/use-sidecar@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-sidecar.mjs
function C6(e5) {
  return e5;
}
function E8(e5, r8) {
  r8 === void 0 && (r8 = C6);
  var t4 = [], c7 = false, i6 = { read: function() {
    if (c7)
      throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return t4.length ? t4[t4.length - 1] : e5;
  }, useMedium: function(o7) {
    var n4 = r8(o7, c7);
    return t4.push(n4), function() {
      t4 = t4.filter(function(a5) {
        return a5 !== n4;
      });
    };
  }, assignSyncMedium: function(o7) {
    for (c7 = true; t4.length; ) {
      var n4 = t4;
      t4 = [], n4.forEach(o7);
    }
    t4 = { push: function(a5) {
      return o7(a5);
    }, filter: function() {
      return t4;
    } };
  }, assignMedium: function(o7) {
    c7 = true;
    var n4 = [];
    if (t4.length) {
      var a5 = t4;
      t4 = [], a5.forEach(o7), n4 = t4;
    }
    var d10 = function() {
      var u7 = n4;
      n4 = [], u7.forEach(o7);
    }, s6 = function() {
      return Promise.resolve().then(d10);
    };
    s6(), t4 = { push: function(u7) {
      n4.push(u7), s6();
    }, filter: function(u7) {
      return n4 = n4.filter(u7), t4;
    } };
  } };
  return i6;
}
function P6(e5) {
  e5 === void 0 && (e5 = {});
  var r8 = E8(null);
  return r8.options = m5({ async: true, ssr: false }, e5), r8;
}
var w7 = function(e5) {
  var r8 = e5.sideCar, t4 = S8(e5, ["sideCar"]);
  if (!r8)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c7 = r8.read();
  if (!c7)
    throw new Error("Sidecar medium not found");
  return re(c7, m5({}, t4));
};
w7.isSideCarExport = true;
function A5(e5, r8) {
  return e5.useMedium(r8), w7;
}

// https://esm.sh/v133/get-nonce@1.0.1/denonext/get-nonce.mjs
var e3;
var t3 = function() {
  if (e3)
    return e3;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};

// https://esm.sh/v132/react-style-singleton@2.2.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-style-singleton.mjs
function c5() {
  if (!document)
    return null;
  var t4 = document.createElement("style");
  t4.type = "text/css";
  var e5 = t3();
  return e5 && t4.setAttribute("nonce", e5), t4;
}
function s4(t4, e5) {
  t4.styleSheet ? t4.styleSheet.cssText = e5 : t4.appendChild(document.createTextNode(e5));
}
function f7(t4) {
  var e5 = document.head || document.getElementsByTagName("head")[0];
  e5.appendChild(t4);
}
var o5 = function() {
  var t4 = 0, e5 = null;
  return { add: function(n4) {
    t4 == 0 && (e5 = c5()) && (s4(e5, n4), f7(e5)), t4++;
  }, remove: function() {
    t4--, !t4 && e5 && (e5.parentNode && e5.parentNode.removeChild(e5), e5 = null);
  } };
};
var r7 = function() {
  var t4 = o5();
  return function(e5, n4) {
    z2(function() {
      return t4.add(e5), function() {
        t4.remove();
      };
    }, [e5 && n4]);
  };
};
var m7 = function() {
  var t4 = r7(), e5 = function(n4) {
    var i6 = n4.styles, u7 = n4.dynamic;
    return t4(i6, u7), null;
  };
  return e5;
};

// https://esm.sh/v132/react-remove-scroll-bar@2.3.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll-bar.mjs
var i4 = "right-scroll-bar-position";
var c6 = "width-before-scroll-bar";
var g5 = "with-scroll-bars-hidden";
var p7 = "--removed-body-scroll-bar-size";
var v3 = { left: 0, top: 0, right: 0, gap: 0 };
var m8 = function(n4) {
  return parseInt(n4 || "", 10) || 0;
};
var h7 = function(n4) {
  var a5 = window.getComputedStyle(document.body), r8 = a5[n4 === "padding" ? "paddingLeft" : "marginLeft"], t4 = a5[n4 === "padding" ? "paddingTop" : "marginTop"], o7 = a5[n4 === "padding" ? "paddingRight" : "marginRight"];
  return [m8(r8), m8(t4), m8(o7)];
};
var s5 = function(n4) {
  if (n4 === void 0 && (n4 = "margin"), typeof window > "u")
    return v3;
  var a5 = h7(n4), r8 = document.documentElement.clientWidth, t4 = window.innerWidth;
  return { left: a5[0], top: a5[1], right: a5[2], gap: Math.max(0, t4 - r8 + a5[2] - a5[0]) };
};
var x7 = m7();
var b9 = function(n4, a5, r8, t4) {
  var o7 = n4.left, d10 = n4.top, f8 = n4.right, e5 = n4.gap;
  return r8 === void 0 && (r8 = "margin"), `
  .`.concat(g5, ` {
   overflow: hidden `).concat(t4, `;
   padding-right: `).concat(e5, "px ").concat(t4, `;
  }
  body {
    overflow: hidden `).concat(t4, `;
    overscroll-behavior: contain;
    `).concat([a5 && "position: relative ".concat(t4, ";"), r8 === "margin" && `
    padding-left: `.concat(o7, `px;
    padding-top: `).concat(d10, `px;
    padding-right: `).concat(f8, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e5, "px ").concat(t4, `;
    `), r8 === "padding" && "padding-right: ".concat(e5, "px ").concat(t4, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(i4, ` {
    right: `).concat(e5, "px ").concat(t4, `;
  }
  
  .`).concat(c6, ` {
    margin-right: `).concat(e5, "px ").concat(t4, `;
  }
  
  .`).concat(i4, " .").concat(i4, ` {
    right: 0 `).concat(t4, `;
  }
  
  .`).concat(c6, " .").concat(c6, ` {
    margin-right: 0 `).concat(t4, `;
  }
  
  body {
    `).concat(p7, ": ").concat(e5, `px;
  }
`);
};
var w8 = function(n4) {
  var a5 = n4.noRelative, r8 = n4.noImportant, t4 = n4.gapMode, o7 = t4 === void 0 ? "margin" : t4, d10 = T(function() {
    return s5(o7);
  }, [o7]);
  return re(x7, { styles: b9(d10, !a5, o7, r8 ? "" : "!important") });
};

// https://esm.sh/v132/react-remove-scroll@2.5.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll.mjs
var N4 = P6();
var D4 = function() {
};
var M7 = ee2(function(e5, t4) {
  var c7 = L(null), o7 = I2({ onScrollCapture: D4, onWheelCapture: D4, onTouchMoveCapture: D4 }), u7 = o7[0], s6 = o7[1], d10 = e5.forwardProps, l6 = e5.children, R5 = e5.className, g7 = e5.removeScrollBar, w9 = e5.enabled, C8 = e5.shards, b10 = e5.sideCar, y6 = e5.noIsolation, E9 = e5.inert, r8 = e5.allowPinchZoom, n4 = e5.as, v4 = n4 === void 0 ? "div" : n4, h9 = e5.gapMode, m9 = S8(e5, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S10 = b10, f8 = m6([c7, t4]), p8 = m5(m5({}, m9), u7);
  return re(H, null, w9 && re(S10, { sideCar: N4, removeScrollBar: g7, shards: C8, noIsolation: y6, inert: E9, setCallbacks: s6, allowPinchZoom: !!r8, lockRef: c7, gapMode: h9 }), d10 ? Ee(te2.only(l6), m5(m5({}, p8), { ref: f8 })) : re(v4, m5({}, p8, { className: R5, ref: f8 }), l6));
});
M7.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
M7.classNames = { fullWidth: a4, zeroRight: r6 };
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
var H3 = function(e5, t4) {
  var c7 = window.getComputedStyle(e5);
  return c7[t4] !== "hidden" && !(c7.overflowY === c7.overflowX && !O7(e5) && c7[t4] === "visible");
};
var ee3 = function(e5) {
  return H3(e5, "overflowY");
};
var re3 = function(e5) {
  return H3(e5, "overflowX");
};
var I6 = function(e5, t4) {
  var c7 = t4.ownerDocument, o7 = t4;
  do {
    typeof ShadowRoot < "u" && o7 instanceof ShadowRoot && (o7 = o7.host);
    var u7 = V5(e5, o7);
    if (u7) {
      var s6 = Z2(e5, o7), d10 = s6[1], l6 = s6[2];
      if (d10 > l6)
        return true;
    }
    o7 = o7.parentNode;
  } while (o7 && o7 !== c7.body);
  return false;
};
var te3 = function(e5) {
  var t4 = e5.scrollTop, c7 = e5.scrollHeight, o7 = e5.clientHeight;
  return [t4, c7, o7];
};
var ae4 = function(e5) {
  var t4 = e5.scrollLeft, c7 = e5.scrollWidth, o7 = e5.clientWidth;
  return [t4, c7, o7];
};
var V5 = function(e5, t4) {
  return e5 === "v" ? ee3(t4) : re3(t4);
};
var Z2 = function(e5, t4) {
  return e5 === "v" ? te3(t4) : ae4(t4);
};
var ne3 = function(e5, t4) {
  return e5 === "h" && t4 === "rtl" ? -1 : 1;
};
var F5 = function(e5, t4, c7, o7, u7) {
  var s6 = ne3(e5, window.getComputedStyle(t4).direction), d10 = s6 * o7, l6 = c7.target, R5 = t4.contains(l6), g7 = false, w9 = d10 > 0, C8 = 0, b10 = 0;
  do {
    var y6 = Z2(e5, l6), E9 = y6[0], r8 = y6[1], n4 = y6[2], v4 = r8 - n4 - s6 * E9;
    (E9 || v4) && V5(e5, l6) && (C8 += v4, b10 += E9), l6 = l6.parentNode;
  } while (!R5 && l6 !== document.body || R5 && (t4.contains(l6) || t4 === l6));
  return (w9 && (u7 && C8 === 0 || !u7 && d10 > C8) || !w9 && (u7 && b10 === 0 || !u7 && -d10 > b10)) && (g7 = true), g7;
};
var X5 = function(e5) {
  return "changedTouches" in e5 ? [e5.changedTouches[0].clientX, e5.changedTouches[0].clientY] : [0, 0];
};
var z5 = function(e5) {
  return [e5.deltaX, e5.deltaY];
};
var _3 = function(e5) {
  return e5 && "current" in e5 ? e5.current : e5;
};
var ie3 = function(e5, t4) {
  return e5[0] === t4[0] && e5[1] === t4[1];
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
  var t4 = L([]), c7 = L([0, 0]), o7 = L(), u7 = I2(fe4++)[0], s6 = I2(m7)[0], d10 = L(e5);
  z2(function() {
    d10.current = e5;
  }, [e5]), z2(function() {
    if (e5.inert) {
      document.body.classList.add("block-interactivity-".concat(u7));
      var r8 = M6([e5.lockRef.current], (e5.shards || []).map(_3), true).filter(Boolean);
      return r8.forEach(function(n4) {
        return n4.classList.add("allow-interactivity-".concat(u7));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u7)), r8.forEach(function(n4) {
          return n4.classList.remove("allow-interactivity-".concat(u7));
        });
      };
    }
  }, [e5.inert, e5.lockRef.current, e5.shards]);
  var l6 = G2(function(r8, n4) {
    if ("touches" in r8 && r8.touches.length === 2)
      return !d10.current.allowPinchZoom;
    var v4 = X5(r8), h9 = c7.current, m9 = "deltaX" in r8 ? r8.deltaX : h9[0] - v4[0], S10 = "deltaY" in r8 ? r8.deltaY : h9[1] - v4[1], f8, p8 = r8.target, P8 = Math.abs(m9) > Math.abs(S10) ? "h" : "v";
    if ("touches" in r8 && P8 === "h" && p8.type === "range")
      return false;
    var T8 = I6(P8, p8);
    if (!T8)
      return true;
    if (T8 ? f8 = P8 : (f8 = P8 === "v" ? "h" : "v", T8 = I6(P8, p8)), !T8)
      return false;
    if (!o7.current && "changedTouches" in r8 && (m9 || S10) && (o7.current = f8), !f8)
      return true;
    var A6 = o7.current || f8;
    return F5(A6, n4, r8, A6 === "h" ? m9 : S10, true);
  }, []), R5 = G2(function(r8) {
    var n4 = r8;
    if (!(!B3.length || B3[B3.length - 1] !== s6)) {
      var v4 = "deltaY" in n4 ? z5(n4) : X5(n4), h9 = t4.current.filter(function(f8) {
        return f8.name === n4.type && f8.target === n4.target && ie3(f8.delta, v4);
      })[0];
      if (h9 && h9.should) {
        n4.cancelable && n4.preventDefault();
        return;
      }
      if (!h9) {
        var m9 = (d10.current.shards || []).map(_3).filter(Boolean).filter(function(f8) {
          return f8.contains(n4.target);
        }), S10 = m9.length > 0 ? l6(n4, m9[0]) : !d10.current.noIsolation;
        S10 && n4.cancelable && n4.preventDefault();
      }
    }
  }, []), g7 = G2(function(r8, n4, v4, h9) {
    var m9 = { name: r8, delta: n4, target: v4, should: h9 };
    t4.current.push(m9), setTimeout(function() {
      t4.current = t4.current.filter(function(S10) {
        return S10 !== m9;
      });
    }, 1);
  }, []), w9 = G2(function(r8) {
    c7.current = X5(r8), o7.current = void 0;
  }, []), C8 = G2(function(r8) {
    g7(r8.type, z5(r8), r8.target, l6(r8, e5.lockRef.current));
  }, []), b10 = G2(function(r8) {
    g7(r8.type, X5(r8), r8.target, l6(r8, e5.lockRef.current));
  }, []);
  z2(function() {
    return B3.push(s6), e5.setCallbacks({ onScrollCapture: C8, onWheelCapture: C8, onTouchMoveCapture: b10 }), document.addEventListener("wheel", R5, k5), document.addEventListener("touchmove", R5, k5), document.addEventListener("touchstart", w9, k5), function() {
      B3 = B3.filter(function(r8) {
        return r8 !== s6;
      }), document.removeEventListener("wheel", R5, k5), document.removeEventListener("touchmove", R5, k5), document.removeEventListener("touchstart", w9, k5);
    };
  }, []);
  var y6 = e5.removeScrollBar, E9 = e5.inert;
  return re(H, null, E9 ? re(s6, { styles: ue4(u7) }) : null, y6 ? re(w8, { gapMode: e5.gapMode }) : null);
}
var Q7 = A5(N4, j6);
var q7 = ee2(function(e5, t4) {
  return re(M7, m5({}, e5, { ref: t4, sideCar: Q7 }));
});
q7.classNames = M7.classNames;
var ve3 = q7;

// https://esm.sh/v132/@radix-ui/react-select@2.0.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-select.mjs
var rt3 = [" ", "Enter", "ArrowUp", "ArrowDown"];
var st2 = [" ", "Enter"];
var pe4 = "Select";
var [ue5, fe5, at3] = _2(pe4);
var [ce3, io] = _(pe4, [at3, tt]);
var me3 = tt();
var [lt2, Y3] = ce3(pe4);
var [it2, dt2] = ce3(pe4);
var pt2 = (t4) => {
  let { __scopeSelect: a5, children: e5, open: c7, defaultOpen: s6, onOpenChange: d10, value: n4, defaultValue: o7, onValueChange: r8, dir: l6, name: $5, autoComplete: C8, disabled: T8, required: P8 } = t4, f8 = me3(a5), [v4, b10] = I2(null), [m9, i6] = I2(null), [g7, re4] = I2(false), L9 = i(l6), [se3 = false, N5] = w6({ prop: c7, defaultProp: s6, onChange: d10 }), [M9, Z4] = w6({ prop: n4, defaultProp: o7, onChange: r8 }), ee4 = L(null), J6 = v4 ? !!v4.closest("form") : true, [B4, U5] = I2(/* @__PURE__ */ new Set()), G7 = Array.from(B4).map((E9) => E9.props.value).join(";");
  return re(ot2, f8, re(lt2, { required: P8, scope: a5, trigger: v4, onTriggerChange: b10, valueNode: m9, onValueNodeChange: i6, valueNodeHasChildren: g7, onValueNodeHasChildrenChange: re4, contentId: n2(), value: M9, onValueChange: Z4, open: se3, onOpenChange: N5, dir: L9, triggerPointerDownPosRef: ee4, disabled: T8 }, re(ue5.Provider, { scope: a5 }, re(it2, { scope: t4.__scopeSelect, onNativeOptionAdd: G2((E9) => {
    U5((k6) => new Set(k6).add(E9));
  }, []), onNativeOptionRemove: G2((E9) => {
    U5((k6) => {
      let F6 = new Set(k6);
      return F6.delete(E9), F6;
    });
  }, []) }, e5)), J6 ? re(He2, { key: G7, "aria-hidden": true, required: P8, tabIndex: -1, name: $5, autoComplete: C8, value: M9, onChange: (E9) => Z4(E9.target.value), disabled: T8 }, M9 === void 0 ? re("option", { value: "" }) : null, Array.from(B4)) : null));
};
var ut2 = "SelectTrigger";
var ft2 = ee2((t4, a5) => {
  let { __scopeSelect: e5, disabled: c7 = false, ...s6 } = t4, d10 = me3(e5), n4 = Y3(ut2, e5), o7 = n4.disabled || c7, r8 = u2(a5, n4.onTriggerChange), l6 = fe5(e5), [$5, C8, T8] = Be((f8) => {
    let v4 = l6().filter((i6) => !i6.disabled), b10 = v4.find((i6) => i6.value === n4.value), m9 = ke2(v4, f8, b10);
    m9 !== void 0 && n4.onValueChange(m9.value);
  }), P8 = () => {
    o7 || (n4.onOpenChange(true), T8());
  };
  return re(rt2, p3({ asChild: true }, d10), re(u3.button, p3({ type: "button", role: "combobox", "aria-controls": n4.contentId, "aria-expanded": n4.open, "aria-required": n4.required, "aria-autocomplete": "none", dir: n4.dir, "data-state": n4.open ? "open" : "closed", disabled: o7, "data-disabled": o7 ? "" : void 0, "data-placeholder": Ve2(n4.value) ? "" : void 0 }, s6, { ref: r8, onClick: o3(s6.onClick, (f8) => {
    f8.currentTarget.focus();
  }), onPointerDown: o3(s6.onPointerDown, (f8) => {
    let v4 = f8.target;
    v4.hasPointerCapture(f8.pointerId) && v4.releasePointerCapture(f8.pointerId), f8.button === 0 && f8.ctrlKey === false && (P8(), n4.triggerPointerDownPosRef.current = { x: Math.round(f8.pageX), y: Math.round(f8.pageY) }, f8.preventDefault());
  }), onKeyDown: o3(s6.onKeyDown, (f8) => {
    let v4 = $5.current !== "";
    !(f8.ctrlKey || f8.altKey || f8.metaKey) && f8.key.length === 1 && C8(f8.key), !(v4 && f8.key === " ") && rt3.includes(f8.key) && (P8(), f8.preventDefault());
  }) })));
});
var mt = "SelectValue";
var $t = ee2((t4, a5) => {
  let { __scopeSelect: e5, className: c7, style: s6, children: d10, placeholder: n4 = "", ...o7 } = t4, r8 = Y3(mt, e5), { onValueNodeHasChildrenChange: l6 } = r8, $5 = d10 !== void 0, C8 = u2(a5, r8.onValueNodeChange);
  return e(() => {
    l6($5);
  }, [l6, $5]), re(u3.span, p3({}, o7, { ref: C8, style: { pointerEvents: "none" } }), Ve2(r8.value) ? re(H, null, n4) : d10);
});
var vt2 = ee2((t4, a5) => {
  let { __scopeSelect: e5, children: c7, ...s6 } = t4;
  return re(u3.span, p3({ "aria-hidden": true }, s6, { ref: a5 }), c7 || "\u25BC");
});
var gt2 = (t4) => re(m4, p3({ asChild: true }, t4));
var ne4 = "SelectContent";
var ht2 = ee2((t4, a5) => {
  let e5 = Y3(ne4, t4.__scopeSelect), [c7, s6] = I2();
  if (e(() => {
    s6(new DocumentFragment());
  }, []), !e5.open) {
    let d10 = c7;
    return d10 ? ae2(re(Me, { scope: t4.__scopeSelect }, re(ue5.Slot, { scope: t4.__scopeSelect }, re("div", null, t4.children))), d10) : null;
  }
  return re(St, p3({}, t4, { ref: a5 }));
});
var j7 = 10;
var [Me, X6] = ce3(ne4);
var St = ee2((t4, a5) => {
  let { __scopeSelect: e5, position: c7 = "item-aligned", onCloseAutoFocus: s6, onEscapeKeyDown: d10, onPointerDownOutside: n4, side: o7, sideOffset: r8, align: l6, alignOffset: $5, arrowPadding: C8, collisionBoundary: T8, collisionPadding: P8, sticky: f8, hideWhenDetached: v4, avoidCollisions: b10, ...m9 } = t4, i6 = Y3(ne4, e5), [g7, re4] = I2(null), [L9, se3] = I2(null), N5 = u2(a5, (u7) => re4(u7)), [M9, Z4] = I2(null), [ee4, J6] = I2(null), B4 = fe5(e5), [U5, G7] = I2(false), E9 = L(false);
  z2(() => {
    if (g7)
      return P5(g7);
  }, [g7]), c3();
  let k6 = G2((u7) => {
    let [x10, ...R5] = B4().map((S10) => S10.ref.current), [w9] = R5.slice(-1), h9 = document.activeElement;
    for (let S10 of u7)
      if (S10 === h9 || (S10?.scrollIntoView({ block: "nearest" }), S10 === x10 && L9 && (L9.scrollTop = 0), S10 === w9 && L9 && (L9.scrollTop = L9.scrollHeight), S10?.focus(), document.activeElement !== h9))
        return;
  }, [B4, L9]), F6 = G2(() => k6([M9, g7]), [k6, M9, g7]);
  z2(() => {
    U5 && F6();
  }, [U5, F6]);
  let { onOpenChange: te4, triggerPointerDownPosRef: q9 } = i6;
  z2(() => {
    if (g7) {
      let u7 = { x: 0, y: 0 }, x10 = (w9) => {
        var h9, S10, V7, H5;
        u7 = { x: Math.abs(Math.round(w9.pageX) - ((h9 = (S10 = q9.current) === null || S10 === void 0 ? void 0 : S10.x) !== null && h9 !== void 0 ? h9 : 0)), y: Math.abs(Math.round(w9.pageY) - ((V7 = (H5 = q9.current) === null || H5 === void 0 ? void 0 : H5.y) !== null && V7 !== void 0 ? V7 : 0)) };
      }, R5 = (w9) => {
        u7.x <= 10 && u7.y <= 10 ? w9.preventDefault() : g7.contains(w9.target) || te4(false), document.removeEventListener("pointermove", x10), q9.current = null;
      };
      return q9.current !== null && (document.addEventListener("pointermove", x10), document.addEventListener("pointerup", R5, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", x10), document.removeEventListener("pointerup", R5, { capture: true });
      };
    }
  }, [g7, te4, q9]), z2(() => {
    let u7 = () => te4(false);
    return window.addEventListener("blur", u7), window.addEventListener("resize", u7), () => {
      window.removeEventListener("blur", u7), window.removeEventListener("resize", u7);
    };
  }, [te4]);
  let [$e, le4] = Be((u7) => {
    let x10 = B4().filter((h9) => !h9.disabled), R5 = x10.find((h9) => h9.ref.current === document.activeElement), w9 = ke2(x10, u7, R5);
    w9 && setTimeout(() => w9.ref.current.focus());
  }), ve4 = G2((u7, x10, R5) => {
    let w9 = !E9.current && !R5;
    (i6.value !== void 0 && i6.value === x10 || w9) && (Z4(u7), w9 && (E9.current = true));
  }, [i6.value]), ge3 = G2(() => g7?.focus(), [g7]), oe3 = G2((u7, x10, R5) => {
    let w9 = !E9.current && !R5;
    (i6.value !== void 0 && i6.value === x10 || w9) && J6(u7);
  }, [i6.value]), ie4 = c7 === "popper" ? _e3 : bt, ae5 = ie4 === _e3 ? { side: o7, sideOffset: r8, align: l6, alignOffset: $5, arrowPadding: C8, collisionBoundary: T8, collisionPadding: P8, sticky: f8, hideWhenDetached: v4, avoidCollisions: b10 } : {};
  return re(Me, { scope: e5, content: g7, viewport: L9, onViewportChange: se3, itemRefCallback: ve4, selectedItem: M9, onItemLeave: ge3, itemTextRefCallback: oe3, focusSelectedItem: F6, selectedItemText: ee4, position: c7, isPositioned: U5, searchRef: $e }, re(ve3, { as: b4, allowPinchZoom: true }, re(Q5, { asChild: true, trapped: i6.open, onMountAutoFocus: (u7) => {
    u7.preventDefault();
  }, onUnmountAutoFocus: o3(s6, (u7) => {
    var x10;
    (x10 = i6.trigger) === null || x10 === void 0 || x10.focus({ preventScroll: true }), u7.preventDefault();
  }) }, re(G3, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: d10, onPointerDownOutside: n4, onFocusOutside: (u7) => u7.preventDefault(), onDismiss: () => i6.onOpenChange(false) }, re(ie4, p3({ role: "listbox", id: i6.contentId, "data-state": i6.open ? "open" : "closed", dir: i6.dir, onContextMenu: (u7) => u7.preventDefault() }, m9, ae5, { onPlaced: () => G7(true), ref: N5, style: { display: "flex", flexDirection: "column", outline: "none", ...m9.style }, onKeyDown: o3(m9.onKeyDown, (u7) => {
    let x10 = u7.ctrlKey || u7.altKey || u7.metaKey;
    if (u7.key === "Tab" && u7.preventDefault(), !x10 && u7.key.length === 1 && le4(u7.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(u7.key)) {
      let w9 = B4().filter((h9) => !h9.disabled).map((h9) => h9.ref.current);
      if (["ArrowUp", "End"].includes(u7.key) && (w9 = w9.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(u7.key)) {
        let h9 = u7.target, S10 = w9.indexOf(h9);
        w9 = w9.slice(S10 + 1);
      }
      setTimeout(() => k6(w9)), u7.preventDefault();
    }
  }) }))))));
});
var bt = ee2((t4, a5) => {
  let { __scopeSelect: e5, onPlaced: c7, ...s6 } = t4, d10 = Y3(ne4, e5), n4 = X6(ne4, e5), [o7, r8] = I2(null), [l6, $5] = I2(null), C8 = u2(a5, (N5) => $5(N5)), T8 = fe5(e5), P8 = L(false), f8 = L(true), { viewport: v4, selectedItem: b10, selectedItemText: m9, focusSelectedItem: i6 } = n4, g7 = G2(() => {
    if (d10.trigger && d10.valueNode && o7 && l6 && v4 && b10 && m9) {
      let N5 = d10.trigger.getBoundingClientRect(), M9 = l6.getBoundingClientRect(), Z4 = d10.valueNode.getBoundingClientRect(), ee4 = m9.getBoundingClientRect();
      if (d10.dir !== "rtl") {
        let h9 = ee4.left - M9.left, S10 = Z4.left - h9, V7 = N5.left - S10, H5 = N5.width + V7, he4 = Math.max(H5, M9.width), Se2 = window.innerWidth - j7, be2 = c2(S10, [j7, Se2 - he4]);
        o7.style.minWidth = H5 + "px", o7.style.left = be2 + "px";
      } else {
        let h9 = M9.right - ee4.right, S10 = window.innerWidth - Z4.right - h9, V7 = window.innerWidth - N5.right - S10, H5 = N5.width + V7, he4 = Math.max(H5, M9.width), Se2 = window.innerWidth - j7, be2 = c2(S10, [j7, Se2 - he4]);
        o7.style.minWidth = H5 + "px", o7.style.right = be2 + "px";
      }
      let J6 = T8(), B4 = window.innerHeight - j7 * 2, U5 = v4.scrollHeight, G7 = window.getComputedStyle(l6), E9 = parseInt(G7.borderTopWidth, 10), k6 = parseInt(G7.paddingTop, 10), F6 = parseInt(G7.borderBottomWidth, 10), te4 = parseInt(G7.paddingBottom, 10), q9 = E9 + k6 + U5 + te4 + F6, $e = Math.min(b10.offsetHeight * 5, q9), le4 = window.getComputedStyle(v4), ve4 = parseInt(le4.paddingTop, 10), ge3 = parseInt(le4.paddingBottom, 10), oe3 = N5.top + N5.height / 2 - j7, ie4 = B4 - oe3, ae5 = b10.offsetHeight / 2, u7 = b10.offsetTop + ae5, x10 = E9 + k6 + u7, R5 = q9 - x10;
      if (x10 <= oe3) {
        let h9 = b10 === J6[J6.length - 1].ref.current;
        o7.style.bottom = "0px";
        let S10 = l6.clientHeight - v4.offsetTop - v4.offsetHeight, V7 = Math.max(ie4, ae5 + (h9 ? ge3 : 0) + S10 + F6), H5 = x10 + V7;
        o7.style.height = H5 + "px";
      } else {
        let h9 = b10 === J6[0].ref.current;
        o7.style.top = "0px";
        let V7 = Math.max(oe3, E9 + v4.offsetTop + (h9 ? ve4 : 0) + ae5) + R5;
        o7.style.height = V7 + "px", v4.scrollTop = x10 - oe3 + v4.offsetTop;
      }
      o7.style.margin = `${j7}px 0`, o7.style.minHeight = $e + "px", o7.style.maxHeight = B4 + "px", c7?.(), requestAnimationFrame(() => P8.current = true);
    }
  }, [T8, d10.trigger, d10.valueNode, o7, l6, v4, b10, m9, d10.dir, c7]);
  e(() => g7(), [g7]);
  let [re4, L9] = I2();
  e(() => {
    l6 && L9(window.getComputedStyle(l6).zIndex);
  }, [l6]);
  let se3 = G2((N5) => {
    N5 && f8.current === true && (g7(), i6?.(), f8.current = false);
  }, [g7, i6]);
  return re(xt, { scope: e5, contentWrapper: o7, shouldExpandOnScrollRef: P8, onScrollButtonChange: se3 }, re("div", { ref: r8, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: re4 } }, re(u3.div, p3({}, s6, { ref: C8, style: { boxSizing: "border-box", maxHeight: "100%", ...s6.style } }))));
});
var _e3 = ee2((t4, a5) => {
  let { __scopeSelect: e5, align: c7 = "start", collisionPadding: s6 = j7, ...d10 } = t4, n4 = me3(e5);
  return re(at2, p3({}, n4, d10, { ref: a5, align: c7, collisionPadding: s6, style: { boxSizing: "border-box", ...d10.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } }));
});
var [xt, ye2] = ce3(ne4, {});
var Te2 = "SelectViewport";
var wt = ee2((t4, a5) => {
  let { __scopeSelect: e5, ...c7 } = t4, s6 = X6(Te2, e5), d10 = ye2(Te2, e5), n4 = u2(a5, s6.onViewportChange), o7 = L(0);
  return re(H, null, re("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" } }), re(ue5.Slot, { scope: e5 }, re(u3.div, p3({ "data-radix-select-viewport": "", role: "presentation" }, c7, { ref: n4, style: { position: "relative", flex: 1, overflow: "auto", ...c7.style }, onScroll: o3(c7.onScroll, (r8) => {
    let l6 = r8.currentTarget, { contentWrapper: $5, shouldExpandOnScrollRef: C8 } = d10;
    if (C8 != null && C8.current && $5) {
      let T8 = Math.abs(o7.current - l6.scrollTop);
      if (T8 > 0) {
        let P8 = window.innerHeight - j7 * 2, f8 = parseFloat($5.style.minHeight), v4 = parseFloat($5.style.height), b10 = Math.max(f8, v4);
        if (b10 < P8) {
          let m9 = b10 + T8, i6 = Math.min(P8, m9), g7 = m9 - i6;
          $5.style.height = i6 + "px", $5.style.bottom === "0px" && (l6.scrollTop = g7 > 0 ? g7 : 0, $5.style.justifyContent = "flex-end");
        }
      }
    }
    o7.current = l6.scrollTop;
  }) }))));
});
var Ct = "SelectGroup";
var [yt2, Pt] = ce3(Ct);
var It = ee2((t4, a5) => {
  let { __scopeSelect: e5, ...c7 } = t4, s6 = n2();
  return re(yt2, { scope: e5, id: s6 }, re(u3.div, p3({ role: "group", "aria-labelledby": s6 }, c7, { ref: a5 })));
});
var _t = "SelectLabel";
var Tt = ee2((t4, a5) => {
  let { __scopeSelect: e5, ...c7 } = t4, s6 = Pt(_t, e5);
  return re(u3.div, p3({ id: s6.id }, c7, { ref: a5 }));
});
var xe3 = "SelectItem";
var [Et, De2] = ce3(xe3);
var Ot = ee2((t4, a5) => {
  let { __scopeSelect: e5, value: c7, disabled: s6 = false, textValue: d10, ...n4 } = t4, o7 = Y3(xe3, e5), r8 = X6(xe3, e5), l6 = o7.value === c7, [$5, C8] = I2(d10 ?? ""), [T8, P8] = I2(false), f8 = u2(a5, (m9) => {
    var i6;
    return (i6 = r8.itemRefCallback) === null || i6 === void 0 ? void 0 : i6.call(r8, m9, c7, s6);
  }), v4 = n2(), b10 = () => {
    s6 || (o7.onValueChange(c7), o7.onOpenChange(false));
  };
  if (c7 === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return re(Et, { scope: e5, value: c7, disabled: s6, textId: v4, isSelected: l6, onItemTextChange: G2((m9) => {
    C8((i6) => {
      var g7;
      return i6 || ((g7 = m9?.textContent) !== null && g7 !== void 0 ? g7 : "").trim();
    });
  }, []) }, re(ue5.ItemSlot, { scope: e5, value: c7, disabled: s6, textValue: $5 }, re(u3.div, p3({ role: "option", "aria-labelledby": v4, "data-highlighted": T8 ? "" : void 0, "aria-selected": l6 && T8, "data-state": l6 ? "checked" : "unchecked", "aria-disabled": s6 || void 0, "data-disabled": s6 ? "" : void 0, tabIndex: s6 ? void 0 : -1 }, n4, { ref: f8, onFocus: o3(n4.onFocus, () => P8(true)), onBlur: o3(n4.onBlur, () => P8(false)), onPointerUp: o3(n4.onPointerUp, b10), onPointerMove: o3(n4.onPointerMove, (m9) => {
    if (s6) {
      var i6;
      (i6 = r8.onItemLeave) === null || i6 === void 0 || i6.call(r8);
    } else
      m9.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: o3(n4.onPointerLeave, (m9) => {
    if (m9.currentTarget === document.activeElement) {
      var i6;
      (i6 = r8.onItemLeave) === null || i6 === void 0 || i6.call(r8);
    }
  }), onKeyDown: o3(n4.onKeyDown, (m9) => {
    var i6;
    ((i6 = r8.searchRef) === null || i6 === void 0 ? void 0 : i6.current) !== "" && m9.key === " " || (st2.includes(m9.key) && b10(), m9.key === " " && m9.preventDefault());
  }) }))));
});
var de4 = "SelectItemText";
var Nt = ee2((t4, a5) => {
  let { __scopeSelect: e5, className: c7, style: s6, ...d10 } = t4, n4 = Y3(de4, e5), o7 = X6(de4, e5), r8 = De2(de4, e5), l6 = dt2(de4, e5), [$5, C8] = I2(null), T8 = u2(a5, (m9) => C8(m9), r8.onItemTextChange, (m9) => {
    var i6;
    return (i6 = o7.itemTextRefCallback) === null || i6 === void 0 ? void 0 : i6.call(o7, m9, r8.value, r8.disabled);
  }), P8 = $5?.textContent, f8 = T(() => re("option", { key: r8.value, value: r8.value, disabled: r8.disabled }, P8), [r8.disabled, r8.value, P8]), { onNativeOptionAdd: v4, onNativeOptionRemove: b10 } = l6;
  return e(() => (v4(f8), () => b10(f8)), [v4, b10, f8]), re(H, null, re(u3.span, p3({ id: r8.textId }, d10, { ref: T8 })), r8.isSelected && n4.valueNode && !n4.valueNodeHasChildren ? ae2(d10.children, n4.valueNode) : null);
});
var Rt = "SelectItemIndicator";
var At = ee2((t4, a5) => {
  let { __scopeSelect: e5, ...c7 } = t4;
  return De2(Rt, e5).isSelected ? re(u3.span, p3({ "aria-hidden": true }, c7, { ref: a5 })) : null;
});
var Ee3 = "SelectScrollUpButton";
var Mt = ee2((t4, a5) => {
  let e5 = X6(Ee3, t4.__scopeSelect), c7 = ye2(Ee3, t4.__scopeSelect), [s6, d10] = I2(false), n4 = u2(a5, c7.onScrollButtonChange);
  return e(() => {
    if (e5.viewport && e5.isPositioned) {
      let r8 = function() {
        let l6 = o7.scrollTop > 0;
        d10(l6);
      }, o7 = e5.viewport;
      return r8(), o7.addEventListener("scroll", r8), () => o7.removeEventListener("scroll", r8);
    }
  }, [e5.viewport, e5.isPositioned]), s6 ? re(Le2, p3({}, t4, { ref: n4, onAutoScroll: () => {
    let { viewport: o7, selectedItem: r8 } = e5;
    o7 && r8 && (o7.scrollTop = o7.scrollTop - r8.offsetHeight);
  } })) : null;
});
var Oe2 = "SelectScrollDownButton";
var Dt = ee2((t4, a5) => {
  let e5 = X6(Oe2, t4.__scopeSelect), c7 = ye2(Oe2, t4.__scopeSelect), [s6, d10] = I2(false), n4 = u2(a5, c7.onScrollButtonChange);
  return e(() => {
    if (e5.viewport && e5.isPositioned) {
      let r8 = function() {
        let l6 = o7.scrollHeight - o7.clientHeight, $5 = Math.ceil(o7.scrollTop) < l6;
        d10($5);
      }, o7 = e5.viewport;
      return r8(), o7.addEventListener("scroll", r8), () => o7.removeEventListener("scroll", r8);
    }
  }, [e5.viewport, e5.isPositioned]), s6 ? re(Le2, p3({}, t4, { ref: n4, onAutoScroll: () => {
    let { viewport: o7, selectedItem: r8 } = e5;
    o7 && r8 && (o7.scrollTop = o7.scrollTop + r8.offsetHeight);
  } })) : null;
});
var Le2 = ee2((t4, a5) => {
  let { __scopeSelect: e5, onAutoScroll: c7, ...s6 } = t4, d10 = X6("SelectScrollButton", e5), n4 = L(null), o7 = fe5(e5), r8 = G2(() => {
    n4.current !== null && (window.clearInterval(n4.current), n4.current = null);
  }, []);
  return z2(() => () => r8(), [r8]), e(() => {
    var l6;
    let $5 = o7().find((C8) => C8.ref.current === document.activeElement);
    $5 == null || (l6 = $5.ref.current) === null || l6 === void 0 || l6.scrollIntoView({ block: "nearest" });
  }, [o7]), re(u3.div, p3({ "aria-hidden": true }, s6, { ref: a5, style: { flexShrink: 0, ...s6.style }, onPointerDown: o3(s6.onPointerDown, () => {
    n4.current === null && (n4.current = window.setInterval(c7, 50));
  }), onPointerMove: o3(s6.onPointerMove, () => {
    var l6;
    (l6 = d10.onItemLeave) === null || l6 === void 0 || l6.call(d10), n4.current === null && (n4.current = window.setInterval(c7, 50));
  }), onPointerLeave: o3(s6.onPointerLeave, () => {
    r8();
  }) }));
});
var Lt = ee2((t4, a5) => {
  let { __scopeSelect: e5, ...c7 } = t4;
  return re(u3.div, p3({ "aria-hidden": true }, c7, { ref: a5 }));
});
var Ne3 = "SelectArrow";
var Vt = ee2((t4, a5) => {
  let { __scopeSelect: e5, ...c7 } = t4, s6 = me3(e5), d10 = Y3(Ne3, e5), n4 = X6(Ne3, e5);
  return d10.open && n4.position === "popper" ? re(nt2, p3({}, s6, c7, { ref: a5 })) : null;
});
function Ve2(t4) {
  return t4 === "" || t4 === void 0;
}
var He2 = ee2((t4, a5) => {
  let { value: e5, ...c7 } = t4, s6 = L(null), d10 = u2(a5, s6), n4 = t2(e5);
  return z2(() => {
    let o7 = s6.current, r8 = window.HTMLSelectElement.prototype, $5 = Object.getOwnPropertyDescriptor(r8, "value").set;
    if (n4 !== e5 && $5) {
      let C8 = new Event("change", { bubbles: true });
      $5.call(o7, e5), o7.dispatchEvent(C8);
    }
  }, [n4, e5]), re(n3, { asChild: true }, re("select", p3({}, c7, { ref: d10, defaultValue: e5 })));
});
He2.displayName = "BubbleSelect";
function Be(t4) {
  let a5 = l2(t4), e5 = L(""), c7 = L(0), s6 = G2((n4) => {
    let o7 = e5.current + n4;
    a5(o7), function r8(l6) {
      e5.current = l6, window.clearTimeout(c7.current), l6 !== "" && (c7.current = window.setTimeout(() => r8(""), 1e3));
    }(o7);
  }, [a5]), d10 = G2(() => {
    e5.current = "", window.clearTimeout(c7.current);
  }, []);
  return z2(() => () => window.clearTimeout(c7.current), []), [e5, s6, d10];
}
function ke2(t4, a5, e5) {
  let s6 = a5.length > 1 && Array.from(a5).every((l6) => l6 === a5[0]) ? a5[0] : a5, d10 = e5 ? t4.indexOf(e5) : -1, n4 = Ht(t4, Math.max(d10, 0));
  s6.length === 1 && (n4 = n4.filter((l6) => l6 !== e5));
  let r8 = n4.find((l6) => l6.textValue.toLowerCase().startsWith(s6.toLowerCase()));
  return r8 !== e5 ? r8 : void 0;
}
function Ht(t4, a5) {
  return t4.map((e5, c7) => t4[(a5 + c7) % t4.length]);
}
var po = pt2;
var uo = ft2;
var fo = $t;
var mo = vt2;
var $o = gt2;
var vo = ht2;
var go = wt;
var ho = It;
var So = Tt;
var bo = Ot;
var xo = Nt;
var wo = At;
var Po = Lt;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o6(r8) {
  var f8, n4, t4 = "";
  if (typeof r8 == "string" || typeof r8 == "number")
    t4 += r8;
  else if (typeof r8 == "object")
    if (Array.isArray(r8))
      for (f8 = 0; f8 < r8.length; f8++)
        r8[f8] && (n4 = o6(r8[f8])) && (t4 && (t4 += " "), t4 += n4);
    else
      for (f8 in r8)
        r8[f8] && (t4 && (t4 += " "), t4 += f8);
  return t4;
}
function e4() {
  for (var r8, f8, n4 = 0, t4 = ""; n4 < arguments.length; )
    (r8 = arguments[n4++]) && (f8 = o6(r8)) && (t4 && (t4 += " "), t4 += f8);
  return t4;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r8, e5) => {
  for (var t4 in e5)
    Ar(r8, t4, { get: e5[t4], enumerable: true });
};
function U4() {
  for (var r8 = 0, e5, t4, o7 = ""; r8 < arguments.length; )
    (e5 = arguments[r8++]) && (t4 = lr(e5)) && (o7 && (o7 += " "), o7 += t4);
  return o7;
}
function lr(r8) {
  if (typeof r8 == "string")
    return r8;
  for (var e5, t4 = "", o7 = 0; o7 < r8.length; o7++)
    r8[o7] && (e5 = lr(r8[o7])) && (t4 && (t4 += " "), t4 += e5);
  return t4;
}
var Z3 = "-";
function ur(r8) {
  var e5 = Sr(r8), t4 = r8.conflictingClassGroups, o7 = r8.conflictingClassGroupModifiers, a5 = o7 === void 0 ? {} : o7;
  function s6(i6) {
    var c7 = i6.split(Z3);
    return c7[0] === "" && c7.length !== 1 && c7.shift(), pr(c7, e5) || kr(i6);
  }
  function n4(i6, c7) {
    var u7 = t4[i6] || [];
    return c7 && a5[i6] ? [].concat(u7, a5[i6]) : u7;
  }
  return { getClassGroupId: s6, getConflictingClassGroupIds: n4 };
}
function pr(r8, e5) {
  if (r8.length === 0)
    return e5.classGroupId;
  var t4 = r8[0], o7 = e5.nextPart.get(t4), a5 = o7 ? pr(r8.slice(1), o7) : void 0;
  if (a5)
    return a5;
  if (e5.validators.length !== 0) {
    var s6 = r8.join(Z3);
    return e5.validators.find(function(n4) {
      var i6 = n4.validator;
      return i6(s6);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r8) {
  if (dr.test(r8)) {
    var e5 = dr.exec(r8)[1], t4 = e5?.substring(0, e5.indexOf(":"));
    if (t4)
      return "arbitrary.." + t4;
  }
}
function Sr(r8) {
  var e5 = r8.theme, t4 = r8.prefix, o7 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a5 = Gr(Object.entries(r8.classGroups), t4);
  return a5.forEach(function(s6) {
    var n4 = s6[0], i6 = s6[1];
    q8(i6, o7, n4, e5);
  }), o7;
}
function q8(r8, e5, t4, o7) {
  r8.forEach(function(a5) {
    if (typeof a5 == "string") {
      var s6 = a5 === "" ? e5 : cr(e5, a5);
      s6.classGroupId = t4;
      return;
    }
    if (typeof a5 == "function") {
      if (zr(a5)) {
        q8(a5(o7), e5, t4, o7);
        return;
      }
      e5.validators.push({ validator: a5, classGroupId: t4 });
      return;
    }
    Object.entries(a5).forEach(function(n4) {
      var i6 = n4[0], c7 = n4[1];
      q8(c7, cr(e5, i6), t4, o7);
    });
  });
}
function cr(r8, e5) {
  var t4 = r8;
  return e5.split(Z3).forEach(function(o7) {
    t4.nextPart.has(o7) || t4.nextPart.set(o7, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t4 = t4.nextPart.get(o7);
  }), t4;
}
function zr(r8) {
  return r8.isThemeGetter;
}
function Gr(r8, e5) {
  return e5 ? r8.map(function(t4) {
    var o7 = t4[0], a5 = t4[1], s6 = a5.map(function(n4) {
      return typeof n4 == "string" ? e5 + n4 : typeof n4 == "object" ? Object.fromEntries(Object.entries(n4).map(function(i6) {
        var c7 = i6[0], u7 = i6[1];
        return [e5 + c7, u7];
      })) : n4;
    });
    return [o7, s6];
  }) : r8;
}
function fr(r8) {
  if (r8 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e5 = 0, t4 = /* @__PURE__ */ new Map(), o7 = /* @__PURE__ */ new Map();
  function a5(s6, n4) {
    t4.set(s6, n4), e5++, e5 > r8 && (e5 = 0, o7 = t4, t4 = /* @__PURE__ */ new Map());
  }
  return { get: function(n4) {
    var i6 = t4.get(n4);
    if (i6 !== void 0)
      return i6;
    if ((i6 = o7.get(n4)) !== void 0)
      return a5(n4, i6), i6;
  }, set: function(n4, i6) {
    t4.has(n4) ? t4.set(n4, i6) : a5(n4, i6);
  } };
}
var X7 = "!";
function br(r8) {
  var e5 = r8.separator || ":", t4 = e5.length === 1, o7 = e5[0], a5 = e5.length;
  return function(n4) {
    for (var i6 = [], c7 = 0, u7 = 0, b10, f8 = 0; f8 < n4.length; f8++) {
      var g7 = n4[f8];
      if (c7 === 0) {
        if (g7 === o7 && (t4 || n4.slice(f8, f8 + a5) === e5)) {
          i6.push(n4.slice(u7, f8)), u7 = f8 + a5;
          continue;
        }
        if (g7 === "/") {
          b10 = f8;
          continue;
        }
      }
      g7 === "[" ? c7++ : g7 === "]" && c7--;
    }
    var y6 = i6.length === 0 ? n4 : n4.substring(u7), x10 = y6.startsWith(X7), m9 = x10 ? y6.substring(1) : y6, w9 = b10 && b10 > u7 ? b10 - u7 : void 0;
    return { modifiers: i6, hasImportantModifier: x10, baseClassName: m9, maybePostfixModifierPosition: w9 };
  };
}
function gr(r8) {
  if (r8.length <= 1)
    return r8;
  var e5 = [], t4 = [];
  return r8.forEach(function(o7) {
    var a5 = o7[0] === "[";
    a5 ? (e5.push.apply(e5, t4.sort().concat([o7])), t4 = []) : t4.push(o7);
  }), e5.push.apply(e5, t4.sort()), e5;
}
function mr(r8) {
  return { cache: fr(r8.cacheSize), splitModifiers: br(r8), ...ur(r8) };
}
var Ir = /\s+/;
function vr(r8, e5) {
  var t4 = e5.splitModifiers, o7 = e5.getClassGroupId, a5 = e5.getConflictingClassGroupIds, s6 = /* @__PURE__ */ new Set();
  return r8.trim().split(Ir).map(function(n4) {
    var i6 = t4(n4), c7 = i6.modifiers, u7 = i6.hasImportantModifier, b10 = i6.baseClassName, f8 = i6.maybePostfixModifierPosition, g7 = o7(f8 ? b10.substring(0, f8) : b10), y6 = !!f8;
    if (!g7) {
      if (!f8)
        return { isTailwindClass: false, originalClassName: n4 };
      if (g7 = o7(b10), !g7)
        return { isTailwindClass: false, originalClassName: n4 };
      y6 = false;
    }
    var x10 = gr(c7).join(":"), m9 = u7 ? x10 + X7 : x10;
    return { isTailwindClass: true, modifierId: m9, classGroupId: g7, originalClassName: n4, hasPostfixModifier: y6 };
  }).reverse().filter(function(n4) {
    if (!n4.isTailwindClass)
      return true;
    var i6 = n4.modifierId, c7 = n4.classGroupId, u7 = n4.hasPostfixModifier, b10 = i6 + c7;
    return s6.has(b10) ? false : (s6.add(b10), a5(c7, u7).forEach(function(f8) {
      return s6.add(i6 + f8);
    }), true);
  }).reverse().map(function(n4) {
    return n4.originalClassName;
  }).join(" ");
}
function P7() {
  for (var r8 = arguments.length, e5 = new Array(r8), t4 = 0; t4 < r8; t4++)
    e5[t4] = arguments[t4];
  var o7, a5, s6, n4 = i6;
  function i6(u7) {
    var b10 = e5[0], f8 = e5.slice(1), g7 = f8.reduce(function(y6, x10) {
      return x10(y6);
    }, b10());
    return o7 = mr(g7), a5 = o7.cache.get, s6 = o7.cache.set, n4 = c7, c7(u7);
  }
  function c7(u7) {
    var b10 = a5(u7);
    if (b10)
      return b10;
    var f8 = vr(u7, o7);
    return s6(u7, f8), f8;
  }
  return function() {
    return n4(U4.apply(null, arguments));
  };
}
function d8(r8) {
  var e5 = function(o7) {
    return o7[r8] || [];
  };
  return e5.isThemeGetter = true, e5;
}
var wr = {};
Mr(wr, { isAny: () => G6, isArbitraryLength: () => L8, isArbitraryNumber: () => S9, isArbitraryPosition: () => Q8, isArbitraryShadow: () => D5, isArbitrarySize: () => H4, isArbitraryUrl: () => V6, isArbitraryValue: () => l5, isArbitraryWeight: () => Wr, isInteger: () => z6, isLength: () => h8, isNumber: () => M8, isPercent: () => Y4, isTshirtSize: () => C7 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h8(r8) {
  return M8(r8) || Tr.has(r8) || Pr.test(r8) || L8(r8);
}
function L8(r8) {
  return I7(r8, "length", Er);
}
function H4(r8) {
  return I7(r8, "size", xr);
}
function Q8(r8) {
  return I7(r8, "position", xr);
}
function V6(r8) {
  return I7(r8, "url", jr);
}
function S9(r8) {
  return I7(r8, "number", M8);
}
var Wr = S9;
function M8(r8) {
  return !Number.isNaN(Number(r8));
}
function Y4(r8) {
  return r8.endsWith("%") && M8(r8.slice(0, -1));
}
function z6(r8) {
  return hr(r8) || I7(r8, "number", hr);
}
function l5(r8) {
  return yr.test(r8);
}
function G6() {
  return true;
}
function C7(r8) {
  return Rr.test(r8);
}
function D5(r8) {
  return I7(r8, "", Ur);
}
function I7(r8, e5, t4) {
  var o7 = yr.exec(r8);
  return o7 ? o7[1] ? o7[1] === e5 : t4(o7[2]) : false;
}
function Er(r8) {
  return Nr.test(r8);
}
function xr() {
  return false;
}
function jr(r8) {
  return r8.startsWith("url(");
}
function hr(r8) {
  return Number.isInteger(Number(r8));
}
function Ur(r8) {
  return Lr.test(r8);
}
function T7() {
  var r8 = d8("colors"), e5 = d8("spacing"), t4 = d8("blur"), o7 = d8("brightness"), a5 = d8("borderColor"), s6 = d8("borderRadius"), n4 = d8("borderSpacing"), i6 = d8("borderWidth"), c7 = d8("contrast"), u7 = d8("grayscale"), b10 = d8("hueRotate"), f8 = d8("invert"), g7 = d8("gap"), y6 = d8("gradientColorStops"), x10 = d8("gradientColorStopPositions"), m9 = d8("inset"), w9 = d8("margin"), k6 = d8("opacity"), A6 = d8("padding"), K3 = d8("saturate"), O8 = d8("scale"), rr = d8("sepia"), er = d8("skew"), tr = d8("space"), or = d8("translate"), $5 = function() {
    return ["auto", "contain", "none"];
  }, B4 = function() {
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
  }, J6 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R5 = function() {
    return ["", "0", l5];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N5 = function() {
    return [M8, S9];
  }, j8 = function() {
    return [M8, l5];
  };
  return { cacheSize: 500, theme: { colors: [G6], spacing: [h8], blur: ["none", "", C7, l5], brightness: N5(), borderColor: [r8], borderRadius: ["none", "", "full", C7, l5], borderSpacing: p8(), borderWidth: nr(), contrast: N5(), grayscale: R5(), hueRotate: j8(), invert: R5(), gap: p8(), gradientColorStops: [r8], gradientColorStopPositions: [Y4, L8], inset: F6(), margin: F6(), opacity: N5(), padding: p8(), saturate: N5(), scale: N5(), sepia: R5(), skew: j8(), space: p8(), translate: p8() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l5] }], container: ["container"], columns: [{ columns: [C7] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l5]) }], overflow: [{ overflow: B4() }], "overflow-x": [{ "overflow-x": B4() }], "overflow-y": [{ "overflow-y": B4() }], overscroll: [{ overscroll: $5() }], "overscroll-x": [{ "overscroll-x": $5() }], "overscroll-y": [{ "overscroll-y": $5() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m9] }], "inset-x": [{ "inset-x": [m9] }], "inset-y": [{ "inset-y": [m9] }], start: [{ start: [m9] }], end: [{ end: [m9] }], top: [{ top: [m9] }], right: [{ right: [m9] }], bottom: [{ bottom: [m9] }], left: [{ left: [m9] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z6] }], basis: [{ basis: F6() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l5] }], grow: [{ grow: R5() }], shrink: [{ shrink: R5() }], order: [{ order: ["first", "last", "none", z6] }], "grid-cols": [{ "grid-cols": [G6] }], "col-start-end": [{ col: ["auto", { span: ["full", z6] }, l5] }], "col-start": [{ "col-start": W7() }], "col-end": [{ "col-end": W7() }], "grid-rows": [{ "grid-rows": [G6] }], "row-start-end": [{ row: ["auto", { span: [z6] }, l5] }], "row-start": [{ "row-start": W7() }], "row-end": [{ "row-end": W7() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l5] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l5] }], gap: [{ gap: [g7] }], "gap-x": [{ "gap-x": [g7] }], "gap-y": [{ "gap-y": [g7] }], "justify-content": [{ justify: ["normal"].concat(J6()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J6(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J6(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A6] }], px: [{ px: [A6] }], py: [{ py: [A6] }], ps: [{ ps: [A6] }], pe: [{ pe: [A6] }], pt: [{ pt: [A6] }], pr: [{ pr: [A6] }], pb: [{ pb: [A6] }], pl: [{ pl: [A6] }], m: [{ m: [w9] }], mx: [{ mx: [w9] }], my: [{ my: [w9] }], ms: [{ ms: [w9] }], me: [{ me: [w9] }], mt: [{ mt: [w9] }], mr: [{ mr: [w9] }], mb: [{ mb: [w9] }], ml: [{ ml: [w9] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l5, e5] }], "min-w": [{ "min-w": ["min", "max", "fit", l5, h8] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C7] }, C7, l5] }], h: [{ h: [l5, e5, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l5, h8] }], "max-h": [{ "max-h": [l5, e5, "min", "max", "fit"] }], "font-size": [{ text: ["base", C7, L8] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S9] }], "font-family": [{ font: [G6] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l5] }], "line-clamp": [{ "line-clamp": ["none", M8, S9] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l5, h8] }], "list-image": [{ "list-image": ["none", l5] }], "list-style-type": [{ list: ["none", "disc", "decimal", l5] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r8] }], "placeholder-opacity": [{ "placeholder-opacity": [k6] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r8] }], "text-opacity": [{ "text-opacity": [k6] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E9(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h8] }], "underline-offset": [{ "underline-offset": ["auto", l5, h8] }], "text-decoration-color": [{ decoration: [r8] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p8() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l5] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l5] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k6] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q8]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H4] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V6] }], "bg-color": [{ bg: [r8] }], "gradient-from-pos": [{ from: [x10] }], "gradient-via-pos": [{ via: [x10] }], "gradient-to-pos": [{ to: [x10] }], "gradient-from": [{ from: [y6] }], "gradient-via": [{ via: [y6] }], "gradient-to": [{ to: [y6] }], rounded: [{ rounded: [s6] }], "rounded-s": [{ "rounded-s": [s6] }], "rounded-e": [{ "rounded-e": [s6] }], "rounded-t": [{ "rounded-t": [s6] }], "rounded-r": [{ "rounded-r": [s6] }], "rounded-b": [{ "rounded-b": [s6] }], "rounded-l": [{ "rounded-l": [s6] }], "rounded-ss": [{ "rounded-ss": [s6] }], "rounded-se": [{ "rounded-se": [s6] }], "rounded-ee": [{ "rounded-ee": [s6] }], "rounded-es": [{ "rounded-es": [s6] }], "rounded-tl": [{ "rounded-tl": [s6] }], "rounded-tr": [{ "rounded-tr": [s6] }], "rounded-br": [{ "rounded-br": [s6] }], "rounded-bl": [{ "rounded-bl": [s6] }], "border-w": [{ border: [i6] }], "border-w-x": [{ "border-x": [i6] }], "border-w-y": [{ "border-y": [i6] }], "border-w-s": [{ "border-s": [i6] }], "border-w-e": [{ "border-e": [i6] }], "border-w-t": [{ "border-t": [i6] }], "border-w-r": [{ "border-r": [i6] }], "border-w-b": [{ "border-b": [i6] }], "border-w-l": [{ "border-l": [i6] }], "border-opacity": [{ "border-opacity": [k6] }], "border-style": [{ border: [].concat(E9(), ["hidden"]) }], "divide-x": [{ "divide-x": [i6] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i6] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k6] }], "divide-style": [{ divide: E9() }], "border-color": [{ border: [a5] }], "border-color-x": [{ "border-x": [a5] }], "border-color-y": [{ "border-y": [a5] }], "border-color-t": [{ "border-t": [a5] }], "border-color-r": [{ "border-r": [a5] }], "border-color-b": [{ "border-b": [a5] }], "border-color-l": [{ "border-l": [a5] }], "divide-color": [{ divide: [a5] }], "outline-style": [{ outline: [""].concat(E9()) }], "outline-offset": [{ "outline-offset": [l5, h8] }], "outline-w": [{ outline: [h8] }], "outline-color": [{ outline: [r8] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r8] }], "ring-opacity": [{ "ring-opacity": [k6] }], "ring-offset-w": [{ "ring-offset": [h8] }], "ring-offset-color": [{ "ring-offset": [r8] }], shadow: [{ shadow: ["", "inner", "none", C7, D5] }], "shadow-color": [{ shadow: [G6] }], opacity: [{ opacity: [k6] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t4] }], brightness: [{ brightness: [o7] }], contrast: [{ contrast: [c7] }], "drop-shadow": [{ "drop-shadow": ["", "none", C7, l5] }], grayscale: [{ grayscale: [u7] }], "hue-rotate": [{ "hue-rotate": [b10] }], invert: [{ invert: [f8] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t4] }], "backdrop-brightness": [{ "backdrop-brightness": [o7] }], "backdrop-contrast": [{ "backdrop-contrast": [c7] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u7] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b10] }], "backdrop-invert": [{ "backdrop-invert": [f8] }], "backdrop-opacity": [{ "backdrop-opacity": [k6] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n4] }], "border-spacing-x": [{ "border-spacing-x": [n4] }], "border-spacing-y": [{ "border-spacing-y": [n4] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l5] }], duration: [{ duration: j8() }], ease: [{ ease: ["linear", "in", "out", "in-out", l5] }], delay: [{ delay: j8() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l5] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O8] }], "scale-x": [{ "scale-x": [O8] }], "scale-y": [{ "scale-y": [O8] }], rotate: [{ rotate: [z6, l5] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l5] }], accent: [{ accent: ["auto", r8] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l5] }], "caret-color": [{ caret: [r8] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p8() }], "scroll-mx": [{ "scroll-mx": p8() }], "scroll-my": [{ "scroll-my": p8() }], "scroll-ms": [{ "scroll-ms": p8() }], "scroll-me": [{ "scroll-me": p8() }], "scroll-mt": [{ "scroll-mt": p8() }], "scroll-mr": [{ "scroll-mr": p8() }], "scroll-mb": [{ "scroll-mb": p8() }], "scroll-ml": [{ "scroll-ml": p8() }], "scroll-p": [{ "scroll-p": p8() }], "scroll-px": [{ "scroll-px": p8() }], "scroll-py": [{ "scroll-py": p8() }], "scroll-ps": [{ "scroll-ps": p8() }], "scroll-pe": [{ "scroll-pe": p8() }], "scroll-pt": [{ "scroll-pt": p8() }], "scroll-pr": [{ "scroll-pr": p8() }], "scroll-pb": [{ "scroll-pb": p8() }], "scroll-pl": [{ "scroll-pl": p8() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l5] }], fill: [{ fill: [r8, "none"] }], "stroke-w": [{ stroke: [h8, S9] }], stroke: [{ stroke: [r8, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P7(T7);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e4(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d9 = 0;
var x9 = Array.isArray;
function g6(t4, r8, e5, a5, o7, i6) {
  var s6, n4, f8 = {};
  for (n4 in r8)
    n4 == "ref" ? s6 = r8[n4] : f8[n4] = r8[n4];
  var u7 = { type: t4, props: f8, key: e5, ref: s6, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d9, __i: -1, __u: 0, __source: o7, __self: i6 };
  if (typeof t4 == "function" && (s6 = t4.defaultProps))
    for (n4 in s6)
      f8[n4] === void 0 && (f8[n4] = s6[n4]);
  return a.vnode && a.vnode(u7), u7;
}

// ../components/ui/select.tsx
var Select = po;
var SelectGroup = ho;
var SelectValue = fo;
var SelectTrigger = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g6(
  uo,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ g6(mo, { asChild: true, children: /* @__PURE__ */ g6("span", { className: "i-lucide:chevron-down flex h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = uo.displayName;
var SelectContent = ee2(({ class: className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ g6($o, { children: /* @__PURE__ */ g6(
  vo,
  {
    ref,
    className: cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      position === "popper" && "translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ g6(
      go,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = vo.displayName;
var SelectLabel = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g6(So, { ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = So.displayName;
var SelectItem = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g6(
  bo,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ g6("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ g6(wo, { children: /* @__PURE__ */ g6("span", { className: "i-lucide:check flex h-4 w-4" }) }) }),
      /* @__PURE__ */ g6(xo, { children })
    ]
  }
));
SelectItem.displayName = bo.displayName;
var SelectSeparator = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g6(Po, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = Po.displayName;
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
};
