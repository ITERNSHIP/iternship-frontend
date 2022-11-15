<template>
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div class="">
        <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">ฟอร์ม</p>
        <div class="mt-4">
          <p class="text-lg font-normal md:text-2xl">เลือกฟอร์มของคุณ</p>
        </div>
      </div>

      <div class="mt-5 md:mt-10">
        <div class="flex flex-col lg:flex-row gap-3 ">
          <nuxt-link to="/student/forms/internship" class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black">
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg relative">
              <p class="p-6 text-white text-xl lg:text-2xl font-medium">สมัครฝึกงาน</p>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets1.lottiefiles.com/packages/lf20_uvksaftu.json"
                style="width: 200px"
                class="absolute bottom-0 right-0 hidden xl:flex"
              ></lottie-player>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">สมัครฝึกงานกับบริษัทที่คุณสนใจ</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/student/forms/confirmed" class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black">
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg relative">
              <p class="p-6 text-white text-xl lg:text-2xl font-medium">ยืนยันได้บริษัทฝึกงาน</p>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets4.lottiefiles.com/packages/lf20_yom6uvgj.json"
                style="width: 150px"
                class="absolute bottom-0 right-4 hidden xl:flex"
              ></lottie-player>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">ยืนยันการได้บริษัทฝึกงานของคุณ</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/student/statusInternship" class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black">
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg relative">
              <p class="p-6 text-white text-xl lg:text-2xl font-medium">ตรวจสอบสถานะการสมัครฝึกงาน</p>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets1.lottiefiles.com/packages/lf20_gckvznnm.json"
                style="width: 120px"
                class="absolute bottom-0 right-0 hidden xl:flex"
              ></lottie-player>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">ตรวจสอบสถานะการสมัครบริษัทของคุณ</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import * as LottiePlayer from '@lottiefiles/lottie-player'
export default {}
</script>

<style></style>
