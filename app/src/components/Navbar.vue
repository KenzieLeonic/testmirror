<template>
  <header>
    <nav class="px-2 py-4 font-sans border-gray-200 bg-angelBaby-300 sm:px-4">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <RouterLink to="/" class="text-2xl font-bold text-white border-red-600">Angle Baby</RouterLink>
        <RouterLink to="/inbound" @click="toggle" class="text-2xl font-bold text-white border-red-600 focus:border-b-2"> นำของเข้า</RouterLink>
        <RouterLink to="/outbound" class="text-2xl font-bold text-white border-red-600 focus:border-b-2">นำของออก</RouterLink>
        <RouterLink to="/" class="text-2xl font-bold text-white border-red-600 focus:border-b-2">ประวัติการนำเข้า-ออก</RouterLink>
        <RouterLink to="/login" class="text-2xl font-bold text-white border-red-600 focus:border-b-2">เข้าสู่ระบบ</RouterLink>

        <div class="flex items-center justify-between w-full md:flex md:w-auto md:order-1">
          <div class="bg-white rounded-xl">
            <a class="container flex flex-wrap items-center justify-between">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" class = "ml-3" style="height: 30px; width: 30px; ">
              <div class="ml-auto pr-9">
                <select v-model="selected" class="ml-3 bg-transparent border-transparent rounded-lg">
                  <option disabled value="">ชื่อ user</option>
                  <option value="logOut">ออกจากระบบ</option>
                </select>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js'
export default {

  data() {
    return {
      isOpen: false,
    }
  },

  setup() {
    const auth_store = useAuthStore()
    return { auth_store }
  },
  data() {
    return {
      auth: null,
      isOpen: false,
    }
  },
  watch: {
      auth_store: {
          immediate: true,
          deep: true,
          handler(newValue, oldValue) {
            console.log(newValue.getAuth)
            this.auth = this.auth_store.getAuth
          }
      }
  },
  mounted() {
    if (this.auth_store.isAuthen) {
      this.auth = this.auth_store.getAuth
    } else {
      this.auth = null
    }
    
  }
}
</script>

<style scoped>

</style>