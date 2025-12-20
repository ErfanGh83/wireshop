import { whoAmI } from "../api/authApi";

export async function isUserLoggedIn(): Promise<boolean> {
  let who = null
  try {
      who = await whoAmI()
  }
  catch (err) {
    console.error(err)
    who = null
  }

  return Boolean(who);
}