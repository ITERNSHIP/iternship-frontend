<template>
  <div>
    <label for="add-news" class="btn btn-info modal-button text-white"
      >เพิ่มข่าว</label
    >

    <input type="checkbox" id="add-news" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <label
          for="add-news"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="font-bold text-lg">เพิ่มข่าวประชาสัมพันธ์</h3>
        <div class="mb-4">
          <label
            class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
            >หัวข้อข่าวประชาสัมพันธ์</label
          >
          <input
          v-model.trim.lazy="$v.validateTitle.$model"
          v-model="news.title"
            class="mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="พิมพ์หัวข้อข่าวประชาสัมพันธ์ที่นี่"
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
          v-model.trim.lazy="$v.validateDetail.$model"
          v-model="news.detail"
            class="mt-2 text-gray-600 min-h-[200px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="พิมพ์รายละเอียดของข่าวประชาสัมพันธ์ที่นี่"
          />
          <p class="text-error text-sm mt-2" v-if="!$v.validateDetail.required && $v.validateDetail.$dirty">
            กรุณาระบุข้อมูลรายละเอียดของข่าวประชาสัมพันธ์
          </p>
        </div>
        <div class="modal-action flex items-center justify-end w-full">
            <label class="btn btn-info text-white" @click="addNews"
              >เพิ่มข้อมูล</label
            >
            <label for="add-news" class="btn">ยกเลิก</label>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data(){
    return {
      news: {
        title: '',
        detail: ''
      },
      validateTitle: null,
      validateDetail: null,
    }
  },
  methods: {
    addNews(){
      this.$v.$touch()
      if(this.$v.$invalid){
        alert('กรุณาระบุข้อมูลให้ครบถ้วน')
        return
      }
      //emit event to parent component
      this.$emit('add-news', this.news)
    }
  },
  validations: {
    validateTitle: {
      required
    },
    validateDetail: {
      required
    }
  }

}
</script>

<style></style>
