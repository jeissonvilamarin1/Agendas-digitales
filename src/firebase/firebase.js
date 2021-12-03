
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBAzeexoEC2gJiee0oOFC9pbpWPJLoFzHQ",
  authDomain: "as-873c4.firebaseapp.com",
  projectId: "as-873c4",
  storageBucket: "as-873c4.appspot.com",
  messagingSenderId: "908092386692",
  appId: "1:908092386692:web:17290983159be21a6b41d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();
export {
    app,
    google,
    facebook
}