<template>
  <!-- <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">หน้าหลัก</p>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-normal md:text-2xl">บริษัทที่เปิดรับนักศึกษาฝึกงาน</p>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <nuxt-link :to="`/student/company/${ company.companyId }`" class="p-2" v-for="company in companyResults" :key="company.companyId">
          <div
            class="card bg-base-100 shadow-xl hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
          >
            <figure class="h-full w-full">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body bg-black text-white">
              <h2 class="card-title">{{ company.companyName }}</h2>
              <p>เปิดรับนักศึกษาฝึกงาน</p>
              
            </div>
          </div>
        </nuxt-link>


      </div>
    </div>
    <Footer />
  </div> -->

  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div>
        <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
          บริษัทและงานที่เปิดรับนักศึกษาฝึกงาน
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
              placeholder="ค้นหาบริษัทและงาน"
            />
          </div>
        </div>
        <div class="flex gap-4 mt-0 justify-start xse:w-fit w-full">
          <div
            class="border-2 rounded-xl w-28 p-2 text-center cursor-pointer hover:bg-blue-blue transition-colors"
            @click="onClickView(false)"
            :class="[
              toggleView ? 'bg-white text-black' : 'bg-blue-blue text-white',
            ]"
          >
            <p>บริษัท</p>
          </div>
          <div
            class="border-2 rounded-xl w-28 p-2 text-center cursor-pointer hover:bg-blue-blue transition-colors"
            @click="onClickView(true)"
            :class="[
              toggleView ? 'bg-blue-blue text-white' : 'bg-white text-black',
            ]"
          >
            <p>งาน</p>
          </div>
        </div>
      </div>
      <div class="mt-8 mb-8 bg-gray-200 h-1 w-auto rounded-lg"></div>
      <div
        v-if="!toggleView"
        class="md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-4 grid"
      >
        <nuxt-link  :to="`/student/company/${company.companyId}`" v-for="company in listCompany" :key="company.companyId" class="card w-auto bg-base-100 shadow-xl hover:outline hover:outline-offset-2 hover:outline-black">
          <figure>
            <img :src="company.imageName" class="object-cover h-[250px] w-[250px]"/>
          </figure>
          <div class="card-body bg-black-gray">
            <h2 class="card-title text-white bg-black-gray">{{company.companyName}}</h2>
          </div>
        </nuxt-link>
      </div>
      <div class="min-h-screen">
        <div v-if="toggleView" class="grid lg:grid-cols-3 gap-4 mb-8">
        <nuxt-link  :to="`/student/company/position/${recruite.recruitId}`" v-for="recruite in listRecruite" :key="recruite.recruitId"  class="card card-side bg-base-100 shadow-xl hover:outline hover:outline-offset-2 hover:outline-black">
          <figure class="px-3 py-3 self-center">
            <img :src="recruite.company.imageName"
              class="rounded-xl object-cover h-20 w-20 se:h-28 se:w-28 md:h-40 md:w-40"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{recruite.title}}</h2>
            <p>{{recruite.company.companyName}}</p>
          </div>
        </nuxt-link>
      </div>
      </div>
      
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { StudentNavBar, Footer },

  data() {
    return {
      toggleView: false,
      listCompany:[],
      listRecruite:[]
    }
  },

  methods: {
    onClickView(b) {
      this.toggleView = b
    },
  },
async mounted() {
      const accessToken = localStorage.getItem('accessToken')
      let allCompany = await this.$axios.$get(`/users/getAllCompany`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
     this.listCompany =  allCompany
      let allRecruite = await this.$axios.$get(`/users/getAllRecruit`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      console.log("🚀 ~ file: index.vue ~ line 164 ~ mounted ~ allRecruite", allRecruite)
     this.listRecruite =  allRecruite
     

}
}
</script>

<style>
p {
  font-family: 'Prompt', sans-serif !important;
}
</style>
