import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpxV-BxZ1qlLnZTxD7Vfvn83O7ZEDTiFM",
  authDomain: "fitlial-1ad97.firebaseapp.com",
  projectId: "fitlial-1ad97",
  storageBucket: "fitlial-1ad97.appspot.com",
  messagingSenderId: "121824466708",
  appId: "1:121824466708:web:422b419a377ccb58571401",
  measurementId: "G-SQ8Y1NHND9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc };