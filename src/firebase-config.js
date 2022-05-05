import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIGwwIu3u2QL46lcH3bdggDc11s-Pi4cY",
  authDomain: "blog-project-intern.firebaseapp.com",
  projectId: "blog-project-intern",
  storageBucket: "blog-project-intern.appspot.com",
  messagingSenderId: "790022449746",
  appId: "1:790022449746:web:3fdf9a848b41d8502a8d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();