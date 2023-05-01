import {initalizeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAS1Q-7wR-o72gJDEjyoKNXvFvJYSbLIMc",
    authDomain: "numeric-nova-371512.firebaseapp.com",
    projectId: "numeric-nova-371512",
    storageBucket: "numeric-nova-371512.appspot.com",
    messagingSenderId: "56699621421",
    appId: "1:56699621421:web:ed22ef988777f7f780e8a4",
    measurementId: "G-ZF6F2Q033P"
  };

  export const app = initalizeApp(firebaseConfig)
  export const auth = getAuth()