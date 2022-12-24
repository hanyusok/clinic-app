<template>
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
          <h1 class="mt-5 mb-2 text-white">비대면 신청</h1>
          <p class="text-white text-lead">신청하기 위해서는 회원가입이 필요합니다.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <!-- <nav-pill /> -->
      </div>
    </div>
    <div class="row mt-4">
      <!-- <div class="col-sm-6">
        <label class="form-label">Security Question</label>
        <select
          id="choices-questions"
          ref="choicesQuestions"
          class="form-control"
          name="choices-questions"
        >
          <option value="Question 1">Question 1</option>
          <option value="Question 2">Question 2</option>
          <option value="Question 3">Question 3</option>
          <option value="Your Question" disabled>Your Question</option>
        </select>
      </div> -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-1">사전 진료 안내</h6>
            <p class="text-sm mb-0">Please follow this guide for a strong password:</p>
          </div>
          <div class="card-body p-3">
            <ul class="text-muted ps-4 mb-0">
              <li>
                <span class="text-sm">One special characters</span>
              </li>
              <li>
                <span class="text-sm">Min 6 characters</span>
              </li>
              <li>
                <span class="text-sm">One number (2 are recommended)</span>
              </li>
              <li>
                <span class="text-sm">Change it often</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <label class="form-label">증상(Symptom)</label>
        <!-- <input type="text" placeholder="Enter your answer" class="form-control" /> -->
        <textarea
          type="text"
          rows="5"
          placeholder="Enter your answer"
          class="form-control"
        />
        <div class="row mt-5">
          <div class="col-lg-8 col-12 actions text-end ms-auto">
            <vsud-button
              color="info"
              variant="outline"
              size="sm"
              class="btn-sm mb-0 me-1"
              type="reset"
              >취소</vsud-button
            >
            <vsud-button
              color="info"
              variant="gradient"
              size="sm"
              class="btn-sm mb-0"
              type="button"
              >저장하기</vsud-button
            >
          </div>
        </div>
      </div>
      <hr class="horizontal dark mt-1 mb-3" />
      <div class="col-md-6 pb-3">
        <div class="card">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Basic Settings(기본설정)</h6>
          </div>
          <div class="card-body p-3">
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">안성 거주자 이신가요?</span>
              <vsud-switch checked class="ms-3" />
            </div>
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">Send SMS confirmation for all online payments</span>
              <vsud-switch class="ms-3" />
            </div>
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">Check which devices accessed your account</span>
              <vsud-switch checked class="ms-3" />
            </div>
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">
                Find My Device, make sure your device can be found if it gets lost
              </span>
              <vsud-switch class="ms-3" />
            </div>
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm"
                >Lock your device with a PIN, pattern, or password</span
              >
              <vsud-switch class="ms-3" />
            </div>
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">
                Manage what apps have access to app-usage data on your device
              </span>
              <vsud-switch checked class="ms-3" />
            </div>
            <div class="row mt-5">
              <div class="col-lg-8 col-12 actions text-end ms-auto">
                <vsud-button
                  color="success"
                  variant="outline"
                  size="sm"
                  class="btn-sm mb-0 me-1"
                  type="reset"
                  >건너뛰기</vsud-button
                >
                <vsud-button
                  color="success"
                  variant="gradient"
                  size="sm"
                  class="btn-sm mb-0"
                  type="button"
                  >저장하기</vsud-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <div class="d-flex align-items-center">
              <h6 class="mb-0">Two factor authentication</h6>
              <vsud-button color="dark" variant="gradient" size="sm" class="ms-auto mb-0"
                >Enable</vsud-button
              >
            </div>
          </div>
          <div class="card-body p-3">
            <p class="text-muted text-sm mb-4 mt-sm-5 mt-3">
              Two-factor authentication adds an additional layer of security to your
              account by requiring more than just a password to log in.
            </p>
            <div class="card">
              <div class="card-body border-radius-lg bg-gradient-dark p-3">
                <h6 class="mb-0 text-white">Questions about security?</h6>
                <p class="text-white text-sm mb-4">
                  Have a question, concern, or comment about security? Please contact us.
                </p>
                <vsud-button color="light" variant="gradient" class="mb-0"
                  >Contact Us</vsud-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-4 mt-3">
      <div class="col-md-6 pb-3">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-1">Change password</h6>
            <p class="text-sm mb-0">
              We will send you an email with the verification code.
            </p>
          </div>
          <div class="card-body p-3">
            <label class="form-label">Current password</label>
            <input type="password" placeholder="Current Password" class="form-control" />
            <label class="form-label">New password</label>
            <input type="password" placeholder="New Password" class="form-control" />
            <label class="form-label">Confirm new password</label>
            <input type="password" placeholder="Confirm password" class="form-control" />
            <vsud-button color="dark" variant="gradient" full-width class="w-100 mb-0"
              >Update password</vsud-button
            >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-1">Password requirements</h6>
            <p class="text-sm mb-0">Please follow this guide for a strong password:</p>
          </div>
          <div class="card-body p-3">
            <ul class="text-muted ps-4 mb-0">
              <li>
                <span class="text-sm">One special characters</span>
              </li>
              <li>
                <span class="text-sm">Min 6 characters</span>
              </li>
              <li>
                <span class="text-sm">One number (2 are recommended)</span>
              </li>
              <li>
                <span class="text-sm">Change it often</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as Choices from "choices.js";
// import NavPill from "./components/NavPill.vue";
import VsudSwitch from '@/components/VsudSwitch.vue'
import VsudButton from '@/components/VsudButton.vue'
import bgImg from '@/assets/img/curved-images/curved6.jpg'

export default {
  name: 'NewCall',
  components: {
    VsudSwitch,
    VsudButton
  },
  data() {
    return {
      bgImg
    }
  }
  // mounted() {
  //   new Choices(this.$refs.choicesQuestions)
  // },
}
</script>
