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
            <div
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <select>
                <option value="" selected disabled hidden>นักศึกษาปีการศึกษา</option>
                <option value="2562">2562</option>
                <option value="2563">2563</option>
                <option value="2564">2564</option>
                <option value="2565">2565</option>
                <option value="2566">2566</option>
              </select>
            </div>
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
                  v-model="search"
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
                <th>รหัสนักศึกษา</th>
                <th>ชื่อ - นามสกุล</th>
                <th>นักศึกษาปีการศึกษา</th>
                <th>สาขาวิชา</th>
                <th>ชื่อบริษัท</th>
                <th>ตำแหน่งงาน</th>
                <th>ระยะเวลาในการฝึก</th>
                <th>เริ่มฝึกงาน</th>
                <th>จบฝึกงาน</th>
              </tr>
            </thead>
            <tbody
              v-for="(student, i) in filteredList"
              :key="student.confirmationId"
            >
              <tr>
                <th>{{ i + 1 }}</th>
                <td>{{ student.studentId }}</td>
                <td>{{ student.fullName }}</td>
                <td>{{ student.year }}</td>
                <td>{{ student.faculty }}</td>
                <td>{{ student.companyName }}</td>
                <td>{{ student.position }}</td>
                <td>{{ student.longTerm }}</td>
                <td>{{ student.durationForm }}</td>
                <td>{{ student.durationTo }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>รหัสนักศึกษา</th>
                <th>ชื่อ - นามสกุล</th>
                <th>นักศึกษาปีการศึกษา</th>
                <th>สาขาวิชา</th>
                <th>ชื่อบริษัท</th>
                <th>ตำแหน่งงาน</th>
                <th>ระยะเวลาในการฝึก</th>
                <th>เริ่มฝึกงาน</th>
                <th>จบฝึกงาน</th>
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
  data() {
    return {
      studentInfo: [],
      search: '',
    }
  },
  async mounted() {
    let accessToken = localStorage.getItem('accessToken')
    if (accessToken == null) {
      this.$router.push('/staff/login')
    }
    let studentConfirmResults = await this.$axios.$get(
      '/staff/getAllconfirmation',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    this.studentInfo = studentConfirmResults
    console.log(this.studentInfo);
  },
  computed: {
    filteredList() {
      return this.studentInfo.filter(student => {
        return student.studentId.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    }
}
</script>

<style></style>
