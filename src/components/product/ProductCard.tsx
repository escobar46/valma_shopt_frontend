"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatCOP } from "@/lib/currency";
import { useCart } from "@/lib/cart-store";

interface Props {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: Props) {
  const add = useCart((s) => s.add);
  const hasAlt = Boolean(product.images.secondary);

  const onQuickAdd = () => {
    const variant = product.variants.find((v) => v.stock > 0);
    if (!variant) return;
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images.primary,
      size: variant.size,
      color: product.colors[0]?.name ?? "",
      quantity: 1,
    });
  };

  return (
    <article className="group flex flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[3/4] bg-bone overflow-hidden isolate"
      >
        {/* Primary — always visible, slow Ken Burns on hover */}
        <Image
          src={product.images.primary}
          alt={product.images.alt}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.07]"
          priority={priority}
        />

        {/* Secondary — only if provided */}
        {hasAlt && (
          <Image
            src={product.images.secondary!}
            alt=""
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}

        {/* Warm tint veil — appears on hover. Subtle champagne wash. */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-[var(--color-champagne)] mix-blend-soft-light opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        />

        {/* Tag overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="eyebrow bg-ivory/90 backdrop-blur px-2.5 py-1 text-chocolate">
              Novedad
            </span>
          )}
          {product.compareAtPrice && (
            <span className="eyebrow bg-wine text-ivory px-2.5 py-1">
              Edición
            </span>
          )}
        </div>

        {/* Quick add — slides up on hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[var(--ease-cinematic)]">
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd();
            }}
            className="w-full bg-ivory/95 backdrop-blur text-chocolate eyebrow py-3 hover:bg-chocolate hover:text-ivory transition-colors duration-500"
          >
            Añadir rápido
          </button>
        </div>
      </Link>

      {/* Meta */}
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <Link
          href={`/product/${product.slug}`}
          className="font-display text-[1.1rem] leading-tight tracking-[-0.01em] hover:text-wine transition-colors duration-500"
          style={{ fontVariationSettings: "'opsz' 36" }}
        >
          {product.name}
        </Link>
        <div className="text-right shrink-0">
          {product.compareAtPrice ? (
            <p className="text-sm tabular-nums">
              <span className="text-chocolate/40 line-through mr-2">
                {formatCOP(product.compareAtPrice)}
              </span>
              <span className="text-wine">{formatCOP(product.price)}</span>
            </p>
          ) : (
            <p className="text-sm tabular-nums">{formatCOP(product.price)}</p>
          )}
        </div>
      </div>

      <div className="mt-1.5 flex items-center justify-between">
        <p className="text-[0.78rem] text-chocolate/60">
          {product.colors.length}{" "}
          {product.colors.length === 1 ? "color" : "colores"}
        </p>
        <div className="flex gap-1.5">
          {product.colors.slice(0, 3).map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="block w-2.5 h-2.5 rounded-full border border-chocolate/15"
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
