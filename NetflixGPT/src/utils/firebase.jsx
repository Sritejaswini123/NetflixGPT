
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBC7c9DjTbpVgZ7mfkmo0XSSkEvX4D_KuI",
  authDomain: "fir-netflix-d1e80.firebaseapp.com",
  projectId: "fir-netflix-d1e80",
  storageBucket: "fir-netflix-d1e80.appspot.com",
  messagingSenderId: "613856965408",
  appId: "1:613856965408:web:709d4887c8d3101fd9dd45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
 export const auth = getAuth();