// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtynaJ6-7N8eTIAqSIF825gmcu0viEwZ4",
  authDomain: "coffee-store-b7830.firebaseapp.com",
  projectId: "coffee-store-b7830",
  storageBucket: "coffee-store-b7830.firebasestorage.app",
  messagingSenderId: "713939765129",
  appId: "1:713939765129:web:eaf49a2750cfffc8f14358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

