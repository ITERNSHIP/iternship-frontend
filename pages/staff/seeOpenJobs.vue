<template>
  <div>
    <StaffNavBar />
    <section>
      <div class="flex flex-col px-8 pt-8">
        <div class="flex flex-col md:flex-row md:justify-between mb-2 md:mb-4">
          <div class="flex justify-between">
            <p class="font-bold lg:text-3xl text-xl md:text-2xl py-2">
              ดูงานที่เปิดรับทั้งหมดในระบบ
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
                  v-model="search"
                  id="table-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ค้นหาบริษัท"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="space-y-2">
          <div
            class="border-2 rounded-xl h-auto w-full bg-slate-200"
          >
            <div class="p-4">
              <div class="flex flex-col items-center md:flex-row gap-y-4 md:gap-x-12">
                <img
                  src="@/static/logo.png"
                  alt="##"
                  class="w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-xl"
                />
                <div class="self-start">
                  <p class="font-bold text-xl md:text-2xl">ชื่อบริษัท</p>
                  <p class="text-lg">งานที่เปิดรับนักศึกษาฝึกงาน</p>
                  <div class="flex flex-col mt-4">
                    <div class="flex md:flex-row flex-col">
                        <span class="mr-4 font-semibold">- ชื่อตำแหน่งงาน</span> <span class="text-error">ปิดรับสมัคร: dd-mm-yyy</span>
                    </div>
                    <div class="flex md:flex-row flex-col">
                        <span class="mr-4 font-semibold">- ชื่อตำแหน่งงาน</span> <span class="text-error">ปิดรับสมัคร: dd-mm-yyy</span>
                    </div>
                    <div class="flex md:flex-row flex-col">
                        <span class="mr-4 font-semibold">- ชื่อตำแหน่งงาน</span> <span class="text-error">ปิดรับสมัคร: dd-mm-yyy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-4 grid">
          <div
            v-for="company in filteredList"
            :key="company.companyId"
            class="card w-auto bg-base-100 shadow-xl hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <figure>
              <img
                :src="company.imageName"
                class="object-cover h-[250px] w-[250px]"
              />
            </figure>
            <div class="card-body bg-black-gray">
              <h2 class="card-title text-white bg-black-gray">
                {{ company.companyName }}
              </h2>
              <label
                :for="company.companyId"
                class="btn modal-button"
                @click="fetchData(company.companyId)"
                >ดูงานทั้งหมด</label
              >
              <input
                type="checkbox"
                :id="company.companyId"
                class="modal-toggle"
              />
              <div class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">งานที่เปิดรับนักศึกษาฝึกงาน</h3>
                  <div
                    class="py-4"
                    v-for="onePosition in openPosition"
                    :key="onePosition.recruitId"
                  >
                    <div>
                      <div class="flex md:flex-row flex-col">
                        <span class="mr-4 font-semibold"
                          >- {{ onePosition.title }}</span
                        >
                        <span class="text-error">ปิดรับสมัคร: {{ onePosition.showEndDate }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="modal-action">
                    <label :for="company.companyId" class="btn">ปิด</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-16" />
  </div>
</template>

<script>
import StaffNavBar from '~/components/StaffNavBar.vue'
import Footer from '~/components/Footer.vue'
import dayjs from 'dayjs'
export default {
  components: { StaffNavBar, Footer },
  data() {
    return {
      companyInfo: [],
      openPosition: [],
      search: '',
    }
  },
  methods: {
    fetchData(companyId) {
      let accessToken = localStorage.getItem('accessToken')
      this.$axios
        .$get('/staff/findInformbyCompanyId', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            companyId: companyId,
          },
        })
        .then((response) => {
          // console.log("🚀 ~ file: seeOpenJobs.vue ~ line 161 ~ .then ~ response", response)
          this.openPosition = response
          this.openPosition.forEach((position) => {
            position.showEndDate = dayjs(position.endDate).format('DD-MM-YYYY')
          })
        })
    },
  },

  async mounted() {
    let accessToken = localStorage.getItem('accessToken')
    if (accessToken == null) {
      this.$router.push('/login')
    }
    await this.$axios
      .$get('/staff/getAllCompany', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        this.companyInfo = res
      })
  },
  computed: {
    filteredList() {
      return this.companyInfo.filter(company => {
        return company.companyName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    }
}
</script>

<style></style>
