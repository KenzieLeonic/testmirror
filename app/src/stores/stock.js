import { defineStore } from 'pinia'
import { stockAPI } from '@/services/api.js'

export const useStockStore = defineStore({
    id: 'stock',
    state: () => {
      return {
        stocks: [],
      }
    },
    getters: {
      getStocks: (state) => state.stocks,
  
      getStockById: (state) => (stockID) => {
        return state.stocks.find(stock => stock.stockID === stockID)
      },
    },
    actions: {
        async fetch () {
          this.stocks = await stockAPI.getAll()
        },
        async getById (id) {
          this.stocks = await stockAPI.getById(id)
        },
        async add (stock) {
          const response = await stockAPI.saveNew(stock)
          if (response.success) {
            const stock_id = response.stock_id
            this.stocks.push({ ...stock })
            return stock_id
          }
          return false
        },
    
        delete (id) {
          this.stocks = this.stocks.filter((stock) => stock.id != id)
        }
      }
    
    })