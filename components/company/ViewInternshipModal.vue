<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label :for="register.regisId" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div class="gap-2">
            <p class="font-bold">{{register.fName}}  {{register.lName}}</p>
            <p>ตำแหน่ง: {{register.position}}</p>
          </div>
        </div>
      </label>
      <input type="checkbox" :id="register.regisId" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            :for="register.regisId"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">ดูข้อมูลผู้สมัครฝึกงาน</h3>
          {{register}}
          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อจริง-นามสกุล</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="register.fullName"
            />
          </div>

          <!-- <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >นามสกุล</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="register.lName"
            />
          </div> -->

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >เพศ</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="register.gender"
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
              :placeholder="register.phoneNumber"
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
              :placeholder="register.grade"
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
              :placeholder="register.email"
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
              :placeholder="register.address"
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
              :placeholder="register.position"
            />
          </div>


          <!-- <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >วันที่เริ่มต้นฝึกงาน</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="register.startDate"
            />
          </div> -->

          <!-- <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >วันที่จบการฝึกงาน</label
            >
            <input
              disabled
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="register.endDate"
            />
          </div> -->

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ผลงาน (Link Google Drive)</label
            >
            <input
              readonly
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-200"
              :placeholder="register.resume"
            />
          </div>

          <div class="modal-action flex items-center justify-end w-full">
            <label @click="approveRegisPass('pass')"
              class="btn btn-success text-white"
              >เรียกสัมภาษณ์งาน</label
            >
            <label @click="approveRegisNotPass('notPass')" class="btn btn-error text-white">ไม่เรียกสัมภาษณ์งาน</label>
            <label :for="register.regisId" class="btn">กลับ</label>
          </div>

          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['register'],
   methods: {
    async approveRegisPass(value) {
      let regisId = this.register.regisId 
      let body ={
        status:value
      }
      await this.$axios.$post(`/company/updateRegisStatus?id=${regisId}`, body, {
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
        },
      }).then((res) => {
        // console.log(res)
        alert('อนุมัติสำเร็จ')
        this.$router.push('/company')
        location.reload()
      }).catch((err) => {
        // console.log(err)
      })
    },
    async approveRegisNotPass(value) {
      let regisId = this.register.regisId 
      let body ={
        status:value
      }
      await this.$axios.$post(`/company/updateRegisStatus?id=${regisId}`, body, {
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
        },
      }).then((res) => {
        // console.log(res)
        alert('ปฏิเสธการฝึกงานของนักศึกษาแล้ว')
        this.$router.push('/company')
        location.reload()
      }).catch((err) => {
        // console.log(err)
      })
    },
   },
}
</script>

<style></style>
