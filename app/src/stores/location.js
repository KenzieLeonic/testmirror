import { defineStore } from 'pinia'
import { locationAPI } from '@/services/api.js'

export const useLocationStore = defineStore({
    id: 'location',
    state: () => {
      return {
        locations: [],
      }
    },
    getters: {
      getLocations: (state) => state.locations,
    },
    actions: {
        async fetch () {
          this.locations = await locationAPI.getAll()
        },
        async add (location) {
          const response = await locationAPI.saveNew(location)
          if (response.success) {
            const location_id = response.location_id
            this.locations.push({ ...location })
            return location_id
          }
          return false
        },
    
        delete (id) {
          this.locations = this.locations.filter((location) => location.id != id)
        }
      }
    
    })