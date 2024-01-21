// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKOTNtpWTBdF1q6HgWgFu0Y_Fcm8ou09s",
  authDomain: "cruzhacks2024slugcare.firebaseapp.com",
  projectId: "cruzhacks2024slugcare",
  storageBucket: "cruzhacks2024slugcare.appspot.com",
  messagingSenderId: "347578673821",
  appId: "1:347578673821:web:90149c3b624851468cc274",
  measurementId: "G-CJTGF49QXP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();