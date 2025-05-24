<template>
  <nav class="relative bg-[#ff4950] text-black py-4 px-8 flex">
    <img src="../assets/icons/bars-svgrepo-com.svg" alt="bars" class="w-8 h-8 cursor-pointer" @click="toggleMenu"/>
    <h1 class="font-bold text-lg text-[#fffffc] justify-center items-center ml-5">Kennedy's Portifolio</h1>
    <img src="../assets/icons/linkedin-svgrepo-com.svg" alt="linkedin" class="size-8" />
    <img src="../assets/icons/github-142-svgrepo-com.svg" alt="github" class="size-8" />
    <img src="../assets/icons/instagram-svgrepo-com.svg" alt="instagram" class="size-8" />

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