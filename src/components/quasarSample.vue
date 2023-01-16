<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-sm">
        <div class="col">
          <q-input
            class="new-call"
            autogrow
            v-model="newCallContent"
            placeholder="어디가 불편하세요?"
            counter
            maxlength="280"
            bottom-slots
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="../assets/doc.jpg" />
              </q-avatar>
            </template>

            <template v-slot:hint> MEMO </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewCall"
            class="q-mb-md"
            :disable="!newCallContent"
            unelevated
            round
            color="primary"
            label="Call"
            no-caps
          />
        </div>
      </div>

      <q-separator class="divider" size="10px" color="grey-2" />

      <q-list>
        <TransitionGroup
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item v-for="call in calls" :key="call.id" class="call q-py-md">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="../assets/doc.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong> 홍길동 </strong>
                <span class="text-grey-7"
                  >@마트의원 <br class="lt-md" />&bull; {{ relativeDate(call.date) }}
                </span>
              </q-item-label>
              <q-item-label class="call-conetent text-body1">
                {{ call.content }}
              </q-item-label>
              <div class="call-icons row justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  size="sm"
                  :color="call.isPayed ? 'green-6' : 'grey-7'"
                  @click="togglePayed(call)"
                  icon="fa fa-comments-dollar"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  :color="call.isReady ? 'green-6' : 'grey-7'"
                  @click="toggleReady(call)"
                  icon="fa-solid fa-thumbtack"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  :color="call.toPharmacy ? 'green-6' : 'grey-7'"
                  @click="togglePharmacy(call)"
                  icon="fa-solid fa-pills"
                />
                <q-btn
                  @click="deleteCall(call)"
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fas fa-trash"
                />
              </div>
            </q-item-section>
          </q-item>
        </TransitionGroup>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
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
import { formatDistance } from 'date-fns'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      newCallContent: '',
      calls: []
    }
  },
  mounted() {
    const callsRef = collection(db, 'calls')
    const q = query(callsRef, orderBy('date'))
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
    relativeDate(value) {
      return formatDistance(value, new Date())
    },
    async addNewCall() {
      let newCall = {
        content: this.newCallContent,
        date: Date.now(),
        isPayed: false,
        isReady: false,
        toPharmacy: false
      }
      const callsRef = collection(db, 'calls')
      const docRef = await addDoc(callsRef, newCall)
      this.newCallContent = ''
      console.log('Document written with ID: ', docRef.id)
    },
    async deleteCall(call) {
      await deleteDoc(doc(db, 'calls', call.id))
    },
    async togglePayed(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { isPayed: !call.isPayed })
      console.log('Document(togglePayed) updated:')
    },
    async toggleReady(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { isReady: !call.isReady })
      console.log('Document(toggleReady) updated:')
    },
    async togglePharmacy(call) {
      const callsRef = doc(db, 'calls', call.id)
      await updateDoc(callsRef, { toPharmacy: !call.toPharmacy })
      console.log('Document(togglePharmacy) updated:')
    }
  }
})
</script>

<style lang="sass">
.new-call
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.call-conetent
  white-space: pre-line
.call-icons
  margin-left: -5px
.call:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
