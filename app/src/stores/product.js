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
  
      getProductById: (state) => (itemID) => {
        return state.products.filter(product => product.itemID === itemID)
      },
      getProductByName: (state) => (name) => {
        return state.products.filter(product => product.name === name)
      },

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