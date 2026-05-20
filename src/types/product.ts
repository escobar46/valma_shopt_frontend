export interface ProductVariant {
  id: string;
  size: string;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Subtítulo descriptivo corto (ej. "Halter satinado", "Manga larga"). */
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  fabric?: string;
  /**
   * Galería ordenada: gallery[0] es la portada, gallery[1] el hover en
   * tarjetas, y todas se renderizan como thumbnails en el PDP. Se construye
   * en el loader desde las claves image_1, image_2, ... del catalog.json.
   */
  images: {
    gallery: string[];
    alt: string;
  };
  colors: { name: string; hex: string }[];
  variants: ProductVariant[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartLine {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}
