import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/wordmark.png";
import logo from "@/assets/butterfly-logo.png";
import { ShoppingBag, Search, Heart } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="md:h-14 h-11 w-auto drop-shadow-md hover:cursor-butterfly" />
          <img src={wordmark} alt="Blue Butterflies" className="md:h-18 h-13 w-auto opacity-90 drop-shadow-md" />
        </Link>
        <nav className="hidden md:flex gap-8 text-[11px] font-display uppercase text-deep/80">
          <Link to="/shop/$category" params={{ category: "rings" }} className="hover:text-primary transition">Rings</Link>
          <Link to="/shop/$category" params={{ category: "bracelets" }} className="hover:text-primary transition">Bracelets</Link>
          <Link to="/shop/$category" params={{ category: "earrings" }} className="hover:text-primary transition">Earrings</Link>
          <Link to="/shop/$category" params={{ category: "chains" }} className="hover:text-primary transition">Chains</Link>
        </nav>
        <div className="flex items-center gap-5 text-deep/80">
          <Search className="h-4 w-4 cursor-pointer hover:text-primary transition" />
          <Heart className="h-4 w-4 cursor-pointer hover:text-primary transition" />
          <div className="relative cursor-pointer">
            <ShoppingBag className="h-4 w-4 hover:text-primary transition" />
            <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[9px] text-primary-foreground grid place-items-center">2</span>
          </div>
        </div>
      </div>
    </header>
  );
}