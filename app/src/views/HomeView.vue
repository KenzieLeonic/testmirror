<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="mx-auto font-mono text-gray-700 max-w-7xl">
      <h1 class="pl-8 pt-6 text-xl">Home</h1>
      <div class="flex items-center pb-4">
        <label class="p-8 pt-6 mr-5 text-xl" for="type">Item List: </label>
        <select id="type" class="uppercase bg-gray-100 rounded-lg w-18" name="type">type
          <option value="ID">ID</option>
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
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
                 placeholder="Search for items"
                 type="text">
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
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr class="border-t">
            <th class="py-3 px-6 bg-gray-50 dark:bg-gray-800" scope="col">Item-ID</th>
            <th class="py-3 px-6 bg-white" scope="col">Item Name</th>
            <th class="py-3 px-6 bg-gray-50 dark:bg-gray-800" scope="col">Inbound-Date</th>
            <th class="py-3 px-6  bg-white" scope="col">Outbound-Date</th>
            <th class="py-3 px-6 bg-gray-50 dark:bg-gray-800" scope="col">Expire-Date</th>
            <th class="py-3 px-6  bg-white" scope="col">Quantity</th>
          </tr>
          </thead>
          <tbody v-for="product in products" :key="product.itemID">
          <tr :url="`/${product.id}`" class="border-t" @click:row="selectedItem(item)">
            <th class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                scope="row">
              {{ product.itemID }}
            </th>
            <td class="py-3 px-6 bg-white">{{ product.name }}</td>
            <td class="py-3 px-6 bg-gray-50 dark:bg-gray-800">NULL</td>
            <td class="py-3 px-6 bg-white">NULL</td>
            <td class="py-3 px-6 bg-gray-50 dark:bg-gray-800">NULL</td>
            <td class="py-3 px-6 bg-white">NULL</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import {useProductStore} from '@/stores/product.js'

export default {
  setup() {
    const product_store = useProductStore()
    return {product_store}
  },

  data() {
    return {
      title: "Product List",
      selected: "Name",
      search: "",
      products: null,
      error: null,
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
    searchProduct() {
      if (this.selected == "ID") {
        this.products = this.product_store.getProductById(this.search)
      }
      if (this.selected == "Name") {
        this.products = this.product_store.getProductByName(this.search)
      }

    },
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