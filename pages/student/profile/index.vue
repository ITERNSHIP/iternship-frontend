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
              v-model="userData.studentId"
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
              v-model="userData.gender"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>
          </div>
          <div class="space-y-2 mb-4">
            <span>ที่อยู่</span>
            <textarea
              v-model="userData.address"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>
          <div class="space-y-2 mb-4">
            <span>เบอร์โทรศัพท์</span>
            <input
              v-model="userData.phone"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>
          <div class="space-y-2 mb-4">
            <span>อีเมล</span>
            <input
              v-model="userData.email"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>
          <div class="space-y-2 mb-4">
            <span>Link ผลงาน (Google Drive)</span>
            <input
              v-model="userData.resumeLink"
              type="text"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </div>
          <div class="flex justify-end">
            <button class="btn w-28" @click="editToggle" v-if="!isEdit">
              แก้ไข
            </button>
            <button class="btn btn-info w-28 text-white" @click="editToggle" v-if="isEdit">
              บันทึก
            </button>
          </div>
        </div>
        {{ userData }}
      </section>
    </div>
  </div>
</template>

<script>
import StudentNavBar from '~/components/StudentNavBar.vue'
export default {
  components: { StudentNavBar },
  data() {
    return {
      isEdit: false,
      userData: {
        fullName: 'John Doe',
        studentId: 'B6110000',
        address: '123/456 หมู่บ้าน อาคาร ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์',
        phone: '0123456789',
        email: 'test@test.com',
        gender: 'หญิง',
        resumeLink: 'sdfdsgdsgslsdfksdfpsfkpsdfdspf',
      },
    }
  },

  methods: {
    editToggle() {
      this.isEdit = true
    },
  },
}
</script>

<style></style>
