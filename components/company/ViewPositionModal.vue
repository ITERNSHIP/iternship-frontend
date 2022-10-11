<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label for="view" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div>
            <p class="font-bold">Front-End Developer</p>
            <p>ประกาศเมื่อ: 27/09/2022</p>
            <p class="text-error">ปิดรับสมัคร: 28/09/2022</p>
          </div>
          <div class="btn self-center">
            <img src="@/assets/icons8-trash.svg" alt="#" />
          </div>
        </div>
      </label>
      <input type="checkbox" id="view" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            for="view"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            @click="closeModal"
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">
            {{
              isEdit
                ? 'แก้ไขข้อมูลงานที่รับสมัครนักศึกษาฝึกงาน'
                : 'ดูข้อมูลงานที่รับสมัครนักศึกษาฝึกงาน'
            }}
          </h3>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อตำแหน่ง</label
            >
            <input
              v-model.trim.lazy="$v.positionName.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p
              v-if="!$v.positionName.required && $v.positionName.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุชื่อตำแหน่ง
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของงาน</label
            >
            <textarea
              v-model.trim.lazy="$v.positionDetail.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p
              v-if="!$v.positionDetail.required && $v.positionDetail.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูลรายละเอียดของงาน
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สวัสดิการของบริษัท</label
            >
            <textarea
              v-model.trim.lazy="$v.positionBenefit.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p
              v-if="!$v.positionBenefit.required && $v.positionBenefit.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูลสวัสดิการ
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สถานที่ปฏิบัติงาน</label
            >
            <input
              v-model.trim.lazy="$v.positionLocation.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p
              v-if="!$v.positionLocation.required && $v.positionLocation.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูลของสถานที่ปฏิบัติงาน
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ช่องทางการติดต่อบริษัท</label
            >
            <textarea
              v-model.trim.lazy="$v.positionContact.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p
              v-if="!$v.positionContact.required && $v.positionContact.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูลช่องทางการติดต่อบริษัท
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ระยะในการฝึกทั้งหมด</label
            >
            <!-- <input
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              type="text"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            /> -->
            <select
              v-model.trim.lazy="$v.positionTime.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="1 เดือน">2 เดือน</option>
              <option value="2 เดือน">4 เดือน</option>
              <option value="3 เดือน">6 เดือน</option>
            </select>
            <p
              v-if="!$v.positionTime.required && $v.positionTime.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูล
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >เริ่มต้นฝึกงานในช่วง</label
            >
            <!-- <input
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              type="text"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            /> -->
            <select
              v-model.trim.lazy="$v.positionStart.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="มกราคม" selected>มกราคม</option>
              <option value="กุมภาพันธ์">กุมภาพันธ์</option>
              <option value="มีนาคม">มีนาคม</option>
              <option value="เมษายน">เมษายน</option>
              <option value="พฤษภาคม">พฤษภาคม</option>
              <option value="มิถุนายน">มิถุนายน</option>
              <option value="กรกฎาคม">กรกฎาคม</option>
              <option value="สิงหาคม">สิงหาคม</option>
              <option value="กันยายน">กันยายน</option>
              <option value="ตุลาคม">ตุลาคม</option>
              <option value="พฤศจิกายน">พฤศจิกายน</option>
              <option value="ธันวาคม">ธันวาคม</option>
            </select>
            <p
              v-if="!$v.positionStart.required && $v.positionStart.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูล
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >จบฝึกงานในช่วง</label
            >
            <!-- <input
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              type="text"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            /> -->
            <select
              v-model.trim.lazy="$v.positionEnd.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option value="มกราคม">มกราคม</option>
              <option value="กุมภาพันธ์" selected>กุมภาพันธ์</option>
              <option value="มีนาคม">มีนาคม</option>
              <option value="เมษายน">เมษายน</option>
              <option value="พฤษภาคม">พฤษภาคม</option>
              <option value="มิถุนายน">มิถุนายน</option>
              <option value="กรกฎาคม">กรกฎาคม</option>
              <option value="สิงหาคม">สิงหาคม</option>
              <option value="กันยายน">กันยายน</option>
              <option value="ตุลาคม">ตุลาคม</option>
              <option value="พฤศจิกายน">พฤศจิกายน</option>
              <option value="ธันวาคม">ธันวาคม</option>
            </select>
            <p
              v-if="!$v.positionEnd.required && $v.positionEnd.$dirty"
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูล
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >วันเปิดรับสมัคร</label
            >
            <input
              v-model.trim.lazy="$v.positionOpenRegister.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              type="date"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="
                !$v.positionOpenRegister.required &&
                $v.positionOpenRegister.$dirty
              "
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูล
            </p>
          </div>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >วันปิดรับสมัคร</label
            >
            <input
              v-model.trim.lazy="$v.positionCloseRegister.$model"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              type="date"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <p
              v-if="
                !$v.positionCloseRegister.required &&
                $v.positionCloseRegister.$dirty
              "
              class="text-error text-sm mt-2"
            >
              กรุณาระบุข้อมูล
            </p>
          </div>

          <div class="modal-action flex items-center justify-end w-full">
            <label
              class="btn btn-info text-white"
              @click="editToggle"
              v-if="!isEdit"
              >แก้ไข</label
            >
            <label class="btn btn-info text-white" v-if="isEdit" @click="editPosition">บันทึก</label>
            <label for="view" class="btn" @click="closeModal">ยกเลิก</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      isEdit: false,
      positionName: null,
      positionDetail: null,
      positionBenefit: null,
      positionLocation: null,
      positionContact: null,
      positionTime: null,
      positionStart: null,
      positionEnd: null,
      positionOpenRegister: null,
      positionCloseRegister: null,
    }
  },
  methods: {
    editToggle() {
      this.isEdit = true
      // const modal = document.getElementById('my-modal')
      // window.scrollTo(0, modal.offsetTop)
    },
    closeModal() {
      this.isEdit = false
    },
    editPosition() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        return
      }
      alert('แก้ไขข้อมูลสำเร็จ')
    },
  },

  validations: {
    positionName: {
      required,
    },
    positionDetail: {
      required,
    },
    positionBenefit: {
      required,
    },
    positionLocation: {
      required,
    },
    positionContact: {
      required,
    },
    positionTime: {
      required,
    },
    positionStart: {
      required,
    },
    positionEnd: {
      required,
    },
    positionOpenRegister: {
      required,
    },
    positionCloseRegister: {
      required,
    },
  },
}
</script>

<style></style>
