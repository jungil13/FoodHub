<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/views/Navbar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
     <Nav />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
