<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Confirmed Internship Form</p>
      </div>

      <div class="mt-10 relative">
        <div class="bg-gray-200 h-auto w-full rounded-lg p-5">
          <!-- Row1 -->
          <div class="flex mx-3 justify-between pt-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Firstname</label
              >
              <input
                v-model="confirmedForm.fName"
                type="text"
                placeholder="Firstname"
                class="input input-bordered w-full"
              />
              <p v-if="!validateFirstname" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Lastname</label
              >
              <input
                v-model="confirmedForm.lName"
                type="text"
                placeholder="Lastname"
                class="input input-bordered w-full"
              />
              <p v-if="!validateLastname" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row2 -->
          <div class="flex pt-5 pb-2">
            <div class="w-full mx-3">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Email</label
              >
              <input
                v-model="confirmedForm.email"
                type="text"
                placeholder="Email"
                class="input input-bordered w-full"
              />
              <p v-if="!validateEmail" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row3 -->
          <div class="flex mx-3 justify-between pt-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Student ID</label
              >
              <input
                v-model="confirmedForm.studentId"
                type="text"
                placeholder="6xxxxxxxxxx"
                class="input input-bordered w-full"
              />
              <p v-if="!validateStudentID" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Telephone</label
              >
              <input
                v-model="confirmedForm.phoneNumber"
                type="text"
                placeholder="0999999999"
                class="input input-bordered w-full"
              />
              <p v-if="!validateTelephone" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row4 -->
          <div class="flex mx-3 justify-between pt-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Company name</label
              >
              <input
                v-model="confirmedForm.companyName"
                type="text"
                placeholder="Company name"
                class="input input-bordered w-full"
              />
              <p v-if="!validateCompanyName" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Position name</label
              >
              <input
                v-model="confirmedForm.position"
                type="text"
                placeholder="Position name"
                class="input input-bordered w-full"
              />
              <p v-if="!validatePosition" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row5 -->
          <div class="flex pt-5 pb-2">
            <div class="w-full mx-3">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Duration of training</label
              >
              <input
                v-model="confirmedForm.longTerm"
                type="text"
                placeholder="2, 4, 6 month"
                class="input input-bordered w-full"
              />
              <p v-if="!validateDuration" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row6 -->
          <div class="flex mx-3 justify-between pt-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Duration from</label
              >
              <input
                v-model="confirmedForm.durationForm"
                type="text"
                placeholder="1 January 2022"
                class="input input-bordered w-full"
              />
              <p v-if="!validateDurationForm" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Duration to</label
              >
              <input
                v-model="confirmedForm.durationTo"
                type="text"
                placeholder="1 January 2022"
                class="input input-bordered w-full"
              />
              <p v-if="!validateDurationTo" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <div class="flex justify-end mr-5 mt-8">
            <button
              @click="sentInformation"
              class="btn btn-info bottom-0 right-8 text-white w-36 mb-5 hover:outline hover:outline-offset-2 hover:outline-black"
            >
              Send
            </button>
          </div>
          <!-- <button @click="checkForm" class="btn btn-info absolute bottom-0 right-8 text-white w-36 mb-5 hover:outline hover:outline-offset-2 hover:outline-black" >Send</button> -->
        </div>
      </div>
    </div>
    <pre>{{ confirmedForm }}</pre>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmedForm: {
        fName: '',
        lName: '',
        email: '',
        studentId: '',
        phoneNumber: '',
        companyName: '',
        position: '',
        longTerm: '',
        durationForm: '',
        durationTo: '',
      },
      validateFirstname: true,
      validateLastname: true,
      validateEmail: true,
      validateStudentID: true,
      validateTelephone: true,
      validateCompanyName: true,
      validatePosition: true,
      validateDuration: true,
      validateDurationForm: true,
      validateDurationTo: true,
    }
  },

  methods: {
    checkForm() {
      this.validateFirstname =
        this.confirmedForm.fName.length === 0 ? false : true
      this.validateLastname =
        this.confirmedForm.lName.length === 0 ? false : true
      this.validateEmail = this.confirmedForm.email.length === 0 ? false : true
      this.validateStudentID =
        this.confirmedForm.studentId.length === 0 ? false : true
      this.validateTelephone =
        this.confirmedForm.phoneNumber.length === 0 ? false : true
      this.validateCompanyName =
        this.confirmedForm.companyName.length === 0 ? false : true
      this.validatePosition =
        this.confirmedForm.position.length === 0 ? false : true
      this.validateDuration =
        this.confirmedForm.longTerm.length === 0 ? false : true
      this.validateDurationForm =
        this.confirmedForm.durationForm.length === 0 ? false : true
      this.validateDurationTo =
        this.confirmedForm.durationTo.length === 0 ? false : true
    },

    sentInformation() {
      this.checkForm()
      // console.log(this.confirmedForm);
      this.$axios
        .post('/users/createconfirmationForm', this.confirmedForm)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
      alert('Sent your information success!!')
    },
  },
}
</script>

<style></style>
