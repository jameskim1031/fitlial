import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnG3jyJbmXv2Z532a6JwNnKDweMJK-RL8",
    authDomain: "fitlial-108df.firebaseapp.com",
    projectId: "fitlial-108df",
    storageBucket: "fitlial-108df.appspot.com",
    messagingSenderId: "710707444133",
    appId: "1:710707444133:web:1cd146366140891056504c"
  };

  initializeApp(firebaseConfig);
  const db = getFirestore();

export { db };