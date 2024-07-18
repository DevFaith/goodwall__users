import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDgui2qGTOoX-aC0F1chQoNjN-YSk_qCrk",
    authDomain: "goodwall-her.firebaseapp.com",
    projectId: "goodwall-her",
    storageBucket: "goodwall-her.appspot.com",
    messagingSenderId: "410865103185",
    appId: "1:410865103185:web:045adefce6251f9ed1a370",
    measurementId: "G-2M4ZQRLNRR"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, provider };
