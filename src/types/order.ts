import { IProduct } from "./products"

interface OrderItem extends IProduct {
  quantity: number
  unitPrice: number
}

type OrderStatus = "sending" | "completed";

interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  cost: number;
  address: {
    province: string;
    city: string;
    postalCode: string;
    description: string;
    plaque: string;
  };
  items: {
    id: string;
    quantity: number;
    available: boolean;
    price: number;
    product: {
      id: string;
      name: string;
      price: number;
    };
  }[];
}

export type { Order, OrderItem, OrderStatus }
