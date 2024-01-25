// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9WueQysTY4zyyHrctSzA4t0wOzxU5rXU",
    authDomain: "naman-fc653.firebaseapp.com",
    projectId: "naman-fc653",
    storageBucket: "naman-fc653.appspot.com",
    messagingSenderId: "903277388867",
    appId: "1:903277388867:web:119f0b4a8c7b0d481fe0f6"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
