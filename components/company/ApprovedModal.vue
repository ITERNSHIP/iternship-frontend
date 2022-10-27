<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label :for="registerPass.regisId" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div class="gap-2">
            <p class="font-bold">{{registerPass.fName}}  {{registerPass.lName}}</p>
            <p>ตำแหน่ง: {{registerPass.position}}</p>
          </div>
        </div>
      </label>
      <input type="checkbox" :id="registerPass.regisId" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            :for="registerPass.regisId"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            @click="closeModal"
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">ดูข้อมูลผู้สมัครฝึกงาน</h3>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อจริง</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.fName"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >นามสกุล</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.lName"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >เพศ</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.gender"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >โทรศัพท์</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.phoneNumber"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >เกรดเฉลี่ย (GPAX)</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.grade"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >อีเมล</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.email"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ที่อยู่</label
            >
            <textarea
              disabled
              class="mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.address"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ตำแหน่งที่ยื่นสมัคร</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.position"
            />
          </div>


          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >วันที่เริ่มต้นฝึกงาน</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.startDate"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >วันที่จบการฝึกงาน</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.endDate"
            />
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ผลงาน (Link Google Drive)</label
            >
            <input
              readonly
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="registerPass.resume"
            />
          </div>

          <div class="modal-action flex items-center justify-end w-full">
            <label :for="registerPass.regisId" class="btn">กลับ</label>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
 props: ['registerPass'],
  methods: {
    closeModal(){

    }
  },
}
</script>

<style>

</style>