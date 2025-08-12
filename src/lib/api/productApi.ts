import { ProductDetail } from "@/types/product_detail";
import { get, Json, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { CommentResponse } from "@/types/comment";

export async function getProductDetail(id: string) {
  return get<ProductDetail>(`${API_ENDPOINTS.PRODUCT_DETAIL}/${id}`);
}

export async function getProductComment(id: string) {
  return get<CommentResponse>(`${API_ENDPOINTS.PRODUCT_COMMENT}/${id}`);
}

export async function postProductComment(id: string, data:Json) {
  return post(`${API_ENDPOINTS.PRODUCT_COMMENT}/${id}`, data);
}
