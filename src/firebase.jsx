import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "chatbuddy-b4bae.firebaseapp.com",
  projectId: "chatbuddy-b4bae",
  storageBucket: "chatbuddy-b4bae.appspot.com",
  messagingSenderId: "136301186050",
  appId: "1:136301186050:web:600154d1e054118026eb1b",
  measurementId: "G-3ZX8RVN2EE",
});


const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};

