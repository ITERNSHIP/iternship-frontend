<template>
  <div>
    <StudentNavBar />
    <div class="flex flex-col px-8 pt-8">
      <div>
        <p class="font-bold lg:text-3xl text-xl md:text-2xl mb-4">
          ตรวจสอบสถานะฟอร์มสมัครฝึกงาน
        </p>
        <div class="flex space-x-2">
          <div
            class="border-2 rounded-xl w-40 p-2 text-center cursor-pointer hover:bg-blue-blue transition-colors"
            @click="onRoleClick('pending')"
            :class="[
              statusName == 'pending'
                ? 'bg-blue-blue text-white'
                : 'bg-white text-black',
            ]"
          >
            <p>รอผลการประเมิน</p>
          </div>
          <div
            class="border-2 rounded-xl w-40 p-2 text-center cursor-pointer hover:bg-green-400 transition-colors"
            @click="onRoleClick('success')"
            :class="[
              statusName == 'success'
                ? 'bg-green-500 text-white'
                : 'bg-white text-black',
            ]"
          >
            <p>เชิญสัมภาษณ์งาน</p>
          </div>
          <div
            class="border-2 rounded-xl w-40 p-2 text-center cursor-pointer hover:bg-red-400 transition-colors"
            @click="onRoleClick('reject')"
            :class="[
              statusName == 'reject'
                ? 'bg-red-500 text-white'
                : 'bg-white text-black',
            ]"
          >
            <p>ไม่เชิญสัมภาษณ์งาน</p>
          </div>
        </div>
      </div>

      <div class="mt-8 mb-8 bg-gray-200 h-1 w-auto rounded-lg"></div>

      <section v-if="statusName == 'pending'" class="mt-4 flex flex-col">
        <div v-for="pendingInfo in pendingData" :key="pendingInfo.regisId">
          <div
            class="mb-3 p-4 h-auto w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
          >
            <div class="flex flex-col md:flex-row justify-between w-full">
              <div class="flex-1">
                <p class="p-1 text-lg font-bold">
                  {{ pendingInfo.companyName }}: {{ pendingInfo.position }}
                </p>
              </div>

              <div>
                <div
                  class="border-2 rounded-lg border-blue-blue h-auto w-60 text-center p-1"
                >
                  <p class="text-blue-blue">อยู่ในระหว่างการประเมิน</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="statusName == 'success'" class="mt-4 flex flex-col">
        <div
          v-for="successInfo in successData"
          :key="successInfo.regisId"
          class="mb-3 p-4 h-auto w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
        >
          <div class="flex flex-col md:flex-row justify-between w-full">
            <div class="flex-1">
              <p class="p-1 text-lg font-bold">
                {{ successInfo.companyName }}: {{ successInfo.position }}
              </p>
            </div>

            <div>
              <div
                class="border-2 rounded-lg border-green-400 h-auto w-auto text-center p-1"
              >
                <p class="text-green-400">เชิญสัมภาษณ์งาน กรุณารอบริษัทติดต่อกลับ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="statusName == 'reject'" class="mt-4 flex flex-col">
        <div
          v-for="rejectInfo in rejectData"
          :key="rejectInfo.regisId"
          class="mb-3 p-4 h-auto w-auto border-2 border-gray-400 rounded-lg flex flex-col md:flex-row md:justify-between cursor-pointer"
        >
          <div class="flex flex-col md:flex-row justify-between w-full">
            <div class="flex-1">
              <p class="p-1 text-lg font-bold">
                {{ rejectInfo.companyName }}: {{ rejectInfo.position }}
              </p>
            </div>

            <div>
              <div
                class="border-2 rounded-lg border-red-400 h-auto w-auto text-center p-1"
              >
                <p class="text-red-400">ไม่เชิญสัมภาษณ์งาน</p>
              </div>
            </div>
          </div>
        </div>
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
      statusName: 'pending',
      pendingData: [],
      successData: [],
      rejectData: [],
    }
  },
  methods: {
    onRoleClick(role) {
      this.statusName = role
    },
  },

  async mounted() {
    let accessToken = localStorage.getItem('accessToken')
    if(!accessToken){
      this.$router.push('/login')
    }
    let userId = localStorage.getItem('userId')
    await this.$axios
      .$get('/users/findregisBystatusPending', {
        params: {
          userId: userId,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        this.pendingData = res
      })
    await this.$axios
      .$get('/users/findregisBystatusPass', {
        params: {
          userId: userId,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        this.successData = res
      })
    await this.$axios
      .$get('/users/findregisBystatusNotpass', {
        params: {
          userId: userId,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        this.rejectData = res
      })
  },
}
</script>

<style></style>
