import { defineStore } from 'pinia'
import { productAPI } from '@/services/api.js'

export const useProductStore = defineStore({
    id: 'product',
    state: () => {
      return {
        products: [],
      }
    },
    getters: {
      getProducts: (state) => state.products,
    },
    actions: {
        async fetch () {
          this.products = await productAPI.getAll()
        },
        async add (product) {
          const response = await productAPI.saveNew(product)
          if (response.success) {
            const product_id = response.product_id
            this.products.push({ ...product })
            return product_id
          }
          return false
        },
    
        delete (id) {
          this.products = this.products.filter((product) => product.id != id)
        }
      }
    
    })