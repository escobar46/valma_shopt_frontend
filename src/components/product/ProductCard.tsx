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
  const [primary, secondary] = product.images.gallery;
  const hasAlt = Boolean(secondary);
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
      image: primary,
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
          src={primary}
          alt={product.images.alt}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-cinematic)] group-hover:scale-[1.04]"
          priority={priority}
        />

        {hasAlt && (
          <Image
            src={secondary}
            alt=""
            fill
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}

        <div className="absolute top-2.5 left-2.5 md:top-3 md:left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="eyebrow bg-ivory/95 backdrop-blur px-2 md:px-2.5 py-1 text-chocolate text-[0.6rem] md:text-[0.68rem]">
              Nuevo
            </span>
          )}
          {product.compareAtPrice && (
            <span className="eyebrow bg-wine text-ivory px-2 md:px-2.5 py-1 text-[0.6rem] md:text-[0.68rem]">
              Edición
            </span>
          )}
        </div>

        {/* Quick add — hover only on desktop, hidden on mobile (cards tap straight to PDP) */}
        <div className="hidden md:block absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[var(--ease-cinematic)]">
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

      {/* Mobile: stacked. Desktop: name+subtitle left, price right. */}
      <div className="mt-3 md:mt-4 flex flex-col md:flex-row md:items-start md:justify-between md:gap-3">
        <div className="min-w-0 flex-1">
          <Link
            href={`/product/${product.slug}`}
            className="font-display text-[1.02rem] md:text-[1.15rem] leading-tight tracking-[-0.01em] hover:text-wine transition-colors duration-500 block"
            style={{ fontVariationSettings: "'opsz' 36" }}
          >
            {product.name}
          </Link>
          {/* Subtitle hidden on mobile to reduce density */}
          <p className="hidden md:block text-[0.82rem] text-chocolate/60 mt-1 leading-snug">
            {product.subtitle}
          </p>
        </div>
        <p className="text-[0.86rem] md:text-sm tabular-nums text-chocolate/85 md:text-chocolate mt-1 md:mt-0">
          {product.compareAtPrice ? (
            <>
              <span className="text-chocolate/40 line-through mr-2 hidden md:inline">
                {formatCOP(product.compareAtPrice)}
              </span>
              <span className="text-wine font-medium">
                {formatCOP(product.price)}
              </span>
            </>
          ) : (
            formatCOP(product.price)
          )}
        </p>
      </div>

      <div className="mt-2.5 md:mt-3 flex items-center gap-1.5 md:gap-2">
        {visibleSwatches.map((c) => (
          <span
            key={c.name}
            title={c.name}
            className="block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-chocolate/15"
            style={{ background: c.hex }}
          />
        ))}
        {extraSwatches > 0 && (
          <span className="text-[0.68rem] md:text-[0.72rem] tabular-nums text-chocolate/55 ml-1">
            +{extraSwatches}
          </span>
        )}
      </div>
    </article>
  );
}
