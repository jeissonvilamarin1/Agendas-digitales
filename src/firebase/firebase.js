
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD4igC_ma5ZNIH8OHgdcWnTD65FOswwa40",
  authDomain: "agendas-digitales-4794d.firebaseapp.com",
  projectId: "agendas-digitales-4794d",
  storageBucket: "agendas-digitales-4794d.appspot.com",
  messagingSenderId: "228322766055",
  appId: "1:228322766055:web:c84235016cc65506d30642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();
const db = getFirestore();
export {
    app,
    google,
    facebook,
    db
}