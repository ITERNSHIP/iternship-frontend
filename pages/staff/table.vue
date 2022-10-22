<template>
  <div>
    <StaffNavBar />
    <section>
      <div class="flex flex-col px-8 pt-8">
        <div class="flex flex-col md:flex-row md:justify-between mb-2 md:mb-4">
          <div class="flex justify-between">
            <p class="font-bold lg:text-3xl text-xl md:text-2xl py-2">
              รายชื่อนักศึกษาที่ได้บริษัทฝึกงาน
            </p>
          </div>
          <div
            class="flex xse:flex-row flex-col items-center gap-2 justify-between"
          >
            <div class="xse:w-96 w-full">
              <label for="table-search" class="sr-only">Search</label>
              <div class="relative mt-1">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ค้นหารหัสนักศึกษา"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>China</td>
                <td>8/15/2020</td>
                <td>Red</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Favorite Color</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
    <Footer class="mt-16" />
  </div>
</template>

<!-- <script>
import Footer from '~/components/Footer.vue';
export default { components: { Footer },
async asyncData({ $axios  }) {
  // const ip = await $axios.$get(`${$config.baseURL}/company/getAllCompanyStaff`)
  // const ip = await $axios.$get($config.baseURL +"/company/getAllCompanyStaff")
  // return { ip }
  const informations = await $axios.$get('/users/getAllconfirmation')
  return { informations }
}
}
</script> -->
<script>
import StaffNavBar from '../../components/StaffNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { StaffNavBar, Footer },
}
</script>

<style></style>
