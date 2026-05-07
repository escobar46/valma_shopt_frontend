import type { CartLine } from "@/types/product";
import { formatCOP } from "./currency";

export const VALMA_WHATSAPP = "573203903221";

export function buildWhatsAppMessage(lines: CartLine[]): string {
  if (lines.length === 0) return "Hola Valma, quiero hacer un pedido.";

  const header = "Hola Valma · me gustaría finalizar este pedido:";
  const items = lines
    .map((l, i) => {
      const idx = String(i + 1).padStart(2, "0");
      const total = formatCOP(l.price * l.quantity);
      return `${idx}. ${l.name}\n   · Talla: ${l.size}  · Color: ${l.color}  · x${l.quantity}\n   · ${total}`;
    })
    .join("\n\n");

  const subtotal = lines.reduce((acc, l) => acc + l.price * l.quantity, 0);
  const footer = `Subtotal: ${formatCOP(subtotal)}\n\n¿Me confirmas disponibilidad y forma de envío? Gracias.`;

  return `${header}\n\n${items}\n\n${footer}`;
}

export function buildWhatsAppLink(lines: CartLine[]): string {
  const message = encodeURIComponent(buildWhatsAppMessage(lines));
  return `https://wa.me/${VALMA_WHATSAPP}?text=${message}`;
}
