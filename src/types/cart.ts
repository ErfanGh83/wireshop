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
