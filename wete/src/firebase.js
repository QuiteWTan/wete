// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2EBeOeVKxoWQaHt2QO8q6ktJIHqceS4I",
  authDomain: "wete-d55e9.firebaseapp.com",
  projectId: "wete-d55e9",
  storageBucket: "wete-d55e9.appspot.com",
  messagingSenderId: "152409089147",
  appId: "1:152409089147:web:42f10253f45cc1dc756ede",
  measurementId: "G-K92DFW0LX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);