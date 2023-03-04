// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbkimxiMDeRFjBPkrURQPp1Pohi0aJUZ8",
    authDomain: "let-schat-178db.firebaseapp.com",
    projectId: "let-schat-178db",
    storageBucket: "let-schat-178db.appspot.com",
    messagingSenderId: "1053674500220",
    appId: "1:1053674500220:web:cf9e73fcc01b4c24b999f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);