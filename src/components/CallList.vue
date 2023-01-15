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
    <div class="d-sm-flex justify-content-between">
      <div>
        <vsud-button color="success" variant="gradient">New order</vsud-button>
      </div>
      <div class="d-flex">
        <div class="dropdown d-inline">
          <vsud-button
            id="navbarDropdownMenuLink2"
            color="dark"
            variant="outline"
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >Filters</vsud-button
          >
          <ul
            class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
            aria-labelledby="navbarDropdownMenuLink2"
            style
          >
            <li>
              <a class="dropdown-item border-radius-md" href="javascript:;"
                >Status: Paid</a
              >
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="javascript:;"
                >Status: Refunded</a
              >
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="javascript:;"
                >Status: Canceled</a
              >
            </li>
            <li>
              <hr class="horizontal dark my-2" />
            </li>
            <li>
              <a class="dropdown-item border-radius-md text-danger" href="javascript:;"
                >Remove Filter</a
              >
            </li>
          </ul>
        </div>
        <vsud-button
          class="btn-icon ms-2 export"
          size
          color="dark"
          variant="outline"
          data-type="csv"
        >
          <span class="btn-inner--icon">
            <i class="ni ni-archive-2"></i>
          </span>
          <span class="btn-inner--text">Export CSV</span>
        </vsud-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card mt-4">
          <div class="table-responsive">
            <table id="order-list" class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Memo</th>
                  <th>Status</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="call in calls" :key="call.id">
                  <td>
                    <div class="d-flex align-items-center">
                      <vsud-checkbox />
                      <p class="text-xs font-weight-bold ms-2 mb-0">
                        {{ call.userId }}
                      </p>
                    </div>
                  </td>
                  <td class="font-weight-bold">
                    <span class="my-2 text-xs">{{ call.memo }}</span>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <div class="d-flex align-items-center">
                      <vsud-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                      >
                        <i class="fas fa-check" aria-hidden="true"></i>
                      </vsud-button>
                      <span>Paid</span>
                    </div>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <div class="d-flex align-items-center">
                      <vsud-avatar
                        :img="img1"
                        class="me-2"
                        size="xs"
                        circular="rounded-circle"
                        alt="user image"
                      />
                      <span>{{ call.callId }}</span>
                    </div>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <span class="my-2 text-xs">{{ call.createdAt.toDate() }}</span>
                  </td>
                  <td class="text-xs font-weight-bold">
                    <span class="my-2 text-xs">$140,20</span>
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
  }

  // mounted() {
  //   if (document.getElementById('order-list')) {
  //     const dataTableSearch = new DataTable('#order-list', {
  //       searchable: true,
  //       fixedHeight: false,
  //       perPageSelect: false
  //     })

  //     document.querySelectorAll('.export').forEach(function (el) {
  //       el.addEventListener('click', function (el) {
  //         var type = el.dataset.type

  //         var data = {
  //           type: type,
  //           filename: 'soft-ui-' + type
  //         }

  //         if (type === 'csv') {
  //           data.columnDelimiter = '|'
  //         }

  //         dataTableSearch.export(data)
  //       })
  //     })
  //   }
  // }
}
</script>
