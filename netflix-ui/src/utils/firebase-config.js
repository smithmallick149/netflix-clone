// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAismRyFv11IvzPzQDKVObbvC-r29yv-Qg",
  authDomain: "react-netflix-clone-7a3ed.firebaseapp.com",
  projectId: "react-netflix-clone-7a3ed",
  storageBucket: "react-netflix-clone-7a3ed.appspot.com",
  messagingSenderId: "153338188445",
  appId: "1:153338188445:web:e8e5e427247ee38abeba74",
  measurementId: "G-RLMY44M6QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)