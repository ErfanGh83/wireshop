/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';
import { BASE_URL } from "./constants";

export class ApiError extends Error {
  public readonly status: number;
  public readonly response: unknown;

  constructor(message: string, status: number, response: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.response = response;
  }
}

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response) {
      throw new ApiError(
        (err.response.data as any)?.message || 'Request failed',
        err.response.status,
        err.response.data
      );
    }
    if (err.request) {
      throw new ApiError('No response from server', 0, null);
    }
    throw new ApiError(err.message, 0, null);
  }
);

export async function get<T>(url: string, params?: any): Promise<T> {
  const res = await api.get<T>(url, { params });
  return res.data;
}

export async function post<T>(url: string, data: any): Promise<T> {
  const res = await api.post<T>(url, data);
  return res.data;
}


export async function put<T = any>(url: string, data?: any, config = {}) {
  try {
    const response = await api.put<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw {
        status: error.response.status,
        message: error.response.data?.message || "Server error",
      };
    } else if (error.request) {
      throw {
        status: 0,
        message: "Network error",
      };
    } else {
      throw {
        status: -1,
        message: error.message,
      };
    }
  }

  // This should never be reached
  throw new Error("Unexpected error in get()");
}

export async function del<TResponse>(
  endpoint: string,
  data?: Json,
  options: Omit<RequestInit, "method" | "body"> = {}
): Promise<TResponse> {
  const url = `${BASE_URL}${endpoint}`;
  console.log("DELETE request sent to " + url);

  const response = await fetch(url, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });

  const parsed = await safeJsonParse(response);

  if (!response.ok) {
    const message =
      typeof parsed === "object" && parsed !== null && "message" in parsed
        ? String((parsed as Record<string, unknown>).message)
        : "Request failed";
    throw new ApiError(message, response.status, parsed);
  }

  return parsed as TResponse;
}

export async function patch<TResponse>(
  endpoint: string,
  data?: Json,
  options: Omit<RequestInit, "method" | "body"> = {}
): Promise<TResponse> {
  const url = `${BASE_URL}${endpoint}`;
  console.log("PATCH request sent to " + url);

  const response = await fetch(url, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(data),
    ...options,
  });

  const parsed = await safeJsonParse(response);

  if (!response.ok) {
    const message =
      typeof parsed === "object" && parsed !== null && "message" in parsed
        ? String((parsed as Record<string, unknown>).message)
        : "Request failed";
    throw new ApiError(message, response.status, parsed);
  }

  return parsed as TResponse;
}

export async function postForm<TResponse>(
  endpoint: string,
  data: FormData,
  options: Omit<RequestInit, "method" | "body"> = {}
): Promise<TResponse> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    body: data,
    credentials: "include",
    ...options,
  });

  const parsed = await safeJsonParse(response);
  if (!response.ok) {
    const message =
      typeof parsed === "object" && parsed !== null && "message" in parsed
        ? String((parsed as Record<string, unknown>).message)
        : "Request failed";
    throw new ApiError(message, response.status, parsed);
  }

  return parsed as TResponse;
}
