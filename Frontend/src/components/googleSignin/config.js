import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdjdGt5TrD6u5euqhS98Lyn2_5R0NS3yA",
  authDomain: "humanity-dda00.firebaseapp.com",
  databaseURL: "https://humanity-dda00-default-rtdb.firebaseio.com",
  projectId: "humanity-dda00",
  storageBucket: "humanity-dda00.appspot.com",
  messagingSenderId: "996122596245",
  appId: "1:996122596245:web:65a479f840c1bca25d1c9c",
  measurementId: "G-SQTV9XSVQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{auth, provider,app};