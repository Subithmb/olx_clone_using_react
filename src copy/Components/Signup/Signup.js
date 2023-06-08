import React, { useContext, useRef, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import  {FireBase,db}  from '../../firebase/config.jsx';
import { addDoc } from 'firebase/firestore';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';






export default function Signup() {
  const Navigate=useNavigate()


  // ..............................states...........................

  const { FireBase,db } = useContext(FirebaseContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  // .............................ref...........................

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPhone(phoneRef.current.value);
    setPassword(passwordRef.current.value);
    

    const auth = getAuth(FireBase);
createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((result) => {
    // Signed in 
   const user=result.username;

    addDoc(collection(db, "users"), {
      id:result.user.uid,
      email:emailRef.current.value,
      username:usernameRef.current.value,
      phone:phoneRef.current.value
    }).then(()=>{
      Navigate('/login')
    })
  
  })

  };

 
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />

        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            ref={usernameRef}
            type="text"
            id="fname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            ref={emailRef}
            type="email"
            id="fname"
            name="email"
           
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            ref={phoneRef}
            type="number"
            id="lname"
            name="phone"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            ref={passwordRef}
            type="password"
            id="lname"
            name="password"
           
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}