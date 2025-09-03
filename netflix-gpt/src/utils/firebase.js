// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBamu5nSZKNMIgcsRry_rRR9ZsThKoHM8",
  authDomain: "route-reporter.firebaseapp.com",
  projectId: "route-reporter",
  storageBucket: "route-reporter.firebasestorage.app",
  messagingSenderId: "389754575789",
  appId: "1:389754575789:web:0dc181d0886f16000e5f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();