export function BrandStatement() {
  return (
    <section className="bg-ivory text-chocolate section-pad-tight">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-chocolate/55">02 · Manifiesto</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p
              className="font-display-italic text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.18] tracking-[-0.015em] max-w-[22ch]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
            >
              No diseñamos cien piezas para vender una. Diseñamos ocho para que
              ames las ocho.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-2xl text-[0.95rem] leading-[1.7]">
              <p>
                Tejidos europeos certificados, confección colombiana
                independiente, paleta tomada de la luz mediterránea al final
                del día.
              </p>
              <p className="text-chocolate/70">
                Cada pieza nace para acompañar varias estaciones — no una
                temporada. Esenciales que mejoran con el uso, no que envejecen
                con él.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
