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
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-1">안내 말씀</h6>
            <p class="text-sm mb-0">건강보험 적용되므로, (본인부담) 진료비(0~5있음.</p>
          </div>
          <div class="card-body p-3">
            <ul class="text-muted ps-4 mb-0">
              <li>
                <span class="text-sm">
                  <vsud-badge color="success" variant="gradient" size="sm"
                    >진료비 수납후
                  </vsud-badge>
                  비대면 접수 진행됨.</span
                >
              </li>
              <li>
                <span class="text-sm"
                  >계좌이체후, 초대하는
                  <vsud-badge color="primary" variant="gradient" size="sm"
                    >영상통화 수락 </vsud-badge
                  >하면 됨</span
                >
              </li>
              <li>
                <span class="text-sm">시끄럽지 않고, 조용한 곳이 좋음</span>
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
              @click="callStore.resetCall"
              >취소</vsud-button
            >
            <vsud-button
              color="info"
              variant="gradient"
              size="sm"
              class="btn-sm mb-0"
              type="button"
              @click="callStore.addCall"
              >신청</vsud-button
            >
          </div>
        </div>
      </div>
      <hr class="horizontal dark mt-1 mb-3" />

      <div class="col-md-6">
        <div class="">
          <h6 class="mb-1 mt-3">접수 진행 상황 Status</h6>
          <p class="text-sm">현재 {#월#일} 비대면 {# 명} 진료 대기중</p>
        </div>
        <div class="col-lg-8 col-12 actions text-end ms-auto mb-2">
          <vsud-button
            color="success"
            variant="gradient"
            size="sm"
            class="btn-sm mb-0"
            type="button"
            @click="getProgressInfo"
            >조회</vsud-button
          >
          <!-- <vsud-button
            color="success"
            variant="gradient"
            size="sm"
            class="btn-sm mb-0"
            type="button"
            @click="callStore.getStatus"
            >조회</vsud-button
          > -->
        </div>
        <div
          class="timeline timeline-one-side border-dashed border-1 border-secondary border-radius-md"
        >
          <div class="timeline-block mb-3">
            <span class="timeline-step">
              <i class="ni ni-bell-55 text-secondary"></i>
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">비대면 진료 접수됨.</h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                22 DEC 7:20 AM
              </p>
            </div>
          </div>
          <div class="timeline-block mb-3">
            <span class="timeline-step">
              <i class="ni ni-money-coins text-secondary text-success"></i>
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">
                진료비 입급 확인됨 #(5,500원)
              </h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                {22 DEC 7:21 AM}
              </p>
            </div>
          </div>
          <div class="timeline-block mb-3">
            <span class="timeline-step">
              <i class="ni ni-circle-08 text-secondary text-success"></i>
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">진료 준비중</h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                {22 DEC 8:10 AM}
              </p>
            </div>
          </div>
          <div class="timeline-block mb-3">
            <span class="timeline-step">
              <i class="ni ni-building text-success text-gradient"></i>
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">
                {제일약국}에 처방전 전달됨.
              </h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                {22 DEC 4:54 PM}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <div class="d-flex align-items-center">
              <h6 class="mb-0">마트의원</h6>
              <a
                class="btn btn-sm btn-secondary ms-auto mb-0"
                href="https://naver.me/FOvhcUlc"
                >위치</a
              >
            </div>
          </div>
          <div class="card-body p-3">
            <div class="card">
              <div class="card-body border-radius-lg bg-gradient-dark p-3">
                <h6 class="mb-0 text-white">진료시간: 10am-7pm</h6>
                <p class="text-white text-sm mb-4">점심 12:30 - 1:30 pm / 수요일(휴진)</p>
                <a
                  class="btn btn-md ms-auto mb-0 bg-gradient-light"
                  href="tel:031-657-8279"
                  >전화연결</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-4 mt-3"></div>
  </div>
</template>

<script>
import VsudBadge from '@/components/VsudBadge.vue'
import VsudButton from '@/components/VsudButton.vue'
import bgImg from '@/assets/img/curved-images/curved6.jpg'
import { useCallStore } from '@/stores/call'
import { doc, onSnapshot, getDoc } from 'firebase/firestore'
import { db, auth } from '@/firebase/init'

export default {
  name: 'NewCall',
  components: {
    VsudButton,
    VsudBadge
  },
  data() {
    return {
      bgImg,
      responseStatusId: '',
      callitems: [],
      progressInfo: []
    }
  },
  setup() {
    const callStore = useCallStore()
    return { callStore }
  },
  // mounted() {
  //   const callsRef = collection(db, 'calls')
  //   const user = auth.currentUser
  //   const uid = user.uid
  //   // const q = query(callsRef, orderBy('createdAt'))
  //   const q = query(callsRef, where('userId', '==', uid))
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       let callChange = change.doc.data()

  //       if (change.type === 'added') {
  //         console.log('New call: ', callChange)
  //         this.calls.unshift(callChange)
  //       }
  //       if (change.type === 'modified') {
  //         console.log('Modified call: ', callChange)
  //         let index = this.calls.findIndex((call) => call.id === callChange.id)
  //         Object.assign(this.calls[index], callChange)
  //       }
  //       if (change.type === 'removed') {
  //         console.log('Removed call: ', callChange)
  //         let index = this.calls.findIndex((call) => call.id === callChange.id)
  //         this.calls.splice(index, 1)
  //       }
  //     })
  //   })
  // },
  methods: {
    getProgressInfo() {
      const statusRef = doc(db, 'calls', this.callStore.respStatusId)
      const unsub = onSnapshot(
        statusRef,
        (doc) => {
          let progressInfo = doc.data()
          progressInfo.id = doc.id
          alert(`${this.patientName}님, 잠시 기다려 주세요`)
          console.log('Current data: ', doc.data())
          console.log('document ID: ', progressInfo.id)
          console.log('patientName: ', progressInfo.patientName)
          console.log('createdAt: ', progressInfo.createdAt)
          ;(this.createdAt = progressInfo.createdAt),
            console.log('this createdAt: ', this.createdAt)
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
