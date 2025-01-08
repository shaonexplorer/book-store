// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlUgppM-M2r5As6UdE9zixE-iA2gA___Q",
  authDomain: "book-store-85772.firebaseapp.com",
  projectId: "book-store-85772",
  storageBucket: "book-store-85772.firebasestorage.app",
  messagingSenderId: "486101874578",
  appId: "1:486101874578:web:98513587cc12406034b34b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
