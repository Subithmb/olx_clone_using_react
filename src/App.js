import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Home from './Pages/Home';
import './App.css';
import Login from './Pages/Login';
import { AuthContext,FirebaseContext } from '../src/store/Context';
import Create from './Pages/Create'
// import { FirebaseContext } from './store/Context';
// import { FirebaseContext } from './store/Context';

// import { FireBase } from './firebase/config';
// import { FireBase } from '../src/firebase/config';







/**
 * ===== Import Components =====
 */

function App() {
  const{user,setUser}=useContext(AuthContext)
  // const{FirebaseContext}=useContext(FirebaseContext)
  
  useEffect(()=>{
    const auth = getAuth();
    

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
         const uid = user.uid;
        
      } else {
        // User is signed out
        
      }
    });

  })
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
