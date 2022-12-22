import { defineStore } from "pinia";
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase/init'
import router from "@/router/index";

export const useUserInfoStore = defineStore({
  id: "userInfoStore",
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
  }),
  actions: {    
    async updateUserInfo(){
      const user = auth.currentUser
      const uid = user.uid
      // const userEmail = user.email
      const userDocRef = doc(db, 'users', uid)
      await updateDoc(userDocRef, {
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
      }),
      console.log("updated userinfo!")
      alert('Your personal information are updated!')
      router.push("/overview") 
    },
  }
})
