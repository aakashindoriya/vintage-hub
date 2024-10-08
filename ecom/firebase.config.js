// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2z3rrtxUqm34wMI3Lu1hRRbCK_InHV20",
  authDomain: "vintage-hub-308b0.firebaseapp.com",
  projectId: "vintage-hub-308b0",
  storageBucket: "vintage-hub-308b0.appspot.com",
  messagingSenderId: "224367720453",
  appId: "1:224367720453:web:7cc5b6708df484ea27046c",
  measurementId: "G-DBEQK5KW5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);