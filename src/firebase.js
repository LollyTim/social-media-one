import { initializeApp } from "firebase/app";
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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
