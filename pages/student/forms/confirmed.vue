<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Confirmed Internship Form</p>
      </div>

      <div class="mt-10 relative">
        <div class="bg-gray-200 h-[630px] w-full rounded-lg">
          <!-- Row1 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2">
            <div class="w-[700px]">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Firstname</label
              >
              <input
                type="text"
                placeholder="Firstname"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-[700px]">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Lastname</label
              >
              <input
                type="text"
                placeholder="Lastname"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Row2 -->
          <div class="pt-5 pl-5 pr-5 pb-2">
            <div class="w-[1425px] mx-3">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Email</label
              >
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Row3 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2">
            <div class="w-[700px]">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Student ID</label
              >
              <input
                type="text"
                placeholder="6xxxxxxxxxx"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-[700px]">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Telephone</label
              >
              <input
                type="text"
                placeholder="0999999999"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Row4 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2">
            <div class="w-[700px]">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Company name</label
              >
              <input
                type="text"
                placeholder="Company name"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-[700px]">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Position name</label
              >
              <input
                type="text"
                placeholder="Position name"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Row5 -->
          <div class="pt-5 pl-5 pr-5 pb-2">
            <div class="w-[1425px] mx-3">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Duration of training</label
              >
              <input
                type="text"
                placeholder="2, 4, 6 month"
                class="input input-bordered w-full"
              />
            </div>
          </div>
          <button class="btn btn-info absolute bottom-0 right-8 text-white w-36 mb-5 hover:outline hover:outline-offset-2 hover:outline-black">Send</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
