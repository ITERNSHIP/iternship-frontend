<template>
  <div class="navbar bg-black-gray rounded-none justify-between">
    <div class="container mx-auto pl-6">
      <div class="flex cursor-pointer ">
        <!-- <a class="btn btn-ghost normal-case text-xl text-cheese">ITERNSHIP</a> -->
        <img src="@/static/logo.png" alt="##" class="w-16">
      </div>

      <div class="lg:flex ml-auto space-x-6 hidden pr-6">
        <nuxt-link to="/login" class="btn btn-info text-white w-32">เข้าสู่ระบบ</nuxt-link>
        <!-- <button class="btn text-white w-32">ออกจากระบบ</button> -->
      </div>
    </div>

    <div class="dropdown dropdown-end cursor-pointer lg:hidden bg-blue-blue p-3 rounded-lg">
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
          <li><nuxt-link to="/login">เข้าสู่ระบบ</nuxt-link></li>
          <!-- <li><a>ออกจากระบบ</a></li> -->
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>