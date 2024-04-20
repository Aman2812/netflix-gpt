// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHK20oceXWDp4eF9U9SR6skJBW3Whz0s",
  authDomain: "netflixgpt-90e44.firebaseapp.com",
  projectId: "netflixgpt-90e44",
  storageBucket: "netflixgpt-90e44.appspot.com",
  messagingSenderId: "942963007784",
  appId: "1:942963007784:web:329c35aadbb798d5f8701d",
  measurementId: "G-NKCVMRSX9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();