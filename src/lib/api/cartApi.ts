import { Cart } from "@/types/cart";
import { del, get, Json, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { Address } from "@/types/address";

export async function getAllCart(): Promise<Cart> {
  return get<Cart>(API_ENDPOINTS.ACTIVE_CART);
}

export async function addCartItem(data: Json) {
  return post(API_ENDPOINTS.MODIFY_CART, data);
}

export async function removeCartItem(id: string, quantity: number) {
  return del(`${API_ENDPOINTS.MODIFY_CART}/${id}`, { quantity });
}

export async function getCheckoutLink() {
  return get(API_ENDPOINTS.CHECKOUT);
}


export async function addSelectedAddress(data: {addressId: string}) {
  return post(API_ENDPOINTS.SELECTED_ADDRESS, data);
}