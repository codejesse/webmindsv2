// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOynCkEcyX65L7nAKRxorVFuGZMSAobvA",
  authDomain: "webminds-ace58.firebaseapp.com",
  projectId: "webminds-ace58",
  storageBucket: "webminds-ace58.appspot.com",
  messagingSenderId: "194474678896",
  appId: "1:194474678896:web:2bce913d0aae7ff5ad32b5",
  measurementId: "G-0TM2KG93P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;