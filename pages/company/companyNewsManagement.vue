<template>
  <div>
    <CompanyNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16 flex flex-row justify-between">
        <p class="font-bold lg:text-4xl text-2xl md:text-3xl">จัดการข่าวประชาสัมพันธ์</p>
        <NewsModal :add="true" />
      </div>

      <section v-if="!this.news">
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

      <section class="mt-10">
        <div
          v-for="(news, index) in this.news" :key="index" 
          class="mt-2 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between"
        >
          <p class="text-blue-blue md:pt-2 lg:pt-0">{{ news.title }}</p>
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

  data(){
    return {
      news: [
        {
          id: 1,
          title: 'ข่าวประชาสัมพันธ์ 1',
          date: '2020-01-01',
          content: 'ข่าวประชาสัมพันธ์ 1'
        },
        {
          id: 2,
          title: 'ข่าวประชาสัมพันธ์ 2',
          date: '2020-01-01',
          content: 'ข่าวประชาสัมพันธ์ 2'
        },
        {
          id: 3,
          title: 'ข่าวประชาสัมพันธ์ 3',
          date: '2020-01-01',
          content: 'ข่าวประชาสัมพันธ์ 3'
        }
      ]
    }
  }
}
</script>

<style></style>
