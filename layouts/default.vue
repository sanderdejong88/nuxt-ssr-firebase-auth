<template>
  <main>
    <header>
      <h1>My App</h1>
      <nuxt-link to="/">Dashboard</nuxt-link>
      <nuxt-link to="/settings">Settings</nuxt-link>
      <nuxt-link to="/login">Login (should redirect)</nuxt-link>
      <button @click="logout">Logout</button>
    </header>
    <Nuxt />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  middleware: ['authenticated'],
  methods: {
    ...mapActions({
      logoutAction: 'user/logout',
    }),
    async logout() {
      await this.logoutAction()
      this.$router.push('/login')
    },
  },
})
</script>
