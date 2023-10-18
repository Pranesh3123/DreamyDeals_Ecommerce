// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt1oWVrYcUv-o2UDaWJjr9Y9a8-M53jJc",
  authDomain: "e-commerce-c0820.firebaseapp.com",
  projectId: "e-commerce-c0820",
  storageBucket: "e-commerce-c0820.appspot.com",
  messagingSenderId: "452645382703",
  appId: "1:452645382703:web:de61e403a6a38f110334da",
  measurementId: "G-ZB0LRY2HKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
