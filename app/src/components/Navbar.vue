
<template>
  <header>
    <nav class="bg-angelBaby-300 border-gray-200 px-2 sm:px-4 py-4 font-sans">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <RouterLink to="/" class="text-white text-2xl font-bold border-red-600">Angle Baby</RouterLink>
        <RouterLink to="/inbound" @click="toggle" class="text-white  text-2xl font-bold focus:border-b-2 border-red-600"> นำของเข้า</RouterLink>
        <RouterLink to="/outbound" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">นำของออก</RouterLink>
      <RouterLink to="/history" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">ประวัติการนำเข้า-ออก</RouterLink>
        <RouterLink to="/login" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">เข้าสู่ระบบ</RouterLink>
        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1 flex">
          <div class="bg-white rounded-xl">
            <a class="container flex flex-wrap justify-between items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" class = "ml-3" style="height: 30px; width: 30px; ">
              <div class="ml-auto pr-9">
                <select v-model="selected" class="ml-3 rounded-lg bg-transparent border-transparent">
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