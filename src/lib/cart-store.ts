"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine } from "@/types/product";

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  add: (line: CartLine) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  count: () => number;
  subtotal: () => number;
}

const lineKey = (line: Pick<CartLine, "productId" | "size" | "color">) =>
  `${line.productId}::${line.size}::${line.color}`;

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      add: (line) => {
        const key = lineKey(line);
        const lines = get().lines;
        const existing = lines.find((l) => lineKey(l) === key);
        if (existing) {
          set({
            lines: lines.map((l) =>
              lineKey(l) === key ? { ...l, quantity: l.quantity + line.quantity } : l,
            ),
            isOpen: true,
          });
        } else {
          set({ lines: [...lines, line], isOpen: true });
        }
      },
      remove: (key) =>
        set({ lines: get().lines.filter((l) => lineKey(l) !== key) }),
      setQuantity: (key, quantity) =>
        set({
          lines: get()
            .lines.map((l) => (lineKey(l) === key ? { ...l, quantity } : l))
            .filter((l) => l.quantity > 0),
        }),
      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),
      count: () => get().lines.reduce((acc, l) => acc + l.quantity, 0),
      subtotal: () =>
        get().lines.reduce((acc, l) => acc + l.price * l.quantity, 0),
    }),
    {
      name: "valma-cart",
      // Persist ONLY the cart lines. Keeping isOpen out prevents the drawer
      // auto-opening on a fresh visit.
      partialize: (state) => ({ lines: state.lines }),
      // Skip auto-rehydration so the first client render matches the server
      // (both see lines=[]). We call rehydrate() manually after mount.
      skipHydration: true,
    },
  ),
);

export { lineKey };
