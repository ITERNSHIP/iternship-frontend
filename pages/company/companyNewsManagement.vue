<template>
  <div>
    <CompanyNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-4xl text-2xl md:text-3xl">ข่าวสาร</p>
        <div class="mt-5 md:mt-10 flex flex-row justify-between">
          <p class="text-base font-normal md:text-xl self-center">
            จัดการข่าวประชาสัมพันธ์
          </p>
          <!-- <button class="btn btn-info w-20 md:w-32 text-white">เพิ่ม</button> -->
          <NewsModal :add="true" />
        </div>
      </div>

      <section>
        <div
          class="mt-5 w-auto h-[200px] bg-slate-200 rounded-lg justify-center"
        >
          <p
            class="h-[200px] text-center py-20 self-center text-base font-normal md:text-xl"
          >
            ไม่พบข้อมูล
          </p>
        </div>
      </section>

      <section>
        <div
          class="mt-10 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between"
        >
          <p class="text-blue-blue md:pt-2 lg:pt-0">หัวข้อข่าว</p>
          <div
            class="flex flex-col gap-2 md:flex-row md:items-center mt-3 md:mt-0"
          >
            <!-- <button class="btn btn-primary w-full md:w-20 py-1 text-white">
              ดู
            </button>
            <button class="btn btn-primary w-full md:w-20 text-white">
              แก้ไข
            </button> -->
            <NewsModal :view="true" />
            <NewsModal :edit="true" />
            <button class="btn btn-primary w-full md:w-20 text-white">
              ลบ
            </button>
          </div>
        </div>
      </section>

    </div>
    <Footer />
  </div>
</template>

<script>
import CompanyNavBar from '~/components/CompanyNavBar.vue'
import Footer from '~/components/Footer.vue'
import NewsModal from '~/components/company/NewsModal.vue';
export default {
  components: {
    CompanyNavBar,
    Footer,
    NewsModal
},
}
</script>

<style></style>
