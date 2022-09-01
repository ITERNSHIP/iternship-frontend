<template>
  <div>
    <CompanyNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">จัดการข้อมูล</p>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-normal md:text-2xl">
            จัดการข้อมูลบริษัทของคุณ
          </p>
        </div>
      </div>

      <div>
        <div class="mt-10 flex flex-row justify-between">
          <p class="pt-2 text-lg font-normal md:text-2xls">
            ความเป็นมาของบริษัท
          </p>
          <!-- <button class="btn btn-info w-20 md:w-32 text-white">เพิ่ม</button> -->
          <HistoryModal :add = "true" />
        </div>
      </div>

      <div
        class="mt-5 rounded-lg bg-slate-200 h-auto w-auto justify-items-center"
      >
        <div class="flex flex-col w-full h-auto p-3 lg:flex-row">
          <img
            src="https://picsum.photos/400/400"
            alt="//"
            class="p-5 block ml-auto mr-auto w-2/4 rounded-lg"
          />
          <p class="p-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
       
          <!-- <button class="btn btn-primary w-20 md:w-32 text-white m-3">
            แก้ไข
          </button> -->
          <HistoryModal :edit = "true" class="p-5 flex justify-end"/>
        
      </div>

      <div class="mt-10 bg-black h-1 w-auto rounded-lg"></div>

      <div class="mt-10">
        <div>
          <div class="mt-10 flex flex-row justify-between">
            <p class="pt-2 text-lg font-normal md:text-2xls">
              ตำแหน่งที่เปิดรับ
            </p>
            <!-- <button class="btn btn-info w-20 md:w-32 text-white">เพิ่ม</button> -->
            <PositionModal :add="true" />
          </div>
          <div class="mt-10 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between">
            <p class="text-blue-blue md:pt-2 lg:pt-0">ชื่อตำแหน่ง</p>
            <div class="flex flex-col gap-2 md:flex-row md:items-center mt-3 md:mt-0">
              <!-- <button class="btn btn-primary w-full md:w-20 py-1 text-white">
                ดู
              </button>
              <button class="btn btn-primary w-full md:w-20 text-white">
                แก้ไข
              </button> -->
              <PositionModal :view="true" />
              <!-- <PositionModal :edit="true" /> -->
              <PositionModal :edit="true" />
              <button class="btn btn-primary w-full md:w-20 text-white">
                ลบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyNavBar from '~/components/CompanyNavBar.vue'
import PositionModal from '~/components/company/PositionModal.vue';
import HistoryModal from '~/components/company/HistoryModal.vue';
export default {
  components: {
    CompanyNavBar,
    PositionModal,
    HistoryModal
},

}
</script>

<style></style>
