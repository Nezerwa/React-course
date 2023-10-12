import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLogin = false;
  const response = redirect("/login?message= Are you alive or not?");
  response.body = true;
  if (!isLogin) {
    throw response;
  }
  return null;
}
