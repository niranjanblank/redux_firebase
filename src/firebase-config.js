// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCuNNnh98nYHxgL4fyXqOYSXWCt4FWJ4hQ",
  authDomain: "test-5949b.firebaseapp.com",
  projectId: "test-5949b",
  storageBucket: "test-5949b.appspot.com",
  messagingSenderId: "370786180266",
  appId: "1:370786180266:web:e881d095313801588d44d3",
  measurementId: "G-V25EC0LPD0"
};
// console.log('env',process.env.apiKey_own)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)