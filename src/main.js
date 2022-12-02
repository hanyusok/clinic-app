import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/assets/css/nucleo-icons.css"
import "@/assets/css/nucleo-svg.css"

import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import SoftUIDashboard from "./soft-ui-dashboard";

const app = createApp(App)

// Initialize the FirebaseUI Widget using Firebase.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLkY7lcYWbqGdNORWUXOtjF2wF9uO6-aI",
  authDomain: "calldoctorapp-6c583.firebaseapp.com",
  projectId: "calldoctorapp-6c583",
  storageBucket: "calldoctorapp-6c583.appspot.com",
  messagingSenderId: "882125375872",
  appId: "1:882125375872:web:f07caf4bd20d3d2e1dd965"
};

// Initialize Firebase
initializeApp(firebaseConfig);





app.use(createPinia())
app.use(router)
app.use(VueTilt)
app.use(VueSweetalert2)
app.use(SoftUIDashboard)
app.mount('#app')
