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
  const visibleSwatches = product.colors.slice(0, 4);
  const extraSwatches = product.colors.length - visibleSwatches.length;

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
        className="relative block aspect-[4/5] bg-bone overflow-hidden isolate"
      >
        <Image
          src={product.images.primary}
          alt={product.images.alt}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.04]"
          priority={priority}
        />

        {hasAlt && (
          <Image
            src={product.images.secondary!}
            alt=""
            fill
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="eyebrow bg-ivory/95 backdrop-blur px-2.5 py-1 text-chocolate">
              Nuevo
            </span>
          )}
          {product.compareAtPrice && (
            <span className="eyebrow bg-wine text-ivory px-2.5 py-1">
              Edición
            </span>
          )}
        </div>

        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[var(--ease-cinematic)]">
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd();
            }}
            className="w-full bg-ivory/95 backdrop-blur text-chocolate eyebrow py-3 hover:bg-chocolate hover:text-ivory transition-colors duration-500"
          >
            Añadir al carrito
          </button>
        </div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <Link
            href={`/product/${product.slug}`}
            className="font-display text-[1.15rem] leading-tight tracking-[-0.01em] hover:text-wine transition-colors duration-500 block"
            style={{ fontVariationSettings: "'opsz' 36" }}
          >
            {product.name}
          </Link>
          <p className="text-[0.82rem] text-chocolate/60 mt-1 leading-snug">
            {product.subtitle}
          </p>
        </div>
        <div className="text-right shrink-0">
          {product.compareAtPrice ? (
            <p className="text-sm tabular-nums">
              <span className="text-chocolate/40 line-through mr-2">
                {formatCOP(product.compareAtPrice)}
              </span>
              <span className="text-wine font-medium">{formatCOP(product.price)}</span>
            </p>
          ) : (
            <p className="text-sm tabular-nums font-medium">
              {formatCOP(product.price)}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {visibleSwatches.map((c) => (
          <span
            key={c.name}
            title={c.name}
            className="block w-3 h-3 rounded-full border border-chocolate/15 ring-offset-1 ring-offset-ivory hover:ring hover:ring-chocolate/40 transition"
            style={{ background: c.hex }}
          />
        ))}
        {extraSwatches > 0 && (
          <span className="text-[0.72rem] tabular-nums text-chocolate/55 ml-1">
            +{extraSwatches}
          </span>
        )}
      </div>
    </article>
  );
}
