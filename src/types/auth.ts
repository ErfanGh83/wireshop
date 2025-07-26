// Send verification code
export interface SendCodeRequest {
  phone: string;
}

// Verify received code
export interface VerifyCodeRequest {
  phone: string;
  code: string;
}

// Complete signup
export interface CompleteSignupRequest {
  phone: string;
  password: string;
  birthdate: string; // format: YYYY-MM-DD
}

// Login request
export interface LoginRequest {
  phone: string;
  password: string;
}
