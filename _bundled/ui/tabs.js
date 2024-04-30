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
function b(e3, _4) {
  for (var t2 in _4)
    e3[t2] = _4[t2];
  return e3;
}
function Z(e3) {
  var _4 = e3.parentNode;
  _4 && _4.removeChild(e3);
}
function re(e3, _4, t2) {
  var i3, n3, r5, l4 = {};
  for (r5 in _4)
    r5 == "key" ? i3 = _4[r5] : r5 == "ref" ? n3 = _4[r5] : l4[r5] = _4[r5];
  if (arguments.length > 2 && (l4.children = arguments.length > 3 ? D.call(arguments, 2) : t2), typeof e3 == "function" && e3.defaultProps != null)
    for (r5 in e3.defaultProps)
      l4[r5] === void 0 && (l4[r5] = e3.defaultProps[r5]);
  return S(e3, l4, i3, n3, null);
}
function S(e3, _4, t2, i3, n3) {
  var r5 = { type: e3, props: _4, key: t2, ref: i3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n3 ?? ++Q, __i: -1, __u: 0 };
  return n3 == null && a.vnode != null && a.vnode(r5), r5;
}
function de() {
  return { current: null };
}
function H(e3) {
  return e3.children;
}
function W(e3, _4) {
  this.props = e3, this.context = _4;
}
function w(e3, _4) {
  if (_4 == null)
    return e3.__ ? w(e3.__, e3.__i + 1) : null;
  for (var t2; _4 < e3.__k.length; _4++)
    if ((t2 = e3.__k[_4]) != null && t2.__e != null)
      return t2.__e;
  return typeof e3.type == "function" ? w(e3) : null;
}
function ie(e3, _4, t2) {
  var i3, n3 = e3.__v, r5 = n3.__e, l4 = e3.__P;
  if (l4)
    return (i3 = b({}, n3)).__v = n3.__v + 1, a.vnode && a.vnode(i3), G(l4, i3, n3, e3.__n, l4.ownerSVGElement !== void 0, 32 & n3.__u ? [r5] : null, _4, r5 ?? w(n3), !!(32 & n3.__u), t2), i3.__v = n3.__v, i3.__.__k[i3.__i] = i3, i3.__d = void 0, i3.__e != r5 && ee(i3), i3;
}
function ee(e3) {
  var _4, t2;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, _4 = 0; _4 < e3.__k.length; _4++)
      if ((t2 = e3.__k[_4]) != null && t2.__e != null) {
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
  var e3, _4, t2, i3 = [], n3 = [];
  for (x.sort($); e3 = x.shift(); )
    e3.__d && (t2 = x.length, _4 = ie(e3, i3, n3) || _4, t2 === 0 || x.length > t2 ? (R(i3, _4, n3), n3.length = i3.length = 0, _4 = void 0, x.sort($)) : _4 && a.__c && a.__c(_4, O));
  _4 && R(i3, _4, n3), A.__r = 0;
}
function _e(e3, _4, t2, i3, n3, r5, l4, u5, c2, s2, p4) {
  var o5, m2, f2, h3, k3, v2 = i3 && i3.__k || O, d7 = _4.length;
  for (t2.__d = c2, le(t2, _4, v2), c2 = t2.__d, o5 = 0; o5 < d7; o5++)
    (f2 = t2.__k[o5]) != null && typeof f2 != "boolean" && typeof f2 != "function" && (m2 = f2.__i === -1 ? E : v2[f2.__i] || E, f2.__i = o5, G(e3, f2, m2, n3, r5, l4, u5, c2, s2, p4), h3 = f2.__e, f2.ref && m2.ref != f2.ref && (m2.ref && V(m2.ref, null, f2), p4.push(f2.ref, f2.__c || h3, f2)), k3 == null && h3 != null && (k3 = h3), 65536 & f2.__u || m2.__k === f2.__k ? c2 = te(f2, c2, e3) : typeof f2.type == "function" && f2.__d !== void 0 ? c2 = f2.__d : h3 && (c2 = h3.nextSibling), f2.__d = void 0, f2.__u &= -196609);
  t2.__d = c2, t2.__e = k3;
}
function le(e3, _4, t2) {
  var i3, n3, r5, l4, u5, c2 = _4.length, s2 = t2.length, p4 = s2, o5 = 0;
  for (e3.__k = [], i3 = 0; i3 < c2; i3++)
    l4 = i3 + o5, (n3 = e3.__k[i3] = (n3 = _4[i3]) == null || typeof n3 == "boolean" || typeof n3 == "function" ? null : typeof n3 == "string" || typeof n3 == "number" || typeof n3 == "bigint" || n3.constructor == String ? S(null, n3, null, null, null) : F(n3) ? S(H, { children: n3 }, null, null, null) : n3.constructor === void 0 && n3.__b > 0 ? S(n3.type, n3.props, n3.key, n3.ref ? n3.ref : null, n3.__v) : n3) != null ? (n3.__ = e3, n3.__b = e3.__b + 1, u5 = ue(n3, t2, l4, p4), n3.__i = u5, r5 = null, u5 !== -1 && (p4--, (r5 = t2[u5]) && (r5.__u |= 131072)), r5 == null || r5.__v === null ? (u5 == -1 && o5--, typeof n3.type != "function" && (n3.__u |= 65536)) : u5 !== l4 && (u5 === l4 + 1 ? o5++ : u5 > l4 ? p4 > c2 - l4 ? o5 += u5 - l4 : o5-- : u5 < l4 ? u5 == l4 - 1 && (o5 = u5 - l4) : o5 = 0, u5 !== i3 + o5 && (n3.__u |= 65536))) : (r5 = t2[l4]) && r5.key == null && r5.__e && !(131072 & r5.__u) && (r5.__e == e3.__d && (e3.__d = w(r5)), B(r5, r5, false), t2[l4] = null, p4--);
  if (p4)
    for (i3 = 0; i3 < s2; i3++)
      (r5 = t2[i3]) != null && !(131072 & r5.__u) && (r5.__e == e3.__d && (e3.__d = w(r5)), B(r5, r5));
}
function te(e3, _4, t2) {
  var i3, n3;
  if (typeof e3.type == "function") {
    for (i3 = e3.__k, n3 = 0; i3 && n3 < i3.length; n3++)
      i3[n3] && (i3[n3].__ = e3, _4 = te(i3[n3], _4, t2));
    return _4;
  }
  e3.__e != _4 && (t2.insertBefore(e3.__e, _4 || null), _4 = e3.__e);
  do
    _4 = _4 && _4.nextSibling;
  while (_4 != null && _4.nodeType === 8);
  return _4;
}
function se(e3, _4) {
  return _4 = _4 || [], e3 == null || typeof e3 == "boolean" || (F(e3) ? e3.some(function(t2) {
    se(t2, _4);
  }) : _4.push(e3)), _4;
}
function ue(e3, _4, t2, i3) {
  var n3 = e3.key, r5 = e3.type, l4 = t2 - 1, u5 = t2 + 1, c2 = _4[t2];
  if (c2 === null || c2 && n3 == c2.key && r5 === c2.type && !(131072 & c2.__u))
    return t2;
  if (i3 > (c2 != null && !(131072 & c2.__u) ? 1 : 0))
    for (; l4 >= 0 || u5 < _4.length; ) {
      if (l4 >= 0) {
        if ((c2 = _4[l4]) && !(131072 & c2.__u) && n3 == c2.key && r5 === c2.type)
          return l4;
        l4--;
      }
      if (u5 < _4.length) {
        if ((c2 = _4[u5]) && !(131072 & c2.__u) && n3 == c2.key && r5 === c2.type)
          return u5;
        u5++;
      }
    }
  return -1;
}
function q(e3, _4, t2) {
  _4[0] === "-" ? e3.setProperty(_4, t2 ?? "") : e3[_4] = t2 == null ? "" : typeof t2 != "number" || oe.test(_4) ? t2 : t2 + "px";
}
function M(e3, _4, t2, i3, n3) {
  var r5;
  e:
    if (_4 === "style")
      if (typeof t2 == "string")
        e3.style.cssText = t2;
      else {
        if (typeof i3 == "string" && (e3.style.cssText = i3 = ""), i3)
          for (_4 in i3)
            t2 && _4 in t2 || q(e3.style, _4, "");
        if (t2)
          for (_4 in t2)
            i3 && t2[_4] === i3[_4] || q(e3.style, _4, t2[_4]);
      }
    else if (_4[0] === "o" && _4[1] === "n")
      r5 = _4 !== (_4 = _4.replace(/(PointerCapture)$|Capture$/i, "$1")), _4 = _4.toLowerCase() in e3 ? _4.toLowerCase().slice(2) : _4.slice(2), e3.l || (e3.l = {}), e3.l[_4 + r5] = t2, t2 ? i3 ? t2.u = i3.u : (t2.u = Date.now(), e3.addEventListener(_4, r5 ? K : J, r5)) : e3.removeEventListener(_4, r5 ? K : J, r5);
    else {
      if (n3)
        _4 = _4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_4 !== "width" && _4 !== "height" && _4 !== "href" && _4 !== "list" && _4 !== "form" && _4 !== "tabIndex" && _4 !== "download" && _4 !== "rowSpan" && _4 !== "colSpan" && _4 !== "role" && _4 in e3)
        try {
          e3[_4] = t2 ?? "";
          break e;
        } catch {
        }
      typeof t2 == "function" || (t2 == null || t2 === false && _4[4] !== "-" ? e3.removeAttribute(_4) : e3.setAttribute(_4, t2));
    }
}
function J(e3) {
  if (this.l) {
    var _4 = this.l[e3.type + false];
    if (e3.t) {
      if (e3.t <= _4.u)
        return;
    } else
      e3.t = Date.now();
    return _4(a.event ? a.event(e3) : e3);
  }
}
function K(e3) {
  if (this.l)
    return this.l[e3.type + true](a.event ? a.event(e3) : e3);
}
function G(e3, _4, t2, i3, n3, r5, l4, u5, c2, s2) {
  var p4, o5, m2, f2, h3, k3, v2, d7, y5, C6, T6, P5, j2, U5, N3, g3 = _4.type;
  if (_4.constructor !== void 0)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r5 = [u5 = _4.__e = t2.__e]), (p4 = a.__b) && p4(_4);
  e:
    if (typeof g3 == "function")
      try {
        if (d7 = _4.props, y5 = (p4 = g3.contextType) && i3[p4.__c], C6 = p4 ? y5 ? y5.props.value : p4.__ : i3, t2.__c ? v2 = (o5 = _4.__c = t2.__c).__ = o5.__E : ("prototype" in g3 && g3.prototype.render ? _4.__c = o5 = new g3(d7, C6) : (_4.__c = o5 = new W(d7, C6), o5.constructor = g3, o5.render = ce), y5 && y5.sub(o5), o5.props = d7, o5.state || (o5.state = {}), o5.context = C6, o5.__n = i3, m2 = o5.__d = true, o5.__h = [], o5._sb = []), o5.__s == null && (o5.__s = o5.state), g3.getDerivedStateFromProps != null && (o5.__s == o5.state && (o5.__s = b({}, o5.__s)), b(o5.__s, g3.getDerivedStateFromProps(d7, o5.__s))), f2 = o5.props, h3 = o5.state, o5.__v = _4, m2)
          g3.getDerivedStateFromProps == null && o5.componentWillMount != null && o5.componentWillMount(), o5.componentDidMount != null && o5.__h.push(o5.componentDidMount);
        else {
          if (g3.getDerivedStateFromProps == null && d7 !== f2 && o5.componentWillReceiveProps != null && o5.componentWillReceiveProps(d7, C6), !o5.__e && (o5.shouldComponentUpdate != null && o5.shouldComponentUpdate(d7, o5.__s, C6) === false || _4.__v === t2.__v)) {
            for (_4.__v !== t2.__v && (o5.props = d7, o5.state = o5.__s, o5.__d = false), _4.__e = t2.__e, _4.__k = t2.__k, _4.__k.forEach(function(L5) {
              L5 && (L5.__ = _4);
            }), T6 = 0; T6 < o5._sb.length; T6++)
              o5.__h.push(o5._sb[T6]);
            o5._sb = [], o5.__h.length && l4.push(o5);
            break e;
          }
          o5.componentWillUpdate != null && o5.componentWillUpdate(d7, o5.__s, C6), o5.componentDidUpdate != null && o5.__h.push(function() {
            o5.componentDidUpdate(f2, h3, k3);
          });
        }
        if (o5.context = C6, o5.props = d7, o5.__P = e3, o5.__e = false, P5 = a.__r, j2 = 0, "prototype" in g3 && g3.prototype.render) {
          for (o5.state = o5.__s, o5.__d = false, P5 && P5(_4), p4 = o5.render(o5.props, o5.state, o5.context), U5 = 0; U5 < o5._sb.length; U5++)
            o5.__h.push(o5._sb[U5]);
          o5._sb = [];
        } else
          do
            o5.__d = false, P5 && P5(_4), p4 = o5.render(o5.props, o5.state, o5.context), o5.state = o5.__s;
          while (o5.__d && ++j2 < 25);
        o5.state = o5.__s, o5.getChildContext != null && (i3 = b(b({}, i3), o5.getChildContext())), m2 || o5.getSnapshotBeforeUpdate == null || (k3 = o5.getSnapshotBeforeUpdate(f2, h3)), _e(e3, F(N3 = p4 != null && p4.type === H && p4.key == null ? p4.props.children : p4) ? N3 : [N3], _4, t2, i3, n3, r5, l4, u5, c2, s2), o5.base = _4.__e, _4.__u &= -161, o5.__h.length && l4.push(o5), v2 && (o5.__E = o5.__ = null);
      } catch (L5) {
        _4.__v = null, c2 || r5 != null ? (_4.__e = u5, _4.__u |= c2 ? 160 : 32, r5[r5.indexOf(u5)] = null) : (_4.__e = t2.__e, _4.__k = t2.__k), a.__e(L5, _4, t2);
      }
    else
      r5 == null && _4.__v === t2.__v ? (_4.__k = t2.__k, _4.__e = t2.__e) : _4.__e = fe(t2.__e, _4, t2, i3, n3, r5, l4, c2, s2);
  (p4 = a.diffed) && p4(_4);
}
function R(e3, _4, t2) {
  for (var i3 = 0; i3 < t2.length; i3++)
    V(t2[i3], t2[++i3], t2[++i3]);
  a.__c && a.__c(_4, e3), e3.some(function(n3) {
    try {
      e3 = n3.__h, n3.__h = [], e3.some(function(r5) {
        r5.call(n3);
      });
    } catch (r5) {
      a.__e(r5, n3.__v);
    }
  });
}
function fe(e3, _4, t2, i3, n3, r5, l4, u5, c2) {
  var s2, p4, o5, m2, f2, h3, k3, v2 = t2.props, d7 = _4.props, y5 = _4.type;
  if (y5 === "svg" && (n3 = true), r5 != null) {
    for (s2 = 0; s2 < r5.length; s2++)
      if ((f2 = r5[s2]) && "setAttribute" in f2 == !!y5 && (y5 ? f2.localName === y5 : f2.nodeType === 3)) {
        e3 = f2, r5[s2] = null;
        break;
      }
  }
  if (e3 == null) {
    if (y5 === null)
      return document.createTextNode(d7);
    e3 = n3 ? document.createElementNS("http://www.w3.org/2000/svg", y5) : document.createElement(y5, d7.is && d7), r5 = null, u5 = false;
  }
  if (y5 === null)
    v2 === d7 || u5 && e3.data === d7 || (e3.data = d7);
  else {
    if (r5 = r5 && D.call(e3.childNodes), v2 = t2.props || E, !u5 && r5 != null)
      for (v2 = {}, s2 = 0; s2 < e3.attributes.length; s2++)
        v2[(f2 = e3.attributes[s2]).name] = f2.value;
    for (s2 in v2)
      f2 = v2[s2], s2 == "children" || (s2 == "dangerouslySetInnerHTML" ? o5 = f2 : s2 === "key" || s2 in d7 || M(e3, s2, null, f2, n3));
    for (s2 in d7)
      f2 = d7[s2], s2 == "children" ? m2 = f2 : s2 == "dangerouslySetInnerHTML" ? p4 = f2 : s2 == "value" ? h3 = f2 : s2 == "checked" ? k3 = f2 : s2 === "key" || u5 && typeof f2 != "function" || v2[s2] === f2 || M(e3, s2, f2, v2[s2], n3);
    if (p4)
      u5 || o5 && (p4.__html === o5.__html || p4.__html === e3.innerHTML) || (e3.innerHTML = p4.__html), _4.__k = [];
    else if (o5 && (e3.innerHTML = ""), _e(e3, F(m2) ? m2 : [m2], _4, t2, i3, n3 && y5 !== "foreignObject", r5, l4, r5 ? r5[0] : t2.__k && w(t2, 0), u5, c2), r5 != null)
      for (s2 = r5.length; s2--; )
        r5[s2] != null && Z(r5[s2]);
    u5 || (s2 = "value", h3 !== void 0 && (h3 !== e3[s2] || y5 === "progress" && !h3 || y5 === "option" && h3 !== v2[s2]) && M(e3, s2, h3, v2[s2], false), s2 = "checked", k3 !== void 0 && k3 !== e3[s2] && M(e3, s2, k3, v2[s2], false));
  }
  return e3;
}
function V(e3, _4, t2) {
  try {
    typeof e3 == "function" ? e3(_4) : e3.current = _4;
  } catch (i3) {
    a.__e(i3, t2);
  }
}
function B(e3, _4, t2) {
  var i3, n3;
  if (a.unmount && a.unmount(e3), (i3 = e3.ref) && (i3.current && i3.current !== e3.__e || V(i3, null, _4)), (i3 = e3.__c) != null) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (r5) {
        a.__e(r5, _4);
      }
    i3.base = i3.__P = null, e3.__c = void 0;
  }
  if (i3 = e3.__k)
    for (n3 = 0; n3 < i3.length; n3++)
      i3[n3] && B(i3[n3], _4, t2 || typeof e3.type != "function");
  t2 || e3.__e == null || Z(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function ce(e3, _4, t2) {
  return this.constructor(e3, t2);
}
function pe(e3, _4, t2) {
  var i3, n3, r5, l4;
  a.__ && a.__(e3, _4), n3 = (i3 = typeof t2 == "function") ? null : t2 && t2.__k || _4.__k, r5 = [], l4 = [], G(_4, e3 = (!i3 && t2 || _4).__k = re(H, null, [e3]), n3 || E, E, _4.ownerSVGElement !== void 0, !i3 && t2 ? [t2] : n3 ? null : _4.firstChild ? D.call(_4.childNodes) : null, r5, !i3 && t2 ? t2 : n3 ? n3.__e : _4.firstChild, i3, l4), e3.__d = void 0, R(r5, e3, l4);
}
function ae(e3, _4) {
  pe(e3, _4, ae);
}
function he(e3, _4, t2) {
  var i3, n3, r5, l4, u5 = b({}, e3.props);
  for (r5 in e3.type && e3.type.defaultProps && (l4 = e3.type.defaultProps), _4)
    r5 == "key" ? i3 = _4[r5] : r5 == "ref" ? n3 = _4[r5] : u5[r5] = _4[r5] === void 0 && l4 !== void 0 ? l4[r5] : _4[r5];
  return arguments.length > 2 && (u5.children = arguments.length > 3 ? D.call(arguments, 2) : t2), S(e3.type, u5, i3 || e3.key, n3 || e3.ref, null);
}
function ve(e3, _4) {
  var t2 = { __c: _4 = "__cC" + Y++, __: e3, Consumer: function(i3, n3) {
    return i3.children(n3);
  }, Provider: function(i3) {
    var n3, r5;
    return this.getChildContext || (n3 = [], (r5 = {})[_4] = this, this.getChildContext = function() {
      return r5;
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
    }), i3.children;
  } };
  return t2.Provider.__ = t2.Consumer.contextType = t2;
}
D = O.slice, a = { __e: function(e3, _4, t2, i3) {
  for (var n3, r5, l4; _4 = _4.__; )
    if ((n3 = _4.__c) && !n3.__)
      try {
        if ((r5 = n3.constructor) && r5.getDerivedStateFromError != null && (n3.setState(r5.getDerivedStateFromError(e3)), l4 = n3.__d), n3.componentDidCatch != null && (n3.componentDidCatch(e3, i3 || {}), l4 = n3.__d), l4)
          return n3.__E = n3;
      } catch (u5) {
        e3 = u5;
      }
  throw e3;
} }, Q = 0, ne = function(e3) {
  return e3 != null && e3.constructor == null;
}, W.prototype.setState = function(e3, _4) {
  var t2;
  t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e3 == "function" && (e3 = e3(b({}, t2), this.props)), e3 && b(t2, e3), e3 != null && this.__v && (_4 && this._sb.push(_4), I(this));
}, W.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = true, e3 && this.__h.push(e3), I(this));
}, W.prototype.render = H, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e3, _4) {
  return e3.__v.__b - _4.__v.__b;
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
function l(t2, _4) {
  o.__h && o.__h(r, t2, v || _4), v = 0;
  var u5 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= u5.__.length && u5.__.push({ __V: p }), u5.__[t2];
}
function I2(t2) {
  return v = 1, R2(U, t2);
}
function R2(t2, _4, u5) {
  var n3 = l(c++, 2);
  if (n3.t = t2, !n3.__c && (n3.__ = [u5 ? u5(_4) : U(void 0, _4), function(a2) {
    var f2 = n3.__N ? n3.__N[0] : n3.__[0], s2 = n3.t(f2, a2);
    f2 !== s2 && (n3.__N = [s2, n3.__[1]], n3.__c.setState({}));
  }], n3.__c = r, !r.u)) {
    var i3 = function(a2, f2, s2) {
      if (!n3.__c.__H)
        return true;
      var m2 = n3.__c.__H.__.filter(function(e3) {
        return !!e3.__c;
      });
      if (m2.every(function(e3) {
        return !e3.__N;
      }))
        return !h3 || h3.call(this, a2, f2, s2);
      var V5 = false;
      return m2.forEach(function(e3) {
        if (e3.__N) {
          var P5 = e3.__[0];
          e3.__ = e3.__N, e3.__N = void 0, P5 !== e3.__[0] && (V5 = true);
        }
      }), !(!V5 && n3.__c.props === a2) && (!h3 || h3.call(this, a2, f2, s2));
    };
    r.u = true;
    var h3 = r.shouldComponentUpdate, N3 = r.componentWillUpdate;
    r.componentWillUpdate = function(a2, f2, s2) {
      if (this.__e) {
        var m2 = h3;
        h3 = void 0, i3(a2, f2, s2), h3 = m2;
      }
      N3 && N3.call(this, a2, f2, s2);
    }, r.shouldComponentUpdate = i3;
  }
  return n3.__N || n3.__;
}
function z2(t2, _4) {
  var u5 = l(c++, 3);
  !o.__s && y(u5.__H, _4) && (u5.__ = t2, u5.i = _4, r.__H.__h.push(u5));
}
function S2(t2, _4) {
  var u5 = l(c++, 4);
  !o.__s && y(u5.__H, _4) && (u5.__ = t2, u5.i = _4, r.__h.push(u5));
}
function L(t2) {
  return v = 5, T(function() {
    return { current: t2 };
  }, []);
}
function M2(t2, _4, u5) {
  v = 6, S2(function() {
    return typeof t2 == "function" ? (t2(_4()), function() {
      return t2(null);
    }) : t2 ? (t2.current = _4(), function() {
      return t2.current = null;
    }) : void 0;
  }, u5 == null ? u5 : u5.concat(t2));
}
function T(t2, _4) {
  var u5 = l(c++, 7);
  return y(u5.__H, _4) ? (u5.__V = t2(), u5.i = _4, u5.__h = t2, u5.__V) : u5.__;
}
function G2(t2, _4) {
  return v = 8, T(function() {
    return t2;
  }, _4);
}
function J2(t2) {
  var _4 = r.context[t2.__c], u5 = l(c++, 9);
  return u5.c = t2, _4 ? (u5.__ == null && (u5.__ = true, _4.sub(r)), _4.props.value) : t2.__;
}
function K2(t2, _4) {
  o.useDebugValue && o.useDebugValue(_4 ? _4(t2) : t2);
}
function O2(t2) {
  var _4 = l(c++, 10), u5 = I2();
  return _4.__ = t2, r.componentDidCatch || (r.componentDidCatch = function(n3, i3) {
    _4.__ && _4.__(n3, i3), u5[1](n3);
  }), [u5[0], function() {
    u5[1](void 0);
  }];
}
function Q2() {
  var t2 = l(c++, 11);
  if (!t2.__) {
    for (var _4 = r.__v; _4 !== null && !_4.__m && _4.__ !== null; )
      _4 = _4.__;
    var u5 = _4.__m || (_4.__m = [0, 0]);
    t2.__ = "P" + u5[0] + "-" + u5[1]++;
  }
  return t2.__;
}
function W2() {
  for (var t2; t2 = x2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(d), t2.__H.__h.forEach(E2), t2.__H.__h = [];
      } catch (_4) {
        t2.__H.__h = [], o.__e(_4, t2.__v);
      }
}
o.__b = function(t2) {
  r = null, g && g(t2);
}, o.__ = function(t2, _4) {
  t2 && _4.__k && _4.__k.__m && (t2.__m = _4.__k.__m), k && k(t2, _4);
}, o.__r = function(t2) {
  C && C(t2), c = 0;
  var _4 = (r = t2.__c).__H;
  _4 && (H2 === r ? (_4.__h = [], r.__h = [], _4.__.forEach(function(u5) {
    u5.__N && (u5.__ = u5.__N), u5.__V = p, u5.__N = u5.i = void 0;
  })) : (_4.__h.forEach(d), _4.__h.forEach(E2), _4.__h = [], c = 0)), H2 = r;
}, o.diffed = function(t2) {
  A2 && A2(t2);
  var _4 = t2.__c;
  _4 && _4.__H && (_4.__H.__h.length && (x2.push(_4) !== 1 && b2 === o.requestAnimationFrame || ((b2 = o.requestAnimationFrame) || j)(W2)), _4.__H.__.forEach(function(u5) {
    u5.i && (u5.__H = u5.i), u5.__V !== p && (u5.__ = u5.__V), u5.i = void 0, u5.__V = p;
  })), H2 = r = null;
}, o.__c = function(t2, _4) {
  _4.some(function(u5) {
    try {
      u5.__h.forEach(d), u5.__h = u5.__h.filter(function(n3) {
        return !n3.__ || E2(n3);
      });
    } catch (n3) {
      _4.some(function(i3) {
        i3.__h && (i3.__h = []);
      }), _4 = [], o.__e(n3, u5.__v);
    }
  }), D2 && D2(t2, _4);
}, o.unmount = function(t2) {
  F2 && F2(t2);
  var _4, u5 = t2.__c;
  u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
    try {
      d(n3);
    } catch (i3) {
      _4 = i3;
    }
  }), u5.__H = void 0, _4 && o.__e(_4, u5.__v));
};
var q2 = typeof requestAnimationFrame == "function";
function j(t2) {
  var _4, u5 = function() {
    clearTimeout(n3), q2 && cancelAnimationFrame(_4), setTimeout(t2);
  }, n3 = setTimeout(u5, 100);
  q2 && (_4 = requestAnimationFrame(u5));
}
function d(t2) {
  var _4 = r, u5 = t2.__c;
  typeof u5 == "function" && (t2.__c = void 0, u5()), r = _4;
}
function E2(t2) {
  var _4 = r;
  t2.__c = t2.__(), r = _4;
}
function y(t2, _4) {
  return !t2 || t2.length !== _4.length || _4.some(function(u5, n3) {
    return u5 !== t2[n3];
  });
}
function U(t2, _4) {
  return typeof _4 == "function" ? _4(t2) : _4;
}

// https://esm.sh/stable/preact@10.19.6/denonext/compat.js
function L2(e3, t2) {
  for (var n3 in t2)
    e3[n3] = t2[n3];
  return e3;
}
function b3(e3, t2) {
  for (var n3 in e3)
    if (n3 !== "__source" && !(n3 in t2))
      return true;
  for (var r5 in t2)
    if (r5 !== "__source" && e3[r5] !== t2[r5])
      return true;
  return false;
}
function C2(e3, t2) {
  this.props = e3, this.context = t2;
}
function Q3(e3, t2) {
  function n3(o5) {
    var u5 = this.props.ref, a2 = u5 == o5.ref;
    return !a2 && u5 && (u5.call ? u5(null) : u5.current = null), t2 ? !t2(this.props, o5) || !a2 : b3(this.props, o5);
  }
  function r5(o5) {
    return this.shouldComponentUpdate = n3, re(e3, o5);
  }
  return r5.displayName = "Memo(" + (e3.displayName || e3.name) + ")", r5.prototype.isReactComponent = true, r5.__f = true, r5;
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
  function t2(n3) {
    var r5 = L2({}, n3);
    return delete r5.ref, e3(r5, n3.ref || null);
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
a.__e = function(e3, t2, n3, r5) {
  if (e3.then) {
    for (var o5, u5 = t2; u5 = u5.__; )
      if ((o5 = u5.__c) && o5.__c)
        return t2.__e == null && (t2.__e = n3.__e, t2.__k = n3.__k), o5.__c(e3, t2);
  }
  ne2(e3, t2, n3, r5);
};
var x3 = a.unmount;
function T2(e3, t2, n3) {
  return e3 && (e3.__c && e3.__c.__H && (e3.__c.__H.__.forEach(function(r5) {
    typeof r5.__c == "function" && r5.__c();
  }), e3.__c.__H = null), (e3 = L2({}, e3)).__c != null && (e3.__c.__P === n3 && (e3.__c.__P = t2), e3.__c = null), e3.__k = e3.__k && e3.__k.map(function(r5) {
    return T2(r5, t2, n3);
  })), e3;
}
function A3(e3, t2, n3) {
  return e3 && n3 && (e3.__v = null, e3.__k = e3.__k && e3.__k.map(function(r5) {
    return A3(r5, t2, n3);
  }), e3.__c && e3.__c.__P === t2 && (e3.__e && n3.appendChild(e3.__e), e3.__c.__e = true, e3.__c.__P = n3)), e3;
}
function h() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(e3) {
  var t2 = e3.__.__c;
  return t2 && t2.__a && t2.__a(e3);
}
function re2(e3) {
  var t2, n3, r5;
  function o5(u5) {
    if (t2 || (t2 = e3()).then(function(a2) {
      n3 = a2.default || a2;
    }, function(a2) {
      r5 = a2;
    }), r5)
      throw r5;
    if (!n3)
      throw t2;
    return re(n3, u5);
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
  var n3 = t2.__c, r5 = this;
  r5.t == null && (r5.t = []), r5.t.push(n3);
  var o5 = F3(r5.__v), u5 = false, a2 = function() {
    u5 || (u5 = true, n3.__R = null, o5 ? o5(l4) : l4());
  };
  n3.__R = a2;
  var l4 = function() {
    if (!--r5.__u) {
      if (r5.state.__a) {
        var s2 = r5.state.__a;
        r5.__v.__k[0] = A3(s2, s2.__c.__P, s2.__c.__O);
      }
      var g3;
      for (r5.setState({ __a: r5.__b = null }); g3 = r5.t.pop(); )
        g3.forceUpdate();
    }
  };
  r5.__u++ || 32 & t2.__u || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), e3.then(a2, a2);
}, h.prototype.componentWillUnmount = function() {
  this.t = [];
}, h.prototype.render = function(e3, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n3 = document.createElement("div"), r5 = this.__v.__k[0].__c;
      this.__v.__k[0] = T2(this.__b, n3, r5.__O = r5.__P);
    }
    this.__b = null;
  }
  var o5 = t2.__a && re(H, null, e3.fallback);
  return o5 && (o5.__u &= -33), [re(H, null, t2.__a ? null : e3.children), o5];
};
var k2 = function(e3, t2, n3) {
  if (++n3[1] === n3[0] && e3.o.delete(t2), e3.props.revealOrder && (e3.props.revealOrder[0] !== "t" || !e3.o.size))
    for (n3 = e3.u; n3; ) {
      for (; n3.length > 3; )
        n3.pop()();
      if (n3[1] < n3[0])
        break;
      e3.u = n3 = n3[2];
    }
};
function oe2(e3) {
  return this.getChildContext = function() {
    return e3.context;
  }, e3.children;
}
function ue2(e3) {
  var t2 = this, n3 = e3.i;
  t2.componentWillUnmount = function() {
    pe(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n3 && t2.componentWillUnmount(), t2.l || (t2.i = n3, t2.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(r5) {
    this.childNodes.push(r5), t2.i.appendChild(r5);
  }, insertBefore: function(r5, o5) {
    this.childNodes.push(r5), t2.i.appendChild(r5);
  }, removeChild: function(r5) {
    this.childNodes.splice(this.childNodes.indexOf(r5) >>> 1, 1), t2.i.removeChild(r5);
  } }), pe(re(oe2, { context: t2.context }, e3.__v), t2.l);
}
function ae2(e3, t2) {
  var n3 = re(ue2, { __v: e3, i: t2 });
  return n3.containerInfo = t2, n3;
}
(p2.prototype = new W()).__a = function(e3) {
  var t2 = this, n3 = F3(t2.__v), r5 = t2.o.get(e3);
  return r5[0]++, function(o5) {
    var u5 = function() {
      t2.props.revealOrder ? (r5.push(o5), k2(t2, e3, r5)) : o5();
    };
    n3 ? n3(u5) : u5();
  };
}, p2.prototype.render = function(e3) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = se(e3.children);
  e3.revealOrder && e3.revealOrder[0] === "b" && t2.reverse();
  for (var n3 = t2.length; n3--; )
    this.o.set(t2[n3], this.u = [1, 0, this.u]);
  return e3.children;
}, p2.prototype.componentDidUpdate = p2.prototype.componentDidMount = function() {
  var e3 = this;
  this.o.forEach(function(t2, n3) {
    k2(e3, n3, t2);
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
function fe2(e3, t2, n3) {
  return t2.__k == null && (t2.textContent = ""), pe(e3, t2), typeof n3 == "function" && n3(), e3 ? e3.__c : null;
}
function pe2(e3, t2, n3) {
  return ae(e3, t2), typeof n3 == "function" && n3(), e3 ? e3.__c : null;
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
    var n3 = t2.props, r5 = t2.type, o5 = {};
    for (var u5 in n3) {
      var a2 = n3[u5];
      if (!(u5 === "value" && "defaultValue" in n3 && a2 == null || _e2 && u5 === "children" && r5 === "noscript" || u5 === "class" || u5 === "className")) {
        var l4 = u5.toLowerCase();
        u5 === "defaultValue" && "value" in n3 && n3.value == null ? u5 = "value" : u5 === "download" && a2 === true ? a2 = "" : l4 === "translate" && a2 === "no" ? a2 = false : l4 === "ondoubleclick" ? u5 = "ondblclick" : l4 !== "onchange" || r5 !== "input" && r5 !== "textarea" || ce2(n3.type) ? l4 === "onfocus" ? u5 = "onfocusin" : l4 === "onblur" ? u5 = "onfocusout" : le2.test(u5) ? u5 = l4 : r5.indexOf("-") === -1 && ie2.test(u5) ? u5 = u5.replace(se2, "-$&").toLowerCase() : a2 === null && (a2 = void 0) : l4 = u5 = "oninput", l4 === "oninput" && o5[u5 = l4] && (u5 = "oninputCapture"), o5[u5] = a2;
      }
    }
    r5 == "select" && o5.multiple && Array.isArray(o5.value) && (o5.value = se(n3.children).forEach(function(s2) {
      s2.props.selected = o5.value.indexOf(s2.props.value) != -1;
    })), r5 == "select" && o5.defaultValue != null && (o5.value = se(n3.children).forEach(function(s2) {
      s2.props.selected = o5.multiple ? o5.defaultValue.indexOf(s2.props.value) != -1 : o5.defaultValue == s2.props.value;
    })), n3.class && !n3.className ? (o5.class = n3.class, Object.defineProperty(o5, "className", me)) : (n3.className && !n3.class || n3.class && n3.className) && (o5.class = o5.className = n3.className), t2.props = o5;
  }(e3), e3.$$typeof = V2, P && P(e3);
};
var w2 = a.__r;
a.__r = function(e3) {
  w2 && w2(e3), S3 = e3.__c;
};
var U2 = a.diffed;
a.diffed = function(e3) {
  U2 && U2(e3);
  var t2 = e3.props, n3 = e3.__e;
  n3 != null && e3.type === "textarea" && "value" in t2 && t2.value !== n3.value && (n3.value = t2.value == null ? "" : t2.value), S3 = null;
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
  var n3 = t2(), r5 = I2({ h: { __: n3, v: t2 } }), o5 = r5[0].h, u5 = r5[1];
  return S2(function() {
    o5.__ = n3, o5.v = t2, y2(o5) && u5({ h: o5 });
  }, [e3, n3, t2]), z2(function() {
    return y2(o5) && u5({ h: o5 }), e3(function() {
      y2(o5) && u5({ h: o5 });
    });
  }, [e3]), n3;
}
function y2(e3) {
  var t2, n3, r5 = e3.v, o5 = e3.__;
  try {
    var u5 = r5();
    return !((t2 = o5) === (n3 = u5) && (t2 !== 0 || 1 / t2 == 1 / n3) || t2 != t2 && n3 != n3);
  } catch {
    return true;
  }
}
var Te = { useState: I2, useId: Q2, useReducer: R2, useEffect: z2, useLayoutEffect: S2, useInsertionEffect: Pe, useTransition: Oe, useDeferredValue: ke, useSyncExternalStore: Ue, startTransition: M3, useRef: L, useImperativeHandle: M2, useMemo: T, useCallback: G2, useContext: J2, useDebugValue: K2, version: "17.0.2", Children: te2, render: fe2, hydrate: pe2, unmountComponentAtNode: Se, createPortal: ae2, createElement: re, createContext: ve, createFactory: be, cloneElement: Ee, createRef: de, Fragment: H, isValidElement: m, isElement: we, isFragment: Ce, findDOMNode: ge, Component: W, PureComponent: C2, memo: Q3, forwardRef: ee2, flushSync: Re, unstable_batchedUpdates: Ne, StrictMode: xe, Suspense: h, SuspenseList: p2, lazy: re2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye };

// https://esm.sh/v133/@babel/runtime@7.23.1/denonext/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (n3, t2) => {
  for (var e3 in t2)
    s(n3, e3, { get: t2[e3], enumerable: true });
};
var o2 = {};
u(o2, { default: () => r2 });
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e3 = arguments[t2];
      for (var a2 in e3)
        Object.prototype.hasOwnProperty.call(e3, a2) && (n3[a2] = e3[a2]);
    }
    return n3;
  }, r2.apply(this, arguments);
}
var { default: f, ...d2 } = o2;
var p3 = f !== void 0 ? f : d2;

// https://esm.sh/v133/@radix-ui/primitive@1.0.1/X-ZS8q/denonext/primitive.mjs
function o3(e3, f2, { checkForDefaultPrevented: t2 = true } = {}) {
  return function(c2) {
    if (e3?.(c2), t2 === false || !c2.defaultPrevented)
      return f2?.(c2);
  };
}

// https://esm.sh/v132/@radix-ui/react-context@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-context.mjs
function _(t2, c2 = []) {
  let o5 = [];
  function a2(r5, e3) {
    let n3 = ve(e3), s2 = o5.length;
    o5 = [...o5, e3];
    function f2(d7) {
      let { scope: i3, children: x7, ...$3 } = d7, h3 = i3?.[t2][s2] || n3, S6 = T(() => $3, Object.values($3));
      return re(h3.Provider, { value: S6 }, x7);
    }
    function v2(d7, i3) {
      let x7 = i3?.[t2][s2] || n3, $3 = J2(x7);
      if ($3)
        return $3;
      if (e3 !== void 0)
        return e3;
      throw new Error(`\`${d7}\` must be used within \`${r5}\``);
    }
    return f2.displayName = r5 + "Provider", [f2, v2];
  }
  let u5 = () => {
    let r5 = o5.map((e3) => ve(e3));
    return function(n3) {
      let s2 = n3?.[t2] || r5;
      return T(() => ({ [`__scope${t2}`]: { ...n3, [t2]: s2 } }), [n3, s2]);
    };
  };
  return u5.scopeName = t2, [a2, C3(u5, ...c2)];
}
function C3(...t2) {
  let c2 = t2[0];
  if (t2.length === 1)
    return c2;
  let o5 = () => {
    let a2 = t2.map((u5) => ({ useScope: u5(), scopeName: u5.scopeName }));
    return function(r5) {
      let e3 = a2.reduce((n3, { useScope: s2, scopeName: f2 }) => {
        let d7 = s2(r5)[`__scope${f2}`];
        return { ...n3, ...d7 };
      }, {});
      return T(() => ({ [`__scope${c2.scopeName}`]: e3 }), [e3]);
    };
  };
  return o5.scopeName = c2.scopeName, o5;
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
var b4 = ee2((n3, t2) => {
  let { children: e3, ...r5 } = n3, o5 = te2.toArray(e3), l4 = o5.find(I3);
  if (l4) {
    let c2 = l4.props.children, a2 = o5.map((m2) => m2 === l4 ? te2.count(c2) > 1 ? te2.only(null) : m(c2) ? c2.props.children : null : m2);
    return re($2, p3({}, r5, { ref: t2 }), m(c2) ? Ee(c2, void 0, a2) : null);
  }
  return re($2, p3({}, r5, { ref: t2 }), e3);
});
b4.displayName = "Slot";
var $2 = ee2((n3, t2) => {
  let { children: e3, ...r5 } = n3;
  return m(e3) ? Ee(e3, { ...X3(r5, e3.props), ref: t2 ? t(t2, e3.ref) : e3.ref }) : te2.count(e3) > 1 ? te2.only(null) : null;
});
$2.displayName = "SlotClone";
var y3 = ({ children: n3 }) => re(H, null, n3);
function I3(n3) {
  return m(n3) && n3.type === y3;
}
function X3(n3, t2) {
  let e3 = { ...t2 };
  for (let r5 in t2) {
    let o5 = n3[r5], l4 = t2[r5];
    /^on[A-Z]/.test(r5) ? o5 && l4 ? e3[r5] = (...a2) => {
      l4(...a2), o5(...a2);
    } : o5 && (e3[r5] = o5) : r5 === "style" ? e3[r5] = { ...o5, ...l4 } : r5 === "className" && (e3[r5] = [o5, l4].filter(Boolean).join(" "));
  }
  return { ...n3, ...e3 };
}

// https://esm.sh/v132/@radix-ui/react-collection@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-collection.mjs
function _2(s2) {
  let a2 = s2 + "CollectionProvider", [I6, $3] = _(a2), [E3, f2] = I6(a2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m2 = (r5) => {
    let { scope: e3, children: l4 } = r5, o5 = Te.useRef(null), c2 = Te.useRef(/* @__PURE__ */ new Map()).current;
    return Te.createElement(E3, { scope: e3, itemMap: c2, collectionRef: o5 }, l4);
  }, d7 = s2 + "CollectionSlot", p4 = Te.forwardRef((r5, e3) => {
    let { scope: l4, children: o5 } = r5, c2 = f2(d7, l4), n3 = u2(e3, c2.collectionRef);
    return Te.createElement(b4, { ref: n3 }, o5);
  }), u5 = s2 + "CollectionItemSlot", C6 = "data-radix-collection-item", R4 = Te.forwardRef((r5, e3) => {
    let { scope: l4, children: o5, ...c2 } = r5, n3 = Te.useRef(null), M6 = u2(e3, n3), i3 = f2(u5, l4);
    return Te.useEffect(() => (i3.itemMap.set(n3, { ref: n3, ...c2 }), () => void i3.itemMap.delete(n3))), Te.createElement(b4, { [C6]: "", ref: M6 }, o5);
  });
  function h3(r5) {
    let e3 = f2(s2 + "CollectionConsumer", r5);
    return Te.useCallback(() => {
      let o5 = e3.collectionRef.current;
      if (!o5)
        return [];
      let c2 = Array.from(o5.querySelectorAll(`[${C6}]`));
      return Array.from(e3.itemMap.values()).sort((i3, v2) => c2.indexOf(i3.ref.current) - c2.indexOf(v2.ref.current));
    }, [e3.collectionRef, e3.itemMap]);
  }
  return [{ Provider: m2, Slot: p4, ItemSlot: R4 }, h3, $3];
}

// https://esm.sh/v132/@radix-ui/react-use-layout-effect@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-use-layout-effect.mjs
var e = globalThis?.document ? S2 : () => {
};

// https://esm.sh/v132/@radix-ui/react-id@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-id.mjs
var u3 = compat_exports["useId".toString()] || (() => {
});
var r3 = 0;
function n2(t2) {
  let [e3, o5] = I2(u3());
  return e(() => {
    t2 || o5(($3) => $3 ?? String(r3++));
  }, [t2]), t2 || (e3 ? `radix-${e3}` : "");
}

// https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-primitive.mjs
var d3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"];
var u4 = d3.reduce((t2, e3) => {
  let f2 = ee2((r5, o5) => {
    let { asChild: s2, ...a2 } = r5, i3 = s2 ? b4 : e3;
    return z2(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), re(i3, p3({}, a2, { ref: o5 }));
  });
  return f2.displayName = `Primitive.${e3}`, { ...t2, [e3]: f2 };
}, {});

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
  let [t2, n3] = P2({ defaultProp: a2, onChange: s2 }), o5 = e3 !== void 0, f2 = o5 ? e3 : t2, l4 = l2(s2), $3 = G2((c2) => {
    if (o5) {
      let u5 = typeof c2 == "function" ? c2(e3) : c2;
      u5 !== e3 && l4(u5);
    } else
      n3(c2);
  }, [o5, e3, n3, l4]);
  return [f2, $3];
}
function P2({ defaultProp: e3, onChange: a2 }) {
  let s2 = I2(e3), [t2] = s2, n3 = L(t2), o5 = l2(a2);
  return z2(() => {
    n3.current !== t2 && (o5(t2), n3.current = t2);
  }, [t2, n3, o5]), s2;
}

// https://esm.sh/v132/@radix-ui/react-direction@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-direction.mjs
var r4 = ve(void 0);
function i(e3) {
  let t2 = J2(r4);
  return e3 || t2 || "ltr";
}

// https://esm.sh/v132/@radix-ui/react-roving-focus@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-roving-focus.mjs
var T3 = "rovingFocusGroup.onEntryFocus";
var X4 = { bubbles: false, cancelable: true };
var x4 = "RovingFocusGroup";
var [w4, M4, Z2] = _2(x4);
var [ee3, Ee2] = _(x4, [Z2]);
var [oe3, te3] = ee3(x4);
var re3 = ee2((e3, o5) => re(w4.Provider, { scope: e3.__scopeRovingFocusGroup }, re(w4.Slot, { scope: e3.__scopeRovingFocusGroup }, re(ne3, p3({}, e3, { ref: o5 })))));
var ne3 = ee2((e3, o5) => {
  let { __scopeRovingFocusGroup: n3, orientation: t2, loop: v2 = false, dir: F5, currentTabStopId: g3, defaultCurrentTabStopId: R4, onCurrentTabStopIdChange: b5, onEntryFocus: c2, ...C6 } = e3, $3 = L(null), m2 = u2(o5, $3), p4 = i(F5), [s2 = null, u5] = w3({ prop: g3, defaultProp: R4, onChange: b5 }), [E3, a2] = I2(false), f2 = l2(c2), U5 = M4(n3), S6 = L(false), [k3, h3] = I2(0);
  return z2(() => {
    let r5 = $3.current;
    if (r5)
      return r5.addEventListener(T3, f2), () => r5.removeEventListener(T3, f2);
  }, [f2]), re(oe3, { scope: n3, orientation: t2, dir: p4, loop: v2, currentTabStopId: s2, onItemFocus: G2((r5) => u5(r5), [u5]), onItemShiftTab: G2(() => a2(true), []), onFocusableItemAdd: G2(() => h3((r5) => r5 + 1), []), onFocusableItemRemove: G2(() => h3((r5) => r5 - 1), []) }, re(u4.div, p3({ tabIndex: E3 || k3 === 0 ? -1 : 0, "data-orientation": t2 }, C6, { ref: m2, style: { outline: "none", ...e3.style }, onMouseDown: o3(e3.onMouseDown, () => {
    S6.current = true;
  }), onFocus: o3(e3.onFocus, (r5) => {
    let K3 = !S6.current;
    if (r5.target === r5.currentTarget && K3 && !E3) {
      let D5 = new CustomEvent(T3, X4);
      if (r5.currentTarget.dispatchEvent(D5), !D5.defaultPrevented) {
        let y5 = U5().filter((d7) => d7.focusable), B2 = y5.find((d7) => d7.active), H4 = y5.find((d7) => d7.id === s2), Y4 = [B2, H4, ...y5].filter(Boolean).map((d7) => d7.ref.current);
        L3(Y4);
      }
    }
    S6.current = false;
  }), onBlur: o3(e3.onBlur, () => a2(false)) })));
});
var se3 = "RovingFocusGroupItem";
var ce3 = ee2((e3, o5) => {
  let { __scopeRovingFocusGroup: n3, focusable: t2 = true, active: v2 = false, tabStopId: F5, ...g3 } = e3, R4 = n2(), b5 = F5 || R4, c2 = te3(se3, n3), C6 = c2.currentTabStopId === b5, $3 = M4(n3), { onFocusableItemAdd: m2, onFocusableItemRemove: p4 } = c2;
  return z2(() => {
    if (t2)
      return m2(), () => p4();
  }, [t2, m2, p4]), re(w4.ItemSlot, { scope: n3, id: b5, focusable: t2, active: v2 }, re(u4.span, p3({ tabIndex: C6 ? 0 : -1, "data-orientation": c2.orientation }, g3, { ref: o5, onMouseDown: o3(e3.onMouseDown, (s2) => {
    t2 ? c2.onItemFocus(b5) : s2.preventDefault();
  }), onFocus: o3(e3.onFocus, () => c2.onItemFocus(b5)), onKeyDown: o3(e3.onKeyDown, (s2) => {
    if (s2.key === "Tab" && s2.shiftKey) {
      c2.onItemShiftTab();
      return;
    }
    if (s2.target !== s2.currentTarget)
      return;
    let u5 = ue3(s2, c2.orientation, c2.dir);
    if (u5 !== void 0) {
      s2.preventDefault();
      let a2 = $3().filter((f2) => f2.focusable).map((f2) => f2.ref.current);
      if (u5 === "last")
        a2.reverse();
      else if (u5 === "prev" || u5 === "next") {
        u5 === "prev" && a2.reverse();
        let f2 = a2.indexOf(s2.currentTarget);
        a2 = c2.loop ? de3(a2, f2 + 1) : a2.slice(f2 + 1);
      }
      setTimeout(() => L3(a2));
    }
  }) })));
});
var ae3 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function fe3(e3, o5) {
  return o5 !== "rtl" ? e3 : e3 === "ArrowLeft" ? "ArrowRight" : e3 === "ArrowRight" ? "ArrowLeft" : e3;
}
function ue3(e3, o5, n3) {
  let t2 = fe3(e3.key, n3);
  if (!(o5 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(t2)) && !(o5 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(t2)))
    return ae3[t2];
}
function L3(e3) {
  let o5 = document.activeElement;
  for (let n3 of e3)
    if (n3 === o5 || (n3.focus(), document.activeElement !== o5))
      return;
}
function de3(e3, o5) {
  return e3.map((n3, t2) => e3[(o5 + t2) % e3.length]);
}
var Se2 = re3;
var ye2 = ce3;

// https://esm.sh/v132/@radix-ui/react-presence@1.0.1/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-presence.mjs
function S4(n3, t2) {
  return R2((o5, r5) => {
    let i3 = t2[o5][r5];
    return i3 ?? o5;
  }, n3);
}
var U3 = (n3) => {
  let { present: t2, children: o5 } = n3, r5 = y4(t2), i3 = typeof o5 == "function" ? o5({ present: r5.isPresent }) : te2.only(o5), a2 = u2(r5.ref, i3.ref);
  return typeof o5 == "function" || r5.isPresent ? Ee(i3, { ref: a2 }) : null;
};
U3.displayName = "Presence";
function y4(n3) {
  let [t2, o5] = I2(), r5 = L({}), i3 = L(n3), a2 = L("none"), N3 = n3 ? "mounted" : "unmounted", [f2, s2] = S4(N3, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return z2(() => {
    let e3 = d4(r5.current);
    a2.current = f2 === "mounted" ? e3 : "none";
  }, [f2]), e(() => {
    let e3 = r5.current, u5 = i3.current;
    if (u5 !== n3) {
      let $3 = a2.current, m2 = d4(e3);
      n3 ? s2("MOUNT") : m2 === "none" || e3?.display === "none" ? s2("UNMOUNT") : s2(u5 && $3 !== m2 ? "ANIMATION_OUT" : "UNMOUNT"), i3.current = n3;
    }
  }, [n3, s2]), e(() => {
    if (t2) {
      let e3 = (c2) => {
        let m2 = d4(r5.current).includes(c2.animationName);
        c2.target === t2 && m2 && Re(() => s2("ANIMATION_END"));
      }, u5 = (c2) => {
        c2.target === t2 && (a2.current = d4(r5.current));
      };
      return t2.addEventListener("animationstart", u5), t2.addEventListener("animationcancel", e3), t2.addEventListener("animationend", e3), () => {
        t2.removeEventListener("animationstart", u5), t2.removeEventListener("animationcancel", e3), t2.removeEventListener("animationend", e3);
      };
    } else
      s2("ANIMATION_END");
  }, [t2, s2]), { isPresent: ["mounted", "unmountSuspended"].includes(f2), ref: G2((e3) => {
    e3 && (r5.current = getComputedStyle(e3)), o5(e3);
  }, []) };
}
function d4(n3) {
  return n3?.animationName || "none";
}

// https://esm.sh/v135/@radix-ui/react-tabs@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/denonext/react-tabs.mjs
var T4 = "Tabs";
var [A4, Y2] = _(T4, [Ee2]);
var _3 = Ee2();
var [P3, I4] = A4(T4);
var F4 = ee2((e3, n3) => {
  let { __scopeTabs: c2, value: t2, onValueChange: s2, defaultValue: i3, orientation: o5 = "horizontal", dir: b5, activationMode: l4 = "automatic", ...f2 } = e3, r5 = i(b5), [a2, $3] = w3({ prop: t2, onChange: s2, defaultProp: i3 });
  return re(P3, { scope: c2, baseId: n2(), value: a2, onValueChange: $3, orientation: o5, dir: r5, activationMode: l4 }, re(u4.div, p3({ dir: r5, "data-orientation": o5 }, f2, { ref: n3 })));
});
var N2 = "TabsList";
var V3 = ee2((e3, n3) => {
  let { __scopeTabs: c2, loop: t2 = true, ...s2 } = e3, i3 = I4(N2, c2), o5 = _3(c2);
  return re(Se2, p3({ asChild: true }, o5, { orientation: i3.orientation, dir: i3.dir, loop: t2 }), re(u4.div, p3({ role: "tablist", "aria-orientation": i3.orientation }, s2, { ref: n3 })));
});
var D3 = "TabsTrigger";
var G3 = ee2((e3, n3) => {
  let { __scopeTabs: c2, value: t2, disabled: s2 = false, ...i3 } = e3, o5 = I4(D3, c2), b5 = _3(c2), l4 = C4(o5.baseId, t2), f2 = x5(o5.baseId, t2), r5 = t2 === o5.value;
  return re(ye2, p3({ asChild: true }, b5, { focusable: !s2, active: r5 }), re(u4.button, p3({ type: "button", role: "tab", "aria-selected": r5, "aria-controls": f2, "data-state": r5 ? "active" : "inactive", "data-disabled": s2 ? "" : void 0, disabled: s2, id: l4 }, i3, { ref: n3, onMouseDown: o3(e3.onMouseDown, (a2) => {
    !s2 && a2.button === 0 && a2.ctrlKey === false ? o5.onValueChange(t2) : a2.preventDefault();
  }), onKeyDown: o3(e3.onKeyDown, (a2) => {
    [" ", "Enter"].includes(a2.key) && o5.onValueChange(t2);
  }), onFocus: o3(e3.onFocus, () => {
    let a2 = o5.activationMode !== "manual";
    !r5 && !s2 && a2 && o5.onValueChange(t2);
  }) })));
});
var w5 = "TabsContent";
var O4 = ee2((e3, n3) => {
  let { __scopeTabs: c2, value: t2, forceMount: s2, children: i3, ...o5 } = e3, b5 = I4(w5, c2), l4 = C4(b5.baseId, t2), f2 = x5(b5.baseId, t2), r5 = t2 === b5.value, a2 = L(r5);
  return z2(() => {
    let $3 = requestAnimationFrame(() => a2.current = false);
    return () => cancelAnimationFrame($3);
  }, []), re(U3, { present: s2 || r5 }, ({ present: $3 }) => re(u4.div, p3({ "data-state": r5 ? "active" : "inactive", "data-orientation": b5.orientation, role: "tabpanel", "aria-labelledby": l4, hidden: !$3, id: f2, tabIndex: 0 }, o5, { ref: n3, style: { ...e3.style, animationDuration: a2.current ? "0s" : void 0 } }), $3 && i3));
});
function C4(e3, n3) {
  return `${e3}-trigger-${n3}`;
}
function x5(e3, n3) {
  return `${e3}-content-${n3}`;
}
var Z3 = F4;
var ee4 = V3;
var te4 = G3;
var oe4 = O4;

// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o4(r5) {
  var f2, n3, t2 = "";
  if (typeof r5 == "string" || typeof r5 == "number")
    t2 += r5;
  else if (typeof r5 == "object")
    if (Array.isArray(r5))
      for (f2 = 0; f2 < r5.length; f2++)
        r5[f2] && (n3 = o4(r5[f2])) && (t2 && (t2 += " "), t2 += n3);
    else
      for (f2 in r5)
        r5[f2] && (t2 && (t2 += " "), t2 += f2);
  return t2;
}
function e2() {
  for (var r5, f2, n3 = 0, t2 = ""; n3 < arguments.length; )
    (r5 = arguments[n3++]) && (f2 = o4(r5)) && (t2 && (t2 += " "), t2 += f2);
  return t2;
}

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r5, e3) => {
  for (var t2 in e3)
    Ar(r5, t2, { get: e3[t2], enumerable: true });
};
function U4() {
  for (var r5 = 0, e3, t2, o5 = ""; r5 < arguments.length; )
    (e3 = arguments[r5++]) && (t2 = lr(e3)) && (o5 && (o5 += " "), o5 += t2);
  return o5;
}
function lr(r5) {
  if (typeof r5 == "string")
    return r5;
  for (var e3, t2 = "", o5 = 0; o5 < r5.length; o5++)
    r5[o5] && (e3 = lr(r5[o5])) && (t2 && (t2 += " "), t2 += e3);
  return t2;
}
var Z4 = "-";
function ur(r5) {
  var e3 = Sr(r5), t2 = r5.conflictingClassGroups, o5 = r5.conflictingClassGroupModifiers, a2 = o5 === void 0 ? {} : o5;
  function s2(i3) {
    var c2 = i3.split(Z4);
    return c2[0] === "" && c2.length !== 1 && c2.shift(), pr(c2, e3) || kr(i3);
  }
  function n3(i3, c2) {
    var u5 = t2[i3] || [];
    return c2 && a2[i3] ? [].concat(u5, a2[i3]) : u5;
  }
  return { getClassGroupId: s2, getConflictingClassGroupIds: n3 };
}
function pr(r5, e3) {
  if (r5.length === 0)
    return e3.classGroupId;
  var t2 = r5[0], o5 = e3.nextPart.get(t2), a2 = o5 ? pr(r5.slice(1), o5) : void 0;
  if (a2)
    return a2;
  if (e3.validators.length !== 0) {
    var s2 = r5.join(Z4);
    return e3.validators.find(function(n3) {
      var i3 = n3.validator;
      return i3(s2);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r5) {
  if (dr.test(r5)) {
    var e3 = dr.exec(r5)[1], t2 = e3?.substring(0, e3.indexOf(":"));
    if (t2)
      return "arbitrary.." + t2;
  }
}
function Sr(r5) {
  var e3 = r5.theme, t2 = r5.prefix, o5 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r5.classGroups), t2);
  return a2.forEach(function(s2) {
    var n3 = s2[0], i3 = s2[1];
    q3(i3, o5, n3, e3);
  }), o5;
}
function q3(r5, e3, t2, o5) {
  r5.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s2 = a2 === "" ? e3 : cr(e3, a2);
      s2.classGroupId = t2;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q3(a2(o5), e3, t2, o5);
        return;
      }
      e3.validators.push({ validator: a2, classGroupId: t2 });
      return;
    }
    Object.entries(a2).forEach(function(n3) {
      var i3 = n3[0], c2 = n3[1];
      q3(c2, cr(e3, i3), t2, o5);
    });
  });
}
function cr(r5, e3) {
  var t2 = r5;
  return e3.split(Z4).forEach(function(o5) {
    t2.nextPart.has(o5) || t2.nextPart.set(o5, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t2 = t2.nextPart.get(o5);
  }), t2;
}
function zr(r5) {
  return r5.isThemeGetter;
}
function Gr(r5, e3) {
  return e3 ? r5.map(function(t2) {
    var o5 = t2[0], a2 = t2[1], s2 = a2.map(function(n3) {
      return typeof n3 == "string" ? e3 + n3 : typeof n3 == "object" ? Object.fromEntries(Object.entries(n3).map(function(i3) {
        var c2 = i3[0], u5 = i3[1];
        return [e3 + c2, u5];
      })) : n3;
    });
    return [o5, s2];
  }) : r5;
}
function fr(r5) {
  if (r5 < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e3 = 0, t2 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map();
  function a2(s2, n3) {
    t2.set(s2, n3), e3++, e3 > r5 && (e3 = 0, o5 = t2, t2 = /* @__PURE__ */ new Map());
  }
  return { get: function(n3) {
    var i3 = t2.get(n3);
    if (i3 !== void 0)
      return i3;
    if ((i3 = o5.get(n3)) !== void 0)
      return a2(n3, i3), i3;
  }, set: function(n3, i3) {
    t2.has(n3) ? t2.set(n3, i3) : a2(n3, i3);
  } };
}
var X5 = "!";
function br(r5) {
  var e3 = r5.separator || ":", t2 = e3.length === 1, o5 = e3[0], a2 = e3.length;
  return function(n3) {
    for (var i3 = [], c2 = 0, u5 = 0, b5, f2 = 0; f2 < n3.length; f2++) {
      var g3 = n3[f2];
      if (c2 === 0) {
        if (g3 === o5 && (t2 || n3.slice(f2, f2 + a2) === e3)) {
          i3.push(n3.slice(u5, f2)), u5 = f2 + a2;
          continue;
        }
        if (g3 === "/") {
          b5 = f2;
          continue;
        }
      }
      g3 === "[" ? c2++ : g3 === "]" && c2--;
    }
    var y5 = i3.length === 0 ? n3 : n3.substring(u5), x7 = y5.startsWith(X5), m2 = x7 ? y5.substring(1) : y5, w6 = b5 && b5 > u5 ? b5 - u5 : void 0;
    return { modifiers: i3, hasImportantModifier: x7, baseClassName: m2, maybePostfixModifierPosition: w6 };
  };
}
function gr(r5) {
  if (r5.length <= 1)
    return r5;
  var e3 = [], t2 = [];
  return r5.forEach(function(o5) {
    var a2 = o5[0] === "[";
    a2 ? (e3.push.apply(e3, t2.sort().concat([o5])), t2 = []) : t2.push(o5);
  }), e3.push.apply(e3, t2.sort()), e3;
}
function mr(r5) {
  return { cache: fr(r5.cacheSize), splitModifiers: br(r5), ...ur(r5) };
}
var Ir = /\s+/;
function vr(r5, e3) {
  var t2 = e3.splitModifiers, o5 = e3.getClassGroupId, a2 = e3.getConflictingClassGroupIds, s2 = /* @__PURE__ */ new Set();
  return r5.trim().split(Ir).map(function(n3) {
    var i3 = t2(n3), c2 = i3.modifiers, u5 = i3.hasImportantModifier, b5 = i3.baseClassName, f2 = i3.maybePostfixModifierPosition, g3 = o5(f2 ? b5.substring(0, f2) : b5), y5 = !!f2;
    if (!g3) {
      if (!f2)
        return { isTailwindClass: false, originalClassName: n3 };
      if (g3 = o5(b5), !g3)
        return { isTailwindClass: false, originalClassName: n3 };
      y5 = false;
    }
    var x7 = gr(c2).join(":"), m2 = u5 ? x7 + X5 : x7;
    return { isTailwindClass: true, modifierId: m2, classGroupId: g3, originalClassName: n3, hasPostfixModifier: y5 };
  }).reverse().filter(function(n3) {
    if (!n3.isTailwindClass)
      return true;
    var i3 = n3.modifierId, c2 = n3.classGroupId, u5 = n3.hasPostfixModifier, b5 = i3 + c2;
    return s2.has(b5) ? false : (s2.add(b5), a2(c2, u5).forEach(function(f2) {
      return s2.add(i3 + f2);
    }), true);
  }).reverse().map(function(n3) {
    return n3.originalClassName;
  }).join(" ");
}
function P4() {
  for (var r5 = arguments.length, e3 = new Array(r5), t2 = 0; t2 < r5; t2++)
    e3[t2] = arguments[t2];
  var o5, a2, s2, n3 = i3;
  function i3(u5) {
    var b5 = e3[0], f2 = e3.slice(1), g3 = f2.reduce(function(y5, x7) {
      return x7(y5);
    }, b5());
    return o5 = mr(g3), a2 = o5.cache.get, s2 = o5.cache.set, n3 = c2, c2(u5);
  }
  function c2(u5) {
    var b5 = a2(u5);
    if (b5)
      return b5;
    var f2 = vr(u5, o5);
    return s2(u5, f2), f2;
  }
  return function() {
    return n3(U4.apply(null, arguments));
  };
}
function d5(r5) {
  var e3 = function(o5) {
    return o5[r5] || [];
  };
  return e3.isThemeGetter = true, e3;
}
var wr = {};
Mr(wr, { isAny: () => G4, isArbitraryLength: () => L4, isArbitraryNumber: () => S5, isArbitraryPosition: () => Q4, isArbitraryShadow: () => D4, isArbitrarySize: () => H3, isArbitraryUrl: () => V4, isArbitraryValue: () => l3, isArbitraryWeight: () => Wr, isInteger: () => z3, isLength: () => h2, isNumber: () => M5, isPercent: () => Y3, isTshirtSize: () => C5 });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h2(r5) {
  return M5(r5) || Tr.has(r5) || Pr.test(r5) || L4(r5);
}
function L4(r5) {
  return I5(r5, "length", Er);
}
function H3(r5) {
  return I5(r5, "size", xr);
}
function Q4(r5) {
  return I5(r5, "position", xr);
}
function V4(r5) {
  return I5(r5, "url", jr);
}
function S5(r5) {
  return I5(r5, "number", M5);
}
var Wr = S5;
function M5(r5) {
  return !Number.isNaN(Number(r5));
}
function Y3(r5) {
  return r5.endsWith("%") && M5(r5.slice(0, -1));
}
function z3(r5) {
  return hr(r5) || I5(r5, "number", hr);
}
function l3(r5) {
  return yr.test(r5);
}
function G4() {
  return true;
}
function C5(r5) {
  return Rr.test(r5);
}
function D4(r5) {
  return I5(r5, "", Ur);
}
function I5(r5, e3, t2) {
  var o5 = yr.exec(r5);
  return o5 ? o5[1] ? o5[1] === e3 : t2(o5[2]) : false;
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
function T5() {
  var r5 = d5("colors"), e3 = d5("spacing"), t2 = d5("blur"), o5 = d5("brightness"), a2 = d5("borderColor"), s2 = d5("borderRadius"), n3 = d5("borderSpacing"), i3 = d5("borderWidth"), c2 = d5("contrast"), u5 = d5("grayscale"), b5 = d5("hueRotate"), f2 = d5("invert"), g3 = d5("gap"), y5 = d5("gradientColorStops"), x7 = d5("gradientColorStopPositions"), m2 = d5("inset"), w6 = d5("margin"), k3 = d5("opacity"), A5 = d5("padding"), K3 = d5("saturate"), O5 = d5("scale"), rr = d5("sepia"), er = d5("skew"), tr = d5("space"), or = d5("translate"), $3 = function() {
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
    return ["auto", M5, l3];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E3 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J3 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R4 = function() {
    return ["", "0", l3];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N3 = function() {
    return [M5, S5];
  }, j2 = function() {
    return [M5, l3];
  };
  return { cacheSize: 500, theme: { colors: [G4], spacing: [h2], blur: ["none", "", C5, l3], brightness: N3(), borderColor: [r5], borderRadius: ["none", "", "full", C5, l3], borderSpacing: p4(), borderWidth: nr(), contrast: N3(), grayscale: R4(), hueRotate: j2(), invert: R4(), gap: p4(), gradientColorStops: [r5], gradientColorStopPositions: [Y3, L4], inset: F5(), margin: F5(), opacity: N3(), padding: p4(), saturate: N3(), scale: N3(), sepia: R4(), skew: j2(), space: p4(), translate: p4() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l3] }], container: ["container"], columns: [{ columns: [C5] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l3]) }], overflow: [{ overflow: B2() }], "overflow-x": [{ "overflow-x": B2() }], "overflow-y": [{ "overflow-y": B2() }], overscroll: [{ overscroll: $3() }], "overscroll-x": [{ "overscroll-x": $3() }], "overscroll-y": [{ "overscroll-y": $3() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m2] }], "inset-x": [{ "inset-x": [m2] }], "inset-y": [{ "inset-y": [m2] }], start: [{ start: [m2] }], end: [{ end: [m2] }], top: [{ top: [m2] }], right: [{ right: [m2] }], bottom: [{ bottom: [m2] }], left: [{ left: [m2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z3] }], basis: [{ basis: F5() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l3] }], grow: [{ grow: R4() }], shrink: [{ shrink: R4() }], order: [{ order: ["first", "last", "none", z3] }], "grid-cols": [{ "grid-cols": [G4] }], "col-start-end": [{ col: ["auto", { span: ["full", z3] }, l3] }], "col-start": [{ "col-start": W3() }], "col-end": [{ "col-end": W3() }], "grid-rows": [{ "grid-rows": [G4] }], "row-start-end": [{ row: ["auto", { span: [z3] }, l3] }], "row-start": [{ "row-start": W3() }], "row-end": [{ "row-end": W3() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l3] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l3] }], gap: [{ gap: [g3] }], "gap-x": [{ "gap-x": [g3] }], "gap-y": [{ "gap-y": [g3] }], "justify-content": [{ justify: ["normal"].concat(J3()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J3(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J3(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A5] }], px: [{ px: [A5] }], py: [{ py: [A5] }], ps: [{ ps: [A5] }], pe: [{ pe: [A5] }], pt: [{ pt: [A5] }], pr: [{ pr: [A5] }], pb: [{ pb: [A5] }], pl: [{ pl: [A5] }], m: [{ m: [w6] }], mx: [{ mx: [w6] }], my: [{ my: [w6] }], ms: [{ ms: [w6] }], me: [{ me: [w6] }], mt: [{ mt: [w6] }], mr: [{ mr: [w6] }], mb: [{ mb: [w6] }], ml: [{ ml: [w6] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l3, e3] }], "min-w": [{ "min-w": ["min", "max", "fit", l3, h2] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C5] }, C5, l3] }], h: [{ h: [l3, e3, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l3, h2] }], "max-h": [{ "max-h": [l3, e3, "min", "max", "fit"] }], "font-size": [{ text: ["base", C5, L4] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S5] }], "font-family": [{ font: [G4] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l3] }], "line-clamp": [{ "line-clamp": ["none", M5, S5] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l3, h2] }], "list-image": [{ "list-image": ["none", l3] }], "list-style-type": [{ list: ["none", "disc", "decimal", l3] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r5] }], "placeholder-opacity": [{ "placeholder-opacity": [k3] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r5] }], "text-opacity": [{ "text-opacity": [k3] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E3(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h2] }], "underline-offset": [{ "underline-offset": ["auto", l3, h2] }], "text-decoration-color": [{ decoration: [r5] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p4() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l3] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l3] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k3] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q4]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H3] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V4] }], "bg-color": [{ bg: [r5] }], "gradient-from-pos": [{ from: [x7] }], "gradient-via-pos": [{ via: [x7] }], "gradient-to-pos": [{ to: [x7] }], "gradient-from": [{ from: [y5] }], "gradient-via": [{ via: [y5] }], "gradient-to": [{ to: [y5] }], rounded: [{ rounded: [s2] }], "rounded-s": [{ "rounded-s": [s2] }], "rounded-e": [{ "rounded-e": [s2] }], "rounded-t": [{ "rounded-t": [s2] }], "rounded-r": [{ "rounded-r": [s2] }], "rounded-b": [{ "rounded-b": [s2] }], "rounded-l": [{ "rounded-l": [s2] }], "rounded-ss": [{ "rounded-ss": [s2] }], "rounded-se": [{ "rounded-se": [s2] }], "rounded-ee": [{ "rounded-ee": [s2] }], "rounded-es": [{ "rounded-es": [s2] }], "rounded-tl": [{ "rounded-tl": [s2] }], "rounded-tr": [{ "rounded-tr": [s2] }], "rounded-br": [{ "rounded-br": [s2] }], "rounded-bl": [{ "rounded-bl": [s2] }], "border-w": [{ border: [i3] }], "border-w-x": [{ "border-x": [i3] }], "border-w-y": [{ "border-y": [i3] }], "border-w-s": [{ "border-s": [i3] }], "border-w-e": [{ "border-e": [i3] }], "border-w-t": [{ "border-t": [i3] }], "border-w-r": [{ "border-r": [i3] }], "border-w-b": [{ "border-b": [i3] }], "border-w-l": [{ "border-l": [i3] }], "border-opacity": [{ "border-opacity": [k3] }], "border-style": [{ border: [].concat(E3(), ["hidden"]) }], "divide-x": [{ "divide-x": [i3] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i3] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k3] }], "divide-style": [{ divide: E3() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E3()) }], "outline-offset": [{ "outline-offset": [l3, h2] }], "outline-w": [{ outline: [h2] }], "outline-color": [{ outline: [r5] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r5] }], "ring-opacity": [{ "ring-opacity": [k3] }], "ring-offset-w": [{ "ring-offset": [h2] }], "ring-offset-color": [{ "ring-offset": [r5] }], shadow: [{ shadow: ["", "inner", "none", C5, D4] }], "shadow-color": [{ shadow: [G4] }], opacity: [{ opacity: [k3] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t2] }], brightness: [{ brightness: [o5] }], contrast: [{ contrast: [c2] }], "drop-shadow": [{ "drop-shadow": ["", "none", C5, l3] }], grayscale: [{ grayscale: [u5] }], "hue-rotate": [{ "hue-rotate": [b5] }], invert: [{ invert: [f2] }], saturate: [{ saturate: [K3] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t2] }], "backdrop-brightness": [{ "backdrop-brightness": [o5] }], "backdrop-contrast": [{ "backdrop-contrast": [c2] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u5] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b5] }], "backdrop-invert": [{ "backdrop-invert": [f2] }], "backdrop-opacity": [{ "backdrop-opacity": [k3] }], "backdrop-saturate": [{ "backdrop-saturate": [K3] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n3] }], "border-spacing-x": [{ "border-spacing-x": [n3] }], "border-spacing-y": [{ "border-spacing-y": [n3] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l3] }], duration: [{ duration: j2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l3] }], delay: [{ delay: j2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l3] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O5] }], "scale-x": [{ "scale-x": [O5] }], "scale-y": [{ "scale-y": [O5] }], rotate: [{ rotate: [z3, l3] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l3] }], accent: [{ accent: ["auto", r5] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l3] }], "caret-color": [{ caret: [r5] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p4() }], "scroll-mx": [{ "scroll-mx": p4() }], "scroll-my": [{ "scroll-my": p4() }], "scroll-ms": [{ "scroll-ms": p4() }], "scroll-me": [{ "scroll-me": p4() }], "scroll-mt": [{ "scroll-mt": p4() }], "scroll-mr": [{ "scroll-mr": p4() }], "scroll-mb": [{ "scroll-mb": p4() }], "scroll-ml": [{ "scroll-ml": p4() }], "scroll-p": [{ "scroll-p": p4() }], "scroll-px": [{ "scroll-px": p4() }], "scroll-py": [{ "scroll-py": p4() }], "scroll-ps": [{ "scroll-ps": p4() }], "scroll-pe": [{ "scroll-pe": p4() }], "scroll-pt": [{ "scroll-pt": p4() }], "scroll-pr": [{ "scroll-pr": p4() }], "scroll-pb": [{ "scroll-pb": p4() }], "scroll-pl": [{ "scroll-pl": p4() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l3] }], fill: [{ fill: [r5, "none"] }], "stroke-w": [{ stroke: [h2, S5] }], stroke: [{ stroke: [r5, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P4(T5);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e2(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d6 = 0;
var x6 = Array.isArray;
function g2(t2, r5, e3, a2, o5, i3) {
  var s2, n3, f2 = {};
  for (n3 in r5)
    n3 == "ref" ? s2 = r5[n3] : f2[n3] = r5[n3];
  var u5 = { type: t2, props: f2, key: e3, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d6, __i: -1, __u: 0, __source: o5, __self: i3 };
  if (typeof t2 == "function" && (s2 = t2.defaultProps))
    for (n3 in s2)
      f2[n3] === void 0 && (f2[n3] = s2[n3]);
  return a.vnode && a.vnode(u5), u5;
}

// ../components/ui/tabs.tsx
var Tabs = Z3;
var TabsList = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  ee4,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = ee4.displayName;
var TabsTrigger = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  te4,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = te4.displayName;
var TabsContent = ee2(({ class: className, ...props }, ref) => /* @__PURE__ */ g2(
  oe4,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = oe4.displayName;
export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
};
