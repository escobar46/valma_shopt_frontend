"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // TODO: integrate provider (Klaviyo, Resend, ConvertKit) when chosen.
    setTimeout(() => {
      setStatus("ok");
      setEmail("");
    }, 700);
  };

  return (
    <section className="bg-bone/60 section-pad-tight">
      <div className="container-page max-w-3xl text-center">
        <p className="eyebrow text-chocolate/55">07 · Carta de Valma</p>
        <h2
          className="font-display-italic text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.15] mt-6"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
        >
          Una nota cuando algo nuevo nazca.
        </h2>
        <p className="text-[0.95rem] text-chocolate/70 mt-4 max-w-md mx-auto leading-relaxed">
          Pre-acceso a colecciones, ediciones limitadas y notas editoriales.
          Sin spam, sin frecuencia hostil.
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
