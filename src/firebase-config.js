// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyARs73hUvVU5fbLoSOzCHq41KLA-8_Y1L4",
  authDomain: "react-firestore-a0cd3.firebaseapp.com",
  projectId: "react-firestore-a0cd3",
  storageBucket: "react-firestore-a0cd3.appspot.com",
  messagingSenderId: "775791956150",
  appId: "1:775791956150:web:c1dffb227b15d065671617",
  measurementId: "G-3JZ5KWNDQQ"
};
console.log('env',process.env.apiKey_own)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)