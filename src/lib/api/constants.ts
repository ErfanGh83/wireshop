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
  COMPLETE_ORDER: "/api/cart/complete"
};

export const ERROR_MESSAGES = {
  admin: {
    400: "شماره تلفن قبلا ثبت شده.",
    401: "ابتدا وارد شوید.",
    403: "دوباره با دسترسی ادمین وارد شوید.",
    404: " یافت نشد.",
    409: "محصول وجود دارد.",
    500: "خطایی از سمت سرور رخ داد.",
  },
};

export const CATEGORY_IDS = [
  "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251", // network cable
  "247b24a4-887d-416f-82c2-460aecbcb9b6", // wire & power cable
  "b1a56f01-1b41-4321-a29a-50bb2b5311fd", // coaxial cable
  "d0167d24-263c-4793-a468-9740f7d5eb2f", // fiber optic cable
  "8f1de3da-f360-48d9-a07f-50347811d225", // telecommunication cable
  "8768365a-741a-4a95-9daa-69dfe9beeaf4", // equipment
  "f1489dcd-54af-472e-8d2a-7b249ca747a1", // miscellaneous
] as const;

export const ATTRIBUTE_KEYS = [
  "f64f85d9-684f-4186-9fc4-b6be0e432ee5", // shielding
  "2fa1992c-269c-4892-9547-1065af1ce48b", // jacket
  "8144706b-7830-4916-a3c6-658e830ce3bd", // core material
  "05f1aa3f-b26f-4819-b1ba-5b0628244e3e", // test
  "775cd291-48af-417a-af58-c8aff0111cdf", // type
] as const;
