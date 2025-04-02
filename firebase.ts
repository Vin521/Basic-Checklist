import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB684ikdFrHjWaW4DqlcfHj2d6c9fEFUiA",
  authDomain: "task-manager-d5f49.firebaseapp.com",
  projectId: "task-manager-d5f49",
  storageBucket: "task-manager-d5f49.firebasestorage.app",
  messagingSenderId: "118208480386",
  appId: "1:118208480386:web:c2f1e35a46971b3375609b",
  measurementId: "G-BRMNX0FRZT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const db = getFirestore(app);
export {}