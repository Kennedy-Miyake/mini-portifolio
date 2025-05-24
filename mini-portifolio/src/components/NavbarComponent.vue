<template>
  <nav class="relative bg-[#ff4950] text-black py-4 px-8 flex">
    <img src="../assets/icons/bars-svgrepo-com.svg" alt="bars" class="w-8 h-8 cursor-pointer" @click="toggleMenu"/>
    <h1 class="font-bold text-lg text-[#fffffc] justify-center items-center ml-5">Kennedy's Portifolio</h1>
    <div class="flex relative ml-auto space-x-4">
      <img src="../assets/icons/linkedin-svgrepo-com.svg" alt="linkedin" class="size-8" />
      <img src="../assets/icons/github-142-svgrepo-com.svg" alt="github" class="size-8" />
      <img src="../assets/icons/instagram-svgrepo-com.svg" alt="instagram" class="size-8" />
    </div>

    <!-- Menu -->
    <div v-if="isOpen"
         class="absolute top-full left-0 mt-2 w-60 bg-gray-100 shadow-lg rounded-2xl z-10 ml-6">
      <ul>
        <li class="block px-4 py-2 hover:bg-gray-200 rounded-t-2xl">
          <a href="#home">Home</a>
        </li>
        <li class="block px-4 py-2 hover:bg-gray-200">
          <a href="#about">Sobre Mim</a>
        </li>
        <li class="block px-4 py-2 hover:bg-gray-200 rounded-b-2xl">
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'NavbarComponent',

  setup() {
    const isOpen = ref(false);

    function toggleMenu() {
      isOpen.value = !isOpen.value;
    }
    return {
      isOpen,
      toggleMenu
    }
  }
}
</script>