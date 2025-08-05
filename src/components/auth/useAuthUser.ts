// hooks/useAuthUser.ts
"use client";

import { whoAmI, getProfile } from "@/lib/api/authApi"; // ✅ Make sure getProfile is imported
import { isUserLoggedIn } from "@/lib/auth-utils/server";
import { useEffect, useState } from "react";

export interface User {
  id: string;
  phone: string;
  birthdate: Date;
  role: string;
}

export interface UserInfo {
  user: User;
}

export interface Address {
  id: string;
  province: string;
  city: string;
  postalCode: string;
  description: string;
  plaque: string;
}

export interface FullUserInfo {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  birthdate: string; // ISO format
  role: string;
  addresses: Address[];
}

export function useAuthUser() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fullUserInfo, setFullUserInfo] = useState<FullUserInfo | null>(null); // ✅ initialized to null

  useEffect(() => {
    (async () => {
      try {
        const loggedIn = await isUserLoggedIn();
        setIsLoggedIn(loggedIn);

        if (loggedIn) {
          const info: UserInfo = await whoAmI();
          info.user.birthdate = new Date(info.user.birthdate);
          setUserInfo(info);

          // ✅ Fetch full user info
          const fullInfo: FullUserInfo = await getProfile();
          setFullUserInfo(fullInfo);
        }
      } catch (err) {
        console.log(err)
        setIsLoggedIn(false);
        setUserInfo(null);
        setFullUserInfo(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { userInfo, fullUserInfo, isLoggedIn, loading };
}
