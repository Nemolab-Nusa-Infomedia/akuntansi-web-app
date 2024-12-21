<template>
  <nav class="bg-white w-full text-2xl max-lg:text-base max-lg:px-8 px-28 py-8">
    <div class="flex items-center justify-between">
      <!-- Logo -->

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
              'text-red-500': activeMenu === 'Home',
              'hover:bg-blue-700': activeMenu !== 'Home',
            }"
            @click="setActive('Home')"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{
              ' py-2 px-4 rounded items-center flex justify-between gap-2 sm:hover:bg-transparent': true,
              'text-red-500': activeMenu === 'About',
              'hover:bg-blue-700': activeMenu !== 'About',
            }"
            @click="setActive('About')"
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
                d="M18.9812 9.51999L12.9812 15.52L6.9812 9.51999"
                stroke="#45434D"
                stroke-width="2"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{
              'py-2 px-4 flex justify-between gap-2 items-center rounded sm:hover:bg-transparent': true,
              'text-red-500': activeMenu === 'Services',
              'hover:bg-blue-700': activeMenu !== 'Services',
            }"
            @click="setActive('Services')"
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
                d="M18.9812 9.51999L12.9812 15.52L6.9812 9.51999"
                stroke="#45434D"
                stroke-width="2"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="/blog"
            :class="{
              'block py-2 px-4 rounded sm:hover:bg-transparent': true,
              'text-red-500': activeMenu === 'Harga',
              'hover:bg-blue-700': activeMenu !== 'Harga',
            }"
            @click="setActive('Harga')"
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
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    const isMenuOpen = ref(false);
    const activeMenu = ref("Home");

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const setActive = (menu: string) => {
      activeMenu.value = menu;
    };

    return {
      isMenuOpen,
      activeMenu,
      toggleMenu,
      setActive,
    };
  },
};
</script>

<style scoped>
/* Tambahkan gaya kustom jika diperlukan */
</style>
