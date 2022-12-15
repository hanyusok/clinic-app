<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Socials</h5>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col-12">
          <label>Twitter Handle</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="@soft"
            v-model="userInfoStore.twitter"
          />
        </div>
        <div class="col-12 mt-3">
          <label>Facebook Account</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="https://..."
            v-model="userInfoStore.facebook"
          />
        </div>
        <div class="col-12 mt-3">
          <label>Instagram Account</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="https://..."
            v-model="userInfoStore.instagram"
          />
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
          class="ms-auto js-btn-next"
          @click="$parent.nextStep"
          >Next</vsud-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import VsudButton from "@/components/VsudButton.vue";
import { useUserInfoStore } from "@/stores/userInfo"

export default {
  name: "Socials",
  setup(){
    const userInfoStore = useUserInfoStore()
    return { userInfoStore }
  },
  components: {
    VsudButton,
  },
};
</script>
