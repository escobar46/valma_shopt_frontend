import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { ProductCard } from "@/components/product/ProductCard";
import { PLPHeader } from "@/components/shop/PLPHeader";
import { CategoryNav } from "@/components/shop/CategoryNav";

const validCategories = ["bodys", "camisetas"] as const satisfies readonly ProductCategory[];
type ValidCategory = (typeof validCategories)[number];

const headers: Record<ValidCategory, { eyebrow: string; title: string; italic: string; copy: string }> = {
  bodys: {
    eyebrow: "Bodys · Segunda piel",
    title: "Bodys.",
    italic: "Seis siluetas.",
    copy: "Cuello redondo, cuadrado, halter, un hombro. La pieza base que define el resto del armario. En tejidos que respiran con la piel, no encima de ella.",
  },
  camisetas: {
    eyebrow: "Camisetas · El esencial",
    title: "Camisetas.",
    italic: "Dos cortes.",
    copy: "El esencial atemporal en jersey peinado y la edición Cherries de la temporada. Las que volverás a comprar — y luego a comprar otra vez.",
  },
};

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

function isValidCategory(c: string): c is ValidCategory {
  return (validCategories as readonly string[]).includes(c);
}

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> },
): Promise<Metadata> {
  const { category } = await params;
  if (!isValidCategory(category)) return { title: "Categoría no encontrada · Valma" };
  const cap = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${cap} · Valma`,
    description: headers[category].copy,
  };
}

export default async function CategoryPage(
  { params }: { params: Promise<{ category: string }> },
) {
  const { category } = await params;
  if (!isValidCategory(category)) notFound();

  const products = getProductsByCategory(category);
  const header = headers[category];

  return (
    <>
      <PLPHeader
        eyebrow={header.eyebrow}
        title={header.title}
        italic={header.italic}
        copy={header.copy}
        count={products.length}
      />

      <section className="bg-ivory section-pad-tight">
        <div className="container-page">
          <CategoryNav total={products.length} />

          {products.length === 0 ? (
            <p
              className="font-display-italic text-[clamp(1.6rem,3vw,2.4rem)] text-chocolate/55 mt-20 text-center"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
            >
              Aún sin piezas en esta categoría.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-12 md:gap-x-4 md:gap-y-16 mt-12">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} priority={i < 4} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
