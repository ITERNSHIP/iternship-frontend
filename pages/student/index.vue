<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold lg:text-6xl text-3xl md:text-4xl">หน้าหลัก</p>
        <div class="mt-5 md:mt-10">
          <p class="text-lg font-normal md:text-2xl">บริษัทที่เปิดรับนักศึกษาฝึกงาน</p>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-2">
          <div
            class="card bg-base-100 shadow-xl hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
          >
            <figure class="h-full w-full">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body bg-black text-white">
              <h2 class="card-title">ชื่อบริษัท</h2>
              <p>เปิดรับนักศึกษาฝึกงาน</p>
              
            </div>
          </div>
        </div>


      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style>
  p{
    font-family: 'Prompt', sans-serif !important;
  }
  </style>
