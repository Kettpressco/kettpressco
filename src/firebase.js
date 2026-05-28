import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8kXzX5HQBSo-cmN2vaJCHgWd5lvCmPDk",
  authDomain: "kettpress-co.firebaseapp.com",
  projectId: "kettpress-co",
  storageBucket: "kettpress-co.appspot.com",
  messagingSenderId: "325957167425",
  appId: "1:325957167425:web:87988009858705f60f99c0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);