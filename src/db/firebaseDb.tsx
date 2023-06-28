import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: process.env.FIREBASE_KEY,
  authDomain: "cryptoguarantee-ce682.firebaseapp.com",
  projectId: "cryptoguarantee-ce682",
  storageBucket:  "cryptoguarantee-ce682.appspot.com",
  messagingSenderId: "484608967945",
  appId : "1:484608967945:web:35ec02008ebc94d22ebfd8"
}
// Initialize Firebase
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const myAuth = () => getAuth(app);
const myStorage = () => getStorage(app);
const myDb = () => getFirestore(app);

export const auth = myAuth();
export const storage = myStorage();
export const db = myDb();
