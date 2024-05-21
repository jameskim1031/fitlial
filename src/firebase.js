// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhrOaajy0c0EgUS5gqfyK2RHVvdGtRhhs",
    authDomain: "fitlial-app.firebaseapp.com",
    projectId: "fitlial-app",
    storageBucket: "fitlial-app.appspot.com",
    messagingSenderId: "560960705125",
    appId: "1:560960705125:web:49a6629c5d3130a8c02c8c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export default app;