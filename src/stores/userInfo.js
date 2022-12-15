import { computed, ref } from 'vue'
import { defineStore } from "pinia";
import router from "@/router/index";
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, query, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase/init'

export const useUserInfoStore = defineStore({
  id: "userInfo",
  state: () => ({
    users: [],
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password:"",
    repassword: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    twitter: "",
    facebook: "",
    instagram: "",
    publicEmail: "",
    bio: ""

    // isLoggedIn: true,
  }),
  getters: {
    
  },
  actions: {
    async update(){
      const id = auth.id
      const userCollectionRef = collection(db, "users", id)
      await updateDoc(userCollectionRef, {
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        email: this.email,
        password: this.password,
        repassword: this.repassword,
        address1: this.address1,
        address2: this.address2,
        city: this.city,
        state: this.state,
        zip: this.zip,
        twitter: this.twitter,
        facebook: this.facebook,
        instagram: this.instagram,
        publicEmail: this.publicEmail,
        bio: this.bio
      })       

    },
    save() {      
    //   createUserWithEmailAndPassword(auth, this.email, this.password)
    //     .then((userCredential) => {          
    //       const user = userCredential.user          
    //       updateProfile(auth.currentUser, {
    //         displayName: this.displayName
    //       })
          //user collection uuid + name insert
        //   const userCollectionRef = doc(db, 'users', user.uid)
        //   setDoc(userCollectionRef, {
        //     name: this.displayName
        //   })

        //   console.log(user)     
        //   alert("Registered!")
        //   router.push("/overview")          
        // })
        // .catch((error) => {
        //   const errorCode = error.code
        //   this.errorMessage = error.message
        //   alert(this.errorMessage)
        // })
    },

    update() {      
    //   signInWithEmailAndPassword(auth, this.email, this.password)
    //     .then((userCredential) => {
    //       alert("login successfully")
    //       router.push("/overview")
    //       const user = userCredential.user
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code
    //       this.errorMessage = error.message
    //       alert(this.errorMessage)
    //     })
    },

    delete() {
    //   const auth = getAuth()
    //   signOut(auth).then(() => {
    //       alert("logout!!!")
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code
    //       this.errorMessage = error.message
    //       alert(this.errorMessage)
    //     })
    }
  }
})