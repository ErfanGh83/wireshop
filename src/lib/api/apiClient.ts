import { BASE_URL } from "./constants";

/** Generic JSON types for request/response */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

/** Custom error type for API errors */
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

/** Helper to safely parse JSON, returns `unknown` */
const safeJsonParse = async (res: Response): Promise<unknown> => {
  try {
    return await res.json();
  } catch {
    return null;
  }
};

/** POST method with strict typing */
export async function post<TResponse>(
  endpoint: string,
  data: Json,
  options: Omit<RequestInit, "method" | "body"> = {}
): Promise<TResponse> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(data),
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

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000; // 1 second between retries

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function get<TResponse>(
  endpoint: string,
  params: string = "",
  options: Omit<RequestInit, "method"> = {}
): Promise<TResponse> {
  const url = `${BASE_URL}${endpoint}?${params}`;
  console.log("get request sent to " + url);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // Optional: timeout after 8s

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        signal: controller.signal,
        ...options,
      });

      clearTimeout(timeoutId);

      const parsed = await safeJsonParse(response);

      if (!response.ok) {
        const message =
          typeof parsed === "object" && parsed !== null && "message" in parsed
            ? String((parsed as Record<string, unknown>).message)
            : "Request failed";
        throw new ApiError(message, response.status, parsed);
      }

      return parsed as TResponse;
    } catch (error) {
      const isLastAttempt = attempt === MAX_RETRIES;

      // Handle AbortError separately
      if (error === "ABORT_ERR") {
        console.warn(`Request timed out on attempt ${attempt}`);
      } else {
        console.warn(`Fetch attempt ${attempt} failed:`, error);
      }

      if (isLastAttempt) {
        throw error; // rethrow after max attempts
      }

      // Retry after delay
      await delay(RETRY_DELAY_MS);
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
  data: Json,
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
