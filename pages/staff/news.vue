<template>
  <div>
    <StaffNavBar />
    <section>
      <div class="flex flex-col px-8 pt-8">
        <div class="flex justify-between">
          <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
            จัดการข่าวประชาสัมพันธ์
          </p>
          <AddNews @add-news="addNews" />
        </div>
        <div class="flex flex-col">
          <div class="mt-4 space-y-2" v-for="oneNew in newsInfo" :key="oneNew.newsId">
            <ViewNews :news_info="oneNew" @editNewsInfo="editNews" @deleteNewsInfo="deleteNews" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StaffNavBar from '~/components/StaffNavBar.vue'
import AddNews from '../../components/staff/AddNews.vue'
import ViewNews from '../../components/staff/ViewNews.vue'
export default {
  components: { StaffNavBar, AddNews, ViewNews },
  data(){
    return {
      newsInfo: []
    }
  },
  methods:{
    async addNews(value){
      // console.log("🚀 ~ file: news.vue ~ line 32 ~ addNews ~ value", value)
      let accessToken = localStorage.getItem('accessToken')
      await this.$axios
        .post('/staff/addnews', value, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          // console.log(res)
          alert('เพิ่มข่าวประชามันพันธ์สำเร็จ')
          this.$router.push('/staff/news')
          location.reload()
        })
        .catch((err) => {
        })
    },
    async editNews(value){
      let { newsId, newstitle, newsDetail, openDate } = value
      let accessToken = localStorage.getItem('accessToken')
      let sentData = {
        newstitle,
        newsDetail,
        openDate,
      }
      await this.$axios.$put(`/staff/updateNews/${newsId}`, sentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // console.log(res)
        alert('แก้ไขข่าวประชาสัมพันธ์สำเร็จ')
        this.$router.push('/staff/news')
        location.reload()
      })
    },
    deleteNews(id){
      let accessToken = localStorage.getItem('accessToken')
      this.$axios.$delete(`/staff/deleteNews/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // console.log(res)
        alert('ลบข่าวประชาสัมพันธ์สำเร็จ')
        this.$router.push('/staff/news')
        location.reload()
      })
    }
  },
  async mounted(){
    let accessToken = localStorage.getItem('accessToken')
    if (accessToken == null) {
      this.$router.push('/staff/login')
    }

    let newsResults = await this.$axios.$get('/staff/getAllNews', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.newsInfo = newsResults
    // console.log("🚀 ~ file: news.vue ~ line 68 ~ mounted ~ this.newsInfo", this.newsInfo)
  }
}
</script>

<style></style>
