<template>
  <div class="md:items-center content-center rounded-lg">
    <table class="w-full rounded-xl text-sm text-left text-gray-500 dark:text-gray-400 table-auto ml-10">
      <thead class="text-lg text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="py-3 px-6">
          ItemID
        </th>
        <th scope="col" class="py-3 px-6">
          Item Name
        </th>
        <th scope="col" class="py-3 px-6">
          Description
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        <td class="py-4 px-6">
          Sliver
        </td>
        <td class="py-4 px-6">
          Laptop
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InboundOutboundTable"
}
</script>

<style scoped>

</style>