<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
// import AppFooter from '@/components/Footer.vue'
</script>

<template>
  <div>
    <navbar />
  </div>
  <div>
    <router-view />
  </div>   
</template>

<style></style>
