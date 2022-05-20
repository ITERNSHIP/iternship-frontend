<template>
  <div>
    <StaffNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Home: Staff</p>
        <div class="mt-10">
          <p class="text-3xl font-normal">What are you doing?</p>
        </div>
      </div>

      <div class="mt-10 justify-between flex flex-wrap">
        <nuxt-link to="/staff/table" class="p-2 w-1/2">
          <div>
            <div
              class="h-[379px] w-full bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100"
            >
              <p class="pl-6 pt-6 text-4xl font-medium">Watch Table</p>
              <p class="pl-6 pt-6 text-2xl font-medium text-gray-800">
                See student
              </p>
              <p class="pl-6 pt-2 text-2xl font-medium text-gray-800">
                comfirmed informations
              </p>
              <p class="absolute bottom-0 right-6">Picture</p>
            </div>
          </div>
        </nuxt-link>

        <div class="p-2 w-1/2">
          <div
            class="h-[379px] w-full bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100"
          >
            <p class="pl-6 pt-6 text-4xl font-medium">Form check</p>
            <p class="pl-6 pt-6 text-2xl font-medium text-gray-800">
              Check informations
            </p>
            <p class="pl-6 pt-2 text-2xl font-medium text-gray-800">
              to be approved and
            </p>
            <p class="pl-6 pt-2 text-2xl font-medium text-gray-800">
              sent to company
            </p>
            <p class="absolute bottom-0 right-6">Picture</p>
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

<style></style>
