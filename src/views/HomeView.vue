<script>
import Signin from '@/components/Signin.vue'
import bgImg from '../assets/img/curved-images/curved6.jpg'

export default{
    data(){
        return{
           bgImg 
        }
    }

}
</script>

<template>

    <div>
        <div
    class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
    :style="{
      backgroundImage: `url(${bgImg})`
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">Welcome!</h1>
          <p class="text-white text-lead">
            Use these awesome forms to login or create new account in your project for
            free.
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
