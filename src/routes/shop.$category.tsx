import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Butterflies } from "@/components/site/Butterflies";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.cat.name ?? "Shop"} · Blue Butterflies` },
      { name: "description", content: loaderData?.cat.story ?? "Blue Butterflies jewellery." },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <p className="font-script text-5xl text-deep">that flight isn't here</p>
        <Link to="/shop" className="mt-6 inline-block underline text-primary">Return to the garden</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center bg-background">
      <button onClick={reset} className="underline">Try again</button>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const items = products.filter((p) => p.category === cat.slug);
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="relative overflow-hidden">
        <Butterflies count={8} />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.4em] text-primary">{cat.tagline}</p>
            <h1 className="mt-4 text-5xl md:text-7xl text-deep">
              <span className="font-script text-6xl md:text-8xl text-gradient-butterfly normal-case tracking-normal">{cat.name.toLowerCase()}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg italic text-muted-foreground leading-relaxed">{cat.story}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-butterfly opacity-15 blur-3xl" />
            <img src={cat.image} alt={cat.name} width={1024} height={1024} className="relative rounded-sm shadow-soft" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-20 text-center">
          <Link to="/shop" className="text-xs font-display uppercase tracking-[0.3em] text-deep hover:text-primary">← All collections</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}