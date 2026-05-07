"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/shop", label: "Todo" },
  { href: "/shop/bodys", label: "Bodys" },
  { href: "/shop/camisetas", label: "Camisetas" },
];

interface Props {
  total: number;
}

export function CategoryNav({ total }: Props) {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 pb-6 border-b border-chocolate/12">
      <nav aria-label="Filtrar por categoría" className="flex items-center gap-7">
        {tabs.map((t) => {
          const active = t.href === pathname;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={cn(
                "eyebrow relative pb-1 transition-colors duration-500",
                active
                  ? "text-chocolate"
                  : "text-chocolate/55 hover:text-chocolate",
              )}
            >
              {t.label}
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 right-0 -bottom-px h-px bg-chocolate transition-transform duration-500 origin-left",
                  active ? "scale-x-100" : "scale-x-0",
                )}
              />
            </Link>
          );
        })}
      </nav>
      <p className="eyebrow text-chocolate/55 tabular-nums">
        Mostrando {total.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
