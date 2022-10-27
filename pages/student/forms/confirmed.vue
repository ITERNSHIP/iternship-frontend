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
                v-model.trim.lazy="$v.firstname.$model"
                v-model="confirmedForm.fName"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.firstname.required && $v.firstname.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุชื่อจริง
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>นามสกุล</span>
              <input
                v-model.trim.lazy="$v.lastname.$model"
                v-model="confirmedForm.lName"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.lastname.required && $v.lastname.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุนามสกุล
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>รหัสนักศึกษา</span>
              <input
                v-model.trim.lazy="$v.studentId.$model"
                v-model="confirmedForm.studentId"
                type="number"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.studentId.required && $v.studentId.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุรหัสนักศึกษา
              </p>

              <p
                v-if="!$v.studentId.numeric && $v.studentId.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุรหัสนักศึกษาให้ถูกต้อง
              </p>

              <p
                v-if="!$v.studentId.minLength && $v.studentId.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุรหัสนักศึกษาให้ถูกต้อง
              </p>

              <p
                v-if="!$v.studentId.maxLength && $v.studentId.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุรหัสนักศึกษาให้ถูกต้อง
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>ชื่อบริษัทที่นักศึกษาไปฝึกงาน</span>
              <input
                v-model.trim.lazy="$v.companyName.$model"
                v-model="confirmedForm.companyName"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.companyName.required && $v.companyName.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุชื่อบริษัท
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>ตำแหน่งงานที่นักศึกษาไปฝึกงาน</span>
              <input
                v-model.trim.lazy="$v.position.$model"
                v-model="confirmedForm.position"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.position.required && $v.position.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุตำแหน่งงาน
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>ระยะเวลา</span>
              <select 
                v-model.trim.lazy="$v.longTerm.$model"
                v-model="confirmedForm.longTerm"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
                <option value="2 เดือน">2 เดือน</option>
                <option value="4 เดือน">4 เดือน</option>
                <option value="6 เดือน">6 เดือน</option>
              </select>
              <p
                v-if="!$v.longTerm.required && $v.longTerm.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุระยะเวลาฝึกงาน
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>เดือนที่เริ่มต้นฝึกงาน</span>
              <input
                v-model.trim.lazy="$v.startMonth.$model"
                v-model="confirmedForm.durationForm"
                type="date"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.startMonth.required && $v.startMonth.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเดือนที่เริ่มต้นฝึกงาน
              </p>
            </div>

            <div class="space-y-1 mb-2">
              <span>เดือนที่จบฝึกงาน</span>
              <input
                v-model.trim.lazy="$v.endMonth.$model"
                v-model="confirmedForm.durationTo"
                type="date"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.endMonth.required && $v.endMonth.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเดือนที่จบฝึกงาน
              </p>
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
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'
import StudentNavBar from '~/components/StudentNavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { StudentNavBar, Footer },
  data() {
    return {
      confirmedForm: {
        fName: '',
        lName: '',
        studentId: '',
        companyName: '',
        position: '',
        durationForm: '',
        durationTo: '',
        longTerm:'',
        user: {
          userId: `${localStorage.getItem('userId')}`,
        },
      },
      firstname: '',
      lastname: '',
      studentId: '',
      companyName: '',
      position: '',
      startMonth: '',
      endMonth: '',
      longTerm:'',
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
      this.sentconfirmedForm()
    },
    async sentconfirmedForm() {
      const data = this.confirmedForm
      console.log(data)
      await this.$axios
        .$post(`/users/createconfirmationForm`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          console.log(res)
          alert('ส่งฟอร์มยืนยันการฝึกงานสำเร็จ')
          this.$router.push('/student')
          // location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },

  validations: {
    firstname: {
      required,
    },
    lastname: {
      required,
    },
    studentId: {
      required,
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(11),
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
    longTerm:{
      required,
    }
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
