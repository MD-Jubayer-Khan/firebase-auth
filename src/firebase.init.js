// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJGC1OocXUe5HgpzOXefAV2uTuMljbAg",
  authDomain: "fir-auth-91002.firebaseapp.com",
  projectId: "fir-auth-91002",
  storageBucket: "fir-auth-91002.appspot.com",
  messagingSenderId: "696348476173",
  appId: "1:696348476173:web:8ccc5b30014c547898a644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;