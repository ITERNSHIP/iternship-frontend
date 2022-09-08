<template>
  <div>
    <CompanyNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16 flex flex-row justify-between">
        <p class="font-bold lg:text-4xl text-2xl md:text-3xl">
          จัดการข้อมูลบริษัทของคุณ
        </p>
        <HistoryModal :add="true" v-if="companyResult.companyDetail == null" />
      </div>

      <!-- <div>
        <div class="mt-10 flex flex-row justify-between">
          <p class="pt-2 text-lg font-normal md:text-2xls">
            ความเป็นมาของบริษัท
          </p>
        </div>
      </div> -->

      <!-- <div class="mt-5 md:mt-10 rounded-lg bg-slate-200 h-[200px] w-auto justify-items-center text-center " v-if="companyResult.companyDetail == null">
          ไม่มีข้อมูล
      </div> -->

      <div
        class="mt-5 md:mt-10 rounded-lg bg-slate-200 h-auto w-auto justify-items-center"
      >
        <div class="flex flex-col w-full h-auto p-3 lg:flex-row">
          <img
            src="https://picsum.photos/400/400"
            alt="//"
            class="p-5 block ml-auto mr-auto w-2/4 rounded-lg lg:w-1/4 lg:ml-0 lg:mr-0"
          />
          <div>
            <p class="p-5 text-lg font-normal md:text-2xl md:font-bold">
              ความเป็นมาของบริษัท
            </p>
            <p class="p-5">
              {{ companyResult.companyDetail }}
            </p>
          </div>
        </div>

        <!-- <button class="btn btn-primary w-20 md:w-32 text-white m-3">
            แก้ไข
          </button> -->
        <HistoryModal :edit="true" :editHistory="companyResult" @clickEditHistory="editHistory" class="p-5 flex justify-end" />
      </div>

      <div class="mt-10 bg-black h-1 w-auto rounded-lg"></div>

      <div class="mt-10">
        <div>
          <div class="mt-10 flex flex-row justify-between">
            <p class="pt-2 text-lg font-normal md:text-2xl md:font-bold">
              ตำแหน่งที่เปิดรับ
            </p>
            <!-- <button class="btn btn-info w-20 md:w-32 text-white">เพิ่ม</button> -->
            <PositionModal :add="true" @clickAddPosition="addPosition" />
          </div>
          <div
            v-for="position in positions"
            :key="position.recruitId"
            class="mt-4 p-4 h-auto lg:h-16 w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between"
          >
            <p class="text-blue-blue md:pt-2 lg:pt-0">{{ position.title }}</p>
            <div
              class="flex flex-col gap-2 md:flex-row md:items-center mt-3 md:mt-0"
            >
              <!-- <button class="btn btn-primary w-full md:w-20 py-1 text-white">
                ดู
              </button>
              <button class="btn btn-primary w-full md:w-20 text-white">
                แก้ไข
              </button> -->
              <PositionModal :view="true" :Position="position" />
              <!-- <PositionModal :edit="true" /> -->
              <PositionModal
                :edit="true"
                :editPosition="position"
                @clickEditPosition="editPosition"
              />
              <button
                class="btn btn-primary w-full md:w-20 text-white"
                @click="deletePosition(position.recruitId)"
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyNavBar from '~/components/CompanyNavBar.vue'
import PositionModal from '~/components/company/PositionModal.vue'
import HistoryModal from '~/components/company/HistoryModal.vue'
export default {
  components: {
    CompanyNavBar,
    PositionModal,
    HistoryModal,
  },

  created() {},

  data() {
    return {
      positions: [],
      company: {
        companyId: this.$store.state.company.companyId,
      },
      companyResult: {},
    }
  },

  methods: {
    async addPosition(value) {
      // console.log(value)
      // console.log(this.$cookiz.get('jwt'));
      await this.$axios
        .$post('company/createrecruit', value, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      alert('เพิ่มตำแหน่งสำเร็จ')
      this.$router.push('/company/companyAccountManagement')
      location.reload()
    },

    async editPosition(value) {
      console.log(
        '🚀 ~ file: companyAccountManagement.vue ~ line 138 ~ editPosition ~ value',
        value
      )
      let { recruitId, editPosition } = value
      // console.log(value)
      // console.log(this.$cookiz.get('jwt'));
      await this.$axios
        .$put(`company/updateRec/${recruitId}`, editPosition, {
          headers: {
            Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
          },
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      alert('แก้ไขตำแหน่งสำเร็จ')
      this.$router.push('/company/companyAccountManagement')
      location.reload()
    },

    async deletePosition(recruitId) {
      var r = confirm('ต้องการลบตำแหน่งนี้ใช่หรือไม่')
      if (r == true) {
        await this.$axios
          .$delete(`/company/deleteRecru/${recruitId}`, {
            headers: {
              Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
            },
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        alert('ลบตำแหน่งสำเร็จ')
      }
      this.$router.push('/company/companyAccountManagement')
      location.reload()
    },

    async editHistory(value){
      console.log(value)
      await this.$axios.$post(`/company/updateCompanyDetailById/${localStorage.getItem("companyId")}`, value,{
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('jwt')}`,
        },
      })
      .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      alert('แก้ไขประวัติสำเร็จ')
      this.$router.push('/company/companyAccountManagement')
      location.reload()
      console.log("🚀 ~ file: companyAccountManagement.vue ~ line 197 ~ editHistory ~ e", e)
    }



  },
  async mounted() {
    const accessToken = this.$cookiz.get('jwt')
    const companyId = localStorage.getItem('companyId')
    console.log("🚀 ~ file: companyAccountManagement.vue ~ line 185 ~ mounted ~ accessToken", accessToken)
    let positionsResult = await this.$axios.$get('company/findRecruitById', {
      params:{
        companyId: companyId
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    this.positions = positionsResult
    console.log(
      '🚀 ~ file: companyAccountManagement.vue ~ line 166 ~ mounted ~ positionsResult',
      positionsResult
    )
    console.log(
      '🚀 ~ file: companyAccountManagement.vue ~ line 173 ~ mounted ~ this.positions',
      this.positions
    )

    let companyResult = await this.$axios.$get(`/company/getCompanyStaffById/${companyId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    console.log("🚀 ~ file: companyAccountManagement.vue ~ line 212 ~ mounted ~ companyResult", companyResult)
    this.companyResult = companyResult
  },
}
</script>

<style></style>
