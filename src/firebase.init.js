// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1A96g7zzRAebmS5gnecC1N6ewktjEow",
  authDomain: "my-todo-app-5605a.firebaseapp.com",
  projectId: "my-todo-app-5605a",
  storageBucket: "my-todo-app-5605a.appspot.com",
  messagingSenderId: "218583422575",
  appId: "1:218583422575:web:5208e6e9ea14b82d44df9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

