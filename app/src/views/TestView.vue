<template >
      <div >
        {{ inbounds }}
      </div>

      <div>
        <p>-------------------------------------------</p>
        {{ selected}}
      </div>
</template>
  
  <script>
  import { useInboundStore } from '@/stores/inbound.js'
  
  export default {
    setup() {
      const inbound_store = useInboundStore()
      return { inbound_store }
    },
    
    data() {
      return {
        title: "Inbound List",
        selected: "Name",
        search: "",
        inbounds: null,
        error: null,
      }
    },
    watch: {},
    methods: {
      async refreshInbounds(data) {
        if (data.refresh) {
          await this.inbound_store.fetch()
          this.inbounds = this.inbound_store.getInbounds
        }
      },

    },
    async mounted() {
      console.log("mounted")
      if (localStorage.getItem("login_success") == "false") {
      this.$router.push('/login')
    }
      this.error = null
  
      try {
        await this.inbound_store.fetch()
        this.inbounds = this.inbound_store.getInbounds
      } catch (error) {
        this.error = error.message
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>