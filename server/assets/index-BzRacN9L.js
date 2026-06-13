import { T as jsxRuntimeExports } from "./server-CQv5nOKU.js";
import { L as Link, c as categories, p as products } from "./router-DMijUlw4.js";
import { N as Nav, B as Butterflies, l as logo, P as ProductCard, F as Footer } from "./ProductCard--d6yW-w9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const image = "/assets/image-W-SnUwZm.jpeg";
const story = "/assets/story-CP3-CEYF.jpg";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Butterflies, { count: 10 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 pt-12 pb-24 md:grid-cols-2 md:items-center md:pt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 animate-rise", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.4em] text-primary", children: "A jewellery house in metamorphosis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl md:text-7xl leading-[1.05] text-deep", children: [
            "Wear the moment ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl md:text-8xl text-gradient-butterfly normal-case tracking-normal", children: "you became" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "someone new."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-lg text-muted-foreground italic", children: "Tiny, deliberate pieces forged from the quiet sound of changing. Pinned to your wrist, threaded at your throat, looped on your hand — small wings that remember what you have survived." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "bg-deep px-8 py-4 text-[11px] font-display uppercase tracking-[0.3em] text-primary-foreground hover:bg-primary transition", children: "Enter the garden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$category", params: {
              category: "rings"
            }, className: "border border-deep/40 px-8 py-4 text-[11px] font-display uppercase tracking-[0.3em] text-deep hover:border-deep transition", children: "Begin with rings" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-butterfly opacity-20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "Woman wearing a silver butterfly pendant", className: "relative w-full rounded-sm shadow-soft", width: 1600, height: 1200 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "absolute -bottom-10 -left-10 w-32 animate-flutter opacity-90" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border/60 bg-gradient-soft overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-16 whitespace-nowrap py-5 animate-[shimmer_30s_linear_infinite] text-deep/60 font-script text-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("marquee", { behavior: "scroll", direction: "left", scrollamount: "6", children: Array.from({
      length: 3
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-16 mr-16", children: [
      "wear your transformation",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" }),
      "handcrafted in small batches",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" }),
      "recycled sterling silver",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" })
    ] }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.4em] text-primary", children: "01 — Find your wing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl text-deep", children: [
            "Shop by ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-5xl md:text-6xl text-gradient-butterfly normal-case tracking-normal", children: "category" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hidden md:block text-xs font-display uppercase tracking-[0.3em] text-deep hover:text-primary", children: "All collections →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop/$category", params: {
        category: c.slug
      }, className: "group relative block overflow-hidden rounded-sm bg-card shadow-soft", style: {
        animation: `rise 0.8s ease-out ${i * 0.1}s both`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, loading: "lazy", width: 1024, height: 1024, className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-3xl", children: c.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-sm uppercase tracking-[0.3em] mt-2", children: [
            c.name,
            " →"
          ] })
        ] })
      ] }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-soft py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Butterflies, { count: 8 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: story, alt: "Butterfly jewellery still life", loading: "lazy", width: 1400, height: 1e3, className: "rounded-sm shadow-soft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.4em] text-primary", children: "02 — Our story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl text-deep leading-tight", children: [
            "From cocoon to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-5xl md:text-6xl text-gradient-butterfly normal-case tracking-normal", children: "flight" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground italic leading-relaxed", children: "We started Blue Butterflies in a tiny atelier the colour of morning sky. Every piece is shaped by hand, polished until it catches the breath, and sent into the world to remember someone's becoming." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground italic leading-relaxed", children: "No two flights are alike. Neither are you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8", children: [{
            k: "12y",
            v: "of slow craft"
          }, {
            k: "100%",
            v: "recycled silver"
          }, {
            k: "1 of 1",
            v: "feeling, every time"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-3xl text-primary", children: s.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display uppercase tracking-[0.2em] text-deep/70 mt-1", children: s.v })
          ] }, s.k)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.4em] text-primary", children: "03 — Newly emerged" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl text-deep", children: [
          "This season's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-5xl md:text-6xl text-gradient-butterfly normal-case tracking-normal", children: "first flight" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4", children: products.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-deep py-32 overflow-hidden text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Butterflies, { count: 6 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl text-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-5xl md:text-7xl leading-tight", children: '"She wore it on the day she stopped apologising for taking up sky."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xs font-display uppercase tracking-[0.4em] text-aqua", children: "— A note left with order #0429" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
