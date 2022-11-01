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
          if (response.success) {
            const outbound_id = response.outbound_id
            this.outbounds.push({ ...outbound })
            return outbound_id
          }
          return false
        },
    
        delete (id) {
          this.outbounds = this.outbounds.filter((outbound) => outbound.id != id)
        }
      }
    
    })