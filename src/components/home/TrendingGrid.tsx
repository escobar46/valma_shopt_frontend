import Link from "next/link";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function TrendingGrid() {
  const products = getAllProducts();

  return (
    <section id="tienda" className="bg-ivory section-pad">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-chocolate/55">La colección</p>
            <h2
              className="font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] tracking-[-0.025em] mt-4"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Todo lo que tenemos.
              <span
                className="font-display-italic block text-chocolate/55 mt-1"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                sin filtros, sin escondites.
              </span>
            </h2>
          </div>
          <p className="text-[0.95rem] text-chocolate/65 max-w-xs">
            {products.length} piezas pensadas una a una. Si te gusta una y se
            agota, te avisamos cuando vuelva.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5 md:gap-y-16">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
