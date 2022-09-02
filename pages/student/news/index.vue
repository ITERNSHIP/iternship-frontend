<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">
          ข่าวสารต่างๆ เกี่ยวกับบริษัท
        </p>
      </div>

      <section class="cursor-pointer">
        <div
          class="mt-10 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
        >
          <p class="text-blue-blue md:pt-2 lg:pt-0">หัวข้อข่าว</p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    StudentNavBar,
    Footer,
  },
}
</script>

<style></style>
