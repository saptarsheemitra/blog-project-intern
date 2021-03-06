// Import the functions you need from the SDKs you need
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpSKxfEPaOueAkzhaj0hLFJ0bAnipsDRU",
  authDomain: "test-project-cfaff.firebaseapp.com",
  projectId: "test-project-cfaff",
  storageBucket: "test-project-cfaff.appspot.com",
  messagingSenderId: "96082670963",
  appId: "1:96082670963:web:876db296d87306419e0106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();