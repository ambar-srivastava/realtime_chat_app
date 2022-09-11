import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmrFpmCTUOKEMIdGuLYU2FpuXF-HaMKbs",
  authDomain: "chat-application-aad5d.firebaseapp.com",
  projectId: "chat-application-aad5d",
  storageBucket: "chat-application-aad5d.appspot.com",
  messagingSenderId: "255018191987",
  appId: "1:255018191987:web:184d1852a5ad2b2c97ee06",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
