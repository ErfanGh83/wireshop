export interface DiscountResponse {
  product: {
    id: string;
    name: string;
  };
  id: string;
  percentage: number;
  startsAt: string;
  endsAt: string;
  isActive: boolean;
}
export interface Discount {
  product: {
    id: string;
    name: string;
  };
  percentage: number;
  startsAt: string;
  endsAt: string;
  isActive: boolean;
}

export interface DiscountPost {
  productId: string;
  percentage: number;
  startsAt: string;
  endsAt: string;
  // isActive: boolean;
}
export interface DiscountPatch {
  percentage: number;
  startsAt: string;
  endsAt: string;
  isActive: boolean;
}

export interface DiscountPostRes {
  id: string;
}
