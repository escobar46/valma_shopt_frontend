import type { Product } from "@/types/product";
import catalog from "./catalog.json";

type RawImages = { alt: string; [key: string]: string };
type RawProduct = Omit<Product, "images"> & { images: RawImages };

function buildGallery(images: RawImages): string[] {
  return Object.entries(images)
    .filter(([key]) => /^image_\d+$/.test(key))
    .sort(
      ([a], [b]) =>
        parseInt(a.replace("image_", ""), 10) -
        parseInt(b.replace("image_", ""), 10),
    )
    .map(([, src]) => src);
}

const raw = (catalog as { products: RawProduct[] }).products;

export const products: Product[] = raw.map((p) => ({
  ...p,
  images: {
    gallery: buildGallery(p.images),
    alt: p.images.alt,
  },
}));

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}
