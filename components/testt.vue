<template>
  <div class="container mx-auto">
    <div class="navbar bg-black-gray justify-between px-4 lg:px-10">
      <div class="flex cursor-pointer">
        <!-- <a class="btn btn-ghost normal-case text-xl text-cheese">ITERNSHIP</a> -->
        <img src="@/static/logo.png" alt="##" class="w-16" />
      </div>
      <!-- mobile -->
      <div class="dropdown dropdown-end cursor-pointer lg:hidden">
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
          <li><a>หน้าหลัก</a></li>
          <li><a>จัดการข้อมูล</a></li>
          <li><a>ข่าวสาร</a></li>
          <li><a>ดูผู้สมัครฝึกงาน</a></li>
          <!-- <li><a>เข้าสู่ระบบ</a></li> -->
          <li><a>ออกจากระบบ</a></li>
        </ul>
      </div>
      <!-- desktop -->
      <div class="text-white items-stretch lg:pr-64 xl:pr-[600px]">
        <p class="btn btn-ghost btn-sm rounded-btn">หน้าหลัก</p>
        <p class="btn btn-ghost btn-sm rounded-btn">จัดการข้อมูล</p>
        <p class="btn btn-ghost btn-sm rounded-btn">ข่าวสาร</p>
        <p class="btn btn-ghost btn-sm rounded-btn">ดูผู้สมัครฝึกงาน</p>
      </div>
      <div class="text-white">
        <button class="btn btn-info text-white w-32">เข้าสู่ระบบ</button>
        <!-- <button class="btn text-white w-32">ออกจากระบบ</button> -->
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {}
</script>

<style></style>
