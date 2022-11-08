<template>
  <div class="grid w-1/2 h-full grid-cols-2 grid-rows-6 gap-6 p-3 my-20 border-2 x-10 bg-angelBaby-200 right-2 ">
    <h3 class="float-left text-xl text-gray-50">
      Stock ID
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      001
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      Item ID
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      Apple MacBook Pro 17"
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      Item Name
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      Silvers
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      Description
    </h3>
    <h3 class="float-left text-xl text-gray-50">
      Laptop
    </h3>
  
    <h3 class="float-left text-xl text-gray-50">
      Expire-Date
    </h3>
    <input type="text" class="bg-gray-100 rounded-lg">
    <h3 class="float-left text-xl text-gray-50">
      Quantity
    </h3>
      <div class="text-gray-50">
      <button v-on:click="increment" class="border-2 rounded-lg">increment</button>
      <span class="mx-2">{{count}}</span>
      <button v-on:click="decrement" class="border-2 rounded-lg">decrement</button>
    </div>
    <button class="px-4 py-2 font-bold text-white rounded-lg bg hover:bg-[#10122e] bg-angelBaby-300" style="align-items: center;">
  Button
</button>
  </div>
</template>

<script>
export default {
  name: "Counter",

  data: () => {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style scoped>

</style>