import { defineStore } from 'pinia'
import { outboundAPI } from '@/services/api.js'

export const useOutboundStore = defineStore({
    id: 'outbound',
    state: () => {
      return {
        outbounds: [],
      }
    },
    getters: {
      getOutbounds: (state) => state.outbounds,
    },
    actions: {
        async fetch () {
          this.outbounds = await outboundAPI.getAll()
        },
        async add (outbound) {
          const response = await outboundAPI.saveNew(outbound)
          if (response) {
            const outbound_id = response.true
            // this.outbounds.push({ ...outbound })
            return true
          }
          return false
        },
    
        delete (id) {
          this.outbounds = this.outbounds.filter((outbound) => outbound.id != id)
        }
      }
    
    })