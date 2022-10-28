<template >
      <div v-for="product in products" :key="product.itemID">
        {{ product.itemID }}---{{ product.name }}
      </div>

      <div>
        <p>-------------------------------------------</p>
        {{ selected}}
      </div>

      <div>
        <p>-------------------------------------------</p>
        <input name="search" type="search" v-model="search"
                 class="block p-3 pl-12 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-[#B3BA1E] focus:border-blue-500"
                 placeholder="ค้นหาสินค้า" required>

        <button type="submit" @click="searchProduct">button 1</button>
      </div>

      <div>
        <button type="submit" @click="getProduct">button 2</button>
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
      searchProduct(){
        if(this.selected == "ID"){
          this.selected = this.product_store.getProductById(this.search)
        }
        if(this.selected == "Name"){
          this.selected = this.product_store.getProductByName(this.search)
        }
        
      },
      getProduct(){
        this.products = this.product_store.getProducts
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