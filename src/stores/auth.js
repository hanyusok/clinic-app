import { defineStore } from "pinia";
import router from "@/router/index";
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase/init'

export const useAuthStore = defineStore({
  id: "main",
  state: () => ({
    isLoggedIn: true,
    email: "",
    password: "",
    displayName: "",
    errorMessage: "",
  }),
  getters: {},
  actions: {
    register() {      
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {          
          const user = userCredential.user          
          updateProfile(auth.currentUser, {
            displayName: this.displayName
          })
          //user collection uuid + name insert
          const userCollectionRef = doc(db, 'users', user.uid)
          setDoc(userCollectionRef, {
            name: this.displayName
          })

          console.log(user)     
          alert('You are Registered!')
          router.push("/overview")          
        })
        .catch((error) => {
          const errorCode = error.code
          this.errorMessage = error.message
          alert(this.errorMessage)
        })
    },

    signIn() {      
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          alert("login successfully")
          router.push("/overview")
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          this.errorMessage = error.message
          alert(this.errorMessage)
        })
    },

    signout() {
      const auth = getAuth()
      signOut(auth).then(() => {
          alert("logout!!!")
        })
        .catch((error) => {
          const errorCode = error.code
          this.errorMessage = error.message
          alert(this.errorMessage)
        })
    }
  }
})
