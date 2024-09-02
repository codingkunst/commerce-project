// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmnsOWQBi-2xUwOuXCe6zzZuAOSeKvKw",
  authDomain: "commerce-82c28.firebaseapp.com",
  projectId: "commerce-82c28",
  storageBucket: "commerce-82c28.appspot.com",
  messagingSenderId: "72393865656",
  appId: "1:72393865656:web:43925ff5b3f6583033f74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
