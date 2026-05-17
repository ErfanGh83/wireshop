import { ImageInterface } from "./product";

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
  unit: string;
  stock: number;
  images: ImageInterface[];
  category: Category;
  attributes: Attribute[];
}

export interface ProductDetailResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  stock: number;
  images: ImageInterface[];
  category: Category;
  discount: Discount | null;
  attributes: Attribute[];
}

export interface Discount {
  endsAt: string;
  percentage: number;
}

export interface ProductComment {
  user: string;
  content: string;
}

export type ProductCommentResponse = ProductComment[];
