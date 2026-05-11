import type { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: "Tienda · Valma",
  description:
    "Toda la colección Valma — bodys, blusas y camisetas hechas en Colombia.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <>
      <section className="bg-bone/40 pt-20 sm:pt-28 lg:pt-32 pb-12 lg:pb-16">
        <div className="container-page">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow text-chocolate/55">Tienda</p>
              <h1
                className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-[-0.03em] mt-5"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
              >
                Todo en un lugar.
              </h1>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-[1.7] text-chocolate/70">
                Sin filtros, sin categorías, sin escondites. Las {products.length} piezas
                que diseñamos esta temporada — y los colores en que vienen.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right md:self-end">
              <p className="eyebrow text-chocolate/55 tabular-nums">
                {products.length.toString().padStart(2, "0")} piezas en línea
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-pad-tight">
        <div className="container-page">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5 md:gap-y-16">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
