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
  for (var t3 in _4)
    e5[t3] = _4[t3];
  return e5;
}
function Z(e5) {
  var _4 = e5.parentNode;
  _4 && _4.removeChild(e5);
}
function re(e5, _4, t3) {
  var i6, n3, r8, l6 = {};
  for (r8 in _4)
    r8 == "key" ? i6 = _4[r8] : r8 == "ref" ? n3 = _4[r8] : l6[r8] = _4[r8];
  if (arguments.length > 2 && (l6.children = arguments.length > 3 ? D.call(arguments, 2) : t3), typeof e5 == "function" && e5.defaultProps != null)
    for (r8 in e5.defaultProps)
      l6[r8] === void 0 && (l6[r8] = e5.defaultProps[r8]);
  return S(e5, l6, i6, n3, null);
}
function S(e5, _4, t3, i6, n3) {
  var r8 = { type: e5, props: _4, key: t3, ref: i6, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r8), r8;
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
  for (var t3; _4 < e5.__k.length; _4++)
    if ((t3 = e5.__k[_4]) != null && t3.__e != null)
      return t3.__e;
  return typeof e5.type == "function" ? w(e5) : null;
}
function ie(e5, _4, t3) {
  var i6, n3 = e5.__v, r8 = n3.__e, l6 = e5.__P;
  if (l6)
    return (i6 = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i6), G(l6, i6, n3, e5.__n, l6.ownerSVGElement !== void 0, 32 & n3.__u ? [r8] : null, _4, r8 ?? w(n3), !!(32 & n3.__u), t3), i6.__v = n3.__v, i6.__.__k[i6.__i] = i6, i6.__d = void 0, i6.__e != r8 && ee(i6), i6;
}
function ee(e5) {
  var _4, t3;
  if ((e5 = e5.__) != null && e5.__c != null) {
    for (e5.__e = e5.__c.base = null, _4 = 0; _4 < e5.__k.length; _4++)
      if ((t3 = e5.__k[_4]) != null && t3.__e != null) {
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
  var e5, _4, t3, i6 = [], n3 = [];
  for (x.sort($); e5 = x.shift(); )
    e5.__d && (t3 = x.length, _4 = ie(e5, i6, n3) || _4, t3 === 0 || x.length > t3 ? (R(i6, _4, n3), n3.length = i6.length = 0, _4 = void 0, x.sort($)) : _4 && a.__c && a.__c(_4, O));
  _4 && R(i6, _4, n3), A.__r = 0;
}
function _e(e5, _4, t3, i6, n3, r8, l6, u7, c7, s6, p8) {
  var o7, m9, f8, h9, k6, v4 = i6 && i6.__k || O, d11 = _4.length;
  for (t3.__d = c7, le(t3, _4, v4), c7 = t3.__d, o7 = 0; o7 < d11; o7++)
    (f8 = t3.__k[o7]) != null && typeof f8 != "boolean" && typeof f8 != "function" && (m9 = f8.__i === -1 ? E : v4[f8.__i] || E, f8.__i = o7, G(e5, f8, m9, n3, r8, l6, u7, c7, s6, p8), h9 = f8.__e, f8.ref && m9.ref != f8.ref && (m9.ref && V(m9.ref, null, f8), p8.push(f8.ref, f8.__c || h9, f8)), k6 == null && h9 != null && (k6 = h9), 65536 & f8.__u || m9.__k === f8.__k ? c7 = te(f8, c7, e5) : typeof f8.type == "function" && f8.__d !== void 0 ? c7 = f8.__d : h9 && (c7 = h9.nextSibling), f8.__d = void 0, f8.__u &= -196609);
  t3.__d = c7, t3.__e = k6;
}
function le(e5, _4, t3) {
  var i6, n3, r8, l6, u7, c7 = _4.length, s6 = t3.length, p8 = s6, o7 = 0;
  for (e5.__k = [], i6 = 0; i6 < c7; i6++)
    l6 = i6 + o7, (n3 = e5.__k[i6] = (n3 = _4[i6]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e5, n3.__b = e5.__b + 1, u7 = ue(n3, t3, l6, p8), n3.__i = u7, r8 = null, u7 !== -1 && (p8--, (r8 = t3[u7]) && (r8.__u |= 131072)), r8 == null || r8.__v === null ? (u7 == -1 && o7--, typeof n3.type != "function" && (n3.__u |= 65536)) : u7 !== l6 && (u7 === l6 + 1 ? o7++ : u7 > l6 ? p8 > c7 - l6 ? o7 += u7 - l6 : o7-- : u7 < l6 ? u7 == l6 - 1 && (o7 = u7 - l6) : o7 = 0, u7 !== i6 + o7 && (n3.__u |= 65536))) : (r8 = t3[l6]) && r8.key == null && r8.__e && !(131072 & r8.__u) && (r8.__e == e5.__d && (e5.__d = w(r8)), B(r8, r8, false), t3[l6] = null, p8--);
  if (p8)
    for (i6 = 0; i6 < s6; i6++)
      (r8 = t3[i6]) != null && !(131072 & r8.__u) && (r8.__e == e5.__d && (e5.__d = w(r8)), B(r8, r8));
}
function te(e5, _4, t3) {
  var i6, n3;
  if (typeof e5.type == "function") {
    for (i6 = e5.__k, n3 = 0; i6 && n3 < i6.length; n3++)
      i6[n3] && (i6[n3].__ = e5, _4 = te(i6[n3], _4, t3));
    return _4;
  }
  e5.__e != _4 && (t3.insertBefore(e5.__e, _4 || null), _4 = e5.__e);
  do
    _4 = _4 && _4.nextSibling;
  while (_4 != null && _4.nodeType === 8);
  return _4;
}
function se(e5, _4) {
  return _4 = _4 || [], e5 == null || typeof e5 == "boolean" || (F(e5) ? e5.some(function(t3) {
    se(t3, _4);
  }) : _4.push(e5)), _4;
}
function ue(e5, _4, t3, i6) {
  var n3 = e5.key, r8 = e5.type, l6 = t3 - 1, u7 = t3 + 1, c7 = _4[t3];
  if (c7 === null || c7 && n3 == c7.key && r8 === c7.type && !(131072 & c7.__u))
    return t3;
  if (i6 > (c7 != null && !(131072 & c7.__u) ? 1 : 0))
    for (; l6 >= 0 || u7 < _4.length; ) {
      if (l6 >= 0) {
        if ((c7 = _4[l6]) && !(131072 & c7.__u) && n3 == c7.key && r8 === c7.type)
          return l6;
        l6--;
      }
      if (u7 < _4.length) {
        if ((c7 = _4[u7]) && !(131072 & c7.__u) && n3 == c7.key && r8 === c7.type)
          return u7;
        u7++;
      }
    }
  return -1;
}
function q(e5, _4, t3) {
  _4[0] === "-" ? e5.setProperty(_4, t3 ?? "") : e5[_4] = t3 == null ? "" : typeof t3 != "number" || oe.test(_4) ? t3 : t3 + "px";
}
function M(e5, _4, t3, i6, n3) {
  var r8;
  e:
    if (_4 === "style")
      if (typeof t3 == "string")
        e5.style.cssText = t3;
      else {
        if (typeof i6 == "string" && (e5.style.cssText = i6 = ""), i6)
          for (_4 in i6)
            t3 && _4 in t3 || q(e5.style, _4, "");
        if (t3)
          for (_4 in t3)
            i6 && t3[_4] === i6[_4] || q(e5.style, _4, t3[_4]);
      }
    else if (_4[0] === "o" && _4[1] === "n")
      r8 = _4 !== (_4 = _4.replace(/(PointerCapture)$|Capture$/i, "$1")), _4 = _4.toLowerCase() in e5 ? _4.toLowerCase().slice(2) : _4.slice(2), e5.l || (e5.l = {}), e5.l[_4 + r8] = t3, t3 ? i6 ? t3.u = i6.u : (t3.u = Date.now(), e5.addEventListener(_4, r8 ? K : J, r8)) : e5.removeEventListener(_4, r8 ? K : J, r8);
    else {
      if (n3)
        _4 = _4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_4 !== "width" && _4 !== "height" && _4 !== "href" && _4 !== "list" && _4 !== "form" && _4 !== "tabIndex" && _4 !== "download" && _4 !== "rowSpan" && _4 !== "colSpan" && _4 !== "role" && _4 in e5)
        try {
          e5[_4] = t3 ?? "";
          break e;
        } catch {
        }
      typeof t3 == "function" || (t3 == null || t3 === false && _4[4] !== "-" ? e5.removeAttribute(_4) : e5.setAttribute(_4, t3));
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
function G(e5, _4, t3, i6, n3, r8, l6, u7, c7, s6) {
  var p8, o7, m9, f8, h9, k6, v4, d11, y7, C8, T9, P8, j8, U7, N6, g7 = _4.type;
  if (_4.constructor !== void 0)
    return null;
  128 & t3.__u && (c7 = !!(32 & t3.__u), r8 = [u7 = _4.__e = t3.__e]), (p8 = a.__b) && p8(_4);
  e:
    if (typeof g7 == "function")
      try {
        if (d11 = _4.props, y7 = (p8 = g7.contextType) && i6[p8.__c], C8 = p8 ? y7 ? y7.props.value : p8.__ : i6, t3.__c ? v4 = (o7 = _4.__c = t3.__c).__ = o7.__E : ("prototype" in g7 && g7.prototype.render ? _4.__c = o7 = new g7(d11, C8) : (_4.__c = o7 = new W(d11, C8), o7.constructor = g7, o7.render = ce), y7 && y7.sub(o7), o7.props = d11, o7.state || (o7.state = {}), o7.context = C8, o7.__n = i6, m9 = o7.__d = true, o7.__h = [], o7._sb = []), o7.__s == null && (o7.__s = o7.state), g7.getDerivedStateFromProps != null && (o7.__s == o7.state && (o7.__s = b({}, o7.__s)), b(o7.__s, g7.getDerivedStateFromProps(d11, o7.__s))), f8 = o7.props, h9 = o7.state, o7.__v = _4, m9)
          g7.getDerivedStateFromProps == null && o7.componentWillMount != null && o7.componentWillMount(), o7.componentDidMount != null && o7.__h.push(o7.componentDidMount);
        else {
          if (g7.getDerivedStateFromProps == null && d11 !== f8 && o7.componentWillReceiveProps != null && o7.componentWillReceiveProps(d11, C8), !o7.__e && (o7.shouldComponentUpdate != null && o7.shouldComponentUpdate(d11, o7.__s, C8) === false || _4.__v === t3.__v)) {
            for (_4.__v !== t3.__v && (o7.props = d11, o7.state = o7.__s, o7.__d = false), _4.__e = t3.__e, _4.__k = t3.__k, _4.__k.forEach(function(L11) {
              L11 && (L11.__ = _4);
            }), T9 = 0; T9 < o7._sb.length; T9++)
              o7.__h.push(o7._sb[T9]);
            o7._sb = [], o7.__h.length && l6.push(o7);
            break e;
          }
          o7.componentWillUpdate != null && o7.componentWillUpdate(d11, o7.__s, C8), o7.componentDidUpdate != null && o7.__h.push(function() {
            o7.componentDidUpdate(f8, h9, k6);
          });
        }
        if (o7.context = C8, o7.props = d11, o7.__P = e5, o7.__e = false, P8 = a.__r, j8 = 0, "prototype" in g7 && g7.prototype.render) {
          for (o7.state = o7.__s, o7.__d = false, P8 && P8(_4), p8 = o7.render(o7.props, o7.state, o7.context), U7 = 0; U7 < o7._sb.length; U7++)
            o7.__h.push(o7._sb[U7]);
          o7._sb = [];
        } else
          do
            o7.__d = false, P8 && P8(_4), p8 = o7.render(o7.props, o7.state, o7.context), o7.state = o7.__s;
          while (o7.__d && ++j8 < 25);
        o7.state = o7.__s, o7.getChildContext != null && (i6 = b(b({}, i6), o7.getChildContext())), m9 || o7.getSnapshotBeforeUpdate == null || (k6 = o7.getSnapshotBeforeUpdate(f8, h9)), _e(e5, F(N6 = p8 != null && p8.type === H && p8.key == null ? p8.props.children : p8) ? N6 : [N6], _4, t3, i6, n3, r8, l6, u7, c7, s6), o7.base = _4.__e, _4.__u &= -161, o7.__h.length && l6.push(o7), v4 && (o7.__E = o7.__ = null);
      } catch (L11) {
        _4.__v = null, c7 || r8 != null ? (_4.__e = u7, _4.__u |= c7 ? 160 : 32, r8[r8.indexOf(u7)] = null) : (_4.__e = t3.__e, _4.__k = t3.__k), a.__e(L11, _4, t3);
      }
    else
      r8 == null && _4.__v === t3.__v ? (_4.__k = t3.__k, _4.__e = t3.__e) : _4.__e = fe(t3.__e, _4, t3, i6, n3, r8, l6, c7, s6);
  (p8 = a.diffed) && p8(_4);
}
function R(e5, _4, t3) {
  for (var i6 = 0; i6 < t3.length; i6++)
    V(t3[i6], t3[++i6], t3[++i6]);
  a.__c && a.__c(_4, e5), e5.some(function(n3) {
    try {
      e5 = n3.__h, n3.__h = [], e5.some(function(r8) {
        r8.call(n3);
      });
    } catch (r8) {
      a.__e(r8, n3.__v);
    }
  });
}
function fe(e5, _4, t3, i6, n3, r8, l6, u7, c7) {
  var s6, p8, o7, m9, f8, h9, k6, v4 = t3.props, d11 = _4.props, y7 = _4.type;
  if (y7 === "svg" && (n3 = true), r8 != null) {
    for (s6 = 0; s6 < r8.length; s6++)
      if ((f8 = r8[s6]) && "setAttribute" in f8 == !!y7 && (y7 ? f8.localName === y7 : f8.nodeType === 3)) {
        e5 = f8, r8[s6] = null;
        break;
      }
  }
  if (e5 == null) {
    if (y7 === null)
      return document.createTextNode(d11);
    e5 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y7) : document.createElement(y7, d11.is && d11), r8 = null, u7 = false;
  }
  if (y7 === null)
    v4 === d11 || u7 && e5.data === d11 || (e5.data = d11);
  else {
    if (r8 = r8 && D.call(e5.childNodes), v4 = t3.props || E, !u7 && r8 != null)
      for (v4 = {}, s6 = 0; s6 < e5.attributes.length; s6++)
        v4[(f8 = e5.attributes[s6]).name] = f8.value;
    for (s6 in v4)
      f8 = v4[s6], s6 == "children" || (s6 == "dangerouslySetInnerHTML" ? o7 = f8 : s6 === "key" || s6 in d11 || M(e5, s6, null, f8, n3));
    for (s6 in d11)
      f8 = d11[s6], s6 == "children" ? m9 = f8 : s6 == "dangerouslySetInnerHTML" ? p8 = f8 : s6 == "value" ? h9 = f8 : s6 == "checked" ? k6 = f8 : s6 === "key" || u7 && typeof f8 != "function" || v4[s6] === f8 || M(e5, s6, f8, v4[s6], n3);
    if (p8)
      u7 || o7 && (p8.__html === o7.__html || p8.__html === e5.innerHTML) || (e5.innerHTML = p8.__html), _4.__k = [];
    else if (o7 && (e5.innerHTML = ""), _e(e5, F(m9) ? m9 : [m9], _4, t3, i6, n3 && y7 !== "foreignObject", r8, l6, r8 ? r8[0] : t3.__k && w(t3, 0), u7, c7), r8 != null)
      for (s6 = r8.length; s6--; )
        r8[s6] != null && Z(r8[s6]);
    u7 || (s6 = "value", h9 !== void 0 && (h9 !== e5[s6] || y7 === "progress" && !h9 || y7 === "option" && h9 !== v4[s6]) && M(e5, s6, h9, v4[s6], false), s6 = "checked", k6 !== void 0 && k6 !== e5[s6] && M(e5, s6, k6, v4[s6], false));
  }
  return e5;
}
function V(e5, _4, t3) {
  try {
    typeof e5 == "function" ? e5(_4) : e5.current = _4;
  } catch (i6) {
    a.__e(i6, t3);
  }
}
function B(e5, _4, t3) {
  var i6, n3;
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
    for (n3 = 0; n3 < i6.length; n3++)
      i6[n3] && B(i6[n3], _4, t3 || typeof e5.type != "function");
  t3 || e5.__e == null || Z(e5.__e), e5.__ = e5.__e = e5.__d = void 0;
}
function ce(e5, _4, t3) {
  return this.constructor(e5, t3);
}
function pe(e5, _4, t3) {
  var i6, n3, r8, l6;
  a.__ && a.__(e5, _4), n3 = (i6 = typeof t3 == "function") ? null : t3 && t3.__k || _4.__k, r8 = [], l6 = [], G(_4, e5 = (!i6 && t3 || _4).__k = re(H, null, [e5]), n3 || E, E, _4.ownerSVGElement !== void 0, !i6 && t3 ? [t3] : n3 ? null : _4.firstChild ? D.call(_4.childNodes) : null, r8, !i6 && t3 ? t3 : n3 ? n3.__e : _4.firstChild, i6, l6), e5.__d = void 0, R(r8, e5, l6);
}
function ae(e5, _4) {
  pe(e5, _4, ae);
}
function he(e5, _4, t3) {
  var i6, n3, r8, l6, u7 = b({}, e5.props);
  for (r8 in e5.type && e5.type.defaultProps && (l6 = e5.type.defaultProps), _4)
    r8 == "key" ? i6 = _4[r8] : r8 == "ref" ? n3 = _4[r8] : u7[r8] = _4[r8] === void 0 && l6 !== void 0 ? l6[r8] : _4[r8];
  return arguments.length > 2 && (u7.children = arguments.length > 3 ? D.call(arguments, 2) : t3), S(e5.type, u7, i6 || e5.key, n3 || e5.ref, null);
}
function ve(e5, _4) {
  var t3 = { __c: _4 = "__cC" + Y++, __: e5, Consumer: function(i6, n3) {
    return i6.children(n3);
  }, Provider: function(i6) {
    var n3, r8;
    return this.getChildContext || (n3 = [], (r8 = {})[_4] = this, this.getChildContext = function() {
      return r8;
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
    }), i6.children;
  } };
  return t3.Provider.__ = t3.Consumer.contextType = t3;
}
D = O.slice, a = { __e: function(e5, _4, t3, i6) {
  for (var n3, r8, l6; _4 = _4.__; )
    if ((n3 = _4.__c) && !n3.__)
      try {
        if ((r8 = n3.constructor) && r8.getDerivedStateFromError != null && (n3.setState(r8.getDerivedStateFromError(e5)), l6 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e5, i6 || {}), l6 = n3.__d), l6)
          return n3.__E = n3;
      } catch (u7) {
        e5 = u7;
      }
  throw e5;
} }, Q = 0, ne = function(e5) {
  return e5 != null && e5.constructor == null;
}, W.prototype.setState = function(e5, _4) {
  var t3;
  t3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e5 == "function" && (e5 = e5(b({}, t3), this.props)), e5 && b(t3, e5), e5 != null && this.__v && (_4 && this._sb.push(_4), I(this));
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
function l(t3, _4) {
  o.__h && o.__h(r, t3, v || _4), v = 0;
  var u7 = r.__H || (r.__H = { __: [], __h: [] });
  return t3 >= u7.__.length && u7.__.push({ __V: p }), u7.__[t3];
}
function I2(t3) {
  return v = 1, R2(U, t3);
}
function R2(t3, _4, u7) {
  var n3 = l(c++, 2);
  if (n3.t = t3, !n3.__c && (n3.__ = [u7 ? u7(_4) : U(void 0, _4), function(a5) {
    var f8 = n3.__N ? n3.__N[0] : n3.__[0], s6 = n3.t(f8, a5);
    f8 !== s6 && (n3.__N = [s6, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r, !r.u)) {
    var i6 = function(a5, f8, s6) {
      if (!n3.__c.__H)
        return true;
      var m9 = n3.__c.__H.__.filter(function(e5) {
        return !!e5.__c;
      });
      if (m9.every(function(e5) {
        return !e5.__N;
      }))
        return !h9 || h9.call(this, a5, f8, s6);
      var V8 = false;
      return m9.forEach(function(e5) {
        if (e5.__N) {
          var P8 = e5.__[0];
          e5.__ = e5.__N, e5.__N = void 0, P8 !== e5.__[0] && (V8 = true);
        }
      }), !(!V8 && n3.__c.props === a5) && (!h9 || h9.call(this, a5, f8, s6));
    };
    r.u = true;
    var h9 = r.shouldComponentUpdate, N6 = r.componentWillUpdate;
    r.componentWillUpdate = function(a5, f8, s6) {
      if (this.__e) {
        var m9 = h9;
        h9 = void 0, i6(a5, f8, s6), h9 = m9;
      }
      N6 && N6.call(this, a5, f8, s6);
    }, r.shouldComponentUpdate = i6;
  }
  return n3.__N || n3.__;
}
function z2(t3, _4) {
  var u7 = l(c++, 3);
  !o.__s && y(u7.__H, _4) && (u7.__ = t3, u7.i = _4, r.__H.__h.push(u7));
}
function S2(t3, _4) {
  var u7 = l(c++, 4);
  !o.__s && y(u7.__H, _4) && (u7.__ = t3, u7.i = _4, r.__h.push(u7));
}
function L(t3) {
  return v = 5, T(function() {
    return { current: t3 };
  }, []);
}
function M2(t3, _4, u7) {
  v = 6, S2(function() {
    return typeof t3 == "function" ? (t3(_4()), function() {
      return t3(null);
    }) : t3 ? (t3.current = _4(), function() {
      return t3.current = null;
    }) : void 0;
  }, u7 == null ? u7 : u7.concat(t3));
}
function T(t3, _4) {
  var u7 = l(c++, 7);
  return y(u7.__H, _4) ? (u7.__V = t3(), u7.i = _4, u7.__h = t3, u7.__V) : u7.__;
}
function G2(t3, _4) {
  return v = 8, T(function() {
    return t3;
  }, _4);
}
function J2(t3) {
  var _4 = r.context[t3.__c], u7 = l(c++, 9);
  return u7.c = t3, _4 ? (u7.__ == null && (u7.__ = true, _4.sub(r)), _4.props.value) : t3.__;
}
function K2(t3, _4) {
  o.useDebugValue && o.useDebugValue(_4 ? _4(t3) : t3);
}
function O2(t3) {
  var _4 = l(c++, 10), u7 = I2();
  return _4.__ = t3, r.componentDidCatch || (r.componentDidCatch = function(n3, i6) {
    _4.__ && _4.__(n3, i6), u7[1](n3);
  }), [u7[0], function() {
    u7[1](void 0);
  }];
}
function Q2() {
  var t3 = l(c++, 11);
  if (!t3.__) {
    for (var _4 = r.__v; _4 !== null && !_4.__m && _4.__ !== null; )
      _4 = _4.__;
    var u7 = _4.__m || (_4.__m = [0, 0]);
    t3.__ = "P" + u7[0] + "-" + u7[1]++;
  }
  return t3.__;
}
function W2() {
  for (var t3; t3 = x2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(d), t3.__H.__h.forEach(E2), t3.__H.__h = [];
      } catch (_4) {
        t3.__H.__h = [], o.__e(_4, t3.__v);
      }
}
o.__b = function(t3) {
  r = null, g && g(t3);
}, o.__ = function(t3, _4) {
  t3 && _4.__k && _4.__k.__m && (t3.__m = _4.__k.__m), k && k(t3, _4);
}, o.__r = function(t3) {
  C && C(t3), c = 0;
  var _4 = (r = t3.__c).__H;
  _4 && (H2 === r ? (_4.__h = [], r.__h = [], _4.__.forEach(function(u7) {
    u7.__N && (u7.__ = u7.__N), u7.__V = p, u7.__N = u7.i = void 0;
  })) : (_4.__h.forEach(d), _4.__h.forEach(E2), _4.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t3) {
  A2 && A2(t3);
  var _4 = t3.__c;
  _4 && _4.__H && (_4.__H.__h.length && (x2.push(_4) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _4.__H.__.forEach(function(u7) {
    u7.i && (u7.__H = u7.i), u7.__V !== p && (u7.__ = u7.__V), u7.i = void 0, u7.__V = p;
  })), H2 = r = null;
}, o.__c = function(t3, _4) {
  _4.some(function(u7) {
    try {
      u7.__h.forEach(d), u7.__h = u7.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _4.some(function(i6) {
        i6.__h && (i6.__h = []);
      }), _4 = [], o.__e(n3, u7.__v);
    }
  }), D2 && D2(t3, _4);
}, o.unmount = function(t3) {
  F2 && F2(t3);
  var _4, u7 = t3.__c;
  u7 && u7.__H && (u7.__H.__.forEach(function(n3) {
    try {
      d(n3);
    } catch (i6) {
      _4 = i6;
    }
  }), u7.__H = void 0, _4 && o.__e(_4, u7.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t3) {
  var _4, u7 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_4), setTimeout(t3);
  }, n3 = setTimeout(u7, 100);
  q2 && (_4 = requestAnimationFrame(u7));
}
function d(t3) {
  var _4 = r, u7 = t3.__c;
  typeof u7 == "function" && (t3.__c = void 0, u7()), r = _4;
}
function E2(t3) {
  var _4 = r;
  t3.__c = t3.__(), r = _4;
}
function y(t3, _4) {
  return !t3 || t3.length !== _4.length || _4.some(function(u7, n3) {
    return u7 !== t3[n3];
  });
}
function U(t3, _4) {
  return typeof _4 == "function" ? _4(t3) : _4;
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
  for (var r8 in t3)
    if (r8 !== "__source" && e5[r8] !== t3[r8])
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
  function r8(o7) {
    return this.shouldComponentUpdate = n3, re(e5, o7);
  }
  return r8.displayName = "Memo(" + (e5.displayName || e5.name) + ")", r8.prototype.isReactComponent = true, r8.__f = true, r8;
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
    var r8 = L2({}, n3);
    return delete r8.ref, e5(r8, n3.ref || null);
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
a.__e = function(e5, t3, n3, r8) {
  if (e5.then) {
    for (var o7, u7 = t3; u7 = u7.__; )
      if ((o7 = u7.__c) && o7.__c)
        return t3.__e == null && (t3.__e = n3.__e, t3.__k = n3.__k), o7.__c(e5, t3);
  }
  ne2(e5, t3, n3, r8);
};
var x3 = a.unmount;
function T2(e5, t3, n3) {
  return e5 && (e5.__c && e5.__c.__H && (e5.__c.__H.__.forEach(function(r8) {
    typeof r8.__c == "function" && r8.__c();
  }), e5.__c.__H = null), (e5 = L2({}, e5)).__c != null && (e5.__c.__P === n3 && (e5.__c.__P = t3), e5.__c = null), e5.__k = e5.__k && e5.__k.map(function(r8) {
    return T2(r8, t3, n3);
  })), e5;
}
function A3(e5, t3, n3) {
  return e5 && n3 && (e5.__v = null, e5.__k = e5.__k && e5.__k.map(function(r8) {
    return A3(r8, t3, n3);
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
  var t3, n3, r8;
  function o7(u7) {
    if (t3 || (t3 = e5()).then(function(a5) {
      n3 = a5.default || a5;
    }, function(a5) {
      r8 = a5;
    }), r8)
      throw r8;
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
  var n3 = t3.__c, r8 = this;
  r8.t == null && (r8.t = []), r8.t.push(n3);
  var o7 = F3(r8.__v), u7 = false, a5 = function() {
    u7 || (u7 = true, n3.__R = null, o7 ? o7(l6) : l6());
  };
  n3.__R = a5;
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
  r8.__u++ || 32 & t3.__u || r8.setState({ __a: r8.__b = r8.__v.__k[0] }), e5.then(a5, a5);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e5, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r8 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n3, r8.__O = r8.__P);
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
  }, t3.i && t3.i !== n3 && t3.componentWillUnmount(), t3.l || (t3.i = n3, t3.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(r8) {
    this.childNodes.push(r8), t3.i.appendChild(r8);
  }, insertBefore: function(r8, o7) {
    this.childNodes.push(r8), t3.i.appendChild(r8);
  }, removeChild: function(r8) {
    this.childNodes.splice(this.childNodes.indexOf(r8) >>> 1, 1), t3.i.removeChild(r8);
  } }), pe(re(oe2, { context: t3.context }, e5.__v), t3.l);
}
function ae2(e5, t3) {
  var n3 = re(ue2, { __v: e5, i: t3 });
  return n3.containerInfo = t3, n3;
}
(p2.prototype = new W()).__a = function(e5) {
  var t3 = this, n3 = F3(t3.__v), r8 = t3.o.get(e5);
  return r8[0]++, function(o7) {
    var u7 = function() {
      t3.props.revealOrder ? (r8.push(o7), k2(t3, e5, r8)) : o7();
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
    var n3 = t3.props, r8 = t3.type, o7 = {};
    for (var u7 in n3) {
      var a5 = n3[u7];
      if (!(u7 === "value" && "defaultValue" in n3 && a5 == null || _e2 && u7 === "children" && r8 === "noscript" || u7 === "class" || u7 === "className")) {
        var l6 = u7.toLowerCase();
        u7 === "defaultValue" && "value" in n3 && n3.value == null ? u7 = "value" : u7 === "download" && a5 === true ? a5 = "" : l6 === "translate" && a5 === "no" ? a5 = false : l6 === "ondoubleclick" ? u7 = "ondblclick" : l6 !== "onchange" || r8 !== "input" && r8 !== "textarea" || ce2(n3.type) ? l6 === "onfocus" ? u7 = "onfocusin" : l6 === "onblur" ? u7 = "onfocusout" : le2.test(u7) ? u7 = l6 : r8.indexOf("-") === -1 && ie2.test(u7) ? u7 = u7.replace(se2, "-$&").toLowerCase() : a5 === null && (a5 = void 0) : l6 = u7 = "oninput", l6 === "oninput" && o7[u7 = l6] && (u7 = "oninputCapture"), o7[u7] = a5;
      }
    }
    r8 == "select" && o7.multiple && Array.isArray(o7.value) && (o7.value = se(n3.children).forEach(function(s6) {
      s6.props.selected = o7.value.indexOf(s6.props.value) != -1;
    })), r8 == "select" && o7.defaultValue != null && (o7.value = se(n3.children).forEach(function(s6) {
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
  var n3 = t3(), r8 = I2({ h: { __: n3, v: t3 } }), o7 = r8[0].h, u7 = r8[1];
  return S2(function() {
    o7.__ = n3, o7.v = t3, y2(o7) && u7({ h: o7 });
  }, [e5, n3, t3]), z2(function() {
    return y2(o7) && u7({ h: o7 }), e5(function() {
      y2(o7) && u7({ h: o7 });
    });
  }, [e5]), n3;
}
function y2(e5) {
  var t3, n3, r8 = e5.v, o7 = e5.__;
  try {
    var u7 = r8();
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
  return function(c7) {
    if (e5?.(c7), t3 === false || !c7.defaultPrevented)
      return f8?.(c7);
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
function _(t3, c7 = []) {
  let o7 = [];
  function a5(r8, e5) {
    let n3 = ve(e5), s6 = o7.length;
    o7 = [...o7, e5];
    function f8(d11) {
      let { scope: i6, children: x12, ...$5 } = d11, h9 = i6?.[t3][s6] || n3, S13 = T(() => $5, Object.values($5));
      return re(h9.Provider, { value: S13 }, x12);
    }
    function v4(d11, i6) {
      let x12 = i6?.[t3][s6] || n3, $5 = J2(x12);
      if ($5)
        return $5;
      if (e5 !== void 0)
        return e5;
      throw new Error(`\`${d11}\` must be used within \`${r8}\``);
    }
    return f8.displayName = r8 + "Provider", [f8, v4];
  }
  let u7 = () => {
    let r8 = o7.map((e5) => ve(e5));
    return function(n3) {
      let s6 = n3?.[t3] || r8;
      return T(() => ({ [`__scope${t3}`]: { ...n3, [t3]: s6 } }), [n3, s6]);
    };
  };
  return u7.scopeName = t3, [a5, C3(u7, ...c7)];
}
function C3(...t3) {
  let c7 = t3[0];
  if (t3.length === 1)
    return c7;
  let o7 = () => {
    let a5 = t3.map((u7) => ({ useScope: u7(), scopeName: u7.scopeName }));
    return function(r8) {
      let e5 = a5.reduce((n3, { useScope: s6, scopeName: f8 }) => {
        let d11 = s6(r8)[`__scope${f8}`];
        return { ...n3, ...d11 };
      }, {});
      return T(() => ({ [`__scope${c7.scopeName}`]: e5 }), [e5]);
    };
  };
  return o7.scopeName = c7.scopeName, o7;
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

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w3({ prop: e5, defaultProp: a5, onChange: s6 = () => {
} }) {
  let [t3, n3] = P2({ defaultProp: a5, onChange: s6 }), o7 = e5 !== void 0, f8 = o7 ? e5 : t3, l6 = l2(s6), $5 = G2((c7) => {
    if (o7) {
      let u7 = typeof c7 == "function" ? c7(e5) : c7;
      u7 !== e5 && l6(u7);
    } else
      n3(c7);
  }, [o7, e5, n3, l6]);
  return [f8, $5];
}
function P2({ defaultProp: e5, onChange: a5 }) {
  let s6 = I2(e5), [t3] = s6, n3 = L(t3), o7 = l2(a5);
  return z2(() => {
    n3.current !== t3 && (o7(t3), n3.current = t3);
  }, [t3, n3, o7]), s6;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n3, t3) => {
  let { children: e5, ...r8 } = n3, o7 = te2.toArray(e5), l6 = o7.find(I3);
  if (l6) {
    let c7 = l6.props.children, a5 = o7.map((m9) => m9 === l6 ? te2.count(c7) > 1 ? te2.only(null) : m(c7) ? c7.props.children : null : m9);
    return re($2, p3({}, r8, { ref: t3 }), m(c7) ? Ee(c7, void 0, a5) : null);
  }
  return re($2, p3({}, r8, { ref: t3 }), e5);
});
b4.displayName = "Slot";
var $2 = ee2((n3, t3) => {
  let { children: e5, ...r8 } = n3;
  return m(e5) ? Ee(e5, { ...X3(r8, e5.props), ref: t3 ? t(t3, e5.ref) : e5.ref }) : te2.count(e5) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n3 }) => re(H, null, n3);
function I3(n3) {
  return m(n3) && n3.type === y3;
}
function X3(n3, t3) {
  let e5 = { ...t3 };
  for (let r8 in t3) {
    let o7 = n3[r8], l6 = t3[r8];
    /^on[A-Z]/.test(r8) ? o7 && l6 ? e5[r8] = (...a5) => {
      l6(...a5), o7(...a5);
    } : o7 && (e5[r8] = o7) : r8 === "style" ? e5[r8] = { ...o7, ...l6 } : r8 === "className" && (e5[r8] = [o7, l6].filter(Boolean).join(" "));
  }
  return { ...n3, ...e5 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t3, e5) => {
  let f8 = ee2((r8, o7) => {
    let { asChild: s6, ...a5 } = r8, i6 = s6 ? b4 : e5;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i6, p3({}, a5, { ref: o7 }));
  });
  return f8.displayName = `Primitive.${e5}`, { ...t3, [e5]: f8 };
}, {});
function E3(t3, e5) {
  t3 && Re(() => t3.dispatchEvent(e5));
}

// https://esm.sh/v132/@radix-ui/react-collection@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collection.mjs
function _2(s6) {
  let a5 = s6 + "CollectionProvider", [I8, $5] = _(a5), [E9, f8] = I8(a5, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m9 = (r8) => {
    let { scope: e5, children: l6 } = r8, o7 = Te.useRef(null), c7 = Te.useRef(/* @__PURE__ */ new Map()).current;
    return Te.createElement(E9, { scope: e5, itemMap: c7, collectionRef: o7 }, l6);
  }, d11 = s6 + "CollectionSlot", p8 = Te.forwardRef((r8, e5) => {
    let { scope: l6, children: o7 } = r8, c7 = f8(d11, l6), n3 = u2(e5, c7.collectionRef);
    return Te.createElement(b4, { ref: n3 }, o7);
  }), u7 = s6 + "CollectionItemSlot", C8 = "data-radix-collection-item", R5 = Te.forwardRef((r8, e5) => {
    let { scope: l6, children: o7, ...c7 } = r8, n3 = Te.useRef(null), M10 = u2(e5, n3), i6 = f8(u7, l6);
    return Te.useEffect(() => (i6.itemMap.set(n3, { ref: n3, ...c7 }), () => void i6.itemMap.delete(n3))), Te.createElement(b4, { [C8]: "", ref: M10 }, o7);
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
  let t3 = J2(r3);
  return e5 || t3 || "ltr";
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i2(d11, e5 = globalThis?.document) {
  let a5 = l2(d11);
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
  let { disableOutsidePointerEvents: i6 = false, onEscapeKeyDown: t3, onPointerDownOutside: r8, onFocusOutside: f8, onInteractOutside: d11, onDismiss: l6, ...v4 } = n3, a5 = J2(F4), [c7, S13] = I2(null), u7 = (o7 = c7?.ownerDocument) !== null && o7 !== void 0 ? o7 : globalThis?.document, [, W8] = I2({}), A6 = u2(e5, (s6) => S13(s6)), y7 = Array.from(a5.layers), [N6] = [...a5.layersWithOutsidePointerEventsDisabled].slice(-1), _4 = y7.indexOf(N6), D7 = c7 ? y7.indexOf(c7) : -1, U7 = a5.layersWithOutsidePointerEventsDisabled.size > 0, w10 = D7 >= _4, z9 = Q4((s6) => {
    let $5 = s6.target, P8 = [...a5.branches].some((E9) => E9.contains($5));
    !w10 || P8 || (r8?.(s6), d11?.(s6), s6.defaultPrevented || l6?.());
  }, u7), O9 = V3((s6) => {
    let $5 = s6.target;
    [...a5.branches].some((E9) => E9.contains($5)) || (f8?.(s6), d11?.(s6), s6.defaultPrevented || l6?.());
  }, u7);
  return i2((s6) => {
    D7 === a5.layers.size - 1 && (t3?.(s6), !s6.defaultPrevented && l6 && (s6.preventDefault(), l6()));
  }, u7), z2(() => {
    if (c7)
      return i6 && (a5.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u7.body.style.pointerEvents, u7.body.style.pointerEvents = "none"), a5.layersWithOutsidePointerEventsDisabled.add(c7)), a5.layers.add(c7), L3(), () => {
        i6 && a5.layersWithOutsidePointerEventsDisabled.size === 1 && (u7.body.style.pointerEvents = g2);
      };
  }, [c7, u7, i6, a5]), z2(() => () => {
    c7 && (a5.layers.delete(c7), a5.layersWithOutsidePointerEventsDisabled.delete(c7), L3());
  }, [c7, a5]), z2(() => {
    let s6 = () => W8({});
    return document.addEventListener(h2, s6), () => document.removeEventListener(h2, s6);
  }, []), re(u3.div, p3({}, v4, { ref: A6, style: { pointerEvents: U7 ? w10 ? "auto" : "none" : void 0, ...n3.style }, onFocusCapture: o3(n3.onFocusCapture, O9.onFocusCapture), onBlurCapture: o3(n3.onBlurCapture, O9.onBlurCapture), onPointerDownCapture: o3(n3.onPointerDownCapture, z9.onPointerDownCapture) }));
});
var J3 = ee2((n3, e5) => {
  let o7 = J2(F4), i6 = L(null), t3 = u2(e5, i6);
  return z2(() => {
    let r8 = i6.current;
    if (r8)
      return o7.branches.add(r8), () => {
        o7.branches.delete(r8);
      };
  }, [o7.branches]), re(u3.div, p3({}, n3, { ref: t3 }));
});
function Q4(n3, e5 = globalThis?.document) {
  let o7 = l2(n3), i6 = L(false), t3 = L(() => {
  });
  return z2(() => {
    let r8 = (d11) => {
      if (d11.target && !i6.current) {
        let v4 = function() {
          I4(X4, o7, l6, { discrete: true });
        }, l6 = { originalEvent: d11 };
        d11.pointerType === "touch" ? (e5.removeEventListener("click", t3.current), t3.current = v4, e5.addEventListener("click", t3.current, { once: true })) : v4();
      } else
        e5.removeEventListener("click", t3.current);
      i6.current = false;
    }, f8 = window.setTimeout(() => {
      e5.addEventListener("pointerdown", r8);
    }, 0);
    return () => {
      window.clearTimeout(f8), e5.removeEventListener("pointerdown", r8), e5.removeEventListener("click", t3.current);
    };
  }, [e5, o7]), { onPointerDownCapture: () => i6.current = true };
}
function V3(n3, e5 = globalThis?.document) {
  let o7 = l2(n3), i6 = L(false);
  return z2(() => {
    let t3 = (r8) => {
      r8.target && !i6.current && I4(Y2, o7, { originalEvent: r8 }, { discrete: false });
    };
    return e5.addEventListener("focusin", t3), () => e5.removeEventListener("focusin", t3);
  }, [e5, o7]), { onFocusCapture: () => i6.current = true, onBlurCapture: () => i6.current = false };
}
function L3() {
  let n3 = new CustomEvent(h2);
  document.dispatchEvent(n3);
}
function I4(n3, e5, o7, { discrete: i6 }) {
  let t3 = o7.originalEvent.target, r8 = new CustomEvent(n3, { bubbles: false, cancelable: true, detail: o7 });
  e5 && t3.addEventListener(n3, e5, { once: true }), i6 ? E3(t3, r8) : t3.dispatchEvent(r8);
}

// https://esm.sh/v132/@radix-ui/react-focus-guards@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-guards.mjs
var d4 = 0;
function c2() {
  z2(() => {
    var e5, t3;
    let a5 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e5 = a5[0]) !== null && e5 !== void 0 ? e5 : r4()), document.body.insertAdjacentElement("beforeend", (t3 = a5[1]) !== null && t3 !== void 0 ? t3 : r4()), d4++, () => {
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
var Q5 = ee2((e5, n3) => {
  let { loop: t3 = false, trapped: a5 = false, onMountAutoFocus: m9, onUnmountAutoFocus: L11, ...R5 } = e5, [o7, g7] = I2(null), $5 = l2(m9), v4 = l2(L11), p8 = L(null), H5 = u2(n3, (s6) => g7(s6)), i6 = L({ paused: false, pause() {
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
          for (let F7 of u7)
            F7.removedNodes.length > 0 && d5(o7);
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
    if (!t3 && !a5 || i6.paused)
      return;
    let f8 = s6.key === "Tab" && !s6.altKey && !s6.ctrlKey && !s6.metaKey, c7 = document.activeElement;
    if (f8 && c7) {
      let l6 = s6.currentTarget, [u7, r8] = D3(l6);
      u7 && r8 ? !s6.shiftKey && c7 === r8 ? (s6.preventDefault(), t3 && d5(u7, { select: true })) : s6.shiftKey && c7 === u7 && (s6.preventDefault(), t3 && d5(r8, { select: true })) : c7 === l6 && s6.preventDefault();
    }
  }, [t3, a5, i6.paused]);
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
var r5 = 0;
function n2(t3) {
  let [e5, o7] = I2(u4());
  return e(() => {
    t3 || o7(($5) => $5 ?? String(r5++));
  }, [t3]), t3 || (e5 ? `radix-${e5}` : "");
}

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/utils.mjs
var a2 = ["top", "right", "bottom", "left"];
var f2 = ["start", "end"];
var O5 = a2.reduce((t3, n3) => t3.concat(n3, n3 + "-" + f2[0], n3 + "-" + f2[1]), []);
var m2 = Math.min;
var p4 = Math.max;
var S5 = Math.round;
var w4 = Math.floor;
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
  let c7 = g3(t3), i6 = y4(t3), e5 = d6(i6), r8 = i6 === "x" ? c7 === (o7 ? "end" : "start") ? "right" : "left" : c7 === "start" ? "bottom" : "top";
  return n3.reference[e5] > n3.floating[e5] && (r8 = u5(r8)), [r8, u5(r8)];
}
function R4(t3) {
  let n3 = u5(t3);
  return [s2(t3), n3, s2(n3)];
}
function s2(t3) {
  return t3.replace(/start|end/g, (n3) => x5[n3]);
}
function P3(t3, n3, o7) {
  let c7 = ["left", "right"], i6 = ["right", "left"], e5 = ["top", "bottom"], r8 = ["bottom", "top"];
  switch (t3) {
    case "top":
    case "bottom":
      return o7 ? n3 ? i6 : c7 : n3 ? c7 : i6;
    case "left":
    case "right":
      return n3 ? e5 : r8;
    default:
      return [];
  }
}
function T3(t3, n3, o7, c7) {
  let i6 = g3(t3), e5 = P3(l3(t3), o7 === "start", c7);
  return i6 && (e5 = e5.map((r8) => r8 + "-" + i6), n3 && (e5 = e5.concat(e5.map(s2)))), e5;
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
  let { reference: s6, floating: i6 } = e5, n3 = A4(t3), r8 = y4(t3), v4 = d6(r8), m9 = l3(t3), g7 = n3 === "y", u7 = s6.x + s6.width / 2 - i6.width / 2, c7 = s6.y + s6.height / 2 - i6.height / 2, f8 = s6[v4] / 2 - i6[v4] / 2, o7;
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
  switch (g3(t3)) {
    case "start":
      o7[r8] -= f8 * (l6 && g7 ? -1 : 1);
      break;
    case "end":
      o7[r8] += f8 * (l6 && g7 ? -1 : 1);
      break;
  }
  return o7;
}
var ae3 = async (e5, t3, l6) => {
  let { placement: s6 = "bottom", strategy: i6 = "absolute", middleware: n3 = [], platform: r8 } = l6, v4 = n3.filter(Boolean), m9 = await (r8.isRTL == null ? void 0 : r8.isRTL(t3)), g7 = await r8.getElementRects({ reference: e5, floating: t3, strategy: i6 }), { x: u7, y: c7 } = q5(g7, s6, m9), f8 = s6, o7 = {}, a5 = 0;
  for (let x12 = 0; x12 < v4.length; x12++) {
    let { name: d11, fn: y7 } = v4[x12], { x: w10, y: p8, data: A6, reset: h9 } = await y7({ x: u7, y: c7, initialPlacement: s6, placement: f8, strategy: i6, middlewareData: o7, rects: g7, platform: r8, elements: { reference: e5, floating: t3 } });
    if (u7 = w10 ?? u7, c7 = p8 ?? c7, o7 = { ...o7, [d11]: { ...o7[d11], ...A6 } }, h9 && a5 <= 50) {
      a5++, typeof h9 == "object" && (h9.placement && (f8 = h9.placement), h9.rects && (g7 = h9.rects === true ? await r8.getElementRects({ reference: e5, floating: t3, strategy: i6 }) : h9.rects), { x: u7, y: c7 } = q5(g7, f8, m9)), x12 = -1;
      continue;
    }
  }
  return { x: u7, y: c7, placement: f8, strategy: i6, middlewareData: o7 };
};
async function j4(e5, t3) {
  var l6;
  t3 === void 0 && (t3 = {});
  let { x: s6, y: i6, platform: n3, rects: r8, elements: v4, strategy: m9 } = e5, { boundary: g7 = "clippingAncestors", rootBoundary: u7 = "viewport", elementContext: c7 = "floating", altBoundary: f8 = false, padding: o7 = 0 } = L4(t3, e5), a5 = k3(o7), d11 = v4[f8 ? c7 === "floating" ? "reference" : "floating" : c7], y7 = q4(await n3.getClippingRect({ element: (l6 = await (n3.isElement == null ? void 0 : n3.isElement(d11))) == null || l6 ? d11 : d11.contextElement || await (n3.getDocumentElement == null ? void 0 : n3.getDocumentElement(v4.floating)), boundary: g7, rootBoundary: u7, strategy: m9 })), w10 = c7 === "floating" ? { ...r8.floating, x: s6, y: i6 } : r8.reference, p8 = await (n3.getOffsetParent == null ? void 0 : n3.getOffsetParent(v4.floating)), A6 = await (n3.isElement == null ? void 0 : n3.isElement(p8)) ? await (n3.getScale == null ? void 0 : n3.getScale(p8)) || { x: 1, y: 1 } : { x: 1, y: 1 }, h9 = q4(n3.convertOffsetParentRelativeRectToViewportRelativeRect ? await n3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w10, offsetParent: p8, strategy: m9 }) : w10);
  return { top: (y7.top - h9.top + a5.top) / A6.y, bottom: (h9.bottom - y7.bottom + a5.bottom) / A6.y, left: (y7.left - h9.left + a5.left) / A6.x, right: (h9.right - y7.right + a5.right) / A6.x };
}
var fe3 = (e5) => ({ name: "arrow", options: e5, async fn(t3) {
  let { x: l6, y: s6, placement: i6, rects: n3, platform: r8, elements: v4, middlewareData: m9 } = t3, { element: g7, padding: u7 = 0 } = L4(e5, t3) || {};
  if (g7 == null)
    return {};
  let c7 = k3(u7), f8 = { x: l6, y: s6 }, o7 = y4(i6), a5 = d6(o7), x12 = await r8.getDimensions(g7), d11 = o7 === "y", y7 = d11 ? "top" : "left", w10 = d11 ? "bottom" : "right", p8 = d11 ? "clientHeight" : "clientWidth", A6 = n3.reference[a5] + n3.reference[o7] - f8[o7] - n3.floating[a5], h9 = f8[o7] - n3.reference[o7], b10 = await (r8.getOffsetParent == null ? void 0 : r8.getOffsetParent(g7)), R5 = b10 ? b10[p8] : 0;
  (!R5 || !await (r8.isElement == null ? void 0 : r8.isElement(b10))) && (R5 = v4.floating[p8] || n3.floating[a5]);
  let B4 = A6 / 2 - h9 / 2, T9 = R5 / 2 - x12[a5] / 2 - 1, P8 = m2(c7[y7], T9), O9 = m2(c7[w10], T9), E9 = P8, S13 = R5 - x12[a5] - O9, C8 = R5 / 2 - x12[a5] / 2 + B4, k6 = C5(E9, C8, S13), L11 = !m9.arrow && g3(i6) != null && C8 != k6 && n3.reference[a5] / 2 - (C8 < E9 ? P8 : O9) - x12[a5] / 2 < 0, Y5 = L11 ? C8 < E9 ? E9 - C8 : S13 - C8 : 0;
  return { [o7]: f8[o7] - Y5, data: { [o7]: k6, centerOffset: C8 - k6 + Y5 }, reset: L11 };
} });
var de3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "flip", options: e5, async fn(t3) {
    var l6;
    let { placement: s6, middlewareData: i6, rects: n3, initialPlacement: r8, platform: v4, elements: m9 } = t3, { mainAxis: g7 = true, crossAxis: u7 = true, fallbackPlacements: c7, fallbackStrategy: f8 = "bestFit", fallbackAxisSideDirection: o7 = "none", flipAlignment: a5 = true, ...x12 } = L4(e5, t3), d11 = l3(s6), y7 = l3(r8) === r8, w10 = await (v4.isRTL == null ? void 0 : v4.isRTL(m9.floating)), p8 = c7 || (y7 || !a5 ? [u5(r8)] : R4(r8));
    !c7 && o7 !== "none" && p8.push(...T3(r8, a5, o7, w10));
    let A6 = [r8, ...p8], h9 = await j4(t3, x12), b10 = [], R5 = ((l6 = i6.flip) == null ? void 0 : l6.overflows) || [];
    if (g7 && b10.push(h9[d11]), u7) {
      let O9 = E5(s6, n3, w10);
      b10.push(h9[O9[0]], h9[O9[1]]);
    }
    if (R5 = [...R5, { placement: s6, overflows: b10 }], !b10.every((O9) => O9 <= 0)) {
      var B4, T9;
      let O9 = (((B4 = i6.flip) == null ? void 0 : B4.index) || 0) + 1, E9 = A6[O9];
      if (E9)
        return { data: { index: O9, overflows: R5 }, reset: { placement: E9 } };
      let S13 = (T9 = R5.filter((C8) => C8.overflows[0] <= 0).sort((C8, k6) => C8.overflows[1] - k6.overflows[1])[0]) == null ? void 0 : T9.placement;
      if (!S13)
        switch (f8) {
          case "bestFit": {
            var P8;
            let C8 = (P8 = R5.map((k6) => [k6.placement, k6.overflows.filter((L11) => L11 > 0).reduce((L11, Y5) => L11 + Y5, 0)]).sort((k6, L11) => k6[1] - L11[1])[0]) == null ? void 0 : P8[0];
            C8 && (S13 = C8);
            break;
          }
          case "initialPlacement":
            S13 = r8;
            break;
        }
      if (s6 !== S13)
        return { reset: { placement: S13 } };
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
    let { rects: l6 } = t3, { strategy: s6 = "referenceHidden", ...i6 } = L4(e5, t3);
    switch (s6) {
      case "referenceHidden": {
        let n3 = await j4(t3, { ...i6, elementContext: "reference" }), r8 = G4(n3, l6.reference);
        return { data: { referenceHiddenOffsets: r8, referenceHidden: J4(r8) } };
      }
      case "escaped": {
        let n3 = await j4(t3, { ...i6, altBoundary: true }), r8 = G4(n3, l6.floating);
        return { data: { escapedOffsets: r8, escaped: J4(r8) } };
      }
      default:
        return {};
    }
  } };
};
async function le3(e5, t3) {
  let { placement: l6, platform: s6, elements: i6 } = e5, n3 = await (s6.isRTL == null ? void 0 : s6.isRTL(i6.floating)), r8 = l3(l6), v4 = g3(l6), m9 = A4(l6) === "y", g7 = ["left", "top"].includes(r8) ? -1 : 1, u7 = n3 && m9 ? -1 : 1, c7 = L4(t3, e5), { mainAxis: f8, crossAxis: o7, alignmentAxis: a5 } = typeof c7 == "number" ? { mainAxis: c7, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c7 };
  return v4 && typeof a5 == "number" && (o7 = v4 === "end" ? a5 * -1 : a5), m9 ? { x: o7 * u7, y: f8 * g7 } : { x: f8 * g7, y: o7 * u7 };
}
var xe2 = function(e5) {
  return e5 === void 0 && (e5 = 0), { name: "offset", options: e5, async fn(t3) {
    let { x: l6, y: s6 } = t3, i6 = await le3(t3, e5);
    return { x: l6 + i6.x, y: s6 + i6.y, data: i6 };
  } };
};
var he3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "shift", options: e5, async fn(t3) {
    let { x: l6, y: s6, placement: i6 } = t3, { mainAxis: n3 = true, crossAxis: r8 = false, limiter: v4 = { fn: (d11) => {
      let { x: y7, y: w10 } = d11;
      return { x: y7, y: w10 };
    } }, ...m9 } = L4(e5, t3), g7 = { x: l6, y: s6 }, u7 = await j4(t3, m9), c7 = A4(l3(i6)), f8 = b6(c7), o7 = g7[f8], a5 = g7[c7];
    if (n3) {
      let d11 = f8 === "y" ? "top" : "left", y7 = f8 === "y" ? "bottom" : "right", w10 = o7 + u7[d11], p8 = o7 - u7[y7];
      o7 = C5(w10, o7, p8);
    }
    if (r8) {
      let d11 = c7 === "y" ? "top" : "left", y7 = c7 === "y" ? "bottom" : "right", w10 = a5 + u7[d11], p8 = a5 - u7[y7];
      a5 = C5(w10, a5, p8);
    }
    let x12 = v4.fn({ ...t3, [f8]: o7, [c7]: a5 });
    return { ...x12, data: { x: x12.x - l6, y: x12.y - s6 } };
  } };
};
var pe3 = function(e5) {
  return e5 === void 0 && (e5 = {}), { options: e5, fn(t3) {
    let { x: l6, y: s6, placement: i6, rects: n3, middlewareData: r8 } = t3, { offset: v4 = 0, mainAxis: m9 = true, crossAxis: g7 = true } = L4(e5, t3), u7 = { x: l6, y: s6 }, c7 = A4(i6), f8 = b6(c7), o7 = u7[f8], a5 = u7[c7], x12 = L4(v4, t3), d11 = typeof x12 == "number" ? { mainAxis: x12, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x12 };
    if (m9) {
      let p8 = f8 === "y" ? "height" : "width", A6 = n3.reference[f8] - n3.floating[p8] + d11.mainAxis, h9 = n3.reference[f8] + n3.reference[p8] - d11.mainAxis;
      o7 < A6 ? o7 = A6 : o7 > h9 && (o7 = h9);
    }
    if (g7) {
      var y7, w10;
      let p8 = f8 === "y" ? "width" : "height", A6 = ["top", "left"].includes(l3(i6)), h9 = n3.reference[c7] - n3.floating[p8] + (A6 && ((y7 = r8.offset) == null ? void 0 : y7[c7]) || 0) + (A6 ? 0 : d11.crossAxis), b10 = n3.reference[c7] + n3.reference[p8] + (A6 ? 0 : ((w10 = r8.offset) == null ? void 0 : w10[c7]) || 0) - (A6 ? d11.crossAxis : 0);
      a5 < h9 ? a5 = h9 : a5 > b10 && (a5 = b10);
    }
    return { [f8]: o7, [c7]: a5 };
  } };
};
var we2 = function(e5) {
  return e5 === void 0 && (e5 = {}), { name: "size", options: e5, async fn(t3) {
    let { placement: l6, rects: s6, platform: i6, elements: n3 } = t3, { apply: r8 = () => {
    }, ...v4 } = L4(e5, t3), m9 = await j4(t3, v4), g7 = l3(l6), u7 = g3(l6), c7 = A4(l6) === "y", { width: f8, height: o7 } = s6.floating, a5, x12;
    g7 === "top" || g7 === "bottom" ? (a5 = g7, x12 = u7 === (await (i6.isRTL == null ? void 0 : i6.isRTL(n3.floating)) ? "start" : "end") ? "left" : "right") : (x12 = g7, a5 = u7 === "end" ? "top" : "bottom");
    let d11 = o7 - m9[a5], y7 = f8 - m9[x12], w10 = !t3.middlewareData.shift, p8 = d11, A6 = y7;
    if (c7) {
      let b10 = f8 - m9.left - m9.right;
      A6 = u7 || w10 ? m2(y7, b10) : b10;
    } else {
      let b10 = o7 - m9.top - m9.bottom;
      p8 = u7 || w10 ? m2(d11, b10) : b10;
    }
    if (w10 && !u7) {
      let b10 = p4(m9.left, 0), R5 = p4(m9.right, 0), B4 = p4(m9.top, 0), T9 = p4(m9.bottom, 0);
      c7 ? A6 = f8 - 2 * (b10 !== 0 || R5 !== 0 ? b10 + R5 : p4(m9.left, m9.right)) : p8 = o7 - 2 * (B4 !== 0 || T9 !== 0 ? B4 + T9 : p4(m9.top, m9.bottom));
    }
    await r8({ ...t3, availableWidth: A6, availableHeight: p8 });
    let h9 = await i6.getDimensions(n3.floating);
    return f8 !== h9.width || o7 !== h9.height ? { reset: { rects: true } } : {};
  } };
};

// https://esm.sh/v132/@floating-ui/utils@0.1.3/denonext/dom.js
function l4(n3) {
  return a3(n3) ? (n3.nodeName || "").toLowerCase() : "#document";
}
function i3(n3) {
  var t3;
  return (n3 == null || (t3 = n3.ownerDocument) == null ? void 0 : t3.defaultView) || window;
}
function y5(n3) {
  var t3;
  return (t3 = (a3(n3) ? n3.ownerDocument : n3.document) || window.document) == null ? void 0 : t3.documentElement;
}
function a3(n3) {
  return n3 instanceof Node || n3 instanceof i3(n3).Node;
}
function S6(n3) {
  return n3 instanceof Element || n3 instanceof i3(n3).Element;
}
function d7(n3) {
  return n3 instanceof HTMLElement || n3 instanceof i3(n3).HTMLElement;
}
function s3(n3) {
  return typeof ShadowRoot > "u" ? false : n3 instanceof ShadowRoot || n3 instanceof i3(n3).ShadowRoot;
}
function m3(n3) {
  let { overflow: t3, overflowX: e5, overflowY: o7, display: r8 } = p5(n3);
  return /auto|scroll|overlay|hidden|clip/.test(t3 + o7 + e5) && !["inline", "contents"].includes(r8);
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
  for (; d7(t3) && !w5(t3); ) {
    if (N3(t3))
      return t3;
    t3 = u6(t3);
  }
  return null;
}
function h4() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function w5(n3) {
  return ["html", "body", "#document"].includes(l4(n3));
}
function p5(n3) {
  return i3(n3).getComputedStyle(n3);
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
  return w5(t3) ? n3.ownerDocument ? n3.ownerDocument.body : n3.body : d7(t3) && m3(t3) ? t3 : g4(t3);
}
function f3(n3, t3, e5) {
  var o7;
  t3 === void 0 && (t3 = []), e5 === void 0 && (e5 = true);
  let r8 = g4(n3), b10 = r8 === ((o7 = n3.ownerDocument) == null ? void 0 : o7.body), c7 = i3(r8);
  return b10 ? t3.concat(c7, c7.visualViewport || [], m3(r8) ? r8 : [], c7.frameElement && e5 ? f3(c7.frameElement) : []) : t3.concat(r8, f3(r8));
}

// https://esm.sh/v132/@floating-ui/dom@1.5.3/denonext/dom.mjs
function j5(t3) {
  let e5 = p5(t3), i6 = parseFloat(e5.width) || 0, o7 = parseFloat(e5.height) || 0, n3 = d7(t3), c7 = n3 ? t3.offsetWidth : i6, s6 = n3 ? t3.offsetHeight : o7, r8 = S5(i6) !== c7 || S5(o7) !== s6;
  return r8 && (i6 = c7, o7 = s6), { width: i6, height: o7, $: r8 };
}
function S7(t3) {
  return S6(t3) ? t3 : t3.contextElement;
}
function L5(t3) {
  let e5 = S7(t3);
  if (!d7(e5))
    return j3(1);
  let i6 = e5.getBoundingClientRect(), { width: o7, height: n3, $: c7 } = j5(e5), s6 = (c7 ? S5(i6.width) : i6.width) / o7, r8 = (c7 ? S5(i6.height) : i6.height) / n3;
  return (!s6 || !Number.isFinite(s6)) && (s6 = 1), (!r8 || !Number.isFinite(r8)) && (r8 = 1), { x: s6, y: r8 };
}
var et = j3(0);
function G5(t3) {
  let e5 = i3(t3);
  return !h4() || !e5.visualViewport ? et : { x: e5.visualViewport.offsetLeft, y: e5.visualViewport.offsetTop };
}
function it(t3, e5, i6) {
  return e5 === void 0 && (e5 = false), !i6 || e5 && i6 !== i3(t3) ? false : e5;
}
function O6(t3, e5, i6, o7) {
  e5 === void 0 && (e5 = false), i6 === void 0 && (i6 = false);
  let n3 = t3.getBoundingClientRect(), c7 = S7(t3), s6 = j3(1);
  e5 && (o7 ? S6(o7) && (s6 = L5(o7)) : s6 = L5(t3));
  let r8 = it(c7, i6, o7) ? G5(c7) : j3(0), l6 = (n3.left + r8.x) / s6.x, f8 = (n3.top + r8.y) / s6.y, p8 = n3.width / s6.x, d11 = n3.height / s6.y;
  if (c7) {
    let w10 = i3(c7), a5 = o7 && S6(o7) ? i3(o7) : o7, g7 = w10.frameElement;
    for (; g7 && o7 && a5 !== w10; ) {
      let h9 = L5(g7), R5 = g7.getBoundingClientRect(), u7 = p5(g7), C8 = R5.left + (g7.clientLeft + parseFloat(u7.paddingLeft)) * h9.x, W8 = R5.top + (g7.clientTop + parseFloat(u7.paddingTop)) * h9.y;
      l6 *= h9.x, f8 *= h9.y, p8 *= h9.x, d11 *= h9.y, l6 += C8, f8 += W8, g7 = i3(g7).frameElement;
    }
  }
  return q4({ width: p8, height: d11, x: l6, y: f8 });
}
function ot(t3) {
  let { rect: e5, offsetParent: i6, strategy: o7 } = t3, n3 = d7(i6), c7 = y5(i6);
  if (i6 === c7)
    return e5;
  let s6 = { scrollLeft: 0, scrollTop: 0 }, r8 = j3(1), l6 = j3(0);
  if ((n3 || !n3 && o7 !== "fixed") && ((l4(i6) !== "body" || m3(c7)) && (s6 = T4(i6)), d7(i6))) {
    let f8 = O6(i6);
    r8 = L5(i6), l6.x = f8.x + i6.clientLeft, l6.y = f8.y + i6.clientTop;
  }
  return { width: e5.width * r8.x, height: e5.height * r8.y, x: e5.x * r8.x - s6.scrollLeft * r8.x + l6.x, y: e5.y * r8.y - s6.scrollTop * r8.y + l6.y };
}
function nt(t3) {
  return Array.from(t3.getClientRects());
}
function J5(t3) {
  return O6(y5(t3)).left + T4(t3).scrollLeft;
}
function st(t3) {
  let e5 = y5(t3), i6 = T4(t3), o7 = t3.ownerDocument.body, n3 = p4(e5.scrollWidth, e5.clientWidth, o7.scrollWidth, o7.clientWidth), c7 = p4(e5.scrollHeight, e5.clientHeight, o7.scrollHeight, o7.clientHeight), s6 = -i6.scrollLeft + J5(t3), r8 = -i6.scrollTop;
  return p5(o7).direction === "rtl" && (s6 += p4(e5.clientWidth, o7.clientWidth) - n3), { width: n3, height: c7, x: s6, y: r8 };
}
function rt(t3, e5) {
  let i6 = i3(t3), o7 = y5(t3), n3 = i6.visualViewport, c7 = o7.clientWidth, s6 = o7.clientHeight, r8 = 0, l6 = 0;
  if (n3) {
    c7 = n3.width, s6 = n3.height;
    let f8 = h4();
    (!f8 || f8 && e5 === "fixed") && (r8 = n3.offsetLeft, l6 = n3.offsetTop);
  }
  return { width: c7, height: s6, x: r8, y: l6 };
}
function ct(t3, e5) {
  let i6 = O6(t3, true, e5 === "fixed"), o7 = i6.top + t3.clientTop, n3 = i6.left + t3.clientLeft, c7 = d7(t3) ? L5(t3) : j3(1), s6 = t3.clientWidth * c7.x, r8 = t3.clientHeight * c7.y, l6 = n3 * c7.x, f8 = o7 * c7.y;
  return { width: s6, height: r8, x: l6, y: f8 };
}
function k4(t3, e5, i6) {
  let o7;
  if (e5 === "viewport")
    o7 = rt(t3, i6);
  else if (e5 === "document")
    o7 = st(y5(t3));
  else if (S6(e5))
    o7 = ct(e5, i6);
  else {
    let n3 = G5(t3);
    o7 = { ...e5, x: e5.x - n3.x, y: e5.y - n3.y };
  }
  return q4(o7);
}
function P4(t3, e5) {
  let i6 = u6(t3);
  return i6 === e5 || !S6(i6) || w5(i6) ? false : p5(i6).position === "fixed" || P4(i6, e5);
}
function lt(t3, e5) {
  let i6 = e5.get(t3);
  if (i6)
    return i6;
  let o7 = f3(t3, [], false).filter((r8) => S6(r8) && l4(r8) !== "body"), n3 = null, c7 = p5(t3).position === "fixed", s6 = c7 ? u6(t3) : t3;
  for (; S6(s6) && !w5(s6); ) {
    let r8 = p5(s6), l6 = N3(s6);
    !l6 && r8.position === "fixed" && (n3 = null), (c7 ? !l6 && !n3 : !l6 && r8.position === "static" && !!n3 && ["absolute", "fixed"].includes(n3.position) || m3(s6) && !l6 && P4(t3, s6)) ? o7 = o7.filter((p8) => p8 !== s6) : n3 = r8, s6 = u6(s6);
  }
  return e5.set(t3, o7), o7;
}
function ft(t3) {
  let { element: e5, boundary: i6, rootBoundary: o7, strategy: n3 } = t3, s6 = [...i6 === "clippingAncestors" ? lt(e5, this._c) : [].concat(i6), o7], r8 = s6[0], l6 = s6.reduce((f8, p8) => {
    let d11 = k4(e5, p8, n3);
    return f8.top = p4(d11.top, f8.top), f8.right = m2(d11.right, f8.right), f8.bottom = m2(d11.bottom, f8.bottom), f8.left = p4(d11.left, f8.left), f8;
  }, k4(e5, r8, n3));
  return { width: l6.right - l6.left, height: l6.bottom - l6.top, x: l6.left, y: l6.top };
}
function ut(t3) {
  return j5(t3);
}
function ht(t3, e5, i6) {
  let o7 = d7(e5), n3 = y5(e5), c7 = i6 === "fixed", s6 = O6(t3, true, c7, e5), r8 = { scrollLeft: 0, scrollTop: 0 }, l6 = j3(0);
  if (o7 || !o7 && !c7)
    if ((l4(e5) !== "body" || m3(n3)) && (r8 = T4(e5)), o7) {
      let f8 = O6(e5, true, c7, e5);
      l6.x = f8.x + e5.clientLeft, l6.y = f8.y + e5.clientTop;
    } else
      n3 && (l6.x = J5(n3));
  return { x: s6.left + r8.scrollLeft - l6.x, y: s6.top + r8.scrollTop - l6.y, width: s6.width, height: s6.height };
}
function q6(t3, e5) {
  return !d7(t3) || p5(t3).position === "fixed" ? null : e5 ? e5(t3) : t3.offsetParent;
}
function Q6(t3, e5) {
  let i6 = i3(t3);
  if (!d7(t3))
    return i6;
  let o7 = q6(t3, e5);
  for (; o7 && E6(o7) && p5(o7).position === "static"; )
    o7 = q6(o7, e5);
  return o7 && (l4(o7) === "html" || l4(o7) === "body" && p5(o7).position === "static" && !N3(o7)) ? i6 : o7 || v2(t3) || i6;
}
var at = async function(t3) {
  let { reference: e5, floating: i6, strategy: o7 } = t3, n3 = this.getOffsetParent || Q6, c7 = this.getDimensions;
  return { reference: ht(e5, await n3(i6), o7), floating: { x: 0, y: 0, ...await c7(i6) } };
};
function dt(t3) {
  return p5(t3).direction === "rtl";
}
var gt = { convertOffsetParentRelativeRectToViewportRelativeRect: ot, getDocumentElement: y5, getClippingRect: ft, getOffsetParent: Q6, getElementRects: at, getClientRects: nt, getDimensions: ut, getScale: L5, isElement: S6, isRTL: dt };
function pt(t3, e5) {
  let i6 = null, o7, n3 = y5(t3);
  function c7() {
    clearTimeout(o7), i6 && i6.disconnect(), i6 = null;
  }
  function s6(r8, l6) {
    r8 === void 0 && (r8 = false), l6 === void 0 && (l6 = 1), c7();
    let { left: f8, top: p8, width: d11, height: w10 } = t3.getBoundingClientRect();
    if (r8 || e5(), !d11 || !w10)
      return;
    let a5 = w4(p8), g7 = w4(n3.clientWidth - (f8 + d11)), h9 = w4(n3.clientHeight - (p8 + w10)), R5 = w4(f8), C8 = { rootMargin: -a5 + "px " + -g7 + "px " + -h9 + "px " + -R5 + "px", threshold: p4(0, m2(1, l6)) || 1 }, W8 = true;
    function M10($5) {
      let D7 = $5[0].intersectionRatio;
      if (D7 !== l6) {
        if (!W8)
          return s6();
        D7 ? s6(false, D7) : o7 = setTimeout(() => {
          s6(false, 1e-7);
        }, 100);
      }
      W8 = false;
    }
    try {
      i6 = new IntersectionObserver(M10, { ...C8, root: n3.ownerDocument });
    } catch {
      i6 = new IntersectionObserver(M10, C8);
    }
    i6.observe(t3);
  }
  return s6(true), c7;
}
function yt(t3, e5, i6, o7) {
  o7 === void 0 && (o7 = {});
  let { ancestorScroll: n3 = true, ancestorResize: c7 = true, elementResize: s6 = typeof ResizeObserver == "function", layoutShift: r8 = typeof IntersectionObserver == "function", animationFrame: l6 = false } = o7, f8 = S7(t3), p8 = n3 || c7 ? [...f8 ? f3(f8) : [], ...f3(e5)] : [];
  p8.forEach((u7) => {
    n3 && u7.addEventListener("scroll", i6, { passive: true }), c7 && u7.addEventListener("resize", i6);
  });
  let d11 = f8 && r8 ? pt(f8, i6) : null, w10 = -1, a5 = null;
  s6 && (a5 = new ResizeObserver((u7) => {
    let [C8] = u7;
    C8 && C8.target === f8 && a5 && (a5.unobserve(e5), cancelAnimationFrame(w10), w10 = requestAnimationFrame(() => {
      a5 && a5.observe(e5);
    })), i6();
  }), f8 && !l6 && a5.observe(f8), a5.observe(e5));
  let g7, h9 = l6 ? O6(t3) : null;
  l6 && R5();
  function R5() {
    let u7 = O6(t3);
    h9 && (u7.x !== h9.x || u7.y !== h9.y || u7.width !== h9.width || u7.height !== h9.height) && i6(), h9 = u7, g7 = requestAnimationFrame(R5);
  }
  return i6(), () => {
    p8.forEach((u7) => {
      n3 && u7.removeEventListener("scroll", i6), c7 && u7.removeEventListener("resize", i6);
    }), d11 && d11(), a5 && a5.disconnect(), a5 = null, l6 && cancelAnimationFrame(g7);
  };
}
var vt = (t3, e5, i6) => {
  let o7 = /* @__PURE__ */ new Map(), n3 = { platform: gt, ...i6 }, c7 = { ...n3.platform, _c: o7 };
  return ae3(t3, e5, { ...n3, platform: c7 });
};

// https://esm.sh/v132/@floating-ui/react-dom@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dom.mjs
var T5 = (e5) => {
  function t3(r8) {
    return {}.hasOwnProperty.call(r8, "current");
  }
  return { name: "arrow", options: e5, fn(r8) {
    let { element: n3, padding: i6 } = typeof e5 == "function" ? e5(r8) : e5;
    return n3 && t3(n3) ? n3.current != null ? fe3({ element: n3.current, padding: i6 }).fn(r8) : {} : n3 ? fe3({ element: n3, padding: i6 }).fn(r8) : {};
  } };
};
var w6 = typeof document < "u" ? S2 : z2;
function h5(e5, t3) {
  if (e5 === t3)
    return true;
  if (typeof e5 != typeof t3)
    return false;
  if (typeof e5 == "function" && e5.toString() === t3.toString())
    return true;
  let r8, n3, i6;
  if (e5 && t3 && typeof e5 == "object") {
    if (Array.isArray(e5)) {
      if (r8 = e5.length, r8 != t3.length)
        return false;
      for (n3 = r8; n3-- !== 0; )
        if (!h5(e5[n3], t3[n3]))
          return false;
      return true;
    }
    if (i6 = Object.keys(e5), r8 = i6.length, r8 !== Object.keys(t3).length)
      return false;
    for (n3 = r8; n3-- !== 0; )
      if (!{}.hasOwnProperty.call(t3, i6[n3]))
        return false;
    for (n3 = r8; n3-- !== 0; ) {
      let d11 = i6[n3];
      if (!(d11 === "_owner" && e5.$$typeof) && !h5(e5[d11], t3[d11]))
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
  let r8 = z3(e5);
  return Math.round(t3 * r8) / r8;
}
function $3(e5) {
  let t3 = L(e5);
  return w6(() => {
    t3.current = e5;
  }), t3;
}
function W4(e5) {
  e5 === void 0 && (e5 = {});
  let { placement: t3 = "bottom", strategy: r8 = "absolute", middleware: n3 = [], platform: i6, elements: { reference: d11, floating: B4 } = {}, transform: D7 = true, whileElementsMounted: U7, open: O9 } = e5, [c7, k6] = I2({ x: 0, y: 0, strategy: r8, placement: t3, middlewareData: {}, isPositioned: false }), [P8, V8] = I2(n3);
  h5(P8, n3) || V8(n3);
  let [G7, E9] = I2(null), [H5, _4] = I2(null), v4 = G2((o7) => {
    o7 != l6.current && (l6.current = o7, E9(o7));
  }, [E9]), C8 = G2((o7) => {
    o7 !== m9.current && (m9.current = o7, _4(o7));
  }, [_4]), u7 = d11 || G7, s6 = B4 || H5, l6 = L(null), m9 = L(null), g7 = L(c7), x12 = $3(U7), M10 = $3(i6), p8 = G2(() => {
    if (!l6.current || !m9.current)
      return;
    let o7 = { placement: t3, strategy: r8, middleware: P8 };
    M10.current && (o7.platform = M10.current), vt(l6.current, m9.current, o7).then((y7) => {
      let R5 = { ...y7, isPositioned: true };
      S13.current && !h5(g7.current, R5) && (g7.current = R5, Re(() => {
        k6(R5);
      }));
    });
  }, [P8, t3, r8, M10]);
  w6(() => {
    O9 === false && g7.current.isPositioned && (g7.current.isPositioned = false, k6((o7) => ({ ...o7, isPositioned: false })));
  }, [O9]);
  let S13 = L(false);
  w6(() => (S13.current = true, () => {
    S13.current = false;
  }), []), w6(() => {
    if (u7 && (l6.current = u7), s6 && (m9.current = s6), u7 && s6) {
      if (x12.current)
        return x12.current(u7, s6, p8);
      p8();
    }
  }, [u7, s6, p8, x12]);
  let F7 = T(() => ({ reference: l6, floating: m9, setReference: v4, setFloating: C8 }), [v4, C8]), a5 = T(() => ({ reference: u7, floating: s6 }), [u7, s6]), j8 = T(() => {
    let o7 = { position: r8, left: 0, top: 0 };
    if (!a5.floating)
      return o7;
    let y7 = L6(a5.floating, c7.x), R5 = L6(a5.floating, c7.y);
    return D7 ? { ...o7, transform: "translate(" + y7 + "px, " + R5 + "px)", ...z3(a5.floating) >= 1.5 && { willChange: "transform" } } : { position: r8, left: y7, top: R5 };
  }, [r8, D7, a5.floating, c7.x, c7.y]);
  return T(() => ({ ...c7, update: p8, refs: F7, elements: a5, floatingStyles: j8 }), [c7, p8, F7, a5, j8]);
}

// https://esm.sh/v132/@radix-ui/react-arrow@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-arrow.mjs
var f4 = ee2((e5, t3) => {
  let { children: o7, width: i6 = 10, height: n3 = 5, ...s6 } = e5;
  return re(u3.svg, p3({}, s6, { ref: t3, width: i6, height: n3, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), e5.asChild ? o7 : re("polygon", { points: "0,0 30,0 15,10" }));
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
        let b10 = i6[0], t3, o7;
        if ("borderBoxSize" in b10) {
          let s6 = b10.borderBoxSize, d11 = Array.isArray(s6) ? s6[0] : s6;
          t3 = d11.inlineSize, o7 = d11.blockSize;
        } else
          t3 = e5.offsetWidth, o7 = e5.offsetHeight;
        r8({ width: t3, height: o7 });
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
  let { __scopePopper: i6, children: r8 } = o7, [t3, a5] = I2(null);
  return re(Ve, { scope: i6, anchor: t3, onAnchorChange: a5 }, r8);
};
var Re2 = "PopperAnchor";
var Ee2 = ee2((o7, i6) => {
  let { __scopePopper: r8, virtualRef: t3, ...a5 } = o7, e5 = B2(Re2, r8), n3 = L(null), c7 = u2(i6, n3);
  return z2(() => {
    e5.onAnchorChange(t3?.current || n3.current);
  }), t3 ? null : re(u3.div, p3({}, a5, { ref: c7 }));
});
var L7 = "PopperContent";
var [Ne2, He] = T6(L7);
var ze = ee2((o7, i6) => {
  var r8, t3, a5, e5, n3, c7, u7, l6;
  let { __scopePopper: S13, side: s6 = "bottom", sideOffset: Y5 = 0, align: d11 = "center", alignOffset: w10 = 0, arrowPadding: k6 = 0, avoidCollisions: f8 = true, collisionBoundary: h9 = [], collisionPadding: g7 = 0, sticky: p8 = "partial", hideWhenDetached: $5 = false, updatePositionStrategy: Z7 = "optimized", onPlaced: G7, ...E9 } = o7, q10 = B2(L7, S13), [O9, J8] = I2(null), K3 = u2(i6, (P8) => J8(P8)), [V8, Q10] = I2(null), v4 = z4(V8), ee6 = (r8 = v4?.width) !== null && r8 !== void 0 ? r8 : 0, N6 = (t3 = v4?.height) !== null && t3 !== void 0 ? t3 : 0, te7 = s6 + (d11 !== "center" ? "-" + d11 : ""), oe6 = typeof g7 == "number" ? g7 : { top: 0, right: 0, bottom: 0, left: 0, ...g7 }, H5 = Array.isArray(h9) ? h9 : [h9], re7 = H5.length > 0, y7 = { padding: oe6, boundary: H5.filter(je), altBoundary: re7 }, { refs: ae8, floatingStyles: z9, placement: ne6, isPositioned: b10, middlewareData: x12 } = W4({ strategy: "fixed", placement: te7, whileElementsMounted: (...P8) => yt(...P8, { animationFrame: Z7 === "always" }), elements: { reference: q10.anchor }, middleware: [xe2({ mainAxis: Y5 + N6, alignmentAxis: w10 }), f8 && he3({ mainAxis: true, crossAxis: false, limiter: p8 === "partial" ? pe3() : void 0, ...y7 }), f8 && de3({ ...y7 }), we2({ ...y7, apply: ({ elements: P8, rects: W8, availableWidth: pe5, availableHeight: $e }) => {
    let { width: me3, height: ue6 } = W8.reference, _4 = P8.floating.style;
    _4.setProperty("--radix-popper-available-width", `${pe5}px`), _4.setProperty("--radix-popper-available-height", `${$e}px`), _4.setProperty("--radix-popper-anchor-width", `${me3}px`), _4.setProperty("--radix-popper-anchor-height", `${ue6}px`);
  } }), V8 && T5({ element: V8, padding: k6 }), Fe({ arrowWidth: ee6, arrowHeight: N6 }), $5 && ue3({ strategy: "referenceHidden", ...y7 })] }), [I8, ie5] = U3(ne6), A6 = l2(G7);
  e(() => {
    b10 && A6?.();
  }, [b10, A6]);
  let se6 = (a5 = x12.arrow) === null || a5 === void 0 ? void 0 : a5.x, de6 = (e5 = x12.arrow) === null || e5 === void 0 ? void 0 : e5.y, ce5 = ((n3 = x12.arrow) === null || n3 === void 0 ? void 0 : n3.centerOffset) !== 0, [le4, fe6] = I2();
  return e(() => {
    O9 && fe6(window.getComputedStyle(O9).zIndex);
  }, [O9]), re("div", { ref: ae8.setFloating, "data-radix-popper-content-wrapper": "", style: { ...z9, transform: b10 ? z9.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: le4, "--radix-popper-transform-origin": [(c7 = x12.transformOrigin) === null || c7 === void 0 ? void 0 : c7.x, (u7 = x12.transformOrigin) === null || u7 === void 0 ? void 0 : u7.y].join(" ") }, dir: o7.dir }, re(Ne2, { scope: S13, placedSide: I8, onArrowChange: Q10, arrowX: se6, arrowY: de6, shouldHideArrow: ce5 }, re(u3.div, p3({ "data-side": I8, "data-align": ie5 }, E9, { ref: K3, style: { ...E9.style, animation: b10 ? void 0 : "none", opacity: (l6 = x12.hide) !== null && l6 !== void 0 && l6.referenceHidden ? 0 : void 0 } }))));
});
var Ie = "PopperArrow";
var We = { top: "bottom", right: "left", bottom: "top", left: "right" };
var Xe = ee2(function(i6, r8) {
  let { __scopePopper: t3, ...a5 } = i6, e5 = He(Ie, t3), n3 = We[e5.placedSide];
  return re("span", { ref: e5.onArrowChange, style: { position: "absolute", left: e5.arrowX, top: e5.arrowY, [n3]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e5.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e5.placedSide], visibility: e5.shouldHideArrow ? "hidden" : void 0 } }, re(b7, p3({}, a5, { ref: r8, style: { ...a5.style, display: "block" } })));
});
function je(o7) {
  return o7 !== null;
}
var Fe = (o7) => ({ name: "transformOrigin", options: o7, fn(i6) {
  var r8, t3, a5, e5, n3;
  let { placement: c7, rects: u7, middlewareData: l6 } = i6, s6 = ((r8 = l6.arrow) === null || r8 === void 0 ? void 0 : r8.centerOffset) !== 0, Y5 = s6 ? 0 : o7.arrowWidth, d11 = s6 ? 0 : o7.arrowHeight, [w10, k6] = U3(c7), f8 = { start: "0%", center: "50%", end: "100%" }[k6], h9 = ((t3 = (a5 = l6.arrow) === null || a5 === void 0 ? void 0 : a5.x) !== null && t3 !== void 0 ? t3 : 0) + Y5 / 2, g7 = ((e5 = (n3 = l6.arrow) === null || n3 === void 0 ? void 0 : n3.y) !== null && e5 !== void 0 ? e5 : 0) + d11 / 2, p8 = "", $5 = "";
  return w10 === "bottom" ? (p8 = s6 ? f8 : `${h9}px`, $5 = `${-d11}px`) : w10 === "top" ? (p8 = s6 ? f8 : `${h9}px`, $5 = `${u7.floating.height + d11}px`) : w10 === "right" ? (p8 = `${-d11}px`, $5 = s6 ? f8 : `${g7}px`) : w10 === "left" && (p8 = `${u7.floating.width + d11}px`, $5 = s6 ? f8 : `${g7}px`), { data: { x: p8, y: $5 } };
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
  let { container: o7 = globalThis == null || (e5 = globalThis.document) === null || e5 === void 0 ? void 0 : e5.body, ...t3 } = r8;
  return o7 ? Te.createPortal(re(u3.div, p3({}, t3, { ref: a5 })), o7) : null;
});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S8(n3, t3) {
  return R2((o7, r8) => {
    let i6 = t3[o7][r8];
    return i6 ?? o7;
  }, n3);
}
var U4 = (n3) => {
  let { present: t3, children: o7 } = n3, r8 = y6(t3), i6 = typeof o7 == "function" ? o7({ present: r8.isPresent }) : te2.only(o7), a5 = u2(r8.ref, i6.ref);
  return typeof o7 == "function" || r8.isPresent ? Ee(i6, { ref: a5 }) : null;
};
U4.displayName = "Presence";
function y6(n3) {
  let [t3, o7] = I2(), r8 = L({}), i6 = L(n3), a5 = L("none"), N6 = n3 ? "mounted" : "unmounted", [f8, s6] = S8(N6, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e5 = d8(r8.current);
    a5.current = f8 === "mounted" ? e5 : "none";
  }, [f8]), e(() => {
    let e5 = r8.current, u7 = i6.current;
    if (u7 !== n3) {
      let $5 = a5.current, m9 = d8(e5);
      n3 ? s6("MOUNT") : m9 === "none" || e5?.display === "none" ? s6("UNMOUNT") : s6(u7 && $5 !== m9 ? "ANIMATION_OUT" : "UNMOUNT"), i6.current = n3;
    }
  }, [n3, s6]), e(() => {
    if (t3) {
      let e5 = (c7) => {
        let m9 = d8(r8.current).includes(c7.animationName);
        c7.target === t3 && m9 && Re(() => s6("ANIMATION_END"));
      }, u7 = (c7) => {
        c7.target === t3 && (a5.current = d8(r8.current));
      };
      return t3.addEventListener("animationstart", u7), t3.addEventListener("animationcancel", e5), t3.addEventListener("animationend", e5), () => {
        t3.removeEventListener("animationstart", u7), t3.removeEventListener("animationcancel", e5), t3.removeEventListener("animationend", e5);
      };
    } else
      s6("ANIMATION_END");
  }, [t3, s6]), { isPresent: ["mounted", "unmountSuspended"].includes(f8), ref: G2((e5) => {
    e5 && (r8.current = getComputedStyle(e5)), o7(e5);
  }, []) };
}
function d8(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-roving-focus@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-roving-focus.mjs
var T7 = "rovingFocusGroup.onEntryFocus";
var X5 = { bubbles: false, cancelable: true };
var x6 = "RovingFocusGroup";
var [w7, M6, Z2] = _2(x6);
var [ee3, Ee3] = _(x6, [Z2]);
var [oe3, te3] = ee3(x6);
var re3 = ee2((e5, o7) => re(w7.Provider, { scope: e5.__scopeRovingFocusGroup }, re(w7.Slot, { scope: e5.__scopeRovingFocusGroup }, re(ne3, p3({}, e5, { ref: o7 })))));
var ne3 = ee2((e5, o7) => {
  let { __scopeRovingFocusGroup: n3, orientation: t3, loop: v4 = false, dir: F7, currentTabStopId: g7, defaultCurrentTabStopId: R5, onCurrentTabStopIdChange: b10, onEntryFocus: c7, ...C8 } = e5, $5 = L(null), m9 = u2(o7, $5), p8 = i(F7), [s6 = null, u7] = w3({ prop: g7, defaultProp: R5, onChange: b10 }), [E9, a5] = I2(false), f8 = l2(c7), U7 = M6(n3), S13 = L(false), [k6, h9] = I2(0);
  return z2(() => {
    let r8 = $5.current;
    if (r8)
      return r8.addEventListener(T7, f8), () => r8.removeEventListener(T7, f8);
  }, [f8]), re(oe3, { scope: n3, orientation: t3, dir: p8, loop: v4, currentTabStopId: s6, onItemFocus: G2((r8) => u7(r8), [u7]), onItemShiftTab: G2(() => a5(true), []), onFocusableItemAdd: G2(() => h9((r8) => r8 + 1), []), onFocusableItemRemove: G2(() => h9((r8) => r8 - 1), []) }, re(u3.div, p3({ tabIndex: E9 || k6 === 0 ? -1 : 0, "data-orientation": t3 }, C8, { ref: m9, style: { outline: "none", ...e5.style }, onMouseDown: o3(e5.onMouseDown, () => {
    S13.current = true;
  }), onFocus: o3(e5.onFocus, (r8) => {
    let K3 = !S13.current;
    if (r8.target === r8.currentTarget && K3 && !E9) {
      let D7 = new CustomEvent(T7, X5);
      if (r8.currentTarget.dispatchEvent(D7), !D7.defaultPrevented) {
        let y7 = U7().filter((d11) => d11.focusable), B4 = y7.find((d11) => d11.active), H5 = y7.find((d11) => d11.id === s6), Y5 = [B4, H5, ...y7].filter(Boolean).map((d11) => d11.ref.current);
        L8(Y5);
      }
    }
    S13.current = false;
  }), onBlur: o3(e5.onBlur, () => a5(false)) })));
});
var se3 = "RovingFocusGroupItem";
var ce3 = ee2((e5, o7) => {
  let { __scopeRovingFocusGroup: n3, focusable: t3 = true, active: v4 = false, tabStopId: F7, ...g7 } = e5, R5 = n2(), b10 = F7 || R5, c7 = te3(se3, n3), C8 = c7.currentTabStopId === b10, $5 = M6(n3), { onFocusableItemAdd: m9, onFocusableItemRemove: p8 } = c7;
  return z2(() => {
    if (t3)
      return m9(), () => p8();
  }, [t3, m9, p8]), re(w7.ItemSlot, { scope: n3, id: b10, focusable: t3, active: v4 }, re(u3.span, p3({ tabIndex: C8 ? 0 : -1, "data-orientation": c7.orientation }, g7, { ref: o7, onMouseDown: o3(e5.onMouseDown, (s6) => {
    t3 ? c7.onItemFocus(b10) : s6.preventDefault();
  }), onFocus: o3(e5.onFocus, () => c7.onItemFocus(b10)), onKeyDown: o3(e5.onKeyDown, (s6) => {
    if (s6.key === "Tab" && s6.shiftKey) {
      c7.onItemShiftTab();
      return;
    }
    if (s6.target !== s6.currentTarget)
      return;
    let u7 = ue4(s6, c7.orientation, c7.dir);
    if (u7 !== void 0) {
      s6.preventDefault();
      let a5 = $5().filter((f8) => f8.focusable).map((f8) => f8.ref.current);
      if (u7 === "last")
        a5.reverse();
      else if (u7 === "prev" || u7 === "next") {
        u7 === "prev" && a5.reverse();
        let f8 = a5.indexOf(s6.currentTarget);
        a5 = c7.loop ? de4(a5, f8 + 1) : a5.slice(f8 + 1);
      }
      setTimeout(() => L8(a5));
    }
  }) })));
});
var ae4 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function fe4(e5, o7) {
  return o7 !== "rtl" ? e5 : e5 === "ArrowLeft" ? "ArrowRight" : e5 === "ArrowRight" ? "ArrowLeft" : e5;
}
function ue4(e5, o7, n3) {
  let t3 = fe4(e5.key, n3);
  if (!(o7 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(t3)) && !(o7 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(t3)))
    return ae4[t3];
}
function L8(e5) {
  let o7 = document.activeElement;
  for (let n3 of e5)
    if (n3 === o7 || (n3.focus(), document.activeElement !== o7))
      return;
}
function de4(e5, o7) {
  return e5.map((n3, t3) => e5[(o7 + t3) % e5.length]);
}
var Se2 = re3;
var ye2 = ce3;

// https://esm.sh/v133/aria-hidden@1.2.3/denonext/aria-hidden.mjs
var W5 = function(r8) {
  if (typeof document > "u")
    return null;
  var i6 = Array.isArray(r8) ? r8[0] : r8;
  return i6.ownerDocument.body;
};
var f5 = /* @__PURE__ */ new WeakMap();
var c3 = /* @__PURE__ */ new WeakMap();
var p6 = {};
var h6 = 0;
var b8 = function(r8) {
  return r8 && (r8.host || b8(r8.parentNode));
};
var x7 = function(r8, i6) {
  return i6.map(function(t3) {
    if (r8.contains(t3))
      return t3;
    var n3 = b8(t3);
    return n3 && r8.contains(n3) ? n3 : (console.error("aria-hidden", t3, "in not contained inside", r8, ". Doing nothing"), null);
  }).filter(function(t3) {
    return !!t3;
  });
};
var E7 = function(r8, i6, t3, n3) {
  var a5 = x7(i6, Array.isArray(r8) ? r8 : [r8]);
  p6[t3] || (p6[t3] = /* @__PURE__ */ new WeakMap());
  var o7 = p6[t3], l6 = [], v4 = /* @__PURE__ */ new Set(), O9 = new Set(a5), y7 = function(e5) {
    !e5 || v4.has(e5) || (v4.add(e5), y7(e5.parentNode));
  };
  a5.forEach(y7);
  var d11 = function(e5) {
    !e5 || O9.has(e5) || Array.prototype.forEach.call(e5.children, function(u7) {
      if (v4.has(u7))
        d11(u7);
      else {
        var s6 = u7.getAttribute(n3), A6 = s6 !== null && s6 !== "false", w10 = (f5.get(u7) || 0) + 1, M10 = (o7.get(u7) || 0) + 1;
        f5.set(u7, w10), o7.set(u7, M10), l6.push(u7), w10 === 1 && A6 && c3.set(u7, true), M10 === 1 && u7.setAttribute(t3, "true"), A6 || u7.setAttribute(n3, "true");
      }
    });
  };
  return d11(i6), v4.clear(), h6++, function() {
    l6.forEach(function(e5) {
      var u7 = f5.get(e5) - 1, s6 = o7.get(e5) - 1;
      f5.set(e5, u7), o7.set(e5, s6), u7 || (c3.has(e5) || e5.removeAttribute(n3), c3.delete(e5)), s6 || e5.removeAttribute(t3);
    }), h6--, h6 || (f5 = /* @__PURE__ */ new WeakMap(), f5 = /* @__PURE__ */ new WeakMap(), c3 = /* @__PURE__ */ new WeakMap(), p6 = {});
  };
};
var P5 = function(r8, i6, t3) {
  t3 === void 0 && (t3 = "data-aria-hidden");
  var n3 = Array.from(Array.isArray(r8) ? r8 : [r8]), a5 = i6 || W5(r8);
  return a5 ? (n3.push.apply(n3, Array.from(a5.querySelectorAll("[aria-live]"))), E7(n3, a5, t3, "aria-hidden")) : function() {
    return null;
  };
};

// https://esm.sh/v133/tslib@2.6.2/denonext/tslib.mjs
var m5 = function() {
  return m5 = Object.assign || function(t3) {
    for (var n3, r8 = 1, i6 = arguments.length; r8 < i6; r8++) {
      n3 = arguments[r8];
      for (var o7 in n3)
        Object.prototype.hasOwnProperty.call(n3, o7) && (t3[o7] = n3[o7]);
    }
    return t3;
  }, m5.apply(this, arguments);
};
function S9(e5, t3) {
  var n3 = {};
  for (var r8 in e5)
    Object.prototype.hasOwnProperty.call(e5, r8) && t3.indexOf(r8) < 0 && (n3[r8] = e5[r8]);
  if (e5 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i6 = 0, r8 = Object.getOwnPropertySymbols(e5); i6 < r8.length; i6++)
      t3.indexOf(r8[i6]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r8[i6]) && (n3[r8[i6]] = e5[r8[i6]]);
  return n3;
}
function M7(e5, t3, n3) {
  if (n3 || arguments.length === 2)
    for (var r8 = 0, i6 = t3.length, o7; r8 < i6; r8++)
      (o7 || !(r8 in t3)) && (o7 || (o7 = Array.prototype.slice.call(t3, 0, r8)), o7[r8] = t3[r8]);
  return e5.concat(o7 || Array.prototype.slice.call(t3));
}

// https://esm.sh/v133/react-remove-scroll-bar@2.3.4/denonext/constants.js
var r6 = "right-scroll-bar-position";
var a4 = "width-before-scroll-bar";

// https://esm.sh/v132/use-callback-ref@1.3.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-callback-ref.mjs
function o4(r8, e5) {
  return typeof r8 == "function" ? r8(e5) : r8 && (r8.current = e5), r8;
}
function f6(r8, e5) {
  var t3 = I2(function() {
    return { value: r8, callback: e5, facade: { get current() {
      return t3.value;
    }, set current(n3) {
      var u7 = t3.value;
      u7 !== n3 && (t3.value = n3, t3.callback(n3, u7));
    } } };
  })[0];
  return t3.callback = e5, t3.facade;
}
function m6(r8, e5) {
  return f6(e5 || null, function(t3) {
    return r8.forEach(function(n3) {
      return o4(n3, t3);
    });
  });
}

// https://esm.sh/v132/use-sidecar@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-sidecar.mjs
function C6(e5) {
  return e5;
}
function E8(e5, r8) {
  r8 === void 0 && (r8 = C6);
  var t3 = [], c7 = false, i6 = { read: function() {
    if (c7)
      throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return t3.length ? t3[t3.length - 1] : e5;
  }, useMedium: function(o7) {
    var n3 = r8(o7, c7);
    return t3.push(n3), function() {
      t3 = t3.filter(function(a5) {
        return a5 !== n3;
      });
    };
  }, assignSyncMedium: function(o7) {
    for (c7 = true; t3.length; ) {
      var n3 = t3;
      t3 = [], n3.forEach(o7);
    }
    t3 = { push: function(a5) {
      return o7(a5);
    }, filter: function() {
      return t3;
    } };
  }, assignMedium: function(o7) {
    c7 = true;
    var n3 = [];
    if (t3.length) {
      var a5 = t3;
      t3 = [], a5.forEach(o7), n3 = t3;
    }
    var d11 = function() {
      var u7 = n3;
      n3 = [], u7.forEach(o7);
    }, s6 = function() {
      return Promise.resolve().then(d11);
    };
    s6(), t3 = { push: function(u7) {
      n3.push(u7), s6();
    }, filter: function(u7) {
      return n3 = n3.filter(u7), t3;
    } };
  } };
  return i6;
}
function P6(e5) {
  e5 === void 0 && (e5 = {});
  var r8 = E8(null);
  return r8.options = m5({ async: true, ssr: false }, e5), r8;
}
var w8 = function(e5) {
  var r8 = e5.sideCar, t3 = S9(e5, ["sideCar"]);
  if (!r8)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c7 = r8.read();
  if (!c7)
    throw new Error("Sidecar medium not found");
  return re(c7, m5({}, t3));
};
w8.isSideCarExport = true;
function A5(e5, r8) {
  return e5.useMedium(r8), w8;
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
var r7 = function() {
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
  var t3 = r7(), e5 = function(n3) {
    var i6 = n3.styles, u7 = n3.dynamic;
    return t3(i6, u7), null;
  };
  return e5;
};

// https://esm.sh/v132/react-remove-scroll-bar@2.3.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll-bar.mjs
var i4 = "right-scroll-bar-position";
var c5 = "width-before-scroll-bar";
var g5 = "with-scroll-bars-hidden";
var p7 = "--removed-body-scroll-bar-size";
var v3 = { left: 0, top: 0, right: 0, gap: 0 };
var m8 = function(n3) {
  return parseInt(n3 || "", 10) || 0;
};
var h7 = function(n3) {
  var a5 = window.getComputedStyle(document.body), r8 = a5[n3 === "padding" ? "paddingLeft" : "marginLeft"], t3 = a5[n3 === "padding" ? "paddingTop" : "marginTop"], o7 = a5[n3 === "padding" ? "paddingRight" : "marginRight"];
  return [m8(r8), m8(t3), m8(o7)];
};
var s5 = function(n3) {
  if (n3 === void 0 && (n3 = "margin"), typeof window > "u")
    return v3;
  var a5 = h7(n3), r8 = document.documentElement.clientWidth, t3 = window.innerWidth;
  return { left: a5[0], top: a5[1], right: a5[2], gap: Math.max(0, t3 - r8 + a5[2] - a5[0]) };
};
var x8 = m7();
var b9 = function(n3, a5, r8, t3) {
  var o7 = n3.left, d11 = n3.top, f8 = n3.right, e5 = n3.gap;
  return r8 === void 0 && (r8 = "margin"), `
  .`.concat(g5, ` {
   overflow: hidden `).concat(t3, `;
   padding-right: `).concat(e5, "px ").concat(t3, `;
  }
  body {
    overflow: hidden `).concat(t3, `;
    overscroll-behavior: contain;
    `).concat([a5 && "position: relative ".concat(t3, ";"), r8 === "margin" && `
    padding-left: `.concat(o7, `px;
    padding-top: `).concat(d11, `px;
    padding-right: `).concat(f8, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e5, "px ").concat(t3, `;
    `), r8 === "padding" && "padding-right: ".concat(e5, "px ").concat(t3, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(i4, ` {
    right: `).concat(e5, "px ").concat(t3, `;
  }
  
  .`).concat(c5, ` {
    margin-right: `).concat(e5, "px ").concat(t3, `;
  }
  
  .`).concat(i4, " .").concat(i4, ` {
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
var w9 = function(n3) {
  var a5 = n3.noRelative, r8 = n3.noImportant, t3 = n3.gapMode, o7 = t3 === void 0 ? "margin" : t3, d11 = T(function() {
    return s5(o7);
  }, [o7]);
  return re(x8, { styles: b9(d11, !a5, o7, r8 ? "" : "!important") });
};

// https://esm.sh/v132/react-remove-scroll@2.5.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll.mjs
var N4 = P6();
var D4 = function() {
};
var M8 = ee2(function(e5, t3) {
  var c7 = L(null), o7 = I2({ onScrollCapture: D4, onWheelCapture: D4, onTouchMoveCapture: D4 }), u7 = o7[0], s6 = o7[1], d11 = e5.forwardProps, l6 = e5.children, R5 = e5.className, g7 = e5.removeScrollBar, w10 = e5.enabled, C8 = e5.shards, b10 = e5.sideCar, y7 = e5.noIsolation, E9 = e5.inert, r8 = e5.allowPinchZoom, n3 = e5.as, v4 = n3 === void 0 ? "div" : n3, h9 = e5.gapMode, m9 = S9(e5, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S13 = b10, f8 = m6([c7, t3]), p8 = m5(m5({}, m9), u7);
  return re(H, null, w10 && re(S13, { sideCar: N4, removeScrollBar: g7, shards: C8, noIsolation: y7, inert: E9, setCallbacks: s6, allowPinchZoom: !!r8, lockRef: c7, gapMode: h9 }), d11 ? Ee(te2.only(l6), m5(m5({}, p8), { ref: f8 })) : re(v4, m5({}, p8, { className: R5, ref: f8 }), l6));
});
M8.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
M8.classNames = { fullWidth: a4, zeroRight: r6 };
var W6 = false;
if (typeof window < "u")
  try {
    x9 = Object.defineProperty({}, "passive", { get: function() {
      return W6 = true, true;
    } }), window.addEventListener("test", x9, x9), window.removeEventListener("test", x9, x9);
  } catch {
    W6 = false;
  }
var x9;
var k5 = W6 ? { passive: false } : false;
var O7 = function(e5) {
  return e5.tagName === "TEXTAREA";
};
var H3 = function(e5, t3) {
  var c7 = window.getComputedStyle(e5);
  return c7[t3] !== "hidden" && !(c7.overflowY === c7.overflowX && !O7(e5) && c7[t3] === "visible");
};
var ee4 = function(e5) {
  return H3(e5, "overflowY");
};
var re4 = function(e5) {
  return H3(e5, "overflowX");
};
var I6 = function(e5, t3) {
  var c7 = t3.ownerDocument, o7 = t3;
  do {
    typeof ShadowRoot < "u" && o7 instanceof ShadowRoot && (o7 = o7.host);
    var u7 = V5(e5, o7);
    if (u7) {
      var s6 = Z3(e5, o7), d11 = s6[1], l6 = s6[2];
      if (d11 > l6)
        return true;
    }
    o7 = o7.parentNode;
  } while (o7 && o7 !== c7.body);
  return false;
};
var te4 = function(e5) {
  var t3 = e5.scrollTop, c7 = e5.scrollHeight, o7 = e5.clientHeight;
  return [t3, c7, o7];
};
var ae5 = function(e5) {
  var t3 = e5.scrollLeft, c7 = e5.scrollWidth, o7 = e5.clientWidth;
  return [t3, c7, o7];
};
var V5 = function(e5, t3) {
  return e5 === "v" ? ee4(t3) : re4(t3);
};
var Z3 = function(e5, t3) {
  return e5 === "v" ? te4(t3) : ae5(t3);
};
var ne4 = function(e5, t3) {
  return e5 === "h" && t3 === "rtl" ? -1 : 1;
};
var F5 = function(e5, t3, c7, o7, u7) {
  var s6 = ne4(e5, window.getComputedStyle(t3).direction), d11 = s6 * o7, l6 = c7.target, R5 = t3.contains(l6), g7 = false, w10 = d11 > 0, C8 = 0, b10 = 0;
  do {
    var y7 = Z3(e5, l6), E9 = y7[0], r8 = y7[1], n3 = y7[2], v4 = r8 - n3 - s6 * E9;
    (E9 || v4) && V5(e5, l6) && (C8 += v4, b10 += E9), l6 = l6.parentNode;
  } while (!R5 && l6 !== document.body || R5 && (t3.contains(l6) || t3 === l6));
  return (w10 && (u7 && C8 === 0 || !u7 && d11 > C8) || !w10 && (u7 && b10 === 0 || !u7 && -d11 > b10)) && (g7 = true), g7;
};
var X6 = function(e5) {
  return "changedTouches" in e5 ? [e5.changedTouches[0].clientX, e5.changedTouches[0].clientY] : [0, 0];
};
var z5 = function(e5) {
  return [e5.deltaX, e5.deltaY];
};
var _3 = function(e5) {
  return e5 && "current" in e5 ? e5.current : e5;
};
var ie3 = function(e5, t3) {
  return e5[0] === t3[0] && e5[1] === t3[1];
};
var ue5 = function(e5) {
  return `
  .block-interactivity-`.concat(e5, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e5, ` {pointer-events: all;}
`);
};
var fe5 = 0;
var B3 = [];
function j6(e5) {
  var t3 = L([]), c7 = L([0, 0]), o7 = L(), u7 = I2(fe5++)[0], s6 = I2(m7)[0], d11 = L(e5);
  z2(function() {
    d11.current = e5;
  }, [e5]), z2(function() {
    if (e5.inert) {
      document.body.classList.add("block-interactivity-".concat(u7));
      var r8 = M7([e5.lockRef.current], (e5.shards || []).map(_3), true).filter(Boolean);
      return r8.forEach(function(n3) {
        return n3.classList.add("allow-interactivity-".concat(u7));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u7)), r8.forEach(function(n3) {
          return n3.classList.remove("allow-interactivity-".concat(u7));
        });
      };
    }
  }, [e5.inert, e5.lockRef.current, e5.shards]);
  var l6 = G2(function(r8, n3) {
    if ("touches" in r8 && r8.touches.length === 2)
      return !d11.current.allowPinchZoom;
    var v4 = X6(r8), h9 = c7.current, m9 = "deltaX" in r8 ? r8.deltaX : h9[0] - v4[0], S13 = "deltaY" in r8 ? r8.deltaY : h9[1] - v4[1], f8, p8 = r8.target, P8 = Math.abs(m9) > Math.abs(S13) ? "h" : "v";
    if ("touches" in r8 && P8 === "h" && p8.type === "range")
      return false;
    var T9 = I6(P8, p8);
    if (!T9)
      return true;
    if (T9 ? f8 = P8 : (f8 = P8 === "v" ? "h" : "v", T9 = I6(P8, p8)), !T9)
      return false;
    if (!o7.current && "changedTouches" in r8 && (m9 || S13) && (o7.current = f8), !f8)
      return true;
    var A6 = o7.current || f8;
    return F5(A6, n3, r8, A6 === "h" ? m9 : S13, true);
  }, []), R5 = G2(function(r8) {
    var n3 = r8;
    if (!(!B3.length || B3[B3.length - 1] !== s6)) {
      var v4 = "deltaY" in n3 ? z5(n3) : X6(n3), h9 = t3.current.filter(function(f8) {
        return f8.name === n3.type && f8.target === n3.target && ie3(f8.delta, v4);
      })[0];
      if (h9 && h9.should) {
        n3.cancelable && n3.preventDefault();
        return;
      }
      if (!h9) {
        var m9 = (d11.current.shards || []).map(_3).filter(Boolean).filter(function(f8) {
          return f8.contains(n3.target);
        }), S13 = m9.length > 0 ? l6(n3, m9[0]) : !d11.current.noIsolation;
        S13 && n3.cancelable && n3.preventDefault();
      }
    }
  }, []), g7 = G2(function(r8, n3, v4, h9) {
    var m9 = { name: r8, delta: n3, target: v4, should: h9 };
    t3.current.push(m9), setTimeout(function() {
      t3.current = t3.current.filter(function(S13) {
        return S13 !== m9;
      });
    }, 1);
  }, []), w10 = G2(function(r8) {
    c7.current = X6(r8), o7.current = void 0;
  }, []), C8 = G2(function(r8) {
    g7(r8.type, z5(r8), r8.target, l6(r8, e5.lockRef.current));
  }, []), b10 = G2(function(r8) {
    g7(r8.type, X6(r8), r8.target, l6(r8, e5.lockRef.current));
  }, []);
  z2(function() {
    return B3.push(s6), e5.setCallbacks({ onScrollCapture: C8, onWheelCapture: C8, onTouchMoveCapture: b10 }), document.addEventListener("wheel", R5, k5), document.addEventListener("touchmove", R5, k5), document.addEventListener("touchstart", w10, k5), function() {
      B3 = B3.filter(function(r8) {
        return r8 !== s6;
      }), document.removeEventListener("wheel", R5, k5), document.removeEventListener("touchmove", R5, k5), document.removeEventListener("touchstart", w10, k5);
    };
  }, []);
  var y7 = e5.removeScrollBar, E9 = e5.inert;
  return re(H, null, E9 ? re(s6, { styles: ue5(u7) }) : null, y7 ? re(w9, { gapMode: e5.gapMode }) : null);
}
var Q7 = A5(N4, j6);
var q7 = ee2(function(e5, t3) {
  return re(M8, m5({}, e5, { ref: t3, sideCar: Q7 }));
});
q7.classNames = M8.classNames;
var ve3 = q7;

// https://esm.sh/v132/@radix-ui/react-menu@2.0.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-menu.mjs
var te5 = ["Enter", " "];
var on = ["ArrowDown", "PageUp", "Home"];
var _e3 = ["ArrowUp", "PageDown", "End"];
var cn = [...on, ..._e3];
var rn = { ltr: [...te5, "ArrowRight"], rtl: [...te5, "ArrowLeft"] };
var an = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] };
var J6 = "Menu";
var [N5, sn, un] = _2(J6);
var [O8, at3] = _(J6, [un, tt, Ee3]);
var j7 = tt();
var he4 = Ee3();
var [be2, S10] = O8(J6);
var [ln, U5] = O8(J6);
var dn = (e5) => {
  let { __scopeMenu: t3, open: n3 = false, children: o7, dir: a5, onOpenChange: c7, modal: u7 = true } = e5, p8 = j7(t3), [f8, m9] = I2(null), l6 = L(false), r8 = l2(c7), d11 = i(a5);
  return z2(() => {
    let $5 = () => {
      l6.current = true, document.addEventListener("pointerdown", M10, { capture: true, once: true }), document.addEventListener("pointermove", M10, { capture: true, once: true });
    }, M10 = () => l6.current = false;
    return document.addEventListener("keydown", $5, { capture: true }), () => {
      document.removeEventListener("keydown", $5, { capture: true }), document.removeEventListener("pointerdown", M10, { capture: true }), document.removeEventListener("pointermove", M10, { capture: true });
    };
  }, []), re(ot2, p8, re(be2, { scope: t3, open: n3, onOpenChange: r8, content: f8, onContentChange: m9 }, re(ln, { scope: t3, onClose: G2(() => r8(false), [r8]), isUsingKeyboardRef: l6, dir: d11, modal: u7 }, o7)));
};
var ye3 = ee2((e5, t3) => {
  let { __scopeMenu: n3, ...o7 } = e5, a5 = j7(n3);
  return re(rt2, p3({}, a5, o7, { ref: t3 }));
});
var xe3 = "MenuPortal";
var [$n, Pe2] = O8(xe3, { forceMount: void 0 });
var pn = (e5) => {
  let { __scopeMenu: t3, forceMount: n3, children: o7, container: a5 } = e5, c7 = S10(xe3, t3);
  return re($n, { scope: t3, forceMount: n3 }, re(U4, { present: n3 || c7.open }, re(m4, { asChild: true, container: a5 }, o7)));
};
var x10 = "MenuContent";
var [fn, re5] = O8(x10);
var mn = ee2((e5, t3) => {
  let n3 = Pe2(x10, e5.__scopeMenu), { forceMount: o7 = n3.forceMount, ...a5 } = e5, c7 = S10(x10, e5.__scopeMenu), u7 = U5(x10, e5.__scopeMenu);
  return re(N5.Provider, { scope: e5.__scopeMenu }, re(U4, { present: o7 || c7.open }, re(N5.Slot, { scope: e5.__scopeMenu }, u7.modal ? re(Mn, p3({}, a5, { ref: t3 })) : re(vn, p3({}, a5, { ref: t3 })))));
});
var Mn = ee2((e5, t3) => {
  let n3 = S10(x10, e5.__scopeMenu), o7 = L(null), a5 = u2(t3, o7);
  return z2(() => {
    let c7 = o7.current;
    if (c7)
      return P5(c7);
  }, []), re(ae6, p3({}, e5, { ref: a5, trapFocus: n3.open, disableOutsidePointerEvents: n3.open, disableOutsideScroll: true, onFocusOutside: o3(e5.onFocusOutside, (c7) => c7.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => n3.onOpenChange(false) }));
});
var vn = ee2((e5, t3) => {
  let n3 = S10(x10, e5.__scopeMenu);
  return re(ae6, p3({}, e5, { ref: t3, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => n3.onOpenChange(false) }));
});
var ae6 = ee2((e5, t3) => {
  let { __scopeMenu: n3, loop: o7 = false, trapFocus: a5, onOpenAutoFocus: c7, onCloseAutoFocus: u7, disableOutsidePointerEvents: p8, onEntryFocus: f8, onEscapeKeyDown: m9, onPointerDownOutside: l6, onFocusOutside: r8, onInteractOutside: d11, onDismiss: $5, disableOutsideScroll: M10, ...b10 } = e5, w10 = S10(x10, n3), A6 = U5(x10, n3), V8 = j7(n3), B4 = he4(n3), ue6 = sn(n3), [De3, le4] = I2(null), Y5 = L(null), Ae = u2(t3, Y5, w10.onContentChange), X9 = L(0), H5 = L(""), ke3 = L(0), Q10 = L(null), de6 = L("right"), ee6 = L(0), Fe2 = M10 ? ve3 : H, Ne4 = M10 ? { as: b4, allowPinchZoom: true } : void 0, Le2 = (i6) => {
    var C8, y7;
    let E9 = H5.current + i6, k6 = ue6().filter((P8) => !P8.disabled), ne6 = document.activeElement, $e = (C8 = k6.find((P8) => P8.ref.current === ne6)) === null || C8 === void 0 ? void 0 : C8.textValue, W8 = k6.map((P8) => P8.textValue), F7 = Nn(W8, E9, $e), pe5 = (y7 = k6.find((P8) => P8.textValue === F7)) === null || y7 === void 0 ? void 0 : y7.ref.current;
    (function P8(fe6) {
      H5.current = fe6, window.clearTimeout(X9.current), fe6 !== "" && (X9.current = window.setTimeout(() => P8(""), 1e3));
    })(E9), pe5 && setTimeout(() => pe5.focus());
  };
  z2(() => () => window.clearTimeout(X9.current), []), c2();
  let T9 = G2((i6) => {
    var C8, y7;
    return de6.current === ((C8 = Q10.current) === null || C8 === void 0 ? void 0 : C8.side) && Gn(i6, (y7 = Q10.current) === null || y7 === void 0 ? void 0 : y7.area);
  }, []);
  return re(fn, { scope: n3, searchRef: H5, onItemEnter: G2((i6) => {
    T9(i6) && i6.preventDefault();
  }, [T9]), onItemLeave: G2((i6) => {
    var C8;
    T9(i6) || ((C8 = Y5.current) === null || C8 === void 0 || C8.focus(), le4(null));
  }, [T9]), onTriggerLeave: G2((i6) => {
    T9(i6) && i6.preventDefault();
  }, [T9]), pointerGraceTimerRef: ke3, onPointerGraceIntentChange: G2((i6) => {
    Q10.current = i6;
  }, []) }, re(Fe2, Ne4, re(Q5, { asChild: true, trapped: a5, onMountAutoFocus: o3(c7, (i6) => {
    var C8;
    i6.preventDefault(), (C8 = Y5.current) === null || C8 === void 0 || C8.focus();
  }), onUnmountAutoFocus: u7 }, re(G3, { asChild: true, disableOutsidePointerEvents: p8, onEscapeKeyDown: m9, onPointerDownOutside: l6, onFocusOutside: r8, onInteractOutside: d11, onDismiss: $5 }, re(Se2, p3({ asChild: true }, B4, { dir: A6.dir, orientation: "vertical", loop: o7, currentTabStopId: De3, onCurrentTabStopIdChange: le4, onEntryFocus: o3(f8, (i6) => {
    A6.isUsingKeyboardRef.current || i6.preventDefault();
  }) }), re(at2, p3({ role: "menu", "aria-orientation": "vertical", "data-state": Te2(w10.open), "data-radix-menu-content": "", dir: A6.dir }, V8, b10, { ref: Ae, style: { outline: "none", ...b10.style }, onKeyDown: o3(b10.onKeyDown, (i6) => {
    let y7 = i6.target.closest("[data-radix-menu-content]") === i6.currentTarget, E9 = i6.ctrlKey || i6.altKey || i6.metaKey, k6 = i6.key.length === 1;
    y7 && (i6.key === "Tab" && i6.preventDefault(), !E9 && k6 && Le2(i6.key));
    let ne6 = Y5.current;
    if (i6.target !== ne6 || !cn.includes(i6.key))
      return;
    i6.preventDefault();
    let W8 = ue6().filter((F7) => !F7.disabled).map((F7) => F7.ref.current);
    _e3.includes(i6.key) && W8.reverse(), kn(W8);
  }), onBlur: o3(e5.onBlur, (i6) => {
    i6.currentTarget.contains(i6.target) || (window.clearTimeout(X9.current), H5.current = "");
  }), onPointerMove: o3(e5.onPointerMove, L9((i6) => {
    let C8 = i6.target, y7 = ee6.current !== i6.clientX;
    if (i6.currentTarget.contains(C8) && y7) {
      let E9 = i6.clientX > ee6.current ? "right" : "left";
      de6.current = E9, ee6.current = i6.clientX;
    }
  })) })))))));
});
var Se3 = ee2((e5, t3) => {
  let { __scopeMenu: n3, ...o7 } = e5;
  return re(u3.div, p3({ role: "group" }, o7, { ref: t3 }));
});
var gn = ee2((e5, t3) => {
  let { __scopeMenu: n3, ...o7 } = e5;
  return re(u3.div, p3({}, o7, { ref: t3 }));
});
var oe4 = "MenuItem";
var Me = "menu.itemSelect";
var se4 = ee2((e5, t3) => {
  let { disabled: n3 = false, onSelect: o7, ...a5 } = e5, c7 = L(null), u7 = U5(oe4, e5.__scopeMenu), p8 = re5(oe4, e5.__scopeMenu), f8 = u2(t3, c7), m9 = L(false), l6 = () => {
    let r8 = c7.current;
    if (!n3 && r8) {
      let d11 = new CustomEvent(Me, { bubbles: true, cancelable: true });
      r8.addEventListener(Me, ($5) => o7?.($5), { once: true }), E3(r8, d11), d11.defaultPrevented ? m9.current = false : u7.onClose();
    }
  };
  return re(Ee4, p3({}, a5, { ref: f8, disabled: n3, onClick: o3(e5.onClick, l6), onPointerDown: (r8) => {
    var d11;
    (d11 = e5.onPointerDown) === null || d11 === void 0 || d11.call(e5, r8), m9.current = true;
  }, onPointerUp: o3(e5.onPointerUp, (r8) => {
    var d11;
    m9.current || (d11 = r8.currentTarget) === null || d11 === void 0 || d11.click();
  }), onKeyDown: o3(e5.onKeyDown, (r8) => {
    let d11 = p8.searchRef.current !== "";
    n3 || d11 && r8.key === " " || te5.includes(r8.key) && (r8.currentTarget.click(), r8.preventDefault());
  }) }));
});
var Ee4 = ee2((e5, t3) => {
  let { __scopeMenu: n3, disabled: o7 = false, textValue: a5, ...c7 } = e5, u7 = re5(oe4, n3), p8 = he4(n3), f8 = L(null), m9 = u2(t3, f8), [l6, r8] = I2(false), [d11, $5] = I2("");
  return z2(() => {
    let M10 = f8.current;
    if (M10) {
      var b10;
      $5(((b10 = M10.textContent) !== null && b10 !== void 0 ? b10 : "").trim());
    }
  }, [c7.children]), re(N5.ItemSlot, { scope: n3, disabled: o7, textValue: a5 ?? d11 }, re(ye2, p3({ asChild: true }, p8, { focusable: !o7 }), re(u3.div, p3({ role: "menuitem", "data-highlighted": l6 ? "" : void 0, "aria-disabled": o7 || void 0, "data-disabled": o7 ? "" : void 0 }, c7, { ref: m9, onPointerMove: o3(e5.onPointerMove, L9((M10) => {
    o7 ? u7.onItemLeave(M10) : (u7.onItemEnter(M10), M10.defaultPrevented || M10.currentTarget.focus());
  })), onPointerLeave: o3(e5.onPointerLeave, L9((M10) => u7.onItemLeave(M10))), onFocus: o3(e5.onFocus, () => r8(true)), onBlur: o3(e5.onBlur, () => r8(false)) }))));
});
var Cn = ee2((e5, t3) => {
  let { checked: n3 = false, onCheckedChange: o7, ...a5 } = e5;
  return re(Re3, { scope: e5.__scopeMenu, checked: n3 }, re(se4, p3({ role: "menuitemcheckbox", "aria-checked": Z4(n3) ? "mixed" : n3 }, a5, { ref: t3, "data-state": ie4(n3), onSelect: o3(a5.onSelect, () => o7?.(Z4(n3) ? true : !n3), { checkForDefaultPrevented: false }) })));
});
var _n = "MenuRadioGroup";
var [hn, bn] = O8(_n, { value: void 0, onValueChange: () => {
} });
var yn = ee2((e5, t3) => {
  let { value: n3, onValueChange: o7, ...a5 } = e5, c7 = l2(o7);
  return re(hn, { scope: e5.__scopeMenu, value: n3, onValueChange: c7 }, re(Se3, p3({}, a5, { ref: t3 })));
});
var xn = "MenuRadioItem";
var Pn = ee2((e5, t3) => {
  let { value: n3, ...o7 } = e5, a5 = bn(xn, e5.__scopeMenu), c7 = n3 === a5.value;
  return re(Re3, { scope: e5.__scopeMenu, checked: c7 }, re(se4, p3({ role: "menuitemradio", "aria-checked": c7 }, o7, { ref: t3, "data-state": ie4(c7), onSelect: o3(o7.onSelect, () => {
    var u7;
    return (u7 = a5.onValueChange) === null || u7 === void 0 ? void 0 : u7.call(a5, n3);
  }, { checkForDefaultPrevented: false }) })));
});
var Ie2 = "MenuItemIndicator";
var [Re3, Sn] = O8(Ie2, { checked: false });
var En = ee2((e5, t3) => {
  let { __scopeMenu: n3, forceMount: o7, ...a5 } = e5, c7 = Sn(Ie2, n3);
  return re(U4, { present: o7 || Z4(c7.checked) || c7.checked === true }, re(u3.span, p3({}, a5, { ref: t3, "data-state": ie4(c7.checked) })));
});
var In = ee2((e5, t3) => {
  let { __scopeMenu: n3, ...o7 } = e5;
  return re(u3.div, p3({ role: "separator", "aria-orientation": "horizontal" }, o7, { ref: t3 }));
});
var Rn = ee2((e5, t3) => {
  let { __scopeMenu: n3, ...o7 } = e5, a5 = j7(n3);
  return re(nt2, p3({}, a5, o7, { ref: t3 }));
});
var Oe2 = "MenuSub";
var [On, we3] = O8(Oe2);
var wn = (e5) => {
  let { __scopeMenu: t3, children: n3, open: o7 = false, onOpenChange: a5 } = e5, c7 = S10(Oe2, t3), u7 = j7(t3), [p8, f8] = I2(null), [m9, l6] = I2(null), r8 = l2(a5);
  return z2(() => (c7.open === false && r8(false), () => r8(false)), [c7.open, r8]), re(ot2, u7, re(be2, { scope: t3, open: o7, onOpenChange: r8, content: m9, onContentChange: l6 }, re(On, { scope: t3, contentId: n2(), triggerId: n2(), trigger: p8, onTriggerChange: f8 }, n3)));
};
var z6 = "MenuSubTrigger";
var Tn = ee2((e5, t3) => {
  let n3 = S10(z6, e5.__scopeMenu), o7 = U5(z6, e5.__scopeMenu), a5 = we3(z6, e5.__scopeMenu), c7 = re5(z6, e5.__scopeMenu), u7 = L(null), { pointerGraceTimerRef: p8, onPointerGraceIntentChange: f8 } = c7, m9 = { __scopeMenu: e5.__scopeMenu }, l6 = G2(() => {
    u7.current && window.clearTimeout(u7.current), u7.current = null;
  }, []);
  return z2(() => l6, [l6]), z2(() => {
    let r8 = p8.current;
    return () => {
      window.clearTimeout(r8), f8(null);
    };
  }, [p8, f8]), re(ye3, p3({ asChild: true }, m9), re(Ee4, p3({ id: a5.triggerId, "aria-haspopup": "menu", "aria-expanded": n3.open, "aria-controls": a5.contentId, "data-state": Te2(n3.open) }, e5, { ref: t(t3, a5.onTriggerChange), onClick: (r8) => {
    var d11;
    (d11 = e5.onClick) === null || d11 === void 0 || d11.call(e5, r8), !(e5.disabled || r8.defaultPrevented) && (r8.currentTarget.focus(), n3.open || n3.onOpenChange(true));
  }, onPointerMove: o3(e5.onPointerMove, L9((r8) => {
    c7.onItemEnter(r8), !r8.defaultPrevented && !e5.disabled && !n3.open && !u7.current && (c7.onPointerGraceIntentChange(null), u7.current = window.setTimeout(() => {
      n3.onOpenChange(true), l6();
    }, 100));
  })), onPointerLeave: o3(e5.onPointerLeave, L9((r8) => {
    var d11;
    l6();
    let $5 = (d11 = n3.content) === null || d11 === void 0 ? void 0 : d11.getBoundingClientRect();
    if ($5) {
      var M10;
      let b10 = (M10 = n3.content) === null || M10 === void 0 ? void 0 : M10.dataset.side, w10 = b10 === "right", A6 = w10 ? -5 : 5, V8 = $5[w10 ? "left" : "right"], B4 = $5[w10 ? "right" : "left"];
      c7.onPointerGraceIntentChange({ area: [{ x: r8.clientX + A6, y: r8.clientY }, { x: V8, y: $5.top }, { x: B4, y: $5.top }, { x: B4, y: $5.bottom }, { x: V8, y: $5.bottom }], side: b10 }), window.clearTimeout(p8.current), p8.current = window.setTimeout(() => c7.onPointerGraceIntentChange(null), 300);
    } else {
      if (c7.onTriggerLeave(r8), r8.defaultPrevented)
        return;
      c7.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: o3(e5.onKeyDown, (r8) => {
    let d11 = c7.searchRef.current !== "";
    if (!(e5.disabled || d11 && r8.key === " ") && rn[o7.dir].includes(r8.key)) {
      var $5;
      n3.onOpenChange(true), ($5 = n3.content) === null || $5 === void 0 || $5.focus(), r8.preventDefault();
    }
  }) })));
});
var Dn = "MenuSubContent";
var An = ee2((e5, t3) => {
  let n3 = Pe2(x10, e5.__scopeMenu), { forceMount: o7 = n3.forceMount, ...a5 } = e5, c7 = S10(x10, e5.__scopeMenu), u7 = U5(x10, e5.__scopeMenu), p8 = we3(Dn, e5.__scopeMenu), f8 = L(null), m9 = u2(t3, f8);
  return re(N5.Provider, { scope: e5.__scopeMenu }, re(U4, { present: o7 || c7.open }, re(N5.Slot, { scope: e5.__scopeMenu }, re(ae6, p3({ id: p8.contentId, "aria-labelledby": p8.triggerId }, a5, { ref: m9, align: "start", side: u7.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (l6) => {
    var r8;
    u7.isUsingKeyboardRef.current && ((r8 = f8.current) === null || r8 === void 0 || r8.focus()), l6.preventDefault();
  }, onCloseAutoFocus: (l6) => l6.preventDefault(), onFocusOutside: o3(e5.onFocusOutside, (l6) => {
    l6.target !== p8.trigger && c7.onOpenChange(false);
  }), onEscapeKeyDown: o3(e5.onEscapeKeyDown, (l6) => {
    u7.onClose(), l6.preventDefault();
  }), onKeyDown: o3(e5.onKeyDown, (l6) => {
    let r8 = l6.currentTarget.contains(l6.target), d11 = an[u7.dir].includes(l6.key);
    if (r8 && d11) {
      var $5;
      c7.onOpenChange(false), ($5 = p8.trigger) === null || $5 === void 0 || $5.focus(), l6.preventDefault();
    }
  }) })))));
});
function Te2(e5) {
  return e5 ? "open" : "closed";
}
function Z4(e5) {
  return e5 === "indeterminate";
}
function ie4(e5) {
  return Z4(e5) ? "indeterminate" : e5 ? "checked" : "unchecked";
}
function kn(e5) {
  let t3 = document.activeElement;
  for (let n3 of e5)
    if (n3 === t3 || (n3.focus(), document.activeElement !== t3))
      return;
}
function Fn(e5, t3) {
  return e5.map((n3, o7) => e5[(t3 + o7) % e5.length]);
}
function Nn(e5, t3, n3) {
  let a5 = t3.length > 1 && Array.from(t3).every((m9) => m9 === t3[0]) ? t3[0] : t3, c7 = n3 ? e5.indexOf(n3) : -1, u7 = Fn(e5, Math.max(c7, 0));
  a5.length === 1 && (u7 = u7.filter((m9) => m9 !== n3));
  let f8 = u7.find((m9) => m9.toLowerCase().startsWith(a5.toLowerCase()));
  return f8 !== n3 ? f8 : void 0;
}
function Ln(e5, t3) {
  let { x: n3, y: o7 } = e5, a5 = false;
  for (let c7 = 0, u7 = t3.length - 1; c7 < t3.length; u7 = c7++) {
    let p8 = t3[c7].x, f8 = t3[c7].y, m9 = t3[u7].x, l6 = t3[u7].y;
    f8 > o7 != l6 > o7 && n3 < (m9 - p8) * (o7 - f8) / (l6 - f8) + p8 && (a5 = !a5);
  }
  return a5;
}
function Gn(e5, t3) {
  if (!t3)
    return false;
  let n3 = { x: e5.clientX, y: e5.clientY };
  return Ln(n3, t3);
}
function L9(e5) {
  return (t3) => t3.pointerType === "mouse" ? e5(t3) : void 0;
}
var st2 = dn;
var it2 = ye3;
var ut2 = pn;
var lt2 = mn;
var dt2 = Se3;
var $t = gn;
var pt2 = se4;
var ft2 = Cn;
var mt = yn;
var Mt = Pn;
var vt2 = En;
var gt2 = In;
var Ct = Rn;
var _t = wn;
var ht2 = Tn;
var bt = An;

// https://esm.sh/v132/@radix-ui/react-dropdown-menu@2.0.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dropdown-menu.mjs
var D5 = "DropdownMenu";
var [F6, Me2] = _(D5, [at3]);
var c6 = at3();
var [W7, S11] = F6(D5);
var X7 = (e5) => {
  let { __scopeDropdownMenu: r8, children: n3, dir: o7, open: t3, defaultOpen: p8, onOpenChange: i6, modal: s6 = true } = e5, u7 = c6(r8), l6 = L(null), [f8 = false, b10] = w3({ prop: t3, defaultProp: p8, onChange: i6 });
  return re(W7, { scope: r8, triggerId: n2(), triggerRef: l6, contentId: n2(), open: f8, onOpenChange: b10, onOpenToggle: G2(() => b10((x12) => !x12), [b10]), modal: s6 }, re(st2, p3({}, u7, { open: f8, onOpenChange: b10, dir: o7, modal: s6 }), n3));
};
var q8 = "DropdownMenuTrigger";
var z7 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, disabled: o7 = false, ...t3 } = e5, p8 = S11(q8, n3), i6 = c6(n3);
  return re(it2, p3({ asChild: true }, i6), re(u3.button, p3({ type: "button", id: p8.triggerId, "aria-haspopup": "menu", "aria-expanded": p8.open, "aria-controls": p8.open ? p8.contentId : void 0, "data-state": p8.open ? "open" : "closed", "data-disabled": o7 ? "" : void 0, disabled: o7 }, t3, { ref: t(r8, p8.triggerRef), onPointerDown: o3(e5.onPointerDown, (s6) => {
    !o7 && s6.button === 0 && s6.ctrlKey === false && (p8.onOpenToggle(), p8.open || s6.preventDefault());
  }), onKeyDown: o3(e5.onKeyDown, (s6) => {
    o7 || (["Enter", " "].includes(s6.key) && p8.onOpenToggle(), s6.key === "ArrowDown" && p8.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(s6.key) && s6.preventDefault());
  }) })));
});
var J7 = (e5) => {
  let { __scopeDropdownMenu: r8, ...n3 } = e5, o7 = c6(r8);
  return re(ut2, p3({}, o7, n3));
};
var Q8 = "DropdownMenuContent";
var V6 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = S11(Q8, n3), p8 = c6(n3), i6 = L(false);
  return re(lt2, p3({ id: t3.contentId, "aria-labelledby": t3.triggerId }, p8, o7, { ref: r8, onCloseAutoFocus: o3(e5.onCloseAutoFocus, (s6) => {
    var u7;
    i6.current || (u7 = t3.triggerRef.current) === null || u7 === void 0 || u7.focus(), i6.current = false, s6.preventDefault();
  }), onInteractOutside: o3(e5.onInteractOutside, (s6) => {
    let u7 = s6.detail.originalEvent, l6 = u7.button === 0 && u7.ctrlKey === true, f8 = u7.button === 2 || l6;
    (!t3.modal || f8) && (i6.current = true);
  }), style: { ...e5.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } }));
});
var Y3 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(dt2, p3({}, t3, o7, { ref: r8 }));
});
var Z5 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re($t, p3({}, t3, o7, { ref: r8 }));
});
var ee5 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(pt2, p3({}, t3, o7, { ref: r8 }));
});
var oe5 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(ft2, p3({}, t3, o7, { ref: r8 }));
});
var ne5 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(mt, p3({}, t3, o7, { ref: r8 }));
});
var re6 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(Mt, p3({}, t3, o7, { ref: r8 }));
});
var te6 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(vt2, p3({}, t3, o7, { ref: r8 }));
});
var ae7 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(gt2, p3({}, t3, o7, { ref: r8 }));
});
var se5 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(Ct, p3({}, t3, o7, { ref: r8 }));
});
var de5 = (e5) => {
  let { __scopeDropdownMenu: r8, children: n3, open: o7, onOpenChange: t3, defaultOpen: p8 } = e5, i6 = c6(r8), [s6 = false, u7] = w3({ prop: o7, defaultProp: p8, onChange: t3 });
  return re(_t, p3({}, i6, { open: s6, onOpenChange: u7 }), n3);
};
var pe4 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(ht2, p3({}, t3, o7, { ref: r8 }));
});
var ce4 = ee2((e5, r8) => {
  let { __scopeDropdownMenu: n3, ...o7 } = e5, t3 = c6(n3);
  return re(bt, p3({}, t3, o7, { ref: r8, style: { ...e5.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } }));
});
var _e4 = X7;
var De2 = z7;
var Se4 = J7;
var xe4 = V6;
var he5 = Y3;
var Ie3 = Z5;
var Oe3 = ee5;
var ve4 = oe5;
var Ce2 = ne5;
var ke2 = re6;
var Re4 = te6;
var Ne3 = ae7;
var Ee5 = de5;
var Pe3 = pe4;
var Ue2 = ce4;

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d9 = 0;
var x11 = Array.isArray;
function g6(t3, r8, e5, a5, o7, i6) {
  var s6, n3, f8 = {};
  for (n3 in r8)
    n3 == "ref" ? s6 = r8[n3] : f8[n3] = r8[n3];
  var u7 = { type: t3, props: f8, key: e5, ref: s6, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d9, __i: -1, __u: 0, __source: o7, __self: i6 };
  if (typeof t3 == "function" && (s6 = t3.defaultProps))
    for (n3 in s6)
      f8[n3] === void 0 && (f8[n3] = s6[n3]);
  return a.vnode && a.vnode(u7), u7;
}

// https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-left.tsx
function IconChevronLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return /* @__PURE__ */ g6(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      class: "icon icon-tabler icon-tabler-chevron-left",
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
        /* @__PURE__ */ g6("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ g6("path", { d: "M15 6l-6 6l6 6" })
      ]
    }
  );
}
var chevron_left_default = IconChevronLeft;

// https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/check.tsx
function IconCheck({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return /* @__PURE__ */ g6(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      class: "icon icon-tabler icon-tabler-check",
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
        /* @__PURE__ */ g6("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ g6("path", { d: "M5 12l5 5l10 -10" })
      ]
    }
  );
}
var check_default = IconCheck;

// https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-filled.tsx
function IconCircleFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return /* @__PURE__ */ g6(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      class: "icon icon-tabler icon-tabler-circle-filled",
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
        /* @__PURE__ */ g6("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ g6(
          "path",
          {
            d: "M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z",
            "stroke-width": 0,
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
var circle_filled_default = IconCircleFilled;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o6(r8) {
  var f8, n3, t3 = "";
  if (typeof r8 == "string" || typeof r8 == "number")
    t3 += r8;
  else if (typeof r8 == "object")
    if (Array.isArray(r8))
      for (f8 = 0; f8 < r8.length; f8++)
        r8[f8] && (n3 = o6(r8[f8])) && (t3 && (t3 += " "), t3 += n3);
    else
      for (f8 in r8)
        r8[f8] && (t3 && (t3 += " "), t3 += f8);
  return t3;
}
function e4() {
  for (var r8, f8, n3 = 0, t3 = ""; n3 < arguments.length; )
    (r8 = arguments[n3++]) && (f8 = o6(r8)) && (t3 && (t3 += " "), t3 += f8);
  return t3;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r8, e5) => {
  for (var t3 in e5)
    Ar(r8, t3, { get: e5[t3], enumerable: true });
};
function U6() {
  for (var r8 = 0, e5, t3, o7 = ""; r8 < arguments.length; )
    (e5 = arguments[r8++]) && (t3 = lr(e5)) && (o7 && (o7 += " "), o7 += t3);
  return o7;
}
function lr(r8) {
  if (typeof r8 == "string")
    return r8;
  for (var e5, t3 = "", o7 = 0; o7 < r8.length; o7++)
    r8[o7] && (e5 = lr(r8[o7])) && (t3 && (t3 += " "), t3 += e5);
  return t3;
}
var Z6 = "-";
function ur(r8) {
  var e5 = Sr(r8), t3 = r8.conflictingClassGroups, o7 = r8.conflictingClassGroupModifiers, a5 = o7 === void 0 ? {} : o7;
  function s6(i6) {
    var c7 = i6.split(Z6);
    return c7[0] === "" && c7.length !== 1 && c7.shift(), pr(c7, e5) || kr(i6);
  }
  function n3(i6, c7) {
    var u7 = t3[i6] || [];
    return c7 && a5[i6] ? [].concat(u7, a5[i6]) : u7;
  }
  return { getClassGroupId: s6, getConflictingClassGroupIds: n3 };
}
function pr(r8, e5) {
  if (r8.length === 0)
    return e5.classGroupId;
  var t3 = r8[0], o7 = e5.nextPart.get(t3), a5 = o7 ? pr(r8.slice(1), o7) : void 0;
  if (a5)
    return a5;
  if (e5.validators.length !== 0) {
    var s6 = r8.join(Z6);
    return e5.validators.find(function(n3) {
      var i6 = n3.validator;
      return i6(s6);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r8) {
  if (dr.test(r8)) {
    var e5 = dr.exec(r8)[1], t3 = e5?.substring(0, e5.indexOf(":"));
    if (t3)
      return "arbitrary.." + t3;
  }
}
function Sr(r8) {
  var e5 = r8.theme, t3 = r8.prefix, o7 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a5 = Gr(Object.entries(r8.classGroups), t3);
  return a5.forEach(function(s6) {
    var n3 = s6[0], i6 = s6[1];
    q9(i6, o7, n3, e5);
  }), o7;
}
function q9(r8, e5, t3, o7) {
  r8.forEach(function(a5) {
    if (typeof a5 == "string") {
      var s6 = a5 === "" ? e5 : cr(e5, a5);
      s6.classGroupId = t3;
      return;
    }
    if (typeof a5 == "function") {
      if (zr(a5)) {
        q9(a5(o7), e5, t3, o7);
        return;
      }
      e5.validators.push({ validator: a5, classGroupId: t3 });
      return;
    }
    Object.entries(a5).forEach(function(n3) {
      var i6 = n3[0], c7 = n3[1];
      q9(c7, cr(e5, i6), t3, o7);
    });
  });
}
function cr(r8, e5) {
  var t3 = r8;
  return e5.split(Z6).forEach(function(o7) {
    t3.nextPart.has(o7) || t3.nextPart.set(o7, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t3 = t3.nextPart.get(o7);
  }), t3;
}
function zr(r8) {
  return r8.isThemeGetter;
}
function Gr(r8, e5) {
  return e5 ? r8.map(function(t3) {
    var o7 = t3[0], a5 = t3[1], s6 = a5.map(function(n3) {
      return typeof n3 == "string" ? e5 + n3 : typeof n3 == "object" ? Object.fromEntries(Object.entries(n3).map(function(i6) {
        var c7 = i6[0], u7 = i6[1];
        return [e5 + c7, u7];
      })) : n3;
    });
    return [o7, s6];
  }) : r8;
}
function fr(r8) {
  if (r8 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e5 = 0, t3 = /* @__PURE__ */ new Map(), o7 = /* @__PURE__ */ new Map();
  function a5(s6, n3) {
    t3.set(s6, n3), e5++, e5 > r8 && (e5 = 0, o7 = t3, t3 = /* @__PURE__ */ new Map());
  }
  return { get: function(n3) {
    var i6 = t3.get(n3);
    if (i6 !== void 0)
      return i6;
    if ((i6 = o7.get(n3)) !== void 0)
      return a5(n3, i6), i6;
  }, set: function(n3, i6) {
    t3.has(n3) ? t3.set(n3, i6) : a5(n3, i6);
  } };
}
var X8 = "!";
function br(r8) {
  var e5 = r8.separator || ":", t3 = e5.length === 1, o7 = e5[0], a5 = e5.length;
  return function(n3) {
    for (var i6 = [], c7 = 0, u7 = 0, b10, f8 = 0; f8 < n3.length; f8++) {
      var g7 = n3[f8];
      if (c7 === 0) {
        if (g7 === o7 && (t3 || n3.slice(f8, f8 + a5) === e5)) {
          i6.push(n3.slice(u7, f8)), u7 = f8 + a5;
          continue;
        }
        if (g7 === "/") {
          b10 = f8;
          continue;
        }
      }
      g7 === "[" ? c7++ : g7 === "]" && c7--;
    }
    var y7 = i6.length === 0 ? n3 : n3.substring(u7), x12 = y7.startsWith(X8), m9 = x12 ? y7.substring(1) : y7, w10 = b10 && b10 > u7 ? b10 - u7 : void 0;
    return { modifiers: i6, hasImportantModifier: x12, baseClassName: m9, maybePostfixModifierPosition: w10 };
  };
}
function gr(r8) {
  if (r8.length <= 1)
    return r8;
  var e5 = [], t3 = [];
  return r8.forEach(function(o7) {
    var a5 = o7[0] === "[";
    a5 ? (e5.push.apply(e5, t3.sort().concat([o7])), t3 = []) : t3.push(o7);
  }), e5.push.apply(e5, t3.sort()), e5;
}
function mr(r8) {
  return { cache: fr(r8.cacheSize), splitModifiers: br(r8), ...ur(r8) };
}
var Ir = /\s+/;
function vr(r8, e5) {
  var t3 = e5.splitModifiers, o7 = e5.getClassGroupId, a5 = e5.getConflictingClassGroupIds, s6 = /* @__PURE__ */ new Set();
  return r8.trim().split(Ir).map(function(n3) {
    var i6 = t3(n3), c7 = i6.modifiers, u7 = i6.hasImportantModifier, b10 = i6.baseClassName, f8 = i6.maybePostfixModifierPosition, g7 = o7(f8 ? b10.substring(0, f8) : b10), y7 = !!f8;
    if (!g7) {
      if (!f8)
        return { isTailwindClass: false, originalClassName: n3 };
      if (g7 = o7(b10), !g7)
        return { isTailwindClass: false, originalClassName: n3 };
      y7 = false;
    }
    var x12 = gr(c7).join(":"), m9 = u7 ? x12 + X8 : x12;
    return { isTailwindClass: true, modifierId: m9, classGroupId: g7, originalClassName: n3, hasPostfixModifier: y7 };
  }).reverse().filter(function(n3) {
    if (!n3.isTailwindClass)
      return true;
    var i6 = n3.modifierId, c7 = n3.classGroupId, u7 = n3.hasPostfixModifier, b10 = i6 + c7;
    return s6.has(b10) ? false : (s6.add(b10), a5(c7, u7).forEach(function(f8) {
      return s6.add(i6 + f8);
    }), true);
  }).reverse().map(function(n3) {
    return n3.originalClassName;
  }).join(" ");
}
function P7() {
  for (var r8 = arguments.length, e5 = new Array(r8), t3 = 0; t3 < r8; t3++)
    e5[t3] = arguments[t3];
  var o7, a5, s6, n3 = i6;
  function i6(u7) {
    var b10 = e5[0], f8 = e5.slice(1), g7 = f8.reduce(function(y7, x12) {
      return x12(y7);
    }, b10());
    return o7 = mr(g7), a5 = o7.cache.get, s6 = o7.cache.set, n3 = c7, c7(u7);
  }
  function c7(u7) {
    var b10 = a5(u7);
    if (b10)
      return b10;
    var f8 = vr(u7, o7);
    return s6(u7, f8), f8;
  }
  return function() {
    return n3(U6.apply(null, arguments));
  };
}
function d10(r8) {
  var e5 = function(o7) {
    return o7[r8] || [];
  };
  return e5.isThemeGetter = true, e5;
}
var wr = {};
Mr(wr, { isAny: () => G6, isArbitraryLength: () => L10, isArbitraryNumber: () => S12, isArbitraryPosition: () => Q9, isArbitraryShadow: () => D6, isArbitrarySize: () => H4, isArbitraryUrl: () => V7, isArbitraryValue: () => l5, isArbitraryWeight: () => Wr, isInteger: () => z8, isLength: () => h8, isNumber: () => M9, isPercent: () => Y4, isTshirtSize: () => C7 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h8(r8) {
  return M9(r8) || Tr.has(r8) || Pr.test(r8) || L10(r8);
}
function L10(r8) {
  return I7(r8, "length", Er);
}
function H4(r8) {
  return I7(r8, "size", xr);
}
function Q9(r8) {
  return I7(r8, "position", xr);
}
function V7(r8) {
  return I7(r8, "url", jr);
}
function S12(r8) {
  return I7(r8, "number", M9);
}
var Wr = S12;
function M9(r8) {
  return !Number.isNaN(Number(r8));
}
function Y4(r8) {
  return r8.endsWith("%") && M9(r8.slice(0, -1));
}
function z8(r8) {
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
function D6(r8) {
  return I7(r8, "", Ur);
}
function I7(r8, e5, t3) {
  var o7 = yr.exec(r8);
  return o7 ? o7[1] ? o7[1] === e5 : t3(o7[2]) : false;
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
function T8() {
  var r8 = d10("colors"), e5 = d10("spacing"), t3 = d10("blur"), o7 = d10("brightness"), a5 = d10("borderColor"), s6 = d10("borderRadius"), n3 = d10("borderSpacing"), i6 = d10("borderWidth"), c7 = d10("contrast"), u7 = d10("grayscale"), b10 = d10("hueRotate"), f8 = d10("invert"), g7 = d10("gap"), y7 = d10("gradientColorStops"), x12 = d10("gradientColorStopPositions"), m9 = d10("inset"), w10 = d10("margin"), k6 = d10("opacity"), A6 = d10("padding"), K3 = d10("saturate"), O9 = d10("scale"), rr = d10("sepia"), er = d10("skew"), tr = d10("space"), or = d10("translate"), $5 = function() {
    return ["auto", "contain", "none"];
  }, B4 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F7 = function() {
    return ["auto", l5, e5];
  }, p8 = function() {
    return [l5, e5];
  }, nr = function() {
    return ["", h8];
  }, W8 = function() {
    return ["auto", M9, l5];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E9 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J8 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R5 = function() {
    return ["", "0", l5];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N6 = function() {
    return [M9, S12];
  }, j8 = function() {
    return [M9, l5];
  };
  return { cacheSize: 500, theme: { colors: [G6], spacing: [h8], blur: ["none", "", C7, l5], brightness: N6(), borderColor: [r8], borderRadius: ["none", "", "full", C7, l5], borderSpacing: p8(), borderWidth: nr(), contrast: N6(), grayscale: R5(), hueRotate: j8(), invert: R5(), gap: p8(), gradientColorStops: [r8], gradientColorStopPositions: [Y4, L10], inset: F7(), margin: F7(), opacity: N6(), padding: p8(), saturate: N6(), scale: N6(), sepia: R5(), skew: j8(), space: p8(), translate: p8() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l5] }], container: ["container"], columns: [{ columns: [C7] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l5]) }], overflow: [{ overflow: B4() }], "overflow-x": [{ "overflow-x": B4() }], "overflow-y": [{ "overflow-y": B4() }], overscroll: [{ overscroll: $5() }], "overscroll-x": [{ "overscroll-x": $5() }], "overscroll-y": [{ "overscroll-y": $5() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m9] }], "inset-x": [{ "inset-x": [m9] }], "inset-y": [{ "inset-y": [m9] }], start: [{ start: [m9] }], end: [{ end: [m9] }], top: [{ top: [m9] }], right: [{ right: [m9] }], bottom: [{ bottom: [m9] }], left: [{ left: [m9] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z8] }], basis: [{ basis: F7() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l5] }], grow: [{ grow: R5() }], shrink: [{ shrink: R5() }], order: [{ order: ["first", "last", "none", z8] }], "grid-cols": [{ "grid-cols": [G6] }], "col-start-end": [{ col: ["auto", { span: ["full", z8] }, l5] }], "col-start": [{ "col-start": W8() }], "col-end": [{ "col-end": W8() }], "grid-rows": [{ "grid-rows": [G6] }], "row-start-end": [{ row: ["auto", { span: [z8] }, l5] }], "row-start": [{ "row-start": W8() }], "row-end": [{ "row-end": W8() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l5] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l5] }], gap: [{ gap: [g7] }], "gap-x": [{ "gap-x": [g7] }], "gap-y": [{ "gap-y": [g7] }], "justify-content": [{ justify: ["normal"].concat(J8()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J8(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J8(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A6] }], px: [{ px: [A6] }], py: [{ py: [A6] }], ps: [{ ps: [A6] }], pe: [{ pe: [A6] }], pt: [{ pt: [A6] }], pr: [{ pr: [A6] }], pb: [{ pb: [A6] }], pl: [{ pl: [A6] }], m: [{ m: [w10] }], mx: [{ mx: [w10] }], my: [{ my: [w10] }], ms: [{ ms: [w10] }], me: [{ me: [w10] }], mt: [{ mt: [w10] }], mr: [{ mr: [w10] }], mb: [{ mb: [w10] }], ml: [{ ml: [w10] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l5, e5] }], "min-w": [{ "min-w": ["min", "max", "fit", l5, h8] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C7] }, C7, l5] }], h: [{ h: [l5, e5, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l5, h8] }], "max-h": [{ "max-h": [l5, e5, "min", "max", "fit"] }], "font-size": [{ text: ["base", C7, L10] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S12] }], "font-family": [{ font: [G6] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l5] }], "line-clamp": [{ "line-clamp": ["none", M9, S12] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l5, h8] }], "list-image": [{ "list-image": ["none", l5] }], "list-style-type": [{ list: ["none", "disc", "decimal", l5] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r8] }], "placeholder-opacity": [{ "placeholder-opacity": [k6] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r8] }], "text-opacity": [{ "text-opacity": [k6] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E9(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h8] }], "underline-offset": [{ "underline-offset": ["auto", l5, h8] }], "text-decoration-color": [{ decoration: [r8] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p8() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l5] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l5] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k6] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q9]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H4] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V7] }], "bg-color": [{ bg: [r8] }], "gradient-from-pos": [{ from: [x12] }], "gradient-via-pos": [{ via: [x12] }], "gradient-to-pos": [{ to: [x12] }], "gradient-from": [{ from: [y7] }], "gradient-via": [{ via: [y7] }], "gradient-to": [{ to: [y7] }], rounded: [{ rounded: [s6] }], "rounded-s": [{ "rounded-s": [s6] }], "rounded-e": [{ "rounded-e": [s6] }], "rounded-t": [{ "rounded-t": [s6] }], "rounded-r": [{ "rounded-r": [s6] }], "rounded-b": [{ "rounded-b": [s6] }], "rounded-l": [{ "rounded-l": [s6] }], "rounded-ss": [{ "rounded-ss": [s6] }], "rounded-se": [{ "rounded-se": [s6] }], "rounded-ee": [{ "rounded-ee": [s6] }], "rounded-es": [{ "rounded-es": [s6] }], "rounded-tl": [{ "rounded-tl": [s6] }], "rounded-tr": [{ "rounded-tr": [s6] }], "rounded-br": [{ "rounded-br": [s6] }], "rounded-bl": [{ "rounded-bl": [s6] }], "border-w": [{ border: [i6] }], "border-w-x": [{ "border-x": [i6] }], "border-w-y": [{ "border-y": [i6] }], "border-w-s": [{ "border-s": [i6] }], "border-w-e": [{ "border-e": [i6] }], "border-w-t": [{ "border-t": [i6] }], "border-w-r": [{ "border-r": [i6] }], "border-w-b": [{ "border-b": [i6] }], "border-w-l": [{ "border-l": [i6] }], "border-opacity": [{ "border-opacity": [k6] }], "border-style": [{ border: [].concat(E9(), ["hidden"]) }], "divide-x": [{ "divide-x": [i6] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i6] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k6] }], "divide-style": [{ divide: E9() }], "border-color": [{ border: [a5] }], "border-color-x": [{ "border-x": [a5] }], "border-color-y": [{ "border-y": [a5] }], "border-color-t": [{ "border-t": [a5] }], "border-color-r": [{ "border-r": [a5] }], "border-color-b": [{ "border-b": [a5] }], "border-color-l": [{ "border-l": [a5] }], "divide-color": [{ divide: [a5] }], "outline-style": [{ outline: [""].concat(E9()) }], "outline-offset": [{ "outline-offset": [l5, h8] }], "outline-w": [{ outline: [h8] }], "outline-color": [{ outline: [r8] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r8] }], "ring-opacity": [{ "ring-opacity": [k6] }], "ring-offset-w": [{ "ring-offset": [h8] }], "ring-offset-color": [{ "ring-offset": [r8] }], shadow: [{ shadow: ["", "inner", "none", C7, D6] }], "shadow-color": [{ shadow: [G6] }], opacity: [{ opacity: [k6] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t3] }], brightness: [{ brightness: [o7] }], contrast: [{ contrast: [c7] }], "drop-shadow": [{ "drop-shadow": ["", "none", C7, l5] }], grayscale: [{ grayscale: [u7] }], "hue-rotate": [{ "hue-rotate": [b10] }], invert: [{ invert: [f8] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t3] }], "backdrop-brightness": [{ "backdrop-brightness": [o7] }], "backdrop-contrast": [{ "backdrop-contrast": [c7] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u7] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b10] }], "backdrop-invert": [{ "backdrop-invert": [f8] }], "backdrop-opacity": [{ "backdrop-opacity": [k6] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n3] }], "border-spacing-x": [{ "border-spacing-x": [n3] }], "border-spacing-y": [{ "border-spacing-y": [n3] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l5] }], duration: [{ duration: j8() }], ease: [{ ease: ["linear", "in", "out", "in-out", l5] }], delay: [{ delay: j8() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l5] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O9] }], "scale-x": [{ "scale-x": [O9] }], "scale-y": [{ "scale-y": [O9] }], rotate: [{ rotate: [z8, l5] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l5] }], accent: [{ accent: ["auto", r8] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l5] }], "caret-color": [{ caret: [r8] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p8() }], "scroll-mx": [{ "scroll-mx": p8() }], "scroll-my": [{ "scroll-my": p8() }], "scroll-ms": [{ "scroll-ms": p8() }], "scroll-me": [{ "scroll-me": p8() }], "scroll-mt": [{ "scroll-mt": p8() }], "scroll-mr": [{ "scroll-mr": p8() }], "scroll-mb": [{ "scroll-mb": p8() }], "scroll-ml": [{ "scroll-ml": p8() }], "scroll-p": [{ "scroll-p": p8() }], "scroll-px": [{ "scroll-px": p8() }], "scroll-py": [{ "scroll-py": p8() }], "scroll-ps": [{ "scroll-ps": p8() }], "scroll-pe": [{ "scroll-pe": p8() }], "scroll-pt": [{ "scroll-pt": p8() }], "scroll-pr": [{ "scroll-pr": p8() }], "scroll-pb": [{ "scroll-pb": p8() }], "scroll-pl": [{ "scroll-pl": p8() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l5] }], fill: [{ fill: [r8, "none"] }], "stroke-w": [{ stroke: [h8, S12] }], stroke: [{ stroke: [r8, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P7(T8);

// ../lib/utils.ts
function cn2(...inputs) {
  return Fr(e4(inputs));
}

// ../components/ui/dropdown-menu.tsx
var DropdownMenu = _e4;
var DropdownMenuTrigger = De2;
var DropdownMenuGroup = he5;
var DropdownMenuPortal = Se4;
var DropdownMenuSub = Ee5;
var DropdownMenuRadioGroup = Ce2;
var DropdownMenuSubTrigger = ee2(({ class: className, inset, children, ...props }, ref) => /* @__PURE__ */ g6(
  Pe3,
  {
    ref,
    className: cn2(
      "flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ g6(chevron_left_default, { class: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = Pe3.displayName;
var DropdownMenuSubContent = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g6(
  Ue2,
  {
    ref,
    className: cn2(
      "animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = Ue2.displayName;
var DropdownMenuContent = ee2(({ class: className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ g6(Se4, { children: /* @__PURE__ */ g6(
  xe4,
  {
    ref,
    sideOffset,
    className: cn2(
      "animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = xe4.displayName;
var DropdownMenuItem = ee2(({ class: className, inset, ...props }, ref) => /* @__PURE__ */ g6(
  Oe3,
  {
    ref,
    className: cn2(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Oe3.displayName;
var DropdownMenuCheckboxItem = ee2(({ class: className, children, checked, ...props }, ref) => /* @__PURE__ */ g6(
  ve4,
  {
    ref,
    className: cn2(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ g6("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ g6(Re4, { children: /* @__PURE__ */ g6(check_default, { class: "flex h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = ve4.displayName;
var DropdownMenuRadioItem = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g6(
  ke2,
  {
    ref,
    className: cn2(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ g6("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ g6(Re4, { children: /* @__PURE__ */ g6(circle_filled_default, { class: "flex h-2 w-2" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = ke2.displayName;
var DropdownMenuLabel = ee2(({ class: className, inset, ...props }, ref) => /* @__PURE__ */ g6(
  Ie3,
  {
    ref,
    className: cn2("px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Ie3.displayName;
var DropdownMenuSeparator = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g6(
  Ne3,
  {
    ref,
    className: cn2("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Ne3.displayName;
var DropdownMenuShortcut = ({ class: className, ...props }) => {
  return /* @__PURE__ */ g6("span", { className: cn2("ml-auto text-xs tracking-widest text-slate-500", className), ...props });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
};
