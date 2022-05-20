<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 pt-14">
      <div class="flex flex-row justify-between">
        <div class="mt-32">
          <div>
            <p class="font-bold text-5xl">Collect IT companies</p>
            <p class="font-bold text-5xl">for internships.</p>
          </div>
          <div class="mt-10">
            <p class="font-normal text-2xl">All companies in this website are from SIT students</p>
            <p class="font-normal text-2xl">have entered for internship.</p>
          </div>
          <div class="mt-10">
            <NuxtLink to="/student/" class="btn btn-info text-white">Go to website</NuxtLink>
            <!-- <button class="btn btn-info text-white">Go to website</button> -->
          </div>
        </div>
        <div>
          <img src="@/static/undraw1.png" alt="##">
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
