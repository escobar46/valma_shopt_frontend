import Link from "next/link";

const columns = [
  {
    title: "Tienda",
    links: [
      { href: "/shop", label: "Todo" },
      { href: "/shop/bodys", label: "Bodys" },
      { href: "/shop/camisetas", label: "Camisetas" },
    ],
  },
  {
    title: "Universo",
    links: [
      { href: "/about", label: "Sobre Valma" },
      { href: "/edits/riviera", label: "El Edit Riviera" },
      { href: "/sostenibilidad", label: "Materiales" },
    ],
  },
  {
    title: "Atención",
    links: [
      { href: "https://wa.me/573203903221", label: "WhatsApp" },
      { href: "/envios", label: "Envíos" },
      { href: "/cambios", label: "Cambios" },
      { href: "/guia-tallas", label: "Guía de tallas" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory mt-32">
      <div className="container-page section-pad">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Wordmark + manifesto */}
          <div className="md:col-span-5 lg:col-span-6 max-w-md">
            <p
              className="font-display tracking-[0.46em] text-[clamp(2.4rem,4vw,3.6rem)] leading-none"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              VALMA
            </p>
            <p
              className="font-display-italic mt-8 text-[clamp(1.25rem,1.6vw,1.55rem)] leading-[1.35] text-bone"
            >
              Cinematic essentials.
              <br />
              Mediterranean ease.
            </p>
            <div className="hairline bg-ivory mt-10" />
            <p className="text-[0.82rem] leading-[1.7] mt-8 text-bone/80 max-w-sm">
              Diseñado en Bogotá. Confeccionado con casas independientes en
              Medellín. Tejidos europeos certificados.
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-bone/60">{col.title}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[0.92rem] hover:text-champagne transition-colors duration-500"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline bg-ivory mt-20" />

        <div className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[0.74rem] tracking-wider text-bone/60">
            © {new Date().getFullYear()} Valma. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="eyebrow text-bone/70 hover:text-ivory transition">
              Instagram
            </Link>
            <Link href="#" className="eyebrow text-bone/70 hover:text-ivory transition">
              TikTok
            </Link>
            <Link href="#" className="eyebrow text-bone/70 hover:text-ivory transition">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
