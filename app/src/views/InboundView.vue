<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="mx-auto font-mono text-gray-700 max-w-7xl">
      <h1 class="pt-6 pl-8 text-xl">Inbound</h1>
      <div class="flex items-center pb-4">
        <label for="type" class="p-8 pt-6 mr-5 text-xl">Select Item:</label>
        <select name="type" id="type" class="uppercase bg-gray-100 rounded-lg w-18">type
          <option value="ID">ID</option>
          <option value="name">Name</option>
        </select>
        <label for="table-search" class="mx-10"></label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="table-search"
                 class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search for items">
        </div>
        <button type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg bg-angelBaby-300  border border-angelBaby-300 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-angelBaby-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
      <div style="display: flex; justify-content: space-around">

        <div class="rounded-lg overflow-y-auto h-full relative">
          <table class="w-2/3 rounded-xl text-sm text-left text-gray-500 dark:text-gray-400 table-auto ml-10 ">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">
                ItemID
              </th>
              <th scope="col" class="py-3 px-6">
                Item Name
              </th>
              <th scope="col" class="py-3 px-6">
                Description
              </th>
            </tr>
            </thead>
            <tbody v-for="stock in stocks" v-bind:key="stock.stockID">
            <tr 
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th @click="stockDetail(stock)" scope="row" class="py-4 px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ stock.item.itemID }}

                </th>
                <td @click="stockDetail(stock)" class="py-4 px-10">
                  {{ stock.item.name }}
                </td>
                <td @click="stockDetail(stock)" class="py-4 px-10">
                  {{ stock.item.description }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="selected != null" class="grid w-1/2 h-full grid-cols-2 grid-rows-6 gap-6 p-3 my-20 border-2 x-10 bg-angelBaby-200 right-2 ">
          <h3 class="float-left text-xl text-gray-50">
            Stock ID
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            {{selected.stockID}}
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            Item ID
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            {{selected.item.itemID}}
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            Item Name
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            {{selected.item.name}}
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            Description
          </h3>
          <h3 class="float-left text-xl text-gray-50">
            {{selected.item.description}}
          </h3>

          <h3 class="float-left text-xl text-gray-50">
            Expire-Date
          </h3>
          <input v-model="expireDate" type="text" class="bg-gray-100 rounded-lg">

          <h3 class="float-left text-xl text-gray-50">
            Quantity
          </h3>
          <div class="text-gray-50">
            <button v-on:click="increment" class="border-2 rounded-lg">increment</button>
            <span class="mx-2">{{ count }}</span>
            <button v-on:click="decrement" class="border-2 rounded-lg">decrement</button>
          </div>
          <button @click="addInbound" class="px-4 py-2 font-bold text-white rounded-lg bg hover:bg-[#10122e] bg-angelBaby-300"
                  style="align-items: center;">
                  Submit
          </button>
        </div>

        <div v-else class="grid w-1/2 h-full grid-cols-2 grid-rows-6 gap-6 p-3 my-20 border-2 x-10 bg-angelBaby-200 right-2 ">
          <h3 class="float-left text-xl text-gray-50">
            Stock ID
          </h3>
          <h3> </h3>
          <h3 class="float-left text-xl text-gray-50">
            Item ID
          </h3>
          <h3> </h3>
          <h3 class="float-left text-xl text-gray-50">
            Item Name
          </h3>
          <h3> </h3>
          <h3 class="float-left text-xl text-gray-50">
            Description
          </h3>
          <h3> </h3>
          <h3 class="float-left text-xl text-gray-50">
            Expire-Date
          </h3>
          <input type="text" class="bg-gray-100 rounded-lg">
          <h3 class="float-left text-xl text-gray-50">
            Quantity
          </h3>
          <div class="text-gray-50">
            <button v-on:click="increment" class="border-2 rounded-lg">increment</button>
            <span class="mx-2">{{ count }}</span>
            <button v-on:click="decrement" class="border-2 rounded-lg">decrement</button>
          </div>
          <button class="px-4 py-2 font-bold text-white rounded-lg bg hover:bg-[#10122e] bg-angelBaby-300"
                  style="align-items: center;">
            Submit
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import {useStockStore} from '@/stores/stock.js'
import { useInboundStore } from '@/stores/inbound.js'
export default {
  setup() {
    const stock_store = useStockStore()
    const inbound_store = useInboundStore()
    return { stock_store, inbound_store }
  },

  data() {
    return {
      title: "stock List",
      selected: null,
      stocks: null,
      inbounds: '',
      error: null,
      sortOption: 'default',
      count: 0,
      expireDate: '',
      inbound:{
        type:'',
        productInDate: '',
        stock: {
          expire: '',
          quantity: '',
          itemID: ''
        },
        userID: ''
      }
    }
  },
  watch: {},
  methods: {
    async refreshStocks(data) {
      if (data.refresh) {
        await this.stock_store.fetch()
        this.stocks = this.stock_store.getStocks
      }
    },
    async refreshInbounds(data) {
      if (data.refresh) {
        await this.inbound_store.fetch()
        this.inbounds = this.inbound_store.getInbounds
      }
    },
    stockDetail(stock) {
      this.selected = stock
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async addInbound(){
      this.error = null

      console.log("clickAddInbound")
      this.inbound.type = "inbound"
      this.inbound.productInDate = "22/10/2022"
      this.inbound.stock.quantity = this.count
      this.inbound.stock.itemID = this.selected.item.itemID
      this.inbound.stock.expire = this.expireDate
      this.inbound.userID = 1

      try {
        const inbound_id = await this.inbound_store.add(this.inbound)
        if (inbound_id) {
          console.log("add complete")
          // this.$router.push(`/`)
        }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    }
  },
  async mounted() {
    console.log("mounted")
    this.error = null

    try {
      await this.stock_store.fetch()
      this.stocks = this.stock_store.getStocks

      await this.inbound_store.fetch()
      this.inbounds = this.inbound_store.getInbounds
    } catch (error) {
      this.error = error.message
    }
  }

}
</script>

<style scoped>
body {
  background-color: #E8F0FF;
}
</style>