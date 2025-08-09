export const BASE_SOCKET_URL = "ws://localhost:3001";
export const BASE_URL = "http://localhost:3001";
export const API_ENDPOINTS = {
  CREATE_USER: "/api/auth/signup/complete", //method: POST, request body: phone number, 200: Verification code sent, 409: User already exists, 500: Faild to send sms or Internal server error.
  REQUEST_OTP: "/api/auth/signup/send-code", //method: POST, request body: phone number + verfication code, 200: Phone number verified, 400: Invalid or expired code, 500: Internal server error.
  VERIFY_OTP: "/api/auth/signup/verify", //method: POST, request body: phone number + password + birthdate, 201: Signup successful (gives a JWT token), 400: Phone still not verified.
  LOGIN: "/api/auth/login", //method: POST, request body: phone number + password, 200: Login successful (gives a JWT token), 401: Invalid password, 404: User not found.
  LOGOUT: "/api/auth/logout", //method: POST, 200: Logged out successfully.
  WHO_AM_I: "/api/auth/whoami", //method: GET, 200: Current user info, 401: Unauthorized.
  PRODUCTS: "/products",
  MY_CONVERSATION: "/api/chat/my-conversation",
  ALL_CONVERSATIONS: "/api/chat",
  ALL_CART: "/api/cart",
  ALL_PRODUCT: "/api/product",
  ALL_ORDERS: "/api/cart/list",
  ORDER_BY_ID: "/api/cart",
  ADD_USER_BY_ADMIN: "/api/user/new",
};
export const ERROR_MESSAGES = {
  admin: {
    400: "شماره تلفن قبلا ثبت شده.",
    401: "ابتدا وارد شوید.",
    403: "دوباره با دسترسی ادمین وارد شوید.",
    404: "محصول یافت نشد.",
    500: "خطایی از سمت سرور رخ داد.",
  },
};