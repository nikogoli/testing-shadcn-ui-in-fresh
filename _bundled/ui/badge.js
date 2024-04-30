// https://esm.sh/v132/clsx@2.0.0/denonext/clsx.mjs
function o(r) {
  var f, n, t = "";
  if (typeof r == "string" || typeof r == "number")
    t += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (f = 0; f < r.length; f++)
        r[f] && (n = o(r[f])) && (t && (t += " "), t += n);
    else
      for (f in r)
        r[f] && (t && (t += " "), t += f);
  return t;
}
function e() {
  for (var r, f, n = 0, t = ""; n < arguments.length; )
    (r = arguments[n++]) && (f = o(r)) && (t && (t += " "), t += f);
  return t;
}

// https://esm.sh/v132/class-variance-authority@0.7.0/denonext/class-variance-authority.mjs
var m = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n;
var y = e;
var b = (n, l2) => (t) => {
  var r;
  if (l2?.variants == null)
    return y(n, t?.class, t?.className);
  let { variants: o2, defaultVariants: d3 } = l2, N = Object.keys(o2).map((e2) => {
    let a2 = t?.[e2], u = d3?.[e2];
    if (a2 === null)
      return null;
    let i2 = m(a2) || m(u);
    return o2[e2][i2];
  }), v = t && Object.entries(t).reduce((e2, a2) => {
    let [u, i2] = a2;
    return i2 === void 0 || (e2[u] = i2), e2;
  }, {}), V3 = l2 == null || (r = l2.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((e2, a2) => {
    let { class: u, className: i2, ...f } = a2;
    return Object.entries(f).every((C2) => {
      let [c, s] = C2;
      return Array.isArray(s) ? s.includes({ ...d3, ...v }[c]) : { ...d3, ...v }[c] === s;
    }) ? [...e2, u, i2] : e2;
  }, []);
  return y(n, N, V3, t?.class, t?.className);
};

// https://esm.sh/v132/tailwind-merge@1.14.0/denonext/tailwind-merge.mjs
var Ar = Object.defineProperty;
var Mr = (r, e2) => {
  for (var t in e2)
    Ar(r, t, { get: e2[t], enumerable: true });
};
function U() {
  for (var r = 0, e2, t, o2 = ""; r < arguments.length; )
    (e2 = arguments[r++]) && (t = lr(e2)) && (o2 && (o2 += " "), o2 += t);
  return o2;
}
function lr(r) {
  if (typeof r == "string")
    return r;
  for (var e2, t = "", o2 = 0; o2 < r.length; o2++)
    r[o2] && (e2 = lr(r[o2])) && (t && (t += " "), t += e2);
  return t;
}
var Z = "-";
function ur(r) {
  var e2 = Sr(r), t = r.conflictingClassGroups, o2 = r.conflictingClassGroupModifiers, a2 = o2 === void 0 ? {} : o2;
  function s(i2) {
    var c = i2.split(Z);
    return c[0] === "" && c.length !== 1 && c.shift(), pr(c, e2) || kr(i2);
  }
  function n(i2, c) {
    var u = t[i2] || [];
    return c && a2[i2] ? [].concat(u, a2[i2]) : u;
  }
  return { getClassGroupId: s, getConflictingClassGroupIds: n };
}
function pr(r, e2) {
  if (r.length === 0)
    return e2.classGroupId;
  var t = r[0], o2 = e2.nextPart.get(t), a2 = o2 ? pr(r.slice(1), o2) : void 0;
  if (a2)
    return a2;
  if (e2.validators.length !== 0) {
    var s = r.join(Z);
    return e2.validators.find(function(n) {
      var i2 = n.validator;
      return i2(s);
    })?.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function kr(r) {
  if (dr.test(r)) {
    var e2 = dr.exec(r)[1], t = e2?.substring(0, e2.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function Sr(r) {
  var e2 = r.theme, t = r.prefix, o2 = { nextPart: /* @__PURE__ */ new Map(), validators: [] }, a2 = Gr(Object.entries(r.classGroups), t);
  return a2.forEach(function(s) {
    var n = s[0], i2 = s[1];
    q(i2, o2, n, e2);
  }), o2;
}
function q(r, e2, t, o2) {
  r.forEach(function(a2) {
    if (typeof a2 == "string") {
      var s = a2 === "" ? e2 : cr(e2, a2);
      s.classGroupId = t;
      return;
    }
    if (typeof a2 == "function") {
      if (zr(a2)) {
        q(a2(o2), e2, t, o2);
        return;
      }
      e2.validators.push({ validator: a2, classGroupId: t });
      return;
    }
    Object.entries(a2).forEach(function(n) {
      var i2 = n[0], c = n[1];
      q(c, cr(e2, i2), t, o2);
    });
  });
}
function cr(r, e2) {
  var t = r;
  return e2.split(Z).forEach(function(o2) {
    t.nextPart.has(o2) || t.nextPart.set(o2, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o2);
  }), t;
}
function zr(r) {
  return r.isThemeGetter;
}
function Gr(r, e2) {
  return e2 ? r.map(function(t) {
    var o2 = t[0], a2 = t[1], s = a2.map(function(n) {
      return typeof n == "string" ? e2 + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(function(i2) {
        var c = i2[0], u = i2[1];
        return [e2 + c, u];
      })) : n;
    });
    return [o2, s];
  }) : r;
}
function fr(r) {
  if (r < 1)
    return { get: function() {
    }, set: function() {
    } };
  var e2 = 0, t = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map();
  function a2(s, n) {
    t.set(s, n), e2++, e2 > r && (e2 = 0, o2 = t, t = /* @__PURE__ */ new Map());
  }
  return { get: function(n) {
    var i2 = t.get(n);
    if (i2 !== void 0)
      return i2;
    if ((i2 = o2.get(n)) !== void 0)
      return a2(n, i2), i2;
  }, set: function(n, i2) {
    t.has(n) ? t.set(n, i2) : a2(n, i2);
  } };
}
var X = "!";
function br(r) {
  var e2 = r.separator || ":", t = e2.length === 1, o2 = e2[0], a2 = e2.length;
  return function(n) {
    for (var i2 = [], c = 0, u = 0, b3, f = 0; f < n.length; f++) {
      var g2 = n[f];
      if (c === 0) {
        if (g2 === o2 && (t || n.slice(f, f + a2) === e2)) {
          i2.push(n.slice(u, f)), u = f + a2;
          continue;
        }
        if (g2 === "/") {
          b3 = f;
          continue;
        }
      }
      g2 === "[" ? c++ : g2 === "]" && c--;
    }
    var y2 = i2.length === 0 ? n : n.substring(u), x3 = y2.startsWith(X), m2 = x3 ? y2.substring(1) : y2, w2 = b3 && b3 > u ? b3 - u : void 0;
    return { modifiers: i2, hasImportantModifier: x3, baseClassName: m2, maybePostfixModifierPosition: w2 };
  };
}
function gr(r) {
  if (r.length <= 1)
    return r;
  var e2 = [], t = [];
  return r.forEach(function(o2) {
    var a2 = o2[0] === "[";
    a2 ? (e2.push.apply(e2, t.sort().concat([o2])), t = []) : t.push(o2);
  }), e2.push.apply(e2, t.sort()), e2;
}
function mr(r) {
  return { cache: fr(r.cacheSize), splitModifiers: br(r), ...ur(r) };
}
var Ir = /\s+/;
function vr(r, e2) {
  var t = e2.splitModifiers, o2 = e2.getClassGroupId, a2 = e2.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return r.trim().split(Ir).map(function(n) {
    var i2 = t(n), c = i2.modifiers, u = i2.hasImportantModifier, b3 = i2.baseClassName, f = i2.maybePostfixModifierPosition, g2 = o2(f ? b3.substring(0, f) : b3), y2 = !!f;
    if (!g2) {
      if (!f)
        return { isTailwindClass: false, originalClassName: n };
      if (g2 = o2(b3), !g2)
        return { isTailwindClass: false, originalClassName: n };
      y2 = false;
    }
    var x3 = gr(c).join(":"), m2 = u ? x3 + X : x3;
    return { isTailwindClass: true, modifierId: m2, classGroupId: g2, originalClassName: n, hasPostfixModifier: y2 };
  }).reverse().filter(function(n) {
    if (!n.isTailwindClass)
      return true;
    var i2 = n.modifierId, c = n.classGroupId, u = n.hasPostfixModifier, b3 = i2 + c;
    return s.has(b3) ? false : (s.add(b3), a2(c, u).forEach(function(f) {
      return s.add(i2 + f);
    }), true);
  }).reverse().map(function(n) {
    return n.originalClassName;
  }).join(" ");
}
function P() {
  for (var r = arguments.length, e2 = new Array(r), t = 0; t < r; t++)
    e2[t] = arguments[t];
  var o2, a2, s, n = i2;
  function i2(u) {
    var b3 = e2[0], f = e2.slice(1), g2 = f.reduce(function(y2, x3) {
      return x3(y2);
    }, b3());
    return o2 = mr(g2), a2 = o2.cache.get, s = o2.cache.set, n = c, c(u);
  }
  function c(u) {
    var b3 = a2(u);
    if (b3)
      return b3;
    var f = vr(u, o2);
    return s(u, f), f;
  }
  return function() {
    return n(U.apply(null, arguments));
  };
}
function d(r) {
  var e2 = function(o2) {
    return o2[r] || [];
  };
  return e2.isThemeGetter = true, e2;
}
var wr = {};
Mr(wr, { isAny: () => G, isArbitraryLength: () => L, isArbitraryNumber: () => S, isArbitraryPosition: () => Q, isArbitraryShadow: () => D, isArbitrarySize: () => H, isArbitraryUrl: () => V, isArbitraryValue: () => l, isArbitraryWeight: () => Wr, isInteger: () => z, isLength: () => h, isNumber: () => M, isPercent: () => Y, isTshirtSize: () => C });
var yr = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var Pr = /^\d+\/\d+$/;
var Tr = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var Rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function h(r) {
  return M(r) || Tr.has(r) || Pr.test(r) || L(r);
}
function L(r) {
  return I(r, "length", Er);
}
function H(r) {
  return I(r, "size", xr);
}
function Q(r) {
  return I(r, "position", xr);
}
function V(r) {
  return I(r, "url", jr);
}
function S(r) {
  return I(r, "number", M);
}
var Wr = S;
function M(r) {
  return !Number.isNaN(Number(r));
}
function Y(r) {
  return r.endsWith("%") && M(r.slice(0, -1));
}
function z(r) {
  return hr(r) || I(r, "number", hr);
}
function l(r) {
  return yr.test(r);
}
function G() {
  return true;
}
function C(r) {
  return Rr.test(r);
}
function D(r) {
  return I(r, "", Ur);
}
function I(r, e2, t) {
  var o2 = yr.exec(r);
  return o2 ? o2[1] ? o2[1] === e2 : t(o2[2]) : false;
}
function Er(r) {
  return Nr.test(r);
}
function xr() {
  return false;
}
function jr(r) {
  return r.startsWith("url(");
}
function hr(r) {
  return Number.isInteger(Number(r));
}
function Ur(r) {
  return Lr.test(r);
}
function T() {
  var r = d("colors"), e2 = d("spacing"), t = d("blur"), o2 = d("brightness"), a2 = d("borderColor"), s = d("borderRadius"), n = d("borderSpacing"), i2 = d("borderWidth"), c = d("contrast"), u = d("grayscale"), b3 = d("hueRotate"), f = d("invert"), g2 = d("gap"), y2 = d("gradientColorStops"), x3 = d("gradientColorStopPositions"), m2 = d("inset"), w2 = d("margin"), k = d("opacity"), A2 = d("padding"), K2 = d("saturate"), O2 = d("scale"), rr = d("sepia"), er = d("skew"), tr = d("space"), or = d("translate"), $2 = function() {
    return ["auto", "contain", "none"];
  }, B2 = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F2 = function() {
    return ["auto", l, e2];
  }, p = function() {
    return [l, e2];
  }, nr = function() {
    return ["", h];
  }, W2 = function() {
    return ["auto", M, l];
  }, ir = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, E2 = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ar = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J2 = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R2 = function() {
    return ["", "0", l];
  }, sr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N = function() {
    return [M, S];
  }, j = function() {
    return [M, l];
  };
  return { cacheSize: 500, theme: { colors: [G], spacing: [h], blur: ["none", "", C, l], brightness: N(), borderColor: [r], borderRadius: ["none", "", "full", C, l], borderSpacing: p(), borderWidth: nr(), contrast: N(), grayscale: R2(), hueRotate: j(), invert: R2(), gap: p(), gradientColorStops: [r], gradientColorStopPositions: [Y, L], inset: F2(), margin: F2(), opacity: N(), padding: p(), saturate: N(), scale: N(), sepia: R2(), skew: j(), space: p(), translate: p() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [C] }], "break-after": [{ "break-after": sr() }], "break-before": [{ "break-before": sr() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none"] }], clear: [{ clear: ["left", "right", "both", "none"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [].concat(ir(), [l]) }], overflow: [{ overflow: B2() }], "overflow-x": [{ "overflow-x": B2() }], "overflow-y": [{ "overflow-y": B2() }], overscroll: [{ overscroll: $2() }], "overscroll-x": [{ "overscroll-x": $2() }], "overscroll-y": [{ "overscroll-y": $2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [m2] }], "inset-x": [{ "inset-x": [m2] }], "inset-y": [{ "inset-y": [m2] }], start: [{ start: [m2] }], end: [{ end: [m2] }], top: [{ top: [m2] }], right: [{ right: [m2] }], bottom: [{ bottom: [m2] }], left: [{ left: [m2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", z] }], basis: [{ basis: F2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: R2() }], shrink: [{ shrink: R2() }], order: [{ order: ["first", "last", "none", z] }], "grid-cols": [{ "grid-cols": [G] }], "col-start-end": [{ col: ["auto", { span: ["full", z] }, l] }], "col-start": [{ "col-start": W2() }], "col-end": [{ "col-end": W2() }], "grid-rows": [{ "grid-rows": [G] }], "row-start-end": [{ row: ["auto", { span: [z] }, l] }], "row-start": [{ "row-start": W2() }], "row-end": [{ "row-end": W2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [g2] }], "gap-x": [{ "gap-x": [g2] }], "gap-y": [{ "gap-y": [g2] }], "justify-content": [{ justify: ["normal"].concat(J2()) }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal"].concat(J2(), ["baseline"]) }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [].concat(J2(), ["baseline"]) }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [A2] }], px: [{ px: [A2] }], py: [{ py: [A2] }], ps: [{ ps: [A2] }], pe: [{ pe: [A2] }], pt: [{ pt: [A2] }], pr: [{ pr: [A2] }], pb: [{ pb: [A2] }], pl: [{ pl: [A2] }], m: [{ m: [w2] }], mx: [{ mx: [w2] }], my: [{ my: [w2] }], ms: [{ ms: [w2] }], me: [{ me: [w2] }], mt: [{ mt: [w2] }], mr: [{ mr: [w2] }], mb: [{ mb: [w2] }], ml: [{ ml: [w2] }], "space-x": [{ "space-x": [tr] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [tr] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", l, e2] }], "min-w": [{ "min-w": ["min", "max", "fit", l, h] }], "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C] }, C, l] }], h: [{ h: [l, e2, "auto", "min", "max", "fit"] }], "min-h": [{ "min-h": ["min", "max", "fit", l, h] }], "max-h": [{ "max-h": [l, e2, "min", "max", "fit"] }], "font-size": [{ text: ["base", C, L] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", S] }], "font-family": [{ font: [G] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractons"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", M, S] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", l, h] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [r] }], "placeholder-opacity": [{ "placeholder-opacity": [k] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [r] }], "text-opacity": [{ "text-opacity": [k] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [].concat(E2(), ["wavy"]) }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", h] }], "underline-offset": [{ "underline-offset": ["auto", l, h] }], "text-decoration-color": [{ decoration: [r] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], indent: [{ indent: p() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [k] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [].concat(ir(), [Q]) }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", H] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, V] }], "bg-color": [{ bg: [r] }], "gradient-from-pos": [{ from: [x3] }], "gradient-via-pos": [{ via: [x3] }], "gradient-to-pos": [{ to: [x3] }], "gradient-from": [{ from: [y2] }], "gradient-via": [{ via: [y2] }], "gradient-to": [{ to: [y2] }], rounded: [{ rounded: [s] }], "rounded-s": [{ "rounded-s": [s] }], "rounded-e": [{ "rounded-e": [s] }], "rounded-t": [{ "rounded-t": [s] }], "rounded-r": [{ "rounded-r": [s] }], "rounded-b": [{ "rounded-b": [s] }], "rounded-l": [{ "rounded-l": [s] }], "rounded-ss": [{ "rounded-ss": [s] }], "rounded-se": [{ "rounded-se": [s] }], "rounded-ee": [{ "rounded-ee": [s] }], "rounded-es": [{ "rounded-es": [s] }], "rounded-tl": [{ "rounded-tl": [s] }], "rounded-tr": [{ "rounded-tr": [s] }], "rounded-br": [{ "rounded-br": [s] }], "rounded-bl": [{ "rounded-bl": [s] }], "border-w": [{ border: [i2] }], "border-w-x": [{ "border-x": [i2] }], "border-w-y": [{ "border-y": [i2] }], "border-w-s": [{ "border-s": [i2] }], "border-w-e": [{ "border-e": [i2] }], "border-w-t": [{ "border-t": [i2] }], "border-w-r": [{ "border-r": [i2] }], "border-w-b": [{ "border-b": [i2] }], "border-w-l": [{ "border-l": [i2] }], "border-opacity": [{ "border-opacity": [k] }], "border-style": [{ border: [].concat(E2(), ["hidden"]) }], "divide-x": [{ "divide-x": [i2] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i2] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [k] }], "divide-style": [{ divide: E2() }], "border-color": [{ border: [a2] }], "border-color-x": [{ "border-x": [a2] }], "border-color-y": [{ "border-y": [a2] }], "border-color-t": [{ "border-t": [a2] }], "border-color-r": [{ "border-r": [a2] }], "border-color-b": [{ "border-b": [a2] }], "border-color-l": [{ "border-l": [a2] }], "divide-color": [{ divide: [a2] }], "outline-style": [{ outline: [""].concat(E2()) }], "outline-offset": [{ "outline-offset": [l, h] }], "outline-w": [{ outline: [h] }], "outline-color": [{ outline: [r] }], "ring-w": [{ ring: nr() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [r] }], "ring-opacity": [{ "ring-opacity": [k] }], "ring-offset-w": [{ "ring-offset": [h] }], "ring-offset-color": [{ "ring-offset": [r] }], shadow: [{ shadow: ["", "inner", "none", C, D] }], "shadow-color": [{ shadow: [G] }], opacity: [{ opacity: [k] }], "mix-blend": [{ "mix-blend": ar() }], "bg-blend": [{ "bg-blend": ar() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o2] }], contrast: [{ contrast: [c] }], "drop-shadow": [{ "drop-shadow": ["", "none", C, l] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [b3] }], invert: [{ invert: [f] }], saturate: [{ saturate: [K2] }], sepia: [{ sepia: [rr] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o2] }], "backdrop-contrast": [{ "backdrop-contrast": [c] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b3] }], "backdrop-invert": [{ "backdrop-invert": [f] }], "backdrop-opacity": [{ "backdrop-opacity": [k] }], "backdrop-saturate": [{ "backdrop-saturate": [K2] }], "backdrop-sepia": [{ "backdrop-sepia": [rr] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [n] }], "border-spacing-x": [{ "border-spacing-x": [n] }], "border-spacing-y": [{ "border-spacing-y": [n] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: j() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: j() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [O2] }], "scale-x": [{ "scale-x": [O2] }], "scale-y": [{ "scale-y": [O2] }], rotate: [{ rotate: [z, l] }], "translate-x": [{ "translate-x": [or] }], "translate-y": [{ "translate-y": [or] }], "skew-x": [{ "skew-x": [er] }], "skew-y": [{ "skew-y": [er] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", r] }], appearance: ["appearance-none"], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [r] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": p() }], "scroll-mx": [{ "scroll-mx": p() }], "scroll-my": [{ "scroll-my": p() }], "scroll-ms": [{ "scroll-ms": p() }], "scroll-me": [{ "scroll-me": p() }], "scroll-mt": [{ "scroll-mt": p() }], "scroll-mr": [{ "scroll-mr": p() }], "scroll-mb": [{ "scroll-mb": p() }], "scroll-ml": [{ "scroll-ml": p() }], "scroll-p": [{ "scroll-p": p() }], "scroll-px": [{ "scroll-px": p() }], "scroll-py": [{ "scroll-py": p() }], "scroll-ps": [{ "scroll-ps": p() }], "scroll-pe": [{ "scroll-pe": p() }], "scroll-pt": [{ "scroll-pt": p() }], "scroll-pr": [{ "scroll-pr": p() }], "scroll-pb": [{ "scroll-pb": p() }], "scroll-pl": [{ "scroll-pl": p() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] }], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [r, "none"] }], "stroke-w": [{ stroke: [h, S] }], stroke: [{ stroke: [r, "none"] }], sr: ["sr-only", "not-sr-only"] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}
var Fr = P(T);

// ../lib/utils.ts
function cn(...inputs) {
  return Fr(e(inputs));
}

// https://esm.sh/stable/preact@10.19.6/denonext/preact.mjs
var D2;
var a;
var Q2;
var ne;
var x;
var z2;
var X2;
var $;
var Y2;
var E = {};
var O = [];
var oe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var F = Array.isArray;
function b2(e2, _) {
  for (var t in _)
    e2[t] = _[t];
  return e2;
}
function Z2(e2) {
  var _ = e2.parentNode;
  _ && _.removeChild(e2);
}
function S2(e2, _, t, i2, n) {
  var r = { type: e2, props: _, key: t, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: n ?? ++Q2, __i: -1, __u: 0 };
  return n == null && a.vnode != null && a.vnode(r), r;
}
function H2(e2) {
  return e2.children;
}
function W(e2, _) {
  this.props = e2, this.context = _;
}
function w(e2, _) {
  if (_ == null)
    return e2.__ ? w(e2.__, e2.__i + 1) : null;
  for (var t; _ < e2.__k.length; _++)
    if ((t = e2.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function ie(e2, _, t) {
  var i2, n = e2.__v, r = n.__e, l2 = e2.__P;
  if (l2)
    return (i2 = b2({}, n)).__v = n.__v + 1, a.vnode && a.vnode(i2), G2(l2, i2, n, e2.__n, l2.ownerSVGElement !== void 0, 32 & n.__u ? [r] : null, _, r ?? w(n), !!(32 & n.__u), t), i2.__v = n.__v, i2.__.__k[i2.__i] = i2, i2.__d = void 0, i2.__e != r && ee(i2), i2;
}
function ee(e2) {
  var _, t;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, _ = 0; _ < e2.__k.length; _++)
      if ((t = e2.__k[_]) != null && t.__e != null) {
        e2.__e = e2.__c.base = t.__e;
        break;
      }
    return ee(e2);
  }
}
function I2(e2) {
  (!e2.__d && (e2.__d = true) && x.push(e2) && !A.__r++ || z2 !== a.debounceRendering) && ((z2 = a.debounceRendering) || X2)(A);
}
function A() {
  var e2, _, t, i2 = [], n = [];
  for (x.sort($); e2 = x.shift(); )
    e2.__d && (t = x.length, _ = ie(e2, i2, n) || _, t === 0 || x.length > t ? (R(i2, _, n), n.length = i2.length = 0, _ = void 0, x.sort($)) : _ && a.__c && a.__c(_, O));
  _ && R(i2, _, n), A.__r = 0;
}
function _e(e2, _, t, i2, n, r, l2, u, c, s, p) {
  var o2, m2, f, h2, k, v = i2 && i2.__k || O, d3 = _.length;
  for (t.__d = c, le(t, _, v), c = t.__d, o2 = 0; o2 < d3; o2++)
    (f = t.__k[o2]) != null && typeof f != "boolean" && typeof f != "function" && (m2 = f.__i === -1 ? E : v[f.__i] || E, f.__i = o2, G2(e2, f, m2, n, r, l2, u, c, s, p), h2 = f.__e, f.ref && m2.ref != f.ref && (m2.ref && V2(m2.ref, null, f), p.push(f.ref, f.__c || h2, f)), k == null && h2 != null && (k = h2), 65536 & f.__u || m2.__k === f.__k ? c = te(f, c, e2) : typeof f.type == "function" && f.__d !== void 0 ? c = f.__d : h2 && (c = h2.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = c, t.__e = k;
}
function le(e2, _, t) {
  var i2, n, r, l2, u, c = _.length, s = t.length, p = s, o2 = 0;
  for (e2.__k = [], i2 = 0; i2 < c; i2++)
    l2 = i2 + o2, (n = e2.__k[i2] = (n = _[i2]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? S2(null, n, null, null, null) : F(n) ? S2(H2, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? S2(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = e2, n.__b = e2.__b + 1, u = ue(n, t, l2, p), n.__i = u, r = null, u !== -1 && (p--, (r = t[u]) && (r.__u |= 131072)), r == null || r.__v === null ? (u == -1 && o2--, typeof n.type != "function" && (n.__u |= 65536)) : u !== l2 && (u === l2 + 1 ? o2++ : u > l2 ? p > c - l2 ? o2 += u - l2 : o2-- : u < l2 ? u == l2 - 1 && (o2 = u - l2) : o2 = 0, u !== i2 + o2 && (n.__u |= 65536))) : (r = t[l2]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == e2.__d && (e2.__d = w(r)), B(r, r, false), t[l2] = null, p--);
  if (p)
    for (i2 = 0; i2 < s; i2++)
      (r = t[i2]) != null && !(131072 & r.__u) && (r.__e == e2.__d && (e2.__d = w(r)), B(r, r));
}
function te(e2, _, t) {
  var i2, n;
  if (typeof e2.type == "function") {
    for (i2 = e2.__k, n = 0; i2 && n < i2.length; n++)
      i2[n] && (i2[n].__ = e2, _ = te(i2[n], _, t));
    return _;
  }
  e2.__e != _ && (t.insertBefore(e2.__e, _ || null), _ = e2.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function ue(e2, _, t, i2) {
  var n = e2.key, r = e2.type, l2 = t - 1, u = t + 1, c = _[t];
  if (c === null || c && n == c.key && r === c.type && !(131072 & c.__u))
    return t;
  if (i2 > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; l2 >= 0 || u < _.length; ) {
      if (l2 >= 0) {
        if ((c = _[l2]) && !(131072 & c.__u) && n == c.key && r === c.type)
          return l2;
        l2--;
      }
      if (u < _.length) {
        if ((c = _[u]) && !(131072 & c.__u) && n == c.key && r === c.type)
          return u;
        u++;
      }
    }
  return -1;
}
function q2(e2, _, t) {
  _[0] === "-" ? e2.setProperty(_, t ?? "") : e2[_] = t == null ? "" : typeof t != "number" || oe.test(_) ? t : t + "px";
}
function M2(e2, _, t, i2, n) {
  var r;
  e:
    if (_ === "style")
      if (typeof t == "string")
        e2.style.cssText = t;
      else {
        if (typeof i2 == "string" && (e2.style.cssText = i2 = ""), i2)
          for (_ in i2)
            t && _ in t || q2(e2.style, _, "");
        if (t)
          for (_ in t)
            i2 && t[_] === i2[_] || q2(e2.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      r = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e2 ? _.toLowerCase().slice(2) : _.slice(2), e2.l || (e2.l = {}), e2.l[_ + r] = t, t ? i2 ? t.u = i2.u : (t.u = Date.now(), e2.addEventListener(_, r ? K : J, r)) : e2.removeEventListener(_, r ? K : J, r);
    else {
      if (n)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e2)
        try {
          e2[_] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === false && _[4] !== "-" ? e2.removeAttribute(_) : e2.setAttribute(_, t));
    }
}
function J(e2) {
  if (this.l) {
    var _ = this.l[e2.type + false];
    if (e2.t) {
      if (e2.t <= _.u)
        return;
    } else
      e2.t = Date.now();
    return _(a.event ? a.event(e2) : e2);
  }
}
function K(e2) {
  if (this.l)
    return this.l[e2.type + true](a.event ? a.event(e2) : e2);
}
function G2(e2, _, t, i2, n, r, l2, u, c, s) {
  var p, o2, m2, f, h2, k, v, d3, y2, C2, T2, P2, j, U2, N, g2 = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [u = _.__e = t.__e]), (p = a.__b) && p(_);
  e:
    if (typeof g2 == "function")
      try {
        if (d3 = _.props, y2 = (p = g2.contextType) && i2[p.__c], C2 = p ? y2 ? y2.props.value : p.__ : i2, t.__c ? v = (o2 = _.__c = t.__c).__ = o2.__E : ("prototype" in g2 && g2.prototype.render ? _.__c = o2 = new g2(d3, C2) : (_.__c = o2 = new W(d3, C2), o2.constructor = g2, o2.render = ce), y2 && y2.sub(o2), o2.props = d3, o2.state || (o2.state = {}), o2.context = C2, o2.__n = i2, m2 = o2.__d = true, o2.__h = [], o2._sb = []), o2.__s == null && (o2.__s = o2.state), g2.getDerivedStateFromProps != null && (o2.__s == o2.state && (o2.__s = b2({}, o2.__s)), b2(o2.__s, g2.getDerivedStateFromProps(d3, o2.__s))), f = o2.props, h2 = o2.state, o2.__v = _, m2)
          g2.getDerivedStateFromProps == null && o2.componentWillMount != null && o2.componentWillMount(), o2.componentDidMount != null && o2.__h.push(o2.componentDidMount);
        else {
          if (g2.getDerivedStateFromProps == null && d3 !== f && o2.componentWillReceiveProps != null && o2.componentWillReceiveProps(d3, C2), !o2.__e && (o2.shouldComponentUpdate != null && o2.shouldComponentUpdate(d3, o2.__s, C2) === false || _.__v === t.__v)) {
            for (_.__v !== t.__v && (o2.props = d3, o2.state = o2.__s, o2.__d = false), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(L2) {
              L2 && (L2.__ = _);
            }), T2 = 0; T2 < o2._sb.length; T2++)
              o2.__h.push(o2._sb[T2]);
            o2._sb = [], o2.__h.length && l2.push(o2);
            break e;
          }
          o2.componentWillUpdate != null && o2.componentWillUpdate(d3, o2.__s, C2), o2.componentDidUpdate != null && o2.__h.push(function() {
            o2.componentDidUpdate(f, h2, k);
          });
        }
        if (o2.context = C2, o2.props = d3, o2.__P = e2, o2.__e = false, P2 = a.__r, j = 0, "prototype" in g2 && g2.prototype.render) {
          for (o2.state = o2.__s, o2.__d = false, P2 && P2(_), p = o2.render(o2.props, o2.state, o2.context), U2 = 0; U2 < o2._sb.length; U2++)
            o2.__h.push(o2._sb[U2]);
          o2._sb = [];
        } else
          do
            o2.__d = false, P2 && P2(_), p = o2.render(o2.props, o2.state, o2.context), o2.state = o2.__s;
          while (o2.__d && ++j < 25);
        o2.state = o2.__s, o2.getChildContext != null && (i2 = b2(b2({}, i2), o2.getChildContext())), m2 || o2.getSnapshotBeforeUpdate == null || (k = o2.getSnapshotBeforeUpdate(f, h2)), _e(e2, F(N = p != null && p.type === H2 && p.key == null ? p.props.children : p) ? N : [N], _, t, i2, n, r, l2, u, c, s), o2.base = _.__e, _.__u &= -161, o2.__h.length && l2.push(o2), v && (o2.__E = o2.__ = null);
      } catch (L2) {
        _.__v = null, c || r != null ? (_.__e = u, _.__u |= c ? 160 : 32, r[r.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), a.__e(L2, _, t);
      }
    else
      r == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = fe(t.__e, _, t, i2, n, r, l2, c, s);
  (p = a.diffed) && p(_);
}
function R(e2, _, t) {
  for (var i2 = 0; i2 < t.length; i2++)
    V2(t[i2], t[++i2], t[++i2]);
  a.__c && a.__c(_, e2), e2.some(function(n) {
    try {
      e2 = n.__h, n.__h = [], e2.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      a.__e(r, n.__v);
    }
  });
}
function fe(e2, _, t, i2, n, r, l2, u, c) {
  var s, p, o2, m2, f, h2, k, v = t.props, d3 = _.props, y2 = _.type;
  if (y2 === "svg" && (n = true), r != null) {
    for (s = 0; s < r.length; s++)
      if ((f = r[s]) && "setAttribute" in f == !!y2 && (y2 ? f.localName === y2 : f.nodeType === 3)) {
        e2 = f, r[s] = null;
        break;
      }
  }
  if (e2 == null) {
    if (y2 === null)
      return document.createTextNode(d3);
    e2 = n ? document.createElementNS("http://www.w3.org/2000/svg", y2) : document.createElement(y2, d3.is && d3), r = null, u = false;
  }
  if (y2 === null)
    v === d3 || u && e2.data === d3 || (e2.data = d3);
  else {
    if (r = r && D2.call(e2.childNodes), v = t.props || E, !u && r != null)
      for (v = {}, s = 0; s < e2.attributes.length; s++)
        v[(f = e2.attributes[s]).name] = f.value;
    for (s in v)
      f = v[s], s == "children" || (s == "dangerouslySetInnerHTML" ? o2 = f : s === "key" || s in d3 || M2(e2, s, null, f, n));
    for (s in d3)
      f = d3[s], s == "children" ? m2 = f : s == "dangerouslySetInnerHTML" ? p = f : s == "value" ? h2 = f : s == "checked" ? k = f : s === "key" || u && typeof f != "function" || v[s] === f || M2(e2, s, f, v[s], n);
    if (p)
      u || o2 && (p.__html === o2.__html || p.__html === e2.innerHTML) || (e2.innerHTML = p.__html), _.__k = [];
    else if (o2 && (e2.innerHTML = ""), _e(e2, F(m2) ? m2 : [m2], _, t, i2, n && y2 !== "foreignObject", r, l2, r ? r[0] : t.__k && w(t, 0), u, c), r != null)
      for (s = r.length; s--; )
        r[s] != null && Z2(r[s]);
    u || (s = "value", h2 !== void 0 && (h2 !== e2[s] || y2 === "progress" && !h2 || y2 === "option" && h2 !== v[s]) && M2(e2, s, h2, v[s], false), s = "checked", k !== void 0 && k !== e2[s] && M2(e2, s, k, v[s], false));
  }
  return e2;
}
function V2(e2, _, t) {
  try {
    typeof e2 == "function" ? e2(_) : e2.current = _;
  } catch (i2) {
    a.__e(i2, t);
  }
}
function B(e2, _, t) {
  var i2, n;
  if (a.unmount && a.unmount(e2), (i2 = e2.ref) && (i2.current && i2.current !== e2.__e || V2(i2, null, _)), (i2 = e2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (r) {
        a.__e(r, _);
      }
    i2.base = i2.__P = null, e2.__c = void 0;
  }
  if (i2 = e2.__k)
    for (n = 0; n < i2.length; n++)
      i2[n] && B(i2[n], _, t || typeof e2.type != "function");
  t || e2.__e == null || Z2(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function ce(e2, _, t) {
  return this.constructor(e2, t);
}
D2 = O.slice, a = { __e: function(e2, _, t, i2) {
  for (var n, r, l2; _ = _.__; )
    if ((n = _.__c) && !n.__)
      try {
        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(e2)), l2 = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e2, i2 || {}), l2 = n.__d), l2)
          return n.__E = n;
      } catch (u) {
        e2 = u;
      }
  throw e2;
} }, Q2 = 0, ne = function(e2) {
  return e2 != null && e2.constructor == null;
}, W.prototype.setState = function(e2, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b2({}, this.state), typeof e2 == "function" && (e2 = e2(b2({}, t), this.props)), e2 && b2(t, e2), e2 != null && this.__v && (_ && this._sb.push(_), I2(this));
}, W.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), I2(this));
}, W.prototype.render = H2, x = [], X2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = function(e2, _) {
  return e2.__v.__b - _.__v.__b;
}, A.__r = 0, Y2 = 0;

// https://esm.sh/stable/preact@10.19.6/denonext/jsx-runtime.js
var d2 = 0;
var x2 = Array.isArray;
function g(t, r, e2, a2, o2, i2) {
  var s, n, f = {};
  for (n in r)
    n == "ref" ? s = r[n] : f[n] = r[n];
  var u = { type: t, props: f, key: e2, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --d2, __i: -1, __u: 0, __source: o2, __self: i2 };
  if (typeof t == "function" && (s = t.defaultProps))
    for (n in s)
      f[n] === void 0 && (f[n] = s[n]);
  return a.vnode && a.vnode(u), u;
}

// ../components/ui/badge.tsx
var badgeVariants = b(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ class: className, variant, ...props }) {
  return /* @__PURE__ */ g("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
export {
  Badge,
  badgeVariants
};
