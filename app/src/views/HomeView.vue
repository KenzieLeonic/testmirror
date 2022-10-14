<template >
  <div class="p-5 pt-4 flex flex-wrap justify-between">
    <h1>Item List</h1>

    <div class="">
          <div class="bg-white rounded-xl">
            <a class="container flex flex-wrap justify-between items-center">
              <div class="ml-auto pr-9">
                <select class="ml-3 rounded-lg bg-transparent border-transparent">
                  <option disabled value="">ประเภท Iten </option>
                  <option value="profile">ID</option>
                  <option value="setting">Name</option>
                  <option value="logOut">Quantity</option>
                </select>
              </div>
            </a>
          </div>
    </div>

    <form class="w-2/4 m-1">
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

  <div class="container-fluid">
    <div class="p-5 pt-4 flex flex-wrap justify-between">
      <table class="table">
        <thead>
          <tr class="border-t">
            <th scope="col">ID</th>
            <th scope="col">Item Name</th>
            <th scope="col">InBoud-Date</th>
            <th scope="col">Outbound-date</th>
            <th scope="col">Expire-date</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t">
            <th scope="row">AOW001</th>
            <td class="py-3 px-6">Aungpor</td>
            <td class="py-3 px-6">13-10-2565</td>
            <td class="py-3 px-6">NULL</td>
            <td class="py-3 px-6">NULL</td>
            <td class="py-3 px-6">NULL</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  

</template>

<style scoped>

</style>