"use server"

import { cookies } from "next/headers";

export async function isUserLoggedIn(): Promise<boolean> {
  const token = (await cookies()).get("token")?.value;
  return Boolean(token);
}