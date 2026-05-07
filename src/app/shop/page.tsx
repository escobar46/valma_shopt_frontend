import type { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { PLPHeader } from "@/components/shop/PLPHeader";
import { CategoryNav } from "@/components/shop/CategoryNav";

export const metadata: Metadata = {
  title: "Shop · Valma",
  description:
    "La colección Valma — ocho piezas pensadas una a una. Bodys y camisetas con caída editorial.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <>
      <PLPHeader
        eyebrow="01 · La colección"
        title="Ocho piezas."
        italic="Una temporada."
        copy="Bodys y camisetas con caída editorial. Tejidos europeos certificados, confección colombiana independiente, paleta tomada de la luz mediterránea al final del día."
        count={products.length}
      />

      <section className="bg-ivory section-pad-tight">
        <div className="container-page">
          <CategoryNav total={products.length} />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-12 md:gap-x-4 md:gap-y-16 mt-12">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
