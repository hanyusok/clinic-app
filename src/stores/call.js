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
    },
    resetCall(){      
      this.memo = "",       
      this.patientName = "",
      this.patientMobile = "",
      this.jumin = ""
    }

  }
})
