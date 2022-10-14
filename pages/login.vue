<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-black-gray"
  >
    <img src="@/static/logo.png" alt="##" class="w-32 md:w-auto" />
    <div class="flex flex-row gap-2">
      <div
        class="h-10 w-24 md:w-32 self-start p-2 rounded-t-md text-center hover:bg-white transition-colors cursor-pointer"
        :class="[loginRole == 'STUDENT' ? 'bg-white' : 'bg-blue-blue']"
        @click="onRoleClick('STUDENT')"
      >
        นักศึกษา
      </div>
      <div
        class="h-10 w-24 md:w-32 self-start p-2 rounded-t-md text-center hover:bg-white transition-colors cursor-pointer"
        :class="[loginRole == 'COMPANY' ? 'bg-white' : 'bg-blue-blue']"
        @click="onRoleClick('COMPANY')"
      >
        บริษัท
      </div>
      <div
        class="h-10 w-24 md:w-32 self-start p-2 rounded-t-md text-center hover:bg-white transition-colors cursor-pointer"
        :class="[loginRole == 'STAFF' ? 'bg-white' : 'bg-blue-blue']"
        @click="onRoleClick('STAFF')"
      >
        เจ้าหน้าที่
      </div>
    </div>

    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
      v-if="this.loginRole == 'STUDENT'"
    >
      <div
        class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
      >
        เข้าสู่ระบบสำหรับนักศึกษา
      </div>

      <div class="mt-10">
        <form action="#" @submit.prevent="userLogin">
          <!-- <div class="flex flex-col mb-6">
            <label
              for="email"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >รหัสนักศึกษา:</label
            >
            <div class="relative">
              <input
                v-model.trim.lazy="$v.studentNum.$model"
                v-model="login.username"
                id="studentNum"
                type="number"
                name="studentNum"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="รหัสนักศึกษา"
              />
              <p
                class="text-error"
                v-if="!$v.studentNum.required && $v.studentNum.$dirty"
              >
                กรุณาระบุรหัสนักศึกษา
              </p>
              <p
                class="text-error"
                v-if="!$v.studentNum.minLength && $v.studentNum.$dirty"
              >
                กรุณาระบุรหัสนักศึกษาให้ครบ 11 หลัก
              </p>
              <p
                class="text-error"
                v-if="!$v.studentNum.maxLength && $v.studentNum.$dirty"
              >
                รหัสนักศึกษาระบุได้ไม่เกิน 11 หลัก
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >รหัสผ่าน:</label
            >
            <div class="relative">
              <input
                v-model.trim.lazy="$v.studentPass.$model"
                v-model="login.password"
                id="password"
                type="password"
                name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="รหัสผ่าน"
              />
            </div>

            <p
              class="text-error"
              v-if="!$v.studentPass.minLength && $v.studentPass.$dirty"
            >
              กรุณาระบุรหัสผ่าน
            </p>
            <p
              class="text-error"
              v-if="!$v.studentPass.required && $v.studentPass.$dirty"
            >
              กรุณาระบุรหัสผ่าน
            </p>
          </div> -->

          <div class="flex w-full">
            <a
              href="https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=TQ8A3gws&redirect_uri=http://localhost:3000/redirect&state=1234"
              type="submit"
              class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">เข้าสู่ระบบ</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
      v-if="this.loginRole == 'COMPANY'"
    >
      <div
        class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
      >
        เข้าสู่ระบบสำหรับบริษัท
      </div>

      <div class="mt-10">
        <form action="#" @submit.prevent="companyLogin">
          <div class="flex flex-col mb-6">
            <label
              for="email"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >อีเมล:</label
            >
            <div class="relative">
              <input
                v-model.trim.lazy="$v.companyEmail.$model"
                v-model="login.email"
                id="email"
                type="email"
                name="email"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="อีเมล"
              />
              <p
                class="text-error"
                v-if="!$v.companyEmail.required && $v.companyEmail.$dirty"
              >
                กรุณาระบุอีเมล
              </p>
              <p
                class="text-error"
                v-if="!$v.companyEmail.email && $v.companyEmail.$dirty"
              >
                กรุณาระบุอีเมลให้ถูกต้อง
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >รหัสผ่าน:</label
            >
            <div class="relative">
              <input
                v-model.trim.lazy="$v.companyPass.$model"
                v-model="login.password"
                id="password"
                type="password"
                name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="รหัสผ่าน"
              />
            </div>
            <p
              class="text-error"
              v-if="!$v.companyPass.minLength && $v.companyPass.$dirty"
            >
              กรุณาระบุรหัสผ่าน
            </p>
            <p
              class="text-error"
              v-if="!$v.companyPass.required && $v.companyPass.$dirty"
            >
              กรุณาระบุรหัสผ่าน
            </p>
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">เข้าสู่ระบบ</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div class="flex items-center justify-center mt-6">
            <nuxt-link to="/companyregister">
              <u class="text-blue-blue">สมัครสมาชิก</u>
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>

    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
      v-if="this.loginRole == 'STAFF'"
    >
      <div
        class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
      >
        เข้าสู่ระบบสำหรับเจ้าหน้าที่
      </div>

      <div class="mt-10">
        <form action="#">
          <div class="flex flex-col mb-6">
            <label
              for="email"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >อีเมล:</label
            >
            <div class="relative">
              <input
                v-model.trim.lazy="$v.staffEmail.$model"
                id="email"
                type="email"
                name="email"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="อีเมล"
              />
              <p
                class="text-error"
                v-if="!$v.staffEmail.required && $v.staffEmail.$dirty"
              >
                กรุณาระบุอีเมล
              </p>
              <p
                class="text-error"
                v-if="!$v.staffEmail.email && $v.staffEmail.$dirty"
              >
                กรุณาระบุอีเมลให้ถูกต้อง
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >รหัสผ่าน:</label
            >
            <div class="relative">
              <input
                v-model.trim.lazy="$v.staffPass.$model"
                id="password"
                type="password"
                name="password"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="รหัสผ่าน"
              />
            </div>
            <p
              class="text-error"
              v-if="!$v.staffPass.required && $v.staffPass.$dirty"
            >
              กรุณาระบุรหัสผ่าน
            </p>
            <p
              class="text-error"
              v-if="!$v.staffPass.minLength && $v.staffPass.$dirty"
            >
              กรุณาระบุรหัสผ่าน
            </p>
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">เข้าสู่ระบบ</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  numeric,
  email,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      loginRole: 'STUDENT',
      studentNum: null,
      studentPass: null,
      companyEmail: null,
      companyPass: null,
      staffEmail: null,
      staffPass: null,
      login: {
        username: '',
        password: '',
      },
    }
  },
  validations: {
    studentNum: {
      required,
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
    studentPass: {
      required,
      minLength: minLength(6),
    },
    companyEmail: {
      required,
      email,
    },
    companyPass: {
      required,
      minLength: minLength(6),
    },
    staffEmail: {
      required,
      email,
    },
    staffPass: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    onRoleClick(role) {
      this.loginRole = role
    },
    async userLogin() {
      let response = await this.$axios
        .$post('/users/login', this.login, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(
            '🚀 ~ file: login.vue ~ line 399 ~ .then ~ response',
            response
          )
          console.log(
            '🚀 ~ file: login.vue ~ line 402 ~ .then ~ response.message',
            response.message
          )
          if (response.message == 'success') {
            this.$cookiz.set('jwt', response.accessToken, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7,
            })
            alert('เข้าสู่ระบบสำเร็จ')
            console.log('Login success!!')
            this.$router.push('/student')
          }
        })
        .catch((error) => {
          console.log('🚀 ~ file: login.vue ~ line 417 ~ .catch ~ error', error)
          alert('รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')
        })
      // console.log("🚀 ~ file: login.vue ~ line 414 ~ userLogin ~ response", response)

      // try {
      //    await this.$auth.loginWith('cookie', { data: this.login })

      //   console.log(this.$auth.strategies.cookie.token.property);
      // } catch (err) {
      //   console.log(err)
      // }
    },
    async companyLogin() {
      let response = await this.$axios.$post('/company/login', this.login, {
        withCredentials: true,
      })
      this.$cookiz.set('jwt', response.accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
      if (response.message == 'success') {
        let { companyId, companyName } = response
        localStorage.setItem('companyId', companyId)
        localStorage.setItem('companyName', companyName)
        console.log(localStorage.getItem('companyId'))
        console.log(localStorage.getItem('companyName'))
        alert('เข้าสู่ระบบสำเร็จ')
        console.log('Login success!!')
        this.$router.push('/company')
      } else {
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')
      }
      // let { companyId, companyName } = response
      // localStorage.setItem('companyId', companyId)
      // localStorage.setItem('companyName', companyName)

      // this.$store.dispatch('company/setCompanyId', companyId)
      // this.$store.dispatch('company/setCompanyName', companyName)

      // console.log(localStorage.getItem('companyId'))
      // console.log(localStorage.getItem('companyName'))
      // alert('เข้าสู่ระบบสำเร็จ')
      // console.log('Login success!!')
      // this.$router.push('/company')
    },
  },

  // async mounted(){
  //   this.$cookiz.removeAll()
  // }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
