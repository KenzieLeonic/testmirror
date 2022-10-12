<template>
  <header>
    <nav class="bg-[#528D58] border-gray-200 px-2 sm:px-4 py-4 font-mono">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <RouterLink to="/" class="text-white text-2xl font-bold">Angle Baby</RouterLink>
        <RouterLink to="/" class="text-white text-2xl font-bold">หน้าหลัก</RouterLink>
        <RouterLink to="/" class="text-white text-2xl font-bold">นำของเข้า</RouterLink>
        <RouterLink to="/" class="text-white text-2xl font-bold">นำของออก</RouterLink>
        <RouterLink to="/" class="text-white text-2xl font-bold">ประวัติการนำเข้า-ออก</RouterLink>
        
        

        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1 flex">
          <div class="bg-white rounded-xl">
            <a class="container flex flex-wrap justify-between items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" class = "ml-3" style="height: 30px; width: 30px; ">
              <div class="ml-auto pr-9">
                <select v-model="selected" class="ml-3 rounded-lg bg-transparent border-transparent">
                  <option disabled value="">ชื่อ user</option>
                  <option value="profile">โปรไฟล์</option>
                  <option value="setting">การตั้งค่า</option>
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
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>