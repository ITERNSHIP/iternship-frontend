<template>
  <div class="navbar bg-black-gray rounded-none">
    <div class="container mx-auto px-6 sm:flex sm:justify-between">
      <div class="flex">
        <img src="@/static/logo.png" alt="##" class="w-16" />
      </div>
      <div class="md:flex mx-12 sm:hidden">
        <ul class="menu menu-horizontal space-x-12">
          <nuxt-link to="/student" class="text-white font-bold">Home</nuxt-link>
          <li class="text-white font-bold">News</li>
          <nuxt-link to="/student/forms" class="text-white font-bold"
            >Forms</nuxt-link
          >
          <li class="text-white font-bold">About</li>
        </ul>
      </div>
      <div class="md:flex ml-auto space-x-6 sm:hidden">
        <button class="btn btn-info text-white">Login</button>
        <button class="btn text-white">Logout</button>
      </div>

      <!-- Mobile Hambeger -->
      <div class="dropdown dropdown-left flex flex-none md:hidden">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
