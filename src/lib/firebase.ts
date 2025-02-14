// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu-Sm15LBpHcy7Poocyn9Px4nMzAd4wHg",
  authDomain: "hotel-admin-b9552.firebaseapp.com",
  projectId: "hotel-admin-b9552",
  storageBucket: "hotel-admin-b9552.firebasestorage.app",
  messagingSenderId: "201492839005",
  appId: "1:201492839005:web:d1eb830d46219892adabb4",
  measurementId: "G-D9H2515XEN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);