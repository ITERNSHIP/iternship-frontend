<template>
  <div>
    <StaffNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Table</p>
      </div>

      <div class="mt-10 mb-10">
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Company</th>
                <th>Position</th>
                <th>Duration of training</th>
                <th>Duration from</th>
                <th>Duration to</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="information in informations" :key="information">
                <th></th>
                <td>{{ information.studentId }}</td>
                <td>{{ information.fName }} {{ information.lName}}</td>
                <td>{{ information.email }}</td>
                <td>{{ information.phoneNumber }}</td>
                <td>{{ information.companyName }}</td>
                <td>{{ information.position }}</td>
                <td>{{ information.longTerm }}</td>
                <td>{{ information.durationForm }}</td>
                <td>{{ information.durationTo }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <pre>{{ informations }}</pre> -->
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
export default { components: { Footer },
async asyncData({ $axios  }) {
  // const ip = await $axios.$get(`${$config.baseURL}/company/getAllCompanyStaff`)
  // const ip = await $axios.$get($config.baseURL +"/company/getAllCompanyStaff")
  // return { ip }
  const informations = await $axios.$get('/users/getAllconfirmation')
  return { informations }
}
}
</script>

<style></style>
