var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n3, t2) => {
  for (var e2 in t2)
    s(n3, e2, { get: t2[e2], enumerable: true });
};
var o = {};
u(o, { default: () => r });
function r() {
  return r = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e2 = arguments[t2];
      for (var a2 in e2)
        Object.prototype.hasOwnProperty.call(e2, a2) && (n3[a2] = e2[a2]);
    }
    return n3;
  }, r.apply(this, arguments);
}
var { default: f, ...d } = o;
var p = f !== void 0 ? f : d;

// https://esm.sh/preact@10.19.6/compat
var compat_exports = {};
__export(compat_exports, {
  Children: () => te2,
  Component: () => W,
  Fragment: () => H,
  PureComponent: () => C2,
  StrictMode: () => xe,
  Suspense: () => h,
  SuspenseList: () => p3,
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
function b(e2, _2) {
  for (var t2 in _2)
    e2[t2] = _2[t2];
  return e2;
}
function Z(e2) {
  var _2 = e2.parentNode;
  _2 && _2.removeChild(e2);
}
function re(e2, _2, t2) {
  var i, n3, r4, l3 = {};
  for (r4 in _2)
    r4 == "key" ? i = _2[r4] : r4 == "ref" ? n3 = _2[r4] : l3[r4] = _2[r4];
  if (arguments.length > 2 && (l3.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e2 == "function" && e2.defaultProps != null)
    for (r4 in e2.defaultProps)
      l3[r4] === void 0 && (l3[r4] = e2.defaultProps[r4]);
  return S(e2, l3, i, n3, null);
}
function S(e2, _2, t2, i, n3) {
  var r4 = { type: e2, props: _2, key: t2, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r4), r4;
}
function de() {
  return { current: null };
}
function H(e2) {
  return e2.children;
}
function W(e2, _2) {
  this.props = e2, this.context = _2;
}
function w(e2, _2) {
  if (_2 == null)
    return e2.__ ? w(e2.__, e2.__i + 1) : null;
  for (var t2; _2 < e2.__k.length; _2++)
    if ((t2 = e2.__k[_2]) != null && t2.__e != null)
      return t2.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function ie(e2, _2, t2) {
  var i, n3 = e2.__v, r4 = n3.__e, l3 = e2.__P;
  if (l3)
    return (i = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i), G(l3, i, n3, e2.__n, l3.ownerSVGElement !== void 0, 32 & n3.__u ? [r4] : null, _2, r4 ?? w(n3), !!(32 & n3.__u), t2), i.__v = n3.__v, i.__.__k[i.__i] = i, i.__d = void 0, i.__e != r4 && ee(i), i;
}
function ee(e2) {
  var _2, t2;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, _2 = 0; _2 < e2.__k.length; _2++)
      if ((t2 = e2.__k[_2]) != null && t2.__e != null) {
        e2.__e = e2.__c.base = t2.__e;
        break;
      }
    return ee(e2);
  }
}
function I(e2) {
  (!e2.__d && (e2.__d = true) && x.push(e2) && !A.__r++ || z !== a.debounceRendering) && ((z = a.debounceRendering) || X)(A);
}
function A() {
  var e2, _2, t2, i = [], n3 = [];
  for (x.sort($); e2 = x.shift(); )
    e2.__d && (t2 = x.length, _2 = ie(e2, i, n3) || _2, t2 === 0 || x.length > t2 ? (R(i, _2, n3), n3.length = i.length = 0, _2 = void 0, x.sort($)) : _2 && a.__c && a.__c(_2, O));
  _2 && R(i, _2, n3), A.__r = 0;
}
function _e(e2, _2, t2, i, n3, r4, l3, u5, c2, s2, p4) {
  var o4, m2, f2, h3, k4, v2 = i && i.__k || O, d5 = _2.length;
  for (t2.__d = c2, le(t2, _2, v2), c2 = t2.__d, o4 = 0; o4 < d5; o4++)
    (f2 = t2.__k[o4]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m2 = f2.__i === -1 ? E : v2[f2.__i] || E, f2.__i = o4, G(e2, f2, m2, n3, r4, l3, u5, c2, s2, p4), h3 = f2.__e, f2.ref && m2.ref != f2.ref && (m2.ref && V(m2.ref, null, f2), p4.push(f2.ref, f2.__c || h3, f2)), k4 == null && h3 != null && (k4 = h3), 65536 & f2.__u || m2.__k === f2.__k ? c2 = te(f2, c2, e2) : typeof f2.type == "function" && f2.__d !== void 0 ? c2 = f2.__d : h3 && (c2 = h3.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t2.__d = c2, t2.__e = k4;
}
function le(e2, _2, t2) {
  var i, n3, r4, l3, u5, c2 = _2.length, s2 = t2.length, p4 = s2, o4 = 0;
  for (e2.__k = [], i = 0; i < c2; i++)
    l3 = i + o4, (n3 = e2.__k[i] = (n3 = _2[i]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e2, n3.__b = e2.__b + 1, u5 = ue(n3, t2, l3, p4), n3.__i = u5, r4 = null, u5 !== -1 && (p4--, (r4 = t2[u5]) && (r4.__u |= 131072)), r4 == null || r4.__v === null ? (u5 == -1 && o4--, typeof n3.type != "function" && (n3.__u |= 65536)) : u5 !== l3 && (u5 === l3 + 1 ? o4++ : u5 > l3 ? p4 > c2 - l3 ? o4 += u5 - l3 : o4-- : u5 < l3 ? u5 == l3 - 1 && (o4 = u5 - l3) : o4 = 0, u5 !== i + o4 && (n3.__u |= 65536))) : (r4 = t2[l3]) && r4.key == null && r4.__e && !(131072 & r4.__u) && (r4.__e == e2.__d && (e2.__d = w(r4)), B(r4, r4, false), t2[l3] = null, p4--);
  if (p4)
    for (i = 0; i < s2; i++)
      (r4 = t2[i]) != null && !(131072 & r4.__u) && (r4.__e == e2.__d && (e2.__d = w(r4)), B(r4, r4));
}
function te(e2, _2, t2) {
  var i, n3;
  if (typeof e2.type == "function") {
    for (i = e2.__k, n3 = 0; i && n3 < i.length; n3++)
      i[n3] && (i[n3].__ = e2, _2 = te(i[n3], _2, t2));
    return _2;
  }
  e2.__e != _2 && (t2.insertBefore(e2.__e, _2 || null), _2 = e2.__e);
  do
    _2 = _2 && _2.nextSibling;
  while (_2 != null && _2.nodeType === 8);
  return _2;
}
function se(e2, _2) {
  return _2 = _2 || [], e2 == null || typeof e2 == "boolean" || (F(e2) ? e2.some(function(t2) {
    se(t2, _2);
  }) : _2.push(e2)), _2;
}
function ue(e2, _2, t2, i) {
  var n3 = e2.key, r4 = e2.type, l3 = t2 - 1, u5 = t2 + 1, c2 = _2[t2];
  if (c2 === null || c2 && n3 == c2.key && r4 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l3 >= 0 || u5 < _2.length; ) {
      if (l3 >= 0) {
        if ((c2 = _2[l3]) && !(131072 & c2.__u) && n3 == c2.key && r4 === c2.type)
          return l3;
        l3--;
      }
      if (u5 < _2.length) {
        if ((c2 = _2[u5]) && !(131072 & c2.__u) && n3 == c2.key && r4 === c2.type)
          return u5;
        u5++;
      }
    }
  return -1;
}
function q(e2, _2, t2) {
  _2[0] === "-" ? e2.setProperty(_2, t2 ?? "") : e2[_2] = t2 == null ? "" : typeof t2 != "number" || oe.test(_2) ? t2 : t2 + "px";
}
function M(e2, _2, t2, i, n3) {
  var r4;
  e:
    if (_2 === "style")
      if (typeof t2 == "string")
        e2.style.cssText = t2;
      else {
        if (typeof i == "string" && (e2.style.cssText = i = ""), i)
          for (_2 in i)
            t2 && _2 in t2 || q(e2.style, _2, "");
        if (t2)
          for (_2 in t2)
            i && t2[_2] === i[_2] || q(e2.style, _2, t2[_2]);
      }
    else if (_2[0] === "o" && _2[1] === "n")
      r4 = _2 !== (_2 = _2.replace(/(PointerCapture)$|Capture$/i, "$1")), _2 = _2.toLowerCase() in e2 ? _2.toLowerCase().slice(2) : _2.slice(2), e2.l || (e2.l = {}), e2.l[_2 + r4] = t2, t2 ? i ? t2.u = i.u : (t2.u = Date.now(), e2.addEventListener(_2, r4 ? K : J, r4)) : e2.removeEventListener(_2, r4 ? K : J, r4);
    else {
      if (n3)
        _2 = _2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_2 !== "width" && _2 !== "height" && _2 !== "href" && _2 !== "list" && _2 !== "form" && _2 !== "tabIndex" && _2 !== "download" && _2 !== "rowSpan" && _2 !== "colSpan" && _2 !== "role" && _2 in e2)
        try {
          e2[_2] = t2 ?? "";
          break e;
        } catch {
        }
      typeof t2 == "function" || (t2 == null || t2 === false && _2[4] !== "-" ? e2.removeAttribute(_2) : e2.setAttribute(_2, t2));
    }
}
function J(e2) {
  if (this.l) {
    var _2 = this.l[e2.type + false];
    if (e2.t) {
      if (e2.t <= _2.u)
        return;
    } else
      e2.t = Date.now();
    return _2(a.event ? a.event(e2) : e2);
  }
}
function K(e2) {
  if (this.l)
    return this.l[e2.type + true](a.event ? a.event(e2) : e2);
}
function G(e2, _2, t2, i, n3, r4, l3, u5, c2, s2) {
  var p4, o4, m2, f2, h3, k4, v2, d5, y5, C4, T3, P3, j3, U4, N2, g2 = _2.type;
  if (_2.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r4 = [u5 = _2.__e = t2.__e]), (p4 = a.__b) && p4(_2);
  e:
    if (typeof g2 == "function")
      try {
        if (d5 = _2.props, y5 = (p4 = g2.contextType) && i[p4.__c], C4 = p4 ? y5 ? y5.props.value : p4.__ : i, t2.__c ? v2 = (o4 = _2.__c = t2.__c).__ = o4.__E : ("prototype" in g2 && g2.prototype.render ? _2.__c = o4 = new g2(d5, C4) : (_2.__c = o4 = new W(d5, C4), o4.constructor = g2, o4.render = ce), y5 && y5.sub(o4), o4.props = d5, o4.state || (o4.state = {}), o4.context = C4, o4.__n = i, m2 = o4.__d = true, o4.__h = [], o4._sb = []), o4.__s == null && (o4.__s = o4.state), g2.getDerivedStateFromProps != null && (o4.__s == o4.state && (o4.__s = b({}, o4.__s)), b(o4.__s, g2.getDerivedStateFromProps(d5, o4.__s))), f2 = o4.props, h3 = o4.state, o4.__v = _2, m2)
          g2.getDerivedStateFromProps == null && o4.componentWillMount != null && o4.componentWillMount(), o4.componentDidMount != null && o4.__h.push(o4.componentDidMount);
        else {
          if (g2.getDerivedStateFromProps == null && d5 !== f2 && o4.componentWillReceiveProps != null && o4.componentWillReceiveProps(d5, C4), !o4.__e && (o4.shouldComponentUpdate != null && o4.shouldComponentUpdate(d5, o4.__s, C4) === false || _2.__v === t2.__v)) {
            for (_2.__v !== t2.__v && (o4.props = d5, o4.state = o4.__s, o4.__d = false), _2.__e = t2.__e, _2.__k = t2.__k, _2.__k.forEach(function(L3) {
              L3 && (L3.__ = _2);
            }), T3 = 0; T3 < o4._sb.length; T3++)
              o4.__h.push(o4._sb[T3]);
            o4._sb = [], o4.__h.length && l3.push(o4);
            break e;
          }
          o4.componentWillUpdate != null && o4.componentWillUpdate(d5, o4.__s, C4), o4.componentDidUpdate != null && o4.__h.push(function() {
            o4.componentDidUpdate(f2, h3, k4);
          });
        }
        if (o4.context = C4, o4.props = d5, o4.__P = e2, o4.__e = false, P3 = a.__r, j3 = 0, "prototype" in g2 && g2.prototype.render) {
          for (o4.state = o4.__s, o4.__d = false, P3 && P3(_2), p4 = o4.render(o4.props, o4.state, o4.context), U4 = 0; U4 < o4._sb.length; U4++)
            o4.__h.push(o4._sb[U4]);
          o4._sb = [];
        } else
          do
            o4.__d = false, P3 && P3(_2), p4 = o4.render(o4.props, o4.state, o4.context), o4.state = o4.__s;
          while (o4.__d && ++j3 < 25);
        o4.state = o4.__s, o4.getChildContext != null && (i = b(b({}, i), o4.getChildContext())), m2 || o4.getSnapshotBeforeUpdate == null || (k4 = o4.getSnapshotBeforeUpdate(f2, h3)), _e(e2, F(N2 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N2 : [N2], _2, t2, i, n3, r4, l3, u5, c2, s2), o4.base = _2.__e, _2.__u &= -161, o4.__h.length && l3.push(o4), v2 && (o4.__E = o4.__ = null);
      } catch (L3) {
        _2.__v = null, c2 || r4 != null ? (_2.__e = u5, _2.__u |= c2 ? 160 : 32, r4[r4.indexOf(u5)] = null) : (_2.__e = t2.__e, _2.__k = t2.__k), a.__e(L3, _2, t2);
      }
    else
      r4 == null && _2.__v === t2.__v ? (_2.__k = t2.__k, _2.__e = t2.__e) : _2.__e = fe(t2.__e, _2, t2, i, n3, r4, l3, c2, s2);
  (p4 = a.diffed) && p4(_2);
}
function R(e2, _2, t2) {
  for (var i = 0; i < t2.length; i++)
    V(t2[i], t2[++i], t2[++i]);
  a.__c && a.__c(_2, e2), e2.some(function(n3) {
    try {
      e2 = n3.__h, n3.__h = [], e2.some(function(r4) {
        r4.call(n3);
      });
    } catch (r4) {
      a.__e(r4, n3.__v);
    }
  });
}
function fe(e2, _2, t2, i, n3, r4, l3, u5, c2) {
  var s2, p4, o4, m2, f2, h3, k4, v2 = t2.props, d5 = _2.props, y5 = _2.type;
  if (y5 === "svg" && (n3 = true), r4 != null) {
    for (s2 = 0; s2 < r4.length; s2++)
      if ((f2 = r4[s2]) && "setAttribute" in f2 == !!y5 && (y5 ? f2.localName === y5 : f2.nodeType === 3)) {
        e2 = f2, r4[s2] = null;
        break;
      }
  }
  if (e2 == null) {
    if (y5 === null)
      return document.createTextNode(d5);
    e2 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y5) : document.createElement(y5, d5.is && d5), r4 = null, u5 = false;
  }
  if (y5 === null)
    v2 === d5 || u5 && e2.data === d5 || (e2.data = d5);
  else {
    if (r4 = r4 && D.call(e2.childNodes), v2 = t2.props || E, !u5 && r4 != null)
      for (v2 = {}, s2 = 0; s2 < e2.attributes.length; s2++)
        v2[(f2 = e2.attributes[s2]).name] = f2.value;
    for (s2 in v2)
      f2 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o4 = f2 : s2 === "key" || s2 in d5 || M(e2, s2, null, f2, n3));
    for (s2 in d5)
      f2 = d5[s2], s2 == "children" ? m2 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h3 = f2 : s2 == "checked" ? k4 = f2 : s2 === "key" || u5 && typeof f2 != "function" || v2[s2] === f2 || M(e2, s2, f2, v2[s2], n3);
    if (p4)
      u5 || o4 && (p4.__html === o4.__html || p4.__html === e2.innerHTML) || (e2.innerHTML = p4.__html), _2.__k = [];
    else if (o4 && (e2.innerHTML = ""), _e(e2, F(m2) ? m2 : [m2], _2, t2, i, n3 && y5 !== "foreignObject", r4, l3, r4 ? r4[0] : t2.__k && w(t2, 0), u5, c2), r4 != null)
      for (s2 = r4.length; s2--; )
        r4[s2] != null && Z(r4[s2]);
    u5 || (s2 = "value", h3 !== void 0 && (h3 !== e2[s2] || y5 === "progress" && !h3 || y5 === "option" && h3 !== v2[s2]) && M(e2, s2, h3, v2[s2], false), s2 = "checked", k4 !== void 0 && k4 !== e2[s2] && M(e2, s2, k4, v2[s2], false));
  }
  return e2;
}
function V(e2, _2, t2) {
  try {
    typeof e2 == "function" ? e2(_2) : e2.current = _2;
  } catch (i) {
    a.__e(i, t2);
  }
}
function B(e2, _2, t2) {
  var i, n3;
  if (a.unmount && a.unmount(e2), (i = e2.ref) && (i.current && i.current !== e2.__e || V(i, null, _2)), (i = e2.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r4) {
        a.__e(r4, _2);
      }
    i.base = i.__P = null, e2.__c = void 0;
  }
  if (i = e2.__k)
    for (n3 = 0; n3 < i.length; n3++)
      i[n3] && B(i[n3], _2, t2 || typeof e2.type != "function");
  t2 || e2.__e == null || Z(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function ce(e2, _2, t2) {
  return this.constructor(e2, t2);
}
function pe(e2, _2, t2) {
  var i, n3, r4, l3;
  a.__ && a.__(e2, _2), n3 = (i = typeof t2 == "function") ? null : t2 && t2.__k || _2.__k, r4 = [], l3 = [], G(_2, e2 = (!i && t2 || _2).__k = re(H, null, [e2]), n3 || E, E, _2.ownerSVGElement !== void 0, !i && t2 ? [t2] : n3 ? null : _2.firstChild ? D.call(_2.childNodes) : null, r4, !i && t2 ? t2 : n3 ? n3.__e : _2.firstChild, i, l3), e2.__d = void 0, R(r4, e2, l3);
}
function ae(e2, _2) {
  pe(e2, _2, ae);
}
function he(e2, _2, t2) {
  var i, n3, r4, l3, u5 = b({}, e2.props);
  for (r4 in e2.type && e2.type.defaultProps && (l3 = e2.type.defaultProps), _2)
    r4 == "key" ? i = _2[r4] : r4 == "ref" ? n3 = _2[r4] : u5[r4] = _2[r4] === void 0 && l3 !== void 0 ? l3[r4] : _2[r4];
  return arguments.length > 2 && (u5.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e2.type, u5, i || e2.key, n3 || e2.ref, null);
}
function ve(e2, _2) {
  var t2 = { __c: _2 = "__cC" + Y++, __: e2, Consumer: function(i, n3) {
    return i.children(n3);
  }, Provider: function(i) {
    var n3, r4;
    return this.getChildContext || (n3 = [], (r4 = {})[_2] = this, this.getChildContext = function() {
      return r4;
    }, this.shouldComponentUpdate = function(l3) {
      this.props.value !== l3.value && n3.some(function(u5) {
        u5.__e = true, I(u5);
      });
    }, this.sub = function(l3) {
      n3.push(l3);
      var u5 = l3.componentWillUnmount;
      l3.componentWillUnmount = function() {
        n3.splice(n3.indexOf(l3), 1), u5 && u5.call(l3);
      };
    }), i.children;
  } };
  return t2.Provider.__ = t2.Consumer.contextType = t2;
}
D = O.slice, a = { __e: function(e2, _2, t2, i) {
  for (var n3, r4, l3; _2 = _2.__; )
    if ((n3 = _2.__c) && !n3.__)
      try {
        if ((r4 = n3.constructor) && r4.getDerivedStateFromError != null && (n3.setState(r4.getDerivedStateFromError(e2)), l3 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e2, i || {}), l3 = n3.__d), l3)
          return n3.__E = n3;
      } catch (u5) {
        e2 = u5;
      }
  throw e2;
} }, Q = 0, ne = function(e2) {
  return e2 != null && e2.constructor == null;
}, W.prototype.setState = function(e2, _2) {
  var t2;
  t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e2 == "function" && (e2 = e2(b({}, t2), this.props)), e2 && b(t2, e2), e2 != null && this.__v && (_2 && this._sb.push(_2), I(this));
}, W.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e2, _2) {
  return e2.__v.__b - _2.__v.__b;
}, A.__r = 0, Y = 0;

// https://esm.sh/stable/preact@10.19.6/denonext/hooks.js
var c;
var r2;
var H2;
var b2;
var v = 0;
var x2 = [];
var p2 = [];
var o2 = a;
var g = o2.__b;
var C = o2.__r;
var A2 = o2.diffed;
var D2 = o2.__c;
var F2 = o2.unmount;
var k = o2.__;
function l(t2, _2) {
  o2.__h && o2.__h(r2, t2, v || _2), v = 0;
  var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t2 >= u5.__.length && u5.__.push({ __V: p2 }), u5.__[t2];
}
function I2(t2) {
  return v = 1, R2(U, t2);
}
function R2(t2, _2, u5) {
  var n3 = l(c++, 2);
  if (n3.t = t2, !n3.__c && (n3.__ = [u5 ? u5(_2) : U(void 0, _2), function(a2) {
    var f2 = n3.__N ? n3.__N[0] : n3.__[0], s2 = n3.t(f2, a2);
    f2 !== s2 && (n3.__N = [s2, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r2, !r2.u)) {
    var i = function(a2, f2, s2) {
      if (!n3.__c.__H)
        return true;
      var m2 = n3.__c.__H.__.filter(function(e2) {
        return !!e2.__c;
      });
      if (m2.every(function(e2) {
        return !e2.__N;
      }))
        return !h3 || h3.call(this, a2, f2, s2);
      var V3 = false;
      return m2.forEach(function(e2) {
        if (e2.__N) {
          var P3 = e2.__[0];
          e2.__ = e2.__N, e2.__N = void 0, P3 !== e2.__[0] && (V3 = true);
        }
      }), !(!V3 && n3.__c.props === a2) && (!h3 || h3.call(this, a2, f2, s2));
    };
    r2.u = true;
    var h3 = r2.shouldComponentUpdate, N2 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(a2, f2, s2) {
      if (this.__e) {
        var m2 = h3;
        h3 = void 0, i(a2, f2, s2), h3 = m2;
      }
      N2 && N2.call(this, a2, f2, s2);
    }, r2.shouldComponentUpdate = i;
  }
  return n3.__N || n3.__;
}
function z2(t2, _2) {
  var u5 = l(c++, 3);
  !o2.__s && y(u5.__H, _2) && (u5.__ = t2, u5.i = _2, r2.__H.__h.push(u5));
}
function S2(t2, _2) {
  var u5 = l(c++, 4);
  !o2.__s && y(u5.__H, _2) && (u5.__ = t2, u5.i = _2, r2.__h.push(u5));
}
function L(t2) {
  return v = 5, T(function() {
    return { current: t2 };
  }, []);
}
function M2(t2, _2, u5) {
  v = 6, S2(function() {
    return typeof t2 == "function" ? (t2(_2()), function() {
      return t2(null);
    }) : t2 ? (t2.current = _2(), function() {
      return t2.current = null;
    }) : void 0;
  }, u5 == null ? u5 : u5.concat(t2));
}
function T(t2, _2) {
  var u5 = l(c++, 7);
  return y(u5.__H, _2) ? (u5.__V = t2(), u5.i = _2, u5.__h = t2, u5.__V) : u5.__;
}
function G2(t2, _2) {
  return v = 8, T(function() {
    return t2;
  }, _2);
}
function J2(t2) {
  var _2 = r2.context[t2.__c], u5 = l(c++, 9);
  return u5.c = t2, _2 ? (u5.__ == null && (u5.__ = true, _2.sub(r2)), _2.props.value) : t2.__;
}
function K2(t2, _2) {
  o2.useDebugValue && o2.useDebugValue(_2 ? _2(t2) : t2);
}
function O2(t2) {
  var _2 = l(c++, 10), u5 = I2();
  return _2.__ = t2, r2.componentDidCatch || (r2.componentDidCatch = function(n3, i) {
    _2.__ && _2.__(n3, i), u5[1](n3);
  }), [u5[0], function() {
    u5[1](void 0);
  }];
}
function Q2() {
  var t2 = l(c++, 11);
  if (!t2.__) {
    for (var _2 = r2.__v; _2 !== null && !_2.__m && _2.__ !== null; )
      _2 = _2.__;
    var u5 = _2.__m || (_2.__m = [0, 0]);
    t2.__ = "P" + u5[0] + "-" + u5[1]++;
  }
  return t2.__;
}
function W2() {
  for (var t2; t2 = x2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(d2), t2.__H.__h.forEach(E2), t2.__H.__h = [];
      } catch (_2) {
        t2.__H.__h = [], o2.__e(_2, t2.__v);
      }
}
o2.__b = function(t2) {
  r2 = null, g && g(t2);
}, o2.__ = function(t2, _2) {
  t2 && _2.__k && _2.__k.__m && (t2.__m = _2.__k.__m), k && k(t2, _2);
}, o2.__r = function(t2) {
  C && C(t2), c = 0;
  var _2 = (r2 = t2.__c).__H;
  _2 && (H2 === r2 ? (_2.__h = [], r2.__h = [], _2.__.forEach(function(u5) {
    u5.__N && (u5.__ = u5.__N), u5.__V = p2, u5.__N = u5.i = void 0;
  })) : (_2.__h.forEach(d2), _2.__h.forEach(E2), _2.__h = [], c = 0)), H2 = r2;
}, o2.diffed = function(t2) {
  A2 && A2(t2);
  var _2 = t2.__c;
  _2 && _2.__H && (_2.__H.__h.length && (x2.push(_2) !== 1 && b2 === o2.requestAnimationFrame || ((b2 = o2.requestAnimationFrame) || j)(W2)), _2.__H.__.forEach(function(u5) {
    u5.i && (u5.__H = u5.i), u5.__V !== p2 && (u5.__ = u5.__V), u5.i = void 0, u5.__V = p2;
  })), H2 = r2 = null;
}, o2.__c = function(t2, _2) {
  _2.some(function(u5) {
    try {
      u5.__h.forEach(d2), u5.__h = u5.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _2.some(function(i) {
        i.__h && (i.__h = []);
      }), _2 = [], o2.__e(n3, u5.__v);
    }
  }), D2 && D2(t2, _2);
}, o2.unmount = function(t2) {
  F2 && F2(t2);
  var _2, u5 = t2.__c;
  u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
    try {
      d2(n3);
    } catch (i) {
      _2 = i;
    }
  }), u5.__H = void 0, _2 && o2.__e(_2, u5.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _2, u5 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_2), setTimeout(t2);
  }, n3 = setTimeout(u5, 100);
  q2 && (_2 = requestAnimationFrame(u5));
}
function d2(t2) {
  var _2 = r2, u5 = t2.__c;
  typeof u5 == "function" && (t2.__c = void 0, u5()), r2 = _2;
}
function E2(t2) {
  var _2 = r2;
  t2.__c = t2.__(), r2 = _2;
}
function y(t2, _2) {
  return !t2 || t2.length !== _2.length || _2.some(function(u5, n3) {
    return u5 !== t2[n3];
  });
}
function U(t2, _2) {
  return typeof _2 == "function" ? _2(t2) : _2;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e2, t2) {
  for (var n3 in t2)
    e2[n3] = t2[n3];
  return e2;
}
function b3(e2, t2) {
  for (var n3 in e2)
    if (n3 !== "__source" && !(n3 in t2))
      return true;
  for (var r4 in t2)
    if (r4 !== "__source" && e2[r4] !== t2[r4])
      return true;
  return false;
}
function C2(e2, t2) {
  this.props = e2, this.context = t2;
}
function Q3(e2, t2) {
  function n3(o4) {
    var u5 = this.props.ref, a2 = u5 == o4.ref;
    return !a2 && u5 && (u5.call ? u5(null) : u5.current = null), t2 ? !t2(this.props, o4) || !a2 : b3(this.props, o4);
  }
  function r4(o4) {
    return this.shouldComponentUpdate = n3, re(e2, o4);
  }
  return r4.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r4.prototype.isReactComponent = true, r4.__f = true, r4;
}
(C2.prototype = new W()).isPureReactComponent = true, C2.prototype.shouldComponentUpdate = function(e2, t2) {
  return b3(this.props, e2) || b3(this.state, t2);
};
var N = a.__b;
a.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), N && N(e2);
};
var X2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ee2(e2) {
  function t2(n3) {
    var r4 = L2({}, n3);
    return delete r4.ref, e2(r4, n3.ref || null);
  }
  return t2.$$typeof = X2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
}
var R3 = function(e2, t2) {
  return e2 == null ? null : se(se(e2).map(t2));
};
var te2 = { map: R3, forEach: R3, count: function(e2) {
  return e2 ? se(e2).length : 0;
}, only: function(e2) {
  var t2 = se(e2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: se };
var ne2 = a.__e;
a.__e = function(e2, t2, n3, r4) {
  if (e2.then) {
    for (var o4, u5 = t2; u5 = u5.__; )
      if ((o4 = u5.__c) && o4.__c)
        return t2.__e == null && (t2.__e = n3.__e, t2.__k = n3.__k), o4.__c(e2, t2);
  }
  ne2(e2, t2, n3, r4);
};
var x3 = a.unmount;
function T2(e2, t2, n3) {
  return e2 && (e2.__c && e2.__c.__H && (e2.__c.__H.__.forEach(function(r4) {
    typeof r4.__c == "function" && r4.__c();
  }), e2.__c.__H = null), (e2 = L2({}, e2)).__c != null && (e2.__c.__P === n3 && (e2.__c.__P = t2), e2.__c = null), e2.__k = e2.__k && e2.__k.map(function(r4) {
    return T2(r4, t2, n3);
  })), e2;
}
function A3(e2, t2, n3) {
  return e2 && n3 && (e2.__v = null, e2.__k = e2.__k && e2.__k.map(function(r4) {
    return A3(r4, t2, n3);
  }), e2.__c && e2.__c.__P === t2 && (e2.__e && n3.appendChild(e2.__e), e2.__c.__e = true, e2.__c.__P = n3)), e2;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e2) {
  var t2 = e2.__.__c;
  return t2 && t2.__a && t2.__a(e2);
}
function re2(e2) {
  var t2, n3, r4;
  function o4(u5) {
    if (t2 || (t2 = e2()).then(function(a2) {
      n3 = a2.default || a2;
    }, function(a2) {
      r4 = a2;
    }), r4)
      throw r4;
    if (!n3)
      throw t2;
    return re(n3, u5);
  }
  return o4.displayName = "Lazy", o4.__f = true, o4;
}
function p3() {
  this.u = null, this.o = null;
}
a.unmount = function(e2) {
  var t2 = e2.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & e2.__u && (e2.type = null), x3 && x3(e2);
}, (h.prototype = new W()).__c = function(e2, t2) {
  var n3 = t2.__c, r4 = this;
  r4.t == null && (r4.t = []), r4.t.push(n3);
  var o4 = F3(r4.__v), u5 = false, a2 = function() {
    u5 || (u5 = true, n3.__R = null, o4 ? o4(l3) : l3());
  };
  n3.__R = a2;
  var l3 = function() {
    if (!--r4.__u) {
      if (r4.state.__a) {
        var s2 = r4.state.__a;
        r4.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g2;
      for (r4.setState({ __a: r4.__b = null }); g2 = r4.t.pop(); )
        g2.forceUpdate();
    }
  };
  r4.__u++ || 32 & t2.__u || r4.setState({ __a: r4.__b = r4.__v.__k[0] }), e2.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r4 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n3, r4.__O = r4.__P);
    }
    this.__b = null;
  }
  var o4 = t2.__a && re(H, null, e2.fallback);
  return o4 && (o4.__u &= -33), [re(H, null, t2.__a ? null : e2.children), o4];
};
var k2 = function(e2, t2, n3) {
  if (++n3[1] === n3[0] && e2.o.delete(t2), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
    for (n3 = e2.u; n3; ) {
      for (; n3.length > 3; )
        n3.pop()();
      if (n3[1] < n3[0])
        break;
      e2.u = n3 = n3[2];
    }
};
function oe2(e2) {
  return this.getChildContext = function() {
    return e2.context;
  }, e2.children;
}
function ue2(e2) {
  var t2 = this, n3 = e2.i;
  t2.componentWillUnmount = function() {
    pe(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n3 && t2.componentWillUnmount(), t2.l || (t2.i = n3, t2.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(r4) {
    this.childNodes.push(r4), t2.i.appendChild(r4);
  }, insertBefore: function(r4, o4) {
    this.childNodes.push(r4), t2.i.appendChild(r4);
  }, removeChild: function(r4) {
    this.childNodes.splice(this.childNodes.indexOf(r4) >>> 1, 1), t2.i.removeChild(r4);
  } }), pe(re(oe2, { context: t2.context }, e2.__v), t2.l);
}
function ae2(e2, t2) {
  var n3 = re(ue2, { __v: e2, i: t2 });
  return n3.containerInfo = t2, n3;
}
(p3.prototype = new W()).__a = function(e2) {
  var t2 = this, n3 = F3(t2.__v), r4 = t2.o.get(e2);
  return r4[0]++, function(o4) {
    var u5 = function() {
      t2.props.revealOrder ? (r4.push(o4), k2(t2, e2, r4)) : o4();
    };
    n3 ? n3(u5) : u5();
  };
}, p3.prototype.render = function(e2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e2.children);
  e2.revealOrder && e2.revealOrder[0] === "b" && t2.reverse();
  for (var n3 = t2.length; n3--; )
    this.o.set(t2[n3], this.u = [1, 0, this.u]);
  return e2.children;
}, p3.prototype.componentDidUpdate = p3.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t2, n3) {
    k2(e2, n3, t2);
  });
};
var V2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
var ie2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var le2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var se2 = /[A-Z0-9]/g;
var _e2 = typeof document < "u";
var ce2 = function(e2) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e2);
};
function fe2(e2, t2, n3) {
  return t2.__k == null && (t2.textContent = ""), pe(e2, t2), typeof n3 == "function" && n3(), e2 ? e2.__c : null;
}
function pe2(e2, t2, n3) {
  return ae(e2, t2), typeof n3 == "function" && n3(), e2 ? e2.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
  Object.defineProperty(W.prototype, e2, { configurable: true, get: function() {
    return this["UNSAFE_" + e2];
  }, set: function(t2) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
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
a.event = function(e2) {
  return O3 && (e2 = O3(e2)), e2.persist = de2, e2.isPropagationStopped = he2, e2.isDefaultPrevented = ve2, e2.nativeEvent = e2;
};
var S3;
var me = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var P = a.vnode;
a.vnode = function(e2) {
  typeof e2.type == "string" && function(t2) {
    var n3 = t2.props, r4 = t2.type, o4 = {};
    for (var u5 in n3) {
      var a2 = n3[u5];
      if (!(u5 === "value" && "defaultValue" in n3 && a2 == null || _e2 && u5 === "children" && r4 === "noscript" || u5 === "class" || u5 === "className")) {
        var l3 = u5.toLowerCase();
        u5 === "defaultValue" && "value" in n3 && n3.value == null ? u5 = "value" : u5 === "download" && a2 === true ? a2 = "" : l3 === "translate" && a2 === "no" ? a2 = false : l3 === "ondoubleclick" ? u5 = "ondblclick" : l3 !== "onchange" || r4 !== "input" && r4 !== "textarea" || ce2(n3.type) ? l3 === "onfocus" ? u5 = "onfocusin" : l3 === "onblur" ? u5 = "onfocusout" : le2.test(u5) ? u5 = l3 : r4.indexOf("-") === -1 && ie2.test(u5) ? u5 = u5.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l3 = u5 = "oninput", l3 === "oninput" && o4[u5 = l3] && (u5 = "oninputCapture"), o4[u5] = a2;
      }
    }
    r4 == "select" && o4.multiple && Array.isArray(o4.value) && (o4.value = se(n3.children).forEach(function(s2) {
      s2.props.selected = o4.value.indexOf(s2.props.value) != -1;
    })), r4 == "select" && o4.defaultValue != null && (o4.value = se(n3.children).forEach(function(s2) {
      s2.props.selected = o4.multiple ? o4.defaultValue.indexOf(s2.props.value) != -1 : o4.defaultValue == s2.props.value;
    })), n3.class && !n3.className ? (o4.class = n3.class, Object.defineProperty(o4, "className", me)) : (n3.className && !n3.class || n3.class && n3.className) && (o4.class = o4.className = n3.className), t2.props = o4;
  }(e2), e2.$$typeof = V2, P && P(e2);
};
var w2 = a.__r;
a.__r = function(e2) {
  w2 && w2(e2), S3 = e2.__c;
};
var U2 = a.diffed;
a.diffed = function(e2) {
  U2 && U2(e2);
  var t2 = e2.props, n3 = e2.__e;
  n3 != null && e2.type === "textarea" && "value" in t2 && t2.value !== n3.value && (n3.value = t2.value == null ? "" : t2.value), S3 = null;
};
var ye = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
  return S3.__n[e2.__c].props.value;
} } } };
var Le = "17.0.2";
function be(e2) {
  return re.bind(null, e2);
}
function m(e2) {
  return !!e2 && e2.$$typeof === V2;
}
function Ce(e2) {
  return m(e2) && e2.type === H;
}
function Ee(e2) {
  return m(e2) ? he.apply(null, arguments) : e2;
}
function Se(e2) {
  return !!e2.__k && (pe(null, e2), true);
}
function ge(e2) {
  return e2 && (e2.base || e2.nodeType === 1 && e2) || null;
}
var Ne = function(e2, t2) {
  return e2(t2);
};
var Re = function(e2, t2) {
  return e2(t2);
};
var xe = H;
function M3(e2) {
  e2();
}
function ke(e2) {
  return e2;
}
function Oe() {
  return [false, M3];
}
var Pe = S2;
var we = m;
function Ue(e2, t2) {
  var n3 = t2(), r4 = I2({ h: { __: n3, v: t2 } }), o4 = r4[0].h, u5 = r4[1];
  return S2(function() {
    o4.__ = n3, o4.v = t2, y2(o4) && u5({ h: o4 });
  }, [e2, n3, t2]), z2(function() {
    return y2(o4) && u5({ h: o4 }), e2(function() {
      y2(o4) && u5({ h: o4 });
    });
  }, [e2]), n3;
}
function y2(e2) {
  var t2, n3, r4 = e2.v, o4 = e2.__;
  try {
    var u5 = r4();
    return !((t2 = o4) === (n3 = u5) && (t2 !== 0 || 1 / t2 == 1 / n3) || t2 != t2 && n3 != n3);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p3, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e2, f2, { checkForDefaultPrevented: t2 = true } = {}) {
  return function(c2) {
    if (e2?.(c2), t2 === false || !c2.defaultPrevented)
      return f2?.(c2);
  };
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t2, c2 = []) {
  let o4 = [];
  function a2(r4, e2) {
    let n3 = ve(e2), s2 = o4.length;
    o4 = [...o4, e2];
    function f2(d5) {
      let { scope: i, children: x5, ...$3 } = d5, h3 = i?.[t2][s2] || n3, S5 = T(() => $3, Object.values($3));
      return re(h3.Provider, { value: S5 }, x5);
    }
    function v2(d5, i) {
      let x5 = i?.[t2][s2] || n3, $3 = J2(x5);
      if ($3)
        return $3;
      if (e2 !== void 0)
        return e2;
      throw new Error(`\`${d5}\` must be used within \`${r4}\``);
    }
    return f2.displayName = r4 + "Provider", [f2, v2];
  }
  let u5 = () => {
    let r4 = o4.map((e2) => ve(e2));
    return function(n3) {
      let s2 = n3?.[t2] || r4;
      return T(() => ({ [`__scope${t2}`]: { ...n3, [t2]: s2 } }), [n3, s2]);
    };
  };
  return u5.scopeName = t2, [a2, C3(u5, ...c2)];
}
function C3(...t2) {
  let c2 = t2[0];
  if (t2.length === 1)
    return c2;
  let o4 = () => {
    let a2 = t2.map((u5) => ({ useScope: u5(), scopeName: u5.scopeName }));
    return function(r4) {
      let e2 = a2.reduce((n3, { useScope: s2, scopeName: f2 }) => {
        let d5 = s2(r4)[`__scope${f2}`];
        return { ...n3, ...d5 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e2 }), [e2]);
    };
  };
  return o4.scopeName = c2.scopeName, o4;
}

// https://esm.sh/v132/@radix-ui/react-use-callback-ref@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-callback-ref.mjs
function l2(f2) {
  let e2 = L(f2);
  return z2(() => {
    e2.current = f2;
  }), T(() => (...u5) => {
    var r4;
    return (r4 = e2.current) === null || r4 === void 0 ? void 0 : r4.call(e2, ...u5);
  }, []);
}

// https://esm.sh/v132/@radix-ui/react-use-controllable-state@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-controllable-state.mjs
function w3({ prop: e2, defaultProp: a2, onChange: s2 = () => {
} }) {
  let [t2, n3] = P2({ defaultProp: a2, onChange: s2 }), o4 = e2 !== void 0, f2 = o4 ? e2 : t2, l3 = l2(s2), $3 = G2((c2) => {
    if (o4) {
      let u5 = typeof c2 == "function" ? c2(e2) : c2;
      u5 !== e2 && l3(u5);
    } else
      n3(c2);
  }, [o4, e2, n3, l3]);
  return [f2, $3];
}
function P2({ defaultProp: e2, onChange: a2 }) {
  let s2 = I2(e2), [t2] = s2, n3 = L(t2), o4 = l2(a2);
  return z2(() => {
    n3.current !== t2 && (o4(t2), n3.current = t2);
  }, [t2, n3, o4]), s2;
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-compose-refs@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-compose-refs.mjs
function n(e2, f2) {
  typeof e2 == "function" ? e2(f2) : e2 != null && (e2.current = f2);
}
function t(...e2) {
  return (f2) => e2.forEach((o4) => n(o4, f2));
}
function u2(...e2) {
  return G2(t(...e2), e2);
}

// https://esm.sh/v132/@radix-ui/react-slot@1.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-slot.mjs
var b4 = ee2((n3, t2) => {
  let { children: e2, ...r4 } = n3, o4 = te2.toArray(e2), l3 = o4.find(I3);
  if (l3) {
    let c2 = l3.props.children, a2 = o4.map((m2) => m2 === l3 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m2);
    return re($2, p({}, r4, { ref: t2 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p({}, r4, { ref: t2 }), e2);
});
b4.displayName = "Slot";
var $2 = ee2((n3, t2) => {
  let { children: e2, ...r4 } = n3;
  return m(e2) ? Ee(e2, { ...X3(r4, e2.props), ref: t2 ? t(t2, e2.ref) : e2.ref }) : te2.count(e2) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n3 }) => re(H, null, n3);
function I3(n3) {
  return m(n3) && n3.type === y3;
}
function X3(n3, t2) {
  let e2 = { ...t2 };
  for (let r4 in t2) {
    let o4 = n3[r4], l3 = t2[r4];
    /^on[A-Z]/.test(r4) ? o4 && l3 ? e2[r4] = (...a2) => {
      l3(...a2), o4(...a2);
    } : o4 && (e2[r4] = o4) : r4 === "style" ? e2[r4] = { ...o4, ...l3 } : r4 === "className" && (e2[r4] = [o4, l3].filter(Boolean).join(" "));
  }
  return { ...n3, ...e2 };
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u3 = d3.reduce((t2, e2) => {
  let f2 = ee2((r4, o4) => {
    let { asChild: s2, ...a2 } = r4, i = s2 ? b4 : e2;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i, p({}, a2, { ref: o4 }));
  });
  return f2.displayName = `Primitive.${e2}`, { ...t2, [e2]: f2 };
}, {});

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S4(n3, t2) {
  return R2((o4, r4) => {
    let i = t2[o4][r4];
    return i ?? o4;
  }, n3);
}
var U3 = (n3) => {
  let { present: t2, children: o4 } = n3, r4 = y4(t2), i = typeof o4 == "function" ? o4({ present: r4.isPresent }) : te2.only(o4), a2 = u2(r4.ref, i.ref);
  return typeof o4 == "function" || r4.isPresent ? Ee(i, { ref: a2 }) : null;
};
U3.displayName = "Presence";
function y4(n3) {
  let [t2, o4] = I2(), r4 = L({}), i = L(n3), a2 = L("none"), N2 = n3 ? "mounted" : "unmounted", [f2, s2] = S4(N2, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e2 = d4(r4.current);
    a2.current = f2 === "mounted" ? e2 : "none";
  }, [f2]), e(() => {
    let e2 = r4.current, u5 = i.current;
    if (u5 !== n3) {
      let $3 = a2.current, m2 = d4(e2);
      n3 ? s2("MOUNT") : m2 === "none" || e2?.display === "none" ? s2("UNMOUNT") : s2(u5 && $3 !== m2 ? "ANIMATION_OUT" : "UNMOUNT"), i.current = n3;
    }
  }, [n3, s2]), e(() => {
    if (t2) {
      let e2 = (c2) => {
        let m2 = d4(r4.current).includes(c2.animationName);
        c2.target === t2 && m2 && Re(() => s2("ANIMATION_END"));
      }, u5 = (c2) => {
        c2.target === t2 && (a2.current = d4(r4.current));
      };
      return t2.addEventListener("animationstart", u5), t2.addEventListener("animationcancel", e2), t2.addEventListener("animationend", e2), () => {
        t2.removeEventListener("animationstart", u5), t2.removeEventListener("animationcancel", e2), t2.removeEventListener("animationend", e2);
      };
    } else
      s2("ANIMATION_END");
  }, [t2, s2]), { isPresent: ["mounted", "unmountSuspended"].includes(f2), ref: G2((e2) => {
    e2 && (r4.current = getComputedStyle(e2)), o4(e2);
  }, []) };
}
function d4(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u4 = compat_exports["useId".toString()] || (() => {
});
var r3 = 0;
function n2(t2) {
  let [e2, o4] = I2(u4());
  return e(() => {
    t2 || o4(($3) => $3 ?? String(r3++));
  }, [t2]), t2 || (e2 ? `radix-${e2}` : "");
}

// https://esm.sh/v132/@radix-ui/react-collapsible@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collapsible.mjs
var R4 = "Collapsible";
var [k3, ne3] = _(R4);
var [j2, x4] = k3(R4);
var F4 = ee2((e2, s2) => {
  let { __scopeCollapsible: a2, open: o4, defaultOpen: t2, disabled: i, onOpenChange: r4, ...b5 } = e2, [d5 = false, c2] = w3({ prop: o4, defaultProp: t2, onChange: r4 });
  return re(j2, { scope: a2, disabled: i, contentId: n2(), open: d5, onOpenToggle: G2(() => c2((m2) => !m2), [c2]) }, re(u3.div, p({ "data-state": h2(d5), "data-disabled": i ? "" : void 0 }, b5, { ref: s2 })));
});
var B2 = "CollapsibleTrigger";
var G3 = ee2((e2, s2) => {
  let { __scopeCollapsible: a2, ...o4 } = e2, t2 = x4(B2, a2);
  return re(u3.button, p({ type: "button", "aria-controls": t2.contentId, "aria-expanded": t2.open || false, "data-state": h2(t2.open), "data-disabled": t2.disabled ? "" : void 0, disabled: t2.disabled }, o4, { ref: s2, onClick: o3(e2.onClick, t2.onOpenToggle) }));
});
var E3 = "CollapsibleContent";
var H3 = ee2((e2, s2) => {
  let { forceMount: a2, ...o4 } = e2, t2 = x4(E3, e2.__scopeCollapsible);
  return re(U3, { present: a2 || t2.open }, ({ present: i }) => re(q3, p({}, o4, { ref: s2, present: i })));
});
var q3 = ee2((e2, s2) => {
  let { __scopeCollapsible: a2, present: o4, children: t2, ...i } = e2, r4 = x4(E3, a2), [b5, d5] = I2(o4), c2 = L(null), m2 = u2(s2, c2), _2 = L(0), v2 = _2.current, y5 = L(0), K3 = y5.current, C4 = r4.open || b5, P3 = L(C4), $3 = L();
  return z2(() => {
    let n3 = requestAnimationFrame(() => P3.current = false);
    return () => cancelAnimationFrame(n3);
  }, []), e(() => {
    let n3 = c2.current;
    if (n3) {
      $3.current = $3.current || { transitionDuration: n3.style.transitionDuration, animationName: n3.style.animationName }, n3.style.transitionDuration = "0s", n3.style.animationName = "none";
      let Q4 = n3.getBoundingClientRect();
      _2.current = Q4.height, y5.current = Q4.width, P3.current || (n3.style.transitionDuration = $3.current.transitionDuration, n3.style.animationName = $3.current.animationName), d5(o4);
    }
  }, [r4.open, o4]), re(u3.div, p({ "data-state": h2(r4.open), "data-disabled": r4.disabled ? "" : void 0, id: r4.contentId, hidden: !C4 }, i, { ref: m2, style: { "--radix-collapsible-content-height": v2 ? `${v2}px` : void 0, "--radix-collapsible-content-width": K3 ? `${K3}px` : void 0, ...e2.style } }), C4 && t2);
});
function h2(e2) {
  return e2 ? "open" : "closed";
}
var oe3 = F4;

// ../components/ui/collapsible.tsx
var Collapsible = oe3;
var CollapsibleTrigger = G3;
var CollapsibleContent = H3;
export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
};
