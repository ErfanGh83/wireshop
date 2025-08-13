import { Cart } from "@/types/cart";
import { del, get, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { Address } from "@/types/address";

export async function getAllCart(): Promise<Cart> {
  return get<Cart>(API_ENDPOINTS.ACTIVE_CART);
}

export async function addCartItem(data: any) {
  return post(API_ENDPOINTS.MODIFY_CART, data);
}

export async function removeCartItem(id: string, quantity: number) {
  return del(`${API_ENDPOINTS.MODIFY_CART}/${id}`, {}, { quantity });
}

export async function getCheckoutLink() {
  return get<string>(API_ENDPOINTS.CHECKOUT);
}

export async function postActiveAddress(data: any) {
  return post(API_ENDPOINTS.SET_ACTIVE_ADDRESS, data);
}


export async function addSelectedAddress(data: {addressId: string}) {
  return post(API_ENDPOINTS.SELECTED_ADDRESS, data);
}