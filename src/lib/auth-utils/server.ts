import { whoAmI } from "../api/authApi";

export async function isUserLoggedIn(): Promise<boolean> {
  let who = null
  try {
      who = await whoAmI()
  }
  catch (err) {
    console.log(err)
    who = null
  }
  console.log(who)

  return Boolean(who);
}