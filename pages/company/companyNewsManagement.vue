<template>
  <div>
    <CompanyNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16 flex flex-row justify-between">
        <p class="font-bold lg:text-4xl text-2xl md:text-3xl">จัดการข่าวประชาสัมพันธ์</p>
        <NewsModal :add="true" @clickAddNew="addNew"/>
      </div>

      <section v-if="!allNews">
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
          v-for="oneNews in allNews" :key="oneNews.newsId"
          class="mt-2 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between"
        >
          <p class="text-blue-blue md:pt-2 lg:pt-0">{{ oneNews.title }}</p>
          <div
            class="flex flex-col gap-2 md:flex-row md:items-center mt-3 md:mt-0"
          >
            <!-- <button class="btn btn-primary w-full md:w-20 py-1 text-white">
              ดู
            </button>
            <button class="btn btn-primary w-full md:w-20 text-white">
              แก้ไข
            </button> -->
            <NewsModal :view="true" :viewNew="oneNews" />
            <NewsModal :edit="true" :editNew="oneNews" @clickEditNew="editNew"/>
            <button class="btn btn-primary w-full md:w-20 text-white" @click="deleteNew(oneNews.newsId)">
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
      allNews: []
    }
  },

  methods:{
    async addNew(value) {
      // console.log(value)
      // console.log(this.$cookiz.get('jwt'));
      await this.$axios
        .$post('/company/add', value, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => {
          // console.log(err)
        })
      alert('เพิ่มข่าวสำเร็จ')
      this.$router.push('/company/companyNewsManagement')
      location.reload()
    },

    async editNew(value){
      let { newsId, sentEditNew } = value
      await this.$axios
        .$put(`/company/updateNews/${newsId}`, sentEditNew, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => {
          // console.log(err)
        })
      alert('แก้ไขข่าวสำเร็จ')
      this.$router.push('/company/companyNewsManagement')
      location.reload()
    },

    async deleteNew(newsId){
      var r = confirm('ต้องการลบข่าวนี้ใช่หรือไม่');
      if(r==true){
        await this.$axios
        .$delete(`/company/deleteNews/${newsId}`, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => {
          // console.log(err)
        })
        alert('ลบข่าวสำเร็จ')
        this.$router.push('/company/companyNewsManagement')
        location.reload()
      }
    }
  },

  async mounted() {
    let newsResult = await this.$axios.$get('/company/findAllNewsbyCompany/' ,{
      params:{
        companyName: this.$store.state.company.companyName
      },
      headers:{
        Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
      }
    })
    this.allNews = newsResult
    // console.log("🚀 ~ file: companyNewsManagement.vue ~ line 75 ~ mounted ~ this.allNews", this.allNews)
  },
}
</script>

<style></style>
