export function isUserLoggedIn(): boolean {
  return document.cookie.includes("token=");
}