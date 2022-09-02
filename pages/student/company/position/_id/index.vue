<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-16 mb-14">
      <section>
        <div class="mt-16 md:flex md:gap-x-24">
          <img
            src="https://picsum.photos/150/150"
            alt=""
            class="block ml-auto mr-auto w-2/4 rounded-lg md:ml-0 md:mr-0 md:h-[360px] md:w-[360px]"
          />
          <div
            class="mt-5 md:mt-0 md:self-center"
          >
            <h1
              class=" mt-5 md:mt-0 font-bold lg:text-4xl text-xl md:text-2xl md:self-center"
            >
              ชื่อบริษัท
            </h1>
            <u>ดูรายละเอียดบริษัท</u>
          </div>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งงาน</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            ตำแหน่งงาน 1
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">รายละเอียดงาน</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
            beatae. Atque consectetur, quos nisi at porro neque molestiae iure
            voluptates ad quibusdam expedita aspernatur repellendus harum nobis
            suscipit inventore nihil!
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">สวัสดิ์การ</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
            beatae. Atque consectetur, quos nisi at porro neque molestiae iure
            voluptates ad quibusdam expedita aspernatur repellendus harum nobis
            suscipit inventore nihil!
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">สถานที่ปฎิบัติงาน</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
            beatae. Atque consectetur
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ติดต่อ</p>
        </div>

        <div class="mt-3 md:mt-4">
          <p class="text-sm font-normal md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
            beatae. Atque consectetur
          </p>
        </div>
      </section>

      <section>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-medium md:text-2xl">ตำแหน่งอื่นๆที่เปิดรับในบริษัท</p>
        </div>
        <section class="cursor-pointe">
          <div
            class="mt-3 md:mt-6 p-4 h-auto lg:h-16 w-auto rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer bg-black shadow-xl hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <p class="text-white md:pt-2 lg:pt-0">ชื่อตำแหน่งงาน</p>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
export default {
  components: { StudentNavBar },
}
</script>

<style></style>
