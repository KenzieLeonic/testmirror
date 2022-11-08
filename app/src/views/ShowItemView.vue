<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="mx-auto font-mono text-gray-700 max-w-7xl" v-if="product">
      <BackButton class="my-20" />
      <h1 class="pt-6 pl-8 text-xl">Show Item</h1>
      <div class="pl-8 pt-3">
        <p>รหัสสินค้า #1111</p>
        <div class="inline-flex">
          <p>ชื่อสินค้า Ice Cream Core</p>
          <p class="pl-10">ชื่อพนักงานที่จัดเก็บ: สมหมาย</p>
        </div>
        <div class="box-border h-full w-full p-4 border-4 bg-white shadow-lg mt-6">
          <p class="pt-10 pb-5">รายละเอียด: {{stocks.item.description}}</p>
          <p class="pb-5">จำนวนในสต๊อก: {{stocks.quantity}}</p>
          <p class="pb-5">สถานที่เก็บ: </p>
          <p class="pb-10">บริษัทที่นำเข้า: {{stocks.item.supplierName}}</p>
        </div>
      </div>
    </div>

    <div>
      <p>test: {{stocks}}</p>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import {useStockStore} from '@/stores/stock.js'

export default {
  setup() {
    const stock_store = useStockStore()
    return {stock_store}
  },

  data() {
    return {
      title: "Stock List",
      selected: "Name",
      search: "",
      stocks: null,
      error: null,
    }
  },
  watch: {},
  components: { BackButton },
  methods: {
    async refreshStocks(data) {
      if (data.refresh) {
        await this.stock_store.fetch()
        this.stocks = this.stock_store.getStocks
      }
    },
    navigate(link){
      this.$router.push(link)
    },
  },
  async mounted() {
    console.log("mounted")
    this.error = null
    const id = this.$route.params.id

    try {
      await this.stock_store.getById(id)
      this.stocks = this.stock_store.getStocks
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style scoped>

</style>