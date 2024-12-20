<script>
import InputField from "../components/InputField.vue";
</script>
<template>
  <div class="h-screen w-full pl-36 relative">
    <div class="flex justify-center -z-50 items-center h-screen">
      <div class="w-9/12 block space-y-16">
        <img src="/assets/icon/logo.svg" class="" alt="" />
        <img src="/assets/img-auth.png" class="" alt="" />
      </div>
      <div class="w-3/12 h-screen">
        <img src="/assets/topographic.png" class="h-full -z-50" alt="" />
      </div>
    </div>
    <div class="absolute z-50 right-36 w-[600px] -translate-y-1/2 top-1/2">
      <div class="bg-white p-10 z-50 space-y-10 shadow-md rounded-3xl">
        <div class="space-y-4">
          <p class="text-xl">
            Selamat Datang di <span class="text-[#F44336]">Core Jurnal</span>
          </p>
          <h1 class="text-6xl font-bold text-black">Sign Up</h1>
          <p class="text-[#B9B8B8] text-base]">
            Daftar untuk akses penuh ke Core Jurnal. Isi formulir di bawah untuk
            memulai.
          </p>
        </div>
        <div>
          <form action="">
            <InputField
              v-model="name"
              label="Email Address"
              id="email"
              placeholder="Email Address"
              :icon="true"
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <circle
                    cx="17.9999"
                    cy="12.4165"
                    r="5.25"
                    stroke="#F44336"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M7.27363 25.8384C8.23318 22.3216 11.872 20.6665 15.5174 20.6665H20.4824C24.1278 20.6665 27.7667 22.3216 28.7262 25.8384C28.923 26.5596 29.0801 27.3399 29.1692 28.1688C29.2577 28.9925 28.5784 29.6665 27.7499 29.6665H8.24994C7.42151 29.6665 6.74217 28.9925 6.83068 28.1688C6.91974 27.3399 7.07687 26.5596 7.27363 25.8384Z"
                    stroke="#F44336"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </template>
            </InputField>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
