import { API_ENDPOINTS } from "./constants";
import { post, get } from './apiClient';

export async function requestOtp(phone: string) {
  return post(API_ENDPOINTS.REQUEST_OTP, { phone });
  // Handles 200, 409, 500 errors
}

export async function verifyOtp(phone: string, code: string) {
  return post(API_ENDPOINTS.VERIFY_OTP, { phone, code });
  // Handles 200, 400, 500 errors
}

export async function createUser(phone: string, password: string, birthdate: string) {
  return post(API_ENDPOINTS.CREATE_USER, { phone, password, birthdate });
  // Handles 201 (JWT returned), 400
}

export async function login(phone: string, password: string) {
  return post(API_ENDPOINTS.LOGIN, { phone, password });
  // Handles 200 (JWT returned), 401, 404
}

export async function logout() {
  return post(API_ENDPOINTS.LOGOUT, {});
  // Handles 200
}

export async function whoAmI() {
  return get(API_ENDPOINTS.WHO_AM_I);
  // Handles 200, 401
}
