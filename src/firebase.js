import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey : "AIzaSyA2irqsiwHC3FRWYjpHUoUMDRLXPcOtU_8" ,
    authDomain : "e-clone-d601a.firebaseapp.com" ,
    DatabaseURL : "https://e-clone-d601a.firebaseio.com" ,   
    projectId : "e-clone-d601a " ,   
    storageBucket : " e-clone-d601a.appspot.com " ,   
    messagingSenderId : " 478244591321 " ,   
    appId : " 1: 478244591321: web: f0dd509f2381efa7f310c8 " ,   
    measurementId : " G-FJB789KVQR "
});

const auth = firebase.auth();

export { auth};