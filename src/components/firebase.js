
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA5jKKd5Lb1BdoiaRmbvTT5HXRP6nmE68",
  authDomain: "login-auth-354ec.firebaseapp.com",
  projectId: "login-auth-354ec",
  storageBucket: "login-auth-354ec.appspot.com",
  messagingSenderId: "384773647485",
  appId: "1:384773647485:web:81663ffff6eec844d6d514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;