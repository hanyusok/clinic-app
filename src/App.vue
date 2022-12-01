<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import AppFooter from "@/components/Footer.vue";
</script>

<template>
  <div>
    <navbar />
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  </div>
  <router-view />
  <div>
    <app-footer />>
  </div>
</template>

<style scoped></style>
