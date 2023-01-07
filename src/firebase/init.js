// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from 'firebase/functions'

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
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)      
const db = getFirestore(firebaseApp)
const functions = getFunctions(firebaseApp)

export { auth , db, functions }
