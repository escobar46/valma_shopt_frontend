import type { Product } from "@/types/product";

/**
 * Catálogo Capítulo 01 — ocho piezas reales con su campaña.
 * Cada producto tiene una sola foto editorial (no alt shot).
 * El ProductCard maneja eso con un Ken Burns + tinte cálido al hover.
 */

export const products: Product[] = [
  {
    id: "p-amalfi",
    slug: "body-amalfi",
    name: "Body Amalfi",
    category: "bodys",
    categoryLabel: "Bodys",
    price: 169000,
    description:
      "Body en canalé de algodón pima, cuello redondo alto y sisas limpias. Caída segunda piel sin marcar costuras. La pieza que define el armario.",
    fabric: "94% algodón pima · 6% elastano",
    images: {
      primary: "/images/products/body-amalfi.png",
      alt: "Body Amalfi en ivory, modelo en villa mediterránea",
    },
    colors: [
      { name: "Ivory", hex: "#F4EFE8" },
      { name: "Chocolate", hex: "#3B2A20" },
      { name: "Ink", hex: "#0E0E0D" },
    ],
    variants: [
      { id: "p-amalfi-xs", size: "XS", stock: 8 },
      { id: "p-amalfi-s", size: "S", stock: 14 },
      { id: "p-amalfi-m", size: "M", stock: 11 },
      { id: "p-amalfi-l", size: "L", stock: 6 },
    ],
    isBestseller: true,
    editorial: "El Edit Riviera",
  },
  {
    id: "p-sole",
    slug: "body-sole",
    name: "Body Sole",
    category: "bodys",
    categoryLabel: "Bodys",
    price: 175000,
    description:
      "Body en canalé fino, escote cuadrado y manga corta. La silueta más pedida — funciona con jean, lino y noche.",
    fabric: "92% algodón pima · 8% elastano",
    images: {
      primary: "/images/products/body-sole.png",
      alt: "Body Sole en ivory, escote cuadrado",
    },
    colors: [
      { name: "Ivory", hex: "#F4EFE8" },
      { name: "Bone", hex: "#E8DFD3" },
    ],
    variants: [
      { id: "p-sole-xs", size: "XS", stock: 10 },
      { id: "p-sole-s", size: "S", stock: 16 },
      { id: "p-sole-m", size: "M", stock: 12 },
      { id: "p-sole-l", size: "L", stock: 7 },
    ],
    isBestseller: true,
  },
  {
    id: "p-capri",
    slug: "body-capri",
    name: "Body Capri",
    category: "bodys",
    categoryLabel: "Bodys",
    price: 189000,
    description:
      "Body asimétrico de un solo hombro en lycra mate. Línea limpia, escote envolvente. Para cuando el lino y el lino se encuentran.",
    fabric: "82% poliamida · 18% elastano",
    images: {
      primary: "/images/products/body-capri.png",
      alt: "Body Capri azul cielo, un solo hombro",
    },
    colors: [
      { name: "Cielo", hex: "#A9C7DC" },
      { name: "Ivory", hex: "#F4EFE8" },
    ],
    variants: [
      { id: "p-capri-xs", size: "XS", stock: 6 },
      { id: "p-capri-s", size: "S", stock: 11 },
      { id: "p-capri-m", size: "M", stock: 8 },
      { id: "p-capri-l", size: "L", stock: 4 },
    ],
    isNew: true,
  },
  {
    id: "p-riviera",
    slug: "body-riviera",
    name: "Body Riviera",
    category: "bodys",
    categoryLabel: "Bodys",
    price: 195000,
    description:
      "Halter cuello en V profundo, espalda descubierta, broches forrados. La pieza de las noches largas.",
    fabric: "90% poliamida · 10% elastano",
    images: {
      primary: "/images/products/body-riviera.png",
      alt: "Body Riviera rosa halter en yate",
    },
    colors: [
      { name: "Rosa", hex: "#F2C7C9" },
      { name: "Ivory", hex: "#F4EFE8" },
    ],
    variants: [
      { id: "p-riviera-xs", size: "XS", stock: 5 },
      { id: "p-riviera-s", size: "S", stock: 9 },
      { id: "p-riviera-m", size: "M", stock: 7 },
      { id: "p-riviera-l", size: "L", stock: 3 },
    ],
    isNew: true,
    editorial: "El Edit Riviera",
  },
  {
    id: "p-limone",
    slug: "body-limone",
    name: "Body Limone",
    category: "bodys",
    categoryLabel: "Bodys",
    price: 185000,
    description:
      "Body manga larga, cuello redondo, en jersey tejido cerrado. Cae como una segunda piel — abriga sin abultar.",
    fabric: "88% modal · 12% elastano",
    images: {
      primary: "/images/products/body-limone.png",
      alt: "Body Limone amarillo manga larga",
    },
    colors: [
      { name: "Mantequilla", hex: "#F4E4A1" },
      { name: "Ivory", hex: "#F4EFE8" },
    ],
    variants: [
      { id: "p-limone-xs", size: "XS", stock: 7 },
      { id: "p-limone-s", size: "S", stock: 10 },
      { id: "p-limone-m", size: "M", stock: 8 },
      { id: "p-limone-l", size: "L", stock: 4 },
    ],
  },
  {
    id: "p-mistral",
    slug: "body-mistral",
    name: "Body Mistral",
    category: "bodys",
    categoryLabel: "Bodys",
    price: 189000,
    description:
      "Cuello cuadrado profundo, manga larga ajustada. La pieza que da a la falda blanca su mejor versión.",
    fabric: "88% modal · 12% elastano",
    images: {
      primary: "/images/products/body-mistral.png",
      alt: "Body Mistral champagne cuello cuadrado",
    },
    colors: [
      { name: "Champagne", hex: "#D9C5A7" },
      { name: "Bone", hex: "#E8DFD3" },
    ],
    variants: [
      { id: "p-mistral-xs", size: "XS", stock: 6 },
      { id: "p-mistral-s", size: "S", stock: 12 },
      { id: "p-mistral-m", size: "M", stock: 9 },
      { id: "p-mistral-l", size: "L", stock: 5 },
    ],
    isBestseller: true,
  },
  {
    id: "p-portofino",
    slug: "camiseta-portofino",
    name: "Camiseta Portofino",
    category: "camisetas",
    categoryLabel: "Camisetas",
    price: 119000,
    description:
      "Camiseta esencial en jersey peinado. Corte ceñido suave, hombros marcados, dobladillo limpio. La compras una y la ponen tres veces por semana.",
    fabric: "100% algodón orgánico peinado",
    images: {
      primary: "/images/products/camiseta-portofino.png",
      alt: "Camiseta Portofino negra en costa rocosa",
    },
    colors: [
      { name: "Ink", hex: "#0E0E0D" },
      { name: "Ivory", hex: "#F4EFE8" },
      { name: "Chocolate", hex: "#3B2A20" },
    ],
    variants: [
      { id: "p-portofino-xs", size: "XS", stock: 12 },
      { id: "p-portofino-s", size: "S", stock: 18 },
      { id: "p-portofino-m", size: "M", stock: 15 },
      { id: "p-portofino-l", size: "L", stock: 9 },
    ],
    isBestseller: true,
  },
  {
    id: "p-cherries",
    slug: "camiseta-cherries",
    name: "Camiseta Cherries",
    category: "camisetas",
    categoryLabel: "Camisetas",
    price: 139000,
    description:
      "Camiseta cropped en jersey ligero con estampa Cherries de la temporada. Edición limitada.",
    fabric: "100% algodón orgánico",
    images: {
      primary: "/images/products/camiseta-cherries.png",
      alt: "Camiseta Cherries crop ivory con estampa",
    },
    colors: [{ name: "Ivory", hex: "#F4EFE8" }],
    variants: [
      { id: "p-cherries-xs", size: "XS", stock: 4 },
      { id: "p-cherries-s", size: "S", stock: 7 },
      { id: "p-cherries-m", size: "M", stock: 5 },
      { id: "p-cherries-l", size: "L", stock: 2 },
    ],
    isNew: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}
