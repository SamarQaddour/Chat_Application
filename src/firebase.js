
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAPQcabKtErRwp8kudzT8oiYTTQCXeYhjo",
    authDomain: "test-kfqf.firebaseapp.com",
    databaseURL: "https://test-kfqf-default-rtdb.firebaseio.com",
    projectId: "test-kfqf",
    storageBucket: "test-kfqf.appspot.com",
    messagingSenderId: "271131607345",
    appId: "1:271131607345:web:1b9d71108540b36f827010",
    measurementId: "G-3P1WVHDZ8W"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()