<template>
  <div>
    <section>
      <label for="edit" class="btn btn-primary modal-button text-white">
        แก้ไข
      </label>
      <input type="checkbox" id="edit" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label for="edit" class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">
            แก้ไขประวัติความเป็นมาของบริษัท
          </h3>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ประวัติความเป็นมา</label
            >
            <textarea v-model="companyDetail"
              class="mt-2 text-gray-600 min-h-[250px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>

          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white" @click="editCompanyDetail">แก้ไข</label>
            <label for="edit" class="btn">กลับ</label>
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
      companyDetail:''
    }
  },
   methods: {
    editCompanyDetail(){
      this.$emit("sent-detail",this.companyDetail)
    }
   }
}
</script>

<style></style>
