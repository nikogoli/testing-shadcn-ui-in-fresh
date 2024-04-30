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
  var i4, n4, r5, l4 = {};
  for (r5 in _3)
    r5 == "key" ? i4 = _3[r5] : r5 == "ref" ? n4 = _3[r5] : l4[r5] = _3[r5];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t3), typeof e3 == "function" && e3.defaultProps != null)
    for (r5 in e3.defaultProps)
      l4[r5] === void 0 && (l4[r5] = e3.defaultProps[r5]);
  return S(e3, l4, i4, n4, null);
}
function S(e3, _3, t3, i4, n4) {
  var r5 = { type: e3, props: _3, key: t3, ref: i4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n4 ?? ++Q, __i: -1, __u: 0 };
  return n4 == null && a.vnode != null && a.vnode(r5), r5;
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
  var i4, n4 = e3.__v, r5 = n4.__e, l4 = e3.__P;
  if (l4)
    return (i4 = b({}, n4)).__v = n4.__v + 1, a.vnode && a.vnode(i4), G(l4, i4, n4, e3.__n, l4.ownerSVGElement !== void 0, 32 & n4.__u ? [r5] : null, _3, r5 ?? w(n4), !!(32 & n4.__u), t3), i4.__v = n4.__v, i4.__.__k[i4.__i] = i4, i4.__d = void 0, i4.__e != r5 && ee(i4), i4;
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
  var e3, _3, t3, i4 = [], n4 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t3 = x.length, _3 = ie(e3, i4, n4) || _3, t3 === 0 || x.length > t3 ? (R(i4, _3, n4), n4.length = i4.length = 0, _3 = void 0, x.sort($)) : _3 && a.__c && a.__c(_3, O));
  _3 && R(i4, _3, n4), A.__r = 0;
}
function _e(e3, _3, t3, i4, n4, r5, l4, u5, c2, s2, p4) {
  var o5, m3, f2, h4, k3, v2 = i4 && i4.__k || O, d7 = _3.length;
  for (t3.__d = c2, le(t3, _3, v2), c2 = t3.__d, o5 = 0; o5 < d7; o5++)
    (f2 = t3.__k[o5]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m3 = f2.__i === -1 ? E : v2[f2.__i] || E, f2.__i = o5, G(e3, f2, m3, n4, r5, l4, u5, c2, s2, p4), h4 = f2.__e, f2.ref && m3.ref != f2.ref && (m3.ref && V(m3.ref, null, f2), p4.push(f2.ref, f2.__c || h4, f2)), k3 == null && h4 != null && (k3 = h4), 65536 & f2.__u || m3.__k === f2.__k ? c2 = te(f2, c2, e3) : typeof f2.type == "function" && f2.__d !== void 0 ? c2 = f2.__d : h4 && (c2 = h4.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t3.__d = c2, t3.__e = k3;
}
function le(e3, _3, t3) {
  var i4, n4, r5, l4, u5, c2 = _3.length, s2 = t3.length, p4 = s2, o5 = 0;
  for (e3.__k = [], i4 = 0; i4 < c2; i4++)
    l4 = i4 + o5, (n4 = e3.__k[i4] = (n4 = _3[i4]) == null || typeof n4 == "boolean" || typeof n4 == "function" ? null : typeof n4 == "string" || typeof n4 == "number" || typeof n4 == "bigint" || n4.constructor == String ? S(null, n4, null, null, null) : F(n4) ? S(H, { children: n4 }, null, null, null) : n4.constructor === void 0 && n4.__b > 0 ? S(n4.type, n4.props, n4.key, n4.ref ? n4.ref : null, n4.__v) : n4) != null ? (n4.__ = e3, n4.__b = e3.__b + 1, u5 = ue(n4, t3, l4, p4), n4.__i = u5, r5 = null, u5 !== -1 && (p4--, (r5 = t3[u5]) && (r5.__u |= 131072)), r5 == null || r5.__v === null ? (u5 == -1 && o5--, typeof n4.type != "function" && (n4.__u |= 65536)) : u5 !== l4 && (u5 === l4 + 1 ? o5++ : u5 > l4 ? p4 > c2 - l4 ? o5 += u5 - l4 : o5-- : u5 < l4 ? u5 == l4 - 1 && (o5 = u5 - l4) : o5 = 0, u5 !== i4 + o5 && (n4.__u |= 65536))) : (r5 = t3[l4]) && r5.key == null && r5.__e && !(131072 & r5.__u) && (r5.__e == e3.__d && (e3.__d = w(r5)), B(r5, r5, false), t3[l4] = null, p4--);
  if (p4)
    for (i4 = 0; i4 < s2; i4++)
      (r5 = t3[i4]) != null && !(131072 & r5.__u) && (r5.__e == e3.__d && (e3.__d = w(r5)), B(r5, r5));
}
function te(e3, _3, t3) {
  var i4, n4;
  if (typeof e3.type == "function") {
    for (i4 = e3.__k, n4 = 0; i4 && n4 < i4.length; n4++)
      i4[n4] && (i4[n4].__ = e3, _3 = te(i4[n4], _3, t3));
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
function ue(e3, _3, t3, i4) {
  var n4 = e3.key, r5 = e3.type, l4 = t3 - 1, u5 = t3 + 1, c2 = _3[t3];
  if (c2 === null || c2 && n4 == c2.key && r5 === c2.type && !(131072 & c2.__u))
    return t3;
  if (i4 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l4 >= 0 || u5 < _3.length; ) {
      if (l4 >= 0) {
        if ((c2 = _3[l4]) && !(131072 & c2.__u) && n4 == c2.key && r5 === c2.type)
          return l4;
        l4--;
      }
      if (u5 < _3.length) {
        if ((c2 = _3[u5]) && !(131072 & c2.__u) && n4 == c2.key && r5 === c2.type)
          return u5;
        u5++;
      }
    }
  return -1;
}
function q(e3, _3, t3) {
  _3[0] === "-" ? e3.setProperty(_3, t3 ?? "") : e3[_3] = t3 == null ? "" : typeof t3 != "number" || oe.test(_3) ? t3 : t3 + "px";
}
function M(e3, _3, t3, i4, n4) {
  var r5;
  e:
    if (_3 === "style")
      if (typeof t3 == "string")
        e3.style.cssText = t3;
      else {
        if (typeof i4 == "string" && (e3.style.cssText = i4 = ""), i4)
          for (_3 in i4)
            t3 && _3 in t3 || q(e3.style, _3, "");
        if (t3)
          for (_3 in t3)
            i4 && t3[_3] === i4[_3] || q(e3.style, _3, t3[_3]);
      }
    else if (_3[0] === "o" && _3[1] === "n")
      r5 = _3 !== (_3 = _3.replace(/(PointerCapture)$|Capture$/i, "$1")), _3 = _3.toLowerCase() in e3 ? _3.toLowerCase().slice(2) : _3.slice(2), e3.l || (e3.l = {}), e3.l[_3 + r5] = t3, t3 ? i4 ? t3.u = i4.u : (t3.u = Date.now(), e3.addEventListener(_3, r5 ? K : J, r5)) : e3.removeEventListener(_3, r5 ? K : J, r5);
    else {
      if (n4)
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
function G(e3, _3, t3, i4, n4, r5, l4, u5, c2, s2) {
  var p4, o5, m3, f2, h4, k3, v2, d7, y6, C5, T4, P4, j3, U5, N2, g4 = _3.type;
  if (_3.constructor !== void 0)
    return null;
  128 & t3.__u && (c2 = !!(32 & t3.__u), r5 = [u5 = _3.__e = t3.__e]), (p4 = a.__b) && p4(_3);
  e:
    if (typeof g4 == "function")
      try {
        if (d7 = _3.props, y6 = (p4 = g4.contextType) && i4[p4.__c], C5 = p4 ? y6 ? y6.props.value : p4.__ : i4, t3.__c ? v2 = (o5 = _3.__c = t3.__c).__ = o5.__E : ("prototype" in g4 && g4.prototype.render ? _3.__c = o5 = new g4(d7, C5) : (_3.__c = o5 = new W(d7, C5), o5.constructor = g4, o5.render = ce), y6 && y6.sub(o5), o5.props = d7, o5.state || (o5.state = {}), o5.context = C5, o5.__n = i4, m3 = o5.__d = true, o5.__h = [], o5._sb = []), o5.__s == null && (o5.__s = o5.state), g4.getDerivedStateFromProps != null && (o5.__s == o5.state && (o5.__s = b({}, o5.__s)), b(o5.__s, g4.getDerivedStateFromProps(d7, o5.__s))), f2 = o5.props, h4 = o5.state, o5.__v = _3, m3)
          g4.getDerivedStateFromProps == null && o5.componentWillMount != null && o5.componentWillMount(), o5.componentDidMount != null && o5.__h.push(o5.componentDidMount);
        else {
          if (g4.getDerivedStateFromProps == null && d7 !== f2 && o5.componentWillReceiveProps != null && o5.componentWillReceiveProps(d7, C5), !o5.__e && (o5.shouldComponentUpdate != null && o5.shouldComponentUpdate(d7, o5.__s, C5) === false || _3.__v === t3.__v)) {
            for (_3.__v !== t3.__v && (o5.props = d7, o5.state = o5.__s, o5.__d = false), _3.__e = t3.__e, _3.__k = t3.__k, _3.__k.forEach(function(L5) {
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
        o5.state = o5.__s, o5.getChildContext != null && (i4 = b(b({}, i4), o5.getChildContext())), m3 || o5.getSnapshotBeforeUpdate == null || (k3 = o5.getSnapshotBeforeUpdate(f2, h4)), _e(e3, F(N2 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N2 : [N2], _3, t3, i4, n4, r5, l4, u5, c2, s2), o5.base = _3.__e, _3.__u &= -161, o5.__h.length && l4.push(o5), v2 && (o5.__E = o5.__ = null);
      } catch (L5) {
        _3.__v = null, c2 || r5 != null ? (_3.__e = u5, _3.__u |= c2 ? 160 : 32, r5[r5.indexOf(u5)] = null) : (_3.__e = t3.__e, _3.__k = t3.__k), a.__e(L5, _3, t3);
      }
    else
      r5 == null && _3.__v === t3.__v ? (_3.__k = t3.__k, _3.__e = t3.__e) : _3.__e = fe(t3.__e, _3, t3, i4, n4, r5, l4, c2, s2);
  (p4 = a.diffed) && p4(_3);
}
function R(e3, _3, t3) {
  for (var i4 = 0; i4 < t3.length; i4++)
    V(t3[i4], t3[++i4], t3[++i4]);
  a.__c && a.__c(_3, e3), e3.some(function(n4) {
    try {
      e3 = n4.__h, n4.__h = [], e3.some(function(r5) {
        r5.call(n4);
      });
    } catch (r5) {
      a.__e(r5, n4.__v);
    }
  });
}
function fe(e3, _3, t3, i4, n4, r5, l4, u5, c2) {
  var s2, p4, o5, m3, f2, h4, k3, v2 = t3.props, d7 = _3.props, y6 = _3.type;
  if (y6 === "svg" && (n4 = true), r5 != null) {
    for (s2 = 0; s2 < r5.length; s2++)
      if ((f2 = r5[s2]) && "setAttribute" in f2 == !!y6 && (y6 ? f2.localName === y6 : f2.nodeType === 3)) {
        e3 = f2, r5[s2] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y6 === null)
      return document.createTextNode(d7);
    e3 = n4 ? document.createElementNS("http://www.w3.org/2000/svg", y6) : document.createElement(y6, d7.is && d7), r5 = null, u5 = false;
  }
  if (y6 === null)
    v2 === d7 || u5 && e3.data === d7 || (e3.data = d7);
  else {
    if (r5 = r5 && D.call(e3.childNodes), v2 = t3.props || E, !u5 && r5 != null)
      for (v2 = {}, s2 = 0; s2 < e3.attributes.length; s2++)
        v2[(f2 = e3.attributes[s2]).name] = f2.value;
    for (s2 in v2)
      f2 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o5 = f2 : s2 === "key" || s2 in d7 || M(e3, s2, null, f2, n4));
    for (s2 in d7)
      f2 = d7[s2], s2 == "children" ? m3 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h4 = f2 : s2 == "checked" ? k3 = f2 : s2 === "key" || u5 && typeof f2 != "function" || v2[s2] === f2 || M(e3, s2, f2, v2[s2], n4);
    if (p4)
      u5 || o5 && (p4.__html === o5.__html || p4.__html === e3.innerHTML) || (e3.innerHTML = p4.__html), _3.__k = [];
    else if (o5 && (e3.innerHTML = ""), _e(e3, F(m3) ? m3 : [m3], _3, t3, i4, n4 && y6 !== "foreignObject", r5, l4, r5 ? r5[0] : t3.__k && w(t3, 0), u5, c2), r5 != null)
      for (s2 = r5.length; s2--; )
        r5[s2] != null && Z(r5[s2]);
    u5 || (s2 = "value", h4 !== void 0 && (h4 !== e3[s2] || y6 === "progress" && !h4 || y6 === "option" && h4 !== v2[s2]) && M(e3, s2, h4, v2[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e3[s2] && M(e3, s2, k3, v2[s2], false));
  }
  return e3;
}
function V(e3, _3, t3) {
  try {
    typeof e3 == "function" ? e3(_3) : e3.current = _3;
  } catch (i4) {
    a.__e(i4, t3);
  }
}
function B(e3, _3, t3) {
  var i4, n4;
  if (a.unmount && a.unmount(e3), (i4 = e3.ref) && (i4.current && i4.current !== e3.__e || V(i4, null, _3)), (i4 = e3.__c) != null) {
    if (i4.componentWillUnmount)
      try {
        i4.componentWillUnmount();
      } catch (r5) {
        a.__e(r5, _3);
      }
    i4.base = i4.__P = null, e3.__c = void 0;
  }
  if (i4 = e3.__k)
    for (n4 = 0; n4 < i4.length; n4++)
      i4[n4] && B(i4[n4], _3, t3 || typeof e3.type != "function");
  t3 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _3, t3) {
  return this.constructor(e3, t3);
}
function pe(e3, _3, t3) {
  var i4, n4, r5, l4;
  a.__ && a.__(e3, _3), n4 = (i4 = typeof t3 == "function") ? null : t3 && t3.__k || _3.__k, r5 = [], l4 = [], G(_3, e3 = (!i4 && t3 || _3).__k = re(H, null, [e3]), n4 || E, E, _3.ownerSVGElement !== void 0, !i4 && t3 ? [t3] : n4 ? null : _3.firstChild ? D.call(_3.childNodes) : null, r5, !i4 && t3 ? t3 : n4 ? n4.__e : _3.firstChild, i4, l4), e3.__d = void 0, R(r5, e3, l4);
}
function ae(e3, _3) {
  pe(e3, _3, ae);
}
function he(e3, _3, t3) {
  var i4, n4, r5, l4, u5 = b({}, e3.props);
  for (r5 in e3.type && e3.type.defaultProps && (l4 = e3.type.defaultProps), _3)
    r5 == "key" ? i4 = _3[r5] : r5 == "ref" ? n4 = _3[r5] : u5[r5] = _3[r5] === void 0 && l4 !== void 0 ? l4[r5] : _3[r5];
  return arguments.length > 2 && (u5.children = arguments.length > 3 ? D.call(arguments, 2) : t3), S(e3.type, u5, i4 || e3.key, n4 || e3.ref, null);
}
function ve(e3, _3) {
  var t3 = { __c: _3 = "__cC" + Y++, __: e3, Consumer: function(i4, n4) {
    return i4.children(n4);
  }, Provider: function(i4) {
    var n4, r5;
    return this.getChildContext || (n4 = [], (r5 = {})[_3] = this, this.getChildContext = function() {
      return r5;
    }, this.shouldComponentUpdate = function(l4) {
      this.props.value !== l4.value && n4.some(function(u5) {
        u5.__e = true, I(u5);
      });
    }, this.sub = function(l4) {
      n4.push(l4);
      var u5 = l4.componentWillUnmount;
      l4.componentWillUnmount = function() {
        n4.splice(n4.indexOf(l4), 1), u5 && u5.call(l4);
      };
    }), i4.children;
  } };
  return t3.Provider.__ = t3.Consumer.contextType = t3;
}
D = O.slice, a = { __e: function(e3, _3, t3, i4) {
  for (var n4, r5, l4; _3 = _3.__; )
    if ((n4 = _3.__c) && !n4.__)
      try {
        if ((r5 = n4.constructor) && r5.getDerivedStateFromError != null && (n4.setState(r5.getDerivedStateFromError(e3)), l4 = n4.__d), n4.componentDidCatch != null && (n4.componentDidCatch(e3, i4 || {}), l4 = n4.__d), l4)
          return n4.__E = n4;
      } catch (u5) {
        e3 = u5;
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
  var u5 = r.__H || (r.__H = { __: [], __h: [] });
  return t3 >= u5.__.length && u5.__.push({ __V: p }), u5.__[t3];
}
function I2(t3) {
  return v = 1, R2(U, t3);
}
function R2(t3, _3, u5) {
  var n4 = l(c++, 2);
  if (n4.t = t3, !n4.__c && (n4.__ = [u5 ? u5(_3) : U(void 0, _3), function(a2) {
    var f2 = n4.__N ? n4.__N[0] : n4.__[0], s2 = n4.t(f2, a2);
    f2 !== s2 && (n4.__N = [s2, n4.__[1]], n4.__c.setState({}));
  }], n4.__c = r, !r.u)) {
    var i4 = function(a2, f2, s2) {
      if (!n4.__c.__H)
        return true;
      var m3 = n4.__c.__H.__.filter(function(e3) {
        return !!e3.__c;
      });
      if (m3.every(function(e3) {
        return !e3.__N;
      }))
        return !h4 || h4.call(this, a2, f2, s2);
      var V6 = false;
      return m3.forEach(function(e3) {
        if (e3.__N) {
          var P4 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P4 !== e3.__[0] && (V6 = true);
        }
      }), !(!V6 && n4.__c.props === a2) && (!h4 || h4.call(this, a2, f2, s2));
    };
    r.u = true;
    var h4 = r.shouldComponentUpdate, N2 = r.componentWillUpdate;
    r.componentWillUpdate = function(a2, f2, s2) {
      if (this.__e) {
        var m3 = h4;
        h4 = void 0, i4(a2, f2, s2), h4 = m3;
      }
      N2 && N2.call(this, a2, f2, s2);
    }, r.shouldComponentUpdate = i4;
  }
  return n4.__N || n4.__;
}
function z2(t3, _3) {
  var u5 = l(c++, 3);
  !o.__s && y(u5.__H, _3) && (u5.__ = t3, u5.i = _3, r.__H.__h.push(u5));
}
function S2(t3, _3) {
  var u5 = l(c++, 4);
  !o.__s && y(u5.__H, _3) && (u5.__ = t3, u5.i = _3, r.__h.push(u5));
}
function L(t3) {
  return v = 5, T(function() {
    return { current: t3 };
  }, []);
}
function M2(t3, _3, u5) {
  v = 6, S2(function() {
    return typeof t3 == "function" ? (t3(_3()), function() {
      return t3(null);
    }) : t3 ? (t3.current = _3(), function() {
      return t3.current = null;
    }) : void 0;
  }, u5 == null ? u5 : u5.concat(t3));
}
function T(t3, _3) {
  var u5 = l(c++, 7);
  return y(u5.__H, _3) ? (u5.__V = t3(), u5.i = _3, u5.__h = t3, u5.__V) : u5.__;
}
function G2(t3, _3) {
  return v = 8, T(function() {
    return t3;
  }, _3);
}
function J2(t3) {
  var _3 = r.context[t3.__c], u5 = l(c++, 9);
  return u5.c = t3, _3 ? (u5.__ == null && (u5.__ = true, _3.sub(r)), _3.props.value) : t3.__;
}
function K2(t3, _3) {
  o.useDebugValue && o.useDebugValue(_3 ? _3(t3) : t3);
}
function O2(t3) {
  var _3 = l(c++, 10), u5 = I2();
  return _3.__ = t3, r.componentDidCatch || (r.componentDidCatch = function(n4, i4) {
    _3.__ && _3.__(n4, i4), u5[1](n4);
  }), [u5[0], function() {
    u5[1](void 0);
  }];
}
function Q2() {
  var t3 = l(c++, 11);
  if (!t3.__) {
    for (var _3 = r.__v; _3 !== null && !_3.__m && _3.__ !== null; )
      _3 = _3.__;
    var u5 = _3.__m || (_3.__m = [0, 0]);
    t3.__ = "P" + u5[0] + "-" + u5[1]++;
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
  _3 && (H2 === r ? (_3.__h = [], r.__h = [], _3.__.forEach(function(u5) {
    u5.__N && (u5.__ = u5.__N), u5.__V = p, u5.__N = u5.i = void 0;
  })) : (_3.__h.forEach(d), _3.__h.forEach(E2), _3.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t3) {
  A2 && A2(t3);
  var _3 = t3.__c;
  _3 && _3.__H && (_3.__H.__h.length && (x2.push(_3) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _3.__H.__.forEach(function(u5) {
    u5.i && (u5.__H = u5.i), u5.__V !== p && (u5.__ = u5.__V), u5.i = void 0, u5.__V = p;
  })), H2 = r = null;
}, o.__c = function(t3, _3) {
  _3.some(function(u5) {
    try {
      u5.__h.forEach(d), u5.__h = u5.__h.filter(function(n4) {
        return !n4.__ || E2(n4);
      });
    } catch (n4) {
      _3.some(function(i4) {
        i4.__h && (i4.__h = []);
      }), _3 = [], o.__e(n4, u5.__v);
    }
  }), D2 && D2(t3, _3);
}, o.unmount = function(t3) {
  F2 && F2(t3);
  var _3, u5 = t3.__c;
  u5 && u5.__H && (u5.__H.__.forEach(function(n4) {
    try {
      d(n4);
    } catch (i4) {
      _3 = i4;
    }
  }), u5.__H = void 0, _3 && o.__e(_3, u5.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t3) {
  var _3, u5 = function() {
    clearTimeout(n4), q2 && cancelAnimationFrame(_3), setTimeout(t3);
  }, n4 = setTimeout(u5, 100);
  q2 && (_3 = requestAnimationFrame(u5));
}
function d(t3) {
  var _3 = r, u5 = t3.__c;
  typeof u5 == "function" && (t3.__c = void 0, u5()), r = _3;
}
function E2(t3) {
  var _3 = r;
  t3.__c = t3.__(), r = _3;
}
function y(t3, _3) {
  return !t3 || t3.length !== _3.length || _3.some(function(u5, n4) {
    return u5 !== t3[n4];
  });
}
function U(t3, _3) {
  return typeof _3 == "function" ? _3(t3) : _3;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e3, t3) {
  for (var n4 in t3)
    e3[n4] = t3[n4];
  return e3;
}
function b3(e3, t3) {
  for (var n4 in e3)
    if (n4 !== "__source" && !(n4 in t3))
      return true;
  for (var r5 in t3)
    if (r5 !== "__source" && e3[r5] !== t3[r5])
      return true;
  return false;
}
function C2(e3, t3) {
  this.props = e3, this.context = t3;
}
function Q3(e3, t3) {
  function n4(o5) {
    var u5 = this.props.ref, a2 = u5 == o5.ref;
    return !a2 && u5 && (u5.call ? u5(null) : u5.current = null), t3 ? !t3(this.props, o5) || !a2 : b3(this.props, o5);
  }
  function r5(o5) {
    return this.shouldComponentUpdate = n4, re(e3, o5);
  }
  return r5.displayName = "Memo(" + (e3.displayName || e3.name) + ")", r5.prototype.isReactComponent = true, r5.__f = true, r5;
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
  function t3(n4) {
    var r5 = L2({}, n4);
    return delete r5.ref, e3(r5, n4.ref || null);
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
a.__e = function(e3, t3, n4, r5) {
  if (e3.then) {
    for (var o5, u5 = t3; u5 = u5.__; )
      if ((o5 = u5.__c) && o5.__c)
        return t3.__e == null && (t3.__e = n4.__e, t3.__k = n4.__k), o5.__c(e3, t3);
  }
  ne2(e3, t3, n4, r5);
};
var x3 = a.unmount;
function T2(e3, t3, n4) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(r5) {
    typeof r5.__c == "function" && r5.__c();
  }), e3.__c.__H = null), (e3 = L2({}, e3)).__c != null && (e3.__c.__P === n4 && (e3.__c.__P = t3), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(r5) {
    return T2(r5, t3, n4);
  })), e3;
}
function A3(e3, t3, n4) {
  return e3 && n4 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(r5) {
    return A3(r5, t3, n4);
  }), e3.__c && e3.__c.__P === t3 && (e3.__e && n4.appendChild(e3.__e), e3.__c.__e = true, e3.__c.__P = n4)), e3;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e3) {
  var t3 = e3.__.__c;
  return t3 && t3.__a && t3.__a(e3);
}
function re2(e3) {
  var t3, n4, r5;
  function o5(u5) {
    if (t3 || (t3 = e3()).then(function(a2) {
      n4 = a2.default || a2;
    }, function(a2) {
      r5 = a2;
    }), r5)
      throw r5;
    if (!n4)
      throw t3;
    return re(n4, u5);
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
  var n4 = t3.__c, r5 = this;
  r5.t == null && (r5.t = []), r5.t.push(n4);
  var o5 = F3(r5.__v), u5 = false, a2 = function() {
    u5 || (u5 = true, n4.__R = null, o5 ? o5(l4) : l4());
  };
  n4.__R = a2;
  var l4 = function() {
    if (!--r5.__u) {
      if (r5.state.__a) {
        var s2 = r5.state.__a;
        r5.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g4;
      for (r5.setState({ __a: r5.__b = null }); g4 = r5.t.pop(); )
        g4.forceUpdate();
    }
  };
  r5.__u++ || 32 & t3.__u || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), e3.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e3, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var n4 = document.createElement("div"), r5 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n4, r5.__O = r5.__P);
    }
    this.__b = null;
  }
  var o5 = t3.__a && re(H, null, e3.fallback);
  return o5 && (o5.__u &= -33), [re(H, null, t3.__a ? null : e3.children), o5];
};
var k2 = function(e3, t3, n4) {
  if (++n4[1] === n4[0] && e3.o.delete(t3), e3.props.revealOrder && (e3.props.revealOrder[0] !== "t" || !e3.o.size))
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
  var t3 = this, n4 = e3.i;
  t3.componentWillUnmount = function() {
    pe(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== n4 && t3.componentWillUnmount(), t3.l || (t3.i = n4, t3.l = { nodeType: 1, parentNode: n4, childNodes: [], appendChild: function(r5) {
    this.childNodes.push(r5), t3.i.appendChild(r5);
  }, insertBefore: function(r5, o5) {
    this.childNodes.push(r5), t3.i.appendChild(r5);
  }, removeChild: function(r5) {
    this.childNodes.splice(this.childNodes.indexOf(r5) >>> 1, 1), t3.i.removeChild(r5);
  } }), pe(re(oe2, { context: t3.context }, e3.__v), t3.l);
}
function ae2(e3, t3) {
  var n4 = re(ue2, { __v: e3, i: t3 });
  return n4.containerInfo = t3, n4;
}
(p2.prototype = new W()).__a = function(e3) {
  var t3 = this, n4 = F3(t3.__v), r5 = t3.o.get(e3);
  return r5[0]++, function(o5) {
    var u5 = function() {
      t3.props.revealOrder ? (r5.push(o5), k2(t3, e3, r5)) : o5();
    };
    n4 ? n4(u5) : u5();
  };
}, p2.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = se(e3.children);
  e3.revealOrder && e3.revealOrder[0] === "b" && t3.reverse();
  for (var n4 = t3.length; n4--; )
    this.o.set(t3[n4], this.u = [1, 0, this.u]);
  return e3.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t3, n4) {
    k2(e3, n4, t3);
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
function fe2(e3, t3, n4) {
  return t3.__k == null && (t3.textContent = ""), pe(e3, t3), typeof n4 == "function" && n4(), e3 ? e3.__c : null;
}
function pe2(e3, t3, n4) {
  return ae(e3, t3), typeof n4 == "function" && n4(), e3 ? e3.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e3) {
  Object.defineProperty(W.prototype, e3, { configurable: true, get: function() {
    return this["UNSAFE_" + e3];
  }, set: function(t3) {
    Object.defineProperty(this, e3, { configurable: true, writable: true, value: t3 });
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
  typeof e3.type == "string" && function(t3) {
    var n4 = t3.props, r5 = t3.type, o5 = {};
    for (var u5 in n4) {
      var a2 = n4[u5];
      if (!(u5 === "value" && "defaultValue" in n4 && a2 == null || _e2 && u5 === "children" && r5 === "noscript" || u5 === "class" || u5 === "className")) {
        var l4 = u5.toLowerCase();
        u5 === "defaultValue" && "value" in n4 && n4.value == null ? u5 = "value" : u5 === "download" && a2 === true ? a2 = "" : l4 === "translate" && a2 === "no" ? a2 = false : l4 === "ondoubleclick" ? u5 = "ondblclick" : l4 !== "onchange" || r5 !== "input" && r5 !== "textarea" || ce2(n4.type) ? l4 === "onfocus" ? u5 = "onfocusin" : l4 === "onblur" ? u5 = "onfocusout" : le2.test(u5) ? u5 = l4 : r5.indexOf("-") === -1 && ie2.test(u5) ? u5 = u5.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l4 = u5 = "oninput", l4 === "oninput" && o5[u5 = l4] && (u5 = "oninputCapture"), o5[u5] = a2;
      }
    }
    r5 == "select" && o5.multiple && Array.isArray(o5.value) && (o5.value = se(n4.children).forEach(function(s2) {
      s2.props.selected = o5.value.indexOf(s2.props.value) != -1;
    })), r5 == "select" && o5.defaultValue != null && (o5.value = se(n4.children).forEach(function(s2) {
      s2.props.selected = o5.multiple ? o5.defaultValue.indexOf(s2.props.value) != -1 : o5.defaultValue == s2.props.value;
    })), n4.class && !n4.className ? (o5.class = n4.class, Object.defineProperty(o5, "className", me)) : (n4.className && !n4.class || n4.class && n4.className) && (o5.class = o5.className = n4.className), t3.props = o5;
  }(e3), e3.$$typeof = V2, P && P(e3);
};
var w2 = a.__r;
a.__r = function(e3) {
  w2 && w2(e3), S3 = e3.__c;
};
var U2 = a.diffed;
a.diffed = function(e3) {
  U2 && U2(e3);
  var t3 = e3.props, n4 = e3.__e;
  n4 != null && e3.type === "textarea" && "value" in t3 && t3.value !== n4.value && (n4.value = t3.value == null ? "" : t3.value), S3 = null;
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
  var n4 = t3(), r5 = I2({ h: { __: n4, v: t3 } }), o5 = r5[0].h, u5 = r5[1];
  return S2(function() {
    o5.__ = n4, o5.v = t3, y2(o5) && u5({ h: o5 });
  }, [e3, n4, t3]), z2(function() {
    return y2(o5) && u5({ h: o5 }), e3(function() {
      y2(o5) && u5({ h: o5 });
    });
  }, [e3]), n4;
}
function y2(e3) {
  var t3, n4, r5 = e3.v, o5 = e3.__;
  try {
    var u5 = r5();
    return !((t3 = o5) === (n4 = u5) && (t3 !== 0 || 1 / t3 == 1 / n4) || t3 != t3 && n4 != n4);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n4, t3) => {
  for (var e3 in t3)
    s(n4, e3, { get: t3[e3], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n4) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var e3 = arguments[t3];
      for (var a2 in e3)
        Object.prototype.hasOwnProperty.call(e3, a2) && (n4[a2] = e3[a2]);
    }
    return n4;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t3, c2 = []) {
  let o5 = [];
  function a2(r5, e3) {
    let n4 = ve(e3), s2 = o5.length;
    o5 = [...o5, e3];
    function f2(d7) {
      let { scope: i4, children: x5, ...$4 } = d7, h4 = i4?.[t3][s2] || n4, S6 = T(() => $4, Object.values($4));
      return re(h4.Provider, { value: S6 }, x5);
    }
    function v2(d7, i4) {
      let x5 = i4?.[t3][s2] || n4, $4 = J2(x5);
      if ($4)
        return $4;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d7}\` must be used within \`${r5}\``);
    }
    return f2.displayName = r5 + "Provider", [f2, v2];
  }
  let u5 = () => {
    let r5 = o5.map((e3) => ve(e3));
    return function(n4) {
      let s2 = n4?.[t3] || r5;
      return T(() => ({ [`__scope${t3}`]: { ...n4, [t3]: s2 } }), [n4, s2]);
    };
  };
  return u5.scopeName = t3, [a2, C3(u5, ...c2)];
}
function C3(...t3) {
  let c2 = t3[0];
  if (t3.length === 1)
    return c2;
  let o5 = () => {
    let a2 = t3.map((u5) => ({ useScope: u5(), scopeName: u5.scopeName }));
    return function(r5) {
      let e3 = a2.reduce((n4, { useScope: s2, scopeName: f2 }) => {
        let d7 = s2(r5)[`__scope${f2}`];
        return { ...n4, ...d7 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e3 }), [e3]);
    };
  };
  return o5.scopeName = c2.scopeName, o5;
}

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e3, f2, { checkForDefaultPrevented: t3 = true } = {}) {
  return function(c2) {
    if (e3?.(c2), t3 === false || !c2.defaultPrevented)
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

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n4, t3) => {
  let { children: e3, ...r5 } = n4, o5 = te2.toArray(e3), l4 = o5.find(I3);
  if (l4) {
    let c2 = l4.props.children, a2 = o5.map((m3) => m3 === l4 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m3);
    return re($2, p3({}, r5, { ref: t3 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p3({}, r5, { ref: t3 }), e3);
});
b4.displayName = "Slot";
var $2 = ee2((n4, t3) => {
  let { children: e3, ...r5 } = n4;
  return m(e3) ? Ee(e3, { ...X3(r5, e3.props), ref: t3 ? t(t3, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n4 }) => re(H, null, n4);
function I3(n4) {
  return m(n4) && n4.type === y3;
}
function X3(n4, t3) {
  let e3 = { ...t3 };
  for (let r5 in t3) {
    let o5 = n4[r5], l4 = t3[r5];
    /^on[A-Z]/.test(r5) ? o5 && l4 ? e3[r5] = (...a2) => {
      l4(...a2), o5(...a2);
    } : o5 && (e3[r5] = o5) : r5 === "style" ? e3[r5] = { ...o5, ...l4 } : r5 === "className" && (e3[r5] = [o5, l4].filter(Boolean).join(" "));
  }
  return { ...n4, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t3, e3) => {
  let f2 = ee2((r5, o5) => {
    let { asChild: s2, ...a2 } = r5, i4 = s2 ? b4 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i4, p3({}, a2, { ref: o5 }));
  });
  return f2.displayName = `Primitive.${e3}`, { ...t3, [e3]: f2 };
}, {});
function E3(t3, e3) {
  t3 && Re(() => t3.dispatchEvent(e3));
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f2) {
  let e3 = L(f2);
  return z2(() => {
    e3.current = f2;
  }), T(() => (...u5) => {
    var r5;
    return (r5 = e3.current) === null || r5 === void 0 ? void 0 : r5.call(e3, ...u5);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w3({ prop: e3, defaultProp: a2, onChange: s2 = () => {
} }) {
  let [t3, n4] = P2({ defaultProp: a2, onChange: s2 }), o5 = e3 !== void 0, f2 = o5 ? e3 : t3, l4 = l2(s2), $4 = G2((c2) => {
    if (o5) {
      let u5 = typeof c2 == "function" ? c2(e3) : c2;
      u5 !== e3 && l4(u5);
    } else
      n4(c2);
  }, [o5, e3, n4, l4]);
  return [f2, $4];
}
function P2({ defaultProp: e3, onChange: a2 }) {
  let s2 = I2(e3), [t3] = s2, n4 = L(t3), o5 = l2(a2);
  return z2(() => {
    n4.current !== t3 && (o5(t3), n4.current = t3);
  }, [t3, n4, o5]), s2;
}

// https://esm.sh/v132/@radix-ui/react-direction@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-direction.mjs
var r3 = ve(void 0);
function i(e3) {
  let t3 = J2(r3);
  return e3 || t3 || "ltr";
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S4(n4, t3) {
  return R2((o5, r5) => {
    let i4 = t3[o5][r5];
    return i4 ?? o5;
  }, n4);
}
var U3 = (n4) => {
  let { present: t3, children: o5 } = n4, r5 = y4(t3), i4 = typeof o5 == "function" ? o5({ present: r5.isPresent }) : te2.only(o5), a2 = u2(r5.ref, i4.ref);
  return typeof o5 == "function" || r5.isPresent ? Ee(i4, { ref: a2 }) : null;
};
U3.displayName = "Presence";
function y4(n4) {
  let [t3, o5] = I2(), r5 = L({}), i4 = L(n4), a2 = L("none"), N2 = n4 ? "mounted" : "unmounted", [f2, s2] = S4(N2, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e3 = d4(r5.current);
    a2.current = f2 === "mounted" ? e3 : "none";
  }, [f2]), e(() => {
    let e3 = r5.current, u5 = i4.current;
    if (u5 !== n4) {
      let $4 = a2.current, m3 = d4(e3);
      n4 ? s2("MOUNT") : m3 === "none" || e3?.display === "none" ? s2("UNMOUNT") : s2(u5 && $4 !== m3 ? "ANIMATION_OUT" : "UNMOUNT"), i4.current = n4;
    }
  }, [n4, s2]), e(() => {
    if (t3) {
      let e3 = (c2) => {
        let m3 = d4(r5.current).includes(c2.animationName);
        c2.target === t3 && m3 && Re(() => s2("ANIMATION_END"));
      }, u5 = (c2) => {
        c2.target === t3 && (a2.current = d4(r5.current));
      };
      return t3.addEventListener("animationstart", u5), t3.addEventListener("animationcancel", e3), t3.addEventListener("animationend", e3), () => {
        t3.removeEventListener("animationstart", u5), t3.removeEventListener("animationcancel", e3), t3.removeEventListener("animationend", e3);
      };
    } else
      s2("ANIMATION_END");
  }, [t3, s2]), { isPresent: ["mounted", "unmountSuspended"].includes(f2), ref: G2((e3) => {
    e3 && (r5.current = getComputedStyle(e3)), o5(e3);
  }, []) };
}
function d4(n4) {
  return n4?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u4 = compat_exports["useId".toString()] || (() => {
});
var r4 = 0;
function n2(t3) {
  let [e3, o5] = I2(u4());
  return e(() => {
    t3 || o5(($4) => $4 ?? String(r4++));
  }, [t3]), t3 || (e3 ? `radix-${e3}` : "");
}

// https://esm.sh/v132/@radix-ui/react-collection@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collection.mjs
function _2(s2) {
  let a2 = s2 + "CollectionProvider", [I7, $4] = _(a2), [E4, f2] = I7(a2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m3 = (r5) => {
    let { scope: e3, children: l4 } = r5, o5 = Te.useRef(null), c2 = Te.useRef(/* @__PURE__ */ new Map()).current;
    return Te.createElement(E4, { scope: e3, itemMap: c2, collectionRef: o5 }, l4);
  }, d7 = s2 + "CollectionSlot", p4 = Te.forwardRef((r5, e3) => {
    let { scope: l4, children: o5 } = r5, c2 = f2(d7, l4), n4 = u2(e3, c2.collectionRef);
    return Te.createElement(b4, { ref: n4 }, o5);
  }), u5 = s2 + "CollectionItemSlot", C5 = "data-radix-collection-item", R4 = Te.forwardRef((r5, e3) => {
    let { scope: l4, children: o5, ...c2 } = r5, n4 = Te.useRef(null), M5 = u2(e3, n4), i4 = f2(u5, l4);
    return Te.useEffect(() => (i4.itemMap.set(n4, { ref: n4, ...c2 }), () => void i4.itemMap.delete(n4))), Te.createElement(b4, { [C5]: "", ref: M5 }, o5);
  });
  function h4(r5) {
    let e3 = f2(s2 + "CollectionConsumer", r5);
    return Te.useCallback(() => {
      let o5 = e3.collectionRef.current;
      if (!o5)
        return [];
      let c2 = Array.from(o5.querySelectorAll(`[${C5}]`));
      return Array.from(e3.itemMap.values()).sort((i4, v2) => c2.indexOf(i4.ref.current) - c2.indexOf(v2.ref.current));
    }, [e3.collectionRef, e3.itemMap]);
  }
  return [{ Provider: m3, Slot: p4, ItemSlot: R4 }, h4, $4];
}

// https://esm.sh/v132/@radix-ui/react-use-escape-keydown@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-escape-keydown.mjs
function i2(d7, e3 = globalThis?.document) {
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
var G3 = ee2((n4, e3) => {
  var o5;
  let { disableOutsidePointerEvents: i4 = false, onEscapeKeyDown: t3, onPointerDownOutside: r5, onFocusOutside: f2, onInteractOutside: d7, onDismiss: l4, ...v2 } = n4, a2 = J2(F4), [c2, S6] = I2(null), u5 = (o5 = c2?.ownerDocument) !== null && o5 !== void 0 ? o5 : globalThis?.document, [, W4] = I2({}), A4 = u2(e3, (s2) => S6(s2)), y6 = Array.from(a2.layers), [N2] = [...a2.layersWithOutsidePointerEventsDisabled].slice(-1), _3 = y6.indexOf(N2), D4 = c2 ? y6.indexOf(c2) : -1, U5 = a2.layersWithOutsidePointerEventsDisabled.size > 0, w4 = D4 >= _3, z4 = Q4((s2) => {
    let $4 = s2.target, P4 = [...a2.branches].some((E4) => E4.contains($4));
    !w4 || P4 || (r5?.(s2), d7?.(s2), s2.defaultPrevented || l4?.());
  }, u5), O4 = V3((s2) => {
    let $4 = s2.target;
    [...a2.branches].some((E4) => E4.contains($4)) || (f2?.(s2), d7?.(s2), s2.defaultPrevented || l4?.());
  }, u5);
  return i2((s2) => {
    D4 === a2.layers.size - 1 && (t3?.(s2), !s2.defaultPrevented && l4 && (s2.preventDefault(), l4()));
  }, u5), z2(() => {
    if (c2)
      return i4 && (a2.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = u5.body.style.pointerEvents, u5.body.style.pointerEvents = "none"), a2.layersWithOutsidePointerEventsDisabled.add(c2)), a2.layers.add(c2), L3(), () => {
        i4 && a2.layersWithOutsidePointerEventsDisabled.size === 1 && (u5.body.style.pointerEvents = g2);
      };
  }, [c2, u5, i4, a2]), z2(() => () => {
    c2 && (a2.layers.delete(c2), a2.layersWithOutsidePointerEventsDisabled.delete(c2), L3());
  }, [c2, a2]), z2(() => {
    let s2 = () => W4({});
    return document.addEventListener(h2, s2), () => document.removeEventListener(h2, s2);
  }, []), re(u3.div, p3({}, v2, { ref: A4, style: { pointerEvents: U5 ? w4 ? "auto" : "none" : void 0, ...n4.style }, onFocusCapture: o3(n4.onFocusCapture, O4.onFocusCapture), onBlurCapture: o3(n4.onBlurCapture, O4.onBlurCapture), onPointerDownCapture: o3(n4.onPointerDownCapture, z4.onPointerDownCapture) }));
});
var J3 = ee2((n4, e3) => {
  let o5 = J2(F4), i4 = L(null), t3 = u2(e3, i4);
  return z2(() => {
    let r5 = i4.current;
    if (r5)
      return o5.branches.add(r5), () => {
        o5.branches.delete(r5);
      };
  }, [o5.branches]), re(u3.div, p3({}, n4, { ref: t3 }));
});
function Q4(n4, e3 = globalThis?.document) {
  let o5 = l2(n4), i4 = L(false), t3 = L(() => {
  });
  return z2(() => {
    let r5 = (d7) => {
      if (d7.target && !i4.current) {
        let v2 = function() {
          I4(X4, o5, l4, { discrete: true });
        }, l4 = { originalEvent: d7 };
        d7.pointerType === "touch" ? (e3.removeEventListener("click", t3.current), t3.current = v2, e3.addEventListener("click", t3.current, { once: true })) : v2();
      } else
        e3.removeEventListener("click", t3.current);
      i4.current = false;
    }, f2 = window.setTimeout(() => {
      e3.addEventListener("pointerdown", r5);
    }, 0);
    return () => {
      window.clearTimeout(f2), e3.removeEventListener("pointerdown", r5), e3.removeEventListener("click", t3.current);
    };
  }, [e3, o5]), { onPointerDownCapture: () => i4.current = true };
}
function V3(n4, e3 = globalThis?.document) {
  let o5 = l2(n4), i4 = L(false);
  return z2(() => {
    let t3 = (r5) => {
      r5.target && !i4.current && I4(Y2, o5, { originalEvent: r5 }, { discrete: false });
    };
    return e3.addEventListener("focusin", t3), () => e3.removeEventListener("focusin", t3);
  }, [e3, o5]), { onFocusCapture: () => i4.current = true, onBlurCapture: () => i4.current = false };
}
function L3() {
  let n4 = new CustomEvent(h2);
  document.dispatchEvent(n4);
}
function I4(n4, e3, o5, { discrete: i4 }) {
  let t3 = o5.originalEvent.target, r5 = new CustomEvent(n4, { bubbles: false, cancelable: true, detail: o5 });
  e3 && t3.addEventListener(n4, e3, { once: true }), i4 ? E3(t3, r5) : t3.dispatchEvent(r5);
}

// https://esm.sh/v132/@radix-ui/react-use-previous@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-previous.mjs
function t2(e3) {
  let r5 = L({ value: e3, previous: e3 });
  return T(() => (r5.current.value !== e3 && (r5.current.previous = r5.current.value, r5.current.value = e3), r5.current.previous), [e3]);
}

// https://esm.sh/v132/@radix-ui/react-visually-hidden@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-visually-hidden.mjs
var n3 = ee2((e3, r5) => re(u3.span, p3({}, e3, { ref: r5, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e3.style } })));
var $3 = n3;

// https://esm.sh/v132/@radix-ui/react-navigation-menu@1.1.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-navigation-menu.mjs
var H3 = "NavigationMenu";
var [q3, se3, Re2] = _2(H3);
var [j2, xe2, Ie] = _2(H3);
var [X5, $t] = _(H3, [Re2, Ie]);
var [Te2, I5] = X5(H3);
var [he3, Pe2] = X5(H3);
var De = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, value: r5, onValueChange: n4, defaultValue: o5, delayDuration: i4 = 200, skipDelayDuration: f2 = 300, orientation: s2 = "horizontal", dir: b6, ...c2 } = e3, [$4, w4] = I2(null), M5 = u2(t3, (g4) => w4(g4)), m3 = i(b6), p4 = L(0), N2 = L(0), y6 = L(0), [P4, d7] = I2(true), [v2 = "", l4] = w3({ prop: r5, onChange: (g4) => {
    let S6 = g4 !== "", G5 = f2 > 0;
    S6 ? (window.clearTimeout(y6.current), G5 && d7(false)) : (window.clearTimeout(y6.current), y6.current = window.setTimeout(() => d7(true), f2)), n4?.(g4);
  }, defaultProp: o5 }), C5 = G2(() => {
    window.clearTimeout(N2.current), N2.current = window.setTimeout(() => l4(""), 150);
  }, [l4]), T4 = G2((g4) => {
    window.clearTimeout(N2.current), l4(g4);
  }, [l4]), O4 = G2((g4) => {
    v2 === g4 ? window.clearTimeout(N2.current) : p4.current = window.setTimeout(() => {
      window.clearTimeout(N2.current), l4(g4);
    }, i4);
  }, [v2, l4, i4]);
  return z2(() => () => {
    window.clearTimeout(p4.current), window.clearTimeout(N2.current), window.clearTimeout(y6.current);
  }, []), re(ce3, { scope: a2, isRootMenu: true, value: v2, dir: m3, orientation: s2, rootNavigationMenu: $4, onTriggerEnter: (g4) => {
    window.clearTimeout(p4.current), P4 ? O4(g4) : T4(g4);
  }, onTriggerLeave: () => {
    window.clearTimeout(p4.current), C5();
  }, onContentEnter: () => window.clearTimeout(N2.current), onContentLeave: C5, onItemSelect: (g4) => {
    l4((S6) => S6 === g4 ? "" : g4);
  }, onItemDismiss: () => l4("") }, re(u3.nav, p3({ "aria-label": "Main", "data-orientation": s2, dir: m3 }, c2, { ref: M5 })));
});
var Oe2 = "NavigationMenuSub";
var Se2 = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, value: r5, onValueChange: n4, defaultValue: o5, orientation: i4 = "horizontal", ...f2 } = e3, s2 = I5(Oe2, a2), [b6 = "", c2] = w3({ prop: r5, onChange: n4, defaultProp: o5 });
  return re(ce3, { scope: a2, isRootMenu: false, value: b6, dir: s2.dir, orientation: i4, rootNavigationMenu: s2.rootNavigationMenu, onTriggerEnter: ($4) => c2($4), onItemSelect: ($4) => c2($4), onItemDismiss: () => c2("") }, re(u3.div, p3({ "data-orientation": i4 }, f2, { ref: t3 })));
});
var ce3 = (e3) => {
  let { scope: t3, isRootMenu: a2, rootNavigationMenu: r5, dir: n4, orientation: o5, children: i4, value: f2, onItemSelect: s2, onItemDismiss: b6, onTriggerEnter: c2, onTriggerLeave: $4, onContentEnter: w4, onContentLeave: M5 } = e3, [m3, p4] = I2(null), [N2, y6] = I2(/* @__PURE__ */ new Map()), [P4, d7] = I2(null);
  return re(Te2, { scope: t3, isRootMenu: a2, rootNavigationMenu: r5, value: f2, previousValue: t2(f2), baseId: n2(), dir: n4, orientation: o5, viewport: m3, onViewportChange: p4, indicatorTrack: P4, onIndicatorTrackChange: d7, onTriggerEnter: l2(c2), onTriggerLeave: l2($4), onContentEnter: l2(w4), onContentLeave: l2(M5), onItemSelect: l2(s2), onItemDismiss: l2(b6), onViewportContentChange: G2((v2, l4) => {
    y6((C5) => (C5.set(v2, l4), new Map(C5)));
  }, []), onViewportContentRemove: G2((v2) => {
    y6((l4) => l4.has(v2) ? (l4.delete(v2), new Map(l4)) : l4);
  }, []) }, re(q3.Provider, { scope: t3 }, re(he3, { scope: t3, items: N2 }, i4)));
};
var Le2 = "NavigationMenuList";
var Ae = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, ...r5 } = e3, n4 = I5(Le2, a2), o5 = re(u3.ul, p3({ "data-orientation": n4.orientation }, r5, { ref: t3 }));
  return re(u3.div, { style: { position: "relative" }, ref: n4.onIndicatorTrackChange }, re(q3.Slot, { scope: a2 }, n4.isRootMenu ? re(ve3, { asChild: true }, o5) : o5));
});
var Fe = "NavigationMenuItem";
var [ke2, ue3] = X5(Fe);
var He = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, value: r5, ...n4 } = e3, o5 = n2(), i4 = r5 || o5 || "LEGACY_REACT_AUTO_VALUE", f2 = L(null), s2 = L(null), b6 = L(null), c2 = L(() => {
  }), $4 = L(false), w4 = G2((m3 = "start") => {
    if (f2.current) {
      c2.current();
      let p4 = B2(f2.current);
      p4.length && J4(m3 === "start" ? p4 : p4.reverse());
    }
  }, []), M5 = G2(() => {
    if (f2.current) {
      let m3 = B2(f2.current);
      m3.length && (c2.current = Xe(m3));
    }
  }, []);
  return re(ke2, { scope: a2, value: i4, triggerRef: s2, contentRef: f2, focusProxyRef: b6, wasEscapeCloseRef: $4, onEntryKeyDown: w4, onFocusProxyEnter: w4, onRootContentClose: M5, onContentFocusOutside: M5 }, re(u3.li, p3({}, n4, { ref: t3 })));
});
var te3 = "NavigationMenuTrigger";
var Ve = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, disabled: r5, ...n4 } = e3, o5 = I5(te3, e3.__scopeNavigationMenu), i4 = ue3(te3, e3.__scopeNavigationMenu), f2 = L(null), s2 = u2(f2, i4.triggerRef, t3), b6 = ge2(o5.baseId, i4.value), c2 = pe3(o5.baseId, i4.value), $4 = L(false), w4 = L(false), M5 = i4.value === o5.value;
  return re(H, null, re(q3.ItemSlot, { scope: a2, value: i4.value }, re($e, { asChild: true }, re(u3.button, p3({ id: b6, disabled: r5, "data-disabled": r5 ? "" : void 0, "data-state": Q5(M5), "aria-expanded": M5, "aria-controls": c2 }, n4, { ref: s2, onPointerEnter: o3(e3.onPointerEnter, () => {
    w4.current = false, i4.wasEscapeCloseRef.current = false;
  }), onPointerMove: o3(e3.onPointerMove, K3(() => {
    r5 || w4.current || i4.wasEscapeCloseRef.current || $4.current || (o5.onTriggerEnter(i4.value), $4.current = true);
  })), onPointerLeave: o3(e3.onPointerLeave, K3(() => {
    r5 || (o5.onTriggerLeave(), $4.current = false);
  })), onClick: o3(e3.onClick, () => {
    o5.onItemSelect(i4.value), w4.current = M5;
  }), onKeyDown: o3(e3.onKeyDown, (m3) => {
    let N2 = { horizontal: "ArrowDown", vertical: o5.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[o5.orientation];
    M5 && m3.key === N2 && (i4.onEntryKeyDown(), m3.preventDefault());
  }) })))), M5 && re(H, null, re($3, { "aria-hidden": true, tabIndex: 0, ref: i4.focusProxyRef, onFocus: (m3) => {
    let p4 = i4.contentRef.current, N2 = m3.relatedTarget, y6 = N2 === f2.current, P4 = p4?.contains(N2);
    (y6 || !P4) && i4.onFocusProxyEnter(y6 ? "start" : "end");
  } }), o5.viewport && re("span", { "aria-owns": c2 })));
});
var ne3 = "navigationMenu.linkSelect";
var Ke = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, active: r5, onSelect: n4, ...o5 } = e3;
  return re($e, { asChild: true }, re(u3.a, p3({ "data-active": r5 ? "" : void 0, "aria-current": r5 ? "page" : void 0 }, o5, { ref: t3, onClick: o3(e3.onClick, (i4) => {
    let f2 = i4.target, s2 = new CustomEvent(ne3, { bubbles: true, cancelable: true });
    if (f2.addEventListener(ne3, (b6) => n4?.(b6), { once: true }), E3(f2, s2), !s2.defaultPrevented && !i4.metaKey) {
      let b6 = new CustomEvent(V4, { bubbles: true, cancelable: true });
      E3(f2, b6);
    }
  }, { checkForDefaultPrevented: false }) })));
});
var le3 = "NavigationMenuIndicator";
var ze = ee2((e3, t3) => {
  let { forceMount: a2, ...r5 } = e3, n4 = I5(le3, e3.__scopeNavigationMenu), o5 = !!n4.value;
  return n4.indicatorTrack ? Te.createPortal(re(U3, { present: a2 || o5 }, re(Ge, p3({}, r5, { ref: t3 }))), n4.indicatorTrack) : null;
});
var Ge = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, ...r5 } = e3, n4 = I5(le3, a2), o5 = se3(a2), [i4, f2] = I2(null), [s2, b6] = I2(null), c2 = n4.orientation === "horizontal", $4 = !!n4.value;
  z2(() => {
    var M5;
    let p4 = (M5 = o5().find((N2) => N2.value === n4.value)) === null || M5 === void 0 ? void 0 : M5.ref.current;
    p4 && f2(p4);
  }, [o5, n4.value]);
  let w4 = () => {
    i4 && b6({ size: c2 ? i4.offsetWidth : i4.offsetHeight, offset: c2 ? i4.offsetLeft : i4.offsetTop });
  };
  return W3(i4, w4), W3(n4.indicatorTrack, w4), s2 ? re(u3.div, p3({ "aria-hidden": true, "data-state": $4 ? "visible" : "hidden", "data-orientation": n4.orientation }, r5, { ref: t3, style: { position: "absolute", ...c2 ? { left: 0, width: s2.size + "px", transform: `translateX(${s2.offset}px)` } : { top: 0, height: s2.size + "px", transform: `translateY(${s2.offset}px)` }, ...r5.style } })) : null;
});
var F5 = "NavigationMenuContent";
var Ue2 = ee2((e3, t3) => {
  let { forceMount: a2, ...r5 } = e3, n4 = I5(F5, e3.__scopeNavigationMenu), o5 = ue3(F5, e3.__scopeNavigationMenu), i4 = u2(o5.contentRef, t3), f2 = o5.value === n4.value, s2 = { value: o5.value, triggerRef: o5.triggerRef, focusProxyRef: o5.focusProxyRef, wasEscapeCloseRef: o5.wasEscapeCloseRef, onContentFocusOutside: o5.onContentFocusOutside, onRootContentClose: o5.onRootContentClose, ...r5 };
  return n4.viewport ? re(je, p3({ forceMount: a2 }, s2, { ref: i4 })) : re(U3, { present: a2 || f2 }, re(fe3, p3({ "data-state": Q5(f2) }, s2, { ref: i4, onPointerEnter: o3(e3.onPointerEnter, n4.onContentEnter), onPointerLeave: o3(e3.onPointerLeave, K3(n4.onContentLeave)), style: { pointerEvents: !f2 && n4.isRootMenu ? "none" : void 0, ...s2.style } })));
});
var je = ee2((e3, t3) => {
  let a2 = I5(F5, e3.__scopeNavigationMenu), { onViewportContentChange: r5, onViewportContentRemove: n4 } = a2;
  return e(() => {
    r5(e3.value, { ref: t3, ...e3 });
  }, [e3, t3, r5]), e(() => () => n4(e3.value), [e3.value, n4]), null;
});
var V4 = "navigationMenu.rootContentDismiss";
var fe3 = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, value: r5, triggerRef: n4, focusProxyRef: o5, wasEscapeCloseRef: i4, onRootContentClose: f2, onContentFocusOutside: s2, ...b6 } = e3, c2 = I5(F5, a2), $4 = L(null), w4 = u2($4, t3), M5 = ge2(c2.baseId, r5), m3 = pe3(c2.baseId, r5), p4 = se3(a2), N2 = L(null), { onItemDismiss: y6 } = c2;
  z2(() => {
    let d7 = $4.current;
    if (c2.isRootMenu && d7) {
      let v2 = () => {
        var l4;
        y6(), f2(), d7.contains(document.activeElement) && ((l4 = n4.current) === null || l4 === void 0 || l4.focus());
      };
      return d7.addEventListener(V4, v2), () => d7.removeEventListener(V4, v2);
    }
  }, [c2.isRootMenu, e3.value, n4, y6, f2]);
  let P4 = T(() => {
    let v2 = p4().map((S6) => S6.value);
    c2.dir === "rtl" && v2.reverse();
    let l4 = v2.indexOf(c2.value), C5 = v2.indexOf(c2.previousValue), T4 = r5 === c2.value, O4 = C5 === v2.indexOf(r5);
    if (!T4 && !O4)
      return N2.current;
    let g4 = (() => {
      if (l4 !== C5) {
        if (T4 && C5 !== -1)
          return l4 > C5 ? "from-end" : "from-start";
        if (O4 && l4 !== -1)
          return l4 > C5 ? "to-start" : "to-end";
      }
      return null;
    })();
    return N2.current = g4, g4;
  }, [c2.previousValue, c2.value, c2.dir, p4, r5]);
  return re(ve3, { asChild: true }, re(G3, p3({ id: m3, "aria-labelledby": M5, "data-motion": P4, "data-orientation": c2.orientation }, b6, { ref: w4, onDismiss: () => {
    var d7;
    let v2 = new Event(V4, { bubbles: true, cancelable: true });
    (d7 = $4.current) === null || d7 === void 0 || d7.dispatchEvent(v2);
  }, onFocusOutside: o3(e3.onFocusOutside, (d7) => {
    var v2;
    s2();
    let l4 = d7.target;
    (v2 = c2.rootNavigationMenu) !== null && v2 !== void 0 && v2.contains(l4) && d7.preventDefault();
  }), onPointerDownOutside: o3(e3.onPointerDownOutside, (d7) => {
    var v2;
    let l4 = d7.target, C5 = p4().some((O4) => {
      var g4;
      return (g4 = O4.ref.current) === null || g4 === void 0 ? void 0 : g4.contains(l4);
    }), T4 = c2.isRootMenu && ((v2 = c2.viewport) === null || v2 === void 0 ? void 0 : v2.contains(l4));
    (C5 || T4 || !c2.isRootMenu) && d7.preventDefault();
  }), onKeyDown: o3(e3.onKeyDown, (d7) => {
    let v2 = d7.altKey || d7.ctrlKey || d7.metaKey;
    if (d7.key === "Tab" && !v2) {
      let T4 = B2(d7.currentTarget), O4 = document.activeElement, g4 = T4.findIndex((me2) => me2 === O4), G5 = d7.shiftKey ? T4.slice(0, g4).reverse() : T4.slice(g4 + 1, T4.length);
      if (J4(G5))
        d7.preventDefault();
      else {
        var C5;
        (C5 = o5.current) === null || C5 === void 0 || C5.focus();
      }
    }
  }), onEscapeKeyDown: o3(e3.onEscapeKeyDown, (d7) => {
    i4.current = true;
  }) })));
});
var de3 = "NavigationMenuViewport";
var Be = ee2((e3, t3) => {
  let { forceMount: a2, ...r5 } = e3, o5 = !!I5(de3, e3.__scopeNavigationMenu).value;
  return re(U3, { present: a2 || o5 }, re(We, p3({}, r5, { ref: t3 })));
});
var We = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, children: r5, ...n4 } = e3, o5 = I5(de3, a2), i4 = u2(t3, o5.onViewportChange), f2 = Pe2(F5, e3.__scopeNavigationMenu), [s2, b6] = I2(null), [c2, $4] = I2(null), w4 = s2 ? s2?.width + "px" : void 0, M5 = s2 ? s2?.height + "px" : void 0, m3 = !!o5.value, p4 = m3 ? o5.value : o5.previousValue;
  return W3(c2, () => {
    c2 && b6({ width: c2.offsetWidth, height: c2.offsetHeight });
  }), re(u3.div, p3({ "data-state": Q5(m3), "data-orientation": o5.orientation }, n4, { ref: i4, style: { pointerEvents: !m3 && o5.isRootMenu ? "none" : void 0, "--radix-navigation-menu-viewport-width": w4, "--radix-navigation-menu-viewport-height": M5, ...n4.style }, onPointerEnter: o3(e3.onPointerEnter, o5.onContentEnter), onPointerLeave: o3(e3.onPointerLeave, K3(o5.onContentLeave)) }), Array.from(f2.items).map(([y6, { ref: P4, forceMount: d7, ...v2 }]) => {
    let l4 = p4 === y6;
    return re(U3, { key: y6, present: d7 || l4 }, re(fe3, p3({}, v2, { ref: t(P4, (C5) => {
      l4 && C5 && $4(C5);
    }) })));
  }));
});
var Ye = "FocusGroup";
var ve3 = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, ...r5 } = e3, n4 = I5(Ye, a2);
  return re(j2.Provider, { scope: a2 }, re(j2.Slot, { scope: a2 }, re(u3.div, p3({ dir: n4.dir }, r5, { ref: t3 }))));
});
var oe3 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
var qe = "FocusGroupItem";
var $e = ee2((e3, t3) => {
  let { __scopeNavigationMenu: a2, ...r5 } = e3, n4 = xe2(a2), o5 = I5(qe, a2);
  return re(j2.ItemSlot, { scope: a2 }, re(u3.button, p3({}, r5, { ref: t3, onKeyDown: o3(e3.onKeyDown, (i4) => {
    if (["Home", "End", ...oe3].includes(i4.key)) {
      let s2 = n4().map(($4) => $4.ref.current);
      if ([o5.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i4.key) && s2.reverse(), oe3.includes(i4.key)) {
        let $4 = s2.indexOf(i4.currentTarget);
        s2 = s2.slice($4 + 1);
      }
      setTimeout(() => J4(s2)), i4.preventDefault();
    }
  }) })));
});
function B2(e3) {
  let t3 = [], a2 = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode: (r5) => {
    let n4 = r5.tagName === "INPUT" && r5.type === "hidden";
    return r5.disabled || r5.hidden || n4 ? NodeFilter.FILTER_SKIP : r5.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; a2.nextNode(); )
    t3.push(a2.currentNode);
  return t3;
}
function J4(e3) {
  let t3 = document.activeElement;
  return e3.some((a2) => a2 === t3 ? true : (a2.focus(), document.activeElement !== t3));
}
function Xe(e3) {
  return e3.forEach((t3) => {
    t3.dataset.tabindex = t3.getAttribute("tabindex") || "", t3.setAttribute("tabindex", "-1");
  }), () => {
    e3.forEach((t3) => {
      let a2 = t3.dataset.tabindex;
      t3.setAttribute("tabindex", a2);
    });
  };
}
function W3(e3, t3) {
  let a2 = l2(t3);
  e(() => {
    let r5 = 0;
    if (e3) {
      let n4 = new ResizeObserver(() => {
        cancelAnimationFrame(r5), r5 = window.requestAnimationFrame(a2);
      });
      return n4.observe(e3), () => {
        window.cancelAnimationFrame(r5), n4.unobserve(e3);
      };
    }
  }, [e3, a2]);
}
function Q5(e3) {
  return e3 ? "open" : "closed";
}
function ge2(e3, t3) {
  return `${e3}-trigger-${t3}`;
}
function pe3(e3, t3) {
  return `${e3}-content-${t3}`;
}
function K3(e3) {
  return (t3) => t3.pointerType === "mouse" ? e3(t3) : void 0;
}
var gt = De;
var mt = Ae;
var bt = He;
var Mt = Ve;
var Nt = Ke;
var Ct = ze;
var wt = Ue2;
var yt = Be;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o4(r5) {
  var f2, n4, t3 = "";
  if (typeof r5 == "string" || typeof r5 == "number")
    t3 += r5;
  else if (typeof r5 == "object")
    if (Array.isArray(r5))
      for (f2 = 0; f2 < r5.length; f2++)
        r5[f2] && (n4 = o4(r5[f2])) && (t3 && (t3 += " "), t3 += n4);
    else
      for (f2 in r5)
        r5[f2] && (t3 && (t3 += " "), t3 += f2);
  return t3;
}
function e2() {
  for (var r5, f2, n4 = 0, t3 = ""; n4 < arguments.length; )
    (r5 = arguments[n4++]) && (f2 = o4(r5)) && (t3 && (t3 += " "), t3 += f2);
  return t3;
}

// https://esm.sh/v132/class-variance-authority@0.7.0/denonext/class-variance-authority.mjs
var m2 = (n4) => typeof n4 == "boolean" ? "".concat(n4) : n4 === 0 ? "0" : n4;
var y5 = e2;
var b5 = (n4, l4) => (t3) => {
  var r5;
  if (l4?.variants == null)
    return y5(n4, t3?.class, t3?.className);
  let { variants: o5, defaultVariants: d7 } = l4, N2 = Object.keys(o5).map((e3) => {
    let a2 = t3?.[e3], u5 = d7?.[e3];
    if (a2 === null)
      return null;
    let i4 = m2(a2) || m2(u5);
    return o5[e3][i4];
  }), v2 = t3 && Object.entries(t3).reduce((e3, a2) => {
    let [u5, i4] = a2;
    return i4 === void 0 || (e3[u5] = i4), e3;
  }, {}), V6 = l4 == null || (r5 = l4.compoundVariants) === null || r5 === void 0 ? void 0 : r5.reduce((e3, a2) => {
    let { class: u5, className: i4, ...f2 } = a2;
    return Object.entries(f2).every((C5) => {
      let [c2, s2] = C5;
      return Array.isArray(s2) ? s2.includes({ ...d7, ...v2 }[c2]) : { ...d7, ...v2 }[c2] === s2;
    }) ? [...e3, u5, i4] : e3;
  }, []);
  return y5(n4, N2, V6, t3?.class, t3?.className);
};

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r5, e3) => {
  for (var t3 in e3)
    Ar(r5, t3, { get: e3[t3], enumerable: true });
};
function U4() {
  for (var r5 = 0, e3, t3, o5 = ""; r5 < arguments.length; )
    (e3 = arguments[r5++]) && (t3 = lr(e3)) && (o5 && (o5 += " "), o5 += t3);
  return o5;
}
function lr(r5) {
  if (typeof r5 == "string")
    return r5;
  for (var e3, t3 = "", o5 = 0; o5 < r5.length; o5++)
    r5[o5] && (e3 = lr(r5[o5])) && (t3 && (t3 += " "), t3 += e3);
  return t3;
}
var Z2 = "-";
function ur(r5) {
  var e3 = Sr(r5), t3 = r5.conflictingClassGroups, o5 = r5.conflictingClassGroupModifiers, a2 = o5 === void 0 ? {} : o5;
  function s2(i4) {
    var c2 = i4.split(Z2);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e3) || kr(i4);
  }
  function n4(i4, c2) {
    var u5 = t3[i4] || [];
    return c2 && a2[i4] ? [].concat(u5, a2[i4]) : u5;
  }
  return { getClassGroupId: s2, getConflictingClassGroupIds: n4 };
}
function pr(r5, e3) {
  if (r5.length === 0)
    return e3.classGroupId;
  var t3 = r5[0], o5 = e3.nextPart.get(t3), a2 = o5 ? pr(r5.slice(1), o5) : void 0;
  if (a2)
    return a2;
  if (e3.validators.length !== 0) {
    var s2 = r5.join(Z2);
    return e3.validators.find(function(n4) {
      var i4 = n4.validator;
      return i4(s2);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r5) {
  if (dr.test(r5)) {
    var e3 = dr.exec(r5)[1], t3 = e3?.substring(0, e3.indexOf(":"));
    if (t3)
      return "arbitrary.." + t3;
  }
}
function Sr(r5) {
  var e3 = r5.theme, t3 = r5.prefix, o5 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r5.classGroups), t3);
  return a2.forEach(function(s2) {
    var n4 = s2[0], i4 = s2[1];
    q4(i4, o5, n4, e3);
  }), o5;
}
function q4(r5, e3, t3, o5) {
  r5.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s2 = a2 === "" ? e3 : cr(e3, a2);
      s2.classGroupId = t3;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q4(a2(o5), e3, t3, o5);
        return;
      }
      e3.validators.push({ validator: a2, classGroupId: t3 });
      return;
    }
    Object.entries(a2).forEach(function(n4) {
      var i4 = n4[0], c2 = n4[1];
      q4(c2, cr(e3, i4), t3, o5);
    });
  });
}
function cr(r5, e3) {
  var t3 = r5;
  return e3.split(Z2).forEach(function(o5) {
    t3.nextPart.has(o5) || t3.nextPart.set(o5, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t3 = t3.nextPart.get(o5);
  }), t3;
}
function zr(r5) {
  return r5.isThemeGetter;
}
function Gr(r5, e3) {
  return e3 ? r5.map(function(t3) {
    var o5 = t3[0], a2 = t3[1], s2 = a2.map(function(n4) {
      return typeof n4 == "string" ? e3 + n4 : typeof n4 == "object" ? Object.fromEntries(Object.entries(n4).map(function(i4) {
        var c2 = i4[0], u5 = i4[1];
        return [e3 + c2, u5];
      })) : n4;
    });
    return [o5, s2];
  }) : r5;
}
function fr(r5) {
  if (r5 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e3 = 0, t3 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map();
  function a2(s2, n4) {
    t3.set(s2, n4), e3++, e3 > r5 && (e3 = 0, o5 = t3, t3 = /* @__PURE__ */ new Map());
  }
  return { get: function(n4) {
    var i4 = t3.get(n4);
    if (i4 !== void 0)
      return i4;
    if ((i4 = o5.get(n4)) !== void 0)
      return a2(n4, i4), i4;
  }, set: function(n4, i4) {
    t3.has(n4) ? t3.set(n4, i4) : a2(n4, i4);
  } };
}
var X6 = "!";
function br(r5) {
  var e3 = r5.separator || ":", t3 = e3.length === 1, o5 = e3[0], a2 = e3.length;
  return function(n4) {
    for (var i4 = [], c2 = 0, u5 = 0, b6, f2 = 0; f2 < n4.length; f2++) {
      var g4 = n4[f2];
      if (c2 === 0) {
        if (g4 === o5 && (t3 || n4.slice(f2, f2 + a2) === e3)) {
          i4.push(n4.slice(u5, f2)), u5 = f2 + a2;
          continue;
        }
        if (g4 === "/") {
          b6 = f2;
          continue;
        }
      }
      g4 === "[" ? c2++ : g4 === "]" && c2--;
    }
    var y6 = i4.length === 0 ? n4 : n4.substring(u5), x5 = y6.startsWith(X6), m3 = x5 ? y6.substring(1) : y6, w4 = b6 && b6 > u5 ? b6 - u5 : void 0;
    return { modifiers: i4, hasImportantModifier: x5, baseClassName: m3, maybePostfixModifierPosition: w4 };
  };
}
function gr(r5) {
  if (r5.length <= 1)
    return r5;
  var e3 = [], t3 = [];
  return r5.forEach(function(o5) {
    var a2 = o5[0] === "[";
    a2 ? (e3.push.apply(e3, t3.sort().concat([o5])), t3 = []) : t3.push(o5);
  }), e3.push.apply(e3, t3.sort()), e3;
}
function mr(r5) {
  return { cache: fr(r5.cacheSize), splitModifiers: br(r5), ...ur(r5) };
}
var Ir = /\s+/;
function vr(r5, e3) {
  var t3 = e3.splitModifiers, o5 = e3.getClassGroupId, a2 = e3.getConflictingClassGroupIds, s2 = /* @__PURE__ */ new Set();
  return r5.trim().split(Ir).map(function(n4) {
    var i4 = t3(n4), c2 = i4.modifiers, u5 = i4.hasImportantModifier, b6 = i4.baseClassName, f2 = i4.maybePostfixModifierPosition, g4 = o5(f2 ? b6.substring(0, f2) : b6), y6 = !!f2;
    if (!g4) {
      if (!f2)
        return { isTailwindClass: false, originalClassName: n4 };
      if (g4 = o5(b6), !g4)
        return { isTailwindClass: false, originalClassName: n4 };
      y6 = false;
    }
    var x5 = gr(c2).join(":"), m3 = u5 ? x5 + X6 : x5;
    return { isTailwindClass: true, modifierId: m3, classGroupId: g4, originalClassName: n4, hasPostfixModifier: y6 };
  }).reverse().filter(function(n4) {
    if (!n4.isTailwindClass)
      return true;
    var i4 = n4.modifierId, c2 = n4.classGroupId, u5 = n4.hasPostfixModifier, b6 = i4 + c2;
    return s2.has(b6) ? false : (s2.add(b6), a2(c2, u5).forEach(function(f2) {
      return s2.add(i4 + f2);
    }), true);
  }).reverse().map(function(n4) {
    return n4.originalClassName;
  }).join(" ");
}
function P3() {
  for (var r5 = arguments.length, e3 = new Array(r5), t3 = 0; t3 < r5; t3++)
    e3[t3] = arguments[t3];
  var o5, a2, s2, n4 = i4;
  function i4(u5) {
    var b6 = e3[0], f2 = e3.slice(1), g4 = f2.reduce(function(y6, x5) {
      return x5(y6);
    }, b6());
    return o5 = mr(g4), a2 = o5.cache.get, s2 = o5.cache.set, n4 = c2, c2(u5);
  }
  function c2(u5) {
    var b6 = a2(u5);
    if (b6)
      return b6;
    var f2 = vr(u5, o5);
    return s2(u5, f2), f2;
  }
  return function() {
    return n4(U4.apply(null, arguments));
  };
}
function d5(r5) {
  var e3 = function(o5) {
    return o5[r5] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G4, isArbitraryLength: () => L4, isArbitraryNumber: () => S5, isArbitraryPosition: () => Q6, isArbitraryShadow: () => D3, isArbitrarySize: () => H4, isArbitraryUrl: () => V5, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z3, isLength: () => h3, isNumber: () => M4, isPercent: () => Y3, isTshirtSize: () => C4 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h3(r5) {
  return M4(r5) || Tr.has(r5) || Pr.test(r5) || L4(r5);
}
function L4(r5) {
  return I6(r5, "length", Er);
}
function H4(r5) {
  return I6(r5, "size", xr);
}
function Q6(r5) {
  return I6(r5, "position", xr);
}
function V5(r5) {
  return I6(r5, "url", jr);
}
function S5(r5) {
  return I6(r5, "number", M4);
}
var Wr = S5;
function M4(r5) {
  return !Number.isNaN(Number(r5));
}
function Y3(r5) {
  return r5.endsWith("%") && M4(r5.slice(0, -1));
}
function z3(r5) {
  return hr(r5) || I6(r5, "number", hr);
}
function l3(r5) {
  return yr.test(r5);
}
function G4() {
  return true;
}
function C4(r5) {
  return Rr.test(r5);
}
function D3(r5) {
  return I6(r5, "", Ur);
}
function I6(r5, e3, t3) {
  var o5 = yr.exec(r5);
  return o5 ? o5[1] ? o5[1] === e3 : t3(o5[2]) : false;
}
function Er(r5) {
  return Nr.test(r5);
}
function xr() {
  return false;
}
function jr(r5) {
  return r5.startsWith("url(");
}
function hr(r5) {
  return Number.isInteger(Number(r5));
}
function Ur(r5) {
  return Lr.test(r5);
}
function T3() {
  var r5 = d5("colors"), e3 = d5("spacing"), t3 = d5("blur"), o5 = d5("brightness"), a2 = d5("borderColor"), s2 = d5("borderRadius"), n4 = d5("borderSpacing"), i4 = d5("borderWidth"), c2 = d5("contrast"), u5 = d5("grayscale"), b6 = d5("hueRotate"), f2 = d5("invert"), g4 = d5("gap"), y6 = d5("gradientColorStops"), x5 = d5("gradientColorStopPositions"), m3 = d5("inset"), w4 = d5("margin"), k3 = d5("opacity"), A4 = d5("padding"), K4 = d5("saturate"), O4 = d5("scale"), rr = d5("sepia"), er = d5("skew"), tr = d5("space"), or = d5("translate"), $4 = function() {
    return ["auto", "contain", "none"];
  }, B3 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F6 = function() {
    return ["auto", l3, e3];
  }, p4 = function() {
    return [l3, e3];
  }, nr = function() {
    return ["", h3];
  }, W4 = function() {
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
  return { cacheSize: 500, theme: { colors: [G4], spacing: [h3], blur: ["none", "", C4, l3], brightness: N2(), borderColor: [r5], borderRadius: ["none", "", "full", C4, l3], borderSpacing: p4(), borderWidth: nr(), contrast: N2(), grayscale: R4(), hueRotate: j3(), invert: R4(), gap: p4(), gradientColorStops: [r5], gradientColorStopPositions: [Y3, L4], inset: F6(), margin: F6(), opacity: N2(), padding: p4(), saturate: N2(), scale: N2(), sepia: R4(), skew: j3(), space: p4(), translate: p4() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C4] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B3() }], "overflow-x": [{ "overflow-x": B3() }], "overflow-y": [{ "overflow-y": B3() }], overscroll: [{ overscroll: $4() }], "overscroll-x": [{ "overscroll-x": $4() }], "overscroll-y": [{ "overscroll-y": $4() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m3] }], "inset-x": [{ "inset-x": [m3] }], "inset-y": [{ "inset-y": [m3] }], start: [{ start: [m3] }], end: [{ end: [m3] }], top: [{ top: [m3] }], right: [{ right: [m3] }], bottom: [{ bottom: [m3] }], left: [{ left: [m3] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z3] }], basis: [{ basis: F6() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R4() }], shrink: [{ shrink: R4() }], order: [{ order: ["first", "last", "none", z3] }], "grid-cols": [{ "grid-cols": [G4] }], "col-start-end": [{ col: ["auto", { span: ["full", z3] }, l3] }], "col-start": [{ "col-start": W4() }], "col-end": [{ "col-end": W4() }], "grid-rows": [{ "grid-rows": [G4] }], "row-start-end": [{ row: ["auto", { span: [z3] }, l3] }], "row-start": [{ "row-start": W4() }], "row-end": [{ "row-end": W4() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g4] }], "gap-x": [{ "gap-x": [g4] }], "gap-y": [{ "gap-y": [g4] }], "justify-content": [{ justify: ["normal"].concat(J5()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J5(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J5(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A4] }], px: [{ px: [A4] }], py: [{ py: [A4] }], ps: [{ ps: [A4] }], pe: [{ pe: [A4] }], pt: [{ pt: [A4] }], pr: [{ pr: [A4] }], pb: [{ pb: [A4] }], pl: [{ pl: [A4] }], m: [{ m: [w4] }], mx: [{ mx: [w4] }], my: [{ my: [w4] }], ms: [{ ms: [w4] }], me: [{ me: [w4] }], mt: [{ mt: [w4] }], mr: [{ mr: [w4] }], mb: [{ mb: [w4] }], ml: [{ ml: [w4] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h3] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C4] }, C4, l3] }], h: [{ h: [l3, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h3] }], "max-h": [{ "max-h": [l3, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C4, L4] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S5] }], "font-family": [{ font: [G4] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M4, S5] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h3] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r5] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r5] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E4(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h3] }], "underline-offset": [{ "underline-offset": ["auto", l3, h3] }], "text-decoration-color": [{ decoration: [r5] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p4() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q6]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H4] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V5] }], "bg-color": [{ bg: [r5] }], "gradient-from-pos": [{ from: [x5] }], "gradient-via-pos": [{ via: [x5] }], "gradient-to-pos": [{ to: [x5] }], "gradient-from": [{ from: [y6] }], "gradient-via": [{ via: [y6] }], "gradient-to": [{ to: [y6] }], rounded: [{ rounded: [s2] }], "rounded-s": [{ "rounded-s": [s2] }], "rounded-e": [{ "rounded-e": [s2] }], "rounded-t": [{ "rounded-t": [s2] }], "rounded-r": [{ "rounded-r": [s2] }], "rounded-b": [{ "rounded-b": [s2] }], "rounded-l": [{ "rounded-l": [s2] }], "rounded-ss": [{ "rounded-ss": [s2] }], "rounded-se": [{ "rounded-se": [s2] }], "rounded-ee": [{ "rounded-ee": [s2] }], "rounded-es": [{ "rounded-es": [s2] }], "rounded-tl": [{ "rounded-tl": [s2] }], "rounded-tr": [{ "rounded-tr": [s2] }], "rounded-br": [{ "rounded-br": [s2] }], "rounded-bl": [{ "rounded-bl": [s2] }], "border-w": [{ border: [i4] }], "border-w-x": [{ "border-x": [i4] }], "border-w-y": [{ "border-y": [i4] }], "border-w-s": [{ "border-s": [i4] }], "border-w-e": [{ "border-e": [i4] }], "border-w-t": [{ "border-t": [i4] }], "border-w-r": [{ "border-r": [i4] }], "border-w-b": [{ "border-b": [i4] }], "border-w-l": [{ "border-l": [i4] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E4(), ["hidden"]) }], "divide-x": [{ "divide-x": [i4] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i4] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E4() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E4()) }], "outline-offset": [{ "outline-offset": [l3, h3] }], "outline-w": [{ outline: [h3] }], "outline-color": [{ outline: [r5] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r5] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h3] }], "ring-offset-color": [{ "ring-offset": [r5] }], shadow: [{ shadow: ["", "inner", "none", C4, D3] }], "shadow-color": [{ shadow: [G4] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t3] }], brightness: [{ brightness: [o5] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C4, l3] }], grayscale: [{ grayscale: [u5] }], "hue-rotate": [{ "hue-rotate": [b6] }], invert: [{ invert: [f2] }], saturate: [{ saturate: [K4] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t3] }], "backdrop-brightness": [{ "backdrop-brightness": [o5] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u5] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b6] }], "backdrop-invert": [{ "backdrop-invert": [f2] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K4] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n4] }], "border-spacing-x": [{ "border-spacing-x": [n4] }], "border-spacing-y": [{ "border-spacing-y": [n4] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j3() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j3() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O4] }], "scale-x": [{ "scale-x": [O4] }], "scale-y": [{ "scale-y": [O4] }], rotate: [{ rotate: [z3, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r5] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r5] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p4() }], "scroll-mx": [{ "scroll-mx": p4() }], "scroll-my": [{ "scroll-my": p4() }], "scroll-ms": [{ "scroll-ms": p4() }], "scroll-me": [{ "scroll-me": p4() }], "scroll-mt": [{ "scroll-mt": p4() }], "scroll-mr": [{ "scroll-mr": p4() }], "scroll-mb": [{ "scroll-mb": p4() }], "scroll-ml": [{ "scroll-ml": p4() }], "scroll-p": [{ "scroll-p": p4() }], "scroll-px": [{ "scroll-px": p4() }], "scroll-py": [{ "scroll-py": p4() }], "scroll-ps": [{ "scroll-ps": p4() }], "scroll-pe": [{ "scroll-pe": p4() }], "scroll-pt": [{ "scroll-pt": p4() }], "scroll-pr": [{ "scroll-pr": p4() }], "scroll-pb": [{ "scroll-pb": p4() }], "scroll-pl": [{ "scroll-pl": p4() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r5, "none"] }], "stroke-w": [{ stroke: [h3, S5] }], stroke: [{ stroke: [r5, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P3(T3);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d6 = 0;
var x4 = Array.isArray;
function g3(t3, r5, e3, a2, o5, i4) {
  var s2, n4, f2 = {};
  for (n4 in r5)
    n4 == "ref" ? s2 = r5[n4] : f2[n4] = r5[n4];
  var u5 = { type: t3, props: f2, key: e3, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d6, __i: -1, __u: 0, __source: o5, __self: i4 };
  if (typeof t3 == "function" && (s2 = t3.defaultProps))
    for (n4 in s2)
      f2[n4] === void 0 && (f2[n4] = s2[n4]);
  return a.vnode && a.vnode(u5), u5;
}

// ../components/ui/navigation-menu.tsx
var NavigationMenu = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g3(
  gt,
  {
    ref,
    className: cn("relative z-10 flex flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ g3(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = gt.displayName;
var NavigationMenuList = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  mt,
  {
    ref,
    className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
    ...props
  }
));
NavigationMenuList.displayName = mt.displayName;
var NavigationMenuItem = bt;
var navigationMenuTriggerStyle = b5(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 h-10 py-2 px-4 group w-max"
);
var NavigationMenuTrigger = ee2(({ class: className, children, ...props }, ref) => /* @__PURE__ */ g3(
  Mt,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ g3(
        "span",
        {
          className: "i-lucide:chevron-down flex relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = Mt.displayName;
var NavigationMenuContent = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  wt,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = wt.displayName;
var NavigationMenuLink = Nt;
var NavigationMenuViewport = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ g3(
  yt,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = yt.displayName;
var NavigationMenuIndicator = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g3(
  Ct,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ g3("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = Ct.displayName;
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
};
