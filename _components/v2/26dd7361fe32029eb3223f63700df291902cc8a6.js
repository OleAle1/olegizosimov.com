const Pt = () => Promise.resolve().then(() => Ht), q = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: D, jsx: e, jsxs: l } = q;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React.Children;
globalThis.__GLOBALS__.React.cloneElement;
({
  ...globalThis.__GLOBALS__.React
});
const { Component: Vt, createContext: Zt, createElement: I, createFactory: Wt, createRef: qt, forwardRef: E, Fragment: Jt, isValidElement: Kt, lazy: Yt, memo: Xt, Profiler: Qt, PureComponent: ea, startTransition: ta, StrictMode: aa, Suspense: la, use: ra, useCallback: na, useContext: oa, useDebugValue: ia, useDeferredValue: sa, useEffect: f, useId: ca, useImperativeHandle: da, useInsertionEffect: ma, useLayoutEffect: ha, useMemo: pa, useReducer: ga, useRef: N, useState: p, useSyncExternalStore: ba, useTransition: xa, version: fa, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ua } = globalThis.__GLOBALS__.React;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), K = (o) => o.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, c, t) => t ? t.toUpperCase() : c.toLowerCase()
), z = (o) => {
  const i = K(o);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, j = (...o) => o.filter((i, c, t) => !!i && i.trim() !== "" && t.indexOf(i) === c).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Y = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = E(
  ({
    color: o = "currentColor",
    size: i = 24,
    strokeWidth: c = 2,
    absoluteStrokeWidth: t,
    className: r = "",
    children: s,
    iconNode: h,
    ...m
  }, g) => I(
    "svg",
    {
      ref: g,
      ...Y,
      width: i,
      height: i,
      stroke: o,
      strokeWidth: t ? Number(c) * 24 / Number(i) : c,
      className: j("lucide", r),
      ...m
    },
    [
      ...h.map(([v, b]) => I(v, b)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d = (o, i) => {
  const c = E(
    ({ className: t, ...r }, s) => I(X, {
      ref: s,
      iconNode: i,
      className: j(
        `lucide-${J(z(o))}`,
        `lucide-${o}`,
        t
      ),
      ...r
    })
  );
  return c.displayName = z(o), c;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], G = d("arrow-left", Q);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], te = d("award", ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], le = d("book-open", ae);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], ne = d("briefcase", re);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], $ = d("chevron-left", oe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], H = d("chevron-right", ie);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
], ce = d("code", se);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], C = d("external-link", de);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], he = d("folder", me);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
], ge = d("gem", pe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], xe = d("image", be);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], ue = d("linkedin", fe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], ve = d("mail", ye);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
], _e = d("medal", Fe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], Ae = d("menu", Ne);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
], we = d("palette", ke);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], Ce = d("play", Le);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Ie = d("send", Be);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], Me = d("smartphone", Se);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], Te = d("sparkles", Re);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], ze = d("star", Ue);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Oe = d("target", Ge);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
], Ee = d("trophy", De);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], $e = d("users", je);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Pe = d("video", He);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], P = d("x", Ve), V = "/_components/v2/26dd7361fe32029eb3223f63700df291902cc8a6/___-_____-1.1aeac987.jpg";
function Ze() {
  const [o, i] = p(!1), [c, t] = p(!1);
  f(() => {
    const m = () => {
      i(window.scrollY > 20);
    };
    return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m);
  }, []);
  const r = (m) => {
    const g = document.getElementById(m);
    if (g) {
      const F = g.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: F,
        behavior: "smooth"
      }), t(!1);
    }
  };
  return /* @__PURE__ */ l(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${o ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F2937]" : "bg-[#0A0A0A]"}`,
      children: [
        /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full overflow-hidden", children: /* @__PURE__ */ e("img", { src: V, alt: "Олег Изосимов", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ e("span", { className: "font-semibold text-lg text-[#F5F5F5] hidden sm:block", children: "ОЛЕГ ИЗОСИМОВ" })
          ] }),
          /* @__PURE__ */ l("nav", { className: "hidden md:flex items-center gap-8", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("about"),
                className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors uppercase text-sm tracking-[0.05em]",
                children: "Обо мне"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("cases"),
                className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors uppercase text-sm tracking-[0.05em]",
                children: "Кейсы"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("experience"),
                className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors uppercase text-sm tracking-[0.05em]",
                children: "Опыт"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("contacts"),
                className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors uppercase text-sm tracking-[0.05em]",
                children: "Контакты"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => {
                const m = document.getElementById("contacts");
                if (m) {
                  const b = m.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({
                    top: b,
                    behavior: "smooth"
                  }), t(!1);
                }
              },
              className: "hidden md:block bg-[#4F46E5] text-white px-6 py-2.5 rounded-full hover:bg-[#4338CA] transition-colors font-medium",
              children: "Написать"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => t(!c),
              className: "md:hidden p-2 text-[#F5F5F5]",
              children: c ? /* @__PURE__ */ e(P, { size: 24 }) : /* @__PURE__ */ e(Ae, { size: 24 })
            }
          )
        ] }),
        c && /* @__PURE__ */ e("div", { className: "md:hidden bg-[#0A0A0A] border-t border-[#1F2937]", children: /* @__PURE__ */ l("nav", { className: "flex flex-col px-6 py-4 gap-4", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => r("about"),
              className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors text-left",
              children: "Обо мне"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => r("cases"),
              className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors text-left",
              children: "Кейсы"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => r("experience"),
              className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors text-left",
              children: "Опыт"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => r("contacts"),
              className: "text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors text-left",
              children: "Контакты"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => {
                window.open("https://t.me/daybogtebezdorovya", "_blank");
              },
              className: "bg-[#4F46E5] text-white px-6 py-2.5 rounded-full hover:bg-[#4338CA] transition-colors text-center font-medium",
              children: "Написать"
            }
          )
        ] }) })
      ]
    }
  );
}
function We() {
  return /* @__PURE__ */ e("section", { className: "min-h-screen flex items-center pt-20 px-6", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto w-full", children: /* @__PURE__ */ l("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ l("div", { className: "animate-fade-in-up", children: [
      /* @__PURE__ */ e(
        "h1",
        {
          className: "text-3xl md:text-4xl lg:text-5xl mb-4 text-[#F5F5F5] font-bold",
          style: {
            fontFamily: "var(--font-family-heading)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em"
          },
          children: "Олег Изосимов"
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-lg md:text-xl text-[#9CA3AF] mb-6", children: "Креативный директор · 15 лет в индустрии" }),
      /* @__PURE__ */ e("p", { className: "text-base md:text-lg text-[#9CA3AF] mb-8 leading-relaxed", style: { lineHeight: "1.5" }, children: "Руковожу креативными командами. Строю бренд-системы, запускаю digital-кампании и внедряю AI в рабочие процессы." }),
      /* @__PURE__ */ e("div", { className: "pt-8 border-t border-[#1F2937]", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-4 md:gap-6 flex-wrap", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2 text-[#9CA3AF]", children: [
          /* @__PURE__ */ e(Ee, { size: 20, className: "text-[#8B5CF6]" }),
          /* @__PURE__ */ e("span", { className: "text-sm md:text-base", children: "Cannes Lions Gold" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2 text-[#9CA3AF]", children: [
          /* @__PURE__ */ e(te, { size: 20, className: "text-[#8B5CF6]" }),
          /* @__PURE__ */ e("span", { className: "text-sm md:text-base", children: "Effie x3" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2 text-[#9CA3AF]", children: [
          /* @__PURE__ */ e(_e, { size: 20, className: "text-[#8B5CF6]" }),
          /* @__PURE__ */ e("span", { className: "text-sm md:text-base", children: "D&AD" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2 text-[#9CA3AF]", children: [
          /* @__PURE__ */ e(ge, { size: 20, className: "text-[#8B5CF6]" }),
          /* @__PURE__ */ e("span", { className: "text-sm md:text-base", children: "Epica Gold" })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2 text-[#9CA3AF]", children: [
          /* @__PURE__ */ e(ze, { size: 20, className: "text-[#8B5CF6]" }),
          /* @__PURE__ */ e("span", { className: "text-sm md:text-base", children: "Eurobest" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "animate-fade-in-up lg:order-2", children: /* @__PURE__ */ e("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-[#111111] border border-[#1F2937]", children: /* @__PURE__ */ e(
      "img",
      {
        src: V,
        alt: "Олег Изосимов",
        className: "w-full h-full object-cover"
      }
    ) }) })
  ] }) }) });
}
const qe = [
  {
    icon: Oe,
    title: "Креативная стратегия",
    description: "От брифа до запуска — идея, концепция, воплощение",
    color: "#4F46E5"
    // Deep indigo
  },
  {
    icon: we,
    title: "Брендинг и айдентика",
    description: "Системы, в которых каждый элемент работает на бренд",
    color: "#8B5CF6"
    // Violet
  },
  {
    icon: Me,
    title: "Digital-продакшен",
    description: "Полный цикл: от макетов и лендингов до видеороликов",
    color: "#10B981"
    // Emerald
  },
  {
    icon: Te,
    title: "AI в продакшене",
    description: /* @__PURE__ */ l(D, { children: [
      "Нейросети в рабочих процессах: от генерации идей до визуалов. Автор",
      " ",
      /* @__PURE__ */ e(
        "a",
        {
          href: "https://chatgpt.com/g/g-693ff2b05b6c8191b8b6cd5c7b81bc60-generator-35-idei",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-[#F43F5E] transition-colors",
          children: "AI-инструмента «35 идей»"
        }
      )
    ] }),
    color: "#F43F5E"
    // Rose
  },
  {
    icon: $e,
    title: "Лидерство и управление командами",
    description: "Координация кросс-функциональных команд",
    color: "#06B6D4"
    // Cyan
  },
  {
    icon: Pe,
    title: "Арт-дирекшен",
    description: "Визуальное качество на каждом этапе проекта",
    color: "#4F46E5"
    // Deep indigo
  }
];
function Je() {
  const o = N(null), [i, c] = p(!1);
  return f(() => {
    const t = new IntersectionObserver(
      ([s]) => {
        s.isIntersecting && c(!0);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px"
      }
    ), r = o.current;
    return r && t.observe(r), () => {
      r && t.unobserve(r);
    };
  }, []), /* @__PURE__ */ e("section", { id: "about", className: "py-24 px-6", ref: o, children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      "h2",
      {
        className: `text-3xl md:text-4xl mb-20 text-[#F5F5F5] font-bold transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        style: {
          fontFamily: "var(--font-family-heading)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em"
        },
        children: "Компетенции"
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: qe.map((t, r) => {
      const s = t.icon;
      return /* @__PURE__ */ l(
        "div",
        {
          className: `bg-[#111111] p-8 rounded-2xl border border-[#1F2937] hover:scale-[1.02] hover:shadow-2xl transition-all duration-700 group ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
          style: {
            transitionDelay: `${r * 100}ms`
          },
          onMouseEnter: (h) => {
            h.currentTarget.style.borderColor = t.color, h.currentTarget.style.boxShadow = `0 0 30px ${t.color}40`;
          },
          onMouseLeave: (h) => {
            h.currentTarget.style.borderColor = "#1F2937", h.currentTarget.style.boxShadow = "none";
          },
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "w-14 h-14 rounded-full flex items-center justify-center mb-6 border-2",
                style: { borderColor: t.color },
                children: /* @__PURE__ */ e(s, { style: { color: t.color }, size: 28 })
              }
            ),
            /* @__PURE__ */ e("h3", { className: "text-xl mb-3 text-[#F5F5F5]", children: t.title }),
            /* @__PURE__ */ e("p", { className: "text-[#9CA3AF] leading-relaxed", style: { lineHeight: "1.5" }, children: t.description })
          ]
        },
        r
      );
    }) })
  ] }) });
}
const Ke = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function B(o) {
  const [i, c] = p(!1), t = () => {
    c(!0);
  }, { src: r, alt: s, style: h, className: m, ...g } = o;
  return i ? /* @__PURE__ */ e(
    "div",
    {
      className: `inline-block bg-gray-100 text-center align-middle ${m ?? ""}`,
      style: h,
      children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ e("img", { src: Ke, alt: "Error loading image", ...g, "data-original-url": r }) })
    }
  ) : /* @__PURE__ */ e("img", { src: r, alt: s, className: m, style: h, ...g, onError: t });
}
function Ye({ images: o, currentIndex: i, onClose: c, onNext: t, onPrev: r }) {
  return f(() => {
    const s = (h) => {
      h.key === "Escape" ? c() : h.key === "ArrowLeft" ? r() : h.key === "ArrowRight" && t();
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [c, t, r]), /* @__PURE__ */ l(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90",
      onClick: c,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: c,
            className: "absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#374151] text-white transition-all",
            "aria-label": "Закрыть",
            children: /* @__PURE__ */ e(P, { size: 24 })
          }
        ),
        o.length > 1 && /* @__PURE__ */ e(
          "button",
          {
            onClick: (s) => {
              s.stopPropagation(), r();
            },
            className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#374151] text-white transition-all",
            "aria-label": "Предыдущее изображение",
            children: /* @__PURE__ */ e($, { size: 28 })
          }
        ),
        /* @__PURE__ */ e("div", { className: "max-w-7xl max-h-[90vh] p-4", onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ e(
          "img",
          {
            src: o[i],
            alt: `Изображение ${i + 1}`,
            className: "max-w-full max-h-[90vh] object-contain rounded-lg"
          }
        ) }),
        o.length > 1 && /* @__PURE__ */ e(
          "button",
          {
            onClick: (s) => {
              s.stopPropagation(), t();
            },
            className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#374151] text-white transition-all",
            "aria-label": "Следующее изображение",
            children: /* @__PURE__ */ e(H, { size: 28 })
          }
        ),
        o.length > 1 && /* @__PURE__ */ l("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm", children: [
          i + 1,
          " / ",
          o.length
        ] })
      ]
    }
  );
}
const Xe = globalThis.__GLOBALS__.getAssetURL("0937b7a52568998db93d95d06b8bd62edadc6a7a.png"), Qe = globalThis.__GLOBALS__.getAssetURL("cab7cb3334f7250637545f84ddd03553d36eca40.png"), et = globalThis.__GLOBALS__.getAssetURL("9d2c96b96f17a05b49870e24248607c1478560cb.png"), tt = globalThis.__GLOBALS__.getAssetURL("0606bdaea4b0ce1ec39811799c72315d83f658bc.png"), at = globalThis.__GLOBALS__.getAssetURL("980965337b2e4a68349f4d9b5ac765408f60144b.png"), lt = globalThis.__GLOBALS__.getAssetURL("1ce09b5f6a3e160929ed350bebb16a6d796d04da.png"), rt = globalThis.__GLOBALS__.getAssetURL("52c4648c59906958dc9884295fb1079bc7fa81be.png"), nt = globalThis.__GLOBALS__.getAssetURL("d9d1365b8a3080b5ab7dd74f42e630ab5008ed96.png"), ot = globalThis.__GLOBALS__.getAssetURL("98846c58b850380400cee6c3cc62ddb980d282d6.png"), it = globalThis.__GLOBALS__.getAssetURL("a9e2e33193bd604a9d90fae56b5c0478480d6f9a.png"), st = globalThis.__GLOBALS__.getAssetURL("bd06cc8f1850a12d35203db7f649f1bd7527d5bf.png"), ct = globalThis.__GLOBALS__.getAssetURL("affc6af7fdbe841ecc5f279a47c7aa2df9031010.png"), dt = globalThis.__GLOBALS__.getAssetURL("cae5bf7b8b6ddd62366ebe7a6138c5c816f4c636.png"), mt = globalThis.__GLOBALS__.getAssetURL("1219607d8f29c94f9eeb3307e2cd20ae54341d83.png"), ht = globalThis.__GLOBALS__.getAssetURL("cc367aece92d9279c7d3672f41a5934593253c81.png"), pt = globalThis.__GLOBALS__.getAssetURL("db5d34a8104ec65b82f7c741a0c0ce5854202965.png"), gt = globalThis.__GLOBALS__.getAssetURL("355a18b3eb69d316f45dc57841d77780d4afffa3.png"), bt = globalThis.__GLOBALS__.getAssetURL("67fdb37b50a7bd826235728a453aa87fffa62d1b.png"), xt = globalThis.__GLOBALS__.getAssetURL("ff8ef396ce520d308b475a60e79a86a7971ac6a9.png"), ft = globalThis.__GLOBALS__.getAssetURL("769181a60292289118837f9226555b5509283200.png"), ut = globalThis.__GLOBALS__.getAssetURL("4abd604d763b67b495b196f2bbe83631c6c99125.png"), yt = globalThis.__GLOBALS__.getAssetURL("d16daa6b98393be843e389ab34f74e2b0fbdb122.png"), vt = globalThis.__GLOBALS__.getAssetURL("83bf972d55b78bb9caa73b56204e6f610067bcd2.png"), Ft = globalThis.__GLOBALS__.getAssetURL("c4460d4f9d5e2566df0bb158aa62d20cd6f06d2d.png"), _t = globalThis.__GLOBALS__.getAssetURL("5cef35055df05d1c6082e9c72debad2314422766.png"), Nt = globalThis.__GLOBALS__.getAssetURL("bc893ea43bac87e52cb062816a2446a7adbed55b.png"), At = globalThis.__GLOBALS__.getAssetURL("ee7234561dd7ea4ebdb14d5c50b05607bc4ee08e.png"), kt = globalThis.__GLOBALS__.getAssetURL("25b551b6e4d11874cc54e52bec5e184ff9119e75.png"), wt = globalThis.__GLOBALS__.getAssetURL("ad25784dd4080f2a7ca115a9cb5c05cb3d655a3a.png"), Lt = globalThis.__GLOBALS__.getAssetURL("f8ce11355f4313c11b25e9e69030697c3885412f.png"), Ct = globalThis.__GLOBALS__.getAssetURL("12c922d6107f5ae2cd1e42a6c933961a535144a0.png"), Bt = globalThis.__GLOBALS__.getAssetURL("4213747457780f20d850cc7f53f9c13d7cff782f.png"), It = globalThis.__GLOBALS__.getAssetURL("88f614d2c4be7b670d4515ca61a61f7f763909d5.png"), St = "/_components/v2/26dd7361fe32029eb3223f63700df291902cc8a6/35-1.4bd5807b.jpg", Mt = "/_components/v2/26dd7361fe32029eb3223f63700df291902cc8a6/36.49839682.jpg", Rt = "/_components/v2/26dd7361fe32029eb3223f63700df291902cc8a6/37.3b53f3cb.jpg", Tt = "/_components/v2/26dd7361fe32029eb3223f63700df291902cc8a6/38.04e693a1.jpg", Ut = "/_components/v2/26dd7361fe32029eb3223f63700df291902cc8a6/39.a42d2d81.jpg", x = [
  {
    id: 1,
    title: "М.Видео-Эльдорадо — Брендбук",
    subtitle: "Первый за 30 лет ребрендинг федерального ритейлера",
    category: "Бренд-системы",
    period: "2023–2024",
    image: Xe,
    heroImage: Qe,
    description: "Первый за 30 лет ребрендинг федерального ритейлера М.Видео. Разработка визуальной системы для двух брендов в рамках единой экосистемы.",
    team: [
      { role: "Директор по маркетингу", name: "Василий Большаков" },
      { role: "Руководитель департамента маркетинговых коммуникаций", name: "Пётр Стерлигов" },
      { role: "Ведущий менеджер по маркетинговым коммуникациям", name: "Кристина Балабанова" },
      { role: "Руководитель группы дизайна", name: "Олег Изосимов" },
      { role: "Руководитель направления маркетинговых специальных проектов", name: "Юлия Чердакова" },
      { role: "Экс-руководитель группы разработки рекламных материалов", name: "Елизавета Давыдова" }
    ],
    mediaUrl: "https://www.sostav.ru/publication/m-video-smenila-logotip-i-strategiyu-64828.html",
    mediaTitle: "Sostav.ru — М.Видео сменила логотип и стратегию",
    externalUrl: "https://www.mvideoeldorado.ru/ru/press-center/corporate-identity",
    externalUrlTitle: "Корпоративный брендбук",
    galleryImages: [et, tt, at, lt]
  },
  {
    id: 2,
    title: "Иконки приложения М.Видео",
    subtitle: "Вариативная система иконок приложения, где бренд остаётся узнаваемым в разных сезонных и промо-сценариях.",
    category: "Бренд-системы",
    period: "2025–2026",
    image: rt,
    heroImage: nt,
    description: "Вариативная система иконок приложения: единый визуальный принцип, который помогает развивать иконку под разные сезоны, промо и инфоповоды без потери узнаваемости бренда.",
    contentBlocks: [
      {
        heading: "Идея системы",
        text: "Система построена так, чтобы иконка могла меняться под разные поводы, но оставалась частью одного узнаваемого бренда. Это не набор разовых картинок, а общий принцип для сезонных и промо-сценариев."
      }
    ],
    team: [
      { role: "Руководитель департамента маркетинговых коммуникаций", name: "Пётр Стерлигов" },
      { role: "Ведущий менеджер по маркетинговым коммуникациям", name: "Анна Фалкова" },
      { role: "Руководитель группы дизайна", name: "Олег Изосимов" },
      { role: "Руководитель отдела дизайна", name: "Артур Гареев" },
      { role: "Дизайнер", name: "Дмитрий Карнаухов" },
      { role: "Дизайнер", name: "Юлиан Лебедев" }
    ],
    galleryImages: [ot, Ut],
    galleryCaption: "Базовая иконка и тематические версии"
  },
  {
    id: 3,
    title: "М.Видео — Скупидон",
    subtitle: "Федеральная акция ко Дню влюблённых с Прохором Шаляпиным",
    category: "Digital-кампании",
    period: "2026",
    image: it,
    heroImage: st,
    description: "Ключевой визуал и вариации поз для федеральной акции «Дни Скупидона». Визуальный язык кампании, ставший основой всех рекламных материалов.",
    team: [
      { role: "Руководитель департамента маркетинговых коммуникаций", name: "Пётр Стерлигов" },
      { role: "Ведущий менеджер по маркетинговым коммуникациям", name: "Алиса Борисова" },
      { role: "Руководитель отдела специальных проектов и развития соцсетей", name: "Татьяна Кузнецова" },
      { role: "Руководитель группы спец. маркетинговых проектов", name: "Юлия Чердакова" },
      { role: "Менеджер спец. маркетинговых проектов", name: "Елизавета Сидорина" },
      { role: "Руководитель группы дизайна", name: "Олег Изосимов" },
      { role: "Старший дизайнер", name: "Елена Кац" }
    ],
    mediaUrl: "https://companies.rbc.ru/news/RxMzvKMJP8/prohor-shalyapin-stal-litsom-marketingovoj-kampanii-mvideo-dni-skupidona/",
    mediaTitle: "RBC — Прохор Шаляпин стал лицом кампании М.Видео",
    galleryImages: [ct, dt]
  },
  {
    id: 4,
    title: "М.Видео — ПОПОЛАМЬ",
    subtitle: "Первая федеральная кампания бренда с маскотом и OLV-роликом, созданным нейросетями",
    category: "Нейросети",
    period: "2025",
    image: mt,
    heroImage: ht,
    description: "Первая федеральная кампания бренда с маскотом и OLV-роликом, созданным нейросетями. Производство от концепции до финального ролика и наружной рекламы.",
    team: [
      { role: "Руководитель департамента маркетинговых коммуникаций", name: "Пётр Стерлигов" },
      { role: "Ведущий менеджер по маркетинговым коммуникациям", name: "Алиса Борисова" },
      { role: "Руководитель группы дизайна", name: "Олег Изосимов" },
      { role: "Старший дизайнер", name: "Елена Кац" }
    ],
    mediaUrl: "https://adindex.ru/news/marketing/2025/05/12/333399.phtml",
    mediaTitle: "AdIndex — М.Видео ПОПОЛАМЬ",
    videoUrl: "https://rutube.ru/play/embed/4de8df475dfe7cc47068430366417356",
    galleryImages: [pt]
  },
  {
    id: 5,
    title: "Мерч М.Видео",
    subtitle: "Концепция и дизайн мерча М.Видео. Продукцию носили Wylsacom и Рузиль Миннекаев в эфирах и публичных выступлениях.",
    category: "Брендинг и дизайн",
    period: "2023",
    image: gt,
    heroImage: ft,
    description: "Концепция и дизайн мерча М.Видео. Продукцию носили Wylsacom и Рузиль Миннекаев в эфирах и публичных выступлениях.",
    team: [
      { role: "Руководитель департамента маркетинговых коммуникаций", name: "Пётр Стерлигов" },
      { role: "Руководитель группы дизайна", name: "Олег Изосимов" },
      { role: "Старший дизайнер", name: "Вадим Броварчук" }
    ],
    galleryImages: [bt, xt]
  },
  {
    id: 6,
    title: "Libertex (Forex Club)",
    subtitle: "Креативное руководство в группе компаний Libertex (Forex Club). OLV, брендбук, образовательные ролики, digital",
    category: "Creative Direction",
    period: "2021-2023",
    image: ut,
    heroImage: yt,
    description: "Libertex — международная торговая платформа группы компаний Forex Club с 23-летним опытом на финансовых рынках. CFD-трейдинг, криптовалюты, стейкинг. Более 2,2 млн пользователей. Спонсор Tottenham Hotspur и Valencia CF.",
    team: [
      { role: "Менеджер проектов", name: "Иван Старцев" },
      { role: "Копирайтер", name: "Хосе Фелиз" },
      { role: "Старший моушен дизайнер", name: "Константин Басов, Хазрет Макоев" },
      { role: "Арт-директор", name: "Алекс Белявский" }
    ],
    subProjects: [
      {
        title: "Брендбук",
        description: "Полный ребрендинг визуальной системы: три зоны коммуникации (Active, Comfort, Legacy), 3D-иллюстрации, типографика и гайдлайны для digital-каналов.",
        externalUrl: "https://disk.yandex.ru/i/ZNAbDTyCokQCtw",
        externalUrlTitle: "Брендбук Libertex (короткая версия)"
      },
      {
        title: "Epic Dog Brawl",
        description: "Запуск торговли криптовалютами DOGE vs SHIB через ретро-эстетику аркадных файтингов 90-х. OLV 30 сек.",
        videoUrl: "https://player.vimeo.com/video/1171799581"
      },
      {
        title: "Beat the Bank",
        description: "Промо крипто-стейкинга: прибыль до 8% APY против классических 1-3% во многих банках. OLV 30 сек.",
        videoUrl: "https://player.vimeo.com/video/1171799354"
      },
      {
        title: "Tame Inflation",
        description: "Активация о том что на инфляции можно заработать с помощью трейдинга. Решение — гарантированный доход до 12% на депозите. OLV 15 сек.",
        videoUrl: "https://player.vimeo.com/video/1171799983"
      }
    ]
  },
  {
    id: 7,
    title: "ФК Зенит — Это всё ты",
    subtitle: "Стоп-моушн клип из 20 000 фотографий для lifestyle-коллекции Zenit FC x Karan Singh. OLV, печатная и наружная реклама",
    category: "Интегрированные кампании",
    period: "2022",
    image: vt,
    heroImage: Ft,
    description: "Стоп-моушн клип из 20 000 фотографий для lifestyle-коллекции Zenit FC x Karan Singh. OLV, печатная и наружная реклама.",
    team: [
      { role: "Рекламное агентство", name: "Cherezchur, Москва" },
      { role: "Генеральный директор (Зенит-Трейд)", name: "Владимир Терелюк" },
      { role: "Директор по маркетингу (Зенит-Трейд)", name: "Елена Мышко" },
      { role: "Креативный директор, директор по дизайну (Cherezchur)", name: "Денис Баранов" },
      { role: "Креативный директор (Cherezchur)", name: "Михаил Котов" },
      { role: "Креативный директор (Cherezchur)", name: "Олег Изосимов" },
      { role: "Режиссёр (Directing Group СВЕТ)", name: "Кирилл Зотов" },
      { role: "Режиссёр (Directing Group СВЕТ)", name: "Дарья Кузнецова" },
      { role: "Продюсер (Raise)", name: "Валерия Зингаревич" },
      { role: "Локешн-менеджер (Raise)", name: "Мария Сытник" },
      { role: "Кастинг-менеджер (Raise)", name: "Мария Друкарова" },
      { role: "Стилист", name: "Cake Monster" },
      { role: "Визажист и стилист по волосам", name: "Ольга Васильева" },
      { role: "Реквизитор", name: "Михаил Домнин" },
      { role: "Музыка", name: "Роман Матухин, Кирилл Зотов" },
      { role: "Цветокоррекция видео", name: "Андрей Худяков" },
      { role: "Ретушь и цветокоррекция фото", name: "Дионис Кирошка" }
    ],
    videoUrl: "https://rutube.ru/play/embed/290b7c14221f9d44060750fd4c57c67f",
    galleryImages: [_t, Nt, At, kt, wt]
  },
  {
    id: 8,
    title: "BMW — Ultimate Giving Pleasure",
    subtitle: "Нестандартная промо-активация к 100-летию BMW. Золото Cannes Lions 2017",
    category: "Видео",
    period: "2016",
    image: Lt,
    heroImage: Ct,
    description: "Нестандартная промо-активация, посвящённая 100-летию BMW. Золотой лев Каннского фестиваля рекламы 2017 (категория Media).",
    team: [
      { role: "Рекламное агентство", name: "Draft FCB Moscow" },
      { role: "Главный креативный директор", name: "Юджин Радевич" },
      { role: "Управляющий директор", name: "Наталия Ломакина" },
      { role: "Креативный директор", name: "Даниэле Панчетти" },
      { role: "Старший арт-директор", name: "Олег Изосимов" },
      { role: "Старший копирайтер", name: "Дмитрий Авдеенко" },
      { role: "Аккаунт-директор", name: "Мария Лебецкая" },
      { role: "Продюсер", name: "Виталий Митякин" }
    ],
    videoUrl: "https://rutube.ru/play/embed/d1bfdeff9203f76c4189a9f6ab9b021f"
  },
  {
    id: 9,
    title: "Этот сайт создан с Claude AI + Figma Make",
    subtitle: "Без работы руками — только промпты как инструмент",
    category: "Нейросети",
    period: "2026",
    image: Bt,
    heroImage: It,
    contentBlocks: [
      {
        heading: "Задача",
        text: "Сделать портфолио с нуля — сайт — без разработчиков и дизайнеров. Только промпты."
      },
      {
        heading: "Инструменты",
        text: "Claude AI — структура, тексты, логика. Figma Make — сборка сайта. Gemini Nano Banana — все изображения."
      },
      {
        heading: "Процесс",
        text: "Работа заняла неделю. Старт с промпта, итерации текстов и изображений, 2-5 версий каждого превью."
      },
      {
        heading: "Что понял",
        text: "Роль креативного директора сместилась — вместо брифов команде промпты нейросетям, вместо правок в макете правки формулировок. Насмотренность работает так же, просто быстрее."
      }
    ],
    team: [
      { role: "Креативный директор", name: "Олег Изосимов" },
      { role: "Тексты и логика", name: "Claude AI" },
      { role: "Сборка сайта", name: "Figma Make" },
      { role: "Генерация изображений", name: "Gemini Nano Banana, ChatGPT Image 2" }
    ]
  },
  {
    id: 10,
    title: "AI-видеопродакшен",
    subtitle: "AI-видеопродакшен: от идеи до готового ролика.",
    category: "AI-видеопродакшен",
    period: "2026",
    image: Rt,
    heroImage: Tt,
    description: "AI-видеопродакшен: от идеи и визуального подхода до готового ролика.",
    videoUrl: "https://rutube.ru/play/embed/0f27f2481be61cb4b11cd65d5daa4dbd",
    contentBlocks: [
      {
        heading: "Роль",
        text: "Работаю с AI-видео на задачах, где важны идея, визуальный подход и точная сборка результата. Выстраиваю процесс и помогаю команде увереннее использовать AI-инструменты в продакшене."
      },
      {
        heading: "AI-экспертиза",
        text: "Участвовал во внедрении AI-инструментария (Phygital+) в дизайн-отдел и помогал команде его освоить."
      }
    ]
  },
  {
    id: 11,
    title: "День, когда бренды улыбнулись вместе",
    subtitle: "11+ брендов добавили :) к своим логотипам ради детей с особенностями лица",
    category: "Социальная кампания",
    period: "2026",
    image: St,
    heroImage: Mt,
    description: "Социальная акция ко Всемирному дню улыбки: бренды добавили :) к своим логотипам, чтобы помочь детям.",
    contentBlocks: [
      {
        heading: "Задача",
        text: "",
        textHtml: 'Ко <a href="https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B5%D0%BD%D1%8C_%D1%83%D0%BB%D1%8B%D0%B1%D0%BA%D0%B8" target="_blank" rel="noopener noreferrer" class="text-[#4F46E5] hover:text-[#8B5CF6] underline underline-offset-2 transition-colors">Всемирному дню улыбки</a> собрать внимание и деньги для фонда <a href="https://www.detipriroda.ru/" target="_blank" rel="noopener noreferrer" class="text-[#4F46E5] hover:text-[#8B5CF6] underline underline-offset-2 transition-colors">«Красивые дети в красивом мире»</a> — он помогает детям с особенностями лица. И сделать так, чтобы в акцию легко вошёл не один бренд, а сразу несколько.'
      },
      {
        heading: "Идея",
        text: "Мы взяли самый простой символ улыбки — «:)». Его можно поставить рядом с любым логотипом, не трогая фирменный стиль. Бренды добавили смайл везде: на сайтах, на аватарках в каналах и сообществах, в приложениях. Смайл становился заметным знаком акции, а бренды объясняли её смысл через посты, баннеры и свои каналы."
      },
      {
        heading: "Масштаб",
        text: "К акции присоединились больше десяти компаний из разных сфер — М.Видео, Эльдорадо, Петрович, Монетка, Улыбка радуги, А101, Дом Лента, FuturoHome, ИнтернетУрок и другие, а также агентства, галерея ARBUZZ и отраслевая ассоциация."
      }
    ],
    team: [
      { role: "Генеральный директор ГК М.Видео-Эльдорадо", name: "Владислав Бакальчук" },
      { role: "Директор по маркетингу", name: "Андрей Скачёк" },
      { role: "Руководитель департамента маркетинговых коммуникаций", name: "Пётр Стерлигов" },
      { role: "Руководитель группы дизайна", name: "Олег Изосимов" },
      { role: "Руководитель отдела специальных проектов и развития соцсетей", name: "Татьяна Кузнецова" },
      { role: "Руководитель группы спец. маркетинговых проектов", name: "Юлия Чердакова" },
      { role: "PR-директор", name: "Сергей Коляда" },
      { role: "Web-дизайнер", name: "Стас Лещинский" }
    ],
    mediaUrl: "https://lenta.ru/news/2026/04/12/rossiyskie-kompanii-dobavili-simvol-ulybki-k-svoim-logotipam-dlya-pomoschi-detyam/",
    mediaTitle: "Lenta.ru — Российские компании добавили символ улыбки к своим логотипам"
  }
];
function zt() {
  const o = N(null), [i, c] = p(!1), [t, r] = p(null), [s, h] = p(0), [m, g] = p(null), [v, b] = p(null), [F, k] = p(0), [y, Z] = p([]);
  f(() => {
    const a = new IntersectionObserver(
      ([_]) => {
        _.isIntersecting && c(!0);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px"
      }
    ), n = o.current;
    return n && a.observe(n), () => {
      n && a.unobserve(n);
    };
  }, []), f(() => (t || m ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [t, m]);
  const W = (a, n) => {
    r(a), h(n);
  }, S = () => {
    r(null);
  }, w = () => {
    g(null);
  }, M = (a) => {
    a && a.stopPropagation();
    let n = s > 0 ? s - 1 : x.length - 1;
    for (; x[n].isFolder; )
      n = n > 0 ? n - 1 : x.length - 1;
    h(n), r(x[n]);
  }, R = (a) => {
    a && a.stopPropagation();
    let n = s < x.length - 1 ? s + 1 : 0;
    for (; x[n].isFolder; )
      n = n < x.length - 1 ? n + 1 : 0;
    h(n), r(x[n]);
  };
  return f(() => {
    const a = (n) => {
      if (m) {
        n.key === "Escape" && w();
        return;
      }
      t && (n.key === "Escape" ? S() : n.key === "ArrowLeft" ? M() : n.key === "ArrowRight" && R());
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, [t, s, m]), /* @__PURE__ */ l("section", { id: "cases", className: "py-24 px-6", ref: o, children: [
    /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: `text-3xl md:text-4xl mb-16 text-[#F5F5F5] font-bold transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
          style: {
            fontFamily: "var(--font-family-heading)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em"
          },
          children: "Кейсы"
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12", children: x.map((a, n) => /* @__PURE__ */ l("div", { children: [
        n > 0 && /* @__PURE__ */ l(D, { children: [
          n % 3 === 0 && /* @__PURE__ */ e("div", { className: "hidden lg:block col-span-3 h-px bg-[#1F1F23] -mt-6 mb-6" }),
          n % 2 === 0 && /* @__PURE__ */ e("div", { className: "hidden md:block lg:hidden col-span-2 h-px bg-[#1F1F23] -mt-6 mb-6" })
        ] }),
        /* @__PURE__ */ l(
          "div",
          {
            onClick: () => W(a, n),
            className: `group cursor-pointer transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
            style: { transitionDelay: `${n * 100}ms` },
            children: [
              /* @__PURE__ */ l("div", { className: "relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#111111] mb-4 border border-[#1F2937] group-hover:border-[#4F46E5] transition-all duration-300", children: [
                /* @__PURE__ */ e(
                  B,
                  {
                    src: a.image,
                    alt: a.title,
                    className: "case-image w-full h-full object-cover transition-transform duration-700 ease-out"
                  }
                ),
                a.isFolder && /* @__PURE__ */ l("div", { className: "absolute top-4 right-4 bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10", children: [
                  /* @__PURE__ */ e(he, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: "4 проекта" })
                ] }),
                /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6", children: /* @__PURE__ */ e("h3", { className: "text-white text-xl md:text-2xl font-semibold text-center", children: a.title }) })
              ] }),
              /* @__PURE__ */ l("div", { className: "space-y-2", children: [
                /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: a.period }),
                  /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: "·" }),
                  /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: a.category })
                ] }),
                /* @__PURE__ */ e("h3", { className: "text-lg text-[#F5F5F5] group-hover:text-[#4F46E5] transition-colors", children: a.title }),
                /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] leading-relaxed", children: a.subtitle })
              ] })
            ]
          }
        )
      ] }, a.id)) })
    ] }),
    m && /* @__PURE__ */ l(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 case-modal",
        onClick: w,
        children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/90 backdrop-blur-sm case-modal-overlay" }),
          /* @__PURE__ */ l(
            "div",
            {
              className: "relative bg-[#111111] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#1F2937] case-modal-content",
              onClick: (a) => a.stopPropagation(),
              children: [
                /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: (a) => {
                      a.stopPropagation(), w();
                    },
                    className: "absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all pointer-events-auto",
                    "aria-label": "Назад",
                    style: { pointerEvents: "auto" },
                    children: [
                      /* @__PURE__ */ e(G, { size: 20 }),
                      /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: "Назад" })
                    ]
                  }
                ),
                /* @__PURE__ */ l("div", { className: "p-8 md:p-12 pt-20", children: [
                  /* @__PURE__ */ l("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ e("span", { className: "text-sm text-[#4F46E5] font-medium", children: m.period }),
                    /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: "·" }),
                    /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: m.category })
                  ] }),
                  /* @__PURE__ */ e(
                    "h2",
                    {
                      className: "text-3xl md:text-4xl mb-4 text-[#F5F5F5] font-bold",
                      style: {
                        fontFamily: "var(--font-family-heading)",
                        lineHeight: "1.1",
                        letterSpacing: "-0.02em"
                      },
                      children: m.title
                    }
                  ),
                  /* @__PURE__ */ e("p", { className: "text-lg text-[#D1D5DB] leading-relaxed mb-8", children: m.subtitle }),
                  m.subProjects && /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 gap-8", children: m.subProjects.map((a, n) => /* @__PURE__ */ l("div", { className: "group transition-all duration-700", children: [
                    /* @__PURE__ */ e("div", { className: "relative aspect-video rounded-2xl overflow-hidden bg-[#0A0A0A] mb-4 border border-[#1F2937] group-hover:border-[#8B5CF6] transition-all duration-300", children: /* @__PURE__ */ e(
                      B,
                      {
                        src: a.image,
                        alt: a.title,
                        className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      }
                    ) }),
                    /* @__PURE__ */ l("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ e("h3", { className: "text-xl text-[#F5F5F5] group-hover:text-[#8B5CF6] transition-colors font-semibold", children: a.title }),
                      /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] leading-relaxed", children: a.description })
                    ] })
                  ] }, n)) })
                ] })
              ]
            }
          )
        ]
      }
    ),
    t && /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 z-50 bg-[#111111] overflow-y-auto",
        children: /* @__PURE__ */ l("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
          /* @__PURE__ */ l(
            "button",
            {
              onClick: S,
              className: "flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#1F2937] hover:bg-[#374151] text-white transition-all",
              children: [
                /* @__PURE__ */ e(G, { size: 20 }),
                /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: "Назад к кейсам" })
              ]
            }
          ),
          /* @__PURE__ */ e("div", { className: "relative aspect-video rounded-xl overflow-hidden mb-8", children: /* @__PURE__ */ e(
            B,
            {
              src: t.heroImage || t.image,
              alt: t.title,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "mb-8", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: t.period }),
              /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: "·" }),
              /* @__PURE__ */ e("span", { className: "text-sm text-[#9CA3AF]", children: t.category })
            ] }),
            /* @__PURE__ */ e(
              "h1",
              {
                className: "text-3xl md:text-4xl mb-4 text-[#F5F5F5] font-bold",
                style: {
                  fontFamily: "var(--font-family-heading)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em"
                },
                children: t.title
              }
            ),
            t.description && /* @__PURE__ */ e("p", { className: "text-lg text-[#D1D5DB] leading-relaxed max-w-3xl", children: t.description })
          ] }),
          t.videoUrl && /* @__PURE__ */ e("div", { className: "mb-8", children: t.videoUrl === "placeholder" ? /* @__PURE__ */ l("div", { className: "aspect-video bg-[#1F2937] rounded-xl flex flex-col items-center justify-center gap-4", children: [
            /* @__PURE__ */ e(Ce, { size: 48, className: "text-[#9CA3AF]" }),
            /* @__PURE__ */ e("p", { className: "text-[#9CA3AF]", children: "Видео будет добавлено" })
          ] }) : /* @__PURE__ */ e("div", { className: "aspect-video rounded-xl overflow-hidden", children: /* @__PURE__ */ e(
            "iframe",
            {
              src: t.videoUrl,
              className: "w-full h-full",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: !0
            }
          ) }) }),
          t.galleryImages && t.galleryImages.length > 0 && /* @__PURE__ */ l("div", { className: "mb-8", children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-[#F5F5F5] mb-4", children: "Галерея" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-4", children: t.galleryImages.map((a, n) => {
              const _ = a === "placeholder" || a.startsWith("placeholder:"), L = a.startsWith("placeholder:") ? a.slice(12) : "Изображение будет добавлено";
              return /* @__PURE__ */ e("div", { children: _ ? /* @__PURE__ */ l("div", { className: "aspect-video bg-[#111827] rounded-xl border border-[#1F2937] flex flex-col items-center justify-center gap-3", children: [
                /* @__PURE__ */ e(xe, { size: 32, className: "text-[#374151]" }),
                /* @__PURE__ */ e("p", { className: "text-sm text-[#6B7280] font-medium", children: L })
              ] }) : /* @__PURE__ */ e(
                "img",
                {
                  src: a,
                  alt: `Галерея ${n + 1}`,
                  className: "w-full aspect-video object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity",
                  onClick: () => {
                    const T = t.galleryImages.filter((U) => U !== "placeholder" && !U.startsWith("placeholder:"));
                    Z(T), k(T.indexOf(a)), b(a);
                  }
                }
              ) }, n);
            }) }),
            t.galleryCaption && /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] leading-relaxed mt-2", children: t.galleryCaption })
          ] }),
          t.subProjects && t.subProjects.length > 0 && /* @__PURE__ */ l("div", { className: "mb-8", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-[#F5F5F5] mb-6", children: "Проекты" }),
            /* @__PURE__ */ e("div", { className: "space-y-8", children: t.subProjects.map((a, n) => /* @__PURE__ */ l(
              "div",
              {
                className: "group relative p-6 rounded-2xl bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#374151] hover:border-[#8B5CF6] transition-all duration-300",
                children: [
                  /* @__PURE__ */ e("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#4F46E5] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                  /* @__PURE__ */ e("h4", { className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] mb-3", children: a.title }),
                  /* @__PURE__ */ e("p", { className: "text-base text-[#D1D5DB] leading-relaxed mb-4", children: a.description }),
                  a.videoUrl && /* @__PURE__ */ e("div", { className: "aspect-video rounded-xl overflow-hidden mb-4 border-2 border-[#374151] group-hover:border-[#8B5CF6] transition-all duration-300", children: /* @__PURE__ */ e(
                    "iframe",
                    {
                      src: a.videoUrl,
                      className: "w-full h-full",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: !0
                    }
                  ) }),
                  a.externalUrl && a.externalUrlTitle && /* @__PURE__ */ l(
                    "a",
                    {
                      href: a.externalUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] rounded-lg px-5 py-3 hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all text-white font-medium",
                      children: [
                        /* @__PURE__ */ e(C, { size: 16 }),
                        /* @__PURE__ */ e("span", { children: a.externalUrlTitle })
                      ]
                    }
                  )
                ]
              },
              n
            )) })
          ] }),
          t.team && t.team.length > 0 && /* @__PURE__ */ l("div", { className: "mb-8", children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-[#F5F5F5] mb-4", children: "Команда проекта" }),
            /* @__PURE__ */ e("div", { className: "space-y-2", children: t.team.map((a, n) => /* @__PURE__ */ l("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ l("span", { className: "text-sm text-[#9CA3AF]", children: [
                a.role,
                ":"
              ] }),
              /* @__PURE__ */ e("span", { className: "text-sm text-white", children: a.name })
            ] }, n)) })
          ] }),
          t.mediaUrl && t.mediaTitle && /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ l(
            "a",
            {
              href: t.mediaUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 border border-[#374151] rounded-lg px-4 py-2 hover:border-[#4F46E5] transition-all text-[#F5F5F5]",
              children: [
                /* @__PURE__ */ e(C, { size: 16 }),
                /* @__PURE__ */ e("span", { children: t.mediaTitle })
              ]
            }
          ) }),
          t.externalUrl && t.externalUrlTitle && /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ l(
            "a",
            {
              href: t.externalUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 border border-[#374151] rounded-lg px-4 py-2 hover:border-[#4F46E5] transition-all text-[#F5F5F5]",
              children: [
                /* @__PURE__ */ e(C, { size: 16 }),
                /* @__PURE__ */ e("span", { children: t.externalUrlTitle })
              ]
            }
          ) }),
          t.contentBlocks && t.contentBlocks.length > 0 && /* @__PURE__ */ e("div", { className: "mb-8", children: t.contentBlocks.map((a, n) => /* @__PURE__ */ l("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-[#F5F5F5] mb-2", children: a.heading }),
            a.textHtml ? /* @__PURE__ */ e("p", { className: "text-sm text-[#D1D5DB] leading-relaxed mb-2", dangerouslySetInnerHTML: { __html: a.textHtml } }) : a.text.split(`

`).map((_, L) => /* @__PURE__ */ e("p", { className: "text-sm text-[#D1D5DB] leading-relaxed mb-2", children: _ }, L))
          ] }, n)) }),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: (a) => {
                a.stopPropagation(), M(a);
              },
              className: "fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#374151] text-white transition-all pointer-events-auto",
              "aria-label": "Предыдущий кейс",
              style: { pointerEvents: "auto" },
              children: /* @__PURE__ */ e($, { size: 28 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: (a) => {
                a.stopPropagation(), R(a);
              },
              className: "fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#374151] text-white transition-all pointer-events-auto",
              "aria-label": "Следующий кейс",
              style: { pointerEvents: "auto" },
              children: /* @__PURE__ */ e(H, { size: 28 })
            }
          )
        ] })
      }
    ),
    v && /* @__PURE__ */ e(
      Ye,
      {
        images: y,
        currentIndex: F,
        onClose: () => b(null),
        onNext: () => {
          const a = (F + 1) % y.length;
          k(a), b(y[a]);
        },
        onPrev: () => {
          const a = (F - 1 + y.length) % y.length;
          k(a), b(y[a]);
        }
      }
    )
  ] });
}
const O = [
  {
    period: "2023–н.в.",
    company: "М.Видео-Эльдорадо",
    position: "Руководитель группы дизайна",
    description: "15 человек в команде, развитие обновлённого бренда через креатив, брендинг и AI-инструменты"
  },
  {
    period: "2020–2023",
    company: "Libertex Group",
    position: "Креативный директор",
    description: "20 человек, международные digital-кампании на 10+ языках, комплексный ребрендинг и креативная стратегия"
  },
  {
    period: "Январь 2019 — Сентябрь 2020",
    company: "Cherezchur",
    position: "Сооснователь, Креативный директор",
    description: "Запуск и развитие собственного бизнеса"
  },
  {
    period: "2018",
    company: "Адвентум",
    position: "Креативный директор",
    description: "Управление креативной командой. Запустил направление съёмочных OLV-роликов для клиентов агентства"
  },
  {
    period: "2017–2018",
    company: "Jami",
    position: "Старший арт-директор",
    description: "Gett Taxi, Effie x3"
  },
  {
    period: "2016",
    company: "DraftFCB",
    position: "Старший арт-директор",
    description: "BMW, Cannes Lions Gold"
  },
  {
    period: "2010–2016",
    company: "BBDO, Saatchi & Saatchi, АДВ, JWT",
    position: "Креативный арт-директор",
    description: "МТС, Билайн, Сок Добрый, Paramount Comedy и другие проекты"
  }
], Gt = [
  { name: "Midjourney", category: "ai" },
  { name: "ChatGPT", category: "ai" },
  { name: "Gemini", category: "ai" },
  { name: "Figma", category: "tech" },
  { name: "Unity", category: "tech" },
  { name: "C#", category: "tech" },
  { name: "Adobe Creative Suite", category: "tech" },
  { name: "After Effects", category: "tech" },
  { name: "Veo", category: "ai" },
  { name: "Hailuo", category: "ai" },
  { name: "Nano Banana", category: "ai" },
  { name: "Phygital+", category: "ai" },
  { name: "Claude AI", category: "ai" },
  { name: "Копирайтинг", category: "creative" },
  { name: "Креативная стратегия", category: "creative" },
  { name: "Брендинг", category: "creative" }
], Ot = (o) => {
  switch (o) {
    case "ai":
      return "border-[#8B5CF6] text-[#F5F5F5]";
    // Violet
    case "creative":
      return "border-[#10B981] text-[#F5F5F5]";
    // Emerald
    case "tech":
      return "border-[#06B6D4] text-[#F5F5F5]";
    // Cyan
    default:
      return "border-[#374151] text-[#9CA3AF]";
  }
};
function Dt() {
  const o = N(null), [i, c] = p(!1);
  return f(() => {
    const t = new IntersectionObserver(
      ([s]) => {
        s.isIntersecting && c(!0);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px"
      }
    ), r = o.current;
    return r && t.observe(r), () => {
      r && t.unobserve(r);
    };
  }, []), /* @__PURE__ */ e("section", { id: "experience", className: "py-24 px-6", ref: o, children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      "h2",
      {
        className: `text-3xl md:text-4xl mb-20 text-[#F5F5F5] font-bold transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        style: {
          fontFamily: "var(--font-family-heading)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em"
        },
        children: "Опыт"
      }
    ),
    /* @__PURE__ */ e("div", { className: "max-w-4xl mx-auto mb-20", children: /* @__PURE__ */ e("div", { className: "space-y-12", children: O.map((t, r) => /* @__PURE__ */ l(
      "div",
      {
        className: `relative pl-8 md:pl-12 transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        style: { transitionDelay: `${r * 100}ms` },
        children: [
          r !== O.length - 1 && /* @__PURE__ */ e("div", { className: "absolute left-[15px] top-6 bottom-0 w-px bg-[#374151]" }),
          /* @__PURE__ */ e("div", { className: "absolute left-0 top-2 w-8 h-8 bg-[#4F46E5] rounded-full flex items-center justify-center", children: /* @__PURE__ */ e(ne, { className: "text-white", size: 16 }) }),
          /* @__PURE__ */ l("div", { className: "bg-[#111111] p-6 rounded-2xl border border-[#1F2937] hover:border-[#4F46E5] transition-all duration-300", children: [
            /* @__PURE__ */ l("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3", children: [
              /* @__PURE__ */ l("div", { children: [
                /* @__PURE__ */ e("h3", { className: "text-xl text-[#F5F5F5] mb-1", children: t.position }),
                /* @__PURE__ */ e("p", { className: "text-[#9CA3AF]", children: t.company })
              ] }),
              /* @__PURE__ */ e("span", { className: "text-sm text-[#4F46E5] whitespace-nowrap font-medium", children: t.period })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[#9CA3AF]", style: { lineHeight: "1.5" }, children: t.description })
          ] })
        ]
      },
      r
    )) }) }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `max-w-4xl mx-auto transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: /* @__PURE__ */ l("div", { className: "bg-[#111111] p-8 rounded-2xl border border-[#1F2937]", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 border-2 border-[#F43F5E] rounded-full flex items-center justify-center", children: /* @__PURE__ */ e(ce, { className: "text-[#F43F5E]", size: 24 }) }),
            /* @__PURE__ */ e("h3", { className: "text-2xl text-[#F5F5F5]", children: "Навыки" })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: Gt.map((t, r) => /* @__PURE__ */ e(
            "span",
            {
              className: `px-4 py-2 border bg-transparent ${Ot(t.category)} rounded-full text-sm`,
              children: t.name
            },
            r
          )) })
        ] })
      }
    )
  ] }) });
}
const u = ["#4F46E5", "#8B5CF6", "#10B981", "#F43F5E"];
function Et() {
  const o = N(null), [i, c] = p(!1);
  return f(() => {
    const t = new IntersectionObserver(
      ([s]) => {
        s.isIntersecting && c(!0);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px"
      }
    ), r = o.current;
    return r && t.observe(r), () => {
      r && t.unobserve(r);
    };
  }, []), /* @__PURE__ */ e("section", { id: "contacts", className: "py-24 px-6", ref: o, children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      "h2",
      {
        className: `text-3xl md:text-4xl mb-16 text-center text-[#F5F5F5] font-bold transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        style: {
          fontFamily: "var(--font-family-heading)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em"
        },
        children: "На связи"
      }
    ),
    /* @__PURE__ */ l(
      "div",
      {
        className: `grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto transition-all duration-700 delay-300 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: [
          /* @__PURE__ */ l(
            "a",
            {
              href: "mailto:hendhrix@yandex.ru",
              className: "flex flex-col items-center gap-3 p-6 bg-[#111111] rounded-2xl border border-[#1F2937] hover:border-[#4338CA] transition-all duration-300 group",
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    style: { borderColor: u[0] },
                    children: /* @__PURE__ */ e(ve, { style: { color: u[0] }, size: 24 })
                  }
                ),
                /* @__PURE__ */ l("div", { className: "text-center", children: [
                  /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] mb-1", children: "Email" }),
                  /* @__PURE__ */ e("p", { className: "text-[#F5F5F5]", children: "hendhrix@yandex.ru" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ l(
            "a",
            {
              href: "https://t.me/daybogtebezdorovya",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex flex-col items-center gap-3 p-6 bg-[#111111] rounded-2xl border border-[#1F2937] hover:border-[#7C3AED] transition-all duration-300 group",
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    style: { borderColor: u[1] },
                    children: /* @__PURE__ */ e(Ie, { style: { color: u[1] }, size: 24 })
                  }
                ),
                /* @__PURE__ */ l("div", { className: "text-center", children: [
                  /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] mb-1", children: "Telegram" }),
                  /* @__PURE__ */ e("p", { className: "text-[#F5F5F5]", children: "@daybogtebezdorovya" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ l(
            "a",
            {
              href: "https://www.linkedin.com/in/olizo/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex flex-col items-center gap-3 p-6 bg-[#111111] rounded-2xl border border-[#1F2937] hover:border-[#10B981] transition-all duration-300 group",
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    style: { borderColor: u[2] },
                    children: /* @__PURE__ */ e(ue, { style: { color: u[2] }, size: 24 })
                  }
                ),
                /* @__PURE__ */ l("div", { className: "text-center", children: [
                  /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] mb-1", children: "LinkedIn" }),
                  /* @__PURE__ */ e("p", { className: "text-[#F5F5F5]", children: "olizo" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ l(
            "a",
            {
              href: "https://t.me/Izosimovoleg",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex flex-col items-center gap-3 p-6 bg-[#111111] rounded-2xl border border-[#1F2937] hover:border-[#F43F5E] transition-all duration-300 group",
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    style: { borderColor: u[3] },
                    children: /* @__PURE__ */ e(le, { style: { color: u[3] }, size: 24 })
                  }
                ),
                /* @__PURE__ */ l("div", { className: "text-center", children: [
                  /* @__PURE__ */ e("p", { className: "text-sm text-[#9CA3AF] mb-1", children: "Блог" }),
                  /* @__PURE__ */ e("p", { className: "text-[#F5F5F5]", children: "@Izosimovoleg" })
                ] })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function jt() {
  return /* @__PURE__ */ e("footer", { className: "py-8 px-6 bg-[#0A0A0A] border-t border-[#1F2937]", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto text-center", children: /* @__PURE__ */ e("p", { className: "text-[#9CA3AF] text-sm", children: "© 2026 Олег Изосимов" }) }) });
}
function A() {
  const o = N(null), [i, c] = p(!1);
  return f(() => {
    const t = new IntersectionObserver(
      ([s]) => {
        s.isIntersecting && c(!0);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px"
      }
    ), r = o.current;
    return r && t.observe(r), () => {
      r && t.unobserve(r);
    };
  }, []), /* @__PURE__ */ e("div", { ref: o, className: "w-full py-12 px-6", children: /* @__PURE__ */ l("div", { className: "max-w-7xl mx-auto relative h-[2px]", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-[#4338CA] to-transparent opacity-20" }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `h-full bg-gradient-to-r from-transparent via-[#4338CA] to-transparent transition-transform duration-[1500ms] ease-in-out origin-center ${i ? "scale-x-100" : "scale-x-0"}`
      }
    )
  ] }) });
}
function $t() {
  return /* @__PURE__ */ l(
    "div",
    {
      className: "min-h-screen bg-[#0A0A0A]",
      children: [
        /* @__PURE__ */ e(Ze, {}),
        /* @__PURE__ */ l("main", { children: [
          /* @__PURE__ */ e(We, {}),
          /* @__PURE__ */ e(A, {}),
          /* @__PURE__ */ e(Je, {}),
          /* @__PURE__ */ e(A, {}),
          /* @__PURE__ */ e(zt, {}),
          /* @__PURE__ */ e(A, {}),
          /* @__PURE__ */ e(Dt, {}),
          /* @__PURE__ */ e(A, {}),
          /* @__PURE__ */ e(Et, {})
        ] }),
        /* @__PURE__ */ e(jt, {})
      ]
    }
  );
}
const Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" }));
export {
  Pt as Code0_8
};
