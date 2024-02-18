import {getFirestore} from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "mi-ecommerce-react-806c0.firebaseapp.com",
  projectId: "mi-ecommerce-react-806c0",
  storageBucket: "mi-ecommerce-react-806c0.appspot.com",
  messagingSenderId: "939837363272",
  appId: "1:939837363272:web:5240875480ea4f8764747d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);