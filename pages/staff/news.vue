<template>
  <div>
    <StaffNavBar />
    <section>
      <div class="flex flex-col px-8 pt-8">
        <div class="flex justify-between">
          <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
            จัดการข่าวประชาสัมพันธ์
          </p>
          <AddNews />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StaffNavBar from '~/components/StaffNavBar.vue'
import AddNews from '../../components/staff/AddNews.vue'
export default {
  components: { StaffNavBar, AddNews },
}
</script>

<style></style>
