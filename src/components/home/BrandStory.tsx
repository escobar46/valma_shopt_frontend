import Image from "next/image";

export function BrandStory() {
  return (
    <section id="historia" className="bg-chocolate text-ivory section-pad relative overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Image — campaign collection flat lay */}
          <div className="col-span-12 md:col-span-6 relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/products/campaign-collection.jpg"
              alt="La colección Valma — 10 bodys en diez tonos"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-3 border border-ivory/10" />
          </div>

          {/* Story */}
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow text-champagne">Quiénes somos</p>
            <h2
              className="font-display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.05] tracking-[-0.025em] mt-6"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Valma nace de una idea simple.
            </h2>

            <div className="mt-8 space-y-5 text-[1rem] leading-[1.75] text-ivory/85 max-w-md">
              <p>
                Tu armario no necesita más. Necesita mejor. Pocas piezas que se
                pongan dos veces por semana, que aguanten lavado tras lavado,
                que combinen entre sí sin pensarlo.
              </p>
              <p>
                Cada pieza la pensamos así: ¿esto te lo vas a poner en tres
                años? Si la respuesta es no, no la hacemos.
              </p>
              <p>
                Diseñado y confeccionado en Colombia, con casas pequeñas y
                pago justo. Tejidos elegidos uno a uno. Y siempre la opción
                de hablar con nosotras por WhatsApp — ningún chatbot, ninguna
                espera de 48 horas.
              </p>
            </div>

            <div className="hairline bg-ivory mt-12 w-16" />
            <div className="mt-6 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p
                  className="font-display text-[2rem] leading-none"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  11
                </p>
                <p className="eyebrow text-ivory/55 mt-2">Piezas</p>
              </div>
              <div>
                <p
                  className="font-display text-[2rem] leading-none"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  100%
                </p>
                <p className="eyebrow text-ivory/55 mt-2">Colombia</p>
              </div>
              <div>
                <p
                  className="font-display text-[2rem] leading-none"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  3
                </p>
                <p className="eyebrow text-ivory/55 mt-2">Talleres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
