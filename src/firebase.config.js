import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import {getAuth} from "firebase/auth" ; 

=======
import {getAuth} from "firebase/auth"
>>>>>>> d46a41530265e37213024e10954c79ae4e81c9b0
const firebaseConfig = {
  apiKey: "AIzaSyCx4JJXlV-Sv9yE-oWN1e-BmzcUTmMGohQ",
  authDomain: "mock-interview-f6ffc.firebaseapp.com",
  projectId: "mock-interview-f6ffc",
  storageBucket: "mock-interview-f6ffc.appspot.com",
  messagingSenderId: "956521351511",
  appId: "1:956521351511:web:d5b20feb7b28db0f9c9612",
  measurementId: "G-91B0BTGQG4"
};
<<<<<<< HEAD



const app = initializeApp(firebaseConfig);
 export const auth = getAuth (app) ; 
=======
const app = initializeApp(firebaseConfig);
export const  auth =  getAuth () ; 

 
>>>>>>> d46a41530265e37213024e10954c79ae4e81c9b0
