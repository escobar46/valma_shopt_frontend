import Image from "next/image";
import Link from "next/link";

const bodysCount = 6;
const camisetasCount = 2;

export function FeaturedCategories() {
  return (
    <section className="bg-bone/40 section-pad">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-chocolate/55">03 · Categorías</p>
          </div>
          <div className="col-span-12 md:col-span-9 flex items-end justify-between gap-6">
            <h2
              className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-[-0.025em]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Dos siluetas.
              <br />
              <span
                className="font-display-italic text-chocolate/60"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                un mismo lenguaje.
              </span>
            </h2>
            <Link href="/shop" className="eyebrow hidden md:inline-flex hover:text-wine transition">
              Ver todo →
            </Link>
          </div>
        </div>

        {/* Asymmetric 60/40 — bodys = 7 cols, camisetas = 5 cols */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Bodys — wider tile, full editorial group shot */}
          <Link
            href="/shop/bodys"
            className="group relative md:col-span-7 aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-chocolate"
          >
            <Image
              src="/images/editorial/riviera-campaign.png"
              alt="Bodys · El Edit Riviera"
              fill
              sizes="(min-width: 768px) 56vw, 100vw"
              className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent"
            />
            <div className="absolute inset-x-6 bottom-6 lg:inset-x-8 lg:bottom-8 text-ivory flex items-end justify-between">
              <div>
                <p className="eyebrow text-ivory/60">01 · Segunda piel</p>
                <p
                  className="font-display text-[clamp(2.4rem,4.2vw,4rem)] leading-none mt-3"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
                >
                  Bodys
                </p>
                <p
                  className="font-display-italic text-[1.1rem] mt-2 text-ivory/80"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100, 'WONK' 1" }}
                >
                  seis siluetas, un guardarropa.
                </p>
              </div>
              <span className="eyebrow text-ivory/70 tabular-nums whitespace-nowrap pb-1">
                {bodysCount} piezas
              </span>
            </div>
          </Link>

          {/* Camisetas — narrower tile */}
          <Link
            href="/shop/camisetas"
            className="group relative md:col-span-5 aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-chocolate"
          >
            <Image
              src="/images/products/camiseta-portofino.png"
              alt="Camisetas · Esenciales Valma"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[center_15%] transition-transform duration-[1600ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent"
            />
            <div className="absolute inset-x-6 bottom-6 lg:inset-x-8 lg:bottom-8 text-ivory flex items-end justify-between">
              <div>
                <p className="eyebrow text-ivory/60">02 · El esencial</p>
                <p
                  className="font-display text-[clamp(2.4rem,4.2vw,4rem)] leading-none mt-3"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
                >
                  Camisetas
                </p>
                <p
                  className="font-display-italic text-[1.1rem] mt-2 text-ivory/80"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100, 'WONK' 1" }}
                >
                  dos cortes, infinitos lunes.
                </p>
              </div>
              <span className="eyebrow text-ivory/70 tabular-nums whitespace-nowrap pb-1">
                {camisetasCount} piezas
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
