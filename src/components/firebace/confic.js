// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQx8UNd52vmHqQXp0LyLHk2VX5QnEsP8k",
  authDomain: "test-app-a283d.firebaseapp.com",
  projectId: "test-app-a283d",
  storageBucket: "test-app-a283d.firebasestorage.app",
  messagingSenderId: "792479302416",
  appId: "1:792479302416:web:87486b3fe25c6024f69b95",
  measurementId: "G-W25Q9HPTNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);