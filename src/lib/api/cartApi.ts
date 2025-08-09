import { Cart } from "@/types/cart";
import { del, get, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";

export async function getAllCart(): Promise<Cart> {
  return get<Cart>(API_ENDPOINTS.ACTIVE_CART);
}

export async function addCartItem(id: string, quantity: number) {
  return post(`${API_ENDPOINTS.MODIFY_CART}/${id}`, { quantity });
}

export async function removeCartItem(id: string, quantity: number) {
  return del(`${API_ENDPOINTS.MODIFY_CART}/${id}`, { quantity });
}
