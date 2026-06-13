import { r as reactExports, T as jsxRuntimeExports } from "./server-CQv5nOKU.js";
import { L as Link } from "./router-DMijUlw4.js";
const wordmark = "/assets/wordmark-DCfKGmPa.png";
const logo = "/assets/butterfly-logo-C6brkuo6.png";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
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
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "md:h-14 h-11 w-auto drop-shadow-md hover:cursor-butterfly" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: wordmark, alt: "Blue Butterflies", className: "md:h-18 h-13 w-auto opacity-90 drop-shadow-md" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex gap-8 text-[11px] font-display uppercase text-deep/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "rings" }, className: "hover:text-primary transition", children: "Rings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "bracelets" }, className: "hover:text-primary transition", children: "Bracelets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "earrings" }, className: "hover:text-primary transition", children: "Earrings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "chains" }, className: "hover:text-primary transition", children: "Chains" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 text-deep/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 cursor-pointer hover:text-primary transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 cursor-pointer hover:text-primary transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 hover:text-primary transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[9px] text-primary-foreground grid place-items-center", children: "2" })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 border-t border-border/60 bg-gradient-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-12 w-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-3xl text-deep", children: "blue butterflies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 italic", children: "Wear your transformation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-display uppercase tracking-[0.25em] text-deep mb-4", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "rings" }, children: "Rings" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "bracelets" }, children: "Bracelets" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "earrings" }, children: "Earrings" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: { category: "chains" }, children: "Chains" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-display uppercase tracking-[0.25em] text-deep mb-4", children: "House" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Our story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Craftsmanship" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sustainability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Care guide" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-display uppercase tracking-[0.25em] text-deep mb-4", children: "Stay close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Letters from the cocoon — new pieces, slow rituals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex border-b border-deep/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "your email", className: "flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs font-display uppercase tracking-widest text-deep", children: "Join" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 py-6 text-center text-xs text-muted-foreground tracking-widest uppercase", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Blue Butterflies · Handcrafted with patience"
    ] })
  ] });
}
function Butterflies({ count = 6 }) {
  const items = Array.from({ length: count });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: items.map((_, i) => {
    const left = i * 137 % 100;
    const top = i * 53 % 90;
    const delay = i * 0.7 % 4;
    const size = 18 + i * 7 % 22;
    const dx = (i % 2 === 0 ? 1 : -1) * (80 + i * 20 % 200);
    const dy = -(150 + i * 50 % 250);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 64 48",
        width: size,
        height: size * 0.75,
        style: {
          position: "absolute",
          left: `${left}%`,
          top: `${top}%`,
          animation: `drift ${10 + i % 5}s linear ${delay}s infinite`,
          ["--dx"]: `${dx}px`,
          ["--dy"]: `${dy}px`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: `bf-${i}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.82 0.07 200)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.42 0.09 240)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M32 24 C 20 6, 4 8, 4 22 C 4 34, 18 34, 32 24 Z M32 24 C 44 6, 60 8, 60 22 C 60 34, 46 34, 32 24 Z M32 24 C 22 34, 14 44, 18 46 C 24 46, 30 38, 32 30 Z M32 24 C 42 34, 50 44, 46 46 C 40 46, 34 38, 32 30 Z",
              fill: `url(#bf-${i})`,
              opacity: 0.55
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "32", y1: "22", x2: "30", y2: "6", stroke: "oklch(0.3 0.06 245)", strokeWidth: "0.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "32", y1: "22", x2: "34", y2: "6", stroke: "oklch(0.3 0.06 245)", strokeWidth: "0.6" })
        ]
      },
      i
    );
  }) });
}
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group cursor-pointer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        }
      ),
      product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] font-display uppercase tracking-[0.2em] text-deep", children: product.badge }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 bg-deep py-3 text-[11px] font-display uppercase tracking-[0.25em] text-primary-foreground", children: "Add to bag" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base text-deep", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "$",
        product.price
      ] })
    ] })
  ] });
}
export {
  Butterflies as B,
  Footer as F,
  Nav as N,
  ProductCard as P,
  logo as l
};
