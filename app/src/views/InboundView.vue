<script>
import InboundOutboundTable from "../components/InboundOutboundTable.vue"
import InboundOutboundDetail from "../components/InboundOutboundDetail.vue"
export default {
  components: {
    InboundOutboundDetail,
    InboundOutboundTable
  }
}
</script>

<template>
  <div class="min-h-screen bg-angelBaby-100">
    <div class="font-mono mx-auto max-w-7xl text-gray-700">
      <h1 class="pl-8 pt-6 text-xl">Inbound</h1>
      <div class="flex items-center pb-4">
        <label for="type" class="p-8 pt-6 text-xl mr-5">Select Item:</label>
        <select name="type" id="type" class="bg-gray-100 uppercase rounded-lg w-18">type
        <option value = "ID">ID</option>
        <option value = "name">Name</option>
        </select>
        <label for="table-search" class="w-36"></label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
        </div>
        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg bg-angelBaby-300  border border-angelBaby-300 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-angelBaby-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
        <div style="display: flex; justify-content: space-around">
          <InboundOutboundTable />
          <InboundOutboundDetail />
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  background-color: #E8F0FF;
}
</style>