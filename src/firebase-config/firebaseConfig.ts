// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz5kWHFB0NfYFMKJ4H8lzJybYV0pNUXTY",
  authDomain: "fir-chat-app-85ae9.firebaseapp.com",
  projectId: "fir-chat-app-85ae9",
  storageBucket: "fir-chat-app-85ae9.appspot.com",
  messagingSenderId: "310647265677",
  appId: "1:310647265677:web:b2eef0076e7490db8405c4",
  measurementId: "G-0XL5T2WDCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider;
export const db = getFirestore(app);