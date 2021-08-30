<template>
  <button @click="login">Login with SAML</button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  layout: 'login',
  methods: {
    ...mapActions({
      loginAction: 'user/login',
    }),
    async login() {
      await this.loginAction()
      this.$router.push('/')
    },
  },
})
</script>
