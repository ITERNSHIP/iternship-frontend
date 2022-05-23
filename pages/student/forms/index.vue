<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Forms</p>
        <div class="mt-10">
          <p class="text-3xl font-normal">Select your form</p>
        </div>
      </div>

      <div class="mt-10 sm:flex lg:flex-row md:justify-between sm:flex-col sm:items-center">
        <nuxt-link to="/student/forms/internship">
          <div class="p-2">
            <div
              class="h-[379px] xl:w-[450px] lg:w-[310px] bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
            >
              <p class="pl-6 pt-6 text-4xl font-medium">Internship</p>
              <p class="pl-6 pt-6 text-4xl font-medium">Form</p>
              <p class="absolute bottom-0 right-6">Picture</p>
            </div>
          </div>
        </nuxt-link>

        <nuxt-link to="/student/forms/confirmed">
          <div class="p-2">
            <div
              class="h-[379px] xl:w-[450px] lg:w-[310px] bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
            >
              <p class="pl-6 pt-6 text-4xl font-medium">Confirmed</p>
              <p class="pl-6 pt-6 text-4xl font-medium">Internship</p>
              <p class="pl-6 pt-6 text-4xl font-medium">Form</p>
              <p class="absolute bottom-0 right-6">Picture</p>
            </div>
          </div>
        </nuxt-link>

        <div class="p-2">
          <div
            class="h-[379px] xl:w-[450px] lg:w-[310px] bg-blue-blue rounded-md relative hover:outline hover:outline-offset-2 hover:outline-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
          >
            <p class="pl-6 pt-6 text-4xl font-medium">Check</p>
            <p class="pl-6 pt-6 text-4xl font-medium">Status</p>
            <p class="pl-6 pt-6 text-2xl font-medium text-gray-800">
              (Internship form)
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
