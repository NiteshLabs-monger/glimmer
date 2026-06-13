import rings from "@/assets/cat-rings.jpg";
import bracelets from "@/assets/cat-bracelets.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import chains from "@/assets/cat-chains.jpg";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  story: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "rings",     name: "Rings",     tagline: "Vows to yourself",        story: "Bands that circle a quiet promise — the one you whisper before anyone else hears it.", image: rings },
  { slug: "bracelets", name: "Bracelets", tagline: "A heartbeat at the wrist", story: "Worn where the pulse lives, each chain a soft reminder that you are still becoming.", image: bracelets },
  { slug: "earrings",  name: "Earrings",  tagline: "Wings, listening",        story: "Pairs that catch the light like a thought you almost said out loud.", image: earrings },
  { slug: "chains",    name: "Chains",    tagline: "Close to the throat",     story: "A thread of silver between the collarbones — small, certain, alive.", image: chains },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  { id: "p1", name: "Aether Butterfly Ring",   price: 148, category: "rings",     image: rings,     badge: "New" },
  { id: "p2", name: "Pulse Chain Bracelet",    price: 124, category: "bracelets", image: bracelets },
  { id: "p3", name: "Morpho Drop Earrings",    price: 168, category: "earrings",  image: earrings,  badge: "Bestseller" },
  { id: "p4", name: "Silk Pendant Chain",      price: 192, category: "chains",    image: chains },
  { id: "p5", name: "Cocoon Stacking Ring",    price: 96,  category: "rings",     image: rings },
  { id: "p6", name: "Tidewater Cuff",          price: 210, category: "bracelets", image: bracelets, badge: "Limited" },
  { id: "p7", name: "Whisper Studs",           price: 78,  category: "earrings",  image: earrings },
  { id: "p8", name: "Northlight Chain",        price: 156, category: "chains",    image: chains },
];