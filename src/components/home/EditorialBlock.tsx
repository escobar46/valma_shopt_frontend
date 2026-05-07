import Image from "next/image";
import Link from "next/link";

export function EditorialBlock() {
  return (
    <section className="bg-chocolate text-ivory grain section-pad relative overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Image — offset, taller than text */}
          <div className="col-span-12 md:col-span-7 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
            <Image
              src="/images/editorial/riviera-campaign.png"
              alt="El Edit Riviera — campaña Valma"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
            {/* Inner decorative frame */}
            <div
              aria-hidden
              className="absolute inset-3 border border-ivory/10"
            />
          </div>

          {/* Text — sits lower for asymmetry */}
          <div className="col-span-12 md:col-span-5 md:pt-24 lg:pt-32">
            <p className="eyebrow text-champagne">05 · El Edit Riviera</p>
            <h2
              className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.96] tracking-[-0.03em] mt-6"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Una tarde
              <br />
              <span
                className="font-display-italic"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                en altamar.
              </span>
            </h2>

            <p className="mt-8 text-[0.98rem] leading-[1.7] text-ivory/80 max-w-md">
              Dos amigas, un velero, la luz del Caribe. Una historia visual
              sobre habitar el calor con calma. Body Riviera y Body Sole, vistos
              en el mismo viaje.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/edits/riviera"
                className="btn btn-fill-ivory border-ivory text-ivory"
              >
                Ver el editorial
              </Link>
            </div>

            <div className="hairline bg-ivory mt-12 w-16" />
            <div className="mt-6 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="eyebrow text-ivory/55">Foto</p>
                <p className="text-sm mt-2 text-ivory/85">Estudio Valma</p>
              </div>
              <div>
                <p className="eyebrow text-ivory/55">Locación</p>
                <p className="text-sm mt-2 text-ivory/85">Cartagena, Col.</p>
              </div>
              <div>
                <p className="eyebrow text-ivory/55">Modelos</p>
                <p className="text-sm mt-2 text-ivory/85">Sira & Aïcha (IA)</p>
              </div>
              <div>
                <p className="eyebrow text-ivory/55">Lanzamiento</p>
                <p className="text-sm mt-2 text-ivory/85">Mayo 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
