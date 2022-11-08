<template>
  <div>
    <AdminNavBar />
    <section class="mt-8">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-2xl font-bold text-gray-900">จัดการบัญชีบริษัท</h1>
            <!-- <p class="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p> -->
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <label
              for="add"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              สร้างบัญชีเจ้าหน้าที่
            </label>
            <input type="checkbox" id="add" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative w-11/12 max-w-5xl">
                <label
                  for="add"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                  >✕</label
                >
                <h3 class="text-lg font-bold mb-4">สร้างบัญชีเจ้าหน้าที่</h3>

                <div class="mb-4">
                  <label
                    class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                    >ชื่อจริง</label
                  >
                  <input
                    v-model.trim.lazy="$v.firstName.$model"
                    type="text"
                    class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="ชื่อจริง"
                  />
                  <p
                    v-if="!$v.firstName.required && $v.firstName.$dirty"
                    class="text-error text-sm mt-2"
                  >
                    กรุณาระบุข้อมูล
                  </p>
                </div>

                <div class="mb-4">
                  <label
                    class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                    >นามสกุล</label
                  >
                  <input
                    v-model.trim.lazy="$v.lastName.$model"
                    type="text"
                    class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="นามสกุล"
                  />
                  <p
                    v-if="!$v.lastName.required && $v.lastName.$dirty"
                    class="text-error text-sm mt-2"
                  >
                    กรุณาระบุข้อมูล
                  </p>
                </div>

                <div class="mb-4">
                  <label
                    class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                    >อีเมล</label
                  >
                  <input
                    v-model.trim.lazy="$v.staffEmail.$model"
                    type="email"
                    class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="อีเมล"
                  />
                  <p
                    v-if="!$v.staffEmail.required && $v.staffEmail.$dirty"
                    class="text-error text-sm mt-2"
                  >
                    กรุณาระบุข้อมูล
                  </p>
                  <p
                    v-if="!$v.staffEmail.email && $v.staffEmail.$dirty"
                    class="text-error text-sm mt-2"
                  >
                    กรุณาระบุข้อมูลเป็นอีเมล
                  </p>
                </div>

                <div class="mb-4">
                  <label
                    class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
                    >รหัสผ่าน</label
                  >
                  <input
                    v-model.trim.lazy="$v.password.$model"
                    type="password"
                    class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="รหัสผ่าน"
                  />
                  <p
                    v-if="!$v.password.required && $v.password.$dirty"
                    class="text-error text-sm mt-2"
                  >
                    กรุณาระบุข้อมูล
                  </p>
                  <p
                    v-if="!$v.password.minLength && $v.password.$dirty"
                    class="text-error text-sm mt-2"
                  >
                    กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร
                  </p>
                </div>

                <div class="modal-action flex items-center justify-end w-full">
                  <label
                    class="btn btn-info text-white"
                    @click="createStaffAccount"
                    >สร้างบัญชี</label
                  >
                  <label for="add" class="btn">ยกเลิก</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  ชื่อผู้ติดต่อ
                </th>
                <th
                  scope="col"
                  class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  ชื่อบริษัท
                </th>
                <th
                  scope="col"
                  class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  เบอร์โทรศัพท์
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  สถานะ
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">เปลี่ยนสถานะ</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="person in hrCompany" :key="person.companyId">
                <td
                  class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6"
                >
                  {{ person.contactName }}
                  <!-- <dl class="font-normal lg:hidden">
                    <dt class="sr-only">Title</dt>
                    <dd class="mt-1 truncate text-gray-700">
                      {{ person.title }}
                    </dd>
                    <dt class="sr-only sm:hidden">Email</dt>
                    <dd class="mt-1 truncate text-gray-500 sm:hidden">
                      {{ person.email }}
                    </dd>
                  </dl> -->
                </td>
                <td
                  class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                >
                  {{ person.companyName }}
                </td>
                <td
                  class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                >
                  {{ person.phoneNumber }}
                </td>
                <td
                  class="px-3 py-4 text-sm text-gray-500"
                  :class="[
                    person.status == false ? 'text-info' : 'text-red-500',
                  ]"
                >
                  {{ person.status == false ? 'ปกติ' : 'ระงับการใช้งาน' }}
                </td>
                <td
                  class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                >
                  <p
                    @click="changeCompanyStatus(person, person.companyId)"
                    class="text-blue-600 hover:text-blue-900"
                  >
                    เปลี่ยนสถานะ
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AdminNavBar from '~/components/admin/AdminNavBar.vue'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  components: { AdminNavBar },
  data() {
    return {
      hrCompany: [],
      firstName: '',
      lastName: '',
      staffEmail: '',
      password: '',
    }
  },
  async mounted() {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      this.$router.push('/admin/login')
    }
    let res = await this.$axios.$get('/admin/getAllCompany', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    console.log(res)
    this.hrCompany = res
  },
  methods: {
    async createStaffAccount() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      } else {
        const data = {
          staffFName: this.firstName,
          staffLName: this.lastName,
          email: this.staffEmail,
          password: this.password,
        }
        console.log(
          '🚀 ~ file: management.vue ~ line 264 ~ createStaffAccount ~ data',
          data
        )
        await this.$axios.$post('/admin/createStaff', data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        alert('สร้างบัญชีสำเร็จ')
        this.$router.push('/admin/management')
        location.reload()
      }
    },
    async changeCompanyStatus(person, companyId) {
      const accessToken = localStorage.getItem('accessToken')
      if (person.status == false) {
        await this.$axios.$post(
          `/admin/limitAccount/${companyId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        alert('เปลี่ยนสถานะเป็น ระงับการใช้งาน')
        person.status = true
      } else {
        await this.$axios.$post(
          `/admin/unSuspendAccount/${companyId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        alert('เปลี่ยนสถานะเป็น ปกติ')
        person.status = false
      }
    },
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    staffEmail: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
}
</script>

<style></style>
