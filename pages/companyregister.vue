<template>
  <div
    class="bg-slate-200 min-h-screen flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-full max-w-xl"
    >
      <div
        class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
      >
        สมัครสมาชิกสำหรับบริษัท
      </div>

      <div class="mt-10">
        <form action="#" @submit.prevent="onSubmit">
          <div>
            <div>
              <input
                v-model.trim.lazy="$v.email.$model"
                type="email"
                placeholder="อีเมล"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-error mt-2">กรุณาระบุอีเมล</p>
              <p
              v-if="!$v.email.email && $v.email.$dirty"
              class="text-error mt-2">กรุณาระบุอีเมลให้ถูกต้อง</p>
            </div>

            <div class="mt-3">
              <input
                v-model.trim.lazy="$v.password.$model"
                type="password"
                placeholder="รหัสผ่าน"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p 
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-error mt-2">กรุณาระบุรหัสผ่าน</p>
              <p 
              v-if="!$v.password.minLength && $v.password.$dirty"
              class="text-error mt-2">กรุณาระบุรหัสผ่านอย่างน้อย 6 ตัวขึ้นไป</p>
            </div>

            <div class="mt-3">
              <input
                v-model.trim.lazy="$v.companyName.$model"
                type="text"
                placeholder="ชื่อบริษัท"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p 
              v-if="!$v.companyName.required && $v.companyName.$dirty"
              class="text-error mt-2">กรุณาระบุชื่อบริษัท</p>
            </div>
          </div>

          <div class="mt-8">
            <div class="mt-3">
              <input
                v-model="$v.contractName.$model"
                type="text"
                placeholder="ชื่อผู้ติดต่อ"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p 
              v-if="!$v.contractName.required && $v.contractName.$dirty"
              class="text-error mt-2">กรุณาระบุชื่อผู้ติดต่อ</p>
            </div>
            <div class="mt-3">
              <input
                v-model="$v.phone.$model"
                type="number"
                placeholder="โทรศัพท์"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
              />
              <p 
              v-if="!$v.phone.required && $v.phone.$dirty"
              class="text-error mt-2">กรุณาระบุโทรศัพท์</p>
              <p 
              v-if=" $v.phone.minLength && $v.phone.$dirty"
              class="text-error mt-2">กรุณาระบุโทรศัพท์ให้ถูกต้อง</p>
            </div>
          </div>

          <div class="mt-8 flex-row">
            <input
              type="checkbox"
              v-model="agree"
              class="checkbox checkbox-xs mr-2"
            />
            <span
              >ยอมรับ
              <span class="text-blue-blue">นโยบายความเป็นส่วนตัว </span>ของ
              INTERNSHIP</span
            >
          </div>

          <div class="flex w-full mt-8">
            <button
              type="submit"
              class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded-xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">สมัครสมาชิก</span>
            </button>
          </div>
        </form>
      </div>
      <div class="mt-8 flex items-center justify-center">
        <span>เป็นสมาชิกอยู่แล้ว ? <nuxt-link to="/login"><span class="text-blue-blue">เข้าสู่ระบบ</span></nuxt-link></span>
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
} from 'vuelidate/lib/validators'
export default {
    data(){
        return {
            email: null,
            password: null,
            companyName: null,
            contractName: null,
            phone: null,
            agree: false,
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        },
        companyName: {
            required
        },
        contractName: {
            required
        },
        phone: {
            required,
            numeric,
            minLength: minLength(10),
        },
    },

    methods: {
         onSubmit() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน')
                return
            }
            if (this.agree === false) {
                alert('กรุณายอมรับนโยบายความเป็นส่วนตัว')
                return
            }
            alert('สมัครสมาชิกสำเร็จ')
        }
    }
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
