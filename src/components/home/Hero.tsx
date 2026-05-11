import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-ivory text-chocolate overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[88svh]">
        {/* LEFT — copy + promo */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-12 lg:py-16 order-2 lg:order-1">
          <div className="rise" style={{ animationDelay: "120ms" }}>
            <p className="eyebrow text-chocolate/55">Nueva colección</p>
          </div>

          <div className="py-8 lg:py-0">
            <h1
              className="font-display font-light leading-[0.94] tracking-[-0.03em] rise"
              style={{
                animationDelay: "240ms",
                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                fontSize: "clamp(2.6rem, 7.5vw, 7rem)",
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
              className="mt-6 sm:mt-8 max-w-md text-[0.96rem] sm:text-[1rem] leading-[1.65] text-chocolate/75 rise"
              style={{ animationDelay: "400ms" }}
            >
              Bodys, blusas y camisetas en tejidos que respiran. Diseñadas
              y confeccionadas en Colombia.
            </p>

            <div
              className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 rise"
              style={{ animationDelay: "560ms" }}
            >
              <Link
                href="/shop"
                className="btn btn-fill-ink w-full sm:w-auto text-center"
              >
                Comprar ahora
              </Link>
              <a
                href="https://wa.me/573203903221"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill-ink border-chocolate/30 text-chocolate/80 w-full sm:w-auto text-center"
              >
                Asesoría WhatsApp
              </a>
            </div>
          </div>

          {/* Promo strip — 1 col mobile, 2 col desktop */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 lg:pt-10 border-t border-chocolate/12 rise"
            style={{ animationDelay: "720ms" }}
          >
            <div>
              <p
                className="font-display text-[1.4rem] sm:text-[1.6rem] leading-none text-wine"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
              >
                Envío gratis
              </p>
              <p className="text-[0.84rem] text-chocolate/65 mt-2">
                desde $400.000 a toda Colombia
              </p>
            </div>
            <div>
              <p
                className="font-display text-[1.4rem] sm:text-[1.6rem] leading-none"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
              >
                Contraentrega
              </p>
              <p className="text-[0.84rem] text-chocolate/65 mt-2">
                paga contra el producto en mano
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — flat lay multi-color */}
        <div className="lg:col-span-7 xl:col-span-7 relative order-1 lg:order-2">
          <div className="relative h-[58svh] sm:h-[72svh] lg:h-full bg-bone overflow-hidden">
            <Image
              src="/images/products/body-alma.jpg"
              alt="Body Alma · ocho colores"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-center"
            />

            <div
              className="absolute right-4 lg:right-10 bottom-4 lg:bottom-10 text-ivory max-w-[200px] sm:max-w-[240px] text-right rise"
              style={{ animationDelay: "880ms" }}
            >
              <div className="bg-chocolate/85 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 inline-block">
                <p className="eyebrow text-ivory/70 text-[0.6rem] sm:text-[0.68rem]">
                  Bestseller
                </p>
                <p
                  className="font-display text-[1.2rem] sm:text-[1.4rem] leading-tight mt-1"
                  style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
                >
                  Body Alma
                </p>
                <p className="text-[0.74rem] sm:text-[0.8rem] text-ivory/75 mt-0.5 sm:mt-1">
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
