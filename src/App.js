import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Home from './Pages/Home';
import View from './Pages/ViewPost'
import './App.css';
import Login from './Pages/Login';
import { AuthContext,FirebaseContext } from '../src/store/Context';
import Create from './Pages/Create'
import Post from './store/PostContext';
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
      <Post>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create/>} />
          <Route path='/view' element={<View/>} />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
