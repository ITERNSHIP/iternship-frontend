<template>
  <!-- <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl text-blue-blue">
          {{ oneNews.newstitle }}
        </p>
      </div>

      <div class="mt-5 md:mt-10">
        <p class="text-lg font-medium md:text-2xl">รายละเอียดของข่าว</p>
      </div>

      <div class="mt-5 md:mt-10">
        <p class="text-lg font-normal md:text-xl">{{ oneNews.newsDetail }}</p>
      </div>

      <nuxt-link to="/student/news" class="btn btn-primary mt-5 md:mt-10">กลับ</nuxt-link>
    </div>
    <Footer />
  </div> -->
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div>
        <p class="font-bold lg:text-3xl text-2xl md:text-4xl text-blue-blue">{{oneNews.newstitle}}</p>
      </div>

      <div class="mt-4 lg:mt-8">
        <p class="text-xl font-medium md:text-3xl">รายละเอียดของข่าว</p>
      </div>

      <div class="mt-2">
        <p class="text-sm font-normal md:text-lg whitespace-pre-wrap">{{oneNews.newsDetail}}</p>
      </div>

      <nuxt-link to="/student/news" class="btn lg:w-1/12 mt-4 lg:mt-8 w-1/5 rounded-xl">กลับ</nuxt-link>
    </div>
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
export default {
  components: { StudentNavBar },

  data() {
    return {
      oneNews: {},
    }
  },

  async mounted() {
    const id = this.$route.params.id
      const accessToken = localStorage.getItem('accessToken')
      
    if(!accessToken){
      this.$router.push('/login')
    }
    let getThisnew = await this.$axios.$get(`/users/getNewsById/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.oneNews = getThisnew
    
  },
}

// export default {
//   components: { StudentNavBar, Footer },
// }
</script>

<style></style>
