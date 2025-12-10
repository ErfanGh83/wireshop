import { Order, OrdersResponse } from "@/types/cart";
import { del, get, patch, patchForm, post, postForm } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { Product, ProductListResponse } from "@/types/product";
import { CommentResponse } from "@/types/comment";
import { Cable } from "@/types/categories";

export async function getAllProduct() {
  return get<ProductListResponse>(API_ENDPOINTS.ALL_PRODUCT);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function patchProduct(id: string, data: FormData) {
  return patchForm(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`, data);
}

export async function getProductById(id: string) {
  return get<Product>(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`);
}

export async function postProduct(data: FormData) {
  return postForm(API_ENDPOINTS.ALL_PRODUCT, data);
}

export async function getAllOrders() {
  return get<OrdersResponse>(API_ENDPOINTS.ALL_ORDERS);
}

export async function getOrderById(id: string) {
  return get<Order>(`${API_ENDPOINTS.ORDER_BY_ID}/${id}`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createNewUser(data: any) {
  return post(API_ENDPOINTS.ADD_USER_BY_ADMIN, data);
}

export async function completeOrder(id: string) {
  return patch(`${API_ENDPOINTS.COMPLETE_ORDER}/${id}`);
}

export async function checkAdmin() {
  return get(API_ENDPOINTS.CHECK_ADMIN);
}

export async function getAllComment() {
  return get<CommentResponse>(API_ENDPOINTS.PENDING_COMMENT);
}

export async function approveComment(id: string) {
  return patch(API_ENDPOINTS.APPROVE_COMMENT + "/" + id);
}

export async function rejectComment(id: string) {
  return patch(API_ENDPOINTS.REJECT_COMMENT + "/" + id);
}

export async function getCategories() {
  return get<Cable[]>(API_ENDPOINTS.GET_CATEGORIES);
}

export async function deleteProduct(id:string) {
  return del(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`)
}