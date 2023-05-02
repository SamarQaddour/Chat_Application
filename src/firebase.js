
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAS1Q-7wR-o72gJDEjyoKNXvFvJYSbLIMc",
    authDomain: "numeric-nova-371512.firebaseapp.com",
    projectId: "numeric-nova-371512",
    storageBucket: "numeric-nova-371512.appspot.com",
    messagingSenderId: "56699621421",
    appId: "1:56699621421:web:ed22ef988777f7f780e8a4",
    measurementId: "G-ZF6F2Q033P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();