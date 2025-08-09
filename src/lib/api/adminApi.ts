import { get, Json, patch, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { Product, ProductListResponse } from "@/types/product";

export async function getAllProduct() {
  return get<ProductListResponse>(API_ENDPOINTS.ALL_PRODUCT);
}

export async function patchProduct(id: string, data: Json) {
  return patch(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`, data);
}

export async function getProductById(id: string) {
  return get<Product>(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`);
}

export async function postProduct(data: Json) {
  return post(API_ENDPOINTS.ALL_PRODUCT, data);
}

