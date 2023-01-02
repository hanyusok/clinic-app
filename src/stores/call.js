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
    cratedAt: ""
  }),
  actions: {   
    async addCall(){
      const uid = auth.currentUser.uid
      const callCollectionRef = collection(db, 'calls')      
      const resp = await addDoc(callCollectionRef, {
        callId: uid,
        userId: uid,
        memo: this.memo,      
        createdAt: Timestamp.now() 
      })
      alert("call added: ")
      console.log(resp.id + "call added!")
    }

  }
})
