// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrGrat5nTQtT-sNqozFRDY7RHPcsa5n1M",
  authDomain: "unlink-out.firebaseapp.com",
  projectId: "unlink-out",
  storageBucket: "unlink-out.appspot.com",
  messagingSenderId: "526616918527",
  appId: "1:526616918527:web:6ebf3003e596e8b2598fca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
