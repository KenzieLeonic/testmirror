<template >
  <div class="p-5 pt-4 flex flex-wrap justify-between">
    <div>

      <h1 class="pl-8 pt-6 text-xl">Home</h1>
    </div>

    <div class="ml-6 my-4 pt-6 text-xl inline-block ">
      <div class="bg-white rounded-xl">
        <a class="container flex flex-wrap ">
          <div class="ml-auto pr-9">
            <select class="ml-3 rounded-lg bg-transparent border-transparent border-2 border-angelBaby-300">
              <option disabled value="">ประเภท Item </option>
              <option value="profile">ID</option>
              <option value="setting">Name</option>
              <option value="logOut">Quantity</option>
            </select>
          </div>
        </a>
      </div>
    </div>
      <form class="w-1/4 m-1">

        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input name="search" type="search" id="default-search"
                 class="block p-3 pl-12 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-[#B3BA1E] focus:border-blue-500"
                 placeholder="ค้นหาสินค้า" required>
          <button type="submit"
                  class="text-white absolute right-2.5 bottom-1.5  bg-[#B3BA1E] hover:bg-[#aeb347] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-1.5 py-1.5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
      <tr class="border-t">
        <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Item-ID</th>
        <th scope="col" class="py-3 px-6">Item Name</th>
        <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Inbound-Date</th>
        <th scope="col" class="py-3 px-6">Outbound-Date</th>
        <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Expire-Date</th>
        <th scope="col" class="py-3 px-6">Quantity</th>
      </tr>
      </thead>
      <tbody v-for="product in products" :key="product.id">
        <tr class="border-t">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{{ product.id }}</th>
          <td class="py-3 px-6 bg-white">{{ product.name }}</td>
          <td class="py-3 px-6 bg-gray-50 dark:bg-gray-800">13-10-2565</td>
          <td class="py-3 px-6 bg-white">NULL</td>
          <td class="py-3 px-6 bg-gray-50 dark:bg-gray-800">NULL</td>
          <td class="py-3 px-6 bg-white">NULL</td>
        </tr>
      </tbody>
    </table>
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