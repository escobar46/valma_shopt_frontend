const promises = [
  {
    title: "Envío gratis",
    detail: "desde $400.000 a toda Colombia",
    icon: TruckIcon,
  },
  {
    title: "Pago seguro",
    detail: "contraentrega o tarjeta",
    icon: ShieldIcon,
  },
  {
    title: "Cambios fáciles",
    detail: "15 días para devolver",
    icon: SwapIcon,
  },
  {
    title: "Atención humana",
    detail: "WhatsApp · +57 320 390 3221",
    icon: ChatIcon,
  },
];

export function Promises() {
  return (
    <section className="bg-ivory border-y border-chocolate/12">
      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {promises.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex items-start gap-4">
                <div className="shrink-0 mt-1 text-wine">
                  <Icon />
                </div>
                <div>
                  <p
                    className="font-display text-[1.1rem] leading-tight tracking-[-0.01em]"
                    style={{ fontVariationSettings: "'opsz' 36, 'SOFT' 30" }}
                  >
                    {p.title}
                  </p>
                  <p className="text-[0.84rem] text-chocolate/65 mt-1.5 leading-snug">
                    {p.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TruckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8H4v9h13v-3h4l-2-5-1.5-1H14V8Z" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h13l-3-3" />
      <path d="M20 17H7l3 3" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />
    </svg>
  );
}
