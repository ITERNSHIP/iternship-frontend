<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label :for="Position.recruitId" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div>
            <p class="font-bold">{{ Position.title }}</p>
            <p>เปิดรับสมัคร: {{ Position.showStartDate }}</p>
            <p class="text-error">ปิดรับสมัคร: {{ Position.showEndDate }}</p>
            <p class="text-gray-400">แก้ไขเมื่อ: {{ Position.showOpeningDate }}</p>
          </div>
          <!-- <div class="btn self-center">
            <img src="@/assets/icons8-trash.svg" alt="#" />
          </div> -->
        </div>
      </label>
      <input type="checkbox" :id="Position.recruitId" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            :for="Position.recruitId"
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
              v-model="positionForEdit.title"
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
              v-model="positionForEdit.jobDetail"
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
              v-model="positionForEdit.welfare"
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
              v-model="positionForEdit.location"
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
              v-model="positionForEdit.contact"
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
              >วันเปิดรับสมัคร</label
            >
            <input
              v-model.trim.lazy="$v.positionOpenRegister.$model"
              v-model="positionForEdit.startDate"
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
              v-model="positionForEdit.endDate"
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
            <label class="btn btn-error text-white" v-if="!isEdit" @click="deletePosition(Position.recruitId)">ลบ</label>
            <label class="btn btn-info text-white" v-if="isEdit" @click="editPosition">บันทึก</label>
            <label :for="Position.recruitId" class="btn" @click="closeModal">ยกเลิก</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import dayjs from 'dayjs'
export default {
  props:{
    Position:{
      type: Object,
    }
  },

  data() {
    return {
      isEdit: false,
      positionName: this.Position.title,
      positionDetail: this.Position.jobDetail,
      positionBenefit: this.Position.welfare,
      positionLocation: this.Position.location,
      positionContact: this.Position.contact,
      positionOpenRegister: this.Position.startDate,
      positionCloseRegister: this.Position.endDate,

      positionForEdit:{
        recruitId: this.Position.recruitId,
        title: this.Position.title,
        jobDetail: this.Position.jobDetail,
        welfare: this.Position.welfare,
        location: this.Position.location,
        contact: this.Position.contact,
        startDate: this.Position.startDate,
        endDate: this.Position.endDate,
        openingDate: this.Position.openingDate,
      }
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
      this.setDefault()
    },
    editPosition() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.$swal({
          icon: 'error',
          title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
          showConfirmButton: false,
          timer: 1500,
        })
        // alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        return
      }
      delete this.Position.showOpeningDate
      delete this.Position.showStartDate
      delete this.Position.showEndDate
      this.positionForEdit.openingDate = dayjs().format('YYYY-MM-DD')
      this.$emit('editPosition', {positionForEdit: this.positionForEdit, recruitId: this.Position.recruitId})
    },

    setDefault(){
      this.positionForEdit={
        recruitId: this.Position.recruitId,
        title: this.Position.title,
        jobDetail: this.Position.jobDetail,
        welfare: this.Position.welfare,
        location: this.Position.location,
        contact: this.Position.contact,
        startDate: this.Position.startDate,
        endDate: this.Position.endDate,
      }
    },

    deletePosition(id){
      this.$emit('deletePosition', id)
    }
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
