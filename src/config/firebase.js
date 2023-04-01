// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmanMe6TPjxZfzU5YySejnlfNuhiHSQio",
  authDomain: "tiktok-clone-9827b.firebaseapp.com",
  projectId: "tiktok-clone-9827b",
  storageBucket: "tiktok-clone-9827b.appspot.com",
  messagingSenderId: "210888857066",
  appId: "1:210888857066:web:02958b788951c3ead2ce93",
  measurementId: "G-8Q78Y0H5E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;