// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtYU9kblTvusrKrmrqqWc1jFNePmQgXuY",
  authDomain: "react-dragon-news-auth-7de17.firebaseapp.com",
  projectId: "react-dragon-news-auth-7de17",
  storageBucket: "react-dragon-news-auth-7de17.appspot.com",
  messagingSenderId: "1038637937052",
  appId: "1:1038637937052:web:8ee337e6d0180566fc5859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;