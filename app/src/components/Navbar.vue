
<template>
  <header>
    <nav class="bg-angelBaby-300 border-gray-200 px-2 sm:px-4 py-4 font-mono">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <RouterLink to="/" class="text-white text-2xl font-bold border-red-600">Angel Baby</RouterLink>
        <RouterLink to="/inbound" @click="toggle" class="text-white  text-2xl font-bold focus:border-b-2 border-red-600"> นำของเข้า</RouterLink>
        <RouterLink to="/outbound" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">นำของออก</RouterLink>
        <RouterLink to="/history" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">ประวัติการนำเข้า-ออก</RouterLink>
        <div v-if="auth == null" class="">
            <a href="/login" class="text-white text-2xl font-bold focus:border-b-2 border-red-600">เข้าสู่ระบบ</a>
        </div>
        <div v-else class="dropdown">
            <button class="dropbtn flex items-center mr-2 mb-1 p-2 rounded-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" style="height: 30px; width: 30px; ">
                <p class="mx-2">{{ auth }}</p>
            </button>
            <div class="dropdown-content w-32 rounded-lg">
                <a href="/logout" class="rounded-lg">ออกจากระบบ</a>
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
            // console.log(newValue.getUsername)
            this.auth = this.auth_store.getUsername
          }
      }
  },
  mounted() {
    this.auth_store.fetch()
    if (this.auth_store.isLogin) {
      this.auth = this.auth_store.getUsername
      // console.log(this.auth)
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