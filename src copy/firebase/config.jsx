


      // import firebase from "firebase";
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
// import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD1V06eUHBO6Se667sditnksZgx1RJq3jI",
  authDomain: "fir-6aa9c.firebaseapp.com",
  projectId: "fir-6aa9c",
  storageBucket: "fir-6aa9c.appspot.com",
  messagingSenderId: "445965178453",
  appId: "1:445965178453:web:88c1d2355f2a2e3ed8a6dc",
  measurementId: "G-GNVGHCDTVJ"
};

 const FireBase =initializeApp(firebaseConfig)
 const db=getFirestore(FireBase)
 export {FireBase,db}


