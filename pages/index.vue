<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 pt-14">
      <div class="flex flex-row justify-center md:justify-between">
        <div class="lg:mt-24">
          <div>
            <p class="font-bold text-xl md:text-start md:text-2xl lg:text-4xl">รวบรวมบริษัทไอทีชั้นนำ</p>
            <p class="font-bold text-xl md:text-start md:text-2xl lg:text-4xl">ที่เปิดรับสมัครนักศึกษาฝึกงาน</p>
          </div>
          <div class="mt-10">
            <p class="font-normal md:text-start md:text-lg lg:text-2xl">บริษัทที่อยู่ในเว็บไซต์นี้รวบรวมมาจาก</p>
            <p class="font-normal md:text-start md:text-lg lg:text-2xl">นักศึกษาเทคโนโลยีวารวนเทศ (SIT)</p>
            <p class="font-normal md:text-start md:text-lg lg:text-2xl">ที่ได้รับประสบการณ์การฝึกงาน</p>
          </div>
          <div class="mt-10 text-center md:text-left">
            <NuxtLink to="/student/" class="btn btn-info text-white">เข้าสู่เว็บไซต์</NuxtLink>
            <!-- <button class="btn btn-info text-white">Go to website</button> -->
          </div>
        </div>
        <div class="hidden md:flex md:h-[300px] md:w-[300px] lg:h-auto lg:w-auto">
          <img src="@/static/undraw1.png" alt="##">
        </div>
      </div>
    </div>
    <Footer class="mt-32 md:mt-28"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
.v-application{
  font-family: 'Prompt', sans-serif !important;
}
</style>
