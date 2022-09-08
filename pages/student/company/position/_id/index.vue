<template>
  <div>
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
  </div>
</template>

<script>
import { throws } from 'assert'
import StudentNavBar from '~/components/StudentNavBar.vue'
export default {
  components: { StudentNavBar },

  data() {
    return {
      position: {},
      company: {},
      anotherPosition: [],
    }
  },

  async mounted() {
    const accessToken = this.$cookiz.get('jwt')
    const id = this.$route.params.id
    const companyId = '1ac111aa-dfc8-49b7-af39-d103522080e1'
    
    console.log(this.$route.params.id)
    let getPosition = await this.$axios.$get(`/users/getRecruitById/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    
    this.position = getPosition
    this.company = getPosition.company
    this.companyId = this.company.companyId
    console.log("🚀 ~ file: index.vue ~ line 128 ~ mounted ~ this.company", this.company)

    let getAnotherPosition = await this.$axios.$get('/users/findRecruitById', {
      params: {
          companyId: companyId
        },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.anotherPosition = getAnotherPosition
    console.log("🚀 ~ file: index.vue ~ line 138 ~ mounted ~ getAnotherPosition", getAnotherPosition)
  },
}
</script>

<style></style>
