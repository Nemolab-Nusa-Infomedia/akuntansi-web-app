<script setup>
import FeatureCard from "../components/FeatureCard.vue";
import StatsCard from "../components/StatsCard.vue";
</script>

<template>
  <div class="font-sans">
    <!-- Hero -->
    <div class="py-20 max-lg:py-6 px-28 max-lg:px-8 w-full">
      <div class="flex max-lg:block md:justify-between gap-10 items-center">
        <div
          class="space-y-8 max-lg:space-y-5 max-lg:mb-14 w-4/6 max-lg:w-full"
        >
          <p class="text-secondary max-lg:text-base text-xl font-semibold">
            Core Jurnal Features
          </p>
          <h1 class="font-bold text-primary text-5xl max-lg:text-4xl">
            Solusi Efektif untuk Pengelolaan Keuangan Bisnis Anda
          </h1>
          <p class="text-2xl max-lg:text-xl">
            Gunakan Core Jurnal untuk invoicing, purchasing, laporan, dan
            analisis bisnis dengan mudah dan praktis, kapan saja, di mana saja!
          </p>
          <div class="flex gap-8 items-center">
            <button
              class="bg-primary text-white py-3 px-6 max-lg:px-3 max-lg:py-2 rounded-md hover:bg-secondary text-2xl max-lg:text-lg font-medium"
            >
              Coba Gratis
            </button>
            <button
              class="bg-transparent text-secondary max-lg:px-3 max-lg:py-2 py-3 px-6 rounded-md max-lg:text-lg hover:bg-primary hover:text-white text-2xl font-medium flex justify-between items-center border-2 border-secondary"
            >
              Lihat Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.3201 8.87L18.5201 16.07L11.3201 23.27"
                  stroke="currentColor"
                  stroke-width="1.728"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <img class="w-2/6 max-lg:w-full" src="/assets/mockup.png" alt="" />
      </div>
    </div>
    <!-- Features -->
    <div
      class="bg-primary px-28 max-lg:px-8 py-20 max-lg:py-6 max-lg:space-y-8 space-y-24"
    >
      <div class="text-center text-white space-y-4">
        <h1 class="font-semibold max-lg:text-2xl text-5xl">
          Semua Kebutuhan Bisnis dalam Satu Aplikasi
        </h1>
        <p class="text-2xl max-lg:text-base">
          Menghadirkan semua kebutuhan tim Finance Anda dalam satu aplikasi
          otomatis
        </p>
      </div>
      <div
        class="flex md:justify-between max-lg:space-y-8 max-lg:block gap-10 items-center"
      >
        <img src="/assets/mockup-2.png" class="md:w-6/12" alt="" />
        <div class="block space-y-5 md:w-6/12">
          <FeatureCard />
        </div>
      </div>
    </div>
    <div class="py-20 max-lg:py-6 px-28 max-lg:px-8 w-full">
      <div class="flex max-lg:block md:justify-between gap-10 items-center">
        <img
          class="w-3/6 max-lg:w-full max-lg:block hidden"
          src="/assets/why.png"
          alt=""
        />
        <div
          class="space-y-8 max-lg:space-y-5 max-lg:mb-14 w-3/6 max-lg:w-full"
        >
          <h1 class="font-bold text-primary text-5xl max-lg:text-2xl">
            Kenapa Core Jurnal?
          </h1>
          <p class="text-2xl max-lg:text-xl">
            Core Jurnal adalah pilihan ideal untuk kebutuhan akuntansi dan
            keuangan Anda karena menawarkan fitur unggulan seperti kemudahan
            pencatatan transaksi, laporan keuangan yang komprehensif, dan
            integrasi sistem yang mulus. Dengan antarmuka yang intuitif dan
            dukungan pelanggan yang responsif, Core Jurnal memudahkan
            pengelolaan keuangan bisnis Anda secara efisien dan efektif.
          </p>
          <div class="">
            <button
              class="bg-secondary text-white max-lg:px-3 max-lg:py-2 py-3 px-6 rounded-md max-lg:text-lg hover:bg-primary text-2xl font-medium flex justify-between items-center border-2 border-secondary"
            >
              Baca Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.3201 8.87L18.5201 16.07L11.3201 23.27"
                  stroke="currentColor"
                  stroke-width="1.728"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          class="w-3/6 max-lg:w-full max-lg:hidden"
          src="/assets/why.png"
          alt=""
        />
      </div>
      <div class="flex max-lg:grid max-lg:grid-cols-2 md:justify-between gap-4 items-center"><StatsCard /></div>
    </div>
  </div>
</template>
