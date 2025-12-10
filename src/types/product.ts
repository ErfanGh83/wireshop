export interface ProductListResponse {
  data: Product[];
  page: number;
  limit: number;
  total: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  stock: number;
  images: string[];
  category: Category;
  attributes: Attribute[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Attribute {
  id: string;
  name: string;
  value: string;
}
