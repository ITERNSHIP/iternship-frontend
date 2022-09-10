<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">ฟอร์ม</p>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-normal md:text-2xl">เลือกฟอร์มของคุณ</p>
        </div>
      </div>

      <div class="mt-5 md:mt-10">
        <div class="flex flex-col lg:flex-row gap-3 ">
          <div class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black">
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg ">
              <p class="p-6 text-white text-xl lg:text-4xl font-medium">สมัครฝึกงาน</p>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">สมัครฝึกงานกับบริษัทที่คุณสนใจ</p>
            </div>
          </div>
          <div class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black">
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg">
              <p class="p-6 text-white text-xl lg:text-4xl font-medium">ยืนยันได้บริษัทฝึกงาน</p>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">ยืนยันการได้บริษัทฝึกงานของคุณ</p>
            </div>
          </div>
          <div class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black">
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg">
              <p class="p-6 text-white text-xl lg:text-4xl font-medium">ตรวจสอบสถานะการสมัครฝึกงาน</p>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">ตรวจสอบสถานะการสมัครบริษัทของคุณ</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer class="mt-40" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
