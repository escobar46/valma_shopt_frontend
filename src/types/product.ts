export type ProductCategory = "bodys" | "camisetas";

export interface ProductVariant {
  id: string;
  size: string;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  fabric?: string;
  images: {
    primary: string;
    /** Optional alt shot. When absent, ProductCard uses a Ken Burns hover. */
    secondary?: string;
    alt: string;
  };
  colors: { name: string; hex: string }[];
  variants: ProductVariant[];
  isNew?: boolean;
  isBestseller?: boolean;
  editorial?: string;
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
