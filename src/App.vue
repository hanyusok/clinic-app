<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import AppFooter from "@/components/Footer.vue";
</script>

<template>
  
    <!-- <navbar /> -->
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  
  <router-view />
  <!-- <div>
    <app-footer />>
  </div> -->
</template>

<style scoped></style>
