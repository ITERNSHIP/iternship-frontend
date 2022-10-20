<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label for="view-edit-news" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div>
            <p class="font-bold">หัวข้อข่าวประชาสัมพันธ์ที่นี่</p>
            <p class="text-gray-400">แก้ไขเมื่อ: dd-mm-yyyy</p>
          </div>
        </div>
      </label>
      <input type="checkbox" id="view-edit-news" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            for="view-edit-news"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            @click="closeModal"
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">
            {{
              isEdit ? 'แก้ไขข้อมูลข่าวประสัมพันธ์' : 'ดูข้อมูลข่าวประสัมพันธ์'
            }}
          </h3>
          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าวประชาสัมพันธ์</label
            >
            <input
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p class="text-error text-sm mt-2">
              กรุณาระบุหัวข้อข่าวประชาสัมพันธ์
            </p>
          </div>
          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าวประชาสัมพันธ์</label
            >
            <textarea
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 min-h-[200px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p class="text-error text-sm mt-2">
              กรุณาระบุข้อมูลรายละเอียดของข่าวประชาสัมพันธ์
            </p>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label
              class="btn btn-info text-white"
              @click="editToggle"
              v-if="!isEdit"
              >แก้ไข</label
            >
            <label class="btn btn-error text-white" v-if="!isEdit">ลบ</label>
            <label class="btn btn-info text-white" v-if="isEdit">บันทึก</label>
            <label for="view-edit-news" class="btn" @click="closeModal">ยกเลิก</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    }
  },
}
</script>

<style></style>
