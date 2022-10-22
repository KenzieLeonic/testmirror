<template>
<div class="absolute top-0 left-0">
  <button @click="goBack">
  <img src="../src/assets/return.png">
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