<template>
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div>
        <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
          ข้อมูลส่วนตัว
        </p>
      </div>

      <section>
        <div
          class="w-full h-auto rounded-xl bg-slate-100 px-4 sm:px-6 md:px-8 lg:px-10 py-8"
        >
          <div class="space-y-2 mb-4">
            <span>ชื่อ - นามสกุล</span>
            <span class="text-error">***ไม่สามารถแก้ไขได้***</span>
            <input
              v-model="userData.fullName"
              type="text"
              disabled
              class="bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>
          <div class="space-y-2 mb-4">
            <span>รหัสนักศึกษา</span>
            <span class="text-error">***ไม่สามารถแก้ไขได้***</span>
            <input
              v-model="userData.userId"
              type="text"
              disabled
              class="bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>
          <div class="space-y-2 mb-4">
            <span>เพศ</span>
            <span class="text-error"></span>
            <select
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              v-model.trim.lazy="$v.genderValidate.$model"
              v-model="userData.gender"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>
            <p
              class="text-error mt-2 text-sm"
              v-if="!$v.genderValidate.required && $v.genderValidate.$dirty"
            >
              กรุณาระบุเพศ
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>สาขาวิชา</span>
            <span class="text-error"></span>
            <select
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              v-model.trim.lazy="$v.facultyValidate.$model"
              v-model="userData.faculty"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="เทคโนโลยีสารสนเทศ">เทคโนโลยีสารสนเทศ</option>
              <option value="วิทยาการคอมพิวเตอร์">วิทยาการคอมพิวเตอร์</option>
              <option value="นวัตกรรมบริการดิจิตอล">
                นวัตกรรมบริการดิจิตอล
              </option>
            </select>
            <p
              class="text-error mt-2 text-sm"
              v-if="!$v.facultyValidate.required && $v.facultyValidate.$dirty"
            >
              กรุณาระบุสาขาวิชา
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>ปีการศึกษา</span>
            <span class="text-error"></span>
            <select
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              v-model.trim.lazy="$v.yearValidate.$model"
              v-model="userData.year"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="2562">2562</option>
              <option value="2563">2563</option>
              <option value="2564">2564</option>
              <option value="2565">2565</option>
            </select>
            <p
              class="text-error mt-2 text-sm"
              v-if="!$v.yearValidate.required && $v.yearValidate.$dirty"
            >
              กรุณาระบุปีการศึกษา
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>เกรดเฉลี่ย</span>
            <input
              v-model.trim.lazy="$v.GPAValidate.$model"
              v-model="userData.GPA"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="!$v.GPAValidate.required && $v.GPAValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุเกรดเฉลี่ย
            </p>
            <p
              v-if="
                !(
                  $v.GPAValidate.maxValue &&
                  $v.GPAValidate.minValue &&
                  $v.GPAValidate.required
                ) && $v.GPAValidate.$dirty
              "
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุเกรดเฉลี่ยให้ถูกต้อง
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>ที่อยู่</span>
            <textarea
              v-model.trim.lazy="$v.addressValidate.$model"
              v-model="userData.address"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="!$v.addressValidate.required && $v.addressValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุที่อยู่
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>เบอร์โทรศัพท์</span>
            <input
              v-model.trim.lazy="$v.phoneValidate.$model"
              v-model="userData.phone"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="!$v.phoneValidate.required && $v.phoneValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุโทรศัพท์
            </p>

            <p
              v-if="!$v.phoneValidate.minLength && $v.phoneValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุโทรศัพท์ให้ครบ 10 หลัก
            </p>

            <p
              v-if="!$v.phoneValidate.maxLength && $v.phoneValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุโทรศัพท์ให้ครบ 10 หลัก
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>อีเมล</span>
            <input
              v-model.trim.lazy="$v.emailValidate.$model"
              v-model="userData.email"
              type="email"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="!$v.emailValidate.required && $v.emailValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุอีเมล
            </p>
            <p
              v-if="!$v.emailValidate.email && $v.emailValidate.$dirty"
              class="text-error mt-2 text-sm"
            >
              กรุณาระบุอีเมลให้ถูกต้อง
            </p>
          </div>
          <div class="space-y-2 mb-4">
            <span>Link ผลงาน (Google Drive)</span>
            <input
              v-model.trim.lazy="$v.resumeLinkValidate.$model"
              v-model="userData.resumeLink"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="!$v.resumeLinkValidate.required && $v.resumeLinkValidate.$dirty"
              class="text-error mt-2 text-sm">
              กรุณาระบุ Link ผลงาน
            </p>
          </div>
          <div class="flex justify-end">
            <button class="btn w-28" @click="editToggle" v-if="!isEdit">
              แก้ไข
            </button>
            <button
              class="btn btn-info w-28 text-white"
              @click="editProfile"
              v-if="isEdit"
            >
              บันทึก
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
import {
  required,
  numeric,
  minLength,
  maxLength,
  email,
  decimal,
  minValue,
  maxValue,
} from 'vuelidate/lib/validators'
export default {
  components: { StudentNavBar },
  data() {
    return {
      isEdit: false,
      userData: {
        fullName: '',
        userId: '',
        address: '',
        phone: '',
        email: '',
        gender: '',
        status: '',
        resumeLink: '',
        GPA: '',
        faculty: '',
        year: '',
      },
      addressValidate: '',
      phoneValidate: '',
      emailValidate: '',
      genderValidate: '',
      resumeLinkValidate: '',
      GPAValidate: '',
      facultyValidate: '',
      yearValidate: '',
    }
  },

  methods: {
    editToggle() {
      this.isEdit = true
    },
    async editProfile() {
      let accessToken = localStorage.getItem('accessToken')
      let studentId = localStorage.getItem('userId')
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        console.log('invalid')
        return
      }
      console.log('************* EDIT PROFILE *************')
      console.log('accessToken: ', accessToken)
      console.log('studentId: ', studentId)
      console.log(this.userData)
      await this.$axios.$put(`/users/update/${studentId}`, this.userData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      this.$store.dispatch('setStudentData', this.userData)
      this.isEdit = false
      alert('แก้ไขข้อมูลสำเร็จ')
      location.reload('/student/profile')
    },
  },

  async mounted() {
    let studentId = localStorage.getItem('userId')
    let accessToken = localStorage.getItem('accessToken')
    let res = await this.$axios.$get(`/users/get/${studentId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.userData = res
  },

  validations: {
    addressValidate: {
      required,
    },
    phoneValidate: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    emailValidate: {
      required,
      email,
    },
    genderValidate: {
      required,
    },
    resumeLinkValidate: {
      required,
    },
    GPAValidate: {
      required,
      decimal,
      minValue: minValue(0),
      maxValue: maxValue(4),
    },
    facultyValidate: {
      required,
    },
    yearValidate: {
      required,
    },
  },
}
</script>

<style></style>
