import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY0mhgtWS2xdiN3r7UxR_-l9WtGp5cOJY",
  authDomain: "firechat-fac01.firebaseapp.com",
  projectId: "firechat-fac01",
  storageBucket: "firechat-fac01.appspot.com",
  messagingSenderId: "813656180553",
  appId: "1:813656180553:web:55875b7dccee5769b0bc98",
  measurementId: "G-F4EGZ5Q6HG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
