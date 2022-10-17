<template>
  <div v-if="error">
    {{ error }}
  </div>
  <form @submit.prevent="onFormSubmit()">
  <div class="h-screen md:flex">
    <div class="relative overflow-hidden md:flex w-1/2 bg-hero-pattern w-1/2 object-scale-down justify-around items-center hidden">
    </div>
    <div class="flex w-1/2 justify-center items-center bg-white">
      <form class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-10" style="text-align:center">AngelBaby</h1>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <input class="pl-2 outline-none border-none" type="text" v-model="username" id="" placeholder="Username" />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input class="pl-2 outline-none border-none" type="text" v-model="password" placeholder="Password" required/>
        </div>
        <span class="text-sm ml-auto mt-1.5 text-blue-500 hover:border-b-2 border-blue-500 cursor-pointer">Forgot Password ?</span>
        <button type="submit" :disabled="disabledButton" class="block w-full bg-angelBaby-300 mt-4 py-2 rounded-xl text-white font-semibold mb-2" :class="disabledButton ? 'bg-gray-400 ': 'bg-angelBaby-300'">Login</button>
      </form>
    </div>
  </div>
  </form>
</template>

<script>
import { useAuthStore } from "@/stores/auth.js"
export default {
  setup() {
    const auth_store = useAuthStore()
    return { auth_store }
  },
  data(){
    return {
      username: '',
      password: '',
      error: null,
      disabledButton: false
    }
  },
  methods: {
    async onFormSubmit() {
      this.error = null
      this.disabledButton = true
      //push related ไปที่หน้า home
      try {
        if (await this.auth_store.login(this.username, this.password)) {
          this.$router.push('/')
        } else {
          this.disabledButton = false
        }
      } catch (error) {
        this.error = error.message
        this.disabledButton = false
      }
    }
  },
}
</script>

<style scoped>

</style>