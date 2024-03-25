// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUsKeZqpPvdg1oSSv9VWJ-pKoO1YwIu-o",
  authDomain: "netflixnew-428bc.firebaseapp.com",
  projectId: "netflixnew-428bc",
  storageBucket: "netflixnew-428bc.appspot.com",
  messagingSenderId: "378629958779",
  appId: "1:378629958779:web:26cd3d45e746d7042bc6de",
  measurementId: "G-M214MT0KY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 