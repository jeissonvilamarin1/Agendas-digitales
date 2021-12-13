
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "@firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCul7b04VRUszcnCowgJ7nfU-ay-Vcqbo0",
  authDomain: "agendadigital-f0067.firebaseapp.com",
  projectId: "agendadigital-f0067",
  storageBucket: "agendadigital-f0067.appspot.com",
  messagingSenderId: "342316041569",
  appId: "1:342316041569:web:f2be3cf71ef9d23728f120"
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