export interface Category {
  id: string;
  name: string;
}

export interface Attribute {
  id: string;
  name: string;
  value: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  weightKg: number;
  stock: number;
  images: string[];
  category: Category;
  attributes: Attribute[];
}
