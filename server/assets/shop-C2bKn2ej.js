import { T as jsxRuntimeExports } from "./server-CQv5nOKU.js";
import { c as categories, L as Link, p as products } from "./router-DMijUlw4.js";
import { N as Nav, B as Butterflies, P as ProductCard, F as Footer } from "./ProductCard--d6yW-w9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Shop() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-soft py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Butterflies, { count: 8 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.4em] text-primary", children: "The collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-5xl md:text-7xl text-deep", children: [
          "All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-6xl md:text-8xl text-gradient-butterfly normal-case tracking-normal", children: "flights" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl mx-auto italic text-muted-foreground text-lg", children: "Every piece in one quiet garden. Wander." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center mb-14", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: {
        category: c.slug
      }, className: "border border-deep/30 px-5 py-2 text-xs font-display uppercase tracking-[0.25em] text-deep hover:bg-deep hover:text-primary-foreground transition", children: c.name }, c.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Shop as component
};
