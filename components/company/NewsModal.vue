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
          <div class="bg-white h-auto w-auto relative">
            <p
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              ดูข่าวสาร
            </p>
            <p
              class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4"
            >
              ดูรายละเอียดของข่าว
            </p>
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าว</label
            >
            <input
              class="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
              placeholder=""
              readonly
            />

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าว</label
            >
            <input
              class="mb-5 mt-2 text-gray-600 min-h-[400px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
              placeholder=""
              readonly
            />
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
          <div class="bg-white h-auto w-auto relative">
            <p
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              เพิ่มข่าวสาร
            </p>
            <p
              class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4"
            >
              เพิ่มรายละเอียดของข่าว
            </p>
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าว</label
            >
            <input
              class="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="หัวข้อข่าว"
            />

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าว</label
            >
            <textarea
              class="mb-3 mt-2 text-gray-600 min-h-[400px] font-normal w-full h-10 pl-3 text-sm border-gray-300 rounded border"
              placeholder="พิมพ์รายละเอียดของข่าวที่นี่"
            />
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
          <div class="bg-white h-auto w-auto relative">
            <p
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              แก้ไขข่าวสาร
            </p>
            <p
              class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4"
            >
            แก้ไขรายละเอียดของข่าว
            </p>
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าว</label
            >
            <input
              class="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="หัวข้อข่าว"
            />

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าว</label
            >
            <textarea
              class="mb-3 mt-2 text-gray-600 min-h-[400px] font-normal w-full h-10 pl-3 text-sm border-gray-300 rounded border"
              placeholder="พิมพ์รายละเอียดของข่าวที่นี่"
            />
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
    props:{
        view:{
            type: Boolean
        },
        add:{
            type: Boolean
        },
        edit:{
            type: Boolean
        },
    }
}
</script>

<style></style>
