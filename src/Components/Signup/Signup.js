import React, { useRef, useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';



export default function Signup() {

  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const usernameRef=useRef(null)
  const emailRef=useRef(null)
  const phoneRef=useRef(null)
  const passwordRef=useRef(null)
  const {firebaseApp,db}=useContext(FirebaseContext)
  


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmail(emailRef.current.value)
    setPassword(passwordRef.current.value)
    setPhone(phoneRef.current.value)
    setUsername(usernameRef.current.value)

    const auth = getAuth(firebaseApp);

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {

        // Signed up 
        // const user = userCredential.user;

        addDoc(collection(db,"user"),{
          id:userCredential.user.uid,
          email,
          password,
          phone,
          username

        }).then(()=>{
            navigate('/login')
        })
        // ...
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
    
  };
  


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='' src={Logo}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
           ref={usernameRef}
          onChange={(e)=>{setUsername(e.target.value)}}
            type="text"
            id="fname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            ref={emailRef}
            onChange={(e)=>{setEmail(e.target.value)}}

            required
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            ref={phoneRef}
            
            onChange={(e)=>{setPhone(e.target.value)}}         
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            ref={passwordRef}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        {/* <a href=''>Login</a> */}
        <button>Login</button>
      </div>
    </div>
  );
}
