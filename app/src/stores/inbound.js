import { defineStore } from 'pinia'
import { inboundAPI } from '@/services/api.js'

export const useInboundStore = defineStore({
  id: 'inbound',
  state: () => {
    return {
      inbounds: [],
    }
  },
  getters: {
    getInbounds: (state) => state.inbounds,
  },
  actions: {
    async fetch() {
      this.inbounds = await inboundAPI.getAll()
    },

    async add(inbound) {
      const response = await inboundAPI.saveNew(inbound)
      if (response) {
        // const inbound_id = response.inbound_id
        // this.inbounds.push({ ...inbound })
        return true
      }
      return false
    },

    delete(id) {
      this.inbounds = this.inbounds.filter((inbound) => inbound.id != id)
    },
  }

})