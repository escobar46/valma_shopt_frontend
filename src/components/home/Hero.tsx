import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-ivory text-chocolate overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[88svh]">
        {/* LEFT — copy + promo */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 py-14 lg:py-16 order-2 lg:order-1">
          <div className="rise" style={{ animationDelay: "120ms" }}>
            <p className="eyebrow text-chocolate/55">Nueva colección</p>
          </div>

          <div className="py-10 lg:py-0">
            <h1
              className="font-display font-light leading-[0.92] tracking-[-0.035em] rise"
              style={{
                animationDelay: "240ms",
                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                fontSize: "clamp(3.2rem, 8.4vw, 7.2rem)",
              }}
            >
              Lo esencial,
              <br />
              <span
                className="font-display-italic"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                hecho bien.
              </span>
            </h1>

            <p
              className="mt-8 max-w-md text-[1rem] leading-[1.7] text-chocolate/75 rise"
              style={{ animationDelay: "400ms" }}
            >
              Bodys, blusas y camisetas en tejidos que respiran con la piel.
              Diseñadas y confeccionadas en Colombia para mujeres que ya saben
              qué les queda bien.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 rise"
              style={{ animationDelay: "560ms" }}
            >
              <Link href="/shop" className="btn btn-fill-ink">
                Comprar ahora
              </Link>
              <a
                href="https://wa.me/573203903221"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill-ink border-chocolate/30 text-chocolate/80"
              >
                Asesoría WhatsApp
              </a>
            </div>
          </div>

          {/* Promo strip — bottom */}
          <div
            className="grid grid-cols-2 gap-6 pt-10 border-t border-chocolate/12 rise"
            style={{ animationDelay: "720ms" }}
          >
            <div>
              <p
                className="font-display text-[1.6rem] leading-none text-wine"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
              >
                Envío gratis
              </p>
              <p className="text-[0.86rem] text-chocolate/65 mt-2">
                en toda Colombia desde $400.000
              </p>
            </div>
            <div>
              <p
                className="font-display text-[1.6rem] leading-none"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
              >
                Contraentrega
              </p>
              <p className="text-[0.86rem] text-chocolate/65 mt-2">
                pago contra el producto en mano
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — flat lay multi-color como protagonista */}
        <div className="lg:col-span-7 xl:col-span-7 relative order-1 lg:order-2">
          <div className="relative h-[68svh] sm:h-[78svh] lg:h-full bg-bone overflow-hidden">
            <Image
              src="/images/products/body-alma.jpg"
              alt="Body Alma · ocho colores"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-center"
            />

            {/* Floating label — bottom right */}
            <div
              className="absolute right-6 lg:right-10 bottom-6 lg:bottom-10 text-ivory max-w-[240px] text-right rise"
              style={{ animationDelay: "880ms" }}
            >
              <div className="bg-chocolate/85 backdrop-blur-sm px-5 py-4 inline-block">
                <p className="eyebrow text-ivory/70">Bestseller</p>
                <p
                  className="font-display text-[1.4rem] leading-tight mt-1"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
                >
                  Body Alma
                </p>
                <p className="text-[0.8rem] text-ivory/75 mt-1">
                  Desde $159.000 · 7 colores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
