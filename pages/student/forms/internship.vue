<template>
  <div>
    <StudentNavBar />
    <div class="container mx-auto px-6 mb-14">
      <div class="mt-16">
        <p class="font-bold text-6xl">Internship Form</p>
      </div>

      <div class="mt-10 relative">
        <div class="bg-gray-200 h-auto w-full rounded-lg">
          <!-- Row1 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Firstname</label
              >
              <input
                v-model="forms.firstname"
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
                v-model="forms.lastname"
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
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Email</label
              >
              <input
                v-model="forms.email"
                type="text"
                placeholder="Email"
                class="input input-bordered w-full"
              />
              <p v-if="!validateEmail" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Telephone</label
              >
              <input
                v-model="forms.telephone"
                type="text"
                placeholder="0999999999"
                class="input input-bordered w-full"
              />
              <p v-if="!validateTelephone" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row3 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Year</label
              >
              <input
                v-model="forms.year"
                type="text"
                placeholder="1, 2, 3, 4"
                class="input input-bordered w-full"
              />
              <p v-if="!validateYear" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >GPAX</label
              >
              <input
                v-model="forms.gpax"
                type="text"
                placeholder="x.xx"
                class="input input-bordered w-full"
              />
              <p v-if="!validateGpax" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row4 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >Company name</label
              >
              <input
                v-model="forms.companyname"
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
                v-model="forms.position"
                type="text"
                placeholder="Software Developer, UX/UI Designer, BA, etc."
                class="input input-bordered w-full"
              />
              <p v-if="!validatePosition" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <!-- Row5 -->
          <div class="flex mx-3 justify-between pt-5 pl-5 pr-5 pb-2 space-x-2">
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >My address</label
              >
              <input
                v-model="forms.myaddress"
                type="text"
                placeholder="My address"
                class="input input-bordered w-full"
              />
              <p v-if="!validateMyAddress" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
            <div class="w-1/2">
              <label for="" class="block mb-2 text-sm font-bold text-gray-700"
                >My resume (Link)</label
              >
              <input
                v-model="forms.myresume"
                type="text"
                placeholder="Link Google Drive"
                class="input input-bordered w-full"
              />
              <p v-if="!validateMyResume" class="text-red-700 mt-2">
                This field need requied
              </p>
            </div>
          </div>

          <div class="flex justify-end mr-8 mt-8">
            <button
              @click="checkForm"
              class="btn btn-info bottom-0 right-8 text-white w-36 mb-5 hover:outline hover:outline-offset-2 hover:outline-black"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        firstname: '',
        lastname: '',
        email: '',
        telephone: '',
        year: '',
        gpax: '',
        companyname: '',
        position: '',
        myaddress: '',
        myresume: '',
      },
      validateFirstname: true,
      validateLastname: true,
      validateEmail: true,
      validateTelephone: true,
      validateYear: true,
      validateGpax: true,
      validateCompanyName: true,
      validatePosition: true,
      validateMyAddress: true,
      validateMyResume: true,
    }
  },

  methods: {
    checkForm() {
      this.validateFirstname = this.forms.firstname.length === 0 ? false : true
      this.validateLastname = this.forms.lastname.length === 0 ? false : true
      this.validateEmail = this.forms.email.length === 0 ? false : true
      this.validateTelephone = this.forms.telephone.length === 0 ? false : true
      this.validateYear = this.forms.year.length === 0 ? false : true
      this.validateGpax = this.forms.gpax.length === 0 ? false : true
      this.validateCompanyName =
        this.forms.companyname.length === 0 ? false : true
      this.validatePosition = this.forms.position.length === 0 ? false : true
      this.validateMyAddress = this.forms.myaddress.length === 0 ? false : true
      this.validateMyResume = this.forms.myresume.length === 0 ? false : true
    },
  },
}
</script>

<style></style>
