import firebase from 'firebase'
import {initializeApp} from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1V06eUHBO6Se667sditnksZgx1RJq3jI",
    authDomain: "fir-6aa9c.firebaseapp.com",
    projectId: "fir-6aa9c",
    storageBucket: "fir-6aa9c.appspot.com",
    messagingSenderId: "445965178453",
    appId: "1:445965178453:web:88c1d2355f2a2e3ed8a6dc",
    measurementId: "G-GNVGHCDTVJ"
  };
  const Firebase=firebase.initializeApp(firebaseConfig)
  export default Firebase