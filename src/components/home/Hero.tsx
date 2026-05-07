import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-ivory text-chocolate">
      {/* Two-panel hero — left typography, right photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[100svh]">
        {/* LEFT — manifesto */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 py-12 lg:py-16 order-2 lg:order-1">
          {/* Top meta */}
          <div className="flex items-center justify-between rise" style={{ animationDelay: "120ms" }}>
            <p className="eyebrow text-chocolate/55">Capítulo 01 · Primavera ·26</p>
            <p className="eyebrow text-chocolate/40 tabular-nums hidden sm:block">
              01 / 06
            </p>
          </div>

          {/* Center stack */}
          <div className="py-12 lg:py-0">
            <h1
              className="font-display font-light leading-[0.92] tracking-[-0.035em] rise"
              style={{
                animationDelay: "260ms",
                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                fontSize: "clamp(3.4rem, 8.6vw, 7.6rem)",
              }}
            >
              El Edit
              <br />
              <span
                className="font-display-italic text-wine"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                Riviera.
              </span>
            </h1>

            <p
              className="mt-8 max-w-md text-[0.98rem] leading-[1.7] text-chocolate/75 rise"
              style={{ animationDelay: "440ms" }}
            >
              Ocho piezas. Una temporada. Bodys y camisetas con caída editorial,
              tejidos que respiran con la piel y una paleta tomada del
              Mediterráneo al final del día.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 rise"
              style={{ animationDelay: "600ms" }}
            >
              <Link href="/shop" className="btn btn-fill-ink">
                Ver colección
              </Link>
              <Link
                href="/edits/riviera"
                className="btn btn-fill-ink border-chocolate/30 text-chocolate/80"
              >
                Ver el editorial
              </Link>
            </div>
          </div>

          {/* Bottom — credits */}
          <div
            className="grid grid-cols-3 gap-4 pt-10 border-t border-chocolate/12 rise"
            style={{ animationDelay: "780ms" }}
          >
            <div>
              <p className="eyebrow text-chocolate/45">Filmado</p>
              <p className="text-sm mt-2">Cartagena</p>
            </div>
            <div>
              <p className="eyebrow text-chocolate/45">Modelo</p>
              <p className="text-sm mt-2">Sira (IA Valma)</p>
            </div>
            <div>
              <p className="eyebrow text-chocolate/45">Lanzamiento</p>
              <p className="text-sm mt-2">Mayo · 26</p>
            </div>
          </div>
        </div>

        {/* RIGHT — photo at native size, framed */}
        <div className="lg:col-span-7 xl:col-span-7 relative order-1 lg:order-2">
          <div className="relative h-[70svh] sm:h-[80svh] lg:h-full grain bg-espresso overflow-hidden">
            <Image
              src="/images/products/body-amalfi.png"
              alt="Body Amalfi · Capítulo 01 Riviera"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[center_25%]"
            />

            {/* subtle vertical gradient at bottom for caption legibility */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/55 to-transparent"
            />

            {/* Floating caption — italic Fraunces */}
            <div
              className="absolute left-6 lg:left-10 bottom-6 lg:bottom-10 text-ivory max-w-xs rise"
              style={{ animationDelay: "920ms" }}
            >
              <p className="eyebrow text-ivory/65">Pieza 01</p>
              <p
                className="font-display text-[1.6rem] leading-tight mt-2"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
              >
                Body Amalfi
              </p>
              <p
                className="font-display-italic text-[1rem] leading-snug text-ivory/75 mt-1"
                style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 100, 'WONK' 1" }}
              >
                Una segunda piel.
              </p>
            </div>

            {/* Top-right cinematic frame number */}
            <div
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-ivory/80 rise"
              style={{ animationDelay: "320ms" }}
            >
              <p
                className="font-display text-[2.5rem] leading-none tabular-nums"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
              >
                01
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
