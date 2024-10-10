// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the getAuth function
import {getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
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

// Initialize Firebase Authentication
const auth = getAuth(app); // Create the auth object
const db=getFirestore(app)
// Export the auth object
export { auth ,db }; // Ensure to export it

