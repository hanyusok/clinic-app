<template>

  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">Welcome back</h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start" @submit.prevent="authStore.signIn">
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="email" class="form-control" v-model="authStore.email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" class="form-control" v-model="authStore.password" />
                    <vsud-switch id="rememberMe" checked>Remember me</vsud-switch>
                    <div class="text-center">
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        full-width
                        type="submit"
                      >Sign in</vsud-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link class="text-info text-gradient font-weight-bold" :to="{ name: 'Signup'}">Sign up</router-link>                    
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      `url(${bgImg})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import bgImg from '@/assets/img/curved-images/curved9.jpg';
import AppFooter from "@/components/Footer.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import { useAuthStore} from '@/stores/auth'

export default {
  name: "Signin",
  components: {
    AppFooter,    
    VsudSwitch,
    VsudButton,
  },
  setup(){
    const authStore = useAuthStore()
    return { authStore }
  },
  data() {
    return { bgImg }
  }  
}
</script>
