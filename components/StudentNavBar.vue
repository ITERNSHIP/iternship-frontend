<template>
  <div class="navbar bg-black-gray rounded-none">
    <div class="container mx-auto px-6">
      <div class="flex">
        <!-- <a class="btn btn-ghost normal-case text-xl text-cheese">ITERNSHIP</a> -->
        <img src="@/static/logo.png" alt="##" class="w-16">
      </div>
      <div class="flex mx-12">
        <ul class="menu menu-horizontal space-x-12">
          <nuxt-link to="/student" class="text-white font-bold">Home</nuxt-link>
          <!-- <li class="text-white font-bold">Home</li> -->
          <li class="text-white font-bold">News</li>
          <nuxt-link to="/student/forms" class="text-white font-bold">Forms</nuxt-link>
          <!-- <li class="text-white font-bold">Forms</li> -->
          <li class="text-white font-bold">About</li>
        </ul>
      </div>
      <div class="flex ml-auto space-x-6">
        <button class="btn btn-info text-white">Login</button>
        <button class="btn text-white">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>