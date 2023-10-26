

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_BAL)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDkjtUQySMeGKqj4ap_Y5q90Qzh8BxG3k",
  authDomain: "car-doctor-e87ae.firebaseapp.com",
  projectId: "car-doctor-e87ae",
  storageBucket: "car-doctor-e87ae.appspot.com",
  messagingSenderId: "1077067526283",
  appId: "1:1077067526283:web:513fd969cb9d400665248e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app