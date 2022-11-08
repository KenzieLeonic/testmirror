<template>
  <div v-if="error">
    {{ error }}
  </div>
    <div class="h-screen md:flex">
      <div
          class="relative items-center justify-around hidden object-scale-down w-1/2 overflow-hidden md:flex bg-hero-pattern">
      </div>
      <div class="flex items-center justify-center w-1/2 bg-white">
        <form class="bg-white" @submit.prevent="onFormSubmit()">
          <h1 class="mb-10 text-2xl font-bold text-gray-800" style="text-align:center">AngelBaby</h1>
          <div class="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
            <svg class="bi bi-person-circle" fill="currentColor" height="16" viewBox="0 0 16 16"
                 width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    fill-rule="evenodd"/>
            </svg>
            <input id="" v-model="username" class="pl-2 border-none outline-none" placeholder="Username" type="text"/>
          </div>
          <div class="flex items-center px-3 py-2 border-2 rounded-2xl">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    fill-rule="evenodd"/>
            </svg>
            <input v-model="password" class="pl-2 border-none outline-none" placeholder="Password" required
                   type="text"/>
          </div>
          <span class="text-sm ml-auto mt-1.5 text-blue-500 hover:border-b-2 border-blue-500 cursor-pointer">Forgot Password ?</span>
          <button :class="disabledButton ? 'bg-gray-400 ': 'bg-angelBaby-300'" :disabled="disabledButton"
                  class="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-angelBaby-300 rounded-xl"
                  type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import {useAuthStore} from "@/stores/auth.js"

export default {
  setup() {
    const auth_store = useAuthStore()
    return {
      auth_store
    }
  },
  data() {
    return {
      username: '',
      password: '',
      error: null,
      disabledButton: false,
    }
  },
  mounted() {
    this.auth_store.fetch()
    if (localStorage.getItem("login_success") == "true") {
      this.$router.push('/')
    }
  },
  methods: {
    async onFormSubmit() {

      this.error = null
      this.disabledButton = true
      //push related ไปที่หน้า home

      try {
        var res = await this.auth_store.login(this.username, this.password)
        console.log(res)
        if (res.success) {
          this.$router.push('/')
        } else {
          this.disabledButton = false
        }
      } catch (error) {
        this.error = error.message
        console.log(error)
        this.disabledButton = false
      }
    }
  },
}
</script>

<style scoped>

</style>