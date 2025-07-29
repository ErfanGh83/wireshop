"use client";

import { whoAmI } from "@/lib/api/authApi";
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

export function useAuthUser() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const loggedIn = await isUserLoggedIn();
        setIsLoggedIn(loggedIn);

        if (loggedIn) {
          const info = await whoAmI();
          info.user.birthdate = new Date(info.user.birthdate);
          setUserInfo(info);
        }
      } catch {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { userInfo, isLoggedIn, loading };
}
