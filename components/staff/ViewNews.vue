<template>
  <div>
    <section
      class="w-full border-2 rounded-xl h-auto p-8 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-black"
    >
      <label :for="news_info.newsId" class="modal-button cursor-pointer">
        <div class="flex justify-between">
          <div>
            <p class="font-bold">{{ news_info.newstitle }}</p>
            <p class="text-gray-400">แก้ไขเมื่อ: {{ news_info.openDate }}</p>
          </div>
        </div>
      </label>
      <input type="checkbox" :id="news_info.newsId" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative w-11/12 max-w-5xl">
          <label
            :for="news_info.newsId"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            @click="closeModal"
            >✕</label
          >
          <h3 class="text-lg font-bold mb-4">
            {{
              isEdit ? 'แก้ไขข้อมูลข่าวประสัมพันธ์' : 'ดูข้อมูลข่าวประสัมพันธ์'
            }}
          </h3>
          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >หัวข้อข่าวประชาสัมพันธ์</label
            >
            <input
              v-model.trim.lazy = "$v.validateTitle.$model"
              v-model="editNews.newstitle"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p class="text-error text-sm mt-2" v-if="!$v.validateTitle.required && $v.validateTitle.$dirty">
              กรุณาระบุหัวข้อข่าวประชาสัมพันธ์
            </p>
          </div>
          <div class="mb-4">
            <label
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของข่าวประชาสัมพันธ์</label
            >
            <textarea
              v-model.trim.lazy = "$v.validateDetail.$model"
              v-model="editNews.newsDetail"
              :disabled="!isEdit"
              :class="[isEdit ? 'bg-white' : 'bg-gray-200']"
              class="mt-2 text-gray-600 min-h-[200px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            <p class="text-error text-sm mt-2" v-if="!$v.validateDetail.required && $v.validateDetail.$dirty">
              กรุณาระบุข้อมูลรายละเอียดของข่าวประชาสัมพันธ์
            </p>
          </div>
          <div class="modal-action flex items-center justify-end w-full">
            <label
              class="btn btn-info text-white"
              @click="editToggle"
              v-if="!isEdit"
              >แก้ไข</label
            >
            <label class="btn btn-error text-white" v-if="!isEdit" @click="deleteNewsInfo">ลบ</label>
            <label class="btn btn-info text-white" v-if="isEdit" @click="editNewsInfo">บันทึก</label>
            <label :for="news_info.newsId" class="btn" @click="closeModal()">ยกเลิก</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      isEdit: false,
      validateTitle: this.news_info.newstitle,
      validateDetail: this.news_info.newsDetail,
      editNews: {
        newsId: this.news_info.newsId,
        newstitle: this.news_info.newstitle,
        newsDetail: this.news_info.newsDetail,
        openDate: this.news_info.openDate,
      },
    }
  },

  props:{
    news_info: {
      type: Object,
    }
  },

  methods: {
    editToggle() {
      this.isEdit = !this.isEdit
    },
    closeModal() {
      this.isEdit = false
      this.setDefault()
    },
    setDefault(){
      this.editNews={
        newstitle: this.news_info.newstitle,
        newsDetail: this.news_info.newsDetail,
        openDate: this.news_info.openDate,
      }
    },
    editNewsInfo(){
      this.$v.$touch()
      if(this.$v.$invalid){
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        return
      }
      this.editNews.openDate = dayjs().format('YYYY-MM-DD')
      this.$emit('editNewsInfo', this.editNews)
    },
    deleteNewsInfo(){
      this.$emit('deleteNewsInfo', this.editNews.newsId)
    }
  },
  
  validations: {
      validateTitle: {
        required,
      },
      validateDetail: {
        required,
      },
  },
}
</script>

<style></style>
