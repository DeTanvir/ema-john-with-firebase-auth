// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcUlPlGp6mccR5Cpmk9rZYndOxE1a-few",
  authDomain: "ema-john-with-firebase-a-2ff42.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-2ff42",
  storageBucket: "ema-john-with-firebase-a-2ff42.appspot.com",
  messagingSenderId: "1004665355913",
  appId: "1:1004665355913:web:7a1b7e10a51980ee26d058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;