
<template>
  <header>
    <nav class="bg-angelBaby-300 border-gray-200 px-2 sm:px-4 py-4 font-mono">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <RouterLink to="/" class="text-white text-2xl font-bold border-red-600">Angle Baby</RouterLink>
        <RouterLink to="/inbound" @click="toggle" class="text-white  text-2xl font-bold focus:border-b-2 border-red-600"> นำของเข้า</RouterLink>
        <RouterLink to="/outbound" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">นำของออก</RouterLink>
      <RouterLink to="/history" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">ประวัติการนำเข้า-ออก</RouterLink>
        <div v-if="auth == null" class="">
            <a href="/login" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">เข้าสู่ระบบ</a>
        </div>
        <div v-else  class="dropdown">
        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1 flex">
          <div class="bg-white rounded-xl">
            <a class="container flex flex-wrap justify-between items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" class = "ml-3" style="height: 30px; width: 30px; ">
              <div class="dropdown-content w-32 rounded-lg">
                <button class="dropbtn flex items-center mr-2 mb-1 p-2 rounded-lg">
                  <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" style="height: 30px; width: 30px; ">
                  <p class="mx-2">{{ auth.email }}</p>
                </button>
                <div class="dropdown-content w-32 rounded-lg">
                  <a href="/login" class="rounded-lg">ออกจากระบบ</a>
                </div>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/auth.js'

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
.dropbtn {
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #f9f9f9;
}
</style>