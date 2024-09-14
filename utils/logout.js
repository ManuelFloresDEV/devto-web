export function logout(router) {
  localStorage.removeItem("token");
  if (router.pathname === "/") {
    router.reload();
  }
  router.replace("/");
}
