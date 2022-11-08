<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="mx-auto font-mono text-gray-700 max-w-7xl">
      <h1 class="pt-6 pl-8 text-xl">ประวัติการนำเข้า-ออก</h1>
      <div v-if="selected != null" class="pl-8 py-4 ">
        <p class="text-base">Item ID: {{selected.stock.item.itemID}}</p>
        <p class="text-base">Item Name: {{selected.stock.item.name}}</p>
        <p class="text-base">Item Quantity: {{selected.totalQuantity}}</p>
      </div>
      <div v-else class="pl-8 py-4 ">
        <p class="text-base">Item ID: </p>
        <p class="text-base">Item Name: </p>
        <p class="text-base">Item Quantity:</p>
      </div>

      <div class="flex items-center pb-0">
        <label class="p-8 pt-6 mr-5 text-lg" for="type">Select Item:</label>
        <select id="type" class="uppercase bg-gray-100 rounded-lg w-18" name="type">type
          <option value="ID">ID</option>
          <option value="name">Name</option>
        </select>
        <label class="mx-10" for="table-search"></label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"></path>
            </svg>
          </div>
          <input id="table-search"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items" type="text">
        </div>
        <button
          class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg bg-angelBaby-300  border border-angelBaby-300 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-angelBaby-200"
          type="submit">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
      <div class="flex">
        <p class="pl-8 pr-4">Filter </p>
        <div class="flex items-center mr-4">
          <input id="inline-checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox" value="">
          <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="inline-checkbox">Inbound</label>
        </div>
        <div class="flex items-center mr-4">
          <input id="inline-2-checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox" value="">
          <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="inline-2-checkbox">Outbound</label>
        </div>
      </div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-2">
        <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr class="border-t">
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Stock Id</th>
              <th scope="col" class="py-3 px-6 bg-white">Inbound Date</th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Outbound Date</th>
              <th scope="col" class="py-3 px-6 bg-white">In/Out Quantity</th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Quantity</th>
              <th scope="col" class="py-3 px-6 bg-white">Employee</th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Action</th>

            </tr>
          </thead>
          <tbody v-for="log in logs" v-bind:key="log.logID">
            <tr class="border-t">
              <th @click="logDetail(log)" scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {{ log.stock.stockID }}</th>
              <td @click="logDetail(log)" class="py-3 px-6 bg-white">{{log.productInDate}}</td>
              <td @click="logDetail(log)" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">{{log.productOutDate}}</td>
              <td @click="logDetail(log)" class="py-3 px-6 bg-white">{{log.ioquantity}}</td>
              <td @click="logDetail(log)" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">{{ log.totalQuantity}}</td>
              <td @click="logDetail(log)" class="py-3 px-6 bg-white">{{log.user.username}}</td>
              <td @click="logDetail(log)" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                <button @click="logDetail(log)" class="px-2 py-1 border rounded-xl">แก้ไข</button>
              </td>
            </tr>
          </tbody>
        </table>
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
      logs: null,
      error: null,
      sortOption: 'default',
      count: 0
    }
  },
  methods: {
    async refreshLogs(data) {
      if (data.refresh) {
        await this.log_store.fetch()
        this.logs = this.log_store.getLogs
      }
    },
    logDetail(log) {
      this.selected = log
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  },
  async mounted() {
    console.log("mounted")
    this.error = null

    try {
      await this.log_store.fetch()
      this.logs = this.log_store.getLogs
      this.logs = this.logs.reverse()
    } catch (error) {
      this.error = error.message
    }
  }

}
</script>


<style scoped>

</style>
