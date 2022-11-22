<template>
  <!-- <div>
    <StaffNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Home: Staff</p>
        <div class="mt-10">
          <p class="text-3xl font-normal">What are you doing?</p>
        </div>
      </div>

      <div class="mt-10 justify-between flex flex-wrap">
        <nuxt-link to="/staff/table" class="p-2 w-1/2">
          <div>
            <div
              class="h-[379px] w-full bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100"
            >
              <p class="pl-6 pt-6 text-4xl font-medium">Watch Table</p>
              <p class="pl-6 pt-6 text-2xl font-medium text-gray-800">
                See student
              </p>
              <p class="pl-6 pt-2 text-2xl font-medium text-gray-800">
                comfirmed informations
              </p>
              <p class="absolute bottom-0 right-6">Picture</p>
            </div>
          </div>
        </nuxt-link>

        <div class="p-2 w-1/2">
          <div
            class="h-[379px] w-full bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100"
          >
            <p class="pl-6 pt-6 text-4xl font-medium">Form check</p>
            <p class="pl-6 pt-6 text-2xl font-medium text-gray-800">
              Check informations
            </p>
            <p class="pl-6 pt-2 text-2xl font-medium text-gray-800">
              to be approved and
            </p>
            <p class="pl-6 pt-2 text-2xl font-medium text-gray-800">
              sent to company
            </p>
            <p class="absolute bottom-0 right-6">Picture</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div> -->
  <div>
    <StaffNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div class="">
        <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">หนักหลัก</p>
        <div class="mt-4">
          <p class="text-lg font-normal md:text-2xl">ยินดีต้อนรับ!!</p>
        </div>
      </div>

      <div class="mt-5 md:mt-10">
        <div class="flex flex-col lg:flex-row gap-3">
          <nuxt-link
            to="/staff/news"
            class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg relative">
              <p class="p-6 text-white text-xl lg:text-2xl font-medium">
                จัดการข่าวประชาสัมพันธ์
              </p>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets7.lottiefiles.com/packages/lf20_VAcXFj87ku.json"
                style="width: 200px"
                class="absolute bottom-0 right-0 hidden xl:flex"
              ></lottie-player>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">จัดการข้อมูลข่าวประชาสัมพันธ์</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/staff/seeopenjobs"
            class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg relative">
              <p class="p-6 text-white text-xl lg:text-2xl font-medium">
                ดูงานที่เปิดรับทั้งหมด
              </p>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets6.lottiefiles.com/packages/lf20_and4mptz.json"
                style="width: 150px"
                class="absolute bottom-0 right-8 hidden xl:flex"
              ></lottie-player>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">
                ดูงานที่เปิดรับนักศึกษาฝึกงานทั้งหมดในระบบ
              </p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/staff/table"
            class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg relative">
              <p class="p-6 text-white text-xl lg:text-2xl font-medium">
                รายชื่อนักศึกษาที่ได้บริษัทฝึกงาน
              </p>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/packages/lf20_3dbxj2hv.json"
                style="width: 120px"
                class="absolute bottom-0 right-0 hidden xl:flex"
              ></lottie-player>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">ดูรายชื่อนักศึกษาที่ได้บริษัทฝึกงาน</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as LottiePlayer from '@lottiefiles/lottie-player'
import StaffNavBar from '~/components/StaffNavBar.vue'
export default { components: { StaffNavBar },
  mounted() {
    if(localStorage.getItem('role') != 'STAFF'){
      this.$router.push('/')
      
    }
  }}
</script>

<style></style>
