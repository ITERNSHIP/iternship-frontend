<template>
  <div>
    <StudentNavBar />
    <div
      class="bg-slate-200 min-h-screen flex flex-col items-center justify-center"
    >
      <div
        class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-full max-w-3xl my-8"
      >
        <div
          class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
        >
          ฟอร์มยืนยันได้บริษัทฝึกงาน
        </div>
        <div class="mt-10">
          <form action="#" @submit.prevent="onSubmit">
            <div class="space-y-1 mb-2">
              <span>ชื่อจริง</span>
              <input
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">กรุณาระบุชื่อจริง</p>
            </div>

            <div class="space-y-1 mb-2">
              <span>นามสกุล</span>
              <input
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">กรุณาระบุนามสกุล</p>
            </div>

            <div class="space-y-1 mb-2">
              <span>รหัสนักศึกษา</span>
              <input
                type="number"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">กรุณาระบุรหัสนักศึกษา</p>
            </div>

            <div class="space-y-1 mb-2">
              <span>ชื่อบริษัทที่นักศึกษาไปฝึกงาน</span>
              <input
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">กรุณาระบุชื่อบริษัท</p>
            </div>

            <div class="space-y-1 mb-2">
              <span>ตำแหน่งงานที่นักศึกษาไปฝึกงาน</span>
              <input
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">กรุณาระบุตำแหน่งงาน</p>
            </div>

            <div class="space-y-1 mb-2">
              <span>เดือนที่เริ่มต้นฝึกงาน</span>
              <input
                type="date"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">
                กรุณาระบุเดือนที่เริ่มต้นฝึกงาน
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>เดือนที่จบฝึกงาน</span>
              <input
                type="date"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p class="text-error mt-2 text-sm">กรุณาระบุเดือนที่จบฝึกงาน</p>
            </div>

            <div class="flex w-full mt-8">
              <button
                type="submit"
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded-xl py-2 w-full transition duration-150 ease-in"
              >
                <span class="mr-2 uppercase">ส่งฟอร์ม</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {
  required,
  numeric,
  minLength,
} from 'vuelidate/lib/validators'
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { StudentNavBar, Footer },
  data() {
    return {
      confirmedForm: {
        fname: this.firstname,
        lname: this.lastname,
        studentID: this.studentID,
        company: this.company,
        position: this.position,
        start: this.startMonth,
        end: this.endMonth,
      },
      firstname: '',
      lastname: '',
      studentID: '',
      companyName: '',
      position: '',
      startMonth: '',
      endMonth: '',
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        // console.log(this.sentInternshipForm)
        return
      }
    },
  },

  validations: {
    firstname: {
      required,
    },
    lastname: {
      required,
    },
    studentID: {
      required,
      numeric,
      minLength: minLength(11)
    },
    companyName: {
      required,
    },
    position: {
      required,
    },
    startMonth: {
      required,
    },
    endMonth: {
      required,
    },
  },
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
