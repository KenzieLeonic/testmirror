import { defineStore } from 'pinia'
import { authAPI } from '@/services/api'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      username: null,
      login_success: null,
     }
  },
  getters: {
    getUsername: (state) => state.username,
    isLogin: (state) => state.login_success,

  },

  actions: {
    async login (username, password) {
      var res = await authAPI.login(username, password)
      // console.log(res)

      if (res.success) {
        this.fetch()
        console.log(localStorage)
      }
      // console.log(localStorage)
      return res
    },

    async fetch () {
      this.username = localStorage.getItem("username")
      this.login_success = localStorage.getItem("login_success")
    },

    logout () {
      authAPI.logout()
      this.username = null
      this.login_success = false
    },
  }
})