<template>
  <!-- <div>
    <StudentNavBar />
    <div class="container mx-auto px-16 mb-14">
      <section>
        <div class="mt-16 md:flex md:gap-x-24">
          <img
            src="https://picsum.photos/150/150"
            alt=""
            class="block ml-auto mr-auto w-2/4 rounded-lg md:ml-0 md:mr-0 md:h-[360px] md:w-[360px]"
          />
          <div class="mt-5 md:mt-0 md:self-center">
            <h1
              class="mt-5 md:mt-0 font-bold lg:text-4xl text-xl md:text-2xl md:self-center"
            >
              {{ company.companyName }}
            </h1>
            <u>ดูรายละเอียดบริษัท</u>
          </div>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งงาน</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            {{ position.title }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">รายละเอียดงาน</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            {{ position.jobDetail }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">สวัสดิ์การ</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            {{ position.welfare }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">สถานที่ปฎิบัติงาน</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            {{ position.location }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ติดต่อ</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            {{ position.contact }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">
            ตำแหน่งอื่นๆที่เปิดรับในบริษัท
          </p>
        </div>
        <section class="cursor-pointer" v-for="position in anotherPosition" :key="position.recruitId">
          <div
            class="mt-3 md:mt-6 p-4 h-auto lg:h-16 w-auto rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer bg-black shadow-xl hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <p class="text-white md:pt-2 lg:pt-0">{{ position.title }}</p>
          </div>
        </section>
      </section>
    </div>
  </div> -->
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8 md:px-24">
      <section>
        <div class="mt-8 md:flex md:gap-x-24">
          <img :src="positionData.company.imageName"
            alt=""
            class="block ml-auto mr-auto w-2/4 rounded-lg md:ml-0 md:mr-0 md:h-[250px] md:w-[250px] lg:h-[360px] lg:w-[360px] object-cover"
          />
          <div class="mt-5 md:mt-0 md:self-center">
            <h1
              class="text-center mt-5 md:mt-0 font-bold lg:text-4xl text-xl md:text-2xl md:self-center"
            >
              {{positionData.company.companyName}}
            </h1>
            <nuxt-link  :to="`/student/company/${positionData.company.companyId}`">
            <u class="hidden lg:flex">ดูรายละเอียดบริษัท</u>
            </nuxt-link>
          </div>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งงาน</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.title}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">รายละเอียดของงาน</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.jobDetail}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">สวัสดิการของบริษัท</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.welfare}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">สถานที่ปฎิบัติงาน</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.location}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">ช่องทางติดต่อบริษัท</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.contact}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">วันเปิดรับสมัคร</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.startDate}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">วันปิดรับสมัคร</p>
        </div>

        <div class="mt-1 md:mt-2">
          <p class="text-sm font-normal md:text-lg">{{position.endDate}}</p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งอื่นๆ ที่เปิดรับในบริษัทนี้</p>
        </div>
        <section v-if="anotherPositions.length <= 0 " class="mt-2 md:mt-4">
          <h1 class="text-sm font-normal md:text-lg">ไม่มีข้อมูล</h1>
        </section>
        <section class="cursor-pointer grid grid-rows-1 lg:grid-cols-3 gap-x-4 gap-y-0">
          <div v-for="anotherPosition in anotherPositions" :key="anotherPosition.recruitId">
            <nuxt-link
            :to="`/student/company/position/${anotherPosition.recruitId}`"
            class="mt-2 md:mt-4 p-4 h-auto w-auto  rounded-lg flex flex-col  md:justify-start cursor-pointer bg-black shadow-xl hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <p class="text-white">{{anotherPosition.title}}</p>
            <p class="text-error">ปิดรับสมัคร: {{anotherPosition.endDate}}</p>
          </nuxt-link>
          </div>
          
        </section>
      </section>


    </div>
    <Footer class="mt-8" />
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue';
// export default {
//   components: { StudentNavBar },
export default {
  components: { StudentNavBar, Footer },

  data() {
    return {
      positionData: {
        company: {
        companyName:''
      }
      },
      anotherPositions: [],
    }
  },
computed: {
  position(){
    return this.positionData?this.positionData:{}
  }
},
  async mounted() {
      const accessToken = localStorage.getItem('accessToken')
    const id = this.$route.params.id
//     // const companyId = '1ac111aa-dfc8-49b7-af39-d103522080e1'

    // console.log(this.$route.params.id)
    let getPosition = await this.$axios.$get(`/users/getRecruitById/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    this.positionData = getPosition
    // console.log("🚀 ~ file: index.vue ~ line 128 ~ mounted ~ getPosition", getPosition)
//     this.company = getPosition.company
//     this.companyId = getPosition.company.companyId
//     // console.log("🚀 ~ file: index.vue ~ line 128 ~ mounted ~ this.company", this.company)

    let getAnotherPosition = await this.$axios.$get('/users/findRecruitById', {
      params: {
          companyId: getPosition.company.companyId
        },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    let filterpos = getAnotherPosition.filter(pos =>pos.recruitId != id)
     this.anotherPositions = filterpos
    // this.anotherPositions = getAnotherPosition
    console.log("🚀 ~ file: index.vue ~ line 138 ~ mounted ~ getAnotherPosition", getAnotherPosition)
//   },
}
}
</script>

<style></style>
