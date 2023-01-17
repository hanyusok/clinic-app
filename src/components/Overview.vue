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
            <h5 class="mb-1">한유석원장 {{ authStore.displayName }}</h5>
            <p class="mb-0 text-sm font-weight-bold">전문의 / 마트의원</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-12 col-md-6 col-xl-4">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Settings</h6>
          </div>
          <div class="p-3 card-body">
            <h6 class="text-xs text-uppercase text-body font-weight-bolder">Account</h6>
            <ul class="list-group">
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  checked
                  >Email me when someone follows me</vsud-switch
                >
              </li>
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault1"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  >Email me when someone answers on my post</vsud-switch
                >
              </li>

              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault2"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  checked
                  >Email me when someone mentions me</vsud-switch
                >
              </li>
            </ul>
            <h6 class="mt-4 text-xs text-uppercase text-body font-weight-bolder">
              Application
            </h6>
            <ul class="list-group">
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault3"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  >New launches and projects</vsud-switch
                >
              </li>
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault4"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  checked
                  >Monthly product updates</vsud-switch
                >
              </li>
              <li class="px-0 pb-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault5"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  >Subscribe to newsletter</vsud-switch
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-4 mt-md-0">
        <profile-card />
      </div>
      <div class="mt-4 col-12 col-xl-4 mt-xl-0">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Families</h6>
          </div>
          <div class="p-3 card-body">
            <ul class="list-group">
              <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center">
                <vsud-avatar
                  class="me-3"
                  :img="sophie"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div class="d-flex align-items-start flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Sophie B.</h6>
                  <p class="mb-0 text-xs">Hi! I need more information..</p>
                </div>
                <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:;"
                  >Reply</a
                >
              </li>
              <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center">
                <vsud-avatar
                  class="me-3"
                  :img="marie"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div class="d-flex align-items-start flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Anne Marie</h6>
                  <p class="mb-0 text-xs">Awesome work, can you..</p>
                </div>
                <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:;"
                  >Reply</a
                >
              </li>
              <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center">
                <vsud-avatar
                  class="me-3"
                  :img="ivana"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div class="d-flex align-items-start flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Ivanna</h6>
                  <p class="mb-0 text-xs">About files I can..</p>
                </div>
                <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:;"
                  >Reply</a
                >
              </li>
              <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center">
                <vsud-avatar
                  class="me-3"
                  :img="peterson"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div class="d-flex align-items-start flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Peterson</h6>
                  <p class="mb-0 text-xs">Have a great afternoon..</p>
                </div>
                <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:;"
                  >Reply</a
                >
              </li>
              <li class="px-0 border-0 list-group-item d-flex align-items-center">
                <vsud-avatar
                  class="me-3"
                  :img="nick"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div class="d-flex align-items-start flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Nick Daniel</h6>
                  <p class="mb-0 text-xs">Hi! I need more information..</p>
                </div>
                <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:;"
                  >Reply</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Histories</h6>
            <p class="text-sm">마트의원 { 한유석 원장} Architects design houses</p>
            <!-- <p class="text-sm">uid {{ uid }} Architects design houses</p> -->
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <div class="card h-100 card-plain">
                  <div class="px-1 pb-0 card-body">
                    <p class="mb-2 text-sm text-gradient text-dark">Date #{ number }</p>
                    <!-- <a href="javascript:;">
                      <h5>{{ title }}제목</h5>
                    </a>
                    <p class="mb-4 text-sm">테스트{{ description }}</p> -->
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="증상이나 필요한 점을 입력하세요"
                      v-model="callStore.memo"
                    ></textarea>
                    <div class="d-flex align-items-center justify-content-between pt-2">
                      <button
                        type="button"
                        class="mb-2 btn btn-outline-success btn-sm"
                        @click="callStore.addCall"
                      >
                        전송하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="mb-4 col-xl-3 col-md-6 mb-xl-0"
                v-for="callitem in calls"
                :key="callitem.id"
              >
                <div class="mb-4 col-xl-6 col-md-12 mb-xl-0">
                  <div class="card card-blog card-plain">
                    <!-- <div class="position-relative">
                      <a class="shadow-xl d-block border-radius-xl">
                        <img
                          :src="img"
                          alt="img-blur-shadow"
                          class="shadow img-fluid border-radius-xl"
                        />
                      </a>
                    </div> -->
                    <div class="px-1 pb-0 card-body">
                      <p class="mb-2 text-sm text-gradient text-dark">
                        {{ callitem.createdAt.toDate() }}
                        <!-- {{ call.createdAt.toDate() }} -->
                      </p>
                      <a href="javascript:;" class="d-flex align-items-center">
                        <vsud-avatar
                          :img="img2"
                          size="xs"
                          circular="rounded-circle"
                          class="me-2"
                          alt="user image"
                        />
                        <h5>{{ callitem.patientName }}</h5>
                      </a>
                      <p class="mb-4 text-sm">
                        {{ callitem.memo }}
                      </p>
                      <div class="d-flex align-items-center">
                        <vsud-badge
                          :color="callitem.isRegistered ? 'success' : 'secondary'"
                          variant="gradient"
                          size="sm"
                          >신청
                        </vsud-badge>
                        <vsud-badge
                          :color="callitem.isPayed ? 'success' : 'secondary'"
                          variant="gradient"
                          size="sm"
                          >수납 </vsud-badge
                        ><vsud-badge
                          :color="callitem.isReady ? 'success' : 'secondary'"
                          variant="gradient"
                          size="sm"
                          >대기 </vsud-badge
                        ><vsud-badge
                          :color="callitem.toPharm ? 'success' : 'secondary'"
                          variant="gradient"
                          size="sm"
                          >처방전
                        </vsud-badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from './Navbar.vue'
import bgImg from '@/assets/img/curved-images/curved14.jpg'
import VsudSwitch from '@/components/VsudSwitch.vue'
import VsudBadge from '@/components/VsudBadge.vue'
import ProfileCard from '@/components/Overview/ProfileCard.vue'
import VsudAvatar from '@/components/VsudAvatar.vue'
import sophie from '@/assets/img/kal-visuals-square.jpg'
import marie from '@/assets/img/marie.jpg'
import ivana from '@/assets/img/ivana-square.jpg'
import peterson from '@/assets/img/team-4.jpg'
import nick from '@/assets/img/team-3.jpg'
import img1 from '../assets/img/home-decor-1.jpg'
// import img2 from '../assets/img/home-decor-2.jpg'
import img2 from '@/assets/img/team-1.jpg'
import img3 from '../assets/img/home-decor-3.jpg'
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'

import ProjectsCard from '@/components/Overview/ProjectOverviewCard.vue'

import setNavPills from '@/assets/js/nav-pills.js'
import setTooltip from '@/assets/js/tooltip.js'
import { useCallStore } from '@/stores/call'
import { useDesignStore } from '@/stores/design'
import { useAuthStore } from '@/stores/auth'
import { useUserInfoStore } from '@/stores/userInfo'
import { db, auth } from '@/firebase/init'
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc
} from 'firebase/firestore'

export default {
  name: 'Overview',
  components: {
    VsudBadge,
    VsudSwitch,
    ProfileCard,
    VsudAvatar,
    ProjectsCard
  },
  setup() {
    const designStore = useDesignStore()
    const authStore = useAuthStore()
    const userInfoStore = useUserInfoStore()
    const callStore = useCallStore()
    const user = auth.currentUser
    const uid = user.uid
    return { designStore, authStore, userInfoStore, callStore, user }
  },
  data() {
    return {
      bgImg,
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      calls: []
      // uid
    }
  },
  mounted() {
    const callsRef = collection(db, 'calls')
    const user = auth.currentUser
    const uid = user.uid
    // const q = query(callsRef, orderBy('createdAt'))
    const q = query(callsRef, where('userId', '==', uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let callChange = change.doc.data()

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
  }
}
</script>
