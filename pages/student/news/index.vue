<template>
  <!-- <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16 mb-10">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">
          ข่าวสารต่างๆ เกี่ยวกับบริษัท
        </p>
      </div>

      <nuxt-link :to="`/student/news/${onenew.newsId}`" class="cursor-pointer" v-for="onenew in allNews" :key="onenew.newsId">
        <div
          class="mb-3 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
        >
        <div>
          <p class="text-blue-blue md:pt-2 lg:pt-0">{{ onenew.newstitle }}</p></div>
          
        </div>
      </nuxt-link>
    </div>
    <Footer />
  </div> -->
  <div>
    <StudentNavBar />
    <section>
      <div class="flex flex-col px-8 pt-8">
        <div>
          <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
            ข่าวประชาสัมพันธ์
          </p>
        </div>

        <section v-for="allnew in allNews" :key="allnew.newsId" class="flex flex-col">
          <nuxt-link 
          :to="`/student/news/${allnew.newsId}`"
          >
          <div class="mb-3 p-4 h-auto w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer">
              <p class="font-semibold text-blue-blue">{{allnew.newstitle}}</p>
          </div>
          </nuxt-link>
        </section>
      </div>
    </section>
    <Footer class="mt-8" />
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue';
export default {
  components: {
    StudentNavBar,
    Footer,
  },

  data() {
    return {
      allNews: [],
    }
  },

  async mounted() {
      const accessToken = localStorage.getItem('accessToken')
    let getAllNews = await this.$axios.$get('/users/getAllNews', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.allNews = getAllNews
    console.log("🚀 ~ file: index.vue ~ line 68 ~ mounted ~ this.allNews", this.allNews)
    
  },
}
// export default {
//   components: {
//     StudentNavBar,
//     Footer
// },
// }
</script>

<style></style>
