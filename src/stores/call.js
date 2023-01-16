import { computed, ref } from 'vue'
import { defineStore } from "pinia";
import router from "@/router/index";
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, query, onSnapshot, orderBy, setDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '@/firebase/init'


export const useCallStore = defineStore({
  id: "callStore",
  state: () => ({    
    callId: "",
    userId: "",
    memo: "", 
    cratedAt: "",
    patientName: "",
    patientMobile: "",
    jumin: "",
    calls: []
  }),
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
  actions: {   
    async addCall(){
      const uid = auth.currentUser.uid
      const callCollectionRef = collection(db, 'calls')      
      const resp = await addDoc(callCollectionRef, {
        callId: uid,
        userId: uid,
        memo: this.memo,      
        createdAt: Timestamp.now(),
        patientName: this.patientName, 
        patientMobile: this.patientMobile,
        jumin: this.jumin
      })
      alert("비대면 진료신청 되었습니다.")
      console.log(resp.id + " call added!")
    }

  }
})
