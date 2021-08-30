export const state = () => ({
  user: undefined
});

export const getters = {
  isAuthenticated(state) {
    return !!state.user && !!state.user.uid;
  }
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    console.log('ON_AUTH_STATE_CHANGED_MUTATION');
    if (!authUser) {
      state.user = undefined;
      return;
    }

    const { uid, email, emailVerified, displayName, photoURL } = authUser

    state.user = {
      uid,
      displayName,
      email,
      emailVerified,
      photoURL: photoURL || null
    }
  },
  SET_USER: (state, user) => {
    state.user = user;
  }
}

export const actions = {
  async login({ commit }) {
    try {
      const provider = new this.$fireModule.auth.SAMLAuthProvider('saml.intracto');
      const { user } = await this.$fire.auth.signInWithPopup(provider);
      const { uid, email, emailVerified, displayName, photoURL } = user;

      commit('SET_USER', {
        uid,
        email,
        emailVerified,
        displayName,
        photoURL
      })
    } catch (error) {
      console.error(error);
    }
  },

  logout() {
    return this.$fire.auth.signOut();
  },

  onAuthStateChangedAction({ commit }, { authUser }) {
    console.log('onAuthStateChangedAction');
    if (!authUser) {
      // claims = null
      // Perform logout operations
      commit('SET_USER', undefined);
      return;
    }

    const { uid, email, emailVerified, displayName, photoURL } = authUser

    commit('SET_USER', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL
    })

  }
}
