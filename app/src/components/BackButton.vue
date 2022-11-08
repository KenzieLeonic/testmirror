<template>
<div class="absolute top-0 left-0">
  <button @click="goBack" class="p-2">
  <img src="../assets/return.png" style="width:50px; height:50px">
  </button>
</div>

</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>