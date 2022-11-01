<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="mx-auto font-mono text-gray-700 max-w-7xl">
      <BackButton class="my-20" />
      <h1 class="pt-6 pl-8 text-xl">Show Item</h1>
      <div class="pl-8 pt-3">
      <p>รหัสสินค้า #1111</p>
      <div class="inline-flex">
        <p>ชื่อสินค้า Ice Cream Core</p>
        <p class="pl-10">ชื่อพนักงานที่จัดเก็บ: สมหมาย</p>
      </div>
        <div class="box-border h-full w-full p-4 border-4 bg-white shadow-lg mt-6">
          <p class="pt-10 pb-5">รายละเอียด: ไอศกรีมรสวนิลา สอดไส้ถั่วเหลือง</p>
          <p class="pb-5">จำนวนในสต๊อก: 5</p>
          <p class="pb-5">สถานที่เก็บ:  </p>
          <p class="pb-10">บริษัทที่นำเข้า: Nesla</p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
export default {
  name: "ShowItemView",
  components: {BackButton}
}
</script>

<style scoped>

</style>