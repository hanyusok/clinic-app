<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAuthStore } from '@/stores/auth'
import { useUserInfoStore } from '@/stores/userinfo'
import { onMounted } from '@vue/runtime-core'

const authStore = useAuthStore()
const auth = getAuth()
const userInfoStore = useUserInfoStore()

// onMounted(() => userInfoStore.init())

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
    authStore.isLoggedIn = true
    console.log('status : logged-in!')
  } else {
    authStore.isLoggedIn = false
    console.log('status : logged-out!')
  }
})
</script>

<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <router-view />
</template>
