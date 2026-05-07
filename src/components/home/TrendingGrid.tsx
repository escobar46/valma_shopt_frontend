import Link from "next/link";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function TrendingGrid() {
  const products = getAllProducts();

  return (
    <section className="bg-ivory section-pad">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-chocolate/55">04 · La colección</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2
              className="font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1] tracking-[-0.025em]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Ocho piezas,
              <span
                className="font-display-italic block text-chocolate/55 mt-1"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                pensadas una a una.
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right md:self-end">
            <p className="text-[0.92rem] leading-[1.65] text-chocolate/70 max-w-xs md:ml-auto">
              No tendrás que escoger entre cien camisetas iguales. Tendrás dos
              que valen la pena.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-12 md:gap-x-4 md:gap-y-16">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>

        {/* Editorial line break with running caption */}
        <div className="mt-20 mb-20 flex items-center gap-6">
          <div className="hairline flex-1 bg-chocolate" />
          <p
            className="font-display-italic text-[0.95rem] text-chocolate/55 whitespace-nowrap"
            style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100, 'WONK' 1" }}
          >
            — segunda mitad —
          </p>
          <div className="hairline flex-1 bg-chocolate" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-12 md:gap-x-4 md:gap-y-16">
          {products.slice(4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/shop" className="btn btn-fill-ink">
            Ver tienda completa
          </Link>
        </div>
      </div>
    </section>
  );
}
