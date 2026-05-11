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
  images: {
    primary: string;
    /** Opcional: foto alternativa para hover. */
    secondary?: string;
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
