export interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    weightKg: number;
  };
  quantity: number;
  weightKg: number;
}

export interface Cart {
  id: string;
  userId: string;
  status: string;
  vehicleType: string;
  weightKg: number;
  cost: number;
  items: CartItem[];
}

export interface Address {
  province: string;
  city: string;
  postalCode: string;
  description: string;
  plaque: string;
  id?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  weightKg: number;
}

export interface Item {
  id: string;
  quantity: number;
  available: boolean;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  status: "sending" | "paid" | "completed";
  vehicleType: "motorcycle" | "pickup_truck";
  weightKg: number;
  cost: number;
  address: Address;
  items: Item[];
}

export type OrdersResponse = Order[];
