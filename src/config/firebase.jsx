import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQsBgA7MYhooRllhe3uulphEdnXN72N3U",
  authDomain: "yani-m.firebaseapp.com",
  projectId: "yani-m",
  storageBucket: "yani-m.appspot.com",
  messagingSenderId: "666953290590",
  appId: "1:666953290590:web:2bea2121001f9304ee35cf",
  measurementId: "G-M9BSM6CXFW",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
