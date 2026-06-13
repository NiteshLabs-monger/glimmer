import { T as jsxRuntimeExports } from "./server-CQv5nOKU.js";
import { R as Route, p as products, L as Link } from "./router-DMijUlw4.js";
import { N as Nav, B as Butterflies, P as ProductCard, F as Footer } from "./ProductCard--d6yW-w9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function CategoryPage() {
  const {
    cat
  } = Route.useLoaderData();
  const items = products.filter((p) => p.category === cat.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Butterflies, { count: 8 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.4em] text-primary", children: cat.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl md:text-7xl text-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-6xl md:text-8xl text-gradient-butterfly normal-case tracking-normal", children: cat.name.toLowerCase() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-lg italic text-muted-foreground leading-relaxed", children: cat.story })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-butterfly opacity-15 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cat.image, alt: cat.name, width: 1024, height: 1024, className: "relative rounded-sm shadow-soft" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "text-xs font-display uppercase tracking-[0.3em] text-deep hover:text-primary", children: "← All collections" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CategoryPage as component
};
