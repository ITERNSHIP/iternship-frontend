<template>
  <div>
    <section id="view" v-if="view">
      <label
        :for="viewNew.newsId"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >ดู</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" :id="viewNew.newsId" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="bg-white h-auto w-auto relative">
            <p
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              ดูข่าวสาร
            </p>

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าว</label
            >
            <input
            v-model="viewNew.title"
              class="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
              placeholder=""
              readonly
            />

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าว</label
            >
            <input
            v-model="viewNew.newsDetail"
              class="mb-5 mt-2 text-gray-600 min-h-[250px] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-slate-100"
              placeholder=""
              readonly
            />
          </div>
          <div class="modal-action">
            <label :for="viewNew.newsId" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="add" v-if="add">
      <label
        for="modal-add"
        class="btn modal-button btn-info text-white w-20 md:w-32"
        >เพิ่ม</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="modal-add" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="bg-white h-auto w-auto relative">
            <p
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              เพิ่มข่าวสาร
            </p>

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าว</label
            >
            <input
              v-model.trim.lazy="$v.newsHeader.$model"
              v-model="addNew.newstitle"
              class="mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="หัวข้อข่าว"
            />

            <p
              class="text-error mb-5"
              v-if="!$v.newsHeader.required && $v.newsHeader.$dirty"
            >
              กรุณาระบุหัวข้อข่าว
            </p>

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal mt-5"
              >รายละเอียดของข่าว</label
            >
            <textarea
              v-model.trim.lazy="$v.newsDetail.$model"
              v-model="addNew.newsDetail"
              class="mt-2 text-gray-600 min-h-[250px] font-normal w-full h-10 pl-3 text-sm border-gray-300 rounded border"
              placeholder="พิมพ์รายละเอียดของข่าวที่นี่"
            />

            <p
              class="text-error mb-5"
              v-if="!$v.newsDetail.required && $v.newsDetail.$dirty"
            >
              กรุณาระบุรายละเอียดของข่าว
            </p>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white" @click="clickAddNew">เพิ่ม</label>
            <label for="modal-add" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>

    <section id="edit" v-if="edit">
      <label
        :for="`${editNew.newsId}-edit`"
        class="btn modal-button btn-primary w-full md:w-20 py-1"
        >แก้ไข</label
      >
      <!-- Put this part before </body> tag -->
      <input type="checkbox" :id="`${editNew.newsId}-edit`" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="bg-white h-auto w-auto relative">
            <p
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              แก้ไขข่าวสาร
            </p>

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าว</label
            >
            <input
            v-model="editNew.title"
              class="mb-5 mt-2 text-gray-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="หัวข้อข่าว"
            />

            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าว</label
            >
            <textarea
            v-model="editNew.newsDetail"
              class="mb-3 mt-2 text-gray-600 min-h-[250px] font-normal w-full h-10 pl-3 text-sm border-gray-300 rounded border"
              placeholder="พิมพ์รายละเอียดของข่าวที่นี่"
            />
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white" @click="clickEditNew">แก้ไข</label>
            <label :for="`${editNew.newsId}-edit`" class="btn">กลับ</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: {
    view: {
      type: Boolean,
    },
    add: {
      type: Boolean,
    },
    edit: {
      type: Boolean,
    },
    viewNew:{
      type: Object,
    },
    editNew:{
      type: Object,
    }
  },

  data() {
    return {
      newsHeader: null,
      newsDetail: null,
      news: {
        header: '',
        detail: '',
      },
      addNew:{
        newstitle:'',
        newsDetail:'',
        companyName: this.$store.state.company.companyName,
      }
    }
  },

  validations: {
    newsHeader: {
      required,
    },
    newsDetail: {
      required,
    },
  },

  methods:{
    clickAddNew() {
      this.$emit('clickAddNew', this.addNew)
      // this.$axios
      //   .post('/company/createrecruit', this.position)
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },

    clickEditNew(){
      let sentEditNew = {
        newstitle: this.editNew.title,
        newsDetail: this.editNew.newsDetail,
        companyName: this.$store.state.company.companyName,
      }
      this.$emit('clickEditNew', {
        sentEditNew,
        newsId: this.editNew.newsId,
      })
    }
  }
}
</script>

<style></style>
