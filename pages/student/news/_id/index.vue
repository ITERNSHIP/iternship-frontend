<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl text-blue-blue">
          หัวข้อข่าว
        </p>
      </div>

      <div class="mt-5 md:mt-10">
        <p class="text-lg font-medium md:text-2xl">รายละเอียดของข่าว</p>
      </div>

      <div class="mt-5 md:mt-10">
        <p class="text-lg font-normal md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, beatae. Atque consectetur, quos nisi at porro neque molestiae iure voluptates ad quibusdam expedita aspernatur repellendus harum nobis suscipit inventore nihil!</p>
      </div>

      <label class="btn btn-primary mt-5 md:mt-10">กลับ</label>
    </div>
    <Footer />
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { StudentNavBar, Footer },
}
</script>

<style></style>
