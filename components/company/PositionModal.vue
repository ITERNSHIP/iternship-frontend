<template>
  <div>
    <section id="view" v-if="view">
      <label
        :for="Position.recruitId"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >ดู</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" :id="Position.recruitId" class="modal-toggle" />
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
                v-model="Position.title"
                class="mb-5 mt-2 text-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                v-model="Position.jobDetail"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                v-model="Position.welfare"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                v-model="Position.location"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                v-model="Position.contact"
                class="mb-5 mt-2 text-black min-h-[100px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                v-model="Position.longTerm"
                class="mb-5 mt-2 text-black font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
                placeholder=""
                readonly
              />
            </div>
          </div>
          <div class="modal-action">
            <label :for="Position.recruitId" class="btn">กลับ</label>
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
                v-model="position.title"
                class="mt-2 mb-5 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <!-- <p
                class="text-error mb-5"
                v-if="!$v.positionName.required && $v.positionName.$dirty"
              >
                กรุณาระบุชื่อตำแหน่ง
              </p> -->

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                v-model.trim.lazy="$v.positionDetail.$model"
                v-model="position.jobDetail"
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
                v-model="position.welfare"
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
                v-model="position.longTerm"
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
            <label class="btn btn-info text-white" @click="clickAddPosition"
              >เพิ่ม</label
            >
            <label for="modal-add" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="edit" v-if="edit">
      <label
        :for="`${editPosition.recruitId}-edit`"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >แก้ไข</label
      >
      <!-- Put this part before </body> tag -->
      <input
        type="checkbox"
        :id="`${editPosition.recruitId}-edit`"
        class="modal-toggle"
      />
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
                v-model="editPosition.title"
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >รายละเอียดของงาน</label
              >
              <textarea
                v-model="editPosition.jobDetail"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สวัสดิการ</label
              >
              <textarea
                v-model="editPosition.welfare"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >สถานที่ปฎิบัติงาน</label
              >
              <textarea
                v-model="editPosition.location"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ติดต่อ</label
              >
              <textarea
                v-model="editPosition.contact"
                class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />

              <label
                class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                >ระยะเวลาในการฝึกงาน (เดือน)</label
              >
              <input
                v-model="editPosition.longTerm"
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder=""
              />
            </div>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white" @click="clickEditPosition"
              >แก้ไข</label
            >
            <label :for="`${editPosition.recruitId}-edit`" class="btn"
              >กลับ</label
            >
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
    Position: {
      type: Object,
    },
    editPosition: {
      type: Object,
    },
  },

  data() {
    return {
      positionDetail: null,
      positionBenefit: null,
      positionLocation: null,
      positionContact: null,
      positionDuration: null,
      position: {
        title: '',
        jobDetail: '',
        welfare: '',
        location: '',
        contact: '',
        longTerm: '',
        company: {
          companyId: this.$store.state.company.companyId,
        },
      },
      getOnePosition: {},
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

  methods: {
    clickAddPosition() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        alert('กรุณากรอกข้อมูลให้ครบ')
        return
      }
      this.$emit('clickAddPosition', this.position)
      // this.$axios
      //   .post('/company/createrecruit', this.position)
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    clickEditPosition() {
      let editPosition = {
        title: this.editPosition.title,
        jobDetail: this.editPosition.jobDetail,
        welfare: this.editPosition.welfare,
        location: this.editPosition.location,
        contact: this.editPosition.contact,
        longTerm: this.editPosition.longTerm,
      }
      this.$emit('clickEditPosition', {
        editPosition,
        recruitId: this.editPosition.recruitId,
      })
    },
  },

  // async mounted() {
  //   let Position = await this.$axios.get(`/company/${this.recruitId}`, {
  //     headers: {
  //       Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
  //     },
  //   })
  //   this.position = Position
  //   console.log("🚀 ~ file: PositionModal.vue ~ line 414 ~ mounted ~ Position", Position)
  // },
}
</script>

<style></style>
