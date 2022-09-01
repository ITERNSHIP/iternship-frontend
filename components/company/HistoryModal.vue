<template>
  <div>
    <section id="add" v-if="add">
      <label
        for="modal-history-add"
        class="btn modal-button btn-info text-white w-20 md:w-32"
        >เพิ่ม</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-history-add" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                เพิ่มข้อมูล
              </h1>
              <p
                class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4"
              >
                เพิ่มความเป็นมาของบริษัท
              </p>

              <img
                src="https://picsum.photos/150/150"
                alt="//"
                class="p-5 block ml-auto mr-auto w-2/4 rounded-lg"
              />

              <div class="max-w-2xl mx-auto">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900"
                  for="file_input"
                  >Upload file</label
                >
                <input
                  class="mb-4 block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                  id="file_input"
                  type="file"
                />
              </div>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ความเป็นมาของบริษัท</label
              >
              <textarea
                class="mb-5 mt-2 text-black min-h-[200px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
              />
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white">เพิ่ม</label>
            <label for="modal-history-add" class="btn">ยกเลิก</label>
          </div>
        </div>
      </div>
    </section>

    <section id="edit" v-if="edit">
      <label
        for="modal-history-edit"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >แก้ไข</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-history-edit" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                แก้ไขข้อมูล
              </h1>
              <p
                class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4"
              >
              แก้ไขความเป็นมาของบริษัท
              </p>

              <img
                src="https://picsum.photos/150/150"
                alt="//"
                class="p-5 block ml-auto mr-auto w-2/4 rounded-lg"
              />

              <div class="max-w-2xl mx-auto">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900"
                  for="file_input"
                  >Upload file</label
                >
                <input
                  class="mb-4 block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                  id="file_input"
                  type="file"
                />
              </div>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ความเป็นมาของบริษัท</label
              >
              <textarea
                class="mb-5 mt-2 text-black min-h-[200px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
              />
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white">แก้ไข</label>
            <label for="modal-history-edit" class="btn">ยกเลิก</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props:{
        add:{
            type: Boolean
        },
        edit:{
            type: Boolean
        }
    }
}
</script>

<style></style>
