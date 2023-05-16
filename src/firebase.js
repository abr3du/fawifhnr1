// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { firebaseConfig } from './firebaseConfig'; // Update the path based on your file structure
//import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import 'firebase/firestore'
// Your web app's Firebase configuration
//

// Initialize Firebase
//export const db = getFirestore(initializeApp(firebaseConfig));
// initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig'; // Update the path based on your file structure
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
