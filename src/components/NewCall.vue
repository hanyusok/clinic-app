<template>
  <div
    class="pt-5 m-3 page-header align-items-start min-vh-20 pb-5 border-radius-lg"
    :style="{
      backgroundImage: `url(${bgImg})`,
      backgroundPositionY: '50%'
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">비대면 진료</h1>
          <p class="text-white text-lead">마트의원 | 안성롯데마트 2F</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-4">
    <!-- <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div> -->
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
            <h6 class="mb-1">안내 말씀</h6>
            <p class="text-sm mb-0">
              건강보험이 적용되므로, (본인부담) 진료비가 발생합니다.
            </p>
          </div>
          <div class="card-body p-3">
            <ul class="text-muted ps-4 mb-0">
              <li>
                <span class="text-sm">진료비 (사전) 수납후에 진료시작됩니다</span>
              </li>
              <li>
                <span class="text-sm"
                  >계좌이체후, 초대하는 (영상통화) 수락하시면 됩니다</span
                >
              </li>
              <li>
                <span class="text-sm">주변이 시끄럽지 않고, 조용한 환경이 좋습니다</span>
              </li>
              <li>
                <span class="text-sm">탈모약(x), 다이어트약(x), 응급피임약(x)</span>
              </li>
              <li>
                <span class="text-sm">대기시간(평균 30~60분)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-6 pb-3">
        <div class="card">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Basic Settings(사전 수납)</h6>
          </div>
          <div class="card-body p-3">
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">안성/평택 사람입니다</span>
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
      </div> -->
      <div class="col-md-6 p-3">
        <label class="form-label">이름(진료받는 분)</label>
        <input
          type="text"
          placeholder="홍길동"
          class="form-control"
          v-model="callStore.patientName"
        />
        <label class="form-label">핸드폰(진료받는 분)</label>
        <input
          type="text"
          placeholder="010-1234-5678"
          class="form-control"
          v-model="callStore.patientMobile"
        />
        <label class="form-label">주민번호(진료받는 분)</label>
        <input
          type="text"
          placeholder="000000-0000000"
          class="form-control"
          v-model="callStore.jumin"
        />
        <label class="form-label">메모</label>
        <textarea
          type="text"
          rows="4"
          placeholder="간단한 증상 또는 요청사항"
          class="form-control"
          v-model="callStore.memo"
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
              @click="callStore.addCall"
              >신청하기</vsud-button
            >
          </div>
        </div>
      </div>
      <hr class="horizontal dark mt-1 mb-3" />
      <!-- <div class="col-md-6 pb-3">
        <div class="card">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Basic Settings(사전 수납)</h6>
          </div>
          <div class="card-body p-3">
            <div class="form-group d-flex align-items-center justify-content-between">
              <span class="text-sm">안성/평택 사람입니다</span>
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
      </div> -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <div class="d-flex align-items-center">
              <h6 class="mb-0">마트의원</h6>
              <vsud-button
                disabled
                color="dark"
                variant="gradient"
                size="sm"
                class="ms-auto mb-0"
                href="https://naver.me/FOvhcUlc"
                >10am-7pm</vsud-button
              >
            </div>
          </div>
          <div class="card-body p-3">
            <p class="text-muted text-sm mb-4 mt-sm-5 mt-3">
              진료시간: 10am-7pm 점심: 12:30-1:30 진료마감: 6:40pm
            </p>
            <div class="card">
              <div class="card-body border-radius-lg bg-gradient-dark p-3">
                <h6 class="mb-0 text-white">Questions about security?</h6>
                <p class="text-white text-sm mb-4">
                  {홍길동} Have a question, concern, or comment about security? Please
                  contact us.
                </p>
                <vsud-button color="light" variant="gradient" class="mb-0"
                  >전화하기</vsud-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 p-3 pb-0">
        <h6 class="mb-0">약국 안내</h6>
        <p class="text-sm">Copy the code bellow to your registered provider.</p>
        <div class="border-dashed border-1 border-secondary border-radius-md p-3">
          <p class="text-xs mb-2">
            Generated 23 days ago by
            <span class="font-weight-bolder">softuidash23</span>
          </p>
          <p class="text-xs mb-3">
            <span class="font-weight-bolder">(Used one time)</span>
          </p>
          <div class="d-flex align-items-center">
            <div class="form-group w-70">
              <div class="input-group bg-gray-200">
                <input
                  class="form-control form-control-sm"
                  value="soft-ui-dashboard-vmsk392"
                  type="text"
                  disabled
                  onfocus="focused(this)"
                  onfocusout="defocused(this)"
                />
                <span
                  class="input-group-text bg-transparent"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title
                  data-bs-original-title="Referral code expires in 24 hours"
                  aria-label="Referral code expires in 24 hours"
                >
                  <i class="ni ni-key-25"></i>
                </span>
              </div>
            </div>
            <a href="javascript:;" class="btn btn-sm btn-outline-secondary ms-2 px-3"
              >Copy</a
            >
          </div>
          <p class="text-xs mb-1">You cannot generate codes.</p>
          <p class="text-xs mb-0">
            <a href="javascript:;">Contact us</a> to generate more referrals link.
          </p>
        </div>
      </div>
      <!-- <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-1">처방전 전송 안내</h6>
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
      </div> -->
    </div>
    <div class="row gx-4 mt-3">
      <!-- <div class="col-md-6 pb-3">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-1">처방전 수령하실 곳 입력해주셍</h6>
            <p class="text-sm mb-0">
              We will send you an email with the verification code.
            </p>
          </div>
          <div class="card-body p-3">
            <label class="form-label">약국 fax 번호</label>
            <input type="password" placeholder="Current Password" class="form-control" />
            <label class="form-label">비대면 신청자 email</label>
            <input type="password" placeholder="New Password" class="form-control" />
            <label class="form-label">기타 연락처</label>
            <input type="password" placeholder="Confirm password" class="form-control" />
            <vsud-button
              color="dark"
              variant="gradient"
              size="sm"
              type="button"
              class="btn-sm mb-0 mt-3"
              >연락처 저장</vsud-button
            >
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import * as Choices from "choices.js";
// import NavPill from "./components/NavPill.vue";
import VsudSwitch from '@/components/VsudSwitch.vue'
import VsudButton from '@/components/VsudButton.vue'
import bgImg from '@/assets/img/curved-images/curved6.jpg'
import { useCallStore } from '@/stores/call'

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
  },
  setup() {
    const callStore = useCallStore()
    return { callStore }
  }
  // mounted() {
  //   new Choices(this.$refs.choicesQuestions)
  // },
}
</script>
