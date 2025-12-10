// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3E6ULbO6ZHKRxFQu1bHBNi3UnGLK1Pk4",
  authDomain: "netflix-ai-fd6bd.firebaseapp.com",
  projectId: "netflix-ai-fd6bd",
  storageBucket: "netflix-ai-fd6bd.firebasestorage.app",
  messagingSenderId: "18861636622",
  appId: "1:18861636622:web:5d5dc2072efcf80bdb505f",
  measurementId: "G-C3ZB9XGK03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase config:", firebaseConfig);
console.log("authDomain:", firebaseConfig?.authDomain);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
