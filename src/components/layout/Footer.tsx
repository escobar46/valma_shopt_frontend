import Link from "next/link";

export function Footer() {
  return (
    <footer id="contacto" className="bg-espresso text-ivory mt-24">
      <div className="container-page section-pad">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Wordmark + tagline */}
          <div className="md:col-span-6 max-w-md">
            <p
              className="font-display tracking-[0.46em] text-[clamp(2.4rem,4vw,3.6rem)] leading-none"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              VALMA
            </p>
            <p
              className="font-display-italic mt-8 text-[clamp(1.25rem,1.6vw,1.55rem)] leading-[1.35] text-bone"
            >
              Lo esencial, hecho bien.
            </p>
            <div className="hairline bg-ivory mt-10" />
            <p className="text-[0.88rem] leading-[1.7] mt-8 text-bone/80 max-w-sm">
              Diseñado y confeccionado en Colombia. Tejidos seleccionados
              uno a uno. Series cortas, atención al detalle.
            </p>
          </div>

          {/* Atención + Pagos */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow text-bone/60">Atención</p>
              <ul className="mt-5 flex flex-col gap-3 text-[0.94rem]">
                <li>
                  <a
                    href="https://wa.me/573203903221"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-champagne transition-colors duration-500"
                  >
                    WhatsApp · +57 320 390 3221
                  </a>
                </li>
                <li className="text-bone/75">Lun a Sáb · 9am — 7pm</li>
                <li className="text-bone/75">Envíos en 2–5 días hábiles</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-bone/60">Pagos & Envíos</p>
              <ul className="mt-5 flex flex-col gap-3 text-[0.94rem] text-bone/85">
                <li>Envío gratis desde $400.000</li>
                <li>Pago contraentrega</li>
                <li>Transferencia bancaria</li>
                <li>Tarjeta débito y crédito</li>
              </ul>
            </div>
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
