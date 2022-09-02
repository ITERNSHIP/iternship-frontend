<template>
  <div>
    <section id="view" v-if="view">
      <label
        for="modal-view"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >ดู</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-view" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                ดูข้อมูลตำแหน่งที่บริษัทของคุณ
              </h1>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ชื่อตำแหน่ง</label
              >
              <input
                v-model="position.name"
                class="mb-5 mt-2 text-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                v-model="position.detail"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                v-model="position.benefit"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                v-model="position.location"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                v-model="position.contact"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                v-model="position.duration"
                class="mb-5 mt-2 text-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />
            </div>
          </div>
          <div class="modal-action">
            <label for="modal-view" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="add" v-if="add">
      <label
        for="modal-add"
        class="btn modal-button btn-info text-white w-20 md:w-32"
        >เพิ่ม</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-add" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                เพิ่มข้อมูลตำแหน่งที่บริษัทของคุณ
              </h1>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ชื่อตำแหน่ง</label
              >
              <input
                v-model.trim.lazy="$v.positionName.$model"
                v-model="position.name"
                class="mt-2 mb-5 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <p
                class="text-error mb-5"
                v-if="!$v.positionName.required && $v.positionName.$dirty"
              >
                กรุณาระบุชื่อตำแหน่ง
              </p>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                v-model.trim.lazy="$v.positionDetail.$model"
                v-model="position.detail"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <p
                class="text-error mb-5"
                v-if="!$v.positionDetail.required && $v.positionDetail.$dirty"
              >
                กรุณาระบุรายละเอียดของงาน
              </p>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                v-model.trim.lazy="$v.positionBenefit.$model"
                v-model="position.benefit"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <p
                class="text-error mb-5"
                v-if="!$v.positionBenefit.required && $v.positionBenefit.$dirty"
              >
                กรุณาระบุสวัสดิการ
              </p>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                v-model.trim.lazy="$v.positionLocation.$model"
                v-model="position.location"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <p
                class="text-error mb-5"
                v-if="
                  !$v.positionLocation.required && $v.positionLocation.$dirty
                "
              >
                กรุณาระบุสถานที่ปฎิบัติงาน
              </p>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                v-model.trim.lazy="$v.positionContact.$model"
                v-model="position.contact"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <p
                class="text-error mb-5"
                v-if="!$v.positionContact.required && $v.positionContact.$dirty"
              >
                กรุณาระบุติดต่อ
              </p>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                v-model.trim.lazy="$v.positionDuration.$model"
                v-model="position.duration"
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <p
                class="text-error mb-5"
                v-if="
                  !$v.positionDuration.required && $v.positionDuration.$dirty
                "
              >
                กรุณาระบุระยะเวลาในการฝึกงาน
              </p>
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white">เพิ่ม</label>
            <label for="modal-add" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="edit" v-if="edit">
      <label
        for="modal-edit"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >แก้ไข</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-edit" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="container">
            <div class="relative">
              <h1
                class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
              >
                แก้ไขข้อมูลตำแหน่งที่บริษัทของคุณ
              </h1>

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ชื่อตำแหน่ง</label
              >
              <input
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white">แก้ไข</label>
            <label for="modal-edit" class="btn">กลับ</label>
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
    return {}
  },
  props: {
    positionShow: {
      type: String,
    },
    add: {
      type: Boolean,
    },
    edit: {
      type: Boolean,
    },
    view: {
      type: Boolean,
    },
  },

  data() {
    return {
      positionName: null,
      positionDetail: null,
      positionBenefit: null,
      positionLocation: null,
      positionContact: null,
      positionDuration: null,
      position: {
        name: '',
        detail: '',
        benefit: '',
        location: '',
        contact: '',
        duration: '',
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
    positionDuration: {
      required,
    },
  },
}
</script>

<style></style>
