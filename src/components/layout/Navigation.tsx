"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/bodys", label: "Bodys" },
  { href: "/shop/camisetas", label: "Camisetas" },
  { href: "/edits/riviera", label: "El Edit" },
  { href: "/about", label: "Universo" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = useCart((s) => s.open);
  const count = useCart((s) => s.count());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background,backdrop-filter,border] duration-700",
        scrolled
          ? "bg-[color-mix(in_oklab,var(--color-ivory)_82%,transparent)] backdrop-blur-md border-b border-chocolate/10"
          : "bg-transparent border-b border-transparent",
      )}
      style={{ ["--ease" as string]: "var(--ease-editorial)" }}
    >
      <div className="container-page flex items-center justify-between gap-6 py-5">
        {/* Left — primary nav */}
        <nav aria-label="Principal" className="hidden lg:flex items-center gap-7 flex-1">
          {links.slice(0, 3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-chocolate hover:text-wine transition-colors duration-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col gap-[5px] p-2 -ml-2"
        >
          <span
            className={cn(
              "block h-px w-5 bg-chocolate transition-all duration-500",
              mobileOpen && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-chocolate transition-all duration-300",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-chocolate transition-all duration-500",
              mobileOpen && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>

        {/* Center — wordmark */}
        <Link
          href="/"
          aria-label="Valma — inicio"
          className="font-display font-light tracking-[0.42em] text-[1.55rem] leading-none select-none"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
        >
          VALMA
        </Link>

        {/* Right — secondary */}
        <nav aria-label="Cuenta" className="flex items-center gap-5 flex-1 justify-end">
          <div className="hidden lg:flex items-center gap-7">
            {links.slice(3).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="eyebrow text-chocolate hover:text-wine transition-colors duration-500"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            aria-label="Buscar"
            className="hidden sm:inline-flex p-1.5 hover:opacity-60 transition-opacity"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            onClick={open}
            aria-label={`Carrito (${count})`}
            className="relative inline-flex items-center gap-2 p-1.5 hover:opacity-60 transition-opacity"
          >
            <BagIcon />
            <span className="text-[0.7rem] tabular-nums tracking-wider min-w-[1ch] text-left">
              ({count})
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-700",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
        style={{ transitionTimingFunction: "var(--ease-editorial)" }}
      >
        <div className="container-page pb-8 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em] py-2 text-chocolate hover:text-wine transition-colors duration-500"
              style={{ fontVariationSettings: "'opsz' 100" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="hairline mt-4 mb-4 bg-chocolate" />
          <a
            href="https://wa.me/573203903221"
            className="eyebrow text-chocolate"
          >
            WhatsApp · +57 320 390 3221
          </a>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 7h14l-1.2 12.3a2 2 0 0 1-2 1.7H8.2a2 2 0 0 1-2-1.7L5 7Z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
