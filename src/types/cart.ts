export interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    weightKg: number;
  };
  quantity: number;
}

export interface Cart {
  address: Address;
  cost: number;
  id: string;
  items: CartItem[];
  userId: string;
}

// export interface Cart {
//   id: string;
//   userId: string;
//   status: string;
//   vehicleType: string;
//   cost: number;
//   items: CartItem[];
// }

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
  cost: number;
  address: Address;
  items: Item[];
}

export type OrdersResponse = Order[];
