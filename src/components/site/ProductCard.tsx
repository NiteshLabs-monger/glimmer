import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary shadow-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] font-display uppercase tracking-[0.2em] text-deep">
            {product.badge}
          </span>
        )}
        <button className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 bg-deep py-3 text-[11px] font-display uppercase tracking-[0.25em] text-primary-foreground">
          Add to bag
        </button>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-base text-deep">{product.name}</h3>
        <span className="text-sm text-muted-foreground">{"\u20B9"}{product.price}</span>
      </div>
    </article>
  );
}