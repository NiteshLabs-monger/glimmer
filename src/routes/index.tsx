import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav.tsx";
import { Footer } from "@/components/site/Footer";
import { Butterflies } from "@/components/site/Butterflies";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/catalog";
import image from "@/assets/image.jpeg";
import story from "@/assets/story.jpg";
import logo from "@/assets/butterfly-logo.png";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Butterflies count={10} />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-12 pb-24 md:grid-cols-2 md:items-center md:pt-20">
          <div className="relative z-10 animate-rise">
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-primary">A jewellery house in metamorphosis</p>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] text-deep">
              Wear the moment <br />
              <span className="font-display text-6xl md:text-8xl text-gradient-butterfly normal-case tracking-normal">you became</span>
              <br />someone new.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground italic">
              Tiny, deliberate pieces forged from the quiet sound of changing.
              Pinned to your wrist, threaded at your throat, looped on your hand —
              small wings that remember what you have survived.
            </p>
            <div className="mt-10 flex gap-4">
              <Link to="/shop" className="bg-deep px-8 py-4 text-[11px] font-display uppercase tracking-[0.3em] text-primary-foreground hover:bg-primary transition">
                Enter the garden
              </Link>
              <Link to="/shop/$category" params={{ category: "rings" }} className="border border-deep/40 px-8 py-4 text-[11px] font-display uppercase tracking-[0.3em] text-deep hover:border-deep transition">
                Begin with rings
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-butterfly opacity-20 blur-3xl" />
            <img src={image} alt="Woman wearing a silver butterfly pendant" className="relative w-full rounded-sm shadow-soft" width={1600} height={1200} />
            <img src={logo} alt="" className="absolute -bottom-10 -left-10 w-32 animate-flutter opacity-90" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border/60 bg-gradient-soft overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap py-5 animate-[shimmer_30s_linear_infinite] text-deep/60 font-script text-2xl">
          {/* @ts-ignore */}
          <marquee 
  behavior="scroll" 
  direction="left" 
  scrollamount="6" 
  
>
  {Array.from({ length: 3 }).map((_, i) => (
    <span key={i} className="inline-flex items-center gap-16 mr-16">
      wear your transformation
      <span className="text-primary">✦</span>
      handcrafted in small batches
      <span className="text-primary">✦</span>
      recycled sterling silver
      <span className="text-primary">✦</span>
    </span>
  ))}
   {/* @ts-ignore */}
</marquee>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-primary">01 — Find your wing</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-deep">Shop by <span className="font-script text-5xl md:text-6xl text-gradient-butterfly normal-case tracking-normal">category</span></h2>
          </div>
          <Link to="/shop" className="hidden md:block text-xs font-display uppercase tracking-[0.3em] text-deep hover:text-primary">All collections →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link key={c.slug} to="/shop/$category" params={{ category: c.slug }} className="group relative block overflow-hidden rounded-sm bg-card shadow-soft" style={{ animation: `rise 0.8s ease-out ${i * 0.1}s both` }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={c.image} alt={c.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="font-script text-3xl">{c.tagline}</p>
                <h3 className="font-display text-sm uppercase tracking-[0.3em] mt-2">{c.name} →</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="relative overflow-hidden bg-gradient-soft py-32">
        <Butterflies count={8} />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <img src={story} alt="Butterfly jewellery still life" loading="lazy" width={1400} height={1000} className="rounded-sm shadow-soft" />
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-primary">02 — Our story</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-deep leading-tight">
              From cocoon to <span className="font-script text-5xl md:text-6xl text-gradient-butterfly normal-case tracking-normal">flight</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground italic leading-relaxed">
              We started Blue Butterflies in a tiny atelier the colour of morning sky.
              Every piece is shaped by hand, polished until it catches the breath,
              and sent into the world to remember someone's becoming.
            </p>
            <p className="mt-4 text-lg text-muted-foreground italic leading-relaxed">
              No two flights are alike. Neither are you.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "12y", v: "of slow craft" },
                { k: "100%", v: "recycled material" },
                { k: "1 of 1", v: "feeling, every time" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="font-script text-3xl text-primary">{s.k}</p>
                  <p className="text-xs font-display uppercase tracking-[0.2em] text-deep/70 mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center mb-14">
          <p className="font-display text-[11px] uppercase tracking-[0.4em] text-primary">03 — Newly emerged</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-deep">This season's <span className="font-script text-5xl md:text-6xl text-gradient-butterfly normal-case tracking-normal">first flight</span></h2>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative bg-deep py-32 overflow-hidden text-primary-foreground">
        <Butterflies count={6} />
        <div className="relative mx-auto max-w-3xl text-center px-6">
          <p className="font-script text-5xl md:text-7xl leading-tight">
            "She wore it on the day she stopped apologising for taking up sky."
          </p>
          <p className="mt-8 text-xs font-display uppercase tracking-[0.4em] text-aqua">— A note left with order #0429</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
