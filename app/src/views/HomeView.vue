<template >
  <div class="min-h-screen bg-angelBaby-100 pt-4 justify-content:p-5 font-mono">
    <div>
      <h1 class="pt-6 pl-8 text-xl pb-4">Item List</h1>
      <div class="flex items-center pb-4">
      <select name="type" id="type" class="bg-gray-100 uppercase rounded-lg w-18 h-10 mx-10">type
        <option value = "ID">ID</option>
        <option value = "name">Name</option>
        <option value = "name">Quantity</option>
      </select>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
        </div>
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg bg-angelBaby-300  border border-angelBaby-300 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-angelBaby-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400">
        <thead class="text-sm text-gray-700 uppercase dark:text-gray-400">
        <tr class="border-t">
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">Item-ID</th>
          <th scope="col" class="px-6 py-3 bg-white">Item Name</th>
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">Inbound-Date</th>
          <th scope="col" class="px-6 py-3 bg-white">Outbound-Date</th>
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">Expire-Date</th>
          <th scope="col" class="px-6 py-3 bg-white">Quantity</th>
        </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
        <tr class="border-t">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{{ product.id }}</th>
          <td class="px-6 py-3 bg-white">{{ product.name }}</td>
          <td class="px-6 py-3 bg-gray-50 dark:bg-gray-800">13-10-2565</td>
          <td class="px-6 py-3 bg-white">NULL</td>
          <td class="px-6 py-3 bg-gray-50 dark:bg-gray-800">NULL</td>
          <td class="px-6 py-3 bg-white">NULL</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>

</template>

<script>
import { useProductStore } from '@/stores/product.js'

export default {
  setup() {
    const product_store = useProductStore()
    return { product_store }
  },
  
  data() {
    return {
      title: "Product List",
      selected: null,
      products: null,
      error: null
    }
  },
  watch: {},
  methods: {
    async refreshProducts(data) {
      if (data.refresh) {
        await this.product_store.fetch()
        this.products = this.product_store.getProducts
      }
    },
    selectProduct(product) {
      this.$router.push({
        name: 'products.show', 
        params: { id: product.id }
      })
    }
  },
  async mounted() {
    console.log("mounted")
    this.error = null

    try {
      await this.product_store.fetch()
      this.products = this.product_store.getProducts
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style scoped>

</style>