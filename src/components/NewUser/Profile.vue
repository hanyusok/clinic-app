<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder mb-0">Profile</h5>
    <div class="multisteps-form__content mt-3">
      <div class="row">
        <div class="col-12">
          <label>Public Email</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="Use an address you don't use frequently."
            v-model="$parent.userInfoStore.publicEmail"
          />
        </div>
        <div class="col-12">
          <label>Bio</label>
          <textarea
            class="multisteps-form__textarea form-control"
            rows="5"
            placeholder="Say a few words about who you are or what you're working on."
            v-model="$parent.userInfoStore.bio"
          ></textarea>
        </div>
      </div>
      <div class="button-row d-flex mt-4">
        <vsud-button
          type="button"
          color="light"
          variant="gradient"
          class="js-btn-prev"
          @click="$parent.prevStep"
          >Prev</vsud-button
        >
        <vsud-button
          type="button"
          color="dark"
          variant="gradient"
          class="ms-auto"
          @click="$parent.handleSubmit"
          >Send</vsud-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import VsudButton from '@/components/VsudButton.vue'
import { useUserInfoStore } from '@/stores/userInfo'

export default {
  name: 'Profile',
  setup() {
    const userInfoStore = useUserInfoStore()
    return { userInfoStore }
  },
  components: {
    VsudButton
  }
}
</script>
