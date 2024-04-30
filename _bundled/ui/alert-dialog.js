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
  var i4, n3, r7, l4 = {};
  for (r7 in _4)
    r7 == "key" ? i4 = _4[r7] : r7 == "ref" ? n3 = _4[r7] : l4[r7] = _4[r7];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t3), typeof e5 == "function" && e5.defaultProps != null)
    for (r7 in e5.defaultProps)
      l4[r7] === void 0 && (l4[r7] = e5.defaultProps[r7]);
  return S(e5, l4, i4, n3, null);
}
function S(e5, _4, t3, i4, n3) {
  var r7 = { type: e5, props: _4, key: t3, ref: i4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r7), r7;
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
  var i4, n3 = e5.__v, r7 = n3.__e, l4 = e5.__P;
  if (l4)
    return (i4 = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i4), G(l4, i4, n3, e5.__n, l4.ownerSVGElement !== void 0, 32 & n3.__u ? [r7] : null, _4, r7 ?? w(n3), !!(32 & n3.__u), t3), i4.__v = n3.__v, i4.__.__k[i4.__i] = i4, i4.__d = void 0, i4.__e != r7 && ee(i4), i4;
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
  var e5, _4, t3, i4 = [], n3 = [];
  for (x.sort($); e5 = x.shift(); )
    e5.__d && (t3 = x.length, _4 = ie(e5, i4, n3) || _4, t3 === 0 || x.length > t3 ? (R(i4, _4, n3), n3.length = i4.length = 0, _4 = void 0, x.sort($)) : _4 && a.__c && a.__c(_4, O));
  _4 && R(i4, _4, n3), A.__r = 0;
}
function _e(e5, _4, t3, i4, n3, r7, l4, u5, c7, s4, p6) {
  var o7, m8, f6, h8, k5, v3 = i4 && i4.__k || O, d10 = _4.length;
  for (t3.__d = c7, le(t3, _4, v3), c7 = t3.__d, o7 = 0; o7 < d10; o7++)
    (f6 = t3.__k[o7]) != null && typeof f6 != "boolean" && typeof f6 != "function" && (m8 = f6.__i === -1 ? E : v3[f6.__i] || E, f6.__i = o7, G(e5, f6, m8, n3, r7, l4, u5, c7, s4, p6), h8 = f6.__e, f6.ref && m8.ref != f6.ref && (m8.ref && V(m8.ref, null, f6), p6.push(f6.ref, f6.__c || h8, f6)), k5 == null && h8 != null && (k5 = h8), 65536 & f6.__u || m8.__k === f6.__k ? c7 = te(f6, c7, e5) : typeof f6.type == "function" && f6.__d !== void 0 ? c7 = f6.__d : h8 && (c7 = h8.nextSibling), f6.__d = void 0, f6.__u &= -196609);
  t3.__d = c7, t3.__e = k5;
}
function le(e5, _4, t3) {
  var i4, n3, r7, l4, u5, c7 = _4.length, s4 = t3.length, p6 = s4, o7 = 0;
  for (e5.__k = [], i4 = 0; i4 < c7; i4++)
    l4 = i4 + o7, (n3 = e5.__k[i4] = (n3 = _4[i4]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e5, n3.__b = e5.__b + 1, u5 = ue(n3, t3, l4, p6), n3.__i = u5, r7 = null, u5 !== -1 && (p6--, (r7 = t3[u5]) && (r7.__u |= 131072)), r7 == null || r7.__v === null ? (u5 == -1 && o7--, typeof n3.type != "function" && (n3.__u |= 65536)) : u5 !== l4 && (u5 === l4 + 1 ? o7++ : u5 > l4 ? p6 > c7 - l4 ? o7 += u5 - l4 : o7-- : u5 < l4 ? u5 == l4 - 1 && (o7 = u5 - l4) : o7 = 0, u5 !== i4 + o7 && (n3.__u |= 65536))) : (r7 = t3[l4]) && r7.key == null && r7.__e && !(131072 & r7.__u) && (r7.__e == e5.__d && (e5.__d = w(r7)), B(r7, r7, false), t3[l4] = null, p6--);
  if (p6)
    for (i4 = 0; i4 < s4; i4++)
      (r7 = t3[i4]) != null && !(131072 & r7.__u) && (r7.__e == e5.__d && (e5.__d = w(r7)), B(r7, r7));
}
function te(e5, _4, t3) {
  var i4, n3;
  if (typeof e5.type == "function") {
    for (i4 = e5.__k, n3 = 0; i4 && n3 < i4.length; n3++)
      i4[n3] && (i4[n3].__ = e5, _4 = te(i4[n3], _4, t3));
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
function ue(e5, _4, t3, i4) {
  var n3 = e5.key, r7 = e5.type, l4 = t3 - 1, u5 = t3 + 1, c7 = _4[t3];
  if (c7 === null || c7 && n3 == c7.key && r7 === c7.type && !(131072 & c7.__u))
    return t3;
  if (i4 > (c7 != null && !(131072 & c7.__u) ? 1 : 0))
    for (; l4 >= 0 || u5 < _4.length; ) {
      if (l4 >= 0) {
        if ((c7 = _4[l4]) && !(131072 & c7.__u) && n3 == c7.key && r7 === c7.type)
          return l4;
        l4--;
      }
      if (u5 < _4.length) {
        if ((c7 = _4[u5]) && !(131072 & c7.__u) && n3 == c7.key && r7 === c7.type)
          return u5;
        u5++;
      }
    }
  return -1;
}
function q(e5, _4, t3) {
  _4[0] === "-" ? e5.setProperty(_4, t3 ?? "") : e5[_4] = t3 == null ? "" : typeof t3 != "number" || oe.test(_4) ? t3 : t3 + "px";
}
function M(e5, _4, t3, i4, n3) {
  var r7;
  e:
    if (_4 === "style")
      if (typeof t3 == "string")
        e5.style.cssText = t3;
      else {
        if (typeof i4 == "string" && (e5.style.cssText = i4 = ""), i4)
          for (_4 in i4)
            t3 && _4 in t3 || q(e5.style, _4, "");
        if (t3)
          for (_4 in t3)
            i4 && t3[_4] === i4[_4] || q(e5.style, _4, t3[_4]);
      }
    else if (_4[0] === "o" && _4[1] === "n")
      r7 = _4 !== (_4 = _4.replace(/(PointerCapture)$|Capture$/i, "$1")), _4 = _4.toLowerCase() in e5 ? _4.toLowerCase().slice(2) : _4.slice(2), e5.l || (e5.l = {}), e5.l[_4 + r7] = t3, t3 ? i4 ? t3.u = i4.u : (t3.u = Date.now(), e5.addEventListener(_4, r7 ? K : J, r7)) : e5.removeEventListener(_4, r7 ? K : J, r7);
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
function G(e5, _4, t3, i4, n3, r7, l4, u5, c7, s4) {
  var p6, o7, m8, f6, h8, k5, v3, d10, y7, C7, T5, P7, j5, U5, N5, g5 = _4.type;
  if (_4.constructor !== void 0)
    return null;
  128 & t3.__u && (c7 = !!(32 & t3.__u), r7 = [u5 = _4.__e = t3.__e]), (p6 = a.__b) && p6(_4);
  e:
    if (typeof g5 == "function")
      try {
        if (d10 = _4.props, y7 = (p6 = g5.contextType) && i4[p6.__c], C7 = p6 ? y7 ? y7.props.value : p6.__ : i4, t3.__c ? v3 = (o7 = _4.__c = t3.__c).__ = o7.__E : ("prototype" in g5 && g5.prototype.render ? _4.__c = o7 = new g5(d10, C7) : (_4.__c = o7 = new W(d10, C7), o7.constructor = g5, o7.render = ce), y7 && y7.sub(o7), o7.props = d10, o7.state || (o7.state = {}), o7.context = C7, o7.__n = i4, m8 = o7.__d = true, o7.__h = [], o7._sb = []), o7.__s == null && (o7.__s = o7.state), g5.getDerivedStateFromProps != null && (o7.__s == o7.state && (o7.__s = b({}, o7.__s)), b(o7.__s, g5.getDerivedStateFromProps(d10, o7.__s))), f6 = o7.props, h8 = o7.state, o7.__v = _4, m8)
          g5.getDerivedStateFromProps == null && o7.componentWillMount != null && o7.componentWillMount(), o7.componentDidMount != null && o7.__h.push(o7.componentDidMount);
        else {
          if (g5.getDerivedStateFromProps == null && d10 !== f6 && o7.componentWillReceiveProps != null && o7.componentWillReceiveProps(d10, C7), !o7.__e && (o7.shouldComponentUpdate != null && o7.shouldComponentUpdate(d10, o7.__s, C7) === false || _4.__v === t3.__v)) {
            for (_4.__v !== t3.__v && (o7.props = d10, o7.state = o7.__s, o7.__d = false), _4.__e = t3.__e, _4.__k = t3.__k, _4.__k.forEach(function(L6) {
              L6 && (L6.__ = _4);
            }), T5 = 0; T5 < o7._sb.length; T5++)
              o7.__h.push(o7._sb[T5]);
            o7._sb = [], o7.__h.length && l4.push(o7);
            break e;
          }
          o7.componentWillUpdate != null && o7.componentWillUpdate(d10, o7.__s, C7), o7.componentDidUpdate != null && o7.__h.push(function() {
            o7.componentDidUpdate(f6, h8, k5);
          });
        }
        if (o7.context = C7, o7.props = d10, o7.__P = e5, o7.__e = false, P7 = a.__r, j5 = 0, "prototype" in g5 && g5.prototype.render) {
          for (o7.state = o7.__s, o7.__d = false, P7 && P7(_4), p6 = o7.render(o7.props, o7.state, o7.context), U5 = 0; U5 < o7._sb.length; U5++)
            o7.__h.push(o7._sb[U5]);
          o7._sb = [];
        } else
          do
            o7.__d = false, P7 && P7(_4), p6 = o7.render(o7.props, o7.state, o7.context), o7.state = o7.__s;
          while (o7.__d && ++j5 < 25);
        o7.state = o7.__s, o7.getChildContext != null && (i4 = b(b({}, i4), o7.getChildContext())), m8 || o7.getSnapshotBeforeUpdate == null || (k5 = o7.getSnapshotBeforeUpdate(f6, h8)), _e(e5, F(N5 = p6 != null && p6.type === H && p6.key == null ? p6.props.children : p6) ? N5 : [N5], _4, t3, i4, n3, r7, l4, u5, c7, s4), o7.base = _4.__e, _4.__u &= -161, o7.__h.length && l4.push(o7), v3 && (o7.__E = o7.__ = null);
      } catch (L6) {
        _4.__v = null, c7 || r7 != null ? (_4.__e = u5, _4.__u |= c7 ? 160 : 32, r7[r7.indexOf(u5)] = null) : (_4.__e = t3.__e, _4.__k = t3.__k), a.__e(L6, _4, t3);
      }
    else
      r7 == null && _4.__v === t3.__v ? (_4.__k = t3.__k, _4.__e = t3.__e) : _4.__e = fe(t3.__e, _4, t3, i4, n3, r7, l4, c7, s4);
  (p6 = a.diffed) && p6(_4);
}
function R(e5, _4, t3) {
  for (var i4 = 0; i4 < t3.length; i4++)
    V(t3[i4], t3[++i4], t3[++i4]);
  a.__c && a.__c(_4, e5), e5.some(function(n3) {
    try {
      e5 = n3.__h, n3.__h = [], e5.some(function(r7) {
        r7.call(n3);
      });
    } catch (r7) {
      a.__e(r7, n3.__v);
    }
  });
}
function fe(e5, _4, t3, i4, n3, r7, l4, u5, c7) {
  var s4, p6, o7, m8, f6, h8, k5, v3 = t3.props, d10 = _4.props, y7 = _4.type;
  if (y7 === "svg" && (n3 = true), r7 != null) {
    for (s4 = 0; s4 < r7.length; s4++)
      if ((f6 = r7[s4]) && "setAttribute" in f6 == !!y7 && (y7 ? f6.localName === y7 : f6.nodeType === 3)) {
        e5 = f6, r7[s4] = null;
        break;
      }
  }
  if (e5 == null) {
    if (y7 === null)
      return document.createTextNode(d10);
    e5 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y7) : document.createElement(y7, d10.is && d10), r7 = null, u5 = false;
  }
  if (y7 === null)
    v3 === d10 || u5 && e5.data === d10 || (e5.data = d10);
  else {
    if (r7 = r7 && D.call(e5.childNodes), v3 = t3.props || E, !u5 && r7 != null)
      for (v3 = {}, s4 = 0; s4 < e5.attributes.length; s4++)
        v3[(f6 = e5.attributes[s4]).name] = f6.value;
    for (s4 in v3)
      f6 = v3[s4], s4 == "children" || (s4 == "dangerouslySetInnerHTML" ? o7 = f6 : s4 === "key" || s4 in d10 || M(e5, s4, null, f6, n3));
    for (s4 in d10)
      f6 = d10[s4], s4 == "children" ? m8 = f6 : s4 == "dangerouslySetInnerHTML" ? p6 = f6 : s4 == "value" ? h8 = f6 : s4 == "checked" ? k5 = f6 : s4 === "key" || u5 && typeof f6 != "function" || v3[s4] === f6 || M(e5, s4, f6, v3[s4], n3);
    if (p6)
      u5 || o7 && (p6.__html === o7.__html || p6.__html === e5.innerHTML) || (e5.innerHTML = p6.__html), _4.__k = [];
    else if (o7 && (e5.innerHTML = ""), _e(e5, F(m8) ? m8 : [m8], _4, t3, i4, n3 && y7 !== "foreignObject", r7, l4, r7 ? r7[0] : t3.__k && w(t3, 0), u5, c7), r7 != null)
      for (s4 = r7.length; s4--; )
        r7[s4] != null && Z(r7[s4]);
    u5 || (s4 = "value", h8 !== void 0 && (h8 !== e5[s4] || y7 === "progress" && !h8 || y7 === "option" && h8 !== v3[s4]) && M(e5, s4, h8, v3[s4], false), s4 = "checked", k5 !== void 0 && k5 !== e5[s4] && M(e5, s4, k5, v3[s4], false));
  }
  return e5;
}
function V(e5, _4, t3) {
  try {
    typeof e5 == "function" ? e5(_4) : e5.current = _4;
  } catch (i4) {
    a.__e(i4, t3);
  }
}
function B(e5, _4, t3) {
  var i4, n3;
  if (a.unmount && a.unmount(e5), (i4 = e5.ref) && (i4.current && i4.current !== e5.__e || V(i4, null, _4)), (i4 = e5.__c) != null) {
    if (i4.componentWillUnmount)
      try {
        i4.componentWillUnmount();
      } catch (r7) {
        a.__e(r7, _4);
      }
    i4.base = i4.__P = null, e5.__c = void 0;
  }
  if (i4 = e5.__k)
    for (n3 = 0; n3 < i4.length; n3++)
      i4[n3] && B(i4[n3], _4, t3 || typeof e5.type != "function");
  t3 || e5.__e == null || Z(e5.__e), e5.__ = e5.__e = e5.__d = void 0;
}
function ce(e5, _4, t3) {
  return this.constructor(e5, t3);
}
function pe(e5, _4, t3) {
  var i4, n3, r7, l4;
  a.__ && a.__(e5, _4), n3 = (i4 = typeof t3 == "function") ? null : t3 && t3.__k || _4.__k, r7 = [], l4 = [], G(_4, e5 = (!i4 && t3 || _4).__k = re(H, null, [e5]), n3 || E, E, _4.ownerSVGElement !== void 0, !i4 && t3 ? [t3] : n3 ? null : _4.firstChild ? D.call(_4.childNodes) : null, r7, !i4 && t3 ? t3 : n3 ? n3.__e : _4.firstChild, i4, l4), e5.__d = void 0, R(r7, e5, l4);
}
function ae(e5, _4) {
  pe(e5, _4, ae);
}
function he(e5, _4, t3) {
  var i4, n3, r7, l4, u5 = b({}, e5.props);
  for (r7 in e5.type && e5.type.defaultProps && (l4 = e5.type.defaultProps), _4)
    r7 == "key" ? i4 = _4[r7] : r7 == "ref" ? n3 = _4[r7] : u5[r7] = _4[r7] === void 0 && l4 !== void 0 ? l4[r7] : _4[r7];
  return arguments.length > 2 && (u5.children = arguments.length > 3 ? D.call(arguments, 2) : t3), S(e5.type, u5, i4 || e5.key, n3 || e5.ref, null);
}
function ve(e5, _4) {
  var t3 = { __c: _4 = "__cC" + Y++, __: e5, Consumer: function(i4, n3) {
    return i4.children(n3);
  }, Provider: function(i4) {
    var n3, r7;
    return this.getChildContext || (n3 = [], (r7 = {})[_4] = this, this.getChildContext = function() {
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
  return t3.Provider.__ = t3.Consumer.contextType = t3;
}
D = O.slice, a = { __e: function(e5, _4, t3, i4) {
  for (var n3, r7, l4; _4 = _4.__; )
    if ((n3 = _4.__c) && !n3.__)
      try {
        if ((r7 = n3.constructor) && r7.getDerivedStateFromError != null && (n3.setState(r7.getDerivedStateFromError(e5)), l4 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e5, i4 || {}), l4 = n3.__d), l4)
          return n3.__E = n3;
      } catch (u5) {
        e5 = u5;
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
  var u5 = r.__H || (r.__H = { __: [], __h: [] });
  return t3 >= u5.__.length && u5.__.push({ __V: p }), u5.__[t3];
}
function I2(t3) {
  return v = 1, R2(U, t3);
}
function R2(t3, _4, u5) {
  var n3 = l(c++, 2);
  if (n3.t = t3, !n3.__c && (n3.__ = [u5 ? u5(_4) : U(void 0, _4), function(a3) {
    var f6 = n3.__N ? n3.__N[0] : n3.__[0], s4 = n3.t(f6, a3);
    f6 !== s4 && (n3.__N = [s4, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r, !r.u)) {
    var i4 = function(a3, f6, s4) {
      if (!n3.__c.__H)
        return true;
      var m8 = n3.__c.__H.__.filter(function(e5) {
        return !!e5.__c;
      });
      if (m8.every(function(e5) {
        return !e5.__N;
      }))
        return !h8 || h8.call(this, a3, f6, s4);
      var V8 = false;
      return m8.forEach(function(e5) {
        if (e5.__N) {
          var P7 = e5.__[0];
          e5.__ = e5.__N, e5.__N = void 0, P7 !== e5.__[0] && (V8 = true);
        }
      }), !(!V8 && n3.__c.props === a3) && (!h8 || h8.call(this, a3, f6, s4));
    };
    r.u = true;
    var h8 = r.shouldComponentUpdate, N5 = r.componentWillUpdate;
    r.componentWillUpdate = function(a3, f6, s4) {
      if (this.__e) {
        var m8 = h8;
        h8 = void 0, i4(a3, f6, s4), h8 = m8;
      }
      N5 && N5.call(this, a3, f6, s4);
    }, r.shouldComponentUpdate = i4;
  }
  return n3.__N || n3.__;
}
function z2(t3, _4) {
  var u5 = l(c++, 3);
  !o.__s && y(u5.__H, _4) && (u5.__ = t3, u5.i = _4, r.__H.__h.push(u5));
}
function S2(t3, _4) {
  var u5 = l(c++, 4);
  !o.__s && y(u5.__H, _4) && (u5.__ = t3, u5.i = _4, r.__h.push(u5));
}
function L(t3) {
  return v = 5, T(function() {
    return { current: t3 };
  }, []);
}
function M2(t3, _4, u5) {
  v = 6, S2(function() {
    return typeof t3 == "function" ? (t3(_4()), function() {
      return t3(null);
    }) : t3 ? (t3.current = _4(), function() {
      return t3.current = null;
    }) : void 0;
  }, u5 == null ? u5 : u5.concat(t3));
}
function T(t3, _4) {
  var u5 = l(c++, 7);
  return y(u5.__H, _4) ? (u5.__V = t3(), u5.i = _4, u5.__h = t3, u5.__V) : u5.__;
}
function G2(t3, _4) {
  return v = 8, T(function() {
    return t3;
  }, _4);
}
function J2(t3) {
  var _4 = r.context[t3.__c], u5 = l(c++, 9);
  return u5.c = t3, _4 ? (u5.__ == null && (u5.__ = true, _4.sub(r)), _4.props.value) : t3.__;
}
function K2(t3, _4) {
  o.useDebugValue && o.useDebugValue(_4 ? _4(t3) : t3);
}
function O2(t3) {
  var _4 = l(c++, 10), u5 = I2();
  return _4.__ = t3, r.componentDidCatch || (r.componentDidCatch = function(n3, i4) {
    _4.__ && _4.__(n3, i4), u5[1](n3);
  }), [u5[0], function() {
    u5[1](void 0);
  }];
}
function Q2() {
  var t3 = l(c++, 11);
  if (!t3.__) {
    for (var _4 = r.__v; _4 !== null && !_4.__m && _4.__ !== null; )
      _4 = _4.__;
    var u5 = _4.__m || (_4.__m = [0, 0]);
    t3.__ = "P" + u5[0] + "-" + u5[1]++;
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
  _4 && (H2 === r ? (_4.__h = [], r.__h = [], _4.__.forEach(function(u5) {
    u5.__N && (u5.__ = u5.__N), u5.__V = p, u5.__N = u5.i = void 0;
  })) : (_4.__h.forEach(d), _4.__h.forEach(E2), _4.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t3) {
  A2 && A2(t3);
  var _4 = t3.__c;
  _4 && _4.__H && (_4.__H.__h.length && (x2.push(_4) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _4.__H.__.forEach(function(u5) {
    u5.i && (u5.__H = u5.i), u5.__V !== p && (u5.__ = u5.__V), u5.i = void 0, u5.__V = p;
  })), H2 = r = null;
}, o.__c = function(t3, _4) {
  _4.some(function(u5) {
    try {
      u5.__h.forEach(d), u5.__h = u5.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _4.some(function(i4) {
        i4.__h && (i4.__h = []);
      }), _4 = [], o.__e(n3, u5.__v);
    }
  }), D2 && D2(t3, _4);
}, o.unmount = function(t3) {
  F2 && F2(t3);
  var _4, u5 = t3.__c;
  u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
    try {
      d(n3);
    } catch (i4) {
      _4 = i4;
    }
  }), u5.__H = void 0, _4 && o.__e(_4, u5.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t3) {
  var _4, u5 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_4), setTimeout(t3);
  }, n3 = setTimeout(u5, 100);
  q2 && (_4 = requestAnimationFrame(u5));
}
function d(t3) {
  var _4 = r, u5 = t3.__c;
  typeof u5 == "function" && (t3.__c = void 0, u5()), r = _4;
}
function E2(t3) {
  var _4 = r;
  t3.__c = t3.__(), r = _4;
}
function y(t3, _4) {
  return !t3 || t3.length !== _4.length || _4.some(function(u5, n3) {
    return u5 !== t3[n3];
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
    var u5 = this.props.ref, a3 = u5 == o7.ref;
    return !a3 && u5 && (u5.call ? u5(null) : u5.current = null), t3 ? !t3(this.props, o7) || !a3 : b3(this.props, o7);
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
    for (var o7, u5 = t3; u5 = u5.__; )
      if ((o7 = u5.__c) && o7.__c)
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
  function o7(u5) {
    if (t3 || (t3 = e5()).then(function(a3) {
      n3 = a3.default || a3;
    }, function(a3) {
      r7 = a3;
    }), r7)
      throw r7;
    if (!n3)
      throw t3;
    return re(n3, u5);
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
  var o7 = F3(r7.__v), u5 = false, a3 = function() {
    u5 || (u5 = true, n3.__R = null, o7 ? o7(l4) : l4());
  };
  n3.__R = a3;
  var l4 = function() {
    if (!--r7.__u) {
      if (r7.state.__a) {
        var s4 = r7.state.__a;
        r7.__v.__k[0] = A3(s4, s4.__c.__P, s4.__c.__O);
      }
      var g5;
      for (r7.setState({ __a: r7.__b = null }); g5 = r7.t.pop(); )
        g5.forceUpdate();
    }
  };
  r7.__u++ || 32 & t3.__u || r7.setState({ __a: r7.__b = r7.__v.__k[0] }), e5.then(a3, a3);
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
    var u5 = function() {
      t3.props.revealOrder ? (r7.push(o7), k2(t3, e5, r7)) : o7();
    };
    n3 ? n3(u5) : u5();
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
    for (var u5 in n3) {
      var a3 = n3[u5];
      if (!(u5 === "value" && "defaultValue" in n3 && a3 == null || _e2 && u5 === "children" && r7 === "noscript" || u5 === "class" || u5 === "className")) {
        var l4 = u5.toLowerCase();
        u5 === "defaultValue" && "value" in n3 && n3.value == null ? u5 = "value" : u5 === "download" && a3 === true ? a3 = "" : l4 === "translate" && a3 === "no" ? a3 = false : l4 === "ondoubleclick" ? u5 = "ondblclick" : l4 !== "onchange" || r7 !== "input" && r7 !== "textarea" || ce2(n3.type) ? l4 === "onfocus" ? u5 = "onfocusin" : l4 === "onblur" ? u5 = "onfocusout" : le2.test(u5) ? u5 = l4 : r7.indexOf("-") === -1 && ie2.test(u5) ? u5 = u5.replace(se2, "-$&").toLowerCase() : a3 === null && (a3 = void 0) : l4 = u5 = "oninput", l4 === "oninput" && o7[u5 = l4] && (u5 = "oninputCapture"), o7[u5] = a3;
      }
    }
    r7 == "select" && o7.multiple && Array.isArray(o7.value) && (o7.value = se(n3.children).forEach(function(s4) {
      s4.props.selected = o7.value.indexOf(s4.props.value) != -1;
    })), r7 == "select" && o7.defaultValue != null && (o7.value = se(n3.children).forEach(function(s4) {
      s4.props.selected = o7.multiple ? o7.defaultValue.indexOf(s4.props.value) != -1 : o7.defaultValue == s4.props.value;
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
  var n3 = t3(), r7 = I2({ h: { __: n3, v: t3 } }), o7 = r7[0].h, u5 = r7[1];
  return S2(function() {
    o7.__ = n3, o7.v = t3, y2(o7) && u5({ h: o7 });
  }, [e5, n3, t3]), z2(function() {
    return y2(o7) && u5({ h: o7 }), e5(function() {
      y2(o7) && u5({ h: o7 });
    });
  }, [e5]), n3;
}
function y2(e5) {
  var t3, n3, r7 = e5.v, o7 = e5.__;
  try {
    var u5 = r7();
    return !((t3 = o7) === (n3 = u5) && (t3 !== 0 || 1 / t3 == 1 / n3) || t3 != t3 && n3 != n3);
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
      for (var a3 in e5)
        Object.prototype.hasOwnProperty.call(e5, a3) && (n3[a3] = e5[a3]);
    }
    return n3;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function w3(t3, c7) {
  let o7 = ve(c7);
  function a3(r7) {
    let { children: e5, ...n3 } = r7, s4 = T(() => n3, Object.values(n3));
    return re(o7.Provider, { value: s4 }, e5);
  }
  function u5(r7) {
    let e5 = J2(o7);
    if (e5)
      return e5;
    if (c7 !== void 0)
      return c7;
    throw new Error(`\`${r7}\` must be used within \`${t3}\``);
  }
  return a3.displayName = t3 + "Provider", [a3, u5];
}
function _(t3, c7 = []) {
  let o7 = [];
  function a3(r7, e5) {
    let n3 = ve(e5), s4 = o7.length;
    o7 = [...o7, e5];
    function f6(d10) {
      let { scope: i4, children: x9, ...$4 } = d10, h8 = i4?.[t3][s4] || n3, S8 = T(() => $4, Object.values($4));
      return re(h8.Provider, { value: S8 }, x9);
    }
    function v3(d10, i4) {
      let x9 = i4?.[t3][s4] || n3, $4 = J2(x9);
      if ($4)
        return $4;
      if (e5 !== void 0)
        return e5;
      throw new Error(`\`${d10}\` must be used within \`${r7}\``);
    }
    return f6.displayName = r7 + "Provider", [f6, v3];
  }
  let u5 = () => {
    let r7 = o7.map((e5) => ve(e5));
    return function(n3) {
      let s4 = n3?.[t3] || r7;
      return T(() => ({ [`__scope${t3}`]: { ...n3, [t3]: s4 } }), [n3, s4]);
    };
  };
  return u5.scopeName = t3, [a3, C3(u5, ...c7)];
}
function C3(...t3) {
  let c7 = t3[0];
  if (t3.length === 1)
    return c7;
  let o7 = () => {
    let a3 = t3.map((u5) => ({ useScope: u5(), scopeName: u5.scopeName }));
    return function(r7) {
      let e5 = a3.reduce((n3, { useScope: s4, scopeName: f6 }) => {
        let d10 = s4(r7)[`__scope${f6}`];
        return { ...n3, ...d10 };
      }, {});
      return T(() => ({ [`__scope${c7.scopeName}`]: e5 }), [e5]);
    };
  };
  return o7.scopeName = c7.scopeName, o7;
}

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e5, f6) {
  typeof e5 == "function" ? e5(f6) : e5 != null && (e5.current = f6);
}
function t(...e5) {
  return (f6) => e5.forEach((o7) => n(o7, f6));
}
function u2(...e5) {
  return G2(t(...e5), e5);
}

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e5, f6, { checkForDefaultPrevented: t3 = true } = {}) {
  return function(c7) {
    if (e5?.(c7), t3 === false || !c7.defaultPrevented)
      return f6?.(c7);
  };
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u3 = compat_exports["useId".toString()] || (() => {
});
var r3 = 0;
function n2(t3) {
  let [e5, o7] = I2(u3());
  return e(() => {
    t3 || o7(($4) => $4 ?? String(r3++));
  }, [t3]), t3 || (e5 ? `radix-${e5}` : "");
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
function w4({ prop: e5, defaultProp: a3, onChange: s4 = () => {
} }) {
  let [t3, n3] = P2({ defaultProp: a3, onChange: s4 }), o7 = e5 !== void 0, f6 = o7 ? e5 : t3, l4 = l2(s4), $4 = G2((c7) => {
    if (o7) {
      let u5 = typeof c7 == "function" ? c7(e5) : c7;
      u5 !== e5 && l4(u5);
    } else
      n3(c7);
  }, [o7, e5, n3, l4]);
  return [f6, $4];
}
function P2({ defaultProp: e5, onChange: a3 }) {
  let s4 = I2(e5), [t3] = s4, n3 = L(t3), o7 = l2(a3);
  return z2(() => {
    n3.current !== t3 && (o7(t3), n3.current = t3);
  }, [t3, n3, o7]), s4;
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n3, t3) => {
  let { children: e5, ...r7 } = n3, o7 = te2.toArray(e5), l4 = o7.find(I3);
  if (l4) {
    let c7 = l4.props.children, a3 = o7.map((m8) => m8 === l4 ? te2.count(c7) > 1 ? te2.only(null) : m(c7) ? c7.props.children : null : m8);
    return re($2, p3({}, r7, { ref: t3 }), m(c7) ? Ee(c7, void 0, a3) : null);
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
    let o7 = n3[r7], l4 = t3[r7];
    /^on[A-Z]/.test(r7) ? o7 && l4 ? e5[r7] = (...a3) => {
      l4(...a3), o7(...a3);
    } : o7 && (e5[r7] = o7) : r7 === "style" ? e5[r7] = { ...o7, ...l4 } : r7 === "className" && (e5[r7] = [o7, l4].filter(Boolean).join(" "));
  }
  return { ...n3, ...e5 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u4 = d3.reduce((t3, e5) => {
  let f6 = ee2((r7, o7) => {
    let { asChild: s4, ...a3 } = r7, i4 = s4 ? b4 : e5;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i4, p3({}, a3, { ref: o7 }));
  });
  return f6.displayName = `Primitive.${e5}`, { ...t3, [e5]: f6 };
}, {});
function E3(t3, e5) {
  t3 && Re(() => t3.dispatchEvent(e5));
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i(d10, e5 = globalThis?.document) {
  let a3 = l2(d10);
  z2(() => {
    let o7 = (s4) => {
      s4.key === "Escape" && a3(s4);
    };
    return e5.addEventListener("keydown", o7), () => e5.removeEventListener("keydown", o7);
  }, [a3, e5]);
}

// https://esm.sh/v132/@radix-ui/react-dismissable-layer@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dismissable-layer.mjs
var h2 = "dismissableLayer.update";
var X4 = "dismissableLayer.pointerDownOutside";
var Y2 = "dismissableLayer.focusOutside";
var g2;
var F4 = ve({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var G3 = ee2((n3, e5) => {
  var o7;
  let { disableOutsidePointerEvents: i4 = false, onEscapeKeyDown: t3, onPointerDownOutside: r7, onFocusOutside: f6, onInteractOutside: d10, onDismiss: l4, ...v3 } = n3, a3 = J2(F4), [c7, S8] = I2(null), u5 = (o7 = c7?.ownerDocument) !== null && o7 !== void 0 ? o7 : globalThis?.document, [, W7] = I2({}), A6 = u2(e5, (s4) => S8(s4)), y7 = Array.from(a3.layers), [N5] = [...a3.layersWithOutsidePointerEventsDisabled].slice(-1), _4 = y7.indexOf(N5), D6 = c7 ? y7.indexOf(c7) : -1, U5 = a3.layersWithOutsidePointerEventsDisabled.size > 0, w8 = D6 >= _4, z6 = Q4((s4) => {
    let $4 = s4.target, P7 = [...a3.branches].some((E8) => E8.contains($4));
    !w8 || P7 || (r7?.(s4), d10?.(s4), s4.defaultPrevented || l4?.());
  }, u5), O7 = V3((s4) => {
    let $4 = s4.target;
    [...a3.branches].some((E8) => E8.contains($4)) || (f6?.(s4), d10?.(s4), s4.defaultPrevented || l4?.());
  }, u5);
  return i((s4) => {
    D6 === a3.layers.size - 1 && (t3?.(s4), !s4.defaultPrevented && l4 && (s4.preventDefault(), l4()));
  }, u5), z2(() => {
    if (c7)
      return i4 && (a3.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u5.body.style.pointerEvents, u5.body.style.pointerEvents = "none"), a3.layersWithOutsidePointerEventsDisabled.add(c7)), a3.layers.add(c7), L3(), () => {
        i4 && a3.layersWithOutsidePointerEventsDisabled.size === 1 && (u5.body.style.pointerEvents = g2);
      };
  }, [c7, u5, i4, a3]), z2(() => () => {
    c7 && (a3.layers.delete(c7), a3.layersWithOutsidePointerEventsDisabled.delete(c7), L3());
  }, [c7, a3]), z2(() => {
    let s4 = () => W7({});
    return document.addEventListener(h2, s4), () => document.removeEventListener(h2, s4);
  }, []), re(u4.div, p3({}, v3, { ref: A6, style: { pointerEvents: U5 ? w8 ? "auto" : "none" : void 0, ...n3.style }, onFocusCapture: o3(n3.onFocusCapture, O7.onFocusCapture), onBlurCapture: o3(n3.onBlurCapture, O7.onBlurCapture), onPointerDownCapture: o3(n3.onPointerDownCapture, z6.onPointerDownCapture) }));
});
var J3 = ee2((n3, e5) => {
  let o7 = J2(F4), i4 = L(null), t3 = u2(e5, i4);
  return z2(() => {
    let r7 = i4.current;
    if (r7)
      return o7.branches.add(r7), () => {
        o7.branches.delete(r7);
      };
  }, [o7.branches]), re(u4.div, p3({}, n3, { ref: t3 }));
});
function Q4(n3, e5 = globalThis?.document) {
  let o7 = l2(n3), i4 = L(false), t3 = L(() => {
  });
  return z2(() => {
    let r7 = (d10) => {
      if (d10.target && !i4.current) {
        let v3 = function() {
          I4(X4, o7, l4, { discrete: true });
        }, l4 = { originalEvent: d10 };
        d10.pointerType === "touch" ? (e5.removeEventListener("click", t3.current), t3.current = v3, e5.addEventListener("click", t3.current, { once: true })) : v3();
      } else
        e5.removeEventListener("click", t3.current);
      i4.current = false;
    }, f6 = window.setTimeout(() => {
      e5.addEventListener("pointerdown", r7);
    }, 0);
    return () => {
      window.clearTimeout(f6), e5.removeEventListener("pointerdown", r7), e5.removeEventListener("click", t3.current);
    };
  }, [e5, o7]), { onPointerDownCapture: () => i4.current = true };
}
function V3(n3, e5 = globalThis?.document) {
  let o7 = l2(n3), i4 = L(false);
  return z2(() => {
    let t3 = (r7) => {
      r7.target && !i4.current && I4(Y2, o7, { originalEvent: r7 }, { discrete: false });
    };
    return e5.addEventListener("focusin", t3), () => e5.removeEventListener("focusin", t3);
  }, [e5, o7]), { onFocusCapture: () => i4.current = true, onBlurCapture: () => i4.current = false };
}
function L3() {
  let n3 = new CustomEvent(h2);
  document.dispatchEvent(n3);
}
function I4(n3, e5, o7, { discrete: i4 }) {
  let t3 = o7.originalEvent.target, r7 = new CustomEvent(n3, { bubbles: false, cancelable: true, detail: o7 });
  e5 && t3.addEventListener(n3, e5, { once: true }), i4 ? E3(t3, r7) : t3.dispatchEvent(r7);
}

// https://esm.sh/v132/@radix-ui/react-focus-scope@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-scope.mjs
var E4 = "focusScope.autoFocusOnMount";
var b5 = "focusScope.autoFocusOnUnmount";
var S4 = { bubbles: false, cancelable: true };
var Q5 = ee2((e5, n3) => {
  let { loop: t3 = false, trapped: a3 = false, onMountAutoFocus: m8, onUnmountAutoFocus: L6, ...R5 } = e5, [o7, g5] = I2(null), $4 = l2(m8), v3 = l2(L6), p6 = L(null), H6 = u2(n3, (s4) => g5(s4)), i4 = L({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  z2(() => {
    if (a3) {
      let s4 = function(u5) {
        if (i4.paused || !o7)
          return;
        let r7 = u5.target;
        o7.contains(r7) ? p6.current = r7 : d4(p6.current, { select: true });
      }, f6 = function(u5) {
        if (i4.paused || !o7)
          return;
        let r7 = u5.relatedTarget;
        r7 !== null && (o7.contains(r7) || d4(p6.current, { select: true }));
      }, c7 = function(u5) {
        if (document.activeElement === document.body)
          for (let F7 of u5)
            F7.removedNodes.length > 0 && d4(o7);
      };
      document.addEventListener("focusin", s4), document.addEventListener("focusout", f6);
      let l4 = new MutationObserver(c7);
      return o7 && l4.observe(o7, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", s4), document.removeEventListener("focusout", f6), l4.disconnect();
      };
    }
  }, [a3, o7, i4.paused]), z2(() => {
    if (o7) {
      C4.add(i4);
      let s4 = document.activeElement;
      if (!o7.contains(s4)) {
        let c7 = new CustomEvent(E4, S4);
        o7.addEventListener(E4, $4), o7.dispatchEvent(c7), c7.defaultPrevented || (x4(q3(I5(o7)), { select: true }), document.activeElement === s4 && d4(o7));
      }
      return () => {
        o7.removeEventListener(E4, $4), setTimeout(() => {
          let c7 = new CustomEvent(b5, S4);
          o7.addEventListener(b5, v3), o7.dispatchEvent(c7), c7.defaultPrevented || d4(s4 ?? document.body, { select: true }), o7.removeEventListener(b5, v3), C4.remove(i4);
        }, 0);
      };
    }
  }, [o7, $4, v3, i4]);
  let P7 = G2((s4) => {
    if (!t3 && !a3 || i4.paused)
      return;
    let f6 = s4.key === "Tab" && !s4.altKey && !s4.ctrlKey && !s4.metaKey, c7 = document.activeElement;
    if (f6 && c7) {
      let l4 = s4.currentTarget, [u5, r7] = D3(l4);
      u5 && r7 ? !s4.shiftKey && c7 === r7 ? (s4.preventDefault(), t3 && d4(u5, { select: true })) : s4.shiftKey && c7 === u5 && (s4.preventDefault(), t3 && d4(r7, { select: true })) : c7 === l4 && s4.preventDefault();
    }
  }, [t3, a3, i4.paused]);
  return re(u4.div, p3({ tabIndex: -1 }, R5, { ref: H6, onKeyDown: P7 }));
});
function x4(e5, { select: n3 = false } = {}) {
  let t3 = document.activeElement;
  for (let a3 of e5)
    if (d4(a3, { select: n3 }), document.activeElement !== t3)
      return;
}
function D3(e5) {
  let n3 = I5(e5), t3 = N2(n3, e5), a3 = N2(n3.reverse(), e5);
  return [t3, a3];
}
function I5(e5) {
  let n3 = [], t3 = document.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, { acceptNode: (a3) => {
    let m8 = a3.tagName === "INPUT" && a3.type === "hidden";
    return a3.disabled || a3.hidden || m8 ? NodeFilter.FILTER_SKIP : a3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
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
function d4(e5, { select: n3 = false } = {}) {
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
  let t3 = [...e5], a3 = t3.indexOf(n3);
  return a3 !== -1 && t3.splice(a3, 1), t3;
}
function q3(e5) {
  return e5.filter((n3) => n3.tagName !== "A");
}

// https://esm.sh/v132/@radix-ui/react-portal@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-portal.mjs
var m2 = ee2((r7, a3) => {
  var e5;
  let { container: o7 = globalThis == null || (e5 = globalThis.document) === null || e5 === void 0 ? void 0 : e5.body, ...t3 } = r7;
  return o7 ? Te.createPortal(re(u4.div, p3({}, t3, { ref: a3 })), o7) : null;
});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S5(n3, t3) {
  return R2((o7, r7) => {
    let i4 = t3[o7][r7];
    return i4 ?? o7;
  }, n3);
}
var U3 = (n3) => {
  let { present: t3, children: o7 } = n3, r7 = y4(t3), i4 = typeof o7 == "function" ? o7({ present: r7.isPresent }) : te2.only(o7), a3 = u2(r7.ref, i4.ref);
  return typeof o7 == "function" || r7.isPresent ? Ee(i4, { ref: a3 }) : null;
};
U3.displayName = "Presence";
function y4(n3) {
  let [t3, o7] = I2(), r7 = L({}), i4 = L(n3), a3 = L("none"), N5 = n3 ? "mounted" : "unmounted", [f6, s4] = S5(N5, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e5 = d5(r7.current);
    a3.current = f6 === "mounted" ? e5 : "none";
  }, [f6]), e(() => {
    let e5 = r7.current, u5 = i4.current;
    if (u5 !== n3) {
      let $4 = a3.current, m8 = d5(e5);
      n3 ? s4("MOUNT") : m8 === "none" || e5?.display === "none" ? s4("UNMOUNT") : s4(u5 && $4 !== m8 ? "ANIMATION_OUT" : "UNMOUNT"), i4.current = n3;
    }
  }, [n3, s4]), e(() => {
    if (t3) {
      let e5 = (c7) => {
        let m8 = d5(r7.current).includes(c7.animationName);
        c7.target === t3 && m8 && Re(() => s4("ANIMATION_END"));
      }, u5 = (c7) => {
        c7.target === t3 && (a3.current = d5(r7.current));
      };
      return t3.addEventListener("animationstart", u5), t3.addEventListener("animationcancel", e5), t3.addEventListener("animationend", e5), () => {
        t3.removeEventListener("animationstart", u5), t3.removeEventListener("animationcancel", e5), t3.removeEventListener("animationend", e5);
      };
    } else
      s4("ANIMATION_END");
  }, [t3, s4]), { isPresent: ["mounted", "unmountSuspended"].includes(f6), ref: G2((e5) => {
    e5 && (r7.current = getComputedStyle(e5)), o7(e5);
  }, []) };
}
function d5(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-focus-guards@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-focus-guards.mjs
var d6 = 0;
function c2() {
  z2(() => {
    var e5, t3;
    let a3 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e5 = a3[0]) !== null && e5 !== void 0 ? e5 : r4()), document.body.insertAdjacentElement("beforeend", (t3 = a3[1]) !== null && t3 !== void 0 ? t3 : r4()), d6++, () => {
      d6 === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o7) => o7.remove()), d6--;
    };
  }, []);
}
function r4() {
  let e5 = document.createElement("span");
  return e5.setAttribute("data-radix-focus-guard", ""), e5.tabIndex = 0, e5.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e5;
}

// https://esm.sh/v133/tslib@2.6.2/denonext/tslib.mjs
var m3 = function() {
  return m3 = Object.assign || function(t3) {
    for (var n3, r7 = 1, i4 = arguments.length; r7 < i4; r7++) {
      n3 = arguments[r7];
      for (var o7 in n3)
        Object.prototype.hasOwnProperty.call(n3, o7) && (t3[o7] = n3[o7]);
    }
    return t3;
  }, m3.apply(this, arguments);
};
function S6(e5, t3) {
  var n3 = {};
  for (var r7 in e5)
    Object.prototype.hasOwnProperty.call(e5, r7) && t3.indexOf(r7) < 0 && (n3[r7] = e5[r7]);
  if (e5 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i4 = 0, r7 = Object.getOwnPropertySymbols(e5); i4 < r7.length; i4++)
      t3.indexOf(r7[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, r7[i4]) && (n3[r7[i4]] = e5[r7[i4]]);
  return n3;
}
function M4(e5, t3, n3) {
  if (n3 || arguments.length === 2)
    for (var r7 = 0, i4 = t3.length, o7; r7 < i4; r7++)
      (o7 || !(r7 in t3)) && (o7 || (o7 = Array.prototype.slice.call(t3, 0, r7)), o7[r7] = t3[r7]);
  return e5.concat(o7 || Array.prototype.slice.call(t3));
}

// https://esm.sh/v133/react-remove-scroll-bar@2.3.4/denonext/constants.js
var r5 = "right-scroll-bar-position";
var a2 = "width-before-scroll-bar";

// https://esm.sh/v132/use-callback-ref@1.3.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-callback-ref.mjs
function o4(r7, e5) {
  return typeof r7 == "function" ? r7(e5) : r7 && (r7.current = e5), r7;
}
function f2(r7, e5) {
  var t3 = I2(function() {
    return { value: r7, callback: e5, facade: { get current() {
      return t3.value;
    }, set current(n3) {
      var u5 = t3.value;
      u5 !== n3 && (t3.value = n3, t3.callback(n3, u5));
    } } };
  })[0];
  return t3.callback = e5, t3.facade;
}
function m4(r7, e5) {
  return f2(e5 || null, function(t3) {
    return r7.forEach(function(n3) {
      return o4(n3, t3);
    });
  });
}

// https://esm.sh/v132/use-sidecar@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/use-sidecar.mjs
function C5(e5) {
  return e5;
}
function E5(e5, r7) {
  r7 === void 0 && (r7 = C5);
  var t3 = [], c7 = false, i4 = { read: function() {
    if (c7)
      throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return t3.length ? t3[t3.length - 1] : e5;
  }, useMedium: function(o7) {
    var n3 = r7(o7, c7);
    return t3.push(n3), function() {
      t3 = t3.filter(function(a3) {
        return a3 !== n3;
      });
    };
  }, assignSyncMedium: function(o7) {
    for (c7 = true; t3.length; ) {
      var n3 = t3;
      t3 = [], n3.forEach(o7);
    }
    t3 = { push: function(a3) {
      return o7(a3);
    }, filter: function() {
      return t3;
    } };
  }, assignMedium: function(o7) {
    c7 = true;
    var n3 = [];
    if (t3.length) {
      var a3 = t3;
      t3 = [], a3.forEach(o7), n3 = t3;
    }
    var d10 = function() {
      var u5 = n3;
      n3 = [], u5.forEach(o7);
    }, s4 = function() {
      return Promise.resolve().then(d10);
    };
    s4(), t3 = { push: function(u5) {
      n3.push(u5), s4();
    }, filter: function(u5) {
      return n3 = n3.filter(u5), t3;
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
  var r7 = e5.sideCar, t3 = S6(e5, ["sideCar"]);
  if (!r7)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c7 = r7.read();
  if (!c7)
    throw new Error("Sidecar medium not found");
  return re(c7, m3({}, t3));
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
  var t3 = document.createElement("style");
  t3.type = "text/css";
  var e5 = t2();
  return e5 && t3.setAttribute("nonce", e5), t3;
}
function s2(t3, e5) {
  t3.styleSheet ? t3.styleSheet.cssText = e5 : t3.appendChild(document.createTextNode(e5));
}
function f3(t3) {
  var e5 = document.head || document.getElementsByTagName("head")[0];
  e5.appendChild(t3);
}
var o5 = function() {
  var t3 = 0, e5 = null;
  return { add: function(n3) {
    t3 == 0 && (e5 = c3()) && (s2(e5, n3), f3(e5)), t3++;
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
var m5 = function() {
  var t3 = r6(), e5 = function(n3) {
    var i4 = n3.styles, u5 = n3.dynamic;
    return t3(i4, u5), null;
  };
  return e5;
};

// https://esm.sh/v132/react-remove-scroll-bar@2.3.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll-bar.mjs
var i2 = "right-scroll-bar-position";
var c4 = "width-before-scroll-bar";
var g3 = "with-scroll-bars-hidden";
var p4 = "--removed-body-scroll-bar-size";
var v2 = { left: 0, top: 0, right: 0, gap: 0 };
var m6 = function(n3) {
  return parseInt(n3 || "", 10) || 0;
};
var h3 = function(n3) {
  var a3 = window.getComputedStyle(document.body), r7 = a3[n3 === "padding" ? "paddingLeft" : "marginLeft"], t3 = a3[n3 === "padding" ? "paddingTop" : "marginTop"], o7 = a3[n3 === "padding" ? "paddingRight" : "marginRight"];
  return [m6(r7), m6(t3), m6(o7)];
};
var s3 = function(n3) {
  if (n3 === void 0 && (n3 = "margin"), typeof window > "u")
    return v2;
  var a3 = h3(n3), r7 = document.documentElement.clientWidth, t3 = window.innerWidth;
  return { left: a3[0], top: a3[1], right: a3[2], gap: Math.max(0, t3 - r7 + a3[2] - a3[0]) };
};
var x5 = m5();
var b6 = function(n3, a3, r7, t3) {
  var o7 = n3.left, d10 = n3.top, f6 = n3.right, e5 = n3.gap;
  return r7 === void 0 && (r7 = "margin"), `
  .`.concat(g3, ` {
   overflow: hidden `).concat(t3, `;
   padding-right: `).concat(e5, "px ").concat(t3, `;
  }
  body {
    overflow: hidden `).concat(t3, `;
    overscroll-behavior: contain;
    `).concat([a3 && "position: relative ".concat(t3, ";"), r7 === "margin" && `
    padding-left: `.concat(o7, `px;
    padding-top: `).concat(d10, `px;
    padding-right: `).concat(f6, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e5, "px ").concat(t3, `;
    `), r7 === "padding" && "padding-right: ".concat(e5, "px ").concat(t3, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(i2, ` {
    right: `).concat(e5, "px ").concat(t3, `;
  }
  
  .`).concat(c4, ` {
    margin-right: `).concat(e5, "px ").concat(t3, `;
  }
  
  .`).concat(i2, " .").concat(i2, ` {
    right: 0 `).concat(t3, `;
  }
  
  .`).concat(c4, " .").concat(c4, ` {
    margin-right: 0 `).concat(t3, `;
  }
  
  body {
    `).concat(p4, ": ").concat(e5, `px;
  }
`);
};
var w6 = function(n3) {
  var a3 = n3.noRelative, r7 = n3.noImportant, t3 = n3.gapMode, o7 = t3 === void 0 ? "margin" : t3, d10 = T(function() {
    return s3(o7);
  }, [o7]);
  return re(x5, { styles: b6(d10, !a3, o7, r7 ? "" : "!important") });
};

// https://esm.sh/v132/react-remove-scroll@2.5.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-remove-scroll.mjs
var N3 = P3();
var D4 = function() {
};
var M5 = ee2(function(e5, t3) {
  var c7 = L(null), o7 = I2({ onScrollCapture: D4, onWheelCapture: D4, onTouchMoveCapture: D4 }), u5 = o7[0], s4 = o7[1], d10 = e5.forwardProps, l4 = e5.children, R5 = e5.className, g5 = e5.removeScrollBar, w8 = e5.enabled, C7 = e5.shards, b9 = e5.sideCar, y7 = e5.noIsolation, E8 = e5.inert, r7 = e5.allowPinchZoom, n3 = e5.as, v3 = n3 === void 0 ? "div" : n3, h8 = e5.gapMode, m8 = S6(e5, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S8 = b9, f6 = m4([c7, t3]), p6 = m3(m3({}, m8), u5);
  return re(H, null, w8 && re(S8, { sideCar: N3, removeScrollBar: g5, shards: C7, noIsolation: y7, inert: E8, setCallbacks: s4, allowPinchZoom: !!r7, lockRef: c7, gapMode: h8 }), d10 ? Ee(te2.only(l4), m3(m3({}, p6), { ref: f6 })) : re(v3, m3({}, p6, { className: R5, ref: f6 }), l4));
});
M5.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
M5.classNames = { fullWidth: a2, zeroRight: r5 };
var W4 = false;
if (typeof window < "u")
  try {
    x6 = Object.defineProperty({}, "passive", { get: function() {
      return W4 = true, true;
    } }), window.addEventListener("test", x6, x6), window.removeEventListener("test", x6, x6);
  } catch {
    W4 = false;
  }
var x6;
var k3 = W4 ? { passive: false } : false;
var O5 = function(e5) {
  return e5.tagName === "TEXTAREA";
};
var H3 = function(e5, t3) {
  var c7 = window.getComputedStyle(e5);
  return c7[t3] !== "hidden" && !(c7.overflowY === c7.overflowX && !O5(e5) && c7[t3] === "visible");
};
var ee3 = function(e5) {
  return H3(e5, "overflowY");
};
var re3 = function(e5) {
  return H3(e5, "overflowX");
};
var I6 = function(e5, t3) {
  var c7 = t3.ownerDocument, o7 = t3;
  do {
    typeof ShadowRoot < "u" && o7 instanceof ShadowRoot && (o7 = o7.host);
    var u5 = V5(e5, o7);
    if (u5) {
      var s4 = Z2(e5, o7), d10 = s4[1], l4 = s4[2];
      if (d10 > l4)
        return true;
    }
    o7 = o7.parentNode;
  } while (o7 && o7 !== c7.body);
  return false;
};
var te3 = function(e5) {
  var t3 = e5.scrollTop, c7 = e5.scrollHeight, o7 = e5.clientHeight;
  return [t3, c7, o7];
};
var ae3 = function(e5) {
  var t3 = e5.scrollLeft, c7 = e5.scrollWidth, o7 = e5.clientWidth;
  return [t3, c7, o7];
};
var V5 = function(e5, t3) {
  return e5 === "v" ? ee3(t3) : re3(t3);
};
var Z2 = function(e5, t3) {
  return e5 === "v" ? te3(t3) : ae3(t3);
};
var ne3 = function(e5, t3) {
  return e5 === "h" && t3 === "rtl" ? -1 : 1;
};
var F5 = function(e5, t3, c7, o7, u5) {
  var s4 = ne3(e5, window.getComputedStyle(t3).direction), d10 = s4 * o7, l4 = c7.target, R5 = t3.contains(l4), g5 = false, w8 = d10 > 0, C7 = 0, b9 = 0;
  do {
    var y7 = Z2(e5, l4), E8 = y7[0], r7 = y7[1], n3 = y7[2], v3 = r7 - n3 - s4 * E8;
    (E8 || v3) && V5(e5, l4) && (C7 += v3, b9 += E8), l4 = l4.parentNode;
  } while (!R5 && l4 !== document.body || R5 && (t3.contains(l4) || t3 === l4));
  return (w8 && (u5 && C7 === 0 || !u5 && d10 > C7) || !w8 && (u5 && b9 === 0 || !u5 && -d10 > b9)) && (g5 = true), g5;
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
var ie3 = function(e5, t3) {
  return e5[0] === t3[0] && e5[1] === t3[1];
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
  var t3 = L([]), c7 = L([0, 0]), o7 = L(), u5 = I2(fe3++)[0], s4 = I2(m5)[0], d10 = L(e5);
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
    var v3 = X5(r7), h8 = c7.current, m8 = "deltaX" in r7 ? r7.deltaX : h8[0] - v3[0], S8 = "deltaY" in r7 ? r7.deltaY : h8[1] - v3[1], f6, p6 = r7.target, P7 = Math.abs(m8) > Math.abs(S8) ? "h" : "v";
    if ("touches" in r7 && P7 === "h" && p6.type === "range")
      return false;
    var T5 = I6(P7, p6);
    if (!T5)
      return true;
    if (T5 ? f6 = P7 : (f6 = P7 === "v" ? "h" : "v", T5 = I6(P7, p6)), !T5)
      return false;
    if (!o7.current && "changedTouches" in r7 && (m8 || S8) && (o7.current = f6), !f6)
      return true;
    var A6 = o7.current || f6;
    return F5(A6, n3, r7, A6 === "h" ? m8 : S8, true);
  }, []), R5 = G2(function(r7) {
    var n3 = r7;
    if (!(!B2.length || B2[B2.length - 1] !== s4)) {
      var v3 = "deltaY" in n3 ? z3(n3) : X5(n3), h8 = t3.current.filter(function(f6) {
        return f6.name === n3.type && f6.target === n3.target && ie3(f6.delta, v3);
      })[0];
      if (h8 && h8.should) {
        n3.cancelable && n3.preventDefault();
        return;
      }
      if (!h8) {
        var m8 = (d10.current.shards || []).map(_2).filter(Boolean).filter(function(f6) {
          return f6.contains(n3.target);
        }), S8 = m8.length > 0 ? l4(n3, m8[0]) : !d10.current.noIsolation;
        S8 && n3.cancelable && n3.preventDefault();
      }
    }
  }, []), g5 = G2(function(r7, n3, v3, h8) {
    var m8 = { name: r7, delta: n3, target: v3, should: h8 };
    t3.current.push(m8), setTimeout(function() {
      t3.current = t3.current.filter(function(S8) {
        return S8 !== m8;
      });
    }, 1);
  }, []), w8 = G2(function(r7) {
    c7.current = X5(r7), o7.current = void 0;
  }, []), C7 = G2(function(r7) {
    g5(r7.type, z3(r7), r7.target, l4(r7, e5.lockRef.current));
  }, []), b9 = G2(function(r7) {
    g5(r7.type, X5(r7), r7.target, l4(r7, e5.lockRef.current));
  }, []);
  z2(function() {
    return B2.push(s4), e5.setCallbacks({ onScrollCapture: C7, onWheelCapture: C7, onTouchMoveCapture: b9 }), document.addEventListener("wheel", R5, k3), document.addEventListener("touchmove", R5, k3), document.addEventListener("touchstart", w8, k3), function() {
      B2 = B2.filter(function(r7) {
        return r7 !== s4;
      }), document.removeEventListener("wheel", R5, k3), document.removeEventListener("touchmove", R5, k3), document.removeEventListener("touchstart", w8, k3);
    };
  }, []);
  var y7 = e5.removeScrollBar, E8 = e5.inert;
  return re(H, null, E8 ? re(s4, { styles: ue3(u5) }) : null, y7 ? re(w6, { gapMode: e5.gapMode }) : null);
}
var Q6 = A4(N3, j3);
var q4 = ee2(function(e5, t3) {
  return re(M5, m3({}, e5, { ref: t3, sideCar: Q6 }));
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
var x7 = function(r7, i4) {
  return i4.map(function(t3) {
    if (r7.contains(t3))
      return t3;
    var n3 = b7(t3);
    return n3 && r7.contains(n3) ? n3 : (console.error("aria-hidden", t3, "in not contained inside", r7, ". Doing nothing"), null);
  }).filter(function(t3) {
    return !!t3;
  });
};
var E6 = function(r7, i4, t3, n3) {
  var a3 = x7(i4, Array.isArray(r7) ? r7 : [r7]);
  p5[t3] || (p5[t3] = /* @__PURE__ */ new WeakMap());
  var o7 = p5[t3], l4 = [], v3 = /* @__PURE__ */ new Set(), O7 = new Set(a3), y7 = function(e5) {
    !e5 || v3.has(e5) || (v3.add(e5), y7(e5.parentNode));
  };
  a3.forEach(y7);
  var d10 = function(e5) {
    !e5 || O7.has(e5) || Array.prototype.forEach.call(e5.children, function(u5) {
      if (v3.has(u5))
        d10(u5);
      else {
        var s4 = u5.getAttribute(n3), A6 = s4 !== null && s4 !== "false", w8 = (f4.get(u5) || 0) + 1, M8 = (o7.get(u5) || 0) + 1;
        f4.set(u5, w8), o7.set(u5, M8), l4.push(u5), w8 === 1 && A6 && c5.set(u5, true), M8 === 1 && u5.setAttribute(t3, "true"), A6 || u5.setAttribute(n3, "true");
      }
    });
  };
  return d10(i4), v3.clear(), h4++, function() {
    l4.forEach(function(e5) {
      var u5 = f4.get(e5) - 1, s4 = o7.get(e5) - 1;
      f4.set(e5, u5), o7.set(e5, s4), u5 || (c5.has(e5) || e5.removeAttribute(n3), c5.delete(e5)), s4 || e5.removeAttribute(t3);
    }), h4--, h4 || (f4 = /* @__PURE__ */ new WeakMap(), f4 = /* @__PURE__ */ new WeakMap(), c5 = /* @__PURE__ */ new WeakMap(), p5 = {});
  };
};
var P4 = function(r7, i4, t3) {
  t3 === void 0 && (t3 = "data-aria-hidden");
  var n3 = Array.from(Array.isArray(r7) ? r7 : [r7]), a3 = i4 || W5(r7);
  return a3 ? (n3.push.apply(n3, Array.from(a3.querySelectorAll("[aria-live]"))), E6(n3, a3, t3, "aria-hidden")) : function() {
    return null;
  };
};

// https://esm.sh/v132/@radix-ui/react-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-dialog.mjs
var E7 = "Dialog";
var [h5, Ee2] = _(E7);
var [V6, d7] = h5(E7);
var q5 = (e5) => {
  let { __scopeDialog: r7, children: n3, open: c7, defaultOpen: t3, onOpenChange: o7, modal: s4 = true } = e5, i4 = L(null), u5 = L(null), [b9 = false, D6] = w4({ prop: c7, defaultProp: t3, onChange: o7 });
  return re(V6, { scope: r7, triggerRef: i4, contentRef: u5, contentId: n2(), titleId: n2(), descriptionId: n2(), open: b9, onOpenChange: D6, onOpenToggle: G2(() => D6((I9) => !I9), [D6]), modal: s4 }, n3);
};
var K3 = "DialogTrigger";
var Y3 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c7 } = e5, t3 = d7(K3, n3), o7 = u2(r7, t3.triggerRef);
  return re(u4.button, p3({ type: "button", "aria-haspopup": "dialog", "aria-expanded": t3.open, "aria-controls": t3.contentId, "data-state": O6(t3.open) }, c7, { ref: o7, onClick: o3(e5.onClick, t3.onOpenToggle) }));
});
var R4 = "DialogPortal";
var [Z3, P5] = h5(R4, { forceMount: void 0 });
var z4 = (e5) => {
  let { __scopeDialog: r7, forceMount: n3, children: c7, container: t3 } = e5, o7 = d7(R4, r7);
  return re(Z3, { scope: r7, forceMount: n3 }, te2.map(c7, (s4) => re(U3, { present: n3 || o7.open }, re(m2, { asChild: true, container: t3 }, s4))));
};
var _3 = "DialogOverlay";
var J4 = ee2((e5, r7) => {
  let n3 = P5(_3, e5.__scopeDialog), { forceMount: c7 = n3.forceMount, ...t3 } = e5, o7 = d7(_3, e5.__scopeDialog);
  return o7.modal ? re(U3, { present: c7 || o7.open }, re(Q7, p3({}, t3, { ref: r7 }))) : null;
});
var Q7 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c7 } = e5, t3 = d7(_3, n3);
  return re(ve3, { as: b4, allowPinchZoom: true, shards: [t3.contentRef] }, re(u4.div, p3({ "data-state": O6(t3.open) }, c7, { ref: r7, style: { pointerEvents: "auto", ...c7.style } })));
});
var f5 = "DialogContent";
var X6 = ee2((e5, r7) => {
  let n3 = P5(f5, e5.__scopeDialog), { forceMount: c7 = n3.forceMount, ...t3 } = e5, o7 = d7(f5, e5.__scopeDialog);
  return re(U3, { present: c7 || o7.open }, o7.modal ? re(ee4, p3({}, t3, { ref: r7 })) : re(oe3, p3({}, t3, { ref: r7 })));
});
var ee4 = ee2((e5, r7) => {
  let n3 = d7(f5, e5.__scopeDialog), c7 = L(null), t3 = u2(r7, n3.contentRef, c7);
  return z2(() => {
    let o7 = c7.current;
    if (o7)
      return P4(o7);
  }, []), re(y5, p3({}, e5, { ref: t3, trapFocus: n3.open, disableOutsidePointerEvents: true, onCloseAutoFocus: o3(e5.onCloseAutoFocus, (o7) => {
    var s4;
    o7.preventDefault(), (s4 = n3.triggerRef.current) === null || s4 === void 0 || s4.focus();
  }), onPointerDownOutside: o3(e5.onPointerDownOutside, (o7) => {
    let s4 = o7.detail.originalEvent, i4 = s4.button === 0 && s4.ctrlKey === true;
    (s4.button === 2 || i4) && o7.preventDefault();
  }), onFocusOutside: o3(e5.onFocusOutside, (o7) => o7.preventDefault()) }));
});
var oe3 = ee2((e5, r7) => {
  let n3 = d7(f5, e5.__scopeDialog), c7 = L(false), t3 = L(false);
  return re(y5, p3({}, e5, { ref: r7, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o7) => {
    var s4;
    if ((s4 = e5.onCloseAutoFocus) === null || s4 === void 0 || s4.call(e5, o7), !o7.defaultPrevented) {
      var i4;
      c7.current || (i4 = n3.triggerRef.current) === null || i4 === void 0 || i4.focus(), o7.preventDefault();
    }
    c7.current = false, t3.current = false;
  }, onInteractOutside: (o7) => {
    var s4, i4;
    (s4 = e5.onInteractOutside) === null || s4 === void 0 || s4.call(e5, o7), o7.defaultPrevented || (c7.current = true, o7.detail.originalEvent.type === "pointerdown" && (t3.current = true));
    let u5 = o7.target;
    ((i4 = n3.triggerRef.current) === null || i4 === void 0 ? void 0 : i4.contains(u5)) && o7.preventDefault(), o7.detail.originalEvent.type === "focusin" && t3.current && o7.preventDefault();
  } }));
});
var y5 = ee2((e5, r7) => {
  let { __scopeDialog: n3, trapFocus: c7, onOpenAutoFocus: t3, onCloseAutoFocus: o7, ...s4 } = e5, i4 = d7(f5, n3), u5 = L(null), b9 = u2(r7, u5);
  return c2(), re(H, null, re(Q5, { asChild: true, loop: true, trapped: c7, onMountAutoFocus: t3, onUnmountAutoFocus: o7 }, re(G3, p3({ role: "dialog", id: i4.contentId, "aria-describedby": i4.descriptionId, "aria-labelledby": i4.titleId, "data-state": O6(i4.open) }, s4, { ref: b9, onDismiss: () => i4.onOpenChange(false) }))), false);
});
var N4 = "DialogTitle";
var te4 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c7 } = e5, t3 = d7(N4, n3);
  return re(u4.h2, p3({ id: t3.titleId }, c7, { ref: r7 }));
});
var ne4 = "DialogDescription";
var ce3 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c7 } = e5, t3 = d7(ne4, n3);
  return re(u4.p, p3({ id: t3.descriptionId }, c7, { ref: r7 }));
});
var re4 = "DialogClose";
var se3 = ee2((e5, r7) => {
  let { __scopeDialog: n3, ...c7 } = e5, t3 = d7(re4, n3);
  return re(u4.button, p3({ type: "button" }, c7, { ref: r7, onClick: o3(e5.onClick, () => t3.onOpenChange(false)) }));
});
function O6(e5) {
  return e5 ? "open" : "closed";
}
var ae4 = "DialogTitleWarning";
var [he3, Re2] = w3(ae4, { contentName: f5, titleName: N4, docsSlug: "dialog" });
var Pe2 = q5;
var ye2 = Y3;
var Ne2 = z4;
var Ie = J4;
var Ae = X6;
var He = te4;
var Me = ce3;
var Te2 = se3;

// https://esm.sh/v132/@radix-ui/react-alert-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-alert-dialog.mjs
var h6 = "AlertDialog";
var [k4, aa] = _(h6, [Ee2]);
var c6 = Ee2();
var T3 = (e5) => {
  let { __scopeAlertDialog: o7, ...a3 } = e5, t3 = c6(o7);
  return re(Pe2, p3({}, t3, a3, { modal: true }));
};
var M6 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, ...t3 } = e5, r7 = c6(a3);
  return re(ye2, p3({}, r7, t3, { ref: o7 }));
});
var j4 = (e5) => {
  let { __scopeAlertDialog: o7, ...a3 } = e5, t3 = c6(o7);
  return re(Ne2, p3({}, t3, a3));
};
var I7 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, ...t3 } = e5, r7 = c6(a3);
  return re(Ie, p3({}, r7, t3, { ref: o7 }));
});
var A5 = "AlertDialogContent";
var [w7, L4] = k4(A5);
var F6 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, children: t3, ...r7 } = e5, $4 = c6(a3), p6 = L(null), m8 = u2(o7, p6), g5 = L(null);
  return re(he3, { contentName: A5, titleName: G4, docsSlug: "alert-dialog" }, re(w7, { scope: a3, cancelRef: g5 }, re(Ae, p3({ role: "alertdialog" }, $4, r7, { ref: m8, onOpenAutoFocus: o3(r7.onOpenAutoFocus, (i4) => {
    var f6;
    i4.preventDefault(), (f6 = g5.current) === null || f6 === void 0 || f6.focus({ preventScroll: true });
  }), onPointerDownOutside: (i4) => i4.preventDefault(), onInteractOutside: (i4) => i4.preventDefault() }), re(y3, null, t3), false)));
});
var G4 = "AlertDialogTitle";
var W6 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, ...t3 } = e5, r7 = c6(a3);
  return re(He, p3({}, r7, t3, { ref: o7 }));
});
var H4 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, ...t3 } = e5, r7 = c6(a3);
  return re(Me, p3({}, r7, t3, { ref: o7 }));
});
var Y4 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, ...t3 } = e5, r7 = c6(a3);
  return re(Te2, p3({}, r7, t3, { ref: o7 }));
});
var q6 = "AlertDialogCancel";
var B3 = ee2((e5, o7) => {
  let { __scopeAlertDialog: a3, ...t3 } = e5, { cancelRef: r7 } = L4(q6, a3), $4 = c6(a3), p6 = u2(o7, r7);
  return re(Te2, p3({}, $4, t3, { ref: p6 }));
});
var ea = T3;
var oa = M6;
var ta = j4;
var ra = I7;
var sa = F6;
var na = Y4;
var ca = B3;
var la = W6;
var ia = H4;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o6(r7) {
  var f6, n3, t3 = "";
  if (typeof r7 == "string" || typeof r7 == "number")
    t3 += r7;
  else if (typeof r7 == "object")
    if (Array.isArray(r7))
      for (f6 = 0; f6 < r7.length; f6++)
        r7[f6] && (n3 = o6(r7[f6])) && (t3 && (t3 += " "), t3 += n3);
    else
      for (f6 in r7)
        r7[f6] && (t3 && (t3 += " "), t3 += f6);
  return t3;
}
function e4() {
  for (var r7, f6, n3 = 0, t3 = ""; n3 < arguments.length; )
    (r7 = arguments[n3++]) && (f6 = o6(r7)) && (t3 && (t3 += " "), t3 += f6);
  return t3;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r7, e5) => {
  for (var t3 in e5)
    Ar(r7, t3, { get: e5[t3], enumerable: true });
};
function U4() {
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
var Z4 = "-";
function ur(r7) {
  var e5 = Sr(r7), t3 = r7.conflictingClassGroups, o7 = r7.conflictingClassGroupModifiers, a3 = o7 === void 0 ? {} : o7;
  function s4(i4) {
    var c7 = i4.split(Z4);
    return c7[0] === "" && c7.length !== 1 && c7.shift(), pr(c7, e5) || kr(i4);
  }
  function n3(i4, c7) {
    var u5 = t3[i4] || [];
    return c7 && a3[i4] ? [].concat(u5, a3[i4]) : u5;
  }
  return { getClassGroupId: s4, getConflictingClassGroupIds: n3 };
}
function pr(r7, e5) {
  if (r7.length === 0)
    return e5.classGroupId;
  var t3 = r7[0], o7 = e5.nextPart.get(t3), a3 = o7 ? pr(r7.slice(1), o7) : void 0;
  if (a3)
    return a3;
  if (e5.validators.length !== 0) {
    var s4 = r7.join(Z4);
    return e5.validators.find(function(n3) {
      var i4 = n3.validator;
      return i4(s4);
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
  var e5 = r7.theme, t3 = r7.prefix, o7 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a3 = Gr(Object.entries(r7.classGroups), t3);
  return a3.forEach(function(s4) {
    var n3 = s4[0], i4 = s4[1];
    q7(i4, o7, n3, e5);
  }), o7;
}
function q7(r7, e5, t3, o7) {
  r7.forEach(function(a3) {
    if (typeof a3 == "string") {
      var s4 = a3 === "" ? e5 : cr(e5, a3);
      s4.classGroupId = t3;
      return;
    }
    if (typeof a3 == "function") {
      if (zr(a3)) {
        q7(a3(o7), e5, t3, o7);
        return;
      }
      e5.validators.push({ validator: a3, classGroupId: t3 });
      return;
    }
    Object.entries(a3).forEach(function(n3) {
      var i4 = n3[0], c7 = n3[1];
      q7(c7, cr(e5, i4), t3, o7);
    });
  });
}
function cr(r7, e5) {
  var t3 = r7;
  return e5.split(Z4).forEach(function(o7) {
    t3.nextPart.has(o7) || t3.nextPart.set(o7, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t3 = t3.nextPart.get(o7);
  }), t3;
}
function zr(r7) {
  return r7.isThemeGetter;
}
function Gr(r7, e5) {
  return e5 ? r7.map(function(t3) {
    var o7 = t3[0], a3 = t3[1], s4 = a3.map(function(n3) {
      return typeof n3 == "string" ? e5 + n3 : typeof n3 == "object" ? Object.fromEntries(Object.entries(n3).map(function(i4) {
        var c7 = i4[0], u5 = i4[1];
        return [e5 + c7, u5];
      })) : n3;
    });
    return [o7, s4];
  }) : r7;
}
function fr(r7) {
  if (r7 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e5 = 0, t3 = /* @__PURE__ */ new Map(), o7 = /* @__PURE__ */ new Map();
  function a3(s4, n3) {
    t3.set(s4, n3), e5++, e5 > r7 && (e5 = 0, o7 = t3, t3 = /* @__PURE__ */ new Map());
  }
  return { get: function(n3) {
    var i4 = t3.get(n3);
    if (i4 !== void 0)
      return i4;
    if ((i4 = o7.get(n3)) !== void 0)
      return a3(n3, i4), i4;
  }, set: function(n3, i4) {
    t3.has(n3) ? t3.set(n3, i4) : a3(n3, i4);
  } };
}
var X7 = "!";
function br(r7) {
  var e5 = r7.separator || ":", t3 = e5.length === 1, o7 = e5[0], a3 = e5.length;
  return function(n3) {
    for (var i4 = [], c7 = 0, u5 = 0, b9, f6 = 0; f6 < n3.length; f6++) {
      var g5 = n3[f6];
      if (c7 === 0) {
        if (g5 === o7 && (t3 || n3.slice(f6, f6 + a3) === e5)) {
          i4.push(n3.slice(u5, f6)), u5 = f6 + a3;
          continue;
        }
        if (g5 === "/") {
          b9 = f6;
          continue;
        }
      }
      g5 === "[" ? c7++ : g5 === "]" && c7--;
    }
    var y7 = i4.length === 0 ? n3 : n3.substring(u5), x9 = y7.startsWith(X7), m8 = x9 ? y7.substring(1) : y7, w8 = b9 && b9 > u5 ? b9 - u5 : void 0;
    return { modifiers: i4, hasImportantModifier: x9, baseClassName: m8, maybePostfixModifierPosition: w8 };
  };
}
function gr(r7) {
  if (r7.length <= 1)
    return r7;
  var e5 = [], t3 = [];
  return r7.forEach(function(o7) {
    var a3 = o7[0] === "[";
    a3 ? (e5.push.apply(e5, t3.sort().concat([o7])), t3 = []) : t3.push(o7);
  }), e5.push.apply(e5, t3.sort()), e5;
}
function mr(r7) {
  return { cache: fr(r7.cacheSize), splitModifiers: br(r7), ...ur(r7) };
}
var Ir = /\s+/;
function vr(r7, e5) {
  var t3 = e5.splitModifiers, o7 = e5.getClassGroupId, a3 = e5.getConflictingClassGroupIds, s4 = /* @__PURE__ */ new Set();
  return r7.trim().split(Ir).map(function(n3) {
    var i4 = t3(n3), c7 = i4.modifiers, u5 = i4.hasImportantModifier, b9 = i4.baseClassName, f6 = i4.maybePostfixModifierPosition, g5 = o7(f6 ? b9.substring(0, f6) : b9), y7 = !!f6;
    if (!g5) {
      if (!f6)
        return { isTailwindClass: false, originalClassName: n3 };
      if (g5 = o7(b9), !g5)
        return { isTailwindClass: false, originalClassName: n3 };
      y7 = false;
    }
    var x9 = gr(c7).join(":"), m8 = u5 ? x9 + X7 : x9;
    return { isTailwindClass: true, modifierId: m8, classGroupId: g5, originalClassName: n3, hasPostfixModifier: y7 };
  }).reverse().filter(function(n3) {
    if (!n3.isTailwindClass)
      return true;
    var i4 = n3.modifierId, c7 = n3.classGroupId, u5 = n3.hasPostfixModifier, b9 = i4 + c7;
    return s4.has(b9) ? false : (s4.add(b9), a3(c7, u5).forEach(function(f6) {
      return s4.add(i4 + f6);
    }), true);
  }).reverse().map(function(n3) {
    return n3.originalClassName;
  }).join(" ");
}
function P6() {
  for (var r7 = arguments.length, e5 = new Array(r7), t3 = 0; t3 < r7; t3++)
    e5[t3] = arguments[t3];
  var o7, a3, s4, n3 = i4;
  function i4(u5) {
    var b9 = e5[0], f6 = e5.slice(1), g5 = f6.reduce(function(y7, x9) {
      return x9(y7);
    }, b9());
    return o7 = mr(g5), a3 = o7.cache.get, s4 = o7.cache.set, n3 = c7, c7(u5);
  }
  function c7(u5) {
    var b9 = a3(u5);
    if (b9)
      return b9;
    var f6 = vr(u5, o7);
    return s4(u5, f6), f6;
  }
  return function() {
    return n3(U4.apply(null, arguments));
  };
}
function d8(r7) {
  var e5 = function(o7) {
    return o7[r7] || [];
  };
  return e5.isThemeGetter = true, e5;
}
var wr = {};
Mr(wr, { isAny: () => G5, isArbitraryLength: () => L5, isArbitraryNumber: () => S7, isArbitraryPosition: () => Q8, isArbitraryShadow: () => D5, isArbitrarySize: () => H5, isArbitraryUrl: () => V7, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z5, isLength: () => h7, isNumber: () => M7, isPercent: () => Y5, isTshirtSize: () => C6 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h7(r7) {
  return M7(r7) || Tr.has(r7) || Pr.test(r7) || L5(r7);
}
function L5(r7) {
  return I8(r7, "length", Er);
}
function H5(r7) {
  return I8(r7, "size", xr);
}
function Q8(r7) {
  return I8(r7, "position", xr);
}
function V7(r7) {
  return I8(r7, "url", jr);
}
function S7(r7) {
  return I8(r7, "number", M7);
}
var Wr = S7;
function M7(r7) {
  return !Number.isNaN(Number(r7));
}
function Y5(r7) {
  return r7.endsWith("%") && M7(r7.slice(0, -1));
}
function z5(r7) {
  return hr(r7) || I8(r7, "number", hr);
}
function l3(r7) {
  return yr.test(r7);
}
function G5() {
  return true;
}
function C6(r7) {
  return Rr.test(r7);
}
function D5(r7) {
  return I8(r7, "", Ur);
}
function I8(r7, e5, t3) {
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
function T4() {
  var r7 = d8("colors"), e5 = d8("spacing"), t3 = d8("blur"), o7 = d8("brightness"), a3 = d8("borderColor"), s4 = d8("borderRadius"), n3 = d8("borderSpacing"), i4 = d8("borderWidth"), c7 = d8("contrast"), u5 = d8("grayscale"), b9 = d8("hueRotate"), f6 = d8("invert"), g5 = d8("gap"), y7 = d8("gradientColorStops"), x9 = d8("gradientColorStopPositions"), m8 = d8("inset"), w8 = d8("margin"), k5 = d8("opacity"), A6 = d8("padding"), K4 = d8("saturate"), O7 = d8("scale"), rr = d8("sepia"), er = d8("skew"), tr = d8("space"), or = d8("translate"), $4 = function() {
    return ["auto", "contain", "none"];
  }, B4 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F7 = function() {
    return ["auto", l3, e5];
  }, p6 = function() {
    return [l3, e5];
  }, nr = function() {
    return ["", h7];
  }, W7 = function() {
    return ["auto", M7, l3];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E8 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J5 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R5 = function() {
    return ["", "0", l3];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N5 = function() {
    return [M7, S7];
  }, j5 = function() {
    return [M7, l3];
  };
  return { cacheSize: 500, theme: { colors: [G5], spacing: [h7], blur: ["none", "", C6, l3], brightness: N5(), borderColor: [r7], borderRadius: ["none", "", "full", C6, l3], borderSpacing: p6(), borderWidth: nr(), contrast: N5(), grayscale: R5(), hueRotate: j5(), invert: R5(), gap: p6(), gradientColorStops: [r7], gradientColorStopPositions: [Y5, L5], inset: F7(), margin: F7(), opacity: N5(), padding: p6(), saturate: N5(), scale: N5(), sepia: R5(), skew: j5(), space: p6(), translate: p6() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C6] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B4() }], "overflow-x": [{ "overflow-x": B4() }], "overflow-y": [{ "overflow-y": B4() }], overscroll: [{ overscroll: $4() }], "overscroll-x": [{ "overscroll-x": $4() }], "overscroll-y": [{ "overscroll-y": $4() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m8] }], "inset-x": [{ "inset-x": [m8] }], "inset-y": [{ "inset-y": [m8] }], start: [{ start: [m8] }], end: [{ end: [m8] }], top: [{ top: [m8] }], right: [{ right: [m8] }], bottom: [{ bottom: [m8] }], left: [{ left: [m8] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z5] }], basis: [{ basis: F7() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R5() }], shrink: [{ shrink: R5() }], order: [{ order: ["first", "last", "none", z5] }], "grid-cols": [{ "grid-cols": [G5] }], "col-start-end": [{ col: ["auto", { span: ["full", z5] }, l3] }], "col-start": [{ "col-start": W7() }], "col-end": [{ "col-end": W7() }], "grid-rows": [{ "grid-rows": [G5] }], "row-start-end": [{ row: ["auto", { span: [z5] }, l3] }], "row-start": [{ "row-start": W7() }], "row-end": [{ "row-end": W7() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g5] }], "gap-x": [{ "gap-x": [g5] }], "gap-y": [{ "gap-y": [g5] }], "justify-content": [{ justify: ["normal"].concat(J5()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J5(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J5(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A6] }], px: [{ px: [A6] }], py: [{ py: [A6] }], ps: [{ ps: [A6] }], pe: [{ pe: [A6] }], pt: [{ pt: [A6] }], pr: [{ pr: [A6] }], pb: [{ pb: [A6] }], pl: [{ pl: [A6] }], m: [{ m: [w8] }], mx: [{ mx: [w8] }], my: [{ my: [w8] }], ms: [{ ms: [w8] }], me: [{ me: [w8] }], mt: [{ mt: [w8] }], mr: [{ mr: [w8] }], mb: [{ mb: [w8] }], ml: [{ ml: [w8] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e5] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h7] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C6] }, C6, l3] }], h: [{ h: [l3, e5, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h7] }], "max-h": [{ "max-h": [l3, e5, "min", "max", "fit"] }], "font-size": [{ text: ["base", C6, L5] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S7] }], "font-family": [{ font: [G5] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M7, S7] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h7] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r7] }], "placeholder-opacity": [{ "placeholder-opacity": [k5] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r7] }], "text-opacity": [{ "text-opacity": [k5] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E8(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h7] }], "underline-offset": [{ "underline-offset": ["auto", l3, h7] }], "text-decoration-color": [{ decoration: [r7] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p6() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k5] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q8]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H5] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V7] }], "bg-color": [{ bg: [r7] }], "gradient-from-pos": [{ from: [x9] }], "gradient-via-pos": [{ via: [x9] }], "gradient-to-pos": [{ to: [x9] }], "gradient-from": [{ from: [y7] }], "gradient-via": [{ via: [y7] }], "gradient-to": [{ to: [y7] }], rounded: [{ rounded: [s4] }], "rounded-s": [{ "rounded-s": [s4] }], "rounded-e": [{ "rounded-e": [s4] }], "rounded-t": [{ "rounded-t": [s4] }], "rounded-r": [{ "rounded-r": [s4] }], "rounded-b": [{ "rounded-b": [s4] }], "rounded-l": [{ "rounded-l": [s4] }], "rounded-ss": [{ "rounded-ss": [s4] }], "rounded-se": [{ "rounded-se": [s4] }], "rounded-ee": [{ "rounded-ee": [s4] }], "rounded-es": [{ "rounded-es": [s4] }], "rounded-tl": [{ "rounded-tl": [s4] }], "rounded-tr": [{ "rounded-tr": [s4] }], "rounded-br": [{ "rounded-br": [s4] }], "rounded-bl": [{ "rounded-bl": [s4] }], "border-w": [{ border: [i4] }], "border-w-x": [{ "border-x": [i4] }], "border-w-y": [{ "border-y": [i4] }], "border-w-s": [{ "border-s": [i4] }], "border-w-e": [{ "border-e": [i4] }], "border-w-t": [{ "border-t": [i4] }], "border-w-r": [{ "border-r": [i4] }], "border-w-b": [{ "border-b": [i4] }], "border-w-l": [{ "border-l": [i4] }], "border-opacity": [{ "border-opacity": [k5] }], "border-style": [{ border: [].concat(E8(), ["hidden"]) }], "divide-x": [{ "divide-x": [i4] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i4] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k5] }], "divide-style": [{ divide: E8() }], "border-color": [{ border: [a3] }], "border-color-x": [{ "border-x": [a3] }], "border-color-y": [{ "border-y": [a3] }], "border-color-t": [{ "border-t": [a3] }], "border-color-r": [{ "border-r": [a3] }], "border-color-b": [{ "border-b": [a3] }], "border-color-l": [{ "border-l": [a3] }], "divide-color": [{ divide: [a3] }], "outline-style": [{ outline: [""].concat(E8()) }], "outline-offset": [{ "outline-offset": [l3, h7] }], "outline-w": [{ outline: [h7] }], "outline-color": [{ outline: [r7] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r7] }], "ring-opacity": [{ "ring-opacity": [k5] }], "ring-offset-w": [{ "ring-offset": [h7] }], "ring-offset-color": [{ "ring-offset": [r7] }], shadow: [{ shadow: ["", "inner", "none", C6, D5] }], "shadow-color": [{ shadow: [G5] }], opacity: [{ opacity: [k5] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t3] }], brightness: [{ brightness: [o7] }], contrast: [{ contrast: [c7] }], "drop-shadow": [{ "drop-shadow": ["", "none", C6, l3] }], grayscale: [{ grayscale: [u5] }], "hue-rotate": [{ "hue-rotate": [b9] }], invert: [{ invert: [f6] }], saturate: [{ saturate: [K4] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t3] }], "backdrop-brightness": [{ "backdrop-brightness": [o7] }], "backdrop-contrast": [{ "backdrop-contrast": [c7] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u5] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b9] }], "backdrop-invert": [{ "backdrop-invert": [f6] }], "backdrop-opacity": [{ "backdrop-opacity": [k5] }], "backdrop-saturate": [{ "backdrop-saturate": [K4] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n3] }], "border-spacing-x": [{ "border-spacing-x": [n3] }], "border-spacing-y": [{ "border-spacing-y": [n3] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j5() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j5() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O7] }], "scale-x": [{ "scale-x": [O7] }], "scale-y": [{ "scale-y": [O7] }], rotate: [{ rotate: [z5, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r7] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r7] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p6() }], "scroll-mx": [{ "scroll-mx": p6() }], "scroll-my": [{ "scroll-my": p6() }], "scroll-ms": [{ "scroll-ms": p6() }], "scroll-me": [{ "scroll-me": p6() }], "scroll-mt": [{ "scroll-mt": p6() }], "scroll-mr": [{ "scroll-mr": p6() }], "scroll-mb": [{ "scroll-mb": p6() }], "scroll-ml": [{ "scroll-ml": p6() }], "scroll-p": [{ "scroll-p": p6() }], "scroll-px": [{ "scroll-px": p6() }], "scroll-py": [{ "scroll-py": p6() }], "scroll-ps": [{ "scroll-ps": p6() }], "scroll-pe": [{ "scroll-pe": p6() }], "scroll-pt": [{ "scroll-pt": p6() }], "scroll-pr": [{ "scroll-pr": p6() }], "scroll-pb": [{ "scroll-pb": p6() }], "scroll-pl": [{ "scroll-pl": p6() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r7, "none"] }], "stroke-w": [{ stroke: [h7, S7] }], stroke: [{ stroke: [r7, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P6(T4);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e4(inputs));
}

// https://esm.sh/v132/class-variance-authority@0.7.0/denonext/class-variance-authority.mjs
var m7 = (n3) => typeof n3 == "boolean" ? "".concat(n3) : n3 === 0 ? "0" : n3;
var y6 = e4;
var b8 = (n3, l4) => (t3) => {
  var r7;
  if (l4?.variants == null)
    return y6(n3, t3?.class, t3?.className);
  let { variants: o7, defaultVariants: d10 } = l4, N5 = Object.keys(o7).map((e5) => {
    let a3 = t3?.[e5], u5 = d10?.[e5];
    if (a3 === null)
      return null;
    let i4 = m7(a3) || m7(u5);
    return o7[e5][i4];
  }), v3 = t3 && Object.entries(t3).reduce((e5, a3) => {
    let [u5, i4] = a3;
    return i4 === void 0 || (e5[u5] = i4), e5;
  }, {}), V8 = l4 == null || (r7 = l4.compoundVariants) === null || r7 === void 0 ? void 0 : r7.reduce((e5, a3) => {
    let { class: u5, className: i4, ...f6 } = a3;
    return Object.entries(f6).every((C7) => {
      let [c7, s4] = C7;
      return Array.isArray(s4) ? s4.includes({ ...d10, ...v3 }[c7]) : { ...d10, ...v3 }[c7] === s4;
    }) ? [...e5, u5, i4] : e5;
  }, []);
  return y6(n3, N5, V8, t3?.class, t3?.className);
};

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d9 = 0;
var x8 = Array.isArray;
function g4(t3, r7, e5, a3, o7, i4) {
  var s4, n3, f6 = {};
  for (n3 in r7)
    n3 == "ref" ? s4 = r7[n3] : f6[n3] = r7[n3];
  var u5 = { type: t3, props: f6, key: e5, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d9, __i: -1, __u: 0, __source: o7, __self: i4 };
  if (typeof t3 == "function" && (s4 = t3.defaultProps))
    for (n3 in s4)
      f6[n3] === void 0 && (f6[n3] = s4[n3]);
  return a.vnode && a.vnode(u5), u5;
}

// ../components/ui/button.tsx
var buttonVariants = b8(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-transform active:scale-97",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = ee2(
  ({ class: className, variant, size, ...props }, ref) => {
    return /* @__PURE__ */ g4(
      "button",
      {
        class: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// ../components/ui/alert-dialog.tsx
var AlertDialog = ea;
var AlertDialogTrigger = oa;
var AlertDialogPortal = ({ class: className, children, ...props }) => /* @__PURE__ */ g4(ta, { className: cn(className), ...props, children: /* @__PURE__ */ g4("div", { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", children }) });
AlertDialogPortal.displayName = ta.displayName;
var AlertDialogOverlay = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g4(
  ra,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = ra.displayName;
var AlertDialogContent = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g4(AlertDialogPortal, { children: [
  /* @__PURE__ */ g4(AlertDialogOverlay, {}),
  /* @__PURE__ */ g4(
    sa,
    {
      ref,
      className: cn(
        "fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = sa.displayName;
var AlertDialogHeader = ({ class: className, ...props }) => /* @__PURE__ */ g4("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ class: className, ...props }) => /* @__PURE__ */ g4("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g4(la, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = la.displayName;
var AlertDialogDescription = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g4(ia, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = ia.displayName;
var AlertDialogAction = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g4(na, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = na.displayName;
var AlertDialogCancel = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g4(
  ca,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = ca.displayName;
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
};
