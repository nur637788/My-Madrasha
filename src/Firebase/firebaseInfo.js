
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhS-Pu1OsxrjyDQBN-Pp32uuCl-vw0k6A",
    authDomain: "my-madrasha-c2236.firebaseapp.com",
    projectId: "my-madrasha-c2236",
    storageBucket: "my-madrasha-c2236.firebasestorage.app",
    messagingSenderId: "1052232339625",
    appId: "1:1052232339625:web:95886f4282d7d56dbb19b8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);