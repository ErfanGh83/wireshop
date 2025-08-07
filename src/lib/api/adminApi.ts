import { get, Json, patch } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { ProductListResponse } from "@/types/product";

export async function getAllProduct() {
  return get<ProductListResponse>(API_ENDPOINTS.ALL_PRODUCT);
}

export async function patchProduct(id:string, data:Json) {
  return patch(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`, data)
}