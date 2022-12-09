<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success" :dark-mode="true"  />
      </div>
    </div> 
  </div>
  <router-view />  
</template>

<style></style>
