// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import App from "./App";



const firebaseConfig = {
  apiKey: "AIzaSyAofcnuZGKsqQlUjpKj1lKsX5YhR7bK1eY",
  authDomain: "react-chat-4ff15.firebaseapp.com",
  projectId: "react-chat-4ff15",
  storageBucket: "react-chat-4ff15.appspot.com",
  messagingSenderId: "197449064425",
  appId: "1:197449064425:web:068d87516da0f799fc3578"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);