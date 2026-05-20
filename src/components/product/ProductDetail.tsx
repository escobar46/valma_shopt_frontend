"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatCOP } from "@/lib/currency";
import { useCart } from "@/lib/cart-store";

interface Props {
  product: Product;
}

export function ProductDetail({ product }: Props) {
  const add = useCart((s) => s.add);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(
    product.variants.find((v) => v.stock > 0)?.size ?? product.variants[0].size,
  );
  const [quantity, setQuantity] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);

  const images = product.images.gallery;

  const currentVariant = product.variants.find((v) => v.size === selectedSize);
  const outOfStock = !currentVariant || currentVariant.stock === 0;

  const handleAdd = () => {
    if (outOfStock) return;
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: images[0],
      size: selectedSize,
      color: selectedColor.name,
      quantity,
    });
  };

  return (
    <article className="bg-ivory text-chocolate">
      {/* Breadcrumb */}
      <nav
        aria-label="Migas"
        className="container-page pt-6 lg:pt-8 pb-2"
      >
        <ol className="flex items-center gap-2 text-[0.78rem] text-chocolate/55">
          <li>
            <Link href="/" className="hover:text-chocolate transition">
              Inicio
            </Link>
          </li>
          <li aria-hidden>·</li>
          <li>
            <Link href="/shop" className="hover:text-chocolate transition">
              Tienda
            </Link>
          </li>
          <li aria-hidden>·</li>
          <li className="text-chocolate truncate">{product.name}</li>
        </ol>
      </nav>

      <div className="container-page pb-16 lg:pb-24 pt-4 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] bg-bone overflow-hidden">
              <Image
                src={images[imgIndex] ?? images[0]}
                alt={product.images.alt}
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              {(product.isNew || product.compareAtPrice) && (
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  {product.isNew && (
                    <span className="eyebrow bg-ivory/95 backdrop-blur px-3 py-1.5 text-chocolate">
                      Nuevo
                    </span>
                  )}
                  {product.compareAtPrice && (
                    <span className="eyebrow bg-wine text-ivory px-3 py-1.5">
                      Edición
                    </span>
                  )}
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                    className={`relative aspect-square bg-bone overflow-hidden transition-opacity duration-300 ${
                      i === imgIndex ? "opacity-100 ring-1 ring-chocolate" : "opacity-65 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 flex flex-col gap-7">
              <header>
                <h1
                  className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
                >
                  {product.name}
                </h1>
                <p className="text-[0.95rem] text-chocolate/65 mt-2">
                  {product.subtitle}
                </p>
                <div className="mt-5 flex items-baseline gap-3">
                  {product.compareAtPrice ? (
                    <>
                      <span className="font-display text-[1.6rem] text-wine tabular-nums">
                        {formatCOP(product.price)}
                      </span>
                      <span className="text-sm text-chocolate/40 line-through tabular-nums">
                        {formatCOP(product.compareAtPrice)}
                      </span>
                    </>
                  ) : (
                    <span className="font-display text-[1.6rem] tabular-nums">
                      {formatCOP(product.price)}
                    </span>
                  )}
                </div>
              </header>

              <div className="hairline bg-chocolate" />

              {/* Color */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <p className="eyebrow text-chocolate/55">Color</p>
                  <p className="text-[0.86rem] text-chocolate">
                    {selectedColor.name}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((c) => {
                    const active = c.name === selectedColor.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        aria-label={c.name}
                        aria-pressed={active}
                        title={c.name}
                        className={`relative w-9 h-9 rounded-full border transition ${
                          active
                            ? "border-chocolate ring-2 ring-chocolate ring-offset-2 ring-offset-ivory"
                            : "border-chocolate/20 hover:border-chocolate/50"
                        }`}
                        style={{ background: c.hex }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <p className="eyebrow text-chocolate/55">Talla</p>
                  <Link
                    href="#"
                    className="text-[0.78rem] text-chocolate/55 underline underline-offset-4 hover:text-chocolate"
                  >
                    Guía de tallas
                  </Link>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.variants.map((v) => {
                    const active = v.size === selectedSize;
                    const disabled = v.stock === 0;
                    return (
                      <button
                        key={v.id}
                        onClick={() => !disabled && setSelectedSize(v.size)}
                        disabled={disabled}
                        aria-pressed={active}
                        className={`relative py-3 text-[0.84rem] tracking-wider border transition ${
                          disabled
                            ? "border-chocolate/15 text-chocolate/30 cursor-not-allowed line-through"
                            : active
                              ? "border-chocolate bg-chocolate text-ivory"
                              : "border-chocolate/25 text-chocolate hover:border-chocolate"
                        }`}
                      >
                        {v.size}
                      </button>
                    );
                  })}
                </div>
                {currentVariant && currentVariant.stock > 0 && currentVariant.stock <= 4 && (
                  <p className="text-[0.78rem] text-wine mt-3">
                    Solo {currentVariant.stock} disponibles
                  </p>
                )}
              </div>

              {/* Quantity + Add to cart */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-flex items-center border border-chocolate/25 self-start sm:self-stretch">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Disminuir"
                    className="w-12 h-12 hover:bg-chocolate/5 transition"
                  >
                    –
                  </button>
                  <span className="w-12 text-center text-[0.95rem] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Aumentar"
                    className="w-12 h-12 hover:bg-chocolate/5 transition"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAdd}
                  disabled={outOfStock}
                  className={`flex-1 eyebrow py-4 px-6 border transition-colors duration-500 ${
                    outOfStock
                      ? "border-chocolate/20 text-chocolate/40 cursor-not-allowed"
                      : "border-chocolate bg-chocolate text-ivory hover:bg-ink hover:border-ink"
                  }`}
                >
                  {outOfStock ? "Agotado" : "Añadir al carrito"}
                </button>
              </div>

              {/* Mini trust */}
              <ul className="grid grid-cols-1 gap-2 text-[0.86rem] text-chocolate/70 mt-2">
                <li className="flex items-center gap-3">
                  <span aria-hidden className="w-1.5 h-1.5 bg-wine rounded-full" />
                  Envío gratis en Colombia desde $400.000
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden className="w-1.5 h-1.5 bg-wine rounded-full" />
                  Pago contraentrega disponible
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden className="w-1.5 h-1.5 bg-wine rounded-full" />
                  Cambios y devoluciones dentro de 15 días
                </li>
              </ul>

              <div className="hairline bg-chocolate" />

              {/* Description */}
              <div className="space-y-5">
                <div>
                  <p className="eyebrow text-chocolate/55 mb-3">Descripción</p>
                  <p className="text-[0.94rem] leading-[1.75] text-chocolate/80">
                    {product.description}
                  </p>
                </div>
                {product.fabric && (
                  <div>
                    <p className="eyebrow text-chocolate/55 mb-3">Composición</p>
                    <p className="text-[0.94rem] leading-[1.75] text-chocolate/80">
                      {product.fabric}
                    </p>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/573203903221?text=${encodeURIComponent(
                  `Hola Valma, tengo una pregunta sobre ${product.name}.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-[0.86rem] text-chocolate underline underline-offset-4 hover:text-wine transition self-start"
              >
                ¿Tienes una pregunta? Escríbenos por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
