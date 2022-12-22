import { computed, ref } from 'vue'
import { defineStore } from "pinia";
import router from "@/router/index";
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, query, onSnapshot, orderBy, setDoc, updateDoc, where } from 'firebase/firestore'
import { auth, db } from '@/firebase/init'
import { useAuthStore } from '@/stores/auth'

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

    // isLoggedIn: true,
  }),
  // setup(){
  //   const authStore = useAuthStore()
  //   return { authStore}
  // },
  // getters: {
        
  // }, 
  actions: {
    init(){
      // const userCollectionRef = collection(db, "users")
      // const q = query(userCollectionRef, orderBy("name"));
      // const q = query(userCollectionRef, auth.id);
      // const unsubscribe = onSnapshot(q, (snapshot) => {
      //   // const users = []
      //   snapshot.docChanges().forEach((change) => {
      //     let userChange = change.doc.data();
      //     userChange.id = change.doc.id;     
      //     if (change.type === "added") {
      //       console.log("user added : ", userChange);
      //       this.users.unshift(userChange);
      //     }
      //     if (change.type === "modified") {
      //       console.log("user modified: ", userChange);
      //       let index = this.users.findIndex((user) => user.id === userChange.id);
      //       Object.assign(this.users[index], userChange);
      //     }
      //     if (change.type === "removed") {
      //       console.log("user removed: ", userChange);
      //       let index = this.calls.findIndex((user) => user.id === userChange.id);
      //       this.users.splice(index, 1);
      //    }
      //  });
      //});    
      console.log('user collection initialized!') 
       
    },
    async updateUserInfo(){
      // const uid = this.authStore.userId
      const userDocRef = doc(db, 'users', 'xM4e6GZbJyduPJvxzag7')
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
  
      })
      console.log("updated userinfo!")
    },
    
    // async update(){
    //   const id = auth.id
    //   const userCollectionRef = collection(db, "users", id)
    //   await updateDoc(userCollectionRef, {
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     company: this.company,
    //     email: this.email,
    //     password: this.password,
    //     repassword: this.repassword,
    //     address1: this.address1,
    //     address2: this.address2,
    //     city: this.city,
    //     state: this.state,
    //     zip: this.zip,
    //     twitter: this.twitter,
    //     facebook: this.facebook,
    //     instagram: this.instagram,
    //     publicEmail: this.publicEmail,
    //     bio: this.bio
    //   })       

    // },
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
