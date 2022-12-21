import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
 
const firebaseConfig = {
    apiKey: "AIzaSyB0AX3rRDqVUMI8qhOKrF44AjjvsOck7Qo",
    authDomain: "chat-c0f58.firebaseapp.com",
    projectId: "chat-c0f58",
    storageBucket: "chat-c0f58.appspot.com",
    messagingSenderId: "391576928246",
    appId: "1:391576928246:web:8412e2a807b7e7727811d7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db =getFirestore()