<template>
  <div>
    <section id="view" v-if="view">
      <label
        for="modal-view"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >ดู</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-view" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
              ดูข้อมูลตำแหน่งที่บริษัทของคุณ
              </h1>
            
              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ชื่อตำแหน่ง</label
              >
              <input
                class="mb-5 mt-2 text-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                class="mb-5 mt-2 text-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />
            </div>
          </div>
          <div class="modal-action">
            <label for="modal-view" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="add" v-if="add">
      <label
        for="modal-add"
        class="btn modal-button btn-info text-white w-20 md:w-32"
        >เพิ่ม</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-add" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                เพิ่มข้อมูลตำแหน่งที่บริษัทของคุณ
              </h1>
              
              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ชื่อตำแหน่ง</label
              >
              <input
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white">เพิ่ม</label>
            <label for="modal-add" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="edit" v-if="edit">
      <label
        for="modal-edit"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >แก้ไข</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-edit" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                แก้ไขข้อมูลตำแหน่งที่บริษัทของคุณ
              </h1>
              
              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ชื่อตำแหน่ง</label
              >
              <input
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white">แก้ไข</label>
            <label for="modal-edit" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    positionShow: {
      type: String,
    },
    add:{
        type: Boolean,
    },
    edit:{
        type: Boolean,
    },
    view:{
        type: Boolean,
    }
  },
  
}
</script>

<style></style>
