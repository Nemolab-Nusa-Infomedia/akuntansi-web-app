<template>
  <nav class="bg-white w-full text-2xl max-lg:text-base max-lg:px-8 px-28 py-8">
    <div class="flex items-center justify-between">
      <div class="max-lg:flex max-lg:gap-4">
        <button
          class="sm:hidden focus:outline-none"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="material-icons"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M3.60001 16.2H18C18.495 16.2 18.9 15.795 18.9 15.3C18.9 14.805 18.495 14.4 18 14.4H3.60001C3.10501 14.4 2.70001 14.805 2.70001 15.3C2.70001 15.795 3.10501 16.2 3.60001 16.2ZM3.60001 11.7H18C18.495 11.7 18.9 11.295 18.9 10.8C18.9 10.305 18.495 9.89999 18 9.89999H3.60001C3.10501 9.89999 2.70001 10.305 2.70001 10.8C2.70001 11.295 3.10501 11.7 3.60001 11.7ZM2.70001 6.29999C2.70001 6.79499 3.10501 7.19999 3.60001 7.19999H18C18.495 7.19999 18.9 6.79499 18.9 6.29999C18.9 5.80499 18.495 5.39999 18 5.39999H3.60001C3.10501 5.39999 2.70001 5.80499 2.70001 6.29999Z"
                fill="#536DFE"
              />
            </svg>
          </span>
        </button>
        <a href="#" class="text-lg font-bold max-lg:w-32"
          ><img src="/assets/icon/logo.svg" alt=""
        /></a>
      </div>

      <ul
        :class="{
          'sm:flex sm:items-center sm:gap-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-blue-600 sm:bg-transparent p-4 sm:p-0': true,
          hidden: !isMenuOpen,
        }"
      >
        <li>
          <a
            href="/"
            :class="{
              'block py-2 px-4 rounded sm:hover:bg-transparent': true,
              'text-red-500': activeMenu === 'tab1',
              'hover:bg-blue-700': activeMenu !== 'tab1',
            }"
            @click="setActive('tab1')"
          >
            Beranda
          </a>
        </li>
        <li class="group">
          <button
            class="flex items-center gap-4 py-2 px-4 hover:text-[#F44336] focus:outline-none"
          >
            Fitur
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M18.4814 9.51953L12.4814 15.5195L6.48145 9.51953"
                stroke="#45434D"
                stroke-width="2"
              />
            </svg>
          </button>
          <div
            class="absolute left-0 top-[100px] w-full bg-white shadow-lg rounded-lg max-lg:px-8 px-28 py-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
          >
            <div class="flex justify-between gap-20">
              <div id="column-1" class="w-3/12">
                <h3 class="text-lg font-semibold mb-4 text-[#F44336]">Fitur</h3>
                <div class="font-semibold text-2xl flex flex-col">
                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuFeature === 'menu1',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuFeature !== 'menu1',
                    }"
                    @click="setActiveMenuFeature('menu1')"
                  >
                    Akuntansi
                  </button>

                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuFeature === 'menu2',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuFeature !== 'menu2',
                    }"
                    @click="setActiveMenuFeature('menu2')"
                  >
                    Supply Chain Management
                  </button>
                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuFeature === 'menu3',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuFeature !== 'menu3',
                    }"
                    @click="setActiveMenuFeature('menu3')"
                  >
                    Perencanaan dan Analisa Keuangan
                  </button>
                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuFeature === 'menu4',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuFeature !== 'menu4',
                    }"
                    @click="setActiveMenuFeature('menu4')"
                  >
                    Integration and Platform
                  </button>
                </div>
              </div>

              <!-- Kolom 2 -->
              <div id="column-2" class="w-9/12 pt-4">
                <div v-if="activeMenuFeature === 'menu1'" class="menu">
                  <ul class="grid grid-cols-3 gap-6">
                    <li>
                      <a
                        href="/feature/akuntansi/invoice"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          class="flex-shrink-0 flex"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Invoice</h4>
                          <p class="text-gray-600 text-lg">
                            Mengelola tagihan dan pembayaran secara efisien
                            dengan fitur otomatisasi.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/akuntansi/biaya"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          class="flex-shrink-0 flex"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Biaya</h4>
                          <p class="text-gray-600 text-lg">
                            Merekam dan memantau pengeluaran perusahaan dengan
                            akurat.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/akuntansi/laporan"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 flex"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Laporan</h4>
                          <p class="text-gray-600 text-lg">
                            Menyediakan laporan keuangan real-time untuk
                            analisis bisnis yang mendalam.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/akuntansi/asset"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          class="flex-shrink-0 flex"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Aset Tetap</h4>
                          <p class="text-gray-600 text-lg">
                            Mengelola aset tetap perusahaan dengan pelacakan
                            yang terorganisir.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/akuntansi/akuntansi"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 flex"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Akuntansi</h4>
                          <p class="text-gray-600 text-lg">
                            Mengotomatiskan proses pembukuan dan rekonsiliasi
                            keuangan perusahaan
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div v-if="activeMenuFeature === 'menu2'" class="menu">
                  <ul class="grid grid-cols-3 gap-6">
                    <li>
                      <a
                        href="/feature/supply-chain-management/inventory"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          class="flex-shrink-0 flex"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Inventori</h4>
                          <p class="text-gray-600 text-lg">
                            Melacak stok barang secara real-time untuk manajemen
                            persediaan yang optimal
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/supply-chain-management/manufaktur"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 flex"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">Manufaktur</h4>
                          <p class="text-gray-600 text-lg">
                            Mengatur proses produksi dengan alur kerja yang
                            terintegrasi dan efisien
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div v-if="activeMenuFeature === 'menu3'" class="menu">
                  <ul class="grid grid-cols-3 gap-6">
                    <li>
                      <a
                        href="/feature/perencanaan-dan-analisa-keuangan/management-anggaran"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          class="flex-shrink-0 flex"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">
                            Management Anggaran
                          </h4>
                          <p class="text-gray-600 text-lg">
                            Mengelola anggaran perusahaan untuk pengendalian
                            biaya yang efektif
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/perencanaan-dan-analisa-keuangan/monthly-profit"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 flex"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">
                            Monthly Profit and Loss
                          </h4>
                          <p class="text-gray-600 text-lg">
                            Menganalisis laba rugi bulanan untuk evaluasi
                            kinerja keuangan
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/perencanaan-dan-analisa-keuangan/custom-analyctycs"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 flex"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">
                            Custom Analytics
                          </h4>
                          <p class="text-gray-600 text-lg">
                            Menyediakan analitik khusus sesuai kebutuhan bisnis
                            untuk pengambilan keputusan strategis
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feature/perencanaan-dan-analisa-keuangan/laporan-profitabilitas"
                        class="mb-4 flex gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 flex"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                            stroke="#536DFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div>
                          <h4 class="text-xl font-semibold mb-2">
                            Laporan Profitabilitas Produk
                          </h4>
                          <p class="text-gray-600 text-lg">
                            Melacak dan menganalisis profitabilitas tiap produk
                            secara detail
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div v-if="activeMenuFeature === 'menu4'" class="menu">
                  <ul class="grid grid-cols-3 gap-6">
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        class="flex-shrink-0 flex"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Integrasi</h4>
                        <p class="text-gray-600 text-lg">
                          Menghubungkan berbagai sistem untuk memastikan alur
                          data yang mulus.
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">HRIS</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola data karyawan, absensi, dan administrasi SDM
                          dalam satu platform
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Payroll</h4>
                        <p class="text-gray-600 text-lg">
                          Mengotomatiskan penggajian karyawan dengan perhitungan
                          yang akurat dan tepat waktu
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">POS System</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola transaksi penjualan secara efisien dengan
                          pencatatan stok otomatis
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="group">
          <button
            class="flex items-center gap-1 py-2 px-4 hover:text-[#F44336] focus:outline-none"
          >
            Solusi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M18.4814 9.51953L12.4814 15.5195L6.48145 9.51953"
                stroke="#45434D"
                stroke-width="2"
              />
            </svg>
          </button>
          <div
            class="absolute left-0 top-[100px] w-full bg-white shadow-lg rounded-lg max-lg:px-8 px-28 py-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
          >
            <div class="flex justify-between gap-20">
              <div id="column-1" class="w-3/12">
                <h3 class="text-lg font-semibold mb-4 text-[#F44336]">
                  Solusi
                </h3>
                <div class="font-semibold text-2xl flex flex-col">
                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuSolution === 'solution1',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuSolution !== 'solution1',
                    }"
                    @click="setActiveMenuSolution('solution1')"
                  >
                    Perdagangan dan Industri
                  </button>

                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuSolution === 'solution2',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuSolution !== 'solution2',
                    }"
                    @click="setActiveMenuSolution('solution2')"
                  >
                    Skala Bisnis
                  </button>
                  <button
                    :class="{
                      'bg-primary text-white block py-3 px-3 rounded-lg mb-2 text-start':
                        activeMenuSolution === 'solution3',
                      'bg-transparent block py-3 px-3 mb-2 rounded-lg text-black text-start':
                        activeMenuSolution !== 'solution3',
                    }"
                    @click="setActiveMenuSolution('solution3')"
                  >
                    Layanan dan Organisasi
                  </button>
                </div>
              </div>

              <!-- Kolom 2 -->
              <div id="column-2" class="w-9/12 pt-4">
                <div v-if="activeMenuSolution === 'solution1'" class="solution">
                  <ul class="grid grid-cols-3 gap-6">
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        class="flex-shrink-0 flex"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Ritel</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola penjualan barang secara langsung dengan
                          pelacakan inventori
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Online Shop</h4>
                        <p class="text-gray-600 text-lg">
                          Mengotomatisasi manajemen penjualan online dan
                          pelacakan pesanan
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        class="flex-shrink-0 flex"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Waralaba</h4>
                        <p class="text-gray-600 text-lg">
                          Mengatur operasional bisnis waralaba dengan pemantauan
                          kinerja cabang
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Trading</h4>
                        <p class="text-gray-600 text-lg">
                          Memfasilitasi perdagangan barang dengan manajemen
                          pesanan dan inventori efisien
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Manufaktur</h4>
                        <p class="text-gray-600 text-lg">
                          Mengoptimalkan proses produksi dengan sistem
                          pengelolaan bahan baku produksi
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Skincare</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola produksi, distribusi, dan penjualan produk
                          dengan sistem inventori
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Distributor</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola distribusi produk dengan sistem pengelolaan
                          stok pengiriman terintegrasi
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Peternakan</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola data ternak, produksi, dan keuangan
                          peternakan secara terpadu
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-if="activeMenuSolution === 'solution2'" class="solution">
                  <ul class="grid grid-cols-3 gap-6">
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        class="flex-shrink-0 flex"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Star-Up</h4>
                        <p class="text-gray-600 text-lg">
                          Memfasilitasi pertumbuhan bisnis baru dengan manajemen
                          operasional fleksibel
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">
                          Perusahaan Menengah
                        </h4>
                        <p class="text-gray-600 text-lg">
                          Mengoptimalkan manajemen bisnis dengan alat
                          pengelolaan sumber daya yang efisien
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        class="flex-shrink-0 flex"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Multi Cabang</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola operasional dan kinerja banyak cabang dalam
                          satu sistem terintegrasi
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        class="flex-shrink-0 flex"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">UMKM</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola keuangan dan operasional usaha kecil dengan
                          solusi sederhana dan efektif
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-if="activeMenuSolution === 'solution3'" class="solution">
                  <ul class="grid grid-cols-3 gap-6">
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        class="flex-shrink-0 flex"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Jasa</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola layanan pelanggan dan administrasi bisnis
                          jasa secara efisien
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Klinik</h4>
                        <p class="text-gray-600 text-lg">
                          Mengatur administrasi pasien, jadwal dokter, dan
                          laporan medis secara digital
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        class="flex-shrink-0 flex"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Koperasi</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola simpan pinjam, keanggotaan, dan laporan
                          keuangan koperasi
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Restoran</h4>
                        <p class="text-gray-600 text-lg">
                          Mengotomatisasi manajemen pesanan, inventori, dan
                          keuangan restoran
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Logistik</h4>
                        <p class="text-gray-600 text-lg">
                          Memantau pengiriman, distribusi, dan inventori dengan
                          pelacakan yang real-time
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Yayasan</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola donasi, program, dan keuangan yayasan secara
                          transparan dan terstruktur
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Katering</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola pesanan dan distribusi makanan dengan sistem
                          terorganisir
                        </p>
                      </div>
                    </li>
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 flex"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">Kontraktor</h4>
                        <p class="text-gray-600 text-lg">
                          Mengelola proyek konstruksi, anggaran, dan sumber daya
                          dengan manajemen
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-if="activeMenuSolution === 'menu4'" class="menu">
                  <ul class="grid grid-cols-3 gap-6">
                    <li class="mb-4 flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        class="flex-shrink-0 flex"
                        fill="none"
                      >
                        <path
                          d="M21 18.04H23M17 18.04C17 16.714 16.4732 15.4422 15.5355 14.5045C14.5979 13.5668 13.3261 13.04 12 13.04C10.6739 13.04 9.40215 13.5668 8.46447 14.5045C7.52678 15.4422 7 16.714 7 18.04M12 2.04004V9.04004M12 2.04004L8 6.04004M12 2.04004L16 6.04004M4.22 10.26L5.64 11.68M1 18.04H3M18.36 11.68L19.78 10.26M23 22.04H1"
                          stroke="#536DFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>
                        <h4 class="text-xl font-semibold mb-2">
                          Bimbingan Belajar
                        </h4>
                        <p class="text-gray-600 text-lg">
                          Mengatur jadwal kelas, pembayaran, dan data siswa
                          dalam satu platform terintegrasi
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a
            href="/harga"
            :class="{
              'block py-2 px-4 rounded sm:hover:bg-transparent': true,
              'text-red-500': activeMenu === 'tab2',
              'hover:bg-blue-700': activeMenu !== 'tab2',
            }"
            @click="setActive('tab2')"
          >
            Harga
          </a>
        </li>
        <li>
          <a
            href="/blog"
            :class="{
              'block py-2 px-4 rounded sm:hover:bg-transparent': true,
              'text-red-500': activeMenu === 'blog',
              'hover:bg-blue-700': activeMenu !== 'blog',
            }"
            @click="setActive('blog')"
          >
            Blog
          </a>
        </li>
      </ul>

      <!-- Login and Register -->
      <div class="hidden sm:flex gap-4">
        <a href="/login" class="py-3 px-4 text-primary">Log-in</a>
        <a href="/signup" class="py-3 px-6 text-white bg-secondary rounded-xl"
          >Sign-Up</a
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    // State untuk mengontrol menu toggle
    const isMenuOpen = ref(false);

    // State untuk menyimpan menu aktif
    const activeMenu = ref<string>("tab1");
    const activeMenuFeature = ref<string>("menu1");
    const activeMenuSolution = ref<string>("solution1");

    // Fungsi untuk toggle menu
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    // Fungsi untuk mengganti menu aktif di kolom utama
    const setActive = (menu: string) => {
      activeMenu.value = menu;
    };

    // Fungsi untuk mengganti menu aktif di kolom fitur
    const setActiveMenuFeature = (menu: string) => {
      activeMenuFeature.value = menu;
    };
    const setActiveMenuSolution = (menu: string) => {
      activeMenuSolution.value = menu;
    };

    return {
      isMenuOpen,
      activeMenu,
      activeMenuFeature,
      activeMenuSolution,
      setActiveMenuSolution,
      toggleMenu,
      setActive,
      setActiveMenuFeature,
    };
  },
});
</script>

<style scoped>
/* Reset float */
.app::after {
  content: "";
  display: table;
  clear: both;
}
</style>
