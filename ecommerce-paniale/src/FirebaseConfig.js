// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy38i5dRxLKUza6MbVfD4Qor5AWMvO7HQ",
  authDomain: "cmk-ecommerce.firebaseapp.com",
  projectId: "cmk-ecommerce",
  storageBucket: "cmk-ecommerce.appspot.com",
  messagingSenderId: "26988093599",
  appId: "1:26988093599:web:8f3199d2f786f5ceaf02aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db