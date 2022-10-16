<template>
  <!-- <div>
    <CompanyNavBar></CompanyNavBar>
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">หน้าหลัก</p>
      </div>

      <div class="mt-5 md:mt-10">
        <div class="flex flex-col lg:flex-row gap-3">
          <nuxt-link
            to="/company/companyAccountManagement"
            class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg">
              <p class="p-6 text-white text-xl lg:text-4xl font-medium">
                จัดการข้อมูลบริษัท
              </p>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">จัดการข้อมูลบริษัทของคุณ</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/company/companyNewsManagement"
            class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg">
              <p class="p-6 text-white text-xl lg:text-4xl font-medium">
                ข่าวสารของบริษัท
              </p>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">จัดการข่าวสารบริษัทของคุณ</p>
            </div>
          </nuxt-link>
          <div
            class="cursor-pointer lg:w-4/12 shadow-xl rounded-lg hover:outline hover:outline-offset-2 hover:outline-black"
          >
            <div class="bg-blue-blue h-28 lg:h-44 w-auto rounded-t-lg">
              <p class="p-6 text-white text-xl lg:text-4xl font-medium">
                ดูผู้สมัครฝึกงาน
              </p>
            </div>
            <div class="bg-black-gray h-20 w-auto rounded-b-lg">
              <p class="p-6 text-white">ดูผู้ที่สนใจฝึกงานกับบริษัทของคุณ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-40" />
  </div> -->
  <div>
    <CompanyNavBar />
    <div class="flex">
      <section
        id="side-bar"
        class="bg-slate-200 w-1/4 min-h-screen hidden lg:block"
      >
        <div
          class="hidden lg:flex flex-col gap-3 items-center justify-center mt-6 px-4"
        >
          <div
            class="w-full h-auto p-4 text-center text-white rounded-xl shadow-lg cursor-pointer hover:bg-blue-blue transition-colors"
            :class="[
              changePage == 'MANAGEMENT'
                ? 'bg-blue-blue'
                : 'bg-white text-black',
            ]"
            @click="onClickButton('MANAGEMENT')"
          >
            จัดการข้อมูลบริษัท
          </div>
          <div
            class="w-full h-auto p-4 text-center text-white rounded-xl shadow-lg cursor-pointer hover:bg-blue-blue transition-colors"
            :class="[
              changePage == 'VIEW' ? 'bg-blue-blue' : 'bg-white text-black',
            ]"
            @click="onClickButton('VIEW')"
          >
            ดูผู้สมัครฝึกงาน
          </div>
        </div>
        {{ changePage }}
      </section>

      <section class="w-full">
        <div v-if="changePage == 'MANAGEMENT'" class="pt-8 px-5 w-full">
          <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-7">
            จัดการข้อมูลบริษัท
          </p>
          <div class="min-w-full h-auto bg-slate-100 p-9 rounded-xl">
            <div class="flex flex-row gap-4 lg:gap-12">
              <img v-if="companyInfo.imageName == null"
                src="@/static/logo.png"
                alt="##"
                class="w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-xl"
              />
              <img v-else
                :src="companyInfo.imageName"
                alt="##"
                class="w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-xl"
              />
              <div class="flex flex-col gap-2 md:justify-center lg:gap-4">
                <p class="font-bold md:text-xl lg:text-2xl">{{ companyInfo.companyName }}</p>
                <!-- <button class="btn btn-primary rounded-xl">แก้ไขรูปภาพ</button> -->
                <label for="upload-logo" class="btn btn-primary rounded-xl"
                  >แก้ไขรูปภาพ</label
                >
                <input @change="changepic"
                  id="upload-logo"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  class="hidden"
                />
              </div>
            </div>
          </div>

          <div class="pt-8 w-full">
            <p class="font-bold lg:text-2xl text-lg md:text-xl mb-3">
              ประวัติความเป็นมา
            </p>
            <div
              class="min-w-full h-auto bg-slate-100 p-9 rounded-xl flex flex-col"
            >
              <p v-if="companyInfo.companyDetail == null">ไม่มีข้อมูล</p>
              <p v-else>{{ companyInfo.companyDetail }}</p>
              <!-- <button class="btn btn-primary self-end mt-3 rounded-xl w-20">
                แก้ไข
              </button> -->
              <EditHistoryModal
                class="self-end mt-3 rounded-xl" @sent-detail = "editCompanyDetail"
              ></EditHistoryModal>
            </div>
          </div>

          <div class="pt-8 w-full">
            <div class="flex justify-between">
              <p class="font-bold lg:text-2xl text-lg md:text-xl mb-3">
                การประกาศงาน
              </p>
              <AddPositionModal @addPosition="addPosition"></AddPositionModal>
            </div>

            <div class="flex flex-col mt-4 gap-4 mb-8" v-for="position in positions" :key="position.recruitId
">
              <!-- <div
                class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
              >
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
              </div> -->
              <ViewPositionModal :Position="position" @editPosition="editPosition" @deletePosition="deletePosition"></ViewPositionModal>
              <p v-if="positions.length == 0">ไม่มีข้อมูล</p>
            </div>
          </div>
        </div>

        <div v-if="changePage == 'VIEW'" class="pt-8 px-5">
          <p class="font-bold lg:text-3xl text-xl md:text-2xl">
            ดูผู้สมัครฝึกงาน
          </p>
          <div class="flex items-center gap-4 mt-4">
            <div
              class="border-2 rounded-xl w-auto p-2 text-center cursor-pointer hover:bg-blue-blue transition-colors"
              @click="onClickView(false)"
              :class="[
                toggleView ? 'bg-white text-black' : 'bg-blue-blue text-white',
              ]"
            >
              <p>ยื่นใบสมัคร</p>
            </div>
            <div
              class="border-2 rounded-xl w-auto p-2 text-center cursor-pointer hover:bg-blue-blue transition-colors"
              @click="onClickView(true)"
              :class="[
                toggleView ? 'bg-blue-blue text-white' : 'bg-white text-black',
              ]"
            >
              <p>ผ่านการประเมิน</p>
            </div>
          </div>

          <div class="flex flex-col mt-4 gap-4 mb-8" v-if="!toggleView">
            <!-- <div
              class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
            >
              <div class="flex justify-between">
                <div class="gap-2">
                  <p class="font-bold">จิรสิน ผะอบทอง</p>
                  <p>ตำแหน่ง: Front-End Developer</p>
                </div>
                <div class="btn self-center">
                  <img src="@/assets/icons8-trash.svg" alt="#" />
                </div>
              </div>
            </div> -->
            <p v-if="!this.positions">ไม่มีข้อมูล</p>
            <ViewInternshipModal v-else></ViewInternshipModal>
          </div>

          <div class="flex flex-col mt-4 gap-4 mb-8" v-if="toggleView">
            <!-- <div
              class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
            >
              <div class="flex justify-between">
                <div class="gap-2">
                  <p class="font-bold">เจเจ</p>
                  <p>ตำแหน่ง: Front-End Developer</p>
                </div>
                <div class="btn self-center">
                  <img src="@/assets/icons8-trash.svg" alt="#" />
                </div>
              </div>
            </div> -->
            <ApprovedModal></ApprovedModal>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import CompanyNavBar from '~/components/CompanyNavBar.vue'
import Footer from '~/components/Footer.vue'
import AddPositionModal from '../../components/company/AddPositionModal.vue'
import ViewPositionModal from '~/components/company/ViewPositionModal.vue'
import ViewInternshipModal from '~/components/company/ViewInternshipModal.vue'
import ApprovedModal from '~/components/company/ApprovedModal.vue'
import EditHistoryModal from '~/components/company/EditHistoryModal.vue'
import dayjs from 'dayjs'
export default {
  components: {
    CompanyNavBar,
    Footer,
    AddPositionModal,
    ViewPositionModal,
    ViewInternshipModal,
    ApprovedModal,
    EditHistoryModal,
  },

  data() {
    return {
      changePage: 'MANAGEMENT',
      toggleView: false,
      positions:[],
      companyInfo:{},
    }
  },

  methods: {
    onClickButton(p) {
      this.changePage = p
    },
    onClickView(b) {
      this.toggleView = b
    },

    async addPosition(value) {
      await this.$axios
        .$post('/company/createrecruit', value, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          console.log(res)
          alert('เพิ่มงานสำเร็จ')
          this.$router.push('/company')
          location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    async editPosition(value) {
      let { positionForEdit, recruitId } = value      
      await this.$axios.$put(`/company/updateRec/${recruitId}`, positionForEdit, {
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
        },
      }).then((res) => {
        console.log(res)
        alert('แก้ไขสำเร็จ')
        this.$router.push('/company')
        location.reload()
      }).catch((err) => {
        console.log(err)
      })
    },

    deletePosition(id) {
      var r = confirm('ต้องการลบตำแหน่งนี้ใช่หรือไม่')
      if (r == true) {
        this.$axios
        .$delete(`/company/deleteRecru/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          console.log(res)
          alert('ลบสำเร็จ')
          this.$router.push('/company')
          location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
      }
      location.reload()
    },
     async editCompanyDetail(value) {
      // console.log("test",value)
      const data = {companyDetail:value}   
      await this.$axios.$post(`/company/updateCompanyDetailById/${localStorage.getItem('companyId')}`, data, {
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
        },
      }).then((res) => {
        console.log(res)
        alert('แก้ไขประวัติของบริษัทสำเร็จ')
        this.$router.push('/company')
        location.reload()
      }).catch((err) => {
        console.log(err)
      })
    },
    async changepic(value){
      console.log(value.target.files[0])
      let data = new FormData()
      data.append("image",value.target.files[0])
      await this.$axios.$post(`/company/uploadOne/${localStorage.getItem('companyId')}`, data, {
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
        },
      }).then((res) => {
        console.log(res)
        alert('แก้ไขรูปภาพสำเร็จ')
        this.$router.push('/company')
        location.reload()
      }).catch((err) => {
        console.log(err)
      })
    }

  },

  async mounted() {
    const accessToken = this.$cookiz.get('jwt')
    const companyId = localStorage.getItem('companyId')

    let companyResult = await this.$axios.$get(`/company/getCompanyStaffById/${companyId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.companyInfo = companyResult
    //แก้ hardcode ด้วย ไอ้หน้า หมี
    this.companyInfo.imageName = 'http://localhost:8081' + "/company/getpic/" + this.companyInfo.imageName
    console.log("🚀 ~ file: index.vue ~ line 310 ~ mounted ~ companyResult", companyResult)


    let positionsResult = await this.$axios.$get('/company/findRecruitById', {
      params: {
        companyId: companyId,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    positionsResult.map((position) => {
      position.showOpeningDate = dayjs(position.openingDate).format('DD/MM/YYYY')
      position.showStartDate = dayjs(position.startDate).format('DD/MM/YYYY')
      position.showEndDate = dayjs(position.endDate).format('DD/MM/YYYY')
    })
    console.log("🚀 ~ file: index.vue ~ line 315 ~ positionsResult.map ~ positionsResult", positionsResult)
    this.positions = await positionsResult
  },
}
</script>

<style></style>
