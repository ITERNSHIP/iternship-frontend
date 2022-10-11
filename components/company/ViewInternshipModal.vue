<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label for="view" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div class="gap-2">
            <p class="font-bold">จิรสิน ผะอบทอง</p>
            <p>ตำแหน่ง: Front-End Developer</p>
          </div>
        </div>
      </label>
      <input type="checkbox" id="view" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            for="view"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
            />
          </div>

          <div class="modal-action flex items-center justify-end w-full">
            <label
              class="btn btn-success text-white"
              >อนุมัติ</label
            >
            <label class="btn btn-error text-white">ไม่อนุมัติ</label>
            <label for="view" class="btn">กลับ</label>
          </div>

          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
