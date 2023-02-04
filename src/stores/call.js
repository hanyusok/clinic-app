import { computed, ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router/index";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  setDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/firebase/init";

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
    respStatusId: "",
    calls: [],
    callStatusInfo: [],
    registeredAt: "",
    paidAt: "",
    readyAt: "",
    deliveredAt: "",
  }),
  actions: {
    async addCall() {
      const uid = auth.currentUser.uid;
      const callCollectionRef = collection(db, "calls");
      const resp = await addDoc(callCollectionRef, {
        callId: uid,
        userId: uid,
        memo: this.memo,
        createdAt: Timestamp.now(),
        patientName: this.patientName,
        patientMobile: this.patientMobile,
        jumin: this.jumin,
      });
      this.respStatusId = resp.id;
      alert(`${this.patientName}님, 비대면 접수되었습니다.`);
      console.log(`${this.patientName}님, ${resp.id} call added!`);
    },
    resetCall() {
      (this.memo = ""),
        (this.patientName = ""),
        (this.patientMobile = ""),
        (this.jumin = "");
    },
    getStatus() {
      const statusRef = doc(db, "calls", this.respStatusId);
      const unsub = onSnapshot(
        statusRef,
        (doc) => {
          let callStatusInfo = doc.data();
          callStatusInfo.id = doc.id;
          alert(`${this.patientName}님, 잠시 기다려 주세요`)
          console.log("Current data: ", doc.data());
          console.log("document ID: ", callStatusInfo.id);
          console.log("patientName: ", callStatusInfo.patientName);
          console.log("createdAt: ", callStatusInfo.createdAt);
          (this.createdAt = callStatusInfo.createdAt),
            console.log("this createdAt: ", this.createdAt);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
});
