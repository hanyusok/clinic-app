<template>

  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-5 card card-plain">
                <div class="card-header pb-0 text-left">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Join us today
                  </h3>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body pb-3">
                  <form role="form" @submit.prevent="authStore.register">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      aria-label="Name"
                      class="form-control"
                      v-model="authStore.displayName"
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                      class="form-control"
                      v-model="authStore.email"
                    />
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      class="form-control"
                      v-model="authStore.password"
                    />
                    <vsud-checkbox
                      id="flexCheckDefault"
                      class="font-weight-light"
                      checked
                    >
                      I agree the
                      <a
                        href="../../../pages/privacy.html"
                        class="text-dark font-weight-bolder"
                        >Terms and Conditions</a
                      >
                    </vsud-checkbox>
                    <div class="text-center">
                      <vsud-button
                        color="success"
                        variant="gradient"
                        full-width
                        class="mt-4 mb-0"
                        type="submit"                        
                        >Sign up</vsud-button
                      >                  
                    </div>
                    <!-- <div class="text-center">
                      <vsud-button
                        color="info"
                        variant="gradient"
                        full-width
                        class="mt-4 mb-0"
                        @click="signInWithGoogle"
                        >Sign in with Google</vsud-button
                      >
                    </div> -->
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto">
                    Already have an account?
                    <router-link class="text-success text-gradient font-weight-bold" :to="{ name: 'Signin'}">Sign in</router-link>                    
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage: `url(${bgImg})`
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
import bgImg from '@/assets/img/curved-images/curved11.jpg'
import AppFooter from '@/components/Footer.vue'
import VsudCheckbox from '@/components/VsudCheckbox.vue'
import VsudButton from '@/components/VsudButton.vue'
import { useAuthStore } from '@/stores/auth'

// import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
// import router from '@/router/index'
// import auth from '@/firebase/init'


export default {
  name: 'Signup',
  components: {
    AppFooter,
    VsudCheckbox,
    VsudButton
  },
  setup(){
    const authStore = useAuthStore()
    return { authStore }
  },
  data() {
    return { 
      bgImg,
      // email:  '',
      // name:  '',
      // password:  ''
   }
  // },
  // methods:{
  //   register(){       
  //     createUserWithEmailAndPassword(auth, this.email, this.password).then((userCredential) => {
  //       const user = userCredential.user
  //       updateProfile(auth.currentUser, {
  //         displayName: this.name
  //       })        
  //       console.log('successfully registered.')
  //       console.log(user)
  //       router.push('/overview')
  //     }).catch((error) =>{
  //       console.log(error.code)
  //       alert(error.message)
  //     })},
  //   signInWithGoogle(){}
  }
}
</script>
