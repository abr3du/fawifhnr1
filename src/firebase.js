// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuTJYj3EHvLZc-JFvn1j5KZoq4lw4dE8g",
  authDomain: "fawifhnr1.firebaseapp.com",
  databaseURL: "https://fawifhnr1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fawifhnr1",
  storageBucket: "fawifhnr1.appspot.com",
  messagingSenderId: "519219479013",
  appId: "1:519219479013:web:47e8aaa2d4524aa6456f0c"
};

// Initialize Firebase
export const db = getFirestore(initializeApp(firebaseConfig));

