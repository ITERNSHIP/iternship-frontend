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
          ฟอร์มสมัครฝึกงาน
        </div>
        <div class="mt-10">
          <form action="#" @submit.prevent="onSubmit">
            <div class="space-y-1 mb-2">
              <span>ชื่อจริง</span>
              <input
                v-model.trim.lazy="$v.fName.$model"
                v-model="sentInternshipForm.fName"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.fName.required && $v.fName.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุชื่อจริง
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>นามสกุล</span>
              <input
                v-model.trim.lazy="$v.lName.$model"
                v-model="sentInternshipForm.lName"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.lName.required && $v.lName.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุนามสกุล
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>เพศ</span>
              <select
                v-model.trim.lazy="$v.gender.$model"
                v-model="sentInternshipForm.gender"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              >
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
              <p
                v-if="!$v.gender.required && $v.gender.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเพศ
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>โทรศัพท์</span>
              <input
                v-model.trim.lazy="$v.phoneNumber.$model"
                v-model="sentInternshipForm.phoneNumber"
                type="number"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุโทรศัพท์
              </p>

              <p
                v-if="!$v.phoneNumber.minLength && $v.phoneNumber.$dirty"
                class="text-error mt-2 text-sm"
              >
              กรุณาระบุโทรศัพท์ให้ครบ 10 หลัก
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>เกรดเฉลี่ย</span>
              <input
                v-model.trim.lazy="$v.grade.$model"
                v-model="sentInternshipForm.grade"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.grade.required && $v.grade.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเกรดเฉลี่ย
              </p>
              <p
                v-if="
                  !($v.grade.maxValue && $v.grade.minValue && $v.grade.required) &&
                  $v.grade.$dirty
                "
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเกรดเฉลี่ยให้ถูกต้อง
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>อีเมล</span>
              <input
                v-model.trim.lazy="$v.email.$model"
                v-model="sentInternshipForm.email"
                type="email"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.email.required && $v.email.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุอีเมล
              </p>
              <p
                v-if="!$v.email.email && $v.email.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุอีเมลให้ถูกต้อง
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>ที่อยู่</span>
              <textarea
                v-model.trim.lazy="$v.address.$model"
                v-model="sentInternshipForm.address"
                type="text"
                placeholder=""
                class="text-sm sm:text-base min-h-[100px] placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.address.required && $v.address.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุที่อยู่
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>บริษัทที่จะยื่นสมัคร</span>
              <select
                v-model.trim.lazy="$v.companyName.$model"
                v-model="sentInternshipForm.companyName"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              >
                <option  v-for="comName in listCompanyName" :key="comName.companyName" :value="comName.companyName">
                  {{comName.companyName}}
                  </option>
              </select>
              <p
                v-if="!$v.companyName.required && $v.companyName.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุบริษัทที่จะยื่นสมัคร
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>งานที่จะยื่นสมัคร</span>
              <input
                v-model.trim.lazy="$v.position.$model"
                v-model="sentInternshipForm.position"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.position.required && $v.position.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุงานที่จะยื่นสมัคร
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>เดือนที่ต้องการเริ่มต้นฝึกงาน</span>
              <input
                v-model.trim.lazy="$v.startDate.$model"
                v-model="sentInternshipForm.startDate"
                type="date"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.startDate.required && $v.startDate.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเดือนที่ต้องการเริ่มต้นฝึกงาน
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>เดือนที่ต้องการจบฝึกงาน</span>
              <input
                v-model.trim.lazy="$v.endDate.$model"
                v-model="sentInternshipForm.endDate"
                type="date"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.endDate.required && $v.endDate.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุเดือนที่ต้องการจบฝึกงาน
              </p>
            </div>
            <div class="space-y-1 mb-2">
              <span>ผลงาน (Link Google Drive)</span>
              <input
                v-model.trim.lazy="$v.resume.$model"
                v-model="sentInternshipForm.resume"
                type="text"
                placeholder=""
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
                v-if="!$v.resume.required && $v.resume.$dirty"
                class="text-error mt-2 text-sm"
              >
                กรุณาระบุผลงาน
              </p>
            </div>
            <div class="mt-8 flex-row">
              <input
                type="checkbox"
                v-model="agree"
                class="checkbox checkbox-xs mr-2"
              />
              <span
                >ยอมรับ
                <span class="text-blue-blue">นโยบายความเป็นส่วนตัว </span>ของ
                INTERNSHIP</span
              >
            </div>
            <div class="flex w-full mt-8">
              <button
                type="submit"
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded-xl py-2 w-full transition duration-150 ease-in"
              >
                <span class="mr-2 uppercase">ยืนยัน</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  numeric,
  email,
  decimal,
  minLength,
  minValue,
  maxValue,
} from 'vuelidate/lib/validators'
import StudentNavBar from '~/components/StudentNavBar.vue'
export default {
  components: { StudentNavBar },
  data() {
    return {
      sentInternshipForm: {
        fName: '',
        lName: '',
        gender: '',
        phoneNumber: '',
        grade: '',
        email: '',
        address: '',
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        resume: '',
        user:{
          userId: `${localStorage.getItem('userId')}`
        }
      },
      fName: '',
      lName: '',
      gender: '',
      phoneNumber: '',
      grade: '',
      email: '',
      address: '',
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      resume: '',
      agree: false,
      listCompanyName:[],
    }
  },

  validations: {
    fName: {
      required,
    },
    lName: {
      required,
    },
    gender: {
      required,
    },
    phoneNumber: {
      required,
      numeric,
      minLength: minLength(10),
    },
    grade: {
      required,
      decimal,
      minValue: minValue(0),
      maxValue: maxValue(4),
    },
    email:{
      required,
      email,
    },
    address:{
      required,
    },
    companyName:{
      required,
    },
    position:{
      required,
    },
    startDate:{
      required,
    },
    endDate:{
      required,
    },
    resume:{
      required,
    },
  },

  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        // console.log(this.sentInternshipForm)
        return
      }
      if (this.agree === false) {
        alert('กรุณายอมรับนโยบายความเป็นส่วนตัว')
        return
      }
      this.sentitsform()
    },
    async sentitsform() {
      const data = this.sentInternshipForm
          console.log(data)
      await this.$axios.$post(`/users/createRegis`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then((res) => {
        console.log(res)
        alert('ส่งฟอร์มสมัครฝึกงานสำเร็จ')
        this.$router.push('/student')
        // location.reload('/student')
      }).catch((err) => {
        console.log(err)
      })
    },
  },
  async mounted() {
    const accessToken = localStorage.getItem('accessToken')
        console.log(accessToken)
    let allCompany = await this.$axios.$get(`/users/getAllCompany`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.listCompanyName = allCompany

    console.log(this.listCompanyName)
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
input[type=number] {
  -moz-appearance: textfield;
}
</style>
