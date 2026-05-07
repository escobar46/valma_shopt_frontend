"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { lineKey, useCart } from "@/lib/cart-store";
import { formatCOP } from "@/lib/currency";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const ease = [0.16, 1, 0.3, 1] as const;

export function CartDrawer() {
  const { isOpen, close, lines, setQuantity, remove, subtotal, clear } =
    useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const total = subtotal();
  const whatsappLink = buildWhatsAppLink(lines);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            onClick={close}
            aria-hidden
          />

          <motion.aside
            key="drawer"
            role="dialog"
            aria-label="Carrito"
            className="fixed top-0 right-0 z-50 h-full w-full sm:w-[460px] bg-ivory text-chocolate flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-chocolate/10">
              <p className="eyebrow">Carrito · {lines.length}</p>
              <button
                onClick={close}
                aria-label="Cerrar carrito"
                className="p-1 hover:opacity-60 transition-opacity"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Lines */}
            {lines.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <p
                  className="font-display-italic text-[2rem] leading-tight"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  Aún sin piezas.
                </p>
                <p className="mt-4 text-sm text-chocolate/70 max-w-[28ch]">
                  Comienza explorando nuestros esenciales.
                </p>
                <Link
                  href="/shop"
                  onClick={close}
                  className="btn btn-fill-ink mt-10"
                >
                  Ver tienda
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-7">
                  {lines.map((line) => {
                    const key = lineKey(line);
                    return (
                      <div key={key} className="flex gap-4">
                        <div className="relative w-24 h-32 shrink-0 bg-bone overflow-hidden">
                          <Image
                            src={line.image}
                            alt={line.name}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between gap-3">
                            <Link
                              href={`/product/${line.slug}`}
                              onClick={close}
                              className="font-display text-[1.1rem] leading-tight"
                              style={{ fontVariationSettings: "'opsz' 36" }}
                            >
                              {line.name}
                            </Link>
                            <p className="text-sm tabular-nums whitespace-nowrap">
                              {formatCOP(line.price * line.quantity)}
                            </p>
                          </div>
                          <p className="eyebrow text-chocolate/60 mt-1">
                            {line.color} · Talla {line.size}
                          </p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="inline-flex items-center border border-chocolate/20">
                              <button
                                onClick={() =>
                                  setQuantity(key, line.quantity - 1)
                                }
                                aria-label="Disminuir"
                                className="w-8 h-8 hover:bg-chocolate/5 transition"
                              >
                                –
                              </button>
                              <span className="w-8 text-center text-sm tabular-nums">
                                {line.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  setQuantity(key, line.quantity + 1)
                                }
                                aria-label="Aumentar"
                                className="w-8 h-8 hover:bg-chocolate/5 transition"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => remove(key)}
                              className="text-[0.7rem] tracking-[0.18em] uppercase text-chocolate/60 hover:text-wine transition"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer / checkout */}
                <div className="border-t border-chocolate/10 px-6 py-6 flex flex-col gap-4 bg-bone/40">
                  <div className="flex items-baseline justify-between">
                    <p className="eyebrow">Subtotal</p>
                    <p className="font-display text-[1.4rem] tabular-nums">
                      {formatCOP(total)}
                    </p>
                  </div>
                  <p className="text-[0.78rem] text-chocolate/65 leading-relaxed">
                    Envío e impuestos se calculan al confirmar por WhatsApp.
                    Una asesora atenderá tu pedido en minutos.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-fill-ivory bg-ink text-ivory border-ink mt-1"
                  >
                    <WhatsAppIcon />
                    Finalizar por WhatsApp
                  </a>
                  <button
                    onClick={clear}
                    className="text-[0.72rem] tracking-[0.18em] uppercase text-chocolate/55 hover:text-wine transition self-center mt-1"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A10.05 10.05 0 0 0 12 2a10 10 0 0 0-8.94 14.5L2 22l5.6-1.45A10 10 0 1 0 19.05 4.9Zm-7.05 15.4a8.34 8.34 0 0 1-4.27-1.18l-.3-.18-3.31.87.88-3.23-.2-.32A8.4 8.4 0 1 1 20.4 12a8.32 8.32 0 0 1-8.4 8.31Zm4.6-6.23c-.25-.13-1.49-.74-1.72-.83s-.4-.13-.56.13-.65.83-.8 1-.3.19-.55.07a6.85 6.85 0 0 1-2-1.24 7.55 7.55 0 0 1-1.4-1.74c-.15-.25 0-.39.11-.51s.25-.3.37-.45a1.6 1.6 0 0 0 .25-.4.46.46 0 0 0 0-.45c-.07-.13-.56-1.34-.76-1.83s-.4-.42-.55-.43h-.48a.92.92 0 0 0-.67.31 2.81 2.81 0 0 0-.87 2.08 4.86 4.86 0 0 0 1 2.6 11.18 11.18 0 0 0 4.27 3.78 14.45 14.45 0 0 0 1.43.53 3.43 3.43 0 0 0 1.58.1 2.59 2.59 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.1-.23-.17-.49-.3Z" />
    </svg>
  );
}
