<template>
  <div>
    <HomeNavbar />
    <div class="px-8 pt-8 md:px-24">
      <div class="flex flex-row justify-center md:justify-between">
        <div class="lg:mt-24">
          <div>
            <p class="font-bold text-xl md:text-start md:text-2xl lg:text-4xl">
              รวบรวมบริษัทไอทีชั้นนำ
            </p>
            <p class="font-bold text-xl md:text-start md:text-2xl lg:text-4xl">
              ที่เปิดรับสมัครนักศึกษาฝึกงาน
            </p>
          </div>
          <div class="mt-10">
            <p class="font-normal md:text-start md:text-lg lg:text-2xl">
              ช่วยแก้ปัญหาการหาบริษัทฝึกงาน
            </p>
            <p class="font-normal md:text-start md:text-lg lg:text-2xl">
              ให้นักศึกษาเทคโนโลยีสารสนเทศ (SIT)
            </p>
            <p class="font-normal md:text-start md:text-lg lg:text-2xl">
              เพื่อเป็นการเตรียมตัวสู่การทำงานจริง
            </p>
          </div>
      
          <div class="mt-10 text-center md:text-left">
            <NuxtLink to="/login" class="btn btn-info text-white"
              >เข้าสู่ระบบ</NuxtLink
            >
            <!-- <button class="btn btn-info text-white">Go to website</button> -->
          </div>
        </div>
        <div
          class="hidden md:flex md:h-[300px] md:w-[300px] lg:h-auto lg:w-auto"
        >
          <!-- <img src="@/static/undraw1.png" alt="##"> -->
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets3.lottiefiles.com/packages/lf20_rycdh53q.json"
            style="width: 500px"
          ></lottie-player>
        </div>
      </div>
    </div>
    <!-- <Footer class="w-full bottom-0 mt-36" /> -->
  </div>
</template>

<script>
import * as LottiePlayer from '@lottiefiles/lottie-player'
import HomeNavbar from '~/components/HomeNavbar.vue'
export default {
  name: 'IndexPage',
  components: { HomeNavbar },
}
</script>

<style>
.v-application {
  font-family: 'Prompt', sans-serif !important;
}
</style>
