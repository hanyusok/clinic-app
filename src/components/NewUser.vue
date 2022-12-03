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
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="multisteps-form mb-5">
          <div class="row">
            <div class="col-12 col-lg-8 mx-auto my-5">
              <div class="multisteps-form__progress">
                <button
                  class="multisteps-form__progress-btn js-active"
                  type="button"
                  title="User Info"
                  :class="activeStep >= 0 ? activeClass : ''"
                  @click="activeStep = 0"
                >
                  <span>User Info</span>
                </button>
                <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="Address"
                  :class="activeStep >= 1 ? activeClass : ''"
                  @click="activeStep = 1"
                >
                  Address
                </button>
                <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="Socials"
                  :class="activeStep >= 2 ? activeClass : ''"
                  @click="activeStep = 2"
                >
                  Socials
                </button>
                <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="Profile"
                  :class="activeStep >= 3 ? activeClass : ''"
                  @click="activeStep = 3"
                >
                  Profile
                </button>
              </div>
            </div>
          </div>
          <!--form panels-->
          <div class="row">
            <div class="col-12 col-lg-8 m-auto">
              <form class="multisteps-form__form mb-5">
                <!--single form panel-->
                <user-info :class="activeStep === 0 ? activeClass : ''" />
                <!--single form panel-->
                <Address :class="activeStep === 1 ? activeClass : ''" />
                <!--single form panel-->
                <socials :class="activeStep === 2 ? activeClass : ''" />
                <!--single form panel-->
                <profile :class="activeStep === 3 ? activeClass : ''" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
import Address from '../components/Address.vue'
import Socials from '../components/Socials.vue'
import Profile from '../components/Profile.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'NewUser',
  components: {
    Navbar,
    UserInfo,
    Address,
    Socials,
    Profile
  },
  data() {
    return {
      showMenu: false,
      activeClass: 'js-active position-relative',
      activeStep: 0,
      formSteps: 3
    }
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.formSteps) {
        this.activeStep += 1
      } else {
        this.activeStep -= 1
      }
    },
    prevStep() {
      if (this.activeStep > 0) {
        this.activeStep -= 1
      }
    }
  }
}
</script>
