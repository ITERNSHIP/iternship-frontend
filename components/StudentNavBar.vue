<template>
  <div class="navbar bg-black-gray rounded-none justify-between">
    <div class="px-4 w-full">
      <div class="flex cursor-pointer ">
        <!-- <a class="btn btn-ghost normal-case text-xl text-cheese">ITERNSHIP</a> -->
        <img src="@/static/logo.png" alt="##" class="w-16">
      </div>
      <div class="lg:flex mx-12 hidden">
        <ul class="menu menu-horizontal space-x-6 text-white">
          <li><nuxt-link to="/student">หน้าหลัก</nuxt-link></li>
          <li><nuxt-link to="/student/news">ข่าวสาร</nuxt-link></li>
          <li><nuxt-link to="/student/forms">สมัครฝึกงาน</nuxt-link></li>
          <li><nuxt-link to="/student/profile">ข้อมูลส่วนตัว</nuxt-link></li>
          <!-- <li><a>เกี่ยวกับเรา</a></li> -->
        </ul>
      </div>

      <div class="lg:flex ml-auto space-x-6 hidden pr-2">
        <nuxt-link to="/login" v-if="!`${this.$cookiz.get('jwt')}`" class="btn btn-info text-white w-32">เข้าสู่ระบบ</nuxt-link>
        <button v-if="`${this.$cookiz.get('jwt')}`" class="btn text-white w-32" @click="logout">ออกจากระบบ</button>
      </div>

      <!-- Mobile Hambeger -->
      <!-- <div class="dropdown dropdown-left flex flex-none md:hidden">
        <button tabindex="0" class="btn-square btn-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <nuxt-link to="/student" class="text-black  font-bold">Home</nuxt-link>
          <li class="text-black font-bold">News</li>
          <nuxt-link to="/student/forms" class="text-black  font-bold"
            >Forms</nuxt-link
          >
          <li class="text-black  font-bold">About</li>
        </ul>
      </div> -->
    </div>

    <div class="dropdown dropdown-end cursor-pointer lg:hidden pr-6">
        <button tabindex="0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7711/7711100.png"
            class="h-5 w-5"
            alt="hambuger"
          />
        </button>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><nuxt-link to="/student">หน้าหลัก</nuxt-link></li>
          <li><nuxt-link to="/student/news">ข่าวสาร</nuxt-link></li>
          <li><nuxt-link to="/student/forms">สมัครฝึกงาน</nuxt-link></li>
          <li><nuxt-link to="/student/profile">ข้อมูลส่วนตัว</nuxt-link></li>
          <!-- <li><a>เกี่ยวกับเรา</a></li> -->
          <!-- <li><a>เข้าสู่ระบบ</a></li> -->
          <li><a @click="logout">ออกจากระบบ</a></li>
        </ul>
      </div>
  </div>
</template>

<script scoped>
export default {
  methods: {
    logout() {
      this.$cookiz.remove('jwt')
      localStorage.clear()
      this.$router.push('/')
      alert('ออกจากระบบสำเร็จ')
    },
  },
}
</script>

<style></style>
