export default function auth({ next, store }) {
  if (!store.getters.isAuth) {
    return next({
      name: "Login",
    });
  }

  return next();
}
