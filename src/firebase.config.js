
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoVynzKn7edpo8YNdmwRI1dZThF23aFBg",
  authDomain: "deviceondemand.firebaseapp.com",
  projectId: "deviceondemand",
  storageBucket: "deviceondemand.appspot.com",
  messagingSenderId: "186056411642",
  appId: "1:186056411642:web:2279c3e190facbf74cfc43",
  measurementId: "G-6M6MJ34B8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore();