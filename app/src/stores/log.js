import { defineStore } from 'pinia'
import { logAPI } from '@/services/api.js'

export const useLogStore = defineStore({
    id: 'log',
    state: () => {
      return {
        logs: [],
      }
    },
    getters: {
      getLogs: (state) => state.logs,
    },
    actions: {
        async fetch () {
          this.logs = await logAPI.getAll()
        },
        async add (log) {
          const response = await logAPI.saveNew(log)
          if (response.success) {
            const log_id = response.log_id
            this.logs.push({ ...log })
            return log_id
          }
          return false
        },
    
        delete (id) {
          this.logs = this.logs.filter((log) => log.id != id)
        }
      }
    
    })