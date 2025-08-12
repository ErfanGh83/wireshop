import { ProductCommentResponse, ProductDetail } from "@/types/product_detail";
import { get, Json, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";

export async function getProductDetail(id: string) {
  return get<ProductDetail>(`${API_ENDPOINTS.PRODUCT_DETAIL}/${id}`);
}

export async function getProductComment(id: string) {
  return get<ProductCommentResponse>(`${API_ENDPOINTS.PRODUCT_COMMENT}/${id}`);
}

export async function postProductComment(id: string, data:Json) {
  return post(`${API_ENDPOINTS.PRODUCT_COMMENT}/${id}`, data);
}
