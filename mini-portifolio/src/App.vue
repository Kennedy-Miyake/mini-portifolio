<script setup>
  import Navbar from './components/NavbarComponent.vue'
  import Footer from './components/FooterComponent.vue'
</script>
<template>
  <div class="flex-flex-col min-h-screen bg-[#212332] text-[#fffffc]">
    <Navbar />
    <div class="main container mx-auto px-4 py-6"></div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>