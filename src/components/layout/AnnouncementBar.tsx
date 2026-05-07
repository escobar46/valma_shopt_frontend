const messages = [
  "Envío gratis a toda Colombia desde $250.000",
  "Atención por WhatsApp · +57 320 390 3221",
  "Nueva colección · El Edit Riviera",
  "Cambios y devoluciones sin costo dentro de 15 días",
];

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Anuncios"
      className="bg-ink text-ivory overflow-hidden"
    >
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {[...messages, ...messages, ...messages, ...messages].map((m, i) => (
          <span
            key={i}
            className="eyebrow px-8 inline-flex items-center"
          >
            <span className="opacity-90">{m}</span>
            <span aria-hidden className="ml-8 opacity-40">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
