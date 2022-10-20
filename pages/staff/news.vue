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
          <div class="mt-4 space-y-2">
            <ViewNews />
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-16" />
  </div>
</template>

<script>
import StaffNavBar from '~/components/StaffNavBar.vue'
import AddNews from '../../components/staff/AddNews.vue'
import ViewNews from '../../components/staff/ViewNews.vue'
import Footer from '~/components/Footer.vue';
export default {
  components: { StaffNavBar, AddNews, ViewNews, Footer },
  methods:{
    async addNews(value){
      // await this.$axios
      //   .$post('/company/createrecruit', value, {
      //     headers: {
      //       Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res)
      //     alert('เพิ่มงานสำเร็จ')
      //     this.$router.push('/company')
      //     location.reload()
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }
  }
}
</script>

<style></style>
