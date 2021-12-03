
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsuO1LiOI0_dmIgG6CTflwueY_Q3ikxSQ",
  authDomain: "agendas-digitales.firebaseapp.com",
  projectId: "agendas-digitales",
  storageBucket: "agendas-digitales.appspot.com",
  messagingSenderId: "993148329181",
  appId: "1:993148329181:web:cb9b28c395577536facf34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };