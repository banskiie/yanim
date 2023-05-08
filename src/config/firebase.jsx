// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQsBgA7MYhooRllhe3uulphEdnXN72N3U",
  authDomain: "yani-m.firebaseapp.com",
  projectId: "yani-m",
  storageBucket: "yani-m.appspot.com",
  messagingSenderId: "666953290590",
  appId: "1:666953290590:web:2bea2121001f9304ee35cf",
  measurementId: "G-M9BSM6CXFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
