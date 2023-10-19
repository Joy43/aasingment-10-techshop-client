// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgl0ge8zfWYohJ9sjT-7Gb3azGx-JTR4Y",
  authDomain: "asssingment-10-phone.firebaseapp.com",
  projectId: "asssingment-10-phone",
  storageBucket: "asssingment-10-phone.appspot.com",
  messagingSenderId: "616033130853",
  appId: "1:616033130853:web:c7f7610ca870f381c5698c",
  measurementId: "G-7MSJ7CT5J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;