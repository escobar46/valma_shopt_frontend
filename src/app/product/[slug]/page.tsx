import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/product/ProductDetail";
import { ProductCard } from "@/components/product/ProductCard";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado · Valma" };
  return {
    title: `${product.name} · Valma`,
    description: product.description,
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getAllProducts()
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} />

      {/* Related */}
      <section className="bg-bone/30 section-pad-tight">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
            <h2
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.015em]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
            >
              También podría gustarte
            </h2>
            <Link
              href="/shop"
              className="eyebrow text-chocolate hover:text-wine transition hidden sm:inline-flex"
            >
              Ver tienda →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5 md:gap-y-14">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
