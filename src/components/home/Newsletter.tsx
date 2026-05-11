"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("ok");
      setEmail("");
    }, 700);
  };

  return (
    <section className="bg-bone/60 section-pad-tight">
      <div className="container-page max-w-2xl text-center">
        <p className="eyebrow text-chocolate/55">Mantente cerca</p>
        <h2
          className="font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.2] mt-6 tracking-[-0.015em]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
        >
          Te escribimos cuando algo nuevo nazca.
        </h2>
        <p className="text-[0.95rem] text-chocolate/70 mt-4 max-w-md mx-auto leading-relaxed">
          Pre-acceso a colecciones nuevas, ediciones limitadas como Cherries y
          alguna que otra carta cariñosa. Sin spam, palabra.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Correo
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="flex-1 bg-transparent border-b border-chocolate/40 focus:border-chocolate focus:outline-none px-1 py-3 text-[0.95rem] placeholder:text-chocolate/40"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn btn-fill-ink"
          >
            {status === "ok" ? "Recibido ✓" : "Suscribirme"}
          </button>
        </form>

        <p
          className={`text-[0.78rem] text-chocolate/55 mt-4 transition-opacity duration-500 ${
            status === "ok" ? "opacity-100" : "opacity-0"
          }`}
        >
          Te escribimos pronto.
        </p>
      </div>
    </section>
  );
}
