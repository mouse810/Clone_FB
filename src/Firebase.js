// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyDDQ1SOOOqITdz6pAeQ75U2_xWXfs3l0dY",
  authDomain: "fb-clone-8f504.firebaseapp.com",
  projectId: "fb-clone-8f504",
  storageBucket: "fb-clone-8f504.appspot.com",
  messagingSenderId: "963207828533",
  appId: "1:963207828533:web:d5f2ab9eb3d20b57330d7c",
  measurementId: "G-PXCDELG80E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth()

export { auth }
export default db