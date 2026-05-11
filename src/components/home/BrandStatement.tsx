export function BrandStatement() {
  return (
    <section className="bg-ivory text-chocolate section-pad-tight">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-chocolate/55">Sobre Valma</p>
          </div>
          <div className="col-span-12 md:col-span-9 max-w-3xl">
            <p
              className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] tracking-[-0.01em]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              Diseñamos bodys, blusas y camisetas para mujeres que prefieren
              tres piezas que aman a cien que descuelgan.
            </p>
            <p className="mt-6 text-[0.96rem] leading-[1.7] text-chocolate/70 max-w-xl">
              Tejidos seleccionados a mano, confección en talleres pequeños de
              Colombia, paleta pensada para que todo combine con todo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
