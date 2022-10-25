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
          <h1
            class="text-center mt-5 md:mt-0 font-bold lg:text-4xl text-xl md:text-2xl md:self-center"
          >
            {{ oneCompany.companyName }}
          </h1>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ความเป็นมาของบริษัท</p>
        </div>

        <div class="mt-3 md:mt-6">
          <p class="text-sm font-normal md:text-lg">
            {{ oneCompany.companyDetail }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งที่เปิดรับ</p>
        </div>
        <section class="cursor-pointe" v-for="onePosition in positions" :key="onePosition.recruitId">
          <nuxt-link :to="`/student/company/position/${ onePosition.recruitId }`"
            class="mt-3 md:mt-6 p-4 h-auto lg:h-16 w-auto rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer bg-black shadow-xl hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <p class="text-white md:pt-2 lg:pt-0">{{ onePosition.title }}</p>
          </nuxt-link>
        </section>
      </section>
    </div>
  </div> -->
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8 md:px-24">
      <section>
        <div class="mt-8 md:flex md:gap-x-24">
          <img
            :src="oneCompany.imageName"
            alt=""
            class="block ml-auto mr-auto w-2/4 rounded-lg md:ml-0 md:mr-0 md:h-[360px] md:w-[360px] object-cover"
          />
          <h1
            class="text-center mt-5 md:mt-0 font-bold lg:text-4xl text-xl md:text-2xl md:self-center"
          >
            {{ oneCompany.companyName }}
          </h1>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">ความเป็นมาของบริษัท</p>
        </div>

        <div class="mt-2 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            {{ oneCompany.companyDetail }}
          </p>
        </div>
      </section>

      <section>
        <div class="mt-4 md:mt-8">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งที่เปิดรับ</p>
        </div>
        <section v-if="positions.length <= 0" class="mt-2 md:mt-4">
          <h1 class="text-sm font-normal md:text-lg">ไม่มีข้อมูล</h1>
        </section>
        <section class="cursor-pointer grid grid-rows-1 lg:grid-cols-3 gap-x-4 gap-y-0">
          <div v-for="position in positions" :key="position.recruitId"
          >
            <nuxt-link
              :to="`/student/company/position/${position.recruitId}`"
              class="mt-2 md:mt-4 p-4 h-auto w-auto rounded-lg flex flex-col md:justify-start cursor-pointer bg-black shadow-xl hover:outline hover:outline-offset-2 hover:outline-black"
            >
              <p class="text-white">{{ position.title }}</p>
              <p class="text-error">ปิดรับสมัคร: {{ position.endDate }}</p>
            </nuxt-link>
          </div>
        </section>
      </section>
    </div>

    <Footer class="mt-8" />
  </div>
</template>

<script>
import StudentNavBar from '@/components/StudentNavBar'
import Footer from '~/components/Footer.vue'

export default {
  components: { StudentNavBar, Footer },

  data() {
    return {
      oneCompany: {},
      positions: [],
    }
  },

  async mounted() {
    // get route params
    const accessToken = localStorage.getItem('accessToken')
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    let getThisCompany = await this.$axios.$get(
      '/users/findCompanyDetailById',
      {
        params: {
          companyId: id,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    if (getThisCompany) {
      this.oneCompany = getThisCompany[0]
    }
    // console.log("🚀 ~ file: index.vue ~ line 67 ~ mounted ~ getThisCompany", this.oneCompany)
    let getPositionsInCompany = await this.$axios.$get(
      '/users/findRecruitById',
      {
        params: {
          companyId: id,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    this.positions = getPositionsInCompany
    console.log(
      '🚀 ~ file: index.vue ~ line 138 ~ mounted ~  this.positions',
      this.positions
    )
  },
}
</script>

<style></style>
