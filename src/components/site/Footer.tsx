import logo from "@/assets/butterfly-logo.png";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div>
          <img src={logo} alt="" className="h-12 w-auto mb-4" />
          <p className="font-script text-3xl text-deep">blue butterflies</p>
          <p className="text-sm text-muted-foreground mt-2 italic">Wear your transformation.</p>
        </div>
        <div>
          <h4 className="text-xs font-display uppercase tracking-[0.25em] text-deep mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop/$category" params={{ category: "rings" }}>Rings</Link></li>
            <li><Link to="/shop/$category" params={{ category: "bracelets" }}>Bracelets</Link></li>
            <li><Link to="/shop/$category" params={{ category: "earrings" }}>Earrings</Link></li>
            <li><Link to="/shop/$category" params={{ category: "chains" }}>Chains</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-display uppercase tracking-[0.25em] text-deep mb-4">House</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Our story</li><li>Craftsmanship</li><li>Sustainability</li><li>Care guide</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-display uppercase tracking-[0.25em] text-deep mb-4">Stay close</h4>
          <p className="text-sm text-muted-foreground mb-3">Letters from the cocoon — new pieces, slow rituals.</p>
          <form className="flex border-b border-deep/40">
            <input placeholder="your email" className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="text-xs font-display uppercase tracking-widest text-deep">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} Blue Butterflies · Handcrafted with patience
      </div>
    </footer>
  );
}