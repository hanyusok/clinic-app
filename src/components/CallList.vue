<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-200 border-radius-xl"
      :style="{
        backgroundImage: `url(${bgImg})`,
        backgroundPositionY: '50%'
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="@/assets/img/doctor_image.png"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">한유석 원장</h5>
            <p class="mb-0 text-sm font-weight-bold">원장 / 마트의원</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mt-4">
          <div class="table-responsive">
            <table id="order-list" class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th>수진자</th>
                  <th>메모</th>
                  <th>신청</th>
                  <th>수납</th>
                  <th>대기</th>
                  <th>처방전</th>
                  <th>주민번호</th>
                  <th>핸드폰</th>
                  <th>비용</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="call in calls" :key="call.id">
                  <td>
                    <div class="d-flex align-items-center">
                      <vsud-checkbox />
                      <p class="text-xs font-weight-bold ms-2 mb-0">
                        {{ call.patientName }}
                      </p>
                    </div>
                  </td>
                  <td class="font-weight-bold">
                    <span class="my-2 text-xs">{{ call.memo }}</span>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <div class="d-flex align-items-center">
                      <vsud-button
                        :color="call.isRegistered ? 'success' : 'secondary'"
                        variant="gradient"
                        @click="toggleRegistered(call)"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                      >
                        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
                      </vsud-button>
                      <!-- <span>{{ call.isRegistered }}</span> -->
                    </div>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <div class="d-flex align-items-center">
                      <vsud-button
                        :color="call.isPayed ? 'success' : 'secondary'"
                        variant="gradient"
                        @click="togglePayed(call)"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                      >
                        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
                      </vsud-button>
                      <!-- <span>{{ call.isPayed }}</span> -->
                    </div>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <div class="d-flex align-items-center">
                      <vsud-button
                        :color="call.isReady ? 'success' : 'secondary'"
                        variant="gradient"
                        @click="toggleReady(call)"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                      >
                        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
                      </vsud-button>
                      <!-- <span>{{ call.isReady }}</span> -->
                    </div>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <div class="d-flex align-items-center">
                      <vsud-button
                        :color="call.toPharm ? 'success' : 'secondary'"
                        variant="gradient"
                        @click="togglePharm(call)"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                      >
                        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
                      </vsud-button>
                      <!-- <span>{{ call.toPharm }}</span> -->
                    </div>
                  </td>
                  <td class="font-weight-bold">
                    <div class="d-flex align-items-center">
                      <span class="my-2 text-xs">{{ call.jumin }}</span>
                    </div>
                  </td>
                  <!-- <td class="text-xs font-weight-bold">
                    <span class="my-2 text-xs">{{ call.createdAt.toDate() }}</span>
                  </td> -->
                  <td class="font-weight-bold">
                    <span class="my-2 text-xs">{{ call.patientMobile }}</span>
                  </td>
                  <td class="font-weight-bold">
                    <span class="my-2 text-xs">{{ call.cost }} 원</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { DataTable } from 'simple-datatables'
import VsudButton from '@/components/VsudButton.vue'
import VsudAvatar from '@/components/VsudAvatar.vue'
import VsudCheckbox from '@/components/VsudCheckbox.vue'
import img1 from '@/assets/img/team-2.jpg'
import img2 from '@/assets/img/team-1.jpg'
import img3 from '@/assets/img/team-3.jpg'
import img4 from '@/assets/img/team-4.jpg'
import img5 from '@/assets/img/team-5.jpg'
import img6 from '@/assets/img/ivana-squares.jpg'
import bgImg from '@/assets/img/curved-images/curved14.jpg'
import { db } from '@/firebase/init'
import {
  collection,
  addDoc,
  updateDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc
} from 'firebase/firestore'

export default {
  name: 'CallList',
  components: {
    VsudButton,
    VsudAvatar,
    VsudCheckbox
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      bgImg,
      calls: []
    }
  },
  mounted() {
    const callsRef = collection(db, 'calls')
    const q = query(callsRef, orderBy('createdAt'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let callChange = change.doc.data()
        callChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New call: ', callChange)
          this.calls.unshift(callChange)
        }
        if (change.type === 'modified') {
          console.log('Modified call: ', callChange)
          let index = this.calls.findIndex((call) => call.id === callChange.id)
          Object.assign(this.calls[index], callChange)
        }
        if (change.type === 'removed') {
          console.log('Removed call: ', callChange)
          let index = this.calls.findIndex((call) => call.id === callChange.id)
          this.calls.splice(index, 1)
        }
      })
    })
  },
  methods: {
    async togglePayed(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { isPayed: !call.isPayed })
      console.log('Document(togglePayed) updated:')
    },
    async toggleRegistered(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { isRegistered: !call.isRegistered })
      console.log('Document(toggleRegistered) updated:')
    },
    async toggleReady(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { isReady: !call.isReady })
      console.log('Document(toggleReady) updated:')
    },
    async togglePharm(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { toPharm: !call.toPharm })
      console.log('Document(togglePharm) updated:')
    }
  }
}
</script>
