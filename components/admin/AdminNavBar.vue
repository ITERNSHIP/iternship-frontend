<template>
  <div>
    <div class="navbar bg-black-gray rounded-none justify-between">
    <div class="px-4 w-full">
      <div class="flex cursor-pointer ">
        <!-- <a class="btn btn-ghost normal-case text-xl text-cheese">ITERNSHIP</a> -->
        <img src="@/static/logo.png" alt="##" class="w-16">
      </div>

      <div class="lg:flex ml-auto space-x-6 hidden pr-2">
        
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
          <!-- <li><a>เข้าสู่ระบบ</a></li> -->
          <li><a @click="logout()">ออกจากระบบ</a></li>
        </ul>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    methods: {
    async logout() {
      this.$cookiz.remove('jwt')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('role')
      // await this.$swal({
      //   title: 'ออกจากระบบสำเร็จ',
      //   icon: 'success',
      //   timer: 2000,
      //   showConfirmButton: false,
      // })
      alert('ออกจากระบบสำเร็จ')
      this.$router.push('/')
    },
  },
}
</script>

<style>

</style>