import { Cart } from "@/types/cart";
import { get } from "./apiClient";
import { API_ENDPOINTS } from "./constants";

export async function getAllCart(): Promise<Cart> {
  return get<Cart>(API_ENDPOINTS.MY_CONVERSATION);
}