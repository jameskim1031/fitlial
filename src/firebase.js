// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpxV-BxZ1qlLnZTxD7Vfvn83O7ZEDTiFM",
  authDomain: "fitlial-1ad97.firebaseapp.com",
  projectId: "fitlial-1ad97",
  storageBucket: "fitlial-1ad97.appspot.com",
  messagingSenderId: "121824466708",
  appId: "1:121824466708:web:422b419a377ccb58571401",
  measurementId: "G-SQ8Y1NHND9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
