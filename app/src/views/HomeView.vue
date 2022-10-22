<template >
  <div class="p-5 pt-4 flex flex-wrap justify-between">
    <div>
      <h1 class="pl-8 pt-6 text-xl">Home</h1>
    </div>

    <div class="ml-6 my-4 pt-6 text-xl inline-block ">
      <div class="bg-white rounded-xl">
        <a class="container flex flex-wrap ">
          <div class="ml-auto pr-9">
            <select class="ml-3 rounded-lg bg-transparent border-transparent border-2 border-angelBaby-300">
              <option disabled value="">ประเภท Item </option>
              <option value="profile">ID</option>
              <option value="setting">Name</option>
              <option value="logOut">Quantity</option>
            </select>
          </div>
        </a>
      </div>
    </div>
      <form class="w-1/4 m-1">

        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input name="search" type="search" id="default-search"
                 class="block p-3 pl-12 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-[#B3BA1E] focus:border-blue-500"
                 placeholder="ค้นหาสินค้า" required>
          <button type="submit"
                  class="text-white absolute right-2.5 bottom-1.5  bg-[#B3BA1E] hover:bg-[#aeb347] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-1.5 py-1.5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr class="border-t">
          <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">ID</th>
          <th scope="col" class="py-3 px-6">Item Name</th>
          <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Inbound-Date</th>
          <th scope="col" class="py-3 px-6">Outbound-date</th>
          <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">Expire-date</th>
          <th scope="col" class="py-3 px-6">Quantity</th>
        </tr>
      </thead>
      <tbody>

      <tr v-for="product in products" :key="product.id">
       <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
          {{product.id}}
        </td>
        <td class="py-4 px-6">
          {{product.name}}
        </td>
        <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">{{product.inboundsDate}}</td>
        <td class="py-4 px-6">{{product.outboundDate}}</td>
        <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">{{product.expireDate}}</td>
        <td class="py-4 px-6">{{product.quantity}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ShowInbound from "../components/ShowInbound.vue"
import {useItemStores} from ""
export default {
  setup(){

  },
  data() {
    return {
      products: [
        {id: 'AOW001',name:'Aungpor',inboundsDate:'13-10-2565',outboundDate:'null',expireDate:'null',quantity:'null'},
        {id: 'AOW002',name:'Icecream',inboundsDate:'14-10-2565',outboundDate:'28-10-2022',expireDate:'25-10-2023',quantity:'4'},
        {id: 'AOW003',name:'Chocolate',inboundsDate:'14-10-2565',outboundDate:'28-10-2022',expireDate:'25-10-2023',quantity:'3'},
      ],
    }
  },
  props: {
    value: {
      type: [String,String,Date,Date,Date,Number],
      required:false,
      default: null
    },
  },
}
</script>

<style scoped>

</style>