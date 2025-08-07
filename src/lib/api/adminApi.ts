import { get } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { ProductListResponse } from "@/types/product";

export async function getAllProduct() {
  return get<ProductListResponse>(API_ENDPOINTS.ALL_PRODUCT);
}
