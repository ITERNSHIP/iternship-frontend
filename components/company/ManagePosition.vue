<template>
  <div>
    <div class="container">
      <!-- <div>เพิ่มข้อมูลตำแหน่ง</div> -->
      <div
        class="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 h-fit"
      >
        <div class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div
            class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400"
          >
            <h1
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              เพิ่มข้อมูล
            </h1>
            <p class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4">เพิ่มตำแหน่งที่บริษัทของคุณเปิดรับ</p>
            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อตำแหน่ง</label
            >
            <input
              id="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของงาน</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สวัสดิการ</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สถานที่ปฎิบัติงาน</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ติดต่อ</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ระยะเวลาในการฝึกงาน (เดือน)</label
            >
            <input
              id="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            
            
        
            <div class="flex items-center justify-start w-full">
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue border-blue-blue transition duration-150 ease-in-out hover:bg-blue-700 bg-blue-blue rounded text-white px-8 py-2 text-sm"
              >
                เพิ่ม
              </button>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onclick="modalHandler()"
              >
                ยกเลิก
              </button>
            </div>
            <button
              class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onclick="modalHandler()"
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- <div>แก้ไขข้อมูลตำแหน่ง</div> -->
      <div
        class="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 h-fit"
      >
        <div class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div
            class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400"
          >
            <h1
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              แก้ไขข้อมูล
            </h1>
            <p class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4">แก้ไขข้อมูลตำแหน่งที่บริษัทของคุณเปิดรับ</p>
            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อตำแหน่ง</label
            >
            <input
              id="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของงาน</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สวัสดิการ</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สถานที่ปฎิบัติงาน</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ติดต่อ</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ระยะเวลาในการฝึกงาน (เดือน)</label
            >
            <input
              id="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            
            
        
            <div class="flex items-center justify-start w-full">
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue border-blue-blue transition duration-150 ease-in-out hover:bg-blue-700 bg-blue-blue rounded text-white px-8 py-2 text-sm"
              >
                แก้ไข
              </button>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onclick="modalHandler()"
              >
                ยกเลิก
              </button>
            </div>
            <button
              class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onclick="modalHandler()"
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- <div>ดูข้อมูล</div> -->
      <div
        class="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 h-fit"
      >
        <div class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div
            class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400"
          >
            <h1
              class="text-gray-800 text-2xl font-lg font-bold tracking-normal leading-tight mb-4"
            >
              ดูข้อมูล
            </h1>
            <p class="text-gray-800 font-lg font-semibold tracking-normal leading-tight mb-4">ดูข้อมูลตำแหน่งที่บริษัทของคุณเปิดรับ</p>
            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ชื่อตำแหน่ง</label
            >
            <input
              id="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >รายละเอียดของงาน</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สวัสดิการ</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >สถานที่ปฎิบัติงาน</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ติดต่อ</label
            >
            <textarea
              id="name"
              class="mb-5 mt-2 text-gray-600 min-h-[100px] focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />

            <label
              for="name"
              class="text-gray-800 text-sm font-normal leading-tight tracking-normal"
              >ระยะเวลาในการฝึกงาน (เดือน)</label
            >
            <input
              id="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-blue font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder=""
            />
            
            <button
              class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onclick="modalHandler()"
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
