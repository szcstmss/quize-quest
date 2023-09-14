// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyWfVBFwTn8IfVDqzFOeNxYKqdNAecWI",
  authDomain: "quizquest-ecb6d.firebaseapp.com",
  projectId: "quizquest-ecb6d",
  storageBucket: "quizquest-ecb6d.appspot.com",
  messagingSenderId: "11630667233",
  appId: "1:11630667233:web:faf191dbf66d2f00fc5ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//Firestore
export const db = getFirestore();