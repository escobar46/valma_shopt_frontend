import Image from "next/image";
import Link from "next/link";

export function CherriesSpotlight() {
  return (
    <section className="bg-bone/40 section-pad relative overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Image */}
          <div className="col-span-12 md:col-span-6 relative aspect-square overflow-hidden bg-bone">
            <Image
              src="/images/products/camiseta-cherries-detail.jpg"
              alt="Camiseta Cherries — edición limitada"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div className="col-span-12 md:col-span-6 md:pl-6">
            <p className="eyebrow text-wine">Edición limitada</p>
            <h2
              className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.96] tracking-[-0.03em] mt-6"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Cherries.
              <span
                className="font-display-italic block text-chocolate/55 mt-1"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                serie corta, fruta dulce.
              </span>
            </h2>

            <p className="mt-8 text-[1rem] leading-[1.7] text-chocolate/75 max-w-md">
              Cropped en algodón orgánico con estampa Cherries. Tres colores,
              cantidades limitadas, sin reposición. Cuando se acaba, se acaba.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/product/camiseta-cherries"
                className="btn btn-fill-ink"
              >
                Quiero la mía
              </Link>
              <p className="text-[0.86rem] text-chocolate/55 tabular-nums">
                Desde <span className="text-chocolate">$119.000</span>
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="hairline bg-chocolate flex-1" />
              <p className="eyebrow text-chocolate/55 whitespace-nowrap">
                3 colores · Ink · Bone · Blanco
              </p>
              <div className="hairline bg-chocolate flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
