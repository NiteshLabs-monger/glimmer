import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Butterflies } from "@/components/site/Butterflies";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop · Blue Butterflies" },
      { name: "description", content: "Browse rings, bracelets, earrings and chains — handcrafted butterfly jewellery." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="relative overflow-hidden bg-gradient-soft py-24">
        <Butterflies count={8} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.4em] text-primary">The collection</p>
          <h1 className="mt-4 text-5xl md:text-7xl text-deep">All <span className="font-script text-6xl md:text-8xl text-gradient-butterfly normal-case tracking-normal">flights</span></h1>
          <p className="mt-6 max-w-xl mx-auto italic text-muted-foreground text-lg">Every piece in one quiet garden. Wander.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map((c) => (
            <Link key={c.slug} to="/shop/$category" params={{ category: c.slug }} className="border border-deep/30 px-5 py-2 text-xs font-display uppercase tracking-[0.25em] text-deep hover:bg-deep hover:text-primary-foreground transition">
              {c.name}
            </Link>
          ))}
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}