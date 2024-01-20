// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy4OdMBSlQrJ3sWJk9k0eqneXlHEbfXvg",
  authDomain: "slugcare.firebaseapp.com",
  projectId: "slugcare",
  storageBucket: "slugcare.appspot.com",
  messagingSenderId: "616712096577",
  appId: "1:616712096577:web:5c0caad284f676b1892fc0",
  measurementId: "G-0PCDEKK3ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





