"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart-store";

/**
 * Renders nothing. Triggers Zustand's persist rehydration on the client
 * after mount, so the first client paint matches the server (empty cart),
 * avoiding hydration mismatches. The real cart pops in on the next render.
 */
export function CartHydration() {
  useEffect(() => {
    useCart.persist.rehydrate();
  }, []);
  return null;
}
