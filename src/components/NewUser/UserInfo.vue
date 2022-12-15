<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder mb-0">About me</h5>
    <p class="mb-0 text-sm">Mandatory informations</p>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <label>First Name</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. Michael"
            v-model="$parent.userInfoStore.firstName"
          />
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <label>Last Name</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. Prior"
            v-model="$parent.userInfoStore.lastName"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <label>Company</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. Creative Tim"
            v-model="$parent.userInfoStore.company"
          />
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <label>Email Address</label>
          <input
            class="multisteps-form__input form-control"
            type="email"
            placeholder="eg. soft@dashboard.com"
            v-model="$parent.userInfoStore.email"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <label>Password</label>
          <input
            class="multisteps-form__input form-control"
            type="password"
            placeholder="******"
            v-model="$parent.userInfoStore.password"
          />
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <label>Repeat Password</label>
          <input
            class="multisteps-form__input form-control"
            type="password"
            placeholder="******"
            v-model="$parent.userInfoStore.repassword"
          />
        </div>
      </div>
      <div class="button-row d-flex mt-4">
        <vsud-button
          type="button"
          color="dark"
          variant="gradient"
          class="ms-auto mb-0 js-btn-next"
          @click="$parent.nextStep"
          >Next</vsud-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import VsudButton from '@/components/VsudButton.vue'
import { useUserInfoStore } from '@/stores/userInfo'
export default {
  name: 'UserInfo',
  setup() {
    const userInfoStore = useUserInfoStore()
    return { userInfoStore }
  },
  components: {
    VsudButton
  }
}
</script>
