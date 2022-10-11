<template>
  <div>
    <section class="add-button">
      <label for="add" class="btn btn-info modal-button text-white"
        >เพิ่มงาน</label
      >
      <input type="checkbox" id="add" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label for="add" class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">
            เพิ่มข้อมูลงานที่รับสมัครนักศึกษาฝึกงาน
          </h3>

          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อตำแหน่ง</label
            >
            <input
              v-model.trim.lazy="$v.positionName.$model"
              v-model="addPositionData.title"
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
              v-model="addPositionData.jobDetail"
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
              v-model="addPositionData.welfare"
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
            <textarea
              v-model.trim.lazy="$v.positionLocation.$model"
              v-model="addPositionData.location"
              class="mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
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
              v-model="addPositionData.contact"
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
              v-model="addPositionData.startDate"
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
              v-model="addPositionData.endDate"
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
            <label class="btn btn-info text-white" @click="clickAddPosition"
              >เพิ่มข้อมูล</label
            >
            <label for="add" class="btn">ยกเลิก</label>
          </div>

          {{ addPositionData }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      positionName: null,
      positionDetail: null,
      positionBenefit: null,
      positionLocation: null,
      positionContact: null,
      positionOpenRegister: null,
      positionCloseRegister: null,
      addPositionData: {
        title: '',
        jobDetail: '',
        welfare: '',
        location: '',
        contact: '',
        startDate: '',
        endDate: '',
        openingDate: '',
        company: {
          companyId: localStorage.getItem('companyId'),
        },
      },
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

  methods: {
    clickAddPosition() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        // let opening = new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})// 08/19/2020 (month and day with two digits)
        // this.addPositionData.openingDate = dayjs().format('DD/MM/YYYY')
        return
      }
      this.addPositionData.openingDate = dayjs().format('YYYY-MM-DD')
      this.$emit('addPosition', this.addPositionData)
    },
  },
}
</script>

<style></style>
