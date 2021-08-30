// Redirects to login page when not authenticated
export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    return redirect('/login')
  }
}
