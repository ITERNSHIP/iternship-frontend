<template>
  <div>
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
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { StudentNavBar, Footer },

  data() {
    return {
      oneNews: {},
    }
  },

  async mounted() {
    const id = this.$route.params.id
    const accessToken = this.$cookiz.get('jwt')
    let getThisnew = await this.$axios.$get(`/users/getNewsById/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    // console.log("🚀 ~ file: index.vue ~ line 39 ~ mounted ~ getThisnew", getThisnew)
    this.oneNews = getThisnew
  },
}
</script>

<style></style>
