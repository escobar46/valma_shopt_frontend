interface Props {
  eyebrow: string;
  title: string;
  italic: string;
  copy: string;
  count: number;
}

export function PLPHeader({ eyebrow, title, italic, copy, count }: Props) {
  return (
    <section className="bg-bone/40 pt-24 sm:pt-32 lg:pt-40 pb-12 lg:pb-16">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-chocolate/55">{eyebrow}</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h1
              className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              {title}
              <br />
              <span
                className="font-display-italic text-chocolate/60"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                {italic}
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-[0.98rem] leading-[1.7] text-chocolate/75">
              {copy}
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right md:self-end">
            <p className="eyebrow text-chocolate/55 tabular-nums">
              {count.toString().padStart(2, "0")} piezas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
