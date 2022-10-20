<template>
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div>
        <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
          ตรวจสอบสถานะฟอร์มสมัครฝึกงาน
        </p>
      </div>

      <section class="mt-4 flex flex-col">
        <div
          class="mb-3 p-4 h-auto w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
        >
          <div class="flex flex-col md:flex-row justify-between w-full">
            <div class="flex-1">
              <p class="p-1 text-lg font-bold">test</p>
            </div>

            <div>
              <div
                class="border-2 rounded-lg border-green-400 h-auto w-auto text-center p-1"
              >
                <p class="text-green-400">ผ่าน กรุณารอบริษัทติดต่อกลับ</p>
              </div>
              <!-- <div
                class="border-2 rounded-lg border-blue-blue h-auto w-auto text-center p-1"
              >
                <p class="text-blue-blue">อยู่ในระหว่างการประเมิน</p>
              </div>
              <div
                class="border-2 rounded-lg border-red-400 h-auto w-auto text-center p-1"
              >
                <p class="text-red-400">ไม่ผ่าน</p>
              </div> -->
            </div>
          </div>
        </div>

        <div
          class="mb-3 p-4 h-auto w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
        >
          <div class="flex flex-col md:flex-row justify-between w-full">
            <div class="flex-1">
              <p class="p-1 text-lg font-bold">test</p>
            </div>

            <div>
              <div
                class="border-2 rounded-lg border-green-400 h-auto w-auto text-center p-1"
              >
                <p class="text-green-400">ผ่าน กรุณารอบริษัทติดต่อกลับ</p>
              </div>
              <!-- <div
                class="border-2 rounded-lg border-blue-blue h-auto w-auto text-center p-1"
              >
                <p class="text-blue-blue">อยู่ในระหว่างการประเมิน</p>
              </div>
              <div
                class="border-2 rounded-lg border-red-400 h-auto w-auto text-center p-1"
              >
                <p class="text-red-400">ไม่ผ่าน</p>
              </div> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
export default {
  components: { StudentNavBar },
}
</script>

<style></style>
