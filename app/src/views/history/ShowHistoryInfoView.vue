<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="mx-auto font-mono text-gray-700 max-w-7xl">
      <h1 class="pt-6 pl-8 text-xl">Show Item</h1>
      <div class="pl-8 pt-3">
        <p>รหัสสินค้า {{logs.stock.item.itemID}}</p>
        <div class="inline-flex">
          <p>ชื่อสินค้า Ice Cream Core</p>
          <p class="ml-10">ชื่อพนักงานที่จัดเก็บ: {{logs.user.username}}</p>
        </div>
        <div class="box-border h-full w-full p-4 border-4 bg-white shadow-lg mt-6">
          <p class="pt-10 pb-5">รายละเอียด: {{logs.stock.item.description}}</p>
          <div v-if="logs.type == 'inbound'">
            <p class="pb-5">วันที่นำเข้าล่าสุด: {{logs.productInDate}} </p>
          </div>
          <div v-else>
            <p class="pb-5"> วันที่นำออกล่าสุด: {{logs.productOutDate}}</p>
          </div>
          <p class="pb-5">จำนวนที่นำเข้า: {{logs.ioquantity}}</p>
          <p class="pb-5">วันที่หมดอายุ: {{logs.stock.expire}}</p>
          <p class="pb-5">สถานที่เก็บ: Stock{{logs.stock.stockID}}</p>
          <p class="pb-10">บริษัทที่นำเข้า: {{logs.stock.item.supplierName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useLogStore } from '@/stores/log.js'

export default {
  setup() {
    const log_store = useLogStore()
    return { log_store }
  },

  data() {
    return {
      title: "Log List",
      selected: null,
      logs: {
        type: null,
        productInDate: null,
        productOutDate: null,
        totalQuantity: null,
        productInDate: null,
        stock:{
          expire: null,
          stockID: null,
          item:{
            itemID: null,
            description: null,
            supplierName:null
          }
        },
        user:{
          username: null
        }

      },
      error: null,
      sortOption: 'default',
      count: 0
    }
  },
  watch: {},

  methods: {
    async refreshLogs(data) {
      if (data.refresh) {
        await this.log_store.fetch()
        this.logs = this.log_store.getLogs
      }
    },
  },
  async mounted() {
    console.log("mounted")
    this.error = null
    const id = this.$route.params.id

    try {
      await this.log_store.getById(id)
      this.logs = this.log_store.getLogs
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style scoped>

</style>