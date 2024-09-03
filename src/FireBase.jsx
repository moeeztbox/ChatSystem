// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrf-wp6-aCnXr7ReLRMG5XV7QHtJ-6uI",
  authDomain: "login-system-a1bcc.firebaseapp.com",
  projectId: "login-system-a1bcc",
  storageBucket: "login-system-a1bcc.appspot.com",
  messagingSenderId: "116250292054",
  appId: "1:116250292054:web:0c3c552368714b4078f0f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
