<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Address</h5>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col">
          <label>Address 1</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. Street 111"
            v-model="userInfoStore.address1"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label>Address 2</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. Street 221"
            v-model="userInfoStore.address2"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <label>City</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. Tokyo"
            v-model="userInfoStore.city"
          />
        </div>
        <div class="col-6 col-sm-3 mt-3 mt-sm-0">
          <label>State</label>
          <select
            id="choices-state"
            class="multisteps-form__select form-control"
            name="choices-state"
            v-model="userInfoStore.state"
          >
            <option selected="selected">...</option>
            <option value="1">State 1</option>
            <option value="2">State 2</option>
          </select>
        </div>
        <div class="col-6 col-sm-3 mt-3 mt-sm-0">
          <label>Zip</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="7 letters"
            v-model="userInfoStore.zip"
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
import Choices from "choices.js";
import { useUserInfoStore } from '@/stores/userInfo'

export default {
  name: "Address",
  components: {    
    VsudButton,
  },  
  setup(){
    const userInfoStore = useUserInfoStore()
    return { userInfoStore}
  },
  mounted() {
    if (document.getElementById("choices-state")) {
      var element = document.getElementById("choices-state");
      new Choices(element, {
        searchEnabled: false,
      });
    }
  },
};
</script>

<style></style>
