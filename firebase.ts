// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2A6dcW7pG6MKsIDeCL6PCH8Pgg89y4PY",
  authDomain: "shopping-app-26275.firebaseapp.com",
  projectId: "shopping-app-26275",
  storageBucket: "shopping-app-26275.appspot.com",
  messagingSenderId: "754486028706",
  appId: "1:754486028706:web:356dda12760561250d6afb",
  measurementId: "G-0F1YXMELZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth();
export default app;