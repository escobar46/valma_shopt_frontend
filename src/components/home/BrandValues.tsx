const values = [
  {
    n: "01",
    title: "Diseñado para quedarse",
    body: "Nuestras piezas no responden a microtendencias. Las pensamos para que sigan vigentes tres temporadas más adelante.",
  },
  {
    n: "02",
    title: "Tejidos elegidos a mano",
    body: "Algodón pima peruano, lino europeo, viscosa LENZING™ ECOVERO™. Tela que respira con la piel, no encima de ella.",
  },
  {
    n: "03",
    title: "Talleres independientes",
    body: "Producción en casas pequeñas de Medellín. Series cortas, atención al detalle, compensación justa a quienes nos confeccionan.",
  },
];

export function BrandValues() {
  return (
    <section className="bg-ivory section-pad-tight">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-chocolate/55">06 · Cómo trabajamos</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.1] tracking-[-0.02em] max-w-[26ch]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Tres principios que sostienen cada decisión.
            </h2>
          </div>
        </div>

        <div className="hairline bg-chocolate" />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.n}
              className={`py-12 md:py-16 ${
                i > 0 ? "md:border-l border-chocolate/15 md:pl-10" : "md:pr-10"
              } ${i < 2 ? "border-b md:border-b-0 border-chocolate/15" : ""}`}
            >
              <p
                className="font-display text-[2.6rem] leading-none text-chocolate/40"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {v.n}
              </p>
              <h3
                className="font-display text-[1.6rem] leading-tight mt-6 tracking-[-0.01em]"
                style={{ fontVariationSettings: "'opsz' 36" }}
              >
                {v.title}
              </h3>
              <p className="text-[0.95rem] leading-[1.7] text-chocolate/75 mt-4 max-w-sm">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
