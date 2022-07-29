// Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmxUPOSoDfHbx2V-hIuXc_1nMG2zmVPI",
  authDomain: "mern-ecommerce-project-dd72e.firebaseapp.com",
  projectId: "mern-ecommerce-project-dd72e",
  storageBucket: "mern-ecommerce-project-dd72e.appspot.com",
  messagingSenderId: "993020007605",
  appId: "1:993020007605:web:57b5d24263de83f645dafc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 