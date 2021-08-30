// Redirects to dashboard when authenticated
export default function ({ store, redirect }) {
  if (store.getters['auth/isAuthenticated']) {
    return redirect('/')
  }
}
